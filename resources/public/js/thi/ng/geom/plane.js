// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.plane');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.quaternion');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.types');
thi.ng.geom.plane.plane = (function thi$ng$geom$plane$plane(n,w){
return (new thi.ng.geom.types.Plane(thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec3.call(null,n)),w));
});
thi.ng.geom.plane.plane_with_point = (function thi$ng$geom$plane$plane_with_point(p,n){
var n__$1 = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec3.call(null,n));
return (new thi.ng.geom.types.Plane(n__$1,(- thi.ng.geom.core.dot.call(null,n__$1,p))));
});
thi.ng.geom.plane.plane_from_points = (function thi$ng$geom$plane$plane_from_points(var_args){
var args22794 = [];
var len__19333__auto___22799 = arguments.length;
var i__19334__auto___22800 = (0);
while(true){
if((i__19334__auto___22800 < len__19333__auto___22799)){
args22794.push((arguments[i__19334__auto___22800]));

var G__22801 = (i__19334__auto___22800 + (1));
i__19334__auto___22800 = G__22801;
continue;
} else {
}
break;
}

var G__22796 = args22794.length;
switch (G__22796) {
case 1:
return thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22794.length)].join('')));

}
});

thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$1 = (function (p__22797){
var vec__22798 = p__22797;
var a = cljs.core.nth.call(null,vec__22798,(0),null);
var b = cljs.core.nth.call(null,vec__22798,(1),null);
var c = cljs.core.nth.call(null,vec__22798,(2),null);
return thi.ng.geom.plane.plane_from_points.call(null,a,b,c);
});

thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var n = thi.ng.geom.core.utils.ortho_normal.call(null,a,b,c);
return (new thi.ng.geom.types.Plane(n,(- thi.ng.geom.core.dot.call(null,n,a))));
});

thi.ng.geom.plane.plane_from_points.cljs$lang$maxFixedArity = 3;
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point.call(null,thi.ng.geom.core.transform_vector.call(null,m,thi.ng.geom.core.centroid.call(null,___$1)),thi.ng.geom.core.transform_vector.call(null,m,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Plane(new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1),(0)));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point.call(null,o,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1),(- new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PFlip$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Plane(thi.ng.geom.core._.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1)),(- new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return thi.ng.math.core.signum.call(null,(thi.ng.geom.core.dot.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1),p) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(___$1)),thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (_,l){
var ___$1 = this;
var vec__22804 = ((cljs.core.map_QMARK_.call(null,l))?new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(l):l);
var p = cljs.core.nth.call(null,vec__22804,(0),null);
var q = cljs.core.nth.call(null,vec__22804,(1),null);
return thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_.call(null,p,thi.ng.geom.core._.call(null,q,p),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$3 = (function (_,p,q){
var ___$1 = this;
return thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_.call(null,p,thi.ng.geom.core._.call(null,q,p),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 = (function (_,ray){
var ___$1 = this;
var vec__22805 = ((cljs.core.map_QMARK_.call(null,ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(ray),new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(ray)], null):ray);
var p = cljs.core.nth.call(null,vec__22805,(0),null);
var dir = cljs.core.nth.call(null,vec__22805,(1),null);
return thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_.call(null,p,dir,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$3 = (function (_,p,dir){
var ___$1 = this;
return thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_.call(null,p,dir,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.Plane)){
return thi.ng.geom.core.intersect.intersect_plane_plane_QMARK_.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(s));
} else {
if((s instanceof thi.ng.geom.types.Sphere)){
return thi.ng.geom.core.intersect.intersect_plane_sphere_QMARK_.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(s));
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,s);

}
}
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PDistance$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,p){
var ___$1 = this;
return (thi.ng.geom.core.dot.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1),p) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,p){
var ___$1 = this;
var d = thi.ng.geom.core.dist.call(null,___$1,p);
return (d * d);
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point.call(null,thi.ng.geom.core._PLUS_.call(null,thi.ng.geom.core.centroid.call(null,___$1),t),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBoundingSphere$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.centroid.call(null,___$1),thi.ng.math.core.INF_PLUS_));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point.call(null,thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.centroid.call(null,___$1),s),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,a,b){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point.call(null,thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.centroid.call(null,___$1),a,b),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,a,b,c){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point.call(null,thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.centroid.call(null,___$1),a,b,c),new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return ___$1;
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
var s = thi.ng.geom.core.vector.vec3.call(null,thi.ng.geom.core.width.call(null,___$1),thi.ng.geom.core.height.call(null,___$1),thi.ng.geom.core.depth.call(null,___$1));
return (new thi.ng.geom.types.AABB(thi.ng.geom.core.madd.call(null,s,-0.5,thi.ng.geom.core.centroid.call(null,___$1)),s));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,thi.ng.geom.core.abs.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1)),thi.ng.geom.core.vector.V3X,thi.ng.math.core._STAR_eps_STAR_))){
return 0.0;
} else {
return thi.ng.math.core.INF_PLUS_;
}
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,thi.ng.geom.core.abs.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1)),thi.ng.geom.core.vector.V3Y,thi.ng.math.core._STAR_eps_STAR_))){
return 0.0;
} else {
return thi.ng.math.core.INF_PLUS_;
}
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,thi.ng.geom.core.abs.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1)),thi.ng.geom.core.vector.V3Z,thi.ng.math.core._STAR_eps_STAR_))){
return 0.0;
} else {
return thi.ng.math.core.INF_PLUS_;
}
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PMeshConvert$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,p__22806){
var map__22807 = p__22806;
var map__22807__$1 = ((((!((map__22807 == null)))?((((map__22807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22807):map__22807);
var p = cljs.core.get.call(null,map__22807__$1,new cljs.core.Keyword(null,"p","p",151049309));
var width = cljs.core.get.call(null,map__22807__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__22807__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var size = cljs.core.get.call(null,map__22807__$1,new cljs.core.Keyword(null,"size","size",1098693007),1.0);
var mesh = cljs.core.get.call(null,map__22807__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var ___$1 = this;
var w = ((function (){var or__18275__auto__ = width;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return size;
}
})() * 0.5);
var h = ((function (){var or__18275__auto__ = height;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return size;
}
})() * 0.5);
var flip_QMARK_ = thi.ng.math.core.delta_EQ_.call(null,-1.0,thi.ng.geom.core.dot.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1),thi.ng.geom.core.vector.V3Z));
var p__$1 = thi.ng.geom.core.closest_point.call(null,___$1,(function (){var or__18275__auto__ = p;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.core.vector.vec3.call(null);
}
})());
var q = (cljs.core.truth_(flip_QMARK_)?thi.ng.geom.core.quaternion.quat.call(null,(0),(0),(0),(1)):thi.ng.geom.core.quaternion.alignment_quat.call(null,thi.ng.geom.core.vector.V3Z,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1)));
var face = cljs.core.mapv.call(null,((function (w,h,flip_QMARK_,p__$1,q,___$1,map__22807,map__22807__$1,p,width,height,size,mesh){
return (function (p1__22803_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p__$1,thi.ng.geom.core.transform_vector.call(null,q,p1__22803_SHARP_));
});})(w,h,flip_QMARK_,p__$1,q,___$1,map__22807,map__22807__$1,p,width,height,size,mesh))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,(- w),(- h),(0)),thi.ng.geom.core.vector.vec3.call(null,(- w),h,(0)),thi.ng.geom.core.vector.vec3.call(null,w,h,(0)),thi.ng.geom.core.vector.vec3.call(null,w,(- h),(0))], null));
return thi.ng.geom.core.into.call(null,(function (){var or__18275__auto__ = mesh;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(flip_QMARK_)?face:cljs.core.rseq.call(null,face))], null));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return thi.ng.geom.core._.call(null,p,thi.ng.geom.core.normalize.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1),(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(___$1) + thi.ng.geom.core.dot.call(null,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(___$1),p))));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core.INF_PLUS_;
});

//# sourceMappingURL=plane.js.map