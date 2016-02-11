(ns geom.grayscott.core3
  #?(:clj (:require [thi.ng.math.macros :as mm])
     :cljs (:require-macros [thi.ng.math.macros :as mm])))

(defn clip [min max n]
  (cond
    (< n min) min
    (> n max) max
    :else n))

(defn get-u [{w :w h :h u :u} x y]
  (if (and (<= 0 y h) (<= 0 x w))
    (get u (+ x (* y w)))
    0))

(defn get-v [{w :w h :h v :v} x y]
  (if (and (<= 0 y h) (<= 0 x w))
    (get v (+ x (* y w)))
    0))

(defn get-f [gs x y]
  ((:get-f gs) gs x y))

(defn get-k [gs x y]
  ((:get-k gs) gs x y))

(defn set-coefs [gs f k du dv]
  (assoc gs :f f :k k :du du :dv dv))

(def grayscott-defaults
  {:f 0.023
   :k 0.077
   :du 0.095
   :dv 0.03
   :is-tilling false
   :get-f (fn [this _ _] (:f this))
   :get-k (fn [this _ _] (:k this))})

(defn grayscott [w h & [opts]]
  (let [cnt (* w h)
        v (vec (repeat cnt 1.0))
        u (vec (repeat cnt 0.0))]
    (merge grayscott-defaults opts {:w w :h h :u u :v v})))

(defn upd [{:keys [w h u v du dv f k is-tilling] :as gs} t]
  (let [t (clip 0 1 t)
        w1 (dec w)
        h1 (dec h)

        temp (reduce (fn [[tu tv] [x y]]
                       (let [idx (+ x (* y w))
                             top (- idx w)
                             bottom (+ idx w)
                             left (dec idx)
                             right (inc idx)
                             f (get-f gs x y)
                             k (get-k gs x y)
                             cu (get u idx)
                             cv (get v idx)
                             d2 (* cu cv cv)]

                         [(assoc! tu idx (max 0 (+ cu
                                                   (* t
                                                      (+ (- (* du (- (mm/add (get u right) (get u left) (get u bottom) (get u top))
                                                                     (* 4 cu)))
                                                            d2)
                                                         (* f (- 1.0 cu)))))))


                          (assoc! tv idx (max 0 (+ cv
                                                   (* t
                                                      (- (+ (* dv (- (mm/add (get v right) (get v left) (get v bottom) (get v top))
                                                                     (* 4 cv)))
                                                            d2)
                                                         (* k cv))))))]))
                     [(transient u) (transient v)]
                     (for [x (range 1 w1)
                           y (range 1 h1)]
                       [x y]))
        [tu tv] (if-not is-tilling
                  temp
                  (let [w2 (dec w1)
                        idxH1 (* h1 w)
                        idxH2 (* (dec h1) w)

                        temp (reduce
                               (fn [[tu tv] x]
                                 (let [left (if (zero? x) w1 (dec x))
                                       right (if (= w1 x) 0 (inc x))
                                       idx (+ idxH1 x)
                                       cu (get u x)
                                       cv (get v x)
                                       cui (get u idx)
                                       cvi (get v idx)
                                       d1 (* cu cv cv)
                                       d2 (* cui cvi cvi)]

                                   [(assoc! tu x (max 0 (+ cu
                                                           (* t (+ (- (* du (- (mm/add (get u right) (get u left) (get u (+ w x)) cui)
                                                                               (* 4 cu)))
                                                                      d1)
                                                                   (* f (- 1.0 cu))))))

                                            idx (max 0 (+ cui
                                                          (* t (+ (- (* du (- (mm/add (get u (+ idxH1 right)) (get u (+ idxH1 left)) cu (get u (+ idxH2 x)))
                                                                              (* 4 cui)))
                                                                     d2)
                                                                  (* f (- 1.0 cui)))))))
                                    (assoc! tv x (max 0 (+ cv
                                                           (* t (- (+ (* dv (- (mm/add (get v right) (get v left) (get v (+ w x)) cvi)
                                                                               (* 4 cv)))
                                                                      d1)
                                                                   (* k cv)))))
                                            idx (max 0 (+ cvi
                                                          (* t (- (+ (* dv (- (mm/add (get v (+ idxH1 right)) (get v (+ idxH1 left)) cv (get v (+ idxH2 x)))
                                                                              (* 4 cvi)))
                                                                     d2)
                                                                  (* k cvi))))))]))
                               temp
                               (range 0 w))]
                    (reduce
                      (fn [[tu tv] y]
                        (let [idx (* y w)
                              idxW1 (+ idx w1)
                              idxW2 (+ idx w2)
                              cu (get u idx)
                              cv (get v idx)
                              cui (get u idxW1)
                              cvi (get v idxW1)
                              d1 (* cu cv cv)
                              d2 (* cui cvi cvi)
                              up (* w (if (zero? y) h1 (dec y)))
                              down (* w (if (= h1 y) 0 (inc y)))]

                          [(assoc! tu
                                   idx (max 0 (+ cu
                                                 (* t (+ (- (* du (- (mm/add (get u (inc idx)) cui (get u down) (get u up))
                                                                     (* 4 cu)))
                                                            d1)
                                                         (* f (- 1.0 cu))))))
                                   idxW1 (max 0 (+ cui
                                                   (* t (+ (- (* du (- (mm/add cu (get u idxW2) (get u (+ w1 down)) cu (get u (+ up w1)))
                                                                       (* 4 cui)))
                                                              d2)
                                                           (* f (- 1.0 cui)))))))

                           (assoc! tv
                                   idx (max 0 (+ cv
                                                 (* t (- (+ (* dv (- (mm/add (get v (inc idx)) cvi (get v down) (get v up))
                                                                     (* 4 cv)))
                                                            d1)
                                                         (* k cv)))))
                                   idxW1 (max 0 (+ cvi
                                                   (* t (- (+ (* dv (- (mm/add cv (get v idxW2) (get v (+ down w1)) (get v (+ up w1)))
                                                                       (* 4 cvi)))
                                                              d2)
                                                           (* k cvi))))))]))
                      temp
                      (range 0 h))))]
    (assoc gs :u (persistent! tu)
              :v (persistent! tv))))

(time (do (upd (grayscott 200 200) 1) nil))
;;=> "Elapsed time: 767.065000 msecs"

