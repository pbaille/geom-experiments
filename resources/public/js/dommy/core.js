// Compiled by ClojureScript 1.7.228 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__18275__auto__ = elem.textContent;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args20013 = [];
var len__19333__auto___20016 = arguments.length;
var i__19334__auto___20017 = (0);
while(true){
if((i__19334__auto___20017 < len__19333__auto___20016)){
args20013.push((arguments[i__19334__auto___20017]));

var G__20018 = (i__19334__auto___20017 + (1));
i__19334__auto___20017 = G__20018;
continue;
} else {
}
break;
}

var G__20015 = args20013.length;
switch (G__20015) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20013.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;
dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args20020 = [];
var len__19333__auto___20023 = arguments.length;
var i__19334__auto___20024 = (0);
while(true){
if((i__19334__auto___20024 < len__19333__auto___20023)){
args20020.push((arguments[i__19334__auto___20024]));

var G__20025 = (i__19334__auto___20024 + (1));
i__19334__auto___20024 = G__20025;
continue;
} else {
}
break;
}

var G__20022 = args20020.length;
switch (G__20022) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20020.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args20028 = [];
var len__19333__auto___20031 = arguments.length;
var i__19334__auto___20032 = (0);
while(true){
if((i__19334__auto___20032 < len__19333__auto___20031)){
args20028.push((arguments[i__19334__auto___20032]));

var G__20033 = (i__19334__auto___20032 + (1));
i__19334__auto___20032 = G__20033;
continue;
} else {
}
break;
}

var G__20030 = args20028.length;
switch (G__20030) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20028.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__20027_SHARP_){
return !((p1__20027_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;
/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20043 = arguments.length;
var i__19334__auto___20044 = (0);
while(true){
if((i__19334__auto___20044 < len__19333__auto___20043)){
args__19340__auto__.push((arguments[i__19334__auto___20044]));

var G__20045 = (i__19334__auto___20044 + (1));
i__19334__auto___20044 = G__20045;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((1) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19341__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__20037_20046 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__20038_20047 = null;
var count__20039_20048 = (0);
var i__20040_20049 = (0);
while(true){
if((i__20040_20049 < count__20039_20048)){
var vec__20041_20050 = cljs.core._nth.call(null,chunk__20038_20047,i__20040_20049);
var k_20051 = cljs.core.nth.call(null,vec__20041_20050,(0),null);
var v_20052 = cljs.core.nth.call(null,vec__20041_20050,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_20051),v_20052);

var G__20053 = seq__20037_20046;
var G__20054 = chunk__20038_20047;
var G__20055 = count__20039_20048;
var G__20056 = (i__20040_20049 + (1));
seq__20037_20046 = G__20053;
chunk__20038_20047 = G__20054;
count__20039_20048 = G__20055;
i__20040_20049 = G__20056;
continue;
} else {
var temp__4657__auto___20057 = cljs.core.seq.call(null,seq__20037_20046);
if(temp__4657__auto___20057){
var seq__20037_20058__$1 = temp__4657__auto___20057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20037_20058__$1)){
var c__19078__auto___20059 = cljs.core.chunk_first.call(null,seq__20037_20058__$1);
var G__20060 = cljs.core.chunk_rest.call(null,seq__20037_20058__$1);
var G__20061 = c__19078__auto___20059;
var G__20062 = cljs.core.count.call(null,c__19078__auto___20059);
var G__20063 = (0);
seq__20037_20046 = G__20060;
chunk__20038_20047 = G__20061;
count__20039_20048 = G__20062;
i__20040_20049 = G__20063;
continue;
} else {
var vec__20042_20064 = cljs.core.first.call(null,seq__20037_20058__$1);
var k_20065 = cljs.core.nth.call(null,vec__20042_20064,(0),null);
var v_20066 = cljs.core.nth.call(null,vec__20042_20064,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_20065),v_20066);

var G__20067 = cljs.core.next.call(null,seq__20037_20058__$1);
var G__20068 = null;
var G__20069 = (0);
var G__20070 = (0);
seq__20037_20046 = G__20067;
chunk__20038_20047 = G__20068;
count__20039_20048 = G__20069;
i__20040_20049 = G__20070;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq20035){
var G__20036 = cljs.core.first.call(null,seq20035);
var seq20035__$1 = cljs.core.next.call(null,seq20035);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20036,seq20035__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20077 = arguments.length;
var i__19334__auto___20078 = (0);
while(true){
if((i__19334__auto___20078 < len__19333__auto___20077)){
args__19340__auto__.push((arguments[i__19334__auto___20078]));

var G__20079 = (i__19334__auto___20078 + (1));
i__19334__auto___20078 = G__20079;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((1) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((1)),(0))):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19341__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__20073_20080 = cljs.core.seq.call(null,keywords);
var chunk__20074_20081 = null;
var count__20075_20082 = (0);
var i__20076_20083 = (0);
while(true){
if((i__20076_20083 < count__20075_20082)){
var kw_20084 = cljs.core._nth.call(null,chunk__20074_20081,i__20076_20083);
style.removeProperty(dommy.utils.as_str.call(null,kw_20084));

var G__20085 = seq__20073_20080;
var G__20086 = chunk__20074_20081;
var G__20087 = count__20075_20082;
var G__20088 = (i__20076_20083 + (1));
seq__20073_20080 = G__20085;
chunk__20074_20081 = G__20086;
count__20075_20082 = G__20087;
i__20076_20083 = G__20088;
continue;
} else {
var temp__4657__auto___20089 = cljs.core.seq.call(null,seq__20073_20080);
if(temp__4657__auto___20089){
var seq__20073_20090__$1 = temp__4657__auto___20089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20073_20090__$1)){
var c__19078__auto___20091 = cljs.core.chunk_first.call(null,seq__20073_20090__$1);
var G__20092 = cljs.core.chunk_rest.call(null,seq__20073_20090__$1);
var G__20093 = c__19078__auto___20091;
var G__20094 = cljs.core.count.call(null,c__19078__auto___20091);
var G__20095 = (0);
seq__20073_20080 = G__20092;
chunk__20074_20081 = G__20093;
count__20075_20082 = G__20094;
i__20076_20083 = G__20095;
continue;
} else {
var kw_20096 = cljs.core.first.call(null,seq__20073_20090__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_20096));

var G__20097 = cljs.core.next.call(null,seq__20073_20090__$1);
var G__20098 = null;
var G__20099 = (0);
var G__20100 = (0);
seq__20073_20080 = G__20097;
chunk__20074_20081 = G__20098;
count__20075_20082 = G__20099;
i__20076_20083 = G__20100;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq20071){
var G__20072 = cljs.core.first.call(null,seq20071);
var seq20071__$1 = cljs.core.next.call(null,seq20071);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20072,seq20071__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20109 = arguments.length;
var i__19334__auto___20110 = (0);
while(true){
if((i__19334__auto___20110 < len__19333__auto___20109)){
args__19340__auto__.push((arguments[i__19334__auto___20110]));

var G__20111 = (i__19334__auto___20110 + (1));
i__19334__auto___20110 = G__20111;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((1) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19341__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__20103_20112 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__20104_20113 = null;
var count__20105_20114 = (0);
var i__20106_20115 = (0);
while(true){
if((i__20106_20115 < count__20105_20114)){
var vec__20107_20116 = cljs.core._nth.call(null,chunk__20104_20113,i__20106_20115);
var k_20117 = cljs.core.nth.call(null,vec__20107_20116,(0),null);
var v_20118 = cljs.core.nth.call(null,vec__20107_20116,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_20117,[cljs.core.str(v_20118),cljs.core.str("px")].join(''));

var G__20119 = seq__20103_20112;
var G__20120 = chunk__20104_20113;
var G__20121 = count__20105_20114;
var G__20122 = (i__20106_20115 + (1));
seq__20103_20112 = G__20119;
chunk__20104_20113 = G__20120;
count__20105_20114 = G__20121;
i__20106_20115 = G__20122;
continue;
} else {
var temp__4657__auto___20123 = cljs.core.seq.call(null,seq__20103_20112);
if(temp__4657__auto___20123){
var seq__20103_20124__$1 = temp__4657__auto___20123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20103_20124__$1)){
var c__19078__auto___20125 = cljs.core.chunk_first.call(null,seq__20103_20124__$1);
var G__20126 = cljs.core.chunk_rest.call(null,seq__20103_20124__$1);
var G__20127 = c__19078__auto___20125;
var G__20128 = cljs.core.count.call(null,c__19078__auto___20125);
var G__20129 = (0);
seq__20103_20112 = G__20126;
chunk__20104_20113 = G__20127;
count__20105_20114 = G__20128;
i__20106_20115 = G__20129;
continue;
} else {
var vec__20108_20130 = cljs.core.first.call(null,seq__20103_20124__$1);
var k_20131 = cljs.core.nth.call(null,vec__20108_20130,(0),null);
var v_20132 = cljs.core.nth.call(null,vec__20108_20130,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_20131,[cljs.core.str(v_20132),cljs.core.str("px")].join(''));

var G__20133 = cljs.core.next.call(null,seq__20103_20124__$1);
var G__20134 = null;
var G__20135 = (0);
var G__20136 = (0);
seq__20103_20112 = G__20133;
chunk__20104_20113 = G__20134;
count__20105_20114 = G__20135;
i__20106_20115 = G__20136;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq20101){
var G__20102 = cljs.core.first.call(null,seq20101);
var seq20101__$1 = cljs.core.next.call(null,seq20101);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20102,seq20101__$1);
});
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args20137 = [];
var len__19333__auto___20152 = arguments.length;
var i__19334__auto___20153 = (0);
while(true){
if((i__19334__auto___20153 < len__19333__auto___20152)){
args20137.push((arguments[i__19334__auto___20153]));

var G__20154 = (i__19334__auto___20153 + (1));
i__19334__auto___20153 = G__20154;
continue;
} else {
}
break;
}

var G__20143 = args20137.length;
switch (G__20143) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19352__auto__ = (new cljs.core.IndexedSeq(args20137.slice((3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19352__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__20144 = elem;
(G__20144[k__$1] = v);

return G__20144;
} else {
var G__20145 = elem;
G__20145.setAttribute(k__$1,v);

return G__20145;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__20146_20156 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__20147_20157 = null;
var count__20148_20158 = (0);
var i__20149_20159 = (0);
while(true){
if((i__20149_20159 < count__20148_20158)){
var vec__20150_20160 = cljs.core._nth.call(null,chunk__20147_20157,i__20149_20159);
var k_20161__$1 = cljs.core.nth.call(null,vec__20150_20160,(0),null);
var v_20162__$1 = cljs.core.nth.call(null,vec__20150_20160,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_20161__$1,v_20162__$1);

var G__20163 = seq__20146_20156;
var G__20164 = chunk__20147_20157;
var G__20165 = count__20148_20158;
var G__20166 = (i__20149_20159 + (1));
seq__20146_20156 = G__20163;
chunk__20147_20157 = G__20164;
count__20148_20158 = G__20165;
i__20149_20159 = G__20166;
continue;
} else {
var temp__4657__auto___20167 = cljs.core.seq.call(null,seq__20146_20156);
if(temp__4657__auto___20167){
var seq__20146_20168__$1 = temp__4657__auto___20167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20146_20168__$1)){
var c__19078__auto___20169 = cljs.core.chunk_first.call(null,seq__20146_20168__$1);
var G__20170 = cljs.core.chunk_rest.call(null,seq__20146_20168__$1);
var G__20171 = c__19078__auto___20169;
var G__20172 = cljs.core.count.call(null,c__19078__auto___20169);
var G__20173 = (0);
seq__20146_20156 = G__20170;
chunk__20147_20157 = G__20171;
count__20148_20158 = G__20172;
i__20149_20159 = G__20173;
continue;
} else {
var vec__20151_20174 = cljs.core.first.call(null,seq__20146_20168__$1);
var k_20175__$1 = cljs.core.nth.call(null,vec__20151_20174,(0),null);
var v_20176__$1 = cljs.core.nth.call(null,vec__20151_20174,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_20175__$1,v_20176__$1);

var G__20177 = cljs.core.next.call(null,seq__20146_20168__$1);
var G__20178 = null;
var G__20179 = (0);
var G__20180 = (0);
seq__20146_20156 = G__20177;
chunk__20147_20157 = G__20178;
count__20148_20158 = G__20179;
i__20149_20159 = G__20180;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq20138){
var G__20139 = cljs.core.first.call(null,seq20138);
var seq20138__$1 = cljs.core.next.call(null,seq20138);
var G__20140 = cljs.core.first.call(null,seq20138__$1);
var seq20138__$2 = cljs.core.next.call(null,seq20138__$1);
var G__20141 = cljs.core.first.call(null,seq20138__$2);
var seq20138__$3 = cljs.core.next.call(null,seq20138__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20139,G__20140,G__20141,seq20138__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args20181 = [];
var len__19333__auto___20191 = arguments.length;
var i__19334__auto___20192 = (0);
while(true){
if((i__19334__auto___20192 < len__19333__auto___20191)){
args20181.push((arguments[i__19334__auto___20192]));

var G__20193 = (i__19334__auto___20192 + (1));
i__19334__auto___20192 = G__20193;
continue;
} else {
}
break;
}

var G__20186 = args20181.length;
switch (G__20186) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19352__auto__ = (new cljs.core.IndexedSeq(args20181.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19352__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_20195__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_20195__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_20195__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__20187_20196 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__20188_20197 = null;
var count__20189_20198 = (0);
var i__20190_20199 = (0);
while(true){
if((i__20190_20199 < count__20189_20198)){
var k_20200__$1 = cljs.core._nth.call(null,chunk__20188_20197,i__20190_20199);
dommy.core.remove_attr_BANG_.call(null,elem,k_20200__$1);

var G__20201 = seq__20187_20196;
var G__20202 = chunk__20188_20197;
var G__20203 = count__20189_20198;
var G__20204 = (i__20190_20199 + (1));
seq__20187_20196 = G__20201;
chunk__20188_20197 = G__20202;
count__20189_20198 = G__20203;
i__20190_20199 = G__20204;
continue;
} else {
var temp__4657__auto___20205 = cljs.core.seq.call(null,seq__20187_20196);
if(temp__4657__auto___20205){
var seq__20187_20206__$1 = temp__4657__auto___20205;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20187_20206__$1)){
var c__19078__auto___20207 = cljs.core.chunk_first.call(null,seq__20187_20206__$1);
var G__20208 = cljs.core.chunk_rest.call(null,seq__20187_20206__$1);
var G__20209 = c__19078__auto___20207;
var G__20210 = cljs.core.count.call(null,c__19078__auto___20207);
var G__20211 = (0);
seq__20187_20196 = G__20208;
chunk__20188_20197 = G__20209;
count__20189_20198 = G__20210;
i__20190_20199 = G__20211;
continue;
} else {
var k_20212__$1 = cljs.core.first.call(null,seq__20187_20206__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_20212__$1);

var G__20213 = cljs.core.next.call(null,seq__20187_20206__$1);
var G__20214 = null;
var G__20215 = (0);
var G__20216 = (0);
seq__20187_20196 = G__20213;
chunk__20188_20197 = G__20214;
count__20189_20198 = G__20215;
i__20190_20199 = G__20216;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq20182){
var G__20183 = cljs.core.first.call(null,seq20182);
var seq20182__$1 = cljs.core.next.call(null,seq20182);
var G__20184 = cljs.core.first.call(null,seq20182__$1);
var seq20182__$2 = cljs.core.next.call(null,seq20182__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20183,G__20184,seq20182__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args20217 = [];
var len__19333__auto___20220 = arguments.length;
var i__19334__auto___20221 = (0);
while(true){
if((i__19334__auto___20221 < len__19333__auto___20220)){
args20217.push((arguments[i__19334__auto___20221]));

var G__20222 = (i__19334__auto___20221 + (1));
i__19334__auto___20221 = G__20222;
continue;
} else {
}
break;
}

var G__20219 = args20217.length;
switch (G__20219) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20217.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args20224 = [];
var len__19333__auto___20242 = arguments.length;
var i__19334__auto___20243 = (0);
while(true){
if((i__19334__auto___20243 < len__19333__auto___20242)){
args20224.push((arguments[i__19334__auto___20243]));

var G__20244 = (i__19334__auto___20243 + (1));
i__19334__auto___20243 = G__20244;
continue;
} else {
}
break;
}

var G__20229 = args20224.length;
switch (G__20229) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19352__auto__ = (new cljs.core.IndexedSeq(args20224.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19352__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___20246 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___20246)){
var class_list_20247 = temp__4655__auto___20246;
var seq__20230_20248 = cljs.core.seq.call(null,classes__$1);
var chunk__20231_20249 = null;
var count__20232_20250 = (0);
var i__20233_20251 = (0);
while(true){
if((i__20233_20251 < count__20232_20250)){
var c_20252 = cljs.core._nth.call(null,chunk__20231_20249,i__20233_20251);
class_list_20247.add(c_20252);

var G__20253 = seq__20230_20248;
var G__20254 = chunk__20231_20249;
var G__20255 = count__20232_20250;
var G__20256 = (i__20233_20251 + (1));
seq__20230_20248 = G__20253;
chunk__20231_20249 = G__20254;
count__20232_20250 = G__20255;
i__20233_20251 = G__20256;
continue;
} else {
var temp__4657__auto___20257 = cljs.core.seq.call(null,seq__20230_20248);
if(temp__4657__auto___20257){
var seq__20230_20258__$1 = temp__4657__auto___20257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20230_20258__$1)){
var c__19078__auto___20259 = cljs.core.chunk_first.call(null,seq__20230_20258__$1);
var G__20260 = cljs.core.chunk_rest.call(null,seq__20230_20258__$1);
var G__20261 = c__19078__auto___20259;
var G__20262 = cljs.core.count.call(null,c__19078__auto___20259);
var G__20263 = (0);
seq__20230_20248 = G__20260;
chunk__20231_20249 = G__20261;
count__20232_20250 = G__20262;
i__20233_20251 = G__20263;
continue;
} else {
var c_20264 = cljs.core.first.call(null,seq__20230_20258__$1);
class_list_20247.add(c_20264);

var G__20265 = cljs.core.next.call(null,seq__20230_20258__$1);
var G__20266 = null;
var G__20267 = (0);
var G__20268 = (0);
seq__20230_20248 = G__20265;
chunk__20231_20249 = G__20266;
count__20232_20250 = G__20267;
i__20233_20251 = G__20268;
continue;
}
} else {
}
}
break;
}
} else {
var seq__20234_20269 = cljs.core.seq.call(null,classes__$1);
var chunk__20235_20270 = null;
var count__20236_20271 = (0);
var i__20237_20272 = (0);
while(true){
if((i__20237_20272 < count__20236_20271)){
var c_20273 = cljs.core._nth.call(null,chunk__20235_20270,i__20237_20272);
var class_name_20274 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_20274,c_20273))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_20274 === ""))?c_20273:[cljs.core.str(class_name_20274),cljs.core.str(" "),cljs.core.str(c_20273)].join('')));
}

var G__20275 = seq__20234_20269;
var G__20276 = chunk__20235_20270;
var G__20277 = count__20236_20271;
var G__20278 = (i__20237_20272 + (1));
seq__20234_20269 = G__20275;
chunk__20235_20270 = G__20276;
count__20236_20271 = G__20277;
i__20237_20272 = G__20278;
continue;
} else {
var temp__4657__auto___20279 = cljs.core.seq.call(null,seq__20234_20269);
if(temp__4657__auto___20279){
var seq__20234_20280__$1 = temp__4657__auto___20279;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20234_20280__$1)){
var c__19078__auto___20281 = cljs.core.chunk_first.call(null,seq__20234_20280__$1);
var G__20282 = cljs.core.chunk_rest.call(null,seq__20234_20280__$1);
var G__20283 = c__19078__auto___20281;
var G__20284 = cljs.core.count.call(null,c__19078__auto___20281);
var G__20285 = (0);
seq__20234_20269 = G__20282;
chunk__20235_20270 = G__20283;
count__20236_20271 = G__20284;
i__20237_20272 = G__20285;
continue;
} else {
var c_20286 = cljs.core.first.call(null,seq__20234_20280__$1);
var class_name_20287 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_20287,c_20286))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_20287 === ""))?c_20286:[cljs.core.str(class_name_20287),cljs.core.str(" "),cljs.core.str(c_20286)].join('')));
}

var G__20288 = cljs.core.next.call(null,seq__20234_20280__$1);
var G__20289 = null;
var G__20290 = (0);
var G__20291 = (0);
seq__20234_20269 = G__20288;
chunk__20235_20270 = G__20289;
count__20236_20271 = G__20290;
i__20237_20272 = G__20291;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__20238_20292 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__20239_20293 = null;
var count__20240_20294 = (0);
var i__20241_20295 = (0);
while(true){
if((i__20241_20295 < count__20240_20294)){
var c_20296 = cljs.core._nth.call(null,chunk__20239_20293,i__20241_20295);
dommy.core.add_class_BANG_.call(null,elem,c_20296);

var G__20297 = seq__20238_20292;
var G__20298 = chunk__20239_20293;
var G__20299 = count__20240_20294;
var G__20300 = (i__20241_20295 + (1));
seq__20238_20292 = G__20297;
chunk__20239_20293 = G__20298;
count__20240_20294 = G__20299;
i__20241_20295 = G__20300;
continue;
} else {
var temp__4657__auto___20301 = cljs.core.seq.call(null,seq__20238_20292);
if(temp__4657__auto___20301){
var seq__20238_20302__$1 = temp__4657__auto___20301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20238_20302__$1)){
var c__19078__auto___20303 = cljs.core.chunk_first.call(null,seq__20238_20302__$1);
var G__20304 = cljs.core.chunk_rest.call(null,seq__20238_20302__$1);
var G__20305 = c__19078__auto___20303;
var G__20306 = cljs.core.count.call(null,c__19078__auto___20303);
var G__20307 = (0);
seq__20238_20292 = G__20304;
chunk__20239_20293 = G__20305;
count__20240_20294 = G__20306;
i__20241_20295 = G__20307;
continue;
} else {
var c_20308 = cljs.core.first.call(null,seq__20238_20302__$1);
dommy.core.add_class_BANG_.call(null,elem,c_20308);

var G__20309 = cljs.core.next.call(null,seq__20238_20302__$1);
var G__20310 = null;
var G__20311 = (0);
var G__20312 = (0);
seq__20238_20292 = G__20309;
chunk__20239_20293 = G__20310;
count__20240_20294 = G__20311;
i__20241_20295 = G__20312;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq20225){
var G__20226 = cljs.core.first.call(null,seq20225);
var seq20225__$1 = cljs.core.next.call(null,seq20225);
var G__20227 = cljs.core.first.call(null,seq20225__$1);
var seq20225__$2 = cljs.core.next.call(null,seq20225__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20226,G__20227,seq20225__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args20313 = [];
var len__19333__auto___20323 = arguments.length;
var i__19334__auto___20324 = (0);
while(true){
if((i__19334__auto___20324 < len__19333__auto___20323)){
args20313.push((arguments[i__19334__auto___20324]));

var G__20325 = (i__19334__auto___20324 + (1));
i__19334__auto___20324 = G__20325;
continue;
} else {
}
break;
}

var G__20318 = args20313.length;
switch (G__20318) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19352__auto__ = (new cljs.core.IndexedSeq(args20313.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19352__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___20327 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___20327)){
var class_list_20328 = temp__4655__auto___20327;
class_list_20328.remove(c__$1);
} else {
var class_name_20329 = dommy.core.class$.call(null,elem);
var new_class_name_20330 = dommy.utils.remove_class_str.call(null,class_name_20329,c__$1);
if((class_name_20329 === new_class_name_20330)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_20330);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__20319 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__20320 = null;
var count__20321 = (0);
var i__20322 = (0);
while(true){
if((i__20322 < count__20321)){
var c = cljs.core._nth.call(null,chunk__20320,i__20322);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__20331 = seq__20319;
var G__20332 = chunk__20320;
var G__20333 = count__20321;
var G__20334 = (i__20322 + (1));
seq__20319 = G__20331;
chunk__20320 = G__20332;
count__20321 = G__20333;
i__20322 = G__20334;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20319);
if(temp__4657__auto__){
var seq__20319__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20319__$1)){
var c__19078__auto__ = cljs.core.chunk_first.call(null,seq__20319__$1);
var G__20335 = cljs.core.chunk_rest.call(null,seq__20319__$1);
var G__20336 = c__19078__auto__;
var G__20337 = cljs.core.count.call(null,c__19078__auto__);
var G__20338 = (0);
seq__20319 = G__20335;
chunk__20320 = G__20336;
count__20321 = G__20337;
i__20322 = G__20338;
continue;
} else {
var c = cljs.core.first.call(null,seq__20319__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__20339 = cljs.core.next.call(null,seq__20319__$1);
var G__20340 = null;
var G__20341 = (0);
var G__20342 = (0);
seq__20319 = G__20339;
chunk__20320 = G__20340;
count__20321 = G__20341;
i__20322 = G__20342;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq20314){
var G__20315 = cljs.core.first.call(null,seq20314);
var seq20314__$1 = cljs.core.next.call(null,seq20314);
var G__20316 = cljs.core.first.call(null,seq20314__$1);
var seq20314__$2 = cljs.core.next.call(null,seq20314__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20315,G__20316,seq20314__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args20343 = [];
var len__19333__auto___20346 = arguments.length;
var i__19334__auto___20347 = (0);
while(true){
if((i__19334__auto___20347 < len__19333__auto___20346)){
args20343.push((arguments[i__19334__auto___20347]));

var G__20348 = (i__19334__auto___20347 + (1));
i__19334__auto___20347 = G__20348;
continue;
} else {
}
break;
}

var G__20345 = args20343.length;
switch (G__20345) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20343.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___20350 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___20350)){
var class_list_20351 = temp__4655__auto___20350;
class_list_20351.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args20352 = [];
var len__19333__auto___20355 = arguments.length;
var i__19334__auto___20356 = (0);
while(true){
if((i__19334__auto___20356 < len__19333__auto___20355)){
args20352.push((arguments[i__19334__auto___20356]));

var G__20357 = (i__19334__auto___20356 + (1));
i__19334__auto___20356 = G__20357;
continue;
} else {
}
break;
}

var G__20354 = args20352.length;
switch (G__20354) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20352.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args20359 = [];
var len__19333__auto___20362 = arguments.length;
var i__19334__auto___20363 = (0);
while(true){
if((i__19334__auto___20363 < len__19333__auto___20362)){
args20359.push((arguments[i__19334__auto___20363]));

var G__20364 = (i__19334__auto___20363 + (1));
i__19334__auto___20363 = G__20364;
continue;
} else {
}
break;
}

var G__20361 = args20359.length;
switch (G__20361) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20359.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args20366 = [];
var len__19333__auto___20377 = arguments.length;
var i__19334__auto___20378 = (0);
while(true){
if((i__19334__auto___20378 < len__19333__auto___20377)){
args20366.push((arguments[i__19334__auto___20378]));

var G__20379 = (i__19334__auto___20378 + (1));
i__19334__auto___20378 = G__20379;
continue;
} else {
}
break;
}

var G__20371 = args20366.length;
switch (G__20371) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19352__auto__ = (new cljs.core.IndexedSeq(args20366.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19352__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__20372 = parent;
G__20372.appendChild(child);

return G__20372;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__20373_20381 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__20374_20382 = null;
var count__20375_20383 = (0);
var i__20376_20384 = (0);
while(true){
if((i__20376_20384 < count__20375_20383)){
var c_20385 = cljs.core._nth.call(null,chunk__20374_20382,i__20376_20384);
dommy.core.append_BANG_.call(null,parent,c_20385);

var G__20386 = seq__20373_20381;
var G__20387 = chunk__20374_20382;
var G__20388 = count__20375_20383;
var G__20389 = (i__20376_20384 + (1));
seq__20373_20381 = G__20386;
chunk__20374_20382 = G__20387;
count__20375_20383 = G__20388;
i__20376_20384 = G__20389;
continue;
} else {
var temp__4657__auto___20390 = cljs.core.seq.call(null,seq__20373_20381);
if(temp__4657__auto___20390){
var seq__20373_20391__$1 = temp__4657__auto___20390;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20373_20391__$1)){
var c__19078__auto___20392 = cljs.core.chunk_first.call(null,seq__20373_20391__$1);
var G__20393 = cljs.core.chunk_rest.call(null,seq__20373_20391__$1);
var G__20394 = c__19078__auto___20392;
var G__20395 = cljs.core.count.call(null,c__19078__auto___20392);
var G__20396 = (0);
seq__20373_20381 = G__20393;
chunk__20374_20382 = G__20394;
count__20375_20383 = G__20395;
i__20376_20384 = G__20396;
continue;
} else {
var c_20397 = cljs.core.first.call(null,seq__20373_20391__$1);
dommy.core.append_BANG_.call(null,parent,c_20397);

var G__20398 = cljs.core.next.call(null,seq__20373_20391__$1);
var G__20399 = null;
var G__20400 = (0);
var G__20401 = (0);
seq__20373_20381 = G__20398;
chunk__20374_20382 = G__20399;
count__20375_20383 = G__20400;
i__20376_20384 = G__20401;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq20367){
var G__20368 = cljs.core.first.call(null,seq20367);
var seq20367__$1 = cljs.core.next.call(null,seq20367);
var G__20369 = cljs.core.first.call(null,seq20367__$1);
var seq20367__$2 = cljs.core.next.call(null,seq20367__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20368,G__20369,seq20367__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args20402 = [];
var len__19333__auto___20413 = arguments.length;
var i__19334__auto___20414 = (0);
while(true){
if((i__19334__auto___20414 < len__19333__auto___20413)){
args20402.push((arguments[i__19334__auto___20414]));

var G__20415 = (i__19334__auto___20414 + (1));
i__19334__auto___20414 = G__20415;
continue;
} else {
}
break;
}

var G__20407 = args20402.length;
switch (G__20407) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19352__auto__ = (new cljs.core.IndexedSeq(args20402.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19352__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__20408 = parent;
G__20408.insertBefore(child,parent.firstChild);

return G__20408;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__20409_20417 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__20410_20418 = null;
var count__20411_20419 = (0);
var i__20412_20420 = (0);
while(true){
if((i__20412_20420 < count__20411_20419)){
var c_20421 = cljs.core._nth.call(null,chunk__20410_20418,i__20412_20420);
dommy.core.prepend_BANG_.call(null,parent,c_20421);

var G__20422 = seq__20409_20417;
var G__20423 = chunk__20410_20418;
var G__20424 = count__20411_20419;
var G__20425 = (i__20412_20420 + (1));
seq__20409_20417 = G__20422;
chunk__20410_20418 = G__20423;
count__20411_20419 = G__20424;
i__20412_20420 = G__20425;
continue;
} else {
var temp__4657__auto___20426 = cljs.core.seq.call(null,seq__20409_20417);
if(temp__4657__auto___20426){
var seq__20409_20427__$1 = temp__4657__auto___20426;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20409_20427__$1)){
var c__19078__auto___20428 = cljs.core.chunk_first.call(null,seq__20409_20427__$1);
var G__20429 = cljs.core.chunk_rest.call(null,seq__20409_20427__$1);
var G__20430 = c__19078__auto___20428;
var G__20431 = cljs.core.count.call(null,c__19078__auto___20428);
var G__20432 = (0);
seq__20409_20417 = G__20429;
chunk__20410_20418 = G__20430;
count__20411_20419 = G__20431;
i__20412_20420 = G__20432;
continue;
} else {
var c_20433 = cljs.core.first.call(null,seq__20409_20427__$1);
dommy.core.prepend_BANG_.call(null,parent,c_20433);

var G__20434 = cljs.core.next.call(null,seq__20409_20427__$1);
var G__20435 = null;
var G__20436 = (0);
var G__20437 = (0);
seq__20409_20417 = G__20434;
chunk__20410_20418 = G__20435;
count__20411_20419 = G__20436;
i__20412_20420 = G__20437;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq20403){
var G__20404 = cljs.core.first.call(null,seq20403);
var seq20403__$1 = cljs.core.next.call(null,seq20403);
var G__20405 = cljs.core.first.call(null,seq20403__$1);
var seq20403__$2 = cljs.core.next.call(null,seq20403__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20404,G__20405,seq20403__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___20438 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___20438)){
var next_20439 = temp__4655__auto___20438;
dommy.core.insert_before_BANG_.call(null,elem,next_20439);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args20440 = [];
var len__19333__auto___20444 = arguments.length;
var i__19334__auto___20445 = (0);
while(true){
if((i__19334__auto___20445 < len__19333__auto___20444)){
args20440.push((arguments[i__19334__auto___20445]));

var G__20446 = (i__19334__auto___20445 + (1));
i__19334__auto___20445 = G__20446;
continue;
} else {
}
break;
}

var G__20442 = args20440.length;
switch (G__20442) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20440.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__20443 = p;
G__20443.removeChild(elem);

return G__20443;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__20448){
var vec__20449 = p__20448;
var special_mouse_event = cljs.core.nth.call(null,vec__20449,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__20449,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__20449,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__20449,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__18275__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__18263__auto__ = related_target;
if(cljs.core.truth_(and__18263__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__18263__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__20449,special_mouse_event,real_mouse_event))
});})(vec__20449,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__18263__auto__ = selected_target;
if(cljs.core.truth_(and__18263__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__18263__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__18275__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20453 = arguments.length;
var i__19334__auto___20454 = (0);
while(true){
if((i__19334__auto___20454 < len__19333__auto___20453)){
args__19340__auto__.push((arguments[i__19334__auto___20454]));

var G__20455 = (i__19334__auto___20454 + (1));
i__19334__auto___20454 = G__20455;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq20450){
var G__20451 = cljs.core.first.call(null,seq20450);
var seq20450__$1 = cljs.core.next.call(null,seq20450);
var G__20452 = cljs.core.first.call(null,seq20450__$1);
var seq20450__$2 = cljs.core.next.call(null,seq20450__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20451,G__20452,seq20450__$2);
});
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20481 = arguments.length;
var i__19334__auto___20482 = (0);
while(true){
if((i__19334__auto___20482 < len__19333__auto___20481)){
args__19340__auto__.push((arguments[i__19334__auto___20482]));

var G__20483 = (i__19334__auto___20482 + (1));
i__19334__auto___20482 = G__20483;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((1) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19341__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__20458_20484 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_20485 = cljs.core.nth.call(null,vec__20458_20484,(0),null);
var selector_20486 = cljs.core.nth.call(null,vec__20458_20484,(1),null);
var seq__20459_20487 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__20466_20488 = null;
var count__20467_20489 = (0);
var i__20468_20490 = (0);
while(true){
if((i__20468_20490 < count__20467_20489)){
var vec__20475_20491 = cljs.core._nth.call(null,chunk__20466_20488,i__20468_20490);
var orig_type_20492 = cljs.core.nth.call(null,vec__20475_20491,(0),null);
var f_20493 = cljs.core.nth.call(null,vec__20475_20491,(1),null);
var seq__20469_20494 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20492,cljs.core.PersistentArrayMap.fromArray([orig_type_20492,cljs.core.identity], true, false)));
var chunk__20471_20495 = null;
var count__20472_20496 = (0);
var i__20473_20497 = (0);
while(true){
if((i__20473_20497 < count__20472_20496)){
var vec__20476_20498 = cljs.core._nth.call(null,chunk__20471_20495,i__20473_20497);
var actual_type_20499 = cljs.core.nth.call(null,vec__20476_20498,(0),null);
var factory_20500 = cljs.core.nth.call(null,vec__20476_20498,(1),null);
var canonical_f_20501 = (cljs.core.truth_(selector_20486)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20485,selector_20486):cljs.core.identity).call(null,factory_20500.call(null,f_20493));
dommy.core.update_event_listeners_BANG_.call(null,elem_20485,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20486,actual_type_20499,f_20493], null),canonical_f_20501);

if(cljs.core.truth_(elem_20485.addEventListener)){
elem_20485.addEventListener(cljs.core.name.call(null,actual_type_20499),canonical_f_20501);
} else {
elem_20485.attachEvent(cljs.core.name.call(null,actual_type_20499),canonical_f_20501);
}

var G__20502 = seq__20469_20494;
var G__20503 = chunk__20471_20495;
var G__20504 = count__20472_20496;
var G__20505 = (i__20473_20497 + (1));
seq__20469_20494 = G__20502;
chunk__20471_20495 = G__20503;
count__20472_20496 = G__20504;
i__20473_20497 = G__20505;
continue;
} else {
var temp__4657__auto___20506 = cljs.core.seq.call(null,seq__20469_20494);
if(temp__4657__auto___20506){
var seq__20469_20507__$1 = temp__4657__auto___20506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20469_20507__$1)){
var c__19078__auto___20508 = cljs.core.chunk_first.call(null,seq__20469_20507__$1);
var G__20509 = cljs.core.chunk_rest.call(null,seq__20469_20507__$1);
var G__20510 = c__19078__auto___20508;
var G__20511 = cljs.core.count.call(null,c__19078__auto___20508);
var G__20512 = (0);
seq__20469_20494 = G__20509;
chunk__20471_20495 = G__20510;
count__20472_20496 = G__20511;
i__20473_20497 = G__20512;
continue;
} else {
var vec__20477_20513 = cljs.core.first.call(null,seq__20469_20507__$1);
var actual_type_20514 = cljs.core.nth.call(null,vec__20477_20513,(0),null);
var factory_20515 = cljs.core.nth.call(null,vec__20477_20513,(1),null);
var canonical_f_20516 = (cljs.core.truth_(selector_20486)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20485,selector_20486):cljs.core.identity).call(null,factory_20515.call(null,f_20493));
dommy.core.update_event_listeners_BANG_.call(null,elem_20485,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20486,actual_type_20514,f_20493], null),canonical_f_20516);

if(cljs.core.truth_(elem_20485.addEventListener)){
elem_20485.addEventListener(cljs.core.name.call(null,actual_type_20514),canonical_f_20516);
} else {
elem_20485.attachEvent(cljs.core.name.call(null,actual_type_20514),canonical_f_20516);
}

var G__20517 = cljs.core.next.call(null,seq__20469_20507__$1);
var G__20518 = null;
var G__20519 = (0);
var G__20520 = (0);
seq__20469_20494 = G__20517;
chunk__20471_20495 = G__20518;
count__20472_20496 = G__20519;
i__20473_20497 = G__20520;
continue;
}
} else {
}
}
break;
}

var G__20521 = seq__20459_20487;
var G__20522 = chunk__20466_20488;
var G__20523 = count__20467_20489;
var G__20524 = (i__20468_20490 + (1));
seq__20459_20487 = G__20521;
chunk__20466_20488 = G__20522;
count__20467_20489 = G__20523;
i__20468_20490 = G__20524;
continue;
} else {
var temp__4657__auto___20525 = cljs.core.seq.call(null,seq__20459_20487);
if(temp__4657__auto___20525){
var seq__20459_20526__$1 = temp__4657__auto___20525;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20459_20526__$1)){
var c__19078__auto___20527 = cljs.core.chunk_first.call(null,seq__20459_20526__$1);
var G__20528 = cljs.core.chunk_rest.call(null,seq__20459_20526__$1);
var G__20529 = c__19078__auto___20527;
var G__20530 = cljs.core.count.call(null,c__19078__auto___20527);
var G__20531 = (0);
seq__20459_20487 = G__20528;
chunk__20466_20488 = G__20529;
count__20467_20489 = G__20530;
i__20468_20490 = G__20531;
continue;
} else {
var vec__20478_20532 = cljs.core.first.call(null,seq__20459_20526__$1);
var orig_type_20533 = cljs.core.nth.call(null,vec__20478_20532,(0),null);
var f_20534 = cljs.core.nth.call(null,vec__20478_20532,(1),null);
var seq__20460_20535 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20533,cljs.core.PersistentArrayMap.fromArray([orig_type_20533,cljs.core.identity], true, false)));
var chunk__20462_20536 = null;
var count__20463_20537 = (0);
var i__20464_20538 = (0);
while(true){
if((i__20464_20538 < count__20463_20537)){
var vec__20479_20539 = cljs.core._nth.call(null,chunk__20462_20536,i__20464_20538);
var actual_type_20540 = cljs.core.nth.call(null,vec__20479_20539,(0),null);
var factory_20541 = cljs.core.nth.call(null,vec__20479_20539,(1),null);
var canonical_f_20542 = (cljs.core.truth_(selector_20486)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20485,selector_20486):cljs.core.identity).call(null,factory_20541.call(null,f_20534));
dommy.core.update_event_listeners_BANG_.call(null,elem_20485,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20486,actual_type_20540,f_20534], null),canonical_f_20542);

if(cljs.core.truth_(elem_20485.addEventListener)){
elem_20485.addEventListener(cljs.core.name.call(null,actual_type_20540),canonical_f_20542);
} else {
elem_20485.attachEvent(cljs.core.name.call(null,actual_type_20540),canonical_f_20542);
}

var G__20543 = seq__20460_20535;
var G__20544 = chunk__20462_20536;
var G__20545 = count__20463_20537;
var G__20546 = (i__20464_20538 + (1));
seq__20460_20535 = G__20543;
chunk__20462_20536 = G__20544;
count__20463_20537 = G__20545;
i__20464_20538 = G__20546;
continue;
} else {
var temp__4657__auto___20547__$1 = cljs.core.seq.call(null,seq__20460_20535);
if(temp__4657__auto___20547__$1){
var seq__20460_20548__$1 = temp__4657__auto___20547__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20460_20548__$1)){
var c__19078__auto___20549 = cljs.core.chunk_first.call(null,seq__20460_20548__$1);
var G__20550 = cljs.core.chunk_rest.call(null,seq__20460_20548__$1);
var G__20551 = c__19078__auto___20549;
var G__20552 = cljs.core.count.call(null,c__19078__auto___20549);
var G__20553 = (0);
seq__20460_20535 = G__20550;
chunk__20462_20536 = G__20551;
count__20463_20537 = G__20552;
i__20464_20538 = G__20553;
continue;
} else {
var vec__20480_20554 = cljs.core.first.call(null,seq__20460_20548__$1);
var actual_type_20555 = cljs.core.nth.call(null,vec__20480_20554,(0),null);
var factory_20556 = cljs.core.nth.call(null,vec__20480_20554,(1),null);
var canonical_f_20557 = (cljs.core.truth_(selector_20486)?cljs.core.partial.call(null,dommy.core.live_listener,elem_20485,selector_20486):cljs.core.identity).call(null,factory_20556.call(null,f_20534));
dommy.core.update_event_listeners_BANG_.call(null,elem_20485,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20486,actual_type_20555,f_20534], null),canonical_f_20557);

if(cljs.core.truth_(elem_20485.addEventListener)){
elem_20485.addEventListener(cljs.core.name.call(null,actual_type_20555),canonical_f_20557);
} else {
elem_20485.attachEvent(cljs.core.name.call(null,actual_type_20555),canonical_f_20557);
}

var G__20558 = cljs.core.next.call(null,seq__20460_20548__$1);
var G__20559 = null;
var G__20560 = (0);
var G__20561 = (0);
seq__20460_20535 = G__20558;
chunk__20462_20536 = G__20559;
count__20463_20537 = G__20560;
i__20464_20538 = G__20561;
continue;
}
} else {
}
}
break;
}

var G__20562 = cljs.core.next.call(null,seq__20459_20526__$1);
var G__20563 = null;
var G__20564 = (0);
var G__20565 = (0);
seq__20459_20487 = G__20562;
chunk__20466_20488 = G__20563;
count__20467_20489 = G__20564;
i__20468_20490 = G__20565;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq20456){
var G__20457 = cljs.core.first.call(null,seq20456);
var seq20456__$1 = cljs.core.next.call(null,seq20456);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20457,seq20456__$1);
});
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20591 = arguments.length;
var i__19334__auto___20592 = (0);
while(true){
if((i__19334__auto___20592 < len__19333__auto___20591)){
args__19340__auto__.push((arguments[i__19334__auto___20592]));

var G__20593 = (i__19334__auto___20592 + (1));
i__19334__auto___20592 = G__20593;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((1) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19341__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__20568_20594 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_20595 = cljs.core.nth.call(null,vec__20568_20594,(0),null);
var selector_20596 = cljs.core.nth.call(null,vec__20568_20594,(1),null);
var seq__20569_20597 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__20576_20598 = null;
var count__20577_20599 = (0);
var i__20578_20600 = (0);
while(true){
if((i__20578_20600 < count__20577_20599)){
var vec__20585_20601 = cljs.core._nth.call(null,chunk__20576_20598,i__20578_20600);
var orig_type_20602 = cljs.core.nth.call(null,vec__20585_20601,(0),null);
var f_20603 = cljs.core.nth.call(null,vec__20585_20601,(1),null);
var seq__20579_20604 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20602,cljs.core.PersistentArrayMap.fromArray([orig_type_20602,cljs.core.identity], true, false)));
var chunk__20581_20605 = null;
var count__20582_20606 = (0);
var i__20583_20607 = (0);
while(true){
if((i__20583_20607 < count__20582_20606)){
var vec__20586_20608 = cljs.core._nth.call(null,chunk__20581_20605,i__20583_20607);
var actual_type_20609 = cljs.core.nth.call(null,vec__20586_20608,(0),null);
var __20610 = cljs.core.nth.call(null,vec__20586_20608,(1),null);
var keys_20611 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20596,actual_type_20609,f_20603], null);
var canonical_f_20612 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20595),keys_20611);
dommy.core.update_event_listeners_BANG_.call(null,elem_20595,dommy.utils.dissoc_in,keys_20611);

if(cljs.core.truth_(elem_20595.removeEventListener)){
elem_20595.removeEventListener(cljs.core.name.call(null,actual_type_20609),canonical_f_20612);
} else {
elem_20595.detachEvent(cljs.core.name.call(null,actual_type_20609),canonical_f_20612);
}

var G__20613 = seq__20579_20604;
var G__20614 = chunk__20581_20605;
var G__20615 = count__20582_20606;
var G__20616 = (i__20583_20607 + (1));
seq__20579_20604 = G__20613;
chunk__20581_20605 = G__20614;
count__20582_20606 = G__20615;
i__20583_20607 = G__20616;
continue;
} else {
var temp__4657__auto___20617 = cljs.core.seq.call(null,seq__20579_20604);
if(temp__4657__auto___20617){
var seq__20579_20618__$1 = temp__4657__auto___20617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20579_20618__$1)){
var c__19078__auto___20619 = cljs.core.chunk_first.call(null,seq__20579_20618__$1);
var G__20620 = cljs.core.chunk_rest.call(null,seq__20579_20618__$1);
var G__20621 = c__19078__auto___20619;
var G__20622 = cljs.core.count.call(null,c__19078__auto___20619);
var G__20623 = (0);
seq__20579_20604 = G__20620;
chunk__20581_20605 = G__20621;
count__20582_20606 = G__20622;
i__20583_20607 = G__20623;
continue;
} else {
var vec__20587_20624 = cljs.core.first.call(null,seq__20579_20618__$1);
var actual_type_20625 = cljs.core.nth.call(null,vec__20587_20624,(0),null);
var __20626 = cljs.core.nth.call(null,vec__20587_20624,(1),null);
var keys_20627 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20596,actual_type_20625,f_20603], null);
var canonical_f_20628 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20595),keys_20627);
dommy.core.update_event_listeners_BANG_.call(null,elem_20595,dommy.utils.dissoc_in,keys_20627);

if(cljs.core.truth_(elem_20595.removeEventListener)){
elem_20595.removeEventListener(cljs.core.name.call(null,actual_type_20625),canonical_f_20628);
} else {
elem_20595.detachEvent(cljs.core.name.call(null,actual_type_20625),canonical_f_20628);
}

var G__20629 = cljs.core.next.call(null,seq__20579_20618__$1);
var G__20630 = null;
var G__20631 = (0);
var G__20632 = (0);
seq__20579_20604 = G__20629;
chunk__20581_20605 = G__20630;
count__20582_20606 = G__20631;
i__20583_20607 = G__20632;
continue;
}
} else {
}
}
break;
}

var G__20633 = seq__20569_20597;
var G__20634 = chunk__20576_20598;
var G__20635 = count__20577_20599;
var G__20636 = (i__20578_20600 + (1));
seq__20569_20597 = G__20633;
chunk__20576_20598 = G__20634;
count__20577_20599 = G__20635;
i__20578_20600 = G__20636;
continue;
} else {
var temp__4657__auto___20637 = cljs.core.seq.call(null,seq__20569_20597);
if(temp__4657__auto___20637){
var seq__20569_20638__$1 = temp__4657__auto___20637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20569_20638__$1)){
var c__19078__auto___20639 = cljs.core.chunk_first.call(null,seq__20569_20638__$1);
var G__20640 = cljs.core.chunk_rest.call(null,seq__20569_20638__$1);
var G__20641 = c__19078__auto___20639;
var G__20642 = cljs.core.count.call(null,c__19078__auto___20639);
var G__20643 = (0);
seq__20569_20597 = G__20640;
chunk__20576_20598 = G__20641;
count__20577_20599 = G__20642;
i__20578_20600 = G__20643;
continue;
} else {
var vec__20588_20644 = cljs.core.first.call(null,seq__20569_20638__$1);
var orig_type_20645 = cljs.core.nth.call(null,vec__20588_20644,(0),null);
var f_20646 = cljs.core.nth.call(null,vec__20588_20644,(1),null);
var seq__20570_20647 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_20645,cljs.core.PersistentArrayMap.fromArray([orig_type_20645,cljs.core.identity], true, false)));
var chunk__20572_20648 = null;
var count__20573_20649 = (0);
var i__20574_20650 = (0);
while(true){
if((i__20574_20650 < count__20573_20649)){
var vec__20589_20651 = cljs.core._nth.call(null,chunk__20572_20648,i__20574_20650);
var actual_type_20652 = cljs.core.nth.call(null,vec__20589_20651,(0),null);
var __20653 = cljs.core.nth.call(null,vec__20589_20651,(1),null);
var keys_20654 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20596,actual_type_20652,f_20646], null);
var canonical_f_20655 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20595),keys_20654);
dommy.core.update_event_listeners_BANG_.call(null,elem_20595,dommy.utils.dissoc_in,keys_20654);

if(cljs.core.truth_(elem_20595.removeEventListener)){
elem_20595.removeEventListener(cljs.core.name.call(null,actual_type_20652),canonical_f_20655);
} else {
elem_20595.detachEvent(cljs.core.name.call(null,actual_type_20652),canonical_f_20655);
}

var G__20656 = seq__20570_20647;
var G__20657 = chunk__20572_20648;
var G__20658 = count__20573_20649;
var G__20659 = (i__20574_20650 + (1));
seq__20570_20647 = G__20656;
chunk__20572_20648 = G__20657;
count__20573_20649 = G__20658;
i__20574_20650 = G__20659;
continue;
} else {
var temp__4657__auto___20660__$1 = cljs.core.seq.call(null,seq__20570_20647);
if(temp__4657__auto___20660__$1){
var seq__20570_20661__$1 = temp__4657__auto___20660__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20570_20661__$1)){
var c__19078__auto___20662 = cljs.core.chunk_first.call(null,seq__20570_20661__$1);
var G__20663 = cljs.core.chunk_rest.call(null,seq__20570_20661__$1);
var G__20664 = c__19078__auto___20662;
var G__20665 = cljs.core.count.call(null,c__19078__auto___20662);
var G__20666 = (0);
seq__20570_20647 = G__20663;
chunk__20572_20648 = G__20664;
count__20573_20649 = G__20665;
i__20574_20650 = G__20666;
continue;
} else {
var vec__20590_20667 = cljs.core.first.call(null,seq__20570_20661__$1);
var actual_type_20668 = cljs.core.nth.call(null,vec__20590_20667,(0),null);
var __20669 = cljs.core.nth.call(null,vec__20590_20667,(1),null);
var keys_20670 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20596,actual_type_20668,f_20646], null);
var canonical_f_20671 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_20595),keys_20670);
dommy.core.update_event_listeners_BANG_.call(null,elem_20595,dommy.utils.dissoc_in,keys_20670);

if(cljs.core.truth_(elem_20595.removeEventListener)){
elem_20595.removeEventListener(cljs.core.name.call(null,actual_type_20668),canonical_f_20671);
} else {
elem_20595.detachEvent(cljs.core.name.call(null,actual_type_20668),canonical_f_20671);
}

var G__20672 = cljs.core.next.call(null,seq__20570_20661__$1);
var G__20673 = null;
var G__20674 = (0);
var G__20675 = (0);
seq__20570_20647 = G__20672;
chunk__20572_20648 = G__20673;
count__20573_20649 = G__20674;
i__20574_20650 = G__20675;
continue;
}
} else {
}
}
break;
}

var G__20676 = cljs.core.next.call(null,seq__20569_20638__$1);
var G__20677 = null;
var G__20678 = (0);
var G__20679 = (0);
seq__20569_20597 = G__20676;
chunk__20576_20598 = G__20677;
count__20577_20599 = G__20678;
i__20578_20600 = G__20679;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq20566){
var G__20567 = cljs.core.first.call(null,seq20566);
var seq20566__$1 = cljs.core.next.call(null,seq20566);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20567,seq20566__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20689 = arguments.length;
var i__19334__auto___20690 = (0);
while(true){
if((i__19334__auto___20690 < len__19333__auto___20689)){
args__19340__auto__.push((arguments[i__19334__auto___20690]));

var G__20691 = (i__19334__auto___20690 + (1));
i__19334__auto___20690 = G__20691;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((1) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19341__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__20682_20692 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_20693 = cljs.core.nth.call(null,vec__20682_20692,(0),null);
var selector_20694 = cljs.core.nth.call(null,vec__20682_20692,(1),null);
var seq__20683_20695 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__20684_20696 = null;
var count__20685_20697 = (0);
var i__20686_20698 = (0);
while(true){
if((i__20686_20698 < count__20685_20697)){
var vec__20687_20699 = cljs.core._nth.call(null,chunk__20684_20696,i__20686_20698);
var type_20700 = cljs.core.nth.call(null,vec__20687_20699,(0),null);
var f_20701 = cljs.core.nth.call(null,vec__20687_20699,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_20700,((function (seq__20683_20695,chunk__20684_20696,count__20685_20697,i__20686_20698,vec__20687_20699,type_20700,f_20701,vec__20682_20692,elem_20693,selector_20694){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_20700,dommy$core$this_fn);

return f_20701.call(null,e);
});})(seq__20683_20695,chunk__20684_20696,count__20685_20697,i__20686_20698,vec__20687_20699,type_20700,f_20701,vec__20682_20692,elem_20693,selector_20694))
);

var G__20702 = seq__20683_20695;
var G__20703 = chunk__20684_20696;
var G__20704 = count__20685_20697;
var G__20705 = (i__20686_20698 + (1));
seq__20683_20695 = G__20702;
chunk__20684_20696 = G__20703;
count__20685_20697 = G__20704;
i__20686_20698 = G__20705;
continue;
} else {
var temp__4657__auto___20706 = cljs.core.seq.call(null,seq__20683_20695);
if(temp__4657__auto___20706){
var seq__20683_20707__$1 = temp__4657__auto___20706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20683_20707__$1)){
var c__19078__auto___20708 = cljs.core.chunk_first.call(null,seq__20683_20707__$1);
var G__20709 = cljs.core.chunk_rest.call(null,seq__20683_20707__$1);
var G__20710 = c__19078__auto___20708;
var G__20711 = cljs.core.count.call(null,c__19078__auto___20708);
var G__20712 = (0);
seq__20683_20695 = G__20709;
chunk__20684_20696 = G__20710;
count__20685_20697 = G__20711;
i__20686_20698 = G__20712;
continue;
} else {
var vec__20688_20713 = cljs.core.first.call(null,seq__20683_20707__$1);
var type_20714 = cljs.core.nth.call(null,vec__20688_20713,(0),null);
var f_20715 = cljs.core.nth.call(null,vec__20688_20713,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_20714,((function (seq__20683_20695,chunk__20684_20696,count__20685_20697,i__20686_20698,vec__20688_20713,type_20714,f_20715,seq__20683_20707__$1,temp__4657__auto___20706,vec__20682_20692,elem_20693,selector_20694){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_20714,dommy$core$this_fn);

return f_20715.call(null,e);
});})(seq__20683_20695,chunk__20684_20696,count__20685_20697,i__20686_20698,vec__20688_20713,type_20714,f_20715,seq__20683_20707__$1,temp__4657__auto___20706,vec__20682_20692,elem_20693,selector_20694))
);

var G__20716 = cljs.core.next.call(null,seq__20683_20707__$1);
var G__20717 = null;
var G__20718 = (0);
var G__20719 = (0);
seq__20683_20695 = G__20716;
chunk__20684_20696 = G__20717;
count__20685_20697 = G__20718;
i__20686_20698 = G__20719;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq20680){
var G__20681 = cljs.core.first.call(null,seq20680);
var seq20680__$1 = cljs.core.next.call(null,seq20680);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20681,seq20680__$1);
});

//# sourceMappingURL=core.js.map