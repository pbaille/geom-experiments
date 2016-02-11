// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.domus.utils');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('clojure.string');
thi.ng.domus.utils.html_entities = new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;","<","&lt;",">","&gt;","\"","&quot;"], null);
thi.ng.domus.utils.as_str = (function thi$ng$domus$utils$as_str(x){
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return cljs.core.name.call(null,x);
} else {
return [cljs.core.str(x)].join('');
}
});
thi.ng.domus.utils.escape_html = (function thi$ng$domus$utils$escape_html(x){
return clojure.string.escape.call(null,thi.ng.domus.utils.as_str.call(null,x),thi.ng.domus.utils.html_entities);
});
thi.ng.domus.utils.parse_int = (function thi$ng$domus$utils$parse_int(var_args){
var args29854 = [];
var len__19333__auto___29857 = arguments.length;
var i__19334__auto___29858 = (0);
while(true){
if((i__19334__auto___29858 < len__19333__auto___29857)){
args29854.push((arguments[i__19334__auto___29858]));

var G__29859 = (i__19334__auto___29858 + (1));
i__19334__auto___29858 = G__29859;
continue;
} else {
}
break;
}

var G__29856 = args29854.length;
switch (G__29856) {
case 1:
return thi.ng.domus.utils.parse_int.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.domus.utils.parse_int.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29854.length)].join('')));

}
});

thi.ng.domus.utils.parse_int.cljs$core$IFn$_invoke$arity$1 = (function (x){
return thi.ng.domus.utils.parse_int.call(null,x,(10),null);
});

thi.ng.domus.utils.parse_int.cljs$core$IFn$_invoke$arity$3 = (function (x,radix,nf){
var x_SINGLEQUOTE_ = parseInt(x,radix);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return nf;
} else {
return x_SINGLEQUOTE_;
}
});

thi.ng.domus.utils.parse_int.cljs$lang$maxFixedArity = 3;
thi.ng.domus.utils.parse_float = (function thi$ng$domus$utils$parse_float(var_args){
var args29861 = [];
var len__19333__auto___29864 = arguments.length;
var i__19334__auto___29865 = (0);
while(true){
if((i__19334__auto___29865 < len__19333__auto___29864)){
args29861.push((arguments[i__19334__auto___29865]));

var G__29866 = (i__19334__auto___29865 + (1));
i__19334__auto___29865 = G__29866;
continue;
} else {
}
break;
}

var G__29863 = args29861.length;
switch (G__29863) {
case 1:
return thi.ng.domus.utils.parse_float.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.domus.utils.parse_float.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29861.length)].join('')));

}
});

thi.ng.domus.utils.parse_float.cljs$core$IFn$_invoke$arity$1 = (function (x){
return thi.ng.domus.utils.parse_float.call(null,x,null);
});

thi.ng.domus.utils.parse_float.cljs$core$IFn$_invoke$arity$2 = (function (x,nf){
var x_SINGLEQUOTE_ = parseFloat(x);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return nf;
} else {
return x_SINGLEQUOTE_;
}
});

thi.ng.domus.utils.parse_float.cljs$lang$maxFixedArity = 2;
thi.ng.domus.utils.format_date = (function thi$ng$domus$utils$format_date(d){
return goog.string.format("%d-%02d-%02d",d.getFullYear(),(d.getMonth() + (1)),d.getDate());
});
thi.ng.domus.utils.format_time = (function thi$ng$domus$utils$format_time(d){
return goog.string.format("%02d:%02d:%02d",d.getHours(),d.getMinutes(),d.getSeconds());
});
thi.ng.domus.utils.format_date_time = (function thi$ng$domus$utils$format_date_time(d){
return [cljs.core.str(thi.ng.domus.utils.format_date.call(null,d)),cljs.core.str(" "),cljs.core.str(thi.ng.domus.utils.format_time.call(null,d))].join('');
});
thi.ng.domus.utils.now = (function thi$ng$domus$utils$now(){
return (new Date()).getTime();
});
thi.ng.domus.utils.rand_bits = (function thi$ng$domus$utils$rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
thi.ng.domus.utils.rand_bits_hex = (function thi$ng$domus$utils$rand_bits_hex(pow){
return cljs.core.rand_int.call(null,((1) << pow)).toString((16));
});
thi.ng.domus.utils.rand_16bits_hex = (function thi$ng$domus$utils$rand_16bits_hex(){
return cljs.core.rand_int.call(null,(65536)).toString((16));
});
thi.ng.domus.utils.new_uuid = (function thi$ng$domus$utils$new_uuid(){
return [cljs.core.str(thi.ng.domus.utils.rand_16bits_hex.call(null)),cljs.core.str(thi.ng.domus.utils.rand_16bits_hex.call(null)),cljs.core.str("-"),cljs.core.str(thi.ng.domus.utils.rand_16bits_hex.call(null)),cljs.core.str("-"),cljs.core.str(((thi.ng.domus.utils.rand_bits.call(null,(16)) & (4095)) | (16384)).toString((16))),cljs.core.str("-"),cljs.core.str(((thi.ng.domus.utils.rand_bits.call(null,(16)) & (16383)) | (32768)).toString((16))),cljs.core.str("-"),cljs.core.str(thi.ng.domus.utils.rand_16bits_hex.call(null)),cljs.core.str(thi.ng.domus.utils.rand_16bits_hex.call(null)),cljs.core.str(thi.ng.domus.utils.rand_16bits_hex.call(null))].join('');
});

//# sourceMappingURL=utils.js.map