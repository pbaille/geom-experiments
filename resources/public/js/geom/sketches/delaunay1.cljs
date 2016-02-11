(ns geom.sketches.delaunay1
  (:require
    [thi.ng.color.core :as c]
    [thi.ng.color.presets :as cp]
    [thi.ng.math.core :as m]
    [thi.ng.math.simplexnoise :refer [noise1 noise2]]
    [thi.ng.geom.core :as g]
    [thi.ng.geom.mesh.delaunay :refer [triangulate]]
    [thi.ng.geom.core.vector :as v :refer [vec2]]
    [thi.ng.geom.svg.core :as svg]
    [thi.ng.geom.webgl.animator :refer [animate]]
    [thi.ng.domus.core :as dom]
    [geom.NOC.utils :as u]))

(defn grad-palette [c1 c2 n]
  (mapv
    (fn [x] (c/blend c1 c2 x))
    (range 0 1 (/ n))))

(defn triangulation [{:keys [n width height]}]
  (let [points (repeatedly n #(vec2 (m/random 0 width) (m/random 0 height)))
        triangles (triangulate points)
        palette (grad-palette (cp/preset-css :light-coral) (c/css "#FAFAFA") 10)]

    (->> (u/init-svg! "#app" [width height])
         (dom/create-dom!
           (svg/group {:stroke "none" :fill "white"}
                      (map #(let [c @(rand-nth palette)]
                             (svg/polygon % {:fill c :stroke c}))
                           triangles))))))

#_(triangulation
    {:width  1000
     :height 500
     :n      100})

(defn moving-triangulation [{:keys [n width height]}]
  (let [points (atom (repeatedly n #(vec2 (m/random 0 width) (m/random 0 height))))
        palette (grad-palette (cp/preset-css :light-coral) (c/css "#FAFAFA") 10)
        svg (u/init-svg! "#app" [width height])]

    (animate (fn [_]
               (swap! points (fn [ps] (mapv #(g/+ (vec2 (m/random -1 1) (m/random -1 1)) %) ps)))
               (let [triangles (triangulate @points)]
                 (->> svg
                      (dom/clear!)
                      (dom/create-dom!
                        (svg/group {:stroke "black" :fill "white"}
                                   (map #(let [c @(rand-nth palette)]
                                          (svg/polygon %))
                                        triangles)))))
               true))))

(comment
  (moving-triangulation
    {:width  1000
     :height 500
     :n      100}))