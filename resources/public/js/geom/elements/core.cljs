(ns geom.elements.core
  (:require
    [thi.ng.math.core :as m]
    [thi.ng.geom.core :as g]
    [thi.ng.geom.core.vector :as v :refer [vec2]]
    [thi.ng.geom.svg.core :as svg]))

(def v0 (vec2 0 0))

(defn round
  "Round a double to the given precision (number of significant digits)"
  [precision d]
  (let [factor (Math/pow 10 precision)]
    (/ (Math/round (* d factor)) factor)))

(defn apply-force [{:keys [vel mass vlim] :as m} f]
  (let [v (g/+ vel (g/div f mass))
        v (if vlim (g/limit v vlim) v)]
    (assoc m :vel v)))

(defn mover-step [{:keys [vel loc] :as m}]
  (assoc m :loc (g/+ loc vel)))

(defn get-older [m]
  (update-in m [:age] inc))

(defn element [opts]
  (merge {:loc  v0
          :vel  v0
          :mass 1
          :svg  (constantly nil)
          :step (comp get-older mover-step)
          :act  (fn [_ x] x)
          :act? (fn [_ y] (and (not (:fixed y)) (:mass y)))
          :age  0
          :show (fn [x] (or (:name x) :unnamed))}
         opts))

(defn step [x] ((:step x) x))
(defn act [x y] ((:act x) x y))
(defn act? [x y] ((:act? x) x y))
(defn show [x] ((:show x) x))
(defn svg [x] ((:svg x) x))

(defn do-interactions [xs]
  (reduce (fn [es [i e]]
            (let [f (fn [y] (if (act? e y) (act e y) y))]
              (concat (map f (take i es))
                      [(nth es i)]
                      (map f (drop (inc i) es)))))
          xs
          (map-indexed vector xs)))

(defn elements [& xs]
  {:xs   xs
   :step (fn [x] (update-in x [:xs] (fn [xs] (map step (do-interactions xs)))))
   :svg  (fn [x] (svg/group {} (keep svg (:xs x))))})

