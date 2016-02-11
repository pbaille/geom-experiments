// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.strf.core');
goog.require('cljs.core');
goog.require('clojure.string');
thi.ng.strf.core.parse_int = (function thi$ng$strf$core$parse_int(var_args){
var args__19340__auto__ = [];
var len__19333__auto___23216 = arguments.length;
var i__19334__auto___23217 = (0);
while(true){
if((i__19334__auto___23217 < len__19333__auto___23216)){
args__19340__auto__.push((arguments[i__19334__auto___23217]));

var G__23218 = (i__19334__auto___23217 + (1));
i__19334__auto___23217 = G__23218;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__23214){
var vec__23215 = p__23214;
var default$ = cljs.core.nth.call(null,vec__23215,(0),null);
var x_SINGLEQUOTE_ = parseInt(x,radix);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
});

thi.ng.strf.core.parse_int.cljs$lang$maxFixedArity = (2);

thi.ng.strf.core.parse_int.cljs$lang$applyTo = (function (seq23211){
var G__23212 = cljs.core.first.call(null,seq23211);
var seq23211__$1 = cljs.core.next.call(null,seq23211);
var G__23213 = cljs.core.first.call(null,seq23211__$1);
var seq23211__$2 = cljs.core.next.call(null,seq23211__$1);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(G__23212,G__23213,seq23211__$2);
});
thi.ng.strf.core.parse_long = (function thi$ng$strf$core$parse_long(var_args){
var args__19340__auto__ = [];
var len__19333__auto___23224 = arguments.length;
var i__19334__auto___23225 = (0);
while(true){
if((i__19334__auto___23225 < len__19333__auto___23224)){
args__19340__auto__.push((arguments[i__19334__auto___23225]));

var G__23226 = (i__19334__auto___23225 + (1));
i__19334__auto___23225 = G__23226;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__23222){
var vec__23223 = p__23222;
var default$ = cljs.core.nth.call(null,vec__23223,(0),null);
return thi.ng.strf.core.parse_int.call(null,x,radix,default$);
});

thi.ng.strf.core.parse_long.cljs$lang$maxFixedArity = (2);

thi.ng.strf.core.parse_long.cljs$lang$applyTo = (function (seq23219){
var G__23220 = cljs.core.first.call(null,seq23219);
var seq23219__$1 = cljs.core.next.call(null,seq23219);
var G__23221 = cljs.core.first.call(null,seq23219__$1);
var seq23219__$2 = cljs.core.next.call(null,seq23219__$1);
return thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic(G__23220,G__23221,seq23219__$2);
});
thi.ng.strf.core.parse_float = (function thi$ng$strf$core$parse_float(var_args){
var args__19340__auto__ = [];
var len__19333__auto___23231 = arguments.length;
var i__19334__auto___23232 = (0);
while(true){
if((i__19334__auto___23232 < len__19333__auto___23231)){
args__19340__auto__.push((arguments[i__19334__auto___23232]));

var G__23233 = (i__19334__auto___23232 + (1));
i__19334__auto___23232 = G__23233;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((1) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((1)),(0))):null);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19341__auto__);
});

thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__23229){
var vec__23230 = p__23229;
var default$ = cljs.core.nth.call(null,vec__23230,(0),null);
var x_SINGLEQUOTE_ = parseFloat(x);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
});

thi.ng.strf.core.parse_float.cljs$lang$maxFixedArity = (1);

thi.ng.strf.core.parse_float.cljs$lang$applyTo = (function (seq23227){
var G__23228 = cljs.core.first.call(null,seq23227);
var seq23227__$1 = cljs.core.next.call(null,seq23227);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic(G__23228,seq23227__$1);
});
thi.ng.strf.core.parse_double = (function thi$ng$strf$core$parse_double(var_args){
var args__19340__auto__ = [];
var len__19333__auto___23238 = arguments.length;
var i__19334__auto___23239 = (0);
while(true){
if((i__19334__auto___23239 < len__19333__auto___23238)){
args__19340__auto__.push((arguments[i__19334__auto___23239]));

var G__23240 = (i__19334__auto___23239 + (1));
i__19334__auto___23239 = G__23240;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((1) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((1)),(0))):null);
return thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19341__auto__);
});

thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__23236){
var vec__23237 = p__23236;
var default$ = cljs.core.nth.call(null,vec__23237,(0),null);
return thi.ng.strf.core.parse_float.call(null,x,default$);
});

thi.ng.strf.core.parse_double.cljs$lang$maxFixedArity = (1);

thi.ng.strf.core.parse_double.cljs$lang$applyTo = (function (seq23234){
var G__23235 = cljs.core.first.call(null,seq23234);
var seq23234__$1 = cljs.core.next.call(null,seq23234);
return thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic(G__23235,seq23234__$1);
});
thi.ng.strf.core.parse_boolean = (function thi$ng$strf$core$parse_boolean(x){
return cljs.core._EQ_.call(null,"true",clojure.string.lower_case.call(null,x));
});
thi.ng.strf.core.int$ = cljs.core.int$;
thi.ng.strf.core.long$ = thi.ng.strf.core.int$;
thi.ng.strf.core.float$ = cljs.core.memoize.call(null,(function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.double$ = cljs.core.memoize.call(null,(function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.pad_left = cljs.core.memoize.call(null,(function (len,fill){
var fill__$1 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,len,fill));
return ((function (fill__$1){
return (function (x){
var l = cljs.core.count.call(null,x);
if((l < len)){
return [cljs.core.str(cljs.core.subs.call(null,fill__$1,(0),(len - l))),cljs.core.str(x)].join('');
} else {
return x;
}
});
;})(fill__$1))
}));
thi.ng.strf.core.pad_right = cljs.core.memoize.call(null,(function (len,fill){
var fill__$1 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,len,fill));
return ((function (fill__$1){
return (function (x){
var l = cljs.core.count.call(null,x);
if((l < len)){
return [cljs.core.str(x),cljs.core.str(cljs.core.subs.call(null,fill__$1,(0),(len - l)))].join('');
} else {
return x;
}
});
;})(fill__$1))
}));
thi.ng.strf.core.hex = cljs.core.memoize.call(null,(function (len){
var pad = thi.ng.strf.core.pad_left.call(null,len,"0");
return ((function (pad){
return (function (x){
return pad.call(null,(new Number(thi.ng.strf.core.int$.call(null,x))).toString((16)));
});
;})(pad))
}));
thi.ng.strf.core.trunc_left = (function thi$ng$strf$core$trunc_left(len){
return (function (x){
var l = cljs.core.count.call(null,x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.call(null,x,(0),len);
}
});
});
thi.ng.strf.core.trunc_right = (function thi$ng$strf$core$trunc_right(len){
return (function (x){
var l = cljs.core.count.call(null,x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.call(null,x,(l - len));
}
});
});
thi.ng.strf.core.format = (function thi$ng$strf$core$format(var_args){
var args__19340__auto__ = [];
var len__19333__auto___23243 = arguments.length;
var i__19334__auto___23244 = (0);
while(true){
if((i__19334__auto___23244 < len__19333__auto___23243)){
args__19340__auto__.push((arguments[i__19334__auto___23244]));

var G__23245 = (i__19334__auto___23244 + (1));
i__19334__auto___23244 = G__23245;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((1) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((1)),(0))):null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19341__auto__);
});

thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var s = cljs.core.PersistentVector.EMPTY;
var fmt__$1 = fmt;
var args__$1 = args;
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,fmt__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
if(typeof f === 'string'){
var G__23246 = cljs.core.conj.call(null,s,f);
var G__23247 = cljs.core.next.call(null,fmt__$1);
var G__23248 = args__$1;
s = G__23246;
fmt__$1 = G__23247;
args__$1 = G__23248;
continue;
} else {
var G__23249 = cljs.core.conj.call(null,s,f.call(null,cljs.core.first.call(null,args__$1)));
var G__23250 = cljs.core.next.call(null,fmt__$1);
var G__23251 = cljs.core.next.call(null,args__$1);
s = G__23249;
fmt__$1 = G__23250;
args__$1 = G__23251;
continue;
}
} else {
return cljs.core.apply.call(null,cljs.core.str,s);
}
break;
}
});

thi.ng.strf.core.format.cljs$lang$maxFixedArity = (1);

thi.ng.strf.core.format.cljs$lang$applyTo = (function (seq23241){
var G__23242 = cljs.core.first.call(null,seq23241);
var seq23241__$1 = cljs.core.next.call(null,seq23241);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(G__23242,seq23241__$1);
});
thi.ng.strf.core.date_fields = (function thi$ng$strf$core$date_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate()], null)], null);
});
thi.ng.strf.core.time_fields = (function thi$ng$strf$core$time_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.datetime_fields = (function thi$ng$strf$core$datetime_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.date_formatters = (function (){var d2 = cljs.core.comp.call(null,thi.ng.strf.core.pad_left.call(null,(2),"0"),cljs.core.str);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"yyyy-mm-dd","yyyy-mm-dd",1870000488),((function (d2){
return (function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2], null),thi.ng.strf.core.date_fields.call(null,d));
});})(d2))
,new cljs.core.Keyword(null,"yyyy-mm-dd-hh-mm-ss","yyyy-mm-dd-hh-mm-ss",515818629),((function (d2){
return (function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2," ",d2,":",d2,":",d2], null),thi.ng.strf.core.datetime_fields.call(null,d));
});})(d2))
,new cljs.core.Keyword(null,"yyyymmdd-hhmmss","yyyymmdd-hhmmss",1691759860),((function (d2){
return (function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,d2,d2,"-",d2,d2,d2], null),thi.ng.strf.core.datetime_fields.call(null,d));
});})(d2))
,new cljs.core.Keyword(null,"dd-mm-yyyy","dd-mm-yyyy",-705729643),((function (d2){
return (function (d){
var vec__23253 = thi.ng.strf.core.date_fields.call(null,d);
var y = cljs.core.nth.call(null,vec__23253,(0),null);
var m = cljs.core.nth.call(null,vec__23253,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__23253,(2),null);
return thi.ng.strf.core.format.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),d__$1,m,y);
});})(d2))
,new cljs.core.Keyword(null,"mm-dd-yyyy","mm-dd-yyyy",-911118576),((function (d2){
return (function (d){
var vec__23254 = thi.ng.strf.core.date_fields.call(null,d);
var y = cljs.core.nth.call(null,vec__23254,(0),null);
var m = cljs.core.nth.call(null,vec__23254,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__23254,(2),null);
return thi.ng.strf.core.format.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),m,d__$1,y);
});})(d2))
,new cljs.core.Keyword(null,"dd-mm-yy","dd-mm-yy",-664945286),((function (d2){
return (function (d){
var vec__23255 = thi.ng.strf.core.date_fields.call(null,d);
var y = cljs.core.nth.call(null,vec__23255,(0),null);
var m = cljs.core.nth.call(null,vec__23255,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__23255,(2),null);
return thi.ng.strf.core.format.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.comp.call(null,d2,((function (vec__23255,y,m,d__$1,d2){
return (function (p1__23252_SHARP_){
return cljs.core.mod.call(null,p1__23252_SHARP_,(100));
});})(vec__23255,y,m,d__$1,d2))
)], null),d__$1,m,y);
});})(d2))
,new cljs.core.Keyword(null,"hh-mm-ss","hh-mm-ss",1000840174),((function (d2){
return (function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,":",d2,":",d2], null),thi.ng.strf.core.time_fields.call(null,d));
});})(d2))
], null);
})();
thi.ng.strf.core.format_date = (function thi$ng$strf$core$format_date(var_args){
var args23256 = [];
var len__19333__auto___23259 = arguments.length;
var i__19334__auto___23260 = (0);
while(true){
if((i__19334__auto___23260 < len__19333__auto___23259)){
args23256.push((arguments[i__19334__auto___23260]));

var G__23261 = (i__19334__auto___23260 + (1));
i__19334__auto___23260 = G__23261;
continue;
} else {
}
break;
}

var G__23258 = args23256.length;
switch (G__23258) {
case 1:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23256.length)].join('')));

}
});

thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1 = (function (d){
return thi.ng.strf.core.date_formatters.call(null,new cljs.core.Keyword(null,"yyyy-mm-dd-hh-mm-ss","yyyy-mm-dd-hh-mm-ss",515818629)).call(null,d);
});

thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,d){
if(cljs.core.fn_QMARK_.call(null,fmt)){
return fmt.call(null,d);
} else {
return thi.ng.strf.core.date_formatters.call(null,fmt).call(null,d);
}
});

thi.ng.strf.core.format_date.cljs$lang$maxFixedArity = 2;
thi.ng.strf.core.now = (function thi$ng$strf$core$now(){
return (new Date());
});
thi.ng.strf.core.timestamp = (function thi$ng$strf$core$timestamp(){
return (new Date()).getTime();
});
thi.ng.strf.core.format_16bit_hex = thi.ng.strf.core.pad_left.call(null,(4),"0");
thi.ng.strf.core.rand_bits = (function thi$ng$strf$core$rand_bits(bits){
return thi.ng.strf.core.int$.call(null,(cljs.core.rand.call(null) * ((1) << bits)));
});
thi.ng.strf.core.rand_bits_hex = (function thi$ng$strf$core$rand_bits_hex(bits){
return thi.ng.strf.core.pad_left.call(null,Math.ceil((bits / (4))),"0").call(null,thi.ng.strf.core.rand_bits.call(null,bits).toString((16)));
});
thi.ng.strf.core.rand_16bits_hex = (function thi$ng$strf$core$rand_16bits_hex(){
return thi.ng.strf.core.format_16bit_hex.call(null,cljs.core.rand_int.call(null,(65536)).toString((16)));
});
thi.ng.strf.core.new_uuid = (function thi$ng$strf$core$new_uuid(){
return [cljs.core.str(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str("-"),cljs.core.str(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str("-"),cljs.core.str(thi.ng.strf.core.format_16bit_hex.call(null,((thi.ng.strf.core.rand_bits.call(null,(16)) & (4095)) | (16384)).toString((16)))),cljs.core.str("-"),cljs.core.str(thi.ng.strf.core.format_16bit_hex.call(null,((thi.ng.strf.core.rand_bits.call(null,(16)) & (16383)) | (32768)).toString((16)))),cljs.core.str("-"),cljs.core.str(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str(thi.ng.strf.core.rand_16bits_hex.call(null))].join('');
});
thi.ng.strf.core.html_entities = new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;","<","&lt;",">","&gt;","\"","&quot;"], null);
thi.ng.strf.core.as_str = (function thi$ng$strf$core$as_str(x){
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return cljs.core.name.call(null,x);
} else {
return [cljs.core.str(x)].join('');
}
});
thi.ng.strf.core.escape_html = (function thi$ng$strf$core$escape_html(x){
return clojure.string.escape.call(null,thi.ng.strf.core.as_str.call(null,x),thi.ng.strf.core.html_entities);
});

//# sourceMappingURL=core.js.map