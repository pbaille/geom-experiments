// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.cuboid');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.plane');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.types');
thi.ng.geom.cuboid.cuboid = (function thi$ng$geom$cuboid$cuboid(var_args){
var args22811 = [];
var len__19333__auto___22816 = arguments.length;
var i__19334__auto___22817 = (0);
while(true){
if((i__19334__auto___22817 < len__19333__auto___22816)){
args22811.push((arguments[i__19334__auto___22817]));

var G__22818 = (i__19334__auto___22817 + (1));
i__19334__auto___22817 = G__22818;
continue;
} else {
}
break;
}

var G__22813 = args22811.length;
switch (G__22813) {
case 0:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$0();

break;
case 8:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 1:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22811.length)].join('')));

}
});

thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.cuboid.cuboid.call(null,1.0);
});

thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec3,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null))));
});

thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(typeof x === 'number'){
return thi.ng.geom.cuboid.cuboid.call(null,thi.ng.geom.core.vector.vec3.call(null),x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return thi.ng.geom.cuboid.cuboid.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(x));
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
if(((8) === cljs.core.count.call(null,x))){
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec3,x)));
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,"Wrong number of points, expected 8 but got",cljs.core.count.call(null,x));
}
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,x);

}
}
}
});

thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2 = (function (o,size){
var vec__22814 = thi.ng.geom.core.vector.vec3.call(null,o);
var x1 = cljs.core.nth.call(null,vec__22814,(0),null);
var y1 = cljs.core.nth.call(null,vec__22814,(1),null);
var z1 = cljs.core.nth.call(null,vec__22814,(2),null);
var a = vec__22814;
var vec__22815 = thi.ng.geom.core._PLUS_.call(null,a,size);
var x2 = cljs.core.nth.call(null,vec__22815,(0),null);
var y2 = cljs.core.nth.call(null,vec__22815,(1),null);
var z2 = cljs.core.nth.call(null,vec__22815,(2),null);
var g = vec__22815;
var b = thi.ng.geom.core.vector.vec3.call(null,x1,y1,z2);
var c = thi.ng.geom.core.vector.vec3.call(null,x2,y1,z2);
var d = thi.ng.geom.core.vector.vec3.call(null,x2,y1,z1);
var e = thi.ng.geom.core.vector.vec3.call(null,x1,y2,z1);
var f = thi.ng.geom.core.vector.vec3.call(null,x1,y2,z2);
var h = thi.ng.geom.core.vector.vec3.call(null,x2,y2,z1);
return (new thi.ng.geom.types.Cuboid(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null)));
});

thi.ng.geom.cuboid.cuboid.cljs$lang$maxFixedArity = 8;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__22830_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,m,p1__22830_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_z.call(null,___$1,theta);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__22822_SHARP_){
return thi.ng.geom.core.rotate_x.call(null,p1__22822_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__22823_SHARP_){
return thi.ng.geom.core.rotate_y.call(null,p1__22823_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__22824_SHARP_){
return thi.ng.geom.core.rotate_z.call(null,p1__22824_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__22825_SHARP_){
return thi.ng.geom.core.rotate_around_axis.call(null,p1__22825_SHARP_,axis,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.vector.vec3.call(null),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.centroid.call(null,___$1),thi.ng.geom.core.vector.vec3.call(null,o),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.centroid.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (p__22831){
var map__22832 = p__22831;
var map__22832__$1 = ((((!((map__22832 == null)))?((((map__22832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22832):map__22832);
var p = cljs.core.get.call(null,map__22832__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.call(null,map__22832__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__22834 = this;
var map__22834__$1 = ((((!((map__22834 == null)))?((((map__22834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22834):map__22834);
var p__$1 = cljs.core.get.call(null,map__22834__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.call(null,map__22834__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__22836 = p__$1;
var x1 = cljs.core.nth.call(null,vec__22836,(0),null);
var y1 = cljs.core.nth.call(null,vec__22836,(1),null);
var z1 = cljs.core.nth.call(null,vec__22836,(2),null);
var vec__22837 = thi.ng.geom.core._PLUS_.call(null,p__$1,size__$1);
var x2 = cljs.core.nth.call(null,vec__22837,(0),null);
var y2 = cljs.core.nth.call(null,vec__22837,(1),null);
var z2 = cljs.core.nth.call(null,vec__22837,(2),null);
return thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.random.call(null,x1,x2),thi.ng.math.core.random.call(null,y1,y2),thi.ng.math.core.random.call(null,z1,z2));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__22838){
var map__22839 = p__22838;
var map__22839__$1 = ((((!((map__22839 == null)))?((((map__22839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22839):map__22839);
var p = cljs.core.get.call(null,map__22839__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.call(null,map__22839__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__22841 = this;
var map__22841__$1 = ((((!((map__22841 == null)))?((((map__22841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22841):map__22841);
var p__$1 = cljs.core.get.call(null,map__22841__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.call(null,map__22841__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__22843 = p__$1;
var x1 = cljs.core.nth.call(null,vec__22843,(0),null);
var y1 = cljs.core.nth.call(null,vec__22843,(1),null);
var z1 = cljs.core.nth.call(null,vec__22843,(2),null);
var vec__22844 = thi.ng.geom.core._PLUS_.call(null,p__$1,size__$1);
var x2 = cljs.core.nth.call(null,vec__22844,(0),null);
var y2 = cljs.core.nth.call(null,vec__22844,(1),null);
var z2 = cljs.core.nth.call(null,vec__22844,(2),null);
var id = (thi.ng.math.core.random.call(null,(6)) | (0));
if((id < (2))){
return thi.ng.geom.core.vector.vec3.call(null,(((id === (0)))?x1:x2),thi.ng.math.core.random.call(null,y1,y2),thi.ng.math.core.random.call(null,z1,z2));
} else {
if((id < (4))){
return thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.random.call(null,x1,x2),((cljs.core._EQ_.call(null,(2),id))?y1:y2),thi.ng.math.core.random.call(null,z1,z2));
} else {
return thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.random.call(null,x1,x2),thi.ng.math.core.random.call(null,y1,y2),((cljs.core._EQ_.call(null,(4),id))?z1:z2));

}
}
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSubdivide$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.subdivide.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$2 = (function (p__22845,p__22846){
var map__22847 = p__22845;
var map__22847__$1 = ((((!((map__22847 == null)))?((((map__22847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22847):map__22847);
var points = cljs.core.get.call(null,map__22847__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__22848 = p__22846;
var map__22848__$1 = ((((!((map__22848 == null)))?((((map__22848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22848):map__22848);
var num = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"num","num",1985240673),(1));
var cols = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var rows = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var slices = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"slices","slices",-94090930));
var map__22851 = this;
var map__22851__$1 = ((((!((map__22851 == null)))?((((map__22851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22851):map__22851);
var points__$1 = cljs.core.get.call(null,map__22851__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var ru = thi.ng.dstruct.core.successive_nth.call(null,(2),thi.ng.math.core.norm_range.call(null,(function (){var or__18275__auto__ = cols;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return num;
}
})()));
var rv = thi.ng.dstruct.core.successive_nth.call(null,(2),thi.ng.math.core.norm_range.call(null,(function (){var or__18275__auto__ = rows;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return num;
}
})()));
var rw = thi.ng.dstruct.core.successive_nth.call(null,(2),thi.ng.math.core.norm_range.call(null,(function (){var or__18275__auto__ = slices;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return num;
}
})()));
var map_p = ((function (ru,rv,rw,map__22851,map__22851__$1,points__$1,map__22847,map__22847__$1,points,map__22848,map__22848__$1,num,cols,rows,slices){
return (function (p){
return thi.ng.geom.core.vector.vec3.call(null,cljs.core.mapv.call(null,((function (ru,rv,rw,map__22851,map__22851__$1,points__$1,map__22847,map__22847__$1,points,map__22848,map__22848__$1,num,cols,rows,slices){
return (function (p1__22821_SHARP_){
return thi.ng.math.core.roundto.call(null,p1__22821_SHARP_,thi.ng.math.core._STAR_eps_STAR_);
});})(ru,rv,rw,map__22851,map__22851__$1,points__$1,map__22847,map__22847__$1,points,map__22848,map__22848__$1,num,cols,rows,slices))
,thi.ng.geom.core.utils.map_trilinear.call(null,points__$1,p)));
});})(ru,rv,rw,map__22851,map__22851__$1,points__$1,map__22847,map__22847__$1,points,map__22848,map__22848__$1,num,cols,rows,slices))
;
var iter__19047__auto__ = ((function (ru,rv,rw,map_p,map__22851,map__22851__$1,points__$1,map__22847,map__22847__$1,points,map__22848,map__22848__$1,num,cols,rows,slices){
return (function thi$ng$geom$cuboid$iter__22853(s__22854){
return (new cljs.core.LazySeq(null,((function (ru,rv,rw,map_p,map__22851,map__22851__$1,points__$1,map__22847,map__22847__$1,points,map__22848,map__22848__$1,num,cols,rows,slices){
return (function (){
var s__22854__$1 = s__22854;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22854__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__22872 = cljs.core.first.call(null,xs__5205__auto__);
var w1 = cljs.core.nth.call(null,vec__22872,(0),null);
var w2 = cljs.core.nth.call(null,vec__22872,(1),null);
var iterys__19043__auto__ = ((function (s__22854__$1,vec__22872,w1,w2,xs__5205__auto__,temp__4657__auto__,ru,rv,rw,map_p,map__22851,map__22851__$1,points__$1,map__22847,map__22847__$1,points,map__22848,map__22848__$1,num,cols,rows,slices){
return (function thi$ng$geom$cuboid$iter__22853_$_iter__22855(s__22856){
return (new cljs.core.LazySeq(null,((function (s__22854__$1,vec__22872,w1,w2,xs__5205__auto__,temp__4657__auto__,ru,rv,rw,map_p,map__22851,map__22851__$1,points__$1,map__22847,map__22847__$1,points,map__22848,map__22848__$1,num,cols,rows,slices){
return (function (){
var s__22856__$1 = s__22856;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__22856__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var vec__22878 = cljs.core.first.call(null,xs__5205__auto____$1);
var v1 = cljs.core.nth.call(null,vec__22878,(0),null);
var v2 = cljs.core.nth.call(null,vec__22878,(1),null);
var iterys__19043__auto__ = ((function (s__22856__$1,s__22854__$1,vec__22878,v1,v2,xs__5205__auto____$1,temp__4657__auto____$1,vec__22872,w1,w2,xs__5205__auto__,temp__4657__auto__,ru,rv,rw,map_p,map__22851,map__22851__$1,points__$1,map__22847,map__22847__$1,points,map__22848,map__22848__$1,num,cols,rows,slices){
return (function thi$ng$geom$cuboid$iter__22853_$_iter__22855_$_iter__22857(s__22858){
return (new cljs.core.LazySeq(null,((function (s__22856__$1,s__22854__$1,vec__22878,v1,v2,xs__5205__auto____$1,temp__4657__auto____$1,vec__22872,w1,w2,xs__5205__auto__,temp__4657__auto__,ru,rv,rw,map_p,map__22851,map__22851__$1,points__$1,map__22847,map__22847__$1,points,map__22848,map__22848__$1,num,cols,rows,slices){
return (function (){
var s__22858__$1 = s__22858;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__22858__$1);
if(temp__4657__auto____$2){
var s__22858__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22858__$2)){
var c__19045__auto__ = cljs.core.chunk_first.call(null,s__22858__$2);
var size__19046__auto__ = cljs.core.count.call(null,c__19045__auto__);
var b__22860 = cljs.core.chunk_buffer.call(null,size__19046__auto__);
if((function (){var i__22859 = (0);
while(true){
if((i__22859 < size__19046__auto__)){
var vec__22881 = cljs.core._nth.call(null,c__19045__auto__,i__22859);
var u1 = cljs.core.nth.call(null,vec__22881,(0),null);
var u2 = cljs.core.nth.call(null,vec__22881,(1),null);
cljs.core.chunk_append.call(null,b__22860,(new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,map_p,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w1], null)], null)))));

var G__22893 = (i__22859 + (1));
i__22859 = G__22893;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22860),thi$ng$geom$cuboid$iter__22853_$_iter__22855_$_iter__22857.call(null,cljs.core.chunk_rest.call(null,s__22858__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22860),null);
}
} else {
var vec__22882 = cljs.core.first.call(null,s__22858__$2);
var u1 = cljs.core.nth.call(null,vec__22882,(0),null);
var u2 = cljs.core.nth.call(null,vec__22882,(1),null);
return cljs.core.cons.call(null,(new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,map_p,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w1], null)], null)))),thi$ng$geom$cuboid$iter__22853_$_iter__22855_$_iter__22857.call(null,cljs.core.rest.call(null,s__22858__$2)));
}
} else {
return null;
}
break;
}
});})(s__22856__$1,s__22854__$1,vec__22878,v1,v2,xs__5205__auto____$1,temp__4657__auto____$1,vec__22872,w1,w2,xs__5205__auto__,temp__4657__auto__,ru,rv,rw,map_p,map__22851,map__22851__$1,points__$1,map__22847,map__22847__$1,points,map__22848,map__22848__$1,num,cols,rows,slices))
,null,null));
});})(s__22856__$1,s__22854__$1,vec__22878,v1,v2,xs__5205__auto____$1,temp__4657__auto____$1,vec__22872,w1,w2,xs__5205__auto__,temp__4657__auto__,ru,rv,rw,map_p,map__22851,map__22851__$1,points__$1,map__22847,map__22847__$1,points,map__22848,map__22848__$1,num,cols,rows,slices))
;
var fs__19044__auto__ = cljs.core.seq.call(null,iterys__19043__auto__.call(null,ru));
if(fs__19044__auto__){
return cljs.core.concat.call(null,fs__19044__auto__,thi$ng$geom$cuboid$iter__22853_$_iter__22855.call(null,cljs.core.rest.call(null,s__22856__$1)));
} else {
var G__22894 = cljs.core.rest.call(null,s__22856__$1);
s__22856__$1 = G__22894;
continue;
}
} else {
return null;
}
break;
}
});})(s__22854__$1,vec__22872,w1,w2,xs__5205__auto__,temp__4657__auto__,ru,rv,rw,map_p,map__22851,map__22851__$1,points__$1,map__22847,map__22847__$1,points,map__22848,map__22848__$1,num,cols,rows,slices))
,null,null));
});})(s__22854__$1,vec__22872,w1,w2,xs__5205__auto__,temp__4657__auto__,ru,rv,rw,map_p,map__22851,map__22851__$1,points__$1,map__22847,map__22847__$1,points,map__22848,map__22848__$1,num,cols,rows,slices))
;
var fs__19044__auto__ = cljs.core.seq.call(null,iterys__19043__auto__.call(null,rv));
if(fs__19044__auto__){
return cljs.core.concat.call(null,fs__19044__auto__,thi$ng$geom$cuboid$iter__22853.call(null,cljs.core.rest.call(null,s__22854__$1)));
} else {
var G__22895 = cljs.core.rest.call(null,s__22854__$1);
s__22854__$1 = G__22895;
continue;
}
} else {
return null;
}
break;
}
});})(ru,rv,rw,map_p,map__22851,map__22851__$1,points__$1,map__22847,map__22847__$1,points,map__22848,map__22848__$1,num,cols,rows,slices))
,null,null));
});})(ru,rv,rw,map_p,map__22851,map__22851__$1,points__$1,map__22847,map__22847__$1,points,map__22848,map__22848__$1,num,cols,rows,slices))
;
return iter__19047__auto__.call(null,rw);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return (- cljs.core.reduce.call(null,((function (___$1){
return (function (c,f){
var c_SINGLEQUOTE_ = thi.ng.geom.core.classify_point.call(null,thi.ng.geom.plane.plane_from_points.call(null,f),p);
if((c_SINGLEQUOTE_ > (0))){
return cljs.core.reduced.call(null,c_SINGLEQUOTE_);
} else {
var x__18606__auto__ = c;
var y__18607__auto__ = c_SINGLEQUOTE_;
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
}
});})(___$1))
,-1.0,thi.ng.geom.core.faces.call(null,___$1)));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
var vec__22883 = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1);
var a = cljs.core.nth.call(null,vec__22883,(0),null);
var b = cljs.core.nth.call(null,vec__22883,(1),null);
var c = cljs.core.nth.call(null,vec__22883,(2),null);
var d = cljs.core.nth.call(null,vec__22883,(3),null);
var e = cljs.core.nth.call(null,vec__22883,(4),null);
var f = cljs.core.nth.call(null,vec__22883,(5),null);
var g = cljs.core.nth.call(null,vec__22883,(6),null);
var h = cljs.core.nth.call(null,vec__22883,(7),null);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,h], null)], null);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return (0);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (_,p){
var ___$1 = this;
return (thi.ng.geom.core.classify_point.call(null,___$1,p) >= (0));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PFaceAccess$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PFaceAccess$faces$arity$1 = (function (_){
var ___$1 = this;
var vec__22884 = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1);
var a = cljs.core.nth.call(null,vec__22884,(0),null);
var b = cljs.core.nth.call(null,vec__22884,(1),null);
var c = cljs.core.nth.call(null,vec__22884,(2),null);
var d = cljs.core.nth.call(null,vec__22884,(3),null);
var e = cljs.core.nth.call(null,vec__22884,(4),null);
var f = cljs.core.nth.call(null,vec__22884,(5),null);
var g = cljs.core.nth.call(null,vec__22884,(6),null);
var h = cljs.core.nth.call(null,vec__22884,(7),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f,g,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e,h,d], null)], null);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__22829_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p1__22829_SHARP_,t);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBoundingSphere$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_sphere.call(null,thi.ng.geom.core.centroid.call(null,___$1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__22826_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__22826_SHARP_,s);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__22827_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__22827_SHARP_,sx,sy);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__22828_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__22828_SHARP_,sx,sy,sz);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(thi.ng.geom.core.utils.scale_size.call(null,s,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTessellate$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$2 = (function (_,p__22885){
var map__22886 = p__22885;
var map__22886__$1 = ((((!((map__22886 == null)))?((((map__22886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22886):map__22886);
var opts = map__22886__$1;
var f = cljs.core.get.call(null,map__22886__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),thi.ng.geom.core.utils.tessellate_3);
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.mapcat.call(null,thi.ng.geom.core.faces),cljs.core.mapcat.call(null,f)),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1985240673),null,new cljs.core.Keyword(null,"slices","slices",-94090930),null,new cljs.core.Keyword(null,"rows","rows",850049680),null,new cljs.core.Keyword(null,"cols","cols",-1914801295),null], null), null),cljs.core.keys.call(null,opts)))?thi.ng.geom.core.subdivide.call(null,___$1,opts):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null)));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_box.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(0),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(2),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PPointMap$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PPointMap$map_point$arity$2 = (function (_,p){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PPointMap$unmap_point$arity$2 = (function (_,p){
var ___$1 = this;
return thi.ng.geom.core.utils.map_trilinear.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),p);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PMeshConvert$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,p__22888){
var map__22889 = p__22888;
var map__22889__$1 = ((((!((map__22889 == null)))?((((map__22889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22889):map__22889);
var mesh = cljs.core.get.call(null,map__22889__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var flags = cljs.core.get.call(null,map__22889__$1,new cljs.core.Keyword(null,"flags","flags",1775418075),"nsewfb");
var ___$1 = this;
var vec__22891 = thi.ng.geom.core.vertices.call(null,___$1);
var a = cljs.core.nth.call(null,vec__22891,(0),null);
var b = cljs.core.nth.call(null,vec__22891,(1),null);
var c = cljs.core.nth.call(null,vec__22891,(2),null);
var d = cljs.core.nth.call(null,vec__22891,(3),null);
var e = cljs.core.nth.call(null,vec__22891,(4),null);
var f = cljs.core.nth.call(null,vec__22891,(5),null);
var g = cljs.core.nth.call(null,vec__22891,(6),null);
var h = cljs.core.nth.call(null,vec__22891,(7),null);
var vec__22892 = thi.ng.dstruct.core.demunge_flags_seq.call(null,flags,"nsewfb");
var tp = cljs.core.nth.call(null,vec__22892,(0),null);
var bt = cljs.core.nth.call(null,vec__22892,(1),null);
var rt = cljs.core.nth.call(null,vec__22892,(2),null);
var lf = cljs.core.nth.call(null,vec__22892,(3),null);
var fr = cljs.core.nth.call(null,vec__22892,(4),null);
var bk = cljs.core.nth.call(null,vec__22892,(5),null);
return thi.ng.geom.core.into.call(null,(function (){var or__18275__auto__ = mesh;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),cljs.core.sequence.call(null,cljs.core.filter.call(null,cljs.core.identity),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fr)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null):null),(cljs.core.truth_(bk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e,h,d], null):null),(cljs.core.truth_(lf)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null):null),(cljs.core.truth_(rt)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null):null),(cljs.core.truth_(tp)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f,g,h], null):null),(cljs.core.truth_(bt)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null):null)], null)));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first.call(null,cljs.core.reduce.call(null,((function (___$1){
return (function (acc,f){
var p_SINGLEQUOTE_ = thi.ng.geom.core.closest_point.call(null,thi.ng.geom.plane.plane_from_points.call(null,f),p);
var d = thi.ng.geom.core.dist_squared.call(null,p,p_SINGLEQUOTE_);
if((d < acc.call(null,(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_SINGLEQUOTE_,d], null);
} else {
return acc;
}
});})(___$1))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,1.0E100], null),thi.ng.geom.core.faces.call(null,___$1)));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (___$1){
return (function (p1__22820_SHARP_){
return cljs.core.apply.call(null,thi.ng.geom.core.utils.tri_area3,p1__22820_SHARP_);
});})(___$1))
),cljs.core._PLUS_,thi.ng.geom.core.tessellate.call(null,___$1));
});

//# sourceMappingURL=cuboid.js.map