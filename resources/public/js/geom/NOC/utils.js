// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.NOC.utils');
goog.require('cljs.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.math.simplexnoise');
goog.require('thi.ng.domus.core');
goog.require('thi.ng.geom.svg.core');
/**
 * takes a map of type object -> prob
 */
geom.NOC.utils.weight_picker = (function geom$NOC$utils$weight_picker(m){
var sums = cljs.core.reductions.call(null,cljs.core._PLUS_,(0),cljs.core.vals.call(null,m));
var parts = cljs.core.map.call(null,((function (sums){
return (function (p1__30168_SHARP_,p2__30169_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548)],[p1__30168_SHARP_,cljs.core.first.call(null,p2__30169_SHARP_),cljs.core.second.call(null,p2__30169_SHARP_)]);
});})(sums))
,cljs.core.keys.call(null,m),cljs.core.partition.call(null,(2),(1),sums));
return ((function (sums,parts){
return (function() {
var geom$NOC$utils$weight_picker_$_f = null;
var geom$NOC$utils$weight_picker_$_f__0 = (function (){
var x = cljs.core.rand.call(null,cljs.core.last.call(null,sums));
var l = cljs.core.first.call(null,cljs.core.filter.call(null,((function (x,sums,parts){
return (function (p1__30170_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(p1__30170_SHARP_),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(p1__30170_SHARP_)], null),x);
});})(x,sums,parts))
,parts));
return new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(l);
});
var geom$NOC$utils$weight_picker_$_f__1 = (function (x){
return cljs.core.take.call(null,x,cljs.core.repeatedly.call(null,geom$NOC$utils$weight_picker_$_f));
});
geom$NOC$utils$weight_picker_$_f = function(x){
switch(arguments.length){
case 0:
return geom$NOC$utils$weight_picker_$_f__0.call(this);
case 1:
return geom$NOC$utils$weight_picker_$_f__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geom$NOC$utils$weight_picker_$_f.cljs$core$IFn$_invoke$arity$0 = geom$NOC$utils$weight_picker_$_f__0;
geom$NOC$utils$weight_picker_$_f.cljs$core$IFn$_invoke$arity$1 = geom$NOC$utils$weight_picker_$_f__1;
return geom$NOC$utils$weight_picker_$_f;
})()
;})(sums,parts))
});
geom.NOC.utils.noise_seq = (function geom$NOC$utils$noise_seq(range,i){
return cljs.core.map.call(null,(function (p1__30171_SHARP_){
return thi.ng.math.core.map_interval.call(null,p1__30171_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.632,0.632], null),range);
}),cljs.core.map.call(null,thi.ng.math.simplexnoise.noise1,cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,i),cljs.core.rand.call(null,(1000000)))));
});
geom.NOC.utils.init_svg_BANG_ = (function geom$NOC$utils$init_svg_BANG_(root,p__30172){
var vec__30174 = p__30172;
var width = cljs.core.nth.call(null,vec__30174,(0),null);
var height = cljs.core.nth.call(null,vec__30174,(1),null);
return thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.svg.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)),thi.ng.domus.core.clear_BANG_.call(null,thi.ng.domus.core.query.call(null,null,root)));
});

//# sourceMappingURL=utils.js.map