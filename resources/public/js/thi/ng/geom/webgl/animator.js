// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.webgl.animator');
goog.require('cljs.core');
thi.ng.geom.webgl.animator.animframe_provider = (function (){var or__18275__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
var or__18275__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__18275__auto____$1)){
return or__18275__auto____$1;
} else {
var or__18275__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__18275__auto____$2)){
return or__18275__auto____$2;
} else {
var or__18275__auto____$3 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__18275__auto____$3)){
return or__18275__auto____$3;
} else {
return window.oRequestAnimationFrame;
}
}
}
}
})();
thi.ng.geom.webgl.animator.now = (function thi$ng$geom$webgl$animator$now(){
var or__18275__auto__ = performance.now();
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
var or__18275__auto____$1 = performance.webkitNow();
if(cljs.core.truth_(or__18275__auto____$1)){
return or__18275__auto____$1;
} else {
var or__18275__auto____$2 = performance.mozNow();
if(cljs.core.truth_(or__18275__auto____$2)){
return or__18275__auto____$2;
} else {
var or__18275__auto____$3 = performance.msNow();
if(cljs.core.truth_(or__18275__auto____$3)){
return or__18275__auto____$3;
} else {
return performance.oNow();
}
}
}
}
});
thi.ng.geom.webgl.animator.animate = (function thi$ng$geom$webgl$animator$animate(var_args){
var args__19340__auto__ = [];
var len__19333__auto___23399 = arguments.length;
var i__19334__auto___23400 = (0);
while(true){
if((i__19334__auto___23400 < len__19333__auto___23399)){
args__19340__auto__.push((arguments[i__19334__auto___23400]));

var G__23401 = (i__19334__auto___23400 + (1));
i__19334__auto___23400 = G__23401;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((1) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((1)),(0))):null);
return thi.ng.geom.webgl.animator.animate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19341__auto__);
});

thi.ng.geom.webgl.animator.animate.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__23397){
var vec__23398 = p__23397;
var element = cljs.core.nth.call(null,vec__23398,(0),null);
var t0 = (new Date()).getTime();
var t = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var f_SINGLEQUOTE_ = ((function (t0,t,vec__23398,element){
return (function thi$ng$geom$webgl$animator$animate_STAR_(){
if(cljs.core.truth_(f.call(null,cljs.core.vreset_BANG_.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((new Date()).getTime() - t0) * 0.001),(cljs.core.deref.call(null,t).call(null,(1)) + (1))], null))))){
if(cljs.core.truth_(element)){
return thi.ng.geom.webgl.animator.animframe_provider.call(null,thi$ng$geom$webgl$animator$animate_STAR_,element);
} else {
return thi.ng.geom.webgl.animator.animframe_provider.call(null,thi$ng$geom$webgl$animator$animate_STAR_);
}
} else {
return null;
}
});})(t0,t,vec__23398,element))
;
return f_SINGLEQUOTE_.call(null);
});

thi.ng.geom.webgl.animator.animate.cljs$lang$maxFixedArity = (1);

thi.ng.geom.webgl.animator.animate.cljs$lang$applyTo = (function (seq23395){
var G__23396 = cljs.core.first.call(null,seq23395);
var seq23395__$1 = cljs.core.next.call(null,seq23395);
return thi.ng.geom.webgl.animator.animate.cljs$core$IFn$_invoke$arity$variadic(G__23396,seq23395__$1);
});

//# sourceMappingURL=animator.js.map