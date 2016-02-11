// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.core.intersect');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.math.core');
thi.ng.geom.core.intersect.sq = (function thi$ng$geom$core$intersect$sq(x){
return (x * x);
});
thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_ = (function thi$ng$geom$core$intersect$intersect_circle_circle_QMARK_(var_args){
var args22534 = [];
var len__19333__auto___22543 = arguments.length;
var i__19334__auto___22544 = (0);
while(true){
if((i__19334__auto___22544 < len__19333__auto___22543)){
args22534.push((arguments[i__19334__auto___22544]));

var G__22545 = (i__19334__auto___22544 + (1));
i__19334__auto___22544 = G__22545;
continue;
} else {
}
break;
}

var G__22536 = args22534.length;
switch (G__22536) {
case 2:
return thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22534.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__22537,p__22538){
var map__22539 = p__22537;
var map__22539__$1 = ((((!((map__22539 == null)))?((((map__22539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22539):map__22539);
var p = cljs.core.get.call(null,map__22539__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r1 = cljs.core.get.call(null,map__22539__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__22540 = p__22538;
var map__22540__$1 = ((((!((map__22540 == null)))?((((map__22540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22540):map__22540);
var q = cljs.core.get.call(null,map__22540__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r2 = cljs.core.get.call(null,map__22540__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.call(null,p,r1,q,r2);
});

thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p,r1,q,r2){
var delta = thi.ng.geom.core._.call(null,q,p);
var d = thi.ng.geom.core.mag.call(null,delta);
if(((d <= (r1 + r2))) && ((d >= thi.ng.math.core.abs.call(null,(r1 - r2))))){
var a = ((((r1 * r1) - (r2 * r2)) + (d * d)) / (2.0 * d));
var invd = (1.0 / d);
var p__$1 = thi.ng.geom.core.madd.call(null,delta,(a * invd),p);
var h = Math.sqrt(((r1 * r1) - (a * a)));
var perp = thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.normal.call(null,delta),(h * invd));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,p__$1,perp),thi.ng.geom.core._.call(null,p__$1,perp)], null);
} else {
return null;
}
});

thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_ = (function thi$ng$geom$core$intersect$intersect_rect_rect_QMARK_(var_args){
var args22547 = [];
var len__19333__auto___22568 = arguments.length;
var i__19334__auto___22569 = (0);
while(true){
if((i__19334__auto___22569 < len__19333__auto___22568)){
args22547.push((arguments[i__19334__auto___22569]));

var G__22570 = (i__19334__auto___22569 + (1));
i__19334__auto___22569 = G__22570;
continue;
} else {
}
break;
}

var G__22549 = args22547.length;
switch (G__22549) {
case 2:
return thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22547.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__22550,p__22551){
var map__22552 = p__22550;
var map__22552__$1 = ((((!((map__22552 == null)))?((((map__22552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22552):map__22552);
var vec__22553 = cljs.core.get.call(null,map__22552__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.call(null,vec__22553,(0),null);
var py = cljs.core.nth.call(null,vec__22553,(1),null);
var vec__22554 = cljs.core.get.call(null,map__22552__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__22554,(0),null);
var h = cljs.core.nth.call(null,vec__22554,(1),null);
var map__22555 = p__22551;
var map__22555__$1 = ((((!((map__22555 == null)))?((((map__22555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22555):map__22555);
var vec__22556 = cljs.core.get.call(null,map__22555__$1,new cljs.core.Keyword(null,"p","p",151049309));
var qx = cljs.core.nth.call(null,vec__22556,(0),null);
var qy = cljs.core.nth.call(null,vec__22556,(1),null);
var vec__22557 = cljs.core.get.call(null,map__22555__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var qw = cljs.core.nth.call(null,vec__22557,(0),null);
var qh = cljs.core.nth.call(null,vec__22557,(1),null);
return !(((px > (qx + qw))) || ((qx > (px + w))) || ((py > (qy + qh))) || ((qy > (py + h))));
});

thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__22560,p__22561,p__22562,p__22563){
var vec__22564 = p__22560;
var px1 = cljs.core.nth.call(null,vec__22564,(0),null);
var py1 = cljs.core.nth.call(null,vec__22564,(1),null);
var vec__22565 = p__22561;
var qx1 = cljs.core.nth.call(null,vec__22565,(0),null);
var qy1 = cljs.core.nth.call(null,vec__22565,(1),null);
var vec__22566 = p__22562;
var px2 = cljs.core.nth.call(null,vec__22566,(0),null);
var py2 = cljs.core.nth.call(null,vec__22566,(1),null);
var vec__22567 = p__22563;
var qx2 = cljs.core.nth.call(null,vec__22567,(0),null);
var qy2 = cljs.core.nth.call(null,vec__22567,(1),null);
return !(((px1 > qx2)) || ((px2 > qx1)) || ((py1 > qy2)) || ((py2 > qy1)));
});

thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_ = (function thi$ng$geom$core$intersect$intersect_rect_circle_QMARK_(var_args){
var args22572 = [];
var len__19333__auto___22587 = arguments.length;
var i__19334__auto___22588 = (0);
while(true){
if((i__19334__auto___22588 < len__19333__auto___22587)){
args22572.push((arguments[i__19334__auto___22588]));

var G__22589 = (i__19334__auto___22588 + (1));
i__19334__auto___22588 = G__22589;
continue;
} else {
}
break;
}

var G__22574 = args22572.length;
switch (G__22574) {
case 2:
return thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22572.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__22575,p__22576){
var map__22577 = p__22575;
var map__22577__$1 = ((((!((map__22577 == null)))?((((map__22577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22577):map__22577);
var p = cljs.core.get.call(null,map__22577__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sz = cljs.core.get.call(null,map__22577__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__22578 = p__22576;
var map__22578__$1 = ((((!((map__22578 == null)))?((((map__22578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22578):map__22578);
var s = cljs.core.get.call(null,map__22578__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.call(null,map__22578__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.call(null,p,thi.ng.geom.core._PLUS_.call(null,p,sz),s,r);
});

thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__22581,p__22582,p__22583,r){
var vec__22584 = p__22581;
var px = cljs.core.nth.call(null,vec__22584,(0),null);
var py = cljs.core.nth.call(null,vec__22584,(1),null);
var vec__22585 = p__22582;
var qx = cljs.core.nth.call(null,vec__22585,(0),null);
var qy = cljs.core.nth.call(null,vec__22585,(1),null);
var vec__22586 = p__22583;
var cx = cljs.core.nth.call(null,vec__22586,(0),null);
var cy = cljs.core.nth.call(null,vec__22586,(1),null);
var ds = (((cx < px))?thi.ng.geom.core.intersect.sq.call(null,(cx - px)):(((cx > qx))?thi.ng.geom.core.intersect.sq.call(null,(cx - qx)):0.0));
var ds__$1 = (ds + (((cy < py))?thi.ng.geom.core.intersect.sq.call(null,(cy - py)):(((cy > qy))?thi.ng.geom.core.intersect.sq.call(null,(cy - qy)):0.0)));
return (ds__$1 <= (r * r));
});

thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_ = (function thi$ng$geom$core$intersect$intersect_aabb_aabb_QMARK_(var_args){
var args22591 = [];
var len__19333__auto___22600 = arguments.length;
var i__19334__auto___22601 = (0);
while(true){
if((i__19334__auto___22601 < len__19333__auto___22600)){
args22591.push((arguments[i__19334__auto___22601]));

var G__22602 = (i__19334__auto___22601 + (1));
i__19334__auto___22601 = G__22602;
continue;
} else {
}
break;
}

var G__22593 = args22591.length;
switch (G__22593) {
case 2:
return thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22591.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__22594,p__22595){
var map__22596 = p__22594;
var map__22596__$1 = ((((!((map__22596 == null)))?((((map__22596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22596):map__22596);
var pa = cljs.core.get.call(null,map__22596__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sa = cljs.core.get.call(null,map__22596__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__22597 = p__22595;
var map__22597__$1 = ((((!((map__22597 == null)))?((((map__22597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22597):map__22597);
var pb = cljs.core.get.call(null,map__22597__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sb = cljs.core.get.call(null,map__22597__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.call(null,pa,pb,thi.ng.geom.core._PLUS_.call(null,pa,sa),thi.ng.geom.core._PLUS_.call(null,pb,sb));
});

thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (pa,pb,qa,qb){
if(((pa.call(null,(0)) <= qb.call(null,(0)))) && ((pb.call(null,(0)) <= qa.call(null,(0))))){
if(((pa.call(null,(1)) <= qb.call(null,(1)))) && ((pb.call(null,(1)) <= qa.call(null,(1))))){
return ((pa.call(null,(2)) <= qb.call(null,(2)))) && ((pb.call(null,(2)) <= qa.call(null,(2))));
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_aabb_sphere_QMARK_(var_args){
var args22604 = [];
var len__19333__auto___22619 = arguments.length;
var i__19334__auto___22620 = (0);
while(true){
if((i__19334__auto___22620 < len__19333__auto___22619)){
args22604.push((arguments[i__19334__auto___22620]));

var G__22621 = (i__19334__auto___22620 + (1));
i__19334__auto___22620 = G__22621;
continue;
} else {
}
break;
}

var G__22606 = args22604.length;
switch (G__22606) {
case 2:
return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22604.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__22607,p__22608){
var map__22609 = p__22607;
var map__22609__$1 = ((((!((map__22609 == null)))?((((map__22609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22609):map__22609);
var p = cljs.core.get.call(null,map__22609__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sz = cljs.core.get.call(null,map__22609__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__22610 = p__22608;
var map__22610__$1 = ((((!((map__22610 == null)))?((((map__22610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22610):map__22610);
var s = cljs.core.get.call(null,map__22610__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.call(null,map__22610__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.call(null,p,thi.ng.geom.core._PLUS_.call(null,p,sz),s,r);
});

thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__22613,p__22614,p__22615,r){
var vec__22616 = p__22613;
var px = cljs.core.nth.call(null,vec__22616,(0),null);
var py = cljs.core.nth.call(null,vec__22616,(1),null);
var pz = cljs.core.nth.call(null,vec__22616,(2),null);
var vec__22617 = p__22614;
var qx = cljs.core.nth.call(null,vec__22617,(0),null);
var qy = cljs.core.nth.call(null,vec__22617,(1),null);
var qz = cljs.core.nth.call(null,vec__22617,(2),null);
var vec__22618 = p__22615;
var cx = cljs.core.nth.call(null,vec__22618,(0),null);
var cy = cljs.core.nth.call(null,vec__22618,(1),null);
var cz = cljs.core.nth.call(null,vec__22618,(2),null);
var ds = (((cx < px))?thi.ng.geom.core.intersect.sq.call(null,(cx - px)):(((cx > qx))?thi.ng.geom.core.intersect.sq.call(null,(cx - qx)):0.0));
var ds__$1 = (ds + (((cy < py))?thi.ng.geom.core.intersect.sq.call(null,(cy - py)):(((cy > qy))?thi.ng.geom.core.intersect.sq.call(null,(cy - qy)):0.0)));
var ds__$2 = (ds__$1 + (((cz < pz))?thi.ng.geom.core.intersect.sq.call(null,(cz - pz)):(((cz > qz))?thi.ng.geom.core.intersect.sq.call(null,(cz - qz)):0.0)));
return (ds__$2 <= (r * r));
});

thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$lang$maxFixedArity = 4;
/**
 * Takes 2 vectors defining an AABB (min-p & size) and a seq of plane
 *   parameters (each element [normal w]). The plane normals must be
 *   pointing *inwards*. Returns :inside, :intersect or :outside
 */
thi.ng.geom.core.intersect.intersect_aabb_frustum_QMARK_ = (function thi$ng$geom$core$intersect$intersect_aabb_frustum_QMARK_(p__22623,size,planes){
var vec__22629 = p__22623;
var px = cljs.core.nth.call(null,vec__22629,(0),null);
var py = cljs.core.nth.call(null,vec__22629,(1),null);
var pz = cljs.core.nth.call(null,vec__22629,(2),null);
var p = vec__22629;
var vec__22630 = thi.ng.geom.core._PLUS_.call(null,p,size);
var qx = cljs.core.nth.call(null,vec__22630,(0),null);
var qy = cljs.core.nth.call(null,vec__22630,(1),null);
var qz = cljs.core.nth.call(null,vec__22630,(2),null);
return cljs.core.reduce.call(null,((function (vec__22630,qx,qy,qz,vec__22629,px,py,pz,p){
return (function (res,p__22631){
var vec__22632 = p__22631;
var vec__22633 = cljs.core.nth.call(null,vec__22632,(0),null);
var nx = cljs.core.nth.call(null,vec__22633,(0),null);
var ny = cljs.core.nth.call(null,vec__22633,(1),null);
var nz = cljs.core.nth.call(null,vec__22633,(2),null);
var w = cljs.core.nth.call(null,vec__22632,(1),null);
var vx = (((nx > (0)))?px:qx);
var vy = (((ny > (0)))?py:qy);
var vz = (((nz > (0)))?pz:qz);
if((((((nx * vx) + (ny * vy)) + (nz * vz)) + w) > (0))){
return cljs.core.reduced.call(null,new cljs.core.Keyword(null,"outside","outside",-13164995));
} else {
var vx__$1 = (((nx > (0)))?qx:px);
var vy__$1 = (((ny > (0)))?qy:py);
var vz__$1 = (((nz > (0)))?qz:pz);
if((((((nx * vx__$1) + (ny * vy__$1)) + (nz * vz__$1)) + w) > (0))){
return new cljs.core.Keyword(null,"intersect","intersect",-2039792392);
} else {
return res;
}
}
});})(vec__22630,qx,qy,qz,vec__22629,px,py,pz,p))
,new cljs.core.Keyword(null,"inside","inside",1972503011),planes);
});
thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_sphere_sphere_QMARK_(var_args){
var args22634 = [];
var len__19333__auto___22643 = arguments.length;
var i__19334__auto___22644 = (0);
while(true){
if((i__19334__auto___22644 < len__19333__auto___22643)){
args22634.push((arguments[i__19334__auto___22644]));

var G__22645 = (i__19334__auto___22644 + (1));
i__19334__auto___22644 = G__22645;
continue;
} else {
}
break;
}

var G__22636 = args22634.length;
switch (G__22636) {
case 2:
return thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22634.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__22637,p__22638){
var map__22639 = p__22637;
var map__22639__$1 = ((((!((map__22639 == null)))?((((map__22639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22639):map__22639);
var p1 = cljs.core.get.call(null,map__22639__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r1 = cljs.core.get.call(null,map__22639__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__22640 = p__22638;
var map__22640__$1 = ((((!((map__22640 == null)))?((((map__22640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22640):map__22640);
var p2 = cljs.core.get.call(null,map__22640__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r2 = cljs.core.get.call(null,map__22640__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.call(null,p1,r1,p2,r2);
});

thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p1,r1,p2,r2){
return (thi.ng.geom.core.dist_squared.call(null,p1,p2) <= ((r1 + r2) * (r1 + r2)));
});

thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray_sphere_QMARK_(var_args){
var args22647 = [];
var len__19333__auto___22656 = arguments.length;
var i__19334__auto___22657 = (0);
while(true){
if((i__19334__auto___22657 < len__19333__auto___22656)){
args22647.push((arguments[i__19334__auto___22657]));

var G__22658 = (i__19334__auto___22657 + (1));
i__19334__auto___22657 = G__22658;
continue;
} else {
}
break;
}

var G__22649 = args22647.length;
switch (G__22649) {
case 2:
return thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22647.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__22650,p__22651){
var map__22652 = p__22650;
var map__22652__$1 = ((((!((map__22652 == null)))?((((map__22652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22652):map__22652);
var rp = cljs.core.get.call(null,map__22652__$1,new cljs.core.Keyword(null,"p","p",151049309));
var dir = cljs.core.get.call(null,map__22652__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var map__22653 = p__22651;
var map__22653__$1 = ((((!((map__22653 == null)))?((((map__22653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22653):map__22653);
var p = cljs.core.get.call(null,map__22653__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.call(null,map__22653__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.call(null,rp,dir,p,r);
});

thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (rp,dir,p,r){
var q = thi.ng.geom.core._.call(null,p,rp);
var ds = thi.ng.geom.core.mag_squared.call(null,q);
var v = (- thi.ng.geom.core.dot.call(null,q,dir));
var d = ((r * r) - (ds - (v * v)));
if((d >= 0.0)){
var d__$1 = Math.sqrt(d);
var a = (v + d__$1);
var b = (v - d__$1);
if(!(((a < (0))) && ((b < (0))))){
if(((a > (0))) && ((b > (0)))){
if((a > b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else {
if((b > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else {
return null;
}
});

thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_ray_triangle3_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray_triangle3_QMARK_(p,d,a,b,c){
var u = thi.ng.geom.core._.call(null,b,a);
var v = thi.ng.geom.core._.call(null,c,a);
var n = thi.ng.geom.core.cross.call(null,u,v);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,thi.ng.geom.core.vector.V3,n))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"degenerate","degenerate",186148125)], null);
} else {
var w0 = thi.ng.geom.core._.call(null,p,a);
var a_SINGLEQUOTE_ = (- thi.ng.geom.core.dot.call(null,n,w0));
var b_SINGLEQUOTE_ = thi.ng.geom.core.dot.call(null,n,d);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,b_SINGLEQUOTE_))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,a_SINGLEQUOTE_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"same-plane","same-plane",-2008485673)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761)], null);
}
} else {
var r = (a_SINGLEQUOTE_ / b_SINGLEQUOTE_);
if((r < 0.0)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761)], null);
} else {
var i = thi.ng.geom.core.madd.call(null,d,r,p);
var vec__22661 = thi.ng.geom.core.utils.triangle_barycentric_coords.call(null,a,b,c,i,u,v);
var u__$1 = cljs.core.nth.call(null,vec__22661,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__22661,(1),null);
var w = cljs.core.nth.call(null,vec__22661,(2),null);
if(cljs.core.truth_((function (){var and__18263__auto__ = (u__$1 >= 0.0);
if(and__18263__auto__){
var and__18263__auto____$1 = (w >= 0.0);
if(and__18263__auto____$1){
return thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,v__$1);
} else {
return and__18263__auto____$1;
}
} else {
return and__18263__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761),new cljs.core.Keyword(null,"p","p",151049309),i], null);
}
}
}
}
});
thi.ng.geom.core.intersect.triaabb_axis_test = (function thi$ng$geom$core$intersect$triaabb_axis_test(pa1,pb1,pa2,pb2,a,b,fa,fb,sa,sb){
var q = ((a * pa1) + (b * pb1));
var r = ((a * pa2) + (b * pb2));
var vec__22663 = (((q < r))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,q], null));
var min = cljs.core.nth.call(null,vec__22663,(0),null);
var max = cljs.core.nth.call(null,vec__22663,(1),null);
var rad = ((fa * sa) + (fb * sb));
if((min <= rad)){
return (max >= (- rad));
} else {
return null;
}
});
thi.ng.geom.core.intersect.triaabb_edge_test_e0 = (function thi$ng$geom$core$intersect$triaabb_edge_test_e0(p__22664,p__22665,p__22666,p__22667,p__22668){
var vec__22675 = p__22664;
var ax = cljs.core.nth.call(null,vec__22675,(0),null);
var ay = cljs.core.nth.call(null,vec__22675,(1),null);
var az = cljs.core.nth.call(null,vec__22675,(2),null);
var a = vec__22675;
var vec__22676 = p__22665;
var bx = cljs.core.nth.call(null,vec__22676,(0),null);
var by = cljs.core.nth.call(null,vec__22676,(1),null);
var bz = cljs.core.nth.call(null,vec__22676,(2),null);
var b = vec__22676;
var vec__22677 = p__22666;
var cx = cljs.core.nth.call(null,vec__22677,(0),null);
var cy = cljs.core.nth.call(null,vec__22677,(1),null);
var cz = cljs.core.nth.call(null,vec__22677,(2),null);
var vec__22678 = p__22667;
var ex = cljs.core.nth.call(null,vec__22678,(0),null);
var ey = cljs.core.nth.call(null,vec__22678,(1),null);
var ez = cljs.core.nth.call(null,vec__22678,(2),null);
var e = vec__22678;
var vec__22679 = p__22668;
var sx = cljs.core.nth.call(null,vec__22679,(0),null);
var sy = cljs.core.nth.call(null,vec__22679,(1),null);
var sz = cljs.core.nth.call(null,vec__22679,(2),null);
var vec__22680 = thi.ng.geom.core.abs.call(null,e);
var fx = cljs.core.nth.call(null,vec__22680,(0),null);
var fy = cljs.core.nth.call(null,vec__22680,(1),null);
var fz = cljs.core.nth.call(null,vec__22680,(2),null);
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_axis_test.call(null,ay,az,cy,cz,ez,(- ey),fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_axis_test.call(null,ax,az,cx,cz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.core.intersect.triaabb_axis_test.call(null,bx,by,cx,cy,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.core.intersect.triaabb_edge_test_e1 = (function thi$ng$geom$core$intersect$triaabb_edge_test_e1(p__22681,p__22682,p__22683,p__22684,p__22685){
var vec__22692 = p__22681;
var ax = cljs.core.nth.call(null,vec__22692,(0),null);
var ay = cljs.core.nth.call(null,vec__22692,(1),null);
var az = cljs.core.nth.call(null,vec__22692,(2),null);
var vec__22693 = p__22682;
var bx = cljs.core.nth.call(null,vec__22693,(0),null);
var by = cljs.core.nth.call(null,vec__22693,(1),null);
var bz = cljs.core.nth.call(null,vec__22693,(2),null);
var b = vec__22693;
var vec__22694 = p__22683;
var cx = cljs.core.nth.call(null,vec__22694,(0),null);
var cy = cljs.core.nth.call(null,vec__22694,(1),null);
var cz = cljs.core.nth.call(null,vec__22694,(2),null);
var c = vec__22694;
var vec__22695 = p__22684;
var ex = cljs.core.nth.call(null,vec__22695,(0),null);
var ey = cljs.core.nth.call(null,vec__22695,(1),null);
var ez = cljs.core.nth.call(null,vec__22695,(2),null);
var e = vec__22695;
var vec__22696 = p__22685;
var sx = cljs.core.nth.call(null,vec__22696,(0),null);
var sy = cljs.core.nth.call(null,vec__22696,(1),null);
var sz = cljs.core.nth.call(null,vec__22696,(2),null);
var vec__22697 = thi.ng.geom.core.abs.call(null,e);
var fx = cljs.core.nth.call(null,vec__22697,(0),null);
var fy = cljs.core.nth.call(null,vec__22697,(1),null);
var fz = cljs.core.nth.call(null,vec__22697,(2),null);
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_axis_test.call(null,ay,az,cy,cz,ez,ey,fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_axis_test.call(null,ax,az,cx,cz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.core.intersect.triaabb_axis_test.call(null,ax,ay,bx,by,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.core.intersect.triaabb_edge_test_e2 = (function thi$ng$geom$core$intersect$triaabb_edge_test_e2(p__22698,p__22699,p__22700,p__22701,p__22702){
var vec__22709 = p__22698;
var ax = cljs.core.nth.call(null,vec__22709,(0),null);
var ay = cljs.core.nth.call(null,vec__22709,(1),null);
var az = cljs.core.nth.call(null,vec__22709,(2),null);
var a = vec__22709;
var vec__22710 = p__22699;
var bx = cljs.core.nth.call(null,vec__22710,(0),null);
var by = cljs.core.nth.call(null,vec__22710,(1),null);
var bz = cljs.core.nth.call(null,vec__22710,(2),null);
var vec__22711 = p__22700;
var cx = cljs.core.nth.call(null,vec__22711,(0),null);
var cy = cljs.core.nth.call(null,vec__22711,(1),null);
var cz = cljs.core.nth.call(null,vec__22711,(2),null);
var c = vec__22711;
var vec__22712 = p__22701;
var ex = cljs.core.nth.call(null,vec__22712,(0),null);
var ey = cljs.core.nth.call(null,vec__22712,(1),null);
var ez = cljs.core.nth.call(null,vec__22712,(2),null);
var e = vec__22712;
var vec__22713 = p__22702;
var sx = cljs.core.nth.call(null,vec__22713,(0),null);
var sy = cljs.core.nth.call(null,vec__22713,(1),null);
var sz = cljs.core.nth.call(null,vec__22713,(2),null);
var vec__22714 = thi.ng.geom.core.abs.call(null,e);
var fx = cljs.core.nth.call(null,vec__22714,(0),null);
var fy = cljs.core.nth.call(null,vec__22714,(1),null);
var fz = cljs.core.nth.call(null,vec__22714,(2),null);
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_axis_test.call(null,ay,az,by,bz,ez,(- ey),fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_axis_test.call(null,ax,az,bx,bz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.core.intersect.triaabb_axis_test.call(null,bx,by,cx,cy,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.core.intersect.triaabb_edge_minmax = (function thi$ng$geom$core$intersect$triaabb_edge_minmax(a,b,c,s){
if(((function (){var x__18613__auto__ = (function (){var x__18613__auto__ = a;
var y__18614__auto__ = b;
return ((x__18613__auto__ < y__18614__auto__) ? x__18613__auto__ : y__18614__auto__);
})();
var y__18614__auto__ = c;
return ((x__18613__auto__ < y__18614__auto__) ? x__18613__auto__ : y__18614__auto__);
})() < s)){
return ((function (){var x__18606__auto__ = (function (){var x__18606__auto__ = a;
var y__18607__auto__ = b;
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})();
var y__18607__auto__ = c;
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})() >= (- s));
} else {
return null;
}
});
thi.ng.geom.core.intersect.intersect_triangle3_aabb_QMARK_ = (function thi$ng$geom$core$intersect$intersect_triangle3_aabb_QMARK_(a,b,c,p,s){
var vec__22719 = thi.ng.geom.core._STAR_.call(null,s,0.5);
var sx = cljs.core.nth.call(null,vec__22719,(0),null);
var sy = cljs.core.nth.call(null,vec__22719,(1),null);
var sz = cljs.core.nth.call(null,vec__22719,(2),null);
var s__$1 = vec__22719;
var p__$1 = thi.ng.geom.core._PLUS_.call(null,p,s__$1);
var vec__22720 = thi.ng.geom.core._.call(null,a,p__$1);
var ax = cljs.core.nth.call(null,vec__22720,(0),null);
var ay = cljs.core.nth.call(null,vec__22720,(1),null);
var az = cljs.core.nth.call(null,vec__22720,(2),null);
var a__$1 = vec__22720;
var vec__22721 = thi.ng.geom.core._.call(null,b,p__$1);
var bx = cljs.core.nth.call(null,vec__22721,(0),null);
var by = cljs.core.nth.call(null,vec__22721,(1),null);
var bz = cljs.core.nth.call(null,vec__22721,(2),null);
var b__$1 = vec__22721;
var vec__22722 = thi.ng.geom.core._.call(null,c,p__$1);
var cx = cljs.core.nth.call(null,vec__22722,(0),null);
var cy = cljs.core.nth.call(null,vec__22722,(1),null);
var cz = cljs.core.nth.call(null,vec__22722,(2),null);
var c__$1 = vec__22722;
var e0 = thi.ng.geom.core._.call(null,b__$1,a__$1);
var e1 = thi.ng.geom.core._.call(null,c__$1,b__$1);
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_edge_test_e0.call(null,a__$1,b__$1,c__$1,e0,s__$1))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_edge_test_e1.call(null,a__$1,b__$1,c__$1,e1,s__$1))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_edge_test_e2.call(null,a__$1,b__$1,c__$1,thi.ng.geom.core._.call(null,a__$1,c__$1),s__$1))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_edge_minmax.call(null,ax,bx,cx,sx))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_edge_minmax.call(null,ay,by,cy,sy))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_edge_minmax.call(null,az,bz,cz,sz))){
return thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.call(null,a__$1,thi.ng.geom.core.cross.call(null,e0,e1),s__$1);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.core.intersect.intersect_line2_line2_QMARK_ = (function thi$ng$geom$core$intersect$intersect_line2_line2_QMARK_(p__22723,p__22724,p__22725,p__22726){
var vec__22731 = p__22723;
var px1 = cljs.core.nth.call(null,vec__22731,(0),null);
var py1 = cljs.core.nth.call(null,vec__22731,(1),null);
var p = vec__22731;
var vec__22732 = p__22724;
var qx1 = cljs.core.nth.call(null,vec__22732,(0),null);
var qy1 = cljs.core.nth.call(null,vec__22732,(1),null);
var q = vec__22732;
var vec__22733 = p__22725;
var px2 = cljs.core.nth.call(null,vec__22733,(0),null);
var py2 = cljs.core.nth.call(null,vec__22733,(1),null);
var lp = vec__22733;
var vec__22734 = p__22726;
var qx2 = cljs.core.nth.call(null,vec__22734,(0),null);
var qy2 = cljs.core.nth.call(null,vec__22734,(1),null);
var lq = vec__22734;
var dx1 = (qx1 - px1);
var dy1 = (qy1 - py1);
var dx2 = (qx2 - px2);
var dy2 = (qy2 - py2);
var dx12 = (px1 - px2);
var dy12 = (py1 - py2);
var denom = ((dy2 * dx1) - (dx2 * dy1));
var na = ((dx2 * dy12) - (dy2 * dx12));
var nb = ((dx1 * dy12) - (dy1 * dx12));
if((denom === (0))){
if(((na === (0))) && ((nb === (0)))){
var ip = thi.ng.geom.core.utils.closest_point_on_segment.call(null,lp,p,q);
var iq = thi.ng.geom.core.utils.closest_point_on_segment.call(null,lq,p,q);
if(cljs.core.truth_((function (){var or__18275__auto__ = thi.ng.math.core.delta_EQ_.call(null,ip,lp);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.math.core.delta_EQ_.call(null,iq,lq);
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident","coincident",-473799301),new cljs.core.Keyword(null,"p","p",151049309),ip,new cljs.core.Keyword(null,"q","q",689001697),iq], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident-no-intersect","coincident-no-intersect",1935247952),new cljs.core.Keyword(null,"p","p",151049309),ip,new cljs.core.Keyword(null,"q","q",689001697),iq], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null);
}
} else {
var ua = (na / denom);
var ub = (nb / denom);
var i = thi.ng.geom.core.mix.call(null,p,q,ua);
if(((ua >= 0.0)) && ((ua <= 1.0)) && ((ub >= 0.0)) && ((ub <= 1.0))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i,new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect-outside","intersect-outside",-337610558),new cljs.core.Keyword(null,"p","p",151049309),i,new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
}
}
});
thi.ng.geom.core.intersect.intersect_line2_edges_QMARK_ = (function thi$ng$geom$core$intersect$intersect_line2_edges_QMARK_(rp,rq,edges){
return cljs.core.first.call(null,cljs.core.transduce.call(null,cljs.core.comp.call(null,cljs.core.map.call(null,(function (p__22738){
var vec__22739 = p__22738;
var p = cljs.core.nth.call(null,vec__22739,(0),null);
var q = cljs.core.nth.call(null,vec__22739,(1),null);
return thi.ng.geom.core.intersect.intersect_line2_line2_QMARK_.call(null,rp,rq,p,q);
})),cljs.core.filter.call(null,(function (p1__22735_SHARP_){
var and__18263__auto__ = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(p1__22735_SHARP_);
if(cljs.core.truth_(and__18263__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intersect","intersect",-2039792392),null,new cljs.core.Keyword(null,"coincident","coincident",-473799301),null], null), null).call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__22735_SHARP_));
} else {
return and__18263__auto__;
}
}))),cljs.core.completing.call(null,(function (closest,isec){
var p = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(isec);
var d = thi.ng.geom.core.dist_squared.call(null,rp,p);
if((d < closest.call(null,(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,d], null);
} else {
return closest;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.INF_PLUS_], null),edges));
});
thi.ng.geom.core.intersect.intersect_ray2_edges_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray2_edges_QMARK_(rp,rd,edges){
return thi.ng.geom.core.intersect.intersect_line2_edges_QMARK_.call(null,rp,thi.ng.geom.core.madd.call(null,rd,1.0E29,rp),edges);
});
thi.ng.geom.core.intersect.intersect_plane_plane_QMARK_ = (function thi$ng$geom$core$intersect$intersect_plane_plane_QMARK_(an,aw,bn,bw){
if(cljs.core.truth_((function (){var or__18275__auto__ = thi.ng.math.core.delta_EQ_.call(null,aw,bw,thi.ng.math.core._STAR_eps_STAR_);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.math.core.delta_EQ_.call(null,an,bn,thi.ng.math.core._STAR_eps_STAR_);
}
})())){
return null;
} else {
var od = thi.ng.geom.core.dot.call(null,an,bn);
var det = ((1) / ((od * od) + (-1)));
var u = (((bw * od) + aw) * det);
var v = (((aw * od) + bw) * det);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),thi.ng.geom.core.madd.call(null,an,u,thi.ng.geom.core._STAR_.call(null,bn,v)),new cljs.core.Keyword(null,"dir","dir",1734754661),thi.ng.geom.core.utils.ortho_normal.call(null,an,bn)], null);
}
});
thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray_plane_QMARK_(rp,dir,n,w){
var dp = thi.ng.geom.core.dot.call(null,n,dir);
var dn = (thi.ng.geom.core.dot.call(null,n,rp) + w);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,dp,thi.ng.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((dn === (0)))?new cljs.core.Keyword(null,"on-plane","on-plane",-1177899984):new cljs.core.Keyword(null,"parallel","parallel",-1863607128))], null);
} else {
var du = (- (dn / dp));
var i = thi.ng.geom.core.madd.call(null,dir,du,rp);
if(cljs.core.truth_(thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,du))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect-outside","intersect-outside",-337610558),new cljs.core.Keyword(null,"p","p",151049309),i], null);
}
}
});
/**
 * Takes a point & normal defining a plane and 2 vectors defining an
 *   AABB (min-p & size). Returns true if plane intersects box.
 */
thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_ = (function thi$ng$geom$core$intersect$intersect_plane_aabb_QMARK_(var_args){
var args22740 = [];
var len__19333__auto___22752 = arguments.length;
var i__19334__auto___22753 = (0);
while(true){
if((i__19334__auto___22753 < len__19333__auto___22752)){
args22740.push((arguments[i__19334__auto___22753]));

var G__22754 = (i__19334__auto___22753 + (1));
i__19334__auto___22753 = G__22754;
continue;
} else {
}
break;
}

var G__22742 = args22740.length;
switch (G__22742) {
case 4:
return thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22740.length)].join('')));

}
});

thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p,n,q,s){
var s2 = thi.ng.geom.core._STAR_.call(null,s,0.5);
return thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.call(null,thi.ng.geom.core._.call(null,p,thi.ng.geom.core._PLUS_.call(null,q,s2)),n,s2);
});

thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (p__22743,p__22744,p__22745){
var vec__22746 = p__22743;
var px = cljs.core.nth.call(null,vec__22746,(0),null);
var py = cljs.core.nth.call(null,vec__22746,(1),null);
var pz = cljs.core.nth.call(null,vec__22746,(2),null);
var vec__22747 = p__22744;
var nx = cljs.core.nth.call(null,vec__22747,(0),null);
var ny = cljs.core.nth.call(null,vec__22747,(1),null);
var nz = cljs.core.nth.call(null,vec__22747,(2),null);
var n = vec__22747;
var vec__22748 = p__22745;
var sx = cljs.core.nth.call(null,vec__22748,(0),null);
var sy = cljs.core.nth.call(null,vec__22748,(1),null);
var sz = cljs.core.nth.call(null,vec__22748,(2),null);
var vec__22749 = (((nx > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sx) - px),(sx - px)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx - px),((- sx) - px)], null));
var vx1 = cljs.core.nth.call(null,vec__22749,(0),null);
var vx2 = cljs.core.nth.call(null,vec__22749,(1),null);
var vec__22750 = (((ny > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sy) - py),(sy - py)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sy - py),((- sy) - py)], null));
var vy1 = cljs.core.nth.call(null,vec__22750,(0),null);
var vy2 = cljs.core.nth.call(null,vec__22750,(1),null);
var vec__22751 = (((nz > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sz) - pz),(sz - pz)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sz - pz),((- sz) - pz)], null));
var vz1 = cljs.core.nth.call(null,vec__22751,(0),null);
var vz2 = cljs.core.nth.call(null,vec__22751,(1),null);
if(((((nx * vx1) + (ny * vy1)) + (nz * vz1)) <= 0.0)){
return ((((nx * vx2) + (ny * vy2)) + (nz * vz2)) >= 0.0);
} else {
return null;
}
});

thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.intersect.intersect_plane_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_plane_sphere_QMARK_(n,w,p,r){
return (thi.ng.math.core.abs.call(null,(thi.ng.geom.core.dot.call(null,n,p) + w)) <= r);
});
/**
 * Computes sum((a-b)*c), where a, b, c are 3D vectors.
 */
thi.ng.geom.core.intersect.subdot = (function thi$ng$geom$core$intersect$subdot(a,b,c){
var d = thi.ng.geom.core.subm.call(null,a,b,c);
return ((d.call(null,(0)) + d.call(null,(1))) + d.call(null,(2)));
});
/**
 * Takes a transformation fn and the 4 delta vectors between tetra1/tetra2.
 *  Returns 2-elem vec of [bitmask affine-coords].
 */
thi.ng.geom.core.intersect.face_a = (function thi$ng$geom$core$intersect$face_a(f,deltas){
var aff = cljs.core.mapv.call(null,f,deltas);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((((aff.call(null,(0)) > (0)))?(1):(0)) | (((aff.call(null,(1)) > (0)))?(2):(0))) | (((aff.call(null,(2)) > (0)))?(4):(0))) | (((aff.call(null,(3)) > (0)))?(8):(0))),aff], null);
});
/**
 * Takes the 4 delta vectors between tetra2/tetra1 and a normal.
 *  Returns true if all dot products are positive.
 */
thi.ng.geom.core.intersect.face_b1_QMARK_ = (function thi$ng$geom$core$intersect$face_b1_QMARK_(deltas,n){
return cljs.core.every_QMARK_.call(null,(function (p1__22756_SHARP_){
return (thi.ng.geom.core.dot.call(null,p1__22756_SHARP_,n) > (0));
}),deltas);
});
/**
 * Like face-b1?, but optimized for last face of tetrahedron.
 */
thi.ng.geom.core.intersect.face_b2_QMARK_ = (function thi$ng$geom$core$intersect$face_b2_QMARK_(verts,refv,n){
return cljs.core.every_QMARK_.call(null,(function (p1__22757_SHARP_){
return (thi.ng.geom.core.intersect.subdot.call(null,p1__22757_SHARP_,refv,n) > (0));
}),verts);
});
/**
 * Takes 2 bitmasks and edge flags, returns true if there's a
 *  separating plane between the faces shared by that edge.
 */
thi.ng.geom.core.intersect.edge_a = (function thi$ng$geom$core$intersect$edge_a(ma,mb,ea,eb){
var xa = (ma & (ma ^ mb));
var xb = (mb & (xa ^ mb));
var edge = ((function (xa,xb){
return (function (a,b,i,j){
var cp = ((ea.call(null,i) * eb.call(null,j)) - (ea.call(null,j) * eb.call(null,i)));
return (((cp > (0))) && (((xa | a) > (0))) && (((xb | b) > (0)))) || (((cp < (0))) && (((xa | b) > (0))) && (((xb | a) > (0))));
});})(xa,xb))
;
return cljs.core.not.call(null,(function (){var or__18275__auto__ = cljs.core.not_EQ_.call(null,(15),(ma | mb));
if(or__18275__auto__){
return or__18275__auto__;
} else {
var or__18275__auto____$1 = edge.call(null,(1),(2),(1),(0));
if(cljs.core.truth_(or__18275__auto____$1)){
return or__18275__auto____$1;
} else {
var or__18275__auto____$2 = edge.call(null,(1),(4),(2),(0));
if(cljs.core.truth_(or__18275__auto____$2)){
return or__18275__auto____$2;
} else {
var or__18275__auto____$3 = edge.call(null,(1),(8),(3),(0));
if(cljs.core.truth_(or__18275__auto____$3)){
return or__18275__auto____$3;
} else {
var or__18275__auto____$4 = edge.call(null,(2),(4),(2),(1));
if(cljs.core.truth_(or__18275__auto____$4)){
return or__18275__auto____$4;
} else {
var or__18275__auto____$5 = edge.call(null,(2),(8),(3),(1));
if(cljs.core.truth_(or__18275__auto____$5)){
return or__18275__auto____$5;
} else {
return edge.call(null,(4),(8),(3),(2));
}
}
}
}
}
}
})());
});
/**
 * Lazy edge evaluation. Takes a vector of edges, vector of edge
 *  points and an edge id. Looks up edge for given id and if not yet
 *  present constructs it. Returns 2-elem vector of [edges edge].
 */
thi.ng.geom.core.intersect.get_edge = (function thi$ng$geom$core$intersect$get_edge(edges,epoints,id){
var e = edges.call(null,id);
if(cljs.core.truth_(e)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges,e], null);
} else {
var ep = epoints.call(null,id);
var e__$1 = thi.ng.geom.core._.call(null,ep.call(null,(0)),ep.call(null,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,edges,id,e__$1),e__$1], null);
}
});
/**
 * Takes the 4 delta vectors between the two tetras, edge definitions
 *  of the 1st tetra, vertices of the 2nd, a reference point of the 1st
 *  and a seq of specs, each encoding a specific check (either calls to
 *  face-a* or edge-a). Returns vector of bitmasks or nil if fail early.
 */
thi.ng.geom.core.intersect.check_faces_a = (function thi$ng$geom$core$intersect$check_faces_a(deltas,epoints,verts,p,specs){
var masks = cljs.core.PersistentVector.EMPTY;
var affine = cljs.core.PersistentVector.EMPTY;
var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);
var s = specs;
while(true){
if(cljs.core.truth_(s)){
var vec__22764 = cljs.core.first.call(null,s);
var f = cljs.core.nth.call(null,vec__22764,(0),null);
var a = cljs.core.nth.call(null,vec__22764,(1),null);
var b = cljs.core.nth.call(null,vec__22764,(2),null);
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),f)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f*","f*",-689873734),f))){
var vec__22765 = thi.ng.geom.core.intersect.get_edge.call(null,edges,epoints,a);
var edges__$1 = cljs.core.nth.call(null,vec__22765,(0),null);
var ea = cljs.core.nth.call(null,vec__22765,(1),null);
var vec__22766 = thi.ng.geom.core.intersect.get_edge.call(null,edges__$1,epoints,b);
var edges__$2 = cljs.core.nth.call(null,vec__22766,(0),null);
var eb = cljs.core.nth.call(null,vec__22766,(1),null);
var n = thi.ng.geom.core.cross.call(null,ea,eb);
var vec__22767 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),f))?thi.ng.geom.core.intersect.face_a.call(null,((function (masks,affine,edges,s,vec__22765,edges__$1,ea,vec__22766,edges__$2,eb,n,vec__22764,f,a,b){
return (function (p1__22758_SHARP_){
return thi.ng.geom.core.dot.call(null,p1__22758_SHARP_,n);
});})(masks,affine,edges,s,vec__22765,edges__$1,ea,vec__22766,edges__$2,eb,n,vec__22764,f,a,b))
,deltas):thi.ng.geom.core.intersect.face_a.call(null,((function (masks,affine,edges,s,vec__22765,edges__$1,ea,vec__22766,edges__$2,eb,n,vec__22764,f,a,b){
return (function (p1__22759_SHARP_){
return thi.ng.geom.core.intersect.subdot.call(null,p1__22759_SHARP_,p,n);
});})(masks,affine,edges,s,vec__22765,edges__$1,ea,vec__22766,edges__$2,eb,n,vec__22764,f,a,b))
,verts));
var m = cljs.core.nth.call(null,vec__22767,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__22767,(1),null);
if((m < (15))){
var G__22768 = cljs.core.conj.call(null,masks,m);
var G__22769 = cljs.core.conj.call(null,affine,a__$1);
var G__22770 = edges__$2;
var G__22771 = cljs.core.next.call(null,s);
masks = G__22768;
affine = G__22769;
edges = G__22770;
s = G__22771;
continue;
} else {
return null;
}
} else {
if(cljs.core.not.call(null,thi.ng.geom.core.intersect.edge_a.call(null,masks.call(null,a),masks.call(null,b),affine.call(null,a),affine.call(null,b)))){
var G__22772 = masks;
var G__22773 = affine;
var G__22774 = edges;
var G__22775 = cljs.core.next.call(null,s);
masks = G__22772;
affine = G__22773;
edges = G__22774;
s = G__22775;
continue;
} else {
return null;
}
}
} else {
return masks;
}
break;
}
});
/**
 * Much like check-faces-a, but for 2nd tetra and specs encoding calls to face-b1/2?.
 *  Returns true if tetras do intersect.
 */
thi.ng.geom.core.intersect.check_faces_b = (function thi$ng$geom$core$intersect$check_faces_b(deltas,epoints,verts,p,specs){
var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);
var s = specs;
while(true){
if(cljs.core.truth_(s)){
var vec__22779 = cljs.core.first.call(null,s);
var f = cljs.core.nth.call(null,vec__22779,(0),null);
var a = cljs.core.nth.call(null,vec__22779,(1),null);
var b = cljs.core.nth.call(null,vec__22779,(2),null);
var vec__22780 = thi.ng.geom.core.intersect.get_edge.call(null,edges,epoints,a);
var edges__$1 = cljs.core.nth.call(null,vec__22780,(0),null);
var ea = cljs.core.nth.call(null,vec__22780,(1),null);
var vec__22781 = thi.ng.geom.core.intersect.get_edge.call(null,edges__$1,epoints,b);
var edges__$2 = cljs.core.nth.call(null,vec__22781,(0),null);
var eb = cljs.core.nth.call(null,vec__22781,(1),null);
if(cljs.core.not.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),f))?thi.ng.geom.core.intersect.face_b1_QMARK_.call(null,deltas,thi.ng.geom.core.cross.call(null,ea,eb)):thi.ng.geom.core.intersect.face_b2_QMARK_.call(null,verts,p,thi.ng.geom.core.cross.call(null,ea,eb))))){
var G__22782 = edges__$2;
var G__22783 = cljs.core.next.call(null,s);
edges = G__22782;
s = G__22783;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
});
/**
 * Takes 2 seqs of 4 3D points, each defining a tetrahedron. Returns
 *  true if they intersect. Orientation of points is irrelevant (unlike
 *  in the original algorithm this implementation is based on).
 */
thi.ng.geom.core.intersect.intersect_tetrahedra_QMARK_ = (function thi$ng$geom$core$intersect$intersect_tetrahedra_QMARK_(p__22786,p__22787){
var vec__22790 = p__22786;
var pa = cljs.core.nth.call(null,vec__22790,(0),null);
var pb = cljs.core.nth.call(null,vec__22790,(1),null);
var pc = cljs.core.nth.call(null,vec__22790,(2),null);
var pd = cljs.core.nth.call(null,vec__22790,(3),null);
var p = vec__22790;
var vec__22791 = p__22787;
var qa = cljs.core.nth.call(null,vec__22791,(0),null);
var qb = cljs.core.nth.call(null,vec__22791,(1),null);
var qc = cljs.core.nth.call(null,vec__22791,(2),null);
var qd = cljs.core.nth.call(null,vec__22791,(3),null);
var q = vec__22791;
var masks = thi.ng.geom.core.intersect.check_faces_a.call(null,cljs.core.map.call(null,((function (vec__22790,pa,pb,pc,pd,p,vec__22791,qa,qb,qc,qd,q){
return (function (p1__22784_SHARP_){
return thi.ng.geom.core._.call(null,p1__22784_SHARP_,pa);
});})(vec__22790,pa,pb,pc,pd,p,vec__22791,qa,qb,qc,qd,q))
,q),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pb,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pb], null)], null),q,pb,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f*","f*",-689873734),(4),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(1),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(2),(3)], null)], null));
if(cljs.core.truth_(masks)){
var or__18275__auto__ = cljs.core.not_EQ_.call(null,(15),cljs.core.reduce.call(null,cljs.core.bit_or,masks));
if(or__18275__auto__){
return or__18275__auto__;
} else {
return thi.ng.geom.core.intersect.check_faces_b.call(null,cljs.core.map.call(null,((function (or__18275__auto__,masks,vec__22790,pa,pb,pc,pd,p,vec__22791,qa,qb,qc,qd,q){
return (function (p1__22785_SHARP_){
return thi.ng.geom.core._.call(null,p1__22785_SHARP_,qa);
});})(or__18275__auto__,masks,vec__22790,pa,pb,pc,pd,p,vec__22791,qa,qb,qc,qd,q))
,p),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qb,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qb], null)], null),p,qb,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f*","f*",-689873734),(4),(3)], null)], null));
}
} else {
return null;
}
});

//# sourceMappingURL=intersect.js.map