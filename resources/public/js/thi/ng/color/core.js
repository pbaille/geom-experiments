// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.color.core');
goog.require('cljs.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.strf.core');
goog.require('thi.ng.xerror.core');







thi.ng.color.core.THIRD = (1.0 / (3));
thi.ng.color.core.TWO_THIRD = (2.0 / (3));
thi.ng.color.core.SIXTH = (1.0 / (6));
thi.ng.color.core.INV8BIT = (1.0 / (255));
thi.ng.color.core.hex6 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#",thi.ng.strf.core.hex.call(null,(6))], null);
thi.ng.color.core.ns_prefix = "#thi.ng.color.core.";

/**
 * @interface
 */
thi.ng.color.core.IRGBConvert = function(){};

thi.ng.color.core.as_rgba = (function thi$ng$color$core$as_rgba(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 == null)))){
return _.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.as_rgba[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.as_rgba["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IRGBConvert.as-rgba",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IHSVConvert = function(){};

thi.ng.color.core.as_hsva = (function thi$ng$color$core$as_hsva(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 == null)))){
return _.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.as_hsva[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.as_hsva["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IHSVConvert.as-hsva",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IHSLConvert = function(){};

thi.ng.color.core.as_hsla = (function thi$ng$color$core$as_hsla(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 == null)))){
return _.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.as_hsla[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.as_hsla["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IHSLConvert.as-hsla",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.ICMYKConvert = function(){};

thi.ng.color.core.as_cmyka = (function thi$ng$color$core$as_cmyka(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 == null)))){
return _.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.as_cmyka[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.as_cmyka["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ICMYKConvert.as-cmyka",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.ICSSConvert = function(){};

thi.ng.color.core.as_css = (function thi$ng$color$core$as_css(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$ICSSConvert$as_css$arity$1 == null)))){
return _.thi$ng$color$core$ICSSConvert$as_css$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.as_css[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.as_css["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ICSSConvert.as-css",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IIntConvert = function(){};

thi.ng.color.core.as_int24 = (function thi$ng$color$core$as_int24(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IIntConvert$as_int24$arity$1 == null)))){
return _.thi$ng$color$core$IIntConvert$as_int24$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.as_int24[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.as_int24["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IIntConvert.as-int24",_);
}
}
}
});

thi.ng.color.core.as_int32 = (function thi$ng$color$core$as_int32(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IIntConvert$as_int32$arity$1 == null)))){
return _.thi$ng$color$core$IIntConvert$as_int32$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.as_int32[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.as_int32["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IIntConvert.as-int32",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IColorComponents = function(){};

thi.ng.color.core.red = (function thi$ng$color$core$red(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$red$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$red$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.red[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.red["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.red",_);
}
}
}
});

thi.ng.color.core.green = (function thi$ng$color$core$green(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$green$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$green$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.green[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.green["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.green",_);
}
}
}
});

thi.ng.color.core.blue = (function thi$ng$color$core$blue(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$blue$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$blue$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.blue[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.blue["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.blue",_);
}
}
}
});

thi.ng.color.core.alpha = (function thi$ng$color$core$alpha(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$alpha$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$alpha$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.alpha[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.alpha["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.alpha",_);
}
}
}
});

thi.ng.color.core.hue = (function thi$ng$color$core$hue(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$hue$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$hue$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.hue[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.hue["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.hue",_);
}
}
}
});

thi.ng.color.core.saturation = (function thi$ng$color$core$saturation(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$saturation$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$saturation$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.saturation[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.saturation["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.saturation",_);
}
}
}
});

thi.ng.color.core.brightness = (function thi$ng$color$core$brightness(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$brightness$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$brightness$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.brightness[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.brightness["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.brightness",_);
}
}
}
});

thi.ng.color.core.luminance = (function thi$ng$color$core$luminance(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$luminance$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$luminance$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.luminance[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.luminance["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.luminance",_);
}
}
}
});

thi.ng.color.core.cyan = (function thi$ng$color$core$cyan(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$cyan$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$cyan$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.cyan[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.cyan["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.cyan",_);
}
}
}
});

thi.ng.color.core.magenta = (function thi$ng$color$core$magenta(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$magenta$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$magenta$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.magenta[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.magenta["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.magenta",_);
}
}
}
});

thi.ng.color.core.yellow = (function thi$ng$color$core$yellow(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$yellow$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$yellow$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.yellow[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.yellow["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.yellow",_);
}
}
}
});

thi.ng.color.core.black = (function thi$ng$color$core$black(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$black$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$black$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.black[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.black["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.black",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IColorOps = function(){};

thi.ng.color.core.rotate_hue = (function thi$ng$color$core$rotate_hue(_,theta){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorOps$rotate_hue$arity$2 == null)))){
return _.thi$ng$color$core$IColorOps$rotate_hue$arity$2(_,theta);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.rotate_hue[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,theta);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.rotate_hue["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,theta);
} else {
throw cljs.core.missing_protocol.call(null,"IColorOps.rotate-hue",_);
}
}
}
});

thi.ng.color.core.adjust_saturation = (function thi$ng$color$core$adjust_saturation(_,offset){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 == null)))){
return _.thi$ng$color$core$IColorOps$adjust_saturation$arity$2(_,offset);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.adjust_saturation[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,offset);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.adjust_saturation["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,offset);
} else {
throw cljs.core.missing_protocol.call(null,"IColorOps.adjust-saturation",_);
}
}
}
});

thi.ng.color.core.adjust_brightness = (function thi$ng$color$core$adjust_brightness(_,offset){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 == null)))){
return _.thi$ng$color$core$IColorOps$adjust_brightness$arity$2(_,offset);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.adjust_brightness[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,offset);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.adjust_brightness["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,offset);
} else {
throw cljs.core.missing_protocol.call(null,"IColorOps.adjust-brightness",_);
}
}
}
});

thi.ng.color.core.adjust_alpha = (function thi$ng$color$core$adjust_alpha(_,offset){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 == null)))){
return _.thi$ng$color$core$IColorOps$adjust_alpha$arity$2(_,offset);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.adjust_alpha[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,offset);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.adjust_alpha["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,offset);
} else {
throw cljs.core.missing_protocol.call(null,"IColorOps.adjust-alpha",_);
}
}
}
});

thi.ng.color.core.invert = (function thi$ng$color$core$invert(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorOps$invert$arity$1 == null)))){
return _.thi$ng$color$core$IColorOps$invert$arity$1(_);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.invert[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.invert["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorOps.invert",_);
}
}
}
});

thi.ng.color.core.blend = (function thi$ng$color$core$blend(_,dest,t){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorOps$blend$arity$3 == null)))){
return _.thi$ng$color$core$IColorOps$blend$arity$3(_,dest,t);
} else {
var x__18930__auto__ = (((_ == null))?null:_);
var m__18931__auto__ = (thi.ng.color.core.blend[goog.typeOf(x__18930__auto__)]);
if(!((m__18931__auto__ == null))){
return m__18931__auto__.call(null,_,dest,t);
} else {
var m__18931__auto____$1 = (thi.ng.color.core.blend["_"]);
if(!((m__18931__auto____$1 == null))){
return m__18931__auto____$1.call(null,_,dest,t);
} else {
throw cljs.core.missing_protocol.call(null,"IColorOps.blend",_);
}
}
}
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.color.core.Object}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.RGBA = (function (r,g,b,a){
this.r = r;
this.g = g;
this.b = b;
this.a = a;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
thi.ng.color.core.RGBA.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(thi.ng.color.core.ns_prefix),cljs.core.str("RGBA ["),cljs.core.str(self__.r),cljs.core.str(" "),cljs.core.str(self__.g),cljs.core.str(" "),cljs.core.str(self__.b),cljs.core.str(" "),cljs.core.str(self__.a),cljs.core.str("]")].join('');
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.int24.call(null,((((((self__.r * (255)) + 0.5) | (0)) << (16)) | ((((self__.g * (255)) + 0.5) | (0)) << (8))) | (((self__.b * (255)) + 0.5) | (0))));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.int32.call(null,(((((((self__.r * (255)) + 0.5) | (0)) << (16)) | ((((self__.g * (255)) + 0.5) | (0)) << (8))) | (((self__.b * (255)) + 0.5) | (0))) | ((((self__.a * (255)) + 0.5) | (0)) << (24))));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba.call(null,thi.ng.color.core.rotate_hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1),theta));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba.call(null,thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,thi.ng.math.core.clamp.call(null,(self__.a + offset),0.0,1.0)));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((1.0 - self__.r),(1.0 - self__.g),(1.0 - self__.b),self__.a));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$blend$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((function (){var a__19512__auto__ = self__.r;
return (((thi.ng.color.core.red.call(null,dest) - a__19512__auto__) * t) + a__19512__auto__);
})(),(function (){var a__19512__auto__ = self__.g;
return (((thi.ng.color.core.green.call(null,dest) - a__19512__auto__) * t) + a__19512__auto__);
})(),(function (){var a__19512__auto__ = self__.b;
return (((thi.ng.color.core.blue.call(null,dest) - a__19512__auto__) * t) + a__19512__auto__);
})(),(function (){var a__19512__auto__ = self__.a;
return (((thi.ng.color.core.alpha.call(null,dest) - a__19512__auto__) * t) + a__19512__auto__);
})()));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICSSConvert$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.a < 1.0)){
var r__$1 = ((255) * self__.r);
var g__$1 = ((255) * self__.g);
var b__$1 = ((255) * self__.b);
return thi.ng.color.core.css.call(null,[cljs.core.str("rgba("),cljs.core.str((r__$1 | (0))),cljs.core.str(","),cljs.core.str((g__$1 | (0))),cljs.core.str(","),cljs.core.str((b__$1 | (0))),cljs.core.str(","),cljs.core.str((function (){var x__18606__auto__ = 0.0;
var y__18607__auto__ = self__.a;
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})()),cljs.core.str(")")].join(''));
} else {
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.as_int24.call(null,___$1));
}
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var v = (function (){var x__18606__auto__ = (function (){var x__18606__auto__ = self__.r;
var y__18607__auto__ = self__.g;
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})();
var y__18607__auto__ = self__.b;
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})();
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,v))){
return 0.0;
} else {
return ((v - (function (){var x__18613__auto__ = (function (){var x__18613__auto__ = self__.r;
var y__18614__auto__ = self__.g;
return ((x__18613__auto__ < y__18614__auto__) ? x__18613__auto__ : y__18614__auto__);
})();
var y__18614__auto__ = self__.b;
return ((x__18613__auto__ < y__18614__auto__) ? x__18613__auto__ : y__18614__auto__);
})()) / v);
}
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.g;
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var x__18606__auto__ = (function (){var x__18606__auto__ = self__.r;
var y__18607__auto__ = self__.g;
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})();
var y__18607__auto__ = self__.b;
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (((0.299 * self__.r) + (0.587 * self__.g)) + (0.114 * self__.b));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.r;
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.b;
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IRGBConvert$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSVConvert$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var v = (function (){var x__18606__auto__ = (function (){var x__18606__auto__ = self__.r;
var y__18607__auto__ = self__.g;
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})();
var y__18607__auto__ = self__.b;
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})();
var d = (v - (function (){var x__18613__auto__ = (function (){var x__18613__auto__ = self__.r;
var y__18614__auto__ = self__.g;
return ((x__18613__auto__ < y__18614__auto__) ? x__18613__auto__ : y__18614__auto__);
})();
var y__18614__auto__ = self__.b;
return ((x__18613__auto__ < y__18614__auto__) ? x__18613__auto__ : y__18614__auto__);
})());
var s = (cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,v))?0.0:(d / v));
var h = (cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,s))?0.0:(function (){var pred__19534 = cljs.core._EQ__EQ_;
var expr__19535 = v;
if(cljs.core.truth_(pred__19534.call(null,self__.r,expr__19535))){
return ((self__.g - self__.b) / d);
} else {
if(cljs.core.truth_(pred__19534.call(null,self__.g,expr__19535))){
return (2.0 + ((self__.b - self__.r) / d));
} else {
return (4.0 + ((self__.r - self__.g) / d));
}
}
})());
var h__$1 = (h / 6.0);
return thi.ng.color.core.hsva.call(null,(((h__$1 < (0)))?(h__$1 + (1)):h__$1),s,v,self__.a);
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICMYKConvert$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (1.0 - self__.r);
var m = (1.0 - self__.g);
var y = (1.0 - self__.b);
var k = (function (){var x__18613__auto__ = (function (){var x__18613__auto__ = c;
var y__18614__auto__ = m;
return ((x__18613__auto__ < y__18614__auto__) ? x__18613__auto__ : y__18614__auto__);
})();
var y__18614__auto__ = y;
return ((x__18613__auto__ < y__18614__auto__) ? x__18613__auto__ : y__18614__auto__);
})();
return thi.ng.color.core.cmyka.call(null,(function (){var x__18606__auto__ = (c - k);
var y__18607__auto__ = 0.0;
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})(),(function (){var x__18606__auto__ = (m - k);
var y__18607__auto__ = 0.0;
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})(),(function (){var x__18606__auto__ = (y - k);
var y__18607__auto__ = 0.0;
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})(),(function (){var x__18606__auto__ = k;
var y__18607__auto__ = 0.0;
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})());
});

thi.ng.color.core.RGBA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.r,self__.g,self__.b,self__.a], null);
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSLConvert$ = true;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var f1 = (function (){var x__18613__auto__ = (function (){var x__18613__auto__ = self__.r;
var y__18614__auto__ = self__.g;
return ((x__18613__auto__ < y__18614__auto__) ? x__18613__auto__ : y__18614__auto__);
})();
var y__18614__auto__ = self__.b;
return ((x__18613__auto__ < y__18614__auto__) ? x__18613__auto__ : y__18614__auto__);
})();
var f2 = (function (){var x__18606__auto__ = (function (){var x__18606__auto__ = self__.r;
var y__18607__auto__ = self__.g;
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})();
var y__18607__auto__ = self__.b;
return ((x__18606__auto__ > y__18607__auto__) ? x__18606__auto__ : y__18607__auto__);
})();
var l = ((f1 + f2) * 0.5);
var d = (f2 - f1);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,d))){
return thi.ng.color.core.hsla.call(null,0.0,0.0,l,self__.a);
} else {
var s = (((l < 0.5))?(d / (f1 + f2)):(d / ((2.0 - f2) - f1)));
var d2 = (0.5 * d);
var dr = ((((f2 - self__.r) * thi.ng.color.core.SIXTH) + d2) / d);
var dg = ((((f2 - self__.g) * thi.ng.color.core.SIXTH) + d2) / d);
var db = ((((f2 - self__.b) * thi.ng.color.core.SIXTH) + d2) / d);
var h = (function (){var pred__19537 = cljs.core._EQ__EQ_;
var expr__19538 = f2;
if(cljs.core.truth_(pred__19537.call(null,self__.r,expr__19538))){
return (db - dg);
} else {
if(cljs.core.truth_(pred__19537.call(null,self__.g,expr__19538))){
return ((thi.ng.color.core.THIRD + dr) - db);
} else {
return ((thi.ng.color.core.TWO_THIRD + dg) - dr);
}
}
})();
var h__$1 = (((h < (0)))?(h + (1)):(((h >= 1.0))?(h - (1)):h));
return thi.ng.color.core.hsla.call(null,h__$1,s,l,self__.a);
}
});

thi.ng.color.core.RGBA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
});

thi.ng.color.core.RGBA.cljs$lang$type = true;

thi.ng.color.core.RGBA.cljs$lang$ctorStr = "thi.ng.color.core/RGBA";

thi.ng.color.core.RGBA.cljs$lang$ctorPrWriter = (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"thi.ng.color.core/RGBA");
});

thi.ng.color.core.__GT_RGBA = (function thi$ng$color$core$__GT_RGBA(r,g,b,a){
return (new thi.ng.color.core.RGBA(r,g,b,a));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.color.core.Object}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.Int24 = (function (col){
this.col = col;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
thi.ng.color.core.Int24.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(thi.ng.color.core.ns_prefix),cljs.core.str("Int24 ["),cljs.core.str(self__.col),cljs.core.str("]")].join('');
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.int32.call(null,(self__.col | (4278190080)));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.rotate_hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1),theta));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.adjust_alpha.call(null,thi.ng.color.core.as_int32.call(null,___$1),offset);
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int24((self__.col ^ (16777215))));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$blend$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var r = ((self__.col >> (16)) & (255));
var g = ((self__.col >> (8)) & (255));
var b = (self__.col & (255));
return (new thi.ng.color.core.Int24((((((function (){var a__19512__auto__ = r;
return (((((thi.ng.color.core.red.call(null,dest) * (255)) + 0.5) - a__19512__auto__) * t) + a__19512__auto__);
})() | (0)) << (16)) | (((function (){var a__19512__auto__ = g;
return (((((thi.ng.color.core.green.call(null,dest) * (255)) + 0.5) - a__19512__auto__) * t) + a__19512__auto__);
})() | (0)) << (8))) | ((function (){var a__19512__auto__ = b;
return (((((thi.ng.color.core.blue.call(null,dest) * (255)) + 0.5) - a__19512__auto__) * t) + a__19512__auto__);
})() | (0)))));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICSSConvert$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.css.call(null,thi.ng.strf.core.format.call(null,thi.ng.color.core.hex6,(self__.col & (16777215))));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.color.core.INV8BIT * ((self__.col >> (8)) & (255)));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.color.core.INV8BIT * ((self__.col >> (16)) & (255)));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.color.core.INV8BIT * (self__.col & (255)));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IRGBConvert$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((thi.ng.color.core.INV8BIT * ((self__.col >> (16)) & (255))),(thi.ng.color.core.INV8BIT * ((self__.col >> (8)) & (255))),(thi.ng.color.core.INV8BIT * (self__.col & (255))),1.0));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSVConvert$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICMYKConvert$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSLConvert$ = true;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int24.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"col","col",-318831557,null)], null);
});

thi.ng.color.core.Int24.cljs$lang$type = true;

thi.ng.color.core.Int24.cljs$lang$ctorStr = "thi.ng.color.core/Int24";

thi.ng.color.core.Int24.cljs$lang$ctorPrWriter = (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"thi.ng.color.core/Int24");
});

thi.ng.color.core.__GT_Int24 = (function thi$ng$color$core$__GT_Int24(col){
return (new thi.ng.color.core.Int24(col));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.color.core.Object}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.Int32 = (function (col){
this.col = col;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
thi.ng.color.core.Int32.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(thi.ng.color.core.ns_prefix),cljs.core.str("Int32 ["),cljs.core.str(self__.col),cljs.core.str("]")].join('');
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int24((self__.col & (16777215))));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.rotate_hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1),theta));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
var a = (thi.ng.color.core.INV8BIT * ((self__.col >>> (24)) & (255)));
var a__$1 = (((255) * thi.ng.math.core.clamp.call(null,(a + offset),0.0,1.0)) | (0));
return (new thi.ng.color.core.Int32(((self__.col & (16777215)) | (a__$1 << (24)))));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int32((self__.col ^ (16777215))));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$blend$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var r = ((self__.col >> (16)) & (255));
var g = ((self__.col >> (8)) & (255));
var b = (self__.col & (255));
var a = (self__.col >>> (24));
return (new thi.ng.color.core.Int32(((((((function (){var a__19512__auto__ = r;
return (((((thi.ng.color.core.red.call(null,dest) * (255)) + 0.5) - a__19512__auto__) * t) + a__19512__auto__);
})() | (0)) << (16)) | (((function (){var a__19512__auto__ = g;
return (((((thi.ng.color.core.green.call(null,dest) * (255)) + 0.5) - a__19512__auto__) * t) + a__19512__auto__);
})() | (0)) << (8))) | ((function (){var a__19512__auto__ = b;
return (((((thi.ng.color.core.blue.call(null,dest) * (255)) + 0.5) - a__19512__auto__) * t) + a__19512__auto__);
})() | (0))) | (((function (){var a__19512__auto__ = a;
return (((((thi.ng.color.core.alpha.call(null,dest) * (255)) + 0.5) - a__19512__auto__) * t) + a__19512__auto__);
})() | (0)) << (24)))));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICSSConvert$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((4278190080) === (self__.col & (4278190080)))){
return thi.ng.color.core.css.call(null,thi.ng.strf.core.format.call(null,thi.ng.color.core.hex6,(self__.col & (16777215))));
} else {
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
}
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.color.core.INV8BIT * ((self__.col >> (8)) & (255)));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.color.core.INV8BIT * ((self__.col >> (16)) & (255)));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.color.core.INV8BIT * (self__.col & (255)));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.color.core.INV8BIT * ((self__.col >>> (24)) & (255)));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IRGBConvert$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((thi.ng.color.core.INV8BIT * ((self__.col >> (16)) & (255))),(thi.ng.color.core.INV8BIT * ((self__.col >> (8)) & (255))),(thi.ng.color.core.INV8BIT * (self__.col & (255))),(thi.ng.color.core.INV8BIT * ((self__.col >>> (24)) & (255)))));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSVConvert$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICMYKConvert$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSLConvert$ = true;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int32.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"col","col",-318831557,null)], null);
});

thi.ng.color.core.Int32.cljs$lang$type = true;

thi.ng.color.core.Int32.cljs$lang$ctorStr = "thi.ng.color.core/Int32";

thi.ng.color.core.Int32.cljs$lang$ctorPrWriter = (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"thi.ng.color.core/Int32");
});

thi.ng.color.core.__GT_Int32 = (function thi$ng$color$core$__GT_Int32(col){
return (new thi.ng.color.core.Int32(col));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.color.core.Object}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.HSVA = (function (h,s,v,a){
this.h = h;
this.s = s;
this.v = v;
this.a = a;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
thi.ng.color.core.HSVA.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(thi.ng.color.core.ns_prefix),cljs.core.str("HSVA ["),cljs.core.str(self__.h),cljs.core.str(" "),cljs.core.str(self__.s),cljs.core.str(" "),cljs.core.str(self__.v),cljs.core.str(" "),cljs.core.str(self__.a),cljs.core.str("]")].join('');
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var h__$1 = (self__.h + (cljs.core.rem.call(null,theta,thi.ng.math.core.TWO_PI) / thi.ng.math.core.TWO_PI));
return (new thi.ng.color.core.HSVA((((h__$1 < (0)))?(h__$1 + (1)):(((h__$1 >= 1.0))?(h__$1 - (1)):h__$1)),self__.s,self__.v,self__.a));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,thi.ng.math.core.clamp.call(null,(offset + self__.s),0.0,1.0),self__.v,self__.a));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,thi.ng.math.core.clamp.call(null,(offset + self__.v),0.0,1.0),self__.a));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,thi.ng.math.core.clamp.call(null,(offset + self__.a),0.0,1.0)));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(cljs.core.mod.call(null,(0.5 + self__.h),1.0),(1.0 - self__.s),(1.0 - self__.v),self__.a));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$blend$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var vec__19540 = cljs.core.deref.call(null,thi.ng.color.core.as_hsva.call(null,dest));
var h2 = cljs.core.nth.call(null,vec__19540,(0),null);
var s2 = cljs.core.nth.call(null,vec__19540,(1),null);
var v2 = cljs.core.nth.call(null,vec__19540,(2),null);
var a2 = cljs.core.nth.call(null,vec__19540,(3),null);
var hd = thi.ng.math.core.abs_diff.call(null,self__.h,h2);
return (new thi.ng.color.core.HSVA((((hd > 0.5))?(((h2 > self__.h))?cljs.core.rem.call(null,(function (){var a__19512__auto__ = (self__.h + (1));
return (((h2 - a__19512__auto__) * t) + a__19512__auto__);
})(),1.0):cljs.core.rem.call(null,(function (){var a__19512__auto__ = self__.h;
return ((((h2 + (1)) - a__19512__auto__) * t) + a__19512__auto__);
})(),1.0)):(function (){var a__19512__auto__ = self__.h;
return (((h2 - a__19512__auto__) * t) + a__19512__auto__);
})()),(function (){var a__19512__auto__ = self__.s;
return (((s2 - a__19512__auto__) * t) + a__19512__auto__);
})(),(function (){var a__19512__auto__ = self__.v;
return (((v2 - a__19512__auto__) * t) + a__19512__auto__);
})(),(function (){var a__19512__auto__ = self__.a;
return (((a2 - a__19512__auto__) * t) + a__19512__auto__);
})()));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICSSConvert$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.as_hsla.call(null,thi.ng.color.core.as_rgba.call(null,___$1)));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.h;
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.s;
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.v;
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IRGBConvert$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,self__.s))){
return (new thi.ng.color.core.RGBA(self__.v,self__.v,self__.v,self__.a));
} else {
var h__$1 = cljs.core.rem.call(null,(self__.h * 6.0),6.0);
var i = (h__$1 | (0));
var f = (h__$1 - i);
var p = (self__.v * (1.0 - self__.s));
var q = (self__.v * (1.0 - (self__.s * f)));
var t = (self__.v * (1.0 - ((1.0 - f) * self__.s)));
var G__19541 = i;
switch (G__19541) {
case (0):
return (new thi.ng.color.core.RGBA(self__.v,t,p,self__.a));

break;
case (1):
return (new thi.ng.color.core.RGBA(q,self__.v,p,self__.a));

break;
case (2):
return (new thi.ng.color.core.RGBA(p,self__.v,t,self__.a));

break;
case (3):
return (new thi.ng.color.core.RGBA(p,q,self__.v,self__.a));

break;
case (4):
return (new thi.ng.color.core.RGBA(t,p,self__.v,self__.a));

break;
default:
return (new thi.ng.color.core.RGBA(self__.v,p,q,self__.a));

}
}
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSVConvert$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICMYKConvert$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.v,self__.a], null);
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSLConvert$ = true;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var l = (((2) - self__.s) * (self__.v * 0.5));
var s_SINGLEQUOTE_ = ((self__.s * self__.v) / ((1) - thi.ng.math.core.abs.call(null,(((2) * l) - (1)))));
return thi.ng.color.core.hsla.call(null,self__.h,s_SINGLEQUOTE_,l,self__.a);
});

thi.ng.color.core.HSVA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
});

thi.ng.color.core.HSVA.cljs$lang$type = true;

thi.ng.color.core.HSVA.cljs$lang$ctorStr = "thi.ng.color.core/HSVA";

thi.ng.color.core.HSVA.cljs$lang$ctorPrWriter = (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"thi.ng.color.core/HSVA");
});

thi.ng.color.core.__GT_HSVA = (function thi$ng$color$core$__GT_HSVA(h,s,v,a){
return (new thi.ng.color.core.HSVA(h,s,v,a));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.color.core.Object}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.HSLA = (function (h,s,l,a){
this.h = h;
this.s = s;
this.l = l;
this.a = a;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
thi.ng.color.core.HSLA.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(thi.ng.color.core.ns_prefix),cljs.core.str("HSLA ["),cljs.core.str(self__.h),cljs.core.str(" "),cljs.core.str(self__.s),cljs.core.str(" "),cljs.core.str(self__.l),cljs.core.str(" "),cljs.core.str(self__.a),cljs.core.str("]")].join('');
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var h__$1 = (self__.h + (cljs.core.rem.call(null,theta,thi.ng.math.core.TWO_PI) / thi.ng.math.core.TWO_PI));
return (new thi.ng.color.core.HSLA((((h__$1 < (0)))?(h__$1 + (1)):(((h__$1 >= 1.0))?(h__$1 - (1)):h__$1)),self__.s,self__.l,self__.a));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,thi.ng.math.core.clamp.call(null,(offset + self__.s),0.0,1.0),self__.l,self__.a));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla.call(null,thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,thi.ng.math.core.clamp.call(null,(offset + self__.a),0.0,1.0)));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(cljs.core.mod.call(null,(0.5 + self__.h),1.0),(1.0 - self__.s),(1.0 - self__.l),self__.a));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$blend$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var vec__19543 = cljs.core.deref.call(null,thi.ng.color.core.as_hsla.call(null,dest));
var h2 = cljs.core.nth.call(null,vec__19543,(0),null);
var s2 = cljs.core.nth.call(null,vec__19543,(1),null);
var l2 = cljs.core.nth.call(null,vec__19543,(2),null);
var a2 = cljs.core.nth.call(null,vec__19543,(3),null);
var hd = thi.ng.math.core.abs_diff.call(null,self__.h,h2);
return (new thi.ng.color.core.HSLA((((hd > 0.5))?(((h2 > self__.h))?cljs.core.rem.call(null,(function (){var a__19512__auto__ = (self__.h + (1));
return (((h2 - a__19512__auto__) * t) + a__19512__auto__);
})(),1.0):cljs.core.rem.call(null,(function (){var a__19512__auto__ = self__.h;
return ((((h2 + (1)) - a__19512__auto__) * t) + a__19512__auto__);
})(),1.0)):(function (){var a__19512__auto__ = self__.h;
return (((h2 - a__19512__auto__) * t) + a__19512__auto__);
})()),(function (){var a__19512__auto__ = self__.s;
return (((s2 - a__19512__auto__) * t) + a__19512__auto__);
})(),(function (){var a__19512__auto__ = self__.l;
return (((l2 - a__19512__auto__) * t) + a__19512__auto__);
})(),(function (){var a__19512__auto__ = self__.a;
return (((a2 - a__19512__auto__) * t) + a__19512__auto__);
})()));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICSSConvert$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var h__$1 = Math.round((self__.h * 360.0));
var s__$1 = Math.round((self__.s * 100.0));
var l__$1 = Math.round((self__.l * 100.0));
return thi.ng.color.core.css.call(null,(((self__.a < (1)))?[cljs.core.str("hsla("),cljs.core.str(h__$1),cljs.core.str(","),cljs.core.str(s__$1),cljs.core.str("%,"),cljs.core.str(l__$1),cljs.core.str("%,"),cljs.core.str(self__.a),cljs.core.str(")")].join(''):[cljs.core.str("hsl("),cljs.core.str(h__$1),cljs.core.str(","),cljs.core.str(s__$1),cljs.core.str("%,"),cljs.core.str(l__$1),cljs.core.str("%)")].join('')));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.h;
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.s;
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.l;
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IRGBConvert$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,self__.s))){
return (new thi.ng.color.core.RGBA(self__.l,self__.l,self__.l,self__.a));
} else {
var f2 = (((self__.l < 0.5))?(self__.l * (self__.s + (1))):((self__.l + self__.s) - (self__.l * self__.s)));
var f1 = ((2.0 * self__.l) - f2);
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp.call(null,thi.ng.color.core.hsl_hue.call(null,f1,f2,(self__.h + thi.ng.color.core.THIRD)),0.0,1.0),thi.ng.math.core.clamp.call(null,thi.ng.color.core.hsl_hue.call(null,f1,f2,self__.h),0.0,1.0),thi.ng.math.core.clamp.call(null,thi.ng.color.core.hsl_hue.call(null,f1,f2,(self__.h - thi.ng.color.core.THIRD)),0.0,1.0),self__.a));
}
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSVConvert$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var l2 = ((2) * self__.l);
var v = ((l2 + (self__.s * ((1) - thi.ng.math.core.abs.call(null,(l2 - (1)))))) / (2));
var s_SINGLEQUOTE_ = (((2) * (v - self__.l)) / v);
return (new thi.ng.color.core.HSVA(self__.h,s_SINGLEQUOTE_,v,self__.a));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICMYKConvert$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.l,self__.a], null);
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSLConvert$ = true;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.HSLA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
});

thi.ng.color.core.HSLA.cljs$lang$type = true;

thi.ng.color.core.HSLA.cljs$lang$ctorStr = "thi.ng.color.core/HSLA";

thi.ng.color.core.HSLA.cljs$lang$ctorPrWriter = (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"thi.ng.color.core/HSLA");
});

thi.ng.color.core.__GT_HSLA = (function thi$ng$color$core$__GT_HSLA(h,s,l,a){
return (new thi.ng.color.core.HSLA(h,s,l,a));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.color.core.Object}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.CMYKA = (function (c,m,y,k,a){
this.c = c;
this.m = m;
this.y = y;
this.k = k;
this.a = a;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
thi.ng.color.core.CMYKA.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(thi.ng.color.core.ns_prefix),cljs.core.str("CMYKA ["),cljs.core.str(self__.c),cljs.core.str(" "),cljs.core.str(self__.m),cljs.core.str(" "),cljs.core.str(self__.y),cljs.core.str(" "),cljs.core.str(self__.k),cljs.core.str(" "),cljs.core.str(self__.a),cljs.core.str("]")].join('');
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.rotate_hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1),theta));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,thi.ng.math.core.clamp.call(null,(offset + self__.a),0.0,1.0)));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.CMYKA((1.0 - self__.c),(1.0 - self__.m),(1.0 - self__.y),(1.0 - self__.k),self__.a));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$blend$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.CMYKA((function (){var a__19512__auto__ = self__.c;
return (((thi.ng.color.core.cyan.call(null,dest) - a__19512__auto__) * t) + a__19512__auto__);
})(),(function (){var a__19512__auto__ = self__.m;
return (((thi.ng.color.core.magenta.call(null,dest) - a__19512__auto__) * t) + a__19512__auto__);
})(),(function (){var a__19512__auto__ = self__.y;
return (((thi.ng.color.core.yellow.call(null,dest) - a__19512__auto__) * t) + a__19512__auto__);
})(),(function (){var a__19512__auto__ = self__.k;
return (((thi.ng.color.core.black.call(null,dest) - a__19512__auto__) * t) + a__19512__auto__);
})(),(function (){var a__19512__auto__ = self__.a;
return (((thi.ng.color.core.alpha.call(null,dest) - a__19512__auto__) * t) + a__19512__auto__);
})()));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICSSConvert$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.k;
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.y;
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.c;
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IRGBConvert$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((1.0 - (function (){var x__18613__auto__ = 1.0;
var y__18614__auto__ = (self__.c + self__.k);
return ((x__18613__auto__ < y__18614__auto__) ? x__18613__auto__ : y__18614__auto__);
})()),(1.0 - (function (){var x__18613__auto__ = 1.0;
var y__18614__auto__ = (self__.m + self__.k);
return ((x__18613__auto__ < y__18614__auto__) ? x__18613__auto__ : y__18614__auto__);
})()),(1.0 - (function (){var x__18613__auto__ = 1.0;
var y__18614__auto__ = (self__.y + self__.k);
return ((x__18613__auto__ < y__18614__auto__) ? x__18613__auto__ : y__18614__auto__);
})()),self__.a));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSVConvert$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICMYKConvert$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.c,self__.m,self__.y,self__.k,self__.a], null);
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSLConvert$ = true;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
});

thi.ng.color.core.CMYKA.cljs$lang$type = true;

thi.ng.color.core.CMYKA.cljs$lang$ctorStr = "thi.ng.color.core/CMYKA";

thi.ng.color.core.CMYKA.cljs$lang$ctorPrWriter = (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"thi.ng.color.core/CMYKA");
});

thi.ng.color.core.__GT_CMYKA = (function thi$ng$color$core$__GT_CMYKA(c,m,y,k,a){
return (new thi.ng.color.core.CMYKA(c,m,y,k,a));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.color.core.Object}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.CSS = (function (col){
this.col = col;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
thi.ng.color.core.CSS.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(thi.ng.color.core.ns_prefix),cljs.core.str("CSS [\""),cljs.core.str(self__.col),cljs.core.str("\"]")].join('');
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = thi.ng.color.core.parse_css.call(null,self__.col);
if((c instanceof thi.ng.color.core.Int24)){
return c;
} else {
return thi.ng.color.core.as_int24.call(null,c);
}
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = thi.ng.color.core.parse_css.call(null,self__.col);
if((c instanceof thi.ng.color.core.Int32)){
return c;
} else {
return thi.ng.color.core.as_int32.call(null,c);
}
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.rotate_hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1),theta));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.adjust_alpha.call(null,thi.ng.color.core.as_rgba.call(null,___$1),offset));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.invert.call(null,thi.ng.color.core.as_rgba.call(null,___$1)));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$blend$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.blend.call(null,thi.ng.color.core.as_rgba.call(null,___$1),dest,t));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICSSConvert$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,thi.ng.color.core.as_hsla.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,thi.ng.color.core.parse_css.call(null,self__.col));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.parse_css.call(null,self__.col));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,thi.ng.color.core.as_hsla.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.alpha.call(null,thi.ng.color.core.parse_css.call(null,self__.col));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IRGBConvert$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = thi.ng.color.core.parse_css.call(null,self__.col);
if((c instanceof thi.ng.color.core.RGBA)){
return c;
} else {
return thi.ng.color.core.as_rgba.call(null,c);
}
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSVConvert$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICMYKConvert$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSLConvert$ = true;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = thi.ng.color.core.parse_css.call(null,self__.col);
if((c instanceof thi.ng.color.core.HSLA)){
return c;
} else {
return thi.ng.color.core.as_hsla.call(null,c);
}
});

thi.ng.color.core.CSS.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"String","String",-2070057435,null)], null))], null);
});

thi.ng.color.core.CSS.cljs$lang$type = true;

thi.ng.color.core.CSS.cljs$lang$ctorStr = "thi.ng.color.core/CSS";

thi.ng.color.core.CSS.cljs$lang$ctorPrWriter = (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"thi.ng.color.core/CSS");
});

thi.ng.color.core.__GT_CSS = (function thi$ng$color$core$__GT_CSS(col){
return (new thi.ng.color.core.CSS(col));
});

thi.ng.color.core.proxied_color_type = (function thi$ng$color$core$proxied_color_type(to_rgba,from_rgba){
return (function thi$ng$color$core$proxied_color_type_$_ctor(col){
if(typeof thi.ng.color.core.t_thi$ng$color$core19553 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {cljs.core.IMeta}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.color.core.Object}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.t_thi$ng$color$core19553 = (function (proxied_color_type,to_rgba,from_rgba,ctor,col,meta19554){
this.proxied_color_type = proxied_color_type;
this.to_rgba = to_rgba;
this.from_rgba = from_rgba;
this.ctor = ctor;
this.col = col;
this.meta19554 = meta19554;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
thi.ng.color.core.t_thi$ng$color$core19553.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.pr_str.call(null,self__.col);
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IIntConvert$ = true;

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IColorOps$ = true;

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,self__.from_rgba.call(null,thi.ng.color.core.rotate_hue.call(null,self__.to_rgba.call(null,self__.col),theta)));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,self__.from_rgba.call(null,thi.ng.color.core.adjust_saturation.call(null,self__.to_rgba.call(null,self__.col),offset)));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,self__.from_rgba.call(null,thi.ng.color.core.adjust_brightness.call(null,self__.to_rgba.call(null,self__.col),offset)));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IColorOps$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,thi.ng.color.core.invert.call(null,self__.to_rgba.call(null,___$1)),self__.from_rgba.call(null));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IColorOps$blend$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,self__.from_rgba.call(null,thi.ng.color.core.blend.call(null,self__.to_rgba.call(null,___$1),dest,t)));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$ICSSConvert$ = true;

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IColorComponents$ = true;

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,thi.ng.color.core.as_hsla.call(null,___$1));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.alpha.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19555){
var self__ = this;
var _19555__$1 = this;
return self__.meta19554;
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IRGBConvert$ = true;

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.to_rgba.call(null,self__.col);
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IHSVConvert$ = true;

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19555,meta19554__$1){
var self__ = this;
var _19555__$1 = this;
return (new thi.ng.color.core.t_thi$ng$color$core19553(self__.proxied_color_type,self__.to_rgba,self__.from_rgba,self__.ctor,self__.col,meta19554__$1));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$ICMYKConvert$ = true;

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
});

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IHSLConvert$ = true;

thi.ng.color.core.t_thi$ng$color$core19553.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core19553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"proxied-color-type","proxied-color-type",-1113665184,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"to-rgba","to-rgba",-145176828,null),new cljs.core.Symbol(null,"from-rgba","from-rgba",2048003927,null)], null)))], null)),new cljs.core.Symbol(null,"to-rgba","to-rgba",-145176828,null),new cljs.core.Symbol(null,"from-rgba","from-rgba",2048003927,null),new cljs.core.Symbol(null,"ctor","ctor",-903570967,null),new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.Symbol(null,"meta19554","meta19554",538712978,null)], null);
});

thi.ng.color.core.t_thi$ng$color$core19553.cljs$lang$type = true;

thi.ng.color.core.t_thi$ng$color$core19553.cljs$lang$ctorStr = "thi.ng.color.core/t_thi$ng$color$core19553";

thi.ng.color.core.t_thi$ng$color$core19553.cljs$lang$ctorPrWriter = (function (this__18873__auto__,writer__18874__auto__,opt__18875__auto__){
return cljs.core._write.call(null,writer__18874__auto__,"thi.ng.color.core/t_thi$ng$color$core19553");
});

thi.ng.color.core.__GT_t_thi$ng$color$core19553 = (function thi$ng$color$core$proxied_color_type_$_ctor_$___GT_t_thi$ng$color$core19553(proxied_color_type__$1,to_rgba__$1,from_rgba__$1,ctor__$1,col__$1,meta19554){
return (new thi.ng.color.core.t_thi$ng$color$core19553(proxied_color_type__$1,to_rgba__$1,from_rgba__$1,ctor__$1,col__$1,meta19554));
});

}

return (new thi.ng.color.core.t_thi$ng$color$core19553(thi$ng$color$core$proxied_color_type,to_rgba,from_rgba,thi$ng$color$core$proxied_color_type_$_ctor,col,cljs.core.PersistentArrayMap.EMPTY));
});
});
thi.ng.color.core.rgba = (function thi$ng$color$core$rgba(var_args){
var args19556 = [];
var len__19333__auto___19561 = arguments.length;
var i__19334__auto___19562 = (0);
while(true){
if((i__19334__auto___19562 < len__19333__auto___19561)){
args19556.push((arguments[i__19334__auto___19562]));

var G__19563 = (i__19334__auto___19562 + (1));
i__19334__auto___19562 = G__19563;
continue;
} else {
}
break;
}

var G__19558 = args19556.length;
switch (G__19558) {
case 1:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19556.length)].join('')));

}
});

thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$1 = (function (p__19559){
var vec__19560 = p__19559;
var r = cljs.core.nth.call(null,vec__19560,(0),null);
var g = cljs.core.nth.call(null,vec__19560,(1),null);
var b = cljs.core.nth.call(null,vec__19560,(2),null);
var a = cljs.core.nth.call(null,vec__19560,(3),null);
return (new thi.ng.color.core.RGBA(r,g,b,(function (){var or__18275__auto__ = a;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return 1.0;
}
})()));
});

thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return (new thi.ng.color.core.RGBA(r,g,b,1.0));
});

thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return (new thi.ng.color.core.RGBA(r,g,b,a));
});

thi.ng.color.core.rgba.cljs$lang$maxFixedArity = 4;
thi.ng.color.core.int24 = (function thi$ng$color$core$int24(col){
return (new thi.ng.color.core.Int24(col));
});
thi.ng.color.core.int32 = (function thi$ng$color$core$int32(var_args){
var args19565 = [];
var len__19333__auto___19568 = arguments.length;
var i__19334__auto___19569 = (0);
while(true){
if((i__19334__auto___19569 < len__19333__auto___19568)){
args19565.push((arguments[i__19334__auto___19569]));

var G__19570 = (i__19334__auto___19569 + (1));
i__19334__auto___19569 = G__19570;
continue;
} else {
}
break;
}

var G__19567 = args19565.length;
switch (G__19567) {
case 1:
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19565.length)].join('')));

}
});

thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1 = (function (col){
return (new thi.ng.color.core.Int32(col));
});

thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$2 = (function (col,alpha){
var a = (((255) * thi.ng.math.core.clamp.call(null,alpha,0.0,1.0)) | (0));
return (new thi.ng.color.core.Int32(((col & (16777215)) | (a << (24)))));
});

thi.ng.color.core.int32.cljs$lang$maxFixedArity = 2;
thi.ng.color.core.hsva = (function thi$ng$color$core$hsva(var_args){
var args19572 = [];
var len__19333__auto___19577 = arguments.length;
var i__19334__auto___19578 = (0);
while(true){
if((i__19334__auto___19578 < len__19333__auto___19577)){
args19572.push((arguments[i__19334__auto___19578]));

var G__19579 = (i__19334__auto___19578 + (1));
i__19334__auto___19578 = G__19579;
continue;
} else {
}
break;
}

var G__19574 = args19572.length;
switch (G__19574) {
case 1:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19572.length)].join('')));

}
});

thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$1 = (function (p__19575){
var vec__19576 = p__19575;
var h = cljs.core.nth.call(null,vec__19576,(0),null);
var s = cljs.core.nth.call(null,vec__19576,(1),null);
var v = cljs.core.nth.call(null,vec__19576,(2),null);
var a = cljs.core.nth.call(null,vec__19576,(3),null);
return (new thi.ng.color.core.HSVA(h,s,v,(function (){var or__18275__auto__ = a;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return 1.0;
}
})()));
});

thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$3 = (function (h,s,v){
return (new thi.ng.color.core.HSVA(h,s,v,1.0));
});

thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4 = (function (h,s,v,a){
return (new thi.ng.color.core.HSVA(h,s,v,a));
});

thi.ng.color.core.hsva.cljs$lang$maxFixedArity = 4;
thi.ng.color.core.hsla = (function thi$ng$color$core$hsla(var_args){
var args19581 = [];
var len__19333__auto___19586 = arguments.length;
var i__19334__auto___19587 = (0);
while(true){
if((i__19334__auto___19587 < len__19333__auto___19586)){
args19581.push((arguments[i__19334__auto___19587]));

var G__19588 = (i__19334__auto___19587 + (1));
i__19334__auto___19587 = G__19588;
continue;
} else {
}
break;
}

var G__19583 = args19581.length;
switch (G__19583) {
case 1:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19581.length)].join('')));

}
});

thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$1 = (function (p__19584){
var vec__19585 = p__19584;
var h = cljs.core.nth.call(null,vec__19585,(0),null);
var s = cljs.core.nth.call(null,vec__19585,(1),null);
var l = cljs.core.nth.call(null,vec__19585,(2),null);
var a = cljs.core.nth.call(null,vec__19585,(3),null);
return (new thi.ng.color.core.HSLA(h,s,l,(function (){var or__18275__auto__ = a;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return 1.0;
}
})()));
});

thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$3 = (function (h,s,l){
return (new thi.ng.color.core.HSLA(h,s,l,1.0));
});

thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4 = (function (h,s,l,a){
return (new thi.ng.color.core.HSLA(h,s,l,a));
});

thi.ng.color.core.hsla.cljs$lang$maxFixedArity = 4;
thi.ng.color.core.cmyka = (function thi$ng$color$core$cmyka(var_args){
var args19590 = [];
var len__19333__auto___19595 = arguments.length;
var i__19334__auto___19596 = (0);
while(true){
if((i__19334__auto___19596 < len__19333__auto___19595)){
args19590.push((arguments[i__19334__auto___19596]));

var G__19597 = (i__19334__auto___19596 + (1));
i__19334__auto___19596 = G__19597;
continue;
} else {
}
break;
}

var G__19592 = args19590.length;
switch (G__19592) {
case 1:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19590.length)].join('')));

}
});

thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$1 = (function (p__19593){
var vec__19594 = p__19593;
var c = cljs.core.nth.call(null,vec__19594,(0),null);
var m = cljs.core.nth.call(null,vec__19594,(1),null);
var y = cljs.core.nth.call(null,vec__19594,(2),null);
var k = cljs.core.nth.call(null,vec__19594,(3),null);
var a = cljs.core.nth.call(null,vec__19594,(4),null);
return (new thi.ng.color.core.CMYKA(c,m,y,k,(function (){var or__18275__auto__ = a;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return 1.0;
}
})()));
});

thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$4 = (function (c,m,y,k){
return (new thi.ng.color.core.CMYKA(c,m,y,k,1.0));
});

thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5 = (function (c,m,y,k,a){
return (new thi.ng.color.core.CMYKA(c,m,y,k,a));
});

thi.ng.color.core.cmyka.cljs$lang$maxFixedArity = 5;
thi.ng.color.core.css = (function thi$ng$color$core$css(col){
return (new thi.ng.color.core.CSS(col));
});
/**
 * Returns a random RGBA color with 100% alpha
 */
thi.ng.color.core.random_rgb = (function thi$ng$color$core$random_rgb(){
return thi.ng.color.core.rgba.call(null,thi.ng.math.core.random.call(null),thi.ng.math.core.random.call(null),thi.ng.math.core.random.call(null),1.0);
});
thi.ng.color.core.RED = thi.ng.color.core.rgba.call(null,(1),(0),(0),(1));
thi.ng.color.core.GREEN = thi.ng.color.core.rgba.call(null,(0),(1),(0),(1));
thi.ng.color.core.BLUE = thi.ng.color.core.rgba.call(null,(0),(0),(1),(1));
thi.ng.color.core.CYAN = thi.ng.color.core.rgba.call(null,(0),(1),(1),(1));
thi.ng.color.core.MAGENTA = thi.ng.color.core.rgba.call(null,(1),(0),(1),(1));
thi.ng.color.core.YELLOW = thi.ng.color.core.rgba.call(null,(1),(1),(0),(1));
thi.ng.color.core.BLACK = thi.ng.color.core.rgba.call(null,(0),(0),(0),(1));
thi.ng.color.core.WHITE = thi.ng.color.core.rgba.call(null,(1),(1),(1),(1));
thi.ng.color.core.GRAY = thi.ng.color.core.rgba.call(null,0.5,0.5,0.5,(1));
thi.ng.color.core.hsl_hue = (function thi$ng$color$core$hsl_hue(f1,f2,h){
var h__$1 = (((h < (0)))?(h + (1)):(((h >= 1.0))?(h - (1)):h));
if((h__$1 < thi.ng.color.core.SIXTH)){
return thi.ng.math.core.mix.call(null,f1,f2,(6.0 * h__$1));
} else {
if((h__$1 < 0.5)){
return f2;
} else {
if((h__$1 < thi.ng.color.core.TWO_THIRD)){
return thi.ng.math.core.mix.call(null,f1,f2,((thi.ng.color.core.TWO_THIRD - h__$1) * 6.0));
} else {
return f1;

}
}
}
});
thi.ng.color.core.hue__GT_rgb = (function thi$ng$color$core$hue__GT_rgb(h){
var h__$1 = cljs.core.mod.call(null,(6.0 * h),6.0);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp.call(null,(thi.ng.math.core.abs.call(null,(h__$1 - 3.0)) - (1)),0.0,1.0),thi.ng.math.core.clamp.call(null,(2.0 - thi.ng.math.core.abs.call(null,(h__$1 - 2.0))),0.0,1.0),thi.ng.math.core.clamp.call(null,(2.0 - thi.ng.math.core.abs.call(null,(h__$1 - 4.0))),0.0,1.0)], null);
});
thi.ng.color.core.rgba__GT_hcva = (function thi$ng$color$core$rgba__GT_hcva(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
var vec__19601 = (((g < b))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,g,-1.0,thi.ng.color.core.TWO_THIRD], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,b,0.0,(- thi.ng.color.core.THIRD)], null));
var px = cljs.core.nth.call(null,vec__19601,(0),null);
var py = cljs.core.nth.call(null,vec__19601,(1),null);
var pz = cljs.core.nth.call(null,vec__19601,(2),null);
var pw = cljs.core.nth.call(null,vec__19601,(3),null);
var vec__19602 = (((r < px))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py,pw,r], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,py,pz,px], null));
var qx = cljs.core.nth.call(null,vec__19602,(0),null);
var qy = cljs.core.nth.call(null,vec__19602,(1),null);
var qz = cljs.core.nth.call(null,vec__19602,(2),null);
var qw = cljs.core.nth.call(null,vec__19602,(3),null);
var c = (qx - (function (){var x__18613__auto__ = qw;
var y__18614__auto__ = qy;
return ((x__18613__auto__ < y__18614__auto__) ? x__18613__auto__ : y__18614__auto__);
})());
var h = thi.ng.math.core.abs.call(null,(((qw - qy) / ((6.0 * c) + 1.0E-10)) + qz));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp.call(null,h,0.0,1.0),thi.ng.math.core.clamp.call(null,c,0.0,1.0),thi.ng.math.core.clamp.call(null,qx,0.0,1.0),a], null);
});
thi.ng.color.core.rgba__GT_hcya = (function thi$ng$color$core$rgba__GT_hcya(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var vec__19605 = thi.ng.color.core.rgba__GT_hcva.call(null,rgba);
var h = cljs.core.nth.call(null,vec__19605,(0),null);
var c = cljs.core.nth.call(null,vec__19605,(1),null);
var v = cljs.core.nth.call(null,vec__19605,(2),null);
var a = cljs.core.nth.call(null,vec__19605,(3),null);
var y = (((0.299 * r) + (0.587 * g)) + (0.114 * b));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,c))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,c,y,a], null);
} else {
var vec__19606 = thi.ng.color.core.hue__GT_rgb.call(null,h);
var r_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__19606,(0),null);
var g_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__19606,(1),null);
var b_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__19606,(2),null);
var z = (((0.299 * r_SINGLEQUOTE_) + (0.587 * g_SINGLEQUOTE_)) + (0.114 * b_SINGLEQUOTE_));
if(((y - z) > 1.0E-5)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,thi.ng.math.core.clamp.call(null,(c * ((1.0 - z) / (1.0 - y))),0.0,1.0),y,a], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,thi.ng.math.core.clamp.call(null,(c * (z / y)),0.0,1.0),y,a], null);
}
}
});
thi.ng.color.core.hcya__GT_rgba = (function thi$ng$color$core$hcya__GT_rgba(var_args){
var args19607 = [];
var len__19333__auto___19611 = arguments.length;
var i__19334__auto___19612 = (0);
while(true){
if((i__19334__auto___19612 < len__19333__auto___19611)){
args19607.push((arguments[i__19334__auto___19612]));

var G__19613 = (i__19334__auto___19612 + (1));
i__19334__auto___19612 = G__19613;
continue;
} else {
}
break;
}

var G__19609 = args19607.length;
switch (G__19609) {
case 1:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19607.length)].join('')));

}
});

thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (hcya){
return cljs.core.apply.call(null,thi.ng.color.core.hcya__GT_rgba,hcya);
});

thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (h,c,y){
return thi.ng.color.core.hcya__GT_rgba.call(null,h,c,y,1.0);
});

thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (h,c,y,a){
var vec__19610 = thi.ng.color.core.hue__GT_rgb.call(null,h);
var r = cljs.core.nth.call(null,vec__19610,(0),null);
var g = cljs.core.nth.call(null,vec__19610,(1),null);
var b = cljs.core.nth.call(null,vec__19610,(2),null);
var z = (((0.299 * r) + (0.587 * g)) + (0.114 * b));
var c_SINGLEQUOTE_ = (((y < z))?(c * (y / z)):(((z < 1.0))?(c * ((1.0 - y) / (1.0 - z))):c));
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp.call(null,(((r - z) * c_SINGLEQUOTE_) + y),0.0,1.0),thi.ng.math.core.clamp.call(null,(((g - z) * c_SINGLEQUOTE_) + y),0.0,1.0),thi.ng.math.core.clamp.call(null,(((b - z) * c_SINGLEQUOTE_) + y),0.0,1.0),a));
});

thi.ng.color.core.hcya__GT_rgba.cljs$lang$maxFixedArity = 4;
thi.ng.color.core.ycbcra__GT_rgba = (function thi$ng$color$core$ycbcra__GT_rgba(var_args){
var args19615 = [];
var len__19333__auto___19618 = arguments.length;
var i__19334__auto___19619 = (0);
while(true){
if((i__19334__auto___19619 < len__19333__auto___19618)){
args19615.push((arguments[i__19334__auto___19619]));

var G__19620 = (i__19334__auto___19619 + (1));
i__19334__auto___19619 = G__19620;
continue;
} else {
}
break;
}

var G__19617 = args19615.length;
switch (G__19617) {
case 1:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19615.length)].join('')));

}
});

thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (ycbcra){
return cljs.core.apply.call(null,thi.ng.color.core.ycbcra__GT_rgba,ycbcra);
});

thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (y,cb,cr){
return thi.ng.color.core.ycbcra__GT_rgba.call(null,y,cb,cr,1.0);
});

thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (y,cb,cr,a){
var cb_SINGLEQUOTE_ = (cb - 0.5);
var cr_SINGLEQUOTE_ = (cr - 0.5);
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp.call(null,((cr_SINGLEQUOTE_ * 1.402) + y),0.0,1.0),thi.ng.math.core.clamp.call(null,(y - ((cb_SINGLEQUOTE_ * 0.34414) + (cr_SINGLEQUOTE_ * 0.71414))),0.0,1.0),thi.ng.math.core.clamp.call(null,((cb_SINGLEQUOTE_ * 1.772) + y),0.0,1.0),a));
});

thi.ng.color.core.ycbcra__GT_rgba.cljs$lang$maxFixedArity = 4;
thi.ng.color.core.rgba__GT_ycbcra = (function thi$ng$color$core$rgba__GT_ycbcra(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp.call(null,(((0.299 * r) + (0.587 * g)) + (0.114 * b)),0.0,1.0),thi.ng.math.core.clamp.call(null,(((0.5 - (0.16874 * r)) - (0.33126 * g)) + (0.5 * b)),0.0,1.0),thi.ng.math.core.clamp.call(null,(((0.5 + (0.5 * r)) - (0.418688 * g)) - (0.081312 * b)),0.0,1.0)], null);
});
thi.ng.color.core.rgba__GT_yuva = (function thi$ng$color$core$rgba__GT_yuva(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((0.299 * r) + (0.587 * g)) + (0.114 * b)),(((-0.1473 * r) + (-0.28886 * g)) + (0.436 * b)),(((0.615 * r) + (-0.51499 * g)) + (-0.10001 * b)),a], null);
});
thi.ng.color.core.yuva__GT_rgba = (function thi$ng$color$core$yuva__GT_rgba(var_args){
var args19622 = [];
var len__19333__auto___19625 = arguments.length;
var i__19334__auto___19626 = (0);
while(true){
if((i__19334__auto___19626 < len__19333__auto___19625)){
args19622.push((arguments[i__19334__auto___19626]));

var G__19627 = (i__19334__auto___19626 + (1));
i__19334__auto___19626 = G__19627;
continue;
} else {
}
break;
}

var G__19624 = args19622.length;
switch (G__19624) {
case 1:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19622.length)].join('')));

}
});

thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (yuva){
return cljs.core.apply.call(null,thi.ng.color.core.yuva__GT_rgba,yuva);
});

thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (y,u,v){
return thi.ng.color.core.yuva__GT_rgba.call(null,y,u,v,1.0);
});

thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (y,u,v,a){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp.call(null,((1.13983 * v) + y),0.0,1.0),thi.ng.math.core.clamp.call(null,(y - ((0.39465 * u) + (0.5806 * v))),0.0,1.0),thi.ng.math.core.clamp.call(null,((2.03211 * u) + y),0.0,1.0),a], null);
});

thi.ng.color.core.yuva__GT_rgba.cljs$lang$maxFixedArity = 4;
thi.ng.color.core.cie1931_gamma_correct = (function thi$ng$color$core$cie1931_gamma_correct(x){
return thi.ng.math.core.clamp.call(null,(((x < 0.0031308))?(12.92 * x):((1.055 * Math.pow(x,((1) / 2.4))) - 0.055)),0.0,1.0);
});
thi.ng.color.core.cie1931__GT_rgb = (function thi$ng$color$core$cie1931__GT_rgb(var_args){
var args19629 = [];
var len__19333__auto___19632 = arguments.length;
var i__19334__auto___19633 = (0);
while(true){
if((i__19334__auto___19633 < len__19333__auto___19632)){
args19629.push((arguments[i__19334__auto___19633]));

var G__19634 = (i__19334__auto___19633 + (1));
i__19334__auto___19633 = G__19634;
continue;
} else {
}
break;
}

var G__19631 = args19629.length;
switch (G__19631) {
case 1:
return thi.ng.color.core.cie1931__GT_rgb.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.cie1931__GT_rgb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.cie1931__GT_rgb.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19629.length)].join('')));

}
});

thi.ng.color.core.cie1931__GT_rgb.cljs$core$IFn$_invoke$arity$1 = (function (xyz){
return cljs.core.apply.call(null,thi.ng.color.core.cie1931__GT_rgb,xyz);
});

thi.ng.color.core.cie1931__GT_rgb.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return thi.ng.color.core.cie1931__GT_rgb.call(null,x,y,z,1.0);
});

thi.ng.color.core.cie1931__GT_rgb.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,a){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.color.core.cie1931_gamma_correct.call(null,(((3.2406 * x) + (-1.5372 * y)) + (-0.4986 * z))),thi.ng.color.core.cie1931_gamma_correct.call(null,(((-0.9689 * x) + (1.8758 * y)) + (0.0415 * z))),thi.ng.color.core.cie1931_gamma_correct.call(null,(((0.0557 * x) + (-0.204 * y)) + (1.057 * z))),a], null);
});

thi.ng.color.core.cie1931__GT_rgb.cljs$lang$maxFixedArity = 4;
thi.ng.color.core.hex__GT_int = (function thi$ng$color$core$hex__GT_int(hex){
var hex__$1 = ((cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,hex)))?cljs.core.subs.call(null,hex,(1)):hex);
var len = cljs.core.count.call(null,hex__$1);
if(((3) === len)){
var vec__19637 = hex__$1;
var r = cljs.core.nth.call(null,vec__19637,(0),null);
var g = cljs.core.nth.call(null,vec__19637,(1),null);
var b = cljs.core.nth.call(null,vec__19637,(2),null);
return thi.ng.color.core.int24.call(null,thi.ng.strf.core.parse_int.call(null,[cljs.core.str(r),cljs.core.str(r),cljs.core.str(g),cljs.core.str(g),cljs.core.str(b),cljs.core.str(b)].join(''),(16),(0)));
} else {
if((len < (7))){
return thi.ng.color.core.int24.call(null,thi.ng.strf.core.parse_int.call(null,hex__$1,(16),(0)));
} else {
return thi.ng.color.core.int32.call(null,thi.ng.strf.core.parse_int.call(null,hex__$1,(16),(0)));
}
}
});
thi.ng.color.core.parse_channel_val = (function thi$ng$color$core$parse_channel_val(c){
if((c.indexOf("%") > (0))){
return (0.01 * thi.ng.strf.core.parse_float.call(null,cljs.core.subs.call(null,c,(0),(cljs.core.count.call(null,c) - (1)))));
} else {
return (thi.ng.color.core.INV8BIT * thi.ng.strf.core.parse_int.call(null,c,(10),(0)));
}
});
thi.ng.color.core.parse_css = (function thi$ng$color$core$parse_css(col){
if(cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,col))){
return thi.ng.color.core.hex__GT_int.call(null,col);
} else {
var vec__19640 = cljs.core.re_seq.call(null,/(rgb|hsl)a?\((\d+%?),(\d+%?),(\d+%?),?([0-9\.]+)?\)/,col);
var vec__19641 = cljs.core.nth.call(null,vec__19640,(0),null);
var _ = cljs.core.nth.call(null,vec__19641,(0),null);
var mode = cljs.core.nth.call(null,vec__19641,(1),null);
var a = cljs.core.nth.call(null,vec__19641,(2),null);
var b = cljs.core.nth.call(null,vec__19641,(3),null);
var c = cljs.core.nth.call(null,vec__19641,(4),null);
var d = cljs.core.nth.call(null,vec__19641,(5),null);
if(cljs.core.truth_(mode)){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["rgba",null,"rgb",null], null), null).call(null,mode))){
return (new thi.ng.color.core.RGBA(thi.ng.color.core.parse_channel_val.call(null,a),thi.ng.color.core.parse_channel_val.call(null,b),thi.ng.color.core.parse_channel_val.call(null,c),thi.ng.strf.core.parse_float.call(null,d,1.0)));
} else {
return thi.ng.color.core.as_rgba.call(null,(new thi.ng.color.core.HSLA((thi.ng.strf.core.parse_float.call(null,a) / 360.0),thi.ng.color.core.parse_channel_val.call(null,b),thi.ng.color.core.parse_channel_val.call(null,c),thi.ng.strf.core.parse_float.call(null,d,1.0))));
}
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,col);
}
}
});
thi.ng.color.core.hcya = thi.ng.color.core.proxied_color_type.call(null,thi.ng.color.core.hcya__GT_rgba,thi.ng.color.core.rgba__GT_hcya);
thi.ng.color.core.yuva = thi.ng.color.core.proxied_color_type.call(null,thi.ng.color.core.yuva__GT_rgba,thi.ng.color.core.rgba__GT_yuva);
thi.ng.color.core.ycbcra = thi.ng.color.core.proxied_color_type.call(null,thi.ng.color.core.ycbcra__GT_rgba,thi.ng.color.core.rgba__GT_ycbcra);
thi.ng.color.core.cie1931 = thi.ng.color.core.proxied_color_type.call(null,thi.ng.color.core.cie1931__GT_rgb,thi.ng.xerror.core.unsupported_BANG_);
thi.ng.color.core.hues = cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"lime","lime",-1796425088),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"teal","teal",1231496088),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"azure","azure",1864287702),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null),cljs.core.map.call(null,(function (p1__19642_SHARP_){
return (p1__19642_SHARP_ / 360.0);
}),cljs.core.range.call(null,(0),(360),(30))));
thi.ng.color.core.primary_hues = cljs.core.select_keys.call(null,thi.ng.color.core.hues,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null));
/**
 * Takes a color and map of hues (e.g. thi.ng.color.core.primary-hues),
 *   returns key of closest hue.
 */
thi.ng.color.core.closest_hue = (function thi$ng$color$core$closest_hue(var_args){
var args19643 = [];
var len__19333__auto___19650 = arguments.length;
var i__19334__auto___19651 = (0);
while(true){
if((i__19334__auto___19651 < len__19333__auto___19650)){
args19643.push((arguments[i__19334__auto___19651]));

var G__19652 = (i__19334__auto___19651 + (1));
i__19334__auto___19651 = G__19652;
continue;
} else {
}
break;
}

var G__19645 = args19643.length;
switch (G__19645) {
case 1:
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19643.length)].join('')));

}
});

thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$1 = (function (col){
return thi.ng.color.core.closest_hue.call(null,col,thi.ng.color.core.hues);
});

thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2 = (function (col,hues){
var h = thi.ng.color.core.hue.call(null,col);
return cljs.core.first.call(null,cljs.core.reduce.call(null,((function (h){
return (function (p__19646,p__19647){
var vec__19648 = p__19646;
var h_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__19648,(0),null);
var d_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__19648,(1),null);
var vec__19649 = p__19647;
var k = cljs.core.nth.call(null,vec__19649,(0),null);
var v = cljs.core.nth.call(null,vec__19649,(1),null);
var d = (function (){var x__18613__auto__ = thi.ng.math.core.abs_diff.call(null,h,v);
var y__18614__auto__ = thi.ng.math.core.abs_diff.call(null,(h - (1)),v);
return ((x__18613__auto__ < y__18614__auto__) ? x__18613__auto__ : y__18614__auto__);
})();
if((d < d_SINGLEQUOTE_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,d], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_SINGLEQUOTE_,d_SINGLEQUOTE_], null);
}
});})(h))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,1000000.0], null),hues));
});

thi.ng.color.core.closest_hue.cljs$lang$maxFixedArity = 2;
/**
 * Returns gamma corrected version of color as RGBA
 */
thi.ng.color.core.gamma_correct = (function thi$ng$color$core$gamma_correct(col,gamma){
var col__$1 = thi.ng.color.core.as_rgba.call(null,col);
return (new thi.ng.color.core.RGBA(Math.pow(col__$1.r,gamma),Math.pow(col__$1.g,gamma),Math.pow(col__$1.b,gamma),col__$1.a));
});
/**
 * Returns new color of same type with its hue rotated by 180 degrees.
 */
thi.ng.color.core.complementary = (function thi$ng$color$core$complementary(col){
return thi.ng.color.core.rotate_hue.call(null,col,thi.ng.math.core.PI);
});
/**
 * Returns new color of same type with its hue rotated and adjusted
 *   saturation & brightness.
 */
thi.ng.color.core.analog = (function thi$ng$color$core$analog(col,theta,sat,bright){
return thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.rotate_hue.call(null,col,theta),sat),bright);
});
/**
 * Returns new color of same type with its hue rotated and adjusted
 *   saturation & brightness within given tolerances (+/-).
 */
thi.ng.color.core.random_analog = (function thi$ng$color$core$random_analog(col,theta,sat,bright){
return thi.ng.color.core.analog.call(null,col,(thi.ng.math.core.randnorm.call(null) * theta),(thi.ng.math.core.randnorm.call(null) * sat),(thi.ng.math.core.randnorm.call(null) * bright));
});
/**
 * Returns RGB distance of any two colors
 */
thi.ng.color.core.dist_rgb = (function thi$ng$color$core$dist_rgb(a,b){
var vec__19656 = cljs.core.deref.call(null,thi.ng.color.core.as_rgba.call(null,a));
var ra = cljs.core.nth.call(null,vec__19656,(0),null);
var ga = cljs.core.nth.call(null,vec__19656,(1),null);
var ba = cljs.core.nth.call(null,vec__19656,(2),null);
var vec__19657 = cljs.core.deref.call(null,thi.ng.color.core.as_rgba.call(null,b));
var rb = cljs.core.nth.call(null,vec__19657,(0),null);
var gb = cljs.core.nth.call(null,vec__19657,(1),null);
var bb = cljs.core.nth.call(null,vec__19657,(2),null);
var dr = (ra - rb);
var dg = (ga - gb);
var db = (ba - bb);
return Math.sqrt((((dr * dr) + (dg * dg)) + (db * db)));
});
/**
 * Returns HSV distance of any two colors
 */
thi.ng.color.core.dist_hsv = (function thi$ng$color$core$dist_hsv(a,b){
var vec__19660 = cljs.core.deref.call(null,thi.ng.color.core.as_hsva.call(null,a));
var ha = cljs.core.nth.call(null,vec__19660,(0),null);
var sa = cljs.core.nth.call(null,vec__19660,(1),null);
var va = cljs.core.nth.call(null,vec__19660,(2),null);
var vec__19661 = cljs.core.deref.call(null,thi.ng.color.core.as_hsva.call(null,b));
var hb = cljs.core.nth.call(null,vec__19661,(0),null);
var sb = cljs.core.nth.call(null,vec__19661,(1),null);
var vb = cljs.core.nth.call(null,vec__19661,(2),null);
var ha__$1 = (thi.ng.math.core.TWO_PI * ha);
var hb__$1 = (thi.ng.math.core.TWO_PI * hb);
var dh = ((sa * Math.cos(ha__$1)) - (sb * Math.cos(hb__$1)));
var ds = ((sa * Math.sin(ha__$1)) - (sb * Math.sin(hb__$1)));
var dv = (va - vb);
return Math.sqrt((((dh * dh) + (ds * ds)) + (dv * dv)));
});

//# sourceMappingURL=core.js.map