// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.from_d3');
goog.require('cljs.core');
goog.require('cljsjs.d3');
goog.require('thi.ng.geom.core.vector');
geom.from_d3.voronoi = (function geom$from_d3$voronoi(var_args){
var args26971 = [];
var len__19333__auto___26974 = arguments.length;
var i__19334__auto___26975 = (0);
while(true){
if((i__19334__auto___26975 < len__19333__auto___26974)){
args26971.push((arguments[i__19334__auto___26975]));

var G__26976 = (i__19334__auto___26975 + (1));
i__19334__auto___26975 = G__26976;
continue;
} else {
}
break;
}

var G__26973 = args26971.length;
switch (G__26973) {
case 2:
return geom.from_d3.voronoi.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return geom.from_d3.voronoi.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26971.length)].join('')));

}
});

geom.from_d3.voronoi.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((typeof a === 'number') && (typeof b === 'number')){
return geom.from_d3.voronoi.call(null,(0),(0),a,b);
} else {
if(cljs.core.truth_((function (){var and__18263__auto__ = thi.ng.geom.core.vector.vec2_QMARK_.call(null,a);
if(cljs.core.truth_(and__18263__auto__)){
return thi.ng.geom.core.vector.vec2_QMARK_.call(null,b);
} else {
return and__18263__auto__;
}
})())){
return geom.from_d3.voronoi.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));
} else {
return null;
}
}
});

geom.from_d3.voronoi.cljs$core$IFn$_invoke$arity$4 = (function (x1,y1,x2,y2){
var vor = d3.geom.voronoi.call(null).clipExtent(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null)], null)));
return ((function (vor){
return (function (points){
return cljs.core.map.call(null,((function (vor){
return (function (poly,seed){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seed","seed",68613327),seed,new cljs.core.Keyword(null,"polygon","polygon",837053759),cljs.core.map.call(null,thi.ng.geom.core.vector.vec2,poly)], null);
});})(vor))
,cljs.core.js__GT_clj.call(null,vor.call(null,cljs.core.clj__GT_js.call(null,cljs.core.mapv.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),points)))),points);
});
;})(vor))
});

geom.from_d3.voronoi.cljs$lang$maxFixedArity = 4;
/**
 * return a fn that takes seq of vec2s and return a
 * voronoi diagram constrained in the given polygon (convex and counterclockwise)
 */
geom.from_d3.clipped_voronoi = (function geom$from_d3$clipped_voronoi(pts){
var xs = cljs.core.map.call(null,cljs.core.first,pts);
var ys = cljs.core.map.call(null,cljs.core.second,pts);
var max_x = cljs.core.apply.call(null,cljs.core.max,xs);
var max_y = cljs.core.apply.call(null,cljs.core.max,ys);
var min_x = cljs.core.apply.call(null,cljs.core.min,xs);
var min_y = cljs.core.apply.call(null,cljs.core.min,ys);
var cpol = d3.geom.polygon(cljs.core.clj__GT_js.call(null,pts));
var vor = d3.geom.voronoi.call(null).clipExtent(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [min_x,min_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_x,max_y], null)], null)));
return ((function (xs,ys,max_x,max_y,min_x,min_y,cpol,vor){
return (function (points){
return cljs.core.map.call(null,((function (xs,ys,max_x,max_y,min_x,min_y,cpol,vor){
return (function (poly,seed){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seed","seed",68613327),seed,new cljs.core.Keyword(null,"polygon","polygon",837053759),cljs.core.map.call(null,thi.ng.geom.core.vector.vec2,poly)], null);
});})(xs,ys,max_x,max_y,min_x,min_y,cpol,vor))
,cljs.core.js__GT_clj.call(null,vor.call(null,cljs.core.clj__GT_js.call(null,cljs.core.mapv.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),points))).map(((function (xs,ys,max_x,max_y,min_x,min_y,cpol,vor){
return (function (p1__26978_SHARP_){
return cpol.clip(d3.geom.polygon(p1__26978_SHARP_));
});})(xs,ys,max_x,max_y,min_x,min_y,cpol,vor))
)),points);
});
;})(xs,ys,max_x,max_y,min_x,min_y,cpol,vor))
});
geom.from_d3.n_polate = (function geom$from_d3$n_polate(n){
return (function (p__26983,p__26984){
var vec__26985 = p__26983;
var x0 = cljs.core.nth.call(null,vec__26985,(0),null);
var y0 = cljs.core.nth.call(null,vec__26985,(1),null);
var vec__26986 = p__26984;
var x1 = cljs.core.nth.call(null,vec__26986,(0),null);
var y1 = cljs.core.nth.call(null,vec__26986,(1),null);
return cljs.core.mapv.call(null,((function (vec__26985,x0,y0,vec__26986,x1,y1){
return (function (x){
return thi.ng.geom.core.vector.vec2.call(null,((((n - x) * x0) + (x * x1)) / n),((((n - x) * y0) + (x * y1)) / n));
});})(vec__26985,x0,y0,vec__26986,x1,y1))
,cljs.core.range.call(null,n));
});
});
geom.from_d3.polygon__GT_line = (function geom$from_d3$polygon__GT_line(pts,n_pol){
var line = d3.svg.line().interpolate("basis-closed");
var pairs = cljs.core.map.call(null,cljs.core.vector,cljs.core.cons.call(null,cljs.core.last.call(null,pts),pts),pts);
var points = cljs.core.mapcat.call(null,((function (line,pairs){
return (function (p__26989){
var vec__26990 = p__26989;
var a = cljs.core.nth.call(null,vec__26990,(0),null);
var b = cljs.core.nth.call(null,vec__26990,(1),null);
return geom.from_d3.n_polate.call(null,n_pol).call(null,a,b);
});})(line,pairs))
,pairs);
return line.call(null,cljs.core.clj__GT_js.call(null,points));
});

//# sourceMappingURL=from_d3.js.map