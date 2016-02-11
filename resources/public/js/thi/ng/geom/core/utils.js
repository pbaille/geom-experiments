// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.core.utils');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('clojure.core.reducers');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
thi.ng.geom.core.utils.closest_point_coeff = (function thi$ng$geom$core$utils$closest_point_coeff(p,a,b){
var d = thi.ng.geom.core._.call(null,b,a);
return (thi.ng.geom.core.dot.call(null,thi.ng.geom.core._.call(null,p,a),d) / thi.ng.geom.core.mag_squared.call(null,d));
});
thi.ng.geom.core.utils.closest_point_on_line = (function thi$ng$geom$core$utils$closest_point_on_line(p,a,b){
return thi.ng.geom.core.mix.call(null,a,b,thi.ng.geom.core.utils.closest_point_coeff.call(null,p,a,b));
});
thi.ng.geom.core.utils.closest_point_on_segment = (function thi$ng$geom$core$utils$closest_point_on_segment(p,a,b){
var t = thi.ng.geom.core.utils.closest_point_coeff.call(null,p,a,b);
if((t <= 0.0)){
return a;
} else {
if((t >= 1.0)){
return b;
} else {
return thi.ng.geom.core.mix.call(null,a,b,t);
}
}
});
thi.ng.geom.core.utils.closest_point_on_segments = (function thi$ng$geom$core$utils$closest_point_on_segments(p,segments){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__22023_SHARP_){
return cljs.core.apply.call(null,thi.ng.geom.core.utils.closest_point_on_segment,p,p1__22023_SHARP_);
})),cljs.core.completing.call(null,(function (a,q){
var d_SINGLEQUOTE_ = thi.ng.geom.core.dist_squared.call(null,p,q);
if((d_SINGLEQUOTE_ < a.call(null,(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,d_SINGLEQUOTE_], null);
} else {
return a;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.INF_PLUS_], null),segments);
});
thi.ng.geom.core.utils.closest_line_between = (function thi$ng$geom$core$utils$closest_line_between(a1,b1,a2,b2){
var p43 = thi.ng.geom.core._.call(null,b2,a2);
if(cljs.core.not.call(null,thi.ng.math.core.delta_EQ_.call(null,thi.ng.geom.core.vector.V3,p43,thi.ng.math.core._STAR_eps_STAR_))){
var p21 = thi.ng.geom.core._.call(null,b1,a1);
if(cljs.core.not.call(null,thi.ng.math.core.delta_EQ_.call(null,thi.ng.geom.core.vector.V3,p21,thi.ng.math.core._STAR_eps_STAR_))){
var p13 = thi.ng.geom.core._.call(null,a1,a2);
var d1343 = thi.ng.geom.core.dot.call(null,p13,p43);
var d4321 = thi.ng.geom.core.dot.call(null,p43,p21);
var d1321 = thi.ng.geom.core.dot.call(null,p13,p21);
var d4343 = thi.ng.geom.core.dot.call(null,p43,p43);
var d2121 = thi.ng.geom.core.dot.call(null,p21,p21);
var d = ((d2121 * d4343) - (d4321 * d4321));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,d,thi.ng.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null);
} else {
var n = ((d1343 * d4321) - (d1321 * d4343));
var ua = (n / d);
var ub = (((d4321 * ua) + d1343) / d4343);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"a","a",-2123407586),thi.ng.geom.core.madd.call(null,p21,ua,a1),new cljs.core.Keyword(null,"b","b",1482224470),thi.ng.geom.core.madd.call(null,p43,ub,a2),new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
}
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.core.utils.dist_STAR_ = (function thi$ng$geom$core$utils$dist_STAR_(rf){
return (function (c,points){
return Math.sqrt(cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__22024_SHARP_){
return thi.ng.geom.core.dist_squared.call(null,c,p1__22024_SHARP_);
})),rf,(0),points));
});
});
thi.ng.geom.core.utils.min_dist = thi.ng.geom.core.utils.dist_STAR_.call(null,cljs.core.min);
thi.ng.geom.core.utils.max_dist = thi.ng.geom.core.utils.dist_STAR_.call(null,cljs.core.max);
thi.ng.geom.core.utils.arc_length_index = (function thi$ng$geom$core$utils$arc_length_index(points){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__22025_SHARP_){
return thi.ng.geom.core.dist.call(null,p1__22025_SHARP_.call(null,(0)),p1__22025_SHARP_.call(null,(1)));
})),cljs.core.completing.call(null,(function (a,d){
return cljs.core.conj.call(null,a,(cljs.core.peek.call(null,a) + d));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),thi.ng.dstruct.core.successive_nth.call(null,(2),points));
});
thi.ng.geom.core.utils.arc_length = (function thi$ng$geom$core$utils$arc_length(points){
return thi.ng.dstruct.core.reduce_pairs.call(null,cljs.core._PLUS_,thi.ng.geom.core.dist,points);
});
thi.ng.geom.core.utils.centroid = (function thi$ng$geom$core$utils$centroid(p__22026){
var vec__22029 = p__22026;
var x = cljs.core.nth.call(null,vec__22029,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22029,(1));
var coll = vec__22029;
var G__22030 = cljs.core.count.call(null,coll);
switch (G__22030) {
case (0):
return null;

break;
case (1):
return x;

break;
case (2):
return thi.ng.geom.core.mix.call(null,x,cljs.core.first.call(null,xs));

break;
default:
var s = (1.0 / cljs.core.count.call(null,coll));
var f = ((function (s,G__22030,vec__22029,x,xs,coll){
return (function (x__$1,_){
return (x__$1 * s);
});})(s,G__22030,vec__22029,x,xs,coll))
;
return thi.ng.geom.core.reduce_vector.call(null,x,cljs.core._PLUS_,f,xs);

}
});
thi.ng.geom.core.utils.center = (function thi$ng$geom$core$utils$center(var_args){
var args22033 = [];
var len__19333__auto___22036 = arguments.length;
var i__19334__auto___22037 = (0);
while(true){
if((i__19334__auto___22037 < len__19333__auto___22036)){
args22033.push((arguments[i__19334__auto___22037]));

var G__22038 = (i__19334__auto___22037 + (1));
i__19334__auto___22037 = G__22038;
continue;
} else {
}
break;
}

var G__22035 = args22033.length;
switch (G__22035) {
case 2:
return thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22033.length)].join('')));

}
});

thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$2 = (function (c_SINGLEQUOTE_,coll){
return thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.utils.centroid.call(null,coll),c_SINGLEQUOTE_,coll);
});

thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$3 = (function (c,c_SINGLEQUOTE_,coll){
var d = thi.ng.geom.core._.call(null,c_SINGLEQUOTE_,c);
return cljs.core.mapv.call(null,((function (d){
return (function (p1__22032_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p1__22032_SHARP_,d);
});})(d))
,coll);
});

thi.ng.geom.core.utils.center.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.utils.scale_size = (function thi$ng$geom$core$utils$scale_size(var_args){
var args22041 = [];
var len__19333__auto___22044 = arguments.length;
var i__19334__auto___22045 = (0);
while(true){
if((i__19334__auto___22045 < len__19333__auto___22044)){
args22041.push((arguments[i__19334__auto___22045]));

var G__22046 = (i__19334__auto___22045 + (1));
i__19334__auto___22045 = G__22046;
continue;
} else {
}
break;
}

var G__22043 = args22041.length;
switch (G__22043) {
case 2:
return thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22041.length)].join('')));

}
});

thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$2 = (function (s,coll){
return thi.ng.geom.core.utils.scale_size.call(null,thi.ng.geom.core.utils.centroid.call(null,coll),s,coll);
});

thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$3 = (function (c,s,coll){
return cljs.core.mapv.call(null,(function (p1__22040_SHARP_){
return thi.ng.geom.core.madd.call(null,thi.ng.geom.core._.call(null,p1__22040_SHARP_,c),s,c);
}),coll);
});

thi.ng.geom.core.utils.scale_size.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.utils.bounds_STAR_ = (function thi$ng$geom$core$utils$bounds_STAR_(zero,p__22048){
var vec__22050 = p__22048;
var x = cljs.core.nth.call(null,vec__22050,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22050,(1));
var coll = vec__22050;
var c = cljs.core.count.call(null,coll);
if((c > (1))){
var p = thi.ng.geom.core.reduce_vector.call(null,x,cljs.core.min,xs);
var q = thi.ng.geom.core.reduce_vector.call(null,x,cljs.core.max,xs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,thi.ng.geom.core._.call(null,q,p)], null);
} else {
if(cljs.core._EQ_.call(null,c,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,zero], null);
} else {
return null;

}
}
});
thi.ng.geom.core.utils.bounding_rect = (function thi$ng$geom$core$utils$bounding_rect(points){
return thi.ng.geom.core.utils.bounds_STAR_.call(null,thi.ng.geom.core.vector.V2,points);
});
thi.ng.geom.core.utils.bounding_box = (function thi$ng$geom$core$utils$bounding_box(points){
return thi.ng.geom.core.utils.bounds_STAR_.call(null,thi.ng.geom.core.vector.V3,points);
});
thi.ng.geom.core.utils.radial_bounds = (function thi$ng$geom$core$utils$radial_bounds(ctor,c,r_or_points){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctor.call(null,c),((cljs.core.coll_QMARK_.call(null,r_or_points))?thi.ng.geom.core.utils.max_dist.call(null,c,r_or_points):r_or_points)], null);
});
thi.ng.geom.core.utils.axis_bounds = (function thi$ng$geom$core$utils$axis_bounds(axis,coll){
var xs = cljs.core.mapv.call(null,(function (p1__22051_SHARP_){
return cljs.core.nth.call(null,p1__22051_SHARP_,axis);
}),coll);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core.min,xs),cljs.core.reduce.call(null,cljs.core.max,xs)], null);
});
thi.ng.geom.core.utils.axis_range = (function thi$ng$geom$core$utils$axis_range(axis,coll){
return (- cljs.core.apply.call(null,cljs.core._,thi.ng.geom.core.utils.axis_bounds.call(null,axis,coll)));
});
thi.ng.geom.core.utils.delta_contains = (function thi$ng$geom$core$utils$delta_contains(points,p,eps){
return cljs.core.some.call(null,(function (p1__22052_SHARP_){
return thi.ng.math.core.delta_EQ_.call(null,p,p1__22052_SHARP_,eps);
}),points);
});
thi.ng.geom.core.utils.from_barycentric = (function thi$ng$geom$core$utils$from_barycentric(points,weights){
return cljs.core.reduce.call(null,thi.ng.geom.core._PLUS_,cljs.core.map.call(null,thi.ng.geom.core._STAR_,points,weights));
});
thi.ng.geom.core.utils.point_at_STAR_ = (function thi$ng$geom$core$utils$point_at_STAR_(points,idx,total,t,i){
var ct = (t * total);
var i__$1 = ((function (){var i__$1 = i;
while(true){
if((ct >= idx.call(null,i__$1))){
var G__22053 = (i__$1 + (1));
i__$1 = G__22053;
continue;
} else {
return i__$1;
}
break;
}
})() | (0));
var i1 = (i__$1 - (1));
var pi = idx.call(null,i1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.mix.call(null,cljs.core.nth.call(null,points,i1),cljs.core.nth.call(null,points,i__$1),((ct - pi) / (idx.call(null,i__$1) - pi))),i__$1], null);
});
thi.ng.geom.core.utils.point_at = (function thi$ng$geom$core$utils$point_at(var_args){
var args22054 = [];
var len__19333__auto___22057 = arguments.length;
var i__19334__auto___22058 = (0);
while(true){
if((i__19334__auto___22058 < len__19333__auto___22057)){
args22054.push((arguments[i__19334__auto___22058]));

var G__22059 = (i__19334__auto___22058 + (1));
i__19334__auto___22058 = G__22059;
continue;
} else {
}
break;
}

var G__22056 = args22054.length;
switch (G__22056) {
case 2:
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22054.length)].join('')));

}
});

thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$2 = (function (t,points){
return thi.ng.geom.core.utils.point_at.call(null,t,points,null);
});

thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$3 = (function (t,points,idx){
if(cljs.core.truth_(thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,t))){
var n = cljs.core.count.call(null,points);
var t__$1 = t;
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return cljs.core.first.call(null,points);
} else {
if((1.0 === t__$1)){
return cljs.core.last.call(null,points);
} else {
var idx__$1 = (function (){var or__18275__auto__ = idx;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.core.utils.arc_length_index.call(null,points);
}
})();
return cljs.core.first.call(null,thi.ng.geom.core.utils.point_at_STAR_.call(null,points,idx__$1,cljs.core.peek.call(null,idx__$1),t__$1,(1)));

}
}
}
} else {
return null;
}
});

thi.ng.geom.core.utils.point_at.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.utils.sample_uniform_STAR_ = (function thi$ng$geom$core$utils$sample_uniform_STAR_(udist,include_last_QMARK_,points){
var idx = thi.ng.geom.core.utils.arc_length_index.call(null,points);
var total = cljs.core.peek.call(null,idx);
var delta = (udist / total);
var samples = (function (){var t = 0.0;
var i = (1);
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if((t < 1.0)){
var vec__22062 = thi.ng.geom.core.utils.point_at_STAR_.call(null,points,idx,total,t,i);
var p = cljs.core.nth.call(null,vec__22062,(0),null);
var i__$1 = cljs.core.nth.call(null,vec__22062,(1),null);
var G__22063 = (t + delta);
var G__22064 = (i__$1 | (0));
var G__22065 = cljs.core.conj.call(null,acc,p);
t = G__22063;
i = G__22064;
acc = G__22065;
continue;
} else {
return acc;
}
break;
}
})();
if(cljs.core.truth_(include_last_QMARK_)){
return cljs.core.conj.call(null,samples,cljs.core.last.call(null,points));
} else {
return samples;
}
});
thi.ng.geom.core.utils.sample_uniform = (function thi$ng$geom$core$utils$sample_uniform(udist,include_last_QMARK_,points){
var n = cljs.core.count.call(null,points);
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,points)], null);
} else {
return thi.ng.geom.core.utils.sample_uniform_STAR_.call(null,udist,include_last_QMARK_,points);

}
}
});
thi.ng.geom.core.utils.sample_segment_with_res = (function thi$ng$geom$core$utils$sample_segment_with_res(a,b,res,include_b_QMARK_){
var ls = (function (){var iter__19047__auto__ = (function thi$ng$geom$core$utils$sample_segment_with_res_$_iter__22070(s__22071){
return (new cljs.core.LazySeq(null,(function (){
var s__22071__$1 = s__22071;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22071__$1);
if(temp__4657__auto__){
var s__22071__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22071__$2)){
var c__19045__auto__ = cljs.core.chunk_first.call(null,s__22071__$2);
var size__19046__auto__ = cljs.core.count.call(null,c__19045__auto__);
var b__22073 = cljs.core.chunk_buffer.call(null,size__19046__auto__);
if((function (){var i__22072 = (0);
while(true){
if((i__22072 < size__19046__auto__)){
var t = cljs.core._nth.call(null,c__19045__auto__,i__22072);
cljs.core.chunk_append.call(null,b__22073,thi.ng.geom.core.mix.call(null,a,b,t));

var G__22074 = (i__22072 + (1));
i__22072 = G__22074;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22073),thi$ng$geom$core$utils$sample_segment_with_res_$_iter__22070.call(null,cljs.core.chunk_rest.call(null,s__22071__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22073),null);
}
} else {
var t = cljs.core.first.call(null,s__22071__$2);
return cljs.core.cons.call(null,thi.ng.geom.core.mix.call(null,a,b,t),thi$ng$geom$core$utils$sample_segment_with_res_$_iter__22070.call(null,cljs.core.rest.call(null,s__22071__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19047__auto__.call(null,thi.ng.math.core.norm_range.call(null,res));
})();
if(cljs.core.truth_(include_b_QMARK_)){
return ls;
} else {
return cljs.core.butlast.call(null,ls);
}
});
/**
 * Takes a seq of 4 points in ccw order and 2D vector of normalized UV
 *   coordinates. Applies bilinear interpolation to compute point within
 *   the rect: U is coord along AB/DC edge, V along BC/AD
 */
thi.ng.geom.core.utils.map_bilinear = (function thi$ng$geom$core$utils$map_bilinear(p__22075,p__22076){
var vec__22079 = p__22075;
var a = cljs.core.nth.call(null,vec__22079,(0),null);
var b = cljs.core.nth.call(null,vec__22079,(1),null);
var c = cljs.core.nth.call(null,vec__22079,(2),null);
var d = cljs.core.nth.call(null,vec__22079,(3),null);
var vec__22080 = p__22076;
var u = cljs.core.nth.call(null,vec__22080,(0),null);
var v = cljs.core.nth.call(null,vec__22080,(1),null);
return thi.ng.geom.core.mix.call(null,a,b,d,c,u,v);
});
/**
 * Takes a seq of 8 points defining a cuboid and vector of normalized
 *   UVW coordinates. Applies trilinear interpolation to compute point
 *   within the cuboid: U is coord along AD/BC edge, V along AE/BF, W
 *   along AB/DC (see above diagram)
 */
thi.ng.geom.core.utils.map_trilinear = (function thi$ng$geom$core$utils$map_trilinear(p__22081,p__22082){
var vec__22085 = p__22081;
var a = cljs.core.nth.call(null,vec__22085,(0),null);
var b = cljs.core.nth.call(null,vec__22085,(1),null);
var c = cljs.core.nth.call(null,vec__22085,(2),null);
var d = cljs.core.nth.call(null,vec__22085,(3),null);
var e = cljs.core.nth.call(null,vec__22085,(4),null);
var f = cljs.core.nth.call(null,vec__22085,(5),null);
var g = cljs.core.nth.call(null,vec__22085,(6),null);
var h = cljs.core.nth.call(null,vec__22085,(7),null);
var vec__22086 = p__22082;
var u = cljs.core.nth.call(null,vec__22086,(0),null);
var v = cljs.core.nth.call(null,vec__22086,(1),null);
var w = cljs.core.nth.call(null,vec__22086,(2),null);
return thi.ng.geom.core.mix.call(null,thi.ng.geom.core.mix.call(null,a,d,e,h,u,v),thi.ng.geom.core.mix.call(null,b,c,f,g,u,v),w);
});
thi.ng.geom.core.utils.tessellate_with_point = (function thi$ng$geom$core$utils$tessellate_with_point(var_args){
var args22088 = [];
var len__19333__auto___22091 = arguments.length;
var i__19334__auto___22092 = (0);
while(true){
if((i__19334__auto___22092 < len__19333__auto___22091)){
args22088.push((arguments[i__19334__auto___22092]));

var G__22093 = (i__19334__auto___22092 + (1));
i__19334__auto___22092 = G__22093;
continue;
} else {
}
break;
}

var G__22090 = args22088.length;
switch (G__22090) {
case 1:
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22088.length)].join('')));

}
});

thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.core.utils.tessellate_with_point.call(null,thi.ng.geom.core.utils.centroid.call(null,points),points);
});

thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2 = (function (c,points){
return cljs.core.mapv.call(null,(function (p1__22087_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c,p1__22087_SHARP_.call(null,(0)),p1__22087_SHARP_.call(null,(1))],null));
}),thi.ng.dstruct.core.successive_nth.call(null,(2),cljs.core.concat.call(null,points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,points)], null))));
});

thi.ng.geom.core.utils.tessellate_with_point.cljs$lang$maxFixedArity = 2;
thi.ng.geom.core.utils.tessellate_with_first = (function thi$ng$geom$core$utils$tessellate_with_first(points){
if((cljs.core.count.call(null,points) > (3))){
var vec__22098 = points;
var v0 = cljs.core.nth.call(null,vec__22098,(0),null);
var more = cljs.core.nthnext.call(null,vec__22098,(1));
return cljs.core.mapv.call(null,((function (vec__22098,v0,more){
return (function (p__22099){
var vec__22100 = p__22099;
var a = cljs.core.nth.call(null,vec__22100,(0),null);
var b = cljs.core.nth.call(null,vec__22100,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,a,b], null);
});})(vec__22098,v0,more))
,thi.ng.dstruct.core.successive_nth.call(null,(2),more));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
}
});
thi.ng.geom.core.utils.tessellate_tri_with_midpoints = (function thi$ng$geom$core$utils$tessellate_tri_with_midpoints(p__22101){
var vec__22103 = p__22101;
var a = cljs.core.nth.call(null,vec__22103,(0),null);
var b = cljs.core.nth.call(null,vec__22103,(1),null);
var c = cljs.core.nth.call(null,vec__22103,(2),null);
var ab = thi.ng.geom.core.mix.call(null,a,b);
var bc = thi.ng.geom.core.mix.call(null,b,c);
var ca = thi.ng.geom.core.mix.call(null,c,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,ab,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,b,bc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bc,c,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,bc,ca], null)], null);
});
thi.ng.geom.core.utils.tessellate_3 = (function thi$ng$geom$core$utils$tessellate_3(points){
var pred__22108 = cljs.core._EQ_;
var expr__22109 = cljs.core.count.call(null,points);
if(cljs.core.truth_(pred__22108.call(null,(3),expr__22109))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
if(cljs.core.truth_(pred__22108.call(null,(4),expr__22109))){
var vec__22111 = points;
var a = cljs.core.nth.call(null,vec__22111,(0),null);
var b = cljs.core.nth.call(null,vec__22111,(1),null);
var c = cljs.core.nth.call(null,vec__22111,(2),null);
var d = cljs.core.nth.call(null,vec__22111,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,d], null)], null);
} else {
return thi.ng.geom.core.utils.tessellate_with_point.call(null,points);
}
}
});
thi.ng.geom.core.utils.tessellate_max4 = (function thi$ng$geom$core$utils$tessellate_max4(points){
if((cljs.core.count.call(null,points) <= (4))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
return thi.ng.geom.core.utils.tessellate_with_point.call(null,points);
}
});
thi.ng.geom.core.utils.ortho_normal = (function thi$ng$geom$core$utils$ortho_normal(var_args){
var args22112 = [];
var len__19333__auto___22117 = arguments.length;
var i__19334__auto___22118 = (0);
while(true){
if((i__19334__auto___22118 < len__19333__auto___22117)){
args22112.push((arguments[i__19334__auto___22118]));

var G__22119 = (i__19334__auto___22118 + (1));
i__19334__auto___22118 = G__22119;
continue;
} else {
}
break;
}

var G__22114 = args22112.length;
switch (G__22114) {
case 1:
return thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22112.length)].join('')));

}
});

thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1 = (function (p__22115){
var vec__22116 = p__22115;
var a = cljs.core.nth.call(null,vec__22116,(0),null);
var b = cljs.core.nth.call(null,vec__22116,(1),null);
var c = cljs.core.nth.call(null,vec__22116,(2),null);
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.cross.call(null,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a)));
});

thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.cross.call(null,a,b));
});

thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.cross.call(null,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a)));
});

thi.ng.geom.core.utils.ortho_normal.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.utils.norm_sign2 = (function thi$ng$geom$core$utils$norm_sign2(p__22121,p__22122,p__22123){
var vec__22127 = p__22121;
var ax = cljs.core.nth.call(null,vec__22127,(0),null);
var ay = cljs.core.nth.call(null,vec__22127,(1),null);
var vec__22128 = p__22122;
var bx = cljs.core.nth.call(null,vec__22128,(0),null);
var by = cljs.core.nth.call(null,vec__22128,(1),null);
var vec__22129 = p__22123;
var cx = cljs.core.nth.call(null,vec__22129,(0),null);
var cy = cljs.core.nth.call(null,vec__22129,(1),null);
return (((bx - ax) * (cy - ay)) - ((cx - ax) * (by - ay)));
});
thi.ng.geom.core.utils.norm_sign3 = (function thi$ng$geom$core$utils$norm_sign3(a,b,c){
return thi.ng.geom.core.mag.call(null,thi.ng.geom.core.cross.call(null,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a)));
});
thi.ng.geom.core.utils.tri_area2 = (function thi$ng$geom$core$utils$tri_area2(a,b,c){
return (0.5 * thi.ng.geom.core.utils.norm_sign2.call(null,a,b,c));
});
thi.ng.geom.core.utils.tri_area3 = (function thi$ng$geom$core$utils$tri_area3(a,b,c){
return (0.5 * thi.ng.geom.core.utils.norm_sign3.call(null,a,b,c));
});
thi.ng.geom.core.utils.clockwise2_QMARK_ = (function thi$ng$geom$core$utils$clockwise2_QMARK_(a,b,c){
return (thi.ng.geom.core.utils.norm_sign2.call(null,a,b,c) < (0));
});
thi.ng.geom.core.utils.clockwise3_QMARK_ = (function thi$ng$geom$core$utils$clockwise3_QMARK_(a,b,c,n){
return (thi.ng.geom.core.dot.call(null,thi.ng.geom.core.cross.call(null,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a)),n) > (0));
});
thi.ng.geom.core.utils.triangle_barycentric_coords = (function thi$ng$geom$core$utils$triangle_barycentric_coords(var_args){
var args22130 = [];
var len__19333__auto___22135 = arguments.length;
var i__19334__auto___22136 = (0);
while(true){
if((i__19334__auto___22136 < len__19333__auto___22135)){
args22130.push((arguments[i__19334__auto___22136]));

var G__22137 = (i__19334__auto___22136 + (1));
i__19334__auto___22136 = G__22137;
continue;
} else {
}
break;
}

var G__22132 = args22130.length;
switch (G__22132) {
case 2:
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22130.length)].join('')));

}
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2 = (function (p__22133,p){
var vec__22134 = p__22133;
var a = cljs.core.nth.call(null,vec__22134,(0),null);
var b = cljs.core.nth.call(null,vec__22134,(1),null);
var c = cljs.core.nth.call(null,vec__22134,(2),null);
return thi.ng.geom.core.utils.triangle_barycentric_coords.call(null,a,b,c,p,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a));
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,p){
return thi.ng.geom.core.utils.triangle_barycentric_coords.call(null,a,b,c,p,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a));
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,p,u,v){
var w = thi.ng.geom.core._.call(null,p,a);
var uu = thi.ng.geom.core.mag_squared.call(null,u);
var vv = thi.ng.geom.core.mag_squared.call(null,v);
var uv = thi.ng.geom.core.dot.call(null,u,v);
var wu = thi.ng.geom.core.dot.call(null,w,u);
var wv = thi.ng.geom.core.dot.call(null,w,v);
var denom = (1.0 / ((uv * uv) - (uu * vv)));
var s = (denom * ((uv * wv) - (vv * wu)));
var t = (denom * ((uv * wu) - (uu * wv)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1.0 - (s + t)),s,t], null);
});

thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$lang$maxFixedArity = 6;
thi.ng.geom.core.utils.point_in_triangle2_QMARK_ = (function thi$ng$geom$core$utils$point_in_triangle2_QMARK_(p,a,b,c){
if(cljs.core.truth_(thi.ng.geom.core.utils.clockwise2_QMARK_.call(null,a,b,c))){
return ((thi.ng.geom.core.utils.norm_sign2.call(null,a,c,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2.call(null,b,a,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2.call(null,c,b,p) >= 0.0));
} else {
return ((thi.ng.geom.core.utils.norm_sign2.call(null,b,c,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2.call(null,a,b,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2.call(null,c,a,p) >= 0.0));
}
});
thi.ng.geom.core.utils.point_in_triangle3_QMARK_ = (function thi$ng$geom$core$utils$point_in_triangle3_QMARK_(p,a,b,c){
var u = thi.ng.geom.core._.call(null,b,a);
var v = thi.ng.geom.core._.call(null,c,a);
var n = thi.ng.geom.core.utils.ortho_normal.call(null,u,v);
var cl = (thi.ng.geom.core.dot.call(null,n,p) - thi.ng.geom.core.dot.call(null,n,a));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,cl))){
var vec__22140 = thi.ng.geom.core.utils.triangle_barycentric_coords.call(null,a,b,c,p,u,v);
var u__$1 = cljs.core.nth.call(null,vec__22140,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__22140,(1),null);
var w = cljs.core.nth.call(null,vec__22140,(2),null);
var and__18263__auto__ = (u__$1 >= 0.0);
if(and__18263__auto__){
var and__18263__auto____$1 = (w >= 0.0);
if(and__18263__auto____$1){
return thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,v__$1);
} else {
return and__18263__auto____$1;
}
} else {
return and__18263__auto__;
}
} else {
return null;
}
});
thi.ng.geom.core.utils.tessellating_transducer = (function thi$ng$geom$core$utils$tessellating_transducer(f){
return cljs.core.comp.call(null,cljs.core.mapcat.call(null,thi.ng.geom.core.utils.tessellate_with_first),cljs.core.map.call(null,f));
});
thi.ng.geom.core.utils.area_xf = thi.ng.geom.core.utils.tessellating_transducer.call(null,(function (p1__22141_SHARP_){
return thi.ng.math.core.abs.call(null,cljs.core.apply.call(null,thi.ng.geom.core.utils.tri_area3,p1__22141_SHARP_));
}));
thi.ng.geom.core.utils.volume_xf = thi.ng.geom.core.utils.tessellating_transducer.call(null,(function (p1__22142_SHARP_){
return thi.ng.geom.core.dot.call(null,p1__22142_SHARP_.call(null,(0)),thi.ng.geom.core.cross.call(null,p1__22142_SHARP_.call(null,(1)),p1__22142_SHARP_.call(null,(2))));
}));
thi.ng.geom.core.utils.total_area_3d = (function thi$ng$geom$core$utils$total_area_3d(faces){
return cljs.core.transduce.call(null,thi.ng.geom.core.utils.area_xf,cljs.core._PLUS_,faces);
});
thi.ng.geom.core.utils.total_volume = (function thi$ng$geom$core$utils$total_volume(faces){
return (cljs.core.transduce.call(null,thi.ng.geom.core.utils.volume_xf,cljs.core._PLUS_,faces) / 6.0);
});

//# sourceMappingURL=utils.js.map