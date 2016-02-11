(ns geom.one
  (:require
    [thi.ng.geom.core :as g]
    [thi.ng.math.core :as m]
    [thi.ng.geom.core.vector :as v :refer [vec2]]
    [thi.ng.geom.circle :as c]
    [thi.ng.geom.svg.core :as svg]
    [thi.ng.geom.webgl.animator :refer [animate]]
    [thi.ng.domus.core :as dom]))

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

(defn weight-picker
  "takes a map of type object -> prob"
  [m]
  (let [sums (reductions + 0 (vals m))
        parts (map #(hash-map :obj %1 :min (first %2) :max (second %2))
                   (keys m)
                   (partition 2 1 sums))]
    (fn f
      ([]
       (let [x (rand (last sums))
             l (first (filter #(m/in-range? [(:min %)(:max %)] x) parts))]
         (:obj l)))
      ([x] (take x (repeatedly f))))))

(defn prob-step [w]
  (g/+ w (weight-picker {[1 0] 2
                         [0 1] 2
                         [-1 0] 1
                         [0 -1] 3})))

(defn launch-walker []
  (let [width 500
        height 500
        root (dom/by-id "app")
        walker (atom (walker width height))
        step-picker (weight-picker {[1 0] 2
                                    [0 1] 2
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

(comment
  (launch-walker))

