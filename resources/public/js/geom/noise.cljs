(ns geom.noise)

(def gradients
  (vec (take 8 (repeatedly (fn []
                             (let [x (rand)
                                   y (rand)
                                   mult (if (> (rand) (rand)) 1.0 -1.0)
                                   mult2 (if (> (rand) (rand)) 1.0 -1.0)]
                               [(* x mult) (* y mult2)]))))))

(defn get-gradient
  [[a b]]
  (let [ndx (int (mod (+ a b) 7))]
    (get gradients ndx)))

(defn get-corners
  [x y]
  (let [nw [(- x (mod x 100)) (- y (mod y 100))]
        [x y] nw
        ne [(+ 100 x) y]
        sw [x (+ 100 y)]
        se [(+ 100 x) (+ 100 y)]]
    [nw ne sw se]))

(defn dot
  [X Y]
  (reduce + (map * X Y)))

(defn lerp
  [t a b]
  (+ a (* t (- b a))))

(defn ease
  [t]
  (- (* 3 (.pow js/Math t 2))
     (* 2 (.pow js/Math t 3))))

(defn corner-gradients
  [x y]
  (map get-gradient (get-corners x y)))

(defn corner-to-point-vectors
  [x y]
  (map (fn [[cx cy]] [(- x cx) (- y cy)])
       (get-corners x y)))

(defn influences
  [x y]
  (let [gs (corner-gradients x y)
        vs (corner-to-point-vectors x y)]
    (map dot gs vs)))

(defn noise
  [x y]
  (let [
        ;;situate the point within a unit square
        rel-x (/ x 100)
        rel-y (/ y 100)
        ;;find the coordinates within the unit square
        frac-x (mod rel-x 1)
        frac-y (mod rel-y 1)
        ;;exaggerate proximity to corner
        Sx (ease frac-x)
        Sy (ease frac-y)
        ;;compute influences of corner gradients
        [nw ne sw se] ((fn []
                         (influences x y)))
        ;;linearly interpolate between the exaggerated point the "influenced" point
        a (lerp Sx nw ne)
        b (lerp Sx sw se)
        z (lerp Sy a b)]
    ;;I forgot why this was needed :(
    (.abs js/Math (/ z 10))))

(comment
  (let [seed1 (rand 1000000)
        seed2 (rand 1000000)]
    (map noise
         (range seed1 (+ 1000 seed1) (rand))
         (range seed2 (+ 1000 seed2) (rand)))))