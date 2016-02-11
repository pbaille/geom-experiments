(ns geom.NOC.intro
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

(defn walker [max-x max-y]
  (vec2 (int (m/random 0 max-x))
        (int (m/random 0 max-y))))

(defn rand-step [w]
  (g/+ w
       (condp = (rand-nth [:up :dwn :left :right])
         :up (vec2 0 1)
         :dwn (vec2 0 -1)
         :left (vec2 -1 0)
         :right (vec2 1 0))))

(defn rand-walker []
  (let [width 500
        height 500
        root (dom/by-id "app")
        walker (atom (walker width height))
        step-picker (u/weight-picker {[1 0]  2
                                      [0 1]  2
                                      [-1 0] 1
                                      [0 -1] 3})]
    (animate
      (fn [[t frame]]
        (swap! walker #(g/+ % (step-picker)))
        (->> root
             (dom/clear!)
             (dom/create-dom!
               (svg/svg
                 {:width width :height height}
                 (svg/group
                   {:stroke-width 1}
                   (svg/circle @walker 10)))))
        true))))

(defn noise-viz1 [ninc]
  (let [width 1000
        height 500
        noise-inc ninc
        noise-idx (atom (m/random 1000 10000))
        x (atom 0)]

    (u/init-svg! "#app" [width height])

    (animate
      (fn [[t frame]]
        (swap! noise-idx + noise-inc)
        (swap! x inc)
        (->> (dom/query nil "svg")
             (dom/create-dom!
               (svg/circle [@x (+ (/ height 2)(* (noise1 @noise-idx) (/ height 2)))] 2)))
        (< @x width)))))

(comment (noise-viz1 0.0123))

(defn noise-walker [i1 i2]
  (let [width 1000
        height 500
        sx (atom (u/noise-seq [0 width] i1))
        sy (atom (u/noise-seq [0 height] i2))]

    (u/init-svg! "#app" [width height])

    (animate
      (fn [[t frame]]
        (swap! sx next)
        (swap! sy next)
        (->> (dom/query nil "svg")
             (dom/clear!)
             (dom/create-dom!
               (svg/circle [(first @sx) (first @sy)] 25)))
        true))))

(comment (noise-walker 0.0123 0.023))





