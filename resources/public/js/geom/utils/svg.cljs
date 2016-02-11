(ns geom.utils.svg
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [thi.ng.domus.core :as dom]
            [thi.ng.geom.svg.core :as svg]
            [hiccups.runtime :as hiccupsrt]))

(def svg-tags #{"altGlyph" "altGlyphDef" "altGlyphItem" "animate" "animateColor" "animateMotion" "animateTransform" "circle" "clipPath" "color-profile" "cursor" "defs" "desc" "ellipse" "feBlend" "feColorMatrix" "feComponentTransfer" "feComposite" "feConvolveMatrix" "feDiffuseLighting" "feDisplacementMap" "feDistantLight" "feFlood" "feFuncA" "feFuncB" "feFuncG" "feFuncR" "feGaussianBlur" "feImage" "feMerge" "feMergeNode" "feMorphology" "feOffset" "fePointLight" "feSpecularLighting" "feSpotLight" "feTile" "feTurbulence" "filter" "font" "font-face" "font-face-format" "font-face-name" "font-face-src" "font-face-uri" "foreignObject" "g" "glyph" "glyphRef" "hkern" "image" "line" "linearGradient" "marker" "mask" "metadata" "missing-glyph" "mpath" "path" "pattern" "polygon" "polyline" "radialGradient" "rect" "set" "stop" "svg" "switch" "symbol" "text" "textPath" "title" "tref" "tspan" "use" "view" "vkern"})

(defn init-svg! [root [width height]]
  (->> (dom/query nil root)
       (dom/clear!)
       (dom/create-dom!
         (svg/svg
           {:width width :height height}))))

(defn svg
  "in order to avoid clip-path wrong rendering"
  [parent-selector attrs & childs]
  (let [p (dom/query nil parent-selector)]
    (aset p "innerHTML" (html [:svg attrs childs]))))
