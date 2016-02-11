// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.aabb');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.cuboid');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.geom.core.matrix');
thi.ng.geom.aabb.aabb = (function thi$ng$geom$aabb$aabb(var_args){
var args22898 = [];
var len__19333__auto___22901 = arguments.length;
var i__19334__auto___22902 = (0);
while(true){
if((i__19334__auto___22902 < len__19333__auto___22901)){
args22898.push((arguments[i__19334__auto___22902]));

var G__22903 = (i__19334__auto___22902 + (1));
i__19334__auto___22902 = G__22903;
continue;
} else {
}
break;
}

var G__22900 = args22898.length;
switch (G__22900) {
case 0:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22898.length)].join('')));

}
});

thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new thi.ng.geom.types.AABB(thi.ng.geom.core.vector.vec3.call(null,0.0),thi.ng.geom.core.vector.vec3.call(null,1.0)));
});

thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$1 = (function (size){
return (new thi.ng.geom.types.AABB(thi.ng.geom.core.vector.vec3.call(null,0.0),thi.ng.geom.core.vector.vec3.call(null,size)));
});

thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$2 = (function (o,size){
return (new thi.ng.geom.types.AABB(thi.ng.geom.core.vector.vec3.call(null,o),thi.ng.geom.core.vector.vec3.call(null,size)));
});

thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$3 = (function (sx,sy,sz){
return (new thi.ng.geom.types.AABB(thi.ng.geom.core.vector.vec3.call(null,0.0),thi.ng.geom.core.vector.vec3.call(null,sx,sy,sz)));
});

thi.ng.geom.aabb.aabb.cljs$lang$maxFixedArity = 3;
thi.ng.geom.aabb.aabb_from_minmax = (function thi$ng$geom$aabb$aabb_from_minmax(p,q){
var p__$1 = thi.ng.geom.core.vector.vec3.call(null,p);
var q__$1 = thi.ng.geom.core.vector.vec3.call(null,q);
var p__$2 = thi.ng.geom.core.min.call(null,p__$1,q__$1);
return (new thi.ng.geom.types.AABB(p__$2,thi.ng.geom.core._.call(null,thi.ng.geom.core.max.call(null,p__$2,q__$1),p__$2)));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.core.transform.call(null,thi.ng.geom.cuboid.cuboid.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1)),m);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_z.call(null,thi.ng.geom.cuboid.cuboid.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1)),theta);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_x.call(null,thi.ng.geom.cuboid.cuboid.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1)),theta);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_y.call(null,thi.ng.geom.cuboid.cuboid.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1)),theta);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_z.call(null,thi.ng.geom.cuboid.cuboid.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1)),theta);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_around_axis.call(null,thi.ng.geom.cuboid.cuboid.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1)),axis,theta);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (p__22906){
var map__22907 = p__22906;
var map__22907__$1 = ((((!((map__22907 == null)))?((((map__22907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22907):map__22907);
var p = cljs.core.get.call(null,map__22907__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.call(null,map__22907__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__22909 = this;
var map__22909__$1 = ((((!((map__22909 == null)))?((((map__22909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22909):map__22909);
var p__$1 = cljs.core.get.call(null,map__22909__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.call(null,map__22909__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (new thi.ng.geom.types.AABB(thi.ng.geom.core._STAR_.call(null,size__$1,-0.5),size__$1));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (p__22911,q){
var map__22912 = p__22911;
var map__22912__$1 = ((((!((map__22912 == null)))?((((map__22912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22912):map__22912);
var size = cljs.core.get.call(null,map__22912__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__22914 = this;
var map__22914__$1 = ((((!((map__22914 == null)))?((((map__22914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22914):map__22914);
var size__$1 = cljs.core.get.call(null,map__22914__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (new thi.ng.geom.types.AABB(thi.ng.geom.core.madd.call(null,size__$1,-0.5,q),size__$1));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.madd.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1),0.5,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (p__22916){
var map__22917 = p__22916;
var map__22917__$1 = ((((!((map__22917 == null)))?((((map__22917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22917):map__22917);
var p = cljs.core.get.call(null,map__22917__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.call(null,map__22917__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__22919 = this;
var map__22919__$1 = ((((!((map__22919 == null)))?((((map__22919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22919):map__22919);
var p__$1 = cljs.core.get.call(null,map__22919__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.call(null,map__22919__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__22921 = p__$1;
var x1 = cljs.core.nth.call(null,vec__22921,(0),null);
var y1 = cljs.core.nth.call(null,vec__22921,(1),null);
var z1 = cljs.core.nth.call(null,vec__22921,(2),null);
var vec__22922 = thi.ng.geom.core._PLUS_.call(null,p__$1,size__$1);
var x2 = cljs.core.nth.call(null,vec__22922,(0),null);
var y2 = cljs.core.nth.call(null,vec__22922,(1),null);
var z2 = cljs.core.nth.call(null,vec__22922,(2),null);
return thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.random.call(null,x1,x2),thi.ng.math.core.random.call(null,y1,y2),thi.ng.math.core.random.call(null,z1,z2));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__22923){
var map__22924 = p__22923;
var map__22924__$1 = ((((!((map__22924 == null)))?((((map__22924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22924):map__22924);
var p = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__22926 = this;
var map__22926__$1 = ((((!((map__22926 == null)))?((((map__22926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22926):map__22926);
var p__$1 = cljs.core.get.call(null,map__22926__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.call(null,map__22926__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__22928 = p__$1;
var x1 = cljs.core.nth.call(null,vec__22928,(0),null);
var y1 = cljs.core.nth.call(null,vec__22928,(1),null);
var z1 = cljs.core.nth.call(null,vec__22928,(2),null);
var vec__22929 = thi.ng.geom.core._PLUS_.call(null,p__$1,size__$1);
var x2 = cljs.core.nth.call(null,vec__22929,(0),null);
var y2 = cljs.core.nth.call(null,vec__22929,(1),null);
var z2 = cljs.core.nth.call(null,vec__22929,(2),null);
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

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSubdivide$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.subdivide.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$2 = (function (p__22930,p__22931){
var map__22932 = p__22930;
var map__22932__$1 = ((((!((map__22932 == null)))?((((map__22932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22932):map__22932);
var p = cljs.core.get.call(null,map__22932__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.call(null,map__22932__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__22933 = p__22931;
var map__22933__$1 = ((((!((map__22933 == null)))?((((map__22933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22933):map__22933);
var num = cljs.core.get.call(null,map__22933__$1,new cljs.core.Keyword(null,"num","num",1985240673),(1));
var cols = cljs.core.get.call(null,map__22933__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var rows = cljs.core.get.call(null,map__22933__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var slices = cljs.core.get.call(null,map__22933__$1,new cljs.core.Keyword(null,"slices","slices",-94090930));
var map__22936 = this;
var map__22936__$1 = ((((!((map__22936 == null)))?((((map__22936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22936):map__22936);
var p__$1 = cljs.core.get.call(null,map__22936__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.call(null,map__22936__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var sx = (function (){var or__18275__auto__ = cols;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return num;
}
})();
var sy = (function (){var or__18275__auto__ = rows;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return num;
}
})();
var sz = (function (){var or__18275__auto__ = slices;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return num;
}
})();
var s = thi.ng.geom.core.div.call(null,size__$1,sx,sy,sz);
var iter__19047__auto__ = ((function (sx,sy,sz,s,map__22936,map__22936__$1,p__$1,size__$1,map__22932,map__22932__$1,p,size,map__22933,map__22933__$1,num,cols,rows,slices){
return (function thi$ng$geom$aabb$iter__22938(s__22939){
return (new cljs.core.LazySeq(null,((function (sx,sy,sz,s,map__22936,map__22936__$1,p__$1,size__$1,map__22932,map__22932__$1,p,size,map__22933,map__22933__$1,num,cols,rows,slices){
return (function (){
var s__22939__$1 = s__22939;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22939__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var z = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19043__auto__ = ((function (s__22939__$1,z,xs__5205__auto__,temp__4657__auto__,sx,sy,sz,s,map__22936,map__22936__$1,p__$1,size__$1,map__22932,map__22932__$1,p,size,map__22933,map__22933__$1,num,cols,rows,slices){
return (function thi$ng$geom$aabb$iter__22938_$_iter__22940(s__22941){
return (new cljs.core.LazySeq(null,((function (s__22939__$1,z,xs__5205__auto__,temp__4657__auto__,sx,sy,sz,s,map__22936,map__22936__$1,p__$1,size__$1,map__22932,map__22932__$1,p,size,map__22933,map__22933__$1,num,cols,rows,slices){
return (function (){
var s__22941__$1 = s__22941;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__22941__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var y = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__19043__auto__ = ((function (s__22941__$1,s__22939__$1,y,xs__5205__auto____$1,temp__4657__auto____$1,z,xs__5205__auto__,temp__4657__auto__,sx,sy,sz,s,map__22936,map__22936__$1,p__$1,size__$1,map__22932,map__22932__$1,p,size,map__22933,map__22933__$1,num,cols,rows,slices){
return (function thi$ng$geom$aabb$iter__22938_$_iter__22940_$_iter__22942(s__22943){
return (new cljs.core.LazySeq(null,((function (s__22941__$1,s__22939__$1,y,xs__5205__auto____$1,temp__4657__auto____$1,z,xs__5205__auto__,temp__4657__auto__,sx,sy,sz,s,map__22936,map__22936__$1,p__$1,size__$1,map__22932,map__22932__$1,p,size,map__22933,map__22933__$1,num,cols,rows,slices){
return (function (){
var s__22943__$1 = s__22943;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__22943__$1);
if(temp__4657__auto____$2){
var s__22943__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22943__$2)){
var c__19045__auto__ = cljs.core.chunk_first.call(null,s__22943__$2);
var size__19046__auto__ = cljs.core.count.call(null,c__19045__auto__);
var b__22945 = cljs.core.chunk_buffer.call(null,size__19046__auto__);
if((function (){var i__22944 = (0);
while(true){
if((i__22944 < size__19046__auto__)){
var x = cljs.core._nth.call(null,c__19045__auto__,i__22944);
cljs.core.chunk_append.call(null,b__22945,(new thi.ng.geom.types.AABB(thi.ng.geom.core.madd.call(null,thi.ng.geom.core.vector.vec3.call(null,x,y,z),size__$1,p__$1),s)));

var G__23011 = (i__22944 + (1));
i__22944 = G__23011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22945),thi$ng$geom$aabb$iter__22938_$_iter__22940_$_iter__22942.call(null,cljs.core.chunk_rest.call(null,s__22943__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22945),null);
}
} else {
var x = cljs.core.first.call(null,s__22943__$2);
return cljs.core.cons.call(null,(new thi.ng.geom.types.AABB(thi.ng.geom.core.madd.call(null,thi.ng.geom.core.vector.vec3.call(null,x,y,z),size__$1,p__$1),s)),thi$ng$geom$aabb$iter__22938_$_iter__22940_$_iter__22942.call(null,cljs.core.rest.call(null,s__22943__$2)));
}
} else {
return null;
}
break;
}
});})(s__22941__$1,s__22939__$1,y,xs__5205__auto____$1,temp__4657__auto____$1,z,xs__5205__auto__,temp__4657__auto__,sx,sy,sz,s,map__22936,map__22936__$1,p__$1,size__$1,map__22932,map__22932__$1,p,size,map__22933,map__22933__$1,num,cols,rows,slices))
,null,null));
});})(s__22941__$1,s__22939__$1,y,xs__5205__auto____$1,temp__4657__auto____$1,z,xs__5205__auto__,temp__4657__auto__,sx,sy,sz,s,map__22936,map__22936__$1,p__$1,size__$1,map__22932,map__22932__$1,p,size,map__22933,map__22933__$1,num,cols,rows,slices))
;
var fs__19044__auto__ = cljs.core.seq.call(null,iterys__19043__auto__.call(null,cljs.core.butlast.call(null,thi.ng.math.core.norm_range.call(null,sx))));
if(fs__19044__auto__){
return cljs.core.concat.call(null,fs__19044__auto__,thi$ng$geom$aabb$iter__22938_$_iter__22940.call(null,cljs.core.rest.call(null,s__22941__$1)));
} else {
var G__23012 = cljs.core.rest.call(null,s__22941__$1);
s__22941__$1 = G__23012;
continue;
}
} else {
return null;
}
break;
}
});})(s__22939__$1,z,xs__5205__auto__,temp__4657__auto__,sx,sy,sz,s,map__22936,map__22936__$1,p__$1,size__$1,map__22932,map__22932__$1,p,size,map__22933,map__22933__$1,num,cols,rows,slices))
,null,null));
});})(s__22939__$1,z,xs__5205__auto__,temp__4657__auto__,sx,sy,sz,s,map__22936,map__22936__$1,p__$1,size__$1,map__22932,map__22932__$1,p,size,map__22933,map__22933__$1,num,cols,rows,slices))
;
var fs__19044__auto__ = cljs.core.seq.call(null,iterys__19043__auto__.call(null,cljs.core.butlast.call(null,thi.ng.math.core.norm_range.call(null,sy))));
if(fs__19044__auto__){
return cljs.core.concat.call(null,fs__19044__auto__,thi$ng$geom$aabb$iter__22938.call(null,cljs.core.rest.call(null,s__22939__$1)));
} else {
var G__23013 = cljs.core.rest.call(null,s__22939__$1);
s__22939__$1 = G__23013;
continue;
}
} else {
return null;
}
break;
}
});})(sx,sy,sz,s,map__22936,map__22936__$1,p__$1,size__$1,map__22932,map__22932__$1,p,size,map__22933,map__22933__$1,num,cols,rows,slices))
,null,null));
});})(sx,sy,sz,s,map__22936,map__22936__$1,p__$1,size__$1,map__22932,map__22932__$1,p,size,map__22933,map__22933__$1,num,cols,rows,slices))
;
return iter__19047__auto__.call(null,cljs.core.butlast.call(null,thi.ng.math.core.norm_range.call(null,sz)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (p__22946,p__22947){
var map__22948 = p__22946;
var map__22948__$1 = ((((!((map__22948 == null)))?((((map__22948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22948):map__22948);
var p = cljs.core.get.call(null,map__22948__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.call(null,map__22948__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__22949 = p__22947;
var x = cljs.core.nth.call(null,vec__22949,(0),null);
var y = cljs.core.nth.call(null,vec__22949,(1),null);
var z = cljs.core.nth.call(null,vec__22949,(2),null);
var q = vec__22949;
var map__22951 = this;
var map__22951__$1 = ((((!((map__22951 == null)))?((((map__22951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22951):map__22951);
var p__$1 = cljs.core.get.call(null,map__22951__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.call(null,map__22951__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__22953 = p__$1;
var x1 = cljs.core.nth.call(null,vec__22953,(0),null);
var y1 = cljs.core.nth.call(null,vec__22953,(1),null);
var z1 = cljs.core.nth.call(null,vec__22953,(2),null);
var vec__22954 = thi.ng.geom.core._PLUS_.call(null,p__$1,size__$1);
var x2 = cljs.core.nth.call(null,vec__22954,(0),null);
var y2 = cljs.core.nth.call(null,vec__22954,(1),null);
var z2 = cljs.core.nth.call(null,vec__22954,(2),null);
var on_plane_QMARK_ = ((function (vec__22953,x1,y1,z1,vec__22954,x2,y2,z2,map__22951,map__22951__$1,p__$1,size__$1,map__22948,map__22948__$1,p,size,vec__22949,x,y,z,q){
return (function (p__22955){
var vec__22956 = p__22955;
var minp = cljs.core.nth.call(null,vec__22956,(0),null);
var maxp = cljs.core.nth.call(null,vec__22956,(1),null);
var p__$2 = cljs.core.nth.call(null,vec__22956,(2),null);
var min1 = cljs.core.nth.call(null,vec__22956,(3),null);
var max1 = cljs.core.nth.call(null,vec__22956,(4),null);
var min2 = cljs.core.nth.call(null,vec__22956,(5),null);
var max2 = cljs.core.nth.call(null,vec__22956,(6),null);
var c1 = cljs.core.nth.call(null,vec__22956,(7),null);
var c2 = cljs.core.nth.call(null,vec__22956,(8),null);
var and__18263__auto__ = (function (){var or__18275__auto__ = thi.ng.math.core.delta_EQ_.call(null,minp,p__$2,thi.ng.math.core._STAR_eps_STAR_);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.math.core.delta_EQ_.call(null,maxp,p__$2,thi.ng.math.core._STAR_eps_STAR_);
}
})();
if(cljs.core.truth_(and__18263__auto__)){
var and__18263__auto____$1 = thi.ng.math.core.in_range_QMARK_.call(null,min1,max1,c1);
if(cljs.core.truth_(and__18263__auto____$1)){
return thi.ng.math.core.in_range_QMARK_.call(null,min2,max2,c2);
} else {
return and__18263__auto____$1;
}
} else {
return and__18263__auto__;
}
});})(vec__22953,x1,y1,z1,vec__22954,x2,y2,z2,map__22951,map__22951__$1,p__$1,size__$1,map__22948,map__22948__$1,p,size,vec__22949,x,y,z,q))
;
if(cljs.core.truth_(cljs.core.some.call(null,on_plane_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,x2,x,y1,y2,z1,z2,y,z], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1,y2,y,x1,x2,z1,z2,x,z], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [z1,z2,z,x1,x2,y1,y2,x,y], null)], null)))){
return (0);
} else {
if(cljs.core.truth_((function (){var and__18263__auto__ = thi.ng.math.core.in_range_QMARK_.call(null,x1,x2,x);
if(cljs.core.truth_(and__18263__auto__)){
var and__18263__auto____$1 = thi.ng.math.core.in_range_QMARK_.call(null,y1,y2,y);
if(cljs.core.truth_(and__18263__auto____$1)){
return thi.ng.math.core.in_range_QMARK_.call(null,z1,z2,z);
} else {
return and__18263__auto____$1;
}
} else {
return and__18263__auto__;
}
})())){
return (1);
} else {
return (-1);
}
}
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
var vec__22957 = thi.ng.geom.core.vertices.call(null,___$1);
var a = cljs.core.nth.call(null,vec__22957,(0),null);
var b = cljs.core.nth.call(null,vec__22957,(1),null);
var c = cljs.core.nth.call(null,vec__22957,(2),null);
var d = cljs.core.nth.call(null,vec__22957,(3),null);
var e = cljs.core.nth.call(null,vec__22957,(4),null);
var f = cljs.core.nth.call(null,vec__22957,(5),null);
var g = cljs.core.nth.call(null,vec__22957,(6),null);
var h = cljs.core.nth.call(null,vec__22957,(7),null);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,h], null)], null);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (p__22958){
var map__22959 = p__22958;
var map__22959__$1 = ((((!((map__22959 == null)))?((((map__22959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22959):map__22959);
var vec__22960 = cljs.core.get.call(null,map__22959__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__22960,(0),null);
var h = cljs.core.nth.call(null,vec__22960,(1),null);
var d = cljs.core.nth.call(null,vec__22960,(2),null);
var map__22962 = this;
var map__22962__$1 = ((((!((map__22962 == null)))?((((map__22962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22962):map__22962);
var vec__22963 = cljs.core.get.call(null,map__22962__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w__$1 = cljs.core.nth.call(null,vec__22963,(0),null);
var h__$1 = cljs.core.nth.call(null,vec__22963,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__22963,(2),null);
return ((w__$1 * h__$1) * d__$1);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__22965,q){
var map__22966 = p__22965;
var map__22966__$1 = ((((!((map__22966 == null)))?((((map__22966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22966):map__22966);
var p = cljs.core.get.call(null,map__22966__$1,new cljs.core.Keyword(null,"p","p",151049309));
var s = cljs.core.get.call(null,map__22966__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__22968 = this;
var map__22968__$1 = ((((!((map__22968 == null)))?((((map__22968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22968):map__22968);
var p__$1 = cljs.core.get.call(null,map__22968__$1,new cljs.core.Keyword(null,"p","p",151049309));
var s__$1 = cljs.core.get.call(null,map__22968__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var and__18263__auto__ = thi.ng.math.core.in_range_QMARK_.call(null,p__$1.call(null,(0)),(p__$1.call(null,(0)) + s__$1.call(null,(0))),q.call(null,(0)));
if(cljs.core.truth_(and__18263__auto__)){
var and__18263__auto____$1 = thi.ng.math.core.in_range_QMARK_.call(null,p__$1.call(null,(1)),(p__$1.call(null,(1)) + s__$1.call(null,(1))),q.call(null,(1)));
if(cljs.core.truth_(and__18263__auto____$1)){
return thi.ng.math.core.in_range_QMARK_.call(null,p__$1.call(null,(2)),(p__$1.call(null,(2)) + s__$1.call(null,(2))),q.call(null,(2)));
} else {
return and__18263__auto____$1;
}
} else {
return and__18263__auto__;
}
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSetOps$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSetOps$union$arity$2 = (function (p__22970,p__22971){
var map__22972 = p__22970;
var map__22972__$1 = ((((!((map__22972 == null)))?((((map__22972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22972):map__22972);
var pa = cljs.core.get.call(null,map__22972__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sa = cljs.core.get.call(null,map__22972__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__22973 = p__22971;
var map__22973__$1 = ((((!((map__22973 == null)))?((((map__22973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22973):map__22973);
var pb = cljs.core.get.call(null,map__22973__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sb = cljs.core.get.call(null,map__22973__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__22976 = this;
var map__22976__$1 = ((((!((map__22976 == null)))?((((map__22976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22976):map__22976);
var pa__$1 = cljs.core.get.call(null,map__22976__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sa__$1 = cljs.core.get.call(null,map__22976__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var p = thi.ng.geom.core.min.call(null,pa__$1,pb);
return (new thi.ng.geom.types.AABB(p,thi.ng.geom.core._.call(null,thi.ng.geom.core.max.call(null,thi.ng.geom.core._PLUS_.call(null,pa__$1,sa__$1),thi.ng.geom.core._PLUS_.call(null,pb,sb)),p)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSetOps$intersection$arity$2 = (function (_,b){
var ___$1 = this;
var pa = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1);
var qa = thi.ng.geom.core._PLUS_.call(null,pa,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1));
var pb = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(b);
var qb = thi.ng.geom.core._PLUS_.call(null,pb,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(b));
var p_SINGLEQUOTE_ = thi.ng.geom.core.max.call(null,pa,pb);
var q_SINGLEQUOTE_ = thi.ng.geom.core.min.call(null,qa,qb);
var s_SINGLEQUOTE_ = thi.ng.geom.core._.call(null,q_SINGLEQUOTE_,p_SINGLEQUOTE_);
if(cljs.core.every_QMARK_.call(null,((function (pa,qa,pb,qb,p_SINGLEQUOTE_,q_SINGLEQUOTE_,s_SINGLEQUOTE_,___$1){
return (function (p1__22905_SHARP_){
return (p1__22905_SHARP_ >= (0));
});})(pa,qa,pb,qb,p_SINGLEQUOTE_,q_SINGLEQUOTE_,s_SINGLEQUOTE_,___$1))
,s_SINGLEQUOTE_)){
return (new thi.ng.geom.types.AABB(p_SINGLEQUOTE_,s_SINGLEQUOTE_));
} else {
return null;
}
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.AABB)){
return thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.call(null,___$1,s);
} else {
if((s instanceof thi.ng.geom.types.Sphere)){
return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.call(null,___$1,s);
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"AABB",s);

}
}
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PFaceAccess$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PFaceAccess$faces$arity$1 = (function (_){
var ___$1 = this;
var vec__22985 = thi.ng.geom.core.vertices.call(null,___$1);
var a = cljs.core.nth.call(null,vec__22985,(0),null);
var b = cljs.core.nth.call(null,vec__22985,(1),null);
var c = cljs.core.nth.call(null,vec__22985,(2),null);
var d = cljs.core.nth.call(null,vec__22985,(3),null);
var e = cljs.core.nth.call(null,vec__22985,(4),null);
var f = cljs.core.nth.call(null,vec__22985,(5),null);
var g = cljs.core.nth.call(null,vec__22985,(6),null);
var h = cljs.core.nth.call(null,vec__22985,(7),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f,g,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e,h,d], null)], null);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.AABB(thi.ng.geom.core._PLUS_.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),t),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundingSphere$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (p__22986){
var map__22987 = p__22986;
var map__22987__$1 = ((((!((map__22987 == null)))?((((map__22987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22987):map__22987);
var p = cljs.core.get.call(null,map__22987__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.call(null,map__22987__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__22989 = this;
var map__22989__$1 = ((((!((map__22989 == null)))?((((map__22989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22989):map__22989);
var p__$1 = cljs.core.get.call(null,map__22989__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.call(null,map__22989__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var ext = thi.ng.geom.core._STAR_.call(null,size__$1,0.5);
return thi.ng.geom.types.utils.bounding_sphere.call(null,thi.ng.geom.core._PLUS_.call(null,p__$1,ext),thi.ng.geom.core.mag.call(null,ext));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.AABB(thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),s),thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1),s)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){
var ___$1 = this;
return (new thi.ng.geom.types.AABB(thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),sx,sy),thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1),sx,sy)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){
var ___$1 = this;
return (new thi.ng.geom.types.AABB(thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),sx,sy,sz),thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1),sx,sy,sz)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
var s_SINGLEQUOTE_ = thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1),s);
return (new thi.ng.geom.types.AABB(thi.ng.geom.core.madd.call(null,thi.ng.geom.core._.call(null,s_SINGLEQUOTE_,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1)),-0.5,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1)),s_SINGLEQUOTE_));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTessellate$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$2 = (function (_,p__22991){
var map__22992 = p__22991;
var map__22992__$1 = ((((!((map__22992 == null)))?((((map__22992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22992):map__22992);
var opts = map__22992__$1;
var f = cljs.core.get.call(null,map__22992__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),thi.ng.geom.core.utils.tessellate_3);
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.mapcat.call(null,thi.ng.geom.core.faces),cljs.core.mapcat.call(null,f)),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1985240673),null,new cljs.core.Keyword(null,"slices","slices",-94090930),null,new cljs.core.Keyword(null,"rows","rows",850049680),null,new cljs.core.Keyword(null,"cols","cols",-1914801295),null], null), null),cljs.core.keys.call(null,opts)))?thi.ng.geom.core.subdivide.call(null,___$1,opts):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1),(0));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1),(1));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1),(2));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (p__22994){
var map__22995 = p__22994;
var map__22995__$1 = ((((!((map__22995 == null)))?((((map__22995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22995):map__22995);
var a = cljs.core.get.call(null,map__22995__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.call(null,map__22995__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__22997 = this;
var map__22997__$1 = ((((!((map__22997 == null)))?((((map__22997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22997):map__22997);
var a__$1 = cljs.core.get.call(null,map__22997__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.call(null,map__22997__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__22999 = a__$1;
var x1 = cljs.core.nth.call(null,vec__22999,(0),null);
var y1 = cljs.core.nth.call(null,vec__22999,(1),null);
var z1 = cljs.core.nth.call(null,vec__22999,(2),null);
var vec__23000 = thi.ng.geom.core._PLUS_.call(null,a__$1,size__$1);
var x2 = cljs.core.nth.call(null,vec__23000,(0),null);
var y2 = cljs.core.nth.call(null,vec__23000,(1),null);
var z2 = cljs.core.nth.call(null,vec__23000,(2),null);
var g = vec__23000;
var b = thi.ng.geom.core.vector.vec3.call(null,x1,y1,z2);
var c = thi.ng.geom.core.vector.vec3.call(null,x2,y1,z2);
var d = thi.ng.geom.core.vector.vec3.call(null,x2,y1,z1);
var e = thi.ng.geom.core.vector.vec3.call(null,x1,y2,z1);
var f = thi.ng.geom.core.vector.vec3.call(null,x1,y2,z2);
var h = thi.ng.geom.core.vector.vec3.call(null,x2,y2,z1);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b,c,d,e,f,g,h], null);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PPointMap$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PPointMap$map_point$arity$2 = (function (p__23001,q){
var map__23002 = p__23001;
var map__23002__$1 = ((((!((map__23002 == null)))?((((map__23002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23002):map__23002);
var p = cljs.core.get.call(null,map__23002__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.call(null,map__23002__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__23004 = this;
var map__23004__$1 = ((((!((map__23004 == null)))?((((map__23004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23004):map__23004);
var p__$1 = cljs.core.get.call(null,map__23004__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.call(null,map__23004__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.core.vector.vec3.call(null,((q.call(null,(0)) - p__$1.call(null,(0))) / size__$1.call(null,(0))),((q.call(null,(1)) - p__$1.call(null,(1))) / size__$1.call(null,(1))),((q.call(null,(2)) - p__$1.call(null,(2))) / size__$1.call(null,(2))));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PPointMap$unmap_point$arity$2 = (function (_,q){
var ___$1 = this;
return thi.ng.geom.core.madd.call(null,q,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PMeshConvert$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,p__23006){
var map__23007 = p__23006;
var map__23007__$1 = ((((!((map__23007 == null)))?((((map__23007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23007):map__23007);
var mesh = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var flags = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"flags","flags",1775418075),"nsewfb");
var ___$1 = this;
var vec__23009 = thi.ng.geom.core.vertices.call(null,___$1);
var a = cljs.core.nth.call(null,vec__23009,(0),null);
var b = cljs.core.nth.call(null,vec__23009,(1),null);
var c = cljs.core.nth.call(null,vec__23009,(2),null);
var d = cljs.core.nth.call(null,vec__23009,(3),null);
var e = cljs.core.nth.call(null,vec__23009,(4),null);
var f = cljs.core.nth.call(null,vec__23009,(5),null);
var g = cljs.core.nth.call(null,vec__23009,(6),null);
var h = cljs.core.nth.call(null,vec__23009,(7),null);
var vec__23010 = thi.ng.dstruct.core.demunge_flags_seq.call(null,flags,"nsewfb");
var tp = cljs.core.nth.call(null,vec__23010,(0),null);
var bt = cljs.core.nth.call(null,vec__23010,(1),null);
var rt = cljs.core.nth.call(null,vec__23010,(2),null);
var lf = cljs.core.nth.call(null,vec__23010,(3),null);
var fr = cljs.core.nth.call(null,vec__23010,(4),null);
var bk = cljs.core.nth.call(null,vec__23010,(5),null);
return thi.ng.geom.core.into.call(null,(function (){var or__18275__auto__ = mesh;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),cljs.core.sequence.call(null,cljs.core.filter.call(null,cljs.core.identity),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fr)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null):null),(cljs.core.truth_(bk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e,h,d], null):null),(cljs.core.truth_(lf)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null):null),(cljs.core.truth_(rt)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null):null),(cljs.core.truth_(tp)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f,g,h], null):null),(cljs.core.truth_(bt)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null):null)], null)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return null;
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (p__22978){
var map__22979 = p__22978;
var map__22979__$1 = ((((!((map__22979 == null)))?((((map__22979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22979):map__22979);
var vec__22980 = cljs.core.get.call(null,map__22979__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__22980,(0),null);
var h = cljs.core.nth.call(null,vec__22980,(1),null);
var d = cljs.core.nth.call(null,vec__22980,(2),null);
var map__22982 = this;
var map__22982__$1 = ((((!((map__22982 == null)))?((((map__22982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22982):map__22982);
var vec__22983 = cljs.core.get.call(null,map__22982__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w__$1 = cljs.core.nth.call(null,vec__22983,(0),null);
var h__$1 = cljs.core.nth.call(null,vec__22983,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__22983,(2),null);
return (2.0 * (((w__$1 * h__$1) + (d__$1 * h__$1)) + (w__$1 * d__$1)));
});

//# sourceMappingURL=aabb.js.map