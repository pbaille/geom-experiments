// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.utils.prob');
goog.require('cljs.core');
goog.require('thi.ng.math.simplexnoise');
goog.require('thi.ng.math.core');
/**
 * takes a map of type object -> prob
 */
geom.utils.prob.weight_picker = (function geom$utils$prob$weight_picker(m){
var sums = cljs.core.reductions.call(null,cljs.core._PLUS_,(0),cljs.core.vals.call(null,m));
var parts = cljs.core.map.call(null,((function (sums){
return (function (p1__28438_SHARP_,p2__28439_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548)],[p1__28438_SHARP_,cljs.core.first.call(null,p2__28439_SHARP_),cljs.core.second.call(null,p2__28439_SHARP_)]);
});})(sums))
,cljs.core.keys.call(null,m),cljs.core.partition.call(null,(2),(1),sums));
return ((function (sums,parts){
return (function() {
var geom$utils$prob$weight_picker_$_f = null;
var geom$utils$prob$weight_picker_$_f__0 = (function (){
var x = cljs.core.rand.call(null,cljs.core.last.call(null,sums));
var l = cljs.core.first.call(null,cljs.core.filter.call(null,((function (x,sums,parts){
return (function (p1__28440_SHARP_){
return thi.ng.math.core.in_range_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(p1__28440_SHARP_),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(p1__28440_SHARP_)], null),x);
});})(x,sums,parts))
,parts));
return new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(l);
});
var geom$utils$prob$weight_picker_$_f__1 = (function (x){
return cljs.core.take.call(null,x,cljs.core.repeatedly.call(null,geom$utils$prob$weight_picker_$_f));
});
geom$utils$prob$weight_picker_$_f = function(x){
switch(arguments.length){
case 0:
return geom$utils$prob$weight_picker_$_f__0.call(this);
case 1:
return geom$utils$prob$weight_picker_$_f__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geom$utils$prob$weight_picker_$_f.cljs$core$IFn$_invoke$arity$0 = geom$utils$prob$weight_picker_$_f__0;
geom$utils$prob$weight_picker_$_f.cljs$core$IFn$_invoke$arity$1 = geom$utils$prob$weight_picker_$_f__1;
return geom$utils$prob$weight_picker_$_f;
})()
;})(sums,parts))
});
geom.utils.prob.noise1 = (function geom$utils$prob$noise1(x){
return thi.ng.math.core.map_interval.call(null,thi.ng.math.simplexnoise.noise1.call(null,x),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.632,0.632], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null));
});
geom.utils.prob.noise_seq = (function geom$utils$prob$noise_seq(var_args){
var args__19340__auto__ = [];
var len__19333__auto___28447 = arguments.length;
var i__19334__auto___28448 = (0);
while(true){
if((i__19334__auto___28448 < len__19333__auto___28447)){
args__19340__auto__.push((arguments[i__19334__auto___28448]));

var G__28449 = (i__19334__auto___28448 + (1));
i__19334__auto___28448 = G__28449;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return geom.utils.prob.noise_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

geom.utils.prob.noise_seq.cljs$core$IFn$_invoke$arity$variadic = (function (output_range,increment,p__28445){
var vec__28446 = p__28445;
var seed = cljs.core.nth.call(null,vec__28446,(0),null);
return cljs.core.map.call(null,((function (vec__28446,seed){
return (function (p1__28441_SHARP_){
return thi.ng.math.core.map_interval.call(null,p1__28441_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.632,0.632], null),output_range);
});})(vec__28446,seed))
,cljs.core.map.call(null,thi.ng.math.simplexnoise.noise1,cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,increment),(function (){var or__18275__auto__ = seed;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return cljs.core.rand.call(null,(1000000));
}
})())));
});

geom.utils.prob.noise_seq.cljs$lang$maxFixedArity = (2);

geom.utils.prob.noise_seq.cljs$lang$applyTo = (function (seq28442){
var G__28443 = cljs.core.first.call(null,seq28442);
var seq28442__$1 = cljs.core.next.call(null,seq28442);
var G__28444 = cljs.core.first.call(null,seq28442__$1);
var seq28442__$2 = cljs.core.next.call(null,seq28442__$1);
return geom.utils.prob.noise_seq.cljs$core$IFn$_invoke$arity$variadic(G__28443,G__28444,seq28442__$2);
});
geom.utils.prob.randge = (function geom$utils$prob$randge(a,b){
var int_QMARK_ = cljs.core.every_QMARK_.call(null,cljs.core.integer_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
var f = ((int_QMARK_)?((function (int_QMARK_){
return (function (p1__28450_SHARP_){
return thi.ng.math.core.roundto.call(null,p1__28450_SHARP_,(1));
});})(int_QMARK_))
:cljs.core.identity);
return ((function (int_QMARK_,f){
return (function (){
return f.call(null,thi.ng.math.core.random.call(null,a,b));
});
;})(int_QMARK_,f))
});
geom.utils.prob.realize = (function geom$utils$prob$realize(x){
if(cljs.core.fn_QMARK_.call(null,x)){
return x.call(null);
} else {
return x;
}
});

//# sourceMappingURL=prob.js.map