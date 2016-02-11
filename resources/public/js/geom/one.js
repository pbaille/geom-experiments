// Compiled by ClojureScript 1.7.145 {}
goog.provide('geom.one');
goog.require('cljs.core');
goog.require('thi.ng.domus.core');
goog.require('thi.ng.geom.webgl.animator');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.svg.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.circle');
geom.one.walker = (function geom$one$walker(max_x,max_y){
return thi.ng.geom.core.vector.vec2.call(null,(thi.ng.math.core.random.call(null,(0),max_x) | (0)),(thi.ng.math.core.random.call(null,(0),max_y) | (0)));
});
geom.one.rand_step = (function geom$one$rand_step(w){
return thi.ng.geom.core._PLUS_.call(null,w,(function (){var pred__21473 = cljs.core._EQ_;
var expr__21474 = cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"dwn","dwn",-236330585),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], null));
if(cljs.core.truth_(pred__21473.call(null,new cljs.core.Keyword(null,"up","up",-269712113),expr__21474))){
return thi.ng.geom.core.vector.vec2.call(null,(0),(1));
} else {
if(cljs.core.truth_(pred__21473.call(null,new cljs.core.Keyword(null,"dwn","dwn",-236330585),expr__21474))){
return thi.ng.geom.core.vector.vec2.call(null,(0),(-1));
} else {
if(cljs.core.truth_(pred__21473.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__21474))){
return thi.ng.geom.core.vector.vec2.call(null,(-1),(0));
} else {
if(cljs.core.truth_(pred__21473.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__21474))){
return thi.ng.geom.core.vector.vec2.call(null,(1),(0));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21474)].join('')));
}
}
}
}
})());
});
/**
 * takes a map of type object -> prob
 */
geom.one.weight_picker = (function geom$one$weight_picker(m){
var sums = cljs.core.reductions.call(null,cljs.core._PLUS_,(0),cljs.core.vals.call(null,m));
var parts = cljs.core.map.call(null,((function (sums){
return (function (p1__21476_SHARP_,p2__21477_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548)],[p1__21476_SHARP_,cljs.core.first.call(null,p2__21477_SHARP_),cljs.core.second.call(null,p2__21477_SHARP_)]);
});})(sums))
,cljs.core.keys.call(null,m),cljs.core.partition.call(null,(2),(1),sums));
return ((function (sums,parts){
return (function() {
var geom$one$weight_picker_$_f = null;
var geom$one$weight_picker_$_f__0 = (function (){
var x = cljs.core.rand.call(null,cljs.core.last.call(null,sums));
var l = cljs.core.first.call(null,cljs.core.filter.call(null,((function (x,sums,parts){
return (function (p1__21478_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(p1__21478_SHARP_),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(p1__21478_SHARP_)], null),x);
});})(x,sums,parts))
,parts));
return new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(l);
});
var geom$one$weight_picker_$_f__1 = (function (x){
return cljs.core.take.call(null,x,cljs.core.repeatedly.call(null,geom$one$weight_picker_$_f));
});
geom$one$weight_picker_$_f = function(x){
switch(arguments.length){
case 0:
return geom$one$weight_picker_$_f__0.call(this);
case 1:
return geom$one$weight_picker_$_f__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geom$one$weight_picker_$_f.cljs$core$IFn$_invoke$arity$0 = geom$one$weight_picker_$_f__0;
geom$one$weight_picker_$_f.cljs$core$IFn$_invoke$arity$1 = geom$one$weight_picker_$_f__1;
return geom$one$weight_picker_$_f;
})()
;})(sums,parts))
});
geom.one.prob_step = (function geom$one$prob_step(w){
return thi.ng.geom.core._PLUS_.call(null,w,geom.one.weight_picker.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(3)], true, false)));
});
geom.one.launch_walker = (function geom$one$launch_walker(){
var width = (500);
var height = (500);
var root = thi.ng.domus.core.by_id.call(null,"app");
var walker = cljs.core.atom.call(null,geom.one.walker.call(null,width,height));
var step_picker = geom.one.weight_picker.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(3)], true, false));
return thi.ng.geom.webgl.animator.animate.call(null,((function (width,height,root,walker,step_picker){
return (function (p__21482){
var vec__21483 = p__21482;
var t = cljs.core.nth.call(null,vec__21483,(0),null);
var frame = cljs.core.nth.call(null,vec__21483,(1),null);
cljs.core.swap_BANG_.call(null,walker,((function (vec__21483,t,frame,width,height,root,walker,step_picker){
return (function (p1__21479_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p1__21479_SHARP_,step_picker.call(null));
});})(vec__21483,t,frame,width,height,root,walker,step_picker))
);

thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.svg.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),thi.ng.geom.svg.core.group.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null),thi.ng.geom.svg.core.circle.call(null,cljs.core.deref.call(null,walker),(10)))),thi.ng.domus.core.clear_BANG_.call(null,root));

return true;
});})(width,height,root,walker,step_picker))
);
});

//# sourceMappingURL=one.js.map