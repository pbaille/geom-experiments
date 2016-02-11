// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.misc.strands');
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
geom.misc.strands.attract_BANG_ = (function geom$misc$strands$attract_BANG_(p,q,rsq,strength,delta){
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
geom.misc.strands.accelerated_force_field = (function geom$misc$strands$accelerated_force_field(accel,r,strength){
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
geom.misc.strands.attract_BANG_.call(null,p_SINGLEQUOTE_,n,rsq,strength,delta);
} else {
}

var G__22128 = cljs.core.next.call(null,neighbors);
neighbors = G__22128;
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
geom.misc.strands.update_accelerator = (function geom$misc$strands$update_accelerator(accel){
return (function (physics,_){
return cljs.core.reduce.call(null,(function (p1__22129_SHARP_,p2__22130_SHARP_){
return thi.ng.geom.core.add_point.call(null,p1__22129_SHARP_,thi.ng.geom.physics.core.position.call(null,p2__22130_SHARP_),p2__22130_SHARP_);
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
geom.misc.strands.make_strand = (function geom$misc$strands$make_strand(n,fold,offset){
var particles = cljs.core.map_indexed.call(null,(function (i,p){
var o = (i * fold);
return cljs.core.map.call(null,((function (o){
return (function (p1__22131_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,offset,(p1__22131_SHARP_ - o),i);
});})(o))
,((cljs.core.odd_QMARK_.call(null,i))?cljs.core.reverse.call(null,p):p));
}),cljs.core.partition_all.call(null,fold,cljs.core.range.call(null,n)));
var particles__$1 = cljs.core.mapv.call(null,thi.ng.geom.physics.core.particle,cljs.core.mapcat.call(null,cljs.core.identity,particles));
var springs = cljs.core.map.call(null,((function (particles,particles__$1){
return (function (p__22134){
var vec__22135 = p__22134;
var a = cljs.core.nth.call(null,vec__22135,(0),null);
var b = cljs.core.nth.call(null,vec__22135,(1),null);
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
geom.misc.strands.init_physics = (function geom$misc$strands$init_physics(state,n){
var vec__22146 = geom.misc.strands.make_strand.call(null,n,(6),thi.ng.geom.core.vector.vec2.call(null,(7),(2)));
var p1 = cljs.core.nth.call(null,vec__22146,(0),null);
var s1 = cljs.core.nth.call(null,vec__22146,(1),null);
var vec__22147 = geom.misc.strands.make_strand.call(null,n,(6),thi.ng.geom.core.vector.vec2.call(null,(12),(2)));
var p2 = cljs.core.nth.call(null,vec__22147,(0),null);
var s2 = cljs.core.nth.call(null,vec__22147,(1),null);
var c1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"c","c",-1763192079),thi.ng.geom.physics.core.shape_constraint_inside.call(null,thi.ng.geom.circle.circle.call(null,thi.ng.geom.core.vector.vec2.call(null,(10),(10)),(9)))], null);
var c2 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"c","c",-1763192079),thi.ng.geom.physics.core.shape_constraint_inside.call(null,thi.ng.geom.circle.circle.call(null,thi.ng.geom.core.vector.vec2.call(null,(17),(10)),(9)))], null);
var accel = thi.ng.geom.spatialtree.quadtree.call(null,(0),(0),(26));
var seq__22148_22156 = cljs.core.seq.call(null,p1);
var chunk__22149_22157 = null;
var count__22150_22158 = (0);
var i__22151_22159 = (0);
while(true){
if((i__22151_22159 < count__22150_22158)){
var p_22160 = cljs.core._nth.call(null,chunk__22149_22157,i__22151_22159);
thi.ng.geom.physics.core.add_constraints.call(null,p_22160,c1);

var G__22161 = seq__22148_22156;
var G__22162 = chunk__22149_22157;
var G__22163 = count__22150_22158;
var G__22164 = (i__22151_22159 + (1));
seq__22148_22156 = G__22161;
chunk__22149_22157 = G__22162;
count__22150_22158 = G__22163;
i__22151_22159 = G__22164;
continue;
} else {
var temp__4657__auto___22165 = cljs.core.seq.call(null,seq__22148_22156);
if(temp__4657__auto___22165){
var seq__22148_22166__$1 = temp__4657__auto___22165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22148_22166__$1)){
var c__19078__auto___22167 = cljs.core.chunk_first.call(null,seq__22148_22166__$1);
var G__22168 = cljs.core.chunk_rest.call(null,seq__22148_22166__$1);
var G__22169 = c__19078__auto___22167;
var G__22170 = cljs.core.count.call(null,c__19078__auto___22167);
var G__22171 = (0);
seq__22148_22156 = G__22168;
chunk__22149_22157 = G__22169;
count__22150_22158 = G__22170;
i__22151_22159 = G__22171;
continue;
} else {
var p_22172 = cljs.core.first.call(null,seq__22148_22166__$1);
thi.ng.geom.physics.core.add_constraints.call(null,p_22172,c1);

var G__22173 = cljs.core.next.call(null,seq__22148_22166__$1);
var G__22174 = null;
var G__22175 = (0);
var G__22176 = (0);
seq__22148_22156 = G__22173;
chunk__22149_22157 = G__22174;
count__22150_22158 = G__22175;
i__22151_22159 = G__22176;
continue;
}
} else {
}
}
break;
}

var seq__22152_22177 = cljs.core.seq.call(null,p2);
var chunk__22153_22178 = null;
var count__22154_22179 = (0);
var i__22155_22180 = (0);
while(true){
if((i__22155_22180 < count__22154_22179)){
var p_22181 = cljs.core._nth.call(null,chunk__22153_22178,i__22155_22180);
thi.ng.geom.physics.core.add_constraints.call(null,p_22181,c2);

var G__22182 = seq__22152_22177;
var G__22183 = chunk__22153_22178;
var G__22184 = count__22154_22179;
var G__22185 = (i__22155_22180 + (1));
seq__22152_22177 = G__22182;
chunk__22153_22178 = G__22183;
count__22154_22179 = G__22184;
i__22155_22180 = G__22185;
continue;
} else {
var temp__4657__auto___22186 = cljs.core.seq.call(null,seq__22152_22177);
if(temp__4657__auto___22186){
var seq__22152_22187__$1 = temp__4657__auto___22186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22152_22187__$1)){
var c__19078__auto___22188 = cljs.core.chunk_first.call(null,seq__22152_22187__$1);
var G__22189 = cljs.core.chunk_rest.call(null,seq__22152_22187__$1);
var G__22190 = c__19078__auto___22188;
var G__22191 = cljs.core.count.call(null,c__19078__auto___22188);
var G__22192 = (0);
seq__22152_22177 = G__22189;
chunk__22153_22178 = G__22190;
count__22154_22179 = G__22191;
i__22155_22180 = G__22192;
continue;
} else {
var p_22193 = cljs.core.first.call(null,seq__22152_22187__$1);
thi.ng.geom.physics.core.add_constraints.call(null,p_22193,c2);

var G__22194 = cljs.core.next.call(null,seq__22152_22187__$1);
var G__22195 = null;
var G__22196 = (0);
var G__22197 = (0);
seq__22152_22177 = G__22194;
chunk__22153_22178 = G__22195;
count__22154_22179 = G__22196;
i__22155_22180 = G__22197;
continue;
}
} else {
}
}
break;
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"physics","physics",-1254209137),thi.ng.geom.physics.core.physics.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"particles","particles",801881788),cljs.core.concat.call(null,p1,p2),new cljs.core.Keyword(null,"springs","springs",-1422009794),cljs.core.concat.call(null,s1,s2),new cljs.core.Keyword(null,"behaviors","behaviors",120724909),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"g","g",1738089905),thi.ng.geom.physics.core.gravity.call(null,new cljs.core.Keyword(null,"gravity","gravity",-1815198225).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"f","f",-1597136552),geom.misc.strands.accelerated_force_field.call(null,accel,1.41,(-1))], null),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"iter","iter",1308240283),geom.misc.strands.update_accelerator.call(null,accel)], null)], null)),new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null));
});
/**
 * Takes a seq of particles, returns vector of their positions.
 */
geom.misc.strands.particle_positions = (function geom$misc$strands$particle_positions(particles){
return cljs.core.mapv.call(null,(function (p1__22198_SHARP_){
return thi.ng.geom.physics.core.position.call(null,p1__22198_SHARP_);
}),particles);
});
/**
 * Takes a seq of particles and stroke/fill colors, returns a SVG
 *   group defining particles as circles and a polyline between
 *   particles.
 */
geom.misc.strands.svg_strand = (function geom$misc$strands$svg_strand(particles,stroke,fill){
var pos = geom.misc.strands.particle_positions.call(null,particles);
return thi.ng.geom.svg.core.group.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),stroke], null),thi.ng.geom.svg.core.line_strip.call(null,pos),thi.ng.geom.svg.core.group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none"], null),cljs.core.sequence.call(null,cljs.core.map.call(null,((function (pos){
return (function (p1__22199_SHARP_){
return thi.ng.geom.svg.core.circle.call(null,p1__22199_SHARP_,0.2);
});})(pos))
),pos)));
});
/**
 * Takes a state map and visualizes the current state of the physic
 *   sim as SVG DOM element.
 */
geom.misc.strands.visualize_svg = (function geom$misc$strands$visualize_svg(p__22200){
var map__22204 = p__22200;
var map__22204__$1 = ((((!((map__22204 == null)))?((((map__22204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22204):map__22204);
var state = map__22204__$1;
var physics = cljs.core.get.call(null,map__22204__$1,new cljs.core.Keyword(null,"physics","physics",-1254209137));
var root = cljs.core.get.call(null,map__22204__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var svg_attrs = cljs.core.get.call(null,map__22204__$1,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772));
var vec__22206 = new cljs.core.Keyword(null,"clusters","clusters",273881275).cljs$core$IFn$_invoke$arity$1(state);
var c1 = cljs.core.nth.call(null,vec__22206,(0),null);
var c2 = cljs.core.nth.call(null,vec__22206,(1),null);
return thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.svg.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),thi.ng.geom.svg.core.group.call(null,svg_attrs,geom.misc.strands.svg_strand.call(null,c1,"#00f","#0ff"),geom.misc.strands.svg_strand.call(null,c2,"#0f0","#ff0"))),thi.ng.domus.core.clear_BANG_.call(null,root));
});
geom.misc.strands._main = (function geom$misc$strands$_main(){
var state = cljs.core.atom.call(null,geom.misc.strands.init_physics.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"root","root",-448657453),thi.ng.domus.core.by_id.call(null,"app"),new cljs.core.Keyword(null,"gravity","gravity",-1815198225),thi.ng.geom.core.vector.vec2.call(null,(0),0.025),new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),thi.ng.geom.core.scale.call(null,thi.ng.geom.core.matrix.M32,(15)),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.1], null)], null),(100)));
return thi.ng.geom.webgl.animator.animate.call(null,((function (state){
return (function (p__22209){
var vec__22210 = p__22209;
var t = cljs.core.nth.call(null,vec__22210,(0),null);
var frame = cljs.core.nth.call(null,vec__22210,(1),null);
if((cljs.core.mod.call(null,frame,(120)) === (0))){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"gravity","gravity",-1815198225),thi.ng.geom.core.vector.randvec2.call(null,0.025));

cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"physics","physics",-1254209137),thi.ng.geom.physics.core.add_behaviors,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"g","g",1738089905),thi.ng.geom.physics.core.gravity.call(null,new cljs.core.Keyword(null,"gravity","gravity",-1815198225).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null));
} else {
}

thi.ng.geom.physics.core.timestep.call(null,new cljs.core.Keyword(null,"physics","physics",-1254209137).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),(2));

geom.misc.strands.visualize_svg.call(null,cljs.core.deref.call(null,state));

return true;
});})(state))
);
});
geom.misc.strands._main.call(null);

//# sourceMappingURL=strands.js.map