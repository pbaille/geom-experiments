(ns thi.ng.domus.utils
 (:require
  [goog.string.format]
  [clojure.string :as str]))

(def html-entities
  {\& "&amp;"
   \< "&lt;"
   \> "&gt;"
   \" "&quot;"})

(defn as-str [x]
  (if (or (keyword? x) (symbol? x))
    (name x)
    (str x)))

(defn escape-html
  [x] (str/escape (as-str x) html-entities))

(defn parse-int
  ([x] (parse-int x 10 nil))
  ([x radix nf]
     (let [x' (js/parseInt x radix)]
       (if (js/isNaN x') nf x'))))

(defn parse-float
  ([x] (parse-float x nil))
  ([x nf]
     (let [x' (js/parseFloat x)]
       (if (js/isNaN x') nf x'))))

(defn format-date
  [d]
  (goog.string/format
   "%d-%02d-%02d"
   (.getFullYear d)
   (inc (.getMonth d))
   (.getDate d)))

(defn format-time
  [d]
  (goog.string/format
   "%02d:%02d:%02d"
   (.getHours d)
   (.getMinutes d)
   (.getSeconds d)))

(defn format-date-time
  [d] (str (format-date d) " " (format-time d)))

(defn now
  [] (.getTime (js/Date.)))

(defn rand-bits
  [pow] (rand-int (bit-shift-left 1 pow)))

(defn rand-bits-hex
  [pow] (.toString (rand-int (bit-shift-left 1 pow)) 16))

(defn rand-16bits-hex
  [] (.toString (rand-int 0x10000) 16))

(defn new-uuid
  []
  (str
   (rand-16bits-hex) (rand-16bits-hex)
   "-" (rand-16bits-hex)
   "-" (-> (rand-bits 16) (bit-and 0x0FFF) (bit-or 0x4000) (.toString 16))
   "-" (-> (rand-bits 16) (bit-and 0x3FFF) (bit-or 0x8000) (.toString 16))
   "-" (rand-16bits-hex) (rand-16bits-hex) (rand-16bits-hex)))
