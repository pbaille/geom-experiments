// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.spatialtree');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.aabb');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.rect');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.types');

/**
 * @interface
 */
thi.ng.geom.spatialtree.PTreeOps = function(){};

thi.ng.geom.spatialtree.child_index_for_point = (function thi$ng$geom$spatialtree$child_index_for_point(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$spatialtree$PTreeOps$child_index_for_point$arity$2 == null)))){
return _.thi$ng$geom$spatialtree$PTreeOps$child_index_for_point$arity$2(_,p);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.spatialtree.child_index_for_point[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,p);
} else {
var m__18931__auto____$1 = (thi.ng.geom.spatialtree.child_index_for_point["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,p);
} else {
throw cljs.core.missing_protocol.call(null,"PTreeOps.child-index-for-point",_);
}
}
}
});

thi.ng.geom.spatialtree.child_for_point = (function thi$ng$geom$spatialtree$child_for_point(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$spatialtree$PTreeOps$child_for_point$arity$2 == null)))){
return _.thi$ng$geom$spatialtree$PTreeOps$child_for_point$arity$2(_,p);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.spatialtree.child_for_point[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,p);
} else {
var m__18931__auto____$1 = (thi.ng.geom.spatialtree.child_for_point["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,p);
} else {
throw cljs.core.missing_protocol.call(null,"PTreeOps.child-for-point",_);
}
}
}
});

thi.ng.geom.spatialtree.get_children = (function thi$ng$geom$spatialtree$get_children(_){
if((!((_ == null))) && (!((_.thi$ng$geom$spatialtree$PTreeOps$get_children$arity$1 == null)))){
return _.thi$ng$geom$spatialtree$PTreeOps$get_children$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.spatialtree.get_children[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.geom.spatialtree.get_children["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PTreeOps.get-children",_);
}
}
}
});

thi.ng.geom.spatialtree.set_child = (function thi$ng$geom$spatialtree$set_child(_,i,c){
if((!((_ == null))) && (!((_.thi$ng$geom$spatialtree$PTreeOps$set_child$arity$3 == null)))){
return _.thi$ng$geom$spatialtree$PTreeOps$set_child$arity$3(_,i,c);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.spatialtree.set_child[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,i,c);
} else {
var m__18931__auto____$1 = (thi.ng.geom.spatialtree.set_child["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,i,c);
} else {
throw cljs.core.missing_protocol.call(null,"PTreeOps.set-child",_);
}
}
}
});

thi.ng.geom.spatialtree.set_children = (function thi$ng$geom$spatialtree$set_children(_,c){
if((!((_ == null))) && (!((_.thi$ng$geom$spatialtree$PTreeOps$set_children$arity$2 == null)))){
return _.thi$ng$geom$spatialtree$PTreeOps$set_children$arity$2(_,c);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.spatialtree.set_children[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,c);
} else {
var m__18931__auto____$1 = (thi.ng.geom.spatialtree.set_children["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,c);
} else {
throw cljs.core.missing_protocol.call(null,"PTreeOps.set-children",_);
}
}
}
});

thi.ng.geom.spatialtree.set_point = (function thi$ng$geom$spatialtree$set_point(_,p,d){
if((!((_ == null))) && (!((_.thi$ng$geom$spatialtree$PTreeOps$set_point$arity$3 == null)))){
return _.thi$ng$geom$spatialtree$PTreeOps$set_point$arity$3(_,p,d);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.spatialtree.set_point[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,p,d);
} else {
var m__18931__auto____$1 = (thi.ng.geom.spatialtree.set_point["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,p,d);
} else {
throw cljs.core.missing_protocol.call(null,"PTreeOps.set-point",_);
}
}
}
});

thi.ng.geom.spatialtree.make_child_for_point = (function thi$ng$geom$spatialtree$make_child_for_point(_,p,d,add_point_QMARK_){
if((!((_ == null))) && (!((_.thi$ng$geom$spatialtree$PTreeOps$make_child_for_point$arity$4 == null)))){
return _.thi$ng$geom$spatialtree$PTreeOps$make_child_for_point$arity$4(_,p,d,add_point_QMARK_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.spatialtree.make_child_for_point[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,p,d,add_point_QMARK_);
} else {
var m__18931__auto____$1 = (thi.ng.geom.spatialtree.make_child_for_point["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,p,d,add_point_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"PTreeOps.make-child-for-point",_);
}
}
}
});

thi.ng.geom.spatialtree.split_node = (function thi$ng$geom$spatialtree$split_node(_){
if((!((_ == null))) && (!((_.thi$ng$geom$spatialtree$PTreeOps$split_node$arity$1 == null)))){
return _.thi$ng$geom$spatialtree$PTreeOps$split_node$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.spatialtree.split_node[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.geom.spatialtree.split_node["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PTreeOps.split-node",_);
}
}
}
});

/**
 * Returns depth-first seq of nodes for given point.
 */
thi.ng.geom.spatialtree.path_for_point = (function thi$ng$geom$spatialtree$path_for_point(root,p){
var node = root;
var path = cljs.core._conj.call(null,cljs.core.List.EMPTY,root);
while(true){
var c = thi.ng.geom.spatialtree.child_for_point.call(null,node,p);
if(cljs.core.truth_(c)){
var G__30142 = c;
var G__30143 = cljs.core.conj.call(null,path,c);
node = G__30142;
path = G__30143;
continue;
} else {
return path;
}
break;
}
});
/**
 * Associates point with data in tree, recursively creates all required intermediate nodes.
 */
thi.ng.geom.spatialtree.add_point_STAR_ = (function thi$ng$geom$spatialtree$add_point_STAR_(root,p,d){
var node = root;
var p__$1 = p;
var d__$1 = d;
while(true){
if(cljs.core.truth_(thi.ng.geom.spatialtree.get_children.call(null,node))){
var G__30144 = thi.ng.geom.spatialtree.make_child_for_point.call(null,node,p__$1,d__$1,false);
var G__30145 = p__$1;
var G__30146 = d__$1;
node = G__30144;
p__$1 = G__30145;
d__$1 = G__30146;
continue;
} else {
var point = thi.ng.geom.core.get_point.call(null,node);
if(cljs.core.truth_(point)){
if(cljs.core.not.call(null,thi.ng.math.core.delta_EQ_.call(null,point,p__$1,thi.ng.math.core._STAR_eps_STAR_))){
var data = thi.ng.geom.core.get_point_data.call(null,node);
thi.ng.geom.spatialtree.split_node.call(null,node);

thi.ng.geom.spatialtree.make_child_for_point.call(null,node,p__$1,d__$1,true);

var G__30147 = node;
var G__30148 = point;
var G__30149 = data;
node = G__30147;
p__$1 = G__30148;
d__$1 = G__30149;
continue;
} else {
return null;
}
} else {
return thi.ng.geom.spatialtree.set_point.call(null,node,p__$1,d__$1);
}
}
break;
}
});
/**
 * Removes point from tree (if found) and prunes any resulting empty nodes.
 *   Returns given node (root).
 */
thi.ng.geom.spatialtree.delete_point_STAR_ = (function thi$ng$geom$spatialtree$delete_point_STAR_(root,p){
var vec__30152 = thi.ng.geom.spatialtree.path_for_point.call(null,root,p);
var node = cljs.core.nth.call(null,vec__30152,(0),null);
var path = cljs.core.nthnext.call(null,vec__30152,(1));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,p,thi.ng.geom.core.get_point.call(null,node),thi.ng.math.core._STAR_eps_STAR_))){
thi.ng.geom.spatialtree.set_point.call(null,node,null,null);

var path_30154__$1 = path;
while(true){
if(cljs.core.truth_(path_30154__$1)){
var vec__30153_30155 = path_30154__$1;
var node_30156__$1 = cljs.core.nth.call(null,vec__30153_30155,(0),null);
var parents_30157 = cljs.core.nthnext.call(null,vec__30153_30155,(1));
thi.ng.geom.spatialtree.set_child.call(null,node_30156__$1,thi.ng.geom.spatialtree.child_index_for_point.call(null,node_30156__$1,p),null);

if(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,thi.ng.geom.spatialtree.get_children.call(null,node_30156__$1))){
thi.ng.geom.spatialtree.set_children.call(null,node_30156__$1,null);

var G__30158 = parents_30157;
path_30154__$1 = G__30158;
continue;
} else {
}
} else {
}
break;
}
} else {
}

return root;
});
thi.ng.geom.spatialtree.check_with = (function thi$ng$geom$spatialtree$check_with(q,isec_QMARK_,inside_QMARK_){
if(cljs.core.truth_(isec_QMARK_.call(null,thi.ng.geom.core.bounds.call(null,q)))){
var children = thi.ng.geom.spatialtree.get_children.call(null,q);
if(cljs.core.truth_(children)){
var ch = children;
while(true){
if(cljs.core.truth_(ch)){
var temp__4655__auto__ = cljs.core.first.call(null,ch);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
if(cljs.core.truth_(thi$ng$geom$spatialtree$check_with.call(null,c,isec_QMARK_,inside_QMARK_))){
return true;
} else {
var G__30159 = cljs.core.next.call(null,ch);
ch = G__30159;
continue;
}
} else {
var G__30160 = cljs.core.next.call(null,ch);
ch = G__30160;
continue;
}
} else {
return null;
}
break;
}
} else {
var p = thi.ng.geom.core.get_point.call(null,q);
var and__18263__auto__ = p;
if(cljs.core.truth_(and__18263__auto__)){
return inside_QMARK_.call(null,p);
} else {
return and__18263__auto__;
}
}
} else {
return null;
}
});
/**
 * Produces a vector of points in the tree within a given region.
 *   Uses two predicate fns to logically define the query region:
 * 
 *   `isec?`  : single-arg fn to check if the bounds of a tree node
 *   intersect the query region
 *   `inside?`: single-arg fn to check if a point lies within the region.
 */
thi.ng.geom.spatialtree.select_with = (function thi$ng$geom$spatialtree$select_with(var_args){
var args30161 = [];
var len__19333__auto___30164 = arguments.length;
var i__19334__auto___30165 = (0);
while(true){
if((i__19334__auto___30165 < len__19333__auto___30164)){
args30161.push((arguments[i__19334__auto___30165]));

var G__30166 = (i__19334__auto___30165 + (1));
i__19334__auto___30165 = G__30166;
continue;
} else {
}
break;
}

var G__30163 = args30161.length;
switch (G__30163) {
case 3:
return thi.ng.geom.spatialtree.select_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.spatialtree.select_with.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30161.length)].join('')));

}
});

thi.ng.geom.spatialtree.select_with.cljs$core$IFn$_invoke$arity$3 = (function (q,isec_QMARK_,inside_QMARK_){
return thi.ng.geom.spatialtree.select_with.call(null,q,isec_QMARK_,inside_QMARK_,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY));
});

thi.ng.geom.spatialtree.select_with.cljs$core$IFn$_invoke$arity$4 = (function (q,isec_QMARK_,inside_QMARK_,acc){
if(cljs.core.truth_(isec_QMARK_.call(null,thi.ng.geom.core.bounds.call(null,q)))){
var children = thi.ng.geom.spatialtree.get_children.call(null,q);
if(cljs.core.truth_(children)){
return cljs.core.reduce.call(null,((function (children){
return (function (acc__$1,c){
if(cljs.core.truth_(c)){
return thi.ng.geom.spatialtree.select_with.call(null,c,isec_QMARK_,inside_QMARK_,acc__$1);
} else {
return acc__$1;
}
});})(children))
,acc,children);
} else {
var p = thi.ng.geom.core.get_point.call(null,q);
if(cljs.core.truth_((function (){var and__18263__auto__ = p;
if(cljs.core.truth_(and__18263__auto__)){
return inside_QMARK_.call(null,p);
} else {
return and__18263__auto__;
}
})())){
return cljs.core.conj_BANG_.call(null,acc,thi.ng.geom.core.get_point_data.call(null,q));
} else {
return acc;
}
}
} else {
return acc;
}
});

thi.ng.geom.spatialtree.select_with.cljs$lang$maxFixedArity = 4;
thi.ng.geom.spatialtree.select_with_shape = (function thi$ng$geom$spatialtree$select_with_shape(q,s){
return cljs.core.persistent_BANG_.call(null,thi.ng.geom.spatialtree.select_with.call(null,q,(function (p1__30168_SHARP_){
return thi.ng.geom.core.intersect_shape.call(null,s,p1__30168_SHARP_);
}),(function (p1__30169_SHARP_){
return thi.ng.geom.core.contains_point_QMARK_.call(null,s,p1__30169_SHARP_);
})));
});
thi.ng.geom.spatialtree.do_with_radius = (function thi$ng$geom$spatialtree$do_with_radius(f,f2,q,c,r){
var rsq = (r * r);
return f.call(null,q,((function (rsq){
return (function (p1__30170_SHARP_){
return f2.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(p1__30170_SHARP_),thi.ng.geom.core._PLUS_.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(p1__30170_SHARP_),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p1__30170_SHARP_)),c,r);
});})(rsq))
,((function (rsq){
return (function (p1__30171_SHARP_){
return (thi.ng.geom.core.dist_squared.call(null,c,p1__30171_SHARP_) < rsq);
});})(rsq))
);
});
thi.ng.geom.spatialtree.points_in_circle_QMARK_ = (function thi$ng$geom$spatialtree$points_in_circle_QMARK_(q,c,r){
return thi.ng.geom.spatialtree.do_with_radius.call(null,thi.ng.geom.spatialtree.check_with,thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_,q,c,r);
});
thi.ng.geom.spatialtree.points_in_sphere_QMARK_ = (function thi$ng$geom$spatialtree$points_in_sphere_QMARK_(q,c,r){
return thi.ng.geom.spatialtree.do_with_radius.call(null,thi.ng.geom.spatialtree.check_with,thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_,q,c,r);
});
thi.ng.geom.spatialtree.select_with_circle = (function thi$ng$geom$spatialtree$select_with_circle(q,c,r){
return cljs.core.persistent_BANG_.call(null,thi.ng.geom.spatialtree.do_with_radius.call(null,thi.ng.geom.spatialtree.select_with,thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_,q,c,r));
});
thi.ng.geom.spatialtree.select_with_sphere = (function thi$ng$geom$spatialtree$select_with_sphere(q,c,r){
return cljs.core.persistent_BANG_.call(null,thi.ng.geom.spatialtree.do_with_radius.call(null,thi.ng.geom.spatialtree.select_with,thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_,q,c,r));
});
thi.ng.geom.spatialtree.lazy_select_with_STAR_ = (function thi$ng$geom$spatialtree$lazy_select_with_STAR_(isec_QMARK_,inside_QMARK_,queue){
return (new cljs.core.LazySeq(null,(function (){
var vec__30173 = queue;
var q = cljs.core.nth.call(null,vec__30173,(0),null);
var r = cljs.core.nthnext.call(null,vec__30173,(1));
if(cljs.core.truth_((function (){var and__18263__auto__ = q;
if(cljs.core.truth_(and__18263__auto__)){
return isec_QMARK_.call(null,thi.ng.geom.core.bounds.call(null,q));
} else {
return and__18263__auto__;
}
})())){
var cs = cljs.core.filter.call(null,cljs.core.identity,thi.ng.geom.spatialtree.get_children.call(null,q));
var p = thi.ng.geom.core.get_point.call(null,q);
if(cljs.core.seq.call(null,cs)){
return thi$ng$geom$spatialtree$lazy_select_with_STAR_.call(null,isec_QMARK_,inside_QMARK_,cljs.core.concat.call(null,cs,r));
} else {
if(cljs.core.truth_((function (){var and__18263__auto__ = p;
if(cljs.core.truth_(and__18263__auto__)){
return inside_QMARK_.call(null,p);
} else {
return and__18263__auto__;
}
})())){
return cljs.core.cons.call(null,thi.ng.geom.core.get_point_data.call(null,q),thi$ng$geom$spatialtree$lazy_select_with_STAR_.call(null,isec_QMARK_,inside_QMARK_,r));
} else {
if(cljs.core.seq.call(null,r)){
return thi$ng$geom$spatialtree$lazy_select_with_STAR_.call(null,isec_QMARK_,inside_QMARK_,r);
} else {
return null;
}
}
}
} else {
if(cljs.core.seq.call(null,r)){
return thi$ng$geom$spatialtree$lazy_select_with_STAR_.call(null,isec_QMARK_,inside_QMARK_,r);
} else {
return null;
}
}
}),null,null));
});
/**
 * Same as `select-with`, only produces a lazy sequence of points.
 */
thi.ng.geom.spatialtree.lazy_select_with = (function thi$ng$geom$spatialtree$lazy_select_with(q,isec_QMARK_,inside_QMARK_){
return thi.ng.geom.spatialtree.lazy_select_with_STAR_.call(null,isec_QMARK_,inside_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [q], null));
});
thi.ng.geom.spatialtree.lazy_select_with_shape = (function thi$ng$geom$spatialtree$lazy_select_with_shape(q,s){
return thi.ng.geom.spatialtree.lazy_select_with_STAR_.call(null,(function (p1__30174_SHARP_){
return thi.ng.geom.core.intersect_shape.call(null,s,p1__30174_SHARP_);
}),(function (p1__30175_SHARP_){
return thi.ng.geom.core.contains_point_QMARK_.call(null,s,p1__30175_SHARP_);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [q], null));
});

/**
* @constructor
 * @implements {thi.ng.geom.core.PSpatialTree}
 * @implements {thi.ng.geom.core.PBounds}
 * @implements {thi.ng.geom.core.PClear}
 * @implements {thi.ng.geom.spatialtree.Object}
 * @implements {thi.ng.geom.spatialtree.PTreeOps}
*/
thi.ng.geom.spatialtree.MutableQuadtreeNode = (function (x,y,w,h,children,point,data,bounds){
this.x = x;
this.y = y;
this.w = w;
this.h = h;
this.children = children;
this.point = point;
this.data = data;
this.bounds = bounds;
})
thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.thi$ng$geom$core$PSpatialTree$ = true;

thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.thi$ng$geom$core$PSpatialTree$add_point$arity$3 = (function (_,p,d){
var self__ = this;
var ___$1 = this;
thi.ng.geom.spatialtree.add_point_STAR_.call(null,___$1,p,d);

return ___$1;
});

thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.thi$ng$geom$core$PSpatialTree$delete_point$arity$2 = (function (_,p){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.spatialtree.delete_point_STAR_.call(null,___$1,p);
});

thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.thi$ng$geom$core$PSpatialTree$get_point$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.point;
});

thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.thi$ng$geom$core$PSpatialTree$get_point_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.data;
});

thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.thi$ng$geom$core$PClear$ = true;

thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.spatialtree.MutableQuadtreeNode(self__.x,self__.y,self__.w,self__.h,null,null,null,self__.bounds));
});

thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.thi$ng$geom$core$PClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.children = null;

self__.children = self__.point;

self__.children = self__.data;

return ___$1;
});

thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.thi$ng$geom$spatialtree$PTreeOps$ = true;

thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.thi$ng$geom$spatialtree$PTreeOps$child_index_for_point$arity$2 = (function (_,p__30176){
var self__ = this;
var vec__30177 = p__30176;
var px = cljs.core.nth.call(null,vec__30177,(0),null);
var py = cljs.core.nth.call(null,vec__30177,(1),null);
var ___$1 = this;
if((px < (self__.x + self__.w))){
if((py < (self__.y + self__.h))){
return (0);
} else {
return (2);
}
} else {
if((py < (self__.y + self__.h))){
return (1);
} else {
return (3);
}
}
});

thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.thi$ng$geom$spatialtree$PTreeOps$child_for_point$arity$2 = (function (_,p){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.children)){
return self__.children.call(null,thi.ng.geom.spatialtree.child_index_for_point.call(null,___$1,p));
} else {
return null;
}
});

thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.thi$ng$geom$spatialtree$PTreeOps$make_child_for_point$arity$4 = (function (_,p,d,add_QMARK_){
var self__ = this;
var ___$1 = this;
var idx = thi.ng.geom.spatialtree.child_index_for_point.call(null,___$1,p);
var or__18275__auto__ = self__.children.call(null,idx);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
var cx = ((((idx & (1)) > (0)))?(self__.x + self__.w):self__.x);
var cy = ((((idx & (2)) > (0)))?(self__.y + self__.h):self__.y);
var c = (new thi.ng.geom.spatialtree.MutableQuadtreeNode(cx,cy,(0.5 * self__.w),(0.5 * self__.h),null,(cljs.core.truth_(add_QMARK_)?p:null),(cljs.core.truth_(add_QMARK_)?d:null),null));
thi.ng.geom.spatialtree.set_child.call(null,___$1,idx,c);

return c;
}
});

thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.thi$ng$geom$spatialtree$PTreeOps$split_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.children = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null], null);

self__.point = null;

self__.data = null;

return ___$1;
});

thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.thi$ng$geom$spatialtree$PTreeOps$get_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
});

thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.thi$ng$geom$spatialtree$PTreeOps$set_child$arity$3 = (function (_,i,c){
var self__ = this;
var ___$1 = this;
self__.children = cljs.core.assoc.call(null,self__.children,i,c);

return ___$1;
});

thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.thi$ng$geom$spatialtree$PTreeOps$set_children$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
self__.children = c;

return ___$1;
});

thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.thi$ng$geom$spatialtree$PTreeOps$set_point$arity$3 = (function (_,p,d){
var self__ = this;
var ___$1 = this;
self__.point = p;

self__.data = d;

return ___$1;
});

thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.bounds)){
return self__.bounds;
} else {
return self__.bounds = (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.call(null,self__.x,self__.y),thi.ng.geom.core.vector.vec2.call(null,(self__.w * 2.0),(self__.h * 2.0))));
}
});

thi.ng.geom.spatialtree.MutableQuadtreeNode.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("#thi.ng.geom.spatialtree.MutableQuadtreeNode"),cljs.core.str("{:bounds "),cljs.core.str(cljs.core.pr_str.call(null,thi.ng.geom.core.bounds.call(null,_))),cljs.core.str(" :children "),cljs.core.str(cljs.core.pr_str.call(null,self__.children)),cljs.core.str(" :p "),cljs.core.str(cljs.core.pr_str.call(null,self__.point)),cljs.core.str(" :d "),cljs.core.str(cljs.core.pr_str.call(null,self__.data)),cljs.core.str("}")].join('');
});

thi.ng.geom.spatialtree.MutableQuadtreeNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null),cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"point","point",-841237505,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"bounds","bounds",-962826314,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

thi.ng.geom.spatialtree.MutableQuadtreeNode.cljs$lang$type = true;

thi.ng.geom.spatialtree.MutableQuadtreeNode.cljs$lang$ctorStr = "thi.ng.geom.spatialtree/MutableQuadtreeNode";

thi.ng.geom.spatialtree.MutableQuadtreeNode.cljs$lang$ctorPrWriter = (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"thi.ng.geom.spatialtree/MutableQuadtreeNode");
});

thi.ng.geom.spatialtree.__GT_MutableQuadtreeNode = (function thi$ng$geom$spatialtree$__GT_MutableQuadtreeNode(x,y,w,h,children,point,data,bounds){
return (new thi.ng.geom.spatialtree.MutableQuadtreeNode(x,y,w,h,children,point,data,bounds));
});


/**
* @constructor
 * @implements {thi.ng.geom.core.PSpatialTree}
 * @implements {thi.ng.geom.core.PBounds}
 * @implements {thi.ng.geom.core.PClear}
 * @implements {thi.ng.geom.spatialtree.Object}
 * @implements {thi.ng.geom.spatialtree.PTreeOps}
*/
thi.ng.geom.spatialtree.MutableOctreeNode = (function (x,y,z,w,h,d,children,point,data,bounds){
this.x = x;
this.y = y;
this.z = z;
this.w = w;
this.h = h;
this.d = d;
this.children = children;
this.point = point;
this.data = data;
this.bounds = bounds;
})
thi.ng.geom.spatialtree.MutableOctreeNode.prototype.thi$ng$geom$core$PSpatialTree$ = true;

thi.ng.geom.spatialtree.MutableOctreeNode.prototype.thi$ng$geom$core$PSpatialTree$add_point$arity$3 = (function (_,p,d__$1){
var self__ = this;
var ___$1 = this;
thi.ng.geom.spatialtree.add_point_STAR_.call(null,___$1,p,d__$1);

return ___$1;
});

thi.ng.geom.spatialtree.MutableOctreeNode.prototype.thi$ng$geom$core$PSpatialTree$delete_point$arity$2 = (function (_,p){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.spatialtree.delete_point_STAR_.call(null,___$1,p);
});

thi.ng.geom.spatialtree.MutableOctreeNode.prototype.thi$ng$geom$core$PSpatialTree$get_point$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.point;
});

thi.ng.geom.spatialtree.MutableOctreeNode.prototype.thi$ng$geom$core$PSpatialTree$get_point_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.data;
});

thi.ng.geom.spatialtree.MutableOctreeNode.prototype.thi$ng$geom$core$PClear$ = true;

thi.ng.geom.spatialtree.MutableOctreeNode.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.spatialtree.MutableOctreeNode(self__.x,self__.y,self__.z,self__.w,self__.h,self__.d,null,null,null,self__.bounds));
});

thi.ng.geom.spatialtree.MutableOctreeNode.prototype.thi$ng$geom$core$PClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.children = null;

self__.children = self__.point;

self__.children = self__.data;

return ___$1;
});

thi.ng.geom.spatialtree.MutableOctreeNode.prototype.thi$ng$geom$spatialtree$PTreeOps$ = true;

thi.ng.geom.spatialtree.MutableOctreeNode.prototype.thi$ng$geom$spatialtree$PTreeOps$child_index_for_point$arity$2 = (function (_,p__30178){
var self__ = this;
var vec__30179 = p__30178;
var px = cljs.core.nth.call(null,vec__30179,(0),null);
var py = cljs.core.nth.call(null,vec__30179,(1),null);
var pz = cljs.core.nth.call(null,vec__30179,(2),null);
var ___$1 = this;
return ((((pz < (self__.z + self__.d)))?(0):(4)) + (((px < (self__.x + self__.w)))?(((py < (self__.y + self__.h)))?(0):(2)):(((py < (self__.y + self__.h)))?(1):(3))));
});

thi.ng.geom.spatialtree.MutableOctreeNode.prototype.thi$ng$geom$spatialtree$PTreeOps$child_for_point$arity$2 = (function (_,p){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.children)){
return self__.children.call(null,thi.ng.geom.spatialtree.child_index_for_point.call(null,___$1,p));
} else {
return null;
}
});

thi.ng.geom.spatialtree.MutableOctreeNode.prototype.thi$ng$geom$spatialtree$PTreeOps$make_child_for_point$arity$4 = (function (_,p,data__$1,add_QMARK_){
var self__ = this;
var ___$1 = this;
var idx = thi.ng.geom.spatialtree.child_index_for_point.call(null,___$1,p);
if(cljs.core.truth_(self__.children.call(null,idx))){
return self__.children.call(null,idx);
} else {
var cx = ((((idx & (1)) > (0)))?(self__.x + self__.w):self__.x);
var cy = ((((idx & (2)) > (0)))?(self__.y + self__.h):self__.y);
var cz = ((((idx & (4)) > (0)))?(self__.z + self__.d):self__.z);
var c = (new thi.ng.geom.spatialtree.MutableOctreeNode(cx,cy,cz,(0.5 * self__.w),(0.5 * self__.h),(0.5 * self__.d),null,(cljs.core.truth_(add_QMARK_)?p:null),(cljs.core.truth_(add_QMARK_)?data__$1:null),null));
thi.ng.geom.spatialtree.set_child.call(null,___$1,idx,c);

return c;
}
});

thi.ng.geom.spatialtree.MutableOctreeNode.prototype.thi$ng$geom$spatialtree$PTreeOps$split_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.children = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null], null);

self__.point = null;

return ___$1;
});

thi.ng.geom.spatialtree.MutableOctreeNode.prototype.thi$ng$geom$spatialtree$PTreeOps$get_children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
});

thi.ng.geom.spatialtree.MutableOctreeNode.prototype.thi$ng$geom$spatialtree$PTreeOps$set_child$arity$3 = (function (_,i,c){
var self__ = this;
var ___$1 = this;
self__.children = cljs.core.assoc.call(null,self__.children,i,c);

return ___$1;
});

thi.ng.geom.spatialtree.MutableOctreeNode.prototype.thi$ng$geom$spatialtree$PTreeOps$set_children$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
self__.children = c;

return ___$1;
});

thi.ng.geom.spatialtree.MutableOctreeNode.prototype.thi$ng$geom$spatialtree$PTreeOps$set_point$arity$3 = (function (_,p,d__$1){
var self__ = this;
var ___$1 = this;
self__.point = p;

self__.data = d__$1;

return ___$1;
});

thi.ng.geom.spatialtree.MutableOctreeNode.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.spatialtree.MutableOctreeNode.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.bounds)){
return self__.bounds;
} else {
return self__.bounds = (new thi.ng.geom.types.AABB(thi.ng.geom.core.vector.vec3.call(null,self__.x,self__.y,self__.z),thi.ng.geom.core.vector.vec3.call(null,(self__.w * 2.0),(self__.h * 2.0),(self__.d * 2.0))));
}
});

thi.ng.geom.spatialtree.MutableOctreeNode.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("#thi.ng.geom.spatialtree.MutableOctreeNode"),cljs.core.str("{:bounds "),cljs.core.str(cljs.core.pr_str.call(null,thi.ng.geom.core.bounds.call(null,_))),cljs.core.str(" :children "),cljs.core.str(cljs.core.pr_str.call(null,self__.children)),cljs.core.str(" :p "),cljs.core.str(cljs.core.pr_str.call(null,self__.point)),cljs.core.str(" :d "),cljs.core.str(cljs.core.pr_str.call(null,self__.data)),cljs.core.str("}")].join('');
});

thi.ng.geom.spatialtree.MutableOctreeNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.Symbol(null,"d","d",-682293345,null),cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"point","point",-841237505,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"bounds","bounds",-962826314,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

thi.ng.geom.spatialtree.MutableOctreeNode.cljs$lang$type = true;

thi.ng.geom.spatialtree.MutableOctreeNode.cljs$lang$ctorStr = "thi.ng.geom.spatialtree/MutableOctreeNode";

thi.ng.geom.spatialtree.MutableOctreeNode.cljs$lang$ctorPrWriter = (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"thi.ng.geom.spatialtree/MutableOctreeNode");
});

thi.ng.geom.spatialtree.__GT_MutableOctreeNode = (function thi$ng$geom$spatialtree$__GT_MutableOctreeNode(x,y,z,w,h,d,children,point,data,bounds){
return (new thi.ng.geom.spatialtree.MutableOctreeNode(x,y,z,w,h,d,children,point,data,bounds));
});

/**
 * Create a new quadtree root node with the given XY position & dimensions.
 */
thi.ng.geom.spatialtree.quadtree = (function thi$ng$geom$spatialtree$quadtree(var_args){
var args30180 = [];
var len__19333__auto___30191 = arguments.length;
var i__19334__auto___30192 = (0);
while(true){
if((i__19334__auto___30192 < len__19333__auto___30191)){
args30180.push((arguments[i__19334__auto___30192]));

var G__30193 = (i__19334__auto___30192 + (1));
i__19334__auto___30192 = G__30193;
continue;
} else {
}
break;
}

var G__30182 = args30180.length;
switch (G__30182) {
case 1:
return thi.ng.geom.spatialtree.quadtree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.spatialtree.quadtree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.spatialtree.quadtree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.spatialtree.quadtree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30180.length)].join('')));

}
});

thi.ng.geom.spatialtree.quadtree.cljs$core$IFn$_invoke$arity$1 = (function (p__30183){
var map__30184 = p__30183;
var map__30184__$1 = ((((!((map__30184 == null)))?((((map__30184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30184):map__30184);
var vec__30185 = cljs.core.get.call(null,map__30184__$1,new cljs.core.Keyword(null,"p","p",151049309));
var x = cljs.core.nth.call(null,vec__30185,(0),null);
var y = cljs.core.nth.call(null,vec__30185,(1),null);
var vec__30186 = cljs.core.get.call(null,map__30184__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__30186,(0),null);
var h = cljs.core.nth.call(null,vec__30186,(1),null);
return thi.ng.geom.spatialtree.quadtree.call(null,x,y,w,h);
});

thi.ng.geom.spatialtree.quadtree.cljs$core$IFn$_invoke$arity$2 = (function (p__30188,size){
var vec__30189 = p__30188;
var x = cljs.core.nth.call(null,vec__30189,(0),null);
var y = cljs.core.nth.call(null,vec__30189,(1),null);
var vec__30190 = ((typeof size === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,size], null):size);
var w = cljs.core.nth.call(null,vec__30190,(0),null);
var h = cljs.core.nth.call(null,vec__30190,(1),null);
return thi.ng.geom.spatialtree.quadtree.call(null,x,y,w,h);
});

thi.ng.geom.spatialtree.quadtree.cljs$core$IFn$_invoke$arity$3 = (function (x,y,size){
return thi.ng.geom.spatialtree.quadtree.call(null,x,y,size,size);
});

thi.ng.geom.spatialtree.quadtree.cljs$core$IFn$_invoke$arity$4 = (function (x,y,w,h){
return (new thi.ng.geom.spatialtree.MutableQuadtreeNode(x,y,(0.5 * w),(0.5 * h),null,null,null,null));
});

thi.ng.geom.spatialtree.quadtree.cljs$lang$maxFixedArity = 4;
/**
 * Create a new octree root node with the given XYZ position & dimensions.
 */
thi.ng.geom.spatialtree.octree = (function thi$ng$geom$spatialtree$octree(var_args){
var args30195 = [];
var len__19333__auto___30206 = arguments.length;
var i__19334__auto___30207 = (0);
while(true){
if((i__19334__auto___30207 < len__19333__auto___30206)){
args30195.push((arguments[i__19334__auto___30207]));

var G__30208 = (i__19334__auto___30207 + (1));
i__19334__auto___30207 = G__30208;
continue;
} else {
}
break;
}

var G__30197 = args30195.length;
switch (G__30197) {
case 1:
return thi.ng.geom.spatialtree.octree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.spatialtree.octree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.spatialtree.octree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return thi.ng.geom.spatialtree.octree.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30195.length)].join('')));

}
});

thi.ng.geom.spatialtree.octree.cljs$core$IFn$_invoke$arity$1 = (function (p__30198){
var map__30199 = p__30198;
var map__30199__$1 = ((((!((map__30199 == null)))?((((map__30199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30199):map__30199);
var vec__30200 = cljs.core.get.call(null,map__30199__$1,new cljs.core.Keyword(null,"p","p",151049309));
var x = cljs.core.nth.call(null,vec__30200,(0),null);
var y = cljs.core.nth.call(null,vec__30200,(1),null);
var z = cljs.core.nth.call(null,vec__30200,(2),null);
var vec__30201 = cljs.core.get.call(null,map__30199__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__30201,(0),null);
var h = cljs.core.nth.call(null,vec__30201,(1),null);
var d = cljs.core.nth.call(null,vec__30201,(2),null);
return thi.ng.geom.spatialtree.octree.call(null,x,y,z,w,h,d);
});

thi.ng.geom.spatialtree.octree.cljs$core$IFn$_invoke$arity$2 = (function (p__30203,size){
var vec__30204 = p__30203;
var x = cljs.core.nth.call(null,vec__30204,(0),null);
var y = cljs.core.nth.call(null,vec__30204,(1),null);
var z = cljs.core.nth.call(null,vec__30204,(2),null);
var vec__30205 = ((typeof size === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,size,size], null):size);
var w = cljs.core.nth.call(null,vec__30205,(0),null);
var h = cljs.core.nth.call(null,vec__30205,(1),null);
var d = cljs.core.nth.call(null,vec__30205,(2),null);
return thi.ng.geom.spatialtree.octree.call(null,x,y,z,w,h,d);
});

thi.ng.geom.spatialtree.octree.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,size){
return thi.ng.geom.spatialtree.octree.call(null,x,y,z,size,size,size);
});

thi.ng.geom.spatialtree.octree.cljs$core$IFn$_invoke$arity$6 = (function (x,y,z,w,h,d){
return (new thi.ng.geom.spatialtree.MutableOctreeNode(x,y,z,(0.5 * w),(0.5 * h),(0.5 * d),null,null,null,null));
});

thi.ng.geom.spatialtree.octree.cljs$lang$maxFixedArity = 6;

//# sourceMappingURL=spatialtree.js.map