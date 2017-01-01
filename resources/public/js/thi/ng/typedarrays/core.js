// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.typedarrays.core');
goog.require('cljs.core');
/**
 * Creates a native Int8Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int8 = (function thi$ng$typedarrays$core$int8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int8Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int8Array(len));
var i_21299 = (0);
var coll_21300 = size_or_coll;
while(true){
if((i_21299 < len)){
(buf[i_21299] = cljs.core.first.call(null,coll_21300));

var G__21301 = (i_21299 + (1));
var G__21302 = cljs.core.next.call(null,coll_21300);
i_21299 = G__21301;
coll_21300 = G__21302;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Uint8Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint8 = (function thi$ng$typedarrays$core$uint8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8Array(len));
var i_21303 = (0);
var coll_21304 = size_or_coll;
while(true){
if((i_21303 < len)){
(buf[i_21303] = cljs.core.first.call(null,coll_21304));

var G__21305 = (i_21303 + (1));
var G__21306 = cljs.core.next.call(null,coll_21304);
i_21303 = G__21305;
coll_21304 = G__21306;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Uint8ClampedArray of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint8_clamped = (function thi$ng$typedarrays$core$uint8_clamped(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8ClampedArray(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8ClampedArray(len));
var i_21307 = (0);
var coll_21308 = size_or_coll;
while(true){
if((i_21307 < len)){
(buf[i_21307] = cljs.core.first.call(null,coll_21308));

var G__21309 = (i_21307 + (1));
var G__21310 = cljs.core.next.call(null,coll_21308);
i_21307 = G__21309;
coll_21308 = G__21310;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Int16Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int16 = (function thi$ng$typedarrays$core$int16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int16Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int16Array(len));
var i_21311 = (0);
var coll_21312 = size_or_coll;
while(true){
if((i_21311 < len)){
(buf[i_21311] = cljs.core.first.call(null,coll_21312));

var G__21313 = (i_21311 + (1));
var G__21314 = cljs.core.next.call(null,coll_21312);
i_21311 = G__21313;
coll_21312 = G__21314;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Uint16Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint16 = (function thi$ng$typedarrays$core$uint16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint16Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint16Array(len));
var i_21315 = (0);
var coll_21316 = size_or_coll;
while(true){
if((i_21315 < len)){
(buf[i_21315] = cljs.core.first.call(null,coll_21316));

var G__21317 = (i_21315 + (1));
var G__21318 = cljs.core.next.call(null,coll_21316);
i_21315 = G__21317;
coll_21316 = G__21318;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Int32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int32 = (function thi$ng$typedarrays$core$int32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int32Array(len));
var i_21319 = (0);
var coll_21320 = size_or_coll;
while(true){
if((i_21319 < len)){
(buf[i_21319] = cljs.core.first.call(null,coll_21320));

var G__21321 = (i_21319 + (1));
var G__21322 = cljs.core.next.call(null,coll_21320);
i_21319 = G__21321;
coll_21320 = G__21322;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Uint32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint32 = (function thi$ng$typedarrays$core$uint32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint32Array(len));
var i_21323 = (0);
var coll_21324 = size_or_coll;
while(true){
if((i_21323 < len)){
(buf[i_21323] = cljs.core.first.call(null,coll_21324));

var G__21325 = (i_21323 + (1));
var G__21326 = cljs.core.next.call(null,coll_21324);
i_21323 = G__21325;
coll_21324 = G__21326;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Float32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.float32 = (function thi$ng$typedarrays$core$float32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float32Array(len));
var i_21327 = (0);
var coll_21328 = size_or_coll;
while(true){
if((i_21327 < len)){
(buf[i_21327] = cljs.core.first.call(null,coll_21328));

var G__21329 = (i_21327 + (1));
var G__21330 = cljs.core.next.call(null,coll_21328);
i_21327 = G__21329;
coll_21328 = G__21330;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Creates a native Float64Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.float64 = (function thi$ng$typedarrays$core$float64(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float64Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float64Array(len));
var i_21331 = (0);
var coll_21332 = size_or_coll;
while(true){
if((i_21331 < len)){
(buf[i_21331] = cljs.core.first.call(null,coll_21332));

var G__21333 = (i_21331 + (1));
var G__21334 = cljs.core.next.call(null,coll_21332);
i_21331 = G__21333;
coll_21332 = G__21334;
continue;
} else {
}
break;
}

return buf;
}
});
/**
 * Returns true if JS runtime supports typed arrays
 */
thi.ng.typedarrays.core.typed_arrays_supported_QMARK_ = (function thi$ng$typedarrays$core$typed_arrays_supported_QMARK_(){
return !(((window["ArrayBuffer"]) == null));
});
thi.ng.typedarrays.core.array_types = cljs.core.PersistentHashMap.fromArrays(["[object Float64Array]","[object Int8Array]","[object Int16Array]","[object Uint8Array]","[object Uint16Array]","[object Uint8ClampedArray]","[object Uint32Array]","[object Float32Array]","[object Int32Array]"],[new cljs.core.Keyword(null,"float64","float64",1881838306),new cljs.core.Keyword(null,"int8","int8",-1834023920),new cljs.core.Keyword(null,"int16","int16",-188764863),new cljs.core.Keyword(null,"uint8","uint8",956521151),new cljs.core.Keyword(null,"uint16","uint16",-588869202),new cljs.core.Keyword(null,"uint8-clamped","uint8-clamped",1439331936),new cljs.core.Keyword(null,"uint32","uint32",-418789486),new cljs.core.Keyword(null,"float32","float32",-2119815775),new cljs.core.Keyword(null,"int32","int32",1718804896)]);
thi.ng.typedarrays.core.array_type = (function thi$ng$typedarrays$core$array_type(x){
if(cljs.core.array_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"array","array",-2080713842);
} else {
return thi.ng.typedarrays.core.array_types.call(null,[cljs.core.str(x)].join(''));
}
});
/**
 * Returns truthy value if the given arg is a typed array instance
 */
thi.ng.typedarrays.core.typed_array_QMARK_ = (function thi$ng$typedarrays$core$typed_array_QMARK_(x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return false;
} else {
if(typeof x === 'number'){
return false;
} else {
return thi.ng.typedarrays.core.array_types.call(null,[cljs.core.str(x)].join(''));

}
}
});

//# sourceMappingURL=core.js.map