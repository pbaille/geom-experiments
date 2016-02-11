// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.utils.core');
goog.require('cljs.core');
goog.require('hipo.core');
goog.require('thi.ng.domus.core');
goog.require('hiccups.runtime');
goog.require('thi.ng.math.simplexnoise');
goog.require('thi.ng.geom.svg.core');
goog.require('thi.ng.math.core');
goog.require('dommy.core');
/**
 * takes a map of type object -> prob
 */
geom.utils.core.weight_picker = (function geom$utils$core$weight_picker(m){
var sums = cljs.core.reductions.call(null,cljs.core._PLUS_,(0),cljs.core.vals.call(null,m));
var parts = cljs.core.map.call(null,((function (sums){
return (function (p1__24210_SHARP_,p2__24211_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548)],[p1__24210_SHARP_,cljs.core.first.call(null,p2__24211_SHARP_),cljs.core.second.call(null,p2__24211_SHARP_)]);
});})(sums))
,cljs.core.keys.call(null,m),cljs.core.partition.call(null,(2),(1),sums));
return ((function (sums,parts){
return (function() {
var geom$utils$core$weight_picker_$_f = null;
var geom$utils$core$weight_picker_$_f__0 = (function (){
var x = cljs.core.rand.call(null,cljs.core.last.call(null,sums));
var l = cljs.core.first.call(null,cljs.core.filter.call(null,((function (x,sums,parts){
return (function (p1__24212_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(p1__24212_SHARP_),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(p1__24212_SHARP_)], null),x);
});})(x,sums,parts))
,parts));
return new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(l);
});
var geom$utils$core$weight_picker_$_f__1 = (function (x){
return cljs.core.take.call(null,x,cljs.core.repeatedly.call(null,geom$utils$core$weight_picker_$_f));
});
geom$utils$core$weight_picker_$_f = function(x){
switch(arguments.length){
case 0:
return geom$utils$core$weight_picker_$_f__0.call(this);
case 1:
return geom$utils$core$weight_picker_$_f__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geom$utils$core$weight_picker_$_f.cljs$core$IFn$_invoke$arity$0 = geom$utils$core$weight_picker_$_f__0;
geom$utils$core$weight_picker_$_f.cljs$core$IFn$_invoke$arity$1 = geom$utils$core$weight_picker_$_f__1;
return geom$utils$core$weight_picker_$_f;
})()
;})(sums,parts))
});
geom.utils.core.noise1 = (function geom$utils$core$noise1(x){
return thi.ng.math.core.map_interval.call(null,thi.ng.math.simplexnoise.noise1.call(null,x),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.632,0.632], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null));
});
geom.utils.core.noise_seq = (function geom$utils$core$noise_seq(var_args){
var args__19340__auto__ = [];
var len__19333__auto___24219 = arguments.length;
var i__19334__auto___24220 = (0);
while(true){
if((i__19334__auto___24220 < len__19333__auto___24219)){
args__19340__auto__.push((arguments[i__19334__auto___24220]));

var G__24221 = (i__19334__auto___24220 + (1));
i__19334__auto___24220 = G__24221;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return geom.utils.core.noise_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

geom.utils.core.noise_seq.cljs$core$IFn$_invoke$arity$variadic = (function (output_range,increment,p__24217){
var vec__24218 = p__24217;
var seed = cljs.core.nth.call(null,vec__24218,(0),null);
return cljs.core.map.call(null,((function (vec__24218,seed){
return (function (p1__24213_SHARP_){
return thi.ng.math.core.map_interval.call(null,p1__24213_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.632,0.632], null),output_range);
});})(vec__24218,seed))
,cljs.core.map.call(null,thi.ng.math.simplexnoise.noise1,cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,increment),(function (){var or__18275__auto__ = seed;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return cljs.core.rand.call(null,(1000000));
}
})())));
});

geom.utils.core.noise_seq.cljs$lang$maxFixedArity = (2);

geom.utils.core.noise_seq.cljs$lang$applyTo = (function (seq24214){
var G__24215 = cljs.core.first.call(null,seq24214);
var seq24214__$1 = cljs.core.next.call(null,seq24214);
var G__24216 = cljs.core.first.call(null,seq24214__$1);
var seq24214__$2 = cljs.core.next.call(null,seq24214__$1);
return geom.utils.core.noise_seq.cljs$core$IFn$_invoke$arity$variadic(G__24215,G__24216,seq24214__$2);
});
geom.utils.core.init_svg_BANG_ = (function geom$utils$core$init_svg_BANG_(root,p__24222){
var vec__24224 = p__24222;
var width = cljs.core.nth.call(null,vec__24224,(0),null);
var height = cljs.core.nth.call(null,vec__24224,(1),null);
return thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.svg.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)),thi.ng.domus.core.clear_BANG_.call(null,thi.ng.domus.core.query.call(null,null,root)));
});
/**
 * in order to avoid clip-path wrong rendering
 */
geom.utils.core.svg = (function geom$utils$core$svg(var_args){
var args__19340__auto__ = [];
var len__19333__auto___24229 = arguments.length;
var i__19334__auto___24230 = (0);
while(true){
if((i__19334__auto___24230 < len__19333__auto___24229)){
args__19340__auto__.push((arguments[i__19334__auto___24230]));

var G__24231 = (i__19334__auto___24230 + (1));
i__19334__auto___24230 = G__24231;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return geom.utils.core.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

geom.utils.core.svg.cljs$core$IFn$_invoke$arity$variadic = (function (parent_selector,attrs,childs){
var p = thi.ng.domus.core.query.call(null,null,parent_selector);
return (p["innerHTML"] = [cljs.core.str((function (){var attrs24228 = attrs;
if(cljs.core.map_QMARK_.call(null,attrs24228)){
return [cljs.core.str("<svg"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs24228))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,childs)),cljs.core.str("</svg>")].join('');
} else {
return [cljs.core.str("<svg>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs24228)),cljs.core.str(hiccups.runtime.render_html.call(null,childs)),cljs.core.str("</svg>")].join('');
}
})())].join(''));
});

geom.utils.core.svg.cljs$lang$maxFixedArity = (2);

geom.utils.core.svg.cljs$lang$applyTo = (function (seq24225){
var G__24226 = cljs.core.first.call(null,seq24225);
var seq24225__$1 = cljs.core.next.call(null,seq24225);
var G__24227 = cljs.core.first.call(null,seq24225__$1);
var seq24225__$2 = cljs.core.next.call(null,seq24225__$1);
return geom.utils.core.svg.cljs$core$IFn$_invoke$arity$variadic(G__24226,G__24227,seq24225__$2);
});

//# sourceMappingURL=core.js.map