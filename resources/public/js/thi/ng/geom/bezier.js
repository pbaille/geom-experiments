// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.bezier');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.types.utils.ptf');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.types');
thi.ng.geom.bezier.bernstein = (function thi$ng$geom$bezier$bernstein(t){
var it = (1.0 - t);
var it2 = (it * it);
var t2 = (t * t);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(it * it2),((3) * (t * it2)),((3) * (it * t2)),(t * t2)], null);
});
thi.ng.geom.bezier.interpolate = (function thi$ng$geom$bezier$interpolate(p__21335,t){
var vec__21337 = p__21335;
var a = cljs.core.nth.call(null,vec__21337,(0),null);
var b = cljs.core.nth.call(null,vec__21337,(1),null);
var c = cljs.core.nth.call(null,vec__21337,(2),null);
var d = cljs.core.nth.call(null,vec__21337,(3),null);
var it = (1.0 - t);
var it2 = (it * it);
var t2 = (t * t);
return thi.ng.geom.core.madd.call(null,d,(t * t2),thi.ng.geom.core.madd.call(null,c,((3) * (it * t2)),thi.ng.geom.core.madd.call(null,b,((3) * (t * it2)),thi.ng.geom.core._STAR_.call(null,a,(it * it2)))));
});
thi.ng.geom.bezier.sample_segment = (function thi$ng$geom$bezier$sample_segment(seg,res){
return cljs.core.map.call(null,(function (p1__21338_SHARP_){
return thi.ng.geom.bezier.interpolate.call(null,seg,p1__21338_SHARP_);
}),cljs.core.butlast.call(null,thi.ng.math.core.norm_range.call(null,res)));
});
thi.ng.geom.bezier.sample_with_res = (function thi$ng$geom$bezier$sample_with_res(res,include_last_QMARK_,points){
var ls = cljs.core.mapcat.call(null,(function (p1__21339_SHARP_){
return thi.ng.geom.bezier.sample_segment.call(null,p1__21339_SHARP_,res);
}),cljs.core.take_nth.call(null,(3),thi.ng.dstruct.core.successive_nth.call(null,(4),points)));
if(cljs.core.truth_(include_last_QMARK_)){
return cljs.core.concat.call(null,ls,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,points)], null));
} else {
return ls;
}
});
thi.ng.geom.bezier.find_cpoints_STAR_ = (function thi$ng$geom$bezier$find_cpoints_STAR_(ctor,tight,points){
var np = cljs.core.count.call(null,points);
var invt = (1.0 / tight);
var points__$1 = cljs.core.vec.call(null,points);
var c1 = thi.ng.geom.core.subm.call(null,points__$1.call(null,(2)),cljs.core.first.call(null,points__$1),tight);
var vec__21343 = cljs.core.reduce.call(null,((function (np,invt,points__$1,c1){
return (function (p__21344,i){
var vec__21345 = p__21344;
var bi = cljs.core.nth.call(null,vec__21345,(0),null);
var coeff = cljs.core.nth.call(null,vec__21345,(1),null);
var b = (-1.0 / (invt + cljs.core.peek.call(null,bi)));
var c = cljs.core.peek.call(null,coeff);
var p = cljs.core.get.call(null,points__$1,(i - (1)));
var q = cljs.core.get.call(null,points__$1,(i + (1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,bi,b),cljs.core.conj.call(null,coeff,thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core._.call(null,q,p,c),(- b)))], null);
});})(np,invt,points__$1,c1))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- tight)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctor.call(null),c1], null)], null),cljs.core.range.call(null,(2),(np - (1))));
var bi = cljs.core.nth.call(null,vec__21343,(0),null);
var coeff = cljs.core.nth.call(null,vec__21343,(1),null);
return cljs.core.reduce.call(null,((function (np,invt,points__$1,c1,vec__21343,bi,coeff){
return (function (delta,i){
return cljs.core.assoc.call(null,delta,i,thi.ng.geom.core.madd.call(null,delta.call(null,(i + (1))),bi.call(null,i),coeff.call(null,i)));
});})(np,invt,points__$1,c1,vec__21343,bi,coeff))
,cljs.core.vec.call(null,cljs.core.repeatedly.call(null,np,ctor)),cljs.core.range.call(null,(np - (2)),(0),(-1)));
});
thi.ng.geom.bezier.auto_spline_STAR_ = (function thi$ng$geom$bezier$auto_spline_STAR_(points,cpoints){
return cljs.core.concat.call(null,cljs.core.mapcat.call(null,(function (p__21350){
var vec__21351 = p__21350;
var vec__21352 = cljs.core.nth.call(null,vec__21351,(0),null);
var p = cljs.core.nth.call(null,vec__21352,(0),null);
var q = cljs.core.nth.call(null,vec__21352,(1),null);
var vec__21353 = cljs.core.nth.call(null,vec__21351,(1),null);
var dp = cljs.core.nth.call(null,vec__21353,(0),null);
var dq = cljs.core.nth.call(null,vec__21353,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,thi.ng.geom.core._PLUS_.call(null,p,dp),thi.ng.geom.core._.call(null,q,dq)], null);
}),cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,thi.ng.dstruct.core.successive_nth.call(null,(2),points),thi.ng.dstruct.core.successive_nth.call(null,(2),cpoints)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,points)], null));
});
thi.ng.geom.bezier.bezier2 = (function thi$ng$geom$bezier$bezier2(points){
return (new thi.ng.geom.types.Bezier2(cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec2,points)));
});
thi.ng.geom.bezier.auto_spline2 = (function thi$ng$geom$bezier$auto_spline2(var_args){
var args21354 = [];
var len__19333__auto___21357 = arguments.length;
var i__19334__auto___21358 = (0);
while(true){
if((i__19334__auto___21358 < len__19333__auto___21357)){
args21354.push((arguments[i__19334__auto___21358]));

var G__21359 = (i__19334__auto___21358 + (1));
i__19334__auto___21358 = G__21359;
continue;
} else {
}
break;
}

var G__21356 = args21354.length;
switch (G__21356) {
case 1:
return thi.ng.geom.bezier.auto_spline2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.bezier.auto_spline2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21354.length)].join('')));

}
});

thi.ng.geom.bezier.auto_spline2.cljs$core$IFn$_invoke$arity$1 = (function (points){
return (new thi.ng.geom.types.Bezier2(thi.ng.geom.bezier.auto_spline_STAR_.call(null,points,thi.ng.geom.bezier.find_cpoints_STAR_.call(null,thi.ng.geom.core.vector.vec2,0.25,points))));
});

thi.ng.geom.bezier.auto_spline2.cljs$core$IFn$_invoke$arity$2 = (function (points,closed_QMARK_){
return thi.ng.geom.bezier.auto_spline2.call(null,(cljs.core.truth_(closed_QMARK_)?cljs.core.conj.call(null,cljs.core.vec.call(null,points),cljs.core.first.call(null,points)):points));
});

thi.ng.geom.bezier.auto_spline2.cljs$lang$maxFixedArity = 2;
thi.ng.geom.bezier.bezier3 = (function thi$ng$geom$bezier$bezier3(points){
return (new thi.ng.geom.types.Bezier3(cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec3,points)));
});
thi.ng.geom.bezier.auto_spline3 = (function thi$ng$geom$bezier$auto_spline3(var_args){
var args21361 = [];
var len__19333__auto___21364 = arguments.length;
var i__19334__auto___21365 = (0);
while(true){
if((i__19334__auto___21365 < len__19333__auto___21364)){
args21361.push((arguments[i__19334__auto___21365]));

var G__21366 = (i__19334__auto___21365 + (1));
i__19334__auto___21365 = G__21366;
continue;
} else {
}
break;
}

var G__21363 = args21361.length;
switch (G__21363) {
case 1:
return thi.ng.geom.bezier.auto_spline3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.bezier.auto_spline3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21361.length)].join('')));

}
});

thi.ng.geom.bezier.auto_spline3.cljs$core$IFn$_invoke$arity$1 = (function (points){
return (new thi.ng.geom.types.Bezier3(thi.ng.geom.bezier.auto_spline_STAR_.call(null,points,thi.ng.geom.bezier.find_cpoints_STAR_.call(null,thi.ng.geom.core.vector.vec3,0.25,points))));
});

thi.ng.geom.bezier.auto_spline3.cljs$core$IFn$_invoke$arity$2 = (function (points,closed_QMARK_){
return thi.ng.geom.bezier.auto_spline3.call(null,(cljs.core.truth_(closed_QMARK_)?cljs.core.conj.call(null,cljs.core.vec.call(null,points),cljs.core.first.call(null,points)):points));
});

thi.ng.geom.bezier.auto_spline3.cljs$lang$maxFixedArity = 2;
thi.ng.geom.types.Bezier2.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Bezier2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.vertices.call(null,___$1,thi.ng.geom.core._STAR_resolution_STAR_);
});

thi.ng.geom.types.Bezier2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.geom.bezier.sample_with_res.call(null,res,true,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Bezier2.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.Bezier2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.call(null,(2),thi.ng.geom.core.vertices.call(null,___$1,thi.ng.geom.core._STAR_resolution_STAR_));
});

thi.ng.geom.types.Bezier2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.call(null,(2),thi.ng.geom.core.vertices.call(null,___$1,res));
});

thi.ng.geom.types.Bezier2.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.Bezier2.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.dstruct.core.neighbors.call(null,v,thi.ng.geom.core.vertices.call(null,___$1));
});

thi.ng.geom.types.Bezier2.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
var points = thi.ng.geom.core.vertices.call(null,___$1);
var temp__4655__auto__ = thi.ng.dstruct.core.neighbors.call(null,v,points);
if(cljs.core.truth_(temp__4655__auto__)){
var p = temp__4655__auto__;
if(cljs.core.truth_((function (){var or__18275__auto__ = thi.ng.math.core.delta_EQ_.call(null,p,cljs.core.first.call(null,points));
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.math.core.delta_EQ_.call(null,p,cljs.core.peek.call(null,points));
}
})())){
return (1);
} else {
return (2);
}
} else {
return (0);
}
});

thi.ng.geom.types.Bezier2.prototype.thi$ng$geom$core$PMeshConvert$ = true;

thi.ng.geom.types.Bezier2.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,p__21368){
var map__21369 = p__21368;
var map__21369__$1 = ((((!((map__21369 == null)))?((((map__21369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21369):map__21369);
var opts = map__21369__$1;
var res = cljs.core.get.call(null,map__21369__$1,new cljs.core.Keyword(null,"res","res",-1395007879));
var dist = cljs.core.get.call(null,map__21369__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var profile = cljs.core.get.call(null,map__21369__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var ___$1 = this;
var points = (cljs.core.truth_(dist)?thi.ng.geom.core.sample_uniform.call(null,___$1,dist,true):thi.ng.geom.core.vertices.call(null,___$1,(function (){var or__18275__auto__ = res;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.core._STAR_resolution_STAR_;
}
})()));
return thi.ng.geom.types.utils.ptf.sweep_mesh.call(null,cljs.core.map.call(null,thi.ng.geom.core.vector.vec3,points),profile,opts);
});

thi.ng.geom.types.Bezier2.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Bezier2.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first.call(null,thi.ng.geom.core.utils.closest_point_on_segments.call(null,p,thi.ng.geom.core.edges.call(null,___$1)));
});

thi.ng.geom.types.Bezier2.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Bezier2.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.core.utils.point_at.call(null,t,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),null);
});

thi.ng.geom.types.Bezier2.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.point_at.call(null,thi.ng.math.core.random.call(null),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),null);
});

thi.ng.geom.types.Bezier2.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.random_point.call(null,___$1);
});

thi.ng.geom.types.Bezier2.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,udist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.core.utils.sample_uniform.call(null,udist,include_last_QMARK_,thi.ng.geom.core.vertices.call(null,___$1));
});
thi.ng.geom.types.Bezier3.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Bezier3.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.vertices.call(null,___$1,thi.ng.geom.core._STAR_resolution_STAR_);
});

thi.ng.geom.types.Bezier3.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.geom.bezier.sample_with_res.call(null,res,true,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Bezier3.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.Bezier3.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.call(null,(2),thi.ng.geom.core.vertices.call(null,___$1,thi.ng.geom.core._STAR_resolution_STAR_));
});

thi.ng.geom.types.Bezier3.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.call(null,(2),thi.ng.geom.core.vertices.call(null,___$1,res));
});

thi.ng.geom.types.Bezier3.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.Bezier3.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.dstruct.core.neighbors.call(null,v,thi.ng.geom.core.vertices.call(null,___$1));
});

thi.ng.geom.types.Bezier3.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
var points = thi.ng.geom.core.vertices.call(null,___$1);
var temp__4655__auto__ = thi.ng.dstruct.core.neighbors.call(null,v,points);
if(cljs.core.truth_(temp__4655__auto__)){
var p = temp__4655__auto__;
if(cljs.core.truth_((function (){var or__18275__auto__ = thi.ng.math.core.delta_EQ_.call(null,p,cljs.core.first.call(null,points));
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.math.core.delta_EQ_.call(null,p,cljs.core.peek.call(null,points));
}
})())){
return (1);
} else {
return (2);
}
} else {
return (0);
}
});

thi.ng.geom.types.Bezier3.prototype.thi$ng$geom$core$PMeshConvert$ = true;

thi.ng.geom.types.Bezier3.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,p__21371){
var map__21372 = p__21371;
var map__21372__$1 = ((((!((map__21372 == null)))?((((map__21372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21372):map__21372);
var opts = map__21372__$1;
var res = cljs.core.get.call(null,map__21372__$1,new cljs.core.Keyword(null,"res","res",-1395007879));
var dist = cljs.core.get.call(null,map__21372__$1,new cljs.core.Keyword(null,"dist","dist",-1401837144));
var profile = cljs.core.get.call(null,map__21372__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var ___$1 = this;
var points = (cljs.core.truth_(dist)?thi.ng.geom.core.sample_uniform.call(null,___$1,dist,true):thi.ng.geom.core.vertices.call(null,___$1,(function (){var or__18275__auto__ = res;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.core._STAR_resolution_STAR_;
}
})()));
return thi.ng.geom.types.utils.ptf.sweep_mesh.call(null,points,profile,opts);
});

thi.ng.geom.types.Bezier3.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Bezier3.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first.call(null,thi.ng.geom.core.utils.closest_point_on_segments.call(null,p,thi.ng.geom.core.edges.call(null,___$1)));
});

thi.ng.geom.types.Bezier3.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Bezier3.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.core.utils.point_at.call(null,t,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),null);
});

thi.ng.geom.types.Bezier3.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.point_at.call(null,thi.ng.math.core.random.call(null),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),null);
});

thi.ng.geom.types.Bezier3.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.random_point.call(null,___$1);
});

thi.ng.geom.types.Bezier3.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,udist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.core.utils.sample_uniform.call(null,udist,include_last_QMARK_,thi.ng.geom.core.vertices.call(null,___$1));
});

//# sourceMappingURL=bezier.js.map