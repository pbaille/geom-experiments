// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.rect');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.aabb');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.types');
thi.ng.geom.rect.rect = (function thi$ng$geom$rect$rect(var_args){
var args23016 = [];
var len__19333__auto___23020 = arguments.length;
var i__19334__auto___23021 = (0);
while(true){
if((i__19334__auto___23021 < len__19333__auto___23020)){
args23016.push((arguments[i__19334__auto___23021]));

var G__23022 = (i__19334__auto___23021 + (1));
i__19334__auto___23021 = G__23022;
continue;
} else {
}
break;
}

var G__23018 = args23016.length;
switch (G__23018) {
case 0:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23016.length)].join('')));

}
});

thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.call(null),thi.ng.geom.core.vector.vec2.call(null,1.0)));
});

thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$1 = (function (w){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.call(null),thi.ng.geom.core.vector.vec2.call(null,w)));
});

thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$2 = (function (p,q){
if(cljs.core.coll_QMARK_.call(null,p)){
if(cljs.core.coll_QMARK_.call(null,q)){
var p__$1 = thi.ng.geom.core.vector.vec2.call(null,p);
var q__$1 = thi.ng.geom.core.vector.vec2.call(null,q);
var vec__23019 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.min.call(null,p__$1,q__$1),thi.ng.geom.core.max.call(null,p__$1,q__$1)], null);
var p__$2 = cljs.core.nth.call(null,vec__23019,(0),null);
var q__$2 = cljs.core.nth.call(null,vec__23019,(1),null);
return (new thi.ng.geom.types.Rect2(p__$2,thi.ng.geom.core._.call(null,q__$2,p__$2)));
} else {
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.call(null,p),thi.ng.geom.core.vector.vec2.call(null,q)));
}
} else {
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.call(null),thi.ng.geom.core.vector.vec2.call(null,p,q)));
}
});

thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$3 = (function (x,y,w){
if(typeof x === 'number'){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.call(null,x,y),thi.ng.geom.core.vector.vec2.call(null,w)));
} else {
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.call(null,x),thi.ng.geom.core.vector.vec2.call(null,y,w)));
}
});

thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$4 = (function (x,y,w,h){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.call(null,x,y),thi.ng.geom.core.vector.vec2.call(null,w,h)));
});

thi.ng.geom.rect.rect.cljs$lang$maxFixedArity = 4;
thi.ng.geom.rect.union = (function thi$ng$geom$rect$union(p__23024,p__23025){
var map__23033 = p__23024;
var map__23033__$1 = ((((!((map__23033 == null)))?((((map__23033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23033):map__23033);
var p = cljs.core.get.call(null,map__23033__$1,new cljs.core.Keyword(null,"p","p",151049309));
var vec__23034 = cljs.core.get.call(null,map__23033__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__23034,(0),null);
var h = cljs.core.nth.call(null,vec__23034,(1),null);
var map__23035 = p__23025;
var map__23035__$1 = ((((!((map__23035 == null)))?((((map__23035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23035):map__23035);
var q = cljs.core.get.call(null,map__23035__$1,new cljs.core.Keyword(null,"p","p",151049309));
var vec__23036 = cljs.core.get.call(null,map__23035__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var qw = cljs.core.nth.call(null,vec__23036,(0),null);
var qh = cljs.core.nth.call(null,vec__23036,(1),null);
var vec__23039 = thi.ng.geom.core.min.call(null,p,q);
var x1 = cljs.core.nth.call(null,vec__23039,(0),null);
var y1 = cljs.core.nth.call(null,vec__23039,(1),null);
var p_SINGLEQUOTE_ = vec__23039;
var x2 = (function (){var x__18606__auto__ = (p.call(null,(0)) + w);
var y__18607__auto__ = (q.call(null,(0)) + qw);
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})();
var y2 = (function (){var x__18606__auto__ = (p.call(null,(1)) + h);
var y__18607__auto__ = (q.call(null,(1)) + qh);
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})();
var w__$1 = (x2 - x1);
var h__$1 = (y2 - y1);
return (new thi.ng.geom.types.Rect2(p_SINGLEQUOTE_,thi.ng.geom.core.vector.vec2.call(null,w__$1,h__$1)));
});
thi.ng.geom.rect.left = (function thi$ng$geom$rect$left(r){
return new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(r).call(null,(0));
});
thi.ng.geom.rect.right = (function thi$ng$geom$rect$right(r){
return (new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(r).call(null,(0)) + new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(r).call(null,(0)));
});
thi.ng.geom.rect.bottom = (function thi$ng$geom$rect$bottom(r){
return new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(r).call(null,(1));
});
thi.ng.geom.rect.bottom_left = (function thi$ng$geom$rect$bottom_left(r){
return new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(r);
});
thi.ng.geom.rect.top = (function thi$ng$geom$rect$top(r){
return (new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(r).call(null,(1)) + new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(r).call(null,(1)));
});
thi.ng.geom.rect.top_right = (function thi$ng$geom$rect$top_right(r){
return thi.ng.geom.core._PLUS_.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(r));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.core.transform.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),m);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.core.rotate.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),m);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (p__23044){
var map__23045 = p__23044;
var map__23045__$1 = ((((!((map__23045 == null)))?((((map__23045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23045):map__23045);
var s = cljs.core.get.call(null,map__23045__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__23047 = this;
var map__23047__$1 = ((((!((map__23047 == null)))?((((map__23047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23047):map__23047);
var s__$1 = cljs.core.get.call(null,map__23047__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core._STAR_.call(null,s__$1,-0.5),s__$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (p__23049,o){
var map__23050 = p__23049;
var map__23050__$1 = ((((!((map__23050 == null)))?((((map__23050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23050):map__23050);
var s = cljs.core.get.call(null,map__23050__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__23052 = this;
var map__23052__$1 = ((((!((map__23052 == null)))?((((map__23052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23052):map__23052);
var s__$1 = cljs.core.get.call(null,map__23052__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.madd.call(null,s__$1,-0.5,o),s__$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.madd.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1),0.5,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PPolygonConvert$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PPolygonConvert$as_polygon$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(thi.ng.geom.core.vertices.call(null,___$1)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.core.utils.point_at.call(null,t,cljs.core.conj.call(null,thi.ng.geom.core.vertices.call(null,___$1),new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.point_at.call(null,___$1,thi.ng.math.core.random.call(null));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core._PLUS_.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),thi.ng.math.core.random.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1).call(null,(0))),thi.ng.math.core.random.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1).call(null,(1))));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,udist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.core.utils.sample_uniform.call(null,udist,include_last_QMARK_,cljs.core.conj.call(null,thi.ng.geom.core.vertices.call(null,___$1),new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSubdivide$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.subdivide.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$2 = (function (_,p__23054){
var map__23055 = p__23054;
var map__23055__$1 = ((((!((map__23055 == null)))?((((map__23055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23055):map__23055);
var num = cljs.core.get.call(null,map__23055__$1,new cljs.core.Keyword(null,"num","num",1985240673),(2));
var cols = cljs.core.get.call(null,map__23055__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var rows = cljs.core.get.call(null,map__23055__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var ___$1 = this;
var dx = (1.0 / (function (){var or__18275__auto__ = cols;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return num;
}
})());
var dy = (1.0 / (function (){var or__18275__auto__ = rows;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return num;
}
})());
var rx = cljs.core.range.call(null,0.0,1.0,dx);
var ry = cljs.core.range.call(null,0.0,1.0,dy);
var s = thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1),dx,dy);
var iter__19047__auto__ = ((function (dx,dy,rx,ry,s,___$1,map__23055,map__23055__$1,num,cols,rows){
return (function thi$ng$geom$rect$iter__23057(s__23058){
return (new cljs.core.LazySeq(null,((function (dx,dy,rx,ry,s,___$1,map__23055,map__23055__$1,num,cols,rows){
return (function (){
var s__23058__$1 = s__23058;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23058__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var y = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19043__auto__ = ((function (s__23058__$1,y,xs__5205__auto__,temp__4657__auto__,dx,dy,rx,ry,s,___$1,map__23055,map__23055__$1,num,cols,rows){
return (function thi$ng$geom$rect$iter__23057_$_iter__23059(s__23060){
return (new cljs.core.LazySeq(null,((function (s__23058__$1,y,xs__5205__auto__,temp__4657__auto__,dx,dy,rx,ry,s,___$1,map__23055,map__23055__$1,num,cols,rows){
return (function (){
var s__23060__$1 = s__23060;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__23060__$1);
if(temp__4657__auto____$1){
var s__23060__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23060__$2)){
var c__19045__auto__ = cljs.core.chunk_first.call(null,s__23060__$2);
var size__19046__auto__ = cljs.core.count.call(null,c__19045__auto__);
var b__23062 = cljs.core.chunk_buffer.call(null,size__19046__auto__);
if((function (){var i__23061 = (0);
while(true){
if((i__23061 < size__19046__auto__)){
var x = cljs.core._nth.call(null,c__19045__auto__,i__23061);
var vec__23069 = thi.ng.geom.core.unmap_point.call(null,___$1,thi.ng.geom.core.vector.vec2.call(null,x,y));
var px = cljs.core.nth.call(null,vec__23069,(0),null);
var py = cljs.core.nth.call(null,vec__23069,(1),null);
var px__$1 = thi.ng.math.core.roundto.call(null,px,thi.ng.math.core._STAR_eps_STAR_);
var py__$1 = thi.ng.math.core.roundto.call(null,py,thi.ng.math.core._STAR_eps_STAR_);
cljs.core.chunk_append.call(null,b__23062,(new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.call(null,px__$1,py__$1),s)));

var G__23107 = (i__23061 + (1));
i__23061 = G__23107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23062),thi$ng$geom$rect$iter__23057_$_iter__23059.call(null,cljs.core.chunk_rest.call(null,s__23060__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23062),null);
}
} else {
var x = cljs.core.first.call(null,s__23060__$2);
var vec__23070 = thi.ng.geom.core.unmap_point.call(null,___$1,thi.ng.geom.core.vector.vec2.call(null,x,y));
var px = cljs.core.nth.call(null,vec__23070,(0),null);
var py = cljs.core.nth.call(null,vec__23070,(1),null);
var px__$1 = thi.ng.math.core.roundto.call(null,px,thi.ng.math.core._STAR_eps_STAR_);
var py__$1 = thi.ng.math.core.roundto.call(null,py,thi.ng.math.core._STAR_eps_STAR_);
return cljs.core.cons.call(null,(new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.call(null,px__$1,py__$1),s)),thi$ng$geom$rect$iter__23057_$_iter__23059.call(null,cljs.core.rest.call(null,s__23060__$2)));
}
} else {
return null;
}
break;
}
});})(s__23058__$1,y,xs__5205__auto__,temp__4657__auto__,dx,dy,rx,ry,s,___$1,map__23055,map__23055__$1,num,cols,rows))
,null,null));
});})(s__23058__$1,y,xs__5205__auto__,temp__4657__auto__,dx,dy,rx,ry,s,___$1,map__23055,map__23055__$1,num,cols,rows))
;
var fs__19044__auto__ = cljs.core.seq.call(null,iterys__19043__auto__.call(null,rx));
if(fs__19044__auto__){
return cljs.core.concat.call(null,fs__19044__auto__,thi$ng$geom$rect$iter__23057.call(null,cljs.core.rest.call(null,s__23058__$1)));
} else {
var G__23108 = cljs.core.rest.call(null,s__23058__$1);
s__23058__$1 = G__23108;
continue;
}
} else {
return null;
}
break;
}
});})(dx,dy,rx,ry,s,___$1,map__23055,map__23055__$1,num,cols,rows))
,null,null));
});})(dx,dy,rx,ry,s,___$1,map__23055,map__23055__$1,num,cols,rows))
;
return iter__19047__auto__.call(null,ry);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,q){
var ___$1 = this;
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (___$1){
return (function (p1__23040_SHARP_){
return thi.ng.math.core.signum.call(null,cljs.core.apply.call(null,thi.ng.geom.core.utils.closest_point_coeff,q,p1__23040_SHARP_),thi.ng.math.core._STAR_eps_STAR_);
});})(___$1))
),cljs.core.min,thi.ng.geom.core.edges.call(null,___$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (_,p__23071){
var map__23072 = p__23071;
var map__23072__$1 = ((((!((map__23072 == null)))?((((map__23072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23072):map__23072);
var opts = map__23072__$1;
var depth = cljs.core.get.call(null,map__23072__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var scale = cljs.core.get.call(null,map__23072__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var offset = cljs.core.get.call(null,map__23072__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var ___$1 = this;
if(((scale === 1.0)) && ((offset == null))){
return thi.ng.geom.core.as_mesh.call(null,(new thi.ng.geom.types.AABB(thi.ng.geom.core.vector.vec3.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1)),cljs.core.conj.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1),depth))),new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return thi.ng.geom.core.extrude.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),opts);
}
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PExtrude$extrude_shell$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.extrude_shell.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),opts);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
var a = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1);
var c = thi.ng.geom.core._PLUS_.call(null,a,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1));
var b = thi.ng.geom.core.vector.vec2.call(null,c.call(null,(0)),a.call(null,(1)));
var d = thi.ng.geom.core.vector.vec2.call(null,a.call(null,(0)),c.call(null,(1)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null)], null);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__23074,p__23075){
var map__23076 = p__23074;
var map__23076__$1 = ((((!((map__23076 == null)))?((((map__23076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23076):map__23076);
var vec__23077 = cljs.core.get.call(null,map__23076__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.call(null,vec__23077,(0),null);
var py = cljs.core.nth.call(null,vec__23077,(1),null);
var vec__23078 = cljs.core.get.call(null,map__23076__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__23078,(0),null);
var h = cljs.core.nth.call(null,vec__23078,(1),null);
var vec__23079 = p__23075;
var x = cljs.core.nth.call(null,vec__23079,(0),null);
var y = cljs.core.nth.call(null,vec__23079,(1),null);
var map__23081 = this;
var map__23081__$1 = ((((!((map__23081 == null)))?((((map__23081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23081):map__23081);
var vec__23082 = cljs.core.get.call(null,map__23081__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px__$1 = cljs.core.nth.call(null,vec__23082,(0),null);
var py__$1 = cljs.core.nth.call(null,vec__23082,(1),null);
var vec__23083 = cljs.core.get.call(null,map__23081__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w__$1 = cljs.core.nth.call(null,vec__23083,(0),null);
var h__$1 = cljs.core.nth.call(null,vec__23083,(1),null);
var and__18263__auto__ = thi.ng.math.core.in_range_QMARK_.call(null,0.0,w__$1,(x - px__$1));
if(cljs.core.truth_(and__18263__auto__)){
return thi.ng.math.core.in_range_QMARK_.call(null,0.0,h__$1,(y - py__$1));
} else {
return and__18263__auto__;
}
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSetOps$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSetOps$union$arity$2 = (function (p__23085,p__23086){
var map__23087 = p__23085;
var map__23087__$1 = ((((!((map__23087 == null)))?((((map__23087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23087):map__23087);
var pa = cljs.core.get.call(null,map__23087__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sa = cljs.core.get.call(null,map__23087__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__23088 = p__23086;
var map__23088__$1 = ((((!((map__23088 == null)))?((((map__23088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23088):map__23088);
var pb = cljs.core.get.call(null,map__23088__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sb = cljs.core.get.call(null,map__23088__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__23091 = this;
var map__23091__$1 = ((((!((map__23091 == null)))?((((map__23091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23091):map__23091);
var pa__$1 = cljs.core.get.call(null,map__23091__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sa__$1 = cljs.core.get.call(null,map__23091__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var p = thi.ng.geom.core.min.call(null,pa__$1,pb);
return (new thi.ng.geom.types.Rect2(p,thi.ng.geom.core._.call(null,thi.ng.geom.core.max.call(null,thi.ng.geom.core._PLUS_.call(null,pa__$1,sa__$1),thi.ng.geom.core._PLUS_.call(null,pb,sb)),p)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSetOps$intersection$arity$2 = (function (_,r){
var ___$1 = this;
var pa = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1);
var qa = thi.ng.geom.core._PLUS_.call(null,pa,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1));
var pb = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(r);
var qb = thi.ng.geom.core._PLUS_.call(null,pb,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(r));
var p_SINGLEQUOTE_ = thi.ng.geom.core.max.call(null,pa,pb);
var q_SINGLEQUOTE_ = thi.ng.geom.core.min.call(null,qa,qb);
var s = thi.ng.geom.core._.call(null,q_SINGLEQUOTE_,p_SINGLEQUOTE_);
if(cljs.core.every_QMARK_.call(null,((function (pa,qa,pb,qb,p_SINGLEQUOTE_,q_SINGLEQUOTE_,s,___$1){
return (function (p1__23041_SHARP_){
return (p1__23041_SHARP_ >= (0));
});})(pa,qa,pb,qb,p_SINGLEQUOTE_,q_SINGLEQUOTE_,s,___$1))
,s)){
return (new thi.ng.geom.types.Rect2(p_SINGLEQUOTE_,s));
} else {
return null;
}
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (_,p__23093){
var map__23094 = p__23093;
var map__23094__$1 = ((((!((map__23094 == null)))?((((map__23094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23094):map__23094);
var vec__23095 = cljs.core.get.call(null,map__23094__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__23095,(0),null);
var q = cljs.core.nth.call(null,vec__23095,(1),null);
var ___$1 = this;
if(cljs.core.truth_((function (){var and__18263__auto__ = thi.ng.geom.core.contains_point_QMARK_.call(null,___$1,p);
if(cljs.core.truth_(and__18263__auto__)){
return thi.ng.geom.core.contains_point_QMARK_.call(null,___$1,q);
} else {
return and__18263__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident","coincident",-473799301)], null);
} else {
return thi.ng.geom.core.intersect.intersect_line2_edges_QMARK_.call(null,p,q,thi.ng.geom.core.edges.call(null,___$1));
}
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 = (function (_,ray){
var ___$1 = this;
var vec__23097 = ((cljs.core.map_QMARK_.call(null,ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(ray),new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(ray)], null):ray);
var p = cljs.core.nth.call(null,vec__23097,(0),null);
var dir = cljs.core.nth.call(null,vec__23097,(1),null);
return thi.ng.geom.core.intersect.intersect_ray2_edges_QMARK_.call(null,p,dir,thi.ng.geom.core.edges.call(null,___$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$3 = (function (_,p,dir){
var ___$1 = this;
return thi.ng.geom.core.intersect.intersect_ray2_edges_QMARK_.call(null,p,dir,thi.ng.geom.core.edges.call(null,___$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.Line2)){
return thi.ng.geom.core.intersect_line.call(null,___$1,s);
} else {
if((s instanceof thi.ng.geom.types.Rect2)){
return thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.call(null,___$1,s);
} else {
if((s instanceof thi.ng.geom.types.Circle2)){
return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.call(null,___$1,s);
} else {
return thi.ng.xerror.core.unsupported_BANG_.call(null,[cljs.core.str("can't intersect w/ "),cljs.core.str(s)].join(''));

}
}
}
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBoundingCircle$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBoundingCircle$bounding_circle$arity$1 = (function (_){
var ___$1 = this;
var c = thi.ng.geom.core.centroid.call(null,___$1);
return thi.ng.geom.types.utils.bounding_circle.call(null,c,thi.ng.geom.core.dist.call(null,c,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core._PLUS_.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),t),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),s),thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1),s)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,a,b){
var ___$1 = this;
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1),a,b),thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1),a,b)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
var s_SINGLEQUOTE_ = thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1),s);
return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.madd.call(null,s_SINGLEQUOTE_,-0.5,thi.ng.geom.core.centroid.call(null,___$1)),s_SINGLEQUOTE_));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTessellate$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
var vec__23098 = thi.ng.geom.core.vertices.call(null,___$1);
var a = cljs.core.nth.call(null,vec__23098,(0),null);
var b = cljs.core.nth.call(null,vec__23098,(1),null);
var c = cljs.core.nth.call(null,vec__23098,(2),null);
var d = cljs.core.nth.call(null,vec__23098,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null))),(new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,d], null)))], null);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$2 = (function (_,p__23099){
var map__23100 = p__23099;
var map__23100__$1 = ((((!((map__23100 == null)))?((((map__23100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23100):map__23100);
var opts = map__23100__$1;
var tess_fn = cljs.core.get.call(null,map__23100__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),thi.ng.geom.core.utils.tessellate_3);
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.mapcat.call(null,((function (___$1,map__23100,map__23100__$1,opts,tess_fn){
return (function (p1__23042_SHARP_){
return tess_fn.call(null,thi.ng.geom.core.vertices.call(null,p1__23042_SHARP_));
});})(___$1,map__23100,map__23100__$1,opts,tess_fn))
),cljs.core.map.call(null,((function (___$1,map__23100,map__23100__$1,opts,tess_fn){
return (function (p1__23043_SHARP_){
return (new thi.ng.geom.types.Triangle2(p1__23043_SHARP_));
});})(___$1,map__23100,map__23100__$1,opts,tess_fn))
)),thi.ng.geom.core.subdivide.call(null,___$1,opts));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (_){
var ___$1 = this;
return (2.0 * cljs.core.reduce.call(null,cljs.core._PLUS_,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1).call(null,(0));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1).call(null,(1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
var a = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1);
var c = thi.ng.geom.core._PLUS_.call(null,a,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,thi.ng.geom.core.vector.vec2.call(null,c.call(null,(0)),a.call(null,(1))),c,thi.ng.geom.core.vector.vec2.call(null,a.call(null,(0)),c.call(null,(1)))], null);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PPointMap$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PPointMap$map_point$arity$2 = (function (p__23102,q){
var map__23103 = p__23102;
var map__23103__$1 = ((((!((map__23103 == null)))?((((map__23103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23103):map__23103);
var p = cljs.core.get.call(null,map__23103__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.call(null,map__23103__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__23105 = this;
var map__23105__$1 = ((((!((map__23105 == null)))?((((map__23105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23105):map__23105);
var p__$1 = cljs.core.get.call(null,map__23105__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.call(null,map__23105__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.core.vector.vec2.call(null,((q.call(null,(0)) - p__$1.call(null,(0))) / size__$1.call(null,(0))),((q.call(null,(1)) - p__$1.call(null,(1))) / size__$1.call(null,(1))));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PPointMap$unmap_point$arity$2 = (function (_,q){
var ___$1 = this;
return thi.ng.geom.core.madd.call(null,q,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PMeshConvert$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.add_face.call(null,(function (){var or__18275__auto__ = new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec3,thi.ng.geom.core.vertices.call(null,___$1)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.dstruct.core.neighbors.call(null,thi.ng.geom.core.vector.vec2.call(null,v),thi.ng.geom.core.vertices.call(null,___$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
if(cljs.core.truth_(cljs.core.set.call(null,thi.ng.geom.core.vertices.call(null,___$1)).call(null,thi.ng.geom.core.vector.vec2.call(null,v)))){
return (2);
} else {
return (0);
}
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first.call(null,thi.ng.geom.core.utils.closest_point_on_segments.call(null,p,thi.ng.geom.core.edges.call(null,___$1)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.reduce.call(null,cljs.core._STAR_,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(___$1));
});

//# sourceMappingURL=rect.js.map