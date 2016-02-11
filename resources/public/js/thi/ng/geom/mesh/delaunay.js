// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.mesh.delaunay');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.triangle');
goog.require('thi.ng.math.core');
thi.ng.geom.mesh.delaunay.add_unique_edge_BANG_ = (function thi$ng$geom$mesh$delaunay$add_unique_edge_BANG_(edges,p,q){
var e = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,q], null);
if(cljs.core.truth_(edges.call(null,e))){
return cljs.core.disj_BANG_.call(null,edges,e);
} else {
var e2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,p], null);
if(cljs.core.truth_(edges.call(null,e2))){
return cljs.core.disj_BANG_.call(null,edges,e2);
} else {
return cljs.core.conj_BANG_.call(null,edges,e);
}
}
});
thi.ng.geom.mesh.delaunay.compute_edges = (function thi$ng$geom$mesh$delaunay$compute_edges(complete,tris,p__29943){
var vec__29946 = p__29943;
var px = cljs.core.nth.call(null,vec__29946,(0),null);
var py = cljs.core.nth.call(null,vec__29946,(1),null);
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (vec__29946,px,py){
return (function (state,t){
if(cljs.core.truth_(complete.call(null,t))){
return state;
} else {
var x = (px - t.call(null,(3)));
var y = (py - t.call(null,(4)));
if((((x * x) + (y * y)) <= t.call(null,(5)))){
return cljs.core.assoc_BANG_.call(null,state,(0),(function (){var vec__29947 = t;
var a = cljs.core.nth.call(null,vec__29947,(0),null);
var b = cljs.core.nth.call(null,vec__29947,(1),null);
var c = cljs.core.nth.call(null,vec__29947,(2),null);
return thi.ng.geom.mesh.delaunay.add_unique_edge_BANG_.call(null,thi.ng.geom.mesh.delaunay.add_unique_edge_BANG_.call(null,thi.ng.geom.mesh.delaunay.add_unique_edge_BANG_.call(null,state.call(null,(0)),a,b),b,c),c,a);
})());
} else {
return cljs.core.assoc_BANG_.call(null,state,(1),cljs.core.conj_BANG_.call(null,state.call(null,(1)),t));
}
}
});})(vec__29946,px,py))
,cljs.core.transient$.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)], null)),tris));
});
thi.ng.geom.mesh.delaunay.triangle_spec = (function thi$ng$geom$mesh$delaunay$triangle_spec(a,b,c){
var vec__29950 = thi.ng.geom.triangle.circumcircle_raw.call(null,a,b,c);
var vec__29951 = cljs.core.nth.call(null,vec__29950,(0),null);
var ox = cljs.core.nth.call(null,vec__29951,(0),null);
var oy = cljs.core.nth.call(null,vec__29951,(1),null);
var r = cljs.core.nth.call(null,vec__29950,(1),null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,ox,oy,(r * r),(ox + r)], null);
});
thi.ng.geom.mesh.delaunay.shared_vertex_QMARK_ = (function thi$ng$geom$mesh$delaunay$shared_vertex_QMARK_(a1,b1,c1,p__29952){
var vec__29954 = p__29952;
var a2 = cljs.core.nth.call(null,vec__29954,(0),null);
var b2 = cljs.core.nth.call(null,vec__29954,(1),null);
var c2 = cljs.core.nth.call(null,vec__29954,(2),null);
return ((a1 === a2)) || ((a1 === b2)) || ((a1 === c2)) || ((b1 === a2)) || ((b1 === b2)) || ((b1 === c2)) || ((c1 === a2)) || ((c1 === b2)) || ((c1 === c2));
});
thi.ng.geom.mesh.delaunay.triangulate = (function thi$ng$geom$mesh$delaunay$triangulate(points){
var points__$1 = cljs.core.sort_by.call(null,(function (p1__29955_SHARP_){
return p1__29955_SHARP_.call(null,(0));
}),points);
var bmin = cljs.core.reduce.call(null,thi.ng.geom.core.min,points__$1);
var bmax = cljs.core.reduce.call(null,thi.ng.geom.core.max,points__$1);
var bext = thi.ng.geom.core._.call(null,bmax,bmin);
var dm = (function (){var x__18606__auto__ = bext.call(null,(0));
var y__18607__auto__ = bext.call(null,(1));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})();
var d2 = (2.0 * dm);
var m = thi.ng.geom.core.mix.call(null,bmin,bmax);
var vec__29964 = thi.ng.geom.mesh.delaunay.triangle_spec.call(null,thi.ng.geom.core._.call(null,m,d2,dm),thi.ng.geom.core._PLUS_.call(null,m,(0),d2),thi.ng.geom.core._PLUS_.call(null,m,d2,(- dm)));
var sa = cljs.core.nth.call(null,vec__29964,(0),null);
var sb = cljs.core.nth.call(null,vec__29964,(1),null);
var sc = cljs.core.nth.call(null,vec__29964,(2),null);
var s = vec__29964;
var points__$2 = points__$1;
var tris = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
var complete = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,points__$2);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__29965 = temp__4655__auto__;
var px = cljs.core.nth.call(null,vec__29965,(0),null);
var p = vec__29965;
var complete__$1 = cljs.core.reduce.call(null,((function (points__$2,tris,complete,vec__29965,px,p,temp__4655__auto__,points__$1,bmin,bmax,bext,dm,d2,m,vec__29964,sa,sb,sc,s){
return (function (p1__29957_SHARP_,p2__29956_SHARP_){
if((p2__29956_SHARP_.call(null,(6)) < px)){
return cljs.core.conj_BANG_.call(null,p1__29957_SHARP_,p2__29956_SHARP_);
} else {
return p1__29957_SHARP_;
}
});})(points__$2,tris,complete,vec__29965,px,p,temp__4655__auto__,points__$1,bmin,bmax,bext,dm,d2,m,vec__29964,sa,sb,sc,s))
,complete,tris);
var vec__29966 = thi.ng.geom.mesh.delaunay.compute_edges.call(null,complete__$1,tris,p);
var edges = cljs.core.nth.call(null,vec__29966,(0),null);
var tris__$1 = cljs.core.nth.call(null,vec__29966,(1),null);
var tris__$2 = cljs.core.reduce.call(null,((function (points__$2,tris,complete,complete__$1,vec__29966,edges,tris__$1,vec__29965,px,p,temp__4655__auto__,points__$1,bmin,bmax,bext,dm,d2,m,vec__29964,sa,sb,sc,s){
return (function (p1__29958_SHARP_,p2__29959_SHARP_){
return cljs.core.conj_BANG_.call(null,p1__29958_SHARP_,thi.ng.geom.mesh.delaunay.triangle_spec.call(null,p2__29959_SHARP_.call(null,(0)),p2__29959_SHARP_.call(null,(1)),p));
});})(points__$2,tris,complete,complete__$1,vec__29966,edges,tris__$1,vec__29965,px,p,temp__4655__auto__,points__$1,bmin,bmax,bext,dm,d2,m,vec__29964,sa,sb,sc,s))
,tris__$1,cljs.core.persistent_BANG_.call(null,edges));
var G__29967 = cljs.core.rest.call(null,points__$2);
var G__29968 = cljs.core.persistent_BANG_.call(null,tris__$2);
var G__29969 = complete__$1;
points__$2 = G__29967;
tris = G__29968;
complete = G__29969;
continue;
} else {
return cljs.core.map.call(null,((function (points__$2,tris,complete,temp__4655__auto__,points__$1,bmin,bmax,bext,dm,d2,m,vec__29964,sa,sb,sc,s){
return (function (t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t.call(null,(1)),t.call(null,(0)),t.call(null,(2))], null);
});})(points__$2,tris,complete,temp__4655__auto__,points__$1,bmin,bmax,bext,dm,d2,m,vec__29964,sa,sb,sc,s))
,cljs.core.remove.call(null,((function (points__$2,tris,complete,temp__4655__auto__,points__$1,bmin,bmax,bext,dm,d2,m,vec__29964,sa,sb,sc,s){
return (function (p1__29960_SHARP_){
return thi.ng.geom.mesh.delaunay.shared_vertex_QMARK_.call(null,sa,sb,sc,p1__29960_SHARP_);
});})(points__$2,tris,complete,temp__4655__auto__,points__$1,bmin,bmax,bext,dm,d2,m,vec__29964,sa,sb,sc,s))
,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,complete,tris))));
}
break;
}
});

//# sourceMappingURL=delaunay.js.map