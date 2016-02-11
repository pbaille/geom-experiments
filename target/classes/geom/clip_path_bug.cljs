(ns geom.clip-path-bug
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require
    [hiccups.runtime :as hiccupsrt]
    [thi.ng.domus.core :as dom]
    [thi.ng.geom.svg.core :as svg]
    [hipo.core :as hipo]
    [dommy.core :as d :refer-macros [sel1]]))

; doesn't clip the rectangle
(comment
  (dom/create-dom! [:div#foo]  js/document.body)
  (set! dom/svg-tags #{"svg" "g" "path" "rect" "circle" "line" "polyline" "polygon" "text" "clipPath" "defs"}))

(comment
  (->> (dom/query nil "#foo")
       (dom/create-dom!
         [:svg
          {:width 300 :height 300}
          [:defs [:clipPath {:id "myClip"}
                  [:circle {:cx 50 :cy 50 :r 10}]]]
          [:rect {:x    0 :y 0 :width 200 :height 200
                  :fill "black" :clip-path "url(#myClip)"}]]))

  (->> (dom/query nil "#foo")
       (dom/create-dom!
         (svg/svg {:width 300 :height 300}
                  (svg/defs [:clipPath {:id "myClip"} [:circle {:cx 50 :cy 50 :r 10}]])
                  (svg/rect [0 0] 200 200 {:fill "black" :clip-path "url(#myClip)"})))))

; doesn't show at all
(comment
  (.appendChild (dom/query nil "#foo")
                (hipo/create [:svg {:width 300 :height 300}
                              [:defs [:clipPath {:id "myClip"}
                                      [:circle {:cx 50 :cy 50 :r 10}]]]
                              [:rect {:x    0 :y 0 :width 200, :height 200
                                      :fill "black" :clip-path "url(#myClip)"}]])))

; works
(comment
  (aset (dom/query nil "#foo")
        "innerHTML"
        (html [:svg {:width 300 :height 300}
               [:defs [:clipPath {:id "myClip"}
                       [:circle {:cx 50 :cy 50 :r 10}]]]
               [:rect {:x    0 :y 0 :width 200, :height 200
                       :fill "black" :clip-path "url(#myClip)"}]])))

;; now if we reevaluate the first form it works as intended

#{"altGlyph" "altGlyphDef" "altGlyphItem" "animate" "animateColor" "animateMotion" "animateTransform" "circle" "clipPath" "color-profile" "cursor" "defs" "desc" "ellipse" "feBlend" "feColorMatrix" "feComponentTransfer" "feComposite" "feConvolveMatrix" "feDiffuseLighting" "feDisplacementMap" "feDistantLight" "feFlood" "feFuncA" "feFuncB" "feFuncG" "feFuncR" "feGaussianBlur" "feImage" "feMerge" "feMergeNode" "feMorphology" "feOffset" "fePointLight" "feSpecularLighting" "feSpotLight" "feTile" "feTurbulence" "filter" "font" "font-face" "font-face-format" "font-face-name" "font-face-src" "font-face-uri" "foreignObject" "g" "glyph" "glyphRef" "hkern" "image" "line" "linearGradient" "marker" "mask" "metadata" "missing-glyph" "mpath" "path" "pattern" "polygon" "polyline" "radialGradient" "rect" "set" "stop" "svg" "switch" "symbol" "text" "textPath" "title" "tref" "tspan" "use" "view" "vkern"}