(ns geom.elements.examples.grav-particles
  (:require [geom.elements.core :as e]
            [geom.NOC.utils :as u]
            [thi.ng.math.core :as m]
            [thi.ng.geom.core :as g]
            [thi.ng.geom.core.vector :as v :refer [vec2]]
            [thi.ng.geom.svg.core :as svg]
            [thi.ng.geom.webgl.animator :refer [animate]]
            [thi.ng.domus.core :as dom]))

(comment
  (let [G 1

        width 500
        height 500

        distant-interaction (fn [sign limit]
                              (fn [x y]
                                (let [dist (g/- (:loc x) (:loc y))
                                      ma (g/mag dist)
                                      fma (/ (* G (:mass x) (:mass y)) (* ma ma))
                                      f (-> dist g/normalize (g/* (sign fma)) (g/limit limit))]
                                  (update-in y [:vel] #(g/+ % f)))))

        gravitation (distant-interaction - 20)
        repulsion (distant-interaction + 20)

        movers (map
                 (fn [_]
                   (let [nseq (atom (u/noise-seq [10 40] 0.01))
                         rad! (fn [x] (swap! nseq next) (assoc x :rad (first @nseq)))]
                     (e/element
                       {:vel  (vec2 (rand 1) (rand 1))
                        :vlim 5
                        :loc  (vec2 (rand width) (rand height))
                        :step (comp rad! e/get-older e/mover-step)
                        :svg  #(svg/circle (:loc %) (:rad %) {:fill "white" :stroke "black"})
                        :mass (rand-nth (range 2 4 0.25))
                        :act  gravitation
                        :age  (int (m/random 1000))})))
                 (range 50))

        space (e/element
                {:mass nil
                 :act  (fn [x y] (e/apply-force y (vec2 0 0.01)))})

        borders (e/element
                  {:mass nil
                   :step (fn [x] x)
                   :act  (fn [b {[x y] :loc :as t}]
                           (let [closestx (if (> (m/abs (- width x)) (m/abs x)) width 0)
                                 closesty (if (> (m/abs (- height y)) (m/abs y)) height 0)]
                             ((distant-interaction + 50) {:loc (vec2 closestx closesty) :mass 10000} t)))})

        elems (atom (apply e/elements space borders movers))

        svg* (u/init-svg! "#app" [width height])]

    (animate (fn [_]
               (swap! elems e/step)
               (->> svg* (dom/clear!) (dom/create-dom! (e/svg @elems)))
               true))))