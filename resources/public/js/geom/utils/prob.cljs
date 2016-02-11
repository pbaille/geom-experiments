(ns geom.utils.prob
  (:require [thi.ng.math.simplexnoise :as simplex]
            [thi.ng.math.core :as m]))

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

(defn noise1 [x]
  (m/map-interval (simplex/noise1 x) [-0.632 0.632] [-1 1]))

(defn noise-seq [output-range increment & [seed]]
  (map #(m/map-interval % [-0.632 0.632] output-range)
       (map simplex/noise1
            (iterate (partial + increment)
                     (or seed (rand 1000000))))))

(defn randge [a b]
  (let [int? (every? integer? [a b])
        f (if int? #(m/roundto % 1) identity)]
    (fn []
      (f (m/random a b)))))

(defn realize [x]
  (if (fn? x) (x) x))
