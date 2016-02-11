(ns geom.misc.paths
  (:require
    [thi.ng.geom.bezier :as bez]
    [thi.ng.geom.core.vector :as v :refer [vec2]]
    [thi.ng.domus.core :as dom]))

(comment
  "test curve"
  (let [_ (map vec (:points (bez/auto-spline2 (map vec2 [[100 100] [500 100] [500 600] [100 500]]) true)))
        [fpts & rpts] (:points (bez/auto-spline2 (map vec2 [[100 100] [500 100] [500 600] [100 500]]) true))
        pt->str (fn [x] (str " " (:x x) " " (:y x)))
        s (apply str "M" (pt->str fpts) " C"
                 (interpose "," (map pt->str rpts)))]
    (println s)
    (->> (u/init-svg! "#app" [1000 500])
         (dom/create-dom!
           [:path {:d s :stroke "black" :fill "white"}]))))
