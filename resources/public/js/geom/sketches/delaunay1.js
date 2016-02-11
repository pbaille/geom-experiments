// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.sketches.delaunay1');
goog.require('cljs.core');
goog.require('thi.ng.domus.core');
goog.require('thi.ng.color.core');
goog.require('geom.NOC.utils');
goog.require('thi.ng.geom.webgl.animator');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.math.simplexnoise');
goog.require('thi.ng.geom.svg.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.color.presets');
goog.require('thi.ng.geom.mesh.delaunay');
geom.sketches.delaunay1.grad_palette = (function geom$sketches$delaunay1$grad_palette(c1,c2,n){
return cljs.core.mapv.call(null,(function (x){
return thi.ng.color.core.blend.call(null,c1,c2,x);
}),cljs.core.range.call(null,(0),(1),((1) / n)));
});
geom.sketches.delaunay1.triangulation = (function geom$sketches$delaunay1$triangulation(p__30197){
var map__30200 = p__30197;
var map__30200__$1 = ((((!((map__30200 == null)))?((((map__30200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30200):map__30200);
var n = cljs.core.get.call(null,map__30200__$1,new cljs.core.Keyword(null,"n","n",562130025));
var width = cljs.core.get.call(null,map__30200__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__30200__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var points = cljs.core.repeatedly.call(null,n,((function (map__30200,map__30200__$1,n,width,height){
return (function (){
return thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.random.call(null,(0),width),thi.ng.math.core.random.call(null,(0),height));
});})(map__30200,map__30200__$1,n,width,height))
);
var triangles = thi.ng.geom.mesh.delaunay.triangulate.call(null,points);
var palette = geom.sketches.delaunay1.grad_palette.call(null,thi.ng.color.presets.preset_css.call(null,new cljs.core.Keyword(null,"light-coral","light-coral",-1240818837)),thi.ng.color.core.css.call(null,"#FAFAFA"),(10));
return thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null),cljs.core.map.call(null,((function (points,triangles,palette,map__30200,map__30200__$1,n,width,height){
return (function (p1__30196_SHARP_){
var c = cljs.core.deref.call(null,cljs.core.rand_nth.call(null,palette));
return thi.ng.geom.svg.core.polygon.call(null,p1__30196_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),c,new cljs.core.Keyword(null,"stroke","stroke",1741823555),c], null));
});})(points,triangles,palette,map__30200,map__30200__$1,n,width,height))
,triangles)),geom.NOC.utils.init_svg_BANG_.call(null,"#app",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null)));
});
geom.sketches.delaunay1.moving_triangulation = (function geom$sketches$delaunay1$moving_triangulation(p__30204){
var map__30207 = p__30204;
var map__30207__$1 = ((((!((map__30207 == null)))?((((map__30207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30207):map__30207);
var n = cljs.core.get.call(null,map__30207__$1,new cljs.core.Keyword(null,"n","n",562130025));
var width = cljs.core.get.call(null,map__30207__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__30207__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var points = cljs.core.atom.call(null,cljs.core.repeatedly.call(null,n,((function (map__30207,map__30207__$1,n,width,height){
return (function (){
return thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.random.call(null,(0),width),thi.ng.math.core.random.call(null,(0),height));
});})(map__30207,map__30207__$1,n,width,height))
));
var palette = geom.sketches.delaunay1.grad_palette.call(null,thi.ng.color.presets.preset_css.call(null,new cljs.core.Keyword(null,"light-coral","light-coral",-1240818837)),thi.ng.color.core.css.call(null,"#FAFAFA"),(10));
var svg = geom.NOC.utils.init_svg_BANG_.call(null,"#app",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
return thi.ng.geom.webgl.animator.animate.call(null,((function (points,palette,svg,map__30207,map__30207__$1,n,width,height){
return (function (_){
cljs.core.swap_BANG_.call(null,points,((function (points,palette,svg,map__30207,map__30207__$1,n,width,height){
return (function (ps){
return cljs.core.mapv.call(null,((function (points,palette,svg,map__30207,map__30207__$1,n,width,height){
return (function (p1__30202_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.random.call(null,(-1),(1)),thi.ng.math.core.random.call(null,(-1),(1))),p1__30202_SHARP_);
});})(points,palette,svg,map__30207,map__30207__$1,n,width,height))
,ps);
});})(points,palette,svg,map__30207,map__30207__$1,n,width,height))
);

var triangles_30209 = thi.ng.geom.mesh.delaunay.triangulate.call(null,cljs.core.deref.call(null,points));
thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null),cljs.core.map.call(null,((function (triangles_30209,points,palette,svg,map__30207,map__30207__$1,n,width,height){
return (function (p1__30203_SHARP_){
var c = cljs.core.deref.call(null,cljs.core.rand_nth.call(null,palette));
return thi.ng.geom.svg.core.polygon.call(null,p1__30203_SHARP_);
});})(triangles_30209,points,palette,svg,map__30207,map__30207__$1,n,width,height))
,triangles_30209)),thi.ng.domus.core.clear_BANG_.call(null,svg));

return true;
});})(points,palette,svg,map__30207,map__30207__$1,n,width,height))
);
});

//# sourceMappingURL=delaunay1.js.map