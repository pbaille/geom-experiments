(ns geom.sketches.flowers
  (:require
    [thi.ng.geom.polygon :as polygon]
    [thi.ng.geom.svg.core :as svg]
    [thi.ng.geom.webgl.animator :refer [animate]]
    [geom.utils.shapes :as shapes :refer [flower]]
    [geom.utils.svg :refer [svg]]
    [geom.utils.prob :refer [randge]]
    [geom.utils.colors :as c]
    [geom.utils.from-d3 :as fd3]))

(comment
  "static"
  (let [pinks (c/grad-palette (c/css "light-coral") (c/css "#FAFAFA") 5)
        f (flower {:origin [250 250]
                   :lrs    (shapes/flower-lrs [3 10] [5 20] [7 40])})]
    (svg "#app"
         {:width 500 :height 500 :fill "rgba(0,0,0,0.1)"}
         (map (fn [{:keys [idx points]}] (svg/polygon points {:fill @(nth pinks idx)})) (reverse (:lrs f))))))

(comment
  "static voronoied"
  (let [pinks (c/grad-palette (c/css "light-coral") (c/css "#FAFAFA") 5)
        f (flower {:origin [250 250]
                   :lrs    (shapes/flower-lrs [3 30] [9 60] [15 150] [25 230])})
        pols (shapes/flower->voronoi [500 500] f)]
    (svg "#app"
         {:width 500 :height 500}
         (map (fn [x] (svg/polygon (:polygon x)
                                   {:stroke-width 2
                                    :stroke "white"
                                    :fill @(nth pinks (-> x :seed :lr :idx))}))
              pols))))

(comment
  "rotating"
  (let [pinks (c/grad-palette (c/css "light-coral") (c/css "#FAFAFA") 5)
        f (flower {:origin [250 250]
                   :lrs    (shapes/flower-lrs [3 10 {:speed 0.1}] [5 20 {:speed -0.1}] [7 40 {:speed 0.05}])
                   :rotating? true})]
    (animate (fn [_]
               (svg "#app"
                    {:width 500 :height 500 :fill "rgba(0,0,0,0.1)"}
                    (map (fn [{:keys [idx points]}]
                           (svg/polygon @points {:fill @(nth pinks idx)}))
                         (reverse (:lrs f))))
               true))))


(comment
  "rotating voronoied"
  (let [pinks (c/grad-palette (c/css "light-coral") (c/css "#FAFAFA") 5)
        f (flower {:origin [250 250]
                   :lrs    (shapes/flower-lrs [3 10] [5 50] [7 120] [13 200] [9 220])
                   :rotating? true})]
    (animate (fn [[a b]]
               (let [pols (shapes/flower->voronoi [500 500] f)]
                 (svg "#app"
                      {:width 500 :height 500 }
                      (map (fn [x] (svg/polygon (:polygon x) {:stroke-width 2
                                                              :stroke "white"
                                                              :fill @(nth pinks (-> x :seed :lr :idx))})) pols)))
               true))))

(comment
  "static flower group voronoied"
  (let [pinks (c/grad-palette (c/css "light-coral") (c/css "#FAFAFA") 5)
        blues (c/grad-palette (c/css "light-skyblue") (c/css "#FAFAFA") 5)
        greens (c/grad-palette (c/css "olive") (c/css "#FAFAFA") 5)
        oranges (c/grad-palette (c/css "orange") (c/css "#FAFAFA") 5)
        f1 (flower {:id :one
                    :origin [100 100]
                   :lrs    (shapes/flower-lrs [3 30] [9 60] [15 150] )})
        f2 (flower {:id :two
                    :origin [400 400]
                    :lrs    (shapes/flower-lrs [5 30] [7 80] [12 120] )})
        f3 (flower {:id :three
                    :origin [300 150]
                    :lrs    (shapes/flower-lrs [5 30] [7 80] [12 120] )})
        f4 (flower {:id :four
                    :origin [150 250]
                    :lrs    (shapes/flower-lrs [5 30] [7 80] [12 120] )})
        pols (shapes/flowers->voronoi [500 500] f1 f2 f3 f4)]
    (svg "#app"
         {:width 500 :height 500}
         (map (fn [x] (svg/polygon (:polygon x)
                                   {:stroke-width 2
                                    :stroke       "white"
                                    :fill         @(nth (condp = (-> x :seed :lr :flower)
                                                          :one pinks
                                                          :two blues
                                                          :three greens
                                                          :four oranges)
                                                        (-> x :seed :lr :idx))}))
              pols))))

(comment
  "rotating flower group voronoied"
  (let [pinks (c/grad-palette (c/css "light-coral") (c/css "#FAFAFA") 5)
        blues (c/grad-palette (c/css "light-skyblue") (c/css "#FAFAFA") 5)
        greens (c/grad-palette (c/css "olive") (c/css "#FAFAFA") 5)
        oranges (c/grad-palette (c/css "orange") (c/css "#FAFAFA") 5)

        find-color (fn [x]
                     @(nth (condp = (-> x :seed :lr :flower)
                             0 pinks
                             1 blues
                             2 greens
                             3 oranges)
                           (-> x :seed :lr :idx)))

        rf (fn [id origin]
             (flower {:id id
                      :origin origin
                      :lrs    (shapes/flower-lrs
                                [(randge 2 7)(randge 20 50)]
                                [(randge 5 10)(randge 30 90)]
                                [(randge 7 15)(randge 70 130)]
                                [(randge 10 25)(randge 110 160)])
                      :rotating? true}))

        f (fn [id origin]
             (flower {:id id
                      :origin origin
                      :lrs    (shapes/flower-lrs [3 10] [5 30] [7 80] [12 120])
                      :rotating? true}))

        fs (map f (range) [[100 100][300 300][300 100][100 300]])]
    (animate (fn [[a b]]
               (let [pols (apply shapes/flowers->voronoi [500 500] fs)]
                 (svg "#app"
                      {:width 400 :height 400 }
                      (map #(svg/polygon (:polygon %) {:fill (find-color %)})
                           pols)))
               true))))


