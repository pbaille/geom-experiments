(defproject geom "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.7.228"]
                 [figwheel-sidecar "0.5.0"]
                 [thi.ng/geom "0.0.908"]
                 [thi.ng/math "0.1.4"]
                 [thi.ng/domus "0.1.0"]
                 [thi.ng/color "1.0.0"]
                 [cljsjs/d3 "3.5.7-1"]
                 [hiccups "0.3.0"]
                 [hipo "0.5.2"]
                 [prismatic/dommy "1.1.0"]]
  :plugins [[lein-cljsbuild "1.1.0"]]
  :source-paths ["src" "script"] )
