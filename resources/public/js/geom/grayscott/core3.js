// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.grayscott.core3');
goog.require('cljs.core');
geom.grayscott.core3.clip = (function geom$grayscott$core3$clip(min,max,n){
if((n < min)){
return min;
} else {
if((n > max)){
return max;
} else {
return n;

}
}
});
geom.grayscott.core3.get_u = (function geom$grayscott$core3$get_u(p__27403,x,y){
var map__27406 = p__27403;
var map__27406__$1 = ((((!((map__27406 == null)))?((((map__27406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27406):map__27406);
var w = cljs.core.get.call(null,map__27406__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__27406__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var u = cljs.core.get.call(null,map__27406__$1,new cljs.core.Keyword(null,"u","u",-1156634785));
if(((((0) <= y)) && ((y <= h))) && ((((0) <= x)) && ((x <= w)))){
return cljs.core.get.call(null,u,(x + (y * w)));
} else {
return (0);
}
});
geom.grayscott.core3.get_v = (function geom$grayscott$core3$get_v(p__27408,x,y){
var map__27411 = p__27408;
var map__27411__$1 = ((((!((map__27411 == null)))?((((map__27411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27411):map__27411);
var w = cljs.core.get.call(null,map__27411__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__27411__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var v = cljs.core.get.call(null,map__27411__$1,new cljs.core.Keyword(null,"v","v",21465059));
if(((((0) <= y)) && ((y <= h))) && ((((0) <= x)) && ((x <= w)))){
return cljs.core.get.call(null,v,(x + (y * w)));
} else {
return (0);
}
});
geom.grayscott.core3.get_f = (function geom$grayscott$core3$get_f(gs,x,y){
return new cljs.core.Keyword(null,"get-f","get-f",-320245497).cljs$core$IFn$_invoke$arity$1(gs).call(null,gs,x,y);
});
geom.grayscott.core3.get_k = (function geom$grayscott$core3$get_k(gs,x,y){
return new cljs.core.Keyword(null,"get-k","get-k",872167077).cljs$core$IFn$_invoke$arity$1(gs).call(null,gs,x,y);
});
geom.grayscott.core3.set_coefs = (function geom$grayscott$core3$set_coefs(gs,f,k,du,dv){
return cljs.core.assoc.call(null,gs,new cljs.core.Keyword(null,"f","f",-1597136552),f,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"du","du",1000321745),du,new cljs.core.Keyword(null,"dv","dv",781315158),dv);
});
geom.grayscott.core3.grayscott_defaults = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"f","f",-1597136552),0.023,new cljs.core.Keyword(null,"k","k",-2146297393),0.077,new cljs.core.Keyword(null,"du","du",1000321745),0.095,new cljs.core.Keyword(null,"dv","dv",781315158),0.03,new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277),false,new cljs.core.Keyword(null,"get-f","get-f",-320245497),(function (this$,_,___$1){
return new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(this$);
}),new cljs.core.Keyword(null,"get-k","get-k",872167077),(function (this$,_,___$1){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(this$);
})], null);
geom.grayscott.core3.grayscott = (function geom$grayscott$core3$grayscott(var_args){
var args__19340__auto__ = [];
var len__19333__auto___27418 = arguments.length;
var i__19334__auto___27419 = (0);
while(true){
if((i__19334__auto___27419 < len__19333__auto___27418)){
args__19340__auto__.push((arguments[i__19334__auto___27419]));

var G__27420 = (i__19334__auto___27419 + (1));
i__19334__auto___27419 = G__27420;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return geom.grayscott.core3.grayscott.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

geom.grayscott.core3.grayscott.cljs$core$IFn$_invoke$arity$variadic = (function (w,h,p__27416){
var vec__27417 = p__27416;
var opts = cljs.core.nth.call(null,vec__27417,(0),null);
var cnt = (w * h);
var v = cljs.core.vec.call(null,cljs.core.repeat.call(null,cnt,1.0));
var u = cljs.core.vec.call(null,cljs.core.repeat.call(null,cnt,0.0));
return cljs.core.merge.call(null,geom.grayscott.core3.grayscott_defaults,opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),h,new cljs.core.Keyword(null,"u","u",-1156634785),u,new cljs.core.Keyword(null,"v","v",21465059),v], null));
});

geom.grayscott.core3.grayscott.cljs$lang$maxFixedArity = (2);

geom.grayscott.core3.grayscott.cljs$lang$applyTo = (function (seq27413){
var G__27414 = cljs.core.first.call(null,seq27413);
var seq27413__$1 = cljs.core.next.call(null,seq27413);
var G__27415 = cljs.core.first.call(null,seq27413__$1);
var seq27413__$2 = cljs.core.next.call(null,seq27413__$1);
return geom.grayscott.core3.grayscott.cljs$core$IFn$_invoke$arity$variadic(G__27414,G__27415,seq27413__$2);
});
geom.grayscott.core3.upd = (function geom$grayscott$core3$upd(p__27421,t){
var map__27439 = p__27421;
var map__27439__$1 = ((((!((map__27439 == null)))?((((map__27439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27439):map__27439);
var gs = map__27439__$1;
var w = cljs.core.get.call(null,map__27439__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__27439__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var u = cljs.core.get.call(null,map__27439__$1,new cljs.core.Keyword(null,"u","u",-1156634785));
var v = cljs.core.get.call(null,map__27439__$1,new cljs.core.Keyword(null,"v","v",21465059));
var du = cljs.core.get.call(null,map__27439__$1,new cljs.core.Keyword(null,"du","du",1000321745));
var dv = cljs.core.get.call(null,map__27439__$1,new cljs.core.Keyword(null,"dv","dv",781315158));
var f = cljs.core.get.call(null,map__27439__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var k = cljs.core.get.call(null,map__27439__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var is_tilling = cljs.core.get.call(null,map__27439__$1,new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277));
var t__$1 = geom.grayscott.core3.clip.call(null,(0),(1),t);
var w1 = (w - (1));
var h1 = (h - (1));
var temp = cljs.core.reduce.call(null,((function (t__$1,w1,h1,map__27439,map__27439__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function (p__27442,p__27443){
var vec__27444 = p__27442;
var tu = cljs.core.nth.call(null,vec__27444,(0),null);
var tv = cljs.core.nth.call(null,vec__27444,(1),null);
var vec__27445 = p__27443;
var x = cljs.core.nth.call(null,vec__27445,(0),null);
var y = cljs.core.nth.call(null,vec__27445,(1),null);
var idx = (x + (y * w));
var top = (idx - w);
var bottom = (idx + w);
var left = (idx - (1));
var right = (idx + (1));
var f__$1 = geom.grayscott.core3.get_f.call(null,gs,x,y);
var k__$1 = geom.grayscott.core3.get_k.call(null,gs,x,y);
var cu = cljs.core.get.call(null,u,idx);
var cv = cljs.core.get.call(null,v,idx);
var d2 = ((cu * cv) * cv);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_BANG_.call(null,tu,idx,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cu + (t__$1 * (((du * ((((cljs.core.get.call(null,u,right) + cljs.core.get.call(null,u,left)) + cljs.core.get.call(null,u,bottom)) + cljs.core.get.call(null,u,top)) - ((4) * cu))) - d2) + (f__$1 * (1.0 - cu)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})()),cljs.core.assoc_BANG_.call(null,tv,idx,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cv + (t__$1 * (((dv * ((((cljs.core.get.call(null,v,right) + cljs.core.get.call(null,v,left)) + cljs.core.get.call(null,v,bottom)) + cljs.core.get.call(null,v,top)) - ((4) * cv))) + d2) - (k__$1 * cv))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})())], null);
});})(t__$1,w1,h1,map__27439,map__27439__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,u),cljs.core.transient$.call(null,v)], null),(function (){var iter__19047__auto__ = ((function (t__$1,w1,h1,map__27439,map__27439__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function geom$grayscott$core3$upd_$_iter__27446(s__27447){
return (new cljs.core.LazySeq(null,((function (t__$1,w1,h1,map__27439,map__27439__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function (){
var s__27447__$1 = s__27447;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27447__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19043__auto__ = ((function (s__27447__$1,x,xs__5205__auto__,temp__4657__auto__,t__$1,w1,h1,map__27439,map__27439__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function geom$grayscott$core3$upd_$_iter__27446_$_iter__27448(s__27449){
return (new cljs.core.LazySeq(null,((function (s__27447__$1,x,xs__5205__auto__,temp__4657__auto__,t__$1,w1,h1,map__27439,map__27439__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function (){
var s__27449__$1 = s__27449;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__27449__$1);
if(temp__4657__auto____$1){
var s__27449__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27449__$2)){
var c__19045__auto__ = cljs.core.chunk_first.call(null,s__27449__$2);
var size__19046__auto__ = cljs.core.count.call(null,c__19045__auto__);
var b__27451 = cljs.core.chunk_buffer.call(null,size__19046__auto__);
if((function (){var i__27450 = (0);
while(true){
if((i__27450 < size__19046__auto__)){
var y = cljs.core._nth.call(null,c__19045__auto__,i__27450);
cljs.core.chunk_append.call(null,b__27451,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__27456 = (i__27450 + (1));
i__27450 = G__27456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27451),geom$grayscott$core3$upd_$_iter__27446_$_iter__27448.call(null,cljs.core.chunk_rest.call(null,s__27449__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27451),null);
}
} else {
var y = cljs.core.first.call(null,s__27449__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),geom$grayscott$core3$upd_$_iter__27446_$_iter__27448.call(null,cljs.core.rest.call(null,s__27449__$2)));
}
} else {
return null;
}
break;
}
});})(s__27447__$1,x,xs__5205__auto__,temp__4657__auto__,t__$1,w1,h1,map__27439,map__27439__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
,null,null));
});})(s__27447__$1,x,xs__5205__auto__,temp__4657__auto__,t__$1,w1,h1,map__27439,map__27439__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
;
var fs__19044__auto__ = cljs.core.seq.call(null,iterys__19043__auto__.call(null,cljs.core.range.call(null,(1),h1)));
if(fs__19044__auto__){
return cljs.core.concat.call(null,fs__19044__auto__,geom$grayscott$core3$upd_$_iter__27446.call(null,cljs.core.rest.call(null,s__27447__$1)));
} else {
var G__27457 = cljs.core.rest.call(null,s__27447__$1);
s__27447__$1 = G__27457;
continue;
}
} else {
return null;
}
break;
}
});})(t__$1,w1,h1,map__27439,map__27439__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
,null,null));
});})(t__$1,w1,h1,map__27439,map__27439__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
;
return iter__19047__auto__.call(null,cljs.core.range.call(null,(1),w1));
})());
var vec__27441 = ((cljs.core.not.call(null,is_tilling))?temp:(function (){var w2 = (w1 - (1));
var idxH1 = (h1 * w);
var idxH2 = ((h1 - (1)) * w);
var temp__$1 = cljs.core.reduce.call(null,((function (w2,idxH1,idxH2,t__$1,w1,h1,temp,map__27439,map__27439__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function (p__27452,x){
var vec__27453 = p__27452;
var tu = cljs.core.nth.call(null,vec__27453,(0),null);
var tv = cljs.core.nth.call(null,vec__27453,(1),null);
var left = (((x === (0)))?w1:(x - (1)));
var right = ((cljs.core._EQ_.call(null,w1,x))?(0):(x + (1)));
var idx = (idxH1 + x);
var cu = cljs.core.get.call(null,u,x);
var cv = cljs.core.get.call(null,v,x);
var cui = cljs.core.get.call(null,u,idx);
var cvi = cljs.core.get.call(null,v,idx);
var d1 = ((cu * cv) * cv);
var d2 = ((cui * cvi) * cvi);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_BANG_.call(null,tu,x,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cu + (t__$1 * (((du * ((((cljs.core.get.call(null,u,right) + cljs.core.get.call(null,u,left)) + cljs.core.get.call(null,u,(w + x))) + cui) - ((4) * cu))) - d1) + (f * (1.0 - cu)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})(),idx,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cui + (t__$1 * (((du * ((((cljs.core.get.call(null,u,(idxH1 + right)) + cljs.core.get.call(null,u,(idxH1 + left))) + cu) + cljs.core.get.call(null,u,(idxH2 + x))) - ((4) * cui))) - d2) + (f * (1.0 - cui)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})()),cljs.core.assoc_BANG_.call(null,tv,x,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cv + (t__$1 * (((dv * ((((cljs.core.get.call(null,v,right) + cljs.core.get.call(null,v,left)) + cljs.core.get.call(null,v,(w + x))) + cvi) - ((4) * cv))) + d1) - (k * cv))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})(),idx,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cvi + (t__$1 * (((dv * ((((cljs.core.get.call(null,v,(idxH1 + right)) + cljs.core.get.call(null,v,(idxH1 + left))) + cv) + cljs.core.get.call(null,v,(idxH2 + x))) - ((4) * cvi))) + d2) - (k * cvi))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})())], null);
});})(w2,idxH1,idxH2,t__$1,w1,h1,temp,map__27439,map__27439__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
,temp,cljs.core.range.call(null,(0),w));
return cljs.core.reduce.call(null,((function (w2,idxH1,idxH2,temp__$1,t__$1,w1,h1,temp,map__27439,map__27439__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function (p__27454,y){
var vec__27455 = p__27454;
var tu = cljs.core.nth.call(null,vec__27455,(0),null);
var tv = cljs.core.nth.call(null,vec__27455,(1),null);
var idx = (y * w);
var idxW1 = (idx + w1);
var idxW2 = (idx + w2);
var cu = cljs.core.get.call(null,u,idx);
var cv = cljs.core.get.call(null,v,idx);
var cui = cljs.core.get.call(null,u,idxW1);
var cvi = cljs.core.get.call(null,v,idxW1);
var d1 = ((cu * cv) * cv);
var d2 = ((cui * cvi) * cvi);
var up = (w * (((y === (0)))?h1:(y - (1))));
var down = (w * ((cljs.core._EQ_.call(null,h1,y))?(0):(y + (1))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_BANG_.call(null,tu,idx,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cu + (t__$1 * (((du * ((((cljs.core.get.call(null,u,(idx + (1))) + cui) + cljs.core.get.call(null,u,down)) + cljs.core.get.call(null,u,up)) - ((4) * cu))) - d1) + (f * (1.0 - cu)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})(),idxW1,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cui + (t__$1 * (((du * (((((cu + cljs.core.get.call(null,u,idxW2)) + cljs.core.get.call(null,u,(w1 + down))) + cu) + cljs.core.get.call(null,u,(up + w1))) - ((4) * cui))) - d2) + (f * (1.0 - cui)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})()),cljs.core.assoc_BANG_.call(null,tv,idx,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cv + (t__$1 * (((dv * ((((cljs.core.get.call(null,v,(idx + (1))) + cvi) + cljs.core.get.call(null,v,down)) + cljs.core.get.call(null,v,up)) - ((4) * cv))) + d1) - (k * cv))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})(),idxW1,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cvi + (t__$1 * (((dv * ((((cv + cljs.core.get.call(null,v,idxW2)) + cljs.core.get.call(null,v,(down + w1))) + cljs.core.get.call(null,v,(up + w1))) - ((4) * cvi))) + d2) - (k * cvi))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})())], null);
});})(w2,idxH1,idxH2,temp__$1,t__$1,w1,h1,temp,map__27439,map__27439__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
,temp__$1,cljs.core.range.call(null,(0),h));
})());
var tu = cljs.core.nth.call(null,vec__27441,(0),null);
var tv = cljs.core.nth.call(null,vec__27441,(1),null);
return cljs.core.assoc.call(null,gs,new cljs.core.Keyword(null,"u","u",-1156634785),cljs.core.persistent_BANG_.call(null,tu),new cljs.core.Keyword(null,"v","v",21465059),cljs.core.persistent_BANG_.call(null,tv));
});
var start__19203__auto___27458 = cljs.core.system_time.call(null);
var ret__19204__auto___27459 = (function (){
geom.grayscott.core3.upd.call(null,geom.grayscott.core3.grayscott.call(null,(200),(200)),(1));

return null;
})()
;
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__19203__auto___27458).toFixed((6))),cljs.core.str(" msecs")].join(''));


//# sourceMappingURL=core3.js.map