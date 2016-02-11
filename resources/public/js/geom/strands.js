// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.strands');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.matrix');
goog.require('thi.ng.geom.physics.core');
goog.require('thi.ng.domus.core');
goog.require('thi.ng.geom.webgl.animator');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.spatialtree');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.svg.core');
goog.require('thi.ng.geom.circle');
/**
 * Takes a 2d or 3d attractor position, a particle and attractor
 *   params (squared radius, strength, time delta). If particle is within
 *   attraction radius, applies proportional strength force to particle.
 *   If strength is negative, particle will be repelled.
 */
geom.strands.attract_BANG_ = (function geom$strands$attract_BANG_(p,q,rsq,strength,delta){
var d = thi.ng.geom.core._.call(null,p,thi.ng.geom.physics.core.position.call(null,q));
var l = (thi.ng.geom.core.mag_squared.call(null,d) + 1.0E-6);
if((l < rsq)){
return thi.ng.geom.physics.core.add_force.call(null,q,thi.ng.geom.core._STAR_.call(null,d,(((1.0 - (l / rsq)) * (strength * delta)) / Math.sqrt(l))));
} else {
return null;
}
});
/**
 * Takes a mutable quadtree or octree, an attraction radius and strength.
 *   Returns a function which will be applied as behavior to all
 *   particles to create a force field around each. The spatial tree is
 *   used to limit k-neighbor lookups to only particles within the given
 *   radius around each particle.
 */
geom.strands.accelerated_force_field = (function geom$strands$accelerated_force_field(accel,r,strength){
var rsq = (r * r);
return ((function (rsq){
return (function (p,delta){
var p_SINGLEQUOTE_ = thi.ng.geom.physics.core.position.call(null,p);
var neighbors = thi.ng.geom.spatialtree.select_with_circle.call(null,accel,p_SINGLEQUOTE_,r);
while(true){
var temp__4657__auto__ = cljs.core.first.call(null,neighbors);
if(cljs.core.truth_(temp__4657__auto__)){
var n = temp__4657__auto__;
if(!(cljs.core._EQ_.call(null,p,n))){
geom.strands.attract_BANG_.call(null,p_SINGLEQUOTE_,n,rsq,strength,delta);
} else {
}

var G__32877 = cljs.core.next.call(null,neighbors);
neighbors = G__32877;
continue;
} else {
return null;
}
break;
}
});
;})(rsq))
});
/**
 * Takes a mutable quadtree or octree and returns a function to be
 *   used as simulation listener. When called, updates the tree to
 *   reflect current positions of all particles in the physics sim.
 */
geom.strands.update_accelerator = (function geom$strands$update_accelerator(accel){
return (function (physics,_){
return cljs.core.reduce.call(null,(function (p1__32878_SHARP_,p2__32879_SHARP_){
return thi.ng.geom.core.add_point.call(null,p1__32878_SHARP_,thi.ng.geom.physics.core.position.call(null,p2__32879_SHARP_),p2__32879_SHARP_);
}),thi.ng.geom.core.clear_BANG_.call(null,accel),new cljs.core.Keyword(null,"particles","particles",801881788).cljs$core$IFn$_invoke$arity$1(physics));
});
});
/**
 * Creates a strand of spring-connected 2d particles in a zigzag order
 *   along the Y axis. The first arg defines the total number of
 *   particles in the strand, the second how many particles per row. The
 *   last arg defines the 2d start position. Returns 2-elem vector
 *   of [particles springs].
 */
geom.strands.make_strand = (function geom$strands$make_strand(n,fold,offset){
var particles = cljs.core.map_indexed.call(null,(function (i,p){
var o = (i * fold);
return cljs.core.map.call(null,((function (o){
return (function (p1__32880_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,offset,(p1__32880_SHARP_ - o),i);
});})(o))
,((cljs.core.odd_QMARK_.call(null,i))?cljs.core.reverse.call(null,p):p));
}),cljs.core.partition_all.call(null,fold,cljs.core.range.call(null,n)));
var particles__$1 = cljs.core.mapv.call(null,thi.ng.geom.physics.core.particle,cljs.core.mapcat.call(null,cljs.core.identity,particles));
var springs = cljs.core.map.call(null,((function (particles,particles__$1){
return (function (p__32883){
var vec__32884 = p__32883;
var a = cljs.core.nth.call(null,vec__32884,(0),null);
var b = cljs.core.nth.call(null,vec__32884,(1),null);
return thi.ng.geom.physics.core.spring.call(null,a,b,(1),(1));
});})(particles,particles__$1))
,cljs.core.partition.call(null,(2),(1),particles__$1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [particles__$1,springs], null);
});
/**
 * Takes a state map and integer defining number of particles per
 *   strand. First creates two strands, each with its own circular
 *   constraint. Then defines full VerletPhysics setup with gravity and
 *   force field behaviors. Also attaches a simulation listener to keep
 *   particle quadtree in sync. Returns updated state map w/ physics
 *   related data injected.
 */
geom.strands.init_physics = (function geom$strands$init_physics(state,n){
var vec__32895 = geom.strands.make_strand.call(null,n,(6),thi.ng.geom.core.vector.vec2.call(null,(7),(2)));
var p1 = cljs.core.nth.call(null,vec__32895,(0),null);
var s1 = cljs.core.nth.call(null,vec__32895,(1),null);
var vec__32896 = geom.strands.make_strand.call(null,n,(6),thi.ng.geom.core.vector.vec2.call(null,(12),(2)));
var p2 = cljs.core.nth.call(null,vec__32896,(0),null);
var s2 = cljs.core.nth.call(null,vec__32896,(1),null);
var c1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"c","c",-1763192079),thi.ng.geom.physics.core.shape_constraint_inside.call(null,thi.ng.geom.circle.circle.call(null,thi.ng.geom.core.vector.vec2.call(null,(10),(10)),(9)))], null);
var c2 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"c","c",-1763192079),thi.ng.geom.physics.core.shape_constraint_inside.call(null,thi.ng.geom.circle.circle.call(null,thi.ng.geom.core.vector.vec2.call(null,(17),(10)),(9)))], null);
var accel = thi.ng.geom.spatialtree.quadtree.call(null,(0),(0),(26));
var seq__32897_32905 = cljs.core.seq.call(null,p1);
var chunk__32898_32906 = null;
var count__32899_32907 = (0);
var i__32900_32908 = (0);
while(true){
if((i__32900_32908 < count__32899_32907)){
var p_32909 = cljs.core._nth.call(null,chunk__32898_32906,i__32900_32908);
thi.ng.geom.physics.core.add_constraints.call(null,p_32909,c1);

var G__32910 = seq__32897_32905;
var G__32911 = chunk__32898_32906;
var G__32912 = count__32899_32907;
var G__32913 = (i__32900_32908 + (1));
seq__32897_32905 = G__32910;
chunk__32898_32906 = G__32911;
count__32899_32907 = G__32912;
i__32900_32908 = G__32913;
continue;
} else {
var temp__4657__auto___32914 = cljs.core.seq.call(null,seq__32897_32905);
if(temp__4657__auto___32914){
var seq__32897_32915__$1 = temp__4657__auto___32914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32897_32915__$1)){
var c__19078__auto___32916 = cljs.core.chunk_first.call(null,seq__32897_32915__$1);
var G__32917 = cljs.core.chunk_rest.call(null,seq__32897_32915__$1);
var G__32918 = c__19078__auto___32916;
var G__32919 = cljs.core.count.call(null,c__19078__auto___32916);
var G__32920 = (0);
seq__32897_32905 = G__32917;
chunk__32898_32906 = G__32918;
count__32899_32907 = G__32919;
i__32900_32908 = G__32920;
continue;
} else {
var p_32921 = cljs.core.first.call(null,seq__32897_32915__$1);
thi.ng.geom.physics.core.add_constraints.call(null,p_32921,c1);

var G__32922 = cljs.core.next.call(null,seq__32897_32915__$1);
var G__32923 = null;
var G__32924 = (0);
var G__32925 = (0);
seq__32897_32905 = G__32922;
chunk__32898_32906 = G__32923;
count__32899_32907 = G__32924;
i__32900_32908 = G__32925;
continue;
}
} else {
}
}
break;
}

var seq__32901_32926 = cljs.core.seq.call(null,p2);
var chunk__32902_32927 = null;
var count__32903_32928 = (0);
var i__32904_32929 = (0);
while(true){
if((i__32904_32929 < count__32903_32928)){
var p_32930 = cljs.core._nth.call(null,chunk__32902_32927,i__32904_32929);
thi.ng.geom.physics.core.add_constraints.call(null,p_32930,c2);

var G__32931 = seq__32901_32926;
var G__32932 = chunk__32902_32927;
var G__32933 = count__32903_32928;
var G__32934 = (i__32904_32929 + (1));
seq__32901_32926 = G__32931;
chunk__32902_32927 = G__32932;
count__32903_32928 = G__32933;
i__32904_32929 = G__32934;
continue;
} else {
var temp__4657__auto___32935 = cljs.core.seq.call(null,seq__32901_32926);
if(temp__4657__auto___32935){
var seq__32901_32936__$1 = temp__4657__auto___32935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32901_32936__$1)){
var c__19078__auto___32937 = cljs.core.chunk_first.call(null,seq__32901_32936__$1);
var G__32938 = cljs.core.chunk_rest.call(null,seq__32901_32936__$1);
var G__32939 = c__19078__auto___32937;
var G__32940 = cljs.core.count.call(null,c__19078__auto___32937);
var G__32941 = (0);
seq__32901_32926 = G__32938;
chunk__32902_32927 = G__32939;
count__32903_32928 = G__32940;
i__32904_32929 = G__32941;
continue;
} else {
var p_32942 = cljs.core.first.call(null,seq__32901_32936__$1);
thi.ng.geom.physics.core.add_constraints.call(null,p_32942,c2);

var G__32943 = cljs.core.next.call(null,seq__32901_32936__$1);
var G__32944 = null;
var G__32945 = (0);
var G__32946 = (0);
seq__32901_32926 = G__32943;
chunk__32902_32927 = G__32944;
count__32903_32928 = G__32945;
i__32904_32929 = G__32946;
continue;
}
} else {
}
}
break;
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"physics","physics",-1254209137),thi.ng.geom.physics.core.physics.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"particles","particles",801881788),cljs.core.concat.call(null,p1,p2),new cljs.core.Keyword(null,"springs","springs",-1422009794),cljs.core.concat.call(null,s1,s2),new cljs.core.Keyword(null,"behaviors","behaviors",120724909),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"g","g",1738089905),thi.ng.geom.physics.core.gravity.call(null,new cljs.core.Keyword(null,"gravity","gravity",-1815198225).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"f","f",-1597136552),geom.strands.accelerated_force_field.call(null,accel,1.41,(-1))], null),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"iter","iter",1308240283),geom.strands.update_accelerator.call(null,accel)], null)], null)),new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null));
});
/**
 * Takes a seq of particles, returns vector of their positions.
 */
geom.strands.particle_positions = (function geom$strands$particle_positions(particles){
return cljs.core.mapv.call(null,(function (p1__32947_SHARP_){
return thi.ng.geom.physics.core.position.call(null,p1__32947_SHARP_);
}),particles);
});
/**
 * Takes a seq of particles and stroke/fill colors, returns a SVG
 *   group defining particles as circles and a polyline between
 *   particles.
 */
geom.strands.svg_strand = (function geom$strands$svg_strand(particles,stroke,fill){
var pos = geom.strands.particle_positions.call(null,particles);
return thi.ng.geom.svg.core.group.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),stroke], null),thi.ng.geom.svg.core.line_strip.call(null,pos),thi.ng.geom.svg.core.group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none"], null),cljs.core.sequence.call(null,cljs.core.map.call(null,((function (pos){
return (function (p1__32948_SHARP_){
return thi.ng.geom.svg.core.circle.call(null,p1__32948_SHARP_,0.2);
});})(pos))
),pos)));
});
/**
 * Takes a state map and visualizes the current state of the physic
 *   sim as SVG DOM element.
 */
geom.strands.visualize_svg = (function geom$strands$visualize_svg(p__32949){
var map__32953 = p__32949;
var map__32953__$1 = ((((!((map__32953 == null)))?((((map__32953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32953):map__32953);
var state = map__32953__$1;
var physics = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"physics","physics",-1254209137));
var root = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var svg_attrs = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772));
var vec__32955 = new cljs.core.Keyword(null,"clusters","clusters",273881275).cljs$core$IFn$_invoke$arity$1(state);
var c1 = cljs.core.nth.call(null,vec__32955,(0),null);
var c2 = cljs.core.nth.call(null,vec__32955,(1),null);
return thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.svg.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),thi.ng.geom.svg.core.group.call(null,svg_attrs,geom.strands.svg_strand.call(null,c1,"#00f","#0ff"),geom.strands.svg_strand.call(null,c2,"#0f0","#ff0"))),thi.ng.domus.core.clear_BANG_.call(null,root));
});
geom.strands._main = (function geom$strands$_main(){
var state = cljs.core.atom.call(null,geom.strands.init_physics.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"root","root",-448657453),thi.ng.domus.core.by_id.call(null,"app"),new cljs.core.Keyword(null,"gravity","gravity",-1815198225),thi.ng.geom.core.vector.vec2.call(null,(0),0.025),new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),thi.ng.geom.core.scale.call(null,thi.ng.geom.core.matrix.M32,(15)),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.1], null)], null),(100)));
return thi.ng.geom.webgl.animator.animate.call(null,((function (state){
return (function (p__32958){
var vec__32959 = p__32958;
var t = cljs.core.nth.call(null,vec__32959,(0),null);
var frame = cljs.core.nth.call(null,vec__32959,(1),null);
if((cljs.core.mod.call(null,frame,(120)) === (0))){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"gravity","gravity",-1815198225),thi.ng.geom.core.vector.randvec2.call(null,0.025));

cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"physics","physics",-1254209137),thi.ng.geom.physics.core.add_behaviors,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"g","g",1738089905),thi.ng.geom.physics.core.gravity.call(null,new cljs.core.Keyword(null,"gravity","gravity",-1815198225).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null));
} else {
}

thi.ng.geom.physics.core.timestep.call(null,new cljs.core.Keyword(null,"physics","physics",-1254209137).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),(2));

geom.strands.visualize_svg.call(null,cljs.core.deref.call(null,state));

return true;
});})(state))
);
});
geom.strands._main.call(null);

//# sourceMappingURL=strands.js.map