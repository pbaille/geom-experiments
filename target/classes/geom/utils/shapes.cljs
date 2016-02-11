(ns geom.utils.shapes
  (:require [thi.ng.geom.core.vector :as v :refer [vec2]]
            [thi.ng.geom.webgl.animator :refer [animate]]
            [thi.ng.geom.core :as g]
            [geom.utils.prob :as p :refer [realize]]
            [geom.utils.from-d3 :as fd3]
            [thi.ng.math.core :as m]))

(defn regular-polygon [[x y] n & [sizes]]
  (let [[xmax ymax] (cond (vector? sizes) sizes
                          (number? sizes) [sizes sizes]
                          :else [1 1])
        τ (* 2 Math/PI)]
    (mapv (fn [θ] (vec2 (+ x (* xmax (Math/cos θ)))
                        (+ y (* ymax (Math/sin θ)))))
          (range 1e-6 τ (/ τ n)))))

(defn rotate-point [[ox oy] [tx ty :as t] angle]
  (let [c (Math/cos angle)
        s (Math/sin angle)]
    (assoc t :x (+ (* c (- tx ox)) (- (* s (- ty oy))) ox)
             :y (+ (* s (- tx ox)) (* c (- ty oy)) oy))))

(defn rotating-points [o dθ points]
  (let [ps (atom points)]
    (animate
      (fn [_]
        (reset! ps (mapv #(rotate-point o % dθ) @ps))
        true))
    ps))

;; flower ----------------------------------------------------

(defn- rotating-flower [f]
  (assoc f :lrs (map (fn [{:keys [points speed] :as lr
                           :or   {speed (m/random -0.05 0.05)}}]
                       (assoc lr :points (rotating-points (:origin f) speed points)))
                     (:lrs f))))

(defn flower [{:keys [origin lrs rotating?] :as flower
               :or   {origin (vec2 0 0)}}]
  (let [f (assoc flower :lrs
                        (mapv (fn [{:keys [idx radius petals] :as lr}]
                                (let [r (rand Math/PI)]
                                  (assoc lr :points
                                            (mapv #(rotate-point origin % r)
                                                  (regular-polygon origin petals radius)))))
                              lrs))]
    (if rotating? (rotating-flower f) f)))

(defn flower-lr [petals radius & [others]]
  (merge (or others {})
         {:petals (realize petals)
          :radius (realize radius)}))

(defn flower-lrs [& xs]
  (map-indexed (fn [idx args] (assoc (apply flower-lr args) :idx idx))
               xs))

(comment
  (flower-lrs [(p/randge 3 4) (p/randge 15 30)]
              [(p/randge 5 7) (p/randge 30 60)])
  (flower
    {:origin [100 100]
     :lrs    (flower-lrs [[3 10] [5 20] [7 40]])}))

(defn ensure-derefed [x] (if (satisfies? IDeref x) @x x))

(defn flower->voronoi [vor-args f]
  (let [lrs (map (fn [lr]
                   (assoc lr :points
                             (map (fn [[x y]] {:x x :y y :lr lr})
                                  (ensure-derefed (:points lr)))))
                 (:lrs f))]
    ((apply fd3/voronoi vor-args) (mapcat :points lrs))))

(defn flowers->voronoi [vor-args & fs]
  (let [vfn (apply fd3/voronoi vor-args)]
    (vfn (mapcat (fn [lr]
                   (map (fn [[x y]] {:x x :y y :lr lr})
                        (ensure-derefed (:points lr))))
                 (mapcat (fn [f] (map #(assoc % :flower (:id f)) (:lrs f))) fs)))))




