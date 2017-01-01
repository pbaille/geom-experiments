(ns geom.sketches.voronoi1
  (:require
    [thi.ng.color.core :as c]
    [thi.ng.color.presets :as cp]
    [thi.ng.math.core :as m]
    [thi.ng.geom.core :as g]
    [thi.ng.geom.polygon :as polygon]
    [thi.ng.geom.mesh.delaunay :refer [triangulate]]
    [thi.ng.geom.core.vector :as v :refer [vec2]]
    [thi.ng.geom.svg.core :as svg]
    [thi.ng.geom.webgl.animator :refer [animate]]
    [thi.ng.domus.core :as dom]
    [geom.utils.from-d3 :refer [clipped-voronoi voronoi polygon->line]]
    [geom.utils.prob :as p]
    [geom.utils.colors :refer [grad-palette]]
    [geom.utils.svg :refer [init-svg!]]))

(def pinks
  (grad-palette (cp/preset-css :light-coral) (c/css "#FAFAFA") 20))

(def blues
  (grad-palette (cp/preset-css :light-skyblue) (c/css "#FAFAFA") 20))

(def palette (concat (take 3 pinks) blues))

(defn rand-particles [n [width height] & [pal]]
  (repeatedly n #(with-meta (vec2 (m/random 0 width) (m/random 0 height))
                            {:color @(rand-nth (or pal palette))})))

(defn rand-voro [{:keys [n width height]}]
  (let [vor ((voronoi width height) (rand-particles n [width height]))]

    (->> (init-svg! "#app" [width height])
         (dom/create-dom!
           (svg/group {:stroke "none" :fill "white"}
                      (map #(let [c (:color (meta (:seed %)))]
                             (svg/polygon (:polygon %) {:fill c :stroke c}))
                           vor))))))

(comment (rand-voro {:width 1000 :height 500 :n 100}))

(defn moving-voro [{:keys [n width height]}]
  (let [seeds (atom (rand-particles n [width height]))
        vorfn (voronoi width height)
        svg (init-svg! "#app" [width height])]

    (animate (fn [_]
               (swap! seeds
                      (fn [ps]
                        (mapv #(g/+ % (vec2 (m/random -1 1) (m/random -1 1)))
                              ps)))
               (let [vor (vorfn @seeds)]
                 (->> svg
                      (dom/clear!)
                      (dom/create-dom!
                        (svg/group {:stroke "black" :fill "white"}
                                   (map #(let [c (:color (meta (:seed %)))]
                                          (svg/polygon (:polygon %) {:fill c :stroke c}))
                                        vor)))))
               true))))

(comment (moving-voro {:width 1000 :height 500 :n 100}))

(defn moving-voro2 [{:keys [n width height]}]
  (let [seeds (atom (rand-particles n [width height]))
        vorfn (voronoi width height)
        svg (init-svg! "#app" [width height])]

    (animate (fn [_]
               (swap! seeds
                      (fn [ps]
                        (mapv #(g/+ % (vec2 (m/random -1 1) (m/random -1 1)))
                              ps)))
               (let [vor (vorfn @seeds)]
                 (->> svg
                      (dom/clear!)
                      (dom/create-dom!
                        (svg/group {:stroke "black" :fill "white"}
                                   (map #(let [c (:color (meta (:seed %)))]
                                          [:path {:d (polygon->line (:polygon %) 3) :fill c :stroke c}])
                                        vor)))))
               true))))

(comment (moving-voro2 {:width 1000 :height 500 :n 100}))

(defn vec2-noise-seq [[xscope yscope] agitation]
  (let [n? (number? agitation)
        ax (if n? agitation (first agitation))
        ay (if n? agitation (second agitation))
        xscope (if (vector? xscope) xscope [0 xscope])
        yscope (if (vector? yscope) yscope [0 yscope])]
    (map vec2
         (p/noise-seq xscope ax)
         (p/noise-seq yscope ay))))

(defn moving-voro3 [{:keys [n width height]}]
  (let [seeds (atom (repeatedly
                      n
                      (fn [] (let [c {:color @(rand-nth (take-nth 2 blues))}]
                               (map #(with-meta % c)
                                    (vec2-noise-seq [width height] 0.005))))))
        vorfn (voronoi width height)
        svg (init-svg! "#app" [width height])]

    (animate (fn [_]
               (swap! seeds #(mapv next %))
               (let [vor (vorfn (mapv first @seeds))]
                 (->> svg
                      (dom/clear!)
                      (dom/create-dom!
                        (svg/group {:stroke "black" :fill "white"}
                                   (map #(let [c (:color (meta (:seed %)))]
                                          [:path {:d (polygon->line (:polygon %) 3) :fill c :stroke c}])
                                        vor)))))
               true))))

(comment (moving-voro3 {:width 1000 :height 300 :n 130}))

(defn no-exit1 [w h]
  (fn [v2]
    (let [[x y] ((juxt :x :y) v2)]
      (cond
        (> x w) (assoc v2 :x 0)
        (> 0 x) (assoc v2 :x w)
        (> y h) (assoc v2 :y 0)
        (> 0 y) (assoc v2 :y h)
        :else v2))))

(defn no-exit2 [w h]
  (fn [v2]
    (let [[x y] ((juxt :x :y) v2)]
      (cond
        (> x w) (assoc v2 :x w)
        (> 0 x) (assoc v2 :x 0)
        (> y h) (assoc v2 :y h)
        (> 0 y) (assoc v2 :y 0)
        :else v2))))

(defn blue-scaler [area]
  (c/blend
    (cp/preset-css :dark-violet)
    (nth pinks 10)
    (m/map-interval-clamped (m/abs area) [0 5000] [0 1])))

(defn moving-voro4 [{:keys [n width height]}]
  (let [seeds (atom (vec (rand-particles n [width height])))
        mv-seqs (atom (vec (repeatedly n #(vec2-noise-seq [[-5 5] [-5 5]] 0.01))))
        vorfn (voronoi width height)
        svg (init-svg! "#app" [width height])
        guard (no-exit2 width height)]

    (animate (fn [_]
               (swap! mv-seqs #(mapv next %))
               (swap! seeds (fn [ss] (mapv (comp guard g/+) ss (mapv first @mv-seqs))))
               (let [vor (vorfn @seeds)]
                 (->> svg
                      (dom/clear!)
                      (dom/create-dom!
                        (svg/group {:stroke "black" :fill "white"}
                                   (keep #(when (seq (:polygon %))
                                           (let [c @(blue-scaler (g/area (polygon/polygon2 (:polygon %))))]
                                             (svg/polygon (:polygon %) {:fill c :stroke @(cp/preset-css :dark-violet)})
                                             #_[:path {:d (polygon->line (:polygon %) 3) :fill c :stroke @(cp/preset-css :dark-violet)}]))
                                         vor)))))
               true))))

(comment (moving-voro4 {:width 800 :height 200 :n 150}))

(defn moving-voro5 [{:keys [n width height]}]
  (let [seeds (atom (vec (rand-particles n [width height])))
        mv-seqs (atom (vec (repeatedly n #(vec2-noise-seq [[-5 5] [-5 5]] 0.01))))
        vorfn (voronoi width height)
        svg (init-svg! "#app" [width height])
        guard (no-exit2 width height)]

    (animate (fn [_]
               (swap! mv-seqs #(mapv next %))
               (swap! seeds (fn [ss] (mapv (comp guard g/+) ss (mapv first @mv-seqs))))
               (let [vor (vorfn @seeds)]
                 (->> svg
                      (dom/clear!)
                      (dom/create-dom!
                        (svg/group {:stroke "black" :fill "white"}
                                   (map #(let [c (:color (meta (:seed %)))]
                                          (svg/polygon (:polygon %) {:fill c :stroke "white" :stroke-width "2px"})
                                          #_[:path {:d (polygon->line (:polygon %) 3) :fill c :stroke c}])
                                        vor)))))
               true))))

(comment (moving-voro5 {:width 600 :height 600 :n 100}))

(defn moving-voro6 [{:keys [n-calm n-nervous width height]}]
  (let [state (atom {:calm-seeds    (vec (rand-particles n-calm [width height] blues))
                     :calm-seqs     (vec (repeatedly n-calm #(vec2-noise-seq [[-2 2] [-2 2]] 0.001)))
                     :nervous-seeds (vec (rand-particles n-nervous [width height] (take 3 pinks)))
                     :nervous-seqs  (vec (repeatedly n-nervous #(vec2-noise-seq [[-10 10] [-10 10]] 0.1)))})
        vorfn (voronoi width height)
        svg (init-svg! "#app" [width height])
        guard (no-exit2 width height)]

    (animate (fn [_]
               (swap! state update-in [:nervous-seqs] #(mapv next %))
               (swap! state update-in [:calm-seqs] #(mapv next %))
               (swap! state update-in [:calm-seeds] (fn [ss] (mapv (comp guard g/+) ss (mapv first (:calm-seqs @state)))))
               (swap! state update-in [:nervous-seeds] (fn [ss] (mapv (comp guard g/+) ss (mapv first (:nervous-seqs @state)))))
               (let [vor (vorfn (concat (:calm-seeds @state) (:nervous-seeds @state)))]
                 (->> svg
                      (dom/clear!)
                      (dom/create-dom!
                        (svg/group {:stroke "black" :fill "white"}
                                   (map #(let [c (:color (meta (:seed %)))]
                                          (svg/polygon (:polygon %) {:fill c :stroke "white" :stroke-width "2px"})
                                          #_[:path {:d (polygon->line (:polygon %) 3) :fill c :stroke c}])
                                        vor)))))
               true))))

(comment
  (moving-voro6 {:width 600 :height 200 :n-calm 200 :n-nervous 3}))


(comment
  (require '[thi.ng.geom.rect :as r])
  (->> (init-svg! "#app" [1000 1000])
       (dom/clear!)
       (dom/create-dom!
         (svg/group {:stroke "black" :fill "white"}
                    (map (comp svg/polygon) (g/tessellate (polygon/polygon2 [[0 50] [50 0] [100 50] [75 100] [25 100]])))
                    (map (comp svg/polygon) (map (comp g/tessellate polygon/polygon2)
                                                 (g/tessellate (polygon/polygon2 [[100 200] [300 200] [400 500] [0 500]])))))))

  (let [cv (clipped-voronoi (reverse [[0 50] [50 0] [100 50] [75 100] [25 100]]))
        xs (cv (map vec2 [[25 30] [75 30] [50 75]]))]
    (->> (init-svg! "#app" [1000 1000])
         (dom/clear!)
         #_(dom/create-dom!
             [:defs [:clipPath {:id "myClip"}
                     [:circle {:cx 50 :cy 50 :r 30}]]])

         (dom/create-dom!
           (list

             [:defs [:clipPath {:id "myClip"} [:circle {:cx 50 :cy 50 :r 10}]]]
             #_(svg/defs (svg/instance "clipPath" {:id "myClip"} (svg/circle [50 50] 10)))
             (svg/group {:stroke "black" :fill "white" :style "-webkit-clip-path: polygon(25px 25px, 75px 25px, 75px 75px , 25px 75px)"}
                        (map (comp svg/polygon :polygon) xs)))))))
