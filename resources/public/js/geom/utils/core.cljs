(ns geom.utils.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require
    [thi.ng.math.core :as m]
    [thi.ng.math.simplexnoise :as simplex]
    [hiccups.runtime :as hiccupsrt]
    [thi.ng.domus.core :as dom]
    [thi.ng.geom.svg.core :as svg]
    [hipo.core :as hipo]
    [dommy.core :as d :refer-macros [sel1]]))

;; prob -------------------------------------------------------

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

;; svg ----------------------------------------------------------

(defn init-svg! [root [width height]]
  (->> (dom/query nil root)
       (dom/clear!)
       (dom/create-dom!
         (svg/svg
           {:width width :height height}))))

(defn svg
  "in order to avoid clip-path wrong rendering"
  [parent-selector attrs & childs]
  (let [p (dom/query nil parent-selector)]
    (aset p "innerHTML" (html [:svg attrs childs]))))

