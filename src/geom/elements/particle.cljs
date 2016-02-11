(ns geom.elements.particle
  (:require
    [thi.ng.math.core :as m]
    [thi.ng.math.simplexnoise :refer [noise1 noise2]]
    [thi.ng.geom.core :as g]
    [thi.ng.geom.core.vector :as v :refer [vec2]]
    [thi.ng.geom.circle :as c]
    [thi.ng.geom.svg.core :as svg]
    [thi.ng.geom.webgl.animator :refer [animate]]
    [thi.ng.domus.core :as dom]
    [geom.NOC.utils :as u]))

(defn noisy [[xscope yscope] agitation]
  (let [n? (number? agitation)
        ax (if n? agitation (first agitation))
        ay (if n? agitation (second agitation))
        xscope (if (seq xscope) (vec xscope) [0 xscope])
        yscope (if (seq yscope) (vec yscope) [0 yscope])]
    (map vec2
       (u/noise-seq xscope ax)
       (u/noise-seq yscope ay))))
