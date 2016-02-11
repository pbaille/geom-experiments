// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.utils.svg');
goog.require('cljs.core');
goog.require('thi.ng.domus.core');
goog.require('thi.ng.geom.svg.core');
goog.require('hiccups.runtime');
geom.utils.svg.svg_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 77, ["stop",null,"hkern",null,"glyphRef",null,"feDistantLight",null,"animateMotion",null,"radialGradient",null,"feSpotLight",null,"feFuncA",null,"foreignObject",null,"image",null,"feTurbulence",null,"linearGradient",null,"feSpecularLighting",null,"feBlend",null,"feFuncG",null,"missing-glyph",null,"feImage",null,"font-face-src",null,"feColorMatrix",null,"path",null,"svg",null,"font-face-uri",null,"fePointLight",null,"feConvolveMatrix",null,"font-face-format",null,"font-face-name",null,"altGlyphDef",null,"tref",null,"font-face",null,"feFuncR",null,"animate",null,"animateTransform",null,"feDiffuseLighting",null,"ellipse",null,"feOffset",null,"switch",null,"text",null,"feFlood",null,"cursor",null,"animateColor",null,"desc",null,"tspan",null,"feFuncB",null,"filter",null,"symbol",null,"color-profile",null,"altGlyph",null,"metadata",null,"font",null,"mpath",null,"feComponentTransfer",null,"feMerge",null,"line",null,"title",null,"polygon",null,"pattern",null,"textPath",null,"polyline",null,"g",null,"altGlyphItem",null,"set",null,"clipPath",null,"rect",null,"feDisplacementMap",null,"defs",null,"marker",null,"feMorphology",null,"glyph",null,"circle",null,"use",null,"view",null,"feGaussianBlur",null,"mask",null,"feMergeNode",null,"feTile",null,"feComposite",null,"vkern",null], null), null);
geom.utils.svg.init_svg_BANG_ = (function geom$utils$svg$init_svg_BANG_(root,p__20082){
var vec__20084 = p__20082;
var width = cljs.core.nth.call(null,vec__20084,(0),null);
var height = cljs.core.nth.call(null,vec__20084,(1),null);
return thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.svg.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)),thi.ng.domus.core.clear_BANG_.call(null,thi.ng.domus.core.query.call(null,null,root)));
});
/**
 * in order to avoid clip-path wrong rendering
 */
geom.utils.svg.svg = (function geom$utils$svg$svg(var_args){
var args__19340__auto__ = [];
var len__19333__auto___20089 = arguments.length;
var i__19334__auto___20090 = (0);
while(true){
if((i__19334__auto___20090 < len__19333__auto___20089)){
args__19340__auto__.push((arguments[i__19334__auto___20090]));

var G__20091 = (i__19334__auto___20090 + (1));
i__19334__auto___20090 = G__20091;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return geom.utils.svg.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

geom.utils.svg.svg.cljs$core$IFn$_invoke$arity$variadic = (function (parent_selector,attrs,childs){
var p = thi.ng.domus.core.query.call(null,null,parent_selector);
return (p["innerHTML"] = [cljs.core.str((function (){var attrs20088 = attrs;
if(cljs.core.map_QMARK_.call(null,attrs20088)){
return [cljs.core.str("<svg"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs20088))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,childs)),cljs.core.str("</svg>")].join('');
} else {
return [cljs.core.str("<svg>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs20088)),cljs.core.str(hiccups.runtime.render_html.call(null,childs)),cljs.core.str("</svg>")].join('');
}
})())].join(''));
});

geom.utils.svg.svg.cljs$lang$maxFixedArity = (2);

geom.utils.svg.svg.cljs$lang$applyTo = (function (seq20085){
var G__20086 = cljs.core.first.call(null,seq20085);
var seq20085__$1 = cljs.core.next.call(null,seq20085);
var G__20087 = cljs.core.first.call(null,seq20085__$1);
var seq20085__$2 = cljs.core.next.call(null,seq20085__$1);
return geom.utils.svg.svg.cljs$core$IFn$_invoke$arity$variadic(G__20086,G__20087,seq20085__$2);
});

//# sourceMappingURL=svg.js.map