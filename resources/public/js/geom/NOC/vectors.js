// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.NOC.vectors');
goog.require('cljs.core');
goog.require('thi.ng.domus.core');
goog.require('geom.NOC.utils');
goog.require('thi.ng.geom.webgl.animator');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.math.simplexnoise');
goog.require('thi.ng.geom.svg.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.circle');
cljs.core.enable_console_print_BANG_.call(null);
geom.NOC.vectors.mouse_pos = cljs.core.atom.call(null,thi.ng.geom.core.vector.vec2.call(null));
geom.NOC.vectors.mouse_position_tracker = (function geom$NOC$vectors$mouse_position_tracker(selector){
var ret = cljs.core.atom.call(null,thi.ng.geom.core.vector.vec2.call(null,(0),(0)));
thi.ng.domus.core.query.call(null,null,selector).addEventListener("mousemove",((function (ret){
return (function (e){
return cljs.core.reset_BANG_.call(null,ret,thi.ng.geom.core.vector.vec2.call(null,e.layerX,e.layerY));
});})(ret))
);

return ret;
});
geom.NOC.vectors.bouncing_mover = (function geom$NOC$vectors$bouncing_mover(r){
var width = (1000);
var height = (500);
var m = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.random.call(null,r,(width - r)),thi.ng.math.core.random.call(null,r,(height - r))),new cljs.core.Keyword(null,"vel","vel",-110770822),thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.random.call(null,(-4),(4)),thi.ng.math.core.random.call(null,(-4),(4))),new cljs.core.Keyword(null,"acc","acc",838566312),thi.ng.geom.core.vector.vec2.call(null,(0),(1))], null));
var next = ((function (width,height,m){
return (function (){
var map__30314 = cljs.core.deref.call(null,m);
var map__30314__$1 = ((((!((map__30314 == null)))?((((map__30314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30314):map__30314);
var pos = cljs.core.get.call(null,map__30314__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var acc = cljs.core.get.call(null,map__30314__$1,new cljs.core.Keyword(null,"acc","acc",838566312));
var vec__30315 = pos;
var x = cljs.core.nth.call(null,vec__30315,(0),null);
var y = cljs.core.nth.call(null,vec__30315,(1),null);
if((x > (width - r))){
cljs.core.swap_BANG_.call(null,m,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185)], null),(width - r));
} else {
if((y > (height - r))){
cljs.core.swap_BANG_.call(null,m,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(height - r));
} else {
if((x < r)){
cljs.core.swap_BANG_.call(null,m,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185)], null),r);
} else {
if((y < r)){
cljs.core.swap_BANG_.call(null,m,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"y","y",-1757859776)], null),r);
} else {
}
}
}
}

if(!(((r < cljs.core.get_in.call(null,cljs.core.deref.call(null,m),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185)], null)))) && ((cljs.core.get_in.call(null,cljs.core.deref.call(null,m),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185)], null)) < (width - r))))){
cljs.core.swap_BANG_.call(null,m,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._);
} else {
if(!(((r < cljs.core.get_in.call(null,cljs.core.deref.call(null,m),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"y","y",-1757859776)], null)))) && ((cljs.core.get_in.call(null,cljs.core.deref.call(null,m),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"y","y",-1757859776)], null)) < (height - r))))){
cljs.core.swap_BANG_.call(null,m,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._);
} else {
}
}

cljs.core.swap_BANG_.call(null,m,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vel","vel",-110770822)], null),((function (map__30314,map__30314__$1,pos,acc,vec__30315,x,y,width,height,m){
return (function (p1__30308_SHARP_){
return thi.ng.geom.core.limit.call(null,thi.ng.geom.core._PLUS_.call(null,p1__30308_SHARP_,acc),(10));
});})(map__30314,map__30314__$1,pos,acc,vec__30315,x,y,width,height,m))
);

return cljs.core.swap_BANG_.call(null,m,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),thi.ng.geom.core._PLUS_,new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,m)));
});})(width,height,m))
;
geom.NOC.utils.init_svg_BANG_.call(null,"#app",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));

return thi.ng.geom.webgl.animator.animate.call(null,((function (width,height,m,next){
return (function (p__30317){
var vec__30318 = p__30317;
var t = cljs.core.nth.call(null,vec__30318,(0),null);
var frame = cljs.core.nth.call(null,vec__30318,(1),null);
next.call(null);

thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.circle.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,m)),r),thi.ng.domus.core.clear_BANG_.call(null,thi.ng.domus.core.query.call(null,null,"svg")));

return true;
});})(width,height,m,next))
);
});
geom.NOC.vectors.mouse_tracker = (function geom$NOC$vectors$mouse_tracker(r){
var width = (1000);
var height = (500);
var _ = geom.NOC.utils.init_svg_BANG_.call(null,"#app",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
var mpos = geom.NOC.vectors.mouse_position_tracker.call(null,"svg");
var m = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.random.call(null,r,(width - r)),thi.ng.math.core.random.call(null,r,(height - r))),new cljs.core.Keyword(null,"vel","vel",-110770822),thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.random.call(null,(-4),(4)),thi.ng.math.core.random.call(null,(-4),(4))),new cljs.core.Keyword(null,"acc","acc",838566312),thi.ng.geom.core.vector.vec2.call(null,(0),0.2)], null));
var next = ((function (width,height,_,mpos,m){
return (function (){
cljs.core.swap_BANG_.call(null,m,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acc","acc",838566312)], null),((function (width,height,_,mpos,m){
return (function (p1__30319_SHARP_){
return thi.ng.geom.core.limit.call(null,thi.ng.geom.core._PLUS_.call(null,p1__30319_SHARP_,thi.ng.geom.core.limit.call(null,thi.ng.geom.core._.call(null,cljs.core.deref.call(null,mpos),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,m))),0.3)),(4));
});})(width,height,_,mpos,m))
);

cljs.core.swap_BANG_.call(null,m,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vel","vel",-110770822)], null),((function (width,height,_,mpos,m){
return (function (p1__30320_SHARP_){
return thi.ng.geom.core.limit.call(null,thi.ng.geom.core._PLUS_.call(null,p1__30320_SHARP_,new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,m))),(4));
});})(width,height,_,mpos,m))
);

return cljs.core.swap_BANG_.call(null,m,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),thi.ng.geom.core._PLUS_,new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,m)));
});})(width,height,_,mpos,m))
;
return thi.ng.geom.webgl.animator.animate.call(null,((function (width,height,_,mpos,m,next){
return (function (p__30323){
var vec__30324 = p__30323;
var t = cljs.core.nth.call(null,vec__30324,(0),null);
var frame = cljs.core.nth.call(null,vec__30324,(1),null);
next.call(null);

thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.circle.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,m)),r),thi.ng.domus.core.clear_BANG_.call(null,thi.ng.domus.core.query.call(null,null,"svg")));

return true;
});})(width,height,_,mpos,m,next))
);
});
geom.NOC.vectors.mouse_trackers = (function geom$NOC$vectors$mouse_trackers(n,r){
var width = (1000);
var height = (500);
var _ = geom.NOC.utils.init_svg_BANG_.call(null,"#app",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
var mpos = geom.NOC.vectors.mouse_position_tracker.call(null,"svg");
var ms = cljs.core.repeatedly.call(null,n,((function (width,height,_,mpos){
return (function (){
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.random.call(null,r,(width - r)),thi.ng.math.core.random.call(null,r,(height - r))),new cljs.core.Keyword(null,"vel","vel",-110770822),thi.ng.geom.core.vector.vec2.call(null,(0),(0)),new cljs.core.Keyword(null,"acc","acc",838566312),thi.ng.geom.core.vector.vec2.call(null,(0),(0))], null));
});})(width,height,_,mpos))
);
var next = ((function (width,height,_,mpos,ms){
return (function (m){
var dir = thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,cljs.core.deref.call(null,mpos),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,m)))),0.1);
cljs.core.swap_BANG_.call(null,m,cljs.core.assoc,new cljs.core.Keyword(null,"acc","acc",838566312),dir);

cljs.core.swap_BANG_.call(null,m,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vel","vel",-110770822)], null),((function (dir,width,height,_,mpos,ms){
return (function (p1__30325_SHARP_){
return thi.ng.geom.core.limit.call(null,thi.ng.geom.core._PLUS_.call(null,p1__30325_SHARP_,new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,m))),(4));
});})(dir,width,height,_,mpos,ms))
);

return cljs.core.swap_BANG_.call(null,m,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),thi.ng.geom.core._PLUS_,new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,m)));
});})(width,height,_,mpos,ms))
;
return thi.ng.geom.webgl.animator.animate.call(null,((function (width,height,_,mpos,ms,next){
return (function (p__30329){
var vec__30330 = p__30329;
var t = cljs.core.nth.call(null,vec__30330,(0),null);
var frame = cljs.core.nth.call(null,vec__30330,(1),null);
cljs.core.mapv.call(null,next,ms);

thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.group.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(0,0,0,0.2)"], null),cljs.core.map.call(null,((function (vec__30330,t,frame,width,height,_,mpos,ms,next){
return (function (p1__30326_SHARP_){
return thi.ng.geom.svg.core.circle.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__30326_SHARP_)),r);
});})(vec__30330,t,frame,width,height,_,mpos,ms,next))
,ms)),thi.ng.domus.core.clear_BANG_.call(null,thi.ng.domus.core.query.call(null,null,"svg")));

return true;
});})(width,height,_,mpos,ms,next))
);
});

//# sourceMappingURL=vectors.js.map