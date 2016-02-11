// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.elements.core');
goog.require('cljs.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.svg.core');
geom.elements.core.v0 = thi.ng.geom.core.vector.vec2.call(null,(0),(0));
/**
 * Round a double to the given precision (number of significant digits)
 */
geom.elements.core.round = (function geom$elements$core$round(precision,d){
var factor = Math.pow((10),precision);
return (Math.round((d * factor)) / factor);
});
geom.elements.core.apply_force = (function geom$elements$core$apply_force(p__21506,f){
var map__21509 = p__21506;
var map__21509__$1 = ((((!((map__21509 == null)))?((((map__21509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21509):map__21509);
var m = map__21509__$1;
var vel = cljs.core.get.call(null,map__21509__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));
var mass = cljs.core.get.call(null,map__21509__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var vlim = cljs.core.get.call(null,map__21509__$1,new cljs.core.Keyword(null,"vlim","vlim",-438044487));
var v = thi.ng.geom.core._PLUS_.call(null,vel,thi.ng.geom.core.div.call(null,f,mass));
var v__$1 = (cljs.core.truth_(vlim)?thi.ng.geom.core.limit.call(null,v,vlim):v);
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"vel","vel",-110770822),v__$1);
});
geom.elements.core.mover_step = (function geom$elements$core$mover_step(p__21511){
var map__21514 = p__21511;
var map__21514__$1 = ((((!((map__21514 == null)))?((((map__21514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21514):map__21514);
var m = map__21514__$1;
var vel = cljs.core.get.call(null,map__21514__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));
var loc = cljs.core.get.call(null,map__21514__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"loc","loc",-584284901),thi.ng.geom.core._PLUS_.call(null,loc,vel));
});
geom.elements.core.get_older = (function geom$elements$core$get_older(m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"age","age",-604307804)], null),cljs.core.inc);
});
geom.elements.core.element = (function geom$elements$core$element(opts){
return cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"act?","act?",1786542528),new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"age","age",-604307804),new cljs.core.Keyword(null,"act","act",190231886),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"loc","loc",-584284901),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"show","show",-576705889)],[(function (_,y){
var and__18263__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"fixed","fixed",-562004358).cljs$core$IFn$_invoke$arity$1(y));
if(and__18263__auto__){
return new cljs.core.Keyword(null,"mass","mass",-2138950046).cljs$core$IFn$_invoke$arity$1(y);
} else {
return and__18263__auto__;
}
}),(1),(0),(function (_,x){
return x;
}),cljs.core.constantly.call(null,null),geom.elements.core.v0,geom.elements.core.v0,cljs.core.comp.call(null,geom.elements.core.get_older,geom.elements.core.mover_step),(function (x){
var or__18275__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return new cljs.core.Keyword(null,"unnamed","unnamed",-26044928);
}
})]),opts);
});
geom.elements.core.step = (function geom$elements$core$step(x){
return new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(x).call(null,x);
});
geom.elements.core.act = (function geom$elements$core$act(x,y){
return new cljs.core.Keyword(null,"act","act",190231886).cljs$core$IFn$_invoke$arity$1(x).call(null,x,y);
});
geom.elements.core.act_QMARK_ = (function geom$elements$core$act_QMARK_(x,y){
return new cljs.core.Keyword(null,"act?","act?",1786542528).cljs$core$IFn$_invoke$arity$1(x).call(null,x,y);
});
geom.elements.core.show = (function geom$elements$core$show(x){
return new cljs.core.Keyword(null,"show","show",-576705889).cljs$core$IFn$_invoke$arity$1(x).call(null,x);
});
geom.elements.core.svg = (function geom$elements$core$svg(x){
return new cljs.core.Keyword(null,"svg","svg",856789142).cljs$core$IFn$_invoke$arity$1(x).call(null,x);
});
geom.elements.core.do_interactions = (function geom$elements$core$do_interactions(xs){
return cljs.core.reduce.call(null,(function (es,p__21518){
var vec__21519 = p__21518;
var i = cljs.core.nth.call(null,vec__21519,(0),null);
var e = cljs.core.nth.call(null,vec__21519,(1),null);
var f = ((function (vec__21519,i,e){
return (function (y){
if(cljs.core.truth_(geom.elements.core.act_QMARK_.call(null,e,y))){
return geom.elements.core.act.call(null,e,y);
} else {
return y;
}
});})(vec__21519,i,e))
;
return cljs.core.concat.call(null,cljs.core.map.call(null,f,cljs.core.take.call(null,i,es)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,es,i)], null),cljs.core.map.call(null,f,cljs.core.drop.call(null,(i + (1)),es)));
}),xs,cljs.core.map_indexed.call(null,cljs.core.vector,xs));
});
geom.elements.core.elements = (function geom$elements$core$elements(var_args){
var args__19340__auto__ = [];
var len__19333__auto___21521 = arguments.length;
var i__19334__auto___21522 = (0);
while(true){
if((i__19334__auto___21522 < len__19333__auto___21521)){
args__19340__auto__.push((arguments[i__19334__auto___21522]));

var G__21523 = (i__19334__auto___21522 + (1));
i__19334__auto___21522 = G__21523;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((0) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((0)),(0))):null);
return geom.elements.core.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__19341__auto__);
});

geom.elements.core.elements.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xs","xs",649443341),xs,new cljs.core.Keyword(null,"step","step",1288888124),(function (x){
return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs","xs",649443341)], null),(function (xs__$1){
return cljs.core.map.call(null,geom.elements.core.step,geom.elements.core.do_interactions.call(null,xs__$1));
}));
}),new cljs.core.Keyword(null,"svg","svg",856789142),(function (x){
return thi.ng.geom.svg.core.group.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,geom.elements.core.svg,new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(x)));
})], null);
});

geom.elements.core.elements.cljs$lang$maxFixedArity = (0);

geom.elements.core.elements.cljs$lang$applyTo = (function (seq21520){
return geom.elements.core.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21520));
});

//# sourceMappingURL=core.js.map