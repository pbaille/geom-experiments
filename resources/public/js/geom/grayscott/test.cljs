(ns geom.grayscott.test
  (:require
    [thi.ng.geom.polygon :as polygon]
    [thi.ng.geom.svg.core :as svg]
    [thi.ng.geom.webgl.animator :refer [animate]]
    [geom.utils.svg :refer [svg]]
    [geom.utils.colors :refer [css]]
    [geom.utils.from-d3 :as fd3]
    [geom.grayscott.core :refer [grayscott upd]]
    [thi.ng.color.core :as c]
    [thi.ng.domus.core :as dom]))


(comment
  (let [w 40
        h 40
        pixel-size 5
        gs (atom (grayscott w h))

        cscale #(c/blend (css "white") (css "black") %)

        coords #(vector (int (/ % w)) (rem % w))

        step (apply comp (repeat 10 #(upd % 1)))]

    (animate
      (fn [_]
        (swap! gs step)
        (svg "#app"
             {:width (* w pixel-size) :height (* h pixel-size)}
             (map-indexed (fn [i v]
                            (svg/rect (map (partial *  pixel-size) (coords i))  pixel-size  pixel-size {:fill @(cscale v)}))
                          (:u @gs)))
        true))))

(comment
  (let [w 100
        h 100
        pixel-size 1
        gs (atom (grayscott w h false))
        gs1 (grayscott w h false)

        cscale #(c/blend (css "white") (css "black") %)

        coords #(vector (int (/ % w)) (rem % w))

        step (apply comp (repeat 10 #(upd % 1)))

        _ (svg "#app"
               {:width (* w pixel-size) :height (* h pixel-size)}
               (map-indexed (fn [i v]
                              (svg/rect (map (partial *  pixel-size) (coords i))  pixel-size  pixel-size
                                        {:style "fill: black; fill-opacity: 1"}))
                            (:u @gs)))

        rects (array-seq (dom/query-all nil "rect"))]

    (animate
      (fn [_]
        (println "yop")
        (step gs1)
        #_(let [u (:u @gs)]
          (doseq [[v x] (map vector u rects)]
            (aset (.-style x) "fill-opacity" v)))
        true))))



