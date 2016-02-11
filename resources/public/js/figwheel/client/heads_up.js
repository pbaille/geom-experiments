// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19340__auto__ = [];
var len__19333__auto___28893 = arguments.length;
var i__19334__auto___28894 = (0);
while(true){
if((i__19334__auto___28894 < len__19333__auto___28893)){
args__19340__auto__.push((arguments[i__19334__auto___28894]));

var G__28895 = (i__19334__auto___28894 + (1));
i__19334__auto___28894 = G__28895;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((2) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19341__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28885_28896 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28886_28897 = null;
var count__28887_28898 = (0);
var i__28888_28899 = (0);
while(true){
if((i__28888_28899 < count__28887_28898)){
var k_28900 = cljs.core._nth.call(null,chunk__28886_28897,i__28888_28899);
e.setAttribute(cljs.core.name.call(null,k_28900),cljs.core.get.call(null,attrs,k_28900));

var G__28901 = seq__28885_28896;
var G__28902 = chunk__28886_28897;
var G__28903 = count__28887_28898;
var G__28904 = (i__28888_28899 + (1));
seq__28885_28896 = G__28901;
chunk__28886_28897 = G__28902;
count__28887_28898 = G__28903;
i__28888_28899 = G__28904;
continue;
} else {
var temp__4657__auto___28905 = cljs.core.seq.call(null,seq__28885_28896);
if(temp__4657__auto___28905){
var seq__28885_28906__$1 = temp__4657__auto___28905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28885_28906__$1)){
var c__19078__auto___28907 = cljs.core.chunk_first.call(null,seq__28885_28906__$1);
var G__28908 = cljs.core.chunk_rest.call(null,seq__28885_28906__$1);
var G__28909 = c__19078__auto___28907;
var G__28910 = cljs.core.count.call(null,c__19078__auto___28907);
var G__28911 = (0);
seq__28885_28896 = G__28908;
chunk__28886_28897 = G__28909;
count__28887_28898 = G__28910;
i__28888_28899 = G__28911;
continue;
} else {
var k_28912 = cljs.core.first.call(null,seq__28885_28906__$1);
e.setAttribute(cljs.core.name.call(null,k_28912),cljs.core.get.call(null,attrs,k_28912));

var G__28913 = cljs.core.next.call(null,seq__28885_28906__$1);
var G__28914 = null;
var G__28915 = (0);
var G__28916 = (0);
seq__28885_28896 = G__28913;
chunk__28886_28897 = G__28914;
count__28887_28898 = G__28915;
i__28888_28899 = G__28916;
continue;
}
} else {
}
}
break;
}

var seq__28889_28917 = cljs.core.seq.call(null,children);
var chunk__28890_28918 = null;
var count__28891_28919 = (0);
var i__28892_28920 = (0);
while(true){
if((i__28892_28920 < count__28891_28919)){
var ch_28921 = cljs.core._nth.call(null,chunk__28890_28918,i__28892_28920);
e.appendChild(ch_28921);

var G__28922 = seq__28889_28917;
var G__28923 = chunk__28890_28918;
var G__28924 = count__28891_28919;
var G__28925 = (i__28892_28920 + (1));
seq__28889_28917 = G__28922;
chunk__28890_28918 = G__28923;
count__28891_28919 = G__28924;
i__28892_28920 = G__28925;
continue;
} else {
var temp__4657__auto___28926 = cljs.core.seq.call(null,seq__28889_28917);
if(temp__4657__auto___28926){
var seq__28889_28927__$1 = temp__4657__auto___28926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28889_28927__$1)){
var c__19078__auto___28928 = cljs.core.chunk_first.call(null,seq__28889_28927__$1);
var G__28929 = cljs.core.chunk_rest.call(null,seq__28889_28927__$1);
var G__28930 = c__19078__auto___28928;
var G__28931 = cljs.core.count.call(null,c__19078__auto___28928);
var G__28932 = (0);
seq__28889_28917 = G__28929;
chunk__28890_28918 = G__28930;
count__28891_28919 = G__28931;
i__28892_28920 = G__28932;
continue;
} else {
var ch_28933 = cljs.core.first.call(null,seq__28889_28927__$1);
e.appendChild(ch_28933);

var G__28934 = cljs.core.next.call(null,seq__28889_28927__$1);
var G__28935 = null;
var G__28936 = (0);
var G__28937 = (0);
seq__28889_28917 = G__28934;
chunk__28890_28918 = G__28935;
count__28891_28919 = G__28936;
i__28892_28920 = G__28937;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28882){
var G__28883 = cljs.core.first.call(null,seq28882);
var seq28882__$1 = cljs.core.next.call(null,seq28882);
var G__28884 = cljs.core.first.call(null,seq28882__$1);
var seq28882__$2 = cljs.core.next.call(null,seq28882__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28883,G__28884,seq28882__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19188__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19189__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19190__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19191__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19192__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19188__auto__,prefer_table__19189__auto__,method_cache__19190__auto__,cached_hierarchy__19191__auto__,hierarchy__19192__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19188__auto__,prefer_table__19189__auto__,method_cache__19190__auto__,cached_hierarchy__19191__auto__,hierarchy__19192__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19192__auto__,method_table__19188__auto__,prefer_table__19189__auto__,method_cache__19190__auto__,cached_hierarchy__19191__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28938 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28938.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28938.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_28938.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28938);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28939,st_map){
var map__28944 = p__28939;
var map__28944__$1 = ((((!((map__28944 == null)))?((((map__28944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28944):map__28944);
var container_el = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28944,map__28944__$1,container_el){
return (function (p__28946){
var vec__28947 = p__28946;
var k = cljs.core.nth.call(null,vec__28947,(0),null);
var v = cljs.core.nth.call(null,vec__28947,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28944,map__28944__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28948,dom_str){
var map__28951 = p__28948;
var map__28951__$1 = ((((!((map__28951 == null)))?((((map__28951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28951):map__28951);
var c = map__28951__$1;
var content_area_el = cljs.core.get.call(null,map__28951__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28953){
var map__28956 = p__28953;
var map__28956__$1 = ((((!((map__28956 == null)))?((((map__28956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28956):map__28956);
var content_area_el = cljs.core.get.call(null,map__28956__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__24790__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto__){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto__){
return (function (state_28999){
var state_val_29000 = (state_28999[(1)]);
if((state_val_29000 === (1))){
var inst_28984 = (state_28999[(7)]);
var inst_28984__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28985 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28986 = ["10px","10px","100%","68px","1.0"];
var inst_28987 = cljs.core.PersistentHashMap.fromArrays(inst_28985,inst_28986);
var inst_28988 = cljs.core.merge.call(null,inst_28987,style);
var inst_28989 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28984__$1,inst_28988);
var inst_28990 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28984__$1,msg);
var inst_28991 = cljs.core.async.timeout.call(null,(300));
var state_28999__$1 = (function (){var statearr_29001 = state_28999;
(statearr_29001[(8)] = inst_28989);

(statearr_29001[(9)] = inst_28990);

(statearr_29001[(7)] = inst_28984__$1);

return statearr_29001;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28999__$1,(2),inst_28991);
} else {
if((state_val_29000 === (2))){
var inst_28984 = (state_28999[(7)]);
var inst_28993 = (state_28999[(2)]);
var inst_28994 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28995 = ["auto"];
var inst_28996 = cljs.core.PersistentHashMap.fromArrays(inst_28994,inst_28995);
var inst_28997 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28984,inst_28996);
var state_28999__$1 = (function (){var statearr_29002 = state_28999;
(statearr_29002[(10)] = inst_28993);

return statearr_29002;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28999__$1,inst_28997);
} else {
return null;
}
}
});})(c__24790__auto__))
;
return ((function (switch__24678__auto__,c__24790__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__24679__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__24679__auto____0 = (function (){
var statearr_29006 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29006[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__24679__auto__);

(statearr_29006[(1)] = (1));

return statearr_29006;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__24679__auto____1 = (function (state_28999){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_28999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e29007){if((e29007 instanceof Object)){
var ex__24682__auto__ = e29007;
var statearr_29008_29010 = state_28999;
(statearr_29008_29010[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29011 = state_28999;
state_28999 = G__29011;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__24679__auto__ = function(state_28999){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24679__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24679__auto____1.call(this,state_28999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__24679__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__24679__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto__))
})();
var state__24792__auto__ = (function (){var statearr_29009 = f__24791__auto__.call(null);
(statearr_29009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto__);

return statearr_29009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto__))
);

return c__24790__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__29013 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__29013,(0),null);
var ln = cljs.core.nth.call(null,vec__29013,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__29016 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__29016,(0),null);
var file_line = cljs.core.nth.call(null,vec__29016,(1),null);
var file_column = cljs.core.nth.call(null,vec__29016,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29016,file_name,file_line,file_column){
return (function (p1__29014_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__29014_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__29016,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18275__auto__ = file_line;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
var and__18263__auto__ = cause;
if(cljs.core.truth_(and__18263__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18263__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__29019 = figwheel.client.heads_up.ensure_container.call(null);
var map__29019__$1 = ((((!((map__29019 == null)))?((((map__29019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29019):map__29019);
var content_area_el = cljs.core.get.call(null,map__29019__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__24790__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto__){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto__){
return (function (state_29067){
var state_val_29068 = (state_29067[(1)]);
if((state_val_29068 === (1))){
var inst_29050 = (state_29067[(7)]);
var inst_29050__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29051 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29052 = ["0.0"];
var inst_29053 = cljs.core.PersistentHashMap.fromArrays(inst_29051,inst_29052);
var inst_29054 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29050__$1,inst_29053);
var inst_29055 = cljs.core.async.timeout.call(null,(300));
var state_29067__$1 = (function (){var statearr_29069 = state_29067;
(statearr_29069[(7)] = inst_29050__$1);

(statearr_29069[(8)] = inst_29054);

return statearr_29069;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29067__$1,(2),inst_29055);
} else {
if((state_val_29068 === (2))){
var inst_29050 = (state_29067[(7)]);
var inst_29057 = (state_29067[(2)]);
var inst_29058 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29059 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29060 = cljs.core.PersistentHashMap.fromArrays(inst_29058,inst_29059);
var inst_29061 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29050,inst_29060);
var inst_29062 = cljs.core.async.timeout.call(null,(200));
var state_29067__$1 = (function (){var statearr_29070 = state_29067;
(statearr_29070[(9)] = inst_29057);

(statearr_29070[(10)] = inst_29061);

return statearr_29070;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29067__$1,(3),inst_29062);
} else {
if((state_val_29068 === (3))){
var inst_29050 = (state_29067[(7)]);
var inst_29064 = (state_29067[(2)]);
var inst_29065 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29050,"");
var state_29067__$1 = (function (){var statearr_29071 = state_29067;
(statearr_29071[(11)] = inst_29064);

return statearr_29071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29067__$1,inst_29065);
} else {
return null;
}
}
}
});})(c__24790__auto__))
;
return ((function (switch__24678__auto__,c__24790__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__24679__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__24679__auto____0 = (function (){
var statearr_29075 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29075[(0)] = figwheel$client$heads_up$clear_$_state_machine__24679__auto__);

(statearr_29075[(1)] = (1));

return statearr_29075;
});
var figwheel$client$heads_up$clear_$_state_machine__24679__auto____1 = (function (state_29067){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_29067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e29076){if((e29076 instanceof Object)){
var ex__24682__auto__ = e29076;
var statearr_29077_29079 = state_29067;
(statearr_29077_29079[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29080 = state_29067;
state_29067 = G__29080;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__24679__auto__ = function(state_29067){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__24679__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__24679__auto____1.call(this,state_29067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__24679__auto____0;
figwheel$client$heads_up$clear_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__24679__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto__))
})();
var state__24792__auto__ = (function (){var statearr_29078 = f__24791__auto__.call(null);
(statearr_29078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto__);

return statearr_29078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto__))
);

return c__24790__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__24790__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto__){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto__){
return (function (state_29112){
var state_val_29113 = (state_29112[(1)]);
if((state_val_29113 === (1))){
var inst_29102 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29112__$1 = state_29112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29112__$1,(2),inst_29102);
} else {
if((state_val_29113 === (2))){
var inst_29104 = (state_29112[(2)]);
var inst_29105 = cljs.core.async.timeout.call(null,(400));
var state_29112__$1 = (function (){var statearr_29114 = state_29112;
(statearr_29114[(7)] = inst_29104);

return statearr_29114;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29112__$1,(3),inst_29105);
} else {
if((state_val_29113 === (3))){
var inst_29107 = (state_29112[(2)]);
var inst_29108 = figwheel.client.heads_up.clear.call(null);
var state_29112__$1 = (function (){var statearr_29115 = state_29112;
(statearr_29115[(8)] = inst_29107);

return statearr_29115;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29112__$1,(4),inst_29108);
} else {
if((state_val_29113 === (4))){
var inst_29110 = (state_29112[(2)]);
var state_29112__$1 = state_29112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29112__$1,inst_29110);
} else {
return null;
}
}
}
}
});})(c__24790__auto__))
;
return ((function (switch__24678__auto__,c__24790__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__24679__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__24679__auto____0 = (function (){
var statearr_29119 = [null,null,null,null,null,null,null,null,null];
(statearr_29119[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__24679__auto__);

(statearr_29119[(1)] = (1));

return statearr_29119;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__24679__auto____1 = (function (state_29112){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_29112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e29120){if((e29120 instanceof Object)){
var ex__24682__auto__ = e29120;
var statearr_29121_29123 = state_29112;
(statearr_29121_29123[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29124 = state_29112;
state_29112 = G__29124;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__24679__auto__ = function(state_29112){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24679__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24679__auto____1.call(this,state_29112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__24679__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__24679__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto__))
})();
var state__24792__auto__ = (function (){var statearr_29122 = f__24791__auto__.call(null);
(statearr_29122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto__);

return statearr_29122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto__))
);

return c__24790__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map