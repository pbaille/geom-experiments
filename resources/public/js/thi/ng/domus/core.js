// Compiled by ClojureScript 1.7.228 {}
goog.provide('thi.ng.domus.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.style');
goog.require('thi.ng.domus.utils');
goog.require('clojure.string');
thi.ng.domus.core.svg_ns = "http://www.w3.org/2000/svg";
thi.ng.domus.core.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
thi.ng.domus.core.svg_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["path",null,"svg",null,"text",null,"line",null,"polygon",null,"polyline",null,"g",null,"rect",null,"circle",null], null), null);
thi.ng.domus.core.by_id = (function thi$ng$domus$core$by_id(id){
return document.getElementById(id);
});
thi.ng.domus.core.query = (function thi$ng$domus$core$query(e,q){
return (function (){var or__18275__auto__ = e;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return document;
}
})().querySelector(q);
});
thi.ng.domus.core.query_all = (function thi$ng$domus$core$query_all(e,q){
return (function (){var or__18275__auto__ = e;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return document;
}
})().querySelectorAll(q);
});
thi.ng.domus.core.match_media = (function thi$ng$domus$core$match_media(q){
return window.matchMedia(q).matches;
});
thi.ng.domus.core.parent = (function thi$ng$domus$core$parent(el){
return el.parentElement;
});
thi.ng.domus.core.update_listeners_STAR_ = (function thi$ng$domus$core$update_listeners_STAR_(update_BANG_,specs){
var specs_29872__$1 = specs;
while(true){
if(cljs.core.truth_(specs_29872__$1)){
var vec__29871_29873 = cljs.core.first.call(null,specs_29872__$1);
var el_29874 = cljs.core.nth.call(null,vec__29871_29873,(0),null);
var eid_29875 = cljs.core.nth.call(null,vec__29871_29873,(1),null);
var f_29876 = cljs.core.nth.call(null,vec__29871_29873,(2),null);
var cap_QMARK__29877 = cljs.core.nth.call(null,vec__29871_29873,(3),null);
var el_29878__$1 = ((typeof el_29874 === 'string')?((cljs.core._EQ_.call(null,"$window",el_29874))?window:thi.ng.domus.core.query.call(null,null,el_29874)):el_29874);
if(cljs.core.truth_(el_29878__$1)){
update_BANG_.call(null,el_29878__$1,cljs.core.name.call(null,eid_29875),f_29876,cap_QMARK__29877);
} else {
}

var G__29879 = cljs.core.next.call(null,specs_29872__$1);
specs_29872__$1 = G__29879;
continue;
} else {
}
break;
}

return specs;
});
thi.ng.domus.core.add_listeners = (function thi$ng$domus$core$add_listeners(specs){
return thi.ng.domus.core.update_listeners_STAR_.call(null,(function (el,eid,f,cap_QMARK_){
return el.addEventListener(eid,f,cap_QMARK_);
}),specs);
});
thi.ng.domus.core.remove_listeners = (function thi$ng$domus$core$remove_listeners(specs){
return thi.ng.domus.core.update_listeners_STAR_.call(null,(function (el,eid,f,_){
return el.removeEventListener(eid,f);
}),specs);
});
thi.ng.domus.core.wheel_event_type = (function thi$ng$domus$core$wheel_event_type(){
if(cljs.core.truth_(goog.isDef(window.onwheel))){
return "wheel";
} else {
return "mousewheel";
}
});
thi.ng.domus.core.set_html_BANG_ = (function thi$ng$domus$core$set_html_BANG_(el,s){
el.innerHTML = s;

return el;
});
thi.ng.domus.core.set_text_BANG_ = (function thi$ng$domus$core$set_text_BANG_(el,s){
goog.dom.setTextContent(el,s);

return el;
});
thi.ng.domus.core.clear_BANG_ = (function thi$ng$domus$core$clear_BANG_(el){
return thi.ng.domus.core.set_html_BANG_.call(null,el,"");
});
thi.ng.domus.core.set_class_BANG_ = (function thi$ng$domus$core$set_class_BANG_(el,name){
goog.dom.classes.set(el,name);

return el;
});
thi.ng.domus.core.add_class_BANG_ = (function thi$ng$domus$core$add_class_BANG_(el,name){
if(typeof name === 'string'){
goog.dom.classes.add(el,name);
} else {
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__29880_SHARP_){
return goog.dom.classes.add(el,p1__29880_SHARP_);
}),name));
}

return el;
});
thi.ng.domus.core.remove_class_BANG_ = (function thi$ng$domus$core$remove_class_BANG_(el,name){
goog.dom.classes.remove(el,name);

return el;
});
thi.ng.domus.core.set_style_BANG_ = (function thi$ng$domus$core$set_style_BANG_(el,opts){
goog.style.setStyle(el,cljs.core.clj__GT_js.call(null,opts));

return el;
});
thi.ng.domus.core.get_style = (function thi$ng$domus$core$get_style(el,prop){
return goog.style.getStyle(el,cljs.core.name.call(null,prop));
});
thi.ng.domus.core.get_attrib = (function thi$ng$domus$core$get_attrib(el,attr){
return el.getAttribute(attr);
});
thi.ng.domus.core.get_attribs = (function thi$ng$domus$core$get_attribs(el,attrs){
return cljs.core.mapv.call(null,(function (p1__29881_SHARP_){
return el.getAttribute(p1__29881_SHARP_);
}),attrs);
});
thi.ng.domus.core.set_attribs_BANG_ = (function thi$ng$domus$core$set_attribs_BANG_(el,attribs){
if(cljs.core.truth_(el)){
var attribs_29891__$1 = attribs;
while(true){
if(cljs.core.truth_(attribs_29891__$1)){
var vec__29887_29892 = cljs.core.first.call(null,attribs_29891__$1);
var k_29893 = cljs.core.nth.call(null,vec__29887_29892,(0),null);
var v_29894 = cljs.core.nth.call(null,vec__29887_29892,(1),null);
if(cljs.core.truth_(v_29894)){
var pred__29888_29895 = cljs.core._EQ_;
var expr__29889_29896 = k_29893;
if(cljs.core.truth_(pred__29888_29895.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__29889_29896))){
thi.ng.domus.core.set_style_BANG_.call(null,el,v_29894);
} else {
if(cljs.core.truth_(pred__29888_29895.call(null,new cljs.core.Keyword(null,"events","events",1792552201),expr__29889_29896))){
thi.ng.domus.core.add_listeners.call(null,cljs.core.map.call(null,((function (attribs_29891__$1,pred__29888_29895,expr__29889_29896,vec__29887_29892,k_29893,v_29894){
return (function (p1__29882_SHARP_){
return cljs.core.vec.call(null,cljs.core.cons.call(null,el,p1__29882_SHARP_));
});})(attribs_29891__$1,pred__29888_29895,expr__29889_29896,vec__29887_29892,k_29893,v_29894))
,v_29894));
} else {
el.setAttribute(cljs.core.name.call(null,k_29893),v_29894);
}
}
} else {
}

var G__29897 = cljs.core.next.call(null,attribs_29891__$1);
attribs_29891__$1 = G__29897;
continue;
} else {
}
break;
}
} else {
}

return el;
});
thi.ng.domus.core.remove_attribs_BANG_ = (function thi$ng$domus$core$remove_attribs_BANG_(el,attribs){
if(cljs.core.truth_(el)){
var attribs_29898__$1 = attribs;
while(true){
if(cljs.core.truth_(attribs_29898__$1)){
el.removeAttribute(cljs.core.name.call(null,cljs.core.first.call(null,attribs_29898__$1)));

var G__29899 = cljs.core.next.call(null,attribs_29898__$1);
attribs_29898__$1 = G__29899;
continue;
} else {
}
break;
}
} else {
}

return el;
});
thi.ng.domus.core.show_BANG_ = (function thi$ng$domus$core$show_BANG_(el){
goog.style.setStyle(el,"display","block");

return el;
});
thi.ng.domus.core.hide_BANG_ = (function thi$ng$domus$core$hide_BANG_(el){
goog.style.setStyle(el,"display","none");

return el;
});
thi.ng.domus.core.offset = (function thi$ng$domus$core$offset(el){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.style.getPageOffsetLeft(el),goog.style.getPageOffsetTop(el)], null);
});
thi.ng.domus.core.size = (function thi$ng$domus$core$size(el){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el.clientWidth,el.clientHeight], null);
});
thi.ng.domus.core.force_redraw_BANG_ = (function thi$ng$domus$core$force_redraw_BANG_(el){
return thi.ng.domus.core.show_BANG_.call(null,thi.ng.domus.core.hide_BANG_.call(null,el));
});
thi.ng.domus.core.__GT_px = (function thi$ng$domus$core$__GT_px(x){
return [cljs.core.str(x),cljs.core.str("px")].join('');
});
thi.ng.domus.core.create_BANG_ = (function thi$ng$domus$core$create_BANG_(var_args){
var args29900 = [];
var len__19333__auto___29903 = arguments.length;
var i__19334__auto___29904 = (0);
while(true){
if((i__19334__auto___29904 < len__19333__auto___29903)){
args29900.push((arguments[i__19334__auto___29904]));

var G__29905 = (i__19334__auto___29904 + (1));
i__19334__auto___29904 = G__29905;
continue;
} else {
}
break;
}

var G__29902 = args29900.length;
switch (G__29902) {
case 1:
return thi.ng.domus.core.create_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.domus.core.create_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.domus.core.create_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29900.length)].join('')));

}
});

thi.ng.domus.core.create_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (type){
return thi.ng.domus.core.create_BANG_.call(null,type,null,null);
});

thi.ng.domus.core.create_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,parent){
return thi.ng.domus.core.create_BANG_.call(null,type,parent,null);
});

thi.ng.domus.core.create_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (type,parent,attribs){
var el = (cljs.core.truth_(thi.ng.domus.core.svg_tags.call(null,type))?document.createElementNS(thi.ng.domus.core.svg_ns,type):document.createElement(type));
if(cljs.core.truth_(parent)){
parent.appendChild(el);
} else {
}

if(cljs.core.truth_(attribs)){
thi.ng.domus.core.set_attribs_BANG_.call(null,el,attribs);
} else {
}

return el;
});

thi.ng.domus.core.create_BANG_.cljs$lang$maxFixedArity = 3;
thi.ng.domus.core.create_ns_BANG_ = (function thi$ng$domus$core$create_ns_BANG_(var_args){
var args29907 = [];
var len__19333__auto___29910 = arguments.length;
var i__19334__auto___29911 = (0);
while(true){
if((i__19334__auto___29911 < len__19333__auto___29910)){
args29907.push((arguments[i__19334__auto___29911]));

var G__29912 = (i__19334__auto___29911 + (1));
i__19334__auto___29911 = G__29912;
continue;
} else {
}
break;
}

var G__29909 = args29907.length;
switch (G__29909) {
case 3:
return thi.ng.domus.core.create_ns_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.domus.core.create_ns_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29907.length)].join('')));

}
});

thi.ng.domus.core.create_ns_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ns,type,parent){
return thi.ng.domus.core.create_ns_BANG_.call(null,ns,type,parent,null);
});

thi.ng.domus.core.create_ns_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (ns,type,parent,attribs){
var el = document.createElementNS(ns,type);
if(cljs.core.truth_(parent)){
parent.appendChild(el);
} else {
}

if(cljs.core.truth_(attribs)){
thi.ng.domus.core.set_attribs_BANG_.call(null,el,attribs);
} else {
}

return el;
});

thi.ng.domus.core.create_ns_BANG_.cljs$lang$maxFixedArity = 4;
thi.ng.domus.core.create_text_BANG_ = (function thi$ng$domus$core$create_text_BANG_(txt,parent){
var el = document.createTextNode(txt);
parent.appendChild(el);

return el;
});
thi.ng.domus.core.remove_BANG_ = (function thi$ng$domus$core$remove_BANG_(el){
return el.parentElement.removeChild(el);
});
thi.ng.domus.core.append_BANG_ = (function thi$ng$domus$core$append_BANG_(parent,el){
return parent.appendChild(el);
});
thi.ng.domus.core.insert_BANG_ = (function thi$ng$domus$core$insert_BANG_(el,parent){
parent.insertBefore(el,parent.firstChild);

return el;
});
thi.ng.domus.core.normalize_element = (function thi$ng$domus$core$normalize_element(p__29914){
var vec__29917 = p__29914;
var tag = cljs.core.nth.call(null,vec__29917,(0),null);
var content = cljs.core.nthnext.call(null,vec__29917,(1));
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name")].join('');
} else {
}

var vec__29918 = cljs.core.re_matches.call(null,thi.ng.domus.core.re_tag,thi.ng.domus.utils.as_str.call(null,tag));
var _ = cljs.core.nth.call(null,vec__29918,(0),null);
var tag__$1 = cljs.core.nth.call(null,vec__29918,(1),null);
var id = cljs.core.nth.call(null,vec__29918,(2),null);
var class$ = cljs.core.nth.call(null,vec__29918,(3),null);
var tag_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,"."," "):null)], null);
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,cljs.core.merge.call(null,tag_attrs,map_attrs),cljs.core.next.call(null,content)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,tag_attrs,content], null);
}
});
thi.ng.domus.core.create_dom_BANG_ = (function thi$ng$domus$core$create_dom_BANG_(var_args){
var args__19340__auto__ = [];
var len__19333__auto___29927 = arguments.length;
var i__19334__auto___29928 = (0);
while(true){
if((i__19334__auto___29928 < len__19333__auto___29927)){
args__19340__auto__.push((arguments[i__19334__auto___29928]));

var G__29929 = (i__19334__auto___29928 + (1));
i__19334__auto___29928 = G__29929;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return thi.ng.domus.core.create_dom_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

thi.ng.domus.core.create_dom_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (x,parent,p__29923){
var map__29924 = p__29923;
var map__29924__$1 = ((((!((map__29924 == null)))?((((map__29924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29924):map__29924);
var escape_QMARK_ = cljs.core.get.call(null,map__29924__$1,new cljs.core.Keyword(null,"escape?","escape?",-575595299));
if(cljs.core.vector_QMARK_.call(null,x)){
var vec__29926 = thi.ng.domus.core.normalize_element.call(null,x);
var tag = cljs.core.nth.call(null,vec__29926,(0),null);
var attrs = cljs.core.nth.call(null,vec__29926,(1),null);
var content = cljs.core.nth.call(null,vec__29926,(2),null);
var el = thi.ng.domus.core.create_BANG_.call(null,tag,parent,attrs);
if(cljs.core.truth_(content)){
thi.ng.domus.core.create_dom_BANG_.call(null,content,el);
} else {
}

return el;
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__29924,map__29924__$1,escape_QMARK_){
return (function (p1__29919_SHARP_){
return thi.ng.domus.core.create_dom_BANG_.call(null,p1__29919_SHARP_,parent);
});})(map__29924,map__29924__$1,escape_QMARK_))
,x));
} else {
if((x == null)){
return parent;
} else {
return thi.ng.domus.core.create_text_BANG_.call(null,((!(cljs.core._EQ_.call(null,false,escape_QMARK_)))?thi.ng.domus.utils.escape_html.call(null,x):x),parent);

}
}
}
});

thi.ng.domus.core.create_dom_BANG_.cljs$lang$maxFixedArity = (2);

thi.ng.domus.core.create_dom_BANG_.cljs$lang$applyTo = (function (seq29920){
var G__29921 = cljs.core.first.call(null,seq29920);
var seq29920__$1 = cljs.core.next.call(null,seq29920);
var G__29922 = cljs.core.first.call(null,seq29920__$1);
var seq29920__$2 = cljs.core.next.call(null,seq29920__$1);
return thi.ng.domus.core.create_dom_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29921,G__29922,seq29920__$2);
});
thi.ng.domus.core.request_fullscreen = (function thi$ng$domus$core$request_fullscreen(){
var doc = document.documentElement;
if(cljs.core.truth_(doc.requestFullscreen)){
return doc.requestFullscreen();
} else {
if(cljs.core.truth_(doc.mozRequestFullScreen)){
return doc.mozRequestFullScreen();
} else {
if(cljs.core.truth_(doc.webkitRequestFullscreen)){
return doc.webkitRequestFullscreen();
} else {
if(cljs.core.truth_(doc.msRequestFullscreen)){
return doc.msRequestFullscreen();
} else {
return null;

}
}
}
}
});

//# sourceMappingURL=core.js.map