// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.sketches.voronoi1');
goog.require('cljs.core');
goog.require('thi.ng.geom.polygon');
goog.require('geom.utils.prob');
goog.require('thi.ng.domus.core');
goog.require('thi.ng.color.core');
goog.require('thi.ng.geom.webgl.animator');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.svg.core');
goog.require('thi.ng.math.core');
goog.require('geom.utils.svg');
goog.require('geom.utils.from_d3');
goog.require('geom.utils.colors');
goog.require('thi.ng.color.presets');
goog.require('thi.ng.geom.mesh.delaunay');
geom.sketches.voronoi1.pinks = geom.utils.colors.grad_palette.call(null,thi.ng.color.presets.preset_css.call(null,new cljs.core.Keyword(null,"light-coral","light-coral",-1240818837)),thi.ng.color.core.css.call(null,"#FAFAFA"),(20));
geom.sketches.voronoi1.blues = geom.utils.colors.grad_palette.call(null,thi.ng.color.presets.preset_css.call(null,new cljs.core.Keyword(null,"light-skyblue","light-skyblue",784632468)),thi.ng.color.core.css.call(null,"#FAFAFA"),(20));
geom.sketches.voronoi1.palette = cljs.core.concat.call(null,cljs.core.take.call(null,(3),geom.sketches.voronoi1.pinks),geom.sketches.voronoi1.blues);
geom.sketches.voronoi1.rand_particles = (function geom$sketches$voronoi1$rand_particles(var_args){
var args__19340__auto__ = [];
var len__19333__auto___21270 = arguments.length;
var i__19334__auto___21271 = (0);
while(true){
if((i__19334__auto___21271 < len__19333__auto___21270)){
args__19340__auto__.push((arguments[i__19334__auto___21271]));

var G__21272 = (i__19334__auto___21271 + (1));
i__19334__auto___21271 = G__21272;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return geom.sketches.voronoi1.rand_particles.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

geom.sketches.voronoi1.rand_particles.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__21266,p__21267){
var vec__21268 = p__21266;
var width = cljs.core.nth.call(null,vec__21268,(0),null);
var height = cljs.core.nth.call(null,vec__21268,(1),null);
var vec__21269 = p__21267;
var pal = cljs.core.nth.call(null,vec__21269,(0),null);
return cljs.core.repeatedly.call(null,n,((function (vec__21268,width,height,vec__21269,pal){
return (function (){
return cljs.core.with_meta.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.random.call(null,(0),width),thi.ng.math.core.random.call(null,(0),height)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,cljs.core.rand_nth.call(null,(function (){var or__18275__auto__ = pal;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return geom.sketches.voronoi1.palette;
}
})()))], null));
});})(vec__21268,width,height,vec__21269,pal))
);
});

geom.sketches.voronoi1.rand_particles.cljs$lang$maxFixedArity = (2);

geom.sketches.voronoi1.rand_particles.cljs$lang$applyTo = (function (seq21263){
var G__21264 = cljs.core.first.call(null,seq21263);
var seq21263__$1 = cljs.core.next.call(null,seq21263);
var G__21265 = cljs.core.first.call(null,seq21263__$1);
var seq21263__$2 = cljs.core.next.call(null,seq21263__$1);
return geom.sketches.voronoi1.rand_particles.cljs$core$IFn$_invoke$arity$variadic(G__21264,G__21265,seq21263__$2);
});
geom.sketches.voronoi1.rand_voro = (function geom$sketches$voronoi1$rand_voro(p__21274){
var map__21277 = p__21274;
var map__21277__$1 = ((((!((map__21277 == null)))?((((map__21277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21277):map__21277);
var n = cljs.core.get.call(null,map__21277__$1,new cljs.core.Keyword(null,"n","n",562130025));
var width = cljs.core.get.call(null,map__21277__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__21277__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var vor = geom.utils.from_d3.voronoi.call(null,width,height).call(null,geom.sketches.voronoi1.rand_particles.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null)));
return thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null),cljs.core.map.call(null,((function (vor,map__21277,map__21277__$1,n,width,height){
return (function (p1__21273_SHARP_){
var c = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(p1__21273_SHARP_)));
return thi.ng.geom.svg.core.polygon.call(null,new cljs.core.Keyword(null,"polygon","polygon",837053759).cljs$core$IFn$_invoke$arity$1(p1__21273_SHARP_),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),c,new cljs.core.Keyword(null,"stroke","stroke",1741823555),c], null));
});})(vor,map__21277,map__21277__$1,n,width,height))
,vor)),geom.utils.svg.init_svg_BANG_.call(null,"#app",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null)));
});
geom.sketches.voronoi1.moving_voro = (function geom$sketches$voronoi1$moving_voro(p__21281){
var map__21284 = p__21281;
var map__21284__$1 = ((((!((map__21284 == null)))?((((map__21284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21284):map__21284);
var n = cljs.core.get.call(null,map__21284__$1,new cljs.core.Keyword(null,"n","n",562130025));
var width = cljs.core.get.call(null,map__21284__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__21284__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var seeds = cljs.core.atom.call(null,geom.sketches.voronoi1.rand_particles.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null)));
var vorfn = geom.utils.from_d3.voronoi.call(null,width,height);
var svg = geom.utils.svg.init_svg_BANG_.call(null,"#app",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
return thi.ng.geom.webgl.animator.animate.call(null,((function (seeds,vorfn,svg,map__21284,map__21284__$1,n,width,height){
return (function (_){
cljs.core.swap_BANG_.call(null,seeds,((function (seeds,vorfn,svg,map__21284,map__21284__$1,n,width,height){
return (function (ps){
return cljs.core.mapv.call(null,((function (seeds,vorfn,svg,map__21284,map__21284__$1,n,width,height){
return (function (p1__21279_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p1__21279_SHARP_,thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.random.call(null,(-1),(1)),thi.ng.math.core.random.call(null,(-1),(1))));
});})(seeds,vorfn,svg,map__21284,map__21284__$1,n,width,height))
,ps);
});})(seeds,vorfn,svg,map__21284,map__21284__$1,n,width,height))
);

var vor_21286 = vorfn.call(null,cljs.core.deref.call(null,seeds));
thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null),cljs.core.map.call(null,((function (vor_21286,seeds,vorfn,svg,map__21284,map__21284__$1,n,width,height){
return (function (p1__21280_SHARP_){
var c = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(p1__21280_SHARP_)));
return thi.ng.geom.svg.core.polygon.call(null,new cljs.core.Keyword(null,"polygon","polygon",837053759).cljs$core$IFn$_invoke$arity$1(p1__21280_SHARP_),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),c,new cljs.core.Keyword(null,"stroke","stroke",1741823555),c], null));
});})(vor_21286,seeds,vorfn,svg,map__21284,map__21284__$1,n,width,height))
,vor_21286)),thi.ng.domus.core.clear_BANG_.call(null,svg));

return true;
});})(seeds,vorfn,svg,map__21284,map__21284__$1,n,width,height))
);
});
geom.sketches.voronoi1.moving_voro2 = (function geom$sketches$voronoi1$moving_voro2(p__21289){
var map__21292 = p__21289;
var map__21292__$1 = ((((!((map__21292 == null)))?((((map__21292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21292):map__21292);
var n = cljs.core.get.call(null,map__21292__$1,new cljs.core.Keyword(null,"n","n",562130025));
var width = cljs.core.get.call(null,map__21292__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__21292__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var seeds = cljs.core.atom.call(null,geom.sketches.voronoi1.rand_particles.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null)));
var vorfn = geom.utils.from_d3.voronoi.call(null,width,height);
var svg = geom.utils.svg.init_svg_BANG_.call(null,"#app",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
return thi.ng.geom.webgl.animator.animate.call(null,((function (seeds,vorfn,svg,map__21292,map__21292__$1,n,width,height){
return (function (_){
cljs.core.swap_BANG_.call(null,seeds,((function (seeds,vorfn,svg,map__21292,map__21292__$1,n,width,height){
return (function (ps){
return cljs.core.mapv.call(null,((function (seeds,vorfn,svg,map__21292,map__21292__$1,n,width,height){
return (function (p1__21287_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p1__21287_SHARP_,thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.random.call(null,(-1),(1)),thi.ng.math.core.random.call(null,(-1),(1))));
});})(seeds,vorfn,svg,map__21292,map__21292__$1,n,width,height))
,ps);
});})(seeds,vorfn,svg,map__21292,map__21292__$1,n,width,height))
);

var vor_21294 = vorfn.call(null,cljs.core.deref.call(null,seeds));
thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null),cljs.core.map.call(null,((function (vor_21294,seeds,vorfn,svg,map__21292,map__21292__$1,n,width,height){
return (function (p1__21288_SHARP_){
var c = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(p1__21288_SHARP_)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"d","d",1972142424),geom.utils.from_d3.polygon__GT_line.call(null,new cljs.core.Keyword(null,"polygon","polygon",837053759).cljs$core$IFn$_invoke$arity$1(p1__21288_SHARP_),(3)),new cljs.core.Keyword(null,"fill","fill",883462889),c,new cljs.core.Keyword(null,"stroke","stroke",1741823555),c], null)], null);
});})(vor_21294,seeds,vorfn,svg,map__21292,map__21292__$1,n,width,height))
,vor_21294)),thi.ng.domus.core.clear_BANG_.call(null,svg));

return true;
});})(seeds,vorfn,svg,map__21292,map__21292__$1,n,width,height))
);
});
geom.sketches.voronoi1.vec2_noise_seq = (function geom$sketches$voronoi1$vec2_noise_seq(p__21295,agitation){
var vec__21297 = p__21295;
var xscope = cljs.core.nth.call(null,vec__21297,(0),null);
var yscope = cljs.core.nth.call(null,vec__21297,(1),null);
var n_QMARK_ = typeof agitation === 'number';
var ax = ((n_QMARK_)?agitation:cljs.core.first.call(null,agitation));
var ay = ((n_QMARK_)?agitation:cljs.core.second.call(null,agitation));
var xscope__$1 = ((cljs.core.vector_QMARK_.call(null,xscope))?xscope:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),xscope], null));
var yscope__$1 = ((cljs.core.vector_QMARK_.call(null,yscope))?yscope:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),yscope], null));
return cljs.core.map.call(null,thi.ng.geom.core.vector.vec2,geom.utils.prob.noise_seq.call(null,xscope__$1,ax),geom.utils.prob.noise_seq.call(null,yscope__$1,ay));
});
geom.sketches.voronoi1.moving_voro3 = (function geom$sketches$voronoi1$moving_voro3(p__21301){
var map__21304 = p__21301;
var map__21304__$1 = ((((!((map__21304 == null)))?((((map__21304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21304):map__21304);
var n = cljs.core.get.call(null,map__21304__$1,new cljs.core.Keyword(null,"n","n",562130025));
var width = cljs.core.get.call(null,map__21304__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__21304__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var seeds = cljs.core.atom.call(null,cljs.core.repeatedly.call(null,n,((function (map__21304,map__21304__$1,n,width,height){
return (function (){
var c = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,cljs.core.rand_nth.call(null,cljs.core.take_nth.call(null,(2),geom.sketches.voronoi1.blues)))], null);
return cljs.core.map.call(null,((function (c,map__21304,map__21304__$1,n,width,height){
return (function (p1__21298_SHARP_){
return cljs.core.with_meta.call(null,p1__21298_SHARP_,c);
});})(c,map__21304,map__21304__$1,n,width,height))
,geom.sketches.voronoi1.vec2_noise_seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),0.005));
});})(map__21304,map__21304__$1,n,width,height))
));
var vorfn = geom.utils.from_d3.voronoi.call(null,width,height);
var svg = geom.utils.svg.init_svg_BANG_.call(null,"#app",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
return thi.ng.geom.webgl.animator.animate.call(null,((function (seeds,vorfn,svg,map__21304,map__21304__$1,n,width,height){
return (function (_){
cljs.core.swap_BANG_.call(null,seeds,((function (seeds,vorfn,svg,map__21304,map__21304__$1,n,width,height){
return (function (p1__21299_SHARP_){
return cljs.core.mapv.call(null,cljs.core.next,p1__21299_SHARP_);
});})(seeds,vorfn,svg,map__21304,map__21304__$1,n,width,height))
);

var vor_21306 = vorfn.call(null,cljs.core.mapv.call(null,cljs.core.first,cljs.core.deref.call(null,seeds)));
thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null),cljs.core.map.call(null,((function (vor_21306,seeds,vorfn,svg,map__21304,map__21304__$1,n,width,height){
return (function (p1__21300_SHARP_){
var c = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(p1__21300_SHARP_)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"d","d",1972142424),geom.utils.from_d3.polygon__GT_line.call(null,new cljs.core.Keyword(null,"polygon","polygon",837053759).cljs$core$IFn$_invoke$arity$1(p1__21300_SHARP_),(3)),new cljs.core.Keyword(null,"fill","fill",883462889),c,new cljs.core.Keyword(null,"stroke","stroke",1741823555),c], null)], null);
});})(vor_21306,seeds,vorfn,svg,map__21304,map__21304__$1,n,width,height))
,vor_21306)),thi.ng.domus.core.clear_BANG_.call(null,svg));

return true;
});})(seeds,vorfn,svg,map__21304,map__21304__$1,n,width,height))
);
});
geom.sketches.voronoi1.no_exit1 = (function geom$sketches$voronoi1$no_exit1(w,h){
return (function (v2){
var vec__21308 = cljs.core.juxt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)).call(null,v2);
var x = cljs.core.nth.call(null,vec__21308,(0),null);
var y = cljs.core.nth.call(null,vec__21308,(1),null);
if((x > w)){
return cljs.core.assoc.call(null,v2,new cljs.core.Keyword(null,"x","x",2099068185),(0));
} else {
if(((0) > x)){
return cljs.core.assoc.call(null,v2,new cljs.core.Keyword(null,"x","x",2099068185),w);
} else {
if((y > h)){
return cljs.core.assoc.call(null,v2,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
} else {
if(((0) > y)){
return cljs.core.assoc.call(null,v2,new cljs.core.Keyword(null,"y","y",-1757859776),h);
} else {
return v2;

}
}
}
}
});
});
geom.sketches.voronoi1.no_exit2 = (function geom$sketches$voronoi1$no_exit2(w,h){
return (function (v2){
var vec__21310 = cljs.core.juxt.call(null,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)).call(null,v2);
var x = cljs.core.nth.call(null,vec__21310,(0),null);
var y = cljs.core.nth.call(null,vec__21310,(1),null);
if((x > w)){
return cljs.core.assoc.call(null,v2,new cljs.core.Keyword(null,"x","x",2099068185),w);
} else {
if(((0) > x)){
return cljs.core.assoc.call(null,v2,new cljs.core.Keyword(null,"x","x",2099068185),(0));
} else {
if((y > h)){
return cljs.core.assoc.call(null,v2,new cljs.core.Keyword(null,"y","y",-1757859776),h);
} else {
if(((0) > y)){
return cljs.core.assoc.call(null,v2,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
} else {
return v2;

}
}
}
}
});
});
geom.sketches.voronoi1.blue_scaler = (function geom$sketches$voronoi1$blue_scaler(area){
return thi.ng.color.core.blend.call(null,thi.ng.color.presets.preset_css.call(null,new cljs.core.Keyword(null,"dark-violet","dark-violet",884176590)),cljs.core.nth.call(null,geom.sketches.voronoi1.pinks,(10)),thi.ng.math.core.map_interval_clamped.call(null,thi.ng.math.core.abs.call(null,area),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5000)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
});
geom.sketches.voronoi1.moving_voro4 = (function geom$sketches$voronoi1$moving_voro4(p__21313){
var map__21316 = p__21313;
var map__21316__$1 = ((((!((map__21316 == null)))?((((map__21316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21316):map__21316);
var n = cljs.core.get.call(null,map__21316__$1,new cljs.core.Keyword(null,"n","n",562130025));
var width = cljs.core.get.call(null,map__21316__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__21316__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var seeds = cljs.core.atom.call(null,cljs.core.vec.call(null,geom.sketches.voronoi1.rand_particles.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null))));
var mv_seqs = cljs.core.atom.call(null,cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,((function (seeds,map__21316,map__21316__$1,n,width,height){
return (function (){
return geom.sketches.voronoi1.vec2_noise_seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-5),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-5),(5)], null)], null),0.01);
});})(seeds,map__21316,map__21316__$1,n,width,height))
)));
var vorfn = geom.utils.from_d3.voronoi.call(null,width,height);
var svg = geom.utils.svg.init_svg_BANG_.call(null,"#app",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
var guard = geom.sketches.voronoi1.no_exit2.call(null,width,height);
return thi.ng.geom.webgl.animator.animate.call(null,((function (seeds,mv_seqs,vorfn,svg,guard,map__21316,map__21316__$1,n,width,height){
return (function (_){
cljs.core.swap_BANG_.call(null,mv_seqs,((function (seeds,mv_seqs,vorfn,svg,guard,map__21316,map__21316__$1,n,width,height){
return (function (p1__21311_SHARP_){
return cljs.core.mapv.call(null,cljs.core.next,p1__21311_SHARP_);
});})(seeds,mv_seqs,vorfn,svg,guard,map__21316,map__21316__$1,n,width,height))
);

cljs.core.swap_BANG_.call(null,seeds,((function (seeds,mv_seqs,vorfn,svg,guard,map__21316,map__21316__$1,n,width,height){
return (function (ss){
return cljs.core.mapv.call(null,cljs.core.comp.call(null,guard,thi.ng.geom.core._PLUS_),ss,cljs.core.mapv.call(null,cljs.core.first,cljs.core.deref.call(null,mv_seqs)));
});})(seeds,mv_seqs,vorfn,svg,guard,map__21316,map__21316__$1,n,width,height))
);

var vor_21318 = vorfn.call(null,cljs.core.deref.call(null,seeds));
thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null),cljs.core.keep.call(null,((function (vor_21318,seeds,mv_seqs,vorfn,svg,guard,map__21316,map__21316__$1,n,width,height){
return (function (p1__21312_SHARP_){
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"polygon","polygon",837053759).cljs$core$IFn$_invoke$arity$1(p1__21312_SHARP_))){
var c = cljs.core.deref.call(null,geom.sketches.voronoi1.blue_scaler.call(null,thi.ng.geom.core.area.call(null,thi.ng.geom.polygon.polygon2.call(null,new cljs.core.Keyword(null,"polygon","polygon",837053759).cljs$core$IFn$_invoke$arity$1(p1__21312_SHARP_)))));
return thi.ng.geom.svg.core.polygon.call(null,new cljs.core.Keyword(null,"polygon","polygon",837053759).cljs$core$IFn$_invoke$arity$1(p1__21312_SHARP_),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),c,new cljs.core.Keyword(null,"stroke","stroke",1741823555),cljs.core.deref.call(null,thi.ng.color.presets.preset_css.call(null,new cljs.core.Keyword(null,"dark-violet","dark-violet",884176590)))], null));
} else {
return null;
}
});})(vor_21318,seeds,mv_seqs,vorfn,svg,guard,map__21316,map__21316__$1,n,width,height))
,vor_21318)),thi.ng.domus.core.clear_BANG_.call(null,svg));

return true;
});})(seeds,mv_seqs,vorfn,svg,guard,map__21316,map__21316__$1,n,width,height))
);
});
geom.sketches.voronoi1.moving_voro5 = (function geom$sketches$voronoi1$moving_voro5(p__21321){
var map__21324 = p__21321;
var map__21324__$1 = ((((!((map__21324 == null)))?((((map__21324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21324):map__21324);
var n = cljs.core.get.call(null,map__21324__$1,new cljs.core.Keyword(null,"n","n",562130025));
var width = cljs.core.get.call(null,map__21324__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__21324__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var seeds = cljs.core.atom.call(null,cljs.core.vec.call(null,geom.sketches.voronoi1.rand_particles.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null))));
var mv_seqs = cljs.core.atom.call(null,cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,((function (seeds,map__21324,map__21324__$1,n,width,height){
return (function (){
return geom.sketches.voronoi1.vec2_noise_seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-5),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-5),(5)], null)], null),0.01);
});})(seeds,map__21324,map__21324__$1,n,width,height))
)));
var vorfn = geom.utils.from_d3.voronoi.call(null,width,height);
var svg = geom.utils.svg.init_svg_BANG_.call(null,"#app",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
var guard = geom.sketches.voronoi1.no_exit2.call(null,width,height);
return thi.ng.geom.webgl.animator.animate.call(null,((function (seeds,mv_seqs,vorfn,svg,guard,map__21324,map__21324__$1,n,width,height){
return (function (_){
cljs.core.swap_BANG_.call(null,mv_seqs,((function (seeds,mv_seqs,vorfn,svg,guard,map__21324,map__21324__$1,n,width,height){
return (function (p1__21319_SHARP_){
return cljs.core.mapv.call(null,cljs.core.next,p1__21319_SHARP_);
});})(seeds,mv_seqs,vorfn,svg,guard,map__21324,map__21324__$1,n,width,height))
);

cljs.core.swap_BANG_.call(null,seeds,((function (seeds,mv_seqs,vorfn,svg,guard,map__21324,map__21324__$1,n,width,height){
return (function (ss){
return cljs.core.mapv.call(null,cljs.core.comp.call(null,guard,thi.ng.geom.core._PLUS_),ss,cljs.core.mapv.call(null,cljs.core.first,cljs.core.deref.call(null,mv_seqs)));
});})(seeds,mv_seqs,vorfn,svg,guard,map__21324,map__21324__$1,n,width,height))
);

var vor_21326 = vorfn.call(null,cljs.core.deref.call(null,seeds));
thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null),cljs.core.map.call(null,((function (vor_21326,seeds,mv_seqs,vorfn,svg,guard,map__21324,map__21324__$1,n,width,height){
return (function (p1__21320_SHARP_){
var c = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(p1__21320_SHARP_)));
return thi.ng.geom.svg.core.polygon.call(null,new cljs.core.Keyword(null,"polygon","polygon",837053759).cljs$core$IFn$_invoke$arity$1(p1__21320_SHARP_),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),c,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"white",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px"], null));
});})(vor_21326,seeds,mv_seqs,vorfn,svg,guard,map__21324,map__21324__$1,n,width,height))
,vor_21326)),thi.ng.domus.core.clear_BANG_.call(null,svg));

return true;
});})(seeds,mv_seqs,vorfn,svg,guard,map__21324,map__21324__$1,n,width,height))
);
});
geom.sketches.voronoi1.moving_voro6 = (function geom$sketches$voronoi1$moving_voro6(p__21330){
var map__21333 = p__21330;
var map__21333__$1 = ((((!((map__21333 == null)))?((((map__21333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21333):map__21333);
var n_calm = cljs.core.get.call(null,map__21333__$1,new cljs.core.Keyword(null,"n-calm","n-calm",-525392935));
var n_nervous = cljs.core.get.call(null,map__21333__$1,new cljs.core.Keyword(null,"n-nervous","n-nervous",295951268));
var width = cljs.core.get.call(null,map__21333__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__21333__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"calm-seeds","calm-seeds",1186073808),cljs.core.vec.call(null,geom.sketches.voronoi1.rand_particles.call(null,n_calm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),geom.sketches.voronoi1.blues)),new cljs.core.Keyword(null,"calm-seqs","calm-seqs",-1956764736),cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n_calm,((function (map__21333,map__21333__$1,n_calm,n_nervous,width,height){
return (function (){
return geom.sketches.voronoi1.vec2_noise_seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(2)], null)], null),0.001);
});})(map__21333,map__21333__$1,n_calm,n_nervous,width,height))
)),new cljs.core.Keyword(null,"nervous-seeds","nervous-seeds",-965052501),cljs.core.vec.call(null,geom.sketches.voronoi1.rand_particles.call(null,n_nervous,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),cljs.core.take.call(null,(3),geom.sketches.voronoi1.pinks))),new cljs.core.Keyword(null,"nervous-seqs","nervous-seqs",1436980426),cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n_nervous,((function (map__21333,map__21333__$1,n_calm,n_nervous,width,height){
return (function (){
return geom.sketches.voronoi1.vec2_noise_seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-10),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-10),(10)], null)], null),0.1);
});})(map__21333,map__21333__$1,n_calm,n_nervous,width,height))
))], null));
var vorfn = geom.utils.from_d3.voronoi.call(null,width,height);
var svg = geom.utils.svg.init_svg_BANG_.call(null,"#app",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
var guard = geom.sketches.voronoi1.no_exit2.call(null,width,height);
return thi.ng.geom.webgl.animator.animate.call(null,((function (state,vorfn,svg,guard,map__21333,map__21333__$1,n_calm,n_nervous,width,height){
return (function (_){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nervous-seqs","nervous-seqs",1436980426)], null),((function (state,vorfn,svg,guard,map__21333,map__21333__$1,n_calm,n_nervous,width,height){
return (function (p1__21327_SHARP_){
return cljs.core.mapv.call(null,cljs.core.next,p1__21327_SHARP_);
});})(state,vorfn,svg,guard,map__21333,map__21333__$1,n_calm,n_nervous,width,height))
);

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calm-seqs","calm-seqs",-1956764736)], null),((function (state,vorfn,svg,guard,map__21333,map__21333__$1,n_calm,n_nervous,width,height){
return (function (p1__21328_SHARP_){
return cljs.core.mapv.call(null,cljs.core.next,p1__21328_SHARP_);
});})(state,vorfn,svg,guard,map__21333,map__21333__$1,n_calm,n_nervous,width,height))
);

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calm-seeds","calm-seeds",1186073808)], null),((function (state,vorfn,svg,guard,map__21333,map__21333__$1,n_calm,n_nervous,width,height){
return (function (ss){
return cljs.core.mapv.call(null,cljs.core.comp.call(null,guard,thi.ng.geom.core._PLUS_),ss,cljs.core.mapv.call(null,cljs.core.first,new cljs.core.Keyword(null,"calm-seqs","calm-seqs",-1956764736).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
});})(state,vorfn,svg,guard,map__21333,map__21333__$1,n_calm,n_nervous,width,height))
);

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nervous-seeds","nervous-seeds",-965052501)], null),((function (state,vorfn,svg,guard,map__21333,map__21333__$1,n_calm,n_nervous,width,height){
return (function (ss){
return cljs.core.mapv.call(null,cljs.core.comp.call(null,guard,thi.ng.geom.core._PLUS_),ss,cljs.core.mapv.call(null,cljs.core.first,new cljs.core.Keyword(null,"nervous-seqs","nervous-seqs",1436980426).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
});})(state,vorfn,svg,guard,map__21333,map__21333__$1,n_calm,n_nervous,width,height))
);

var vor_21335 = vorfn.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"calm-seeds","calm-seeds",1186073808).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"nervous-seeds","nervous-seeds",-965052501).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null),cljs.core.map.call(null,((function (vor_21335,state,vorfn,svg,guard,map__21333,map__21333__$1,n_calm,n_nervous,width,height){
return (function (p1__21329_SHARP_){
var c = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(p1__21329_SHARP_)));
return thi.ng.geom.svg.core.polygon.call(null,new cljs.core.Keyword(null,"polygon","polygon",837053759).cljs$core$IFn$_invoke$arity$1(p1__21329_SHARP_),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),c,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"white",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px"], null));
});})(vor_21335,state,vorfn,svg,guard,map__21333,map__21333__$1,n_calm,n_nervous,width,height))
,vor_21335)),thi.ng.domus.core.clear_BANG_.call(null,svg));

return true;
});})(state,vorfn,svg,guard,map__21333,map__21333__$1,n_calm,n_nervous,width,height))
);
});

//# sourceMappingURL=voronoi1.js.map