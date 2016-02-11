(ns geom.NOC.vectors
  (:require
    [thi.ng.math.core :as m]
    [thi.ng.math.simplexnoise :refer [noise1 noise2]]
    [thi.ng.geom.core :as g]
    [thi.ng.geom.core.vector :as v :refer [vec2]]
    [thi.ng.geom.circle :as c]
    [thi.ng.geom.svg.core :as svg]
    [thi.ng.geom.webgl.animator :refer [animate]]
    [thi.ng.domus.core :as dom]
    [geom.NOC.utils :as u]))

(enable-console-print!)

(def mouse-pos (atom (vec2)))

(defn mouse-position-tracker [selector]
  (let [ret (atom (vec2 0 0))]
    (.addEventListener (dom/query nil selector)
                       "mousemove"
                       (fn [e]
                         (reset! ret (vec2 (.-layerX e) (.-layerY e)))))
    ret))



(defn bouncing-mover [r]
  (let [width 1000
        height 500
        m (atom {:pos (vec2 (m/random r (- width r))
                            (m/random r (- height r)))
                 :vel (vec2 (m/random -4 4)
                            (m/random -4 4))
                 :acc (vec2 0 1)})
        next (fn []
               (let [{:keys [pos acc]} @m
                     [x y] pos]

                 (cond
                   (> x (- width r)) (swap! m assoc-in [:pos :x] (- width r))
                   (> y (- height r)) (swap! m assoc-in [:pos :y] (- height r))
                   (< x r) (swap! m assoc-in [:pos :x] r)
                   (< y r) (swap! m assoc-in [:pos :y] r))

                 (cond
                   (not (< r (get-in @m [:pos :x]) (- width r))) (swap! m update-in [:vel :x] -)
                   (not (< r (get-in @m [:pos :y]) (- height r))) (swap! m update-in [:vel :y] -))

                 (swap! m update-in [:vel] #(g/limit (g/+ % acc) 10))
                 (swap! m update-in [:pos] g/+ (:vel @m))))]

    (u/init-svg! "#app" [width height])

    (animate
      (fn [[t frame]]
        (next)
        (->> (dom/query nil "svg")
             (dom/clear!)
             (dom/create-dom!
               (svg/circle (:pos @m) r)))
        true))))

(comment (bouncing-mover 60))

(defn mouse-tracker [r]
  (let [width 1000
        height 500

        _ (u/init-svg! "#app" [width height])

        mpos (mouse-position-tracker "svg")

        m (atom {:pos (vec2 (m/random r (- width r))
                            (m/random r (- height r)))
                 :vel (vec2 (m/random -4 4)
                            (m/random -4 4))
                 :acc (vec2 0 0.2)})
        next (fn []
               (swap! m update-in [:acc] #(g/limit (g/+ % (g/limit (g/- @mpos (:pos @m)) 0.3)) 4))
               (swap! m update-in [:vel] #(g/limit (g/+ % (:acc @m)) 4))
               (swap! m update-in [:pos] g/+ (:vel @m)))]

    (animate
      (fn [[t frame]]
        (next)
        (->> (dom/query nil "svg")
             (dom/clear!)
             (dom/create-dom!
               (svg/circle (:pos @m) r)))
        true))))

(comment (mouse-tracker 23))

(defn mouse-trackers [n r]
  (let [width 1000
        height 500

        _ (u/init-svg! "#app" [width height])

        mpos (mouse-position-tracker "svg")

        ms (repeatedly n #(atom {:pos (vec2 (m/random r (- width r))
                                            (m/random r (- height r)))
                                :vel (vec2 0 0)
                                :acc (vec2 0 0)}))
        next (fn [m]
               (let [dir (g/* (g/normalize (g/- @mpos (:pos @m))) 0.1)]
                 (swap! m assoc :acc dir)
                 (swap! m update-in [:vel] #(g/limit (g/+ % (:acc @m)) 4))
                 (swap! m update-in [:pos] g/+ (:vel @m))))]

    (animate
      (fn [[t frame]]
        (mapv next ms)
        (->> (dom/query nil "svg")
             (dom/clear!)
             (dom/create-dom!
               (svg/group
                 {:fill "rgba(0,0,0,0.2)"}
                 (map #(svg/circle (:pos (deref %)) r) ms))))
        true))))

(comment (mouse-trackers 20 23))