// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.NOC.intro');
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
geom.NOC.intro.walker = (function geom$NOC$intro$walker(max_x,max_y){
return thi.ng.geom.core.vector.vec2.call(null,(thi.ng.math.core.random.call(null,(0),max_x) | (0)),(thi.ng.math.core.random.call(null,(0),max_y) | (0)));
});
geom.NOC.intro.rand_step = (function geom$NOC$intro$rand_step(w){
return thi.ng.geom.core._PLUS_.call(null,w,(function (){var pred__30290 = cljs.core._EQ_;
var expr__30291 = cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"dwn","dwn",-236330585),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], null));
if(cljs.core.truth_(pred__30290.call(null,new cljs.core.Keyword(null,"up","up",-269712113),expr__30291))){
return thi.ng.geom.core.vector.vec2.call(null,(0),(1));
} else {
if(cljs.core.truth_(pred__30290.call(null,new cljs.core.Keyword(null,"dwn","dwn",-236330585),expr__30291))){
return thi.ng.geom.core.vector.vec2.call(null,(0),(-1));
} else {
if(cljs.core.truth_(pred__30290.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__30291))){
return thi.ng.geom.core.vector.vec2.call(null,(-1),(0));
} else {
if(cljs.core.truth_(pred__30290.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__30291))){
return thi.ng.geom.core.vector.vec2.call(null,(1),(0));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30291)].join('')));
}
}
}
}
})());
});
geom.NOC.intro.rand_walker = (function geom$NOC$intro$rand_walker(){
var width = (500);
var height = (500);
var root = thi.ng.domus.core.by_id.call(null,"app");
var walker = cljs.core.atom.call(null,geom.NOC.intro.walker.call(null,width,height));
var step_picker = geom.NOC.utils.weight_picker.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(3)], true, false));
return thi.ng.geom.webgl.animator.animate.call(null,((function (width,height,root,walker,step_picker){
return (function (p__30296){
var vec__30297 = p__30296;
var t = cljs.core.nth.call(null,vec__30297,(0),null);
var frame = cljs.core.nth.call(null,vec__30297,(1),null);
cljs.core.swap_BANG_.call(null,walker,((function (vec__30297,t,frame,width,height,root,walker,step_picker){
return (function (p1__30293_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p1__30293_SHARP_,step_picker.call(null));
});})(vec__30297,t,frame,width,height,root,walker,step_picker))
);

thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.svg.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),thi.ng.geom.svg.core.group.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null),thi.ng.geom.svg.core.circle.call(null,cljs.core.deref.call(null,walker),(10)))),thi.ng.domus.core.clear_BANG_.call(null,root));

return true;
});})(width,height,root,walker,step_picker))
);
});
geom.NOC.intro.noise_viz1 = (function geom$NOC$intro$noise_viz1(ninc){
var width = (1000);
var height = (500);
var noise_inc = ninc;
var noise_idx = cljs.core.atom.call(null,thi.ng.math.core.random.call(null,(1000),(10000)));
var x = cljs.core.atom.call(null,(0));
geom.NOC.utils.init_svg_BANG_.call(null,"#app",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));

return thi.ng.geom.webgl.animator.animate.call(null,((function (width,height,noise_inc,noise_idx,x){
return (function (p__30300){
var vec__30301 = p__30300;
var t = cljs.core.nth.call(null,vec__30301,(0),null);
var frame = cljs.core.nth.call(null,vec__30301,(1),null);
cljs.core.swap_BANG_.call(null,noise_idx,cljs.core._PLUS_,noise_inc);

cljs.core.swap_BANG_.call(null,x,cljs.core.inc);

thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.circle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,x),((height / (2)) + (thi.ng.math.simplexnoise.noise1.call(null,cljs.core.deref.call(null,noise_idx)) * (height / (2))))], null),(2)),thi.ng.domus.core.query.call(null,null,"svg"));

return (cljs.core.deref.call(null,x) < width);
});})(width,height,noise_inc,noise_idx,x))
);
});
geom.NOC.intro.noise_walker = (function geom$NOC$intro$noise_walker(i1,i2){
var width = (1000);
var height = (500);
var sx = cljs.core.atom.call(null,geom.NOC.utils.noise_seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),width], null),i1));
var sy = cljs.core.atom.call(null,geom.NOC.utils.noise_seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),height], null),i2));
geom.NOC.utils.init_svg_BANG_.call(null,"#app",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));

return thi.ng.geom.webgl.animator.animate.call(null,((function (width,height,sx,sy){
return (function (p__30304){
var vec__30305 = p__30304;
var t = cljs.core.nth.call(null,vec__30305,(0),null);
var frame = cljs.core.nth.call(null,vec__30305,(1),null);
cljs.core.swap_BANG_.call(null,sx,cljs.core.next);

cljs.core.swap_BANG_.call(null,sy,cljs.core.next);

thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.circle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.deref.call(null,sx)),cljs.core.first.call(null,cljs.core.deref.call(null,sy))], null),(25)),thi.ng.domus.core.clear_BANG_.call(null,thi.ng.domus.core.query.call(null,null,"svg")));

return true;
});})(width,height,sx,sy))
);
});

//# sourceMappingURL=intro.js.map