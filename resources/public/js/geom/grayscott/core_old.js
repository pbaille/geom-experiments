// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.grayscott.core_old');
goog.require('cljs.core');
geom.grayscott.core_old.clip = (function geom$grayscott$core_old$clip(min,max,n){
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
geom.grayscott.core_old.get_u = (function geom$grayscott$core_old$get_u(p__20484,x,y){
var map__20487 = p__20484;
var map__20487__$1 = ((((!((map__20487 == null)))?((((map__20487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20487):map__20487);
var w = cljs.core.get.call(null,map__20487__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__20487__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var u = cljs.core.get.call(null,map__20487__$1,new cljs.core.Keyword(null,"u","u",-1156634785));
if(((((0) <= y)) && ((y <= h))) && ((((0) <= x)) && ((x <= w)))){
return cljs.core.get.call(null,u,(x + (y * w)));
} else {
return (0);
}
});
geom.grayscott.core_old.get_v = (function geom$grayscott$core_old$get_v(p__20489,x,y){
var map__20492 = p__20489;
var map__20492__$1 = ((((!((map__20492 == null)))?((((map__20492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20492):map__20492);
var w = cljs.core.get.call(null,map__20492__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__20492__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var v = cljs.core.get.call(null,map__20492__$1,new cljs.core.Keyword(null,"v","v",21465059));
if(((((0) <= y)) && ((y <= h))) && ((((0) <= x)) && ((x <= w)))){
return cljs.core.get.call(null,v,(x + (y * w)));
} else {
return (0);
}
});
geom.grayscott.core_old.set_coefs = (function geom$grayscott$core_old$set_coefs(gs,f,k,du,dv){
return cljs.core.assoc.call(null,gs,new cljs.core.Keyword(null,"f","f",-1597136552),f,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"du","du",1000321745),du,new cljs.core.Keyword(null,"dv","dv",781315158),dv);
});
geom.grayscott.core_old.default_coefs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"f","f",-1597136552),0.023,new cljs.core.Keyword(null,"k","k",-2146297393),0.077,new cljs.core.Keyword(null,"du","du",1000321745),0.095,new cljs.core.Keyword(null,"dv","dv",781315158),0.03], null);

/**
 * @interface
 */
geom.grayscott.core_old.IGrayscott = function(){};

/**
 * get f coef at given coordinates
 */
geom.grayscott.core_old.get_f = (function geom$grayscott$core_old$get_f(_,x,y){
if((!((_ == null))) && (!((_.geom$grayscott$core_old$IGrayscott$get_f$arity$3 == null)))){
return _.geom$grayscott$core_old$IGrayscott$get_f$arity$3(_,x,y);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (geom.grayscott.core_old.get_f[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,x,y);
} else {
var m__18931__auto____$1 = (geom.grayscott.core_old.get_f["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,x,y);
} else {
throw cljs.core.missing_protocol.call(null,"IGrayscott.get-f",_);
}
}
}
});

/**
 * get k coef at given coordinates
 */
geom.grayscott.core_old.get_k = (function geom$grayscott$core_old$get_k(_,x,y){
if((!((_ == null))) && (!((_.geom$grayscott$core_old$IGrayscott$get_k$arity$3 == null)))){
return _.geom$grayscott$core_old$IGrayscott$get_k$arity$3(_,x,y);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (geom.grayscott.core_old.get_k[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,x,y);
} else {
var m__18931__auto____$1 = (geom.grayscott.core_old.get_k["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,x,y);
} else {
throw cljs.core.missing_protocol.call(null,"IGrayscott.get-k",_);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {geom.grayscott.core_old.IGrayscott}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
geom.grayscott.core_old.Grayscott = (function (w,h,u,v,f,k,du,dv,is_tilling,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.u = u;
this.v = v;
this.f = f;
this.k = k;
this.du = du;
this.dv = dv;
this.is_tilling = is_tilling;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
geom.grayscott.core_old.Grayscott.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

geom.grayscott.core_old.Grayscott.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k20495,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__20497 = (((k20495 instanceof cljs.core.Keyword))?k20495.fqn:null);
switch (G__20497) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
case "u":
return self__.u;

break;
case "v":
return self__.v;

break;
case "f":
return self__.f;

break;
case "k":
return self__.k;

break;
case "du":
return self__.du;

break;
case "dv":
return self__.dv;

break;
case "is-tilling":
return self__.is_tilling;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20495,else__18892__auto__);

}
});

geom.grayscott.core_old.Grayscott.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#geom.grayscott.core-old.Grayscott{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"u","u",-1156634785),self__.u],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"du","du",1000321745),self__.du],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dv","dv",781315158),self__.dv],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277),self__.is_tilling],null))], null),self__.__extmap));
});

geom.grayscott.core_old.Grayscott.prototype.cljs$core$IIterable$ = true;

geom.grayscott.core_old.Grayscott.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20494){
var self__ = this;
var G__20494__$1 = this;
return (new cljs.core.RecordIter((0),G__20494__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"u","u",-1156634785),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"du","du",1000321745),new cljs.core.Keyword(null,"dv","dv",781315158),new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

geom.grayscott.core_old.Grayscott.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

geom.grayscott.core_old.Grayscott.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new geom.grayscott.core_old.Grayscott(self__.w,self__.h,self__.u,self__.v,self__.f,self__.k,self__.du,self__.dv,self__.is_tilling,self__.__meta,self__.__extmap,self__.__hash));
});

geom.grayscott.core_old.Grayscott.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

geom.grayscott.core_old.Grayscott.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

geom.grayscott.core_old.Grayscott.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

geom.grayscott.core_old.Grayscott.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"v","v",21465059),null,new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"k","k",-2146297393),null,new cljs.core.Keyword(null,"du","du",1000321745),null,new cljs.core.Keyword(null,"h","h",1109658740),null,new cljs.core.Keyword(null,"dv","dv",781315158),null,new cljs.core.Keyword(null,"f","f",-1597136552),null,new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277),null,new cljs.core.Keyword(null,"u","u",-1156634785),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new geom.grayscott.core_old.Grayscott(self__.w,self__.h,self__.u,self__.v,self__.f,self__.k,self__.du,self__.dv,self__.is_tilling,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

geom.grayscott.core_old.Grayscott.prototype.geom$grayscott$core_old$IGrayscott$ = true;

geom.grayscott.core_old.Grayscott.prototype.geom$grayscott$core_old$IGrayscott$get_f$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.f;
});

geom.grayscott.core_old.Grayscott.prototype.geom$grayscott$core_old$IGrayscott$get_k$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.k;
});

geom.grayscott.core_old.Grayscott.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__20494){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__20498 = cljs.core.keyword_identical_QMARK_;
var expr__20499 = k__18897__auto__;
if(cljs.core.truth_(pred__20498.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20499))){
return (new geom.grayscott.core_old.Grayscott(G__20494,self__.h,self__.u,self__.v,self__.f,self__.k,self__.du,self__.dv,self__.is_tilling,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20498.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20499))){
return (new geom.grayscott.core_old.Grayscott(self__.w,G__20494,self__.u,self__.v,self__.f,self__.k,self__.du,self__.dv,self__.is_tilling,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20498.call(null,new cljs.core.Keyword(null,"u","u",-1156634785),expr__20499))){
return (new geom.grayscott.core_old.Grayscott(self__.w,self__.h,G__20494,self__.v,self__.f,self__.k,self__.du,self__.dv,self__.is_tilling,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20498.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__20499))){
return (new geom.grayscott.core_old.Grayscott(self__.w,self__.h,self__.u,G__20494,self__.f,self__.k,self__.du,self__.dv,self__.is_tilling,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20498.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__20499))){
return (new geom.grayscott.core_old.Grayscott(self__.w,self__.h,self__.u,self__.v,G__20494,self__.k,self__.du,self__.dv,self__.is_tilling,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20498.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__20499))){
return (new geom.grayscott.core_old.Grayscott(self__.w,self__.h,self__.u,self__.v,self__.f,G__20494,self__.du,self__.dv,self__.is_tilling,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20498.call(null,new cljs.core.Keyword(null,"du","du",1000321745),expr__20499))){
return (new geom.grayscott.core_old.Grayscott(self__.w,self__.h,self__.u,self__.v,self__.f,self__.k,G__20494,self__.dv,self__.is_tilling,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20498.call(null,new cljs.core.Keyword(null,"dv","dv",781315158),expr__20499))){
return (new geom.grayscott.core_old.Grayscott(self__.w,self__.h,self__.u,self__.v,self__.f,self__.k,self__.du,G__20494,self__.is_tilling,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20498.call(null,new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277),expr__20499))){
return (new geom.grayscott.core_old.Grayscott(self__.w,self__.h,self__.u,self__.v,self__.f,self__.k,self__.du,self__.dv,G__20494,self__.__meta,self__.__extmap,null));
} else {
return (new geom.grayscott.core_old.Grayscott(self__.w,self__.h,self__.u,self__.v,self__.f,self__.k,self__.du,self__.dv,self__.is_tilling,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__20494),null));
}
}
}
}
}
}
}
}
}
});

geom.grayscott.core_old.Grayscott.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"u","u",-1156634785),self__.u],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"du","du",1000321745),self__.du],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dv","dv",781315158),self__.dv],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277),self__.is_tilling],null))], null),self__.__extmap));
});

geom.grayscott.core_old.Grayscott.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__20494){
var self__ = this;
var this__18888__auto____$1 = this;
return (new geom.grayscott.core_old.Grayscott(self__.w,self__.h,self__.u,self__.v,self__.f,self__.k,self__.du,self__.dv,self__.is_tilling,G__20494,self__.__extmap,self__.__hash));
});

geom.grayscott.core_old.Grayscott.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

geom.grayscott.core_old.Grayscott.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.Symbol(null,"u","u",483896742,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"du","du",-1654114024,null),new cljs.core.Symbol(null,"dv","dv",-1873120611,null),new cljs.core.Symbol(null,"is-tilling","is-tilling",-1917946492,null)], null);
});

geom.grayscott.core_old.Grayscott.cljs$lang$type = true;

geom.grayscott.core_old.Grayscott.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"geom.grayscott.core-old/Grayscott");
});

geom.grayscott.core_old.Grayscott.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"geom.grayscott.core-old/Grayscott");
});

geom.grayscott.core_old.__GT_Grayscott = (function geom$grayscott$core_old$__GT_Grayscott(w,h,u,v,f,k,du,dv,is_tilling){
return (new geom.grayscott.core_old.Grayscott(w,h,u,v,f,k,du,dv,is_tilling,null,null,null));
});

geom.grayscott.core_old.map__GT_Grayscott = (function geom$grayscott$core_old$map__GT_Grayscott(G__20496){
return (new geom.grayscott.core_old.Grayscott(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20496),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20496),new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(G__20496),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__20496),new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__20496),new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__20496),new cljs.core.Keyword(null,"du","du",1000321745).cljs$core$IFn$_invoke$arity$1(G__20496),new cljs.core.Keyword(null,"dv","dv",781315158).cljs$core$IFn$_invoke$arity$1(G__20496),new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277).cljs$core$IFn$_invoke$arity$1(G__20496),null,cljs.core.dissoc.call(null,G__20496,new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"u","u",-1156634785),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"du","du",1000321745),new cljs.core.Keyword(null,"dv","dv",781315158),new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277)),null));
});

geom.grayscott.core_old.grayscott = (function geom$grayscott$core_old$grayscott(w,h,wrap){
var cnt = (w * h);
var v = cljs.core.vec.call(null,cljs.core.repeat.call(null,cnt,1.0));
var u = cljs.core.vec.call(null,cljs.core.repeat.call(null,cnt,0.0));
return geom.grayscott.core_old.map__GT_Grayscott.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),h,new cljs.core.Keyword(null,"u","u",-1156634785),u,new cljs.core.Keyword(null,"v","v",21465059),v,new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277),wrap], null),geom.grayscott.core_old.default_coefs));
});
geom.grayscott.core_old.upd = (function geom$grayscott$core_old$upd(p__20502,t){
var map__20525 = p__20502;
var map__20525__$1 = ((((!((map__20525 == null)))?((((map__20525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20525):map__20525);
var gs = map__20525__$1;
var w = cljs.core.get.call(null,map__20525__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__20525__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var u = cljs.core.get.call(null,map__20525__$1,new cljs.core.Keyword(null,"u","u",-1156634785));
var v = cljs.core.get.call(null,map__20525__$1,new cljs.core.Keyword(null,"v","v",21465059));
var du = cljs.core.get.call(null,map__20525__$1,new cljs.core.Keyword(null,"du","du",1000321745));
var dv = cljs.core.get.call(null,map__20525__$1,new cljs.core.Keyword(null,"dv","dv",781315158));
var f = cljs.core.get.call(null,map__20525__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var k = cljs.core.get.call(null,map__20525__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var is_tilling = cljs.core.get.call(null,map__20525__$1,new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277));
var t__$1 = geom.grayscott.core_old.clip.call(null,(0),(1),t);
var tu = cljs.core.transient$.call(null,u);
var tv = cljs.core.transient$.call(null,v);
var w1 = (w - (1));
var h1 = (h - (1));
var seq__20527_20547 = cljs.core.seq.call(null,cljs.core.range.call(null,(1),w1));
var chunk__20532_20548 = null;
var count__20533_20549 = (0);
var i__20534_20550 = (0);
while(true){
if((i__20534_20550 < count__20533_20549)){
var x_20551 = cljs.core._nth.call(null,chunk__20532_20548,i__20534_20550);
var seq__20535_20552 = cljs.core.seq.call(null,cljs.core.range.call(null,(1),h1));
var chunk__20536_20553 = null;
var count__20537_20554 = (0);
var i__20538_20555 = (0);
while(true){
if((i__20538_20555 < count__20537_20554)){
var y_20556 = cljs.core._nth.call(null,chunk__20536_20553,i__20538_20555);
var idx_20557 = (x_20551 + (y_20556 * w));
var top_20558 = (idx_20557 - w);
var bottom_20559 = (idx_20557 + w);
var left_20560 = (idx_20557 - (1));
var right_20561 = (idx_20557 + (1));
var f_20562__$1 = geom.grayscott.core_old.get_f.call(null,gs,x_20551,y_20556);
var k_20563__$1 = geom.grayscott.core_old.get_k.call(null,gs,x_20551,y_20556);
var cu_20564 = cljs.core.get.call(null,u,idx_20557);
var cv_20565 = cljs.core.get.call(null,v,idx_20557);
var d2_20566 = ((cu_20564 * cv_20565) * cv_20565);
cljs.core.assoc_BANG_.call(null,tu,idx_20557,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cu_20564 + (t__$1 * (((du * ((((cljs.core.get.call(null,u,right_20561) + cljs.core.get.call(null,u,left_20560)) + cljs.core.get.call(null,u,bottom_20559)) + cljs.core.get.call(null,u,top_20558)) - ((4) * cu_20564))) - d2_20566) + (f_20562__$1 * (1.0 - cu_20564)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

cljs.core.assoc_BANG_.call(null,tv,idx_20557,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cv_20565 + (t__$1 * (((dv * ((((cljs.core.get.call(null,v,right_20561) + cljs.core.get.call(null,v,left_20560)) + cljs.core.get.call(null,v,bottom_20559)) + cljs.core.get.call(null,v,top_20558)) - ((4) * cv_20565))) + d2_20566) - (k_20563__$1 * cv_20565))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

var G__20567 = seq__20535_20552;
var G__20568 = chunk__20536_20553;
var G__20569 = count__20537_20554;
var G__20570 = (i__20538_20555 + (1));
seq__20535_20552 = G__20567;
chunk__20536_20553 = G__20568;
count__20537_20554 = G__20569;
i__20538_20555 = G__20570;
continue;
} else {
var temp__4657__auto___20571 = cljs.core.seq.call(null,seq__20535_20552);
if(temp__4657__auto___20571){
var seq__20535_20572__$1 = temp__4657__auto___20571;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20535_20572__$1)){
var c__19078__auto___20573 = cljs.core.chunk_first.call(null,seq__20535_20572__$1);
var G__20574 = cljs.core.chunk_rest.call(null,seq__20535_20572__$1);
var G__20575 = c__19078__auto___20573;
var G__20576 = cljs.core.count.call(null,c__19078__auto___20573);
var G__20577 = (0);
seq__20535_20552 = G__20574;
chunk__20536_20553 = G__20575;
count__20537_20554 = G__20576;
i__20538_20555 = G__20577;
continue;
} else {
var y_20578 = cljs.core.first.call(null,seq__20535_20572__$1);
var idx_20579 = (x_20551 + (y_20578 * w));
var top_20580 = (idx_20579 - w);
var bottom_20581 = (idx_20579 + w);
var left_20582 = (idx_20579 - (1));
var right_20583 = (idx_20579 + (1));
var f_20584__$1 = geom.grayscott.core_old.get_f.call(null,gs,x_20551,y_20578);
var k_20585__$1 = geom.grayscott.core_old.get_k.call(null,gs,x_20551,y_20578);
var cu_20586 = cljs.core.get.call(null,u,idx_20579);
var cv_20587 = cljs.core.get.call(null,v,idx_20579);
var d2_20588 = ((cu_20586 * cv_20587) * cv_20587);
cljs.core.assoc_BANG_.call(null,tu,idx_20579,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cu_20586 + (t__$1 * (((du * ((((cljs.core.get.call(null,u,right_20583) + cljs.core.get.call(null,u,left_20582)) + cljs.core.get.call(null,u,bottom_20581)) + cljs.core.get.call(null,u,top_20580)) - ((4) * cu_20586))) - d2_20588) + (f_20584__$1 * (1.0 - cu_20586)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

cljs.core.assoc_BANG_.call(null,tv,idx_20579,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cv_20587 + (t__$1 * (((dv * ((((cljs.core.get.call(null,v,right_20583) + cljs.core.get.call(null,v,left_20582)) + cljs.core.get.call(null,v,bottom_20581)) + cljs.core.get.call(null,v,top_20580)) - ((4) * cv_20587))) + d2_20588) - (k_20585__$1 * cv_20587))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

var G__20589 = cljs.core.next.call(null,seq__20535_20572__$1);
var G__20590 = null;
var G__20591 = (0);
var G__20592 = (0);
seq__20535_20552 = G__20589;
chunk__20536_20553 = G__20590;
count__20537_20554 = G__20591;
i__20538_20555 = G__20592;
continue;
}
} else {
}
}
break;
}

var G__20593 = seq__20527_20547;
var G__20594 = chunk__20532_20548;
var G__20595 = count__20533_20549;
var G__20596 = (i__20534_20550 + (1));
seq__20527_20547 = G__20593;
chunk__20532_20548 = G__20594;
count__20533_20549 = G__20595;
i__20534_20550 = G__20596;
continue;
} else {
var temp__4657__auto___20597 = cljs.core.seq.call(null,seq__20527_20547);
if(temp__4657__auto___20597){
var seq__20527_20598__$1 = temp__4657__auto___20597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20527_20598__$1)){
var c__19078__auto___20599 = cljs.core.chunk_first.call(null,seq__20527_20598__$1);
var G__20600 = cljs.core.chunk_rest.call(null,seq__20527_20598__$1);
var G__20601 = c__19078__auto___20599;
var G__20602 = cljs.core.count.call(null,c__19078__auto___20599);
var G__20603 = (0);
seq__20527_20547 = G__20600;
chunk__20532_20548 = G__20601;
count__20533_20549 = G__20602;
i__20534_20550 = G__20603;
continue;
} else {
var x_20604 = cljs.core.first.call(null,seq__20527_20598__$1);
var seq__20528_20605 = cljs.core.seq.call(null,cljs.core.range.call(null,(1),h1));
var chunk__20529_20606 = null;
var count__20530_20607 = (0);
var i__20531_20608 = (0);
while(true){
if((i__20531_20608 < count__20530_20607)){
var y_20609 = cljs.core._nth.call(null,chunk__20529_20606,i__20531_20608);
var idx_20610 = (x_20604 + (y_20609 * w));
var top_20611 = (idx_20610 - w);
var bottom_20612 = (idx_20610 + w);
var left_20613 = (idx_20610 - (1));
var right_20614 = (idx_20610 + (1));
var f_20615__$1 = geom.grayscott.core_old.get_f.call(null,gs,x_20604,y_20609);
var k_20616__$1 = geom.grayscott.core_old.get_k.call(null,gs,x_20604,y_20609);
var cu_20617 = cljs.core.get.call(null,u,idx_20610);
var cv_20618 = cljs.core.get.call(null,v,idx_20610);
var d2_20619 = ((cu_20617 * cv_20618) * cv_20618);
cljs.core.assoc_BANG_.call(null,tu,idx_20610,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cu_20617 + (t__$1 * (((du * ((((cljs.core.get.call(null,u,right_20614) + cljs.core.get.call(null,u,left_20613)) + cljs.core.get.call(null,u,bottom_20612)) + cljs.core.get.call(null,u,top_20611)) - ((4) * cu_20617))) - d2_20619) + (f_20615__$1 * (1.0 - cu_20617)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

cljs.core.assoc_BANG_.call(null,tv,idx_20610,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cv_20618 + (t__$1 * (((dv * ((((cljs.core.get.call(null,v,right_20614) + cljs.core.get.call(null,v,left_20613)) + cljs.core.get.call(null,v,bottom_20612)) + cljs.core.get.call(null,v,top_20611)) - ((4) * cv_20618))) + d2_20619) - (k_20616__$1 * cv_20618))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

var G__20620 = seq__20528_20605;
var G__20621 = chunk__20529_20606;
var G__20622 = count__20530_20607;
var G__20623 = (i__20531_20608 + (1));
seq__20528_20605 = G__20620;
chunk__20529_20606 = G__20621;
count__20530_20607 = G__20622;
i__20531_20608 = G__20623;
continue;
} else {
var temp__4657__auto___20624__$1 = cljs.core.seq.call(null,seq__20528_20605);
if(temp__4657__auto___20624__$1){
var seq__20528_20625__$1 = temp__4657__auto___20624__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20528_20625__$1)){
var c__19078__auto___20626 = cljs.core.chunk_first.call(null,seq__20528_20625__$1);
var G__20627 = cljs.core.chunk_rest.call(null,seq__20528_20625__$1);
var G__20628 = c__19078__auto___20626;
var G__20629 = cljs.core.count.call(null,c__19078__auto___20626);
var G__20630 = (0);
seq__20528_20605 = G__20627;
chunk__20529_20606 = G__20628;
count__20530_20607 = G__20629;
i__20531_20608 = G__20630;
continue;
} else {
var y_20631 = cljs.core.first.call(null,seq__20528_20625__$1);
var idx_20632 = (x_20604 + (y_20631 * w));
var top_20633 = (idx_20632 - w);
var bottom_20634 = (idx_20632 + w);
var left_20635 = (idx_20632 - (1));
var right_20636 = (idx_20632 + (1));
var f_20637__$1 = geom.grayscott.core_old.get_f.call(null,gs,x_20604,y_20631);
var k_20638__$1 = geom.grayscott.core_old.get_k.call(null,gs,x_20604,y_20631);
var cu_20639 = cljs.core.get.call(null,u,idx_20632);
var cv_20640 = cljs.core.get.call(null,v,idx_20632);
var d2_20641 = ((cu_20639 * cv_20640) * cv_20640);
cljs.core.assoc_BANG_.call(null,tu,idx_20632,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cu_20639 + (t__$1 * (((du * ((((cljs.core.get.call(null,u,right_20636) + cljs.core.get.call(null,u,left_20635)) + cljs.core.get.call(null,u,bottom_20634)) + cljs.core.get.call(null,u,top_20633)) - ((4) * cu_20639))) - d2_20641) + (f_20637__$1 * (1.0 - cu_20639)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

cljs.core.assoc_BANG_.call(null,tv,idx_20632,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cv_20640 + (t__$1 * (((dv * ((((cljs.core.get.call(null,v,right_20636) + cljs.core.get.call(null,v,left_20635)) + cljs.core.get.call(null,v,bottom_20634)) + cljs.core.get.call(null,v,top_20633)) - ((4) * cv_20640))) + d2_20641) - (k_20638__$1 * cv_20640))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

var G__20642 = cljs.core.next.call(null,seq__20528_20625__$1);
var G__20643 = null;
var G__20644 = (0);
var G__20645 = (0);
seq__20528_20605 = G__20642;
chunk__20529_20606 = G__20643;
count__20530_20607 = G__20644;
i__20531_20608 = G__20645;
continue;
}
} else {
}
}
break;
}

var G__20646 = cljs.core.next.call(null,seq__20527_20598__$1);
var G__20647 = null;
var G__20648 = (0);
var G__20649 = (0);
seq__20527_20547 = G__20646;
chunk__20532_20548 = G__20647;
count__20533_20549 = G__20648;
i__20534_20550 = G__20649;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_tilling)){
var w2_20650 = (w1 - (1));
var idxH1_20651 = (h1 * w);
var idxH2_20652 = ((h1 - (1)) * w);
var seq__20539_20653 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),w));
var chunk__20540_20654 = null;
var count__20541_20655 = (0);
var i__20542_20656 = (0);
while(true){
if((i__20542_20656 < count__20541_20655)){
var x_20657 = cljs.core._nth.call(null,chunk__20540_20654,i__20542_20656);
var left_20658 = (((x_20657 === (0)))?w1:(x_20657 - (1)));
var right_20659 = ((cljs.core._EQ_.call(null,w1,x_20657))?(0):(x_20657 + (1)));
var idx_20660 = (idxH1_20651 + x_20657);
var cu_20661 = cljs.core.get.call(null,u,x_20657);
var cv_20662 = cljs.core.get.call(null,v,x_20657);
var cui_20663 = cljs.core.get.call(null,u,idx_20660);
var cvi_20664 = cljs.core.get.call(null,v,idx_20660);
var d1_20665 = ((cu_20661 * cv_20662) * cv_20662);
var d2_20666 = ((cui_20663 * cvi_20664) * cvi_20664);
cljs.core.assoc_BANG_.call(null,tu,x_20657,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cu_20661 + (t__$1 * (((du * ((((cljs.core.get.call(null,u,right_20659) + cljs.core.get.call(null,u,left_20658)) + cljs.core.get.call(null,u,(w + x_20657))) + cui_20663) - ((4) * cu_20661))) - d1_20665) + (f * (1.0 - cu_20661)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

cljs.core.assoc_BANG_.call(null,tv,x_20657,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cv_20662 + (t__$1 * (((dv * ((((cljs.core.get.call(null,v,right_20659) + cljs.core.get.call(null,v,left_20658)) + cljs.core.get.call(null,v,(w + x_20657))) + cvi_20664) - ((4) * cv_20662))) + d1_20665) - (k * cv_20662))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

cljs.core.assoc_BANG_.call(null,tu,idx_20660,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cui_20663 + (t__$1 * (((du * ((((cljs.core.get.call(null,u,(idxH1_20651 + right_20659)) + cljs.core.get.call(null,u,(idxH1_20651 + left_20658))) + cu_20661) + cljs.core.get.call(null,u,(idxH2_20652 + x_20657))) - ((4) * cui_20663))) - d2_20666) + (f * (1.0 - cui_20663)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

cljs.core.assoc_BANG_.call(null,tv,idx_20660,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cvi_20664 + (t__$1 * (((dv * ((((cljs.core.get.call(null,v,(idxH1_20651 + right_20659)) + cljs.core.get.call(null,v,(idxH1_20651 + left_20658))) + cv_20662) + cljs.core.get.call(null,v,(idxH2_20652 + x_20657))) - ((4) * cvi_20664))) + d2_20666) - (k * cvi_20664))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

var G__20667 = seq__20539_20653;
var G__20668 = chunk__20540_20654;
var G__20669 = count__20541_20655;
var G__20670 = (i__20542_20656 + (1));
seq__20539_20653 = G__20667;
chunk__20540_20654 = G__20668;
count__20541_20655 = G__20669;
i__20542_20656 = G__20670;
continue;
} else {
var temp__4657__auto___20671 = cljs.core.seq.call(null,seq__20539_20653);
if(temp__4657__auto___20671){
var seq__20539_20672__$1 = temp__4657__auto___20671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20539_20672__$1)){
var c__19078__auto___20673 = cljs.core.chunk_first.call(null,seq__20539_20672__$1);
var G__20674 = cljs.core.chunk_rest.call(null,seq__20539_20672__$1);
var G__20675 = c__19078__auto___20673;
var G__20676 = cljs.core.count.call(null,c__19078__auto___20673);
var G__20677 = (0);
seq__20539_20653 = G__20674;
chunk__20540_20654 = G__20675;
count__20541_20655 = G__20676;
i__20542_20656 = G__20677;
continue;
} else {
var x_20678 = cljs.core.first.call(null,seq__20539_20672__$1);
var left_20679 = (((x_20678 === (0)))?w1:(x_20678 - (1)));
var right_20680 = ((cljs.core._EQ_.call(null,w1,x_20678))?(0):(x_20678 + (1)));
var idx_20681 = (idxH1_20651 + x_20678);
var cu_20682 = cljs.core.get.call(null,u,x_20678);
var cv_20683 = cljs.core.get.call(null,v,x_20678);
var cui_20684 = cljs.core.get.call(null,u,idx_20681);
var cvi_20685 = cljs.core.get.call(null,v,idx_20681);
var d1_20686 = ((cu_20682 * cv_20683) * cv_20683);
var d2_20687 = ((cui_20684 * cvi_20685) * cvi_20685);
cljs.core.assoc_BANG_.call(null,tu,x_20678,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cu_20682 + (t__$1 * (((du * ((((cljs.core.get.call(null,u,right_20680) + cljs.core.get.call(null,u,left_20679)) + cljs.core.get.call(null,u,(w + x_20678))) + cui_20684) - ((4) * cu_20682))) - d1_20686) + (f * (1.0 - cu_20682)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

cljs.core.assoc_BANG_.call(null,tv,x_20678,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cv_20683 + (t__$1 * (((dv * ((((cljs.core.get.call(null,v,right_20680) + cljs.core.get.call(null,v,left_20679)) + cljs.core.get.call(null,v,(w + x_20678))) + cvi_20685) - ((4) * cv_20683))) + d1_20686) - (k * cv_20683))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

cljs.core.assoc_BANG_.call(null,tu,idx_20681,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cui_20684 + (t__$1 * (((du * ((((cljs.core.get.call(null,u,(idxH1_20651 + right_20680)) + cljs.core.get.call(null,u,(idxH1_20651 + left_20679))) + cu_20682) + cljs.core.get.call(null,u,(idxH2_20652 + x_20678))) - ((4) * cui_20684))) - d2_20687) + (f * (1.0 - cui_20684)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

cljs.core.assoc_BANG_.call(null,tv,idx_20681,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cvi_20685 + (t__$1 * (((dv * ((((cljs.core.get.call(null,v,(idxH1_20651 + right_20680)) + cljs.core.get.call(null,v,(idxH1_20651 + left_20679))) + cv_20683) + cljs.core.get.call(null,v,(idxH2_20652 + x_20678))) - ((4) * cvi_20685))) + d2_20687) - (k * cvi_20685))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

var G__20688 = cljs.core.next.call(null,seq__20539_20672__$1);
var G__20689 = null;
var G__20690 = (0);
var G__20691 = (0);
seq__20539_20653 = G__20688;
chunk__20540_20654 = G__20689;
count__20541_20655 = G__20690;
i__20542_20656 = G__20691;
continue;
}
} else {
}
}
break;
}

var seq__20543_20692 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),h));
var chunk__20544_20693 = null;
var count__20545_20694 = (0);
var i__20546_20695 = (0);
while(true){
if((i__20546_20695 < count__20545_20694)){
var y_20696 = cljs.core._nth.call(null,chunk__20544_20693,i__20546_20695);
var idx_20697 = (y_20696 * w);
var idxW1_20698 = (idx_20697 + w1);
var idxW2_20699 = (idx_20697 + w2_20650);
var cu_20700 = cljs.core.get.call(null,u,idx_20697);
var cv_20701 = cljs.core.get.call(null,v,idx_20697);
var cui_20702 = cljs.core.get.call(null,u,idxW1_20698);
var cvi_20703 = cljs.core.get.call(null,v,idxW1_20698);
var d1_20704 = ((cu_20700 * cv_20701) * cv_20701);
var d2_20705 = ((cui_20702 * cvi_20703) * cvi_20703);
var up_20706 = (w * (((y_20696 === (0)))?h1:(y_20696 - (1))));
var down_20707 = (w * ((cljs.core._EQ_.call(null,h1,y_20696))?(0):(y_20696 + (1))));
cljs.core.assoc_BANG_.call(null,tu,idx_20697,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cu_20700 + (t__$1 * (((du * ((((cljs.core.get.call(null,u,(idx_20697 + (1))) + cui_20702) + cljs.core.get.call(null,u,down_20707)) + cljs.core.get.call(null,u,up_20706)) - ((4) * cu_20700))) - d1_20704) + (f * (1.0 - cu_20700)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

cljs.core.assoc_BANG_.call(null,tv,idx_20697,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cv_20701 + (t__$1 * (((dv * ((((cljs.core.get.call(null,v,(idx_20697 + (1))) + cvi_20703) + cljs.core.get.call(null,v,down_20707)) + cljs.core.get.call(null,v,up_20706)) - ((4) * cv_20701))) + d1_20704) - (k * cv_20701))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

cljs.core.assoc_BANG_.call(null,tu,idxW1_20698,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cui_20702 + (t__$1 * (((du * (((((cu_20700 + cljs.core.get.call(null,u,idxW2_20699)) + cljs.core.get.call(null,u,(w1 + down_20707))) + cu_20700) + cljs.core.get.call(null,u,(up_20706 + w1))) - ((4) * cui_20702))) - d2_20705) + (f * (1.0 - cui_20702)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

cljs.core.assoc_BANG_.call(null,tv,idxW1_20698,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cvi_20703 + (t__$1 * (((dv * ((((cv_20701 + cljs.core.get.call(null,v,idxW2_20699)) + cljs.core.get.call(null,v,(down_20707 + w1))) + cljs.core.get.call(null,v,(up_20706 + w1))) - ((4) * cvi_20703))) + d2_20705) - (k * cvi_20703))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

var G__20708 = seq__20543_20692;
var G__20709 = chunk__20544_20693;
var G__20710 = count__20545_20694;
var G__20711 = (i__20546_20695 + (1));
seq__20543_20692 = G__20708;
chunk__20544_20693 = G__20709;
count__20545_20694 = G__20710;
i__20546_20695 = G__20711;
continue;
} else {
var temp__4657__auto___20712 = cljs.core.seq.call(null,seq__20543_20692);
if(temp__4657__auto___20712){
var seq__20543_20713__$1 = temp__4657__auto___20712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20543_20713__$1)){
var c__19078__auto___20714 = cljs.core.chunk_first.call(null,seq__20543_20713__$1);
var G__20715 = cljs.core.chunk_rest.call(null,seq__20543_20713__$1);
var G__20716 = c__19078__auto___20714;
var G__20717 = cljs.core.count.call(null,c__19078__auto___20714);
var G__20718 = (0);
seq__20543_20692 = G__20715;
chunk__20544_20693 = G__20716;
count__20545_20694 = G__20717;
i__20546_20695 = G__20718;
continue;
} else {
var y_20719 = cljs.core.first.call(null,seq__20543_20713__$1);
var idx_20720 = (y_20719 * w);
var idxW1_20721 = (idx_20720 + w1);
var idxW2_20722 = (idx_20720 + w2_20650);
var cu_20723 = cljs.core.get.call(null,u,idx_20720);
var cv_20724 = cljs.core.get.call(null,v,idx_20720);
var cui_20725 = cljs.core.get.call(null,u,idxW1_20721);
var cvi_20726 = cljs.core.get.call(null,v,idxW1_20721);
var d1_20727 = ((cu_20723 * cv_20724) * cv_20724);
var d2_20728 = ((cui_20725 * cvi_20726) * cvi_20726);
var up_20729 = (w * (((y_20719 === (0)))?h1:(y_20719 - (1))));
var down_20730 = (w * ((cljs.core._EQ_.call(null,h1,y_20719))?(0):(y_20719 + (1))));
cljs.core.assoc_BANG_.call(null,tu,idx_20720,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cu_20723 + (t__$1 * (((du * ((((cljs.core.get.call(null,u,(idx_20720 + (1))) + cui_20725) + cljs.core.get.call(null,u,down_20730)) + cljs.core.get.call(null,u,up_20729)) - ((4) * cu_20723))) - d1_20727) + (f * (1.0 - cu_20723)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

cljs.core.assoc_BANG_.call(null,tv,idx_20720,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cv_20724 + (t__$1 * (((dv * ((((cljs.core.get.call(null,v,(idx_20720 + (1))) + cvi_20726) + cljs.core.get.call(null,v,down_20730)) + cljs.core.get.call(null,v,up_20729)) - ((4) * cv_20724))) + d1_20727) - (k * cv_20724))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

cljs.core.assoc_BANG_.call(null,tu,idxW1_20721,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cui_20725 + (t__$1 * (((du * (((((cu_20723 + cljs.core.get.call(null,u,idxW2_20722)) + cljs.core.get.call(null,u,(w1 + down_20730))) + cu_20723) + cljs.core.get.call(null,u,(up_20729 + w1))) - ((4) * cui_20725))) - d2_20728) + (f * (1.0 - cui_20725)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

cljs.core.assoc_BANG_.call(null,tv,idxW1_20721,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cvi_20726 + (t__$1 * (((dv * ((((cv_20724 + cljs.core.get.call(null,v,idxW2_20722)) + cljs.core.get.call(null,v,(down_20730 + w1))) + cljs.core.get.call(null,v,(up_20729 + w1))) - ((4) * cvi_20726))) + d2_20728) - (k * cvi_20726))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());

var G__20731 = cljs.core.next.call(null,seq__20543_20713__$1);
var G__20732 = null;
var G__20733 = (0);
var G__20734 = (0);
seq__20543_20692 = G__20731;
chunk__20544_20693 = G__20732;
count__20545_20694 = G__20733;
i__20546_20695 = G__20734;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.assoc.call(null,gs,new cljs.core.Keyword(null,"u","u",-1156634785),cljs.core.persistent_BANG_.call(null,tu),new cljs.core.Keyword(null,"v","v",21465059),cljs.core.persistent_BANG_.call(null,tv));
});
/**
 * light version without tilling support
 */
geom.grayscott.core_old.upd_STAR_ = (function geom$grayscott$core_old$upd_STAR_(p__20735,t){
var map__20749 = p__20735;
var map__20749__$1 = ((((!((map__20749 == null)))?((((map__20749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20749):map__20749);
var gs = map__20749__$1;
var w = cljs.core.get.call(null,map__20749__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__20749__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var u = cljs.core.get.call(null,map__20749__$1,new cljs.core.Keyword(null,"u","u",-1156634785));
var v = cljs.core.get.call(null,map__20749__$1,new cljs.core.Keyword(null,"v","v",21465059));
var du = cljs.core.get.call(null,map__20749__$1,new cljs.core.Keyword(null,"du","du",1000321745));
var dv = cljs.core.get.call(null,map__20749__$1,new cljs.core.Keyword(null,"dv","dv",781315158));
var t__$1 = geom.grayscott.core_old.clip.call(null,(0),(1),t);
var w1 = (w - (1));
var h1 = (h - (1));
var vec__20751 = cljs.core.reduce.call(null,((function (t__$1,w1,h1,map__20749,map__20749__$1,gs,w,h,u,v,du,dv){
return (function (p__20752,p__20753){
var vec__20754 = p__20752;
var tu = cljs.core.nth.call(null,vec__20754,(0),null);
var tv = cljs.core.nth.call(null,vec__20754,(1),null);
var vec__20755 = p__20753;
var x = cljs.core.nth.call(null,vec__20755,(0),null);
var y = cljs.core.nth.call(null,vec__20755,(1),null);
var idx = (x + (y * w));
var top = (idx - w);
var bottom = (idx + w);
var left = (idx - (1));
var right = (idx + (1));
var f = geom.grayscott.core_old.get_f.call(null,gs,x,y);
var k = geom.grayscott.core_old.get_k.call(null,gs,x,y);
var cu = cljs.core.get.call(null,u,idx);
var cv = cljs.core.get.call(null,v,idx);
var d2 = ((cu * cv) * cv);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_BANG_.call(null,tu,idx,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cu + (t__$1 * (((du * ((((cljs.core.get.call(null,u,right) + cljs.core.get.call(null,u,left)) + cljs.core.get.call(null,u,bottom)) + cljs.core.get.call(null,u,top)) - ((4) * cu))) - d2) + (f * (1.0 - cu)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})()),cljs.core.assoc_BANG_.call(null,tv,idx,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cv + (t__$1 * (((dv * ((((cljs.core.get.call(null,v,right) + cljs.core.get.call(null,v,left)) + cljs.core.get.call(null,v,bottom)) + cljs.core.get.call(null,v,top)) - ((4) * cv))) + d2) - (k * cv))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})())], null);
});})(t__$1,w1,h1,map__20749,map__20749__$1,gs,w,h,u,v,du,dv))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,u),cljs.core.transient$.call(null,v)], null),(function (){var iter__19047__auto__ = ((function (t__$1,w1,h1,map__20749,map__20749__$1,gs,w,h,u,v,du,dv){
return (function geom$grayscott$core_old$upd_STAR__$_iter__20756(s__20757){
return (new cljs.core.LazySeq(null,((function (t__$1,w1,h1,map__20749,map__20749__$1,gs,w,h,u,v,du,dv){
return (function (){
var s__20757__$1 = s__20757;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20757__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19043__auto__ = ((function (s__20757__$1,x,xs__5205__auto__,temp__4657__auto__,t__$1,w1,h1,map__20749,map__20749__$1,gs,w,h,u,v,du,dv){
return (function geom$grayscott$core_old$upd_STAR__$_iter__20756_$_iter__20758(s__20759){
return (new cljs.core.LazySeq(null,((function (s__20757__$1,x,xs__5205__auto__,temp__4657__auto__,t__$1,w1,h1,map__20749,map__20749__$1,gs,w,h,u,v,du,dv){
return (function (){
var s__20759__$1 = s__20759;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__20759__$1);
if(temp__4657__auto____$1){
var s__20759__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20759__$2)){
var c__19045__auto__ = cljs.core.chunk_first.call(null,s__20759__$2);
var size__19046__auto__ = cljs.core.count.call(null,c__19045__auto__);
var b__20761 = cljs.core.chunk_buffer.call(null,size__19046__auto__);
if((function (){var i__20760 = (0);
while(true){
if((i__20760 < size__19046__auto__)){
var y = cljs.core._nth.call(null,c__19045__auto__,i__20760);
cljs.core.chunk_append.call(null,b__20761,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__20762 = (i__20760 + (1));
i__20760 = G__20762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20761),geom$grayscott$core_old$upd_STAR__$_iter__20756_$_iter__20758.call(null,cljs.core.chunk_rest.call(null,s__20759__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20761),null);
}
} else {
var y = cljs.core.first.call(null,s__20759__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),geom$grayscott$core_old$upd_STAR__$_iter__20756_$_iter__20758.call(null,cljs.core.rest.call(null,s__20759__$2)));
}
} else {
return null;
}
break;
}
});})(s__20757__$1,x,xs__5205__auto__,temp__4657__auto__,t__$1,w1,h1,map__20749,map__20749__$1,gs,w,h,u,v,du,dv))
,null,null));
});})(s__20757__$1,x,xs__5205__auto__,temp__4657__auto__,t__$1,w1,h1,map__20749,map__20749__$1,gs,w,h,u,v,du,dv))
;
var fs__19044__auto__ = cljs.core.seq.call(null,iterys__19043__auto__.call(null,cljs.core.range.call(null,(1),h1)));
if(fs__19044__auto__){
return cljs.core.concat.call(null,fs__19044__auto__,geom$grayscott$core_old$upd_STAR__$_iter__20756.call(null,cljs.core.rest.call(null,s__20757__$1)));
} else {
var G__20763 = cljs.core.rest.call(null,s__20757__$1);
s__20757__$1 = G__20763;
continue;
}
} else {
return null;
}
break;
}
});})(t__$1,w1,h1,map__20749,map__20749__$1,gs,w,h,u,v,du,dv))
,null,null));
});})(t__$1,w1,h1,map__20749,map__20749__$1,gs,w,h,u,v,du,dv))
;
return iter__19047__auto__.call(null,cljs.core.range.call(null,(1),w1));
})());
var tu = cljs.core.nth.call(null,vec__20751,(0),null);
var tv = cljs.core.nth.call(null,vec__20751,(1),null);
return cljs.core.assoc.call(null,gs,new cljs.core.Keyword(null,"u","u",-1156634785),cljs.core.persistent_BANG_.call(null,tu),new cljs.core.Keyword(null,"v","v",21465059),cljs.core.persistent_BANG_.call(null,tv));
});

//# sourceMappingURL=core_old.js.map