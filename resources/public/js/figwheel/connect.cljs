(ns figwheel.connect (:require [figwheel.client] [geom.all] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://localhost:5001/figwheel-ws"})

