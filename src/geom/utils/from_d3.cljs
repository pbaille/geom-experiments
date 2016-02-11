(ns geom.utils.from-d3
  (:require cljsjs.d3
            [thi.ng.geom.core.vector :as v :refer [vec2 vec2?]]))

(defn voronoi
  ([a b]
   (cond
     (and (number? a)(number? b)) (voronoi 0 0 a b)
     (and (vec2? a)(vec2? b)) (voronoi (:x a) (:y a)(:x b) (:y b))))
  ([x1 y1 x2 y2]
   (let [vor (.clipExtent
               ((.. js/d3 -geom -voronoi))
               (clj->js [[x1 y1]
                         [x2 y2]]))]
     (fn [points]
       (map (fn [poly seed] {:seed seed :polygon (map vec2 poly)})
            (js->clj (vor (clj->js (mapv (juxt :x :y) points))))
            points)))))

(defn clipped-voronoi
  "return a fn that takes seq of vec2s and return a
   voronoi diagram constrained in the given polygon (convex and counterclockwise)"
  [pts]
  (let [xs (map first pts)
        ys (map second pts)
        max-x (apply max xs)
        max-y (apply max ys)
        min-x (apply min xs)
        min-y (apply min ys)
        cpol (js/d3.geom.polygon (clj->js pts))
        vor (.clipExtent
              ((.. js/d3 -geom -voronoi))
              (clj->js [[min-x min-y]
                        [max-x max-y]]))]
    (fn [points]
      (map (fn [poly seed] {:seed seed :polygon (map vec2 poly)})
           (js->clj
             (.map (vor (clj->js (mapv (juxt :x :y) points)))
                   #(.clip cpol (js/d3.geom.polygon %))))
           points))))

(comment
  (let [cv (clipped-voronoi (reverse [[0 50] [50 0] [100 50] [75 100] [25 100]]))
        xs (cv (map vec2 [[25 30] [75 30] [50 75]]))]))

(defn n-polate [n]
  (fn [v1 v2]
    (mapv
      (fn [x]
        (vec2 (/ (+ (* (- n x) (:x v1)) (* x (:x v2))) n)
              (/ (+ (* (- n x) (:y v1)) (* x (:y v2))) n)))
      (range n))))

(comment
  (map vec ((n-polate 3) (vec2 0 0) (vec2 3 3))))

(defn polygon->line [pts n-pol]
  (let [line (.. js/d3 -svg line (interpolate "basis-closed"))
        pairs (map vector (cons (last pts) pts) pts)
        points (mapcat (fn [[a b]] ((n-polate n-pol) a b)) pairs)]
    (line (clj->js points))))

(comment
  (polygon->line (map (partial apply vec2) [[0 1] [1 0] [0 -1] [-1 0]]) 3)
  (let [tp (fn [[[x0 y0] [x1 y1]]]
             [[x0 y0]
              [(/ (+ (* 2 x0) x1) 3), (/ (+ (* 2 y0) y1) 3)]
              [(/ (+ (* 2 x1) x0) 3), (/ (+ (* 2 y1) y0) 3)]])]
    (tp [[0 0] [3 3]])))

