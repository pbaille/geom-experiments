// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24835 = [];
var len__19333__auto___24841 = arguments.length;
var i__19334__auto___24842 = (0);
while(true){
if((i__19334__auto___24842 < len__19333__auto___24841)){
args24835.push((arguments[i__19334__auto___24842]));

var G__24843 = (i__19334__auto___24842 + (1));
i__19334__auto___24842 = G__24843;
continue;
} else {
}
break;
}

var G__24837 = args24835.length;
switch (G__24837) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24835.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24838 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24838 = (function (f,blockable,meta24839){
this.f = f;
this.blockable = blockable;
this.meta24839 = meta24839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24840,meta24839__$1){
var self__ = this;
var _24840__$1 = this;
return (new cljs.core.async.t_cljs$core$async24838(self__.f,self__.blockable,meta24839__$1));
});

cljs.core.async.t_cljs$core$async24838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24840){
var self__ = this;
var _24840__$1 = this;
return self__.meta24839;
});

cljs.core.async.t_cljs$core$async24838.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24838.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24839","meta24839",-2035405985,null)], null);
});

cljs.core.async.t_cljs$core$async24838.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24838";

cljs.core.async.t_cljs$core$async24838.cljs$lang$ctorPrWriter = (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"cljs.core.async/t_cljs$core$async24838");
});

cljs.core.async.__GT_t_cljs$core$async24838 = (function cljs$core$async$__GT_t_cljs$core$async24838(f__$1,blockable__$1,meta24839){
return (new cljs.core.async.t_cljs$core$async24838(f__$1,blockable__$1,meta24839));
});

}

return (new cljs.core.async.t_cljs$core$async24838(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args24847 = [];
var len__19333__auto___24850 = arguments.length;
var i__19334__auto___24851 = (0);
while(true){
if((i__19334__auto___24851 < len__19333__auto___24850)){
args24847.push((arguments[i__19334__auto___24851]));

var G__24852 = (i__19334__auto___24851 + (1));
i__19334__auto___24851 = G__24852;
continue;
} else {
}
break;
}

var G__24849 = args24847.length;
switch (G__24849) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24847.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args24854 = [];
var len__19333__auto___24857 = arguments.length;
var i__19334__auto___24858 = (0);
while(true){
if((i__19334__auto___24858 < len__19333__auto___24857)){
args24854.push((arguments[i__19334__auto___24858]));

var G__24859 = (i__19334__auto___24858 + (1));
i__19334__auto___24858 = G__24859;
continue;
} else {
}
break;
}

var G__24856 = args24854.length;
switch (G__24856) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24854.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args24861 = [];
var len__19333__auto___24864 = arguments.length;
var i__19334__auto___24865 = (0);
while(true){
if((i__19334__auto___24865 < len__19333__auto___24864)){
args24861.push((arguments[i__19334__auto___24865]));

var G__24866 = (i__19334__auto___24865 + (1));
i__19334__auto___24865 = G__24866;
continue;
} else {
}
break;
}

var G__24863 = args24861.length;
switch (G__24863) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24861.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24868 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24868);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24868,ret){
return (function (){
return fn1.call(null,val_24868);
});})(val_24868,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args24869 = [];
var len__19333__auto___24872 = arguments.length;
var i__19334__auto___24873 = (0);
while(true){
if((i__19334__auto___24873 < len__19333__auto___24872)){
args24869.push((arguments[i__19334__auto___24873]));

var G__24874 = (i__19334__auto___24873 + (1));
i__19334__auto___24873 = G__24874;
continue;
} else {
}
break;
}

var G__24871 = args24869.length;
switch (G__24871) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24869.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19178__auto___24876 = n;
var x_24877 = (0);
while(true){
if((x_24877 < n__19178__auto___24876)){
(a[x_24877] = (0));

var G__24878 = (x_24877 + (1));
x_24877 = G__24878;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24879 = (i + (1));
i = G__24879;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24883 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24883 = (function (alt_flag,flag,meta24884){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24884 = meta24884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24885,meta24884__$1){
var self__ = this;
var _24885__$1 = this;
return (new cljs.core.async.t_cljs$core$async24883(self__.alt_flag,self__.flag,meta24884__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24883.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24885){
var self__ = this;
var _24885__$1 = this;
return self__.meta24884;
});})(flag))
;

cljs.core.async.t_cljs$core$async24883.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24883.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24883.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24884","meta24884",-154792074,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24883.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24883";

cljs.core.async.t_cljs$core$async24883.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"cljs.core.async/t_cljs$core$async24883");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24883 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24883(alt_flag__$1,flag__$1,meta24884){
return (new cljs.core.async.t_cljs$core$async24883(alt_flag__$1,flag__$1,meta24884));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24883(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24889 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24889 = (function (alt_handler,flag,cb,meta24890){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24890 = meta24890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24891,meta24890__$1){
var self__ = this;
var _24891__$1 = this;
return (new cljs.core.async.t_cljs$core$async24889(self__.alt_handler,self__.flag,self__.cb,meta24890__$1));
});

cljs.core.async.t_cljs$core$async24889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24891){
var self__ = this;
var _24891__$1 = this;
return self__.meta24890;
});

cljs.core.async.t_cljs$core$async24889.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24889.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24889.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24889.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24890","meta24890",1939326686,null)], null);
});

cljs.core.async.t_cljs$core$async24889.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24889";

cljs.core.async.t_cljs$core$async24889.cljs$lang$ctorPrWriter = (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"cljs.core.async/t_cljs$core$async24889");
});

cljs.core.async.__GT_t_cljs$core$async24889 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24889(alt_handler__$1,flag__$1,cb__$1,meta24890){
return (new cljs.core.async.t_cljs$core$async24889(alt_handler__$1,flag__$1,cb__$1,meta24890));
});

}

return (new cljs.core.async.t_cljs$core$async24889(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24892_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24892_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24893_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24893_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18275__auto__ = wport;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24894 = (i + (1));
i = G__24894;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18275__auto__ = ret;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18263__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18263__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18263__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19340__auto__ = [];
var len__19333__auto___24900 = arguments.length;
var i__19334__auto___24901 = (0);
while(true){
if((i__19334__auto___24901 < len__19333__auto___24900)){
args__19340__auto__.push((arguments[i__19334__auto___24901]));

var G__24902 = (i__19334__auto___24901 + (1));
i__19334__auto___24901 = G__24902;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((1) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19341__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24897){
var map__24898 = p__24897;
var map__24898__$1 = ((((!((map__24898 == null)))?((((map__24898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24898):map__24898);
var opts = map__24898__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24895){
var G__24896 = cljs.core.first.call(null,seq24895);
var seq24895__$1 = cljs.core.next.call(null,seq24895);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24896,seq24895__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24903 = [];
var len__19333__auto___24953 = arguments.length;
var i__19334__auto___24954 = (0);
while(true){
if((i__19334__auto___24954 < len__19333__auto___24953)){
args24903.push((arguments[i__19334__auto___24954]));

var G__24955 = (i__19334__auto___24954 + (1));
i__19334__auto___24954 = G__24955;
continue;
} else {
}
break;
}

var G__24905 = args24903.length;
switch (G__24905) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24903.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24790__auto___24957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto___24957){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto___24957){
return (function (state_24929){
var state_val_24930 = (state_24929[(1)]);
if((state_val_24930 === (7))){
var inst_24925 = (state_24929[(2)]);
var state_24929__$1 = state_24929;
var statearr_24931_24958 = state_24929__$1;
(statearr_24931_24958[(2)] = inst_24925);

(statearr_24931_24958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (1))){
var state_24929__$1 = state_24929;
var statearr_24932_24959 = state_24929__$1;
(statearr_24932_24959[(2)] = null);

(statearr_24932_24959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (4))){
var inst_24908 = (state_24929[(7)]);
var inst_24908__$1 = (state_24929[(2)]);
var inst_24909 = (inst_24908__$1 == null);
var state_24929__$1 = (function (){var statearr_24933 = state_24929;
(statearr_24933[(7)] = inst_24908__$1);

return statearr_24933;
})();
if(cljs.core.truth_(inst_24909)){
var statearr_24934_24960 = state_24929__$1;
(statearr_24934_24960[(1)] = (5));

} else {
var statearr_24935_24961 = state_24929__$1;
(statearr_24935_24961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (13))){
var state_24929__$1 = state_24929;
var statearr_24936_24962 = state_24929__$1;
(statearr_24936_24962[(2)] = null);

(statearr_24936_24962[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (6))){
var inst_24908 = (state_24929[(7)]);
var state_24929__$1 = state_24929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24929__$1,(11),to,inst_24908);
} else {
if((state_val_24930 === (3))){
var inst_24927 = (state_24929[(2)]);
var state_24929__$1 = state_24929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24929__$1,inst_24927);
} else {
if((state_val_24930 === (12))){
var state_24929__$1 = state_24929;
var statearr_24937_24963 = state_24929__$1;
(statearr_24937_24963[(2)] = null);

(statearr_24937_24963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (2))){
var state_24929__$1 = state_24929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24929__$1,(4),from);
} else {
if((state_val_24930 === (11))){
var inst_24918 = (state_24929[(2)]);
var state_24929__$1 = state_24929;
if(cljs.core.truth_(inst_24918)){
var statearr_24938_24964 = state_24929__$1;
(statearr_24938_24964[(1)] = (12));

} else {
var statearr_24939_24965 = state_24929__$1;
(statearr_24939_24965[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (9))){
var state_24929__$1 = state_24929;
var statearr_24940_24966 = state_24929__$1;
(statearr_24940_24966[(2)] = null);

(statearr_24940_24966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (5))){
var state_24929__$1 = state_24929;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24941_24967 = state_24929__$1;
(statearr_24941_24967[(1)] = (8));

} else {
var statearr_24942_24968 = state_24929__$1;
(statearr_24942_24968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (14))){
var inst_24923 = (state_24929[(2)]);
var state_24929__$1 = state_24929;
var statearr_24943_24969 = state_24929__$1;
(statearr_24943_24969[(2)] = inst_24923);

(statearr_24943_24969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (10))){
var inst_24915 = (state_24929[(2)]);
var state_24929__$1 = state_24929;
var statearr_24944_24970 = state_24929__$1;
(statearr_24944_24970[(2)] = inst_24915);

(statearr_24944_24970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24930 === (8))){
var inst_24912 = cljs.core.async.close_BANG_.call(null,to);
var state_24929__$1 = state_24929;
var statearr_24945_24971 = state_24929__$1;
(statearr_24945_24971[(2)] = inst_24912);

(statearr_24945_24971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24790__auto___24957))
;
return ((function (switch__24678__auto__,c__24790__auto___24957){
return (function() {
var cljs$core$async$state_machine__24679__auto__ = null;
var cljs$core$async$state_machine__24679__auto____0 = (function (){
var statearr_24949 = [null,null,null,null,null,null,null,null];
(statearr_24949[(0)] = cljs$core$async$state_machine__24679__auto__);

(statearr_24949[(1)] = (1));

return statearr_24949;
});
var cljs$core$async$state_machine__24679__auto____1 = (function (state_24929){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_24929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e24950){if((e24950 instanceof Object)){
var ex__24682__auto__ = e24950;
var statearr_24951_24972 = state_24929;
(statearr_24951_24972[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24973 = state_24929;
state_24929 = G__24973;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$state_machine__24679__auto__ = function(state_24929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24679__auto____1.call(this,state_24929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24679__auto____0;
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24679__auto____1;
return cljs$core$async$state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto___24957))
})();
var state__24792__auto__ = (function (){var statearr_24952 = f__24791__auto__.call(null);
(statearr_24952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto___24957);

return statearr_24952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto___24957))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25157){
var vec__25158 = p__25157;
var v = cljs.core.nth.call(null,vec__25158,(0),null);
var p = cljs.core.nth.call(null,vec__25158,(1),null);
var job = vec__25158;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24790__auto___25340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto___25340,res,vec__25158,v,p,job,jobs,results){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto___25340,res,vec__25158,v,p,job,jobs,results){
return (function (state_25163){
var state_val_25164 = (state_25163[(1)]);
if((state_val_25164 === (1))){
var state_25163__$1 = state_25163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25163__$1,(2),res,v);
} else {
if((state_val_25164 === (2))){
var inst_25160 = (state_25163[(2)]);
var inst_25161 = cljs.core.async.close_BANG_.call(null,res);
var state_25163__$1 = (function (){var statearr_25165 = state_25163;
(statearr_25165[(7)] = inst_25160);

return statearr_25165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25163__$1,inst_25161);
} else {
return null;
}
}
});})(c__24790__auto___25340,res,vec__25158,v,p,job,jobs,results))
;
return ((function (switch__24678__auto__,c__24790__auto___25340,res,vec__25158,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____0 = (function (){
var statearr_25169 = [null,null,null,null,null,null,null,null];
(statearr_25169[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__);

(statearr_25169[(1)] = (1));

return statearr_25169;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____1 = (function (state_25163){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_25163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e25170){if((e25170 instanceof Object)){
var ex__24682__auto__ = e25170;
var statearr_25171_25341 = state_25163;
(statearr_25171_25341[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25342 = state_25163;
state_25163 = G__25342;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__ = function(state_25163){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____1.call(this,state_25163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto___25340,res,vec__25158,v,p,job,jobs,results))
})();
var state__24792__auto__ = (function (){var statearr_25172 = f__24791__auto__.call(null);
(statearr_25172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto___25340);

return statearr_25172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto___25340,res,vec__25158,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25173){
var vec__25174 = p__25173;
var v = cljs.core.nth.call(null,vec__25174,(0),null);
var p = cljs.core.nth.call(null,vec__25174,(1),null);
var job = vec__25174;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19178__auto___25343 = n;
var __25344 = (0);
while(true){
if((__25344 < n__19178__auto___25343)){
var G__25175_25345 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25175_25345) {
case "compute":
var c__24790__auto___25347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25344,c__24790__auto___25347,G__25175_25345,n__19178__auto___25343,jobs,results,process,async){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (__25344,c__24790__auto___25347,G__25175_25345,n__19178__auto___25343,jobs,results,process,async){
return (function (state_25188){
var state_val_25189 = (state_25188[(1)]);
if((state_val_25189 === (1))){
var state_25188__$1 = state_25188;
var statearr_25190_25348 = state_25188__$1;
(statearr_25190_25348[(2)] = null);

(statearr_25190_25348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (2))){
var state_25188__$1 = state_25188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25188__$1,(4),jobs);
} else {
if((state_val_25189 === (3))){
var inst_25186 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25188__$1,inst_25186);
} else {
if((state_val_25189 === (4))){
var inst_25178 = (state_25188[(2)]);
var inst_25179 = process.call(null,inst_25178);
var state_25188__$1 = state_25188;
if(cljs.core.truth_(inst_25179)){
var statearr_25191_25349 = state_25188__$1;
(statearr_25191_25349[(1)] = (5));

} else {
var statearr_25192_25350 = state_25188__$1;
(statearr_25192_25350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (5))){
var state_25188__$1 = state_25188;
var statearr_25193_25351 = state_25188__$1;
(statearr_25193_25351[(2)] = null);

(statearr_25193_25351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (6))){
var state_25188__$1 = state_25188;
var statearr_25194_25352 = state_25188__$1;
(statearr_25194_25352[(2)] = null);

(statearr_25194_25352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (7))){
var inst_25184 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
var statearr_25195_25353 = state_25188__$1;
(statearr_25195_25353[(2)] = inst_25184);

(statearr_25195_25353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25344,c__24790__auto___25347,G__25175_25345,n__19178__auto___25343,jobs,results,process,async))
;
return ((function (__25344,switch__24678__auto__,c__24790__auto___25347,G__25175_25345,n__19178__auto___25343,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____0 = (function (){
var statearr_25199 = [null,null,null,null,null,null,null];
(statearr_25199[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__);

(statearr_25199[(1)] = (1));

return statearr_25199;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____1 = (function (state_25188){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_25188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e25200){if((e25200 instanceof Object)){
var ex__24682__auto__ = e25200;
var statearr_25201_25354 = state_25188;
(statearr_25201_25354[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25355 = state_25188;
state_25188 = G__25355;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__ = function(state_25188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____1.call(this,state_25188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__;
})()
;})(__25344,switch__24678__auto__,c__24790__auto___25347,G__25175_25345,n__19178__auto___25343,jobs,results,process,async))
})();
var state__24792__auto__ = (function (){var statearr_25202 = f__24791__auto__.call(null);
(statearr_25202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto___25347);

return statearr_25202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(__25344,c__24790__auto___25347,G__25175_25345,n__19178__auto___25343,jobs,results,process,async))
);


break;
case "async":
var c__24790__auto___25356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25344,c__24790__auto___25356,G__25175_25345,n__19178__auto___25343,jobs,results,process,async){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (__25344,c__24790__auto___25356,G__25175_25345,n__19178__auto___25343,jobs,results,process,async){
return (function (state_25215){
var state_val_25216 = (state_25215[(1)]);
if((state_val_25216 === (1))){
var state_25215__$1 = state_25215;
var statearr_25217_25357 = state_25215__$1;
(statearr_25217_25357[(2)] = null);

(statearr_25217_25357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (2))){
var state_25215__$1 = state_25215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25215__$1,(4),jobs);
} else {
if((state_val_25216 === (3))){
var inst_25213 = (state_25215[(2)]);
var state_25215__$1 = state_25215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25215__$1,inst_25213);
} else {
if((state_val_25216 === (4))){
var inst_25205 = (state_25215[(2)]);
var inst_25206 = async.call(null,inst_25205);
var state_25215__$1 = state_25215;
if(cljs.core.truth_(inst_25206)){
var statearr_25218_25358 = state_25215__$1;
(statearr_25218_25358[(1)] = (5));

} else {
var statearr_25219_25359 = state_25215__$1;
(statearr_25219_25359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (5))){
var state_25215__$1 = state_25215;
var statearr_25220_25360 = state_25215__$1;
(statearr_25220_25360[(2)] = null);

(statearr_25220_25360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (6))){
var state_25215__$1 = state_25215;
var statearr_25221_25361 = state_25215__$1;
(statearr_25221_25361[(2)] = null);

(statearr_25221_25361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (7))){
var inst_25211 = (state_25215[(2)]);
var state_25215__$1 = state_25215;
var statearr_25222_25362 = state_25215__$1;
(statearr_25222_25362[(2)] = inst_25211);

(statearr_25222_25362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25344,c__24790__auto___25356,G__25175_25345,n__19178__auto___25343,jobs,results,process,async))
;
return ((function (__25344,switch__24678__auto__,c__24790__auto___25356,G__25175_25345,n__19178__auto___25343,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____0 = (function (){
var statearr_25226 = [null,null,null,null,null,null,null];
(statearr_25226[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__);

(statearr_25226[(1)] = (1));

return statearr_25226;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____1 = (function (state_25215){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_25215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e25227){if((e25227 instanceof Object)){
var ex__24682__auto__ = e25227;
var statearr_25228_25363 = state_25215;
(statearr_25228_25363[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25364 = state_25215;
state_25215 = G__25364;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__ = function(state_25215){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____1.call(this,state_25215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__;
})()
;})(__25344,switch__24678__auto__,c__24790__auto___25356,G__25175_25345,n__19178__auto___25343,jobs,results,process,async))
})();
var state__24792__auto__ = (function (){var statearr_25229 = f__24791__auto__.call(null);
(statearr_25229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto___25356);

return statearr_25229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(__25344,c__24790__auto___25356,G__25175_25345,n__19178__auto___25343,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25365 = (__25344 + (1));
__25344 = G__25365;
continue;
} else {
}
break;
}

var c__24790__auto___25366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto___25366,jobs,results,process,async){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto___25366,jobs,results,process,async){
return (function (state_25251){
var state_val_25252 = (state_25251[(1)]);
if((state_val_25252 === (1))){
var state_25251__$1 = state_25251;
var statearr_25253_25367 = state_25251__$1;
(statearr_25253_25367[(2)] = null);

(statearr_25253_25367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (2))){
var state_25251__$1 = state_25251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25251__$1,(4),from);
} else {
if((state_val_25252 === (3))){
var inst_25249 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25251__$1,inst_25249);
} else {
if((state_val_25252 === (4))){
var inst_25232 = (state_25251[(7)]);
var inst_25232__$1 = (state_25251[(2)]);
var inst_25233 = (inst_25232__$1 == null);
var state_25251__$1 = (function (){var statearr_25254 = state_25251;
(statearr_25254[(7)] = inst_25232__$1);

return statearr_25254;
})();
if(cljs.core.truth_(inst_25233)){
var statearr_25255_25368 = state_25251__$1;
(statearr_25255_25368[(1)] = (5));

} else {
var statearr_25256_25369 = state_25251__$1;
(statearr_25256_25369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (5))){
var inst_25235 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25251__$1 = state_25251;
var statearr_25257_25370 = state_25251__$1;
(statearr_25257_25370[(2)] = inst_25235);

(statearr_25257_25370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (6))){
var inst_25237 = (state_25251[(8)]);
var inst_25232 = (state_25251[(7)]);
var inst_25237__$1 = cljs.core.async.chan.call(null,(1));
var inst_25238 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25239 = [inst_25232,inst_25237__$1];
var inst_25240 = (new cljs.core.PersistentVector(null,2,(5),inst_25238,inst_25239,null));
var state_25251__$1 = (function (){var statearr_25258 = state_25251;
(statearr_25258[(8)] = inst_25237__$1);

return statearr_25258;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25251__$1,(8),jobs,inst_25240);
} else {
if((state_val_25252 === (7))){
var inst_25247 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
var statearr_25259_25371 = state_25251__$1;
(statearr_25259_25371[(2)] = inst_25247);

(statearr_25259_25371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (8))){
var inst_25237 = (state_25251[(8)]);
var inst_25242 = (state_25251[(2)]);
var state_25251__$1 = (function (){var statearr_25260 = state_25251;
(statearr_25260[(9)] = inst_25242);

return statearr_25260;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25251__$1,(9),results,inst_25237);
} else {
if((state_val_25252 === (9))){
var inst_25244 = (state_25251[(2)]);
var state_25251__$1 = (function (){var statearr_25261 = state_25251;
(statearr_25261[(10)] = inst_25244);

return statearr_25261;
})();
var statearr_25262_25372 = state_25251__$1;
(statearr_25262_25372[(2)] = null);

(statearr_25262_25372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__24790__auto___25366,jobs,results,process,async))
;
return ((function (switch__24678__auto__,c__24790__auto___25366,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____0 = (function (){
var statearr_25266 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25266[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__);

(statearr_25266[(1)] = (1));

return statearr_25266;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____1 = (function (state_25251){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_25251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e25267){if((e25267 instanceof Object)){
var ex__24682__auto__ = e25267;
var statearr_25268_25373 = state_25251;
(statearr_25268_25373[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25374 = state_25251;
state_25251 = G__25374;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__ = function(state_25251){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____1.call(this,state_25251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto___25366,jobs,results,process,async))
})();
var state__24792__auto__ = (function (){var statearr_25269 = f__24791__auto__.call(null);
(statearr_25269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto___25366);

return statearr_25269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto___25366,jobs,results,process,async))
);


var c__24790__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto__,jobs,results,process,async){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto__,jobs,results,process,async){
return (function (state_25307){
var state_val_25308 = (state_25307[(1)]);
if((state_val_25308 === (7))){
var inst_25303 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
var statearr_25309_25375 = state_25307__$1;
(statearr_25309_25375[(2)] = inst_25303);

(statearr_25309_25375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (20))){
var state_25307__$1 = state_25307;
var statearr_25310_25376 = state_25307__$1;
(statearr_25310_25376[(2)] = null);

(statearr_25310_25376[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (1))){
var state_25307__$1 = state_25307;
var statearr_25311_25377 = state_25307__$1;
(statearr_25311_25377[(2)] = null);

(statearr_25311_25377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (4))){
var inst_25272 = (state_25307[(7)]);
var inst_25272__$1 = (state_25307[(2)]);
var inst_25273 = (inst_25272__$1 == null);
var state_25307__$1 = (function (){var statearr_25312 = state_25307;
(statearr_25312[(7)] = inst_25272__$1);

return statearr_25312;
})();
if(cljs.core.truth_(inst_25273)){
var statearr_25313_25378 = state_25307__$1;
(statearr_25313_25378[(1)] = (5));

} else {
var statearr_25314_25379 = state_25307__$1;
(statearr_25314_25379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (15))){
var inst_25285 = (state_25307[(8)]);
var state_25307__$1 = state_25307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25307__$1,(18),to,inst_25285);
} else {
if((state_val_25308 === (21))){
var inst_25298 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
var statearr_25315_25380 = state_25307__$1;
(statearr_25315_25380[(2)] = inst_25298);

(statearr_25315_25380[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (13))){
var inst_25300 = (state_25307[(2)]);
var state_25307__$1 = (function (){var statearr_25316 = state_25307;
(statearr_25316[(9)] = inst_25300);

return statearr_25316;
})();
var statearr_25317_25381 = state_25307__$1;
(statearr_25317_25381[(2)] = null);

(statearr_25317_25381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (6))){
var inst_25272 = (state_25307[(7)]);
var state_25307__$1 = state_25307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25307__$1,(11),inst_25272);
} else {
if((state_val_25308 === (17))){
var inst_25293 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
if(cljs.core.truth_(inst_25293)){
var statearr_25318_25382 = state_25307__$1;
(statearr_25318_25382[(1)] = (19));

} else {
var statearr_25319_25383 = state_25307__$1;
(statearr_25319_25383[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (3))){
var inst_25305 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25307__$1,inst_25305);
} else {
if((state_val_25308 === (12))){
var inst_25282 = (state_25307[(10)]);
var state_25307__$1 = state_25307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25307__$1,(14),inst_25282);
} else {
if((state_val_25308 === (2))){
var state_25307__$1 = state_25307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25307__$1,(4),results);
} else {
if((state_val_25308 === (19))){
var state_25307__$1 = state_25307;
var statearr_25320_25384 = state_25307__$1;
(statearr_25320_25384[(2)] = null);

(statearr_25320_25384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (11))){
var inst_25282 = (state_25307[(2)]);
var state_25307__$1 = (function (){var statearr_25321 = state_25307;
(statearr_25321[(10)] = inst_25282);

return statearr_25321;
})();
var statearr_25322_25385 = state_25307__$1;
(statearr_25322_25385[(2)] = null);

(statearr_25322_25385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (9))){
var state_25307__$1 = state_25307;
var statearr_25323_25386 = state_25307__$1;
(statearr_25323_25386[(2)] = null);

(statearr_25323_25386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (5))){
var state_25307__$1 = state_25307;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25324_25387 = state_25307__$1;
(statearr_25324_25387[(1)] = (8));

} else {
var statearr_25325_25388 = state_25307__$1;
(statearr_25325_25388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (14))){
var inst_25285 = (state_25307[(8)]);
var inst_25287 = (state_25307[(11)]);
var inst_25285__$1 = (state_25307[(2)]);
var inst_25286 = (inst_25285__$1 == null);
var inst_25287__$1 = cljs.core.not.call(null,inst_25286);
var state_25307__$1 = (function (){var statearr_25326 = state_25307;
(statearr_25326[(8)] = inst_25285__$1);

(statearr_25326[(11)] = inst_25287__$1);

return statearr_25326;
})();
if(inst_25287__$1){
var statearr_25327_25389 = state_25307__$1;
(statearr_25327_25389[(1)] = (15));

} else {
var statearr_25328_25390 = state_25307__$1;
(statearr_25328_25390[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (16))){
var inst_25287 = (state_25307[(11)]);
var state_25307__$1 = state_25307;
var statearr_25329_25391 = state_25307__$1;
(statearr_25329_25391[(2)] = inst_25287);

(statearr_25329_25391[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (10))){
var inst_25279 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
var statearr_25330_25392 = state_25307__$1;
(statearr_25330_25392[(2)] = inst_25279);

(statearr_25330_25392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (18))){
var inst_25290 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
var statearr_25331_25393 = state_25307__$1;
(statearr_25331_25393[(2)] = inst_25290);

(statearr_25331_25393[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (8))){
var inst_25276 = cljs.core.async.close_BANG_.call(null,to);
var state_25307__$1 = state_25307;
var statearr_25332_25394 = state_25307__$1;
(statearr_25332_25394[(2)] = inst_25276);

(statearr_25332_25394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24790__auto__,jobs,results,process,async))
;
return ((function (switch__24678__auto__,c__24790__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____0 = (function (){
var statearr_25336 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25336[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__);

(statearr_25336[(1)] = (1));

return statearr_25336;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____1 = (function (state_25307){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_25307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e25337){if((e25337 instanceof Object)){
var ex__24682__auto__ = e25337;
var statearr_25338_25395 = state_25307;
(statearr_25338_25395[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25396 = state_25307;
state_25307 = G__25396;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__ = function(state_25307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____1.call(this,state_25307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24679__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto__,jobs,results,process,async))
})();
var state__24792__auto__ = (function (){var statearr_25339 = f__24791__auto__.call(null);
(statearr_25339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto__);

return statearr_25339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto__,jobs,results,process,async))
);

return c__24790__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args25397 = [];
var len__19333__auto___25400 = arguments.length;
var i__19334__auto___25401 = (0);
while(true){
if((i__19334__auto___25401 < len__19333__auto___25400)){
args25397.push((arguments[i__19334__auto___25401]));

var G__25402 = (i__19334__auto___25401 + (1));
i__19334__auto___25401 = G__25402;
continue;
} else {
}
break;
}

var G__25399 = args25397.length;
switch (G__25399) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25397.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args25404 = [];
var len__19333__auto___25407 = arguments.length;
var i__19334__auto___25408 = (0);
while(true){
if((i__19334__auto___25408 < len__19333__auto___25407)){
args25404.push((arguments[i__19334__auto___25408]));

var G__25409 = (i__19334__auto___25408 + (1));
i__19334__auto___25408 = G__25409;
continue;
} else {
}
break;
}

var G__25406 = args25404.length;
switch (G__25406) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25404.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args25411 = [];
var len__19333__auto___25464 = arguments.length;
var i__19334__auto___25465 = (0);
while(true){
if((i__19334__auto___25465 < len__19333__auto___25464)){
args25411.push((arguments[i__19334__auto___25465]));

var G__25466 = (i__19334__auto___25465 + (1));
i__19334__auto___25465 = G__25466;
continue;
} else {
}
break;
}

var G__25413 = args25411.length;
switch (G__25413) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25411.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24790__auto___25468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto___25468,tc,fc){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto___25468,tc,fc){
return (function (state_25439){
var state_val_25440 = (state_25439[(1)]);
if((state_val_25440 === (7))){
var inst_25435 = (state_25439[(2)]);
var state_25439__$1 = state_25439;
var statearr_25441_25469 = state_25439__$1;
(statearr_25441_25469[(2)] = inst_25435);

(statearr_25441_25469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (1))){
var state_25439__$1 = state_25439;
var statearr_25442_25470 = state_25439__$1;
(statearr_25442_25470[(2)] = null);

(statearr_25442_25470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (4))){
var inst_25416 = (state_25439[(7)]);
var inst_25416__$1 = (state_25439[(2)]);
var inst_25417 = (inst_25416__$1 == null);
var state_25439__$1 = (function (){var statearr_25443 = state_25439;
(statearr_25443[(7)] = inst_25416__$1);

return statearr_25443;
})();
if(cljs.core.truth_(inst_25417)){
var statearr_25444_25471 = state_25439__$1;
(statearr_25444_25471[(1)] = (5));

} else {
var statearr_25445_25472 = state_25439__$1;
(statearr_25445_25472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (13))){
var state_25439__$1 = state_25439;
var statearr_25446_25473 = state_25439__$1;
(statearr_25446_25473[(2)] = null);

(statearr_25446_25473[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (6))){
var inst_25416 = (state_25439[(7)]);
var inst_25422 = p.call(null,inst_25416);
var state_25439__$1 = state_25439;
if(cljs.core.truth_(inst_25422)){
var statearr_25447_25474 = state_25439__$1;
(statearr_25447_25474[(1)] = (9));

} else {
var statearr_25448_25475 = state_25439__$1;
(statearr_25448_25475[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (3))){
var inst_25437 = (state_25439[(2)]);
var state_25439__$1 = state_25439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25439__$1,inst_25437);
} else {
if((state_val_25440 === (12))){
var state_25439__$1 = state_25439;
var statearr_25449_25476 = state_25439__$1;
(statearr_25449_25476[(2)] = null);

(statearr_25449_25476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (2))){
var state_25439__$1 = state_25439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25439__$1,(4),ch);
} else {
if((state_val_25440 === (11))){
var inst_25416 = (state_25439[(7)]);
var inst_25426 = (state_25439[(2)]);
var state_25439__$1 = state_25439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25439__$1,(8),inst_25426,inst_25416);
} else {
if((state_val_25440 === (9))){
var state_25439__$1 = state_25439;
var statearr_25450_25477 = state_25439__$1;
(statearr_25450_25477[(2)] = tc);

(statearr_25450_25477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (5))){
var inst_25419 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25420 = cljs.core.async.close_BANG_.call(null,fc);
var state_25439__$1 = (function (){var statearr_25451 = state_25439;
(statearr_25451[(8)] = inst_25419);

return statearr_25451;
})();
var statearr_25452_25478 = state_25439__$1;
(statearr_25452_25478[(2)] = inst_25420);

(statearr_25452_25478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (14))){
var inst_25433 = (state_25439[(2)]);
var state_25439__$1 = state_25439;
var statearr_25453_25479 = state_25439__$1;
(statearr_25453_25479[(2)] = inst_25433);

(statearr_25453_25479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (10))){
var state_25439__$1 = state_25439;
var statearr_25454_25480 = state_25439__$1;
(statearr_25454_25480[(2)] = fc);

(statearr_25454_25480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25440 === (8))){
var inst_25428 = (state_25439[(2)]);
var state_25439__$1 = state_25439;
if(cljs.core.truth_(inst_25428)){
var statearr_25455_25481 = state_25439__$1;
(statearr_25455_25481[(1)] = (12));

} else {
var statearr_25456_25482 = state_25439__$1;
(statearr_25456_25482[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24790__auto___25468,tc,fc))
;
return ((function (switch__24678__auto__,c__24790__auto___25468,tc,fc){
return (function() {
var cljs$core$async$state_machine__24679__auto__ = null;
var cljs$core$async$state_machine__24679__auto____0 = (function (){
var statearr_25460 = [null,null,null,null,null,null,null,null,null];
(statearr_25460[(0)] = cljs$core$async$state_machine__24679__auto__);

(statearr_25460[(1)] = (1));

return statearr_25460;
});
var cljs$core$async$state_machine__24679__auto____1 = (function (state_25439){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_25439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e25461){if((e25461 instanceof Object)){
var ex__24682__auto__ = e25461;
var statearr_25462_25483 = state_25439;
(statearr_25462_25483[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25484 = state_25439;
state_25439 = G__25484;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$state_machine__24679__auto__ = function(state_25439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24679__auto____1.call(this,state_25439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24679__auto____0;
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24679__auto____1;
return cljs$core$async$state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto___25468,tc,fc))
})();
var state__24792__auto__ = (function (){var statearr_25463 = f__24791__auto__.call(null);
(statearr_25463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto___25468);

return statearr_25463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto___25468,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24790__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto__){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto__){
return (function (state_25548){
var state_val_25549 = (state_25548[(1)]);
if((state_val_25549 === (7))){
var inst_25544 = (state_25548[(2)]);
var state_25548__$1 = state_25548;
var statearr_25550_25571 = state_25548__$1;
(statearr_25550_25571[(2)] = inst_25544);

(statearr_25550_25571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (1))){
var inst_25528 = init;
var state_25548__$1 = (function (){var statearr_25551 = state_25548;
(statearr_25551[(7)] = inst_25528);

return statearr_25551;
})();
var statearr_25552_25572 = state_25548__$1;
(statearr_25552_25572[(2)] = null);

(statearr_25552_25572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (4))){
var inst_25531 = (state_25548[(8)]);
var inst_25531__$1 = (state_25548[(2)]);
var inst_25532 = (inst_25531__$1 == null);
var state_25548__$1 = (function (){var statearr_25553 = state_25548;
(statearr_25553[(8)] = inst_25531__$1);

return statearr_25553;
})();
if(cljs.core.truth_(inst_25532)){
var statearr_25554_25573 = state_25548__$1;
(statearr_25554_25573[(1)] = (5));

} else {
var statearr_25555_25574 = state_25548__$1;
(statearr_25555_25574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (6))){
var inst_25531 = (state_25548[(8)]);
var inst_25535 = (state_25548[(9)]);
var inst_25528 = (state_25548[(7)]);
var inst_25535__$1 = f.call(null,inst_25528,inst_25531);
var inst_25536 = cljs.core.reduced_QMARK_.call(null,inst_25535__$1);
var state_25548__$1 = (function (){var statearr_25556 = state_25548;
(statearr_25556[(9)] = inst_25535__$1);

return statearr_25556;
})();
if(inst_25536){
var statearr_25557_25575 = state_25548__$1;
(statearr_25557_25575[(1)] = (8));

} else {
var statearr_25558_25576 = state_25548__$1;
(statearr_25558_25576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (3))){
var inst_25546 = (state_25548[(2)]);
var state_25548__$1 = state_25548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25548__$1,inst_25546);
} else {
if((state_val_25549 === (2))){
var state_25548__$1 = state_25548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25548__$1,(4),ch);
} else {
if((state_val_25549 === (9))){
var inst_25535 = (state_25548[(9)]);
var inst_25528 = inst_25535;
var state_25548__$1 = (function (){var statearr_25559 = state_25548;
(statearr_25559[(7)] = inst_25528);

return statearr_25559;
})();
var statearr_25560_25577 = state_25548__$1;
(statearr_25560_25577[(2)] = null);

(statearr_25560_25577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (5))){
var inst_25528 = (state_25548[(7)]);
var state_25548__$1 = state_25548;
var statearr_25561_25578 = state_25548__$1;
(statearr_25561_25578[(2)] = inst_25528);

(statearr_25561_25578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (10))){
var inst_25542 = (state_25548[(2)]);
var state_25548__$1 = state_25548;
var statearr_25562_25579 = state_25548__$1;
(statearr_25562_25579[(2)] = inst_25542);

(statearr_25562_25579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (8))){
var inst_25535 = (state_25548[(9)]);
var inst_25538 = cljs.core.deref.call(null,inst_25535);
var state_25548__$1 = state_25548;
var statearr_25563_25580 = state_25548__$1;
(statearr_25563_25580[(2)] = inst_25538);

(statearr_25563_25580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__24790__auto__))
;
return ((function (switch__24678__auto__,c__24790__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24679__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24679__auto____0 = (function (){
var statearr_25567 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25567[(0)] = cljs$core$async$reduce_$_state_machine__24679__auto__);

(statearr_25567[(1)] = (1));

return statearr_25567;
});
var cljs$core$async$reduce_$_state_machine__24679__auto____1 = (function (state_25548){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_25548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e25568){if((e25568 instanceof Object)){
var ex__24682__auto__ = e25568;
var statearr_25569_25581 = state_25548;
(statearr_25569_25581[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25582 = state_25548;
state_25548 = G__25582;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24679__auto__ = function(state_25548){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24679__auto____1.call(this,state_25548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24679__auto____0;
cljs$core$async$reduce_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24679__auto____1;
return cljs$core$async$reduce_$_state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto__))
})();
var state__24792__auto__ = (function (){var statearr_25570 = f__24791__auto__.call(null);
(statearr_25570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto__);

return statearr_25570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto__))
);

return c__24790__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args25583 = [];
var len__19333__auto___25635 = arguments.length;
var i__19334__auto___25636 = (0);
while(true){
if((i__19334__auto___25636 < len__19333__auto___25635)){
args25583.push((arguments[i__19334__auto___25636]));

var G__25637 = (i__19334__auto___25636 + (1));
i__19334__auto___25636 = G__25637;
continue;
} else {
}
break;
}

var G__25585 = args25583.length;
switch (G__25585) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25583.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24790__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto__){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto__){
return (function (state_25610){
var state_val_25611 = (state_25610[(1)]);
if((state_val_25611 === (7))){
var inst_25592 = (state_25610[(2)]);
var state_25610__$1 = state_25610;
var statearr_25612_25639 = state_25610__$1;
(statearr_25612_25639[(2)] = inst_25592);

(statearr_25612_25639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (1))){
var inst_25586 = cljs.core.seq.call(null,coll);
var inst_25587 = inst_25586;
var state_25610__$1 = (function (){var statearr_25613 = state_25610;
(statearr_25613[(7)] = inst_25587);

return statearr_25613;
})();
var statearr_25614_25640 = state_25610__$1;
(statearr_25614_25640[(2)] = null);

(statearr_25614_25640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (4))){
var inst_25587 = (state_25610[(7)]);
var inst_25590 = cljs.core.first.call(null,inst_25587);
var state_25610__$1 = state_25610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25610__$1,(7),ch,inst_25590);
} else {
if((state_val_25611 === (13))){
var inst_25604 = (state_25610[(2)]);
var state_25610__$1 = state_25610;
var statearr_25615_25641 = state_25610__$1;
(statearr_25615_25641[(2)] = inst_25604);

(statearr_25615_25641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (6))){
var inst_25595 = (state_25610[(2)]);
var state_25610__$1 = state_25610;
if(cljs.core.truth_(inst_25595)){
var statearr_25616_25642 = state_25610__$1;
(statearr_25616_25642[(1)] = (8));

} else {
var statearr_25617_25643 = state_25610__$1;
(statearr_25617_25643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (3))){
var inst_25608 = (state_25610[(2)]);
var state_25610__$1 = state_25610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25610__$1,inst_25608);
} else {
if((state_val_25611 === (12))){
var state_25610__$1 = state_25610;
var statearr_25618_25644 = state_25610__$1;
(statearr_25618_25644[(2)] = null);

(statearr_25618_25644[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (2))){
var inst_25587 = (state_25610[(7)]);
var state_25610__$1 = state_25610;
if(cljs.core.truth_(inst_25587)){
var statearr_25619_25645 = state_25610__$1;
(statearr_25619_25645[(1)] = (4));

} else {
var statearr_25620_25646 = state_25610__$1;
(statearr_25620_25646[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (11))){
var inst_25601 = cljs.core.async.close_BANG_.call(null,ch);
var state_25610__$1 = state_25610;
var statearr_25621_25647 = state_25610__$1;
(statearr_25621_25647[(2)] = inst_25601);

(statearr_25621_25647[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (9))){
var state_25610__$1 = state_25610;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25622_25648 = state_25610__$1;
(statearr_25622_25648[(1)] = (11));

} else {
var statearr_25623_25649 = state_25610__$1;
(statearr_25623_25649[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (5))){
var inst_25587 = (state_25610[(7)]);
var state_25610__$1 = state_25610;
var statearr_25624_25650 = state_25610__$1;
(statearr_25624_25650[(2)] = inst_25587);

(statearr_25624_25650[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (10))){
var inst_25606 = (state_25610[(2)]);
var state_25610__$1 = state_25610;
var statearr_25625_25651 = state_25610__$1;
(statearr_25625_25651[(2)] = inst_25606);

(statearr_25625_25651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (8))){
var inst_25587 = (state_25610[(7)]);
var inst_25597 = cljs.core.next.call(null,inst_25587);
var inst_25587__$1 = inst_25597;
var state_25610__$1 = (function (){var statearr_25626 = state_25610;
(statearr_25626[(7)] = inst_25587__$1);

return statearr_25626;
})();
var statearr_25627_25652 = state_25610__$1;
(statearr_25627_25652[(2)] = null);

(statearr_25627_25652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24790__auto__))
;
return ((function (switch__24678__auto__,c__24790__auto__){
return (function() {
var cljs$core$async$state_machine__24679__auto__ = null;
var cljs$core$async$state_machine__24679__auto____0 = (function (){
var statearr_25631 = [null,null,null,null,null,null,null,null];
(statearr_25631[(0)] = cljs$core$async$state_machine__24679__auto__);

(statearr_25631[(1)] = (1));

return statearr_25631;
});
var cljs$core$async$state_machine__24679__auto____1 = (function (state_25610){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_25610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e25632){if((e25632 instanceof Object)){
var ex__24682__auto__ = e25632;
var statearr_25633_25653 = state_25610;
(statearr_25633_25653[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25654 = state_25610;
state_25610 = G__25654;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$state_machine__24679__auto__ = function(state_25610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24679__auto____1.call(this,state_25610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24679__auto____0;
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24679__auto____1;
return cljs$core$async$state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto__))
})();
var state__24792__auto__ = (function (){var statearr_25634 = f__24791__auto__.call(null);
(statearr_25634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto__);

return statearr_25634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto__))
);

return c__24790__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18930__auto__ = (((m == null))?null:m);
var m__18931__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18931__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18930__auto__ = (((m == null))?null:m);
var m__18931__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,m,ch);
} else {
var m__18931__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18930__auto__ = (((m == null))?null:m);
var m__18931__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,m);
} else {
var m__18931__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25876 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25876 = (function (mult,ch,cs,meta25877){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25877 = meta25877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25878,meta25877__$1){
var self__ = this;
var _25878__$1 = this;
return (new cljs.core.async.t_cljs$core$async25876(self__.mult,self__.ch,self__.cs,meta25877__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25876.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25878){
var self__ = this;
var _25878__$1 = this;
return self__.meta25877;
});})(cs))
;

cljs.core.async.t_cljs$core$async25876.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25876.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25876.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25876.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25876.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25876.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25876.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25877","meta25877",-911963821,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25876.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25876";

cljs.core.async.t_cljs$core$async25876.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"cljs.core.async/t_cljs$core$async25876");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25876 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25876(mult__$1,ch__$1,cs__$1,meta25877){
return (new cljs.core.async.t_cljs$core$async25876(mult__$1,ch__$1,cs__$1,meta25877));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25876(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24790__auto___26097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto___26097,cs,m,dchan,dctr,done){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto___26097,cs,m,dchan,dctr,done){
return (function (state_26009){
var state_val_26010 = (state_26009[(1)]);
if((state_val_26010 === (7))){
var inst_26005 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
var statearr_26011_26098 = state_26009__$1;
(statearr_26011_26098[(2)] = inst_26005);

(statearr_26011_26098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (20))){
var inst_25910 = (state_26009[(7)]);
var inst_25920 = cljs.core.first.call(null,inst_25910);
var inst_25921 = cljs.core.nth.call(null,inst_25920,(0),null);
var inst_25922 = cljs.core.nth.call(null,inst_25920,(1),null);
var state_26009__$1 = (function (){var statearr_26012 = state_26009;
(statearr_26012[(8)] = inst_25921);

return statearr_26012;
})();
if(cljs.core.truth_(inst_25922)){
var statearr_26013_26099 = state_26009__$1;
(statearr_26013_26099[(1)] = (22));

} else {
var statearr_26014_26100 = state_26009__$1;
(statearr_26014_26100[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (27))){
var inst_25881 = (state_26009[(9)]);
var inst_25952 = (state_26009[(10)]);
var inst_25957 = (state_26009[(11)]);
var inst_25950 = (state_26009[(12)]);
var inst_25957__$1 = cljs.core._nth.call(null,inst_25950,inst_25952);
var inst_25958 = cljs.core.async.put_BANG_.call(null,inst_25957__$1,inst_25881,done);
var state_26009__$1 = (function (){var statearr_26015 = state_26009;
(statearr_26015[(11)] = inst_25957__$1);

return statearr_26015;
})();
if(cljs.core.truth_(inst_25958)){
var statearr_26016_26101 = state_26009__$1;
(statearr_26016_26101[(1)] = (30));

} else {
var statearr_26017_26102 = state_26009__$1;
(statearr_26017_26102[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (1))){
var state_26009__$1 = state_26009;
var statearr_26018_26103 = state_26009__$1;
(statearr_26018_26103[(2)] = null);

(statearr_26018_26103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (24))){
var inst_25910 = (state_26009[(7)]);
var inst_25927 = (state_26009[(2)]);
var inst_25928 = cljs.core.next.call(null,inst_25910);
var inst_25890 = inst_25928;
var inst_25891 = null;
var inst_25892 = (0);
var inst_25893 = (0);
var state_26009__$1 = (function (){var statearr_26019 = state_26009;
(statearr_26019[(13)] = inst_25927);

(statearr_26019[(14)] = inst_25892);

(statearr_26019[(15)] = inst_25893);

(statearr_26019[(16)] = inst_25890);

(statearr_26019[(17)] = inst_25891);

return statearr_26019;
})();
var statearr_26020_26104 = state_26009__$1;
(statearr_26020_26104[(2)] = null);

(statearr_26020_26104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (39))){
var state_26009__$1 = state_26009;
var statearr_26024_26105 = state_26009__$1;
(statearr_26024_26105[(2)] = null);

(statearr_26024_26105[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (4))){
var inst_25881 = (state_26009[(9)]);
var inst_25881__$1 = (state_26009[(2)]);
var inst_25882 = (inst_25881__$1 == null);
var state_26009__$1 = (function (){var statearr_26025 = state_26009;
(statearr_26025[(9)] = inst_25881__$1);

return statearr_26025;
})();
if(cljs.core.truth_(inst_25882)){
var statearr_26026_26106 = state_26009__$1;
(statearr_26026_26106[(1)] = (5));

} else {
var statearr_26027_26107 = state_26009__$1;
(statearr_26027_26107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (15))){
var inst_25892 = (state_26009[(14)]);
var inst_25893 = (state_26009[(15)]);
var inst_25890 = (state_26009[(16)]);
var inst_25891 = (state_26009[(17)]);
var inst_25906 = (state_26009[(2)]);
var inst_25907 = (inst_25893 + (1));
var tmp26021 = inst_25892;
var tmp26022 = inst_25890;
var tmp26023 = inst_25891;
var inst_25890__$1 = tmp26022;
var inst_25891__$1 = tmp26023;
var inst_25892__$1 = tmp26021;
var inst_25893__$1 = inst_25907;
var state_26009__$1 = (function (){var statearr_26028 = state_26009;
(statearr_26028[(14)] = inst_25892__$1);

(statearr_26028[(18)] = inst_25906);

(statearr_26028[(15)] = inst_25893__$1);

(statearr_26028[(16)] = inst_25890__$1);

(statearr_26028[(17)] = inst_25891__$1);

return statearr_26028;
})();
var statearr_26029_26108 = state_26009__$1;
(statearr_26029_26108[(2)] = null);

(statearr_26029_26108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (21))){
var inst_25931 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
var statearr_26033_26109 = state_26009__$1;
(statearr_26033_26109[(2)] = inst_25931);

(statearr_26033_26109[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (31))){
var inst_25957 = (state_26009[(11)]);
var inst_25961 = done.call(null,null);
var inst_25962 = cljs.core.async.untap_STAR_.call(null,m,inst_25957);
var state_26009__$1 = (function (){var statearr_26034 = state_26009;
(statearr_26034[(19)] = inst_25961);

return statearr_26034;
})();
var statearr_26035_26110 = state_26009__$1;
(statearr_26035_26110[(2)] = inst_25962);

(statearr_26035_26110[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (32))){
var inst_25951 = (state_26009[(20)]);
var inst_25952 = (state_26009[(10)]);
var inst_25949 = (state_26009[(21)]);
var inst_25950 = (state_26009[(12)]);
var inst_25964 = (state_26009[(2)]);
var inst_25965 = (inst_25952 + (1));
var tmp26030 = inst_25951;
var tmp26031 = inst_25949;
var tmp26032 = inst_25950;
var inst_25949__$1 = tmp26031;
var inst_25950__$1 = tmp26032;
var inst_25951__$1 = tmp26030;
var inst_25952__$1 = inst_25965;
var state_26009__$1 = (function (){var statearr_26036 = state_26009;
(statearr_26036[(22)] = inst_25964);

(statearr_26036[(20)] = inst_25951__$1);

(statearr_26036[(10)] = inst_25952__$1);

(statearr_26036[(21)] = inst_25949__$1);

(statearr_26036[(12)] = inst_25950__$1);

return statearr_26036;
})();
var statearr_26037_26111 = state_26009__$1;
(statearr_26037_26111[(2)] = null);

(statearr_26037_26111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (40))){
var inst_25977 = (state_26009[(23)]);
var inst_25981 = done.call(null,null);
var inst_25982 = cljs.core.async.untap_STAR_.call(null,m,inst_25977);
var state_26009__$1 = (function (){var statearr_26038 = state_26009;
(statearr_26038[(24)] = inst_25981);

return statearr_26038;
})();
var statearr_26039_26112 = state_26009__$1;
(statearr_26039_26112[(2)] = inst_25982);

(statearr_26039_26112[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (33))){
var inst_25968 = (state_26009[(25)]);
var inst_25970 = cljs.core.chunked_seq_QMARK_.call(null,inst_25968);
var state_26009__$1 = state_26009;
if(inst_25970){
var statearr_26040_26113 = state_26009__$1;
(statearr_26040_26113[(1)] = (36));

} else {
var statearr_26041_26114 = state_26009__$1;
(statearr_26041_26114[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (13))){
var inst_25900 = (state_26009[(26)]);
var inst_25903 = cljs.core.async.close_BANG_.call(null,inst_25900);
var state_26009__$1 = state_26009;
var statearr_26042_26115 = state_26009__$1;
(statearr_26042_26115[(2)] = inst_25903);

(statearr_26042_26115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (22))){
var inst_25921 = (state_26009[(8)]);
var inst_25924 = cljs.core.async.close_BANG_.call(null,inst_25921);
var state_26009__$1 = state_26009;
var statearr_26043_26116 = state_26009__$1;
(statearr_26043_26116[(2)] = inst_25924);

(statearr_26043_26116[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (36))){
var inst_25968 = (state_26009[(25)]);
var inst_25972 = cljs.core.chunk_first.call(null,inst_25968);
var inst_25973 = cljs.core.chunk_rest.call(null,inst_25968);
var inst_25974 = cljs.core.count.call(null,inst_25972);
var inst_25949 = inst_25973;
var inst_25950 = inst_25972;
var inst_25951 = inst_25974;
var inst_25952 = (0);
var state_26009__$1 = (function (){var statearr_26044 = state_26009;
(statearr_26044[(20)] = inst_25951);

(statearr_26044[(10)] = inst_25952);

(statearr_26044[(21)] = inst_25949);

(statearr_26044[(12)] = inst_25950);

return statearr_26044;
})();
var statearr_26045_26117 = state_26009__$1;
(statearr_26045_26117[(2)] = null);

(statearr_26045_26117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (41))){
var inst_25968 = (state_26009[(25)]);
var inst_25984 = (state_26009[(2)]);
var inst_25985 = cljs.core.next.call(null,inst_25968);
var inst_25949 = inst_25985;
var inst_25950 = null;
var inst_25951 = (0);
var inst_25952 = (0);
var state_26009__$1 = (function (){var statearr_26046 = state_26009;
(statearr_26046[(27)] = inst_25984);

(statearr_26046[(20)] = inst_25951);

(statearr_26046[(10)] = inst_25952);

(statearr_26046[(21)] = inst_25949);

(statearr_26046[(12)] = inst_25950);

return statearr_26046;
})();
var statearr_26047_26118 = state_26009__$1;
(statearr_26047_26118[(2)] = null);

(statearr_26047_26118[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (43))){
var state_26009__$1 = state_26009;
var statearr_26048_26119 = state_26009__$1;
(statearr_26048_26119[(2)] = null);

(statearr_26048_26119[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (29))){
var inst_25993 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
var statearr_26049_26120 = state_26009__$1;
(statearr_26049_26120[(2)] = inst_25993);

(statearr_26049_26120[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (44))){
var inst_26002 = (state_26009[(2)]);
var state_26009__$1 = (function (){var statearr_26050 = state_26009;
(statearr_26050[(28)] = inst_26002);

return statearr_26050;
})();
var statearr_26051_26121 = state_26009__$1;
(statearr_26051_26121[(2)] = null);

(statearr_26051_26121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (6))){
var inst_25941 = (state_26009[(29)]);
var inst_25940 = cljs.core.deref.call(null,cs);
var inst_25941__$1 = cljs.core.keys.call(null,inst_25940);
var inst_25942 = cljs.core.count.call(null,inst_25941__$1);
var inst_25943 = cljs.core.reset_BANG_.call(null,dctr,inst_25942);
var inst_25948 = cljs.core.seq.call(null,inst_25941__$1);
var inst_25949 = inst_25948;
var inst_25950 = null;
var inst_25951 = (0);
var inst_25952 = (0);
var state_26009__$1 = (function (){var statearr_26052 = state_26009;
(statearr_26052[(29)] = inst_25941__$1);

(statearr_26052[(30)] = inst_25943);

(statearr_26052[(20)] = inst_25951);

(statearr_26052[(10)] = inst_25952);

(statearr_26052[(21)] = inst_25949);

(statearr_26052[(12)] = inst_25950);

return statearr_26052;
})();
var statearr_26053_26122 = state_26009__$1;
(statearr_26053_26122[(2)] = null);

(statearr_26053_26122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (28))){
var inst_25968 = (state_26009[(25)]);
var inst_25949 = (state_26009[(21)]);
var inst_25968__$1 = cljs.core.seq.call(null,inst_25949);
var state_26009__$1 = (function (){var statearr_26054 = state_26009;
(statearr_26054[(25)] = inst_25968__$1);

return statearr_26054;
})();
if(inst_25968__$1){
var statearr_26055_26123 = state_26009__$1;
(statearr_26055_26123[(1)] = (33));

} else {
var statearr_26056_26124 = state_26009__$1;
(statearr_26056_26124[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (25))){
var inst_25951 = (state_26009[(20)]);
var inst_25952 = (state_26009[(10)]);
var inst_25954 = (inst_25952 < inst_25951);
var inst_25955 = inst_25954;
var state_26009__$1 = state_26009;
if(cljs.core.truth_(inst_25955)){
var statearr_26057_26125 = state_26009__$1;
(statearr_26057_26125[(1)] = (27));

} else {
var statearr_26058_26126 = state_26009__$1;
(statearr_26058_26126[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (34))){
var state_26009__$1 = state_26009;
var statearr_26059_26127 = state_26009__$1;
(statearr_26059_26127[(2)] = null);

(statearr_26059_26127[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (17))){
var state_26009__$1 = state_26009;
var statearr_26060_26128 = state_26009__$1;
(statearr_26060_26128[(2)] = null);

(statearr_26060_26128[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (3))){
var inst_26007 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26009__$1,inst_26007);
} else {
if((state_val_26010 === (12))){
var inst_25936 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
var statearr_26061_26129 = state_26009__$1;
(statearr_26061_26129[(2)] = inst_25936);

(statearr_26061_26129[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (2))){
var state_26009__$1 = state_26009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26009__$1,(4),ch);
} else {
if((state_val_26010 === (23))){
var state_26009__$1 = state_26009;
var statearr_26062_26130 = state_26009__$1;
(statearr_26062_26130[(2)] = null);

(statearr_26062_26130[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (35))){
var inst_25991 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
var statearr_26063_26131 = state_26009__$1;
(statearr_26063_26131[(2)] = inst_25991);

(statearr_26063_26131[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (19))){
var inst_25910 = (state_26009[(7)]);
var inst_25914 = cljs.core.chunk_first.call(null,inst_25910);
var inst_25915 = cljs.core.chunk_rest.call(null,inst_25910);
var inst_25916 = cljs.core.count.call(null,inst_25914);
var inst_25890 = inst_25915;
var inst_25891 = inst_25914;
var inst_25892 = inst_25916;
var inst_25893 = (0);
var state_26009__$1 = (function (){var statearr_26064 = state_26009;
(statearr_26064[(14)] = inst_25892);

(statearr_26064[(15)] = inst_25893);

(statearr_26064[(16)] = inst_25890);

(statearr_26064[(17)] = inst_25891);

return statearr_26064;
})();
var statearr_26065_26132 = state_26009__$1;
(statearr_26065_26132[(2)] = null);

(statearr_26065_26132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (11))){
var inst_25910 = (state_26009[(7)]);
var inst_25890 = (state_26009[(16)]);
var inst_25910__$1 = cljs.core.seq.call(null,inst_25890);
var state_26009__$1 = (function (){var statearr_26066 = state_26009;
(statearr_26066[(7)] = inst_25910__$1);

return statearr_26066;
})();
if(inst_25910__$1){
var statearr_26067_26133 = state_26009__$1;
(statearr_26067_26133[(1)] = (16));

} else {
var statearr_26068_26134 = state_26009__$1;
(statearr_26068_26134[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (9))){
var inst_25938 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
var statearr_26069_26135 = state_26009__$1;
(statearr_26069_26135[(2)] = inst_25938);

(statearr_26069_26135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (5))){
var inst_25888 = cljs.core.deref.call(null,cs);
var inst_25889 = cljs.core.seq.call(null,inst_25888);
var inst_25890 = inst_25889;
var inst_25891 = null;
var inst_25892 = (0);
var inst_25893 = (0);
var state_26009__$1 = (function (){var statearr_26070 = state_26009;
(statearr_26070[(14)] = inst_25892);

(statearr_26070[(15)] = inst_25893);

(statearr_26070[(16)] = inst_25890);

(statearr_26070[(17)] = inst_25891);

return statearr_26070;
})();
var statearr_26071_26136 = state_26009__$1;
(statearr_26071_26136[(2)] = null);

(statearr_26071_26136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (14))){
var state_26009__$1 = state_26009;
var statearr_26072_26137 = state_26009__$1;
(statearr_26072_26137[(2)] = null);

(statearr_26072_26137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (45))){
var inst_25999 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
var statearr_26073_26138 = state_26009__$1;
(statearr_26073_26138[(2)] = inst_25999);

(statearr_26073_26138[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (26))){
var inst_25941 = (state_26009[(29)]);
var inst_25995 = (state_26009[(2)]);
var inst_25996 = cljs.core.seq.call(null,inst_25941);
var state_26009__$1 = (function (){var statearr_26074 = state_26009;
(statearr_26074[(31)] = inst_25995);

return statearr_26074;
})();
if(inst_25996){
var statearr_26075_26139 = state_26009__$1;
(statearr_26075_26139[(1)] = (42));

} else {
var statearr_26076_26140 = state_26009__$1;
(statearr_26076_26140[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (16))){
var inst_25910 = (state_26009[(7)]);
var inst_25912 = cljs.core.chunked_seq_QMARK_.call(null,inst_25910);
var state_26009__$1 = state_26009;
if(inst_25912){
var statearr_26077_26141 = state_26009__$1;
(statearr_26077_26141[(1)] = (19));

} else {
var statearr_26078_26142 = state_26009__$1;
(statearr_26078_26142[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (38))){
var inst_25988 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
var statearr_26079_26143 = state_26009__$1;
(statearr_26079_26143[(2)] = inst_25988);

(statearr_26079_26143[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (30))){
var state_26009__$1 = state_26009;
var statearr_26080_26144 = state_26009__$1;
(statearr_26080_26144[(2)] = null);

(statearr_26080_26144[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (10))){
var inst_25893 = (state_26009[(15)]);
var inst_25891 = (state_26009[(17)]);
var inst_25899 = cljs.core._nth.call(null,inst_25891,inst_25893);
var inst_25900 = cljs.core.nth.call(null,inst_25899,(0),null);
var inst_25901 = cljs.core.nth.call(null,inst_25899,(1),null);
var state_26009__$1 = (function (){var statearr_26081 = state_26009;
(statearr_26081[(26)] = inst_25900);

return statearr_26081;
})();
if(cljs.core.truth_(inst_25901)){
var statearr_26082_26145 = state_26009__$1;
(statearr_26082_26145[(1)] = (13));

} else {
var statearr_26083_26146 = state_26009__$1;
(statearr_26083_26146[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (18))){
var inst_25934 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
var statearr_26084_26147 = state_26009__$1;
(statearr_26084_26147[(2)] = inst_25934);

(statearr_26084_26147[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (42))){
var state_26009__$1 = state_26009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26009__$1,(45),dchan);
} else {
if((state_val_26010 === (37))){
var inst_25881 = (state_26009[(9)]);
var inst_25968 = (state_26009[(25)]);
var inst_25977 = (state_26009[(23)]);
var inst_25977__$1 = cljs.core.first.call(null,inst_25968);
var inst_25978 = cljs.core.async.put_BANG_.call(null,inst_25977__$1,inst_25881,done);
var state_26009__$1 = (function (){var statearr_26085 = state_26009;
(statearr_26085[(23)] = inst_25977__$1);

return statearr_26085;
})();
if(cljs.core.truth_(inst_25978)){
var statearr_26086_26148 = state_26009__$1;
(statearr_26086_26148[(1)] = (39));

} else {
var statearr_26087_26149 = state_26009__$1;
(statearr_26087_26149[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (8))){
var inst_25892 = (state_26009[(14)]);
var inst_25893 = (state_26009[(15)]);
var inst_25895 = (inst_25893 < inst_25892);
var inst_25896 = inst_25895;
var state_26009__$1 = state_26009;
if(cljs.core.truth_(inst_25896)){
var statearr_26088_26150 = state_26009__$1;
(statearr_26088_26150[(1)] = (10));

} else {
var statearr_26089_26151 = state_26009__$1;
(statearr_26089_26151[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24790__auto___26097,cs,m,dchan,dctr,done))
;
return ((function (switch__24678__auto__,c__24790__auto___26097,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24679__auto__ = null;
var cljs$core$async$mult_$_state_machine__24679__auto____0 = (function (){
var statearr_26093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26093[(0)] = cljs$core$async$mult_$_state_machine__24679__auto__);

(statearr_26093[(1)] = (1));

return statearr_26093;
});
var cljs$core$async$mult_$_state_machine__24679__auto____1 = (function (state_26009){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_26009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e26094){if((e26094 instanceof Object)){
var ex__24682__auto__ = e26094;
var statearr_26095_26152 = state_26009;
(statearr_26095_26152[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26153 = state_26009;
state_26009 = G__26153;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24679__auto__ = function(state_26009){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24679__auto____1.call(this,state_26009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24679__auto____0;
cljs$core$async$mult_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24679__auto____1;
return cljs$core$async$mult_$_state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto___26097,cs,m,dchan,dctr,done))
})();
var state__24792__auto__ = (function (){var statearr_26096 = f__24791__auto__.call(null);
(statearr_26096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto___26097);

return statearr_26096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto___26097,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args26154 = [];
var len__19333__auto___26157 = arguments.length;
var i__19334__auto___26158 = (0);
while(true){
if((i__19334__auto___26158 < len__19333__auto___26157)){
args26154.push((arguments[i__19334__auto___26158]));

var G__26159 = (i__19334__auto___26158 + (1));
i__19334__auto___26158 = G__26159;
continue;
} else {
}
break;
}

var G__26156 = args26154.length;
switch (G__26156) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26154.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18930__auto__ = (((m == null))?null:m);
var m__18931__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,m,ch);
} else {
var m__18931__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18930__auto__ = (((m == null))?null:m);
var m__18931__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,m,ch);
} else {
var m__18931__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18930__auto__ = (((m == null))?null:m);
var m__18931__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,m);
} else {
var m__18931__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18930__auto__ = (((m == null))?null:m);
var m__18931__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,m,state_map);
} else {
var m__18931__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18930__auto__ = (((m == null))?null:m);
var m__18931__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,m,mode);
} else {
var m__18931__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19340__auto__ = [];
var len__19333__auto___26171 = arguments.length;
var i__19334__auto___26172 = (0);
while(true){
if((i__19334__auto___26172 < len__19333__auto___26171)){
args__19340__auto__.push((arguments[i__19334__auto___26172]));

var G__26173 = (i__19334__auto___26172 + (1));
i__19334__auto___26172 = G__26173;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((3) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19341__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26165){
var map__26166 = p__26165;
var map__26166__$1 = ((((!((map__26166 == null)))?((((map__26166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26166):map__26166);
var opts = map__26166__$1;
var statearr_26168_26174 = state;
(statearr_26168_26174[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__26166,map__26166__$1,opts){
return (function (val){
var statearr_26169_26175 = state;
(statearr_26169_26175[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26166,map__26166__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_26170_26176 = state;
(statearr_26170_26176[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26161){
var G__26162 = cljs.core.first.call(null,seq26161);
var seq26161__$1 = cljs.core.next.call(null,seq26161);
var G__26163 = cljs.core.first.call(null,seq26161__$1);
var seq26161__$2 = cljs.core.next.call(null,seq26161__$1);
var G__26164 = cljs.core.first.call(null,seq26161__$2);
var seq26161__$3 = cljs.core.next.call(null,seq26161__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26162,G__26163,G__26164,seq26161__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26340 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26340 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26341){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26341 = meta26341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26342,meta26341__$1){
var self__ = this;
var _26342__$1 = this;
return (new cljs.core.async.t_cljs$core$async26340(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26341__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26342){
var self__ = this;
var _26342__$1 = this;
return self__.meta26341;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26340.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26340.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26341","meta26341",-482518061,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26340";

cljs.core.async.t_cljs$core$async26340.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"cljs.core.async/t_cljs$core$async26340");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26340 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26340(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26341){
return (new cljs.core.async.t_cljs$core$async26340(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26341));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26340(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24790__auto___26503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto___26503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto___26503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26440){
var state_val_26441 = (state_26440[(1)]);
if((state_val_26441 === (7))){
var inst_26358 = (state_26440[(2)]);
var state_26440__$1 = state_26440;
var statearr_26442_26504 = state_26440__$1;
(statearr_26442_26504[(2)] = inst_26358);

(statearr_26442_26504[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (20))){
var inst_26370 = (state_26440[(7)]);
var state_26440__$1 = state_26440;
var statearr_26443_26505 = state_26440__$1;
(statearr_26443_26505[(2)] = inst_26370);

(statearr_26443_26505[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (27))){
var state_26440__$1 = state_26440;
var statearr_26444_26506 = state_26440__$1;
(statearr_26444_26506[(2)] = null);

(statearr_26444_26506[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (1))){
var inst_26346 = (state_26440[(8)]);
var inst_26346__$1 = calc_state.call(null);
var inst_26348 = (inst_26346__$1 == null);
var inst_26349 = cljs.core.not.call(null,inst_26348);
var state_26440__$1 = (function (){var statearr_26445 = state_26440;
(statearr_26445[(8)] = inst_26346__$1);

return statearr_26445;
})();
if(inst_26349){
var statearr_26446_26507 = state_26440__$1;
(statearr_26446_26507[(1)] = (2));

} else {
var statearr_26447_26508 = state_26440__$1;
(statearr_26447_26508[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (24))){
var inst_26400 = (state_26440[(9)]);
var inst_26414 = (state_26440[(10)]);
var inst_26393 = (state_26440[(11)]);
var inst_26414__$1 = inst_26393.call(null,inst_26400);
var state_26440__$1 = (function (){var statearr_26448 = state_26440;
(statearr_26448[(10)] = inst_26414__$1);

return statearr_26448;
})();
if(cljs.core.truth_(inst_26414__$1)){
var statearr_26449_26509 = state_26440__$1;
(statearr_26449_26509[(1)] = (29));

} else {
var statearr_26450_26510 = state_26440__$1;
(statearr_26450_26510[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (4))){
var inst_26361 = (state_26440[(2)]);
var state_26440__$1 = state_26440;
if(cljs.core.truth_(inst_26361)){
var statearr_26451_26511 = state_26440__$1;
(statearr_26451_26511[(1)] = (8));

} else {
var statearr_26452_26512 = state_26440__$1;
(statearr_26452_26512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (15))){
var inst_26387 = (state_26440[(2)]);
var state_26440__$1 = state_26440;
if(cljs.core.truth_(inst_26387)){
var statearr_26453_26513 = state_26440__$1;
(statearr_26453_26513[(1)] = (19));

} else {
var statearr_26454_26514 = state_26440__$1;
(statearr_26454_26514[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (21))){
var inst_26392 = (state_26440[(12)]);
var inst_26392__$1 = (state_26440[(2)]);
var inst_26393 = cljs.core.get.call(null,inst_26392__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26394 = cljs.core.get.call(null,inst_26392__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26395 = cljs.core.get.call(null,inst_26392__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26440__$1 = (function (){var statearr_26455 = state_26440;
(statearr_26455[(13)] = inst_26394);

(statearr_26455[(11)] = inst_26393);

(statearr_26455[(12)] = inst_26392__$1);

return statearr_26455;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26440__$1,(22),inst_26395);
} else {
if((state_val_26441 === (31))){
var inst_26422 = (state_26440[(2)]);
var state_26440__$1 = state_26440;
if(cljs.core.truth_(inst_26422)){
var statearr_26456_26515 = state_26440__$1;
(statearr_26456_26515[(1)] = (32));

} else {
var statearr_26457_26516 = state_26440__$1;
(statearr_26457_26516[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (32))){
var inst_26399 = (state_26440[(14)]);
var state_26440__$1 = state_26440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26440__$1,(35),out,inst_26399);
} else {
if((state_val_26441 === (33))){
var inst_26392 = (state_26440[(12)]);
var inst_26370 = inst_26392;
var state_26440__$1 = (function (){var statearr_26458 = state_26440;
(statearr_26458[(7)] = inst_26370);

return statearr_26458;
})();
var statearr_26459_26517 = state_26440__$1;
(statearr_26459_26517[(2)] = null);

(statearr_26459_26517[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (13))){
var inst_26370 = (state_26440[(7)]);
var inst_26377 = inst_26370.cljs$lang$protocol_mask$partition0$;
var inst_26378 = (inst_26377 & (64));
var inst_26379 = inst_26370.cljs$core$ISeq$;
var inst_26380 = (inst_26378) || (inst_26379);
var state_26440__$1 = state_26440;
if(cljs.core.truth_(inst_26380)){
var statearr_26460_26518 = state_26440__$1;
(statearr_26460_26518[(1)] = (16));

} else {
var statearr_26461_26519 = state_26440__$1;
(statearr_26461_26519[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (22))){
var inst_26400 = (state_26440[(9)]);
var inst_26399 = (state_26440[(14)]);
var inst_26398 = (state_26440[(2)]);
var inst_26399__$1 = cljs.core.nth.call(null,inst_26398,(0),null);
var inst_26400__$1 = cljs.core.nth.call(null,inst_26398,(1),null);
var inst_26401 = (inst_26399__$1 == null);
var inst_26402 = cljs.core._EQ_.call(null,inst_26400__$1,change);
var inst_26403 = (inst_26401) || (inst_26402);
var state_26440__$1 = (function (){var statearr_26462 = state_26440;
(statearr_26462[(9)] = inst_26400__$1);

(statearr_26462[(14)] = inst_26399__$1);

return statearr_26462;
})();
if(cljs.core.truth_(inst_26403)){
var statearr_26463_26520 = state_26440__$1;
(statearr_26463_26520[(1)] = (23));

} else {
var statearr_26464_26521 = state_26440__$1;
(statearr_26464_26521[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (36))){
var inst_26392 = (state_26440[(12)]);
var inst_26370 = inst_26392;
var state_26440__$1 = (function (){var statearr_26465 = state_26440;
(statearr_26465[(7)] = inst_26370);

return statearr_26465;
})();
var statearr_26466_26522 = state_26440__$1;
(statearr_26466_26522[(2)] = null);

(statearr_26466_26522[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (29))){
var inst_26414 = (state_26440[(10)]);
var state_26440__$1 = state_26440;
var statearr_26467_26523 = state_26440__$1;
(statearr_26467_26523[(2)] = inst_26414);

(statearr_26467_26523[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (6))){
var state_26440__$1 = state_26440;
var statearr_26468_26524 = state_26440__$1;
(statearr_26468_26524[(2)] = false);

(statearr_26468_26524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (28))){
var inst_26410 = (state_26440[(2)]);
var inst_26411 = calc_state.call(null);
var inst_26370 = inst_26411;
var state_26440__$1 = (function (){var statearr_26469 = state_26440;
(statearr_26469[(7)] = inst_26370);

(statearr_26469[(15)] = inst_26410);

return statearr_26469;
})();
var statearr_26470_26525 = state_26440__$1;
(statearr_26470_26525[(2)] = null);

(statearr_26470_26525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (25))){
var inst_26436 = (state_26440[(2)]);
var state_26440__$1 = state_26440;
var statearr_26471_26526 = state_26440__$1;
(statearr_26471_26526[(2)] = inst_26436);

(statearr_26471_26526[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (34))){
var inst_26434 = (state_26440[(2)]);
var state_26440__$1 = state_26440;
var statearr_26472_26527 = state_26440__$1;
(statearr_26472_26527[(2)] = inst_26434);

(statearr_26472_26527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (17))){
var state_26440__$1 = state_26440;
var statearr_26473_26528 = state_26440__$1;
(statearr_26473_26528[(2)] = false);

(statearr_26473_26528[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (3))){
var state_26440__$1 = state_26440;
var statearr_26474_26529 = state_26440__$1;
(statearr_26474_26529[(2)] = false);

(statearr_26474_26529[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (12))){
var inst_26438 = (state_26440[(2)]);
var state_26440__$1 = state_26440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26440__$1,inst_26438);
} else {
if((state_val_26441 === (2))){
var inst_26346 = (state_26440[(8)]);
var inst_26351 = inst_26346.cljs$lang$protocol_mask$partition0$;
var inst_26352 = (inst_26351 & (64));
var inst_26353 = inst_26346.cljs$core$ISeq$;
var inst_26354 = (inst_26352) || (inst_26353);
var state_26440__$1 = state_26440;
if(cljs.core.truth_(inst_26354)){
var statearr_26475_26530 = state_26440__$1;
(statearr_26475_26530[(1)] = (5));

} else {
var statearr_26476_26531 = state_26440__$1;
(statearr_26476_26531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (23))){
var inst_26399 = (state_26440[(14)]);
var inst_26405 = (inst_26399 == null);
var state_26440__$1 = state_26440;
if(cljs.core.truth_(inst_26405)){
var statearr_26477_26532 = state_26440__$1;
(statearr_26477_26532[(1)] = (26));

} else {
var statearr_26478_26533 = state_26440__$1;
(statearr_26478_26533[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (35))){
var inst_26425 = (state_26440[(2)]);
var state_26440__$1 = state_26440;
if(cljs.core.truth_(inst_26425)){
var statearr_26479_26534 = state_26440__$1;
(statearr_26479_26534[(1)] = (36));

} else {
var statearr_26480_26535 = state_26440__$1;
(statearr_26480_26535[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (19))){
var inst_26370 = (state_26440[(7)]);
var inst_26389 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26370);
var state_26440__$1 = state_26440;
var statearr_26481_26536 = state_26440__$1;
(statearr_26481_26536[(2)] = inst_26389);

(statearr_26481_26536[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (11))){
var inst_26370 = (state_26440[(7)]);
var inst_26374 = (inst_26370 == null);
var inst_26375 = cljs.core.not.call(null,inst_26374);
var state_26440__$1 = state_26440;
if(inst_26375){
var statearr_26482_26537 = state_26440__$1;
(statearr_26482_26537[(1)] = (13));

} else {
var statearr_26483_26538 = state_26440__$1;
(statearr_26483_26538[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (9))){
var inst_26346 = (state_26440[(8)]);
var state_26440__$1 = state_26440;
var statearr_26484_26539 = state_26440__$1;
(statearr_26484_26539[(2)] = inst_26346);

(statearr_26484_26539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (5))){
var state_26440__$1 = state_26440;
var statearr_26485_26540 = state_26440__$1;
(statearr_26485_26540[(2)] = true);

(statearr_26485_26540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (14))){
var state_26440__$1 = state_26440;
var statearr_26486_26541 = state_26440__$1;
(statearr_26486_26541[(2)] = false);

(statearr_26486_26541[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (26))){
var inst_26400 = (state_26440[(9)]);
var inst_26407 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26400);
var state_26440__$1 = state_26440;
var statearr_26487_26542 = state_26440__$1;
(statearr_26487_26542[(2)] = inst_26407);

(statearr_26487_26542[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (16))){
var state_26440__$1 = state_26440;
var statearr_26488_26543 = state_26440__$1;
(statearr_26488_26543[(2)] = true);

(statearr_26488_26543[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (38))){
var inst_26430 = (state_26440[(2)]);
var state_26440__$1 = state_26440;
var statearr_26489_26544 = state_26440__$1;
(statearr_26489_26544[(2)] = inst_26430);

(statearr_26489_26544[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (30))){
var inst_26394 = (state_26440[(13)]);
var inst_26400 = (state_26440[(9)]);
var inst_26393 = (state_26440[(11)]);
var inst_26417 = cljs.core.empty_QMARK_.call(null,inst_26393);
var inst_26418 = inst_26394.call(null,inst_26400);
var inst_26419 = cljs.core.not.call(null,inst_26418);
var inst_26420 = (inst_26417) && (inst_26419);
var state_26440__$1 = state_26440;
var statearr_26490_26545 = state_26440__$1;
(statearr_26490_26545[(2)] = inst_26420);

(statearr_26490_26545[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (10))){
var inst_26346 = (state_26440[(8)]);
var inst_26366 = (state_26440[(2)]);
var inst_26367 = cljs.core.get.call(null,inst_26366,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26368 = cljs.core.get.call(null,inst_26366,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26369 = cljs.core.get.call(null,inst_26366,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26370 = inst_26346;
var state_26440__$1 = (function (){var statearr_26491 = state_26440;
(statearr_26491[(16)] = inst_26367);

(statearr_26491[(17)] = inst_26368);

(statearr_26491[(7)] = inst_26370);

(statearr_26491[(18)] = inst_26369);

return statearr_26491;
})();
var statearr_26492_26546 = state_26440__$1;
(statearr_26492_26546[(2)] = null);

(statearr_26492_26546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (18))){
var inst_26384 = (state_26440[(2)]);
var state_26440__$1 = state_26440;
var statearr_26493_26547 = state_26440__$1;
(statearr_26493_26547[(2)] = inst_26384);

(statearr_26493_26547[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (37))){
var state_26440__$1 = state_26440;
var statearr_26494_26548 = state_26440__$1;
(statearr_26494_26548[(2)] = null);

(statearr_26494_26548[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26441 === (8))){
var inst_26346 = (state_26440[(8)]);
var inst_26363 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26346);
var state_26440__$1 = state_26440;
var statearr_26495_26549 = state_26440__$1;
(statearr_26495_26549[(2)] = inst_26363);

(statearr_26495_26549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24790__auto___26503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24678__auto__,c__24790__auto___26503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24679__auto__ = null;
var cljs$core$async$mix_$_state_machine__24679__auto____0 = (function (){
var statearr_26499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26499[(0)] = cljs$core$async$mix_$_state_machine__24679__auto__);

(statearr_26499[(1)] = (1));

return statearr_26499;
});
var cljs$core$async$mix_$_state_machine__24679__auto____1 = (function (state_26440){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_26440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e26500){if((e26500 instanceof Object)){
var ex__24682__auto__ = e26500;
var statearr_26501_26550 = state_26440;
(statearr_26501_26550[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26551 = state_26440;
state_26440 = G__26551;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24679__auto__ = function(state_26440){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24679__auto____1.call(this,state_26440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24679__auto____0;
cljs$core$async$mix_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24679__auto____1;
return cljs$core$async$mix_$_state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto___26503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24792__auto__ = (function (){var statearr_26502 = f__24791__auto__.call(null);
(statearr_26502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto___26503);

return statearr_26502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto___26503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18930__auto__ = (((p == null))?null:p);
var m__18931__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18931__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18930__auto__ = (((p == null))?null:p);
var m__18931__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,p,v,ch);
} else {
var m__18931__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26552 = [];
var len__19333__auto___26555 = arguments.length;
var i__19334__auto___26556 = (0);
while(true){
if((i__19334__auto___26556 < len__19333__auto___26555)){
args26552.push((arguments[i__19334__auto___26556]));

var G__26557 = (i__19334__auto___26556 + (1));
i__19334__auto___26556 = G__26557;
continue;
} else {
}
break;
}

var G__26554 = args26552.length;
switch (G__26554) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26552.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18930__auto__ = (((p == null))?null:p);
var m__18931__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,p);
} else {
var m__18931__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18930__auto__ = (((p == null))?null:p);
var m__18931__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,p,v);
} else {
var m__18931__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args26560 = [];
var len__19333__auto___26685 = arguments.length;
var i__19334__auto___26686 = (0);
while(true){
if((i__19334__auto___26686 < len__19333__auto___26685)){
args26560.push((arguments[i__19334__auto___26686]));

var G__26687 = (i__19334__auto___26686 + (1));
i__19334__auto___26686 = G__26687;
continue;
} else {
}
break;
}

var G__26562 = args26560.length;
switch (G__26562) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26560.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18275__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18275__auto__,mults){
return (function (p1__26559_SHARP_){
if(cljs.core.truth_(p1__26559_SHARP_.call(null,topic))){
return p1__26559_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26559_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18275__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26563 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26563 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26564){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26564 = meta26564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26565,meta26564__$1){
var self__ = this;
var _26565__$1 = this;
return (new cljs.core.async.t_cljs$core$async26563(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26564__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26565){
var self__ = this;
var _26565__$1 = this;
return self__.meta26564;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26563.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26563.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26564","meta26564",-914886241,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26563.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26563";

cljs.core.async.t_cljs$core$async26563.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"cljs.core.async/t_cljs$core$async26563");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26563 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26563(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26564){
return (new cljs.core.async.t_cljs$core$async26563(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26564));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26563(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24790__auto___26689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto___26689,mults,ensure_mult,p){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto___26689,mults,ensure_mult,p){
return (function (state_26637){
var state_val_26638 = (state_26637[(1)]);
if((state_val_26638 === (7))){
var inst_26633 = (state_26637[(2)]);
var state_26637__$1 = state_26637;
var statearr_26639_26690 = state_26637__$1;
(statearr_26639_26690[(2)] = inst_26633);

(statearr_26639_26690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (20))){
var state_26637__$1 = state_26637;
var statearr_26640_26691 = state_26637__$1;
(statearr_26640_26691[(2)] = null);

(statearr_26640_26691[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (1))){
var state_26637__$1 = state_26637;
var statearr_26641_26692 = state_26637__$1;
(statearr_26641_26692[(2)] = null);

(statearr_26641_26692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (24))){
var inst_26616 = (state_26637[(7)]);
var inst_26625 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26616);
var state_26637__$1 = state_26637;
var statearr_26642_26693 = state_26637__$1;
(statearr_26642_26693[(2)] = inst_26625);

(statearr_26642_26693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (4))){
var inst_26568 = (state_26637[(8)]);
var inst_26568__$1 = (state_26637[(2)]);
var inst_26569 = (inst_26568__$1 == null);
var state_26637__$1 = (function (){var statearr_26643 = state_26637;
(statearr_26643[(8)] = inst_26568__$1);

return statearr_26643;
})();
if(cljs.core.truth_(inst_26569)){
var statearr_26644_26694 = state_26637__$1;
(statearr_26644_26694[(1)] = (5));

} else {
var statearr_26645_26695 = state_26637__$1;
(statearr_26645_26695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (15))){
var inst_26610 = (state_26637[(2)]);
var state_26637__$1 = state_26637;
var statearr_26646_26696 = state_26637__$1;
(statearr_26646_26696[(2)] = inst_26610);

(statearr_26646_26696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (21))){
var inst_26630 = (state_26637[(2)]);
var state_26637__$1 = (function (){var statearr_26647 = state_26637;
(statearr_26647[(9)] = inst_26630);

return statearr_26647;
})();
var statearr_26648_26697 = state_26637__$1;
(statearr_26648_26697[(2)] = null);

(statearr_26648_26697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (13))){
var inst_26592 = (state_26637[(10)]);
var inst_26594 = cljs.core.chunked_seq_QMARK_.call(null,inst_26592);
var state_26637__$1 = state_26637;
if(inst_26594){
var statearr_26649_26698 = state_26637__$1;
(statearr_26649_26698[(1)] = (16));

} else {
var statearr_26650_26699 = state_26637__$1;
(statearr_26650_26699[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (22))){
var inst_26622 = (state_26637[(2)]);
var state_26637__$1 = state_26637;
if(cljs.core.truth_(inst_26622)){
var statearr_26651_26700 = state_26637__$1;
(statearr_26651_26700[(1)] = (23));

} else {
var statearr_26652_26701 = state_26637__$1;
(statearr_26652_26701[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (6))){
var inst_26618 = (state_26637[(11)]);
var inst_26616 = (state_26637[(7)]);
var inst_26568 = (state_26637[(8)]);
var inst_26616__$1 = topic_fn.call(null,inst_26568);
var inst_26617 = cljs.core.deref.call(null,mults);
var inst_26618__$1 = cljs.core.get.call(null,inst_26617,inst_26616__$1);
var state_26637__$1 = (function (){var statearr_26653 = state_26637;
(statearr_26653[(11)] = inst_26618__$1);

(statearr_26653[(7)] = inst_26616__$1);

return statearr_26653;
})();
if(cljs.core.truth_(inst_26618__$1)){
var statearr_26654_26702 = state_26637__$1;
(statearr_26654_26702[(1)] = (19));

} else {
var statearr_26655_26703 = state_26637__$1;
(statearr_26655_26703[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (25))){
var inst_26627 = (state_26637[(2)]);
var state_26637__$1 = state_26637;
var statearr_26656_26704 = state_26637__$1;
(statearr_26656_26704[(2)] = inst_26627);

(statearr_26656_26704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (17))){
var inst_26592 = (state_26637[(10)]);
var inst_26601 = cljs.core.first.call(null,inst_26592);
var inst_26602 = cljs.core.async.muxch_STAR_.call(null,inst_26601);
var inst_26603 = cljs.core.async.close_BANG_.call(null,inst_26602);
var inst_26604 = cljs.core.next.call(null,inst_26592);
var inst_26578 = inst_26604;
var inst_26579 = null;
var inst_26580 = (0);
var inst_26581 = (0);
var state_26637__$1 = (function (){var statearr_26657 = state_26637;
(statearr_26657[(12)] = inst_26603);

(statearr_26657[(13)] = inst_26580);

(statearr_26657[(14)] = inst_26579);

(statearr_26657[(15)] = inst_26578);

(statearr_26657[(16)] = inst_26581);

return statearr_26657;
})();
var statearr_26658_26705 = state_26637__$1;
(statearr_26658_26705[(2)] = null);

(statearr_26658_26705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (3))){
var inst_26635 = (state_26637[(2)]);
var state_26637__$1 = state_26637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26637__$1,inst_26635);
} else {
if((state_val_26638 === (12))){
var inst_26612 = (state_26637[(2)]);
var state_26637__$1 = state_26637;
var statearr_26659_26706 = state_26637__$1;
(statearr_26659_26706[(2)] = inst_26612);

(statearr_26659_26706[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (2))){
var state_26637__$1 = state_26637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26637__$1,(4),ch);
} else {
if((state_val_26638 === (23))){
var state_26637__$1 = state_26637;
var statearr_26660_26707 = state_26637__$1;
(statearr_26660_26707[(2)] = null);

(statearr_26660_26707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (19))){
var inst_26618 = (state_26637[(11)]);
var inst_26568 = (state_26637[(8)]);
var inst_26620 = cljs.core.async.muxch_STAR_.call(null,inst_26618);
var state_26637__$1 = state_26637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26637__$1,(22),inst_26620,inst_26568);
} else {
if((state_val_26638 === (11))){
var inst_26592 = (state_26637[(10)]);
var inst_26578 = (state_26637[(15)]);
var inst_26592__$1 = cljs.core.seq.call(null,inst_26578);
var state_26637__$1 = (function (){var statearr_26661 = state_26637;
(statearr_26661[(10)] = inst_26592__$1);

return statearr_26661;
})();
if(inst_26592__$1){
var statearr_26662_26708 = state_26637__$1;
(statearr_26662_26708[(1)] = (13));

} else {
var statearr_26663_26709 = state_26637__$1;
(statearr_26663_26709[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (9))){
var inst_26614 = (state_26637[(2)]);
var state_26637__$1 = state_26637;
var statearr_26664_26710 = state_26637__$1;
(statearr_26664_26710[(2)] = inst_26614);

(statearr_26664_26710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (5))){
var inst_26575 = cljs.core.deref.call(null,mults);
var inst_26576 = cljs.core.vals.call(null,inst_26575);
var inst_26577 = cljs.core.seq.call(null,inst_26576);
var inst_26578 = inst_26577;
var inst_26579 = null;
var inst_26580 = (0);
var inst_26581 = (0);
var state_26637__$1 = (function (){var statearr_26665 = state_26637;
(statearr_26665[(13)] = inst_26580);

(statearr_26665[(14)] = inst_26579);

(statearr_26665[(15)] = inst_26578);

(statearr_26665[(16)] = inst_26581);

return statearr_26665;
})();
var statearr_26666_26711 = state_26637__$1;
(statearr_26666_26711[(2)] = null);

(statearr_26666_26711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (14))){
var state_26637__$1 = state_26637;
var statearr_26670_26712 = state_26637__$1;
(statearr_26670_26712[(2)] = null);

(statearr_26670_26712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (16))){
var inst_26592 = (state_26637[(10)]);
var inst_26596 = cljs.core.chunk_first.call(null,inst_26592);
var inst_26597 = cljs.core.chunk_rest.call(null,inst_26592);
var inst_26598 = cljs.core.count.call(null,inst_26596);
var inst_26578 = inst_26597;
var inst_26579 = inst_26596;
var inst_26580 = inst_26598;
var inst_26581 = (0);
var state_26637__$1 = (function (){var statearr_26671 = state_26637;
(statearr_26671[(13)] = inst_26580);

(statearr_26671[(14)] = inst_26579);

(statearr_26671[(15)] = inst_26578);

(statearr_26671[(16)] = inst_26581);

return statearr_26671;
})();
var statearr_26672_26713 = state_26637__$1;
(statearr_26672_26713[(2)] = null);

(statearr_26672_26713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (10))){
var inst_26580 = (state_26637[(13)]);
var inst_26579 = (state_26637[(14)]);
var inst_26578 = (state_26637[(15)]);
var inst_26581 = (state_26637[(16)]);
var inst_26586 = cljs.core._nth.call(null,inst_26579,inst_26581);
var inst_26587 = cljs.core.async.muxch_STAR_.call(null,inst_26586);
var inst_26588 = cljs.core.async.close_BANG_.call(null,inst_26587);
var inst_26589 = (inst_26581 + (1));
var tmp26667 = inst_26580;
var tmp26668 = inst_26579;
var tmp26669 = inst_26578;
var inst_26578__$1 = tmp26669;
var inst_26579__$1 = tmp26668;
var inst_26580__$1 = tmp26667;
var inst_26581__$1 = inst_26589;
var state_26637__$1 = (function (){var statearr_26673 = state_26637;
(statearr_26673[(17)] = inst_26588);

(statearr_26673[(13)] = inst_26580__$1);

(statearr_26673[(14)] = inst_26579__$1);

(statearr_26673[(15)] = inst_26578__$1);

(statearr_26673[(16)] = inst_26581__$1);

return statearr_26673;
})();
var statearr_26674_26714 = state_26637__$1;
(statearr_26674_26714[(2)] = null);

(statearr_26674_26714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (18))){
var inst_26607 = (state_26637[(2)]);
var state_26637__$1 = state_26637;
var statearr_26675_26715 = state_26637__$1;
(statearr_26675_26715[(2)] = inst_26607);

(statearr_26675_26715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26638 === (8))){
var inst_26580 = (state_26637[(13)]);
var inst_26581 = (state_26637[(16)]);
var inst_26583 = (inst_26581 < inst_26580);
var inst_26584 = inst_26583;
var state_26637__$1 = state_26637;
if(cljs.core.truth_(inst_26584)){
var statearr_26676_26716 = state_26637__$1;
(statearr_26676_26716[(1)] = (10));

} else {
var statearr_26677_26717 = state_26637__$1;
(statearr_26677_26717[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24790__auto___26689,mults,ensure_mult,p))
;
return ((function (switch__24678__auto__,c__24790__auto___26689,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24679__auto__ = null;
var cljs$core$async$state_machine__24679__auto____0 = (function (){
var statearr_26681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26681[(0)] = cljs$core$async$state_machine__24679__auto__);

(statearr_26681[(1)] = (1));

return statearr_26681;
});
var cljs$core$async$state_machine__24679__auto____1 = (function (state_26637){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_26637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e26682){if((e26682 instanceof Object)){
var ex__24682__auto__ = e26682;
var statearr_26683_26718 = state_26637;
(statearr_26683_26718[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26719 = state_26637;
state_26637 = G__26719;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$state_machine__24679__auto__ = function(state_26637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24679__auto____1.call(this,state_26637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24679__auto____0;
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24679__auto____1;
return cljs$core$async$state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto___26689,mults,ensure_mult,p))
})();
var state__24792__auto__ = (function (){var statearr_26684 = f__24791__auto__.call(null);
(statearr_26684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto___26689);

return statearr_26684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto___26689,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args26720 = [];
var len__19333__auto___26723 = arguments.length;
var i__19334__auto___26724 = (0);
while(true){
if((i__19334__auto___26724 < len__19333__auto___26723)){
args26720.push((arguments[i__19334__auto___26724]));

var G__26725 = (i__19334__auto___26724 + (1));
i__19334__auto___26724 = G__26725;
continue;
} else {
}
break;
}

var G__26722 = args26720.length;
switch (G__26722) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26720.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args26727 = [];
var len__19333__auto___26730 = arguments.length;
var i__19334__auto___26731 = (0);
while(true){
if((i__19334__auto___26731 < len__19333__auto___26730)){
args26727.push((arguments[i__19334__auto___26731]));

var G__26732 = (i__19334__auto___26731 + (1));
i__19334__auto___26731 = G__26732;
continue;
} else {
}
break;
}

var G__26729 = args26727.length;
switch (G__26729) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26727.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args26734 = [];
var len__19333__auto___26805 = arguments.length;
var i__19334__auto___26806 = (0);
while(true){
if((i__19334__auto___26806 < len__19333__auto___26805)){
args26734.push((arguments[i__19334__auto___26806]));

var G__26807 = (i__19334__auto___26806 + (1));
i__19334__auto___26806 = G__26807;
continue;
} else {
}
break;
}

var G__26736 = args26734.length;
switch (G__26736) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26734.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24790__auto___26809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto___26809,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto___26809,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26775){
var state_val_26776 = (state_26775[(1)]);
if((state_val_26776 === (7))){
var state_26775__$1 = state_26775;
var statearr_26777_26810 = state_26775__$1;
(statearr_26777_26810[(2)] = null);

(statearr_26777_26810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (1))){
var state_26775__$1 = state_26775;
var statearr_26778_26811 = state_26775__$1;
(statearr_26778_26811[(2)] = null);

(statearr_26778_26811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (4))){
var inst_26739 = (state_26775[(7)]);
var inst_26741 = (inst_26739 < cnt);
var state_26775__$1 = state_26775;
if(cljs.core.truth_(inst_26741)){
var statearr_26779_26812 = state_26775__$1;
(statearr_26779_26812[(1)] = (6));

} else {
var statearr_26780_26813 = state_26775__$1;
(statearr_26780_26813[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (15))){
var inst_26771 = (state_26775[(2)]);
var state_26775__$1 = state_26775;
var statearr_26781_26814 = state_26775__$1;
(statearr_26781_26814[(2)] = inst_26771);

(statearr_26781_26814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (13))){
var inst_26764 = cljs.core.async.close_BANG_.call(null,out);
var state_26775__$1 = state_26775;
var statearr_26782_26815 = state_26775__$1;
(statearr_26782_26815[(2)] = inst_26764);

(statearr_26782_26815[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (6))){
var state_26775__$1 = state_26775;
var statearr_26783_26816 = state_26775__$1;
(statearr_26783_26816[(2)] = null);

(statearr_26783_26816[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (3))){
var inst_26773 = (state_26775[(2)]);
var state_26775__$1 = state_26775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26775__$1,inst_26773);
} else {
if((state_val_26776 === (12))){
var inst_26761 = (state_26775[(8)]);
var inst_26761__$1 = (state_26775[(2)]);
var inst_26762 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26761__$1);
var state_26775__$1 = (function (){var statearr_26784 = state_26775;
(statearr_26784[(8)] = inst_26761__$1);

return statearr_26784;
})();
if(cljs.core.truth_(inst_26762)){
var statearr_26785_26817 = state_26775__$1;
(statearr_26785_26817[(1)] = (13));

} else {
var statearr_26786_26818 = state_26775__$1;
(statearr_26786_26818[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (2))){
var inst_26738 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26739 = (0);
var state_26775__$1 = (function (){var statearr_26787 = state_26775;
(statearr_26787[(9)] = inst_26738);

(statearr_26787[(7)] = inst_26739);

return statearr_26787;
})();
var statearr_26788_26819 = state_26775__$1;
(statearr_26788_26819[(2)] = null);

(statearr_26788_26819[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (11))){
var inst_26739 = (state_26775[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26775,(10),Object,null,(9));
var inst_26748 = chs__$1.call(null,inst_26739);
var inst_26749 = done.call(null,inst_26739);
var inst_26750 = cljs.core.async.take_BANG_.call(null,inst_26748,inst_26749);
var state_26775__$1 = state_26775;
var statearr_26789_26820 = state_26775__$1;
(statearr_26789_26820[(2)] = inst_26750);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26775__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (9))){
var inst_26739 = (state_26775[(7)]);
var inst_26752 = (state_26775[(2)]);
var inst_26753 = (inst_26739 + (1));
var inst_26739__$1 = inst_26753;
var state_26775__$1 = (function (){var statearr_26790 = state_26775;
(statearr_26790[(10)] = inst_26752);

(statearr_26790[(7)] = inst_26739__$1);

return statearr_26790;
})();
var statearr_26791_26821 = state_26775__$1;
(statearr_26791_26821[(2)] = null);

(statearr_26791_26821[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (5))){
var inst_26759 = (state_26775[(2)]);
var state_26775__$1 = (function (){var statearr_26792 = state_26775;
(statearr_26792[(11)] = inst_26759);

return statearr_26792;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26775__$1,(12),dchan);
} else {
if((state_val_26776 === (14))){
var inst_26761 = (state_26775[(8)]);
var inst_26766 = cljs.core.apply.call(null,f,inst_26761);
var state_26775__$1 = state_26775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26775__$1,(16),out,inst_26766);
} else {
if((state_val_26776 === (16))){
var inst_26768 = (state_26775[(2)]);
var state_26775__$1 = (function (){var statearr_26793 = state_26775;
(statearr_26793[(12)] = inst_26768);

return statearr_26793;
})();
var statearr_26794_26822 = state_26775__$1;
(statearr_26794_26822[(2)] = null);

(statearr_26794_26822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (10))){
var inst_26743 = (state_26775[(2)]);
var inst_26744 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26775__$1 = (function (){var statearr_26795 = state_26775;
(statearr_26795[(13)] = inst_26743);

return statearr_26795;
})();
var statearr_26796_26823 = state_26775__$1;
(statearr_26796_26823[(2)] = inst_26744);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26775__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (8))){
var inst_26757 = (state_26775[(2)]);
var state_26775__$1 = state_26775;
var statearr_26797_26824 = state_26775__$1;
(statearr_26797_26824[(2)] = inst_26757);

(statearr_26797_26824[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24790__auto___26809,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24678__auto__,c__24790__auto___26809,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24679__auto__ = null;
var cljs$core$async$state_machine__24679__auto____0 = (function (){
var statearr_26801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26801[(0)] = cljs$core$async$state_machine__24679__auto__);

(statearr_26801[(1)] = (1));

return statearr_26801;
});
var cljs$core$async$state_machine__24679__auto____1 = (function (state_26775){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_26775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e26802){if((e26802 instanceof Object)){
var ex__24682__auto__ = e26802;
var statearr_26803_26825 = state_26775;
(statearr_26803_26825[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26826 = state_26775;
state_26775 = G__26826;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$state_machine__24679__auto__ = function(state_26775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24679__auto____1.call(this,state_26775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24679__auto____0;
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24679__auto____1;
return cljs$core$async$state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto___26809,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24792__auto__ = (function (){var statearr_26804 = f__24791__auto__.call(null);
(statearr_26804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto___26809);

return statearr_26804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto___26809,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args26828 = [];
var len__19333__auto___26884 = arguments.length;
var i__19334__auto___26885 = (0);
while(true){
if((i__19334__auto___26885 < len__19333__auto___26884)){
args26828.push((arguments[i__19334__auto___26885]));

var G__26886 = (i__19334__auto___26885 + (1));
i__19334__auto___26885 = G__26886;
continue;
} else {
}
break;
}

var G__26830 = args26828.length;
switch (G__26830) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26828.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24790__auto___26888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto___26888,out){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto___26888,out){
return (function (state_26860){
var state_val_26861 = (state_26860[(1)]);
if((state_val_26861 === (7))){
var inst_26839 = (state_26860[(7)]);
var inst_26840 = (state_26860[(8)]);
var inst_26839__$1 = (state_26860[(2)]);
var inst_26840__$1 = cljs.core.nth.call(null,inst_26839__$1,(0),null);
var inst_26841 = cljs.core.nth.call(null,inst_26839__$1,(1),null);
var inst_26842 = (inst_26840__$1 == null);
var state_26860__$1 = (function (){var statearr_26862 = state_26860;
(statearr_26862[(9)] = inst_26841);

(statearr_26862[(7)] = inst_26839__$1);

(statearr_26862[(8)] = inst_26840__$1);

return statearr_26862;
})();
if(cljs.core.truth_(inst_26842)){
var statearr_26863_26889 = state_26860__$1;
(statearr_26863_26889[(1)] = (8));

} else {
var statearr_26864_26890 = state_26860__$1;
(statearr_26864_26890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26861 === (1))){
var inst_26831 = cljs.core.vec.call(null,chs);
var inst_26832 = inst_26831;
var state_26860__$1 = (function (){var statearr_26865 = state_26860;
(statearr_26865[(10)] = inst_26832);

return statearr_26865;
})();
var statearr_26866_26891 = state_26860__$1;
(statearr_26866_26891[(2)] = null);

(statearr_26866_26891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26861 === (4))){
var inst_26832 = (state_26860[(10)]);
var state_26860__$1 = state_26860;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26860__$1,(7),inst_26832);
} else {
if((state_val_26861 === (6))){
var inst_26856 = (state_26860[(2)]);
var state_26860__$1 = state_26860;
var statearr_26867_26892 = state_26860__$1;
(statearr_26867_26892[(2)] = inst_26856);

(statearr_26867_26892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26861 === (3))){
var inst_26858 = (state_26860[(2)]);
var state_26860__$1 = state_26860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26860__$1,inst_26858);
} else {
if((state_val_26861 === (2))){
var inst_26832 = (state_26860[(10)]);
var inst_26834 = cljs.core.count.call(null,inst_26832);
var inst_26835 = (inst_26834 > (0));
var state_26860__$1 = state_26860;
if(cljs.core.truth_(inst_26835)){
var statearr_26869_26893 = state_26860__$1;
(statearr_26869_26893[(1)] = (4));

} else {
var statearr_26870_26894 = state_26860__$1;
(statearr_26870_26894[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26861 === (11))){
var inst_26832 = (state_26860[(10)]);
var inst_26849 = (state_26860[(2)]);
var tmp26868 = inst_26832;
var inst_26832__$1 = tmp26868;
var state_26860__$1 = (function (){var statearr_26871 = state_26860;
(statearr_26871[(10)] = inst_26832__$1);

(statearr_26871[(11)] = inst_26849);

return statearr_26871;
})();
var statearr_26872_26895 = state_26860__$1;
(statearr_26872_26895[(2)] = null);

(statearr_26872_26895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26861 === (9))){
var inst_26840 = (state_26860[(8)]);
var state_26860__$1 = state_26860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26860__$1,(11),out,inst_26840);
} else {
if((state_val_26861 === (5))){
var inst_26854 = cljs.core.async.close_BANG_.call(null,out);
var state_26860__$1 = state_26860;
var statearr_26873_26896 = state_26860__$1;
(statearr_26873_26896[(2)] = inst_26854);

(statearr_26873_26896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26861 === (10))){
var inst_26852 = (state_26860[(2)]);
var state_26860__$1 = state_26860;
var statearr_26874_26897 = state_26860__$1;
(statearr_26874_26897[(2)] = inst_26852);

(statearr_26874_26897[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26861 === (8))){
var inst_26832 = (state_26860[(10)]);
var inst_26841 = (state_26860[(9)]);
var inst_26839 = (state_26860[(7)]);
var inst_26840 = (state_26860[(8)]);
var inst_26844 = (function (){var cs = inst_26832;
var vec__26837 = inst_26839;
var v = inst_26840;
var c = inst_26841;
return ((function (cs,vec__26837,v,c,inst_26832,inst_26841,inst_26839,inst_26840,state_val_26861,c__24790__auto___26888,out){
return (function (p1__26827_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26827_SHARP_);
});
;})(cs,vec__26837,v,c,inst_26832,inst_26841,inst_26839,inst_26840,state_val_26861,c__24790__auto___26888,out))
})();
var inst_26845 = cljs.core.filterv.call(null,inst_26844,inst_26832);
var inst_26832__$1 = inst_26845;
var state_26860__$1 = (function (){var statearr_26875 = state_26860;
(statearr_26875[(10)] = inst_26832__$1);

return statearr_26875;
})();
var statearr_26876_26898 = state_26860__$1;
(statearr_26876_26898[(2)] = null);

(statearr_26876_26898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24790__auto___26888,out))
;
return ((function (switch__24678__auto__,c__24790__auto___26888,out){
return (function() {
var cljs$core$async$state_machine__24679__auto__ = null;
var cljs$core$async$state_machine__24679__auto____0 = (function (){
var statearr_26880 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26880[(0)] = cljs$core$async$state_machine__24679__auto__);

(statearr_26880[(1)] = (1));

return statearr_26880;
});
var cljs$core$async$state_machine__24679__auto____1 = (function (state_26860){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_26860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e26881){if((e26881 instanceof Object)){
var ex__24682__auto__ = e26881;
var statearr_26882_26899 = state_26860;
(statearr_26882_26899[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26900 = state_26860;
state_26860 = G__26900;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$state_machine__24679__auto__ = function(state_26860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24679__auto____1.call(this,state_26860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24679__auto____0;
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24679__auto____1;
return cljs$core$async$state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto___26888,out))
})();
var state__24792__auto__ = (function (){var statearr_26883 = f__24791__auto__.call(null);
(statearr_26883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto___26888);

return statearr_26883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto___26888,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args26901 = [];
var len__19333__auto___26950 = arguments.length;
var i__19334__auto___26951 = (0);
while(true){
if((i__19334__auto___26951 < len__19333__auto___26950)){
args26901.push((arguments[i__19334__auto___26951]));

var G__26952 = (i__19334__auto___26951 + (1));
i__19334__auto___26951 = G__26952;
continue;
} else {
}
break;
}

var G__26903 = args26901.length;
switch (G__26903) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26901.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24790__auto___26954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto___26954,out){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto___26954,out){
return (function (state_26927){
var state_val_26928 = (state_26927[(1)]);
if((state_val_26928 === (7))){
var inst_26909 = (state_26927[(7)]);
var inst_26909__$1 = (state_26927[(2)]);
var inst_26910 = (inst_26909__$1 == null);
var inst_26911 = cljs.core.not.call(null,inst_26910);
var state_26927__$1 = (function (){var statearr_26929 = state_26927;
(statearr_26929[(7)] = inst_26909__$1);

return statearr_26929;
})();
if(inst_26911){
var statearr_26930_26955 = state_26927__$1;
(statearr_26930_26955[(1)] = (8));

} else {
var statearr_26931_26956 = state_26927__$1;
(statearr_26931_26956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (1))){
var inst_26904 = (0);
var state_26927__$1 = (function (){var statearr_26932 = state_26927;
(statearr_26932[(8)] = inst_26904);

return statearr_26932;
})();
var statearr_26933_26957 = state_26927__$1;
(statearr_26933_26957[(2)] = null);

(statearr_26933_26957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (4))){
var state_26927__$1 = state_26927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26927__$1,(7),ch);
} else {
if((state_val_26928 === (6))){
var inst_26922 = (state_26927[(2)]);
var state_26927__$1 = state_26927;
var statearr_26934_26958 = state_26927__$1;
(statearr_26934_26958[(2)] = inst_26922);

(statearr_26934_26958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (3))){
var inst_26924 = (state_26927[(2)]);
var inst_26925 = cljs.core.async.close_BANG_.call(null,out);
var state_26927__$1 = (function (){var statearr_26935 = state_26927;
(statearr_26935[(9)] = inst_26924);

return statearr_26935;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26927__$1,inst_26925);
} else {
if((state_val_26928 === (2))){
var inst_26904 = (state_26927[(8)]);
var inst_26906 = (inst_26904 < n);
var state_26927__$1 = state_26927;
if(cljs.core.truth_(inst_26906)){
var statearr_26936_26959 = state_26927__$1;
(statearr_26936_26959[(1)] = (4));

} else {
var statearr_26937_26960 = state_26927__$1;
(statearr_26937_26960[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (11))){
var inst_26904 = (state_26927[(8)]);
var inst_26914 = (state_26927[(2)]);
var inst_26915 = (inst_26904 + (1));
var inst_26904__$1 = inst_26915;
var state_26927__$1 = (function (){var statearr_26938 = state_26927;
(statearr_26938[(10)] = inst_26914);

(statearr_26938[(8)] = inst_26904__$1);

return statearr_26938;
})();
var statearr_26939_26961 = state_26927__$1;
(statearr_26939_26961[(2)] = null);

(statearr_26939_26961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (9))){
var state_26927__$1 = state_26927;
var statearr_26940_26962 = state_26927__$1;
(statearr_26940_26962[(2)] = null);

(statearr_26940_26962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (5))){
var state_26927__$1 = state_26927;
var statearr_26941_26963 = state_26927__$1;
(statearr_26941_26963[(2)] = null);

(statearr_26941_26963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (10))){
var inst_26919 = (state_26927[(2)]);
var state_26927__$1 = state_26927;
var statearr_26942_26964 = state_26927__$1;
(statearr_26942_26964[(2)] = inst_26919);

(statearr_26942_26964[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26928 === (8))){
var inst_26909 = (state_26927[(7)]);
var state_26927__$1 = state_26927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26927__$1,(11),out,inst_26909);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24790__auto___26954,out))
;
return ((function (switch__24678__auto__,c__24790__auto___26954,out){
return (function() {
var cljs$core$async$state_machine__24679__auto__ = null;
var cljs$core$async$state_machine__24679__auto____0 = (function (){
var statearr_26946 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26946[(0)] = cljs$core$async$state_machine__24679__auto__);

(statearr_26946[(1)] = (1));

return statearr_26946;
});
var cljs$core$async$state_machine__24679__auto____1 = (function (state_26927){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_26927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e26947){if((e26947 instanceof Object)){
var ex__24682__auto__ = e26947;
var statearr_26948_26965 = state_26927;
(statearr_26948_26965[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26966 = state_26927;
state_26927 = G__26966;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$state_machine__24679__auto__ = function(state_26927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24679__auto____1.call(this,state_26927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24679__auto____0;
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24679__auto____1;
return cljs$core$async$state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto___26954,out))
})();
var state__24792__auto__ = (function (){var statearr_26949 = f__24791__auto__.call(null);
(statearr_26949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto___26954);

return statearr_26949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto___26954,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26974 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26974 = (function (map_LT_,f,ch,meta26975){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26975 = meta26975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26976,meta26975__$1){
var self__ = this;
var _26976__$1 = this;
return (new cljs.core.async.t_cljs$core$async26974(self__.map_LT_,self__.f,self__.ch,meta26975__$1));
});

cljs.core.async.t_cljs$core$async26974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26976){
var self__ = this;
var _26976__$1 = this;
return self__.meta26975;
});

cljs.core.async.t_cljs$core$async26974.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26974.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26974.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26974.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26974.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26977 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26977 = (function (map_LT_,f,ch,meta26975,_,fn1,meta26978){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26975 = meta26975;
this._ = _;
this.fn1 = fn1;
this.meta26978 = meta26978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26979,meta26978__$1){
var self__ = this;
var _26979__$1 = this;
return (new cljs.core.async.t_cljs$core$async26977(self__.map_LT_,self__.f,self__.ch,self__.meta26975,self__._,self__.fn1,meta26978__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26977.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26979){
var self__ = this;
var _26979__$1 = this;
return self__.meta26978;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26977.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26977.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26977.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26977.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26967_SHARP_){
return f1.call(null,(((p1__26967_SHARP_ == null))?null:self__.f.call(null,p1__26967_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26977.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26975","meta26975",-1167316204,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26974","cljs.core.async/t_cljs$core$async26974",798435390,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26978","meta26978",-1494981030,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26977.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26977";

cljs.core.async.t_cljs$core$async26977.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"cljs.core.async/t_cljs$core$async26977");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26977 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26977(map_LT___$1,f__$1,ch__$1,meta26975__$1,___$2,fn1__$1,meta26978){
return (new cljs.core.async.t_cljs$core$async26977(map_LT___$1,f__$1,ch__$1,meta26975__$1,___$2,fn1__$1,meta26978));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26977(self__.map_LT_,self__.f,self__.ch,self__.meta26975,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18263__auto__ = ret;
if(cljs.core.truth_(and__18263__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18263__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26974.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26974.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26975","meta26975",-1167316204,null)], null);
});

cljs.core.async.t_cljs$core$async26974.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26974";

cljs.core.async.t_cljs$core$async26974.cljs$lang$ctorPrWriter = (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"cljs.core.async/t_cljs$core$async26974");
});

cljs.core.async.__GT_t_cljs$core$async26974 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26974(map_LT___$1,f__$1,ch__$1,meta26975){
return (new cljs.core.async.t_cljs$core$async26974(map_LT___$1,f__$1,ch__$1,meta26975));
});

}

return (new cljs.core.async.t_cljs$core$async26974(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26983 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26983 = (function (map_GT_,f,ch,meta26984){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26984 = meta26984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26985,meta26984__$1){
var self__ = this;
var _26985__$1 = this;
return (new cljs.core.async.t_cljs$core$async26983(self__.map_GT_,self__.f,self__.ch,meta26984__$1));
});

cljs.core.async.t_cljs$core$async26983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26985){
var self__ = this;
var _26985__$1 = this;
return self__.meta26984;
});

cljs.core.async.t_cljs$core$async26983.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26983.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26983.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26983.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26983.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26983.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26984","meta26984",1177768934,null)], null);
});

cljs.core.async.t_cljs$core$async26983.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26983";

cljs.core.async.t_cljs$core$async26983.cljs$lang$ctorPrWriter = (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"cljs.core.async/t_cljs$core$async26983");
});

cljs.core.async.__GT_t_cljs$core$async26983 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26983(map_GT___$1,f__$1,ch__$1,meta26984){
return (new cljs.core.async.t_cljs$core$async26983(map_GT___$1,f__$1,ch__$1,meta26984));
});

}

return (new cljs.core.async.t_cljs$core$async26983(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26989 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26989 = (function (filter_GT_,p,ch,meta26990){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26990 = meta26990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26991,meta26990__$1){
var self__ = this;
var _26991__$1 = this;
return (new cljs.core.async.t_cljs$core$async26989(self__.filter_GT_,self__.p,self__.ch,meta26990__$1));
});

cljs.core.async.t_cljs$core$async26989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26991){
var self__ = this;
var _26991__$1 = this;
return self__.meta26990;
});

cljs.core.async.t_cljs$core$async26989.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26989.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26989.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26989.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26989.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26989.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26989.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26990","meta26990",913481226,null)], null);
});

cljs.core.async.t_cljs$core$async26989.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26989";

cljs.core.async.t_cljs$core$async26989.cljs$lang$ctorPrWriter = (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"cljs.core.async/t_cljs$core$async26989");
});

cljs.core.async.__GT_t_cljs$core$async26989 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26989(filter_GT___$1,p__$1,ch__$1,meta26990){
return (new cljs.core.async.t_cljs$core$async26989(filter_GT___$1,p__$1,ch__$1,meta26990));
});

}

return (new cljs.core.async.t_cljs$core$async26989(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args26992 = [];
var len__19333__auto___27036 = arguments.length;
var i__19334__auto___27037 = (0);
while(true){
if((i__19334__auto___27037 < len__19333__auto___27036)){
args26992.push((arguments[i__19334__auto___27037]));

var G__27038 = (i__19334__auto___27037 + (1));
i__19334__auto___27037 = G__27038;
continue;
} else {
}
break;
}

var G__26994 = args26992.length;
switch (G__26994) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26992.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24790__auto___27040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto___27040,out){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto___27040,out){
return (function (state_27015){
var state_val_27016 = (state_27015[(1)]);
if((state_val_27016 === (7))){
var inst_27011 = (state_27015[(2)]);
var state_27015__$1 = state_27015;
var statearr_27017_27041 = state_27015__$1;
(statearr_27017_27041[(2)] = inst_27011);

(statearr_27017_27041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (1))){
var state_27015__$1 = state_27015;
var statearr_27018_27042 = state_27015__$1;
(statearr_27018_27042[(2)] = null);

(statearr_27018_27042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (4))){
var inst_26997 = (state_27015[(7)]);
var inst_26997__$1 = (state_27015[(2)]);
var inst_26998 = (inst_26997__$1 == null);
var state_27015__$1 = (function (){var statearr_27019 = state_27015;
(statearr_27019[(7)] = inst_26997__$1);

return statearr_27019;
})();
if(cljs.core.truth_(inst_26998)){
var statearr_27020_27043 = state_27015__$1;
(statearr_27020_27043[(1)] = (5));

} else {
var statearr_27021_27044 = state_27015__$1;
(statearr_27021_27044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (6))){
var inst_26997 = (state_27015[(7)]);
var inst_27002 = p.call(null,inst_26997);
var state_27015__$1 = state_27015;
if(cljs.core.truth_(inst_27002)){
var statearr_27022_27045 = state_27015__$1;
(statearr_27022_27045[(1)] = (8));

} else {
var statearr_27023_27046 = state_27015__$1;
(statearr_27023_27046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (3))){
var inst_27013 = (state_27015[(2)]);
var state_27015__$1 = state_27015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27015__$1,inst_27013);
} else {
if((state_val_27016 === (2))){
var state_27015__$1 = state_27015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27015__$1,(4),ch);
} else {
if((state_val_27016 === (11))){
var inst_27005 = (state_27015[(2)]);
var state_27015__$1 = state_27015;
var statearr_27024_27047 = state_27015__$1;
(statearr_27024_27047[(2)] = inst_27005);

(statearr_27024_27047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (9))){
var state_27015__$1 = state_27015;
var statearr_27025_27048 = state_27015__$1;
(statearr_27025_27048[(2)] = null);

(statearr_27025_27048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (5))){
var inst_27000 = cljs.core.async.close_BANG_.call(null,out);
var state_27015__$1 = state_27015;
var statearr_27026_27049 = state_27015__$1;
(statearr_27026_27049[(2)] = inst_27000);

(statearr_27026_27049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (10))){
var inst_27008 = (state_27015[(2)]);
var state_27015__$1 = (function (){var statearr_27027 = state_27015;
(statearr_27027[(8)] = inst_27008);

return statearr_27027;
})();
var statearr_27028_27050 = state_27015__$1;
(statearr_27028_27050[(2)] = null);

(statearr_27028_27050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (8))){
var inst_26997 = (state_27015[(7)]);
var state_27015__$1 = state_27015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27015__$1,(11),out,inst_26997);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24790__auto___27040,out))
;
return ((function (switch__24678__auto__,c__24790__auto___27040,out){
return (function() {
var cljs$core$async$state_machine__24679__auto__ = null;
var cljs$core$async$state_machine__24679__auto____0 = (function (){
var statearr_27032 = [null,null,null,null,null,null,null,null,null];
(statearr_27032[(0)] = cljs$core$async$state_machine__24679__auto__);

(statearr_27032[(1)] = (1));

return statearr_27032;
});
var cljs$core$async$state_machine__24679__auto____1 = (function (state_27015){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_27015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e27033){if((e27033 instanceof Object)){
var ex__24682__auto__ = e27033;
var statearr_27034_27051 = state_27015;
(statearr_27034_27051[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27052 = state_27015;
state_27015 = G__27052;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$state_machine__24679__auto__ = function(state_27015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24679__auto____1.call(this,state_27015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24679__auto____0;
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24679__auto____1;
return cljs$core$async$state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto___27040,out))
})();
var state__24792__auto__ = (function (){var statearr_27035 = f__24791__auto__.call(null);
(statearr_27035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto___27040);

return statearr_27035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto___27040,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27053 = [];
var len__19333__auto___27056 = arguments.length;
var i__19334__auto___27057 = (0);
while(true){
if((i__19334__auto___27057 < len__19333__auto___27056)){
args27053.push((arguments[i__19334__auto___27057]));

var G__27058 = (i__19334__auto___27057 + (1));
i__19334__auto___27057 = G__27058;
continue;
} else {
}
break;
}

var G__27055 = args27053.length;
switch (G__27055) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27053.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24790__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto__){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto__){
return (function (state_27225){
var state_val_27226 = (state_27225[(1)]);
if((state_val_27226 === (7))){
var inst_27221 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
var statearr_27227_27268 = state_27225__$1;
(statearr_27227_27268[(2)] = inst_27221);

(statearr_27227_27268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (20))){
var inst_27191 = (state_27225[(7)]);
var inst_27202 = (state_27225[(2)]);
var inst_27203 = cljs.core.next.call(null,inst_27191);
var inst_27177 = inst_27203;
var inst_27178 = null;
var inst_27179 = (0);
var inst_27180 = (0);
var state_27225__$1 = (function (){var statearr_27228 = state_27225;
(statearr_27228[(8)] = inst_27179);

(statearr_27228[(9)] = inst_27178);

(statearr_27228[(10)] = inst_27202);

(statearr_27228[(11)] = inst_27180);

(statearr_27228[(12)] = inst_27177);

return statearr_27228;
})();
var statearr_27229_27269 = state_27225__$1;
(statearr_27229_27269[(2)] = null);

(statearr_27229_27269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (1))){
var state_27225__$1 = state_27225;
var statearr_27230_27270 = state_27225__$1;
(statearr_27230_27270[(2)] = null);

(statearr_27230_27270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (4))){
var inst_27166 = (state_27225[(13)]);
var inst_27166__$1 = (state_27225[(2)]);
var inst_27167 = (inst_27166__$1 == null);
var state_27225__$1 = (function (){var statearr_27231 = state_27225;
(statearr_27231[(13)] = inst_27166__$1);

return statearr_27231;
})();
if(cljs.core.truth_(inst_27167)){
var statearr_27232_27271 = state_27225__$1;
(statearr_27232_27271[(1)] = (5));

} else {
var statearr_27233_27272 = state_27225__$1;
(statearr_27233_27272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (15))){
var state_27225__$1 = state_27225;
var statearr_27237_27273 = state_27225__$1;
(statearr_27237_27273[(2)] = null);

(statearr_27237_27273[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (21))){
var state_27225__$1 = state_27225;
var statearr_27238_27274 = state_27225__$1;
(statearr_27238_27274[(2)] = null);

(statearr_27238_27274[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (13))){
var inst_27179 = (state_27225[(8)]);
var inst_27178 = (state_27225[(9)]);
var inst_27180 = (state_27225[(11)]);
var inst_27177 = (state_27225[(12)]);
var inst_27187 = (state_27225[(2)]);
var inst_27188 = (inst_27180 + (1));
var tmp27234 = inst_27179;
var tmp27235 = inst_27178;
var tmp27236 = inst_27177;
var inst_27177__$1 = tmp27236;
var inst_27178__$1 = tmp27235;
var inst_27179__$1 = tmp27234;
var inst_27180__$1 = inst_27188;
var state_27225__$1 = (function (){var statearr_27239 = state_27225;
(statearr_27239[(8)] = inst_27179__$1);

(statearr_27239[(9)] = inst_27178__$1);

(statearr_27239[(11)] = inst_27180__$1);

(statearr_27239[(14)] = inst_27187);

(statearr_27239[(12)] = inst_27177__$1);

return statearr_27239;
})();
var statearr_27240_27275 = state_27225__$1;
(statearr_27240_27275[(2)] = null);

(statearr_27240_27275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (22))){
var state_27225__$1 = state_27225;
var statearr_27241_27276 = state_27225__$1;
(statearr_27241_27276[(2)] = null);

(statearr_27241_27276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (6))){
var inst_27166 = (state_27225[(13)]);
var inst_27175 = f.call(null,inst_27166);
var inst_27176 = cljs.core.seq.call(null,inst_27175);
var inst_27177 = inst_27176;
var inst_27178 = null;
var inst_27179 = (0);
var inst_27180 = (0);
var state_27225__$1 = (function (){var statearr_27242 = state_27225;
(statearr_27242[(8)] = inst_27179);

(statearr_27242[(9)] = inst_27178);

(statearr_27242[(11)] = inst_27180);

(statearr_27242[(12)] = inst_27177);

return statearr_27242;
})();
var statearr_27243_27277 = state_27225__$1;
(statearr_27243_27277[(2)] = null);

(statearr_27243_27277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (17))){
var inst_27191 = (state_27225[(7)]);
var inst_27195 = cljs.core.chunk_first.call(null,inst_27191);
var inst_27196 = cljs.core.chunk_rest.call(null,inst_27191);
var inst_27197 = cljs.core.count.call(null,inst_27195);
var inst_27177 = inst_27196;
var inst_27178 = inst_27195;
var inst_27179 = inst_27197;
var inst_27180 = (0);
var state_27225__$1 = (function (){var statearr_27244 = state_27225;
(statearr_27244[(8)] = inst_27179);

(statearr_27244[(9)] = inst_27178);

(statearr_27244[(11)] = inst_27180);

(statearr_27244[(12)] = inst_27177);

return statearr_27244;
})();
var statearr_27245_27278 = state_27225__$1;
(statearr_27245_27278[(2)] = null);

(statearr_27245_27278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (3))){
var inst_27223 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27225__$1,inst_27223);
} else {
if((state_val_27226 === (12))){
var inst_27211 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
var statearr_27246_27279 = state_27225__$1;
(statearr_27246_27279[(2)] = inst_27211);

(statearr_27246_27279[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (2))){
var state_27225__$1 = state_27225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27225__$1,(4),in$);
} else {
if((state_val_27226 === (23))){
var inst_27219 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
var statearr_27247_27280 = state_27225__$1;
(statearr_27247_27280[(2)] = inst_27219);

(statearr_27247_27280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (19))){
var inst_27206 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
var statearr_27248_27281 = state_27225__$1;
(statearr_27248_27281[(2)] = inst_27206);

(statearr_27248_27281[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (11))){
var inst_27191 = (state_27225[(7)]);
var inst_27177 = (state_27225[(12)]);
var inst_27191__$1 = cljs.core.seq.call(null,inst_27177);
var state_27225__$1 = (function (){var statearr_27249 = state_27225;
(statearr_27249[(7)] = inst_27191__$1);

return statearr_27249;
})();
if(inst_27191__$1){
var statearr_27250_27282 = state_27225__$1;
(statearr_27250_27282[(1)] = (14));

} else {
var statearr_27251_27283 = state_27225__$1;
(statearr_27251_27283[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (9))){
var inst_27213 = (state_27225[(2)]);
var inst_27214 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27225__$1 = (function (){var statearr_27252 = state_27225;
(statearr_27252[(15)] = inst_27213);

return statearr_27252;
})();
if(cljs.core.truth_(inst_27214)){
var statearr_27253_27284 = state_27225__$1;
(statearr_27253_27284[(1)] = (21));

} else {
var statearr_27254_27285 = state_27225__$1;
(statearr_27254_27285[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (5))){
var inst_27169 = cljs.core.async.close_BANG_.call(null,out);
var state_27225__$1 = state_27225;
var statearr_27255_27286 = state_27225__$1;
(statearr_27255_27286[(2)] = inst_27169);

(statearr_27255_27286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (14))){
var inst_27191 = (state_27225[(7)]);
var inst_27193 = cljs.core.chunked_seq_QMARK_.call(null,inst_27191);
var state_27225__$1 = state_27225;
if(inst_27193){
var statearr_27256_27287 = state_27225__$1;
(statearr_27256_27287[(1)] = (17));

} else {
var statearr_27257_27288 = state_27225__$1;
(statearr_27257_27288[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (16))){
var inst_27209 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
var statearr_27258_27289 = state_27225__$1;
(statearr_27258_27289[(2)] = inst_27209);

(statearr_27258_27289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (10))){
var inst_27178 = (state_27225[(9)]);
var inst_27180 = (state_27225[(11)]);
var inst_27185 = cljs.core._nth.call(null,inst_27178,inst_27180);
var state_27225__$1 = state_27225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27225__$1,(13),out,inst_27185);
} else {
if((state_val_27226 === (18))){
var inst_27191 = (state_27225[(7)]);
var inst_27200 = cljs.core.first.call(null,inst_27191);
var state_27225__$1 = state_27225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27225__$1,(20),out,inst_27200);
} else {
if((state_val_27226 === (8))){
var inst_27179 = (state_27225[(8)]);
var inst_27180 = (state_27225[(11)]);
var inst_27182 = (inst_27180 < inst_27179);
var inst_27183 = inst_27182;
var state_27225__$1 = state_27225;
if(cljs.core.truth_(inst_27183)){
var statearr_27259_27290 = state_27225__$1;
(statearr_27259_27290[(1)] = (10));

} else {
var statearr_27260_27291 = state_27225__$1;
(statearr_27260_27291[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24790__auto__))
;
return ((function (switch__24678__auto__,c__24790__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24679__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24679__auto____0 = (function (){
var statearr_27264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27264[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24679__auto__);

(statearr_27264[(1)] = (1));

return statearr_27264;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24679__auto____1 = (function (state_27225){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_27225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e27265){if((e27265 instanceof Object)){
var ex__24682__auto__ = e27265;
var statearr_27266_27292 = state_27225;
(statearr_27266_27292[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27293 = state_27225;
state_27225 = G__27293;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24679__auto__ = function(state_27225){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24679__auto____1.call(this,state_27225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24679__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24679__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto__))
})();
var state__24792__auto__ = (function (){var statearr_27267 = f__24791__auto__.call(null);
(statearr_27267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto__);

return statearr_27267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto__))
);

return c__24790__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27294 = [];
var len__19333__auto___27297 = arguments.length;
var i__19334__auto___27298 = (0);
while(true){
if((i__19334__auto___27298 < len__19333__auto___27297)){
args27294.push((arguments[i__19334__auto___27298]));

var G__27299 = (i__19334__auto___27298 + (1));
i__19334__auto___27298 = G__27299;
continue;
} else {
}
break;
}

var G__27296 = args27294.length;
switch (G__27296) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27294.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args27301 = [];
var len__19333__auto___27304 = arguments.length;
var i__19334__auto___27305 = (0);
while(true){
if((i__19334__auto___27305 < len__19333__auto___27304)){
args27301.push((arguments[i__19334__auto___27305]));

var G__27306 = (i__19334__auto___27305 + (1));
i__19334__auto___27305 = G__27306;
continue;
} else {
}
break;
}

var G__27303 = args27301.length;
switch (G__27303) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27301.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args27308 = [];
var len__19333__auto___27359 = arguments.length;
var i__19334__auto___27360 = (0);
while(true){
if((i__19334__auto___27360 < len__19333__auto___27359)){
args27308.push((arguments[i__19334__auto___27360]));

var G__27361 = (i__19334__auto___27360 + (1));
i__19334__auto___27360 = G__27361;
continue;
} else {
}
break;
}

var G__27310 = args27308.length;
switch (G__27310) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27308.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24790__auto___27363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto___27363,out){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto___27363,out){
return (function (state_27334){
var state_val_27335 = (state_27334[(1)]);
if((state_val_27335 === (7))){
var inst_27329 = (state_27334[(2)]);
var state_27334__$1 = state_27334;
var statearr_27336_27364 = state_27334__$1;
(statearr_27336_27364[(2)] = inst_27329);

(statearr_27336_27364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27335 === (1))){
var inst_27311 = null;
var state_27334__$1 = (function (){var statearr_27337 = state_27334;
(statearr_27337[(7)] = inst_27311);

return statearr_27337;
})();
var statearr_27338_27365 = state_27334__$1;
(statearr_27338_27365[(2)] = null);

(statearr_27338_27365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27335 === (4))){
var inst_27314 = (state_27334[(8)]);
var inst_27314__$1 = (state_27334[(2)]);
var inst_27315 = (inst_27314__$1 == null);
var inst_27316 = cljs.core.not.call(null,inst_27315);
var state_27334__$1 = (function (){var statearr_27339 = state_27334;
(statearr_27339[(8)] = inst_27314__$1);

return statearr_27339;
})();
if(inst_27316){
var statearr_27340_27366 = state_27334__$1;
(statearr_27340_27366[(1)] = (5));

} else {
var statearr_27341_27367 = state_27334__$1;
(statearr_27341_27367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27335 === (6))){
var state_27334__$1 = state_27334;
var statearr_27342_27368 = state_27334__$1;
(statearr_27342_27368[(2)] = null);

(statearr_27342_27368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27335 === (3))){
var inst_27331 = (state_27334[(2)]);
var inst_27332 = cljs.core.async.close_BANG_.call(null,out);
var state_27334__$1 = (function (){var statearr_27343 = state_27334;
(statearr_27343[(9)] = inst_27331);

return statearr_27343;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27334__$1,inst_27332);
} else {
if((state_val_27335 === (2))){
var state_27334__$1 = state_27334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27334__$1,(4),ch);
} else {
if((state_val_27335 === (11))){
var inst_27314 = (state_27334[(8)]);
var inst_27323 = (state_27334[(2)]);
var inst_27311 = inst_27314;
var state_27334__$1 = (function (){var statearr_27344 = state_27334;
(statearr_27344[(7)] = inst_27311);

(statearr_27344[(10)] = inst_27323);

return statearr_27344;
})();
var statearr_27345_27369 = state_27334__$1;
(statearr_27345_27369[(2)] = null);

(statearr_27345_27369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27335 === (9))){
var inst_27314 = (state_27334[(8)]);
var state_27334__$1 = state_27334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27334__$1,(11),out,inst_27314);
} else {
if((state_val_27335 === (5))){
var inst_27311 = (state_27334[(7)]);
var inst_27314 = (state_27334[(8)]);
var inst_27318 = cljs.core._EQ_.call(null,inst_27314,inst_27311);
var state_27334__$1 = state_27334;
if(inst_27318){
var statearr_27347_27370 = state_27334__$1;
(statearr_27347_27370[(1)] = (8));

} else {
var statearr_27348_27371 = state_27334__$1;
(statearr_27348_27371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27335 === (10))){
var inst_27326 = (state_27334[(2)]);
var state_27334__$1 = state_27334;
var statearr_27349_27372 = state_27334__$1;
(statearr_27349_27372[(2)] = inst_27326);

(statearr_27349_27372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27335 === (8))){
var inst_27311 = (state_27334[(7)]);
var tmp27346 = inst_27311;
var inst_27311__$1 = tmp27346;
var state_27334__$1 = (function (){var statearr_27350 = state_27334;
(statearr_27350[(7)] = inst_27311__$1);

return statearr_27350;
})();
var statearr_27351_27373 = state_27334__$1;
(statearr_27351_27373[(2)] = null);

(statearr_27351_27373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24790__auto___27363,out))
;
return ((function (switch__24678__auto__,c__24790__auto___27363,out){
return (function() {
var cljs$core$async$state_machine__24679__auto__ = null;
var cljs$core$async$state_machine__24679__auto____0 = (function (){
var statearr_27355 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27355[(0)] = cljs$core$async$state_machine__24679__auto__);

(statearr_27355[(1)] = (1));

return statearr_27355;
});
var cljs$core$async$state_machine__24679__auto____1 = (function (state_27334){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_27334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e27356){if((e27356 instanceof Object)){
var ex__24682__auto__ = e27356;
var statearr_27357_27374 = state_27334;
(statearr_27357_27374[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27375 = state_27334;
state_27334 = G__27375;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$state_machine__24679__auto__ = function(state_27334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24679__auto____1.call(this,state_27334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24679__auto____0;
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24679__auto____1;
return cljs$core$async$state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto___27363,out))
})();
var state__24792__auto__ = (function (){var statearr_27358 = f__24791__auto__.call(null);
(statearr_27358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto___27363);

return statearr_27358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto___27363,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27376 = [];
var len__19333__auto___27446 = arguments.length;
var i__19334__auto___27447 = (0);
while(true){
if((i__19334__auto___27447 < len__19333__auto___27446)){
args27376.push((arguments[i__19334__auto___27447]));

var G__27448 = (i__19334__auto___27447 + (1));
i__19334__auto___27447 = G__27448;
continue;
} else {
}
break;
}

var G__27378 = args27376.length;
switch (G__27378) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27376.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24790__auto___27450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto___27450,out){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto___27450,out){
return (function (state_27416){
var state_val_27417 = (state_27416[(1)]);
if((state_val_27417 === (7))){
var inst_27412 = (state_27416[(2)]);
var state_27416__$1 = state_27416;
var statearr_27418_27451 = state_27416__$1;
(statearr_27418_27451[(2)] = inst_27412);

(statearr_27418_27451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27417 === (1))){
var inst_27379 = (new Array(n));
var inst_27380 = inst_27379;
var inst_27381 = (0);
var state_27416__$1 = (function (){var statearr_27419 = state_27416;
(statearr_27419[(7)] = inst_27381);

(statearr_27419[(8)] = inst_27380);

return statearr_27419;
})();
var statearr_27420_27452 = state_27416__$1;
(statearr_27420_27452[(2)] = null);

(statearr_27420_27452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27417 === (4))){
var inst_27384 = (state_27416[(9)]);
var inst_27384__$1 = (state_27416[(2)]);
var inst_27385 = (inst_27384__$1 == null);
var inst_27386 = cljs.core.not.call(null,inst_27385);
var state_27416__$1 = (function (){var statearr_27421 = state_27416;
(statearr_27421[(9)] = inst_27384__$1);

return statearr_27421;
})();
if(inst_27386){
var statearr_27422_27453 = state_27416__$1;
(statearr_27422_27453[(1)] = (5));

} else {
var statearr_27423_27454 = state_27416__$1;
(statearr_27423_27454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27417 === (15))){
var inst_27406 = (state_27416[(2)]);
var state_27416__$1 = state_27416;
var statearr_27424_27455 = state_27416__$1;
(statearr_27424_27455[(2)] = inst_27406);

(statearr_27424_27455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27417 === (13))){
var state_27416__$1 = state_27416;
var statearr_27425_27456 = state_27416__$1;
(statearr_27425_27456[(2)] = null);

(statearr_27425_27456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27417 === (6))){
var inst_27381 = (state_27416[(7)]);
var inst_27402 = (inst_27381 > (0));
var state_27416__$1 = state_27416;
if(cljs.core.truth_(inst_27402)){
var statearr_27426_27457 = state_27416__$1;
(statearr_27426_27457[(1)] = (12));

} else {
var statearr_27427_27458 = state_27416__$1;
(statearr_27427_27458[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27417 === (3))){
var inst_27414 = (state_27416[(2)]);
var state_27416__$1 = state_27416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27416__$1,inst_27414);
} else {
if((state_val_27417 === (12))){
var inst_27380 = (state_27416[(8)]);
var inst_27404 = cljs.core.vec.call(null,inst_27380);
var state_27416__$1 = state_27416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27416__$1,(15),out,inst_27404);
} else {
if((state_val_27417 === (2))){
var state_27416__$1 = state_27416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27416__$1,(4),ch);
} else {
if((state_val_27417 === (11))){
var inst_27396 = (state_27416[(2)]);
var inst_27397 = (new Array(n));
var inst_27380 = inst_27397;
var inst_27381 = (0);
var state_27416__$1 = (function (){var statearr_27428 = state_27416;
(statearr_27428[(7)] = inst_27381);

(statearr_27428[(10)] = inst_27396);

(statearr_27428[(8)] = inst_27380);

return statearr_27428;
})();
var statearr_27429_27459 = state_27416__$1;
(statearr_27429_27459[(2)] = null);

(statearr_27429_27459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27417 === (9))){
var inst_27380 = (state_27416[(8)]);
var inst_27394 = cljs.core.vec.call(null,inst_27380);
var state_27416__$1 = state_27416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27416__$1,(11),out,inst_27394);
} else {
if((state_val_27417 === (5))){
var inst_27381 = (state_27416[(7)]);
var inst_27384 = (state_27416[(9)]);
var inst_27380 = (state_27416[(8)]);
var inst_27389 = (state_27416[(11)]);
var inst_27388 = (inst_27380[inst_27381] = inst_27384);
var inst_27389__$1 = (inst_27381 + (1));
var inst_27390 = (inst_27389__$1 < n);
var state_27416__$1 = (function (){var statearr_27430 = state_27416;
(statearr_27430[(11)] = inst_27389__$1);

(statearr_27430[(12)] = inst_27388);

return statearr_27430;
})();
if(cljs.core.truth_(inst_27390)){
var statearr_27431_27460 = state_27416__$1;
(statearr_27431_27460[(1)] = (8));

} else {
var statearr_27432_27461 = state_27416__$1;
(statearr_27432_27461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27417 === (14))){
var inst_27409 = (state_27416[(2)]);
var inst_27410 = cljs.core.async.close_BANG_.call(null,out);
var state_27416__$1 = (function (){var statearr_27434 = state_27416;
(statearr_27434[(13)] = inst_27409);

return statearr_27434;
})();
var statearr_27435_27462 = state_27416__$1;
(statearr_27435_27462[(2)] = inst_27410);

(statearr_27435_27462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27417 === (10))){
var inst_27400 = (state_27416[(2)]);
var state_27416__$1 = state_27416;
var statearr_27436_27463 = state_27416__$1;
(statearr_27436_27463[(2)] = inst_27400);

(statearr_27436_27463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27417 === (8))){
var inst_27380 = (state_27416[(8)]);
var inst_27389 = (state_27416[(11)]);
var tmp27433 = inst_27380;
var inst_27380__$1 = tmp27433;
var inst_27381 = inst_27389;
var state_27416__$1 = (function (){var statearr_27437 = state_27416;
(statearr_27437[(7)] = inst_27381);

(statearr_27437[(8)] = inst_27380__$1);

return statearr_27437;
})();
var statearr_27438_27464 = state_27416__$1;
(statearr_27438_27464[(2)] = null);

(statearr_27438_27464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24790__auto___27450,out))
;
return ((function (switch__24678__auto__,c__24790__auto___27450,out){
return (function() {
var cljs$core$async$state_machine__24679__auto__ = null;
var cljs$core$async$state_machine__24679__auto____0 = (function (){
var statearr_27442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27442[(0)] = cljs$core$async$state_machine__24679__auto__);

(statearr_27442[(1)] = (1));

return statearr_27442;
});
var cljs$core$async$state_machine__24679__auto____1 = (function (state_27416){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_27416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e27443){if((e27443 instanceof Object)){
var ex__24682__auto__ = e27443;
var statearr_27444_27465 = state_27416;
(statearr_27444_27465[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27466 = state_27416;
state_27416 = G__27466;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$state_machine__24679__auto__ = function(state_27416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24679__auto____1.call(this,state_27416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24679__auto____0;
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24679__auto____1;
return cljs$core$async$state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto___27450,out))
})();
var state__24792__auto__ = (function (){var statearr_27445 = f__24791__auto__.call(null);
(statearr_27445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto___27450);

return statearr_27445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto___27450,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27467 = [];
var len__19333__auto___27541 = arguments.length;
var i__19334__auto___27542 = (0);
while(true){
if((i__19334__auto___27542 < len__19333__auto___27541)){
args27467.push((arguments[i__19334__auto___27542]));

var G__27543 = (i__19334__auto___27542 + (1));
i__19334__auto___27542 = G__27543;
continue;
} else {
}
break;
}

var G__27469 = args27467.length;
switch (G__27469) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27467.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24790__auto___27545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto___27545,out){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto___27545,out){
return (function (state_27511){
var state_val_27512 = (state_27511[(1)]);
if((state_val_27512 === (7))){
var inst_27507 = (state_27511[(2)]);
var state_27511__$1 = state_27511;
var statearr_27513_27546 = state_27511__$1;
(statearr_27513_27546[(2)] = inst_27507);

(statearr_27513_27546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (1))){
var inst_27470 = [];
var inst_27471 = inst_27470;
var inst_27472 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27511__$1 = (function (){var statearr_27514 = state_27511;
(statearr_27514[(7)] = inst_27471);

(statearr_27514[(8)] = inst_27472);

return statearr_27514;
})();
var statearr_27515_27547 = state_27511__$1;
(statearr_27515_27547[(2)] = null);

(statearr_27515_27547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (4))){
var inst_27475 = (state_27511[(9)]);
var inst_27475__$1 = (state_27511[(2)]);
var inst_27476 = (inst_27475__$1 == null);
var inst_27477 = cljs.core.not.call(null,inst_27476);
var state_27511__$1 = (function (){var statearr_27516 = state_27511;
(statearr_27516[(9)] = inst_27475__$1);

return statearr_27516;
})();
if(inst_27477){
var statearr_27517_27548 = state_27511__$1;
(statearr_27517_27548[(1)] = (5));

} else {
var statearr_27518_27549 = state_27511__$1;
(statearr_27518_27549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (15))){
var inst_27501 = (state_27511[(2)]);
var state_27511__$1 = state_27511;
var statearr_27519_27550 = state_27511__$1;
(statearr_27519_27550[(2)] = inst_27501);

(statearr_27519_27550[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (13))){
var state_27511__$1 = state_27511;
var statearr_27520_27551 = state_27511__$1;
(statearr_27520_27551[(2)] = null);

(statearr_27520_27551[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (6))){
var inst_27471 = (state_27511[(7)]);
var inst_27496 = inst_27471.length;
var inst_27497 = (inst_27496 > (0));
var state_27511__$1 = state_27511;
if(cljs.core.truth_(inst_27497)){
var statearr_27521_27552 = state_27511__$1;
(statearr_27521_27552[(1)] = (12));

} else {
var statearr_27522_27553 = state_27511__$1;
(statearr_27522_27553[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (3))){
var inst_27509 = (state_27511[(2)]);
var state_27511__$1 = state_27511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27511__$1,inst_27509);
} else {
if((state_val_27512 === (12))){
var inst_27471 = (state_27511[(7)]);
var inst_27499 = cljs.core.vec.call(null,inst_27471);
var state_27511__$1 = state_27511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27511__$1,(15),out,inst_27499);
} else {
if((state_val_27512 === (2))){
var state_27511__$1 = state_27511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27511__$1,(4),ch);
} else {
if((state_val_27512 === (11))){
var inst_27475 = (state_27511[(9)]);
var inst_27479 = (state_27511[(10)]);
var inst_27489 = (state_27511[(2)]);
var inst_27490 = [];
var inst_27491 = inst_27490.push(inst_27475);
var inst_27471 = inst_27490;
var inst_27472 = inst_27479;
var state_27511__$1 = (function (){var statearr_27523 = state_27511;
(statearr_27523[(11)] = inst_27491);

(statearr_27523[(7)] = inst_27471);

(statearr_27523[(12)] = inst_27489);

(statearr_27523[(8)] = inst_27472);

return statearr_27523;
})();
var statearr_27524_27554 = state_27511__$1;
(statearr_27524_27554[(2)] = null);

(statearr_27524_27554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (9))){
var inst_27471 = (state_27511[(7)]);
var inst_27487 = cljs.core.vec.call(null,inst_27471);
var state_27511__$1 = state_27511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27511__$1,(11),out,inst_27487);
} else {
if((state_val_27512 === (5))){
var inst_27475 = (state_27511[(9)]);
var inst_27472 = (state_27511[(8)]);
var inst_27479 = (state_27511[(10)]);
var inst_27479__$1 = f.call(null,inst_27475);
var inst_27480 = cljs.core._EQ_.call(null,inst_27479__$1,inst_27472);
var inst_27481 = cljs.core.keyword_identical_QMARK_.call(null,inst_27472,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27482 = (inst_27480) || (inst_27481);
var state_27511__$1 = (function (){var statearr_27525 = state_27511;
(statearr_27525[(10)] = inst_27479__$1);

return statearr_27525;
})();
if(cljs.core.truth_(inst_27482)){
var statearr_27526_27555 = state_27511__$1;
(statearr_27526_27555[(1)] = (8));

} else {
var statearr_27527_27556 = state_27511__$1;
(statearr_27527_27556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (14))){
var inst_27504 = (state_27511[(2)]);
var inst_27505 = cljs.core.async.close_BANG_.call(null,out);
var state_27511__$1 = (function (){var statearr_27529 = state_27511;
(statearr_27529[(13)] = inst_27504);

return statearr_27529;
})();
var statearr_27530_27557 = state_27511__$1;
(statearr_27530_27557[(2)] = inst_27505);

(statearr_27530_27557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (10))){
var inst_27494 = (state_27511[(2)]);
var state_27511__$1 = state_27511;
var statearr_27531_27558 = state_27511__$1;
(statearr_27531_27558[(2)] = inst_27494);

(statearr_27531_27558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (8))){
var inst_27475 = (state_27511[(9)]);
var inst_27471 = (state_27511[(7)]);
var inst_27479 = (state_27511[(10)]);
var inst_27484 = inst_27471.push(inst_27475);
var tmp27528 = inst_27471;
var inst_27471__$1 = tmp27528;
var inst_27472 = inst_27479;
var state_27511__$1 = (function (){var statearr_27532 = state_27511;
(statearr_27532[(7)] = inst_27471__$1);

(statearr_27532[(8)] = inst_27472);

(statearr_27532[(14)] = inst_27484);

return statearr_27532;
})();
var statearr_27533_27559 = state_27511__$1;
(statearr_27533_27559[(2)] = null);

(statearr_27533_27559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24790__auto___27545,out))
;
return ((function (switch__24678__auto__,c__24790__auto___27545,out){
return (function() {
var cljs$core$async$state_machine__24679__auto__ = null;
var cljs$core$async$state_machine__24679__auto____0 = (function (){
var statearr_27537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27537[(0)] = cljs$core$async$state_machine__24679__auto__);

(statearr_27537[(1)] = (1));

return statearr_27537;
});
var cljs$core$async$state_machine__24679__auto____1 = (function (state_27511){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_27511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e27538){if((e27538 instanceof Object)){
var ex__24682__auto__ = e27538;
var statearr_27539_27560 = state_27511;
(statearr_27539_27560[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27561 = state_27511;
state_27511 = G__27561;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
cljs$core$async$state_machine__24679__auto__ = function(state_27511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24679__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24679__auto____1.call(this,state_27511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24679__auto____0;
cljs$core$async$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24679__auto____1;
return cljs$core$async$state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto___27545,out))
})();
var state__24792__auto__ = (function (){var statearr_27540 = f__24791__auto__.call(null);
(statearr_27540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto___27545);

return statearr_27540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto___27545,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map