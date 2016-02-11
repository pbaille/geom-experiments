// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.polygon');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.triangle');
goog.require('thi.ng.geom.line');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.types');
thi.ng.geom.polygon.polygon2 = (function thi$ng$geom$polygon$polygon2(var_args){
var args24796 = [];
var len__19333__auto___24801 = arguments.length;
var i__19334__auto___24802 = (0);
while(true){
if((i__19334__auto___24802 < len__19333__auto___24801)){
args24796.push((arguments[i__19334__auto___24802]));

var G__24803 = (i__19334__auto___24802 + (1));
i__19334__auto___24802 = G__24803;
continue;
} else {
}
break;
}

var G__24800 = args24796.length;
switch (G__24800) {
case 1:
return thi.ng.geom.polygon.polygon2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__19352__auto__ = (new cljs.core.IndexedSeq(args24796.slice((1)),(0)));
return thi.ng.geom.polygon.polygon2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19352__auto__);

}
});

thi.ng.geom.polygon.polygon2.cljs$core$IFn$_invoke$arity$1 = (function (points){
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec2,points)));
});

thi.ng.geom.polygon.polygon2.cljs$core$IFn$_invoke$arity$variadic = (function (p,more){
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec2,cljs.core.cons.call(null,p,more))));
});

thi.ng.geom.polygon.polygon2.cljs$lang$applyTo = (function (seq24797){
var G__24798 = cljs.core.first.call(null,seq24797);
var seq24797__$1 = cljs.core.next.call(null,seq24797);
return thi.ng.geom.polygon.polygon2.cljs$core$IFn$_invoke$arity$variadic(G__24798,seq24797__$1);
});

thi.ng.geom.polygon.polygon2.cljs$lang$maxFixedArity = (1);
thi.ng.geom.polygon.cog = (function thi$ng$geom$polygon$cog(radius,teeth,profile){
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,(function (p,v){
return thi.ng.geom.core._STAR_.call(null,v,p);
}),cljs.core.cycle.call(null,profile),thi.ng.geom.core.vertices.call(null,(new thi.ng.geom.types.Circle2(thi.ng.geom.core.vector.vec2.call(null),radius)),(teeth * cljs.core.count.call(null,profile))))));
});
thi.ng.geom.polygon.clip_convex_STAR_ = (function thi$ng$geom$polygon$clip_convex_STAR_(verts,bounds){
var verts__$1 = cljs.core.conj.call(null,verts,cljs.core.first.call(null,verts));
var bc = thi.ng.geom.core.centroid.call(null,bounds);
var ec_pos = ((function (verts__$1,bc){
return (function (e,p,q){
return new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.intersect_line.call(null,e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,q], null)));
});})(verts__$1,bc))
;
var cedges = cljs.core.mapv.call(null,thi.ng.geom.line.line2,thi.ng.geom.core.edges.call(null,bounds));
var points = verts__$1;
var clipped = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(cedges)){
var ce = cljs.core.first.call(null,cedges);
var sign = thi.ng.geom.core.classify_point.call(null,ce,bc);
var clipped__$1 = cljs.core.reduce.call(null,((function (cedges,points,clipped,ce,sign,verts__$1,bc,ec_pos){
return (function (clipped__$1,p__24807){
var vec__24808 = p__24807;
var p = cljs.core.nth.call(null,vec__24808,(0),null);
var q = cljs.core.nth.call(null,vec__24808,(1),null);
if(cljs.core._EQ_.call(null,sign,thi.ng.geom.core.classify_point.call(null,ce,p))){
if(cljs.core._EQ_.call(null,sign,thi.ng.geom.core.classify_point.call(null,ce,q))){
return cljs.core.conj.call(null,clipped__$1,q);
} else {
return cljs.core.conj.call(null,clipped__$1,ec_pos.call(null,ce,p,q));
}
} else {
if(cljs.core._EQ_.call(null,sign,thi.ng.geom.core.classify_point.call(null,ce,q))){
return cljs.core.conj.call(null,clipped__$1,ec_pos.call(null,ce,p,q),q);
} else {
return clipped__$1;
}
}
});})(cedges,points,clipped,ce,sign,verts__$1,bc,ec_pos))
,cljs.core.PersistentVector.EMPTY,thi.ng.dstruct.core.successive_nth.call(null,(2),points));
var clipped__$2 = ((((cljs.core.count.call(null,clipped__$1) > (0))) && (cljs.core.not.call(null,thi.ng.math.core.delta_EQ_.call(null,cljs.core.first.call(null,clipped__$1),cljs.core.peek.call(null,clipped__$1)))))?cljs.core.conj.call(null,clipped__$1,cljs.core.first.call(null,clipped__$1)):clipped__$1);
var G__24809 = cljs.core.next.call(null,cedges);
var G__24810 = clipped__$2;
var G__24811 = points;
cedges = G__24809;
points = G__24810;
clipped = G__24811;
continue;
} else {
return cljs.core.distinct.call(null,cljs.core.butlast.call(null,points));
}
break;
}
});
thi.ng.geom.polygon.h_segment = (function thi$ng$geom$polygon$h_segment(verts,p__24812,pred,theta,ps){
while(true){
var vec__24817 = p__24812;
var px = cljs.core.nth.call(null,vec__24817,(0),null);
var py = cljs.core.nth.call(null,vec__24817,(1),null);
var p = vec__24817;
var vec__24818 = cljs.core.reduce.call(null,((function (verts,p__24812,pred,theta,ps,vec__24817,px,py,p){
return (function (state,p__24819){
var vec__24820 = p__24819;
var qx = cljs.core.nth.call(null,vec__24820,(0),null);
var qy = cljs.core.nth.call(null,vec__24820,(1),null);
var q = vec__24820;
if(cljs.core.truth_(pred.call(null,qy,py))){
var d = thi.ng.math.core.abs_diff.call(null,theta,thi.ng.geom.core.heading_xy.call(null,thi.ng.geom.core.vector.vec2.call(null,(qx - px),(qy - py))));
if((d < state.call(null,(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,d], null);
} else {
return state;
}
} else {
return state;
}
});})(verts,p__24812,pred,theta,ps,vec__24817,px,py,p))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.HALF_PI], null),ps);
var q = cljs.core.nth.call(null,vec__24818,(0),null);
if(cljs.core.truth_(q)){
var G__24821 = cljs.core.conj.call(null,verts,q);
var G__24822 = q;
var G__24823 = pred;
var G__24824 = theta;
var G__24825 = thi.ng.dstruct.core.all_after.call(null,q,ps);
verts = G__24821;
p__24812 = G__24822;
pred = G__24823;
theta = G__24824;
ps = G__24825;
continue;
} else {
return verts;
}
break;
}
});
thi.ng.geom.polygon.convex_hull_STAR_ = (function thi$ng$geom$polygon$convex_hull_STAR_(points){
var vec__24829 = cljs.core.sort_by.call(null,cljs.core.first,points);
var p = cljs.core.nth.call(null,vec__24829,(0),null);
var more = cljs.core.nthnext.call(null,vec__24829,(1));
var ps = vec__24829;
var rps = cljs.core.reverse.call(null,ps);
return cljs.core.butlast.call(null,cljs.core.reduce.call(null,((function (vec__24829,p,more,ps,rps){
return (function (v,p__24830){
var vec__24831 = p__24830;
var pred = cljs.core.nth.call(null,vec__24831,(0),null);
var t = cljs.core.nth.call(null,vec__24831,(1),null);
var ps__$1 = cljs.core.nth.call(null,vec__24831,(2),null);
return thi.ng.geom.polygon.h_segment.call(null,v,cljs.core.peek.call(null,v),pred,t,thi.ng.dstruct.core.all_after.call(null,cljs.core.peek.call(null,v),ps__$1));
});})(vec__24829,p,more,ps,rps))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._LT__EQ_,thi.ng.math.core.THREE_HALVES_PI,more], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._GT__EQ_,0.0,more], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._GT__EQ_,thi.ng.math.core.HALF_PI,rps], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._LT__EQ_,thi.ng.math.core.PI,rps], null)], null)));
});
thi.ng.geom.polygon.snip = (function thi$ng$geom$polygon$snip(points,a,b,c,nv,verts){
var vec__24836 = a;
var ax = cljs.core.nth.call(null,vec__24836,(0),null);
var ay = cljs.core.nth.call(null,vec__24836,(1),null);
var vec__24837 = b;
var bx = cljs.core.nth.call(null,vec__24837,(0),null);
var by = cljs.core.nth.call(null,vec__24837,(1),null);
var vec__24838 = c;
var cx = cljs.core.nth.call(null,vec__24838,(0),null);
var cy = cljs.core.nth.call(null,vec__24838,(1),null);
var cp = (((bx - ax) * (cy - ay)) - ((by - ay) * (cx - ax)));
if((thi.ng.math.core._STAR_eps_STAR_ < cp)){
return cljs.core.not.call(null,cljs.core.some.call(null,((function (vec__24836,ax,ay,vec__24837,bx,by,vec__24838,cx,cy,cp){
return (function (p1__24832_SHARP_){
return thi.ng.geom.core.utils.point_in_triangle2_QMARK_.call(null,p1__24832_SHARP_,a,b,c);
});})(vec__24836,ax,ay,vec__24837,bx,by,vec__24838,cx,cy,cp))
,cljs.core.disj.call(null,cljs.core.set.call(null,cljs.core.map.call(null,points,cljs.core.subvec.call(null,verts,(0),nv))),a,b,c)));
} else {
return null;
}
});
thi.ng.geom.polygon.tessellate_STAR_ = (function thi$ng$geom$polygon$tessellate_STAR_(p){
var vec__24840 = (((p instanceof thi.ng.geom.types.Polygon2))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(p),thi.ng.geom.core.area.call(null,p)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,p),thi.ng.geom.core.area.call(null,thi.ng.geom.polygon.polygon2.call(null,p))], null));
var points = cljs.core.nth.call(null,vec__24840,(0),null);
var area = cljs.core.nth.call(null,vec__24840,(1),null);
var nv = cljs.core.count.call(null,points);
var verts = cljs.core.vec.call(null,(((area > (0)))?cljs.core.range.call(null,nv):cljs.core.range.call(null,(nv - (1)),(-1),(-1))));
var result = cljs.core.PersistentVector.EMPTY;
var verts__$1 = verts;
var v = (nv - (1));
var nv__$1 = nv;
var cnt = (((2) * nv__$1) - (1));
while(true){
if(cljs.core._EQ_.call(null,nv__$1,(2))){
return result;
} else {
if((cnt > (0))){
var u = (((nv__$1 <= v))?(0):v);
var v__$1 = (u + (1));
var v__$2 = (((nv__$1 <= v__$1))?(0):v__$1);
var w = (v__$2 + (1));
var w__$1 = (((nv__$1 <= w))?(0):w);
var a = points.call(null,verts__$1.call(null,u));
var b = points.call(null,verts__$1.call(null,v__$2));
var c = points.call(null,verts__$1.call(null,w__$1));
if(cljs.core.truth_(thi.ng.geom.polygon.snip.call(null,points,a,b,c,nv__$1,verts__$1))){
var result__$1 = cljs.core.conj.call(null,result,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null));
var verts__$2 = cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,verts__$1,(0),v__$2),cljs.core.subvec.call(null,verts__$1,(v__$2 + (1)))));
var nv__$2 = (nv__$1 - (1));
var G__24841 = result__$1;
var G__24842 = verts__$2;
var G__24843 = v__$2;
var G__24844 = nv__$2;
var G__24845 = ((2) * nv__$2);
result = G__24841;
verts__$1 = G__24842;
v = G__24843;
nv__$1 = G__24844;
cnt = G__24845;
continue;
} else {
var G__24846 = result;
var G__24847 = verts__$1;
var G__24848 = v__$2;
var G__24849 = nv__$1;
var G__24850 = (cnt - (1));
result = G__24846;
verts__$1 = G__24847;
v = G__24848;
nv__$1 = G__24849;
cnt = G__24850;
continue;
}
} else {
return null;
}
}
break;
}
});
thi.ng.geom.polygon.inset_corner = (function thi$ng$geom$polygon$inset_corner(prev,curr,next,d){
var vec__24853 = thi.ng.geom.core._.call(null,curr,prev);
var dx1 = cljs.core.nth.call(null,vec__24853,(0),null);
var dy1 = cljs.core.nth.call(null,vec__24853,(1),null);
var d1 = vec__24853;
var vec__24854 = thi.ng.geom.core._.call(null,next,curr);
var dx2 = cljs.core.nth.call(null,vec__24854,(0),null);
var dy2 = cljs.core.nth.call(null,vec__24854,(1),null);
var d2 = vec__24854;
var d1__$1 = thi.ng.geom.core.mag.call(null,d1);
var d2__$1 = thi.ng.geom.core.mag.call(null,d2);
if(cljs.core.not.call(null,(function (){var or__18275__auto__ = thi.ng.math.core.delta_EQ_.call(null,0.0,d1__$1);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.math.core.delta_EQ_.call(null,0.0,d2__$1);
}
})())){
var i1 = thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.vector.vec2.call(null,dy1,(- dx1)),((1) / d1__$1)),d);
var i2 = thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.vector.vec2.call(null,dy2,(- dx2)),((1) / d2__$1)),d);
var c1 = thi.ng.geom.core._PLUS_.call(null,curr,i1);
var c2 = thi.ng.geom.core._PLUS_.call(null,curr,i2);
var prev__$1 = thi.ng.geom.core._PLUS_.call(null,prev,i1);
var next__$1 = thi.ng.geom.core._PLUS_.call(null,next,i2);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,c1,c2))){
return c1;
} else {
return new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.intersect.intersect_line2_line2_QMARK_.call(null,prev__$1,c1,c2,next__$1));
}
} else {
return curr;
}
});
/**
 * For CW polygons, use positive distance to inset or negative to outset.
 *   For CCW polygons, use opposite.
 */
thi.ng.geom.polygon.inset_polygon = (function thi$ng$geom$polygon$inset_polygon(points,d){
return cljs.core.mapv.call(null,(function (p__24857){
var vec__24858 = p__24857;
var p = cljs.core.nth.call(null,vec__24858,(0),null);
var c = cljs.core.nth.call(null,vec__24858,(1),null);
var n = cljs.core.nth.call(null,vec__24858,(2),null);
return thi.ng.geom.polygon.inset_corner.call(null,p,c,n,d);
}),thi.ng.dstruct.core.successive_nth.call(null,(3),thi.ng.dstruct.core.wrap_seq.call(null,points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,points)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,points)], null))));
});
thi.ng.geom.polygon.smooth = (function thi$ng$geom$polygon$smooth(p__24859,amp,base_weight){
var map__24864 = p__24859;
var map__24864__$1 = ((((!((map__24864 == null)))?((((map__24864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24864):map__24864);
var _ = map__24864__$1;
var points = cljs.core.get.call(null,map__24864__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var pc = thi.ng.geom.core.centroid.call(null,_);
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,((function (pc,map__24864,map__24864__$1,_,points){
return (function (p__24866){
var vec__24867 = p__24866;
var p = cljs.core.nth.call(null,vec__24867,(0),null);
var c = cljs.core.nth.call(null,vec__24867,(1),null);
var n = cljs.core.nth.call(null,vec__24867,(2),null);
var d = thi.ng.geom.core._PLUS_.call(null,thi.ng.geom.core._.call(null,p,c),thi.ng.geom.core._.call(null,n,c));
var d__$1 = thi.ng.geom.core.madd.call(null,thi.ng.geom.core._.call(null,c,pc),base_weight,d);
return thi.ng.geom.core.madd.call(null,d__$1,amp,c);
});})(pc,map__24864,map__24864__$1,_,points))
,thi.ng.dstruct.core.successive_nth.call(null,(3),thi.ng.dstruct.core.wrap_seq.call(null,points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,points)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,points)], null))))));
});
thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24883_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,m,p1__24883_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24878_SHARP_){
return thi.ng.geom.core.rotate.call(null,p1__24878_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.vector.vec2.call(null),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.centroid.call(null,___$1),thi.ng.geom.core.vector.vec2.call(null,o),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (p__24884){
var map__24885 = p__24884;
var map__24885__$1 = ((((!((map__24885 == null)))?((((map__24885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24885):map__24885);
var _ = map__24885__$1;
var points = cljs.core.get.call(null,map__24885__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24887 = this;
var map__24887__$1 = ((((!((map__24887 == null)))?((((map__24887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24887):map__24887);
var ___$1 = map__24887__$1;
var points__$1 = cljs.core.get.call(null,map__24887__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var c = cljs.core.first.call(null,cljs.core.reduce.call(null,((function (map__24887,map__24887__$1,___$1,points__$1,map__24885,map__24885__$1,_,points){
return (function (p__24889,v){
var vec__24890 = p__24889;
var c = cljs.core.nth.call(null,vec__24890,(0),null);
var p = cljs.core.nth.call(null,vec__24890,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.madd.call(null,thi.ng.geom.core._PLUS_.call(null,p,v),thi.ng.geom.core.cross.call(null,p,v),c),v], null);
});})(map__24887,map__24887__$1,___$1,points__$1,map__24885,map__24885__$1,_,points))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec2.call(null),cljs.core.first.call(null,points__$1)], null),thi.ng.dstruct.core.rotate_left.call(null,(1),points__$1)));
return thi.ng.geom.core._STAR_.call(null,c,(1.0 / (6.0 * thi.ng.geom.core.area.call(null,___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PConvexHull$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PConvexHull$convex_hull$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.polygon.polygon2.call(null,thi.ng.geom.polygon.convex_hull_STAR_.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PFlip$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.reverse.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PPolygonConvert$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PPolygonConvert$as_polygon$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (p__24891,t){
var map__24892 = p__24891;
var map__24892__$1 = ((((!((map__24892 == null)))?((((map__24892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24892):map__24892);
var points = cljs.core.get.call(null,map__24892__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24894 = this;
var map__24894__$1 = ((((!((map__24894 == null)))?((((map__24894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24894):map__24894);
var points__$1 = cljs.core.get.call(null,map__24894__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.point_at.call(null,t,cljs.core.conj.call(null,points__$1,cljs.core.first.call(null,points__$1)));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.point_at.call(null,___$1,thi.ng.math.core.random.call(null));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (p__24896,udist,include_last_QMARK_){
var map__24897 = p__24896;
var map__24897__$1 = ((((!((map__24897 == null)))?((((map__24897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24897):map__24897);
var points = cljs.core.get.call(null,map__24897__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24899 = this;
var map__24899__$1 = ((((!((map__24899 == null)))?((((map__24899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24899):map__24899);
var points__$1 = cljs.core.get.call(null,map__24899__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.sample_uniform.call(null,udist,include_last_QMARK_,cljs.core.conj.call(null,points__$1,cljs.core.first.call(null,points__$1)));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (p__24901,p__24902){
var map__24903 = p__24901;
var map__24903__$1 = ((((!((map__24903 == null)))?((((map__24903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24903):map__24903);
var _ = map__24903__$1;
var points = cljs.core.get.call(null,map__24903__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24904 = p__24902;
var map__24904__$1 = ((((!((map__24904 == null)))?((((map__24904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24904):map__24904);
var mesh = cljs.core.get.call(null,map__24904__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var depth = cljs.core.get.call(null,map__24904__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var offset = cljs.core.get.call(null,map__24904__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var scale = cljs.core.get.call(null,map__24904__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var top_QMARK_ = cljs.core.get.call(null,map__24904__$1,new cljs.core.Keyword(null,"top?","top?",-1883283796),true);
var bottom_QMARK_ = cljs.core.get.call(null,map__24904__$1,new cljs.core.Keyword(null,"bottom?","bottom?",-1926481628),true);
var map__24907 = this;
var map__24907__$1 = ((((!((map__24907 == null)))?((((map__24907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24907):map__24907);
var ___$1 = map__24907__$1;
var points__$1 = cljs.core.get.call(null,map__24907__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var points__$2 = (((thi.ng.geom.core.area.call(null,___$1) < (0)))?cljs.core.reverse.call(null,points__$1):points__$1);
var tpoints = ((cljs.core._EQ_.call(null,1.0,scale))?points__$2:new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.scale_size.call(null,thi.ng.geom.polygon.polygon2.call(null,points__$2),scale)));
var off = (function (){var or__18275__auto__ = offset;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.core.vector.vec3.call(null,(0),(0),depth);
}
})();
var points3 = cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec3,points__$2);
var tpoints3 = cljs.core.mapv.call(null,((function (points__$2,tpoints,off,points3,map__24907,map__24907__$1,___$1,points__$1,map__24903,map__24903__$1,_,points,map__24904,map__24904__$1,mesh,depth,offset,scale,top_QMARK_,bottom_QMARK_){
return (function (p1__24868_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,off,p1__24868_SHARP_);
});})(points__$2,tpoints,off,points3,map__24907,map__24907__$1,___$1,points__$1,map__24903,map__24903__$1,_,points,map__24904,map__24904__$1,mesh,depth,offset,scale,top_QMARK_,bottom_QMARK_))
,tpoints);
var quad_QMARK_ = ((4) === cljs.core.count.call(null,points__$2));
return thi.ng.geom.core.into.call(null,(function (){var or__18275__auto__ = mesh;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),cljs.core.concat.call(null,(cljs.core.truth_(bottom_QMARK_)?((quad_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rseq.call(null,cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec3,points__$2))], null):cljs.core.map.call(null,((function (points__$2,tpoints,off,points3,tpoints3,quad_QMARK_,map__24907,map__24907__$1,___$1,points__$1,map__24903,map__24903__$1,_,points,map__24904,map__24904__$1,mesh,depth,offset,scale,top_QMARK_,bottom_QMARK_){
return (function (p__24909){
var vec__24910 = p__24909;
var a = cljs.core.nth.call(null,vec__24910,(0),null);
var b = cljs.core.nth.call(null,vec__24910,(1),null);
var c = cljs.core.nth.call(null,vec__24910,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,b),thi.ng.geom.core.vector.vec3.call(null,a),thi.ng.geom.core.vector.vec3.call(null,c)], null);
});})(points__$2,tpoints,off,points3,tpoints3,quad_QMARK_,map__24907,map__24907__$1,___$1,points__$1,map__24903,map__24903__$1,_,points,map__24904,map__24904__$1,mesh,depth,offset,scale,top_QMARK_,bottom_QMARK_))
,thi.ng.geom.polygon.tessellate_STAR_.call(null,points__$2))):null),cljs.core.mapv.call(null,((function (points__$2,tpoints,off,points3,tpoints3,quad_QMARK_,map__24907,map__24907__$1,___$1,points__$1,map__24903,map__24903__$1,_,points,map__24904,map__24904__$1,mesh,depth,offset,scale,top_QMARK_,bottom_QMARK_){
return (function (p__24911,p__24912){
var vec__24913 = p__24911;
var a1 = cljs.core.nth.call(null,vec__24913,(0),null);
var b1 = cljs.core.nth.call(null,vec__24913,(1),null);
var vec__24914 = p__24912;
var a2 = cljs.core.nth.call(null,vec__24914,(0),null);
var b2 = cljs.core.nth.call(null,vec__24914,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b1,b2,a2], null);
});})(points__$2,tpoints,off,points3,tpoints3,quad_QMARK_,map__24907,map__24907__$1,___$1,points__$1,map__24903,map__24903__$1,_,points,map__24904,map__24904__$1,mesh,depth,offset,scale,top_QMARK_,bottom_QMARK_))
,thi.ng.dstruct.core.successive_nth.call(null,(2),cljs.core.conj.call(null,points3,points3.call(null,(0)))),thi.ng.dstruct.core.successive_nth.call(null,(2),cljs.core.conj.call(null,tpoints3,tpoints3.call(null,(0))))),(cljs.core.truth_(top_QMARK_)?((quad_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tpoints3], null):cljs.core.mapv.call(null,((function (points__$2,tpoints,off,points3,tpoints3,quad_QMARK_,map__24907,map__24907__$1,___$1,points__$1,map__24903,map__24903__$1,_,points,map__24904,map__24904__$1,mesh,depth,offset,scale,top_QMARK_,bottom_QMARK_){
return (function (p__24915){
var vec__24916 = p__24915;
var a = cljs.core.nth.call(null,vec__24916,(0),null);
var b = cljs.core.nth.call(null,vec__24916,(1),null);
var c = cljs.core.nth.call(null,vec__24916,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,off,a),thi.ng.geom.core._PLUS_.call(null,off,b),thi.ng.geom.core._PLUS_.call(null,off,c)], null);
});})(points__$2,tpoints,off,points3,tpoints3,quad_QMARK_,map__24907,map__24907__$1,___$1,points__$1,map__24903,map__24903__$1,_,points,map__24904,map__24904__$1,mesh,depth,offset,scale,top_QMARK_,bottom_QMARK_))
,thi.ng.geom.polygon.tessellate_STAR_.call(null,tpoints))):null)));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PExtrude$extrude_shell$arity$2 = (function (p__24917,p__24918){
var map__24919 = p__24917;
var map__24919__$1 = ((((!((map__24919 == null)))?((((map__24919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24919):map__24919);
var _ = map__24919__$1;
var points = cljs.core.get.call(null,map__24919__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24920 = p__24918;
var map__24920__$1 = ((((!((map__24920 == null)))?((((map__24920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24920):map__24920);
var mesh = cljs.core.get.call(null,map__24920__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var depth = cljs.core.get.call(null,map__24920__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var offset = cljs.core.get.call(null,map__24920__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var inset = cljs.core.get.call(null,map__24920__$1,new cljs.core.Keyword(null,"inset","inset",-396367740),0.0);
var top_QMARK_ = cljs.core.get.call(null,map__24920__$1,new cljs.core.Keyword(null,"top?","top?",-1883283796),false);
var bottom_QMARK_ = cljs.core.get.call(null,map__24920__$1,new cljs.core.Keyword(null,"bottom?","bottom?",-1926481628),false);
var wall = cljs.core.get.call(null,map__24920__$1,new cljs.core.Keyword(null,"wall","wall",-787661558),1.0);
var nump = cljs.core.get.call(null,map__24920__$1,new cljs.core.Keyword(null,"nump","nump",1779362414));
var map__24923 = this;
var map__24923__$1 = ((((!((map__24923 == null)))?((((map__24923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24923):map__24923);
var ___$1 = map__24923__$1;
var points__$1 = cljs.core.get.call(null,map__24923__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var points__$2 = (((thi.ng.geom.core.area.call(null,___$1) < (0)))?cljs.core.reverse.call(null,points__$1):points__$1);
var tpoints = (((inset === (0)))?points__$2:thi.ng.geom.polygon.inset_polygon.call(null,points__$2,(- inset)));
var ipoints = thi.ng.geom.polygon.inset_polygon.call(null,points__$2,(- wall));
var itpoints = thi.ng.geom.polygon.inset_polygon.call(null,points__$2,((- inset) - wall));
var off = (function (){var or__18275__auto__ = offset;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.core.vector.vec3.call(null,(0),(0),depth);
}
})();
var ioff = (cljs.core.truth_(bottom_QMARK_)?thi.ng.geom.core.normalize.call(null,off,wall):thi.ng.geom.core.vector.vec3.call(null));
var itoff = (cljs.core.truth_(top_QMARK_)?thi.ng.geom.core.normalize.call(null,off,(thi.ng.geom.core.mag.call(null,off) - wall)):off);
var maxp = (cljs.core.count.call(null,points__$2) + (1));
var quad_QMARK_ = ((4) === cljs.core.count.call(null,points__$2));
var nump__$1 = (cljs.core.truth_(nump)?thi.ng.math.core.clamp.call(null,nump,(2),maxp):maxp);
var np1 = (nump__$1 - (1));
var complete_QMARK_ = cljs.core._EQ_.call(null,nump__$1,maxp);
var maybe_loop = ((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p1__24869_SHARP_){
if(complete_QMARK_){
return cljs.core.conj.call(null,p1__24869_SHARP_,p1__24869_SHARP_.call(null,(0)));
} else {
return cljs.core.take.call(null,nump__$1,p1__24869_SHARP_);
}
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
;
var drop_wrap = ((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p1__24870_SHARP_){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,np1,p1__24870_SHARP_)),cljs.core.first.call(null,p1__24870_SHARP_));
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
;
var quad_strip = ((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (a,b,flip_QMARK_){
return cljs.core.map.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p__24925,p__24926){
var vec__24927 = p__24925;
var a1 = cljs.core.nth.call(null,vec__24927,(0),null);
var b1 = cljs.core.nth.call(null,vec__24927,(1),null);
var vec__24928 = p__24926;
var a2 = cljs.core.nth.call(null,vec__24928,(0),null);
var b2 = cljs.core.nth.call(null,vec__24928,(1),null);
if(cljs.core.truth_(flip_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b1,b2,a2], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,a2,b2,b1], null);
}
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,thi.ng.dstruct.core.successive_nth.call(null,(2),a),thi.ng.dstruct.core.successive_nth.call(null,(2),b));
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
;
var points3 = cljs.core.mapv.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p1__24871_SHARP_){
return thi.ng.geom.core.vector.vec3.call(null,p1__24871_SHARP_);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,points__$2);
var ipoints3 = cljs.core.mapv.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p1__24872_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,ioff,p1__24872_SHARP_);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,ipoints);
var tpoints3 = cljs.core.mapv.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p1__24873_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,off,p1__24873_SHARP_);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,tpoints);
var itpoints3 = cljs.core.mapv.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p1__24874_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,itoff,p1__24874_SHARP_);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,itpoints);
var outsides = quad_strip.call(null,maybe_loop.call(null,points3),maybe_loop.call(null,tpoints3),true);
var insides = quad_strip.call(null,maybe_loop.call(null,ipoints3),maybe_loop.call(null,itpoints3),false);
return thi.ng.geom.core.into.call(null,(function (){var or__18275__auto__ = mesh;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),cljs.core.concat.call(null,(cljs.core.truth_(bottom_QMARK_)?cljs.core.concat.call(null,((quad_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rseq.call(null,cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec3,points__$2))], null):cljs.core.map.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p__24929){
var vec__24930 = p__24929;
var a = cljs.core.nth.call(null,vec__24930,(0),null);
var b = cljs.core.nth.call(null,vec__24930,(1),null);
var c = cljs.core.nth.call(null,vec__24930,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,b),thi.ng.geom.core.vector.vec3.call(null,a),thi.ng.geom.core.vector.vec3.call(null,c)], null);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,thi.ng.geom.polygon.tessellate_STAR_.call(null,points__$2))),((quad_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p1__24875_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,ioff,p1__24875_SHARP_);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,ipoints)], null):cljs.core.map.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p__24931){
var vec__24932 = p__24931;
var a = cljs.core.nth.call(null,vec__24932,(0),null);
var b = cljs.core.nth.call(null,vec__24932,(1),null);
var c = cljs.core.nth.call(null,vec__24932,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,ioff,a),thi.ng.geom.core._PLUS_.call(null,ioff,b),thi.ng.geom.core._PLUS_.call(null,ioff,c)], null);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,thi.ng.geom.polygon.tessellate_STAR_.call(null,ipoints))),((complete_QMARK_)?null:quad_strip.call(null,drop_wrap.call(null,points3),drop_wrap.call(null,ipoints3),true))):quad_strip.call(null,maybe_loop.call(null,points3),maybe_loop.call(null,ipoints3),false)),outsides,insides,((complete_QMARK_)?null:(function (){var a = points3.call(null,(0));
var b = ipoints3.call(null,(0));
var c = itpoints3.call(null,(0));
var d = tpoints3.call(null,(0));
var e = points3.call(null,np1);
var f = ipoints3.call(null,np1);
var g = itpoints3.call(null,np1);
var h = tpoints3.call(null,np1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,c,b,a], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f,g,h], null)], null);
})()),(cljs.core.truth_(top_QMARK_)?cljs.core.concat.call(null,((quad_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p1__24876_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,off,p1__24876_SHARP_);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,tpoints)], null):cljs.core.map.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p__24933){
var vec__24934 = p__24933;
var a = cljs.core.nth.call(null,vec__24934,(0),null);
var b = cljs.core.nth.call(null,vec__24934,(1),null);
var c = cljs.core.nth.call(null,vec__24934,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,off,a),thi.ng.geom.core._PLUS_.call(null,off,b),thi.ng.geom.core._PLUS_.call(null,off,c)], null);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,thi.ng.geom.polygon.tessellate_STAR_.call(null,tpoints))),((quad_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rseq.call(null,cljs.core.mapv.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p1__24877_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,itoff,p1__24877_SHARP_);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,itpoints))], null):cljs.core.map.call(null,((function (points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump){
return (function (p__24935){
var vec__24936 = p__24935;
var a = cljs.core.nth.call(null,vec__24936,(0),null);
var b = cljs.core.nth.call(null,vec__24936,(1),null);
var c = cljs.core.nth.call(null,vec__24936,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,itoff,b),thi.ng.geom.core._PLUS_.call(null,itoff,a),thi.ng.geom.core._PLUS_.call(null,itoff,c)], null);
});})(points__$2,tpoints,ipoints,itpoints,off,ioff,itoff,maxp,quad_QMARK_,nump__$1,np1,complete_QMARK_,maybe_loop,drop_wrap,quad_strip,points3,ipoints3,tpoints3,itpoints3,outsides,insides,map__24923,map__24923__$1,___$1,points__$1,map__24919,map__24919__$1,_,points,map__24920,map__24920__$1,mesh,depth,offset,inset,top_QMARK_,bottom_QMARK_,wall,nump))
,thi.ng.geom.polygon.tessellate_STAR_.call(null,itpoints))),((complete_QMARK_)?null:quad_strip.call(null,drop_wrap.call(null,tpoints3),drop_wrap.call(null,itpoints3),false))):quad_strip.call(null,maybe_loop.call(null,tpoints3),maybe_loop.call(null,itpoints3),true))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (p__24937){
var map__24938 = p__24937;
var map__24938__$1 = ((((!((map__24938 == null)))?((((map__24938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24938):map__24938);
var points = cljs.core.get.call(null,map__24938__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24940 = this;
var map__24940__$1 = ((((!((map__24940 == null)))?((((map__24940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24940):map__24940);
var points__$1 = cljs.core.get.call(null,map__24940__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.dstruct.core.successive_nth.call(null,(2),cljs.core.conj.call(null,points__$1,cljs.core.first.call(null,points__$1)));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__24942,p){
var map__24943 = p__24942;
var map__24943__$1 = ((((!((map__24943 == null)))?((((map__24943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24943):map__24943);
var points = cljs.core.get.call(null,map__24943__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24945 = this;
var map__24945__$1 = ((((!((map__24945 == null)))?((((map__24945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24945):map__24945);
var points__$1 = cljs.core.get.call(null,map__24945__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([p], true),points__$1))){
return true;
} else {
var vec__24947 = p;
var x = cljs.core.nth.call(null,vec__24947,(0),null);
var y = cljs.core.nth.call(null,vec__24947,(1),null);
return cljs.core.first.call(null,cljs.core.reduce.call(null,((function (vec__24947,x,y,map__24945,map__24945__$1,points__$1,map__24943,map__24943__$1,points){
return (function (p__24948,p__24949){
var vec__24950 = p__24948;
var in$ = cljs.core.nth.call(null,vec__24950,(0),null);
var vec__24951 = cljs.core.nth.call(null,vec__24950,(1),null);
var px = cljs.core.nth.call(null,vec__24951,(0),null);
var py = cljs.core.nth.call(null,vec__24951,(1),null);
var vec__24952 = p__24949;
var vx = cljs.core.nth.call(null,vec__24952,(0),null);
var vy = cljs.core.nth.call(null,vec__24952,(1),null);
if(((((vy < y)) && ((py >= y))) || (((py < y)) && ((vy >= y)))) && (((vx + (((y - vy) / (py - vy)) * (px - vx))) < x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not.call(null,in$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx,vy], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx,vy], null)], null);
}
});})(vec__24947,x,y,map__24945,map__24945__$1,points__$1,map__24943,map__24943__$1,points))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.last.call(null,points__$1)], null),points__$1));
}
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (_,l){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 = (function (_,r){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PBoundingCircle$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PBoundingCircle$bounding_circle$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_circle.call(null,thi.ng.geom.core.centroid.call(null,___$1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24882_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p1__24882_SHARP_,t);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24879_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__24879_SHARP_,s);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24880_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__24880_SHARP_,sx,sy);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24881_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__24881_SHARP_,sx,sy,sz);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(thi.ng.geom.core.utils.scale_size.call(null,s,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PTessellate$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.polygon.tessellate_STAR_.call(null,___$1);
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PClip$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PClip$clip_with$arity$2 = (function (_,s){
var ___$1 = this;
return thi.ng.geom.polygon.polygon2.call(null,thi.ng.geom.polygon.clip_convex_STAR_.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),s));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (p__24960){
var map__24961 = p__24960;
var map__24961__$1 = ((((!((map__24961 == null)))?((((map__24961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24961):map__24961);
var p = cljs.core.get.call(null,map__24961__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24963 = this;
var map__24963__$1 = ((((!((map__24963 == null)))?((((map__24963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24963):map__24963);
var p__$1 = cljs.core.get.call(null,map__24963__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.arc_length.call(null,cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_rect.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(0),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PMeshConvert$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.into.call(null,(function (){var or__18275__auto__ = new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),cljs.core.map.call(null,((function (___$1){
return (function (p__24965){
var vec__24966 = p__24965;
var a = cljs.core.nth.call(null,vec__24966,(0),null);
var b = cljs.core.nth.call(null,vec__24966,(1),null);
var c = cljs.core.nth.call(null,vec__24966,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,a),thi.ng.geom.core.vector.vec3.call(null,b),thi.ng.geom.core.vector.vec3.call(null,c)], null);
});})(___$1))
,thi.ng.geom.polygon.tessellate_STAR_.call(null,___$1)));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.dstruct.core.neighbors.call(null,v,thi.ng.geom.core.vertices.call(null,___$1));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
if(cljs.core.truth_(cljs.core.set.call(null,thi.ng.geom.core.vertices.call(null,___$1)).call(null,v))){
return (2);
} else {
return (0);
}
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first.call(null,thi.ng.geom.core.utils.closest_point_on_segments.call(null,p,thi.ng.geom.core.edges.call(null,___$1)));
});

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (p__24953){
var map__24954 = p__24953;
var map__24954__$1 = ((((!((map__24954 == null)))?((((map__24954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24954):map__24954);
var points = cljs.core.get.call(null,map__24954__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24956 = this;
var map__24956__$1 = ((((!((map__24956 == null)))?((((map__24956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24956):map__24956);
var points__$1 = cljs.core.get.call(null,map__24956__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (0.5 * cljs.core.first.call(null,cljs.core.reduce.call(null,((function (map__24956,map__24956__$1,points__$1,map__24954,map__24954__$1,points){
return (function (p__24958,v){
var vec__24959 = p__24958;
var a = cljs.core.nth.call(null,vec__24959,(0),null);
var p = cljs.core.nth.call(null,vec__24959,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a + thi.ng.geom.core.cross.call(null,p,v)),v], null);
});})(map__24956,map__24956__$1,points__$1,map__24954,map__24954__$1,points))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,cljs.core.first.call(null,points__$1)], null),thi.ng.dstruct.core.rotate_left.call(null,(1),points__$1))));
});

//# sourceMappingURL=polygon.js.map