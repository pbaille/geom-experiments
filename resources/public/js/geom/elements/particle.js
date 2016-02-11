// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.elements.particle');
goog.require('cljs.core');
goog.require('thi.ng.domus.core');
goog.require('geom.NOC.utils');
goog.require('thi.ng.geom.webgl.animator');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.math.simplexnoise');
goog.require('thi.ng.geom.svg.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.circle');
geom.elements.particle.noisy = (function geom$elements$particle$noisy(p__30339,agitation){
var vec__30341 = p__30339;
var xscope = cljs.core.nth.call(null,vec__30341,(0),null);
var yscope = cljs.core.nth.call(null,vec__30341,(1),null);
var n_QMARK_ = typeof agitation === 'number';
var ax = ((n_QMARK_)?agitation:cljs.core.first.call(null,agitation));
var ay = ((n_QMARK_)?agitation:cljs.core.second.call(null,agitation));
var xscope__$1 = ((cljs.core.seq.call(null,xscope))?cljs.core.vec.call(null,xscope):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),xscope], null));
var yscope__$1 = ((cljs.core.seq.call(null,yscope))?cljs.core.vec.call(null,yscope):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),yscope], null));
return cljs.core.map.call(null,thi.ng.geom.core.vector.vec2,geom.NOC.utils.noise_seq.call(null,xscope__$1,ax),geom.NOC.utils.noise_seq.call(null,yscope__$1,ay));
});

//# sourceMappingURL=particle.js.map