// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.types');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.vector');

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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Graph = (function (vertices,edges,__meta,__extmap,__hash){
this.vertices = vertices;
this.edges = edges;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22146,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22148 = (((k22146 instanceof cljs.core.Keyword))?k22146.fqn:null);
switch (G__22148) {
case "vertices":
return self__.vertices;

break;
case "edges":
return self__.edges;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22146,else__18892__auto__);

}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.Graph{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null))], null),self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Graph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22145){
var self__ = this;
var G__22145__$1 = this;
return (new cljs.core.RecordIter((0),G__22145__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.Graph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.Graph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22145){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22149 = cljs.core.keyword_identical_QMARK_;
var expr__22150 = k__18897__auto__;
if(cljs.core.truth_(pred__22149.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__22150))){
return (new thi.ng.geom.types.Graph(G__22145,self__.edges,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22149.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__22150))){
return (new thi.ng.geom.types.Graph(self__.vertices,G__22145,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22145),null));
}
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null))], null),self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22145){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,G__22145,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.Graph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"edges","edges",945740132,null)], null);
});

thi.ng.geom.types.Graph.cljs$lang$type = true;

thi.ng.geom.types.Graph.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Graph");
});

thi.ng.geom.types.Graph.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/Graph");
});

thi.ng.geom.types.__GT_Graph = (function thi$ng$geom$types$__GT_Graph(vertices,edges){
return (new thi.ng.geom.types.Graph(vertices,edges,null,null,null));
});

thi.ng.geom.types.map__GT_Graph = (function thi$ng$geom$types$map__GT_Graph(G__22147){
return (new thi.ng.geom.types.Graph(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__22147),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__22147),null,cljs.core.dissoc.call(null,G__22147,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"edges","edges",-694791395)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Bezier2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22154,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22156 = (((k22154 instanceof cljs.core.Keyword))?k22154.fqn:null);
switch (G__22156) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22154,else__18892__auto__);

}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.Bezier2{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Bezier2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22153){
var self__ = this;
var G__22153__$1 = this;
return (new cljs.core.RecordIter((0),G__22153__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.Bezier2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.Bezier2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22153){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22157 = cljs.core.keyword_identical_QMARK_;
var expr__22158 = k__18897__auto__;
if(cljs.core.truth_(pred__22157.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__22158))){
return (new thi.ng.geom.types.Bezier2(G__22153,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22153),null));
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22153){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.Bezier2(self__.points,G__22153,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.Bezier2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Bezier2.cljs$lang$type = true;

thi.ng.geom.types.Bezier2.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier2");
});

thi.ng.geom.types.Bezier2.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/Bezier2");
});

thi.ng.geom.types.__GT_Bezier2 = (function thi$ng$geom$types$__GT_Bezier2(points){
return (new thi.ng.geom.types.Bezier2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Bezier2 = (function thi$ng$geom$types$map__GT_Bezier2(G__22155){
return (new thi.ng.geom.types.Bezier2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__22155),null,cljs.core.dissoc.call(null,G__22155,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Circle2 = (function (p,r,__meta,__extmap,__hash){
this.p = p;
this.r = r;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22162,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22164 = (((k22162 instanceof cljs.core.Keyword))?k22162.fqn:null);
switch (G__22164) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22162,else__18892__auto__);

}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.Circle2{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Circle2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22161){
var self__ = this;
var G__22161__$1 = this;
return (new cljs.core.RecordIter((0),G__22161__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.Circle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.Circle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22161){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22165 = cljs.core.keyword_identical_QMARK_;
var expr__22166 = k__18897__auto__;
if(cljs.core.truth_(pred__22165.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__22166))){
return (new thi.ng.geom.types.Circle2(G__22161,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22165.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__22166))){
return (new thi.ng.geom.types.Circle2(self__.p,G__22161,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22161),null));
}
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22161){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,G__22161,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.Circle2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null);
});

thi.ng.geom.types.Circle2.cljs$lang$type = true;

thi.ng.geom.types.Circle2.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Circle2");
});

thi.ng.geom.types.Circle2.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/Circle2");
});

thi.ng.geom.types.__GT_Circle2 = (function thi$ng$geom$types$__GT_Circle2(p,r){
return (new thi.ng.geom.types.Circle2(p,r,null,null,null));
});

thi.ng.geom.types.map__GT_Circle2 = (function thi$ng$geom$types$map__GT_Circle2(G__22163){
return (new thi.ng.geom.types.Circle2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__22163),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__22163),null,cljs.core.dissoc.call(null,G__22163,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Ellipse2 = (function (p,rx,ry,__meta,__extmap,__hash){
this.p = p;
this.rx = rx;
this.ry = ry;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22170,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22172 = (((k22170 instanceof cljs.core.Keyword))?k22170.fqn:null);
switch (G__22172) {
case "p":
return self__.p;

break;
case "rx":
return self__.rx;

break;
case "ry":
return self__.ry;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22170,else__18892__auto__);

}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.Ellipse2{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1627208482),self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",-334598563),self__.ry],null))], null),self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22169){
var self__ = this;
var G__22169__$1 = this;
return (new cljs.core.RecordIter((0),G__22169__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rx","rx",1627208482),null,new cljs.core.Keyword(null,"p","p",151049309),null,new cljs.core.Keyword(null,"ry","ry",-334598563),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22169){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22173 = cljs.core.keyword_identical_QMARK_;
var expr__22174 = k__18897__auto__;
if(cljs.core.truth_(pred__22173.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__22174))){
return (new thi.ng.geom.types.Ellipse2(G__22169,self__.rx,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22173.call(null,new cljs.core.Keyword(null,"rx","rx",1627208482),expr__22174))){
return (new thi.ng.geom.types.Ellipse2(self__.p,G__22169,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22173.call(null,new cljs.core.Keyword(null,"ry","ry",-334598563),expr__22174))){
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,G__22169,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22169),null));
}
}
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1627208482),self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",-334598563),self__.ry],null))], null),self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22169){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,G__22169,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.Ellipse2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null),new cljs.core.Symbol(null,"ry","ry",1305932964,null)], null);
});

thi.ng.geom.types.Ellipse2.cljs$lang$type = true;

thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Ellipse2");
});

thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/Ellipse2");
});

thi.ng.geom.types.__GT_Ellipse2 = (function thi$ng$geom$types$__GT_Ellipse2(p,rx,ry){
return (new thi.ng.geom.types.Ellipse2(p,rx,ry,null,null,null));
});

thi.ng.geom.types.map__GT_Ellipse2 = (function thi$ng$geom$types$map__GT_Ellipse2(G__22171){
return (new thi.ng.geom.types.Ellipse2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__22171),new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(G__22171),new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(G__22171),null,cljs.core.dissoc.call(null,G__22171,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Line2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22178,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22180 = (((k22178 instanceof cljs.core.Keyword))?k22178.fqn:null);
switch (G__22180) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22178,else__18892__auto__);

}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.Line2{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Line2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22177){
var self__ = this;
var G__22177__$1 = this;
return (new cljs.core.RecordIter((0),G__22177__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.Line2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.Line2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22177){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22181 = cljs.core.keyword_identical_QMARK_;
var expr__22182 = k__18897__auto__;
if(cljs.core.truth_(pred__22181.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__22182))){
return (new thi.ng.geom.types.Line2(G__22177,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22177),null));
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22177){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.Line2(self__.points,G__22177,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.Line2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Line2.cljs$lang$type = true;

thi.ng.geom.types.Line2.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Line2");
});

thi.ng.geom.types.Line2.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/Line2");
});

thi.ng.geom.types.__GT_Line2 = (function thi$ng$geom$types$__GT_Line2(points){
return (new thi.ng.geom.types.Line2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Line2 = (function thi$ng$geom$types$map__GT_Line2(G__22179){
return (new thi.ng.geom.types.Line2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__22179),null,cljs.core.dissoc.call(null,G__22179,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.LineStrip2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22186,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22188 = (((k22186 instanceof cljs.core.Keyword))?k22186.fqn:null);
switch (G__22188) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22186,else__18892__auto__);

}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.LineStrip2{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22185){
var self__ = this;
var G__22185__$1 = this;
return (new cljs.core.RecordIter((0),G__22185__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22185){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22189 = cljs.core.keyword_identical_QMARK_;
var expr__22190 = k__18897__auto__;
if(cljs.core.truth_(pred__22189.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__22190))){
return (new thi.ng.geom.types.LineStrip2(G__22185,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22185),null));
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22185){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip2(self__.points,G__22185,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.LineStrip2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.LineStrip2.cljs$lang$type = true;

thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip2");
});

thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/LineStrip2");
});

thi.ng.geom.types.__GT_LineStrip2 = (function thi$ng$geom$types$__GT_LineStrip2(points){
return (new thi.ng.geom.types.LineStrip2(points,null,null,null));
});

thi.ng.geom.types.map__GT_LineStrip2 = (function thi$ng$geom$types$map__GT_LineStrip2(G__22187){
return (new thi.ng.geom.types.LineStrip2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__22187),null,cljs.core.dissoc.call(null,G__22187,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Mesh2 = (function (vertices,normals,fnormals,vnormals,edges,faces,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22194,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22196 = (((k22194 instanceof cljs.core.Keyword))?k22194.fqn:null);
switch (G__22196) {
case "vertices":
return self__.vertices;

break;
case "normals":
return self__.normals;

break;
case "fnormals":
return self__.fnormals;

break;
case "vnormals":
return self__.vnormals;

break;
case "edges":
return self__.edges;

break;
case "faces":
return self__.faces;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22194,else__18892__auto__);

}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.Mesh2{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Mesh2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22193){
var self__ = this;
var G__22193__$1 = this;
return (new cljs.core.RecordIter((0),G__22193__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.Mesh2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.Mesh2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"normals","normals",-1508109067),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22193){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22197 = cljs.core.keyword_identical_QMARK_;
var expr__22198 = k__18897__auto__;
if(cljs.core.truth_(pred__22197.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__22198))){
return (new thi.ng.geom.types.Mesh2(G__22193,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22197.call(null,new cljs.core.Keyword(null,"normals","normals",-1508109067),expr__22198))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,G__22193,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22197.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__22198))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,G__22193,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22197.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),expr__22198))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,G__22193,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22197.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__22198))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__22193,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22197.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__22198))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__22193,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22197.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__22198))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__22193,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22193),null));
}
}
}
}
}
}
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22193){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__22193,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.Mesh2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"normals","normals",132422460,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.Mesh2.cljs$lang$type = true;

thi.ng.geom.types.Mesh2.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Mesh2");
});

thi.ng.geom.types.Mesh2.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/Mesh2");
});

thi.ng.geom.types.__GT_Mesh2 = (function thi$ng$geom$types$__GT_Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs){
return (new thi.ng.geom.types.Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_Mesh2 = (function thi$ng$geom$types$map__GT_Mesh2(G__22195){
return (new thi.ng.geom.types.Mesh2(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__22195),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(G__22195),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__22195),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284).cljs$core$IFn$_invoke$arity$1(G__22195),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__22195),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__22195),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__22195),null,cljs.core.dissoc.call(null,G__22195,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Path2 = (function (segments,__meta,__extmap,__hash){
this.segments = segments;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22202,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22204 = (((k22202 instanceof cljs.core.Keyword))?k22202.fqn:null);
switch (G__22204) {
case "segments":
return self__.segments;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22202,else__18892__auto__);

}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.Path2{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",1937535949),self__.segments],null))], null),self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Path2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22201){
var self__ = this;
var G__22201__$1 = this;
return (new cljs.core.RecordIter((0),G__22201__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"segments","segments",1937535949)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.Path2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.Path2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"segments","segments",1937535949),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22201){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22205 = cljs.core.keyword_identical_QMARK_;
var expr__22206 = k__18897__auto__;
if(cljs.core.truth_(pred__22205.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949),expr__22206))){
return (new thi.ng.geom.types.Path2(G__22201,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22201),null));
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",1937535949),self__.segments],null))], null),self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22201){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.Path2(self__.segments,G__22201,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.Path2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"segments","segments",-716899820,null)], null);
});

thi.ng.geom.types.Path2.cljs$lang$type = true;

thi.ng.geom.types.Path2.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Path2");
});

thi.ng.geom.types.Path2.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/Path2");
});

thi.ng.geom.types.__GT_Path2 = (function thi$ng$geom$types$__GT_Path2(segments){
return (new thi.ng.geom.types.Path2(segments,null,null,null));
});

thi.ng.geom.types.map__GT_Path2 = (function thi$ng$geom$types$map__GT_Path2(G__22203){
return (new thi.ng.geom.types.Path2(new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(G__22203),null,cljs.core.dissoc.call(null,G__22203,new cljs.core.Keyword(null,"segments","segments",1937535949)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Polygon2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22210,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22212 = (((k22210 instanceof cljs.core.Keyword))?k22210.fqn:null);
switch (G__22212) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22210,else__18892__auto__);

}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.Polygon2{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Polygon2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22209){
var self__ = this;
var G__22209__$1 = this;
return (new cljs.core.RecordIter((0),G__22209__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.Polygon2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.Polygon2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22209){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22213 = cljs.core.keyword_identical_QMARK_;
var expr__22214 = k__18897__auto__;
if(cljs.core.truth_(pred__22213.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__22214))){
return (new thi.ng.geom.types.Polygon2(G__22209,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22209),null));
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22209){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.Polygon2(self__.points,G__22209,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.Polygon2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Polygon2.cljs$lang$type = true;

thi.ng.geom.types.Polygon2.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Polygon2");
});

thi.ng.geom.types.Polygon2.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/Polygon2");
});

thi.ng.geom.types.__GT_Polygon2 = (function thi$ng$geom$types$__GT_Polygon2(points){
return (new thi.ng.geom.types.Polygon2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Polygon2 = (function thi$ng$geom$types$map__GT_Polygon2(G__22211){
return (new thi.ng.geom.types.Polygon2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__22211),null,cljs.core.dissoc.call(null,G__22211,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Rect2 = (function (p,size,__meta,__extmap,__hash){
this.p = p;
this.size = size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22218,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22220 = (((k22218 instanceof cljs.core.Keyword))?k22218.fqn:null);
switch (G__22220) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22218,else__18892__auto__);

}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.Rect2{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Rect2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22217){
var self__ = this;
var G__22217__$1 = this;
return (new cljs.core.RecordIter((0),G__22217__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.Rect2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.Rect2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22217){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22221 = cljs.core.keyword_identical_QMARK_;
var expr__22222 = k__18897__auto__;
if(cljs.core.truth_(pred__22221.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__22222))){
return (new thi.ng.geom.types.Rect2(G__22217,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22221.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__22222))){
return (new thi.ng.geom.types.Rect2(self__.p,G__22217,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22217),null));
}
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22217){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,G__22217,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.Rect2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"size","size",-1555742762,null)], null);
});

thi.ng.geom.types.Rect2.cljs$lang$type = true;

thi.ng.geom.types.Rect2.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Rect2");
});

thi.ng.geom.types.Rect2.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/Rect2");
});

thi.ng.geom.types.__GT_Rect2 = (function thi$ng$geom$types$__GT_Rect2(p,size){
return (new thi.ng.geom.types.Rect2(p,size,null,null,null));
});

thi.ng.geom.types.map__GT_Rect2 = (function thi$ng$geom$types$map__GT_Rect2(G__22219){
return (new thi.ng.geom.types.Rect2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__22219),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__22219),null,cljs.core.dissoc.call(null,G__22219,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Triangle2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22226,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22228 = (((k22226 instanceof cljs.core.Keyword))?k22226.fqn:null);
switch (G__22228) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22226,else__18892__auto__);

}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.Triangle2{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Triangle2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22225){
var self__ = this;
var G__22225__$1 = this;
return (new cljs.core.RecordIter((0),G__22225__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.Triangle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.Triangle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22225){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22229 = cljs.core.keyword_identical_QMARK_;
var expr__22230 = k__18897__auto__;
if(cljs.core.truth_(pred__22229.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__22230))){
return (new thi.ng.geom.types.Triangle2(G__22225,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22225),null));
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22225){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.Triangle2(self__.points,G__22225,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.Triangle2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Triangle2.cljs$lang$type = true;

thi.ng.geom.types.Triangle2.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle2");
});

thi.ng.geom.types.Triangle2.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/Triangle2");
});

thi.ng.geom.types.__GT_Triangle2 = (function thi$ng$geom$types$__GT_Triangle2(points){
return (new thi.ng.geom.types.Triangle2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Triangle2 = (function thi$ng$geom$types$map__GT_Triangle2(G__22227){
return (new thi.ng.geom.types.Triangle2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__22227),null,cljs.core.dissoc.call(null,G__22227,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.AABB = (function (p,size,__meta,__extmap,__hash){
this.p = p;
this.size = size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22234,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22236 = (((k22234 instanceof cljs.core.Keyword))?k22234.fqn:null);
switch (G__22236) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22234,else__18892__auto__);

}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.AABB{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.AABB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22233){
var self__ = this;
var G__22233__$1 = this;
return (new cljs.core.RecordIter((0),G__22233__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.AABB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.AABB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22233){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22237 = cljs.core.keyword_identical_QMARK_;
var expr__22238 = k__18897__auto__;
if(cljs.core.truth_(pred__22237.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__22238))){
return (new thi.ng.geom.types.AABB(G__22233,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22237.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__22238))){
return (new thi.ng.geom.types.AABB(self__.p,G__22233,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22233),null));
}
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22233){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.AABB(self__.p,self__.size,G__22233,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.AABB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null)], null)),new cljs.core.Symbol(null,"size","size",-1555742762,null)], null);
});

thi.ng.geom.types.AABB.cljs$lang$type = true;

thi.ng.geom.types.AABB.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/AABB");
});

thi.ng.geom.types.AABB.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/AABB");
});

thi.ng.geom.types.__GT_AABB = (function thi$ng$geom$types$__GT_AABB(p,size){
return (new thi.ng.geom.types.AABB(p,size,null,null,null));
});

thi.ng.geom.types.map__GT_AABB = (function thi$ng$geom$types$map__GT_AABB(G__22235){
return (new thi.ng.geom.types.AABB(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__22235),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__22235),null,cljs.core.dissoc.call(null,G__22235,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Cuboid = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22242,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22244 = (((k22242 instanceof cljs.core.Keyword))?k22242.fqn:null);
switch (G__22244) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22242,else__18892__auto__);

}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.Cuboid{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Cuboid.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22241){
var self__ = this;
var G__22241__$1 = this;
return (new cljs.core.RecordIter((0),G__22241__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.Cuboid.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.Cuboid.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22241){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22245 = cljs.core.keyword_identical_QMARK_;
var expr__22246 = k__18897__auto__;
if(cljs.core.truth_(pred__22245.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__22246))){
return (new thi.ng.geom.types.Cuboid(G__22241,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22241),null));
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22241){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.Cuboid(self__.points,G__22241,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.Cuboid.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Cuboid.cljs$lang$type = true;

thi.ng.geom.types.Cuboid.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Cuboid");
});

thi.ng.geom.types.Cuboid.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/Cuboid");
});

thi.ng.geom.types.__GT_Cuboid = (function thi$ng$geom$types$__GT_Cuboid(points){
return (new thi.ng.geom.types.Cuboid(points,null,null,null));
});

thi.ng.geom.types.map__GT_Cuboid = (function thi$ng$geom$types$map__GT_Cuboid(G__22243){
return (new thi.ng.geom.types.Cuboid(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__22243),null,cljs.core.dissoc.call(null,G__22243,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Bezier3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22250,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22252 = (((k22250 instanceof cljs.core.Keyword))?k22250.fqn:null);
switch (G__22252) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22250,else__18892__auto__);

}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.Bezier3{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Bezier3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22249){
var self__ = this;
var G__22249__$1 = this;
return (new cljs.core.RecordIter((0),G__22249__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.Bezier3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.Bezier3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22249){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22253 = cljs.core.keyword_identical_QMARK_;
var expr__22254 = k__18897__auto__;
if(cljs.core.truth_(pred__22253.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__22254))){
return (new thi.ng.geom.types.Bezier3(G__22249,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22249),null));
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22249){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.Bezier3(self__.points,G__22249,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.Bezier3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Bezier3.cljs$lang$type = true;

thi.ng.geom.types.Bezier3.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier3");
});

thi.ng.geom.types.Bezier3.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/Bezier3");
});

thi.ng.geom.types.__GT_Bezier3 = (function thi$ng$geom$types$__GT_Bezier3(points){
return (new thi.ng.geom.types.Bezier3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Bezier3 = (function thi$ng$geom$types$map__GT_Bezier3(G__22251){
return (new thi.ng.geom.types.Bezier3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__22251),null,cljs.core.dissoc.call(null,G__22251,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.BasicMesh = (function (vertices,faces,fnormals,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.faces = faces;
this.fnormals = fnormals;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.BasicMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22258,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22260 = (((k22258 instanceof cljs.core.Keyword))?k22258.fqn:null);
switch (G__22260) {
case "vertices":
return self__.vertices;

break;
case "faces":
return self__.faces;

break;
case "fnormals":
return self__.fnormals;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22258,else__18892__auto__);

}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.BasicMesh{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22257){
var self__ = this;
var G__22257__$1 = this;
return (new cljs.core.RecordIter((0),G__22257__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"attribs","attribs",-137878093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22257){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22261 = cljs.core.keyword_identical_QMARK_;
var expr__22262 = k__18897__auto__;
if(cljs.core.truth_(pred__22261.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__22262))){
return (new thi.ng.geom.types.BasicMesh(G__22257,self__.faces,self__.fnormals,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22261.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__22262))){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,G__22257,self__.fnormals,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22261.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__22262))){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,G__22257,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22261.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__22262))){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,G__22257,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22257),null));
}
}
}
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22257){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.attribs,G__22257,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.BasicMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.BasicMesh.cljs$lang$type = true;

thi.ng.geom.types.BasicMesh.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/BasicMesh");
});

thi.ng.geom.types.BasicMesh.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/BasicMesh");
});

thi.ng.geom.types.__GT_BasicMesh = (function thi$ng$geom$types$__GT_BasicMesh(vertices,faces,fnormals,attribs){
return (new thi.ng.geom.types.BasicMesh(vertices,faces,fnormals,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_BasicMesh = (function thi$ng$geom$types$map__GT_BasicMesh(G__22259){
return (new thi.ng.geom.types.BasicMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__22259),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__22259),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__22259),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__22259),null,cljs.core.dissoc.call(null,G__22259,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.GMesh = (function (vertices,normals,fnormals,vnormals,edges,faces,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22266,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22268 = (((k22266 instanceof cljs.core.Keyword))?k22266.fqn:null);
switch (G__22268) {
case "vertices":
return self__.vertices;

break;
case "normals":
return self__.normals;

break;
case "fnormals":
return self__.fnormals;

break;
case "vnormals":
return self__.vnormals;

break;
case "edges":
return self__.edges;

break;
case "faces":
return self__.faces;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22266,else__18892__auto__);

}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.GMesh{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.GMesh.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22265){
var self__ = this;
var G__22265__$1 = this;
return (new cljs.core.RecordIter((0),G__22265__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.GMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.GMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"normals","normals",-1508109067),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22265){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22269 = cljs.core.keyword_identical_QMARK_;
var expr__22270 = k__18897__auto__;
if(cljs.core.truth_(pred__22269.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__22270))){
return (new thi.ng.geom.types.GMesh(G__22265,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22269.call(null,new cljs.core.Keyword(null,"normals","normals",-1508109067),expr__22270))){
return (new thi.ng.geom.types.GMesh(self__.vertices,G__22265,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22269.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__22270))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,G__22265,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22269.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),expr__22270))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,G__22265,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22269.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__22270))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__22265,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22269.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__22270))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__22265,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22269.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__22270))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__22265,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22265),null));
}
}
}
}
}
}
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22265){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__22265,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.GMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"normals","normals",132422460,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.GMesh.cljs$lang$type = true;

thi.ng.geom.types.GMesh.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/GMesh");
});

thi.ng.geom.types.GMesh.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/GMesh");
});

thi.ng.geom.types.__GT_GMesh = (function thi$ng$geom$types$__GT_GMesh(vertices,normals,fnormals,vnormals,edges,faces,attribs){
return (new thi.ng.geom.types.GMesh(vertices,normals,fnormals,vnormals,edges,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_GMesh = (function thi$ng$geom$types$map__GT_GMesh(G__22267){
return (new thi.ng.geom.types.GMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__22267),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(G__22267),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__22267),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284).cljs$core$IFn$_invoke$arity$1(G__22267),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__22267),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__22267),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__22267),null,cljs.core.dissoc.call(null,G__22267,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Line3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22274,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22276 = (((k22274 instanceof cljs.core.Keyword))?k22274.fqn:null);
switch (G__22276) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22274,else__18892__auto__);

}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.Line3{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Line3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22273){
var self__ = this;
var G__22273__$1 = this;
return (new cljs.core.RecordIter((0),G__22273__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.Line3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.Line3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22273){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22277 = cljs.core.keyword_identical_QMARK_;
var expr__22278 = k__18897__auto__;
if(cljs.core.truth_(pred__22277.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__22278))){
return (new thi.ng.geom.types.Line3(G__22273,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22273),null));
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22273){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.Line3(self__.points,G__22273,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.Line3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Line3.cljs$lang$type = true;

thi.ng.geom.types.Line3.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Line3");
});

thi.ng.geom.types.Line3.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/Line3");
});

thi.ng.geom.types.__GT_Line3 = (function thi$ng$geom$types$__GT_Line3(points){
return (new thi.ng.geom.types.Line3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Line3 = (function thi$ng$geom$types$map__GT_Line3(G__22275){
return (new thi.ng.geom.types.Line3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__22275),null,cljs.core.dissoc.call(null,G__22275,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.LineStrip3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22282,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22284 = (((k22282 instanceof cljs.core.Keyword))?k22282.fqn:null);
switch (G__22284) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22282,else__18892__auto__);

}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.LineStrip3{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22281){
var self__ = this;
var G__22281__$1 = this;
return (new cljs.core.RecordIter((0),G__22281__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22281){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22285 = cljs.core.keyword_identical_QMARK_;
var expr__22286 = k__18897__auto__;
if(cljs.core.truth_(pred__22285.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__22286))){
return (new thi.ng.geom.types.LineStrip3(G__22281,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22281),null));
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22281){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip3(self__.points,G__22281,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.LineStrip3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.LineStrip3.cljs$lang$type = true;

thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip3");
});

thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/LineStrip3");
});

thi.ng.geom.types.__GT_LineStrip3 = (function thi$ng$geom$types$__GT_LineStrip3(points){
return (new thi.ng.geom.types.LineStrip3(points,null,null,null));
});

thi.ng.geom.types.map__GT_LineStrip3 = (function thi$ng$geom$types$map__GT_LineStrip3(G__22283){
return (new thi.ng.geom.types.LineStrip3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__22283),null,cljs.core.dissoc.call(null,G__22283,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Mesh3 = (function (vertices,normals,fnormals,vnormals,edges,faces,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Mesh3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22290,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22292 = (((k22290 instanceof cljs.core.Keyword))?k22290.fqn:null);
switch (G__22292) {
case "vertices":
return self__.vertices;

break;
case "normals":
return self__.normals;

break;
case "fnormals":
return self__.fnormals;

break;
case "vnormals":
return self__.vnormals;

break;
case "edges":
return self__.edges;

break;
case "faces":
return self__.faces;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22290,else__18892__auto__);

}
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.Mesh3{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Mesh3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22289){
var self__ = this;
var G__22289__$1 = this;
return (new cljs.core.RecordIter((0),G__22289__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.Mesh3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.Mesh3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"normals","normals",-1508109067),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22289){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22293 = cljs.core.keyword_identical_QMARK_;
var expr__22294 = k__18897__auto__;
if(cljs.core.truth_(pred__22293.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__22294))){
return (new thi.ng.geom.types.Mesh3(G__22289,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22293.call(null,new cljs.core.Keyword(null,"normals","normals",-1508109067),expr__22294))){
return (new thi.ng.geom.types.Mesh3(self__.vertices,G__22289,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22293.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__22294))){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,G__22289,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22293.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),expr__22294))){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,G__22289,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22293.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__22294))){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__22289,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22293.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__22294))){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__22289,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22293.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__22294))){
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__22289,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22289),null));
}
}
}
}
}
}
}
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22289){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__22289,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.Mesh3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"normals","normals",132422460,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.Mesh3.cljs$lang$type = true;

thi.ng.geom.types.Mesh3.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Mesh3");
});

thi.ng.geom.types.Mesh3.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/Mesh3");
});

thi.ng.geom.types.__GT_Mesh3 = (function thi$ng$geom$types$__GT_Mesh3(vertices,normals,fnormals,vnormals,edges,faces,attribs){
return (new thi.ng.geom.types.Mesh3(vertices,normals,fnormals,vnormals,edges,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_Mesh3 = (function thi$ng$geom$types$map__GT_Mesh3(G__22291){
return (new thi.ng.geom.types.Mesh3(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__22291),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(G__22291),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__22291),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284).cljs$core$IFn$_invoke$arity$1(G__22291),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__22291),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__22291),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__22291),null,cljs.core.dissoc.call(null,G__22291,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Plane = (function (n,w,__meta,__extmap,__hash){
this.n = n;
this.w = w;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22298,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22300 = (((k22298 instanceof cljs.core.Keyword))?k22298.fqn:null);
switch (G__22300) {
case "n":
return self__.n;

break;
case "w":
return self__.w;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22298,else__18892__auto__);

}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.Plane{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",562130025),self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null))], null),self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Plane.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22297){
var self__ = this;
var G__22297__$1 = this;
return (new cljs.core.RecordIter((0),G__22297__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"w","w",354169001)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.Plane.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.Plane.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),null,new cljs.core.Keyword(null,"w","w",354169001),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22297){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22301 = cljs.core.keyword_identical_QMARK_;
var expr__22302 = k__18897__auto__;
if(cljs.core.truth_(pred__22301.call(null,new cljs.core.Keyword(null,"n","n",562130025),expr__22302))){
return (new thi.ng.geom.types.Plane(G__22297,self__.w,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22301.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__22302))){
return (new thi.ng.geom.types.Plane(self__.n,G__22297,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22297),null));
}
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",562130025),self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null))], null),self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22297){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.Plane(self__.n,self__.w,G__22297,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.Plane.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"w","w",1994700528,null)], null);
});

thi.ng.geom.types.Plane.cljs$lang$type = true;

thi.ng.geom.types.Plane.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Plane");
});

thi.ng.geom.types.Plane.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/Plane");
});

thi.ng.geom.types.__GT_Plane = (function thi$ng$geom$types$__GT_Plane(n,w){
return (new thi.ng.geom.types.Plane(n,w,null,null,null));
});

thi.ng.geom.types.map__GT_Plane = (function thi$ng$geom$types$map__GT_Plane(G__22299){
return (new thi.ng.geom.types.Plane(new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(G__22299),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__22299),null,cljs.core.dissoc.call(null,G__22299,new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"w","w",354169001)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Quad3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22306,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22308 = (((k22306 instanceof cljs.core.Keyword))?k22306.fqn:null);
switch (G__22308) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22306,else__18892__auto__);

}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.Quad3{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Quad3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22305){
var self__ = this;
var G__22305__$1 = this;
return (new cljs.core.RecordIter((0),G__22305__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.Quad3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.Quad3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22305){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22309 = cljs.core.keyword_identical_QMARK_;
var expr__22310 = k__18897__auto__;
if(cljs.core.truth_(pred__22309.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__22310))){
return (new thi.ng.geom.types.Quad3(G__22305,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22305),null));
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22305){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.Quad3(self__.points,G__22305,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.Quad3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Quad3.cljs$lang$type = true;

thi.ng.geom.types.Quad3.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Quad3");
});

thi.ng.geom.types.Quad3.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/Quad3");
});

thi.ng.geom.types.__GT_Quad3 = (function thi$ng$geom$types$__GT_Quad3(points){
return (new thi.ng.geom.types.Quad3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Quad3 = (function thi$ng$geom$types$map__GT_Quad3(G__22307){
return (new thi.ng.geom.types.Quad3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__22307),null,cljs.core.dissoc.call(null,G__22307,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Sphere = (function (p,r,__meta,__extmap,__hash){
this.p = p;
this.r = r;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22314,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22316 = (((k22314 instanceof cljs.core.Keyword))?k22314.fqn:null);
switch (G__22316) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22314,else__18892__auto__);

}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.Sphere{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Sphere.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22313){
var self__ = this;
var G__22313__$1 = this;
return (new cljs.core.RecordIter((0),G__22313__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.Sphere.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.Sphere.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22313){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22317 = cljs.core.keyword_identical_QMARK_;
var expr__22318 = k__18897__auto__;
if(cljs.core.truth_(pred__22317.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__22318))){
return (new thi.ng.geom.types.Sphere(G__22313,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22317.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__22318))){
return (new thi.ng.geom.types.Sphere(self__.p,G__22313,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22313),null));
}
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22313){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,G__22313,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.Sphere.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null);
});

thi.ng.geom.types.Sphere.cljs$lang$type = true;

thi.ng.geom.types.Sphere.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Sphere");
});

thi.ng.geom.types.Sphere.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/Sphere");
});

thi.ng.geom.types.__GT_Sphere = (function thi$ng$geom$types$__GT_Sphere(p,r){
return (new thi.ng.geom.types.Sphere(p,r,null,null,null));
});

thi.ng.geom.types.map__GT_Sphere = (function thi$ng$geom$types$map__GT_Sphere(G__22315){
return (new thi.ng.geom.types.Sphere(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__22315),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__22315),null,cljs.core.dissoc.call(null,G__22315,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Tetrahedron = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22322,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22324 = (((k22322 instanceof cljs.core.Keyword))?k22322.fqn:null);
switch (G__22324) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22322,else__18892__auto__);

}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.Tetrahedron{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22321){
var self__ = this;
var G__22321__$1 = this;
return (new cljs.core.RecordIter((0),G__22321__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22321){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22325 = cljs.core.keyword_identical_QMARK_;
var expr__22326 = k__18897__auto__;
if(cljs.core.truth_(pred__22325.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__22326))){
return (new thi.ng.geom.types.Tetrahedron(G__22321,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22321),null));
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22321){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.Tetrahedron(self__.points,G__22321,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.Tetrahedron.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Tetrahedron.cljs$lang$type = true;

thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Tetrahedron");
});

thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/Tetrahedron");
});

thi.ng.geom.types.__GT_Tetrahedron = (function thi$ng$geom$types$__GT_Tetrahedron(points){
return (new thi.ng.geom.types.Tetrahedron(points,null,null,null));
});

thi.ng.geom.types.map__GT_Tetrahedron = (function thi$ng$geom$types$map__GT_Tetrahedron(G__22323){
return (new thi.ng.geom.types.Tetrahedron(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__22323),null,cljs.core.dissoc.call(null,G__22323,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Triangle3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18889__auto__,k__18890__auto__){
var self__ = this;
var this__18889__auto____$1 = this;
return cljs.core._lookup.call(null,this__18889__auto____$1,k__18890__auto__,null);
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18891__auto__,k22330,else__18892__auto__){
var self__ = this;
var this__18891__auto____$1 = this;
var G__22332 = (((k22330 instanceof cljs.core.Keyword))?k22330.fqn:null);
switch (G__22332) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22330,else__18892__auto__);

}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18903__auto__,writer__18904__auto__,opts__18905__auto__){
var self__ = this;
var this__18903__auto____$1 = this;
var pr_pair__18906__auto__ = ((function (this__18903__auto____$1){
return (function (keyval__18907__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,cljs.core.pr_writer,""," ","",opts__18905__auto__,keyval__18907__auto__);
});})(this__18903__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18904__auto__,pr_pair__18906__auto__,"#thi.ng.geom.types.Triangle3{",", ","}",opts__18905__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IIterable$ = true;

thi.ng.geom.types.Triangle3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22329){
var self__ = this;
var G__22329__$1 = this;
return (new cljs.core.RecordIter((0),G__22329__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18887__auto__){
var self__ = this;
var this__18887__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18883__auto__){
var self__ = this;
var this__18883__auto____$1 = this;
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18893__auto__){
var self__ = this;
var this__18893__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18884__auto__){
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

thi.ng.geom.types.Triangle3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18885__auto__,other__18886__auto__){
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

thi.ng.geom.types.Triangle3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18898__auto__,k__18899__auto__){
var self__ = this;
var this__18898__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__18899__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18898__auto____$1),self__.__meta),k__18899__auto__);
} else {
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18899__auto__)),null));
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18896__auto__,k__18897__auto__,G__22329){
var self__ = this;
var this__18896__auto____$1 = this;
var pred__22333 = cljs.core.keyword_identical_QMARK_;
var expr__22334 = k__18897__auto__;
if(cljs.core.truth_(pred__22333.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__22334))){
return (new thi.ng.geom.types.Triangle3(G__22329,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18897__auto__,G__22329),null));
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18901__auto__){
var self__ = this;
var this__18901__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18888__auto__,G__22329){
var self__ = this;
var this__18888__auto____$1 = this;
return (new thi.ng.geom.types.Triangle3(self__.points,G__22329,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18894__auto__,entry__18895__auto__){
var self__ = this;
var this__18894__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18895__auto__)){
return cljs.core._assoc.call(null,this__18894__auto____$1,cljs.core._nth.call(null,entry__18895__auto__,(0)),cljs.core._nth.call(null,entry__18895__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18894__auto____$1,entry__18895__auto__);
}
});

thi.ng.geom.types.Triangle3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Triangle3.cljs$lang$type = true;

thi.ng.geom.types.Triangle3.cljs$lang$ctorPrSeq = (function (this__18923__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle3");
});

thi.ng.geom.types.Triangle3.cljs$lang$ctorPrWriter = (function (this__18923__auto__,writer__18924__auto__){
return cljs.core._write.call(null,writer__18924__auto__,"thi.ng.geom.types/Triangle3");
});

thi.ng.geom.types.__GT_Triangle3 = (function thi$ng$geom$types$__GT_Triangle3(points){
return (new thi.ng.geom.types.Triangle3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Triangle3 = (function thi$ng$geom$types$map__GT_Triangle3(G__22331){
return (new thi.ng.geom.types.Triangle3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__22331),null,cljs.core.dissoc.call(null,G__22331,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


//# sourceMappingURL=types.js.map