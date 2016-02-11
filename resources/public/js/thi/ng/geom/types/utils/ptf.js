// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.types.utils.ptf');
goog.require('cljs.core');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.core.matrix');
thi.ng.geom.types.utils.ptf.compute_tangents = (function thi$ng$geom$types$utils$ptf$compute_tangents(points){
var t = cljs.core.mapv.call(null,(function (p__21378){
var vec__21379 = p__21378;
var p = cljs.core.nth.call(null,vec__21379,(0),null);
var q = cljs.core.nth.call(null,vec__21379,(1),null);
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,q,p));
}),thi.ng.dstruct.core.successive_nth.call(null,(2),points));
return cljs.core.conj.call(null,t,cljs.core.peek.call(null,t));
});
thi.ng.geom.types.utils.ptf.compute_frame = (function thi$ng$geom$types$utils$ptf$compute_frame(tangents,norms,bnorms,i){
var ii = (i - (1));
var p = tangents.call(null,ii);
var q = tangents.call(null,i);
var a = thi.ng.geom.core.cross.call(null,p,q);
var n = ((cljs.core.not.call(null,thi.ng.math.core.delta_EQ_.call(null,0.0,thi.ng.geom.core.mag_squared.call(null,a))))?(function (){var theta = Math.acos(thi.ng.math.core.clamp_normalized.call(null,thi.ng.geom.core.dot.call(null,p,q)));
return thi.ng.geom.core.transform_vector.call(null,thi.ng.geom.core.rotate_around_axis.call(null,thi.ng.geom.core.matrix.M44,thi.ng.geom.core.normalize.call(null,a),theta),norms.call(null,ii));
})():norms.call(null,ii));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,thi.ng.geom.core.cross.call(null,q,n)], null);
});
thi.ng.geom.types.utils.ptf.compute_first_frame = (function thi$ng$geom$types$utils$ptf$compute_first_frame(t){
var t_SINGLEQUOTE_ = thi.ng.geom.core.abs.call(null,t);
var i = (((t_SINGLEQUOTE_.call(null,(0)) < t_SINGLEQUOTE_.call(null,(1))))?(0):(1));
var i__$1 = (((t_SINGLEQUOTE_.call(null,(2)) < t_SINGLEQUOTE_.call(null,i)))?(2):i);
var n = thi.ng.geom.core.cross.call(null,t,thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.cross.call(null,t,cljs.core.assoc.call(null,thi.ng.geom.core.vector.V3,i__$1,1.0))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,thi.ng.geom.core.cross.call(null,t,n)], null);
});
thi.ng.geom.types.utils.ptf.compute_frames = (function thi$ng$geom$types$utils$ptf$compute_frames(points){
var tangents = thi.ng.geom.types.utils.ptf.compute_tangents.call(null,points);
var vec__21382 = thi.ng.geom.types.utils.ptf.compute_first_frame.call(null,cljs.core.first.call(null,tangents));
var n = cljs.core.nth.call(null,vec__21382,(0),null);
var b = cljs.core.nth.call(null,vec__21382,(1),null);
var num = cljs.core.count.call(null,tangents);
var norms = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null);
var bnorms = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null);
var i = (1);
while(true){
if((i < num)){
var vec__21383 = thi.ng.geom.types.utils.ptf.compute_frame.call(null,tangents,norms,bnorms,i);
var n__$1 = cljs.core.nth.call(null,vec__21383,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__21383,(1),null);
var G__21384 = cljs.core.conj.call(null,norms,n__$1);
var G__21385 = cljs.core.conj.call(null,bnorms,b__$1);
var G__21386 = (i + (1));
norms = G__21384;
bnorms = G__21385;
i = G__21386;
continue;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [points,tangents,norms,bnorms], null);
}
break;
}
});
thi.ng.geom.types.utils.ptf.align_frames = (function thi$ng$geom$types$utils$ptf$align_frames(p__21387){
var vec__21389 = p__21387;
var points = cljs.core.nth.call(null,vec__21389,(0),null);
var tangents = cljs.core.nth.call(null,vec__21389,(1),null);
var norms = cljs.core.nth.call(null,vec__21389,(2),null);
var bnorms = cljs.core.nth.call(null,vec__21389,(3),null);
var num = cljs.core.count.call(null,tangents);
var a = cljs.core.first.call(null,norms);
var b = cljs.core.peek.call(null,norms);
var theta = (Math.acos(thi.ng.math.core.clamp_normalized.call(null,thi.ng.geom.core.dot.call(null,a,b))) / (num - (1)));
var theta__$1 = (((thi.ng.geom.core.dot.call(null,cljs.core.first.call(null,tangents),thi.ng.geom.core.cross.call(null,a,b)) > 0.0))?(- theta):theta);
var norms__$1 = norms;
var bnorms__$1 = bnorms;
var i = (1);
while(true){
if((i < num)){
var t = tangents.call(null,i);
var n = thi.ng.geom.core.transform_vector.call(null,thi.ng.geom.core.rotate_around_axis.call(null,thi.ng.geom.core.matrix.M44,t,(theta__$1 * i)),norms__$1.call(null,i));
var b__$1 = thi.ng.geom.core.cross.call(null,t,n);
var G__21390 = cljs.core.assoc.call(null,norms__$1,i,n);
var G__21391 = cljs.core.assoc.call(null,bnorms__$1,i,b__$1);
var G__21392 = (i + (1));
norms__$1 = G__21390;
bnorms__$1 = G__21391;
i = G__21392;
continue;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [points,tangents,norms__$1,bnorms__$1], null);
}
break;
}
});
/**
 * Takes a path point, a PTF normal & binormal and a profile point.
 *   Returns profile point projected on path (point).
 */
thi.ng.geom.types.utils.ptf.sweep_point = (function thi$ng$geom$types$utils$ptf$sweep_point(p,n,b,p__21393){
var vec__21395 = p__21393;
var qx = cljs.core.nth.call(null,vec__21395,(0),null);
var qy = cljs.core.nth.call(null,vec__21395,(1),null);
return thi.ng.geom.core.vector.vec3.call(null,(((qx * n.call(null,(0))) + (qy * b.call(null,(0)))) + p.call(null,(0))),(((qx * n.call(null,(1))) + (qy * b.call(null,(1)))) + p.call(null,(1))),(((qx * n.call(null,(2))) + (qy * b.call(null,(2)))) + p.call(null,(2))));
});
thi.ng.geom.types.utils.ptf.sweep_profile = (function thi$ng$geom$types$utils$ptf$sweep_profile(profile,p__21397){
var vec__21403 = p__21397;
var points = cljs.core.nth.call(null,vec__21403,(0),null);
var _ = cljs.core.nth.call(null,vec__21403,(1),null);
var norms = cljs.core.nth.call(null,vec__21403,(2),null);
var bnorms = cljs.core.nth.call(null,vec__21403,(3),null);
var frames = cljs.core.map.call(null,cljs.core.vector,points,norms,bnorms);
var tx = ((function (frames,vec__21403,points,_,norms,bnorms){
return (function (p__21404){
var vec__21405 = p__21404;
var p = cljs.core.nth.call(null,vec__21405,(0),null);
var n = cljs.core.nth.call(null,vec__21405,(1),null);
var b = cljs.core.nth.call(null,vec__21405,(2),null);
return cljs.core.mapv.call(null,((function (vec__21405,p,n,b,frames,vec__21403,points,_,norms,bnorms){
return (function (p1__21396_SHARP_){
return thi.ng.geom.types.utils.ptf.sweep_point.call(null,p,n,b,p1__21396_SHARP_);
});})(vec__21405,p,n,b,frames,vec__21403,points,_,norms,bnorms))
,profile);
});})(frames,vec__21403,points,_,norms,bnorms))
;
var frame0 = tx.call(null,cljs.core.first.call(null,frames));
return cljs.core.first.call(null,cljs.core.reduce.call(null,((function (frames,tx,frame0,vec__21403,points,_,norms,bnorms){
return (function (p__21406,frame){
var vec__21407 = p__21406;
var faces = cljs.core.nth.call(null,vec__21407,(0),null);
var prev = cljs.core.nth.call(null,vec__21407,(1),null);
var curr = tx.call(null,frame);
var curr__$1 = cljs.core.conj.call(null,curr,cljs.core.first.call(null,curr));
var faces__$1 = cljs.core.concat.call(null,faces,cljs.core.mapcat.call(null,((function (curr,curr__$1,vec__21407,faces,prev,frames,tx,frame0,vec__21403,points,_,norms,bnorms){
return (function (a,b){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[a.call(null,(0)),a.call(null,(1)),b.call(null,(1)),b.call(null,(0))],null))], null);
});})(curr,curr__$1,vec__21407,faces,prev,frames,tx,frame0,vec__21403,points,_,norms,bnorms))
,thi.ng.dstruct.core.successive_nth.call(null,(2),prev),thi.ng.dstruct.core.successive_nth.call(null,(2),curr__$1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [faces__$1,curr__$1], null);
});})(frames,tx,frame0,vec__21403,points,_,norms,bnorms))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.conj.call(null,frame0,cljs.core.first.call(null,frame0))], null),cljs.core.next.call(null,frames)));
});
thi.ng.geom.types.utils.ptf.sweep_mesh = (function thi$ng$geom$types$utils$ptf$sweep_mesh(var_args){
var args__19340__auto__ = [];
var len__19333__auto___21415 = arguments.length;
var i__19334__auto___21416 = (0);
while(true){
if((i__19334__auto___21416 < len__19333__auto___21415)){
args__19340__auto__.push((arguments[i__19334__auto___21416]));

var G__21417 = (i__19334__auto___21416 + (1));
i__19334__auto___21416 = G__21417;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return thi.ng.geom.types.utils.ptf.sweep_mesh.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

thi.ng.geom.types.utils.ptf.sweep_mesh.cljs$core$IFn$_invoke$arity$variadic = (function (points,profile,p__21411){
var vec__21412 = p__21411;
var map__21413 = cljs.core.nth.call(null,vec__21412,(0),null);
var map__21413__$1 = ((((!((map__21413 == null)))?((((map__21413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21413):map__21413);
var mesh = cljs.core.get.call(null,map__21413__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var align_QMARK_ = cljs.core.get.call(null,map__21413__$1,new cljs.core.Keyword(null,"align?","align?",-1419127676));
var frames = thi.ng.geom.types.utils.ptf.compute_frames.call(null,points);
var frames__$1 = (cljs.core.truth_(align_QMARK_)?thi.ng.geom.types.utils.ptf.align_frames.call(null,frames):frames);
return thi.ng.geom.core.into.call(null,(function (){var or__18275__auto__ = mesh;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),thi.ng.geom.types.utils.ptf.sweep_profile.call(null,profile,frames__$1));
});

thi.ng.geom.types.utils.ptf.sweep_mesh.cljs$lang$maxFixedArity = (2);

thi.ng.geom.types.utils.ptf.sweep_mesh.cljs$lang$applyTo = (function (seq21408){
var G__21409 = cljs.core.first.call(null,seq21408);
var seq21408__$1 = cljs.core.next.call(null,seq21408);
var G__21410 = cljs.core.first.call(null,seq21408__$1);
var seq21408__$2 = cljs.core.next.call(null,seq21408__$1);
return thi.ng.geom.types.utils.ptf.sweep_mesh.cljs$core$IFn$_invoke$arity$variadic(G__21409,G__21410,seq21408__$2);
});
thi.ng.geom.types.utils.ptf.sweep_strand = (function thi$ng$geom$types$utils$ptf$sweep_strand(p__21419,r,theta,delta,profile){
var vec__21421 = p__21419;
var p = cljs.core.nth.call(null,vec__21421,(0),null);
var _ = cljs.core.nth.call(null,vec__21421,(1),null);
var n = cljs.core.nth.call(null,vec__21421,(2),null);
var b = cljs.core.nth.call(null,vec__21421,(3),null);
return thi.ng.geom.types.utils.ptf.sweep_mesh.call(null,cljs.core.mapv.call(null,((function (vec__21421,p,_,n,b){
return (function (p1__21418_SHARP_){
return thi.ng.geom.types.utils.ptf.sweep_point.call(null,p.call(null,p1__21418_SHARP_),n.call(null,p1__21418_SHARP_),b.call(null,p1__21418_SHARP_),thi.ng.geom.core.as_cartesian.call(null,thi.ng.geom.core.vector.vec2.call(null,r,((p1__21418_SHARP_ * delta) + theta))));
});})(vec__21421,p,_,n,b))
,cljs.core.range.call(null,cljs.core.count.call(null,p))),profile,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align?","align?",-1419127676),true], null));
});
thi.ng.geom.types.utils.ptf.sweep_strands = (function thi$ng$geom$types$utils$ptf$sweep_strands(base,r,strands,twists,profile){
var delta = ((twists * thi.ng.math.core.TWO_PI) / (cljs.core.count.call(null,cljs.core.first.call(null,base)) - (1)));
return cljs.core.map.call(null,((function (delta){
return (function (p1__21422_SHARP_){
return thi.ng.geom.types.utils.ptf.sweep_strand.call(null,base,r,(p1__21422_SHARP_ * thi.ng.math.core.TWO_PI),delta,profile);
});})(delta))
,cljs.core.butlast.call(null,thi.ng.math.core.norm_range.call(null,strands)));
});
thi.ng.geom.types.utils.ptf.sweep_strand_mesh = (function thi$ng$geom$types$utils$ptf$sweep_strand_mesh(var_args){
var args__19340__auto__ = [];
var len__19333__auto___21433 = arguments.length;
var i__19334__auto___21434 = (0);
while(true){
if((i__19334__auto___21434 < len__19333__auto___21433)){
args__19340__auto__.push((arguments[i__19334__auto___21434]));

var G__21435 = (i__19334__auto___21434 + (1));
i__19334__auto___21434 = G__21435;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((5) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((5)),(0))):null);
return thi.ng.geom.types.utils.ptf.sweep_strand_mesh.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__19341__auto__);
});

thi.ng.geom.types.utils.ptf.sweep_strand_mesh.cljs$core$IFn$_invoke$arity$variadic = (function (base,r,strands,twists,profile,p__21429){
var vec__21430 = p__21429;
var map__21431 = cljs.core.nth.call(null,vec__21430,(0),null);
var map__21431__$1 = ((((!((map__21431 == null)))?((((map__21431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21431):map__21431);
var opts = map__21431__$1;
return cljs.core.reduce.call(null,thi.ng.geom.core.into,(function (){var or__18275__auto__ = new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),thi.ng.geom.types.utils.ptf.sweep_strands.call(null,base,r,strands,twists,profile));
});

thi.ng.geom.types.utils.ptf.sweep_strand_mesh.cljs$lang$maxFixedArity = (5);

thi.ng.geom.types.utils.ptf.sweep_strand_mesh.cljs$lang$applyTo = (function (seq21423){
var G__21424 = cljs.core.first.call(null,seq21423);
var seq21423__$1 = cljs.core.next.call(null,seq21423);
var G__21425 = cljs.core.first.call(null,seq21423__$1);
var seq21423__$2 = cljs.core.next.call(null,seq21423__$1);
var G__21426 = cljs.core.first.call(null,seq21423__$2);
var seq21423__$3 = cljs.core.next.call(null,seq21423__$2);
var G__21427 = cljs.core.first.call(null,seq21423__$3);
var seq21423__$4 = cljs.core.next.call(null,seq21423__$3);
var G__21428 = cljs.core.first.call(null,seq21423__$4);
var seq21423__$5 = cljs.core.next.call(null,seq21423__$4);
return thi.ng.geom.types.utils.ptf.sweep_strand_mesh.cljs$core$IFn$_invoke$arity$variadic(G__21424,G__21425,G__21426,G__21427,G__21428,seq21423__$5);
});

//# sourceMappingURL=ptf.js.map