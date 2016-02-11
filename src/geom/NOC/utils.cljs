(ns geom.NOC.utils
  (:require [thi.ng.math.core :as m]
            [thi.ng.math.simplexnoise :refer [noise1 noise2]]
            [thi.ng.domus.core :as dom]
            [thi.ng.geom.svg.core :as svg]))

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

(defn noise-seq [range i]
  (map #(m/map-interval % [-0.632 0.632] range)
       (map noise1
            (iterate (partial + i) (rand 1000000)))))

(defn init-svg! [root [width height]]
  (->> (dom/query nil root)
       (dom/clear!)
       (dom/create-dom!
         (svg/svg
           {:width width :height height}))))