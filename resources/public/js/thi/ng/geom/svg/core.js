// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.svg.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.matrix');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.color.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.strf.core');
thi.ng.geom.svg.core.stroke_round = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round"], null);
thi.ng.geom.svg.core.xml_preamble = "<?xml version=\"1.0\"?>\n";
thi.ng.geom.svg.core._STAR_ff_STAR_ = thi.ng.strf.core.float$.call(null,(2));
thi.ng.geom.svg.core._STAR_fmt_vec_STAR_ = (function thi$ng$geom$svg$core$_STAR_fmt_vec_STAR_(p){
return [cljs.core.str(thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,p))),cljs.core.str(","),cljs.core.str(thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,p,(1))))].join('');
});
thi.ng.geom.svg.core._STAR_fmt_percent_STAR_ = (function thi$ng$geom$svg$core$_STAR_fmt_percent_STAR_(x){
return [cljs.core.str(((x * (100)) | (0))),cljs.core.str("%")].join('');
});
thi.ng.geom.svg.core._STAR_fmt_matrix_STAR_ = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["matrix(",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,")"], null);
thi.ng.geom.svg.core.point_seq_format2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format3 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format4 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format = (function thi$ng$geom$svg$core$point_seq_format(n){
var G__20023 = (n | (0));
switch (G__20023) {
case (1):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);

break;
case (2):
return thi.ng.geom.svg.core.point_seq_format2;

break;
case (3):
return thi.ng.geom.svg.core.point_seq_format3;

break;
case (4):
return thi.ng.geom.svg.core.point_seq_format4;

break;
default:
return cljs.core.interpose.call(null," ",cljs.core.repeat.call(null,n,thi.ng.geom.svg.core._STAR_fmt_vec_STAR_));

}
});
thi.ng.geom.svg.core.path_segment_formats = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"L","L",-1038307519),new cljs.core.Keyword(null,"M","M",-1755742206),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"Z","Z",459124588),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"a","a",-2123407586)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_ff_STAR_," ",cljs.core.str," ",cljs.core.str," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Z"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["l",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["z"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_ff_STAR_," ",cljs.core.str," ",cljs.core.str," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null)]);

/**
 * @interface
 */
thi.ng.geom.svg.core.PSVGConvert = function(){};

thi.ng.geom.svg.core.as_svg = (function thi$ng$geom$svg$core$as_svg(_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$svg$core$PSVGConvert$as_svg$arity$2 == null)))){
return _.thi$ng$geom$svg$core$PSVGConvert$as_svg$arity$2(_,opts);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.geom.svg.core.as_svg[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,opts);
} else {
var m__18931__auto____$1 = (thi.ng.geom.svg.core.as_svg["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"PSVGConvert.as-svg",_);
}
}
}
});

thi.ng.geom.svg.core.color_attrib = (function thi$ng$geom$svg$core$color_attrib(attribs,id){
var temp__4655__auto__ = attribs.call(null,id);
if(cljs.core.truth_(temp__4655__auto__)){
var att = temp__4655__auto__;
if(typeof att === 'string'){
return attribs;
} else {
return cljs.core.assoc.call(null,attribs,id,cljs.core.deref.call(null,thi.ng.color.core.as_css.call(null,att)));
}
} else {
return attribs;
}
});
thi.ng.geom.svg.core.matrix_attrib = (function thi$ng$geom$svg$core$matrix_attrib(attribs,id){
var temp__4655__auto__ = attribs.call(null,id);
if(cljs.core.truth_(temp__4655__auto__)){
var mat = temp__4655__auto__;
if(typeof mat === 'string'){
return attribs;
} else {
var vec__20026 = mat;
var a = cljs.core.nth.call(null,vec__20026,(0),null);
var c = cljs.core.nth.call(null,vec__20026,(1),null);
var e = cljs.core.nth.call(null,vec__20026,(2),null);
var b = cljs.core.nth.call(null,vec__20026,(3),null);
var d = cljs.core.nth.call(null,vec__20026,(4),null);
var f = cljs.core.nth.call(null,vec__20026,(5),null);
return cljs.core.assoc.call(null,attribs,id,cljs.core.apply.call(null,thi.ng.strf.core.format,thi.ng.geom.svg.core._STAR_fmt_matrix_STAR_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null)));
}
} else {
return attribs;
}
});
thi.ng.geom.svg.core.filter_attribs = (function thi$ng$geom$svg$core$filter_attribs(attribs){
var acc = cljs.core.transient$.call(null,attribs);
var ks = cljs.core.keys.call(null,attribs);
while(true){
if(cljs.core.truth_(ks)){
var G__20027 = ((cljs.core._EQ_.call(null,"__",cljs.core.subs.call(null,cljs.core.name.call(null,cljs.core.first.call(null,ks)),(0),(2))))?cljs.core.dissoc_BANG_.call(null,acc,cljs.core.first.call(null,ks)):acc);
var G__20028 = cljs.core.next.call(null,ks);
acc = G__20027;
ks = G__20028;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,acc);
}
break;
}
});
thi.ng.geom.svg.core.svg_attribs = (function thi$ng$geom$svg$core$svg_attribs(attribs,base){
if(cljs.core.seq.call(null,attribs)){
return cljs.core.into.call(null,thi.ng.geom.svg.core.matrix_attrib.call(null,thi.ng.geom.svg.core.color_attrib.call(null,thi.ng.geom.svg.core.color_attrib.call(null,thi.ng.geom.svg.core.filter_attribs.call(null,attribs),new cljs.core.Keyword(null,"stroke","stroke",1741823555)),new cljs.core.Keyword(null,"fill","fill",883462889)),new cljs.core.Keyword(null,"transform","transform",1381301764)),base);
} else {
return base;
}
});
thi.ng.geom.svg.core.svg = (function thi$ng$geom$svg$core$svg(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20031 = arguments.length;
var i__19334__auto___20032 = (0);
while(true){
if((i__19334__auto___20032 < len__19333__auto___20031)){
args__19340__auto__.push((arguments[i__19334__auto___20032]));

var G__20033 = (i__19334__auto___20032 + (1));
i__19334__auto___20032 = G__20033;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((1) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((1)),(0))):null);
return thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19341__auto__);
});

thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attribs,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 3, ["xmlns","http://www.w3.org/2000/svg","xmlns:xlink","http://www.w3.org/1999/xlink","version","1.1"], null)),body], null);
});

thi.ng.geom.svg.core.svg.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.svg.cljs$lang$applyTo = (function (seq20029){
var G__20030 = cljs.core.first.call(null,seq20029);
var seq20029__$1 = cljs.core.next.call(null,seq20029);
return thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic(G__20030,seq20029__$1);
});
thi.ng.geom.svg.core.defs = (function thi$ng$geom$svg$core$defs(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20035 = arguments.length;
var i__19334__auto___20036 = (0);
while(true){
if((i__19334__auto___20036 < len__19333__auto___20035)){
args__19340__auto__.push((arguments[i__19334__auto___20036]));

var G__20037 = (i__19334__auto___20036 + (1));
i__19334__auto___20036 = G__20037;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((0) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((0)),(0))):null);
return thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__19341__auto__);
});

thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic = (function (defs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),defs], null);
});

thi.ng.geom.svg.core.defs.cljs$lang$maxFixedArity = (0);

thi.ng.geom.svg.core.defs.cljs$lang$applyTo = (function (seq20034){
return thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20034));
});
thi.ng.geom.svg.core.gradient_stop = (function thi$ng$geom$svg$core$gradient_stop(p__20038){
var vec__20040 = p__20038;
var pos = cljs.core.nth.call(null,vec__20040,(0),null);
var col = cljs.core.nth.call(null,vec__20040,(1),null);
var col__$1 = ((typeof col === 'string')?col:cljs.core.deref.call(null,thi.ng.color.core.as_css.call(null,col)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),thi.ng.geom.svg.core._STAR_fmt_percent_STAR_.call(null,pos),new cljs.core.Keyword(null,"stop-color","stop-color",316173955),col__$1], null)], null);
});
thi.ng.geom.svg.core.linear_gradient = (function thi$ng$geom$svg$core$linear_gradient(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20044 = arguments.length;
var i__19334__auto___20045 = (0);
while(true){
if((i__19334__auto___20045 < len__19333__auto___20044)){
args__19340__auto__.push((arguments[i__19334__auto___20045]));

var G__20046 = (i__19334__auto___20045 + (1));
i__19334__auto___20045 = G__20046;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (id,attribs,stops){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),cljs.core.assoc.call(null,attribs,new cljs.core.Keyword(null,"id","id",-1388402092),id),cljs.core.map.call(null,thi.ng.geom.svg.core.gradient_stop,stops)], null);
});

thi.ng.geom.svg.core.linear_gradient.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.linear_gradient.cljs$lang$applyTo = (function (seq20041){
var G__20042 = cljs.core.first.call(null,seq20041);
var seq20041__$1 = cljs.core.next.call(null,seq20041);
var G__20043 = cljs.core.first.call(null,seq20041__$1);
var seq20041__$2 = cljs.core.next.call(null,seq20041__$1);
return thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(G__20042,G__20043,seq20041__$2);
});
thi.ng.geom.svg.core.radial_gradient = (function thi$ng$geom$svg$core$radial_gradient(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20050 = arguments.length;
var i__19334__auto___20051 = (0);
while(true){
if((i__19334__auto___20051 < len__19333__auto___20050)){
args__19340__auto__.push((arguments[i__19334__auto___20051]));

var G__20052 = (i__19334__auto___20051 + (1));
i__19334__auto___20051 = G__20052;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (id,attribs,stops){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radialGradient","radialGradient",1402247193),cljs.core.assoc.call(null,attribs,new cljs.core.Keyword(null,"id","id",-1388402092),id),cljs.core.map.call(null,thi.ng.geom.svg.core.gradient_stop,stops)], null);
});

thi.ng.geom.svg.core.radial_gradient.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.radial_gradient.cljs$lang$applyTo = (function (seq20047){
var G__20048 = cljs.core.first.call(null,seq20047);
var seq20047__$1 = cljs.core.next.call(null,seq20047);
var G__20049 = cljs.core.first.call(null,seq20047__$1);
var seq20047__$2 = cljs.core.next.call(null,seq20047__$1);
return thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic(G__20048,G__20049,seq20047__$2);
});
thi.ng.geom.svg.core.group = (function thi$ng$geom$svg$core$group(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20055 = arguments.length;
var i__19334__auto___20056 = (0);
while(true){
if((i__19334__auto___20056 < len__19333__auto___20055)){
args__19340__auto__.push((arguments[i__19334__auto___20056]));

var G__20057 = (i__19334__auto___20056 + (1));
i__19334__auto___20056 = G__20057;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((1) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((1)),(0))):null);
return thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19341__auto__);
});

thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic = (function (attribs,body){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,null)], null),body);
});

thi.ng.geom.svg.core.group.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.group.cljs$lang$applyTo = (function (seq20053){
var G__20054 = cljs.core.first.call(null,seq20053);
var seq20053__$1 = cljs.core.next.call(null,seq20053);
return thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic(G__20054,seq20053__$1);
});
thi.ng.geom.svg.core.path = (function thi$ng$geom$svg$core$path(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20062 = arguments.length;
var i__19334__auto___20063 = (0);
while(true){
if((i__19334__auto___20063 < len__19333__auto___20062)){
args__19340__auto__.push((arguments[i__19334__auto___20063]));

var G__20064 = (i__19334__auto___20063 + (1));
i__19334__auto___20063 = G__20064;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((1) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((1)),(0))):null);
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19341__auto__);
});

thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$variadic = (function (segments,p__20060){
var vec__20061 = p__20060;
var attribs = cljs.core.nth.call(null,vec__20061,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.apply.call(null,thi.ng.strf.core.format,cljs.core.mapcat.call(null,cljs.core.comp.call(null,thi.ng.geom.svg.core.path_segment_formats,cljs.core.first),segments),cljs.core.mapcat.call(null,cljs.core.rest,segments))], null))], null);
});

thi.ng.geom.svg.core.path.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.path.cljs$lang$applyTo = (function (seq20058){
var G__20059 = cljs.core.first.call(null,seq20058);
var seq20058__$1 = cljs.core.next.call(null,seq20058);
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$variadic(G__20059,seq20058__$1);
});
thi.ng.geom.svg.core.text = (function thi$ng$geom$svg$core$text(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20072 = arguments.length;
var i__19334__auto___20073 = (0);
while(true){
if((i__19334__auto___20073 < len__19333__auto___20072)){
args__19340__auto__.push((arguments[i__19334__auto___20073]));

var G__20074 = (i__19334__auto___20073 + (1));
i__19334__auto___20073 = G__20074;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$variadic = (function (p__20068,txt,p__20069){
var vec__20070 = p__20068;
var x = cljs.core.nth.call(null,vec__20070,(0),null);
var y = cljs.core.nth.call(null,vec__20070,(1),null);
var vec__20071 = p__20069;
var attribs = cljs.core.nth.call(null,vec__20071,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,x),new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,y)], null)),txt], null);
});

thi.ng.geom.svg.core.text.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.text.cljs$lang$applyTo = (function (seq20065){
var G__20066 = cljs.core.first.call(null,seq20065);
var seq20065__$1 = cljs.core.next.call(null,seq20065);
var G__20067 = cljs.core.first.call(null,seq20065__$1);
var seq20065__$2 = cljs.core.next.call(null,seq20065__$1);
return thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$variadic(G__20066,G__20067,seq20065__$2);
});
thi.ng.geom.svg.core.circle = (function thi$ng$geom$svg$core$circle(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20082 = arguments.length;
var i__19334__auto___20083 = (0);
while(true){
if((i__19334__auto___20083 < len__19333__auto___20082)){
args__19340__auto__.push((arguments[i__19334__auto___20083]));

var G__20084 = (i__19334__auto___20083 + (1));
i__19334__auto___20083 = G__20084;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$variadic = (function (p__20078,radius,p__20079){
var vec__20080 = p__20078;
var x = cljs.core.nth.call(null,vec__20080,(0),null);
var y = cljs.core.nth.call(null,vec__20080,(1),null);
var vec__20081 = p__20079;
var attribs = cljs.core.nth.call(null,vec__20081,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,x),new cljs.core.Keyword(null,"cy","cy",755331060),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,y),new cljs.core.Keyword(null,"r","r",-471384190),radius], null))], null);
});

thi.ng.geom.svg.core.circle.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.circle.cljs$lang$applyTo = (function (seq20075){
var G__20076 = cljs.core.first.call(null,seq20075);
var seq20075__$1 = cljs.core.next.call(null,seq20075);
var G__20077 = cljs.core.first.call(null,seq20075__$1);
var seq20075__$2 = cljs.core.next.call(null,seq20075__$1);
return thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$variadic(G__20076,G__20077,seq20075__$2);
});
thi.ng.geom.svg.core.arc_segment = (function thi$ng$geom$svg$core$arc_segment(center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_){
var radius__$1 = thi.ng.geom.core.vector.vec2.call(null,radius);
var p = thi.ng.geom.core._PLUS_.call(null,thi.ng.geom.core.vector.vec2.call(null,center),thi.ng.geom.core.as_cartesian.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.geom.core.vector.x.call(null,radius__$1),theta1)));
var q = thi.ng.geom.core._PLUS_.call(null,thi.ng.geom.core.vector.vec2.call(null,center),thi.ng.geom.core.as_cartesian.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.geom.core.vector.y.call(null,radius__$1),theta2)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"M","M",-1755742206),p], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",-1688942394),radius__$1,(0),(cljs.core.truth_(great_QMARK_)?(1):(0)),(cljs.core.truth_(ccw_QMARK_)?(1):(0)),q], null)], null);
});
thi.ng.geom.svg.core.arc = (function thi$ng$geom$svg$core$arc(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20094 = arguments.length;
var i__19334__auto___20095 = (0);
while(true){
if((i__19334__auto___20095 < len__19333__auto___20094)){
args__19340__auto__.push((arguments[i__19334__auto___20095]));

var G__20096 = (i__19334__auto___20095 + (1));
i__19334__auto___20095 = G__20096;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((6) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((6)),(0))):null);
return thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__19341__auto__);
});

thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$variadic = (function (center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_,p__20092){
var vec__20093 = p__20092;
var attribs = cljs.core.nth.call(null,vec__20093,(0),null);
return thi.ng.geom.svg.core.path.call(null,thi.ng.geom.svg.core.arc_segment.call(null,center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_),attribs);
});

thi.ng.geom.svg.core.arc.cljs$lang$maxFixedArity = (6);

thi.ng.geom.svg.core.arc.cljs$lang$applyTo = (function (seq20085){
var G__20086 = cljs.core.first.call(null,seq20085);
var seq20085__$1 = cljs.core.next.call(null,seq20085);
var G__20087 = cljs.core.first.call(null,seq20085__$1);
var seq20085__$2 = cljs.core.next.call(null,seq20085__$1);
var G__20088 = cljs.core.first.call(null,seq20085__$2);
var seq20085__$3 = cljs.core.next.call(null,seq20085__$2);
var G__20089 = cljs.core.first.call(null,seq20085__$3);
var seq20085__$4 = cljs.core.next.call(null,seq20085__$3);
var G__20090 = cljs.core.first.call(null,seq20085__$4);
var seq20085__$5 = cljs.core.next.call(null,seq20085__$4);
var G__20091 = cljs.core.first.call(null,seq20085__$5);
var seq20085__$6 = cljs.core.next.call(null,seq20085__$5);
return thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$variadic(G__20086,G__20087,G__20088,G__20089,G__20090,G__20091,seq20085__$6);
});
thi.ng.geom.svg.core.rect = (function thi$ng$geom$svg$core$rect(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20105 = arguments.length;
var i__19334__auto___20106 = (0);
while(true){
if((i__19334__auto___20106 < len__19333__auto___20105)){
args__19340__auto__.push((arguments[i__19334__auto___20106]));

var G__20107 = (i__19334__auto___20106 + (1));
i__19334__auto___20106 = G__20107;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((3) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((3)),(0))):null);
return thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19341__auto__);
});

thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$variadic = (function (p__20101,w,h,p__20102){
var vec__20103 = p__20101;
var x = cljs.core.nth.call(null,vec__20103,(0),null);
var y = cljs.core.nth.call(null,vec__20103,(1),null);
var vec__20104 = p__20102;
var attribs = cljs.core.nth.call(null,vec__20104,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,x),new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,y),new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null))], null);
});

thi.ng.geom.svg.core.rect.cljs$lang$maxFixedArity = (3);

thi.ng.geom.svg.core.rect.cljs$lang$applyTo = (function (seq20097){
var G__20098 = cljs.core.first.call(null,seq20097);
var seq20097__$1 = cljs.core.next.call(null,seq20097);
var G__20099 = cljs.core.first.call(null,seq20097__$1);
var seq20097__$2 = cljs.core.next.call(null,seq20097__$1);
var G__20100 = cljs.core.first.call(null,seq20097__$2);
var seq20097__$3 = cljs.core.next.call(null,seq20097__$2);
return thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$variadic(G__20098,G__20099,G__20100,seq20097__$3);
});
thi.ng.geom.svg.core.line = (function thi$ng$geom$svg$core$line(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20117 = arguments.length;
var i__19334__auto___20118 = (0);
while(true){
if((i__19334__auto___20118 < len__19333__auto___20117)){
args__19340__auto__.push((arguments[i__19334__auto___20118]));

var G__20119 = (i__19334__auto___20118 + (1));
i__19334__auto___20118 = G__20119;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$variadic = (function (p__20111,p__20112,p__20113){
var vec__20114 = p__20111;
var ax = cljs.core.nth.call(null,vec__20114,(0),null);
var ay = cljs.core.nth.call(null,vec__20114,(1),null);
var vec__20115 = p__20112;
var bx = cljs.core.nth.call(null,vec__20115,(0),null);
var by = cljs.core.nth.call(null,vec__20115,(1),null);
var vec__20116 = p__20113;
var attribs = cljs.core.nth.call(null,vec__20116,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,ax),new cljs.core.Keyword(null,"y1","y1",589123466),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,ay),new cljs.core.Keyword(null,"x2","x2",-1362513475),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,bx),new cljs.core.Keyword(null,"y2","y2",-718691301),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,by)], null))], null);
});

thi.ng.geom.svg.core.line.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.line.cljs$lang$applyTo = (function (seq20108){
var G__20109 = cljs.core.first.call(null,seq20108);
var seq20108__$1 = cljs.core.next.call(null,seq20108);
var G__20110 = cljs.core.first.call(null,seq20108__$1);
var seq20108__$2 = cljs.core.next.call(null,seq20108__$1);
return thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$variadic(G__20109,G__20110,seq20108__$2);
});
thi.ng.geom.svg.core.line_decorated = (function thi$ng$geom$svg$core$line_decorated(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20127 = arguments.length;
var i__19334__auto___20128 = (0);
while(true){
if((i__19334__auto___20128 < len__19333__auto___20127)){
args__19340__auto__.push((arguments[i__19334__auto___20128]));

var G__20129 = (i__19334__auto___20128 + (1));
i__19334__auto___20128 = G__20129;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((4) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((4)),(0))):null);
return thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__19341__auto__);
});

thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$variadic = (function (p,q,start,end,p__20125){
var vec__20126 = p__20125;
var attribs = cljs.core.nth.call(null,vec__20126,(0),null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.truth_(end)?end.call(null,p,q,(0),attribs):null)),(cljs.core.truth_(start)?start.call(null,q,p,(0),attribs):null)),thi.ng.geom.svg.core.line.call(null,p,q,attribs));
});

thi.ng.geom.svg.core.line_decorated.cljs$lang$maxFixedArity = (4);

thi.ng.geom.svg.core.line_decorated.cljs$lang$applyTo = (function (seq20120){
var G__20121 = cljs.core.first.call(null,seq20120);
var seq20120__$1 = cljs.core.next.call(null,seq20120);
var G__20122 = cljs.core.first.call(null,seq20120__$1);
var seq20120__$2 = cljs.core.next.call(null,seq20120__$1);
var G__20123 = cljs.core.first.call(null,seq20120__$2);
var seq20120__$3 = cljs.core.next.call(null,seq20120__$2);
var G__20124 = cljs.core.first.call(null,seq20120__$3);
var seq20120__$4 = cljs.core.next.call(null,seq20120__$3);
return thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$variadic(G__20121,G__20122,G__20123,G__20124,seq20120__$4);
});
thi.ng.geom.svg.core.line_strip = (function thi$ng$geom$svg$core$line_strip(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20134 = arguments.length;
var i__19334__auto___20135 = (0);
while(true){
if((i__19334__auto___20135 < len__19333__auto___20134)){
args__19340__auto__.push((arguments[i__19334__auto___20135]));

var G__20136 = (i__19334__auto___20135 + (1));
i__19334__auto___20135 = G__20136;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((1) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((1)),(0))):null);
return thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19341__auto__);
});

thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$variadic = (function (points,p__20132){
var vec__20133 = p__20132;
var attribs = cljs.core.nth.call(null,vec__20133,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.apply.call(null,thi.ng.strf.core.format,thi.ng.geom.svg.core.point_seq_format.call(null,cljs.core.count.call(null,points)),points)], null))], null);
});

thi.ng.geom.svg.core.line_strip.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.line_strip.cljs$lang$applyTo = (function (seq20130){
var G__20131 = cljs.core.first.call(null,seq20130);
var seq20130__$1 = cljs.core.next.call(null,seq20130);
return thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$variadic(G__20131,seq20130__$1);
});
thi.ng.geom.svg.core.line_strip_decorated = (function thi$ng$geom$svg$core$line_strip_decorated(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20146 = arguments.length;
var i__19334__auto___20147 = (0);
while(true){
if((i__19334__auto___20147 < len__19333__auto___20146)){
args__19340__auto__.push((arguments[i__19334__auto___20147]));

var G__20148 = (i__19334__auto___20147 + (1));
i__19334__auto___20147 = G__20148;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((4) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((4)),(0))):null);
return thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__19341__auto__);
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$variadic = (function (points,start,seg,end,p__20142){
var vec__20143 = p__20142;
var attribs = cljs.core.nth.call(null,vec__20143,(0),null);
var n = (cljs.core.count.call(null,points) - (1));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.truth_(end)?end.call(null,points.call(null,(n - (1))),cljs.core.peek.call(null,points),n,attribs):null)),(cljs.core.truth_(seg)?cljs.core.map_indexed.call(null,((function (n,vec__20143,attribs){
return (function (i,p__20144){
var vec__20145 = p__20144;
var p = cljs.core.nth.call(null,vec__20145,(0),null);
var q = cljs.core.nth.call(null,vec__20145,(1),null);
return seg.call(null,p,q,i,attribs);
});})(n,vec__20143,attribs))
,thi.ng.dstruct.core.successive_nth.call(null,(2),points)):null)),(cljs.core.truth_(start)?start.call(null,points.call(null,(1)),points.call(null,(0)),(0),attribs):null)),thi.ng.geom.svg.core.line_strip.call(null,points,attribs));
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$lang$maxFixedArity = (4);

thi.ng.geom.svg.core.line_strip_decorated.cljs$lang$applyTo = (function (seq20137){
var G__20138 = cljs.core.first.call(null,seq20137);
var seq20137__$1 = cljs.core.next.call(null,seq20137);
var G__20139 = cljs.core.first.call(null,seq20137__$1);
var seq20137__$2 = cljs.core.next.call(null,seq20137__$1);
var G__20140 = cljs.core.first.call(null,seq20137__$2);
var seq20137__$3 = cljs.core.next.call(null,seq20137__$2);
var G__20141 = cljs.core.first.call(null,seq20137__$3);
var seq20137__$4 = cljs.core.next.call(null,seq20137__$3);
return thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$variadic(G__20138,G__20139,G__20140,G__20141,seq20137__$4);
});
thi.ng.geom.svg.core.polygon = (function thi$ng$geom$svg$core$polygon(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20153 = arguments.length;
var i__19334__auto___20154 = (0);
while(true){
if((i__19334__auto___20154 < len__19333__auto___20153)){
args__19340__auto__.push((arguments[i__19334__auto___20154]));

var G__20155 = (i__19334__auto___20154 + (1));
i__19334__auto___20154 = G__20155;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((1) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((1)),(0))):null);
return thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19341__auto__);
});

thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (points,p__20151){
var vec__20152 = p__20151;
var attribs = cljs.core.nth.call(null,vec__20152,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.apply.call(null,thi.ng.strf.core.format,thi.ng.geom.svg.core.point_seq_format.call(null,cljs.core.count.call(null,points)),points)], null))], null);
});

thi.ng.geom.svg.core.polygon.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.polygon.cljs$lang$applyTo = (function (seq20149){
var G__20150 = cljs.core.first.call(null,seq20149);
var seq20149__$1 = cljs.core.next.call(null,seq20149);
return thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$variadic(G__20150,seq20149__$1);
});
thi.ng.geom.svg.core.instance = (function thi$ng$geom$svg$core$instance(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20160 = arguments.length;
var i__19334__auto___20161 = (0);
while(true){
if((i__19334__auto___20161 < len__19333__auto___20160)){
args__19340__auto__.push((arguments[i__19334__auto___20161]));

var G__20162 = (i__19334__auto___20161 + (1));
i__19334__auto___20161 = G__20162;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((1) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((1)),(0))):null);
return thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19341__auto__);
});

thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__20158){
var vec__20159 = p__20158;
var attribs = cljs.core.nth.call(null,vec__20159,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 1, ["xlink:href",[cljs.core.str("#"),cljs.core.str(id)].join('')], null))], null);
});

thi.ng.geom.svg.core.instance.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.instance.cljs$lang$applyTo = (function (seq20156){
var G__20157 = cljs.core.first.call(null,seq20156);
var seq20156__$1 = cljs.core.next.call(null,seq20156);
return thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$variadic(G__20157,seq20156__$1);
});
thi.ng.geom.svg.core.arrow_head = (function thi$ng$geom$svg$core$arrow_head(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20171 = arguments.length;
var i__19334__auto___20172 = (0);
while(true){
if((i__19334__auto___20172 < len__19333__auto___20171)){
args__19340__auto__.push((arguments[i__19334__auto___20172]));

var G__20173 = (i__19334__auto___20172 + (1));
i__19334__auto___20172 = G__20173;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((3) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((3)),(0))):null);
return thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19341__auto__);
});

thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$variadic = (function (len,theta,solid_QMARK_,p__20167){
var vec__20168 = p__20167;
var opts = cljs.core.nth.call(null,vec__20168,(0),null);
return ((function (vec__20168,opts){
return (function() { 
var G__20174__delegate = function (p,q,idx,p__20169){
var vec__20170 = p__20169;
var attribs = cljs.core.nth.call(null,vec__20170,(0),null);
var q__$1 = thi.ng.geom.core.vector.vec2.call(null,q);
var d = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,q__$1,p),len);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.truth_(solid_QMARK_)?thi.ng.geom.svg.core.polygon:thi.ng.geom.svg.core.line_strip).call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._.call(null,q__$1,thi.ng.geom.core.rotate.call(null,d,(- theta))),q__$1,thi.ng.geom.core._.call(null,q__$1,thi.ng.geom.core.rotate.call(null,d,theta))], null),cljs.core.merge.call(null,attribs,opts)));
};
var G__20174 = function (p,q,idx,var_args){
var p__20169 = null;
if (arguments.length > 3) {
var G__20175__i = 0, G__20175__a = new Array(arguments.length -  3);
while (G__20175__i < G__20175__a.length) {G__20175__a[G__20175__i] = arguments[G__20175__i + 3]; ++G__20175__i;}
  p__20169 = new cljs.core.IndexedSeq(G__20175__a,0);
} 
return G__20174__delegate.call(this,p,q,idx,p__20169);};
G__20174.cljs$lang$maxFixedArity = 3;
G__20174.cljs$lang$applyTo = (function (arglist__20176){
var p = cljs.core.first(arglist__20176);
arglist__20176 = cljs.core.next(arglist__20176);
var q = cljs.core.first(arglist__20176);
arglist__20176 = cljs.core.next(arglist__20176);
var idx = cljs.core.first(arglist__20176);
var p__20169 = cljs.core.rest(arglist__20176);
return G__20174__delegate(p,q,idx,p__20169);
});
G__20174.cljs$core$IFn$_invoke$arity$variadic = G__20174__delegate;
return G__20174;
})()
;
;})(vec__20168,opts))
});

thi.ng.geom.svg.core.arrow_head.cljs$lang$maxFixedArity = (3);

thi.ng.geom.svg.core.arrow_head.cljs$lang$applyTo = (function (seq20163){
var G__20164 = cljs.core.first.call(null,seq20163);
var seq20163__$1 = cljs.core.next.call(null,seq20163);
var G__20165 = cljs.core.first.call(null,seq20163__$1);
var seq20163__$2 = cljs.core.next.call(null,seq20163__$1);
var G__20166 = cljs.core.first.call(null,seq20163__$2);
var seq20163__$3 = cljs.core.next.call(null,seq20163__$2);
return thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$variadic(G__20164,G__20165,G__20166,seq20163__$3);
});
thi.ng.geom.svg.core.line_label = (function thi$ng$geom$svg$core$line_label(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20185 = arguments.length;
var i__19334__auto___20186 = (0);
while(true){
if((i__19334__auto___20186 < len__19333__auto___20185)){
args__19340__auto__.push((arguments[i__19334__auto___20186]));

var G__20187 = (i__19334__auto___20186 + (1));
i__19334__auto___20186 = G__20187;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((0) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((0)),(0))):null);
return thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$variadic(argseq__19341__auto__);
});

thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$variadic = (function (p__20179){
var vec__20180 = p__20179;
var map__20181 = cljs.core.nth.call(null,vec__20180,(0),null);
var map__20181__$1 = ((((!((map__20181 == null)))?((((map__20181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20181):map__20181);
var opts = map__20181__$1;
var __rotate_QMARK_ = cljs.core.get.call(null,map__20181__$1,new cljs.core.Keyword(null,"__rotate?","__rotate?",-212603580));
var __offset = cljs.core.get.call(null,map__20181__$1,new cljs.core.Keyword(null,"__offset","__offset",-9560190));
var opts__$1 = cljs.core.update_in.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"__rotate?","__rotate?",-212603580),new cljs.core.Keyword(null,"__offset","__offset",-9560190)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696)], null),((function (vec__20180,map__20181,map__20181__$1,opts,__rotate_QMARK_,__offset){
return (function (p1__20177_SHARP_){
var or__18275__auto__ = p1__20177_SHARP_;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return "middle";
}
});})(vec__20180,map__20181,map__20181__$1,opts,__rotate_QMARK_,__offset))
);
return ((function (opts__$1,vec__20180,map__20181,map__20181__$1,opts,__rotate_QMARK_,__offset){
return (function() { 
var G__20188__delegate = function (p,q,idx,p__20183){
var vec__20184 = p__20183;
var attribs = cljs.core.nth.call(null,vec__20184,(0),null);
var temp__4655__auto__ = cljs.core.get_in.call(null,attribs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__label","__label",758805562),idx], null));
if(cljs.core.truth_(temp__4655__auto__)){
var label = temp__4655__auto__;
var p__$1 = thi.ng.geom.core.vector.vec2.call(null,p);
var m = thi.ng.geom.core._PLUS_.call(null,thi.ng.geom.core.mix.call(null,p__$1,q),__offset);
var opts__$2 = (cljs.core.truth_(__rotate_QMARK_)?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("rotate("),cljs.core.str(thi.ng.math.core.degrees.call(null,thi.ng.geom.core.heading.call(null,thi.ng.geom.core.normal.call(null,thi.ng.geom.core._.call(null,p__$1,q))))),cljs.core.str(" "),cljs.core.str(m.call(null,(0))),cljs.core.str(" "),cljs.core.str(m.call(null,(1))),cljs.core.str(")")].join('')):opts__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,thi.ng.geom.svg.core.text.call(null,m,label,cljs.core.merge.call(null,cljs.core.dissoc.call(null,attribs,new cljs.core.Keyword(null,"__label","__label",758805562)),opts__$2)));
} else {
return null;
}
};
var G__20188 = function (p,q,idx,var_args){
var p__20183 = null;
if (arguments.length > 3) {
var G__20189__i = 0, G__20189__a = new Array(arguments.length -  3);
while (G__20189__i < G__20189__a.length) {G__20189__a[G__20189__i] = arguments[G__20189__i + 3]; ++G__20189__i;}
  p__20183 = new cljs.core.IndexedSeq(G__20189__a,0);
} 
return G__20188__delegate.call(this,p,q,idx,p__20183);};
G__20188.cljs$lang$maxFixedArity = 3;
G__20188.cljs$lang$applyTo = (function (arglist__20190){
var p = cljs.core.first(arglist__20190);
arglist__20190 = cljs.core.next(arglist__20190);
var q = cljs.core.first(arglist__20190);
arglist__20190 = cljs.core.next(arglist__20190);
var idx = cljs.core.first(arglist__20190);
var p__20183 = cljs.core.rest(arglist__20190);
return G__20188__delegate(p,q,idx,p__20183);
});
G__20188.cljs$core$IFn$_invoke$arity$variadic = G__20188__delegate;
return G__20188;
})()
;
;})(opts__$1,vec__20180,map__20181,map__20181__$1,opts,__rotate_QMARK_,__offset))
});

thi.ng.geom.svg.core.line_label.cljs$lang$maxFixedArity = (0);

thi.ng.geom.svg.core.line_label.cljs$lang$applyTo = (function (seq20178){
return thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20178));
});
thi.ng.geom.svg.core.comp_decorators = (function thi$ng$geom$svg$core$comp_decorators(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20194 = arguments.length;
var i__19334__auto___20195 = (0);
while(true){
if((i__19334__auto___20195 < len__19333__auto___20194)){
args__19340__auto__.push((arguments[i__19334__auto___20195]));

var G__20196 = (i__19334__auto___20195 + (1));
i__19334__auto___20195 = G__20196;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((0) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((0)),(0))):null);
return thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic(argseq__19341__auto__);
});

thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
return (function() { 
var G__20197__delegate = function (p,q,idx,p__20192){
var vec__20193 = p__20192;
var attribs = cljs.core.nth.call(null,vec__20193,(0),null);
return cljs.core.reduce.call(null,((function (vec__20193,attribs){
return (function (acc,f){
return cljs.core.concat.call(null,acc,f.call(null,p,q,idx,attribs));
});})(vec__20193,attribs))
,cljs.core.List.EMPTY,fns);
};
var G__20197 = function (p,q,idx,var_args){
var p__20192 = null;
if (arguments.length > 3) {
var G__20198__i = 0, G__20198__a = new Array(arguments.length -  3);
while (G__20198__i < G__20198__a.length) {G__20198__a[G__20198__i] = arguments[G__20198__i + 3]; ++G__20198__i;}
  p__20192 = new cljs.core.IndexedSeq(G__20198__a,0);
} 
return G__20197__delegate.call(this,p,q,idx,p__20192);};
G__20197.cljs$lang$maxFixedArity = 3;
G__20197.cljs$lang$applyTo = (function (arglist__20199){
var p = cljs.core.first(arglist__20199);
arglist__20199 = cljs.core.next(arglist__20199);
var q = cljs.core.first(arglist__20199);
arglist__20199 = cljs.core.next(arglist__20199);
var idx = cljs.core.first(arglist__20199);
var p__20192 = cljs.core.rest(arglist__20199);
return G__20197__delegate(p,q,idx,p__20192);
});
G__20197.cljs$core$IFn$_invoke$arity$variadic = G__20197__delegate;
return G__20197;
})()
;
});

thi.ng.geom.svg.core.comp_decorators.cljs$lang$maxFixedArity = (0);

thi.ng.geom.svg.core.comp_decorators.cljs$lang$applyTo = (function (seq20191){
return thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20191));
});

//# sourceMappingURL=core.js.map