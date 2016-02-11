// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.triangle');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.types');
thi.ng.geom.triangle.triangle2 = (function thi$ng$geom$triangle$triangle2(var_args){
var args23586 = [];
var len__19333__auto___23589 = arguments.length;
var i__19334__auto___23590 = (0);
while(true){
if((i__19334__auto___23590 < len__19333__auto___23589)){
args23586.push((arguments[i__19334__auto___23590]));

var G__23591 = (i__19334__auto___23590 + (1));
i__19334__auto___23590 = G__23591;
continue;
} else {
}
break;
}

var G__23588 = args23586.length;
switch (G__23588) {
case 1:
return thi.ng.geom.triangle.triangle2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.triangle.triangle2.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23586.length)].join('')));

}
});

thi.ng.geom.triangle.triangle2.cljs$core$IFn$_invoke$arity$1 = (function (t){
if(cljs.core.map_QMARK_.call(null,t)){
return (new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec2.call(null,new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(t)),thi.ng.geom.core.vector.vec2.call(null,new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(t)),thi.ng.geom.core.vector.vec2.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(t))], null)));
} else {
if(cljs.core.sequential_QMARK_.call(null,t)){
return (new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec2.call(null,cljs.core.first.call(null,t)),thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,t,(1))),thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,t,(2)))], null)));
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,t);

}
}
});

thi.ng.geom.triangle.triangle2.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return (new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec2.call(null,a),thi.ng.geom.core.vector.vec2.call(null,b),thi.ng.geom.core.vector.vec2.call(null,c)], null)));
});

thi.ng.geom.triangle.triangle2.cljs$lang$maxFixedArity = 3;
thi.ng.geom.triangle.triangle3 = (function thi$ng$geom$triangle$triangle3(var_args){
var args23593 = [];
var len__19333__auto___23596 = arguments.length;
var i__19334__auto___23597 = (0);
while(true){
if((i__19334__auto___23597 < len__19333__auto___23596)){
args23593.push((arguments[i__19334__auto___23597]));

var G__23598 = (i__19334__auto___23597 + (1));
i__19334__auto___23597 = G__23598;
continue;
} else {
}
break;
}

var G__23595 = args23593.length;
switch (G__23595) {
case 1:
return thi.ng.geom.triangle.triangle3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.triangle.triangle3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23593.length)].join('')));

}
});

thi.ng.geom.triangle.triangle3.cljs$core$IFn$_invoke$arity$1 = (function (t){
if(cljs.core.map_QMARK_.call(null,t)){
return (new thi.ng.geom.types.Triangle3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(t)),thi.ng.geom.core.vector.vec3.call(null,new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(t)),thi.ng.geom.core.vector.vec3.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(t))], null)));
} else {
if(cljs.core.sequential_QMARK_.call(null,t)){
return (new thi.ng.geom.types.Triangle3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,cljs.core.first.call(null,t)),thi.ng.geom.core.vector.vec3.call(null,cljs.core.nth.call(null,t,(1))),thi.ng.geom.core.vector.vec3.call(null,cljs.core.nth.call(null,t,(2)))], null)));
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,t);

}
}
});

thi.ng.geom.triangle.triangle3.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return (new thi.ng.geom.types.Triangle3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,a),thi.ng.geom.core.vector.vec3.call(null,b),thi.ng.geom.core.vector.vec3.call(null,c)], null)));
});

thi.ng.geom.triangle.triangle3.cljs$lang$maxFixedArity = 3;
thi.ng.geom.triangle.equilateral2 = (function thi$ng$geom$triangle$equilateral2(var_args){
var args23600 = [];
var len__19333__auto___23603 = arguments.length;
var i__19334__auto___23604 = (0);
while(true){
if((i__19334__auto___23604 < len__19333__auto___23603)){
args23600.push((arguments[i__19334__auto___23604]));

var G__23605 = (i__19334__auto___23604 + (1));
i__19334__auto___23604 = G__23605;
continue;
} else {
}
break;
}

var G__23602 = args23600.length;
switch (G__23602) {
case 1:
return thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23600.length)].join('')));

}
});

thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$1 = (function (l){
if(cljs.core.map_QMARK_.call(null,l)){
return thi.ng.geom.triangle.equilateral2.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(l),new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(l));
} else {
if(cljs.core.sequential_QMARK_.call(null,l)){
return thi.ng.geom.triangle.equilateral2.call(null,cljs.core.first.call(null,l),cljs.core.nth.call(null,l,(1)));
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,l);

}
}
});

thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var a__$1 = thi.ng.geom.core.vector.vec2.call(null,a);
var b__$1 = thi.ng.geom.core.vector.vec2.call(null,b);
var dir = thi.ng.geom.core._.call(null,a__$1,b__$1);
var n = thi.ng.geom.core.normal.call(null,dir);
var c = thi.ng.geom.core._PLUS_.call(null,thi.ng.geom.core.normalize.call(null,n,((thi.ng.geom.core.mag.call(null,dir) * thi.ng.math.core.SQRT3) * 0.5)),thi.ng.geom.core.mix.call(null,a__$1,b__$1));
return thi.ng.geom.triangle.triangle2.call(null,a__$1,b__$1,c);
});

thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$4 = (function (x1,y1,x2,y2){
return thi.ng.geom.triangle.equilateral2.call(null,thi.ng.geom.core.vector.vec2.call(null,x1,y1),thi.ng.geom.core.vector.vec2.call(null,x2,y2));
});

thi.ng.geom.triangle.equilateral2.cljs$lang$maxFixedArity = 4;
thi.ng.geom.triangle.equilateral3 = (function thi$ng$geom$triangle$equilateral3(a,b,n){
var a__$1 = thi.ng.geom.core.vector.vec3.call(null,a);
var b__$1 = thi.ng.geom.core.vector.vec3.call(null,b);
var dir = thi.ng.geom.core._.call(null,b__$1,a__$1);
var n__$1 = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.cross.call(null,dir,n));
var c = thi.ng.geom.core._PLUS_.call(null,thi.ng.geom.core.normalize.call(null,n__$1,((thi.ng.geom.core.mag.call(null,dir) * thi.ng.math.core.SQRT3) * 0.5)),thi.ng.geom.core.mix.call(null,a__$1,b__$1));
return (new thi.ng.geom.types.Triangle3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1,c], null)));
});
thi.ng.geom.triangle.other_point_in_tri = (function thi$ng$geom$triangle$other_point_in_tri(p__23607,a,b){
var vec__23609 = p__23607;
var ta = cljs.core.nth.call(null,vec__23609,(0),null);
var tb = cljs.core.nth.call(null,vec__23609,(1),null);
var tc = cljs.core.nth.call(null,vec__23609,(2),null);
if(cljs.core._EQ_.call(null,a,ta)){
if(cljs.core._EQ_.call(null,b,tb)){
return tc;
} else {
return tb;
}
} else {
if(cljs.core._EQ_.call(null,a,tb)){
if(cljs.core._EQ_.call(null,b,ta)){
return tc;
} else {
return ta;
}
} else {
if(cljs.core._EQ_.call(null,b,ta)){
return tb;
} else {
return ta;
}
}
}
});
thi.ng.geom.triangle.altitude = (function thi$ng$geom$triangle$altitude(var_args){
var args23610 = [];
var len__19333__auto___23616 = arguments.length;
var i__19334__auto___23617 = (0);
while(true){
if((i__19334__auto___23617 < len__19333__auto___23616)){
args23610.push((arguments[i__19334__auto___23617]));

var G__23618 = (i__19334__auto___23617 + (1));
i__19334__auto___23617 = G__23618;
continue;
} else {
}
break;
}

var G__23612 = args23610.length;
switch (G__23612) {
case 2:
return thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23610.length)].join('')));

}
});

thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$2 = (function (p__23613,id){
var vec__23614 = p__23613;
var a = cljs.core.nth.call(null,vec__23614,(0),null);
var b = cljs.core.nth.call(null,vec__23614,(1),null);
var c = cljs.core.nth.call(null,vec__23614,(2),null);
var G__23615 = (((id instanceof cljs.core.Keyword))?id.fqn:null);
switch (G__23615) {
case "a":
return thi.ng.geom.triangle.altitude.call(null,b,c,a);

break;
case "b":
return thi.ng.geom.triangle.altitude.call(null,a,c,b);

break;
case "c":
return thi.ng.geom.triangle.altitude.call(null,a,b,c);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(id)].join('')));

}
});

thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.mix.call(null,a,b,thi.ng.geom.core.utils.closest_point_coeff.call(null,c,a,b)),c], null);
});

thi.ng.geom.triangle.altitude.cljs$lang$maxFixedArity = 3;
thi.ng.geom.triangle.norm_altitude = (function thi$ng$geom$triangle$norm_altitude(var_args){
var args23621 = [];
var len__19333__auto___23625 = arguments.length;
var i__19334__auto___23626 = (0);
while(true){
if((i__19334__auto___23626 < len__19333__auto___23625)){
args23621.push((arguments[i__19334__auto___23626]));

var G__23627 = (i__19334__auto___23626 + (1));
i__19334__auto___23626 = G__23627;
continue;
} else {
}
break;
}

var G__23623 = args23621.length;
switch (G__23623) {
case 2:
return thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23621.length)].join('')));

}
});

thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$2 = (function (points,id){
var vec__23624 = thi.ng.geom.triangle.altitude.call(null,points,id);
var a = cljs.core.nth.call(null,vec__23624,(0),null);
var b = cljs.core.nth.call(null,vec__23624,(1),null);
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,b,a));
});

thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,c,thi.ng.geom.core.mix.call(null,a,b,thi.ng.geom.core.utils.closest_point_coeff.call(null,c,a,b))));
});

thi.ng.geom.triangle.norm_altitude.cljs$lang$maxFixedArity = 3;
thi.ng.geom.triangle.centroid = (function thi$ng$geom$triangle$centroid(var_args){
var args23629 = [];
var len__19333__auto___23634 = arguments.length;
var i__19334__auto___23635 = (0);
while(true){
if((i__19334__auto___23635 < len__19333__auto___23634)){
args23629.push((arguments[i__19334__auto___23635]));

var G__23636 = (i__19334__auto___23635 + (1));
i__19334__auto___23635 = G__23636;
continue;
} else {
}
break;
}

var G__23631 = args23629.length;
switch (G__23631) {
case 3:
return thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23629.length)].join('')));

}
});

thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core._PLUS_.call(null,a,b,c),thi.ng.math.core.THIRD);
});

thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$1 = (function (p__23632){
var vec__23633 = p__23632;
var a = cljs.core.nth.call(null,vec__23633,(0),null);
var b = cljs.core.nth.call(null,vec__23633,(1),null);
var c = cljs.core.nth.call(null,vec__23633,(2),null);
return thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core._PLUS_.call(null,a,b,c),thi.ng.math.core.THIRD);
});

thi.ng.geom.triangle.centroid.cljs$lang$maxFixedArity = 3;
thi.ng.geom.triangle.check_edge = (function thi$ng$geom$triangle$check_edge(splits,classifier,e,p,q,add_p_QMARK_,add_q_QMARK_){
var pc = classifier.call(null,e,p);
var qc = classifier.call(null,e,q);
var splits__$1 = (cljs.core.truth_(add_p_QMARK_)?cljs.core.conj.call(null,splits,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,pc], null)):splits);
if(((pc * qc) < (0))){
var ip = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.intersect_line.call(null,e,p,q));
if(cljs.core.truth_(add_q_QMARK_)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,splits__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ip,(0)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,qc], null));
} else {
return cljs.core.conj.call(null,splits__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ip,(0)], null));
}
} else {
if(cljs.core.truth_(add_q_QMARK_)){
return cljs.core.conj.call(null,splits__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,qc], null));
} else {
return splits__$1;
}
}
});
thi.ng.geom.triangle.slice_with_STAR_ = (function thi$ng$geom$triangle$slice_with_STAR_(var_args){
var args23638 = [];
var len__19333__auto___23650 = arguments.length;
var i__19334__auto___23651 = (0);
while(true){
if((i__19334__auto___23651 < len__19333__auto___23650)){
args23638.push((arguments[i__19334__auto___23651]));

var G__23652 = (i__19334__auto___23651 + (1));
i__19334__auto___23651 = G__23652;
continue;
} else {
}
break;
}

var G__23640 = args23638.length;
switch (G__23640) {
case 2:
return thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23638.length)].join('')));

}
});

thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (t,e){
return thi.ng.geom.triangle.slice_with_STAR_.call(null,t,e,thi.ng.geom.core.classify_point);
});

thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (p__23641,e,classifier){
var vec__23642 = p__23641;
var a = cljs.core.nth.call(null,vec__23642,(0),null);
var b = cljs.core.nth.call(null,vec__23642,(1),null);
var c = cljs.core.nth.call(null,vec__23642,(2),null);
return thi.ng.geom.triangle.slice_with_STAR_.call(null,a,b,c,e,classifier);
});

thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,e,classifier){
var verts = thi.ng.geom.triangle.check_edge.call(null,thi.ng.geom.triangle.check_edge.call(null,thi.ng.geom.triangle.check_edge.call(null,cljs.core.PersistentVector.EMPTY,classifier,e,a,b,true,true),classifier,e,b,c,false,true),classifier,e,c,a,false,false);
var cmap = ((function (verts){
return (function (ids){
return cljs.core.reduce.call(null,((function (verts){
return (function (m,p__23643){
var vec__23644 = p__23643;
var a__$1 = cljs.core.nth.call(null,vec__23644,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__23644,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__23644,(2),null);
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1.call(null,(1))], null),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1.call(null,(0)),b__$1.call(null,(0)),c__$1.call(null,(0))], null));
});})(verts))
,new cljs.core.PersistentArrayMap(null, 2, [(-1),cljs.core.PersistentVector.EMPTY,(1),cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,((function (verts){
return (function (p__23645){
var vec__23646 = p__23645;
var a__$1 = cljs.core.nth.call(null,vec__23646,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__23646,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__23646,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [verts.call(null,a__$1),verts.call(null,b__$1),verts.call(null,c__$1)], null);
});})(verts))
,ids));
});})(verts))
;
var pred__23647 = cljs.core._EQ_;
var expr__23648 = cljs.core.count.call(null,verts);
if(cljs.core.truth_(pred__23647.call(null,(4),expr__23648))){
var triverts = cljs.core.PersistentHashSet.fromArray([a,c,b], true);
var d = (function (){var i = (3);
while(true){
var temp__4655__auto__ = verts.call(null,i);
if(cljs.core.truth_(temp__4655__auto__)){
var vc = temp__4655__auto__;
if(cljs.core.truth_((function (){var and__18263__auto__ = (vc.call(null,(1)) === (0));
if(and__18263__auto__){
return triverts.call(null,vc.call(null,(0)));
} else {
return and__18263__auto__;
}
})())){
return i;
} else {
var G__23654 = (i - (1));
i = G__23654;
continue;
}
} else {
return null;
}
break;
}
})();
return cmap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.wrap_range.call(null,(d + (1)),(4)),thi.ng.math.core.wrap_range.call(null,(d + (2)),(4)),d], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.wrap_range.call(null,(d - (1)),(4)),d,thi.ng.math.core.wrap_range.call(null,(d + (2)),(4))], null)], null));
} else {
if(cljs.core.truth_(pred__23647.call(null,(5),expr__23648))){
if((cljs.core.get_in.call(null,verts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)) === (0))){
if((cljs.core.get_in.call(null,verts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null)) === (0))){
return cmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(1)], null)], null));
} else {
return cmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4)], null)], null));
}
} else {
return cmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(2)], null)], null));
}
} else {
return null;
}
}
});

thi.ng.geom.triangle.slice_with_STAR_.cljs$lang$maxFixedArity = 5;
thi.ng.geom.triangle.circumcircle_raw = (function thi$ng$geom$triangle$circumcircle_raw(p__23655,p__23656,p__23657){
var vec__23661 = p__23655;
var ax = cljs.core.nth.call(null,vec__23661,(0),null);
var ay = cljs.core.nth.call(null,vec__23661,(1),null);
var a = vec__23661;
var vec__23662 = p__23656;
var bx = cljs.core.nth.call(null,vec__23662,(0),null);
var by = cljs.core.nth.call(null,vec__23662,(1),null);
var b = vec__23662;
var vec__23663 = p__23657;
var cx = cljs.core.nth.call(null,vec__23663,(0),null);
var cy = cljs.core.nth.call(null,vec__23663,(1),null);
var c = vec__23663;
var eq_ab_QMARK_ = thi.ng.math.core.delta_EQ_.call(null,ay,by,thi.ng.math.core._STAR_eps_STAR_);
var eq_bc_QMARK_ = thi.ng.math.core.delta_EQ_.call(null,by,cy,thi.ng.math.core._STAR_eps_STAR_);
if(cljs.core.truth_((function (){var and__18263__auto__ = eq_ab_QMARK_;
if(cljs.core.truth_(and__18263__auto__)){
return eq_bc_QMARK_;
} else {
return and__18263__auto__;
}
})())){
return null;
} else {
var o = (cljs.core.truth_(eq_ab_QMARK_)?(function (){var cx__$1 = ((ax + bx) * 0.5);
return thi.ng.geom.core.vector.vec2.call(null,cx__$1,(((cx__$1 - ((bx + cx__$1) * 0.5)) * (- ((cx__$1 - bx) / (cy - by)))) + ((by + cy) * 0.5)));
})():(cljs.core.truth_(eq_bc_QMARK_)?(function (){var cx__$1 = ((bx + cx) * 0.5);
return thi.ng.geom.core.vector.vec2.call(null,cx__$1,(((cx__$1 - ((ax + bx) * 0.5)) * (- ((bx - ax) / (by - ay)))) + ((ay + by) * 0.5)));
})():(function (){var m1 = (- ((bx - ax) / (by - ay)));
var m2 = (- ((cx - bx) / (cy - by)));
var mx1 = ((ax + bx) * 0.5);
var my1 = ((ay + by) * 0.5);
var cx__$1 = (((((m1 * mx1) - (m2 * ((bx + cx) * 0.5))) + ((by + cy) * 0.5)) + (- my1)) / (m1 - m2));
return thi.ng.geom.core.vector.vec2.call(null,cx__$1,(((cx__$1 - mx1) * m1) + my1));
})()
));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,thi.ng.geom.core.dist.call(null,o,b)], null);
}
});
thi.ng.geom.triangle.circumcircle = (function thi$ng$geom$triangle$circumcircle(var_args){
var args23664 = [];
var len__19333__auto___23668 = arguments.length;
var i__19334__auto___23669 = (0);
while(true){
if((i__19334__auto___23669 < len__19333__auto___23668)){
args23664.push((arguments[i__19334__auto___23669]));

var G__23670 = (i__19334__auto___23669 + (1));
i__19334__auto___23669 = G__23670;
continue;
} else {
}
break;
}

var G__23666 = args23664.length;
switch (G__23666) {
case 1:
return thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23664.length)].join('')));

}
});

thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$1 = (function (t){
return thi.ng.geom.triangle.circumcircle.call(null,new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(t));
});

thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var vec__23667 = thi.ng.geom.triangle.circumcircle_raw.call(null,a,b,c);
var o = cljs.core.nth.call(null,vec__23667,(0),null);
var r = cljs.core.nth.call(null,vec__23667,(1),null);
return (new thi.ng.geom.types.Circle2(o,r));
});

thi.ng.geom.triangle.circumcircle.cljs$lang$maxFixedArity = 3;
thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSlice$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSlice$slice_with$arity$2 = (function (_,e){
var ___$1 = this;
return thi.ng.geom.triangle.slice_with_STAR_.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),e,thi.ng.geom.core.classify_point);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSlice$slice_with$arity$3 = (function (_,e,classifier){
var ___$1 = this;
return thi.ng.geom.triangle.slice_with_STAR_.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),e,classifier);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__23679_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,m,p1__23679_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__23674_SHARP_){
return thi.ng.geom.core.rotate.call(null,p1__23674_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.vector.vec2.call(null),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.centroid.call(null,___$1),thi.ng.geom.core.vector.vec2.call(null,o),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.triangle.centroid.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PFlip$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.reverse.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PPolygonConvert$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PPolygonConvert$as_polygon$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (p__23680,t){
var map__23681 = p__23680;
var map__23681__$1 = ((((!((map__23681 == null)))?((((map__23681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23681):map__23681);
var p = cljs.core.get.call(null,map__23681__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__23683 = this;
var map__23683__$1 = ((((!((map__23683 == null)))?((((map__23683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23683):map__23683);
var p__$1 = cljs.core.get.call(null,map__23683__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.point_at.call(null,t,cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__23685){
var map__23686 = p__23685;
var map__23686__$1 = ((((!((map__23686 == null)))?((((map__23686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23686):map__23686);
var p = cljs.core.get.call(null,map__23686__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__23688 = this;
var map__23688__$1 = ((((!((map__23688 == null)))?((((map__23688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23688):map__23688);
var p__$1 = cljs.core.get.call(null,map__23688__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.point_at.call(null,thi.ng.math.core.random.call(null),cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.from_barycentric.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),thi.ng.math.core.normdist_weights.call(null,(3)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (p__23690,udist,include_last_QMARK_){
var map__23691 = p__23690;
var map__23691__$1 = ((((!((map__23691 == null)))?((((map__23691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23691):map__23691);
var p = cljs.core.get.call(null,map__23691__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__23693 = this;
var map__23693__$1 = ((((!((map__23693 == null)))?((((map__23693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23693):map__23693);
var p__$1 = cljs.core.get.call(null,map__23693__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.sample_uniform.call(null,udist,include_last_QMARK_,cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSubdivide$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.map.call(null,((function (___$1){
return (function (p1__23673_SHARP_){
return (new thi.ng.geom.types.Triangle2(p1__23673_SHARP_));
});})(___$1))
,thi.ng.geom.core.utils.tessellate_with_point.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.reduce.call(null,cljs.core.min,cljs.core.map.call(null,((function (___$1){
return (function (p1__23672_SHARP_){
return thi.ng.math.core.signum.call(null,cljs.core.apply.call(null,thi.ng.geom.core.utils.closest_point_coeff,p,p1__23672_SHARP_),thi.ng.math.core._STAR_eps_STAR_);
});})(___$1))
,thi.ng.geom.core.edges.call(null,___$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.extrude.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),opts);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PExtrude$extrude_shell$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.extrude_shell.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),opts);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (p__23695){
var map__23696 = p__23695;
var map__23696__$1 = ((((!((map__23696 == null)))?((((map__23696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23696):map__23696);
var vec__23697 = cljs.core.get.call(null,map__23696__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__23697,(0),null);
var b = cljs.core.nth.call(null,vec__23697,(1),null);
var c = cljs.core.nth.call(null,vec__23697,(2),null);
var map__23699 = this;
var map__23699__$1 = ((((!((map__23699 == null)))?((((map__23699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23699):map__23699);
var vec__23700 = cljs.core.get.call(null,map__23699__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__23700,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__23700,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__23700,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,c__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,a__$1], null)], null);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.apply.call(null,thi.ng.geom.core.utils.point_in_triangle2_QMARK_,p,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (_,p__23702){
var map__23703 = p__23702;
var map__23703__$1 = ((((!((map__23703 == null)))?((((map__23703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23703):map__23703);
var vec__23704 = cljs.core.get.call(null,map__23703__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__23704,(0),null);
var q = cljs.core.nth.call(null,vec__23704,(1),null);
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

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 = (function (_,ray){
var ___$1 = this;
var vec__23706 = ((cljs.core.map_QMARK_.call(null,ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(ray),new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(ray)], null):ray);
var p = cljs.core.nth.call(null,vec__23706,(0),null);
var dir = cljs.core.nth.call(null,vec__23706,(1),null);
return thi.ng.geom.core.intersect.intersect_ray2_edges_QMARK_.call(null,p,dir,thi.ng.geom.core.edges.call(null,___$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$3 = (function (_,p,dir){
var ___$1 = this;
return thi.ng.geom.core.intersect.intersect_ray2_edges_QMARK_.call(null,p,dir,thi.ng.geom.core.edges.call(null,___$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PBoundingCircle$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PBoundingCircle$bounding_circle$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_circle.call(null,thi.ng.geom.core.centroid.call(null,___$1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__23678_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p1__23678_SHARP_,t);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__23675_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__23675_SHARP_,s);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__23676_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__23676_SHARP_,sx,sy);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__23677_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__23677_SHARP_,sx,sy,sz);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(thi.ng.geom.core.utils.scale_size.call(null,s,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PTessellate$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (p__23707){
var map__23708 = p__23707;
var map__23708__$1 = ((((!((map__23708 == null)))?((((map__23708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23708):map__23708);
var vec__23709 = cljs.core.get.call(null,map__23708__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__23709,(0),null);
var b = cljs.core.nth.call(null,vec__23709,(1),null);
var c = cljs.core.nth.call(null,vec__23709,(2),null);
var map__23711 = this;
var map__23711__$1 = ((((!((map__23711 == null)))?((((map__23711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23711):map__23711);
var vec__23712 = cljs.core.get.call(null,map__23711__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__23712,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__23712,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__23712,(2),null);
return ((thi.ng.geom.core.dist.call(null,a__$1,b__$1) + thi.ng.geom.core.dist.call(null,b__$1,c__$1)) + thi.ng.geom.core.dist.call(null,c__$1,a__$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_rect.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(0),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PMeshConvert$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.add_face.call(null,(function (){var or__18275__auto__ = new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec3,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (p__23714,v){
var map__23715 = p__23714;
var map__23715__$1 = ((((!((map__23715 == null)))?((((map__23715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23715):map__23715);
var vec__23716 = cljs.core.get.call(null,map__23715__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__23716,(0),null);
var b = cljs.core.nth.call(null,vec__23716,(1),null);
var c = cljs.core.nth.call(null,vec__23716,(2),null);
var map__23718 = this;
var map__23718__$1 = ((((!((map__23718 == null)))?((((map__23718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23718):map__23718);
var vec__23719 = cljs.core.get.call(null,map__23718__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__23719,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__23719,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__23719,(2),null);
var pred__23721 = cljs.core._EQ_;
var expr__23722 = v;
if(cljs.core.truth_(pred__23721.call(null,a__$1,expr__23722))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,b__$1], null);
} else {
if(cljs.core.truth_(pred__23721.call(null,b__$1,expr__23722))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,c__$1], null);
} else {
if(cljs.core.truth_(pred__23721.call(null,c__$1,expr__23722))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,a__$1], null);
} else {
return null;
}
}
}
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
if(cljs.core.truth_(cljs.core.set.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1)).call(null,v))){
return (2);
} else {
return (0);
}
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first.call(null,thi.ng.geom.core.utils.closest_point_on_segments.call(null,p,thi.ng.geom.core.edges.call(null,___$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.apply.call(null,thi.ng.geom.core.utils.tri_area2,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSlice$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSlice$slice_with$arity$2 = (function (_,e){
var ___$1 = this;
return thi.ng.geom.triangle.slice_with_STAR_.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),e,thi.ng.geom.core.classify_point);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSlice$slice_with$arity$3 = (function (_,e,classifier){
var ___$1 = this;
return thi.ng.geom.triangle.slice_with_STAR_.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),e,classifier);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__23734_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,m,p1__23734_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__23725_SHARP_){
return thi.ng.geom.core.rotate.call(null,p1__23725_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__23726_SHARP_){
return thi.ng.geom.core.rotate_x.call(null,p1__23726_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__23727_SHARP_){
return thi.ng.geom.core.rotate_y.call(null,p1__23727_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__23728_SHARP_){
return thi.ng.geom.core.rotate_z.call(null,p1__23728_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__23729_SHARP_){
return thi.ng.geom.core.rotate_around_axis.call(null,p1__23729_SHARP_,axis,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.vector.vec3.call(null),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.centroid.call(null,___$1),thi.ng.geom.core.vector.vec3.call(null,o),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.triangle.centroid.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PFlip$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.reverse.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (p__23735,t){
var map__23736 = p__23735;
var map__23736__$1 = ((((!((map__23736 == null)))?((((map__23736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23736):map__23736);
var p = cljs.core.get.call(null,map__23736__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__23738 = this;
var map__23738__$1 = ((((!((map__23738 == null)))?((((map__23738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23738):map__23738);
var p__$1 = cljs.core.get.call(null,map__23738__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.point_at.call(null,t,cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__23740){
var map__23741 = p__23740;
var map__23741__$1 = ((((!((map__23741 == null)))?((((map__23741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23741):map__23741);
var p = cljs.core.get.call(null,map__23741__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__23743 = this;
var map__23743__$1 = ((((!((map__23743 == null)))?((((map__23743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23743):map__23743);
var p__$1 = cljs.core.get.call(null,map__23743__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.point_at.call(null,thi.ng.math.core.random.call(null),cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.from_barycentric.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),thi.ng.math.core.normdist_weights.call(null,(3)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (p__23745,udist,include_last_QMARK_){
var map__23746 = p__23745;
var map__23746__$1 = ((((!((map__23746 == null)))?((((map__23746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23746):map__23746);
var p = cljs.core.get.call(null,map__23746__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__23748 = this;
var map__23748__$1 = ((((!((map__23748 == null)))?((((map__23748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23748):map__23748);
var p__$1 = cljs.core.get.call(null,map__23748__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.sample_uniform.call(null,udist,include_last_QMARK_,cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSubdivide$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.map.call(null,((function (___$1){
return (function (p1__23724_SHARP_){
return (new thi.ng.geom.types.Triangle3(p1__23724_SHARP_));
});})(___$1))
,thi.ng.geom.core.utils.tessellate_with_point.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (p__23750){
var map__23751 = p__23750;
var map__23751__$1 = ((((!((map__23751 == null)))?((((map__23751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23751):map__23751);
var vec__23752 = cljs.core.get.call(null,map__23751__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__23752,(0),null);
var b = cljs.core.nth.call(null,vec__23752,(1),null);
var c = cljs.core.nth.call(null,vec__23752,(2),null);
var map__23754 = this;
var map__23754__$1 = ((((!((map__23754 == null)))?((((map__23754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23754):map__23754);
var vec__23755 = cljs.core.get.call(null,map__23754__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__23755,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__23755,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__23755,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,c__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,a__$1], null)], null);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PVolume$signed_volume$arity$1 = (function (p__23757){
var map__23758 = p__23757;
var map__23758__$1 = ((((!((map__23758 == null)))?((((map__23758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23758):map__23758);
var vec__23759 = cljs.core.get.call(null,map__23758__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__23759,(0),null);
var b = cljs.core.nth.call(null,vec__23759,(1),null);
var c = cljs.core.nth.call(null,vec__23759,(2),null);
var map__23761 = this;
var map__23761__$1 = ((((!((map__23761 == null)))?((((map__23761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23761):map__23761);
var vec__23762 = cljs.core.get.call(null,map__23761__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__23762,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__23762,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__23762,(2),null);
return (thi.ng.geom.core.dot.call(null,a__$1,thi.ng.geom.core.cross.call(null,b__$1,c__$1)) / 6.0);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.apply.call(null,thi.ng.geom.core.utils.point_in_triangle3_QMARK_,p,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 = (function (p__23764,ray){
var map__23765 = p__23764;
var map__23765__$1 = ((((!((map__23765 == null)))?((((map__23765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23765):map__23765);
var vec__23766 = cljs.core.get.call(null,map__23765__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__23766,(0),null);
var b = cljs.core.nth.call(null,vec__23766,(1),null);
var c = cljs.core.nth.call(null,vec__23766,(2),null);
var map__23768 = this;
var map__23768__$1 = ((((!((map__23768 == null)))?((((map__23768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23768):map__23768);
var vec__23769 = cljs.core.get.call(null,map__23768__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__23769,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__23769,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__23769,(2),null);
var vec__23771 = ((cljs.core.map_QMARK_.call(null,ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(ray),new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(ray)], null):ray);
var p = cljs.core.nth.call(null,vec__23771,(0),null);
var dir = cljs.core.nth.call(null,vec__23771,(1),null);
return thi.ng.geom.core.intersect.intersect_ray_triangle3_QMARK_.call(null,p,dir,a__$1,b__$1,c__$1);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$3 = (function (p__23772,p,dir){
var map__23773 = p__23772;
var map__23773__$1 = ((((!((map__23773 == null)))?((((map__23773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23773):map__23773);
var vec__23774 = cljs.core.get.call(null,map__23773__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__23774,(0),null);
var b = cljs.core.nth.call(null,vec__23774,(1),null);
var c = cljs.core.nth.call(null,vec__23774,(2),null);
var map__23776 = this;
var map__23776__$1 = ((((!((map__23776 == null)))?((((map__23776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23776):map__23776);
var vec__23777 = cljs.core.get.call(null,map__23776__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__23777,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__23777,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__23777,(2),null);
return thi.ng.geom.core.intersect.intersect_ray_triangle3_QMARK_.call(null,p,dir,a__$1,b__$1,c__$1);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__23733_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p1__23733_SHARP_,t);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PBoundingSphere$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_sphere.call(null,thi.ng.geom.core.centroid.call(null,___$1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__23730_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__23730_SHARP_,s);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__23731_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__23731_SHARP_,sx,sy);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__23732_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__23732_SHARP_,sx,sy,sz);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(thi.ng.geom.core.utils.scale_size.call(null,s,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PTessellate$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (p__23779){
var map__23780 = p__23779;
var map__23780__$1 = ((((!((map__23780 == null)))?((((map__23780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23780):map__23780);
var vec__23781 = cljs.core.get.call(null,map__23780__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__23781,(0),null);
var b = cljs.core.nth.call(null,vec__23781,(1),null);
var c = cljs.core.nth.call(null,vec__23781,(2),null);
var map__23783 = this;
var map__23783__$1 = ((((!((map__23783 == null)))?((((map__23783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23783):map__23783);
var vec__23784 = cljs.core.get.call(null,map__23783__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__23784,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__23784,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__23784,(2),null);
return ((thi.ng.geom.core.dist.call(null,a__$1,b__$1) + thi.ng.geom.core.dist.call(null,b__$1,c__$1)) + thi.ng.geom.core.dist.call(null,c__$1,a__$1));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_box.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(0),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(2),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PMeshConvert$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.add_face.call(null,(function (){var or__18275__auto__ = new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (p__23786,v){
var map__23787 = p__23786;
var map__23787__$1 = ((((!((map__23787 == null)))?((((map__23787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23787):map__23787);
var vec__23788 = cljs.core.get.call(null,map__23787__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__23788,(0),null);
var b = cljs.core.nth.call(null,vec__23788,(1),null);
var c = cljs.core.nth.call(null,vec__23788,(2),null);
var map__23790 = this;
var map__23790__$1 = ((((!((map__23790 == null)))?((((map__23790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23790):map__23790);
var vec__23791 = cljs.core.get.call(null,map__23790__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__23791,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__23791,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__23791,(2),null);
var pred__23793 = cljs.core._EQ_;
var expr__23794 = v;
if(cljs.core.truth_(pred__23793.call(null,a__$1,expr__23794))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,b__$1], null);
} else {
if(cljs.core.truth_(pred__23793.call(null,b__$1,expr__23794))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,c__$1], null);
} else {
if(cljs.core.truth_(pred__23793.call(null,c__$1,expr__23794))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,a__$1], null);
} else {
return null;
}
}
}
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
if(cljs.core.truth_(cljs.core.set.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1)).call(null,v))){
return (2);
} else {
return (0);
}
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first.call(null,thi.ng.geom.core.utils.closest_point_on_segments.call(null,p,thi.ng.geom.core.edges.call(null,___$1)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.apply.call(null,thi.ng.geom.core.utils.tri_area3,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

//# sourceMappingURL=triangle.js.map