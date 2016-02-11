// Compiled by ClojureScript 1.7.145 {}
goog.provide('thi.ng.common.error');
goog.require('cljs.core');
thi.ng.common.error.throw_BANG_ = (function thi$ng$common$error$throw_BANG_(msg){
throw (new Error(msg));
});
thi.ng.common.error.key_error_BANG_ = (function thi$ng$common$error$key_error_BANG_(k){
return thi.ng.common.error.throw_BANG_.call(null,[cljs.core.str("Illegal lookup key: "),cljs.core.str(k)].join(''));
});
thi.ng.common.error.type_error_BANG_ = (function thi$ng$common$error$type_error_BANG_(t,x){
return thi.ng.common.error.throw_BANG_.call(null,[cljs.core.str("Can't create "),cljs.core.str(t),cljs.core.str(" from "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''));
});
thi.ng.common.error.arity_error_BANG_ = (function thi$ng$common$error$arity_error_BANG_(n){
return thi.ng.common.error.throw_BANG_.call(null,[cljs.core.str("Wrong number of args: "),cljs.core.str(n)].join(''));
});
thi.ng.common.error.illegal_arg_BANG_ = (function thi$ng$common$error$illegal_arg_BANG_(var_args){
var args27630 = [];
var len__17708__auto___27633 = arguments.length;
var i__17709__auto___27634 = (0);
while(true){
if((i__17709__auto___27634 < len__17708__auto___27633)){
args27630.push((arguments[i__17709__auto___27634]));

var G__27635 = (i__17709__auto___27634 + (1));
i__17709__auto___27634 = G__27635;
continue;
} else {
}
break;
}

var G__27632 = args27630.length;
switch (G__27632) {
case 1:
return thi.ng.common.error.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.common.error.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27630.length)].join('')));

}
});

thi.ng.common.error.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return thi.ng.common.error.illegal_arg_BANG_.call(null,"Illegal argument",x);
});

thi.ng.common.error.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (msg,x){
return thi.ng.common.error.throw_BANG_.call(null,[cljs.core.str(msg),cljs.core.str(": "),cljs.core.str(x)].join(''));
});

thi.ng.common.error.illegal_arg_BANG_.cljs$lang$maxFixedArity = 2;
thi.ng.common.error.unsupported_BANG_ = (function thi$ng$common$error$unsupported_BANG_(var_args){
var args27637 = [];
var len__17708__auto___27640 = arguments.length;
var i__17709__auto___27641 = (0);
while(true){
if((i__17709__auto___27641 < len__17708__auto___27640)){
args27637.push((arguments[i__17709__auto___27641]));

var G__27642 = (i__17709__auto___27641 + (1));
i__17709__auto___27641 = G__27642;
continue;
} else {
}
break;
}

var G__27639 = args27637.length;
switch (G__27639) {
case 0:
return thi.ng.common.error.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.common.error.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27637.length)].join('')));

}
});

thi.ng.common.error.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.common.error.unsupported_BANG_.call(null,"Unsupported operation");
});

thi.ng.common.error.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (msg){
throw (new Error(msg));
});

thi.ng.common.error.unsupported_BANG_.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=error.js.map