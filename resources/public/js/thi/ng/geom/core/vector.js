// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.geom.core.vector');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.xerror.core');









/**
* @constructor
 * @implements {thi.ng.geom.core.PScale}
 * @implements {thi.ng.geom.core.PHeading}
 * @implements {thi.ng.geom.core.PMagnitude}
 * @implements {cljs.core.IIndexed}
 * @implements {thi.ng.geom.core.PDistance}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IReversible}
 * @implements {thi.ng.geom.core.vector.Object}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.geom.core.PMathOps}
 * @implements {cljs.core.IFn}
 * @implements {thi.ng.geom.core.PNormal}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.geom.core.PTranslate}
 * @implements {thi.ng.geom.core.PMinMax}
 * @implements {thi.ng.geom.core.PLimit}
 * @implements {thi.ng.geom.core.PVectorReduce}
 * @implements {thi.ng.geom.core.PPolar}
 * @implements {thi.ng.geom.core.PInterpolate}
 * @implements {thi.ng.geom.core.PTransform}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.geom.core.PClear}
 * @implements {thi.ng.geom.core.PDotProduct}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.geom.core.PNormalize}
 * @implements {thi.ng.geom.core.PBuffered}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {thi.ng.geom.core.PRotate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.geom.core.PCrossProduct}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.geom.core.PReflect}
 * @implements {thi.ng.geom.core.PMutableMathOps}
 * @implements {thi.ng.math.core.PDeltaEquals}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.PInvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.core.vector.Vec2 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 166618075;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$get_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((2)));
var G__20300 = self__.buf;
var G__20301 = (G__20300[(0)]);
var G__20302 = (G__20300[(1)]);
(b[(0)] = ((G__20301 * c) - (G__20302 * s)));

(b[(1)] = ((G__20301 * s) + (G__20302 * c)));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str((self__.buf[(0)])),cljs.core.str(" "),cljs.core.str((self__.buf[(1)])),cljs.core.str("]")].join('');
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,___$1);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDotProduct$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__20303 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__20304 = v.buf;
return (((G__20303[(0)]) * (G__20304[(0)])) + ((G__20303[(1)]) * (G__20304[(1)])));
} else {
return (((G__20303[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__20303[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__20305 = self__.buf;
var G__20306 = (G__20305[(0)]);
var G__20307 = (G__20305[(1)]);
var l = Math.sqrt(((G__20306 * G__20306) + (G__20307 * G__20307)));
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__20306 / l));

(b[(1)] = (G__20307 / l));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__20308 = self__.buf;
var G__20309 = (G__20308[(0)]);
var G__20310 = (G__20308[(1)]);
var l = Math.sqrt(((G__20309 * G__20309) + (G__20310 * G__20310)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__20309 * l__$1));

(b[(1)] = (G__20310 * l__$1));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.geom.core.mag_squared.call(null,___$1));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array((2))),null,null));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__20311 = self__.buf;
var G__20313 = (G__20311[(0)]);
var G__20314 = (G__20311[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__20312 = v.buf;
var G__20315 = (G__20312[(0)]);
var G__20316 = (G__20312[(1)]);
var d = (((G__20313 * G__20315) + (G__20314 * G__20316)) + (2));
(b[(0)] = ((G__20315 * d) - G__20313));

(b[(1)] = ((G__20316 * d) - G__20314));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
var G__20315 = cljs.core.nth.call(null,v,(0),0.0);
var G__20316 = cljs.core.nth.call(null,v,(1),0.0);
var d = (((G__20313 * G__20315) + (G__20314 * G__20316)) + (2));
(b[(0)] = ((G__20315 * d) - G__20313));

(b[(1)] = ((G__20316 * d) - G__20314));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__20317 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__20318 = v.buf;
return (((G__20317[(0)]) * (G__20318[(1)])) - ((G__20317[(1)]) * (G__20318[(0)])));
} else {
return (((G__20317[(0)]) * cljs.core.nth.call(null,v,(1),0.0)) - ((G__20317[(1)]) * cljs.core.nth.call(null,v,(0),0.0)));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,n);
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),null);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(1)]);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)])], null),self__._meta);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__20322_20649 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__20323_20650 = v.buf;
(self__.buf[(0)] = ((G__20322_20649[(0)]) - (G__20323_20650[(0)])));

(self__.buf[(1)] = ((G__20322_20649[(1)]) - (G__20323_20650[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__20322_20649[(0)]) - v));

(self__.buf[(1)] = ((G__20322_20649[(1)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__20322_20649[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__20322_20649[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__20331_20651 = typeof v1 === 'number';
var G__20332_20652 = typeof v2 === 'number';
if(((G__20331_20651)?G__20332_20652:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) - v1));

(self__.buf[(1)] = ((self__.buf[(1)]) - v2));
} else {
var G__20333_20653 = ((!(G__20331_20651))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20334_20654 = ((!(G__20332_20652))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20325_20655 = (cljs.core.truth_(G__20333_20653)?v1.buf:null);
var G__20326_20656 = (cljs.core.truth_(G__20334_20654)?v2.buf:null);
var G__20327_20657 = (cljs.core.truth_(G__20333_20653)?(G__20325_20655[(0)]):((G__20331_20651)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__20328_20658 = (cljs.core.truth_(G__20333_20653)?(G__20325_20655[(1)]):((G__20331_20651)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__20329_20659 = (cljs.core.truth_(G__20334_20654)?(G__20326_20656[(0)]):((G__20332_20652)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__20330_20660 = (cljs.core.truth_(G__20334_20654)?(G__20326_20656[(1)]):((G__20332_20652)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) - G__20327_20657) - G__20329_20659));

(self__.buf[(1)] = (((self__.buf[(1)]) - G__20328_20658) - G__20330_20660));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__20335_20661 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__20336_20662 = v.buf;
(self__.buf[(0)] = ((G__20335_20661[(0)]) * (G__20336_20662[(0)])));

(self__.buf[(1)] = ((G__20335_20661[(1)]) * (G__20336_20662[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__20335_20661[(0)]) * v));

(self__.buf[(1)] = ((G__20335_20661[(1)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__20335_20661[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__20335_20661[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__20344_20663 = typeof v1 === 'number';
var G__20345_20664 = typeof v2 === 'number';
if(((G__20344_20663)?G__20345_20664:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) * v1));

(self__.buf[(1)] = ((self__.buf[(1)]) * v2));
} else {
var G__20346_20665 = ((!(G__20344_20663))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20347_20666 = ((!(G__20345_20664))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20338_20667 = (cljs.core.truth_(G__20346_20665)?v1.buf:null);
var G__20339_20668 = (cljs.core.truth_(G__20347_20666)?v2.buf:null);
var G__20340_20669 = (cljs.core.truth_(G__20346_20665)?(G__20338_20667[(0)]):((G__20344_20663)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__20341_20670 = (cljs.core.truth_(G__20346_20665)?(G__20338_20667[(1)]):((G__20344_20663)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__20342_20671 = (cljs.core.truth_(G__20347_20666)?(G__20339_20668[(0)]):((G__20345_20664)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__20343_20672 = (cljs.core.truth_(G__20347_20666)?(G__20339_20668[(1)]):((G__20345_20664)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) * G__20340_20669) * G__20342_20671));

(self__.buf[(1)] = (((self__.buf[(1)]) * G__20341_20670) * G__20343_20672));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__20357_20673 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__20358_20674 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__20359_20675 = ((!(G__20357_20673))?typeof a === 'number':null);
var G__20360_20676 = ((!(G__20358_20674))?typeof b === 'number':null);
var G__20348_20677 = self__.buf;
var G__20349_20678 = ((G__20357_20673)?a.buf:null);
var G__20350_20679 = ((G__20358_20674)?b.buf:null);
var G__20351_20680 = (G__20348_20677[(0)]);
var G__20352_20681 = (G__20348_20677[(1)]);
var G__20353_20682 = ((G__20357_20673)?(G__20349_20678[(0)]):(cljs.core.truth_(G__20359_20675)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__20354_20683 = ((G__20357_20673)?(G__20349_20678[(1)]):(cljs.core.truth_(G__20359_20675)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__20355_20684 = ((G__20358_20674)?(G__20350_20679[(0)]):(cljs.core.truth_(G__20360_20676)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__20356_20685 = ((G__20358_20674)?(G__20350_20679[(1)]):(cljs.core.truth_(G__20360_20676)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__20351_20680 - G__20353_20682) * G__20355_20684));

(self__.buf[(1)] = ((G__20352_20681 - G__20354_20683) * G__20356_20685));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__20370_20686 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__20371_20687 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__20372_20688 = ((!(G__20370_20686))?typeof a === 'number':null);
var G__20373_20689 = ((!(G__20371_20687))?typeof b === 'number':null);
var G__20361_20690 = self__.buf;
var G__20362_20691 = ((G__20370_20686)?a.buf:null);
var G__20363_20692 = ((G__20371_20687)?b.buf:null);
var G__20364_20693 = (G__20361_20690[(0)]);
var G__20365_20694 = (G__20361_20690[(1)]);
var G__20366_20695 = ((G__20370_20686)?(G__20362_20691[(0)]):(cljs.core.truth_(G__20372_20688)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__20367_20696 = ((G__20370_20686)?(G__20362_20691[(1)]):(cljs.core.truth_(G__20372_20688)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__20368_20697 = ((G__20371_20687)?(G__20363_20692[(0)]):(cljs.core.truth_(G__20373_20689)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__20369_20698 = ((G__20371_20687)?(G__20363_20692[(1)]):(cljs.core.truth_(G__20373_20689)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__20364_20693 * G__20366_20695) - G__20368_20697));

(self__.buf[(1)] = ((G__20365_20694 * G__20367_20696) - G__20369_20698));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = thi.ng.math.core.abs.call(null,(self__.buf[(0)])));

(self__.buf[(1)] = thi.ng.math.core.abs.call(null,(self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__20383_20699 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__20384_20700 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__20385_20701 = ((!(G__20383_20699))?typeof a === 'number':null);
var G__20386_20702 = ((!(G__20384_20700))?typeof b === 'number':null);
var G__20374_20703 = self__.buf;
var G__20375_20704 = ((G__20383_20699)?a.buf:null);
var G__20376_20705 = ((G__20384_20700)?b.buf:null);
var G__20377_20706 = (G__20374_20703[(0)]);
var G__20378_20707 = (G__20374_20703[(1)]);
var G__20379_20708 = ((G__20383_20699)?(G__20375_20704[(0)]):(cljs.core.truth_(G__20385_20701)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__20380_20709 = ((G__20383_20699)?(G__20375_20704[(1)]):(cljs.core.truth_(G__20385_20701)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__20381_20710 = ((G__20384_20700)?(G__20376_20705[(0)]):(cljs.core.truth_(G__20386_20702)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__20382_20711 = ((G__20384_20700)?(G__20376_20705[(1)]):(cljs.core.truth_(G__20386_20702)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__20377_20706 * G__20379_20708) + G__20381_20710));

(self__.buf[(1)] = ((G__20378_20707 * G__20380_20709) + G__20382_20711));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__20387_20712 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__20388_20713 = v.buf;
(self__.buf[(0)] = ((G__20387_20712[(0)]) / (G__20388_20713[(0)])));

(self__.buf[(1)] = ((G__20387_20712[(1)]) / (G__20388_20713[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__20387_20712[(0)]) / v));

(self__.buf[(1)] = ((G__20387_20712[(1)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__20387_20712[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__20387_20712[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__20396_20714 = typeof v1 === 'number';
var G__20397_20715 = typeof v2 === 'number';
if(((G__20396_20714)?G__20397_20715:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) / v1));

(self__.buf[(1)] = ((self__.buf[(1)]) / v2));
} else {
var G__20398_20716 = ((!(G__20396_20714))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20399_20717 = ((!(G__20397_20715))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20390_20718 = (cljs.core.truth_(G__20398_20716)?v1.buf:null);
var G__20391_20719 = (cljs.core.truth_(G__20399_20717)?v2.buf:null);
var G__20392_20720 = (cljs.core.truth_(G__20398_20716)?(G__20390_20718[(0)]):((G__20396_20714)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__20393_20721 = (cljs.core.truth_(G__20398_20716)?(G__20390_20718[(1)]):((G__20396_20714)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__20394_20722 = (cljs.core.truth_(G__20399_20717)?(G__20391_20719[(0)]):((G__20397_20715)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__20395_20723 = (cljs.core.truth_(G__20399_20717)?(G__20391_20719[(1)]):((G__20397_20715)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) / G__20392_20720) / G__20394_20722));

(self__.buf[(1)] = (((self__.buf[(1)]) / G__20393_20721) / G__20395_20723));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__20400_20724 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__20401_20725 = v.buf;
(self__.buf[(0)] = ((G__20400_20724[(0)]) + (G__20401_20725[(0)])));

(self__.buf[(1)] = ((G__20400_20724[(1)]) + (G__20401_20725[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__20400_20724[(0)]) + v));

(self__.buf[(1)] = ((G__20400_20724[(1)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__20400_20724[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__20400_20724[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__20409_20726 = typeof v1 === 'number';
var G__20410_20727 = typeof v2 === 'number';
if(((G__20409_20726)?G__20410_20727:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) + v1));

(self__.buf[(1)] = ((self__.buf[(1)]) + v2));
} else {
var G__20411_20728 = ((!(G__20409_20726))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20412_20729 = ((!(G__20410_20727))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20403_20730 = (cljs.core.truth_(G__20411_20728)?v1.buf:null);
var G__20404_20731 = (cljs.core.truth_(G__20412_20729)?v2.buf:null);
var G__20405_20732 = (cljs.core.truth_(G__20411_20728)?(G__20403_20730[(0)]):((G__20409_20726)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__20406_20733 = (cljs.core.truth_(G__20411_20728)?(G__20403_20730[(1)]):((G__20409_20726)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__20407_20734 = (cljs.core.truth_(G__20412_20729)?(G__20404_20731[(0)]):((G__20410_20727)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__20408_20735 = (cljs.core.truth_(G__20412_20729)?(G__20404_20731[(1)]):((G__20410_20727)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) + G__20405_20732) + G__20407_20734));

(self__.buf[(1)] = (((self__.buf[(1)]) + G__20406_20733) + G__20408_20735));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__20422_20736 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__20423_20737 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__20424_20738 = ((!(G__20422_20736))?typeof a === 'number':null);
var G__20425_20739 = ((!(G__20423_20737))?typeof b === 'number':null);
var G__20413_20740 = self__.buf;
var G__20414_20741 = ((G__20422_20736)?a.buf:null);
var G__20415_20742 = ((G__20423_20737)?b.buf:null);
var G__20416_20743 = (G__20413_20740[(0)]);
var G__20417_20744 = (G__20413_20740[(1)]);
var G__20418_20745 = ((G__20422_20736)?(G__20414_20741[(0)]):(cljs.core.truth_(G__20424_20738)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__20419_20746 = ((G__20422_20736)?(G__20414_20741[(1)]):(cljs.core.truth_(G__20424_20738)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__20420_20747 = ((G__20423_20737)?(G__20415_20742[(0)]):(cljs.core.truth_(G__20425_20739)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__20421_20748 = ((G__20423_20737)?(G__20415_20742[(1)]):(cljs.core.truth_(G__20425_20739)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__20416_20743 + G__20418_20745) * G__20420_20747));

(self__.buf[(1)] = ((G__20417_20744 + G__20419_20746) * G__20421_20748));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.vector.swizzle2_fns.call(null,new cljs.core.Keyword(null,"yx","yx",1696579752)).call(null,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__18275__auto__ = self__._hash;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash.call(null,((cljs.core.imul.call(null,(((31) + cljs.core.hash.call(null,(self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(1)]))) | (0)),(2));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
return (((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)])));
} else {
return (cljs.core.sequential_QMARK_.call(null,o)) && (((2) === cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(0)]),cljs.core.first.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(1)]),cljs.core.nth.call(null,o,(1))));
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading.call(null,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$angle_between$arity$2 = (function (_,a){
var self__ = this;
var ___$1 = this;
var t = (thi.ng.geom.core.heading.call(null,a) - thi.ng.geom.core.heading.call(null,___$1));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(thi.ng.geom.core.dist_squared.call(null,___$1,v));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__20426 = self__.buf;
var G__20428 = (G__20426[(0)]);
var G__20429 = (G__20426[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__20427 = v.buf;
var G__20430 = (G__20427[(0)]);
var G__20431 = (G__20427[(1)]);
var dx = (G__20428 - G__20430);
var dy = (G__20429 - G__20431);
return ((dx * dx) + (dy * dy));
} else {
var G__20430 = cljs.core.nth.call(null,v,(0),0.0);
var G__20431 = cljs.core.nth.call(null,v,(1),0.0);
var dx = (G__20428 - G__20430);
var dy = (G__20429 - G__20431);
return ((dx * dx) + (dy * dy));
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,(self__.buf[(0)]),(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
return acc;
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,start,(self__.buf[(0)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInvert$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core._.call(null,___$1);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__20185__auto__ = (new Float32Array((2)));
var G__20441_20749 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__20442_20750 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__20443_20751 = ((!(G__20441_20749))?typeof a === 'number':null);
var G__20444_20752 = ((!(G__20442_20750))?typeof b === 'number':null);
var G__20432_20753 = self__.buf;
var G__20433_20754 = ((G__20441_20749)?a.buf:null);
var G__20434_20755 = ((G__20442_20750)?b.buf:null);
var G__20435_20756 = (G__20432_20753[(0)]);
var G__20436_20757 = (G__20432_20753[(1)]);
var G__20437_20758 = ((G__20441_20749)?(G__20433_20754[(0)]):(cljs.core.truth_(G__20443_20751)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__20438_20759 = ((G__20441_20749)?(G__20433_20754[(1)]):(cljs.core.truth_(G__20443_20751)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__20439_20760 = ((G__20442_20750)?(G__20434_20755[(0)]):(cljs.core.truth_(G__20444_20752)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__20440_20761 = ((G__20442_20750)?(G__20434_20755[(1)]):(cljs.core.truth_(G__20444_20752)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__20185__auto__[(0)] = ((G__20435_20756 * G__20437_20758) - G__20439_20760));

(dest__20185__auto__[(1)] = ((G__20436_20757 * G__20438_20759) - G__20440_20761));

return (new thi.ng.geom.core.vector.Vec2(dest__20185__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__20174__auto__ = (new Float32Array((2)));
var G__20445_20762 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__20446_20763 = v.buf;
(dest__20174__auto__[(0)] = ((G__20445_20762[(0)]) * (G__20446_20763[(0)])));

(dest__20174__auto__[(1)] = ((G__20445_20762[(1)]) * (G__20446_20763[(1)])));
} else {
if(typeof v === 'number'){
(dest__20174__auto__[(0)] = ((G__20445_20762[(0)]) * v));

(dest__20174__auto__[(1)] = ((G__20445_20762[(1)]) * v));
} else {
(dest__20174__auto__[(0)] = ((G__20445_20762[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__20174__auto__[(1)] = ((G__20445_20762[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__20174__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__20447 = self__.buf;
var G__20450 = (new Float32Array((2)));
var G__20451 = (G__20447[(0)]);
var G__20452 = (G__20447[(1)]);
var G__20457 = typeof v1 === 'number';
var G__20458 = typeof v2 === 'number';
if(((G__20457)?G__20458:false)){
(G__20450[(0)] = (G__20451 * v1));

(G__20450[(1)] = (G__20452 * v2));
} else {
var G__20459_20764 = ((!(G__20457))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20460_20765 = ((!(G__20458))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20448_20766 = (cljs.core.truth_(G__20459_20764)?v1.buf:null);
var G__20449_20767 = (cljs.core.truth_(G__20460_20765)?v2.buf:null);
var G__20453_20768 = (cljs.core.truth_(G__20459_20764)?(G__20448_20766[(0)]):((G__20457)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__20454_20769 = (cljs.core.truth_(G__20459_20764)?(G__20448_20766[(1)]):((G__20457)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__20455_20770 = (cljs.core.truth_(G__20460_20765)?(G__20449_20767[(0)]):((G__20458)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__20456_20771 = (cljs.core.truth_(G__20460_20765)?(G__20449_20767[(1)]):((G__20458)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__20450[(0)] = ((G__20451 * G__20453_20768) * G__20455_20770));

(G__20450[(1)] = ((G__20452 * G__20454_20769) * G__20456_20771));
}

return (new thi.ng.geom.core.vector.Vec2(G__20450,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__20148__auto__ = (new Float32Array((2)));
var G__20461_20772 = self__.buf;
(dest__20148__auto__[(0)] = (- (G__20461_20772[(0)])));

(dest__20148__auto__[(1)] = (- (G__20461_20772[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__20148__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__20174__auto__ = (new Float32Array((2)));
var G__20462_20773 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__20463_20774 = v.buf;
(dest__20174__auto__[(0)] = ((G__20462_20773[(0)]) - (G__20463_20774[(0)])));

(dest__20174__auto__[(1)] = ((G__20462_20773[(1)]) - (G__20463_20774[(1)])));
} else {
if(typeof v === 'number'){
(dest__20174__auto__[(0)] = ((G__20462_20773[(0)]) - v));

(dest__20174__auto__[(1)] = ((G__20462_20773[(1)]) - v));
} else {
(dest__20174__auto__[(0)] = ((G__20462_20773[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__20174__auto__[(1)] = ((G__20462_20773[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__20174__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__20464 = self__.buf;
var G__20467 = (new Float32Array((2)));
var G__20468 = (G__20464[(0)]);
var G__20469 = (G__20464[(1)]);
var G__20474 = typeof v1 === 'number';
var G__20475 = typeof v2 === 'number';
if(((G__20474)?G__20475:false)){
(G__20467[(0)] = (G__20468 - v1));

(G__20467[(1)] = (G__20469 - v2));
} else {
var G__20476_20775 = ((!(G__20474))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20477_20776 = ((!(G__20475))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20465_20777 = (cljs.core.truth_(G__20476_20775)?v1.buf:null);
var G__20466_20778 = (cljs.core.truth_(G__20477_20776)?v2.buf:null);
var G__20470_20779 = (cljs.core.truth_(G__20476_20775)?(G__20465_20777[(0)]):((G__20474)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__20471_20780 = (cljs.core.truth_(G__20476_20775)?(G__20465_20777[(1)]):((G__20474)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__20472_20781 = (cljs.core.truth_(G__20477_20776)?(G__20466_20778[(0)]):((G__20475)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__20473_20782 = (cljs.core.truth_(G__20477_20776)?(G__20466_20778[(1)]):((G__20475)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__20467[(0)] = ((G__20468 - G__20470_20779) - G__20472_20781));

(G__20467[(1)] = ((G__20469 - G__20471_20780) - G__20473_20782));
}

return (new thi.ng.geom.core.vector.Vec2(G__20467,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__20185__auto__ = (new Float32Array((2)));
var G__20487_20783 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__20488_20784 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__20489_20785 = ((!(G__20487_20783))?typeof a === 'number':null);
var G__20490_20786 = ((!(G__20488_20784))?typeof b === 'number':null);
var G__20478_20787 = self__.buf;
var G__20479_20788 = ((G__20487_20783)?a.buf:null);
var G__20480_20789 = ((G__20488_20784)?b.buf:null);
var G__20481_20790 = (G__20478_20787[(0)]);
var G__20482_20791 = (G__20478_20787[(1)]);
var G__20483_20792 = ((G__20487_20783)?(G__20479_20788[(0)]):(cljs.core.truth_(G__20489_20785)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__20484_20793 = ((G__20487_20783)?(G__20479_20788[(1)]):(cljs.core.truth_(G__20489_20785)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__20485_20794 = ((G__20488_20784)?(G__20480_20789[(0)]):(cljs.core.truth_(G__20490_20786)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__20486_20795 = ((G__20488_20784)?(G__20480_20789[(1)]):(cljs.core.truth_(G__20490_20786)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__20185__auto__[(0)] = ((G__20481_20790 * G__20483_20792) + G__20485_20794));

(dest__20185__auto__[(1)] = ((G__20482_20791 * G__20484_20793) + G__20486_20795));

return (new thi.ng.geom.core.vector.Vec2(dest__20185__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__20185__auto__ = (new Float32Array((2)));
var G__20500_20796 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__20501_20797 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__20502_20798 = ((!(G__20500_20796))?typeof a === 'number':null);
var G__20503_20799 = ((!(G__20501_20797))?typeof b === 'number':null);
var G__20491_20800 = self__.buf;
var G__20492_20801 = ((G__20500_20796)?a.buf:null);
var G__20493_20802 = ((G__20501_20797)?b.buf:null);
var G__20494_20803 = (G__20491_20800[(0)]);
var G__20495_20804 = (G__20491_20800[(1)]);
var G__20496_20805 = ((G__20500_20796)?(G__20492_20801[(0)]):(cljs.core.truth_(G__20502_20798)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__20497_20806 = ((G__20500_20796)?(G__20492_20801[(1)]):(cljs.core.truth_(G__20502_20798)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__20498_20807 = ((G__20501_20797)?(G__20493_20802[(0)]):(cljs.core.truth_(G__20503_20799)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__20499_20808 = ((G__20501_20797)?(G__20493_20802[(1)]):(cljs.core.truth_(G__20503_20799)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__20185__auto__[(0)] = ((G__20494_20803 + G__20496_20805) * G__20498_20807));

(dest__20185__auto__[(1)] = ((G__20495_20804 + G__20497_20806) * G__20499_20808));

return (new thi.ng.geom.core.vector.Vec2(dest__20185__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__20148__auto__ = (new Float32Array((2)));
var G__20504_20809 = self__.buf;
(dest__20148__auto__[(0)] = ((1) / (G__20504_20809[(0)])));

(dest__20148__auto__[(1)] = ((1) / (G__20504_20809[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__20148__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__20174__auto__ = (new Float32Array((2)));
var G__20505_20810 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__20506_20811 = v.buf;
(dest__20174__auto__[(0)] = ((G__20505_20810[(0)]) / (G__20506_20811[(0)])));

(dest__20174__auto__[(1)] = ((G__20505_20810[(1)]) / (G__20506_20811[(1)])));
} else {
if(typeof v === 'number'){
(dest__20174__auto__[(0)] = ((G__20505_20810[(0)]) / v));

(dest__20174__auto__[(1)] = ((G__20505_20810[(1)]) / v));
} else {
(dest__20174__auto__[(0)] = ((G__20505_20810[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__20174__auto__[(1)] = ((G__20505_20810[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__20174__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__20507 = self__.buf;
var G__20510 = (new Float32Array((2)));
var G__20511 = (G__20507[(0)]);
var G__20512 = (G__20507[(1)]);
var G__20517 = typeof v1 === 'number';
var G__20518 = typeof v2 === 'number';
if(((G__20517)?G__20518:false)){
(G__20510[(0)] = (G__20511 / v1));

(G__20510[(1)] = (G__20512 / v2));
} else {
var G__20519_20812 = ((!(G__20517))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20520_20813 = ((!(G__20518))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20508_20814 = (cljs.core.truth_(G__20519_20812)?v1.buf:null);
var G__20509_20815 = (cljs.core.truth_(G__20520_20813)?v2.buf:null);
var G__20513_20816 = (cljs.core.truth_(G__20519_20812)?(G__20508_20814[(0)]):((G__20517)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__20514_20817 = (cljs.core.truth_(G__20519_20812)?(G__20508_20814[(1)]):((G__20517)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__20515_20818 = (cljs.core.truth_(G__20520_20813)?(G__20509_20815[(0)]):((G__20518)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__20516_20819 = (cljs.core.truth_(G__20520_20813)?(G__20509_20815[(1)]):((G__20518)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__20510[(0)] = ((G__20511 / G__20513_20816) / G__20515_20818));

(G__20510[(1)] = ((G__20512 / G__20514_20817) / G__20516_20819));
}

return (new thi.ng.geom.core.vector.Vec2(G__20510,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__20174__auto__ = (new Float32Array((2)));
var G__20521_20820 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__20522_20821 = v.buf;
(dest__20174__auto__[(0)] = ((G__20521_20820[(0)]) + (G__20522_20821[(0)])));

(dest__20174__auto__[(1)] = ((G__20521_20820[(1)]) + (G__20522_20821[(1)])));
} else {
if(typeof v === 'number'){
(dest__20174__auto__[(0)] = ((G__20521_20820[(0)]) + v));

(dest__20174__auto__[(1)] = ((G__20521_20820[(1)]) + v));
} else {
(dest__20174__auto__[(0)] = ((G__20521_20820[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__20174__auto__[(1)] = ((G__20521_20820[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__20174__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__20523 = self__.buf;
var G__20526 = (new Float32Array((2)));
var G__20527 = (G__20523[(0)]);
var G__20528 = (G__20523[(1)]);
var G__20533 = typeof v1 === 'number';
var G__20534 = typeof v2 === 'number';
if(((G__20533)?G__20534:false)){
(G__20526[(0)] = (G__20527 + v1));

(G__20526[(1)] = (G__20528 + v2));
} else {
var G__20535_20822 = ((!(G__20533))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20536_20823 = ((!(G__20534))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20524_20824 = (cljs.core.truth_(G__20535_20822)?v1.buf:null);
var G__20525_20825 = (cljs.core.truth_(G__20536_20823)?v2.buf:null);
var G__20529_20826 = (cljs.core.truth_(G__20535_20822)?(G__20524_20824[(0)]):((G__20533)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__20530_20827 = (cljs.core.truth_(G__20535_20822)?(G__20524_20824[(1)]):((G__20533)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__20531_20828 = (cljs.core.truth_(G__20536_20823)?(G__20525_20825[(0)]):((G__20534)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__20532_20829 = (cljs.core.truth_(G__20536_20823)?(G__20525_20825[(1)]):((G__20534)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__20526[(0)] = ((G__20527 + G__20529_20826) + G__20531_20828));

(G__20526[(1)] = ((G__20528 + G__20530_20827) + G__20532_20829));
}

return (new thi.ng.geom.core.vector.Vec2(G__20526,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__20148__auto__ = (new Float32Array((2)));
var G__20537_20830 = self__.buf;
(dest__20148__auto__[(0)] = thi.ng.math.core.abs.call(null,(G__20537_20830[(0)])));

(dest__20148__auto__[(1)] = thi.ng.math.core.abs.call(null,(G__20537_20830[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__20148__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__20185__auto__ = (new Float32Array((2)));
var G__20547_20831 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__20548_20832 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__20549_20833 = ((!(G__20547_20831))?typeof a === 'number':null);
var G__20550_20834 = ((!(G__20548_20832))?typeof b === 'number':null);
var G__20538_20835 = self__.buf;
var G__20539_20836 = ((G__20547_20831)?a.buf:null);
var G__20540_20837 = ((G__20548_20832)?b.buf:null);
var G__20541_20838 = (G__20538_20835[(0)]);
var G__20542_20839 = (G__20538_20835[(1)]);
var G__20543_20840 = ((G__20547_20831)?(G__20539_20836[(0)]):(cljs.core.truth_(G__20549_20833)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__20544_20841 = ((G__20547_20831)?(G__20539_20836[(1)]):(cljs.core.truth_(G__20549_20833)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__20545_20842 = ((G__20548_20832)?(G__20540_20837[(0)]):(cljs.core.truth_(G__20550_20834)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__20546_20843 = ((G__20548_20832)?(G__20540_20837[(1)]):(cljs.core.truth_(G__20550_20834)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__20185__auto__[(0)] = ((G__20541_20838 - G__20543_20840) * G__20545_20842));

(dest__20185__auto__[(1)] = ((G__20542_20839 - G__20544_20841) * G__20546_20843));

return (new thi.ng.geom.core.vector.Vec2(dest__20185__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormal$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormal$normal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (- (self__.buf[(1)])));

(b[(1)] = (self__.buf[(0)]));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),null);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__20174__auto__ = (new Float32Array((2)));
var G__20551_20844 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__20552_20845 = v.buf;
(dest__20174__auto__[(0)] = ((G__20551_20844[(0)]) + (G__20552_20845[(0)])));

(dest__20174__auto__[(1)] = ((G__20551_20844[(1)]) + (G__20552_20845[(1)])));
} else {
if(typeof v === 'number'){
(dest__20174__auto__[(0)] = ((G__20551_20844[(0)]) + v));

(dest__20174__auto__[(1)] = ((G__20551_20844[(1)]) + v));
} else {
(dest__20174__auto__[(0)] = ((G__20551_20844[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__20174__auto__[(1)] = ((G__20551_20844[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__20174__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__20553 = self__.buf;
var G__20556 = (new Float32Array((2)));
var G__20557 = (G__20553[(0)]);
var G__20558 = (G__20553[(1)]);
var G__20563 = typeof v1 === 'number';
var G__20564 = typeof v2 === 'number';
if(((G__20563)?G__20564:false)){
(G__20556[(0)] = (G__20557 + v1));

(G__20556[(1)] = (G__20558 + v2));
} else {
var G__20565_20846 = ((!(G__20563))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20566_20847 = ((!(G__20564))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20554_20848 = (cljs.core.truth_(G__20565_20846)?v1.buf:null);
var G__20555_20849 = (cljs.core.truth_(G__20566_20847)?v2.buf:null);
var G__20559_20850 = (cljs.core.truth_(G__20565_20846)?(G__20554_20848[(0)]):((G__20563)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__20560_20851 = (cljs.core.truth_(G__20565_20846)?(G__20554_20848[(1)]):((G__20563)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__20561_20852 = (cljs.core.truth_(G__20566_20847)?(G__20555_20849[(0)]):((G__20564)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__20562_20853 = (cljs.core.truth_(G__20566_20847)?(G__20555_20849[(1)]):((G__20564)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__20556[(0)] = ((G__20557 + G__20559_20850) + G__20561_20852));

(G__20556[(1)] = ((G__20558 + G__20560_20851) + G__20562_20853));
}

return (new thi.ng.geom.core.vector.Vec2(G__20556,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k < (2)));
} else {
if(cljs.core.truth_(thi.ng.geom.core.vector.swizzle2_fns.call(null,k))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if(((k === (0))) || ((k === (1)))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
if((k === (2))){
return cljs.core.conj.call(null,___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",-789527183),k)){
return cljs.core.conj.call(null,___$1,v);
} else {
return (new thi.ng.geom.core.vector.Vec2(thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,self__.buf,(new Float32Array(self__.buf)),new cljs.core.PersistentArrayMap(null, 2, ["x",(0),"y",(1)], null),k,v),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__20174__auto__ = (new Float32Array((2)));
var G__20567_20854 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__20568_20855 = v.buf;
(dest__20174__auto__[(0)] = ((G__20567_20854[(0)]) * (G__20568_20855[(0)])));

(dest__20174__auto__[(1)] = ((G__20567_20854[(1)]) * (G__20568_20855[(1)])));
} else {
if(typeof v === 'number'){
(dest__20174__auto__[(0)] = ((G__20567_20854[(0)]) * v));

(dest__20174__auto__[(1)] = ((G__20567_20854[(1)]) * v));
} else {
(dest__20174__auto__[(0)] = ((G__20567_20854[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__20174__auto__[(1)] = ((G__20567_20854[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__20174__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__20569 = self__.buf;
var G__20572 = (new Float32Array((2)));
var G__20573 = (G__20569[(0)]);
var G__20574 = (G__20569[(1)]);
var G__20579 = typeof v1 === 'number';
var G__20580 = typeof v2 === 'number';
if(((G__20579)?G__20580:false)){
(G__20572[(0)] = (G__20573 * v1));

(G__20572[(1)] = (G__20574 * v2));
} else {
var G__20581_20856 = ((!(G__20579))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20582_20857 = ((!(G__20580))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__20570_20858 = (cljs.core.truth_(G__20581_20856)?v1.buf:null);
var G__20571_20859 = (cljs.core.truth_(G__20582_20857)?v2.buf:null);
var G__20575_20860 = (cljs.core.truth_(G__20581_20856)?(G__20570_20858[(0)]):((G__20579)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__20576_20861 = (cljs.core.truth_(G__20581_20856)?(G__20570_20858[(1)]):((G__20579)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__20577_20862 = (cljs.core.truth_(G__20582_20857)?(G__20571_20859[(0)]):((G__20580)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__20578_20863 = (cljs.core.truth_(G__20582_20857)?(G__20571_20859[(1)]):((G__20580)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__20572[(0)] = ((G__20573 * G__20575_20860) * G__20577_20862));

(G__20572[(1)] = ((G__20574 * G__20576_20861) * G__20578_20863));
}

return (new thi.ng.geom.core.vector.Vec2(G__20572,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,thi.ng.geom.core.vector.vec3.call(null,(self__.buf[(0)]),(self__.buf[(1)]),x),self__._meta);
});

thi.ng.geom.core.vector.Vec2.prototype.call = (function() {
var G__20864 = null;
var G__20864__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
var G__20864__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__20864 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__20864__2.call(this,self__,k);
case 3:
return G__20864__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20864.cljs$core$IFn$_invoke$arity$2 = G__20864__2;
G__20864.cljs$core$IFn$_invoke$arity$3 = G__20864__3;
return G__20864;
})()
;

thi.ng.geom.core.vector.Vec2.prototype.apply = (function (self__,args20299){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20299)));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__20174__auto__ = (new Float32Array((2)));
var G__20583_20865 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__20584_20866 = v.buf;
(dest__20174__auto__[(0)] = (function (){var a__19848__auto__ = (G__20583_20865[(0)]);
var b__19849__auto__ = (G__20584_20866[(0)]);
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());

(dest__20174__auto__[(1)] = (function (){var a__19848__auto__ = (G__20583_20865[(1)]);
var b__19849__auto__ = (G__20584_20866[(1)]);
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__20174__auto__[(0)] = (function (){var a__19848__auto__ = (G__20583_20865[(0)]);
var b__19849__auto__ = v;
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());

(dest__20174__auto__[(1)] = (function (){var a__19848__auto__ = (G__20583_20865[(1)]);
var b__19849__auto__ = v;
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());
} else {
(dest__20174__auto__[(0)] = (function (){var a__19848__auto__ = (G__20583_20865[(0)]);
var b__19849__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());

(dest__20174__auto__[(1)] = (function (){var a__19848__auto__ = (G__20583_20865[(1)]);
var b__19849__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__20174__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__20185__auto__ = (new Float32Array((2)));
var G__20594_20867 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__20595_20868 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__20596_20869 = ((!(G__20594_20867))?typeof v === 'number':null);
var G__20597_20870 = ((!(G__20595_20868))?typeof v2 === 'number':null);
var G__20585_20871 = self__.buf;
var G__20586_20872 = ((G__20594_20867)?v.buf:null);
var G__20587_20873 = ((G__20595_20868)?v2.buf:null);
var G__20588_20874 = (G__20585_20871[(0)]);
var G__20589_20875 = (G__20585_20871[(1)]);
var G__20590_20876 = ((G__20594_20867)?(G__20586_20872[(0)]):(cljs.core.truth_(G__20596_20869)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__20591_20877 = ((G__20594_20867)?(G__20586_20872[(1)]):(cljs.core.truth_(G__20596_20869)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__20592_20878 = ((G__20595_20868)?(G__20587_20873[(0)]):(cljs.core.truth_(G__20597_20870)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__20593_20879 = ((G__20595_20868)?(G__20587_20873[(1)]):(cljs.core.truth_(G__20597_20870)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__20185__auto__[(0)] = (function (){var a__19848__auto__ = (function (){var a__19848__auto__ = G__20588_20874;
var b__19849__auto__ = G__20590_20876;
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})();
var b__19849__auto__ = G__20592_20878;
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());

(dest__20185__auto__[(1)] = (function (){var a__19848__auto__ = (function (){var a__19848__auto__ = G__20589_20875;
var b__19849__auto__ = G__20591_20877;
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})();
var b__19849__auto__ = G__20593_20879;
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__20185__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__20174__auto__ = (new Float32Array((2)));
var G__20598_20880 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__20599_20881 = v.buf;
(dest__20174__auto__[(0)] = (function (){var a__19855__auto__ = (G__20598_20880[(0)]);
var b__19856__auto__ = (G__20599_20881[(0)]);
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());

(dest__20174__auto__[(1)] = (function (){var a__19855__auto__ = (G__20598_20880[(1)]);
var b__19856__auto__ = (G__20599_20881[(1)]);
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__20174__auto__[(0)] = (function (){var a__19855__auto__ = (G__20598_20880[(0)]);
var b__19856__auto__ = v;
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());

(dest__20174__auto__[(1)] = (function (){var a__19855__auto__ = (G__20598_20880[(1)]);
var b__19856__auto__ = v;
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());
} else {
(dest__20174__auto__[(0)] = (function (){var a__19855__auto__ = (G__20598_20880[(0)]);
var b__19856__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());

(dest__20174__auto__[(1)] = (function (){var a__19855__auto__ = (G__20598_20880[(1)]);
var b__19856__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__20174__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__20185__auto__ = (new Float32Array((2)));
var G__20609_20882 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__20610_20883 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__20611_20884 = ((!(G__20609_20882))?typeof v === 'number':null);
var G__20612_20885 = ((!(G__20610_20883))?typeof v2 === 'number':null);
var G__20600_20886 = self__.buf;
var G__20601_20887 = ((G__20609_20882)?v.buf:null);
var G__20602_20888 = ((G__20610_20883)?v2.buf:null);
var G__20603_20889 = (G__20600_20886[(0)]);
var G__20604_20890 = (G__20600_20886[(1)]);
var G__20605_20891 = ((G__20609_20882)?(G__20601_20887[(0)]):(cljs.core.truth_(G__20611_20884)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__20606_20892 = ((G__20609_20882)?(G__20601_20887[(1)]):(cljs.core.truth_(G__20611_20884)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__20607_20893 = ((G__20610_20883)?(G__20602_20888[(0)]):(cljs.core.truth_(G__20612_20885)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__20608_20894 = ((G__20610_20883)?(G__20602_20888[(1)]):(cljs.core.truth_(G__20612_20885)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__20185__auto__[(0)] = (function (){var a__19855__auto__ = (function (){var a__19855__auto__ = G__20603_20889;
var b__19856__auto__ = G__20605_20891;
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})();
var b__19856__auto__ = G__20607_20893;
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());

(dest__20185__auto__[(1)] = (function (){var a__19855__auto__ = (function (){var a__19855__auto__ = G__20604_20890;
var b__19856__auto__ = G__20606_20892;
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})();
var b__19856__auto__ = G__20608_20894;
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__20185__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare.call(null,(self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
return cljs.core.compare.call(null,(self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
} else {
return c;
}
} else {
var c = cljs.core.count.call(null,o);
if(((2) === c)){
return (- cljs.core.compare.call(null,o,___$1));
} else {
return ((2) - c);
}
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.core.vector.Vec2(thi.ng.geom.core.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs),null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
thi.ng.geom.core.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs);

(buf_SINGLEQUOTE_[(0)] = f2.call(null,(buf_SINGLEQUOTE_[(0)]),(0)));

(buf_SINGLEQUOTE_[(1)] = f2.call(null,(buf_SINGLEQUOTE_[(1)]),(1)));

return (new thi.ng.geom.core.vector.Vec2(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$math$core$PDeltaEquals$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,___$1,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_.call(null,v)){
if(((2) === cljs.core.count.call(null,v))){
var G__20613 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__20614 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__20613[(0)]),(G__20614[(0)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__20613[(1)]),(G__20614[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__20613[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__20613[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps);
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__20615 = self__.buf;
var G__20616 = (G__20615[(0)]);
var G__20617 = (G__20615[(1)]);
return Math.sqrt(((G__20616 * G__20616) + (G__20617 * G__20617)));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__20618 = self__.buf;
var G__20619 = (G__20618[(0)]);
var G__20620 = (G__20618[(1)]);
return ((G__20619 * G__20619) + (G__20620 * G__20620));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__20621_20895 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__20622_20896 = v.buf;
(b[(0)] = (((G__20621_20895[(0)]) + (G__20622_20896[(0)])) * 0.5));

(b[(1)] = (((G__20621_20895[(1)]) + (G__20622_20896[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__20621_20895[(0)]) + v) * 0.5));

(b[(1)] = (((G__20621_20895[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__20621_20895[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__20621_20895[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__20632_20897 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__20633_20898 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__20634_20899 = ((!(G__20632_20897))?typeof v === 'number':null);
var G__20635_20900 = ((!(G__20633_20898))?typeof v2 === 'number':null);
var G__20623_20901 = self__.buf;
var G__20624_20902 = ((G__20632_20897)?v.buf:null);
var G__20625_20903 = ((G__20633_20898)?v2.buf:null);
var G__20626_20904 = (G__20623_20901[(0)]);
var G__20627_20905 = (G__20623_20901[(1)]);
var G__20628_20906 = ((G__20632_20897)?(G__20624_20902[(0)]):(cljs.core.truth_(G__20634_20899)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__20629_20907 = ((G__20632_20897)?(G__20624_20902[(1)]):(cljs.core.truth_(G__20634_20899)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__20630_20908 = ((G__20633_20898)?(G__20625_20903[(0)]):(cljs.core.truth_(G__20635_20900)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__20631_20909 = ((G__20633_20898)?(G__20625_20903[(1)]):(cljs.core.truth_(G__20635_20900)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(b[(0)] = (((G__20628_20906 - G__20626_20904) * G__20630_20908) + G__20626_20904));

(b[(1)] = (((G__20629_20907 - G__20627_20905) * G__20631_20909) + G__20627_20905));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((2)));
var dv_QMARK_ = (d instanceof thi.ng.geom.core.vector.Vec2);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(1),0.0)));
var G__20645_20910 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__20646_20911 = (c instanceof thi.ng.geom.core.vector.Vec2);
var G__20647_20912 = ((!(G__20645_20910))?typeof b === 'number':null);
var G__20648_20913 = ((!(G__20646_20911))?typeof c === 'number':null);
var G__20636_20914 = self__.buf;
var G__20637_20915 = ((G__20645_20910)?b.buf:null);
var G__20638_20916 = ((G__20646_20911)?c.buf:null);
var G__20639_20917 = (G__20636_20914[(0)]);
var G__20640_20918 = (G__20636_20914[(1)]);
var G__20641_20919 = ((G__20645_20910)?(G__20637_20915[(0)]):(cljs.core.truth_(G__20647_20912)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__20642_20920 = ((G__20645_20910)?(G__20637_20915[(1)]):(cljs.core.truth_(G__20647_20912)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__20643_20921 = ((G__20646_20911)?(G__20638_20916[(0)]):(cljs.core.truth_(G__20648_20913)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__20644_20922 = ((G__20646_20911)?(G__20638_20916[(1)]):(cljs.core.truth_(G__20648_20913)?c:cljs.core.nth.call(null,c,(1),0.0)));
var x1_20923 = (((G__20641_20919 - G__20639_20917) * u) + G__20639_20917);
var y1_20924 = (((G__20642_20920 - G__20640_20918) * u) + G__20640_20918);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__20643_20921) * u) + G__20643_20921) - x1_20923) * v) + x1_20923));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__20644_20922) * u) + G__20644_20922) - y1_20924) * v) + y1_20924));

return (new thi.ng.geom.core.vector.Vec2(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PLimit$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PLimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.geom.core.mag_squared.call(null,___$1) > (len * len))){
return thi.ng.geom.core.normalize.call(null,___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$ = true;

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = thi.ng.geom.core.mag.call(null,___$1));

(b[(1)] = thi.ng.geom.core.heading.call(null,___$1));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__20319 = self__.buf;
var G__20320 = (G__20319[(0)]);
var G__20321 = (G__20319[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__20320 * Math.cos(G__20321)));

(b[(1)] = (G__20320 * Math.sin(G__20321)));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.core.vector.Vec2.cljs$lang$type = true;

thi.ng.geom.core.vector.Vec2.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec2";

thi.ng.geom.core.vector.Vec2.cljs$lang$ctorPrWriter = (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"thi.ng.geom.core.vector/Vec2");
});

thi.ng.geom.core.vector.__GT_Vec2 = (function thi$ng$geom$core$vector$__GT_Vec2(buf,_hash,_meta){
return (new thi.ng.geom.core.vector.Vec2(buf,_hash,_meta));
});


/**
* @constructor
 * @implements {thi.ng.geom.core.PScale}
 * @implements {thi.ng.geom.core.PHeading}
 * @implements {thi.ng.geom.core.PMagnitude}
 * @implements {cljs.core.IIndexed}
 * @implements {thi.ng.geom.core.PDistance}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IReversible}
 * @implements {thi.ng.geom.core.vector.Object}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.geom.core.PMathOps}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.geom.core.PTranslate}
 * @implements {thi.ng.geom.core.PMinMax}
 * @implements {thi.ng.geom.core.PLimit}
 * @implements {thi.ng.geom.core.PVectorReduce}
 * @implements {thi.ng.geom.core.PPolar}
 * @implements {thi.ng.geom.core.PInterpolate}
 * @implements {thi.ng.geom.core.PTransform}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.geom.core.PRotate3D}
 * @implements {thi.ng.geom.core.PClear}
 * @implements {thi.ng.geom.core.PDotProduct}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.geom.core.PNormalize}
 * @implements {thi.ng.geom.core.PBuffered}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {thi.ng.geom.core.PRotate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.geom.core.PCrossProduct}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.geom.core.PReflect}
 * @implements {thi.ng.geom.core.PMutableMathOps}
 * @implements {thi.ng.math.core.PDeltaEquals}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.PInvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.core.vector.Vec3 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 166618075;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$get_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTransform$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.rotate_z.call(null,___$1,theta);
});

thi.ng.geom.core.vector.Vec3.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str((self__.buf[(0)])),cljs.core.str(" "),cljs.core.str((self__.buf[(1)])),cljs.core.str(" "),cljs.core.str((self__.buf[(2)])),cljs.core.str("]")].join('');
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDotProduct$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__20926 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__20927 = v.buf;
return ((((G__20926[(0)]) * (G__20927[(0)])) + ((G__20926[(1)]) * (G__20927[(1)]))) + ((G__20926[(2)]) * (G__20927[(2)])));
} else {
return ((((G__20926[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__20926[(1)]) * cljs.core.nth.call(null,v,(1),0.0))) + ((G__20926[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__20928 = self__.buf;
var G__20929 = (G__20928[(0)]);
var G__20930 = (G__20928[(1)]);
var G__20931 = (G__20928[(2)]);
var l = Math.sqrt((((G__20929 * G__20929) + (G__20930 * G__20930)) + (G__20931 * G__20931)));
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__20929 / l));

(b[(1)] = (G__20930 / l));

(b[(2)] = (G__20931 / l));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__20932 = self__.buf;
var G__20933 = (G__20932[(0)]);
var G__20934 = (G__20932[(1)]);
var G__20935 = (G__20932[(2)]);
var l = Math.sqrt((((G__20933 * G__20933) + (G__20934 * G__20934)) + (G__20935 * G__20935)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__20933 * l__$1));

(b[(1)] = (G__20934 * l__$1));

(b[(2)] = (G__20935 * l__$1));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.geom.core.mag_squared.call(null,___$1));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__20936 = self__.buf;
var G__20937 = (G__20936[(0)]);
var G__20938 = (G__20936[(1)]);
var G__20939 = (G__20936[(2)]);
(b[(0)] = G__20937);

(b[(1)] = ((G__20938 * c) - (G__20939 * s)));

(b[(2)] = ((G__20938 * s) + (G__20939 * c)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__20940 = self__.buf;
var G__20941 = (G__20940[(0)]);
var G__20942 = (G__20940[(1)]);
var G__20943 = (G__20940[(2)]);
(b[(0)] = ((G__20941 * c) + (G__20943 * s)));

(b[(1)] = G__20942);

(b[(2)] = ((G__20943 * c) - (G__20941 * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__20944 = self__.buf;
var G__20945 = (G__20944[(0)]);
var G__20946 = (G__20944[(1)]);
var G__20947 = (G__20944[(2)]);
(b[(0)] = ((G__20945 * c) - (G__20946 * s)));

(b[(1)] = ((G__20945 * s) + (G__20946 * c)));

(b[(2)] = G__20947);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__20948 = self__.buf;
var G__20950 = (G__20948[(0)]);
var G__20951 = (G__20948[(1)]);
var G__20952 = (G__20948[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__20949 = v.buf;
var G__20953 = (G__20949[(0)]);
var G__20954 = (G__20949[(1)]);
var G__20955 = (G__20949[(2)]);
var ux_SINGLEQUOTE_ = (G__20953 * G__20950);
var uy_SINGLEQUOTE_ = (G__20953 * G__20951);
var uz_SINGLEQUOTE_ = (G__20953 * G__20952);
var vx_SINGLEQUOTE_ = (G__20954 * G__20950);
var vy_SINGLEQUOTE_ = (G__20954 * G__20951);
var vz_SINGLEQUOTE_ = (G__20954 * G__20952);
var wx_SINGLEQUOTE_ = (G__20955 * G__20950);
var wy_SINGLEQUOTE_ = (G__20955 * G__20951);
var wz_SINGLEQUOTE_ = (G__20955 * G__20952);
var vx2 = (G__20953 * G__20953);
var vy2 = (G__20954 * G__20954);
var vz2 = (G__20955 * G__20955);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__20953) + ((((vy2 + vz2) * G__20950) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__20953)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__20954) + ((((vx2 + vz2) * G__20951) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__20954)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__20955) + ((((vx2 + vy2) * G__20952) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__20955)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__20953 = cljs.core.nth.call(null,v,(0),0.0);
var G__20954 = cljs.core.nth.call(null,v,(1),0.0);
var G__20955 = cljs.core.nth.call(null,v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__20953 * G__20950);
var uy_SINGLEQUOTE_ = (G__20953 * G__20951);
var uz_SINGLEQUOTE_ = (G__20953 * G__20952);
var vx_SINGLEQUOTE_ = (G__20954 * G__20950);
var vy_SINGLEQUOTE_ = (G__20954 * G__20951);
var vz_SINGLEQUOTE_ = (G__20954 * G__20952);
var wx_SINGLEQUOTE_ = (G__20955 * G__20950);
var wy_SINGLEQUOTE_ = (G__20955 * G__20951);
var wz_SINGLEQUOTE_ = (G__20955 * G__20952);
var vx2 = (G__20953 * G__20953);
var vy2 = (G__20954 * G__20954);
var vz2 = (G__20955 * G__20955);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__20953) + ((((vy2 + vz2) * G__20950) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__20953)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__20954) + ((((vx2 + vz2) * G__20951) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__20954)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__20955) + ((((vx2 + vy2) * G__20952) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__20955)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array((3))),null,null));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

(self__.buf[(2)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PReflect$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__20956 = self__.buf;
var G__20958 = (G__20956[(0)]);
var G__20959 = (G__20956[(1)]);
var G__20960 = (G__20956[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__20957 = v.buf;
var G__20961 = (G__20957[(0)]);
var G__20962 = (G__20957[(1)]);
var G__20963 = (G__20957[(2)]);
var d = ((((G__20958 * G__20961) + (G__20959 * G__20962)) + (G__20960 * G__20963)) * 2.0);
(b[(0)] = ((G__20961 * d) - G__20958));

(b[(1)] = ((G__20962 * d) - G__20959));

(b[(2)] = ((G__20963 * d) - G__20960));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__20961 = cljs.core.nth.call(null,v,(0),0.0);
var G__20962 = cljs.core.nth.call(null,v,(1),0.0);
var G__20963 = cljs.core.nth.call(null,v,(2),0.0);
var d = ((((G__20958 * G__20961) + (G__20959 * G__20962)) + (G__20960 * G__20963)) * 2.0);
(b[(0)] = ((G__20961 * d) - G__20958));

(b[(1)] = ((G__20962 * d) - G__20959));

(b[(2)] = ((G__20963 * d) - G__20960));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__20964_21377 = self__.buf;
var G__20966_21378 = (G__20964_21377[(0)]);
var G__20967_21379 = (G__20964_21377[(1)]);
var G__20968_21380 = (G__20964_21377[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__20965_21381 = v.buf;
var G__20969_21382 = (G__20965_21381[(0)]);
var G__20970_21383 = (G__20965_21381[(1)]);
var G__20971_21384 = (G__20965_21381[(2)]);
(b[(0)] = ((G__20967_21379 * G__20971_21384) - (G__20970_21383 * G__20968_21380)));

(b[(1)] = ((G__20968_21380 * G__20969_21382) - (G__20971_21384 * G__20966_21378)));

(b[(2)] = ((G__20966_21378 * G__20970_21383) - (G__20969_21382 * G__20967_21379)));
} else {
var G__20969_21385 = cljs.core.nth.call(null,v,(0),0.0);
var G__20970_21386 = cljs.core.nth.call(null,v,(1),0.0);
var G__20971_21387 = cljs.core.nth.call(null,v,(2),0.0);
(b[(0)] = ((G__20967_21379 * G__20971_21387) - (G__20970_21386 * G__20968_21380)));

(b[(1)] = ((G__20968_21380 * G__20969_21385) - (G__20971_21387 * G__20966_21378)));

(b[(2)] = ((G__20966_21378 * G__20970_21386) - (G__20969_21385 * G__20967_21379)));
}

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,n);
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),cljs.core.cons.call(null,(self__.buf[(2)]),null));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (3);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(2)]);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (self__.buf[(0)]));

(b[(1)] = (self__.buf[(1)]));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

(self__.buf[(2)] = (- (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__20972_21388 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__20973_21389 = v.buf;
(self__.buf[(0)] = ((G__20972_21388[(0)]) - (G__20973_21389[(0)])));

(self__.buf[(1)] = ((G__20972_21388[(1)]) - (G__20973_21389[(1)])));

(self__.buf[(2)] = ((G__20972_21388[(2)]) - (G__20973_21389[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__20972_21388[(0)]) - v));

(self__.buf[(1)] = ((G__20972_21388[(1)]) - v));

(self__.buf[(2)] = ((G__20972_21388[(2)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__20972_21388[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__20972_21388[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__20972_21388[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__20986_21390 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__20987_21391 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__20988_21392 = ((!(G__20986_21390))?typeof v1 === 'number':null);
var G__20989_21393 = ((!(G__20987_21391))?typeof v2 === 'number':null);
var G__20974_21394 = self__.buf;
var G__20975_21395 = ((G__20986_21390)?v1.buf:null);
var G__20976_21396 = ((G__20987_21391)?v2.buf:null);
var G__20977_21397 = (G__20974_21394[(0)]);
var G__20978_21398 = (G__20974_21394[(1)]);
var G__20979_21399 = (G__20974_21394[(2)]);
var G__20980_21400 = ((G__20986_21390)?(G__20975_21395[(0)]):(cljs.core.truth_(G__20988_21392)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__20981_21401 = ((G__20986_21390)?(G__20975_21395[(1)]):(cljs.core.truth_(G__20988_21392)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__20982_21402 = ((G__20986_21390)?(G__20975_21395[(2)]):(cljs.core.truth_(G__20988_21392)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__20983_21403 = ((G__20987_21391)?(G__20976_21396[(0)]):(cljs.core.truth_(G__20989_21393)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__20984_21404 = ((G__20987_21391)?(G__20976_21396[(1)]):(cljs.core.truth_(G__20989_21393)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__20985_21405 = ((G__20987_21391)?(G__20976_21396[(2)]):(cljs.core.truth_(G__20989_21393)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__20977_21397 - G__20980_21400) - G__20983_21403));

(self__.buf[(1)] = ((G__20978_21398 - G__20981_21401) - G__20984_21404));

(self__.buf[(2)] = ((G__20979_21399 - G__20982_21402) - G__20985_21405));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) - x));

(self__.buf[(1)] = ((self__.buf[(1)]) - y));

(self__.buf[(2)] = ((self__.buf[(2)]) - z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__20990_21406 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__20991_21407 = v.buf;
(self__.buf[(0)] = ((G__20990_21406[(0)]) * (G__20991_21407[(0)])));

(self__.buf[(1)] = ((G__20990_21406[(1)]) * (G__20991_21407[(1)])));

(self__.buf[(2)] = ((G__20990_21406[(2)]) * (G__20991_21407[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__20990_21406[(0)]) * v));

(self__.buf[(1)] = ((G__20990_21406[(1)]) * v));

(self__.buf[(2)] = ((G__20990_21406[(2)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__20990_21406[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__20990_21406[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__20990_21406[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__21004_21408 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__21005_21409 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__21006_21410 = ((!(G__21004_21408))?typeof v1 === 'number':null);
var G__21007_21411 = ((!(G__21005_21409))?typeof v2 === 'number':null);
var G__20992_21412 = self__.buf;
var G__20993_21413 = ((G__21004_21408)?v1.buf:null);
var G__20994_21414 = ((G__21005_21409)?v2.buf:null);
var G__20995_21415 = (G__20992_21412[(0)]);
var G__20996_21416 = (G__20992_21412[(1)]);
var G__20997_21417 = (G__20992_21412[(2)]);
var G__20998_21418 = ((G__21004_21408)?(G__20993_21413[(0)]):(cljs.core.truth_(G__21006_21410)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__20999_21419 = ((G__21004_21408)?(G__20993_21413[(1)]):(cljs.core.truth_(G__21006_21410)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__21000_21420 = ((G__21004_21408)?(G__20993_21413[(2)]):(cljs.core.truth_(G__21006_21410)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__21001_21421 = ((G__21005_21409)?(G__20994_21414[(0)]):(cljs.core.truth_(G__21007_21411)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__21002_21422 = ((G__21005_21409)?(G__20994_21414[(1)]):(cljs.core.truth_(G__21007_21411)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__21003_21423 = ((G__21005_21409)?(G__20994_21414[(2)]):(cljs.core.truth_(G__21007_21411)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__20995_21415 * G__20998_21418) * G__21001_21421));

(self__.buf[(1)] = ((G__20996_21416 * G__20999_21419) * G__21002_21422));

(self__.buf[(2)] = ((G__20997_21417 * G__21000_21420) * G__21003_21423));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) * x));

(self__.buf[(1)] = ((self__.buf[(1)]) * y));

(self__.buf[(2)] = ((self__.buf[(2)]) * z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__21020_21424 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__21021_21425 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__21022_21426 = ((!(G__21020_21424))?typeof a === 'number':null);
var G__21023_21427 = ((!(G__21021_21425))?typeof b === 'number':null);
var G__21008_21428 = self__.buf;
var G__21009_21429 = ((G__21020_21424)?a.buf:null);
var G__21010_21430 = ((G__21021_21425)?b.buf:null);
var G__21011_21431 = (G__21008_21428[(0)]);
var G__21012_21432 = (G__21008_21428[(1)]);
var G__21013_21433 = (G__21008_21428[(2)]);
var G__21014_21434 = ((G__21020_21424)?(G__21009_21429[(0)]):(cljs.core.truth_(G__21022_21426)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__21015_21435 = ((G__21020_21424)?(G__21009_21429[(1)]):(cljs.core.truth_(G__21022_21426)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__21016_21436 = ((G__21020_21424)?(G__21009_21429[(2)]):(cljs.core.truth_(G__21022_21426)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__21017_21437 = ((G__21021_21425)?(G__21010_21430[(0)]):(cljs.core.truth_(G__21023_21427)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__21018_21438 = ((G__21021_21425)?(G__21010_21430[(1)]):(cljs.core.truth_(G__21023_21427)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__21019_21439 = ((G__21021_21425)?(G__21010_21430[(2)]):(cljs.core.truth_(G__21023_21427)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__21011_21431 - G__21014_21434) * G__21017_21437));

(self__.buf[(1)] = ((G__21012_21432 - G__21015_21435) * G__21018_21438));

(self__.buf[(2)] = ((G__21013_21433 - G__21016_21436) * G__21019_21439));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__21036_21440 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__21037_21441 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__21038_21442 = ((!(G__21036_21440))?typeof a === 'number':null);
var G__21039_21443 = ((!(G__21037_21441))?typeof b === 'number':null);
var G__21024_21444 = self__.buf;
var G__21025_21445 = ((G__21036_21440)?a.buf:null);
var G__21026_21446 = ((G__21037_21441)?b.buf:null);
var G__21027_21447 = (G__21024_21444[(0)]);
var G__21028_21448 = (G__21024_21444[(1)]);
var G__21029_21449 = (G__21024_21444[(2)]);
var G__21030_21450 = ((G__21036_21440)?(G__21025_21445[(0)]):(cljs.core.truth_(G__21038_21442)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__21031_21451 = ((G__21036_21440)?(G__21025_21445[(1)]):(cljs.core.truth_(G__21038_21442)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__21032_21452 = ((G__21036_21440)?(G__21025_21445[(2)]):(cljs.core.truth_(G__21038_21442)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__21033_21453 = ((G__21037_21441)?(G__21026_21446[(0)]):(cljs.core.truth_(G__21039_21443)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__21034_21454 = ((G__21037_21441)?(G__21026_21446[(1)]):(cljs.core.truth_(G__21039_21443)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__21035_21455 = ((G__21037_21441)?(G__21026_21446[(2)]):(cljs.core.truth_(G__21039_21443)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__21027_21447 * G__21030_21450) - G__21033_21453));

(self__.buf[(1)] = ((G__21028_21448 * G__21031_21451) - G__21034_21454));

(self__.buf[(2)] = ((G__21029_21449 * G__21032_21452) - G__21035_21455));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = thi.ng.math.core.abs.call(null,(self__.buf[(0)])));

(self__.buf[(1)] = thi.ng.math.core.abs.call(null,(self__.buf[(1)])));

(self__.buf[(2)] = thi.ng.math.core.abs.call(null,(self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__21052_21456 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__21053_21457 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__21054_21458 = ((!(G__21052_21456))?typeof a === 'number':null);
var G__21055_21459 = ((!(G__21053_21457))?typeof b === 'number':null);
var G__21040_21460 = self__.buf;
var G__21041_21461 = ((G__21052_21456)?a.buf:null);
var G__21042_21462 = ((G__21053_21457)?b.buf:null);
var G__21043_21463 = (G__21040_21460[(0)]);
var G__21044_21464 = (G__21040_21460[(1)]);
var G__21045_21465 = (G__21040_21460[(2)]);
var G__21046_21466 = ((G__21052_21456)?(G__21041_21461[(0)]):(cljs.core.truth_(G__21054_21458)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__21047_21467 = ((G__21052_21456)?(G__21041_21461[(1)]):(cljs.core.truth_(G__21054_21458)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__21048_21468 = ((G__21052_21456)?(G__21041_21461[(2)]):(cljs.core.truth_(G__21054_21458)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__21049_21469 = ((G__21053_21457)?(G__21042_21462[(0)]):(cljs.core.truth_(G__21055_21459)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__21050_21470 = ((G__21053_21457)?(G__21042_21462[(1)]):(cljs.core.truth_(G__21055_21459)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__21051_21471 = ((G__21053_21457)?(G__21042_21462[(2)]):(cljs.core.truth_(G__21055_21459)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__21043_21463 * G__21046_21466) + G__21049_21469));

(self__.buf[(1)] = ((G__21044_21464 * G__21047_21467) + G__21050_21470));

(self__.buf[(2)] = ((G__21045_21465 * G__21048_21468) + G__21051_21471));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

(self__.buf[(2)] = ((1) / (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__21056_21472 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__21057_21473 = v.buf;
(self__.buf[(0)] = ((G__21056_21472[(0)]) / (G__21057_21473[(0)])));

(self__.buf[(1)] = ((G__21056_21472[(1)]) / (G__21057_21473[(1)])));

(self__.buf[(2)] = ((G__21056_21472[(2)]) / (G__21057_21473[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__21056_21472[(0)]) / v));

(self__.buf[(1)] = ((G__21056_21472[(1)]) / v));

(self__.buf[(2)] = ((G__21056_21472[(2)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__21056_21472[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__21056_21472[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__21056_21472[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__21070_21474 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__21071_21475 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__21072_21476 = ((!(G__21070_21474))?typeof v1 === 'number':null);
var G__21073_21477 = ((!(G__21071_21475))?typeof v2 === 'number':null);
var G__21058_21478 = self__.buf;
var G__21059_21479 = ((G__21070_21474)?v1.buf:null);
var G__21060_21480 = ((G__21071_21475)?v2.buf:null);
var G__21061_21481 = (G__21058_21478[(0)]);
var G__21062_21482 = (G__21058_21478[(1)]);
var G__21063_21483 = (G__21058_21478[(2)]);
var G__21064_21484 = ((G__21070_21474)?(G__21059_21479[(0)]):(cljs.core.truth_(G__21072_21476)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__21065_21485 = ((G__21070_21474)?(G__21059_21479[(1)]):(cljs.core.truth_(G__21072_21476)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__21066_21486 = ((G__21070_21474)?(G__21059_21479[(2)]):(cljs.core.truth_(G__21072_21476)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__21067_21487 = ((G__21071_21475)?(G__21060_21480[(0)]):(cljs.core.truth_(G__21073_21477)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__21068_21488 = ((G__21071_21475)?(G__21060_21480[(1)]):(cljs.core.truth_(G__21073_21477)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__21069_21489 = ((G__21071_21475)?(G__21060_21480[(2)]):(cljs.core.truth_(G__21073_21477)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__21061_21481 / G__21064_21484) / G__21067_21487));

(self__.buf[(1)] = ((G__21062_21482 / G__21065_21485) / G__21068_21488));

(self__.buf[(2)] = ((G__21063_21483 / G__21066_21486) / G__21069_21489));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) / x));

(self__.buf[(1)] = ((self__.buf[(1)]) / y));

(self__.buf[(2)] = ((self__.buf[(2)]) / z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__21074_21490 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__21075_21491 = v.buf;
(self__.buf[(0)] = ((G__21074_21490[(0)]) + (G__21075_21491[(0)])));

(self__.buf[(1)] = ((G__21074_21490[(1)]) + (G__21075_21491[(1)])));

(self__.buf[(2)] = ((G__21074_21490[(2)]) + (G__21075_21491[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__21074_21490[(0)]) + v));

(self__.buf[(1)] = ((G__21074_21490[(1)]) + v));

(self__.buf[(2)] = ((G__21074_21490[(2)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__21074_21490[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__21074_21490[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__21074_21490[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__21088_21492 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__21089_21493 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__21090_21494 = ((!(G__21088_21492))?typeof v1 === 'number':null);
var G__21091_21495 = ((!(G__21089_21493))?typeof v2 === 'number':null);
var G__21076_21496 = self__.buf;
var G__21077_21497 = ((G__21088_21492)?v1.buf:null);
var G__21078_21498 = ((G__21089_21493)?v2.buf:null);
var G__21079_21499 = (G__21076_21496[(0)]);
var G__21080_21500 = (G__21076_21496[(1)]);
var G__21081_21501 = (G__21076_21496[(2)]);
var G__21082_21502 = ((G__21088_21492)?(G__21077_21497[(0)]):(cljs.core.truth_(G__21090_21494)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__21083_21503 = ((G__21088_21492)?(G__21077_21497[(1)]):(cljs.core.truth_(G__21090_21494)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__21084_21504 = ((G__21088_21492)?(G__21077_21497[(2)]):(cljs.core.truth_(G__21090_21494)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__21085_21505 = ((G__21089_21493)?(G__21078_21498[(0)]):(cljs.core.truth_(G__21091_21495)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__21086_21506 = ((G__21089_21493)?(G__21078_21498[(1)]):(cljs.core.truth_(G__21091_21495)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__21087_21507 = ((G__21089_21493)?(G__21078_21498[(2)]):(cljs.core.truth_(G__21091_21495)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__21079_21499 + G__21082_21502) + G__21085_21505));

(self__.buf[(1)] = ((G__21080_21500 + G__21083_21503) + G__21086_21506));

(self__.buf[(2)] = ((G__21081_21501 + G__21084_21504) + G__21087_21507));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) + x));

(self__.buf[(1)] = ((self__.buf[(1)]) + y));

(self__.buf[(2)] = ((self__.buf[(2)]) + z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__21104_21508 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__21105_21509 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__21106_21510 = ((!(G__21104_21508))?typeof a === 'number':null);
var G__21107_21511 = ((!(G__21105_21509))?typeof b === 'number':null);
var G__21092_21512 = self__.buf;
var G__21093_21513 = ((G__21104_21508)?a.buf:null);
var G__21094_21514 = ((G__21105_21509)?b.buf:null);
var G__21095_21515 = (G__21092_21512[(0)]);
var G__21096_21516 = (G__21092_21512[(1)]);
var G__21097_21517 = (G__21092_21512[(2)]);
var G__21098_21518 = ((G__21104_21508)?(G__21093_21513[(0)]):(cljs.core.truth_(G__21106_21510)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__21099_21519 = ((G__21104_21508)?(G__21093_21513[(1)]):(cljs.core.truth_(G__21106_21510)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__21100_21520 = ((G__21104_21508)?(G__21093_21513[(2)]):(cljs.core.truth_(G__21106_21510)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__21101_21521 = ((G__21105_21509)?(G__21094_21514[(0)]):(cljs.core.truth_(G__21107_21511)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__21102_21522 = ((G__21105_21509)?(G__21094_21514[(1)]):(cljs.core.truth_(G__21107_21511)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__21103_21523 = ((G__21105_21509)?(G__21094_21514[(2)]):(cljs.core.truth_(G__21107_21511)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__21095_21515 + G__21098_21518) * G__21101_21521));

(self__.buf[(1)] = ((G__21096_21516 + G__21099_21519) * G__21102_21522));

(self__.buf[(2)] = ((G__21097_21517 + G__21100_21520) * G__21103_21523));

self__._hash = null;

return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.vector.swizzle3_fns.call(null,new cljs.core.Keyword(null,"zyx","zyx",1752527951)).call(null,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__18275__auto__ = self__._hash;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash.call(null,((cljs.core.imul.call(null,((cljs.core.imul.call(null,(((31) + cljs.core.hash.call(null,(self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(1)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(2)]))) | (0)),(3));
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
return (((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)]))) && (((self__.buf[(2)]) === (b_SINGLEQUOTE_[(2)])));
} else {
return (cljs.core.sequential_QMARK_.call(null,o)) && (((3) === cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(0)]),cljs.core.first.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(1)]),cljs.core.nth.call(null,o,(1)))) && (cljs.core._EQ_.call(null,(self__.buf[(2)]),cljs.core.nth.call(null,o,(2))));
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading_xy.call(null,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(1)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$angle_between$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var v__$1 = (((v instanceof thi.ng.geom.core.vector.Vec3))?v:thi.ng.geom.core.vector.vec3.call(null,v));
return Math.acos(thi.ng.geom.core.dot.call(null,thi.ng.geom.core.normalize.call(null,___$1),thi.ng.geom.core.normalize.call(null,v__$1)));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(0)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(1)]));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(thi.ng.geom.core.dist_squared.call(null,___$1,v));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__21108 = self__.buf;
var G__21110 = (G__21108[(0)]);
var G__21111 = (G__21108[(1)]);
var G__21112 = (G__21108[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__21109 = v.buf;
var G__21113 = (G__21109[(0)]);
var G__21114 = (G__21109[(1)]);
var G__21115 = (G__21109[(2)]);
var dx = (G__21110 - G__21113);
var dy = (G__21111 - G__21114);
var dz = (G__21112 - G__21115);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__21113 = cljs.core.nth.call(null,v,(0),0.0);
var G__21114 = cljs.core.nth.call(null,v,(1),0.0);
var G__21115 = cljs.core.nth.call(null,v,(2),0.0);
var dx = (G__21110 - G__21113);
var dy = (G__21111 - G__21114);
var dz = (G__21112 - G__21115);
return (((dx * dx) + (dy * dy)) + (dz * dz));
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,(self__.buf[(0)]),(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(2)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,start,(self__.buf[(0)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
var acc__$2 = f.call(null,acc__$1,(self__.buf[(2)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$2)){
return cljs.core.deref.call(null,acc__$2);
} else {
return acc__$2;
}
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInvert$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core._.call(null,___$1);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__20280__auto__ = (new Float32Array((3)));
var G__21128_21524 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__21129_21525 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__21130_21526 = ((!(G__21128_21524))?typeof a === 'number':null);
var G__21131_21527 = ((!(G__21129_21525))?typeof b === 'number':null);
var G__21116_21528 = self__.buf;
var G__21117_21529 = ((G__21128_21524)?a.buf:null);
var G__21118_21530 = ((G__21129_21525)?b.buf:null);
var G__21119_21531 = (G__21116_21528[(0)]);
var G__21120_21532 = (G__21116_21528[(1)]);
var G__21121_21533 = (G__21116_21528[(2)]);
var G__21122_21534 = ((G__21128_21524)?(G__21117_21529[(0)]):(cljs.core.truth_(G__21130_21526)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__21123_21535 = ((G__21128_21524)?(G__21117_21529[(1)]):(cljs.core.truth_(G__21130_21526)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__21124_21536 = ((G__21128_21524)?(G__21117_21529[(2)]):(cljs.core.truth_(G__21130_21526)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__21125_21537 = ((G__21129_21525)?(G__21118_21530[(0)]):(cljs.core.truth_(G__21131_21527)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__21126_21538 = ((G__21129_21525)?(G__21118_21530[(1)]):(cljs.core.truth_(G__21131_21527)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__21127_21539 = ((G__21129_21525)?(G__21118_21530[(2)]):(cljs.core.truth_(G__21131_21527)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__20280__auto__[(0)] = ((G__21119_21531 * G__21122_21534) - G__21125_21537));

(dest__20280__auto__[(1)] = ((G__21120_21532 * G__21123_21535) - G__21126_21538));

(dest__20280__auto__[(2)] = ((G__21121_21533 * G__21124_21536) - G__21127_21539));

return (new thi.ng.geom.core.vector.Vec3(dest__20280__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__20269__auto__ = (new Float32Array((3)));
var G__21132_21540 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__21133_21541 = v.buf;
(dest__20269__auto__[(0)] = ((G__21132_21540[(0)]) * (G__21133_21541[(0)])));

(dest__20269__auto__[(1)] = ((G__21132_21540[(1)]) * (G__21133_21541[(1)])));

(dest__20269__auto__[(2)] = ((G__21132_21540[(2)]) * (G__21133_21541[(2)])));
} else {
if(typeof v === 'number'){
(dest__20269__auto__[(0)] = ((G__21132_21540[(0)]) * v));

(dest__20269__auto__[(1)] = ((G__21132_21540[(1)]) * v));

(dest__20269__auto__[(2)] = ((G__21132_21540[(2)]) * v));
} else {
(dest__20269__auto__[(0)] = ((G__21132_21540[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__20269__auto__[(1)] = ((G__21132_21540[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__20269__auto__[(2)] = ((G__21132_21540[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__20269__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__20280__auto__ = (new Float32Array((3)));
var G__21146_21542 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__21147_21543 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__21148_21544 = ((!(G__21146_21542))?typeof v1 === 'number':null);
var G__21149_21545 = ((!(G__21147_21543))?typeof v2 === 'number':null);
var G__21134_21546 = self__.buf;
var G__21135_21547 = ((G__21146_21542)?v1.buf:null);
var G__21136_21548 = ((G__21147_21543)?v2.buf:null);
var G__21137_21549 = (G__21134_21546[(0)]);
var G__21138_21550 = (G__21134_21546[(1)]);
var G__21139_21551 = (G__21134_21546[(2)]);
var G__21140_21552 = ((G__21146_21542)?(G__21135_21547[(0)]):(cljs.core.truth_(G__21148_21544)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__21141_21553 = ((G__21146_21542)?(G__21135_21547[(1)]):(cljs.core.truth_(G__21148_21544)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__21142_21554 = ((G__21146_21542)?(G__21135_21547[(2)]):(cljs.core.truth_(G__21148_21544)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__21143_21555 = ((G__21147_21543)?(G__21136_21548[(0)]):(cljs.core.truth_(G__21149_21545)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__21144_21556 = ((G__21147_21543)?(G__21136_21548[(1)]):(cljs.core.truth_(G__21149_21545)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__21145_21557 = ((G__21147_21543)?(G__21136_21548[(2)]):(cljs.core.truth_(G__21149_21545)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__20280__auto__[(0)] = ((G__21137_21549 * G__21140_21552) * G__21143_21555));

(dest__20280__auto__[(1)] = ((G__21138_21550 * G__21141_21553) * G__21144_21556));

(dest__20280__auto__[(2)] = ((G__21139_21551 * G__21142_21554) * G__21145_21557));

return (new thi.ng.geom.core.vector.Vec3(dest__20280__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__21150 = self__.buf;
var dest__20258__auto__ = (new Float32Array((3)));
(dest__20258__auto__[(0)] = ((G__21150[(0)]) * x));

(dest__20258__auto__[(1)] = ((G__21150[(1)]) * y));

(dest__20258__auto__[(2)] = ((G__21150[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__20258__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__20252__auto__ = (new Float32Array((3)));
var G__21151_21558 = self__.buf;
(dest__20252__auto__[(0)] = (- (G__21151_21558[(0)])));

(dest__20252__auto__[(1)] = (- (G__21151_21558[(1)])));

(dest__20252__auto__[(2)] = (- (G__21151_21558[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__20252__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__20269__auto__ = (new Float32Array((3)));
var G__21152_21559 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__21153_21560 = v.buf;
(dest__20269__auto__[(0)] = ((G__21152_21559[(0)]) - (G__21153_21560[(0)])));

(dest__20269__auto__[(1)] = ((G__21152_21559[(1)]) - (G__21153_21560[(1)])));

(dest__20269__auto__[(2)] = ((G__21152_21559[(2)]) - (G__21153_21560[(2)])));
} else {
if(typeof v === 'number'){
(dest__20269__auto__[(0)] = ((G__21152_21559[(0)]) - v));

(dest__20269__auto__[(1)] = ((G__21152_21559[(1)]) - v));

(dest__20269__auto__[(2)] = ((G__21152_21559[(2)]) - v));
} else {
(dest__20269__auto__[(0)] = ((G__21152_21559[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__20269__auto__[(1)] = ((G__21152_21559[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(dest__20269__auto__[(2)] = ((G__21152_21559[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__20269__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__20280__auto__ = (new Float32Array((3)));
var G__21166_21561 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__21167_21562 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__21168_21563 = ((!(G__21166_21561))?typeof v1 === 'number':null);
var G__21169_21564 = ((!(G__21167_21562))?typeof v2 === 'number':null);
var G__21154_21565 = self__.buf;
var G__21155_21566 = ((G__21166_21561)?v1.buf:null);
var G__21156_21567 = ((G__21167_21562)?v2.buf:null);
var G__21157_21568 = (G__21154_21565[(0)]);
var G__21158_21569 = (G__21154_21565[(1)]);
var G__21159_21570 = (G__21154_21565[(2)]);
var G__21160_21571 = ((G__21166_21561)?(G__21155_21566[(0)]):(cljs.core.truth_(G__21168_21563)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__21161_21572 = ((G__21166_21561)?(G__21155_21566[(1)]):(cljs.core.truth_(G__21168_21563)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__21162_21573 = ((G__21166_21561)?(G__21155_21566[(2)]):(cljs.core.truth_(G__21168_21563)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__21163_21574 = ((G__21167_21562)?(G__21156_21567[(0)]):(cljs.core.truth_(G__21169_21564)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__21164_21575 = ((G__21167_21562)?(G__21156_21567[(1)]):(cljs.core.truth_(G__21169_21564)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__21165_21576 = ((G__21167_21562)?(G__21156_21567[(2)]):(cljs.core.truth_(G__21169_21564)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__20280__auto__[(0)] = ((G__21157_21568 - G__21160_21571) - G__21163_21574));

(dest__20280__auto__[(1)] = ((G__21158_21569 - G__21161_21572) - G__21164_21575));

(dest__20280__auto__[(2)] = ((G__21159_21570 - G__21162_21573) - G__21165_21576));

return (new thi.ng.geom.core.vector.Vec3(dest__20280__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__21170 = self__.buf;
var dest__20258__auto__ = (new Float32Array((3)));
(dest__20258__auto__[(0)] = ((G__21170[(0)]) - x));

(dest__20258__auto__[(1)] = ((G__21170[(1)]) - y));

(dest__20258__auto__[(2)] = ((G__21170[(2)]) - z));

return (new thi.ng.geom.core.vector.Vec3(dest__20258__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__20280__auto__ = (new Float32Array((3)));
var G__21183_21577 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__21184_21578 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__21185_21579 = ((!(G__21183_21577))?typeof a === 'number':null);
var G__21186_21580 = ((!(G__21184_21578))?typeof b === 'number':null);
var G__21171_21581 = self__.buf;
var G__21172_21582 = ((G__21183_21577)?a.buf:null);
var G__21173_21583 = ((G__21184_21578)?b.buf:null);
var G__21174_21584 = (G__21171_21581[(0)]);
var G__21175_21585 = (G__21171_21581[(1)]);
var G__21176_21586 = (G__21171_21581[(2)]);
var G__21177_21587 = ((G__21183_21577)?(G__21172_21582[(0)]):(cljs.core.truth_(G__21185_21579)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__21178_21588 = ((G__21183_21577)?(G__21172_21582[(1)]):(cljs.core.truth_(G__21185_21579)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__21179_21589 = ((G__21183_21577)?(G__21172_21582[(2)]):(cljs.core.truth_(G__21185_21579)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__21180_21590 = ((G__21184_21578)?(G__21173_21583[(0)]):(cljs.core.truth_(G__21186_21580)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__21181_21591 = ((G__21184_21578)?(G__21173_21583[(1)]):(cljs.core.truth_(G__21186_21580)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__21182_21592 = ((G__21184_21578)?(G__21173_21583[(2)]):(cljs.core.truth_(G__21186_21580)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__20280__auto__[(0)] = ((G__21174_21584 * G__21177_21587) + G__21180_21590));

(dest__20280__auto__[(1)] = ((G__21175_21585 * G__21178_21588) + G__21181_21591));

(dest__20280__auto__[(2)] = ((G__21176_21586 * G__21179_21589) + G__21182_21592));

return (new thi.ng.geom.core.vector.Vec3(dest__20280__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__20280__auto__ = (new Float32Array((3)));
var G__21199_21593 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__21200_21594 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__21201_21595 = ((!(G__21199_21593))?typeof a === 'number':null);
var G__21202_21596 = ((!(G__21200_21594))?typeof b === 'number':null);
var G__21187_21597 = self__.buf;
var G__21188_21598 = ((G__21199_21593)?a.buf:null);
var G__21189_21599 = ((G__21200_21594)?b.buf:null);
var G__21190_21600 = (G__21187_21597[(0)]);
var G__21191_21601 = (G__21187_21597[(1)]);
var G__21192_21602 = (G__21187_21597[(2)]);
var G__21193_21603 = ((G__21199_21593)?(G__21188_21598[(0)]):(cljs.core.truth_(G__21201_21595)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__21194_21604 = ((G__21199_21593)?(G__21188_21598[(1)]):(cljs.core.truth_(G__21201_21595)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__21195_21605 = ((G__21199_21593)?(G__21188_21598[(2)]):(cljs.core.truth_(G__21201_21595)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__21196_21606 = ((G__21200_21594)?(G__21189_21599[(0)]):(cljs.core.truth_(G__21202_21596)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__21197_21607 = ((G__21200_21594)?(G__21189_21599[(1)]):(cljs.core.truth_(G__21202_21596)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__21198_21608 = ((G__21200_21594)?(G__21189_21599[(2)]):(cljs.core.truth_(G__21202_21596)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__20280__auto__[(0)] = ((G__21190_21600 + G__21193_21603) * G__21196_21606));

(dest__20280__auto__[(1)] = ((G__21191_21601 + G__21194_21604) * G__21197_21607));

(dest__20280__auto__[(2)] = ((G__21192_21602 + G__21195_21605) * G__21198_21608));

return (new thi.ng.geom.core.vector.Vec3(dest__20280__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__20252__auto__ = (new Float32Array((3)));
var G__21203_21609 = self__.buf;
(dest__20252__auto__[(0)] = ((1) / (G__21203_21609[(0)])));

(dest__20252__auto__[(1)] = ((1) / (G__21203_21609[(1)])));

(dest__20252__auto__[(2)] = ((1) / (G__21203_21609[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__20252__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__20269__auto__ = (new Float32Array((3)));
var G__21204_21610 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__21205_21611 = v.buf;
(dest__20269__auto__[(0)] = ((G__21204_21610[(0)]) / (G__21205_21611[(0)])));

(dest__20269__auto__[(1)] = ((G__21204_21610[(1)]) / (G__21205_21611[(1)])));

(dest__20269__auto__[(2)] = ((G__21204_21610[(2)]) / (G__21205_21611[(2)])));
} else {
if(typeof v === 'number'){
(dest__20269__auto__[(0)] = ((G__21204_21610[(0)]) / v));

(dest__20269__auto__[(1)] = ((G__21204_21610[(1)]) / v));

(dest__20269__auto__[(2)] = ((G__21204_21610[(2)]) / v));
} else {
(dest__20269__auto__[(0)] = ((G__21204_21610[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__20269__auto__[(1)] = ((G__21204_21610[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(dest__20269__auto__[(2)] = ((G__21204_21610[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__20269__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__20280__auto__ = (new Float32Array((3)));
var G__21218_21612 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__21219_21613 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__21220_21614 = ((!(G__21218_21612))?typeof v1 === 'number':null);
var G__21221_21615 = ((!(G__21219_21613))?typeof v2 === 'number':null);
var G__21206_21616 = self__.buf;
var G__21207_21617 = ((G__21218_21612)?v1.buf:null);
var G__21208_21618 = ((G__21219_21613)?v2.buf:null);
var G__21209_21619 = (G__21206_21616[(0)]);
var G__21210_21620 = (G__21206_21616[(1)]);
var G__21211_21621 = (G__21206_21616[(2)]);
var G__21212_21622 = ((G__21218_21612)?(G__21207_21617[(0)]):(cljs.core.truth_(G__21220_21614)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__21213_21623 = ((G__21218_21612)?(G__21207_21617[(1)]):(cljs.core.truth_(G__21220_21614)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__21214_21624 = ((G__21218_21612)?(G__21207_21617[(2)]):(cljs.core.truth_(G__21220_21614)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__21215_21625 = ((G__21219_21613)?(G__21208_21618[(0)]):(cljs.core.truth_(G__21221_21615)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__21216_21626 = ((G__21219_21613)?(G__21208_21618[(1)]):(cljs.core.truth_(G__21221_21615)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__21217_21627 = ((G__21219_21613)?(G__21208_21618[(2)]):(cljs.core.truth_(G__21221_21615)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__20280__auto__[(0)] = ((G__21209_21619 / G__21212_21622) / G__21215_21625));

(dest__20280__auto__[(1)] = ((G__21210_21620 / G__21213_21623) / G__21216_21626));

(dest__20280__auto__[(2)] = ((G__21211_21621 / G__21214_21624) / G__21217_21627));

return (new thi.ng.geom.core.vector.Vec3(dest__20280__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__21222 = self__.buf;
var dest__20258__auto__ = (new Float32Array((3)));
(dest__20258__auto__[(0)] = ((G__21222[(0)]) / x));

(dest__20258__auto__[(1)] = ((G__21222[(1)]) / y));

(dest__20258__auto__[(2)] = ((G__21222[(2)]) / z));

return (new thi.ng.geom.core.vector.Vec3(dest__20258__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__20269__auto__ = (new Float32Array((3)));
var G__21223_21628 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__21224_21629 = v.buf;
(dest__20269__auto__[(0)] = ((G__21223_21628[(0)]) + (G__21224_21629[(0)])));

(dest__20269__auto__[(1)] = ((G__21223_21628[(1)]) + (G__21224_21629[(1)])));

(dest__20269__auto__[(2)] = ((G__21223_21628[(2)]) + (G__21224_21629[(2)])));
} else {
if(typeof v === 'number'){
(dest__20269__auto__[(0)] = ((G__21223_21628[(0)]) + v));

(dest__20269__auto__[(1)] = ((G__21223_21628[(1)]) + v));

(dest__20269__auto__[(2)] = ((G__21223_21628[(2)]) + v));
} else {
(dest__20269__auto__[(0)] = ((G__21223_21628[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__20269__auto__[(1)] = ((G__21223_21628[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__20269__auto__[(2)] = ((G__21223_21628[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__20269__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__20280__auto__ = (new Float32Array((3)));
var G__21237_21630 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__21238_21631 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__21239_21632 = ((!(G__21237_21630))?typeof v1 === 'number':null);
var G__21240_21633 = ((!(G__21238_21631))?typeof v2 === 'number':null);
var G__21225_21634 = self__.buf;
var G__21226_21635 = ((G__21237_21630)?v1.buf:null);
var G__21227_21636 = ((G__21238_21631)?v2.buf:null);
var G__21228_21637 = (G__21225_21634[(0)]);
var G__21229_21638 = (G__21225_21634[(1)]);
var G__21230_21639 = (G__21225_21634[(2)]);
var G__21231_21640 = ((G__21237_21630)?(G__21226_21635[(0)]):(cljs.core.truth_(G__21239_21632)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__21232_21641 = ((G__21237_21630)?(G__21226_21635[(1)]):(cljs.core.truth_(G__21239_21632)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__21233_21642 = ((G__21237_21630)?(G__21226_21635[(2)]):(cljs.core.truth_(G__21239_21632)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__21234_21643 = ((G__21238_21631)?(G__21227_21636[(0)]):(cljs.core.truth_(G__21240_21633)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__21235_21644 = ((G__21238_21631)?(G__21227_21636[(1)]):(cljs.core.truth_(G__21240_21633)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__21236_21645 = ((G__21238_21631)?(G__21227_21636[(2)]):(cljs.core.truth_(G__21240_21633)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__20280__auto__[(0)] = ((G__21228_21637 + G__21231_21640) + G__21234_21643));

(dest__20280__auto__[(1)] = ((G__21229_21638 + G__21232_21641) + G__21235_21644));

(dest__20280__auto__[(2)] = ((G__21230_21639 + G__21233_21642) + G__21236_21645));

return (new thi.ng.geom.core.vector.Vec3(dest__20280__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__21241 = self__.buf;
var dest__20258__auto__ = (new Float32Array((3)));
(dest__20258__auto__[(0)] = ((G__21241[(0)]) + x));

(dest__20258__auto__[(1)] = ((G__21241[(1)]) + y));

(dest__20258__auto__[(2)] = ((G__21241[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__20258__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__20252__auto__ = (new Float32Array((3)));
var G__21242_21646 = self__.buf;
(dest__20252__auto__[(0)] = thi.ng.math.core.abs.call(null,(G__21242_21646[(0)])));

(dest__20252__auto__[(1)] = thi.ng.math.core.abs.call(null,(G__21242_21646[(1)])));

(dest__20252__auto__[(2)] = thi.ng.math.core.abs.call(null,(G__21242_21646[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__20252__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__20280__auto__ = (new Float32Array((3)));
var G__21255_21647 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__21256_21648 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__21257_21649 = ((!(G__21255_21647))?typeof a === 'number':null);
var G__21258_21650 = ((!(G__21256_21648))?typeof b === 'number':null);
var G__21243_21651 = self__.buf;
var G__21244_21652 = ((G__21255_21647)?a.buf:null);
var G__21245_21653 = ((G__21256_21648)?b.buf:null);
var G__21246_21654 = (G__21243_21651[(0)]);
var G__21247_21655 = (G__21243_21651[(1)]);
var G__21248_21656 = (G__21243_21651[(2)]);
var G__21249_21657 = ((G__21255_21647)?(G__21244_21652[(0)]):(cljs.core.truth_(G__21257_21649)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__21250_21658 = ((G__21255_21647)?(G__21244_21652[(1)]):(cljs.core.truth_(G__21257_21649)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__21251_21659 = ((G__21255_21647)?(G__21244_21652[(2)]):(cljs.core.truth_(G__21257_21649)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__21252_21660 = ((G__21256_21648)?(G__21245_21653[(0)]):(cljs.core.truth_(G__21258_21650)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__21253_21661 = ((G__21256_21648)?(G__21245_21653[(1)]):(cljs.core.truth_(G__21258_21650)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__21254_21662 = ((G__21256_21648)?(G__21245_21653[(2)]):(cljs.core.truth_(G__21258_21650)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__20280__auto__[(0)] = ((G__21246_21654 - G__21249_21657) * G__21252_21660));

(dest__20280__auto__[(1)] = ((G__21247_21655 - G__21250_21658) * G__21253_21661));

(dest__20280__auto__[(2)] = ((G__21248_21656 - G__21251_21659) * G__21254_21662));

return (new thi.ng.geom.core.vector.Vec3(dest__20280__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),cljs.core.cons.call(null,(self__.buf[(2)]),null));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__20269__auto__ = (new Float32Array((3)));
var G__21259_21663 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__21260_21664 = v.buf;
(dest__20269__auto__[(0)] = ((G__21259_21663[(0)]) + (G__21260_21664[(0)])));

(dest__20269__auto__[(1)] = ((G__21259_21663[(1)]) + (G__21260_21664[(1)])));

(dest__20269__auto__[(2)] = ((G__21259_21663[(2)]) + (G__21260_21664[(2)])));
} else {
if(typeof v === 'number'){
(dest__20269__auto__[(0)] = ((G__21259_21663[(0)]) + v));

(dest__20269__auto__[(1)] = ((G__21259_21663[(1)]) + v));

(dest__20269__auto__[(2)] = ((G__21259_21663[(2)]) + v));
} else {
(dest__20269__auto__[(0)] = ((G__21259_21663[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__20269__auto__[(1)] = ((G__21259_21663[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__20269__auto__[(2)] = ((G__21259_21663[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__20269__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__20280__auto__ = (new Float32Array((3)));
var G__21273_21665 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__21274_21666 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__21275_21667 = ((!(G__21273_21665))?typeof v1 === 'number':null);
var G__21276_21668 = ((!(G__21274_21666))?typeof v2 === 'number':null);
var G__21261_21669 = self__.buf;
var G__21262_21670 = ((G__21273_21665)?v1.buf:null);
var G__21263_21671 = ((G__21274_21666)?v2.buf:null);
var G__21264_21672 = (G__21261_21669[(0)]);
var G__21265_21673 = (G__21261_21669[(1)]);
var G__21266_21674 = (G__21261_21669[(2)]);
var G__21267_21675 = ((G__21273_21665)?(G__21262_21670[(0)]):(cljs.core.truth_(G__21275_21667)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__21268_21676 = ((G__21273_21665)?(G__21262_21670[(1)]):(cljs.core.truth_(G__21275_21667)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__21269_21677 = ((G__21273_21665)?(G__21262_21670[(2)]):(cljs.core.truth_(G__21275_21667)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__21270_21678 = ((G__21274_21666)?(G__21263_21671[(0)]):(cljs.core.truth_(G__21276_21668)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__21271_21679 = ((G__21274_21666)?(G__21263_21671[(1)]):(cljs.core.truth_(G__21276_21668)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__21272_21680 = ((G__21274_21666)?(G__21263_21671[(2)]):(cljs.core.truth_(G__21276_21668)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__20280__auto__[(0)] = ((G__21264_21672 + G__21267_21675) + G__21270_21678));

(dest__20280__auto__[(1)] = ((G__21265_21673 + G__21268_21676) + G__21271_21679));

(dest__20280__auto__[(2)] = ((G__21266_21674 + G__21269_21677) + G__21272_21680));

return (new thi.ng.geom.core.vector.Vec3(dest__20280__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__21277 = self__.buf;
var dest__20258__auto__ = (new Float32Array((3)));
(dest__20258__auto__[(0)] = ((G__21277[(0)]) + x));

(dest__20258__auto__[(1)] = ((G__21277[(1)]) + y));

(dest__20258__auto__[(2)] = ((G__21277[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__20258__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k <= (2)));
} else {
if(cljs.core.truth_(thi.ng.geom.core.vector.swizzle3_fns.call(null,k))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if(((k >= (0))) && ((k <= (2)))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
if((k === (3))){
return cljs.core.conj.call(null,___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"w","w",354169001),k)){
return cljs.core.conj.call(null,___$1,v);
} else {
return (new thi.ng.geom.core.vector.Vec3(thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,self__.buf,(new Float32Array(self__.buf)),new cljs.core.PersistentArrayMap(null, 3, ["x",(0),"y",(1),"z",(2)], null),k,v),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__20269__auto__ = (new Float32Array((3)));
var G__21278_21681 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__21279_21682 = v.buf;
(dest__20269__auto__[(0)] = ((G__21278_21681[(0)]) * (G__21279_21682[(0)])));

(dest__20269__auto__[(1)] = ((G__21278_21681[(1)]) * (G__21279_21682[(1)])));

(dest__20269__auto__[(2)] = ((G__21278_21681[(2)]) * (G__21279_21682[(2)])));
} else {
if(typeof v === 'number'){
(dest__20269__auto__[(0)] = ((G__21278_21681[(0)]) * v));

(dest__20269__auto__[(1)] = ((G__21278_21681[(1)]) * v));

(dest__20269__auto__[(2)] = ((G__21278_21681[(2)]) * v));
} else {
(dest__20269__auto__[(0)] = ((G__21278_21681[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__20269__auto__[(1)] = ((G__21278_21681[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__20269__auto__[(2)] = ((G__21278_21681[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__20269__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__20280__auto__ = (new Float32Array((3)));
var G__21292_21683 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__21293_21684 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__21294_21685 = ((!(G__21292_21683))?typeof v1 === 'number':null);
var G__21295_21686 = ((!(G__21293_21684))?typeof v2 === 'number':null);
var G__21280_21687 = self__.buf;
var G__21281_21688 = ((G__21292_21683)?v1.buf:null);
var G__21282_21689 = ((G__21293_21684)?v2.buf:null);
var G__21283_21690 = (G__21280_21687[(0)]);
var G__21284_21691 = (G__21280_21687[(1)]);
var G__21285_21692 = (G__21280_21687[(2)]);
var G__21286_21693 = ((G__21292_21683)?(G__21281_21688[(0)]):(cljs.core.truth_(G__21294_21685)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__21287_21694 = ((G__21292_21683)?(G__21281_21688[(1)]):(cljs.core.truth_(G__21294_21685)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__21288_21695 = ((G__21292_21683)?(G__21281_21688[(2)]):(cljs.core.truth_(G__21294_21685)?v1:cljs.core.nth.call(null,v1,(2),1.0)));
var G__21289_21696 = ((G__21293_21684)?(G__21282_21689[(0)]):(cljs.core.truth_(G__21295_21686)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__21290_21697 = ((G__21293_21684)?(G__21282_21689[(1)]):(cljs.core.truth_(G__21295_21686)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
var G__21291_21698 = ((G__21293_21684)?(G__21282_21689[(2)]):(cljs.core.truth_(G__21295_21686)?v2:cljs.core.nth.call(null,v2,(2),1.0)));
(dest__20280__auto__[(0)] = ((G__21283_21690 * G__21286_21693) * G__21289_21696));

(dest__20280__auto__[(1)] = ((G__21284_21691 * G__21287_21694) * G__21290_21697));

(dest__20280__auto__[(2)] = ((G__21285_21692 * G__21288_21695) * G__21291_21698));

return (new thi.ng.geom.core.vector.Vec3(dest__20280__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__21296 = self__.buf;
var dest__20258__auto__ = (new Float32Array((3)));
(dest__20258__auto__[(0)] = ((G__21296[(0)]) * x));

(dest__20258__auto__[(1)] = ((G__21296[(1)]) * y));

(dest__20258__auto__[(2)] = ((G__21296[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__20258__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)]),(self__.buf[(1)]),(self__.buf[(2)]),x], null),self__._meta);
});

thi.ng.geom.core.vector.Vec3.prototype.call = (function() {
var G__21699 = null;
var G__21699__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
var G__21699__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__21699 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__21699__2.call(this,self__,k);
case 3:
return G__21699__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21699.cljs$core$IFn$_invoke$arity$2 = G__21699__2;
G__21699.cljs$core$IFn$_invoke$arity$3 = G__21699__3;
return G__21699;
})()
;

thi.ng.geom.core.vector.Vec3.prototype.apply = (function (self__,args20925){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20925)));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__4655__auto__ = thi.ng.geom.core.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__20269__auto__ = (new Float32Array((3)));
var G__21297_21700 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__21298_21701 = v.buf;
(dest__20269__auto__[(0)] = (function (){var a__19848__auto__ = (G__21297_21700[(0)]);
var b__19849__auto__ = (G__21298_21701[(0)]);
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());

(dest__20269__auto__[(1)] = (function (){var a__19848__auto__ = (G__21297_21700[(1)]);
var b__19849__auto__ = (G__21298_21701[(1)]);
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());

(dest__20269__auto__[(2)] = (function (){var a__19848__auto__ = (G__21297_21700[(2)]);
var b__19849__auto__ = (G__21298_21701[(2)]);
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__20269__auto__[(0)] = (function (){var a__19848__auto__ = (G__21297_21700[(0)]);
var b__19849__auto__ = v;
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());

(dest__20269__auto__[(1)] = (function (){var a__19848__auto__ = (G__21297_21700[(1)]);
var b__19849__auto__ = v;
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());

(dest__20269__auto__[(2)] = (function (){var a__19848__auto__ = (G__21297_21700[(2)]);
var b__19849__auto__ = v;
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());
} else {
(dest__20269__auto__[(0)] = (function (){var a__19848__auto__ = (G__21297_21700[(0)]);
var b__19849__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());

(dest__20269__auto__[(1)] = (function (){var a__19848__auto__ = (G__21297_21700[(1)]);
var b__19849__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());

(dest__20269__auto__[(2)] = (function (){var a__19848__auto__ = (G__21297_21700[(2)]);
var b__19849__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__20269__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__20280__auto__ = (new Float32Array((3)));
var G__21311_21702 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__21312_21703 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__21313_21704 = ((!(G__21311_21702))?typeof v === 'number':null);
var G__21314_21705 = ((!(G__21312_21703))?typeof v2 === 'number':null);
var G__21299_21706 = self__.buf;
var G__21300_21707 = ((G__21311_21702)?v.buf:null);
var G__21301_21708 = ((G__21312_21703)?v2.buf:null);
var G__21302_21709 = (G__21299_21706[(0)]);
var G__21303_21710 = (G__21299_21706[(1)]);
var G__21304_21711 = (G__21299_21706[(2)]);
var G__21305_21712 = ((G__21311_21702)?(G__21300_21707[(0)]):(cljs.core.truth_(G__21313_21704)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__21306_21713 = ((G__21311_21702)?(G__21300_21707[(1)]):(cljs.core.truth_(G__21313_21704)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__21307_21714 = ((G__21311_21702)?(G__21300_21707[(2)]):(cljs.core.truth_(G__21313_21704)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__21308_21715 = ((G__21312_21703)?(G__21301_21708[(0)]):(cljs.core.truth_(G__21314_21705)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__21309_21716 = ((G__21312_21703)?(G__21301_21708[(1)]):(cljs.core.truth_(G__21314_21705)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__21310_21717 = ((G__21312_21703)?(G__21301_21708[(2)]):(cljs.core.truth_(G__21314_21705)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__20280__auto__[(0)] = (function (){var a__19848__auto__ = (function (){var a__19848__auto__ = G__21302_21709;
var b__19849__auto__ = G__21305_21712;
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})();
var b__19849__auto__ = G__21308_21715;
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());

(dest__20280__auto__[(1)] = (function (){var a__19848__auto__ = (function (){var a__19848__auto__ = G__21303_21710;
var b__19849__auto__ = G__21306_21713;
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})();
var b__19849__auto__ = G__21309_21716;
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());

(dest__20280__auto__[(2)] = (function (){var a__19848__auto__ = (function (){var a__19848__auto__ = G__21304_21711;
var b__19849__auto__ = G__21307_21714;
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})();
var b__19849__auto__ = G__21310_21717;
if((a__19848__auto__ <= b__19849__auto__)){
return a__19848__auto__;
} else {
return b__19849__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__20280__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__20269__auto__ = (new Float32Array((3)));
var G__21315_21718 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__21316_21719 = v.buf;
(dest__20269__auto__[(0)] = (function (){var a__19855__auto__ = (G__21315_21718[(0)]);
var b__19856__auto__ = (G__21316_21719[(0)]);
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());

(dest__20269__auto__[(1)] = (function (){var a__19855__auto__ = (G__21315_21718[(1)]);
var b__19856__auto__ = (G__21316_21719[(1)]);
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());

(dest__20269__auto__[(2)] = (function (){var a__19855__auto__ = (G__21315_21718[(2)]);
var b__19856__auto__ = (G__21316_21719[(2)]);
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__20269__auto__[(0)] = (function (){var a__19855__auto__ = (G__21315_21718[(0)]);
var b__19856__auto__ = v;
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());

(dest__20269__auto__[(1)] = (function (){var a__19855__auto__ = (G__21315_21718[(1)]);
var b__19856__auto__ = v;
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());

(dest__20269__auto__[(2)] = (function (){var a__19855__auto__ = (G__21315_21718[(2)]);
var b__19856__auto__ = v;
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());
} else {
(dest__20269__auto__[(0)] = (function (){var a__19855__auto__ = (G__21315_21718[(0)]);
var b__19856__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());

(dest__20269__auto__[(1)] = (function (){var a__19855__auto__ = (G__21315_21718[(1)]);
var b__19856__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());

(dest__20269__auto__[(2)] = (function (){var a__19855__auto__ = (G__21315_21718[(2)]);
var b__19856__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__20269__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__20280__auto__ = (new Float32Array((3)));
var G__21329_21720 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__21330_21721 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__21331_21722 = ((!(G__21329_21720))?typeof v === 'number':null);
var G__21332_21723 = ((!(G__21330_21721))?typeof v2 === 'number':null);
var G__21317_21724 = self__.buf;
var G__21318_21725 = ((G__21329_21720)?v.buf:null);
var G__21319_21726 = ((G__21330_21721)?v2.buf:null);
var G__21320_21727 = (G__21317_21724[(0)]);
var G__21321_21728 = (G__21317_21724[(1)]);
var G__21322_21729 = (G__21317_21724[(2)]);
var G__21323_21730 = ((G__21329_21720)?(G__21318_21725[(0)]):(cljs.core.truth_(G__21331_21722)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__21324_21731 = ((G__21329_21720)?(G__21318_21725[(1)]):(cljs.core.truth_(G__21331_21722)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__21325_21732 = ((G__21329_21720)?(G__21318_21725[(2)]):(cljs.core.truth_(G__21331_21722)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__21326_21733 = ((G__21330_21721)?(G__21319_21726[(0)]):(cljs.core.truth_(G__21332_21723)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__21327_21734 = ((G__21330_21721)?(G__21319_21726[(1)]):(cljs.core.truth_(G__21332_21723)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__21328_21735 = ((G__21330_21721)?(G__21319_21726[(2)]):(cljs.core.truth_(G__21332_21723)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__20280__auto__[(0)] = (function (){var a__19855__auto__ = (function (){var a__19855__auto__ = G__21320_21727;
var b__19856__auto__ = G__21323_21730;
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})();
var b__19856__auto__ = G__21326_21733;
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());

(dest__20280__auto__[(1)] = (function (){var a__19855__auto__ = (function (){var a__19855__auto__ = G__21321_21728;
var b__19856__auto__ = G__21324_21731;
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})();
var b__19856__auto__ = G__21327_21734;
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());

(dest__20280__auto__[(2)] = (function (){var a__19855__auto__ = (function (){var a__19855__auto__ = G__21322_21729;
var b__19856__auto__ = G__21325_21732;
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})();
var b__19856__auto__ = G__21328_21735;
if((a__19855__auto__ >= b__19856__auto__)){
return a__19855__auto__;
} else {
return b__19856__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__20280__auto__,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare.call(null,(self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
var c__$1 = cljs.core.compare.call(null,(self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
if(((0) === c__$1)){
return cljs.core.compare.call(null,(self__.buf[(2)]),(b_SINGLEQUOTE_[(2)]));
} else {
return c__$1;
}
} else {
return c;
}
} else {
var c = cljs.core.count.call(null,o);
if(((3) === c)){
return (- cljs.core.compare.call(null,o,___$1));
} else {
return ((3) - c);
}
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.core.vector.Vec3(thi.ng.geom.core.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs),null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
thi.ng.geom.core.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs);

(buf_SINGLEQUOTE_[(0)] = f2.call(null,(buf_SINGLEQUOTE_[(0)]),(0)));

(buf_SINGLEQUOTE_[(1)] = f2.call(null,(buf_SINGLEQUOTE_[(1)]),(1)));

(buf_SINGLEQUOTE_[(2)] = f2.call(null,(buf_SINGLEQUOTE_[(2)]),(2)));

return (new thi.ng.geom.core.vector.Vec3(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$math$core$PDeltaEquals$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,___$1,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_.call(null,v)){
if(((3) === cljs.core.count.call(null,v))){
var G__21333 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__21334 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__21333[(0)]),(G__21334[(0)]),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__21333[(1)]),(G__21334[(1)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__21333[(2)]),(G__21334[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__21333[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__21333[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__21333[(2)]),cljs.core.nth.call(null,v,(2),0.0),eps);
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__21335 = self__.buf;
var G__21336 = (G__21335[(0)]);
var G__21337 = (G__21335[(1)]);
var G__21338 = (G__21335[(2)]);
return Math.sqrt((((G__21336 * G__21336) + (G__21337 * G__21337)) + (G__21338 * G__21338)));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__21339 = self__.buf;
var G__21340 = (G__21339[(0)]);
var G__21341 = (G__21339[(1)]);
var G__21342 = (G__21339[(2)]);
return (((G__21340 * G__21340) + (G__21341 * G__21341)) + (G__21342 * G__21342));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__21343_21736 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__21344_21737 = v.buf;
(b[(0)] = (((G__21343_21736[(0)]) + (G__21344_21737[(0)])) * 0.5));

(b[(1)] = (((G__21343_21736[(1)]) + (G__21344_21737[(1)])) * 0.5));

(b[(2)] = (((G__21343_21736[(2)]) + (G__21344_21737[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__21343_21736[(0)]) + v) * 0.5));

(b[(1)] = (((G__21343_21736[(1)]) + v) * 0.5));

(b[(2)] = (((G__21343_21736[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__21343_21736[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__21343_21736[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));

(b[(2)] = (((G__21343_21736[(2)]) + cljs.core.nth.call(null,v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__21357_21738 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__21358_21739 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__21359_21740 = ((!(G__21357_21738))?typeof v === 'number':null);
var G__21360_21741 = ((!(G__21358_21739))?typeof v2 === 'number':null);
var G__21345_21742 = self__.buf;
var G__21346_21743 = ((G__21357_21738)?v.buf:null);
var G__21347_21744 = ((G__21358_21739)?v2.buf:null);
var G__21348_21745 = (G__21345_21742[(0)]);
var G__21349_21746 = (G__21345_21742[(1)]);
var G__21350_21747 = (G__21345_21742[(2)]);
var G__21351_21748 = ((G__21357_21738)?(G__21346_21743[(0)]):(cljs.core.truth_(G__21359_21740)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__21352_21749 = ((G__21357_21738)?(G__21346_21743[(1)]):(cljs.core.truth_(G__21359_21740)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__21353_21750 = ((G__21357_21738)?(G__21346_21743[(2)]):(cljs.core.truth_(G__21359_21740)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__21354_21751 = ((G__21358_21739)?(G__21347_21744[(0)]):(cljs.core.truth_(G__21360_21741)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__21355_21752 = ((G__21358_21739)?(G__21347_21744[(1)]):(cljs.core.truth_(G__21360_21741)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__21356_21753 = ((G__21358_21739)?(G__21347_21744[(2)]):(cljs.core.truth_(G__21360_21741)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(b[(0)] = (((G__21351_21748 - G__21348_21745) * G__21354_21751) + G__21348_21745));

(b[(1)] = (((G__21352_21749 - G__21349_21746) * G__21355_21752) + G__21349_21746));

(b[(2)] = (((G__21353_21750 - G__21350_21747) * G__21356_21753) + G__21350_21747));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((3)));
var dv_QMARK_ = (d instanceof thi.ng.geom.core.vector.Vec3);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(1),0.0)));
var dz = ((dv_QMARK_)?(dv[(2)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(2),0.0)));
var G__21373_21754 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__21374_21755 = (c instanceof thi.ng.geom.core.vector.Vec3);
var G__21375_21756 = ((!(G__21373_21754))?typeof b === 'number':null);
var G__21376_21757 = ((!(G__21374_21755))?typeof c === 'number':null);
var G__21361_21758 = self__.buf;
var G__21362_21759 = ((G__21373_21754)?b.buf:null);
var G__21363_21760 = ((G__21374_21755)?c.buf:null);
var G__21364_21761 = (G__21361_21758[(0)]);
var G__21365_21762 = (G__21361_21758[(1)]);
var G__21366_21763 = (G__21361_21758[(2)]);
var G__21367_21764 = ((G__21373_21754)?(G__21362_21759[(0)]):(cljs.core.truth_(G__21375_21756)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__21368_21765 = ((G__21373_21754)?(G__21362_21759[(1)]):(cljs.core.truth_(G__21375_21756)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__21369_21766 = ((G__21373_21754)?(G__21362_21759[(2)]):(cljs.core.truth_(G__21375_21756)?b:cljs.core.nth.call(null,b,(2),0.0)));
var G__21370_21767 = ((G__21374_21755)?(G__21363_21760[(0)]):(cljs.core.truth_(G__21376_21757)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__21371_21768 = ((G__21374_21755)?(G__21363_21760[(1)]):(cljs.core.truth_(G__21376_21757)?c:cljs.core.nth.call(null,c,(1),0.0)));
var G__21372_21769 = ((G__21374_21755)?(G__21363_21760[(2)]):(cljs.core.truth_(G__21376_21757)?c:cljs.core.nth.call(null,c,(2),0.0)));
var x1_21770 = (((G__21367_21764 - G__21364_21761) * u) + G__21364_21761);
var y1_21771 = (((G__21368_21765 - G__21365_21762) * u) + G__21365_21762);
var z1_21772 = (((G__21369_21766 - G__21366_21763) * u) + G__21366_21763);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__21370_21767) * u) + G__21370_21767) - x1_21770) * v) + x1_21770));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__21371_21768) * u) + G__21371_21768) - y1_21771) * v) + y1_21771));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__21372_21769) * u) + G__21372_21769) - z1_21772) * v) + z1_21772));

return (new thi.ng.geom.core.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PLimit$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PLimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.geom.core.mag_squared.call(null,___$1) > (len * len))){
return thi.ng.geom.core.normalize.call(null,___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$ = true;

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var r = thi.ng.geom.core.mag.call(null,___$1);
var b = (new Float32Array((3)));
(b[(0)] = r);

(b[(1)] = Math.asin(((self__.buf[(2)]) / r)));

(b[(2)] = Math.atan2((self__.buf[(1)]),(self__.buf[(0)])));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = self__.buf;
var x = (b[(0)]);
var y = (b[(1)]);
var z = (b[(2)]);
var rcos = (x * Math.cos(y));
var b_SINGLEQUOTE_ = (new Float32Array((3)));
(b_SINGLEQUOTE_[(0)] = (rcos * Math.cos(z)));

(b_SINGLEQUOTE_[(1)] = (rcos * Math.sin(z)));

(b_SINGLEQUOTE_[(2)] = (x * Math.sin(y)));

return (new thi.ng.geom.core.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.core.vector.Vec3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.core.vector.Vec3.cljs$lang$type = true;

thi.ng.geom.core.vector.Vec3.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec3";

thi.ng.geom.core.vector.Vec3.cljs$lang$ctorPrWriter = (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"thi.ng.geom.core.vector/Vec3");
});

thi.ng.geom.core.vector.__GT_Vec3 = (function thi$ng$geom$core$vector$__GT_Vec3(buf,_hash,_meta){
return (new thi.ng.geom.core.vector.Vec3(buf,_hash,_meta));
});

thi.ng.geom.core.vector.x = (function thi$ng$geom$core$vector$x(G__21775){
var G__21773 = (((G__21775 instanceof thi.ng.geom.core.vector.Vec2))?G__21775.buf:G__21775.buf);
return (G__21773[(0)]);
});
thi.ng.geom.core.vector.xx = (function thi$ng$geom$core$vector$xx(G__21778){
var G__21776 = (((G__21778 instanceof thi.ng.geom.core.vector.Vec2))?G__21778.buf:G__21778.buf);
var G__21777 = (new Float32Array(2));
(G__21777[(0)] = (G__21776[(0)]));

(G__21777[(1)] = (G__21776[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__21777,null,cljs.core.meta.call(null,G__21778)));
});
thi.ng.geom.core.vector.xxx = (function thi$ng$geom$core$vector$xxx(G__21781){
var G__21779 = (((G__21781 instanceof thi.ng.geom.core.vector.Vec2))?G__21781.buf:G__21781.buf);
var G__21780 = (new Float32Array(3));
(G__21780[(0)] = (G__21779[(0)]));

(G__21780[(1)] = (G__21779[(0)]));

(G__21780[(2)] = (G__21779[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__21780,null,cljs.core.meta.call(null,G__21781)));
});
thi.ng.geom.core.vector.xxy = (function thi$ng$geom$core$vector$xxy(G__21784){
var G__21782 = (((G__21784 instanceof thi.ng.geom.core.vector.Vec2))?G__21784.buf:G__21784.buf);
var G__21783 = (new Float32Array(3));
(G__21783[(0)] = (G__21782[(0)]));

(G__21783[(1)] = (G__21782[(0)]));

(G__21783[(2)] = (G__21782[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__21783,null,cljs.core.meta.call(null,G__21784)));
});
thi.ng.geom.core.vector.xxz = (function thi$ng$geom$core$vector$xxz(G__21787){
if((G__21787 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21787","G__21787",-1754468784,null))))].join('')));
}

var G__21785 = (((G__21787 instanceof thi.ng.geom.core.vector.Vec2))?G__21787.buf:G__21787.buf);
var G__21786 = (new Float32Array(3));
(G__21786[(0)] = (G__21785[(0)]));

(G__21786[(1)] = (G__21785[(0)]));

(G__21786[(2)] = (G__21785[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__21786,null,cljs.core.meta.call(null,G__21787)));
});
thi.ng.geom.core.vector.xy = (function thi$ng$geom$core$vector$xy(G__21790){
var G__21788 = (((G__21790 instanceof thi.ng.geom.core.vector.Vec2))?G__21790.buf:G__21790.buf);
var G__21789 = (new Float32Array(2));
(G__21789[(0)] = (G__21788[(0)]));

(G__21789[(1)] = (G__21788[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__21789,null,cljs.core.meta.call(null,G__21790)));
});
thi.ng.geom.core.vector.xyx = (function thi$ng$geom$core$vector$xyx(G__21793){
var G__21791 = (((G__21793 instanceof thi.ng.geom.core.vector.Vec2))?G__21793.buf:G__21793.buf);
var G__21792 = (new Float32Array(3));
(G__21792[(0)] = (G__21791[(0)]));

(G__21792[(1)] = (G__21791[(1)]));

(G__21792[(2)] = (G__21791[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__21792,null,cljs.core.meta.call(null,G__21793)));
});
thi.ng.geom.core.vector.xyy = (function thi$ng$geom$core$vector$xyy(G__21796){
var G__21794 = (((G__21796 instanceof thi.ng.geom.core.vector.Vec2))?G__21796.buf:G__21796.buf);
var G__21795 = (new Float32Array(3));
(G__21795[(0)] = (G__21794[(0)]));

(G__21795[(1)] = (G__21794[(1)]));

(G__21795[(2)] = (G__21794[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__21795,null,cljs.core.meta.call(null,G__21796)));
});
thi.ng.geom.core.vector.xyz = (function thi$ng$geom$core$vector$xyz(G__21799){
if((G__21799 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21799","G__21799",-508692005,null))))].join('')));
}

var G__21797 = (((G__21799 instanceof thi.ng.geom.core.vector.Vec2))?G__21799.buf:G__21799.buf);
var G__21798 = (new Float32Array(3));
(G__21798[(0)] = (G__21797[(0)]));

(G__21798[(1)] = (G__21797[(1)]));

(G__21798[(2)] = (G__21797[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__21798,null,cljs.core.meta.call(null,G__21799)));
});
thi.ng.geom.core.vector.xz = (function thi$ng$geom$core$vector$xz(G__21802){
if((G__21802 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21802","G__21802",-1538396462,null))))].join('')));
}

var G__21800 = (((G__21802 instanceof thi.ng.geom.core.vector.Vec2))?G__21802.buf:G__21802.buf);
var G__21801 = (new Float32Array(2));
(G__21801[(0)] = (G__21800[(0)]));

(G__21801[(1)] = (G__21800[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__21801,null,cljs.core.meta.call(null,G__21802)));
});
thi.ng.geom.core.vector.xzx = (function thi$ng$geom$core$vector$xzx(G__21805){
if((G__21805 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21805","G__21805",-31841865,null))))].join('')));
}

var G__21803 = (((G__21805 instanceof thi.ng.geom.core.vector.Vec2))?G__21805.buf:G__21805.buf);
var G__21804 = (new Float32Array(3));
(G__21804[(0)] = (G__21803[(0)]));

(G__21804[(1)] = (G__21803[(2)]));

(G__21804[(2)] = (G__21803[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__21804,null,cljs.core.meta.call(null,G__21805)));
});
thi.ng.geom.core.vector.xzy = (function thi$ng$geom$core$vector$xzy(G__21808){
if((G__21808 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21808","G__21808",-1044055644,null))))].join('')));
}

var G__21806 = (((G__21808 instanceof thi.ng.geom.core.vector.Vec2))?G__21808.buf:G__21808.buf);
var G__21807 = (new Float32Array(3));
(G__21807[(0)] = (G__21806[(0)]));

(G__21807[(1)] = (G__21806[(2)]));

(G__21807[(2)] = (G__21806[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__21807,null,cljs.core.meta.call(null,G__21808)));
});
thi.ng.geom.core.vector.xzz = (function thi$ng$geom$core$vector$xzz(G__21811){
if((G__21811 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21811","G__21811",676273181,null))))].join('')));
}

var G__21809 = (((G__21811 instanceof thi.ng.geom.core.vector.Vec2))?G__21811.buf:G__21811.buf);
var G__21810 = (new Float32Array(3));
(G__21810[(0)] = (G__21809[(0)]));

(G__21810[(1)] = (G__21809[(2)]));

(G__21810[(2)] = (G__21809[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__21810,null,cljs.core.meta.call(null,G__21811)));
});
thi.ng.geom.core.vector.y = (function thi$ng$geom$core$vector$y(G__21814){
var G__21812 = (((G__21814 instanceof thi.ng.geom.core.vector.Vec2))?G__21814.buf:G__21814.buf);
return (G__21812[(1)]);
});
thi.ng.geom.core.vector.yx = (function thi$ng$geom$core$vector$yx(G__21817){
var G__21815 = (((G__21817 instanceof thi.ng.geom.core.vector.Vec2))?G__21817.buf:G__21817.buf);
var G__21816 = (new Float32Array(2));
(G__21816[(0)] = (G__21815[(1)]));

(G__21816[(1)] = (G__21815[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__21816,null,cljs.core.meta.call(null,G__21817)));
});
thi.ng.geom.core.vector.yxx = (function thi$ng$geom$core$vector$yxx(G__21820){
var G__21818 = (((G__21820 instanceof thi.ng.geom.core.vector.Vec2))?G__21820.buf:G__21820.buf);
var G__21819 = (new Float32Array(3));
(G__21819[(0)] = (G__21818[(1)]));

(G__21819[(1)] = (G__21818[(0)]));

(G__21819[(2)] = (G__21818[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__21819,null,cljs.core.meta.call(null,G__21820)));
});
thi.ng.geom.core.vector.yxy = (function thi$ng$geom$core$vector$yxy(G__21823){
var G__21821 = (((G__21823 instanceof thi.ng.geom.core.vector.Vec2))?G__21823.buf:G__21823.buf);
var G__21822 = (new Float32Array(3));
(G__21822[(0)] = (G__21821[(1)]));

(G__21822[(1)] = (G__21821[(0)]));

(G__21822[(2)] = (G__21821[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__21822,null,cljs.core.meta.call(null,G__21823)));
});
thi.ng.geom.core.vector.yxz = (function thi$ng$geom$core$vector$yxz(G__21826){
if((G__21826 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21826","G__21826",-1764872665,null))))].join('')));
}

var G__21824 = (((G__21826 instanceof thi.ng.geom.core.vector.Vec2))?G__21826.buf:G__21826.buf);
var G__21825 = (new Float32Array(3));
(G__21825[(0)] = (G__21824[(1)]));

(G__21825[(1)] = (G__21824[(0)]));

(G__21825[(2)] = (G__21824[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__21825,null,cljs.core.meta.call(null,G__21826)));
});
thi.ng.geom.core.vector.yy = (function thi$ng$geom$core$vector$yy(G__21829){
var G__21827 = (((G__21829 instanceof thi.ng.geom.core.vector.Vec2))?G__21829.buf:G__21829.buf);
var G__21828 = (new Float32Array(2));
(G__21828[(0)] = (G__21827[(1)]));

(G__21828[(1)] = (G__21827[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__21828,null,cljs.core.meta.call(null,G__21829)));
});
thi.ng.geom.core.vector.yyx = (function thi$ng$geom$core$vector$yyx(G__21832){
var G__21830 = (((G__21832 instanceof thi.ng.geom.core.vector.Vec2))?G__21832.buf:G__21832.buf);
var G__21831 = (new Float32Array(3));
(G__21831[(0)] = (G__21830[(1)]));

(G__21831[(1)] = (G__21830[(1)]));

(G__21831[(2)] = (G__21830[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__21831,null,cljs.core.meta.call(null,G__21832)));
});
thi.ng.geom.core.vector.yyy = (function thi$ng$geom$core$vector$yyy(G__21835){
var G__21833 = (((G__21835 instanceof thi.ng.geom.core.vector.Vec2))?G__21835.buf:G__21835.buf);
var G__21834 = (new Float32Array(3));
(G__21834[(0)] = (G__21833[(1)]));

(G__21834[(1)] = (G__21833[(1)]));

(G__21834[(2)] = (G__21833[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__21834,null,cljs.core.meta.call(null,G__21835)));
});
thi.ng.geom.core.vector.yyz = (function thi$ng$geom$core$vector$yyz(G__21838){
if((G__21838 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21838","G__21838",-141916346,null))))].join('')));
}

var G__21836 = (((G__21838 instanceof thi.ng.geom.core.vector.Vec2))?G__21838.buf:G__21838.buf);
var G__21837 = (new Float32Array(3));
(G__21837[(0)] = (G__21836[(1)]));

(G__21837[(1)] = (G__21836[(1)]));

(G__21837[(2)] = (G__21836[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__21837,null,cljs.core.meta.call(null,G__21838)));
});
thi.ng.geom.core.vector.yz = (function thi$ng$geom$core$vector$yz(G__21841){
if((G__21841 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21841","G__21841",1713856856,null))))].join('')));
}

var G__21839 = (((G__21841 instanceof thi.ng.geom.core.vector.Vec2))?G__21841.buf:G__21841.buf);
var G__21840 = (new Float32Array(2));
(G__21840[(0)] = (G__21839[(1)]));

(G__21840[(1)] = (G__21839[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__21840,null,cljs.core.meta.call(null,G__21841)));
});
thi.ng.geom.core.vector.yzx = (function thi$ng$geom$core$vector$yzx(G__21844){
if((G__21844 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21844","G__21844",1352993715,null))))].join('')));
}

var G__21842 = (((G__21844 instanceof thi.ng.geom.core.vector.Vec2))?G__21844.buf:G__21844.buf);
var G__21843 = (new Float32Array(3));
(G__21843[(0)] = (G__21842[(1)]));

(G__21843[(1)] = (G__21842[(2)]));

(G__21843[(2)] = (G__21842[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__21843,null,cljs.core.meta.call(null,G__21844)));
});
thi.ng.geom.core.vector.yzy = (function thi$ng$geom$core$vector$yzy(G__21847){
if((G__21847 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21847","G__21847",270898303,null))))].join('')));
}

var G__21845 = (((G__21847 instanceof thi.ng.geom.core.vector.Vec2))?G__21847.buf:G__21847.buf);
var G__21846 = (new Float32Array(3));
(G__21846[(0)] = (G__21845[(1)]));

(G__21846[(1)] = (G__21845[(2)]));

(G__21846[(2)] = (G__21845[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__21846,null,cljs.core.meta.call(null,G__21847)));
});
thi.ng.geom.core.vector.yzz = (function thi$ng$geom$core$vector$yzz(G__21850){
if((G__21850 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21850","G__21850",1178243902,null))))].join('')));
}

var G__21848 = (((G__21850 instanceof thi.ng.geom.core.vector.Vec2))?G__21850.buf:G__21850.buf);
var G__21849 = (new Float32Array(3));
(G__21849[(0)] = (G__21848[(1)]));

(G__21849[(1)] = (G__21848[(2)]));

(G__21849[(2)] = (G__21848[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__21849,null,cljs.core.meta.call(null,G__21850)));
});
thi.ng.geom.core.vector.z = (function thi$ng$geom$core$vector$z(G__21853){
if((G__21853 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21853","G__21853",-1153012558,null))))].join('')));
}

var G__21851 = (((G__21853 instanceof thi.ng.geom.core.vector.Vec2))?G__21853.buf:G__21853.buf);
return (G__21851[(2)]);
});
thi.ng.geom.core.vector.zx = (function thi$ng$geom$core$vector$zx(G__21856){
if((G__21856 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21856","G__21856",-1326970238,null))))].join('')));
}

var G__21854 = (((G__21856 instanceof thi.ng.geom.core.vector.Vec2))?G__21856.buf:G__21856.buf);
var G__21855 = (new Float32Array(2));
(G__21855[(0)] = (G__21854[(2)]));

(G__21855[(1)] = (G__21854[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__21855,null,cljs.core.meta.call(null,G__21856)));
});
thi.ng.geom.core.vector.zxx = (function thi$ng$geom$core$vector$zxx(G__21859){
if((G__21859 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21859","G__21859",479135244,null))))].join('')));
}

var G__21857 = (((G__21859 instanceof thi.ng.geom.core.vector.Vec2))?G__21859.buf:G__21859.buf);
var G__21858 = (new Float32Array(3));
(G__21858[(0)] = (G__21857[(2)]));

(G__21858[(1)] = (G__21857[(0)]));

(G__21858[(2)] = (G__21857[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__21858,null,cljs.core.meta.call(null,G__21859)));
});
thi.ng.geom.core.vector.zxy = (function thi$ng$geom$core$vector$zxy(G__21862){
if((G__21862 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21862","G__21862",-2002301257,null))))].join('')));
}

var G__21860 = (((G__21862 instanceof thi.ng.geom.core.vector.Vec2))?G__21862.buf:G__21862.buf);
var G__21861 = (new Float32Array(3));
(G__21861[(0)] = (G__21860[(2)]));

(G__21861[(1)] = (G__21860[(0)]));

(G__21861[(2)] = (G__21860[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__21861,null,cljs.core.meta.call(null,G__21862)));
});
thi.ng.geom.core.vector.zxz = (function thi$ng$geom$core$vector$zxz(G__21865){
if((G__21865 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21865","G__21865",-1807425249,null))))].join('')));
}

var G__21863 = (((G__21865 instanceof thi.ng.geom.core.vector.Vec2))?G__21865.buf:G__21865.buf);
var G__21864 = (new Float32Array(3));
(G__21864[(0)] = (G__21863[(2)]));

(G__21864[(1)] = (G__21863[(0)]));

(G__21864[(2)] = (G__21863[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__21864,null,cljs.core.meta.call(null,G__21865)));
});
thi.ng.geom.core.vector.zy = (function thi$ng$geom$core$vector$zy(G__21868){
if((G__21868 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21868","G__21868",965574793,null))))].join('')));
}

var G__21866 = (((G__21868 instanceof thi.ng.geom.core.vector.Vec2))?G__21868.buf:G__21868.buf);
var G__21867 = (new Float32Array(2));
(G__21867[(0)] = (G__21866[(2)]));

(G__21867[(1)] = (G__21866[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__21867,null,cljs.core.meta.call(null,G__21868)));
});
thi.ng.geom.core.vector.zyx = (function thi$ng$geom$core$vector$zyx(G__21871){
if((G__21871 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21871","G__21871",714667611,null))))].join('')));
}

var G__21869 = (((G__21871 instanceof thi.ng.geom.core.vector.Vec2))?G__21871.buf:G__21871.buf);
var G__21870 = (new Float32Array(3));
(G__21870[(0)] = (G__21869[(2)]));

(G__21870[(1)] = (G__21869[(1)]));

(G__21870[(2)] = (G__21869[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__21870,null,cljs.core.meta.call(null,G__21871)));
});
thi.ng.geom.core.vector.zyy = (function thi$ng$geom$core$vector$zyy(G__21874){
if((G__21874 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21874","G__21874",-173282963,null))))].join('')));
}

var G__21872 = (((G__21874 instanceof thi.ng.geom.core.vector.Vec2))?G__21874.buf:G__21874.buf);
var G__21873 = (new Float32Array(3));
(G__21873[(0)] = (G__21872[(2)]));

(G__21873[(1)] = (G__21872[(1)]));

(G__21873[(2)] = (G__21872[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__21873,null,cljs.core.meta.call(null,G__21874)));
});
thi.ng.geom.core.vector.zyz = (function thi$ng$geom$core$vector$zyz(G__21877){
if((G__21877 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21877","G__21877",-290126678,null))))].join('')));
}

var G__21875 = (((G__21877 instanceof thi.ng.geom.core.vector.Vec2))?G__21877.buf:G__21877.buf);
var G__21876 = (new Float32Array(3));
(G__21876[(0)] = (G__21875[(2)]));

(G__21876[(1)] = (G__21875[(1)]));

(G__21876[(2)] = (G__21875[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__21876,null,cljs.core.meta.call(null,G__21877)));
});
thi.ng.geom.core.vector.zz = (function thi$ng$geom$core$vector$zz(G__21880){
if((G__21880 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21880","G__21880",-831746745,null))))].join('')));
}

var G__21878 = (((G__21880 instanceof thi.ng.geom.core.vector.Vec2))?G__21880.buf:G__21880.buf);
var G__21879 = (new Float32Array(2));
(G__21879[(0)] = (G__21878[(2)]));

(G__21879[(1)] = (G__21878[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__21879,null,cljs.core.meta.call(null,G__21880)));
});
thi.ng.geom.core.vector.zzx = (function thi$ng$geom$core$vector$zzx(G__21883){
if((G__21883 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21883","G__21883",307590987,null))))].join('')));
}

var G__21881 = (((G__21883 instanceof thi.ng.geom.core.vector.Vec2))?G__21883.buf:G__21883.buf);
var G__21882 = (new Float32Array(3));
(G__21882[(0)] = (G__21881[(2)]));

(G__21882[(1)] = (G__21881[(2)]));

(G__21882[(2)] = (G__21881[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__21882,null,cljs.core.meta.call(null,G__21883)));
});
thi.ng.geom.core.vector.zzy = (function thi$ng$geom$core$vector$zzy(G__21886){
if((G__21886 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21886","G__21886",-19966401,null))))].join('')));
}

var G__21884 = (((G__21886 instanceof thi.ng.geom.core.vector.Vec2))?G__21886.buf:G__21886.buf);
var G__21885 = (new Float32Array(3));
(G__21885[(0)] = (G__21884[(2)]));

(G__21885[(1)] = (G__21884[(2)]));

(G__21885[(2)] = (G__21884[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__21885,null,cljs.core.meta.call(null,G__21886)));
});
thi.ng.geom.core.vector.zzz = (function thi$ng$geom$core$vector$zzz(G__21889){
if((G__21889 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("clojure.core","instance?","clojure.core/instance?",2143709132,null),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null),new cljs.core.Symbol(null,"G__21889","G__21889",1217765402,null))))].join('')));
}

var G__21887 = (((G__21889 instanceof thi.ng.geom.core.vector.Vec2))?G__21889.buf:G__21889.buf);
var G__21888 = (new Float32Array(3));
(G__21888[(0)] = (G__21887[(2)]));

(G__21888[(1)] = (G__21887[(2)]));

(G__21888[(2)] = (G__21887[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__21888,null,cljs.core.meta.call(null,G__21889)));
});
thi.ng.geom.core.vector.swizzle2_fns = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.core.vector.x,new cljs.core.Keyword(null,"xx","xx",-1542203733),thi.ng.geom.core.vector.xx,new cljs.core.Keyword(null,"xy","xy",-696978232),thi.ng.geom.core.vector.xy,new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.core.vector.y,new cljs.core.Keyword(null,"yx","yx",1696579752),thi.ng.geom.core.vector.yx,new cljs.core.Keyword(null,"yy","yy",-1432012814),thi.ng.geom.core.vector.yy], null);
thi.ng.geom.core.vector.swizzle3_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"xzx","xzx",-1000197983),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),new cljs.core.Keyword(null,"zzy","zzy",-874287326),new cljs.core.Keyword(null,"yx","yx",1696579752),new cljs.core.Keyword(null,"xy","xy",-696978232),new cljs.core.Keyword(null,"yyz","yyz",1133968296),new cljs.core.Keyword(null,"zxy","zxy",-1258840183),new cljs.core.Keyword(null,"xzy","xzy",1043177385),new cljs.core.Keyword(null,"zxz","zxz",1026042602),new cljs.core.Keyword(null,"zx","zx",-933582998),new cljs.core.Keyword(null,"xx","xx",-1542203733),new cljs.core.Keyword(null,"xxx","xxx",-1019301908),new cljs.core.Keyword(null,"zy","zy",-1975963090),new cljs.core.Keyword(null,"zzx","zzx",20750383),new cljs.core.Keyword(null,"zyx","zyx",1752527951),new cljs.core.Keyword(null,"yzx","yzx",-1496223025),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"yyx","yyx",-1318218191),new cljs.core.Keyword(null,"xz","xz",426487154),new cljs.core.Keyword(null,"zyz","zyz",-1838068142),new cljs.core.Keyword(null,"yy","yy",-1432012814),new cljs.core.Keyword(null,"xxz","xxz",129827699),new cljs.core.Keyword(null,"yzy","yzy",-179510251),new cljs.core.Keyword(null,"yz","yz",679015029),new cljs.core.Keyword(null,"yxx","yxx",-332290091),new cljs.core.Keyword(null,"xyy","xyy",996073014),new cljs.core.Keyword(null,"xxy","xxy",-650102026),new cljs.core.Keyword(null,"zz","zz",122901783),new cljs.core.Keyword(null,"zzz","zzz",-77420552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xzz","xzz",-643126693),new cljs.core.Keyword(null,"yxz","yxz",1786796508),new cljs.core.Keyword(null,"zxx","zxx",-61980804),new cljs.core.Keyword(null,"yzz","yzz",-1034441732),new cljs.core.Keyword(null,"xyx","xyx",1899467293),new cljs.core.Keyword(null,"yxy","yxy",1369901661),new cljs.core.Keyword(null,"yyy","yyy",780595422),new cljs.core.Keyword(null,"zyy","zyy",1946268991)],[thi.ng.geom.core.vector.y,thi.ng.geom.core.vector.xzx,thi.ng.geom.core.vector.xyz,thi.ng.geom.core.vector.zzy,thi.ng.geom.core.vector.yx,thi.ng.geom.core.vector.xy,thi.ng.geom.core.vector.yyz,thi.ng.geom.core.vector.zxy,thi.ng.geom.core.vector.xzy,thi.ng.geom.core.vector.zxz,thi.ng.geom.core.vector.zx,thi.ng.geom.core.vector.xx,thi.ng.geom.core.vector.xxx,thi.ng.geom.core.vector.zy,thi.ng.geom.core.vector.zzx,thi.ng.geom.core.vector.zyx,thi.ng.geom.core.vector.yzx,thi.ng.geom.core.vector.z,thi.ng.geom.core.vector.yyx,thi.ng.geom.core.vector.xz,thi.ng.geom.core.vector.zyz,thi.ng.geom.core.vector.yy,thi.ng.geom.core.vector.xxz,thi.ng.geom.core.vector.yzy,thi.ng.geom.core.vector.yz,thi.ng.geom.core.vector.yxx,thi.ng.geom.core.vector.xyy,thi.ng.geom.core.vector.xxy,thi.ng.geom.core.vector.zz,thi.ng.geom.core.vector.zzz,thi.ng.geom.core.vector.x,thi.ng.geom.core.vector.xzz,thi.ng.geom.core.vector.yxz,thi.ng.geom.core.vector.zxx,thi.ng.geom.core.vector.yzz,thi.ng.geom.core.vector.xyx,thi.ng.geom.core.vector.yxy,thi.ng.geom.core.vector.yyy,thi.ng.geom.core.vector.zyy]);
thi.ng.geom.core.vector.swizzle_assoc_STAR_ = (function thi$ng$geom$core$vector$swizzle_assoc_STAR_(src,dest,keymap,k,v){
var n = cljs.core.name.call(null,k);
var c = cljs.core.count.call(null,n);
var temp__4655__auto__ = (function (){var and__18263__auto__ = ((1) === c);
if(and__18263__auto__){
return keymap.call(null,cljs.core.first.call(null,n));
} else {
return and__18263__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var idx = temp__4655__auto__;
(dest[(idx | (0))] = v);

return dest;
} else {
if(((c <= cljs.core.count.call(null,keymap))) && (((c === cljs.core.count.call(null,v))) && ((cljs.core.count.call(null,v) === cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,n)))))){
var i = (0);
var n__$1 = n;
while(true){
if(cljs.core.truth_(n__$1)){
var temp__4655__auto____$1 = keymap.call(null,cljs.core.first.call(null,n__$1));
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
(dest[(idx | (0))] = v.call(null,i));

var G__21890 = (i + (1));
var G__21891 = cljs.core.next.call(null,n__$1);
i = G__21890;
n__$1 = G__21891;
continue;
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
return dest;
}
break;
}
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
thi.ng.geom.core.vector.vec2_reduce_STAR_ = (function thi$ng$geom$core$vector$vec2_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__21892 = null;
var G__21892__1 = (function (a){
return a;
});
var G__21892__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

return a;
});
G__21892 = function(a,b){
switch(arguments.length){
case 1:
return G__21892__1.call(this,a);
case 2:
return G__21892__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21892.cljs$core$IFn$_invoke$arity$1 = G__21892__1;
G__21892.cljs$core$IFn$_invoke$arity$2 = G__21892__2;
return G__21892;
})()
,acc,xs);
});
thi.ng.geom.core.vector.vec3_reduce_STAR_ = (function thi$ng$geom$core$vector$vec3_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__21893 = null;
var G__21893__1 = (function (a){
return a;
});
var G__21893__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

(a[(2)] = op.call(null,(a[(2)]),(b[(2)])));

return a;
});
G__21893 = function(a,b){
switch(arguments.length){
case 1:
return G__21893__1.call(this,a);
case 2:
return G__21893__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21893.cljs$core$IFn$_invoke$arity$1 = G__21893__1;
G__21893.cljs$core$IFn$_invoke$arity$2 = G__21893__2;
return G__21893;
})()
,acc,xs);
});
thi.ng.geom.core.vector.V2 = (new thi.ng.geom.core.vector.Vec2((new Float32Array((2))),null,null));
thi.ng.geom.core.vector.V3 = (new thi.ng.geom.core.vector.Vec3((new Float32Array((3))),null,null));
thi.ng.geom.core.vector.vec2 = (function thi$ng$geom$core$vector$vec2(var_args){
var args21894 = [];
var len__19333__auto___21897 = arguments.length;
var i__19334__auto___21898 = (0);
while(true){
if((i__19334__auto___21898 < len__19333__auto___21897)){
args21894.push((arguments[i__19334__auto___21898]));

var G__21899 = (i__19334__auto___21898 + (1));
i__19334__auto___21898 = G__21899;
continue;
} else {
}
break;
}

var G__21896 = args21894.length;
switch (G__21896) {
case 0:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21894.length)].join('')));

}
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.vector.V2;
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.core.vector.Vec2)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec2.call(null,v,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0));
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec2",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.core.vector.Vec2(b,null,null));
});

thi.ng.geom.core.vector.vec2.cljs$lang$maxFixedArity = 2;
thi.ng.geom.core.vector.vec3 = (function thi$ng$geom$core$vector$vec3(var_args){
var args21901 = [];
var len__19333__auto___21904 = arguments.length;
var i__19334__auto___21905 = (0);
while(true){
if((i__19334__auto___21905 < len__19333__auto___21904)){
args21901.push((arguments[i__19334__auto___21905]));

var G__21906 = (i__19334__auto___21905 + (1));
i__19334__auto___21905 = G__21906;
continue;
} else {
}
break;
}

var G__21903 = args21901.length;
switch (G__21903) {
case 0:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21901.length)].join('')));

}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.vector.V3;
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.core.vector.Vec3)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3.call(null,v,v,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),cljs.core.nth.call(null,v,(2),0.0));
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$2(v,(0)));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$2 = (function (v,z){
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),z);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)),z);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3.call(null,v,z,(0));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
});

thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.core.vector.Vec3(b,null,null));
});

thi.ng.geom.core.vector.vec3.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.vector.vec2_with_meta = (function thi$ng$geom$core$vector$vec2_with_meta(var_args){
var args21908 = [];
var len__19333__auto___21911 = arguments.length;
var i__19334__auto___21912 = (0);
while(true){
if((i__19334__auto___21912 < len__19333__auto___21911)){
args21908.push((arguments[i__19334__auto___21912]));

var G__21913 = (i__19334__auto___21912 + (1));
i__19334__auto___21912 = G__21913;
continue;
} else {
}
break;
}

var G__21910 = args21908.length;
switch (G__21910) {
case 2:
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21908.length)].join('')));

}
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.core.vector.Vec2)){
return cljs.core.with_meta.call(null,v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec2_with_meta.call(null,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2_with_meta.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),meta);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec2_with_meta.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec2",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3 = (function (x,y,meta){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.core.vector.Vec2(b,null,meta));
});

thi.ng.geom.core.vector.vec2_with_meta.cljs$lang$maxFixedArity = 3;
thi.ng.geom.core.vector.vec3_with_meta = (function thi$ng$geom$core$vector$vec3_with_meta(var_args){
var args21915 = [];
var len__19333__auto___21918 = arguments.length;
var i__19334__auto___21919 = (0);
while(true){
if((i__19334__auto___21919 < len__19333__auto___21918)){
args21915.push((arguments[i__19334__auto___21919]));

var G__21920 = (i__19334__auto___21919 + (1));
i__19334__auto___21919 = G__21920;
continue;
} else {
}
break;
}

var G__21917 = args21915.length;
switch (G__21917) {
case 2:
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21915.length)].join('')));

}
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.core.vector.Vec3)){
return cljs.core.with_meta.call(null,v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3_with_meta.call(null,v,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3_with_meta.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),cljs.core.nth.call(null,v,(2),0.0),meta);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.core.vector.vec3_with_meta.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$2(v,0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
}
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,meta){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.core.vector.Vec3(b,null,meta));
});

thi.ng.geom.core.vector.vec3_with_meta.cljs$lang$maxFixedArity = 4;
thi.ng.geom.core.vector.vec2_QMARK_ = (function thi$ng$geom$core$vector$vec2_QMARK_(x){
return (x instanceof thi.ng.geom.core.vector.Vec2);
});
thi.ng.geom.core.vector.vec3_QMARK_ = (function thi$ng$geom$core$vector$vec3_QMARK_(x){
return (x instanceof thi.ng.geom.core.vector.Vec3);
});
thi.ng.geom.core.vector.V2X = thi.ng.geom.core.vector.vec2.call(null,(1),(0));
thi.ng.geom.core.vector.V2Y = thi.ng.geom.core.vector.vec2.call(null,(0),(1));
thi.ng.geom.core.vector.V3X = thi.ng.geom.core.vector.vec3.call(null,(1),(0),(0));
thi.ng.geom.core.vector.V3Y = thi.ng.geom.core.vector.vec3.call(null,(0),(1),(0));
thi.ng.geom.core.vector.V3Z = thi.ng.geom.core.vector.vec3.call(null,(0),(0),(1));
thi.ng.geom.core.vector.V2INF_ = thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.INF_);
thi.ng.geom.core.vector.V2INF_PLUS_ = thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.INF_PLUS_);
thi.ng.geom.core.vector.V3INF_ = thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.INF_);
thi.ng.geom.core.vector.V3INF_PLUS_ = thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.INF_PLUS_);
thi.ng.geom.core.vector.randvec2 = (function thi$ng$geom$core$vector$randvec2(var_args){
var args21922 = [];
var len__19333__auto___21925 = arguments.length;
var i__19334__auto___21926 = (0);
while(true){
if((i__19334__auto___21926 < len__19333__auto___21925)){
args21922.push((arguments[i__19334__auto___21926]));

var G__21927 = (i__19334__auto___21926 + (1));
i__19334__auto___21926 = G__21927;
continue;
} else {
}
break;
}

var G__21924 = args21922.length;
switch (G__21924) {
case 0:
return thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21922.length)].join('')));

}
});

thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)));
});

thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)),n);
});

thi.ng.geom.core.vector.randvec2.cljs$lang$maxFixedArity = 1;
thi.ng.geom.core.vector.randvec3 = (function thi$ng$geom$core$vector$randvec3(var_args){
var args21929 = [];
var len__19333__auto___21932 = arguments.length;
var i__19334__auto___21933 = (0);
while(true){
if((i__19334__auto___21933 < len__19333__auto___21932)){
args21929.push((arguments[i__19334__auto___21933]));

var G__21934 = (i__19334__auto___21933 + (1));
i__19334__auto___21933 = G__21934;
continue;
} else {
}
break;
}

var G__21931 = args21929.length;
switch (G__21931) {
case 0:
return thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21929.length)].join('')));

}
});

thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)));
});

thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec3.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)),n);
});

thi.ng.geom.core.vector.randvec3.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=vector.js.map