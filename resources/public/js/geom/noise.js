// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.noise');
goog.require('cljs.core');
geom.noise.gradients = cljs.core.vec.call(null,cljs.core.take.call(null,(8),cljs.core.repeatedly.call(null,(function (){
var x = cljs.core.rand.call(null);
var y = cljs.core.rand.call(null);
var mult = (((cljs.core.rand.call(null) > cljs.core.rand.call(null)))?1.0:-1.0);
var mult2 = (((cljs.core.rand.call(null) > cljs.core.rand.call(null)))?1.0:-1.0);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x * mult),(y * mult2)], null);
}))));
geom.noise.get_gradient = (function geom$noise$get_gradient(p__22026){
var vec__22028 = p__22026;
var a = cljs.core.nth.call(null,vec__22028,(0),null);
var b = cljs.core.nth.call(null,vec__22028,(1),null);
var ndx = (cljs.core.mod.call(null,(a + b),(7)) | (0));
return cljs.core.get.call(null,geom.noise.gradients,ndx);
});
geom.noise.get_corners = (function geom$noise$get_corners(x,y){
var nw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - cljs.core.mod.call(null,x,(100))),(y - cljs.core.mod.call(null,y,(100)))], null);
var vec__22030 = nw;
var x__$1 = cljs.core.nth.call(null,vec__22030,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__22030,(1),null);
var ne = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((100) + x__$1),y__$1], null);
var sw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,((100) + y__$1)], null);
var se = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((100) + x__$1),((100) + y__$1)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nw,ne,sw,se], null);
});
geom.noise.dot = (function geom$noise$dot(X,Y){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,X,Y));
});
geom.noise.lerp = (function geom$noise$lerp(t,a,b){
return (a + (t * (b - a)));
});
geom.noise.ease = (function geom$noise$ease(t){
return (((3) * Math.pow(t,(2))) - ((2) * Math.pow(t,(3))));
});
geom.noise.corner_gradients = (function geom$noise$corner_gradients(x,y){
return cljs.core.map.call(null,geom.noise.get_gradient,geom.noise.get_corners.call(null,x,y));
});
geom.noise.corner_to_point_vectors = (function geom$noise$corner_to_point_vectors(x,y){
return cljs.core.map.call(null,(function (p__22033){
var vec__22034 = p__22033;
var cx = cljs.core.nth.call(null,vec__22034,(0),null);
var cy = cljs.core.nth.call(null,vec__22034,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - cx),(y - cy)], null);
}),geom.noise.get_corners.call(null,x,y));
});
geom.noise.influences = (function geom$noise$influences(x,y){
var gs = geom.noise.corner_gradients.call(null,x,y);
var vs = geom.noise.corner_to_point_vectors.call(null,x,y);
return cljs.core.map.call(null,geom.noise.dot,gs,vs);
});
geom.noise.noise = (function geom$noise$noise(x,y){
var rel_x = (x / (100));
var rel_y = (y / (100));
var frac_x = cljs.core.mod.call(null,rel_x,(1));
var frac_y = cljs.core.mod.call(null,rel_y,(1));
var Sx = geom.noise.ease.call(null,frac_x);
var Sy = geom.noise.ease.call(null,frac_y);
var vec__22036 = ((function (rel_x,rel_y,frac_x,frac_y,Sx,Sy){
return (function (){
return geom.noise.influences.call(null,x,y);
});})(rel_x,rel_y,frac_x,frac_y,Sx,Sy))
.call(null);
var nw = cljs.core.nth.call(null,vec__22036,(0),null);
var ne = cljs.core.nth.call(null,vec__22036,(1),null);
var sw = cljs.core.nth.call(null,vec__22036,(2),null);
var se = cljs.core.nth.call(null,vec__22036,(3),null);
var a = geom.noise.lerp.call(null,Sx,nw,ne);
var b = geom.noise.lerp.call(null,Sx,sw,se);
var z = geom.noise.lerp.call(null,Sy,a,b);
return Math.abs((z / (10)));
});

//# sourceMappingURL=noise.js.map