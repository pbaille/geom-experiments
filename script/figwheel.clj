(require '[figwheel-sidecar.repl :as r]
         '[figwheel-sidecar.repl-api :as ra])

(ra/start-figwheel!
 {:figwheel-options {:css-dirs ["resources/public/css"]
                     :server-port 5001}
  :build-ids ["dev"]
  :all-builds
                    [{:id "dev"
                      :figwheel true
                      :source-paths ["src"]
                      :compiler {:main 'geom.all
                                 :asset-path "js"
                                 :output-to "resources/public/js/main.js"
                                 :output-dir "resources/public/js"
                                 :verbose true}}]})

(ra/cljs-repl)
