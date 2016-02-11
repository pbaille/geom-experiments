// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.grayscott.core');
goog.require('cljs.core');
geom.grayscott.core.clip = (function geom$grayscott$core$clip(min,max,n){
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
geom.grayscott.core.get_u = (function geom$grayscott$core$get_u(p__20097,x,y){
var map__20100 = p__20097;
var map__20100__$1 = ((((!((map__20100 == null)))?((((map__20100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20100):map__20100);
var w = cljs.core.get.call(null,map__20100__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__20100__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var u = cljs.core.get.call(null,map__20100__$1,new cljs.core.Keyword(null,"u","u",-1156634785));
if(((((0) <= y)) && ((y <= h))) && ((((0) <= x)) && ((x <= w)))){
return cljs.core.get.call(null,u,(x + (y * w)));
} else {
return (0);
}
});
geom.grayscott.core.get_v = (function geom$grayscott$core$get_v(p__20102,x,y){
var map__20105 = p__20102;
var map__20105__$1 = ((((!((map__20105 == null)))?((((map__20105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20105):map__20105);
var w = cljs.core.get.call(null,map__20105__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__20105__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var v = cljs.core.get.call(null,map__20105__$1,new cljs.core.Keyword(null,"v","v",21465059));
if(((((0) <= y)) && ((y <= h))) && ((((0) <= x)) && ((x <= w)))){
return cljs.core.get.call(null,v,(x + (y * w)));
} else {
return (0);
}
});
geom.grayscott.core.get_f = (function geom$grayscott$core$get_f(gs,x,y){
return new cljs.core.Keyword(null,"get-f","get-f",-320245497).cljs$core$IFn$_invoke$arity$1(gs).call(null,gs,x,y);
});
geom.grayscott.core.get_k = (function geom$grayscott$core$get_k(gs,x,y){
return new cljs.core.Keyword(null,"get-k","get-k",872167077).cljs$core$IFn$_invoke$arity$1(gs).call(null,gs,x,y);
});
geom.grayscott.core.set_coefs = (function geom$grayscott$core$set_coefs(gs,f,k,du,dv){
return cljs.core.assoc.call(null,gs,new cljs.core.Keyword(null,"f","f",-1597136552),f,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"du","du",1000321745),du,new cljs.core.Keyword(null,"dv","dv",781315158),dv);
});
geom.grayscott.core.grayscott_defaults = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"f","f",-1597136552),0.023,new cljs.core.Keyword(null,"k","k",-2146297393),0.077,new cljs.core.Keyword(null,"du","du",1000321745),0.095,new cljs.core.Keyword(null,"dv","dv",781315158),0.03,new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277),false,new cljs.core.Keyword(null,"get-f","get-f",-320245497),(function (this$,_,___$1){
return new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(this$);
}),new cljs.core.Keyword(null,"get-k","get-k",872167077),(function (this$,_,___$1){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(this$);
})], null);
geom.grayscott.core.grayscott = (function geom$grayscott$core$grayscott(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20112 = arguments.length;
var i__19334__auto___20113 = (0);
while(true){
if((i__19334__auto___20113 < len__19333__auto___20112)){
args__19340__auto__.push((arguments[i__19334__auto___20113]));

var G__20114 = (i__19334__auto___20113 + (1));
i__19334__auto___20113 = G__20114;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return geom.grayscott.core.grayscott.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

geom.grayscott.core.grayscott.cljs$core$IFn$_invoke$arity$variadic = (function (w,h,p__20110){
var vec__20111 = p__20110;
var opts = cljs.core.nth.call(null,vec__20111,(0),null);
var cnt = (w * h);
var v = cljs.core.vec.call(null,cljs.core.repeat.call(null,cnt,1.0));
var u = cljs.core.vec.call(null,cljs.core.repeat.call(null,cnt,0.0));
return cljs.core.merge.call(null,geom.grayscott.core.grayscott_defaults,opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),h,new cljs.core.Keyword(null,"u","u",-1156634785),u,new cljs.core.Keyword(null,"v","v",21465059),v], null));
});

geom.grayscott.core.grayscott.cljs$lang$maxFixedArity = (2);

geom.grayscott.core.grayscott.cljs$lang$applyTo = (function (seq20107){
var G__20108 = cljs.core.first.call(null,seq20107);
var seq20107__$1 = cljs.core.next.call(null,seq20107);
var G__20109 = cljs.core.first.call(null,seq20107__$1);
var seq20107__$2 = cljs.core.next.call(null,seq20107__$1);
return geom.grayscott.core.grayscott.cljs$core$IFn$_invoke$arity$variadic(G__20108,G__20109,seq20107__$2);
});
geom.grayscott.core.upd = (function geom$grayscott$core$upd(p__20115,t){
var map__20133 = p__20115;
var map__20133__$1 = ((((!((map__20133 == null)))?((((map__20133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20133):map__20133);
var gs = map__20133__$1;
var w = cljs.core.get.call(null,map__20133__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__20133__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var u = cljs.core.get.call(null,map__20133__$1,new cljs.core.Keyword(null,"u","u",-1156634785));
var v = cljs.core.get.call(null,map__20133__$1,new cljs.core.Keyword(null,"v","v",21465059));
var du = cljs.core.get.call(null,map__20133__$1,new cljs.core.Keyword(null,"du","du",1000321745));
var dv = cljs.core.get.call(null,map__20133__$1,new cljs.core.Keyword(null,"dv","dv",781315158));
var f = cljs.core.get.call(null,map__20133__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var k = cljs.core.get.call(null,map__20133__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var is_tilling = cljs.core.get.call(null,map__20133__$1,new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277));
var t__$1 = geom.grayscott.core.clip.call(null,(0),(1),t);
var w1 = (w - (1));
var h1 = (h - (1));
var temp = cljs.core.reduce.call(null,((function (t__$1,w1,h1,map__20133,map__20133__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function (p__20136,p__20137){
var vec__20138 = p__20136;
var tu = cljs.core.nth.call(null,vec__20138,(0),null);
var tv = cljs.core.nth.call(null,vec__20138,(1),null);
var vec__20139 = p__20137;
var x = cljs.core.nth.call(null,vec__20139,(0),null);
var y = cljs.core.nth.call(null,vec__20139,(1),null);
var idx = (x + (y * w));
var top = (idx - w);
var bottom = (idx + w);
var left = (idx - (1));
var right = (idx + (1));
var f__$1 = geom.grayscott.core.get_f.call(null,gs,x,y);
var k__$1 = geom.grayscott.core.get_k.call(null,gs,x,y);
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
});})(t__$1,w1,h1,map__20133,map__20133__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,u),cljs.core.transient$.call(null,v)], null),(function (){var iter__19047__auto__ = ((function (t__$1,w1,h1,map__20133,map__20133__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function geom$grayscott$core$upd_$_iter__20140(s__20141){
return (new cljs.core.LazySeq(null,((function (t__$1,w1,h1,map__20133,map__20133__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function (){
var s__20141__$1 = s__20141;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20141__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19043__auto__ = ((function (s__20141__$1,x,xs__5205__auto__,temp__4657__auto__,t__$1,w1,h1,map__20133,map__20133__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function geom$grayscott$core$upd_$_iter__20140_$_iter__20142(s__20143){
return (new cljs.core.LazySeq(null,((function (s__20141__$1,x,xs__5205__auto__,temp__4657__auto__,t__$1,w1,h1,map__20133,map__20133__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function (){
var s__20143__$1 = s__20143;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__20143__$1);
if(temp__4657__auto____$1){
var s__20143__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20143__$2)){
var c__19045__auto__ = cljs.core.chunk_first.call(null,s__20143__$2);
var size__19046__auto__ = cljs.core.count.call(null,c__19045__auto__);
var b__20145 = cljs.core.chunk_buffer.call(null,size__19046__auto__);
if((function (){var i__20144 = (0);
while(true){
if((i__20144 < size__19046__auto__)){
var y = cljs.core._nth.call(null,c__19045__auto__,i__20144);
cljs.core.chunk_append.call(null,b__20145,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__20150 = (i__20144 + (1));
i__20144 = G__20150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20145),geom$grayscott$core$upd_$_iter__20140_$_iter__20142.call(null,cljs.core.chunk_rest.call(null,s__20143__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20145),null);
}
} else {
var y = cljs.core.first.call(null,s__20143__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),geom$grayscott$core$upd_$_iter__20140_$_iter__20142.call(null,cljs.core.rest.call(null,s__20143__$2)));
}
} else {
return null;
}
break;
}
});})(s__20141__$1,x,xs__5205__auto__,temp__4657__auto__,t__$1,w1,h1,map__20133,map__20133__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
,null,null));
});})(s__20141__$1,x,xs__5205__auto__,temp__4657__auto__,t__$1,w1,h1,map__20133,map__20133__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
;
var fs__19044__auto__ = cljs.core.seq.call(null,iterys__19043__auto__.call(null,cljs.core.range.call(null,(1),h1)));
if(fs__19044__auto__){
return cljs.core.concat.call(null,fs__19044__auto__,geom$grayscott$core$upd_$_iter__20140.call(null,cljs.core.rest.call(null,s__20141__$1)));
} else {
var G__20151 = cljs.core.rest.call(null,s__20141__$1);
s__20141__$1 = G__20151;
continue;
}
} else {
return null;
}
break;
}
});})(t__$1,w1,h1,map__20133,map__20133__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
,null,null));
});})(t__$1,w1,h1,map__20133,map__20133__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
;
return iter__19047__auto__.call(null,cljs.core.range.call(null,(1),w1));
})());
var vec__20135 = ((cljs.core.not.call(null,is_tilling))?temp:(function (){var w2 = (w1 - (1));
var idxH1 = (h1 * w);
var idxH2 = ((h1 - (1)) * w);
var temp__$1 = cljs.core.reduce.call(null,((function (w2,idxH1,idxH2,t__$1,w1,h1,temp,map__20133,map__20133__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function (p__20146,x){
var vec__20147 = p__20146;
var tu = cljs.core.nth.call(null,vec__20147,(0),null);
var tv = cljs.core.nth.call(null,vec__20147,(1),null);
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
});})(w2,idxH1,idxH2,t__$1,w1,h1,temp,map__20133,map__20133__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
,temp,cljs.core.range.call(null,(0),w));
return cljs.core.reduce.call(null,((function (w2,idxH1,idxH2,temp__$1,t__$1,w1,h1,temp,map__20133,map__20133__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function (p__20148,y){
var vec__20149 = p__20148;
var tu = cljs.core.nth.call(null,vec__20149,(0),null);
var tv = cljs.core.nth.call(null,vec__20149,(1),null);
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
});})(w2,idxH1,idxH2,temp__$1,t__$1,w1,h1,temp,map__20133,map__20133__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
,temp__$1,cljs.core.range.call(null,(0),h));
})());
var tu = cljs.core.nth.call(null,vec__20135,(0),null);
var tv = cljs.core.nth.call(null,vec__20135,(1),null);
return cljs.core.assoc.call(null,gs,new cljs.core.Keyword(null,"u","u",-1156634785),cljs.core.persistent_BANG_.call(null,tu),new cljs.core.Keyword(null,"v","v",21465059),cljs.core.persistent_BANG_.call(null,tv));
});
var start__19203__auto___20152 = cljs.core.system_time.call(null);
var ret__19204__auto___20153 = (function (){
geom.grayscott.core.upd.call(null,geom.grayscott.core.grayscott.call(null,(200),(200)),(1));

return null;
})()
;
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__19203__auto___20152).toFixed((6))),cljs.core.str(" msecs")].join(''));


//# sourceMappingURL=core.js.map