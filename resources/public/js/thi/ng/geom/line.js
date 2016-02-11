// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.line');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.types');
thi.ng.geom.line.line2 = (function thi$ng$geom$line$line2(var_args){
var args24261 = [];
var len__19333__auto___24266 = arguments.length;
var i__19334__auto___24267 = (0);
while(true){
if((i__19334__auto___24267 < len__19333__auto___24266)){
args24261.push((arguments[i__19334__auto___24267]));

var G__24268 = (i__19334__auto___24267 + (1));
i__19334__auto___24267 = G__24268;
continue;
} else {
}
break;
}

var G__24263 = args24261.length;
switch (G__24263) {
case 1:
return thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24261.length)].join('')));

}
});

thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$1 = (function (p__24264){
var vec__24265 = p__24264;
var p = cljs.core.nth.call(null,vec__24265,(0),null);
var q = cljs.core.nth.call(null,vec__24265,(1),null);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec2.call(null,p),thi.ng.geom.core.vector.vec2.call(null,q)], null)));
});

thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$2 = (function (p,q){
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec2.call(null,p),thi.ng.geom.core.vector.vec2.call(null,q)], null)));
});

thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$4 = (function (px,py,qx,qy){
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec2.call(null,px,py),thi.ng.geom.core.vector.vec2.call(null,qx,qy)], null)));
});

thi.ng.geom.line.line2.cljs$lang$maxFixedArity = 4;
thi.ng.geom.line.line3 = (function thi$ng$geom$line$line3(var_args){
var args24270 = [];
var len__19333__auto___24275 = arguments.length;
var i__19334__auto___24276 = (0);
while(true){
if((i__19334__auto___24276 < len__19333__auto___24275)){
args24270.push((arguments[i__19334__auto___24276]));

var G__24277 = (i__19334__auto___24276 + (1));
i__19334__auto___24276 = G__24277;
continue;
} else {
}
break;
}

var G__24272 = args24270.length;
switch (G__24272) {
case 1:
return thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24270.length)].join('')));

}
});

thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$1 = (function (p__24273){
var vec__24274 = p__24273;
var p = cljs.core.nth.call(null,vec__24274,(0),null);
var q = cljs.core.nth.call(null,vec__24274,(1),null);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,p),thi.ng.geom.core.vector.vec3.call(null,q)], null)));
});

thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$2 = (function (p,q){
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,p),thi.ng.geom.core.vector.vec3.call(null,q)], null)));
});

thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$4 = (function (px,py,qx,qy){
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,px,py),thi.ng.geom.core.vector.vec3.call(null,qx,qy)], null)));
});

thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$6 = (function (px,py,pz,qx,qy,qz){
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,px,py,pz),thi.ng.geom.core.vector.vec3.call(null,qx,qy,qz)], null)));
});

thi.ng.geom.line.line3.cljs$lang$maxFixedArity = 6;
thi.ng.geom.line.linestrip2 = (function thi$ng$geom$line$linestrip2(var_args){
var args24279 = [];
var len__19333__auto___24284 = arguments.length;
var i__19334__auto___24285 = (0);
while(true){
if((i__19334__auto___24285 < len__19333__auto___24284)){
args24279.push((arguments[i__19334__auto___24285]));

var G__24286 = (i__19334__auto___24285 + (1));
i__19334__auto___24285 = G__24286;
continue;
} else {
}
break;
}

var G__24283 = args24279.length;
switch (G__24283) {
case 1:
return thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__19352__auto__ = (new cljs.core.IndexedSeq(args24279.slice((1)),(0)));
return thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19352__auto__);

}
});

thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$1 = (function (points){
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec2,points)));
});

thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$variadic = (function (p,more){
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec2,cljs.core.cons.call(null,p,more))));
});

thi.ng.geom.line.linestrip2.cljs$lang$applyTo = (function (seq24280){
var G__24281 = cljs.core.first.call(null,seq24280);
var seq24280__$1 = cljs.core.next.call(null,seq24280);
return thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$variadic(G__24281,seq24280__$1);
});

thi.ng.geom.line.linestrip2.cljs$lang$maxFixedArity = (1);
thi.ng.geom.line.reflect_on_ray = (function thi$ng$geom$line$reflect_on_ray(ctor,p,q,rc,dir){
return ctor.call(null,thi.ng.geom.core._PLUS_.call(null,rc,thi.ng.geom.core.reflect.call(null,thi.ng.geom.core._.call(null,p,rc),dir)),thi.ng.geom.core._PLUS_.call(null,rc,thi.ng.geom.core.reflect.call(null,thi.ng.geom.core._.call(null,q,rc),dir)));
});
thi.ng.geom.line.reflect_on_line = (function thi$ng$geom$line$reflect_on_line(ctor,p,q,rp,rq){
return thi.ng.geom.line.reflect_on_ray.call(null,ctor,p,q,thi.ng.geom.core.mix.call(null,rp,rq),thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,rq,rp)));
});
thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (p__24288,m){
var map__24289 = p__24288;
var map__24289__$1 = ((((!((map__24289 == null)))?((((map__24289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24289):map__24289);
var p = cljs.core.get.call(null,map__24289__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24291 = this;
var map__24291__$1 = ((((!((map__24291 == null)))?((((map__24291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24291):map__24291);
var p__$1 = cljs.core.get.call(null,map__24291__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.transform_vector.call(null,m,p__$1.call(null,(0))),thi.ng.geom.core.transform_vector.call(null,m,p__$1.call(null,(1)))], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (p__24293,theta){
var map__24294 = p__24293;
var map__24294__$1 = ((((!((map__24294 == null)))?((((map__24294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24294):map__24294);
var p = cljs.core.get.call(null,map__24294__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24296 = this;
var map__24296__$1 = ((((!((map__24296 == null)))?((((map__24296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24296):map__24296);
var p__$1 = cljs.core.get.call(null,map__24296__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate.call(null,p__$1.call(null,(0)),theta),thi.ng.geom.core.rotate.call(null,p__$1.call(null,(1)),theta)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (p__24298){
var map__24299 = p__24298;
var map__24299__$1 = ((((!((map__24299 == null)))?((((map__24299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24299):map__24299);
var vec__24300 = cljs.core.get.call(null,map__24299__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__24300,(0),null);
var q = cljs.core.nth.call(null,vec__24300,(1),null);
var map__24302 = this;
var map__24302__$1 = ((((!((map__24302 == null)))?((((map__24302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24302):map__24302);
var vec__24303 = cljs.core.get.call(null,map__24302__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__24303,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__24303,(1),null);
var d = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,q__$1,p__$1));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.geom.core._PLUS_.call(null,p__$1,d)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (p__24305,n){
var map__24306 = p__24305;
var map__24306__$1 = ((((!((map__24306 == null)))?((((map__24306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24306):map__24306);
var vec__24307 = cljs.core.get.call(null,map__24306__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__24307,(0),null);
var q = cljs.core.nth.call(null,vec__24307,(1),null);
var map__24309 = this;
var map__24309__$1 = ((((!((map__24309 == null)))?((((map__24309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24309):map__24309);
var vec__24310 = cljs.core.get.call(null,map__24309__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__24310,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__24310,(1),null);
var d = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,q__$1,p__$1),n);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.geom.core._PLUS_.call(null,p__$1,d)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.geom.core.mag_squared.call(null,___$1));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (p__24312,r){
var map__24313 = p__24312;
var map__24313__$1 = ((((!((map__24313 == null)))?((((map__24313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24313):map__24313);
var vec__24314 = cljs.core.get.call(null,map__24313__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__24314,(0),null);
var q = cljs.core.nth.call(null,vec__24314,(1),null);
var map__24316 = this;
var map__24316__$1 = ((((!((map__24316 == null)))?((((map__24316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24316):map__24316);
var vec__24317 = cljs.core.get.call(null,map__24316__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__24317,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__24317,(1),null);
if((r instanceof thi.ng.geom.types.Line2)){
var vec__24319 = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(r);
var pr = cljs.core.nth.call(null,vec__24319,(0),null);
var qr = cljs.core.nth.call(null,vec__24319,(1),null);
return thi.ng.geom.line.reflect_on_line.call(null,thi.ng.geom.line.line2,p__$1,q__$1,pr,qr);
} else {
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.reflect.call(null,p__$1,r),thi.ng.geom.core.reflect.call(null,q__$1,r)], null)));
}
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (p__24320){
var map__24321 = p__24320;
var map__24321__$1 = ((((!((map__24321 == null)))?((((map__24321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24321):map__24321);
var vec__24322 = cljs.core.get.call(null,map__24321__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__24322,(0),null);
var q = cljs.core.nth.call(null,vec__24322,(1),null);
var map__24324 = this;
var map__24324__$1 = ((((!((map__24324 == null)))?((((map__24324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24324):map__24324);
var vec__24325 = cljs.core.get.call(null,map__24324__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__24325,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__24325,(1),null);
var c = thi.ng.geom.core.mix.call(null,p__$1,q__$1);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._.call(null,p__$1,c),thi.ng.geom.core._.call(null,q__$1,c)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (p__24327,o){
var map__24328 = p__24327;
var map__24328__$1 = ((((!((map__24328 == null)))?((((map__24328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24328):map__24328);
var vec__24329 = cljs.core.get.call(null,map__24328__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__24329,(0),null);
var q = cljs.core.nth.call(null,vec__24329,(1),null);
var map__24331 = this;
var map__24331__$1 = ((((!((map__24331 == null)))?((((map__24331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24331):map__24331);
var vec__24332 = cljs.core.get.call(null,map__24331__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__24332,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__24332,(1),null);
var c = thi.ng.geom.core._.call(null,o,thi.ng.geom.core.mix.call(null,p__$1,q__$1));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,p__$1,c),thi.ng.geom.core._PLUS_.call(null,q__$1,c)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (p__24334){
var map__24335 = p__24334;
var map__24335__$1 = ((((!((map__24335 == null)))?((((map__24335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24335):map__24335);
var p = cljs.core.get.call(null,map__24335__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24337 = this;
var map__24337__$1 = ((((!((map__24337 == null)))?((((map__24337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24337):map__24337);
var p__$1 = cljs.core.get.call(null,map__24337__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.mix.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (p__24339,t){
var map__24340 = p__24339;
var map__24340__$1 = ((((!((map__24340 == null)))?((((map__24340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24340):map__24340);
var p = cljs.core.get.call(null,map__24340__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24342 = this;
var map__24342__$1 = ((((!((map__24342 == null)))?((((map__24342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24342):map__24342);
var p__$1 = cljs.core.get.call(null,map__24342__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.mix.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)),t);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__24344){
var map__24345 = p__24344;
var map__24345__$1 = ((((!((map__24345 == null)))?((((map__24345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24345):map__24345);
var p = cljs.core.get.call(null,map__24345__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24347 = this;
var map__24347__$1 = ((((!((map__24347 == null)))?((((map__24347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24347):map__24347);
var p__$1 = cljs.core.get.call(null,map__24347__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.mix.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)),thi.ng.math.core.random.call(null));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (p__24349){
var map__24350 = p__24349;
var map__24350__$1 = ((((!((map__24350 == null)))?((((map__24350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24350):map__24350);
var p = cljs.core.get.call(null,map__24350__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24352 = this;
var map__24352__$1 = ((((!((map__24352 == null)))?((((map__24352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24352):map__24352);
var p__$1 = cljs.core.get.call(null,map__24352__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.mix.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)),thi.ng.math.core.random.call(null));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,dist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.core.utils.sample_uniform.call(null,dist,include_last_QMARK_,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (p__24354,v){
var map__24355 = p__24354;
var map__24355__$1 = ((((!((map__24355 == null)))?((((map__24355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24355):map__24355);
var vec__24356 = cljs.core.get.call(null,map__24355__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__24356,(0),null);
var q = cljs.core.nth.call(null,vec__24356,(1),null);
var map__24358 = this;
var map__24358__$1 = ((((!((map__24358 == null)))?((((map__24358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24358):map__24358);
var vec__24359 = cljs.core.get.call(null,map__24358__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__24359,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__24359,(1),null);
return thi.ng.math.core.signum.call(null,thi.ng.geom.core.dot.call(null,thi.ng.geom.core._.call(null,thi.ng.geom.core.vector.vec2.call(null,v),p__$1),thi.ng.geom.core.normal.call(null,thi.ng.geom.core._.call(null,q__$1,p__$1))),thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (p__24361,p__24362){
var map__24363 = p__24361;
var map__24363__$1 = ((((!((map__24363 == null)))?((((map__24363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24363):map__24363);
var _ = map__24363__$1;
var points = cljs.core.get.call(null,map__24363__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24364 = p__24362;
var map__24364__$1 = ((((!((map__24364 == null)))?((((map__24364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24364):map__24364);
var mesh = cljs.core.get.call(null,map__24364__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var depth = cljs.core.get.call(null,map__24364__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var scale = cljs.core.get.call(null,map__24364__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var offset = cljs.core.get.call(null,map__24364__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var map__24367 = this;
var map__24367__$1 = ((((!((map__24367 == null)))?((((map__24367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24367):map__24367);
var ___$1 = map__24367__$1;
var points__$1 = cljs.core.get.call(null,map__24367__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var tpoints = ((cljs.core._EQ_.call(null,1.0,scale))?points__$1:new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.scale_size.call(null,___$1,scale)));
var off = (function (){var or__18275__auto__ = offset;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.core.vector.vec3.call(null,(0),(0),depth);
}
})();
var a = thi.ng.geom.core.vector.vec3.call(null,points__$1.call(null,(0)));
var b = thi.ng.geom.core.vector.vec3.call(null,points__$1.call(null,(1)));
var ta = thi.ng.geom.core._PLUS_.call(null,off,tpoints.call(null,(0)));
var tb = thi.ng.geom.core._PLUS_.call(null,off,tpoints.call(null,(1)));
return thi.ng.geom.core.add_face.call(null,(function (){var or__18275__auto__ = mesh;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,tb,ta], null));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1)], null);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.call(null,(2),thi.ng.geom.core.vertices.call(null,___$1,res));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__24369,q){
var map__24370 = p__24369;
var map__24370__$1 = ((((!((map__24370 == null)))?((((map__24370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24370):map__24370);
var p = cljs.core.get.call(null,map__24370__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24372 = this;
var map__24372__$1 = ((((!((map__24372 == null)))?((((map__24372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24372):map__24372);
var p__$1 = cljs.core.get.call(null,map__24372__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,thi.ng.geom.core.utils.closest_point_coeff.call(null,thi.ng.geom.core.vector.vec2.call(null,q),p__$1.call(null,(0)),p__$1.call(null,(1))));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (p__24374,l){
var map__24375 = p__24374;
var map__24375__$1 = ((((!((map__24375 == null)))?((((map__24375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24375):map__24375);
var vec__24376 = cljs.core.get.call(null,map__24375__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__24376,(0),null);
var b = cljs.core.nth.call(null,vec__24376,(1),null);
var map__24378 = this;
var map__24378__$1 = ((((!((map__24378 == null)))?((((map__24378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24378):map__24378);
var vec__24379 = cljs.core.get.call(null,map__24378__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__24379,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__24379,(1),null);
var vec__24381 = (function (){var or__18275__auto__ = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(l);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return l;
}
})();
var c = cljs.core.nth.call(null,vec__24381,(0),null);
var d = cljs.core.nth.call(null,vec__24381,(1),null);
return thi.ng.geom.core.intersect.intersect_line2_line2_QMARK_.call(null,a__$1,b__$1,c,d);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBoundingCircle$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBoundingCircle$bounding_circle$arity$1 = (function (p__24382){
var map__24383 = p__24382;
var map__24383__$1 = ((((!((map__24383 == null)))?((((map__24383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24383):map__24383);
var vec__24384 = cljs.core.get.call(null,map__24383__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__24384,(0),null);
var q = cljs.core.nth.call(null,vec__24384,(1),null);
var map__24386 = this;
var map__24386__$1 = ((((!((map__24386 == null)))?((((map__24386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24386):map__24386);
var vec__24387 = cljs.core.get.call(null,map__24386__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__24387,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__24387,(1),null);
return (new thi.ng.geom.types.Circle2(thi.ng.geom.core.mix.call(null,p__$1,q__$1),(0.5 * thi.ng.geom.core.dist.call(null,p__$1,q__$1))));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (p__24389,t){
var map__24390 = p__24389;
var map__24390__$1 = ((((!((map__24390 == null)))?((((map__24390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24390):map__24390);
var p = cljs.core.get.call(null,map__24390__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24392 = this;
var map__24392__$1 = ((((!((map__24392 == null)))?((((map__24392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24392):map__24392);
var p__$1 = cljs.core.get.call(null,map__24392__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,p__$1.call(null,(0)),t),thi.ng.geom.core._PLUS_.call(null,p__$1.call(null,(1)),t)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (p__24394,s){
var map__24395 = p__24394;
var map__24395__$1 = ((((!((map__24395 == null)))?((((map__24395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24395):map__24395);
var p = cljs.core.get.call(null,map__24395__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24397 = this;
var map__24397__$1 = ((((!((map__24397 == null)))?((((map__24397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24397):map__24397);
var p__$1 = cljs.core.get.call(null,map__24397__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._STAR_.call(null,p__$1.call(null,(0)),s),thi.ng.geom.core._STAR_.call(null,p__$1.call(null,(1)),s)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (p__24399,sx,sy){
var map__24400 = p__24399;
var map__24400__$1 = ((((!((map__24400 == null)))?((((map__24400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24400):map__24400);
var p = cljs.core.get.call(null,map__24400__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24402 = this;
var map__24402__$1 = ((((!((map__24402 == null)))?((((map__24402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24402):map__24402);
var p__$1 = cljs.core.get.call(null,map__24402__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._STAR_.call(null,p__$1.call(null,(0)),sx,sy),thi.ng.geom.core._STAR_.call(null,p__$1.call(null,(1)),sx,sy)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (p__24404,s){
var map__24405 = p__24404;
var map__24405__$1 = ((((!((map__24405 == null)))?((((map__24405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24405):map__24405);
var vec__24406 = cljs.core.get.call(null,map__24405__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__24406,(0),null);
var q = cljs.core.nth.call(null,vec__24406,(1),null);
var map__24408 = this;
var map__24408__$1 = ((((!((map__24408 == null)))?((((map__24408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24408):map__24408);
var vec__24409 = cljs.core.get.call(null,map__24408__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__24409,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__24409,(1),null);
var c = thi.ng.geom.core.mix.call(null,p__$1,q__$1);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.madd.call(null,thi.ng.geom.core._.call(null,p__$1,c),s,c),thi.ng.geom.core.madd.call(null,thi.ng.geom.core._.call(null,q__$1,c),s,c)], null)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (p__24411){
var map__24412 = p__24411;
var map__24412__$1 = ((((!((map__24412 == null)))?((((map__24412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24412):map__24412);
var p = cljs.core.get.call(null,map__24412__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24414 = this;
var map__24414__$1 = ((((!((map__24414 == null)))?((((map__24414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24414):map__24414);
var p__$1 = cljs.core.get.call(null,map__24414__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.dist.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_rect.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (p__24416){
var map__24417 = p__24416;
var map__24417__$1 = ((((!((map__24417 == null)))?((((map__24417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24417):map__24417);
var p = cljs.core.get.call(null,map__24417__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24419 = this;
var map__24419__$1 = ((((!((map__24419 == null)))?((((map__24419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24419):map__24419);
var p__$1 = cljs.core.get.call(null,map__24419__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.abs.call(null,(p__$1.call(null,(0)).call(null,(0)) - p__$1.call(null,(1)).call(null,(0))));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (p__24421){
var map__24422 = p__24421;
var map__24422__$1 = ((((!((map__24422 == null)))?((((map__24422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24422):map__24422);
var p = cljs.core.get.call(null,map__24422__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24424 = this;
var map__24424__$1 = ((((!((map__24424 == null)))?((((map__24424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24424):map__24424);
var p__$1 = cljs.core.get.call(null,map__24424__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.abs.call(null,(p__$1.call(null,(0)).call(null,(1)) - p__$1.call(null,(1)).call(null,(1))));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$2 = (function (p__24426,res){
var map__24427 = p__24426;
var map__24427__$1 = ((((!((map__24427 == null)))?((((map__24427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24427):map__24427);
var p = cljs.core.get.call(null,map__24427__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24429 = this;
var map__24429__$1 = ((((!((map__24429 == null)))?((((map__24429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24429):map__24429);
var p__$1 = cljs.core.get.call(null,map__24429__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.sample_segment_with_res.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)),res,true);
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (p__24431){
var map__24432 = p__24431;
var map__24432__$1 = ((((!((map__24432 == null)))?((((map__24432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24432):map__24432);
var p = cljs.core.get.call(null,map__24432__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24434 = this;
var map__24434__$1 = ((((!((map__24434 == null)))?((((map__24434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24434):map__24434);
var p__$1 = cljs.core.get.call(null,map__24434__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.dist.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (p__24436){
var map__24437 = p__24436;
var map__24437__$1 = ((((!((map__24437 == null)))?((((map__24437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24437):map__24437);
var p = cljs.core.get.call(null,map__24437__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24439 = this;
var map__24439__$1 = ((((!((map__24439 == null)))?((((map__24439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24439):map__24439);
var p__$1 = cljs.core.get.call(null,map__24439__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.dist_squared.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (p__24441,v){
var map__24442 = p__24441;
var map__24442__$1 = ((((!((map__24442 == null)))?((((map__24442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24442):map__24442);
var vec__24443 = cljs.core.get.call(null,map__24442__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__24443,(0),null);
var q = cljs.core.nth.call(null,vec__24443,(1),null);
var map__24445 = this;
var map__24445__$1 = ((((!((map__24445 == null)))?((((map__24445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24445):map__24445);
var vec__24446 = cljs.core.get.call(null,map__24445__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__24446,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__24446,(1),null);
var pred__24448 = cljs.core._EQ_;
var expr__24449 = v;
if(cljs.core.truth_(pred__24448.call(null,p__$1,expr__24449))){
return q__$1;
} else {
if(cljs.core.truth_(pred__24448.call(null,q__$1,expr__24449))){
return p__$1;
} else {
return null;
}
}
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (p__24452,v){
var map__24453 = p__24452;
var map__24453__$1 = ((((!((map__24453 == null)))?((((map__24453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24453):map__24453);
var p = cljs.core.get.call(null,map__24453__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24457 = this;
var map__24457__$1 = ((((!((map__24457 == null)))?((((map__24457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24457):map__24457);
var p__$1 = cljs.core.get.call(null,map__24457__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
if((cljs.core._EQ_.call(null,v,p__$1.call(null,(0)))) || (cljs.core._EQ_.call(null,v,p__$1.call(null,(1))))){
return (1);
} else {
return (0);
}
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (p__24465,q){
var map__24466 = p__24465;
var map__24466__$1 = ((((!((map__24466 == null)))?((((map__24466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24466):map__24466);
var p = cljs.core.get.call(null,map__24466__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24468 = this;
var map__24468__$1 = ((((!((map__24468 == null)))?((((map__24468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24468):map__24468);
var p__$1 = cljs.core.get.call(null,map__24468__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.closest_point_on_segment.call(null,thi.ng.geom.core.vector.vec2.call(null,q),p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return (0);
});
thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (p__24527,m){
var map__24528 = p__24527;
var map__24528__$1 = ((((!((map__24528 == null)))?((((map__24528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24528):map__24528);
var p = cljs.core.get.call(null,map__24528__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24530 = this;
var map__24530__$1 = ((((!((map__24530 == null)))?((((map__24530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24530):map__24530);
var p__$1 = cljs.core.get.call(null,map__24530__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.transform_vector.call(null,m,p__$1.call(null,(0))),thi.ng.geom.core.transform_vector.call(null,m,p__$1.call(null,(1)))], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (p__24532,theta){
var map__24533 = p__24532;
var map__24533__$1 = ((((!((map__24533 == null)))?((((map__24533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24533):map__24533);
var p = cljs.core.get.call(null,map__24533__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24535 = this;
var map__24535__$1 = ((((!((map__24535 == null)))?((((map__24535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24535):map__24535);
var p__$1 = cljs.core.get.call(null,map__24535__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate.call(null,p__$1.call(null,(0)),theta),thi.ng.geom.core.rotate.call(null,p__$1.call(null,(1)),theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (p__24537){
var map__24538 = p__24537;
var map__24538__$1 = ((((!((map__24538 == null)))?((((map__24538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24538):map__24538);
var vec__24539 = cljs.core.get.call(null,map__24538__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__24539,(0),null);
var q = cljs.core.nth.call(null,vec__24539,(1),null);
var map__24541 = this;
var map__24541__$1 = ((((!((map__24541 == null)))?((((map__24541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24541):map__24541);
var vec__24542 = cljs.core.get.call(null,map__24541__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__24542,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__24542,(1),null);
var d = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,q__$1,p__$1));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.geom.core._PLUS_.call(null,p__$1,d)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (p__24544,n){
var map__24545 = p__24544;
var map__24545__$1 = ((((!((map__24545 == null)))?((((map__24545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24545):map__24545);
var vec__24546 = cljs.core.get.call(null,map__24545__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__24546,(0),null);
var q = cljs.core.nth.call(null,vec__24546,(1),null);
var map__24548 = this;
var map__24548__$1 = ((((!((map__24548 == null)))?((((map__24548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24548):map__24548);
var vec__24549 = cljs.core.get.call(null,map__24548__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__24549,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__24549,(1),null);
var d = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,q__$1,p__$1),n);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.geom.core._PLUS_.call(null,p__$1,d)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.geom.core.mag_squared.call(null,___$1));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (p__24551,theta){
var map__24552 = p__24551;
var map__24552__$1 = ((((!((map__24552 == null)))?((((map__24552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24552):map__24552);
var p = cljs.core.get.call(null,map__24552__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24554 = this;
var map__24554__$1 = ((((!((map__24554 == null)))?((((map__24554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24554):map__24554);
var p__$1 = cljs.core.get.call(null,map__24554__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_x.call(null,p__$1.call(null,(0)),theta),thi.ng.geom.core.rotate_x.call(null,p__$1.call(null,(1)),theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (p__24556,theta){
var map__24557 = p__24556;
var map__24557__$1 = ((((!((map__24557 == null)))?((((map__24557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24557):map__24557);
var p = cljs.core.get.call(null,map__24557__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24559 = this;
var map__24559__$1 = ((((!((map__24559 == null)))?((((map__24559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24559):map__24559);
var p__$1 = cljs.core.get.call(null,map__24559__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_y.call(null,p__$1.call(null,(0)),theta),thi.ng.geom.core.rotate_y.call(null,p__$1.call(null,(1)),theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (p__24561,theta){
var map__24562 = p__24561;
var map__24562__$1 = ((((!((map__24562 == null)))?((((map__24562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24562):map__24562);
var p = cljs.core.get.call(null,map__24562__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24564 = this;
var map__24564__$1 = ((((!((map__24564 == null)))?((((map__24564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24564):map__24564);
var p__$1 = cljs.core.get.call(null,map__24564__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_z.call(null,p__$1.call(null,(0)),theta),thi.ng.geom.core.rotate_z.call(null,p__$1.call(null,(1)),theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (p__24566,axis,theta){
var map__24567 = p__24566;
var map__24567__$1 = ((((!((map__24567 == null)))?((((map__24567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24567):map__24567);
var p = cljs.core.get.call(null,map__24567__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24569 = this;
var map__24569__$1 = ((((!((map__24569 == null)))?((((map__24569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24569):map__24569);
var p__$1 = cljs.core.get.call(null,map__24569__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_around_axis.call(null,p__$1.call(null,(0)),axis,theta),thi.ng.geom.core.rotate_around_axis.call(null,p__$1.call(null,(1)),axis,theta)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (p__24571,r){
var map__24572 = p__24571;
var map__24572__$1 = ((((!((map__24572 == null)))?((((map__24572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24572):map__24572);
var vec__24573 = cljs.core.get.call(null,map__24572__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__24573,(0),null);
var q = cljs.core.nth.call(null,vec__24573,(1),null);
var map__24575 = this;
var map__24575__$1 = ((((!((map__24575 == null)))?((((map__24575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24575):map__24575);
var vec__24576 = cljs.core.get.call(null,map__24575__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__24576,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__24576,(1),null);
if((r instanceof thi.ng.geom.types.Line3)){
var vec__24578 = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(r);
var pr = cljs.core.nth.call(null,vec__24578,(0),null);
var qr = cljs.core.nth.call(null,vec__24578,(1),null);
return thi.ng.geom.line.reflect_on_line.call(null,thi.ng.geom.line.line3,p__$1,q__$1,pr,qr);
} else {
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.reflect.call(null,p__$1,r),thi.ng.geom.core.reflect.call(null,q__$1,r)], null)));
}
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (p__24579){
var map__24580 = p__24579;
var map__24580__$1 = ((((!((map__24580 == null)))?((((map__24580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24580):map__24580);
var vec__24581 = cljs.core.get.call(null,map__24580__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__24581,(0),null);
var q = cljs.core.nth.call(null,vec__24581,(1),null);
var map__24583 = this;
var map__24583__$1 = ((((!((map__24583 == null)))?((((map__24583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24583):map__24583);
var vec__24584 = cljs.core.get.call(null,map__24583__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__24584,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__24584,(1),null);
var c = thi.ng.geom.core.mix.call(null,p__$1,q__$1);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._.call(null,p__$1,c),thi.ng.geom.core._.call(null,q__$1,c)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (p__24586,o){
var map__24587 = p__24586;
var map__24587__$1 = ((((!((map__24587 == null)))?((((map__24587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24587):map__24587);
var vec__24588 = cljs.core.get.call(null,map__24587__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__24588,(0),null);
var q = cljs.core.nth.call(null,vec__24588,(1),null);
var map__24590 = this;
var map__24590__$1 = ((((!((map__24590 == null)))?((((map__24590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24590):map__24590);
var vec__24591 = cljs.core.get.call(null,map__24590__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__24591,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__24591,(1),null);
var c = thi.ng.geom.core._.call(null,o,thi.ng.geom.core.mix.call(null,p__$1,q__$1));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,p__$1,c),thi.ng.geom.core._PLUS_.call(null,q__$1,c)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (p__24593){
var map__24594 = p__24593;
var map__24594__$1 = ((((!((map__24594 == null)))?((((map__24594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24594):map__24594);
var p = cljs.core.get.call(null,map__24594__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24596 = this;
var map__24596__$1 = ((((!((map__24596 == null)))?((((map__24596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24596):map__24596);
var p__$1 = cljs.core.get.call(null,map__24596__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.mix.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (p__24598,t){
var map__24599 = p__24598;
var map__24599__$1 = ((((!((map__24599 == null)))?((((map__24599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24599):map__24599);
var p = cljs.core.get.call(null,map__24599__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24601 = this;
var map__24601__$1 = ((((!((map__24601 == null)))?((((map__24601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24601):map__24601);
var p__$1 = cljs.core.get.call(null,map__24601__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.mix.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)),t);
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__24603){
var map__24604 = p__24603;
var map__24604__$1 = ((((!((map__24604 == null)))?((((map__24604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24604):map__24604);
var p = cljs.core.get.call(null,map__24604__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24606 = this;
var map__24606__$1 = ((((!((map__24606 == null)))?((((map__24606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24606):map__24606);
var p__$1 = cljs.core.get.call(null,map__24606__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.mix.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)),thi.ng.math.core.random.call(null));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (p__24608){
var map__24609 = p__24608;
var map__24609__$1 = ((((!((map__24609 == null)))?((((map__24609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24609):map__24609);
var p = cljs.core.get.call(null,map__24609__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24611 = this;
var map__24611__$1 = ((((!((map__24611 == null)))?((((map__24611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24611):map__24611);
var p__$1 = cljs.core.get.call(null,map__24611__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.mix.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)),thi.ng.math.core.random.call(null));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,dist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.core.utils.sample_uniform.call(null,dist,include_last_QMARK_,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (p__24613,p){
var map__24614 = p__24613;
var map__24614__$1 = ((((!((map__24614 == null)))?((((map__24614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24614):map__24614);
var p__$1 = cljs.core.get.call(null,map__24614__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24616 = this;
var map__24616__$1 = ((((!((map__24616 == null)))?((((map__24616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24616):map__24616);
var p__$2 = cljs.core.get.call(null,map__24616__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return null;
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (p__24618,p__24619){
var map__24620 = p__24618;
var map__24620__$1 = ((((!((map__24620 == null)))?((((map__24620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24620):map__24620);
var _ = map__24620__$1;
var points = cljs.core.get.call(null,map__24620__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24621 = p__24619;
var map__24621__$1 = ((((!((map__24621 == null)))?((((map__24621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24621):map__24621);
var mesh = cljs.core.get.call(null,map__24621__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var depth = cljs.core.get.call(null,map__24621__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var scale = cljs.core.get.call(null,map__24621__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var offset = cljs.core.get.call(null,map__24621__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var map__24624 = this;
var map__24624__$1 = ((((!((map__24624 == null)))?((((map__24624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24624):map__24624);
var ___$1 = map__24624__$1;
var points__$1 = cljs.core.get.call(null,map__24624__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var tpoints = ((cljs.core._EQ_.call(null,1.0,scale))?points__$1:new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.scale_size.call(null,___$1,scale)));
var off = (function (){var or__18275__auto__ = offset;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.core.vector.vec3.call(null,(0),(0),depth);
}
})();
var a = thi.ng.geom.core.vector.vec3.call(null,points__$1.call(null,(0)));
var b = thi.ng.geom.core.vector.vec3.call(null,points__$1.call(null,(1)));
var ta = thi.ng.geom.core._PLUS_.call(null,off,tpoints.call(null,(0)));
var tb = thi.ng.geom.core._PLUS_.call(null,off,tpoints.call(null,(1)));
return thi.ng.geom.core.add_face.call(null,(function (){var or__18275__auto__ = mesh;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,tb,ta], null));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1)], null);
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.call(null,(2),thi.ng.geom.core.vertices.call(null,___$1,res));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__24626,q){
var map__24627 = p__24626;
var map__24627__$1 = ((((!((map__24627 == null)))?((((map__24627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24627):map__24627);
var p = cljs.core.get.call(null,map__24627__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24629 = this;
var map__24629__$1 = ((((!((map__24629 == null)))?((((map__24629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24629):map__24629);
var p__$1 = cljs.core.get.call(null,map__24629__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,thi.ng.geom.core.utils.closest_point_coeff.call(null,thi.ng.geom.core.vector.vec3.call(null,q),p__$1.call(null,(0)),p__$1.call(null,(1))));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (p__24631,l){
var map__24632 = p__24631;
var map__24632__$1 = ((((!((map__24632 == null)))?((((map__24632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24632):map__24632);
var vec__24633 = cljs.core.get.call(null,map__24632__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__24633,(0),null);
var b = cljs.core.nth.call(null,vec__24633,(1),null);
var map__24635 = this;
var map__24635__$1 = ((((!((map__24635 == null)))?((((map__24635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24635):map__24635);
var vec__24636 = cljs.core.get.call(null,map__24635__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__24636,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__24636,(1),null);
var vec__24638 = (function (){var or__18275__auto__ = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(l);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return l;
}
})();
var c = cljs.core.nth.call(null,vec__24638,(0),null);
var d = cljs.core.nth.call(null,vec__24638,(1),null);
return thi.ng.geom.core.utils.closest_line_between.call(null,a__$1,b__$1,c,d);
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 = (function (_,r){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (p__24639,t){
var map__24640 = p__24639;
var map__24640__$1 = ((((!((map__24640 == null)))?((((map__24640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24640):map__24640);
var p = cljs.core.get.call(null,map__24640__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24642 = this;
var map__24642__$1 = ((((!((map__24642 == null)))?((((map__24642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24642):map__24642);
var p__$1 = cljs.core.get.call(null,map__24642__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,p__$1.call(null,(0)),t),thi.ng.geom.core._PLUS_.call(null,p__$1.call(null,(1)),t)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBoundingSphere$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (p__24644){
var map__24645 = p__24644;
var map__24645__$1 = ((((!((map__24645 == null)))?((((map__24645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24645):map__24645);
var vec__24646 = cljs.core.get.call(null,map__24645__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__24646,(0),null);
var q = cljs.core.nth.call(null,vec__24646,(1),null);
var map__24648 = this;
var map__24648__$1 = ((((!((map__24648 == null)))?((((map__24648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24648):map__24648);
var vec__24649 = cljs.core.get.call(null,map__24648__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__24649,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__24649,(1),null);
return thi.ng.geom.types.utils.bounding_sphere.call(null,thi.ng.geom.core.mix.call(null,p__$1,q__$1),(0.5 * thi.ng.geom.core.dist.call(null,p__$1,q__$1)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (p__24651,s){
var map__24652 = p__24651;
var map__24652__$1 = ((((!((map__24652 == null)))?((((map__24652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24652):map__24652);
var p = cljs.core.get.call(null,map__24652__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24654 = this;
var map__24654__$1 = ((((!((map__24654 == null)))?((((map__24654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24654):map__24654);
var p__$1 = cljs.core.get.call(null,map__24654__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._STAR_.call(null,p__$1.call(null,(0)),s),thi.ng.geom.core._STAR_.call(null,p__$1.call(null,(1)),s)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (p__24656,sx,sy){
var map__24657 = p__24656;
var map__24657__$1 = ((((!((map__24657 == null)))?((((map__24657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24657):map__24657);
var p = cljs.core.get.call(null,map__24657__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24659 = this;
var map__24659__$1 = ((((!((map__24659 == null)))?((((map__24659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24659):map__24659);
var p__$1 = cljs.core.get.call(null,map__24659__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._STAR_.call(null,p__$1.call(null,(0)),sx,sy),thi.ng.geom.core._STAR_.call(null,p__$1.call(null,(1)),sx,sy)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (p__24661,s){
var map__24662 = p__24661;
var map__24662__$1 = ((((!((map__24662 == null)))?((((map__24662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24662):map__24662);
var vec__24663 = cljs.core.get.call(null,map__24662__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__24663,(0),null);
var q = cljs.core.nth.call(null,vec__24663,(1),null);
var map__24665 = this;
var map__24665__$1 = ((((!((map__24665 == null)))?((((map__24665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24665):map__24665);
var vec__24666 = cljs.core.get.call(null,map__24665__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__24666,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__24666,(1),null);
var c = thi.ng.geom.core.mix.call(null,p__$1,q__$1);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.madd.call(null,thi.ng.geom.core._.call(null,p__$1,c),s,c),thi.ng.geom.core.madd.call(null,thi.ng.geom.core._.call(null,q__$1,c),s,c)], null)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (p__24668){
var map__24669 = p__24668;
var map__24669__$1 = ((((!((map__24669 == null)))?((((map__24669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24669):map__24669);
var p = cljs.core.get.call(null,map__24669__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24671 = this;
var map__24671__$1 = ((((!((map__24671 == null)))?((((map__24671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24671):map__24671);
var p__$1 = cljs.core.get.call(null,map__24671__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.dist.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_box.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (p__24673){
var map__24674 = p__24673;
var map__24674__$1 = ((((!((map__24674 == null)))?((((map__24674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24674):map__24674);
var p = cljs.core.get.call(null,map__24674__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24676 = this;
var map__24676__$1 = ((((!((map__24676 == null)))?((((map__24676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24676):map__24676);
var p__$1 = cljs.core.get.call(null,map__24676__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.abs.call(null,(p__$1.call(null,(0)).call(null,(0)) - p__$1.call(null,(1)).call(null,(0))));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (p__24678){
var map__24679 = p__24678;
var map__24679__$1 = ((((!((map__24679 == null)))?((((map__24679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24679):map__24679);
var p = cljs.core.get.call(null,map__24679__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24681 = this;
var map__24681__$1 = ((((!((map__24681 == null)))?((((map__24681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24681):map__24681);
var p__$1 = cljs.core.get.call(null,map__24681__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.abs.call(null,(p__$1.call(null,(0)).call(null,(1)) - p__$1.call(null,(1)).call(null,(1))));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (p__24683){
var map__24684 = p__24683;
var map__24684__$1 = ((((!((map__24684 == null)))?((((map__24684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24684):map__24684);
var p = cljs.core.get.call(null,map__24684__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24686 = this;
var map__24686__$1 = ((((!((map__24686 == null)))?((((map__24686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24686):map__24686);
var p__$1 = cljs.core.get.call(null,map__24686__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.abs.call(null,(p__$1.call(null,(0)).call(null,(2)) - p__$1.call(null,(1)).call(null,(2))));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$2 = (function (p__24688,res){
var map__24689 = p__24688;
var map__24689__$1 = ((((!((map__24689 == null)))?((((map__24689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24689):map__24689);
var p = cljs.core.get.call(null,map__24689__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24691 = this;
var map__24691__$1 = ((((!((map__24691 == null)))?((((map__24691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24691):map__24691);
var p__$1 = cljs.core.get.call(null,map__24691__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.sample_segment_with_res.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)),res,true);
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (p__24693){
var map__24694 = p__24693;
var map__24694__$1 = ((((!((map__24694 == null)))?((((map__24694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24694):map__24694);
var p = cljs.core.get.call(null,map__24694__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24696 = this;
var map__24696__$1 = ((((!((map__24696 == null)))?((((map__24696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24696):map__24696);
var p__$1 = cljs.core.get.call(null,map__24696__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.dist.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (p__24698){
var map__24699 = p__24698;
var map__24699__$1 = ((((!((map__24699 == null)))?((((map__24699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24699):map__24699);
var p = cljs.core.get.call(null,map__24699__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24701 = this;
var map__24701__$1 = ((((!((map__24701 == null)))?((((map__24701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24701):map__24701);
var p__$1 = cljs.core.get.call(null,map__24701__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.dist_squared.call(null,p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (p__24703,v){
var map__24704 = p__24703;
var map__24704__$1 = ((((!((map__24704 == null)))?((((map__24704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24704):map__24704);
var vec__24705 = cljs.core.get.call(null,map__24704__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__24705,(0),null);
var q = cljs.core.nth.call(null,vec__24705,(1),null);
var map__24707 = this;
var map__24707__$1 = ((((!((map__24707 == null)))?((((map__24707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24707):map__24707);
var vec__24708 = cljs.core.get.call(null,map__24707__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.call(null,vec__24708,(0),null);
var q__$1 = cljs.core.nth.call(null,vec__24708,(1),null);
var pred__24710 = cljs.core._EQ_;
var expr__24711 = v;
if(cljs.core.truth_(pred__24710.call(null,p__$1,expr__24711))){
return q__$1;
} else {
if(cljs.core.truth_(pred__24710.call(null,q__$1,expr__24711))){
return p__$1;
} else {
return null;
}
}
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (p__24713,v){
var map__24714 = p__24713;
var map__24714__$1 = ((((!((map__24714 == null)))?((((map__24714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24714):map__24714);
var p = cljs.core.get.call(null,map__24714__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24716 = this;
var map__24716__$1 = ((((!((map__24716 == null)))?((((map__24716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24716):map__24716);
var p__$1 = cljs.core.get.call(null,map__24716__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
if((cljs.core._EQ_.call(null,v,p__$1.call(null,(0)))) || (cljs.core._EQ_.call(null,v,p__$1.call(null,(1))))){
return (1);
} else {
return (0);
}
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PProximity$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (p__24718,q){
var map__24719 = p__24718;
var map__24719__$1 = ((((!((map__24719 == null)))?((((map__24719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24719):map__24719);
var p = cljs.core.get.call(null,map__24719__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24721 = this;
var map__24721__$1 = ((((!((map__24721 == null)))?((((map__24721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24721):map__24721);
var p__$1 = cljs.core.get.call(null,map__24721__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.utils.closest_point_on_segment.call(null,thi.ng.geom.core.vector.vec3.call(null,q),p__$1.call(null,(0)),p__$1.call(null,(1)));
});

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});
thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24733_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,m,p1__24733_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24728_SHARP_){
return thi.ng.geom.core.rotate.call(null,p1__24728_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,r){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24727_SHARP_){
return thi.ng.geom.core.reflect.call(null,p1__24727_SHARP_,r);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.vector.vec2.call(null),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.centroid.call(null,___$1),thi.ng.geom.core.vector.vec2.call(null,o),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.centroid.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.core.utils.point_at.call(null,t,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),null);
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.point_at.call(null,thi.ng.math.core.random.call(null),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),null);
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.random_point.call(null,___$1);
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,udist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.core.utils.sample_uniform.call(null,udist,include_last_QMARK_,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,v){
var ___$1 = this;
return null;
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (p__24734,p__24735){
var map__24736 = p__24734;
var map__24736__$1 = ((((!((map__24736 == null)))?((((map__24736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24736):map__24736);
var _ = map__24736__$1;
var points = cljs.core.get.call(null,map__24736__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24737 = p__24735;
var map__24737__$1 = ((((!((map__24737 == null)))?((((map__24737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24737):map__24737);
var mesh = cljs.core.get.call(null,map__24737__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var depth = cljs.core.get.call(null,map__24737__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var offset = cljs.core.get.call(null,map__24737__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var scale = cljs.core.get.call(null,map__24737__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var map__24740 = this;
var map__24740__$1 = ((((!((map__24740 == null)))?((((map__24740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24740):map__24740);
var ___$1 = map__24740__$1;
var points__$1 = cljs.core.get.call(null,map__24740__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var tpoints = ((cljs.core._EQ_.call(null,1.0,scale))?points__$1:new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.scale_size.call(null,___$1,scale)));
var off = (function (){var or__18275__auto__ = offset;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.core.vector.vec3.call(null,(0),(0),depth);
}
})();
var bottom = cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec3,points__$1);
var top = cljs.core.mapv.call(null,((function (tpoints,off,bottom,map__24740,map__24740__$1,___$1,points__$1,map__24736,map__24736__$1,_,points,map__24737,map__24737__$1,mesh,depth,offset,scale){
return (function (p1__24725_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,off,p1__24725_SHARP_);
});})(tpoints,off,bottom,map__24740,map__24740__$1,___$1,points__$1,map__24736,map__24736__$1,_,points,map__24737,map__24737__$1,mesh,depth,offset,scale))
,tpoints);
return thi.ng.geom.core.into.call(null,(function (){var or__18275__auto__ = mesh;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),cljs.core.mapcat.call(null,((function (tpoints,off,bottom,top,map__24740,map__24740__$1,___$1,points__$1,map__24736,map__24736__$1,_,points,map__24737,map__24737__$1,mesh,depth,offset,scale){
return (function (p__24742,p__24743){
var vec__24744 = p__24742;
var a1 = cljs.core.nth.call(null,vec__24744,(0),null);
var a2 = cljs.core.nth.call(null,vec__24744,(1),null);
var vec__24745 = p__24743;
var b1 = cljs.core.nth.call(null,vec__24745,(0),null);
var b2 = cljs.core.nth.call(null,vec__24745,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b1,b2,a2], null)], null);
});})(tpoints,off,bottom,top,map__24740,map__24740__$1,___$1,points__$1,map__24736,map__24736__$1,_,points,map__24737,map__24737__$1,mesh,depth,offset,scale))
,thi.ng.dstruct.core.successive_nth.call(null,(2),bottom),thi.ng.dstruct.core.successive_nth.call(null,(2),top)));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.call(null,(2),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.call(null,(2),thi.ng.geom.core.vertices.call(null,___$1,res));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (_,a){
var ___$1 = this;
return null;
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (_,l){
var ___$1 = this;
return null;
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBoundingCircle$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBoundingCircle$bounding_circle$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_circle.call(null,thi.ng.geom.core.centroid.call(null,___$1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24732_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p1__24732_SHARP_,t);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24729_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__24729_SHARP_,s);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24730_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__24730_SHARP_,sx,sy);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24731_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__24731_SHARP_,sx,sy,sz);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(thi.ng.geom.core.utils.scale_size.call(null,s,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.mag.call(null,___$1);
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_rect.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(0),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$2 = (function (p__24746,res){
var map__24747 = p__24746;
var map__24747__$1 = ((((!((map__24747 == null)))?((((map__24747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24747):map__24747);
var points = cljs.core.get.call(null,map__24747__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24749 = this;
var map__24749__$1 = ((((!((map__24749 == null)))?((((map__24749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24749):map__24749);
var points__$1 = cljs.core.get.call(null,map__24749__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return cljs.core.map.call(null,((function (map__24749,map__24749__$1,points__$1,map__24747,map__24747__$1,points){
return (function (p1__24726_SHARP_){
return thi.ng.geom.core.utils.point_at.call(null,p1__24726_SHARP_,points__$1);
});})(map__24749,map__24749__$1,points__$1,map__24747,map__24747__$1,points))
,thi.ng.math.core.norm_range.call(null,res));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.reduce_pairs.call(null,cljs.core._PLUS_,thi.ng.geom.core.dist,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.reduce_pairs.call(null,cljs.core._PLUS_,thi.ng.geom.core.dist_squared,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.dstruct.core.neighbors.call(null,v,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (p__24751,v){
var map__24752 = p__24751;
var map__24752__$1 = ((((!((map__24752 == null)))?((((map__24752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24752):map__24752);
var points = cljs.core.get.call(null,map__24752__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24754 = this;
var map__24754__$1 = ((((!((map__24754 == null)))?((((map__24754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24754):map__24754);
var points__$1 = cljs.core.get.call(null,map__24754__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var temp__4655__auto__ = thi.ng.dstruct.core.neighbors.call(null,v,points__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var p = temp__4655__auto__;
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,points__$1),cljs.core.peek.call(null,points__$1))){
return (2);
} else {
if((cljs.core._EQ_.call(null,p,cljs.core.first.call(null,points__$1))) || (cljs.core._EQ_.call(null,p,cljs.core.peek.call(null,points__$1)))){
return (1);
} else {
return (2);
}
}
} else {
return (0);
}
});

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});
thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24769_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,m,p1__24769_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24760_SHARP_){
return thi.ng.geom.core.rotate.call(null,p1__24760_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24761_SHARP_){
return thi.ng.geom.core.rotate_x.call(null,p1__24761_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24762_SHARP_){
return thi.ng.geom.core.rotate_y.call(null,p1__24762_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24763_SHARP_){
return thi.ng.geom.core.rotate_z.call(null,p1__24763_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24764_SHARP_){
return thi.ng.geom.core.rotate_around_axis.call(null,p1__24764_SHARP_,axis,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,r){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24759_SHARP_){
return thi.ng.geom.core.reflect.call(null,p1__24759_SHARP_,r);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PCenter$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.vector.vec3.call(null),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.centroid.call(null,___$1),thi.ng.geom.core.vector.vec3.call(null,o),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.centroid.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PSample$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.core.utils.point_at.call(null,t,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),null);
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.point_at.call(null,thi.ng.math.core.random.call(null),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1),null);
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.random_point.call(null,___$1);
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,udist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.core.utils.sample_uniform.call(null,udist,include_last_QMARK_,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PClassify$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,v){
var ___$1 = this;
return null;
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PExtrude$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (p__24771,p__24772){
var map__24773 = p__24771;
var map__24773__$1 = ((((!((map__24773 == null)))?((((map__24773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24773):map__24773);
var _ = map__24773__$1;
var points = cljs.core.get.call(null,map__24773__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24774 = p__24772;
var map__24774__$1 = ((((!((map__24774 == null)))?((((map__24774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24774):map__24774);
var mesh = cljs.core.get.call(null,map__24774__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var depth = cljs.core.get.call(null,map__24774__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var offset = cljs.core.get.call(null,map__24774__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var scale = cljs.core.get.call(null,map__24774__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var map__24777 = this;
var map__24777__$1 = ((((!((map__24777 == null)))?((((map__24777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24777):map__24777);
var ___$1 = map__24777__$1;
var points__$1 = cljs.core.get.call(null,map__24777__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var tpoints = ((cljs.core._EQ_.call(null,1.0,scale))?points__$1:new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.scale_size.call(null,___$1,scale)));
var off = (function (){var or__18275__auto__ = offset;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.core.vector.vec3.call(null,(0),(0),depth);
}
})();
var top = cljs.core.mapv.call(null,((function (tpoints,off,map__24777,map__24777__$1,___$1,points__$1,map__24773,map__24773__$1,_,points,map__24774,map__24774__$1,mesh,depth,offset,scale){
return (function (p1__24757_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,off,p1__24757_SHARP_);
});})(tpoints,off,map__24777,map__24777__$1,___$1,points__$1,map__24773,map__24773__$1,_,points,map__24774,map__24774__$1,mesh,depth,offset,scale))
,tpoints);
return thi.ng.geom.core.into.call(null,(function (){var or__18275__auto__ = mesh;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),cljs.core.mapcat.call(null,((function (tpoints,off,top,map__24777,map__24777__$1,___$1,points__$1,map__24773,map__24773__$1,_,points,map__24774,map__24774__$1,mesh,depth,offset,scale){
return (function (p__24779,p__24780){
var vec__24781 = p__24779;
var a1 = cljs.core.nth.call(null,vec__24781,(0),null);
var a2 = cljs.core.nth.call(null,vec__24781,(1),null);
var vec__24782 = p__24780;
var b1 = cljs.core.nth.call(null,vec__24782,(0),null);
var b2 = cljs.core.nth.call(null,vec__24782,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b1,b2,a2], null)], null);
});})(tpoints,off,top,map__24777,map__24777__$1,___$1,points__$1,map__24773,map__24773__$1,_,points,map__24774,map__24774__$1,mesh,depth,offset,scale))
,thi.ng.dstruct.core.successive_nth.call(null,(2),points__$1),thi.ng.dstruct.core.successive_nth.call(null,(2),top)));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PEdgeAccess$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.call(null,(2),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.call(null,(2),thi.ng.geom.core.vertices.call(null,___$1,res));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PVolume$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBoundary$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (_,a){
var ___$1 = this;
return null;
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PIntersect$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (_,l){
var ___$1 = this;
return null;
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24768_SHARP_){
return thi.ng.geom.core._PLUS_.call(null,p1__24768_SHARP_,t);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBoundingSphere$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_sphere.call(null,thi.ng.geom.core.centroid.call(null,___$1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24765_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__24765_SHARP_,s);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24766_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__24766_SHARP_,sx,sy);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__24767_SHARP_){
return thi.ng.geom.core._STAR_.call(null,p1__24767_SHARP_,sx,sy,sz);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(thi.ng.geom.core.utils.scale_size.call(null,s,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1))));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PCircumference$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.mag.call(null,___$1);
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBounds$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_box.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(0),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(1),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range.call(null,(2),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PVertexAccess$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$2 = (function (p__24783,res){
var map__24784 = p__24783;
var map__24784__$1 = ((((!((map__24784 == null)))?((((map__24784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24784):map__24784);
var points = cljs.core.get.call(null,map__24784__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24786 = this;
var map__24786__$1 = ((((!((map__24786 == null)))?((((map__24786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24786):map__24786);
var points__$1 = cljs.core.get.call(null,map__24786__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return cljs.core.map.call(null,((function (map__24786,map__24786__$1,points__$1,map__24784,map__24784__$1,points){
return (function (p1__24758_SHARP_){
return thi.ng.geom.core.utils.point_at.call(null,p1__24758_SHARP_,points__$1);
});})(map__24786,map__24786__$1,points__$1,map__24784,map__24784__$1,points))
,thi.ng.math.core.norm_range.call(null,res));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.reduce_pairs.call(null,cljs.core._PLUS_,thi.ng.geom.core.dist,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.reduce_pairs.call(null,cljs.core._PLUS_,thi.ng.geom.core.dist_squared,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PGraph$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.dstruct.core.neighbors.call(null,v,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(___$1));
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (p__24788,v){
var map__24789 = p__24788;
var map__24789__$1 = ((((!((map__24789 == null)))?((((map__24789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24789):map__24789);
var points = cljs.core.get.call(null,map__24789__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__24791 = this;
var map__24791__$1 = ((((!((map__24791 == null)))?((((map__24791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24791):map__24791);
var points__$1 = cljs.core.get.call(null,map__24791__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var temp__4655__auto__ = thi.ng.dstruct.core.neighbors.call(null,v,points__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var p = temp__4655__auto__;
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,points__$1),cljs.core.peek.call(null,points__$1))){
return (2);
} else {
if((cljs.core._EQ_.call(null,p,cljs.core.first.call(null,points__$1))) || (cljs.core._EQ_.call(null,p,cljs.core.peek.call(null,points__$1)))){
return (1);
} else {
return (2);
}
}
} else {
return (0);
}
});

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PArea$ = true;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

//# sourceMappingURL=line.js.map