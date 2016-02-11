// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.utils.shapes');
goog.require('cljs.core');
goog.require('geom.utils.prob');
goog.require('thi.ng.geom.webgl.animator');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.math.core');
goog.require('geom.utils.from_d3');
geom.utils.shapes.regular_polygon = (function geom$utils$shapes$regular_polygon(var_args){
var args__19340__auto__ = [];
var len__19333__auto___28466 = arguments.length;
var i__19334__auto___28467 = (0);
while(true){
if((i__19334__auto___28467 < len__19333__auto___28466)){
args__19340__auto__.push((arguments[i__19334__auto___28467]));

var G__28468 = (i__19334__auto___28467 + (1));
i__19334__auto___28467 = G__28468;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return geom.utils.shapes.regular_polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

geom.utils.shapes.regular_polygon.cljs$core$IFn$_invoke$arity$variadic = (function (p__28461,n,p__28462){
var vec__28463 = p__28461;
var x = cljs.core.nth.call(null,vec__28463,(0),null);
var y = cljs.core.nth.call(null,vec__28463,(1),null);
var vec__28464 = p__28462;
var sizes = cljs.core.nth.call(null,vec__28464,(0),null);
var vec__28465 = ((cljs.core.vector_QMARK_.call(null,sizes))?sizes:((typeof sizes === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sizes,sizes], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)
));
var xmax = cljs.core.nth.call(null,vec__28465,(0),null);
var ymax = cljs.core.nth.call(null,vec__28465,(1),null);
var τ = ((2) * Math.PI);
return cljs.core.mapv.call(null,((function (vec__28465,xmax,ymax,τ,vec__28463,x,y,vec__28464,sizes){
return (function (θ){
return thi.ng.geom.core.vector.vec2.call(null,(x + (xmax * Math.cos(θ))),(y + (ymax * Math.sin(θ))));
});})(vec__28465,xmax,ymax,τ,vec__28463,x,y,vec__28464,sizes))
,cljs.core.range.call(null,1.0E-6,τ,(τ / n)));
});

geom.utils.shapes.regular_polygon.cljs$lang$maxFixedArity = (2);

geom.utils.shapes.regular_polygon.cljs$lang$applyTo = (function (seq28458){
var G__28459 = cljs.core.first.call(null,seq28458);
var seq28458__$1 = cljs.core.next.call(null,seq28458);
var G__28460 = cljs.core.first.call(null,seq28458__$1);
var seq28458__$2 = cljs.core.next.call(null,seq28458__$1);
return geom.utils.shapes.regular_polygon.cljs$core$IFn$_invoke$arity$variadic(G__28459,G__28460,seq28458__$2);
});
geom.utils.shapes.rotate_point = (function geom$utils$shapes$rotate_point(p__28469,p__28470,angle){
var vec__28473 = p__28469;
var ox = cljs.core.nth.call(null,vec__28473,(0),null);
var oy = cljs.core.nth.call(null,vec__28473,(1),null);
var vec__28474 = p__28470;
var tx = cljs.core.nth.call(null,vec__28474,(0),null);
var ty = cljs.core.nth.call(null,vec__28474,(1),null);
var t = vec__28474;
var c = Math.cos(angle);
var s = Math.sin(angle);
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"x","x",2099068185),(((c * (tx - ox)) + (- (s * (ty - oy)))) + ox),new cljs.core.Keyword(null,"y","y",-1757859776),(((s * (tx - ox)) + (c * (ty - oy))) + oy));
});
geom.utils.shapes.rotating_points = (function geom$utils$shapes$rotating_points(o,dθ,points){
var ps = cljs.core.atom.call(null,points);
thi.ng.geom.webgl.animator.animate.call(null,((function (ps){
return (function (_){
cljs.core.reset_BANG_.call(null,ps,cljs.core.mapv.call(null,((function (ps){
return (function (p1__28475_SHARP_){
return geom.utils.shapes.rotate_point.call(null,o,p1__28475_SHARP_,dθ);
});})(ps))
,cljs.core.deref.call(null,ps)));

return true;
});})(ps))
);

return ps;
});
geom.utils.shapes.rotating_flower = (function geom$utils$shapes$rotating_flower(f){
return cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"lrs","lrs",-803883461),cljs.core.map.call(null,(function (p__28479){
var map__28480 = p__28479;
var map__28480__$1 = ((((!((map__28480 == null)))?((((map__28480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28480):map__28480);
var lr = map__28480__$1;
var points = cljs.core.get.call(null,map__28480__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var speed = cljs.core.get.call(null,map__28480__$1,new cljs.core.Keyword(null,"speed","speed",1257663751),thi.ng.math.core.random.call(null,-0.05,0.05));
return cljs.core.assoc.call(null,lr,new cljs.core.Keyword(null,"points","points",-1486596883),geom.utils.shapes.rotating_points.call(null,new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(f),speed,points));
}),new cljs.core.Keyword(null,"lrs","lrs",-803883461).cljs$core$IFn$_invoke$arity$1(f)));
});
geom.utils.shapes.flower = (function geom$utils$shapes$flower(p__28483){
var map__28489 = p__28483;
var map__28489__$1 = ((((!((map__28489 == null)))?((((map__28489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28489):map__28489);
var flower__$1 = map__28489__$1;
var origin = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"origin","origin",1037372088),thi.ng.geom.core.vector.vec2.call(null,(0),(0)));
var lrs = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"lrs","lrs",-803883461));
var rotating_QMARK_ = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"rotating?","rotating?",-1699144969));
var f = cljs.core.assoc.call(null,flower__$1,new cljs.core.Keyword(null,"lrs","lrs",-803883461),cljs.core.mapv.call(null,((function (map__28489,map__28489__$1,flower__$1,origin,lrs,rotating_QMARK_){
return (function (p__28491){
var map__28492 = p__28491;
var map__28492__$1 = ((((!((map__28492 == null)))?((((map__28492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28492):map__28492);
var lr = map__28492__$1;
var idx = cljs.core.get.call(null,map__28492__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var radius = cljs.core.get.call(null,map__28492__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var petals = cljs.core.get.call(null,map__28492__$1,new cljs.core.Keyword(null,"petals","petals",-1788727604));
var r = cljs.core.rand.call(null,Math.PI);
return cljs.core.assoc.call(null,lr,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.mapv.call(null,((function (r,map__28492,map__28492__$1,lr,idx,radius,petals,map__28489,map__28489__$1,flower__$1,origin,lrs,rotating_QMARK_){
return (function (p1__28482_SHARP_){
return geom.utils.shapes.rotate_point.call(null,origin,p1__28482_SHARP_,r);
});})(r,map__28492,map__28492__$1,lr,idx,radius,petals,map__28489,map__28489__$1,flower__$1,origin,lrs,rotating_QMARK_))
,geom.utils.shapes.regular_polygon.call(null,origin,petals,radius)));
});})(map__28489,map__28489__$1,flower__$1,origin,lrs,rotating_QMARK_))
,lrs));
if(cljs.core.truth_(rotating_QMARK_)){
return geom.utils.shapes.rotating_flower.call(null,f);
} else {
return f;
}
});
geom.utils.shapes.flower_lr = (function geom$utils$shapes$flower_lr(var_args){
var args__19340__auto__ = [];
var len__19333__auto___28499 = arguments.length;
var i__19334__auto___28500 = (0);
while(true){
if((i__19334__auto___28500 < len__19333__auto___28499)){
args__19340__auto__.push((arguments[i__19334__auto___28500]));

var G__28501 = (i__19334__auto___28500 + (1));
i__19334__auto___28500 = G__28501;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return geom.utils.shapes.flower_lr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

geom.utils.shapes.flower_lr.cljs$core$IFn$_invoke$arity$variadic = (function (petals,radius,p__28497){
var vec__28498 = p__28497;
var others = cljs.core.nth.call(null,vec__28498,(0),null);
return cljs.core.merge.call(null,(function (){var or__18275__auto__ = others;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"petals","petals",-1788727604),geom.utils.prob.realize.call(null,petals),new cljs.core.Keyword(null,"radius","radius",-2073122258),geom.utils.prob.realize.call(null,radius)], null));
});

geom.utils.shapes.flower_lr.cljs$lang$maxFixedArity = (2);

geom.utils.shapes.flower_lr.cljs$lang$applyTo = (function (seq28494){
var G__28495 = cljs.core.first.call(null,seq28494);
var seq28494__$1 = cljs.core.next.call(null,seq28494);
var G__28496 = cljs.core.first.call(null,seq28494__$1);
var seq28494__$2 = cljs.core.next.call(null,seq28494__$1);
return geom.utils.shapes.flower_lr.cljs$core$IFn$_invoke$arity$variadic(G__28495,G__28496,seq28494__$2);
});
geom.utils.shapes.flower_lrs = (function geom$utils$shapes$flower_lrs(var_args){
var args__19340__auto__ = [];
var len__19333__auto___28503 = arguments.length;
var i__19334__auto___28504 = (0);
while(true){
if((i__19334__auto___28504 < len__19333__auto___28503)){
args__19340__auto__.push((arguments[i__19334__auto___28504]));

var G__28505 = (i__19334__auto___28504 + (1));
i__19334__auto___28504 = G__28505;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((0) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((0)),(0))):null);
return geom.utils.shapes.flower_lrs.cljs$core$IFn$_invoke$arity$variadic(argseq__19341__auto__);
});

geom.utils.shapes.flower_lrs.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.map_indexed.call(null,(function (idx,args){
return cljs.core.assoc.call(null,cljs.core.apply.call(null,geom.utils.shapes.flower_lr,args),new cljs.core.Keyword(null,"idx","idx",1053688473),idx);
}),xs);
});

geom.utils.shapes.flower_lrs.cljs$lang$maxFixedArity = (0);

geom.utils.shapes.flower_lrs.cljs$lang$applyTo = (function (seq28502){
return geom.utils.shapes.flower_lrs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28502));
});
geom.utils.shapes.ensure_derefed = (function geom$utils$shapes$ensure_derefed(x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
geom.utils.shapes.flower__GT_voronoi = (function geom$utils$shapes$flower__GT_voronoi(vor_args,f){
var lrs = cljs.core.map.call(null,(function (lr){
return cljs.core.assoc.call(null,lr,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.map.call(null,(function (p__28510){
var vec__28511 = p__28510;
var x = cljs.core.nth.call(null,vec__28511,(0),null);
var y = cljs.core.nth.call(null,vec__28511,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"lr","lr",445647393),lr], null);
}),geom.utils.shapes.ensure_derefed.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(lr))));
}),new cljs.core.Keyword(null,"lrs","lrs",-803883461).cljs$core$IFn$_invoke$arity$1(f));
return cljs.core.apply.call(null,geom.utils.from_d3.voronoi,vor_args).call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),lrs));
});
geom.utils.shapes.flowers__GT_voronoi = (function geom$utils$shapes$flowers__GT_voronoi(var_args){
var args__19340__auto__ = [];
var len__19333__auto___28517 = arguments.length;
var i__19334__auto___28518 = (0);
while(true){
if((i__19334__auto___28518 < len__19333__auto___28517)){
args__19340__auto__.push((arguments[i__19334__auto___28518]));

var G__28519 = (i__19334__auto___28518 + (1));
i__19334__auto___28518 = G__28519;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((1) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((1)),(0))):null);
return geom.utils.shapes.flowers__GT_voronoi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19341__auto__);
});

geom.utils.shapes.flowers__GT_voronoi.cljs$core$IFn$_invoke$arity$variadic = (function (vor_args,fs){
var vfn = cljs.core.apply.call(null,geom.utils.from_d3.voronoi,vor_args);
return vfn.call(null,cljs.core.mapcat.call(null,((function (vfn){
return (function (lr){
return cljs.core.map.call(null,((function (vfn){
return (function (p__28515){
var vec__28516 = p__28515;
var x = cljs.core.nth.call(null,vec__28516,(0),null);
var y = cljs.core.nth.call(null,vec__28516,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"lr","lr",445647393),lr], null);
});})(vfn))
,geom.utils.shapes.ensure_derefed.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(lr)));
});})(vfn))
,cljs.core.mapcat.call(null,((function (vfn){
return (function (f){
return cljs.core.map.call(null,((function (vfn){
return (function (p1__28512_SHARP_){
return cljs.core.assoc.call(null,p1__28512_SHARP_,new cljs.core.Keyword(null,"flower","flower",583610250),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(f));
});})(vfn))
,new cljs.core.Keyword(null,"lrs","lrs",-803883461).cljs$core$IFn$_invoke$arity$1(f));
});})(vfn))
,fs)));
});

geom.utils.shapes.flowers__GT_voronoi.cljs$lang$maxFixedArity = (1);

geom.utils.shapes.flowers__GT_voronoi.cljs$lang$applyTo = (function (seq28513){
var G__28514 = cljs.core.first.call(null,seq28513);
var seq28513__$1 = cljs.core.next.call(null,seq28513);
return geom.utils.shapes.flowers__GT_voronoi.cljs$core$IFn$_invoke$arity$variadic(G__28514,seq28513__$1);
});

//# sourceMappingURL=shapes.js.map