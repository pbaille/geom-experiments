// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.grayscott.core2');
goog.require('cljs.core');
geom.grayscott.core2.clip = (function geom$grayscott$core2$clip(min,max,n){
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
geom.grayscott.core2.get_u = (function geom$grayscott$core2$get_u(p__27267,x,y){
var map__27270 = p__27267;
var map__27270__$1 = ((((!((map__27270 == null)))?((((map__27270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27270):map__27270);
var w = cljs.core.get.call(null,map__27270__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__27270__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var u = cljs.core.get.call(null,map__27270__$1,new cljs.core.Keyword(null,"u","u",-1156634785));
if(((((0) <= y)) && ((y <= h))) && ((((0) <= x)) && ((x <= w)))){
return cljs.core.get.call(null,u,(x + (y * w)));
} else {
return (0);
}
});
geom.grayscott.core2.get_v = (function geom$grayscott$core2$get_v(p__27272,x,y){
var map__27275 = p__27272;
var map__27275__$1 = ((((!((map__27275 == null)))?((((map__27275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27275):map__27275);
var w = cljs.core.get.call(null,map__27275__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__27275__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var v = cljs.core.get.call(null,map__27275__$1,new cljs.core.Keyword(null,"v","v",21465059));
if(((((0) <= y)) && ((y <= h))) && ((((0) <= x)) && ((x <= w)))){
return cljs.core.get.call(null,v,(x + (y * w)));
} else {
return (0);
}
});
geom.grayscott.core2.set_coefs = (function geom$grayscott$core2$set_coefs(gs,f,k,du,dv){
return cljs.core.assoc.call(null,gs,new cljs.core.Keyword(null,"f","f",-1597136552),f,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"du","du",1000321745),du,new cljs.core.Keyword(null,"dv","dv",781315158),dv);
});
geom.grayscott.core2.default_coefs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"f","f",-1597136552),0.023,new cljs.core.Keyword(null,"k","k",-2146297393),0.077,new cljs.core.Keyword(null,"du","du",1000321745),0.095,new cljs.core.Keyword(null,"dv","dv",781315158),0.03], null);

/**
 * @interface
 */
geom.grayscott.core2.IGrayscott = function(){};

/**
 * get f coef at given coordinates
 */
geom.grayscott.core2.get_f = (function geom$grayscott$core2$get_f(_,x,y){
if((!((_ == null))) && (!((_.geom$grayscott$core2$IGrayscott$get_f$arity$3 == null)))){
return _.geom$grayscott$core2$IGrayscott$get_f$arity$3(_,x,y);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (geom.grayscott.core2.get_f[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,x,y);
} else {
var m__18931__auto____$1 = (geom.grayscott.core2.get_f["_"]);
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
geom.grayscott.core2.get_k = (function geom$grayscott$core2$get_k(_,x,y){
if((!((_ == null))) && (!((_.geom$grayscott$core2$IGrayscott$get_k$arity$3 == null)))){
return _.geom$grayscott$core2$IGrayscott$get_k$arity$3(_,x,y);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (geom.grayscott.core2.get_k[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,x,y);
} else {
var m__18931__auto____$1 = (geom.grayscott.core2.get_k["_"]);
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
 * @implements {geom.grayscott.core2.IGrayscott}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
geom.grayscott.core2.Grayscott = (function (w,h,u,v,f,k,du,dv,is_tilling,__meta,__extmap,__hash){
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
geom.grayscott.core2.Grayscott.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

geom.grayscott.core2.Grayscott.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k27278,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__27280 = (((k27278 instanceof cljs.core.Keyword))?k27278.fqn:null);
switch (G__27280) {
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
return cljs.core.get.call(null,self__.__extmap,k27278,else__18892__auto__);

}
});

geom.grayscott.core2.Grayscott.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#geom.grayscott.core2.Grayscott{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"u","u",-1156634785),self__.u],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"du","du",1000321745),self__.du],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dv","dv",781315158),self__.dv],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277),self__.is_tilling],null))], null),self__.__extmap));
});

geom.grayscott.core2.Grayscott.prototype.cljs$core$IIterable$ = true;

geom.grayscott.core2.Grayscott.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27277){
var self__ = this;
var G__27277__$1 = this;
return (new cljs.core.RecordIter((0),G__27277__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"u","u",-1156634785),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"du","du",1000321745),new cljs.core.Keyword(null,"dv","dv",781315158),new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

geom.grayscott.core2.Grayscott.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

geom.grayscott.core2.Grayscott.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new geom.grayscott.core2.Grayscott(self__.w,self__.h,self__.u,self__.v,self__.f,self__.k,self__.du,self__.dv,self__.is_tilling,self__.__meta,self__.__extmap,self__.__hash));
});

geom.grayscott.core2.Grayscott.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

geom.grayscott.core2.Grayscott.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

geom.grayscott.core2.Grayscott.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

geom.grayscott.core2.Grayscott.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"v","v",21465059),null,new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"k","k",-2146297393),null,new cljs.core.Keyword(null,"du","du",1000321745),null,new cljs.core.Keyword(null,"h","h",1109658740),null,new cljs.core.Keyword(null,"dv","dv",781315158),null,new cljs.core.Keyword(null,"f","f",-1597136552),null,new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277),null,new cljs.core.Keyword(null,"u","u",-1156634785),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new geom.grayscott.core2.Grayscott(self__.w,self__.h,self__.u,self__.v,self__.f,self__.k,self__.du,self__.dv,self__.is_tilling,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

geom.grayscott.core2.Grayscott.prototype.geom$grayscott$core2$IGrayscott$ = true;

geom.grayscott.core2.Grayscott.prototype.geom$grayscott$core2$IGrayscott$get_f$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.f;
});

geom.grayscott.core2.Grayscott.prototype.geom$grayscott$core2$IGrayscott$get_k$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.k;
});

geom.grayscott.core2.Grayscott.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__27277){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__27281 = cljs.core.keyword_identical_QMARK_;
var expr__27282 = k__18897__auto__;
if(cljs.core.truth_(pred__27281.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__27282))){
return (new geom.grayscott.core2.Grayscott(G__27277,self__.h,self__.u,self__.v,self__.f,self__.k,self__.du,self__.dv,self__.is_tilling,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27281.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__27282))){
return (new geom.grayscott.core2.Grayscott(self__.w,G__27277,self__.u,self__.v,self__.f,self__.k,self__.du,self__.dv,self__.is_tilling,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27281.call(null,new cljs.core.Keyword(null,"u","u",-1156634785),expr__27282))){
return (new geom.grayscott.core2.Grayscott(self__.w,self__.h,G__27277,self__.v,self__.f,self__.k,self__.du,self__.dv,self__.is_tilling,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27281.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__27282))){
return (new geom.grayscott.core2.Grayscott(self__.w,self__.h,self__.u,G__27277,self__.f,self__.k,self__.du,self__.dv,self__.is_tilling,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27281.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__27282))){
return (new geom.grayscott.core2.Grayscott(self__.w,self__.h,self__.u,self__.v,G__27277,self__.k,self__.du,self__.dv,self__.is_tilling,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27281.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__27282))){
return (new geom.grayscott.core2.Grayscott(self__.w,self__.h,self__.u,self__.v,self__.f,G__27277,self__.du,self__.dv,self__.is_tilling,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27281.call(null,new cljs.core.Keyword(null,"du","du",1000321745),expr__27282))){
return (new geom.grayscott.core2.Grayscott(self__.w,self__.h,self__.u,self__.v,self__.f,self__.k,G__27277,self__.dv,self__.is_tilling,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27281.call(null,new cljs.core.Keyword(null,"dv","dv",781315158),expr__27282))){
return (new geom.grayscott.core2.Grayscott(self__.w,self__.h,self__.u,self__.v,self__.f,self__.k,self__.du,G__27277,self__.is_tilling,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27281.call(null,new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277),expr__27282))){
return (new geom.grayscott.core2.Grayscott(self__.w,self__.h,self__.u,self__.v,self__.f,self__.k,self__.du,self__.dv,G__27277,self__.__meta,self__.__extmap,null));
} else {
return (new geom.grayscott.core2.Grayscott(self__.w,self__.h,self__.u,self__.v,self__.f,self__.k,self__.du,self__.dv,self__.is_tilling,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__27277),null));
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

geom.grayscott.core2.Grayscott.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"u","u",-1156634785),self__.u],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"du","du",1000321745),self__.du],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dv","dv",781315158),self__.dv],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277),self__.is_tilling],null))], null),self__.__extmap));
});

geom.grayscott.core2.Grayscott.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__27277){
var self__ = this;
var this__18888__auto____$1 = this;
return (new geom.grayscott.core2.Grayscott(self__.w,self__.h,self__.u,self__.v,self__.f,self__.k,self__.du,self__.dv,self__.is_tilling,G__27277,self__.__extmap,self__.__hash));
});

geom.grayscott.core2.Grayscott.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

geom.grayscott.core2.Grayscott.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.Symbol(null,"u","u",483896742,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"du","du",-1654114024,null),new cljs.core.Symbol(null,"dv","dv",-1873120611,null),new cljs.core.Symbol(null,"is-tilling","is-tilling",-1917946492,null)], null);
});

geom.grayscott.core2.Grayscott.cljs$lang$type = true;

geom.grayscott.core2.Grayscott.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"geom.grayscott.core2/Grayscott");
});

geom.grayscott.core2.Grayscott.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"geom.grayscott.core2/Grayscott");
});

geom.grayscott.core2.__GT_Grayscott = (function geom$grayscott$core2$__GT_Grayscott(w,h,u,v,f,k,du,dv,is_tilling){
return (new geom.grayscott.core2.Grayscott(w,h,u,v,f,k,du,dv,is_tilling,null,null,null));
});

geom.grayscott.core2.map__GT_Grayscott = (function geom$grayscott$core2$map__GT_Grayscott(G__27279){
return (new geom.grayscott.core2.Grayscott(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__27279),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__27279),new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(G__27279),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__27279),new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__27279),new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__27279),new cljs.core.Keyword(null,"du","du",1000321745).cljs$core$IFn$_invoke$arity$1(G__27279),new cljs.core.Keyword(null,"dv","dv",781315158).cljs$core$IFn$_invoke$arity$1(G__27279),new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277).cljs$core$IFn$_invoke$arity$1(G__27279),null,cljs.core.dissoc.call(null,G__27279,new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"u","u",-1156634785),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"du","du",1000321745),new cljs.core.Keyword(null,"dv","dv",781315158),new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277)),null));
});

geom.grayscott.core2.grayscott = (function geom$grayscott$core2$grayscott(w,h,wrap){
var cnt = (w * h);
var v = cljs.core.vec.call(null,cljs.core.repeat.call(null,cnt,1.0));
var u = cljs.core.vec.call(null,cljs.core.repeat.call(null,cnt,0.0));
return geom.grayscott.core2.map__GT_Grayscott.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),h,new cljs.core.Keyword(null,"u","u",-1156634785),u,new cljs.core.Keyword(null,"v","v",21465059),v,new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277),wrap], null),geom.grayscott.core2.default_coefs));
});
geom.grayscott.core2.upd = (function geom$grayscott$core2$upd(p__27286,t){
var map__27304 = p__27286;
var map__27304__$1 = ((((!((map__27304 == null)))?((((map__27304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27304):map__27304);
var gs = map__27304__$1;
var w = cljs.core.get.call(null,map__27304__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__27304__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var u = cljs.core.get.call(null,map__27304__$1,new cljs.core.Keyword(null,"u","u",-1156634785));
var v = cljs.core.get.call(null,map__27304__$1,new cljs.core.Keyword(null,"v","v",21465059));
var du = cljs.core.get.call(null,map__27304__$1,new cljs.core.Keyword(null,"du","du",1000321745));
var dv = cljs.core.get.call(null,map__27304__$1,new cljs.core.Keyword(null,"dv","dv",781315158));
var f = cljs.core.get.call(null,map__27304__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var k = cljs.core.get.call(null,map__27304__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var is_tilling = cljs.core.get.call(null,map__27304__$1,new cljs.core.Keyword(null,"is-tilling","is-tilling",736489277));
var t__$1 = geom.grayscott.core2.clip.call(null,(0),(1),t);
var tu = cljs.core.transient$.call(null,u);
var tv = cljs.core.transient$.call(null,v);
var w1 = (w - (1));
var h1 = (h - (1));
var temp = cljs.core.reduce.call(null,((function (t__$1,tu,tv,w1,h1,map__27304,map__27304__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function (p__27307,p__27308){
var vec__27309 = p__27307;
var tu__$1 = cljs.core.nth.call(null,vec__27309,(0),null);
var tv__$1 = cljs.core.nth.call(null,vec__27309,(1),null);
var vec__27310 = p__27308;
var x = cljs.core.nth.call(null,vec__27310,(0),null);
var y = cljs.core.nth.call(null,vec__27310,(1),null);
var idx = (x + (y * w));
var top = (idx - w);
var bottom = (idx + w);
var left = (idx - (1));
var right = (idx + (1));
var f__$1 = geom.grayscott.core2.get_f.call(null,gs,x,y);
var k__$1 = geom.grayscott.core2.get_k.call(null,gs,x,y);
var cu = cljs.core.get.call(null,u,idx);
var cv = cljs.core.get.call(null,v,idx);
var d2 = ((cu * cv) * cv);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_BANG_.call(null,tu__$1,idx,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cu + (t__$1 * (((du * ((((cljs.core.get.call(null,u,right) + cljs.core.get.call(null,u,left)) + cljs.core.get.call(null,u,bottom)) + cljs.core.get.call(null,u,top)) - ((4) * cu))) - d2) + (f__$1 * (1.0 - cu)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})()),cljs.core.assoc_BANG_.call(null,tv__$1,idx,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cv + (t__$1 * (((dv * ((((cljs.core.get.call(null,v,right) + cljs.core.get.call(null,v,left)) + cljs.core.get.call(null,v,bottom)) + cljs.core.get.call(null,v,top)) - ((4) * cv))) + d2) - (k__$1 * cv))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})())], null);
});})(t__$1,tu,tv,w1,h1,map__27304,map__27304__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,u),cljs.core.transient$.call(null,v)], null),(function (){var iter__19047__auto__ = ((function (t__$1,tu,tv,w1,h1,map__27304,map__27304__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function geom$grayscott$core2$upd_$_iter__27311(s__27312){
return (new cljs.core.LazySeq(null,((function (t__$1,tu,tv,w1,h1,map__27304,map__27304__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function (){
var s__27312__$1 = s__27312;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27312__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19043__auto__ = ((function (s__27312__$1,x,xs__5205__auto__,temp__4657__auto__,t__$1,tu,tv,w1,h1,map__27304,map__27304__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function geom$grayscott$core2$upd_$_iter__27311_$_iter__27313(s__27314){
return (new cljs.core.LazySeq(null,((function (s__27312__$1,x,xs__5205__auto__,temp__4657__auto__,t__$1,tu,tv,w1,h1,map__27304,map__27304__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function (){
var s__27314__$1 = s__27314;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__27314__$1);
if(temp__4657__auto____$1){
var s__27314__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27314__$2)){
var c__19045__auto__ = cljs.core.chunk_first.call(null,s__27314__$2);
var size__19046__auto__ = cljs.core.count.call(null,c__19045__auto__);
var b__27316 = cljs.core.chunk_buffer.call(null,size__19046__auto__);
if((function (){var i__27315 = (0);
while(true){
if((i__27315 < size__19046__auto__)){
var y = cljs.core._nth.call(null,c__19045__auto__,i__27315);
cljs.core.chunk_append.call(null,b__27316,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__27321 = (i__27315 + (1));
i__27315 = G__27321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27316),geom$grayscott$core2$upd_$_iter__27311_$_iter__27313.call(null,cljs.core.chunk_rest.call(null,s__27314__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27316),null);
}
} else {
var y = cljs.core.first.call(null,s__27314__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),geom$grayscott$core2$upd_$_iter__27311_$_iter__27313.call(null,cljs.core.rest.call(null,s__27314__$2)));
}
} else {
return null;
}
break;
}
});})(s__27312__$1,x,xs__5205__auto__,temp__4657__auto__,t__$1,tu,tv,w1,h1,map__27304,map__27304__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
,null,null));
});})(s__27312__$1,x,xs__5205__auto__,temp__4657__auto__,t__$1,tu,tv,w1,h1,map__27304,map__27304__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
;
var fs__19044__auto__ = cljs.core.seq.call(null,iterys__19043__auto__.call(null,cljs.core.range.call(null,(1),h1)));
if(fs__19044__auto__){
return cljs.core.concat.call(null,fs__19044__auto__,geom$grayscott$core2$upd_$_iter__27311.call(null,cljs.core.rest.call(null,s__27312__$1)));
} else {
var G__27322 = cljs.core.rest.call(null,s__27312__$1);
s__27312__$1 = G__27322;
continue;
}
} else {
return null;
}
break;
}
});})(t__$1,tu,tv,w1,h1,map__27304,map__27304__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
,null,null));
});})(t__$1,tu,tv,w1,h1,map__27304,map__27304__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
;
return iter__19047__auto__.call(null,cljs.core.range.call(null,(1),w1));
})());
var vec__27306 = ((cljs.core.not.call(null,is_tilling))?temp:(function (){var w2 = (w1 - (1));
var idxH1 = (h1 * w);
var idxH2 = ((h1 - (1)) * w);
var temp__$1 = cljs.core.reduce.call(null,((function (w2,idxH1,idxH2,t__$1,tu,tv,w1,h1,temp,map__27304,map__27304__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function (p__27317,x){
var vec__27318 = p__27317;
var tu__$1 = cljs.core.nth.call(null,vec__27318,(0),null);
var tv__$1 = cljs.core.nth.call(null,vec__27318,(1),null);
var left = (((x === (0)))?w1:(x - (1)));
var right = ((cljs.core._EQ_.call(null,w1,x))?(0):(x + (1)));
var idx = (idxH1 + x);
var cu = cljs.core.get.call(null,u,x);
var cv = cljs.core.get.call(null,v,x);
var cui = cljs.core.get.call(null,u,idx);
var cvi = cljs.core.get.call(null,v,idx);
var d1 = ((cu * cv) * cv);
var d2 = ((cui * cvi) * cvi);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_BANG_.call(null,cljs.core.assoc_BANG_.call(null,tu__$1,x,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cu + (t__$1 * (((du * ((((cljs.core.get.call(null,u,right) + cljs.core.get.call(null,u,left)) + cljs.core.get.call(null,u,(w + x))) + cui) - ((4) * cu))) - d1) + (f * (1.0 - cu)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})()),idx,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cui + (t__$1 * (((du * ((((cljs.core.get.call(null,u,(idxH1 + right)) + cljs.core.get.call(null,u,(idxH1 + left))) + cu) + cljs.core.get.call(null,u,(idxH2 + x))) - ((4) * cui))) - d2) + (f * (1.0 - cui)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})()),cljs.core.assoc_BANG_.call(null,cljs.core.assoc_BANG_.call(null,tv__$1,x,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cv + (t__$1 * (((dv * ((((cljs.core.get.call(null,v,right) + cljs.core.get.call(null,v,left)) + cljs.core.get.call(null,v,(w + x))) + cvi) - ((4) * cv))) + d1) - (k * cv))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})()),idx,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cvi + (t__$1 * (((dv * ((((cljs.core.get.call(null,v,(idxH1 + right)) + cljs.core.get.call(null,v,(idxH1 + left))) + cv) + cljs.core.get.call(null,v,(idxH2 + x))) - ((4) * cvi))) + d2) - (k * cvi))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})())], null);
});})(w2,idxH1,idxH2,t__$1,tu,tv,w1,h1,temp,map__27304,map__27304__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
,temp,cljs.core.range.call(null,(0),w));
return cljs.core.reduce.call(null,((function (w2,idxH1,idxH2,temp__$1,t__$1,tu,tv,w1,h1,temp,map__27304,map__27304__$1,gs,w,h,u,v,du,dv,f,k,is_tilling){
return (function (p__27319,y){
var vec__27320 = p__27319;
var tu__$1 = cljs.core.nth.call(null,vec__27320,(0),null);
var tv__$1 = cljs.core.nth.call(null,vec__27320,(1),null);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_BANG_.call(null,cljs.core.assoc_BANG_.call(null,tu__$1,idx,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cu + (t__$1 * (((du * ((((cljs.core.get.call(null,u,(idx + (1))) + cui) + cljs.core.get.call(null,u,down)) + cljs.core.get.call(null,u,up)) - ((4) * cu))) - d1) + (f * (1.0 - cu)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})()),idxW1,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cui + (t__$1 * (((du * (((((cu + cljs.core.get.call(null,u,idxW2)) + cljs.core.get.call(null,u,(w1 + down))) + cu) + cljs.core.get.call(null,u,(up + w1))) - ((4) * cui))) - d2) + (f * (1.0 - cui)))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})()),cljs.core.assoc_BANG_.call(null,cljs.core.assoc_BANG_.call(null,tv__$1,idx,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cv + (t__$1 * (((dv * ((((cljs.core.get.call(null,v,(idx + (1))) + cvi) + cljs.core.get.call(null,v,down)) + cljs.core.get.call(null,v,up)) - ((4) * cv))) + d1) - (k * cv))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})()),idxW1,(function (){var x__18606__auto__ = (0);
var y__18607__auto__ = (cvi + (t__$1 * (((dv * ((((cv + cljs.core.get.call(null,v,idxW2)) + cljs.core.get.call(null,v,(down + w1))) + cljs.core.get.call(null,v,(up + w1))) - ((4) * cvi))) + d2) - (k * cvi))));
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})())], null);
});})(w2,idxH1,idxH2,temp__$1,t__$1,tu,tv,w1,h1,temp,map__27304,map__27304__$1,gs,w,h,u,v,du,dv,f,k,is_tilling))
,temp__$1,cljs.core.range.call(null,(0),h));
})());
var tu__$1 = cljs.core.nth.call(null,vec__27306,(0),null);
var tv__$1 = cljs.core.nth.call(null,vec__27306,(1),null);
return cljs.core.assoc.call(null,gs,new cljs.core.Keyword(null,"u","u",-1156634785),cljs.core.persistent_BANG_.call(null,tu__$1),new cljs.core.Keyword(null,"v","v",21465059),cljs.core.persistent_BANG_.call(null,tv__$1));
});

//# sourceMappingURL=core2.js.map