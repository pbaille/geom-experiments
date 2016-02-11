// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.physics.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.dstruct.core');

/**
 * @interface
 */
thi.ng.geom.physics.core.PTimeStep = function(){};

thi.ng.geom.physics.core.timestep = (function thi$ng$geom$physics$core$timestep(_,delta){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PTimeStep$timestep$arity$2 == null)))){
return _.thi$ng$geom$physics$core$PTimeStep$timestep$arity$2(_,delta);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.timestep[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,delta);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.timestep["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,delta);
} else {
throw cljs.core.missing_protocol.call(null,"PTimeStep.timestep",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.physics.core.PBehavioral = function(){};

thi.ng.geom.physics.core.add_behaviors = (function thi$ng$geom$physics$core$add_behaviors(_,bmap){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PBehavioral$add_behaviors$arity$2 == null)))){
return _.thi$ng$geom$physics$core$PBehavioral$add_behaviors$arity$2(_,bmap);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.add_behaviors[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,bmap);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.add_behaviors["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,bmap);
} else {
throw cljs.core.missing_protocol.call(null,"PBehavioral.add-behaviors",_);
}
}
}
});

thi.ng.geom.physics.core.remove_behavior = (function thi$ng$geom$physics$core$remove_behavior(_,id){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PBehavioral$remove_behavior$arity$2 == null)))){
return _.thi$ng$geom$physics$core$PBehavioral$remove_behavior$arity$2(_,id);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.remove_behavior[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,id);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.remove_behavior["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,id);
} else {
throw cljs.core.missing_protocol.call(null,"PBehavioral.remove-behavior",_);
}
}
}
});

thi.ng.geom.physics.core.clear_behaviors = (function thi$ng$geom$physics$core$clear_behaviors(_){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PBehavioral$clear_behaviors$arity$1 == null)))){
return _.thi$ng$geom$physics$core$PBehavioral$clear_behaviors$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.clear_behaviors[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.clear_behaviors["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PBehavioral.clear-behaviors",_);
}
}
}
});

thi.ng.geom.physics.core.apply_behaviors = (function thi$ng$geom$physics$core$apply_behaviors(_,delta){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PBehavioral$apply_behaviors$arity$2 == null)))){
return _.thi$ng$geom$physics$core$PBehavioral$apply_behaviors$arity$2(_,delta);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.apply_behaviors[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,delta);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.apply_behaviors["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,delta);
} else {
throw cljs.core.missing_protocol.call(null,"PBehavioral.apply-behaviors",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.physics.core.PConstrained = function(){};

thi.ng.geom.physics.core.add_constraints = (function thi$ng$geom$physics$core$add_constraints(_,cmap){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PConstrained$add_constraints$arity$2 == null)))){
return _.thi$ng$geom$physics$core$PConstrained$add_constraints$arity$2(_,cmap);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.add_constraints[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,cmap);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.add_constraints["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,cmap);
} else {
throw cljs.core.missing_protocol.call(null,"PConstrained.add-constraints",_);
}
}
}
});

thi.ng.geom.physics.core.remove_constraint = (function thi$ng$geom$physics$core$remove_constraint(_,id){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PConstrained$remove_constraint$arity$2 == null)))){
return _.thi$ng$geom$physics$core$PConstrained$remove_constraint$arity$2(_,id);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.remove_constraint[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,id);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.remove_constraint["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,id);
} else {
throw cljs.core.missing_protocol.call(null,"PConstrained.remove-constraint",_);
}
}
}
});

thi.ng.geom.physics.core.clear_constraints = (function thi$ng$geom$physics$core$clear_constraints(_){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PConstrained$clear_constraints$arity$1 == null)))){
return _.thi$ng$geom$physics$core$PConstrained$clear_constraints$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.clear_constraints[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.clear_constraints["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PConstrained.clear-constraints",_);
}
}
}
});

thi.ng.geom.physics.core.apply_constraints = (function thi$ng$geom$physics$core$apply_constraints(_,delta){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PConstrained$apply_constraints$arity$2 == null)))){
return _.thi$ng$geom$physics$core$PConstrained$apply_constraints$arity$2(_,delta);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.apply_constraints[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,delta);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.apply_constraints["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,delta);
} else {
throw cljs.core.missing_protocol.call(null,"PConstrained.apply-constraints",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.physics.core.PParticle = function(){};

thi.ng.geom.physics.core.add_force = (function thi$ng$geom$physics$core$add_force(_,f){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PParticle$add_force$arity$2 == null)))){
return _.thi$ng$geom$physics$core$PParticle$add_force$arity$2(_,f);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.add_force[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,f);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.add_force["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"PParticle.add-force",_);
}
}
}
});

thi.ng.geom.physics.core.add_velocity = (function thi$ng$geom$physics$core$add_velocity(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PParticle$add_velocity$arity$2 == null)))){
return _.thi$ng$geom$physics$core$PParticle$add_velocity$arity$2(_,v);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.add_velocity[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,v);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.add_velocity["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"PParticle.add-velocity",_);
}
}
}
});

thi.ng.geom.physics.core.apply_force = (function thi$ng$geom$physics$core$apply_force(_,delta){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PParticle$apply_force$arity$2 == null)))){
return _.thi$ng$geom$physics$core$PParticle$apply_force$arity$2(_,delta);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.apply_force[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,delta);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.apply_force["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,delta);
} else {
throw cljs.core.missing_protocol.call(null,"PParticle.apply-force",_);
}
}
}
});

thi.ng.geom.physics.core.clear_force = (function thi$ng$geom$physics$core$clear_force(_){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PParticle$clear_force$arity$1 == null)))){
return _.thi$ng$geom$physics$core$PParticle$clear_force$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.clear_force[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.clear_force["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PParticle.clear-force",_);
}
}
}
});

thi.ng.geom.physics.core.clear_velocity = (function thi$ng$geom$physics$core$clear_velocity(_){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PParticle$clear_velocity$arity$1 == null)))){
return _.thi$ng$geom$physics$core$PParticle$clear_velocity$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.clear_velocity[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.clear_velocity["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PParticle.clear-velocity",_);
}
}
}
});

thi.ng.geom.physics.core.scale_velocity = (function thi$ng$geom$physics$core$scale_velocity(_,s){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PParticle$scale_velocity$arity$2 == null)))){
return _.thi$ng$geom$physics$core$PParticle$scale_velocity$arity$2(_,s);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.scale_velocity[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,s);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.scale_velocity["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"PParticle.scale-velocity",_);
}
}
}
});

thi.ng.geom.physics.core.position = (function thi$ng$geom$physics$core$position(_){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PParticle$position$arity$1 == null)))){
return _.thi$ng$geom$physics$core$PParticle$position$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.position[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.position["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PParticle.position",_);
}
}
}
});

thi.ng.geom.physics.core.set_position = (function thi$ng$geom$physics$core$set_position(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PParticle$set_position$arity$2 == null)))){
return _.thi$ng$geom$physics$core$PParticle$set_position$arity$2(_,p);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.set_position[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,p);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.set_position["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,p);
} else {
throw cljs.core.missing_protocol.call(null,"PParticle.set-position",_);
}
}
}
});

thi.ng.geom.physics.core.velocity = (function thi$ng$geom$physics$core$velocity(_){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PParticle$velocity$arity$1 == null)))){
return _.thi$ng$geom$physics$core$PParticle$velocity$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.velocity[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.velocity["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PParticle.velocity",_);
}
}
}
});

thi.ng.geom.physics.core.lock = (function thi$ng$geom$physics$core$lock(_){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PParticle$lock$arity$1 == null)))){
return _.thi$ng$geom$physics$core$PParticle$lock$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.lock[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.lock["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PParticle.lock",_);
}
}
}
});

thi.ng.geom.physics.core.unlock = (function thi$ng$geom$physics$core$unlock(_){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PParticle$unlock$arity$1 == null)))){
return _.thi$ng$geom$physics$core$PParticle$unlock$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.unlock[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.unlock["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PParticle.unlock",_);
}
}
}
});

thi.ng.geom.physics.core.locked_QMARK_ = (function thi$ng$geom$physics$core$locked_QMARK_(_){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PParticle$locked_QMARK_$arity$1 == null)))){
return _.thi$ng$geom$physics$core$PParticle$locked_QMARK_$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.locked_QMARK_[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.locked_QMARK_["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"PParticle.locked?",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.physics.core.PPhysics = function(){};

thi.ng.geom.physics.core.update_particles = (function thi$ng$geom$physics$core$update_particles(_,delta){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PPhysics$update_particles$arity$2 == null)))){
return _.thi$ng$geom$physics$core$PPhysics$update_particles$arity$2(_,delta);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.update_particles[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,delta);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.update_particles["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,delta);
} else {
throw cljs.core.missing_protocol.call(null,"PPhysics.update-particles",_);
}
}
}
});

thi.ng.geom.physics.core.update_springs = (function thi$ng$geom$physics$core$update_springs(_,delta){
if((!((_ == null))) && (!((_.thi$ng$geom$physics$core$PPhysics$update_springs$arity$2 == null)))){
return _.thi$ng$geom$physics$core$PPhysics$update_springs$arity$2(_,delta);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.physics.core.update_springs[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,delta);
} else {
var m__18931__auto____$1 = (thi.ng.geom.physics.core.update_springs["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,delta);
} else {
throw cljs.core.missing_protocol.call(null,"PPhysics.update-springs",_);
}
}
}
});

thi.ng.geom.physics.core.apply_to_particle = (function thi$ng$geom$physics$core$apply_to_particle(p,delta,fns){
if(cljs.core.truth_(thi.ng.geom.physics.core.locked_QMARK_.call(null,p))){
return null;
} else {
var f = cljs.core.seq.call(null,fns);
while(true){
if(f){
cljs.core.first.call(null,f).call(null,p,delta);

var G__30087 = cljs.core.next.call(null,f);
f = G__30087;
continue;
} else {
return null;
}
break;
}
}
});
thi.ng.geom.physics.core.apply_to_particles = (function thi$ng$geom$physics$core$apply_to_particles(particles,delta,fns){
var ps = cljs.core.seq.call(null,particles);
while(true){
if(ps){
thi.ng.geom.physics.core.apply_to_particle.call(null,cljs.core.first.call(null,ps),delta,fns);

var G__30088 = cljs.core.next.call(null,ps);
ps = G__30088;
continue;
} else {
return null;
}
break;
}
});

/**
* @constructor
 * @implements {thi.ng.geom.physics.core.Object}
 * @implements {thi.ng.geom.physics.core.PParticle}
 * @implements {thi.ng.geom.physics.core.PBehavioral}
 * @implements {cljs.core.IMeta}
 * @implements {thi.ng.geom.physics.core.PTimeStep}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.physics.core.PConstrained}
*/
thi.ng.geom.physics.core.VerletParticle = (function (pos,prev,force,locked_QMARK_,behaviors,constraints,inv_weight,_meta){
this.pos = pos;
this.prev = prev;
this.force = force;
this.locked_QMARK_ = locked_QMARK_;
this.behaviors = behaviors;
this.constraints = constraints;
this.inv_weight = inv_weight;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
thi.ng.geom.physics.core.VerletParticle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.physics.core.VerletParticle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,meta_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.physics.core.VerletParticle(self__.pos,self__.prev,self__.force,self__.locked_QMARK_,self__.behaviors,self__.constraints,self__.inv_weight,meta_SINGLEQUOTE_));
});

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PBehavioral$ = true;

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PBehavioral$add_behaviors$arity$2 = (function (_,bmap){
var self__ = this;
var ___$1 = this;
self__.behaviors = cljs.core.merge.call(null,self__.behaviors,bmap);

return ___$1;
});

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PBehavioral$apply_behaviors$arity$2 = (function (_,delta){
var self__ = this;
var ___$1 = this;
if(cljs.core.seq.call(null,self__.behaviors)){
thi.ng.geom.physics.core.apply_to_particle.call(null,___$1,delta,cljs.core.vals.call(null,self__.behaviors));
} else {
}

return ___$1;
});

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PBehavioral$remove_behavior$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
self__.behaviors = cljs.core.dissoc.call(null,self__.behaviors,id);

return ___$1;
});

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PBehavioral$clear_behaviors$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.behaviors = cljs.core.PersistentArrayMap.EMPTY;

return ___$1;
});

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PConstrained$ = true;

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PConstrained$add_constraints$arity$2 = (function (_,cmap){
var self__ = this;
var ___$1 = this;
self__.constraints = cljs.core.merge.call(null,self__.constraints,cmap);

return ___$1;
});

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PConstrained$apply_constraints$arity$2 = (function (_,delta){
var self__ = this;
var ___$1 = this;
if(cljs.core.seq.call(null,self__.constraints)){
thi.ng.geom.physics.core.apply_to_particle.call(null,___$1,delta,cljs.core.vals.call(null,self__.constraints));
} else {
}

return ___$1;
});

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PConstrained$remove_constraint$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
self__.constraints = cljs.core.dissoc.call(null,self__.constraints,id);

return ___$1;
});

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PConstrained$clear_constraints$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.constraints = cljs.core.PersistentArrayMap.EMPTY;

return ___$1;
});

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PParticle$ = true;

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PParticle$velocity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core._.call(null,self__.pos,self__.prev);
});

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PParticle$lock$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.locked_QMARK_ = true;

return ___$1;
});

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PParticle$apply_force$arity$2 = (function (_,delta){
var self__ = this;
var ___$1 = this;
var pos_SINGLEQUOTE__30089 = thi.ng.geom.core.madd_BANG_.call(null,self__.force,(self__.inv_weight * (delta * delta)),thi.ng.geom.core.msub.call(null,self__.pos,2.0,self__.prev));
self__.prev = self__.pos;

self__.pos = pos_SINGLEQUOTE__30089;

self__.force = thi.ng.geom.core.clear_STAR_.call(null,self__.force);

return ___$1;
});

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PParticle$set_position$arity$2 = (function (_,p){
var self__ = this;
var ___$1 = this;
self__.pos = p;

return ___$1;
});

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PParticle$add_force$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
thi.ng.geom.core._PLUS__BANG_.call(null,self__.force,f);

return ___$1;
});

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PParticle$clear_force$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
thi.ng.geom.core.clear_BANG_.call(null,self__.force);

return ___$1;
});

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PParticle$scale_velocity$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
self__.prev = thi.ng.geom.core.mix.call(null,self__.prev,self__.pos,s);

return ___$1;
});

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PParticle$locked_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.locked_QMARK_;
});

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PParticle$unlock$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.locked_QMARK_ = false;

return ___$1;
});

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PParticle$position$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.pos;
});

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PTimeStep$ = true;

thi.ng.geom.physics.core.VerletParticle.prototype.thi$ng$geom$physics$core$PTimeStep$timestep$arity$2 = (function (_,delta){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,self__.locked_QMARK_)){
return thi.ng.geom.physics.core.apply_constraints.call(null,thi.ng.geom.physics.core.apply_force.call(null,thi.ng.geom.physics.core.apply_behaviors.call(null,___$1,delta),delta),delta);
} else {
return ___$1;
}
});

thi.ng.geom.physics.core.VerletParticle.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev,new cljs.core.Keyword(null,"force","force",781957286),self__.force,new cljs.core.Keyword(null,"locked?","locked?",995448757),self__.locked_QMARK_,new cljs.core.Keyword(null,"inv-weight","inv-weight",-303877560),self__.inv_weight,new cljs.core.Keyword(null,"behaviors","behaviors",120724909),self__.behaviors,new cljs.core.Keyword(null,"constraints","constraints",422775616),self__.constraints], null));
});

thi.ng.geom.physics.core.VerletParticle.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"force","force",-1872478483,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"locked?","locked?",-1658987012,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"behaviors","behaviors",1761256436,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constraints","constraints",2063307143,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"inv-weight","inv-weight",1336653967,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.physics.core.VerletParticle.cljs$lang$type = true;

thi.ng.geom.physics.core.VerletParticle.cljs$lang$ctorStr = "thi.ng.geom.physics.core/VerletParticle";

thi.ng.geom.physics.core.VerletParticle.cljs$lang$ctorPrWriter = (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"thi.ng.geom.physics.core/VerletParticle");
});

thi.ng.geom.physics.core.__GT_VerletParticle = (function thi$ng$geom$physics$core$__GT_VerletParticle(pos,prev,force,locked_QMARK_,behaviors,constraints,inv_weight,_meta){
return (new thi.ng.geom.physics.core.VerletParticle(pos,prev,force,locked_QMARK_,behaviors,constraints,inv_weight,_meta));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.geom.physics.core.PTimeStep}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.physics.core.Spring = (function (a,b,rest_len,strength,__meta,__extmap,__hash){
this.a = a;
this.b = b;
this.rest_len = rest_len;
this.strength = strength;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.physics.core.Spring.prototype.thi$ng$geom$physics$core$PTimeStep$ = true;

thi.ng.geom.physics.core.Spring.prototype.thi$ng$geom$physics$core$PTimeStep$timestep$arity$2 = (function (_,delta){
var self__ = this;
var ___$1 = this;
var aw = self__.a.inv_weight;
var bw = self__.b.inv_weight;
var pa = self__.a.thi$ng$geom$physics$core$PParticle$position$arity$1(null);
var pb = self__.b.thi$ng$geom$physics$core$PParticle$position$arity$1(null);
var diff = thi.ng.geom.core._.call(null,pb,pa);
var dist = (thi.ng.geom.core.mag.call(null,diff) + 1.0E-6);
var nd = (((dist - self__.rest_len) / (dist * (aw + bw))) * (self__.strength * delta));
if(cljs.core.not.call(null,self__.a.thi$ng$geom$physics$core$PParticle$locked_QMARK_$arity$1(null))){
self__.a.thi$ng$geom$physics$core$PParticle$set_position$arity$2(null,thi.ng.geom.core.madd.call(null,diff,(nd * aw),pa));
} else {
}

if(cljs.core.not.call(null,self__.b.thi$ng$geom$physics$core$PParticle$locked_QMARK_$arity$1(null))){
return self__.b.thi$ng$geom$physics$core$PParticle$set_position$arity$2(null,thi.ng.geom.core.madd_BANG_.call(null,diff,((- nd) * bw),pb));
} else {
return null;
}
});

thi.ng.geom.physics.core.Spring.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.physics.core.Spring.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k30091,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__30093 = (((k30091 instanceof cljs.core.Keyword))?k30091.fqn:null);
switch (G__30093) {
case "a":
return self__.a;

break;
case "b":
return self__.b;

break;
case "rest-len":
return self__.rest_len;

break;
case "strength":
return self__.strength;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30091,else__18892__auto__);

}
});

thi.ng.geom.physics.core.Spring.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.physics.core.Spring{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"b","b",1482224470),self__.b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest-len","rest-len",566100613),self__.rest_len],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"strength","strength",-415606478),self__.strength],null))], null),self__.__extmap));
});

thi.ng.geom.physics.core.Spring.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.physics.core.Spring.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30090){
var self__ = this;
var G__30090__$1 = this;
return (new cljs.core.RecordIter((0),G__30090__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"rest-len","rest-len",566100613),new cljs.core.Keyword(null,"strength","strength",-415606478)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.physics.core.Spring.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.physics.core.Spring.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.physics.core.Spring(self__.a,self__.b,self__.rest_len,self__.strength,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.physics.core.Spring.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.physics.core.Spring.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
var self__ = this;
var this__18884__auto____$1 = this;
var h__18710__auto__ = self__.__hash;
if(!((h__18710__auto__ == null))){
return h__18710__auto__;
} else {
var h__18710__auto____$1 = cljs.core.hash_imap.call(null,this__18884__auto____$1);
self__.__hash = h__18710__auto____$1;

return h__18710__auto____$1;
}
});

thi.ng.geom.physics.core.Spring.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
var self__ = this;
var this__18885__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18263__auto__ = other__18886__auto__;
if(cljs.core.truth_(and__18263__auto__)){
var and__18263__auto____$1 = (this__18885__auto____$1.constructor === other__18886__auto__.constructor);
if(and__18263__auto____$1){
return cljs.core.equiv_map.call(null,this__18885__auto____$1,other__18886__auto__);
} else {
return and__18263__auto____$1;
}
} else {
return and__18263__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.physics.core.Spring.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rest-len","rest-len",566100613),null,new cljs.core.Keyword(null,"strength","strength",-415606478),null,new cljs.core.Keyword(null,"b","b",1482224470),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.physics.core.Spring(self__.a,self__.b,self__.rest_len,self__.strength,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.physics.core.Spring.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__30090){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__30094 = cljs.core.keyword_identical_QMARK_;
var expr__30095 = k__18897__auto__;
if(cljs.core.truth_(pred__30094.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__30095))){
return (new thi.ng.geom.physics.core.Spring(G__30090,self__.b,self__.rest_len,self__.strength,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30094.call(null,new cljs.core.Keyword(null,"b","b",1482224470),expr__30095))){
return (new thi.ng.geom.physics.core.Spring(self__.a,G__30090,self__.rest_len,self__.strength,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30094.call(null,new cljs.core.Keyword(null,"rest-len","rest-len",566100613),expr__30095))){
return (new thi.ng.geom.physics.core.Spring(self__.a,self__.b,G__30090,self__.strength,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30094.call(null,new cljs.core.Keyword(null,"strength","strength",-415606478),expr__30095))){
return (new thi.ng.geom.physics.core.Spring(self__.a,self__.b,self__.rest_len,G__30090,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.physics.core.Spring(self__.a,self__.b,self__.rest_len,self__.strength,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__30090),null));
}
}
}
}
});

thi.ng.geom.physics.core.Spring.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"b","b",1482224470),self__.b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest-len","rest-len",566100613),self__.rest_len],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"strength","strength",-415606478),self__.strength],null))], null),self__.__extmap));
});

thi.ng.geom.physics.core.Spring.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__30090){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.physics.core.Spring(self__.a,self__.b,self__.rest_len,self__.strength,G__30090,self__.__extmap,self__.__hash));
});

thi.ng.geom.physics.core.Spring.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.physics.core.Spring.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"VerletParticle","VerletParticle",1056549144,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"VerletParticle","VerletParticle",1056549144,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"rest-len","rest-len",-2088335156,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"strength","strength",1224925049,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
});

thi.ng.geom.physics.core.Spring.cljs$lang$type = true;

thi.ng.geom.physics.core.Spring.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.physics.core/Spring");
});

thi.ng.geom.physics.core.Spring.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.physics.core/Spring");
});

thi.ng.geom.physics.core.__GT_Spring = (function thi$ng$geom$physics$core$__GT_Spring(a,b,rest_len,strength){
return (new thi.ng.geom.physics.core.Spring(a,b,rest_len,strength,null,null,null));
});

thi.ng.geom.physics.core.map__GT_Spring = (function thi$ng$geom$physics$core$map__GT_Spring(G__30092){
return (new thi.ng.geom.physics.core.Spring(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__30092),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(G__30092),new cljs.core.Keyword(null,"rest-len","rest-len",566100613).cljs$core$IFn$_invoke$arity$1(G__30092),new cljs.core.Keyword(null,"strength","strength",-415606478).cljs$core$IFn$_invoke$arity$1(G__30092),null,cljs.core.dissoc.call(null,G__30092,new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"rest-len","rest-len",566100613),new cljs.core.Keyword(null,"strength","strength",-415606478)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.geom.physics.core.PTimeStep}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.physics.core.PullbackSpring = (function (a,b,rest_len,min_len,strength,__meta,__extmap,__hash){
this.a = a;
this.b = b;
this.rest_len = rest_len;
this.min_len = min_len;
this.strength = strength;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.physics.core.PullbackSpring.prototype.thi$ng$geom$physics$core$PTimeStep$ = true;

thi.ng.geom.physics.core.PullbackSpring.prototype.thi$ng$geom$physics$core$PTimeStep$timestep$arity$2 = (function (_,delta){
var self__ = this;
var ___$1 = this;
var pa = self__.a.thi$ng$geom$physics$core$PParticle$position$arity$1(null);
var pb = self__.b.thi$ng$geom$physics$core$PParticle$position$arity$1(null);
var diff = thi.ng.geom.core._.call(null,pb,pa);
var dist = (thi.ng.geom.core.mag.call(null,diff) + 1.0E-6);
if((dist > self__.min_len)){
var aw = self__.a.inv_weight;
var bw = self__.b.inv_weight;
var nd = (((dist - self__.rest_len) / (dist * (aw + bw))) * (self__.strength * delta));
if(cljs.core.not.call(null,self__.a.thi$ng$geom$physics$core$PParticle$locked_QMARK_$arity$1(null))){
self__.a.thi$ng$geom$physics$core$PParticle$set_position$arity$2(null,thi.ng.geom.core.madd.call(null,diff,(nd * aw),pa));
} else {
}

if(cljs.core.not.call(null,self__.b.thi$ng$geom$physics$core$PParticle$locked_QMARK_$arity$1(null))){
return self__.b.thi$ng$geom$physics$core$PParticle$set_position$arity$2(null,thi.ng.geom.core.madd_BANG_.call(null,diff,((- nd) * bw),pb));
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.physics.core.PullbackSpring.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.physics.core.PullbackSpring.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k30099,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__30101 = (((k30099 instanceof cljs.core.Keyword))?k30099.fqn:null);
switch (G__30101) {
case "a":
return self__.a;

break;
case "b":
return self__.b;

break;
case "rest-len":
return self__.rest_len;

break;
case "min-len":
return self__.min_len;

break;
case "strength":
return self__.strength;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30099,else__18892__auto__);

}
});

thi.ng.geom.physics.core.PullbackSpring.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.physics.core.PullbackSpring{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"b","b",1482224470),self__.b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest-len","rest-len",566100613),self__.rest_len],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"min-len","min-len",-717560485),self__.min_len],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"strength","strength",-415606478),self__.strength],null))], null),self__.__extmap));
});

thi.ng.geom.physics.core.PullbackSpring.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.physics.core.PullbackSpring.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30098){
var self__ = this;
var G__30098__$1 = this;
return (new cljs.core.RecordIter((0),G__30098__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"rest-len","rest-len",566100613),new cljs.core.Keyword(null,"min-len","min-len",-717560485),new cljs.core.Keyword(null,"strength","strength",-415606478)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.physics.core.PullbackSpring.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.physics.core.PullbackSpring.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.physics.core.PullbackSpring(self__.a,self__.b,self__.rest_len,self__.min_len,self__.strength,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.physics.core.PullbackSpring.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.physics.core.PullbackSpring.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
var self__ = this;
var this__18884__auto____$1 = this;
var h__18710__auto__ = self__.__hash;
if(!((h__18710__auto__ == null))){
return h__18710__auto__;
} else {
var h__18710__auto____$1 = cljs.core.hash_imap.call(null,this__18884__auto____$1);
self__.__hash = h__18710__auto____$1;

return h__18710__auto____$1;
}
});

thi.ng.geom.physics.core.PullbackSpring.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
var self__ = this;
var this__18885__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18263__auto__ = other__18886__auto__;
if(cljs.core.truth_(and__18263__auto__)){
var and__18263__auto____$1 = (this__18885__auto____$1.constructor === other__18886__auto__.constructor);
if(and__18263__auto____$1){
return cljs.core.equiv_map.call(null,this__18885__auto____$1,other__18886__auto__);
} else {
return and__18263__auto____$1;
}
} else {
return and__18263__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.physics.core.PullbackSpring.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"rest-len","rest-len",566100613),null,new cljs.core.Keyword(null,"strength","strength",-415606478),null,new cljs.core.Keyword(null,"b","b",1482224470),null,new cljs.core.Keyword(null,"min-len","min-len",-717560485),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.physics.core.PullbackSpring(self__.a,self__.b,self__.rest_len,self__.min_len,self__.strength,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.physics.core.PullbackSpring.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__30098){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__30102 = cljs.core.keyword_identical_QMARK_;
var expr__30103 = k__18897__auto__;
if(cljs.core.truth_(pred__30102.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__30103))){
return (new thi.ng.geom.physics.core.PullbackSpring(G__30098,self__.b,self__.rest_len,self__.min_len,self__.strength,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30102.call(null,new cljs.core.Keyword(null,"b","b",1482224470),expr__30103))){
return (new thi.ng.geom.physics.core.PullbackSpring(self__.a,G__30098,self__.rest_len,self__.min_len,self__.strength,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30102.call(null,new cljs.core.Keyword(null,"rest-len","rest-len",566100613),expr__30103))){
return (new thi.ng.geom.physics.core.PullbackSpring(self__.a,self__.b,G__30098,self__.min_len,self__.strength,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30102.call(null,new cljs.core.Keyword(null,"min-len","min-len",-717560485),expr__30103))){
return (new thi.ng.geom.physics.core.PullbackSpring(self__.a,self__.b,self__.rest_len,G__30098,self__.strength,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30102.call(null,new cljs.core.Keyword(null,"strength","strength",-415606478),expr__30103))){
return (new thi.ng.geom.physics.core.PullbackSpring(self__.a,self__.b,self__.rest_len,self__.min_len,G__30098,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.physics.core.PullbackSpring(self__.a,self__.b,self__.rest_len,self__.min_len,self__.strength,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__30098),null));
}
}
}
}
}
});

thi.ng.geom.physics.core.PullbackSpring.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"b","b",1482224470),self__.b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest-len","rest-len",566100613),self__.rest_len],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"min-len","min-len",-717560485),self__.min_len],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"strength","strength",-415606478),self__.strength],null))], null),self__.__extmap));
});

thi.ng.geom.physics.core.PullbackSpring.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__30098){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.physics.core.PullbackSpring(self__.a,self__.b,self__.rest_len,self__.min_len,self__.strength,G__30098,self__.__extmap,self__.__hash));
});

thi.ng.geom.physics.core.PullbackSpring.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.physics.core.PullbackSpring.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"VerletParticle","VerletParticle",1056549144,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"VerletParticle","VerletParticle",1056549144,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"rest-len","rest-len",-2088335156,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"min-len","min-len",922971042,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"strength","strength",1224925049,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
});

thi.ng.geom.physics.core.PullbackSpring.cljs$lang$type = true;

thi.ng.geom.physics.core.PullbackSpring.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.physics.core/PullbackSpring");
});

thi.ng.geom.physics.core.PullbackSpring.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.physics.core/PullbackSpring");
});

thi.ng.geom.physics.core.__GT_PullbackSpring = (function thi$ng$geom$physics$core$__GT_PullbackSpring(a,b,rest_len,min_len,strength){
return (new thi.ng.geom.physics.core.PullbackSpring(a,b,rest_len,min_len,strength,null,null,null));
});

thi.ng.geom.physics.core.map__GT_PullbackSpring = (function thi$ng$geom$physics$core$map__GT_PullbackSpring(G__30100){
return (new thi.ng.geom.physics.core.PullbackSpring(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__30100),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(G__30100),new cljs.core.Keyword(null,"rest-len","rest-len",566100613).cljs$core$IFn$_invoke$arity$1(G__30100),new cljs.core.Keyword(null,"min-len","min-len",-717560485).cljs$core$IFn$_invoke$arity$1(G__30100),new cljs.core.Keyword(null,"strength","strength",-415606478).cljs$core$IFn$_invoke$arity$1(G__30100),null,cljs.core.dissoc.call(null,G__30100,new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"rest-len","rest-len",566100613),new cljs.core.Keyword(null,"min-len","min-len",-717560485),new cljs.core.Keyword(null,"strength","strength",-415606478)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {thi.ng.geom.physics.core.PPhysics}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.geom.physics.core.PBehavioral}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.geom.physics.core.PTimeStep}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {thi.ng.geom.physics.core.PConstrained}
*/
thi.ng.geom.physics.core.VerletPhysics = (function (particles,springs,behaviors,constraints,listeners,drag,__meta,__extmap,__hash){
this.particles = particles;
this.springs = springs;
this.behaviors = behaviors;
this.constraints = constraints;
this.listeners = listeners;
this.drag = drag;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.physics.core.VerletPhysics.prototype.thi$ng$geom$physics$core$PBehavioral$ = true;

thi.ng.geom.physics.core.VerletPhysics.prototype.thi$ng$geom$physics$core$PBehavioral$add_behaviors$arity$2 = (function (_,bmap){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.call(null,___$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"behaviors","behaviors",120724909)], null),cljs.core.merge,bmap);
});

thi.ng.geom.physics.core.VerletPhysics.prototype.thi$ng$geom$physics$core$PBehavioral$apply_behaviors$arity$2 = (function (_,delta){
var self__ = this;
var ___$1 = this;
thi.ng.geom.physics.core.apply_to_particles.call(null,self__.particles,delta,cljs.core.vals.call(null,self__.behaviors));

return ___$1;
});

thi.ng.geom.physics.core.VerletPhysics.prototype.thi$ng$geom$physics$core$PBehavioral$remove_behavior$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.call(null,___$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"behaviors","behaviors",120724909)], null),cljs.core.dissoc,id);
});

thi.ng.geom.physics.core.VerletPhysics.prototype.thi$ng$geom$physics$core$PBehavioral$clear_behaviors$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.call(null,___$1,self__.behaviors,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.physics.core.VerletPhysics.prototype.thi$ng$geom$physics$core$PTimeStep$ = true;

thi.ng.geom.physics.core.VerletPhysics.prototype.thi$ng$geom$physics$core$PTimeStep$timestep$arity$2 = (function (_,iter){
var self__ = this;
var ___$1 = this;
var delta_30113 = (1.0 / iter);
var temp__4655__auto___30114 = new cljs.core.Keyword(null,"timestep","timestep",-1557942486).cljs$core$IFn$_invoke$arity$1(self__.listeners);
if(cljs.core.truth_(temp__4655__auto___30114)){
var l_30115 = temp__4655__auto___30114;
l_30115.call(null,___$1);
} else {
}

var i_30116 = iter;
while(true){
if((i_30116 > (0))){
var temp__4655__auto___30117 = new cljs.core.Keyword(null,"iter","iter",1308240283).cljs$core$IFn$_invoke$arity$1(self__.listeners);
if(cljs.core.truth_(temp__4655__auto___30117)){
var l_30118 = temp__4655__auto___30117;
l_30118.call(null,___$1,i_30116);
} else {
}

thi.ng.geom.physics.core.apply_constraints.call(null,thi.ng.geom.physics.core.update_particles.call(null,thi.ng.geom.physics.core.update_springs.call(null,thi.ng.geom.physics.core.apply_behaviors.call(null,___$1,delta_30113),delta_30113),delta_30113),delta_30113);

var G__30119 = (i_30116 - (1));
i_30116 = G__30119;
continue;
} else {
}
break;
}

return ___$1;
});

thi.ng.geom.physics.core.VerletPhysics.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.physics.core.VerletPhysics.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k30107,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__30109 = (((k30107 instanceof cljs.core.Keyword))?k30107.fqn:null);
switch (G__30109) {
case "particles":
return self__.particles;

break;
case "springs":
return self__.springs;

break;
case "behaviors":
return self__.behaviors;

break;
case "constraints":
return self__.constraints;

break;
case "listeners":
return self__.listeners;

break;
case "drag":
return self__.drag;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30107,else__18892__auto__);

}
});

thi.ng.geom.physics.core.VerletPhysics.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.physics.core.VerletPhysics{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"particles","particles",801881788),self__.particles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"springs","springs",-1422009794),self__.springs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"behaviors","behaviors",120724909),self__.behaviors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"constraints","constraints",422775616),self__.constraints],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drag","drag",449951290),self__.drag],null))], null),self__.__extmap));
});

thi.ng.geom.physics.core.VerletPhysics.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.physics.core.VerletPhysics.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30106){
var self__ = this;
var G__30106__$1 = this;
return (new cljs.core.RecordIter((0),G__30106__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"particles","particles",801881788),new cljs.core.Keyword(null,"springs","springs",-1422009794),new cljs.core.Keyword(null,"behaviors","behaviors",120724909),new cljs.core.Keyword(null,"constraints","constraints",422775616),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.Keyword(null,"drag","drag",449951290)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.physics.core.VerletPhysics.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.physics.core.VerletPhysics.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.physics.core.VerletPhysics(self__.particles,self__.springs,self__.behaviors,self__.constraints,self__.listeners,self__.drag,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.physics.core.VerletPhysics.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.physics.core.VerletPhysics.prototype.thi$ng$geom$physics$core$PPhysics$ = true;

thi.ng.geom.physics.core.VerletPhysics.prototype.thi$ng$geom$physics$core$PPhysics$update_particles$arity$2 = (function (_,delta){
var self__ = this;
var ___$1 = this;
var drag_SINGLEQUOTE__30121 = (delta * self__.drag);
var ps_30122 = cljs.core.seq.call(null,self__.particles);
while(true){
if(ps_30122){
thi.ng.geom.physics.core.timestep.call(null,thi.ng.geom.physics.core.scale_velocity.call(null,cljs.core.first.call(null,ps_30122),drag_SINGLEQUOTE__30121),delta);

var G__30123 = cljs.core.next.call(null,ps_30122);
ps_30122 = G__30123;
continue;
} else {
}
break;
}

return ___$1;
});

thi.ng.geom.physics.core.VerletPhysics.prototype.thi$ng$geom$physics$core$PPhysics$update_springs$arity$2 = (function (_,delta){
var self__ = this;
var ___$1 = this;
var s_30124 = cljs.core.seq.call(null,self__.springs);
while(true){
if(s_30124){
thi.ng.geom.physics.core.timestep.call(null,cljs.core.first.call(null,s_30124),delta);

var G__30125 = cljs.core.next.call(null,s_30124);
s_30124 = G__30125;
continue;
} else {
}
break;
}

return ___$1;
});

thi.ng.geom.physics.core.VerletPhysics.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
var self__ = this;
var this__18884__auto____$1 = this;
var h__18710__auto__ = self__.__hash;
if(!((h__18710__auto__ == null))){
return h__18710__auto__;
} else {
var h__18710__auto____$1 = cljs.core.hash_imap.call(null,this__18884__auto____$1);
self__.__hash = h__18710__auto____$1;

return h__18710__auto____$1;
}
});

thi.ng.geom.physics.core.VerletPhysics.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
var self__ = this;
var this__18885__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18263__auto__ = other__18886__auto__;
if(cljs.core.truth_(and__18263__auto__)){
var and__18263__auto____$1 = (this__18885__auto____$1.constructor === other__18886__auto__.constructor);
if(and__18263__auto____$1){
return cljs.core.equiv_map.call(null,this__18885__auto____$1,other__18886__auto__);
} else {
return and__18263__auto____$1;
}
} else {
return and__18263__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.physics.core.VerletPhysics.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"constraints","constraints",422775616),null,new cljs.core.Keyword(null,"behaviors","behaviors",120724909),null,new cljs.core.Keyword(null,"drag","drag",449951290),null,new cljs.core.Keyword(null,"particles","particles",801881788),null,new cljs.core.Keyword(null,"listeners","listeners",394544445),null,new cljs.core.Keyword(null,"springs","springs",-1422009794),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.physics.core.VerletPhysics(self__.particles,self__.springs,self__.behaviors,self__.constraints,self__.listeners,self__.drag,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.physics.core.VerletPhysics.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__30106){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__30110 = cljs.core.keyword_identical_QMARK_;
var expr__30111 = k__18897__auto__;
if(cljs.core.truth_(pred__30110.call(null,new cljs.core.Keyword(null,"particles","particles",801881788),expr__30111))){
return (new thi.ng.geom.physics.core.VerletPhysics(G__30106,self__.springs,self__.behaviors,self__.constraints,self__.listeners,self__.drag,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30110.call(null,new cljs.core.Keyword(null,"springs","springs",-1422009794),expr__30111))){
return (new thi.ng.geom.physics.core.VerletPhysics(self__.particles,G__30106,self__.behaviors,self__.constraints,self__.listeners,self__.drag,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30110.call(null,new cljs.core.Keyword(null,"behaviors","behaviors",120724909),expr__30111))){
return (new thi.ng.geom.physics.core.VerletPhysics(self__.particles,self__.springs,G__30106,self__.constraints,self__.listeners,self__.drag,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30110.call(null,new cljs.core.Keyword(null,"constraints","constraints",422775616),expr__30111))){
return (new thi.ng.geom.physics.core.VerletPhysics(self__.particles,self__.springs,self__.behaviors,G__30106,self__.listeners,self__.drag,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30110.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445),expr__30111))){
return (new thi.ng.geom.physics.core.VerletPhysics(self__.particles,self__.springs,self__.behaviors,self__.constraints,G__30106,self__.drag,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30110.call(null,new cljs.core.Keyword(null,"drag","drag",449951290),expr__30111))){
return (new thi.ng.geom.physics.core.VerletPhysics(self__.particles,self__.springs,self__.behaviors,self__.constraints,self__.listeners,G__30106,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.physics.core.VerletPhysics(self__.particles,self__.springs,self__.behaviors,self__.constraints,self__.listeners,self__.drag,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__30106),null));
}
}
}
}
}
}
});

thi.ng.geom.physics.core.VerletPhysics.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"particles","particles",801881788),self__.particles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"springs","springs",-1422009794),self__.springs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"behaviors","behaviors",120724909),self__.behaviors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"constraints","constraints",422775616),self__.constraints],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drag","drag",449951290),self__.drag],null))], null),self__.__extmap));
});

thi.ng.geom.physics.core.VerletPhysics.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__30106){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.physics.core.VerletPhysics(self__.particles,self__.springs,self__.behaviors,self__.constraints,self__.listeners,self__.drag,G__30106,self__.__extmap,self__.__hash));
});

thi.ng.geom.physics.core.VerletPhysics.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.physics.core.VerletPhysics.prototype.thi$ng$geom$physics$core$PConstrained$ = true;

thi.ng.geom.physics.core.VerletPhysics.prototype.thi$ng$geom$physics$core$PConstrained$add_constraints$arity$2 = (function (_,cmap){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.call(null,___$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints","constraints",422775616)], null),cljs.core.merge,cmap);
});

thi.ng.geom.physics.core.VerletPhysics.prototype.thi$ng$geom$physics$core$PConstrained$apply_constraints$arity$2 = (function (_,delta){
var self__ = this;
var ___$1 = this;
thi.ng.geom.physics.core.apply_to_particles.call(null,self__.particles,delta,cljs.core.vals.call(null,self__.constraints));

return ___$1;
});

thi.ng.geom.physics.core.VerletPhysics.prototype.thi$ng$geom$physics$core$PConstrained$remove_constraint$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.call(null,___$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints","constraints",422775616)], null),cljs.core.dissoc,id);
});

thi.ng.geom.physics.core.VerletPhysics.prototype.thi$ng$geom$physics$core$PConstrained$clear_constraints$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.call(null,___$1,self__.constraints,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.physics.core.VerletPhysics.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"particles","particles",-1852553981,null),new cljs.core.Symbol(null,"springs","springs",218521733,null),new cljs.core.Symbol(null,"behaviors","behaviors",1761256436,null),new cljs.core.Symbol(null,"constraints","constraints",2063307143,null),new cljs.core.Symbol(null,"listeners","listeners",2035075972,null),new cljs.core.Symbol(null,"drag","drag",2090482817,null)], null);
});

thi.ng.geom.physics.core.VerletPhysics.cljs$lang$type = true;

thi.ng.geom.physics.core.VerletPhysics.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.physics.core/VerletPhysics");
});

thi.ng.geom.physics.core.VerletPhysics.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.physics.core/VerletPhysics");
});

thi.ng.geom.physics.core.__GT_VerletPhysics = (function thi$ng$geom$physics$core$__GT_VerletPhysics(particles,springs,behaviors,constraints,listeners,drag){
return (new thi.ng.geom.physics.core.VerletPhysics(particles,springs,behaviors,constraints,listeners,drag,null,null,null));
});

thi.ng.geom.physics.core.map__GT_VerletPhysics = (function thi$ng$geom$physics$core$map__GT_VerletPhysics(G__30108){
return (new thi.ng.geom.physics.core.VerletPhysics(new cljs.core.Keyword(null,"particles","particles",801881788).cljs$core$IFn$_invoke$arity$1(G__30108),new cljs.core.Keyword(null,"springs","springs",-1422009794).cljs$core$IFn$_invoke$arity$1(G__30108),new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$1(G__30108),new cljs.core.Keyword(null,"constraints","constraints",422775616).cljs$core$IFn$_invoke$arity$1(G__30108),new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(G__30108),new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(G__30108),null,cljs.core.dissoc.call(null,G__30108,new cljs.core.Keyword(null,"particles","particles",801881788),new cljs.core.Keyword(null,"springs","springs",-1422009794),new cljs.core.Keyword(null,"behaviors","behaviors",120724909),new cljs.core.Keyword(null,"constraints","constraints",422775616),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.Keyword(null,"drag","drag",449951290)),null));
});

thi.ng.geom.physics.core.physics = (function thi$ng$geom$physics$core$physics(p__30126){
var map__30129 = p__30126;
var map__30129__$1 = ((((!((map__30129 == null)))?((((map__30129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30129):map__30129);
var particles = cljs.core.get.call(null,map__30129__$1,new cljs.core.Keyword(null,"particles","particles",801881788),cljs.core.PersistentVector.EMPTY);
var springs = cljs.core.get.call(null,map__30129__$1,new cljs.core.Keyword(null,"springs","springs",-1422009794),cljs.core.PersistentVector.EMPTY);
var behaviors = cljs.core.get.call(null,map__30129__$1,new cljs.core.Keyword(null,"behaviors","behaviors",120724909),cljs.core.PersistentArrayMap.EMPTY);
var constraints = cljs.core.get.call(null,map__30129__$1,new cljs.core.Keyword(null,"constraints","constraints",422775616),cljs.core.PersistentArrayMap.EMPTY);
var drag = cljs.core.get.call(null,map__30129__$1,new cljs.core.Keyword(null,"drag","drag",449951290),0.0);
var listeners = cljs.core.get.call(null,map__30129__$1,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentArrayMap.EMPTY);
return (new thi.ng.geom.physics.core.VerletPhysics(cljs.core.vec.call(null,particles),cljs.core.vec.call(null,springs),behaviors,constraints,listeners,drag,null,null,null));
});
thi.ng.geom.physics.core.particle = (function thi$ng$geom$physics$core$particle(var_args){
var args__19340__auto__ = [];
var len__19333__auto___30135 = arguments.length;
var i__19334__auto___30136 = (0);
while(true){
if((i__19334__auto___30136 < len__19333__auto___30135)){
args__19340__auto__.push((arguments[i__19334__auto___30136]));

var G__30137 = (i__19334__auto___30136 + (1));
i__19334__auto___30136 = G__30137;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((1) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((1)),(0))):null);
return thi.ng.geom.physics.core.particle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19341__auto__);
});

thi.ng.geom.physics.core.particle.cljs$core$IFn$_invoke$arity$variadic = (function (pos,p__30133){
var vec__30134 = p__30133;
var weight = cljs.core.nth.call(null,vec__30134,(0),null);
var lock_QMARK_ = cljs.core.nth.call(null,vec__30134,(1),null);
var w = (function (){var or__18275__auto__ = weight;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return 1.0;
}
})();
return (new thi.ng.geom.physics.core.VerletParticle(pos,thi.ng.geom.core.clear_STAR_.call(null,pos),thi.ng.geom.core.clear_STAR_.call(null,pos),lock_QMARK_,null,null,(1.0 / w),null));
});

thi.ng.geom.physics.core.particle.cljs$lang$maxFixedArity = (1);

thi.ng.geom.physics.core.particle.cljs$lang$applyTo = (function (seq30131){
var G__30132 = cljs.core.first.call(null,seq30131);
var seq30131__$1 = cljs.core.next.call(null,seq30131);
return thi.ng.geom.physics.core.particle.cljs$core$IFn$_invoke$arity$variadic(G__30132,seq30131__$1);
});
thi.ng.geom.physics.core.spring = (function thi$ng$geom$physics$core$spring(a,b,rlen,strength){
return (new thi.ng.geom.physics.core.Spring(a,b,rlen,strength,null,null,null));
});
thi.ng.geom.physics.core.gravity = (function thi$ng$geom$physics$core$gravity(force){
return (function (p,delta){
return thi.ng.geom.physics.core.add_force.call(null,p,thi.ng.geom.core._STAR_.call(null,force,delta));
});
});
thi.ng.geom.physics.core.attract = (function thi$ng$geom$physics$core$attract(pos,r,strength){
var rsq = (r * r);
return ((function (rsq){
return (function (p,delta){
var d = thi.ng.geom.core._.call(null,pos,thi.ng.geom.physics.core.position.call(null,p));
var l = (thi.ng.geom.core.mag_squared.call(null,d) + 1.0E-6);
if((l < rsq)){
return thi.ng.geom.physics.core.add_force.call(null,p,thi.ng.geom.core._STAR_.call(null,d,(((1.0 - (l / rsq)) * (strength * delta)) / Math.sqrt(l))));
} else {
return null;
}
});
;})(rsq))
});
thi.ng.geom.physics.core.attract_particle = (function thi$ng$geom$physics$core$attract_particle(p,r,strength){
var rsq = (r * r);
return ((function (rsq){
return (function (q,delta){
if(!(cljs.core._EQ_.call(null,p,q))){
var d = thi.ng.geom.core._.call(null,thi.ng.geom.physics.core.position.call(null,p),thi.ng.geom.physics.core.position.call(null,q));
var l = (thi.ng.geom.core.mag_squared.call(null,d) + 1.0E-6);
if((l < rsq)){
return thi.ng.geom.physics.core.add_force.call(null,q,thi.ng.geom.core._STAR_.call(null,d,(((1.0 - (l / rsq)) * (strength * delta)) / Math.sqrt(l))));
} else {
return null;
}
} else {
return null;
}
});
;})(rsq))
});
thi.ng.geom.physics.core.align = (function thi$ng$geom$physics$core$align(vel,strength){
return (function (p,delta){
return thi.ng.geom.physics.core.add_force.call(null,p,thi.ng.geom.core.subm.call(null,vel,thi.ng.geom.physics.core.velocity.call(null,p),(strength * delta)));
});
});
thi.ng.geom.physics.core.shape_constraint_STAR_ = (function thi$ng$geom$physics$core$shape_constraint_STAR_(pred,shape){
return (function (p,_){
var pos = thi.ng.geom.physics.core.position.call(null,p);
if(cljs.core.truth_(pred.call(null,pos))){
return thi.ng.geom.physics.core.set_position.call(null,p,thi.ng.geom.core.closest_point.call(null,shape,pos));
} else {
return null;
}
});
});
thi.ng.geom.physics.core.shape_constraint_inside = (function thi$ng$geom$physics$core$shape_constraint_inside(shape){
return thi.ng.geom.physics.core.shape_constraint_STAR_.call(null,(function (p1__30138_SHARP_){
return cljs.core.not.call(null,thi.ng.geom.core.contains_point_QMARK_.call(null,shape,p1__30138_SHARP_));
}),shape);
});
thi.ng.geom.physics.core.shape_constraint_outside = (function thi$ng$geom$physics$core$shape_constraint_outside(shape){
return thi.ng.geom.physics.core.shape_constraint_STAR_.call(null,(function (p1__30139_SHARP_){
return thi.ng.geom.core.contains_point_QMARK_.call(null,shape,p1__30139_SHARP_);
}),shape);
});
thi.ng.geom.physics.core.shape_constraint_boundary = (function thi$ng$geom$physics$core$shape_constraint_boundary(shape){
return thi.ng.geom.physics.core.shape_constraint_STAR_.call(null,cljs.core.identity,shape);
});
thi.ng.geom.physics.core.distance_constraint = (function thi$ng$geom$physics$core$distance_constraint(pred,p,r){
var rsq = (r * r);
return ((function (rsq){
return (function (q,_){
var pos = thi.ng.geom.physics.core.position.call(null,q);
if(cljs.core.truth_(pred.call(null,thi.ng.geom.core.dist_squared.call(null,p,pos),rsq))){
return thi.ng.geom.physics.core.set_position.call(null,q,thi.ng.geom.core._PLUS__BANG_.call(null,thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,pos,p),r),p));
} else {
return null;
}
});
;})(rsq))
});

//# sourceMappingURL=core.js.map