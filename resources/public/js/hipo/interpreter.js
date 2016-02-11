// Compiled by ClojureScript 1.7.228 {}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__19464){
var map__19467 = p__19464;
var map__19467__$1 = ((((!((map__19467 == null)))?((((map__19467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19467):map__19467);
var m = map__19467__$1;
var interceptors = cljs.core.get.call(null,map__19467__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(!((ov === nv))){
var temp__4655__auto__ = hipo.hiccup.listener_name__GT_event_name.call(null,cljs.core.name.call(null,sok));
if(cljs.core.truth_(temp__4655__auto__)){
var en = temp__4655__auto__;
if(!((cljs.core.map_QMARK_.call(null,ov)) && (cljs.core.map_QMARK_.call(null,nv)) && ((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ov) === new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nv))))){
var b__19401__auto__ = ((function (en,temp__4655__auto__,map__19467,map__19467__$1,m,interceptors){
return (function (){
var hn = [cljs.core.str("hipo_listener_"),cljs.core.str(en)].join('');
var temp__4655__auto___19469__$1 = (el[hn]);
if(cljs.core.truth_(temp__4655__auto___19469__$1)){
var l_19470 = temp__4655__auto___19469__$1;
el.removeEventListener(en,l_19470);
} else {
}

var temp__4657__auto__ = (function (){var or__18275__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(nv);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return nv;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var nv__$1 = temp__4657__auto__;
el.addEventListener(en,nv__$1);

return (el[hn] = nv__$1);
} else {
return null;
}
});})(en,temp__4655__auto__,map__19467,map__19467__$1,m,interceptors))
;
var v__19402__auto__ = interceptors;
if((cljs.core.not.call(null,v__19402__auto__)) || (cljs.core.empty_QMARK_.call(null,v__19402__auto__))){
return b__19401__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__19401__auto__,v__19402__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-handler","update-handler",1389859106):new cljs.core.Keyword(null,"remove-handler","remove-handler",389960218)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
} else {
return null;
}
} else {
var b__19401__auto__ = ((function (temp__4655__auto__,map__19467,map__19467__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_.call(null,el,m,ns,tag,sok,ov,nv);
});})(temp__4655__auto__,map__19467,map__19467__$1,m,interceptors))
;
var v__19402__auto__ = interceptors;
if((cljs.core.not.call(null,v__19402__auto__)) || (cljs.core.empty_QMARK_.call(null,v__19402__auto__))){
return b__19401__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__19401__auto__,v__19402__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530):new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
}
} else {
return null;
}
});
hipo.interpreter.append_children_BANG_ = (function hipo$interpreter$append_children_BANG_(el,v,m){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var v__$1 = hipo.hiccup.flatten_children.call(null,v);
while(true){
if(cljs.core.empty_QMARK_.call(null,v__$1)){
return null;
} else {
var temp__4655__auto___19471 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___19471)){
var h_19472 = temp__4655__auto___19471;
el.appendChild(hipo.interpreter.create_child.call(null,h_19472,m));
} else {
}

var G__19473 = cljs.core.rest.call(null,v__$1);
v__$1 = G__19473;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element.call(null,ns,tag);
var seq__19480_19486 = cljs.core.seq.call(null,attrs);
var chunk__19481_19487 = null;
var count__19482_19488 = (0);
var i__19483_19489 = (0);
while(true){
if((i__19483_19489 < count__19482_19488)){
var vec__19484_19490 = cljs.core._nth.call(null,chunk__19481_19487,i__19483_19489);
var sok_19491 = cljs.core.nth.call(null,vec__19484_19490,(0),null);
var v_19492 = cljs.core.nth.call(null,vec__19484_19490,(1),null);
if(cljs.core.truth_(v_19492)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_19491,null,v_19492,m);
} else {
}

var G__19493 = seq__19480_19486;
var G__19494 = chunk__19481_19487;
var G__19495 = count__19482_19488;
var G__19496 = (i__19483_19489 + (1));
seq__19480_19486 = G__19493;
chunk__19481_19487 = G__19494;
count__19482_19488 = G__19495;
i__19483_19489 = G__19496;
continue;
} else {
var temp__4657__auto___19497 = cljs.core.seq.call(null,seq__19480_19486);
if(temp__4657__auto___19497){
var seq__19480_19498__$1 = temp__4657__auto___19497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19480_19498__$1)){
var c__19078__auto___19499 = cljs.core.chunk_first.call(null,seq__19480_19498__$1);
var G__19500 = cljs.core.chunk_rest.call(null,seq__19480_19498__$1);
var G__19501 = c__19078__auto___19499;
var G__19502 = cljs.core.count.call(null,c__19078__auto___19499);
var G__19503 = (0);
seq__19480_19486 = G__19500;
chunk__19481_19487 = G__19501;
count__19482_19488 = G__19502;
i__19483_19489 = G__19503;
continue;
} else {
var vec__19485_19504 = cljs.core.first.call(null,seq__19480_19498__$1);
var sok_19505 = cljs.core.nth.call(null,vec__19485_19504,(0),null);
var v_19506 = cljs.core.nth.call(null,vec__19485_19504,(1),null);
if(cljs.core.truth_(v_19506)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_19505,null,v_19506,m);
} else {
}

var G__19507 = cljs.core.next.call(null,seq__19480_19498__$1);
var G__19508 = null;
var G__19509 = (0);
var G__19510 = (0);
seq__19480_19486 = G__19507;
chunk__19481_19487 = G__19508;
count__19482_19488 = G__19509;
i__19483_19489 = G__19510;
continue;
}
} else {
}
}
break;
}

return el;
});
hipo.interpreter.create_element = (function hipo$interpreter$create_element(ns,tag,attrs,m){
var temp__4655__auto__ = new cljs.core.Keyword(null,"create-element-fn","create-element-fn",827380427).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,ns,tag,attrs,m);
} else {
return hipo.interpreter.default_create_element.call(null,ns,tag,attrs,m);
}
});
hipo.interpreter.create_vector = (function hipo$interpreter$create_vector(h,m){
if(cljs.core.vector_QMARK_.call(null,h)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"h","h",-1544777029,null))))].join('')));
}

var key = hipo.hiccup.keyns.call(null,h);
var tag = hipo.hiccup.tag.call(null,h);
var attrs = hipo.hiccup.attributes.call(null,h);
var children = hipo.hiccup.children.call(null,h);
var el = hipo.interpreter.create_element.call(null,hipo.hiccup.key__GT_namespace.call(null,key,m),tag,attrs,m);
if(cljs.core.truth_(children)){
hipo.interpreter.append_children_BANG_.call(null,el,children,m);
} else {
}

return el;
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o,m){
if(cljs.core.truth_((function (){var or__18275__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return cljs.core.vector_QMARK_.call(null,o);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("hic","literal?","hic/literal?",1992923056,null),new cljs.core.Symbol(null,"o","o",290524299,null)),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"o","o",290524299,null)))))].join('')));
}

if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,o))){
return document.createTextNode(o);
} else {
return hipo.interpreter.create_vector.call(null,o,m);
}
});
hipo.interpreter.append_to_parent = (function hipo$interpreter$append_to_parent(el,o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
return hipo.interpreter.append_children_BANG_.call(null,el,cljs.core.vec.call(null,o),m);
} else {
if(!((o == null))){
return el.appendChild(hipo.interpreter.create_child.call(null,o,m));
} else {
return null;
}
}
});
hipo.interpreter.create = (function hipo$interpreter$create(o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
var f = document.createDocumentFragment();
hipo.interpreter.append_children_BANG_.call(null,f,cljs.core.vec.call(null,o),m);

return f;
} else {
if(!((o == null))){
return hipo.interpreter.create_child.call(null,o,m);
} else {
return null;
}
}
});
hipo.interpreter.reconciliate_attributes_BANG_ = (function hipo$interpreter$reconciliate_attributes_BANG_(el,ns,tag,om,nm,m){
var seq__19523_19535 = cljs.core.seq.call(null,nm);
var chunk__19525_19536 = null;
var count__19526_19537 = (0);
var i__19527_19538 = (0);
while(true){
if((i__19527_19538 < count__19526_19537)){
var vec__19529_19539 = cljs.core._nth.call(null,chunk__19525_19536,i__19527_19538);
var sok_19540 = cljs.core.nth.call(null,vec__19529_19539,(0),null);
var nv_19541 = cljs.core.nth.call(null,vec__19529_19539,(1),null);
var ov_19542 = cljs.core.get.call(null,om,sok_19540);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_19540,ov_19542,nv_19541,m);

var G__19543 = seq__19523_19535;
var G__19544 = chunk__19525_19536;
var G__19545 = count__19526_19537;
var G__19546 = (i__19527_19538 + (1));
seq__19523_19535 = G__19543;
chunk__19525_19536 = G__19544;
count__19526_19537 = G__19545;
i__19527_19538 = G__19546;
continue;
} else {
var temp__4657__auto___19547 = cljs.core.seq.call(null,seq__19523_19535);
if(temp__4657__auto___19547){
var seq__19523_19548__$1 = temp__4657__auto___19547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19523_19548__$1)){
var c__19078__auto___19549 = cljs.core.chunk_first.call(null,seq__19523_19548__$1);
var G__19550 = cljs.core.chunk_rest.call(null,seq__19523_19548__$1);
var G__19551 = c__19078__auto___19549;
var G__19552 = cljs.core.count.call(null,c__19078__auto___19549);
var G__19553 = (0);
seq__19523_19535 = G__19550;
chunk__19525_19536 = G__19551;
count__19526_19537 = G__19552;
i__19527_19538 = G__19553;
continue;
} else {
var vec__19530_19554 = cljs.core.first.call(null,seq__19523_19548__$1);
var sok_19555 = cljs.core.nth.call(null,vec__19530_19554,(0),null);
var nv_19556 = cljs.core.nth.call(null,vec__19530_19554,(1),null);
var ov_19557 = cljs.core.get.call(null,om,sok_19555);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_19555,ov_19557,nv_19556,m);

var G__19558 = cljs.core.next.call(null,seq__19523_19548__$1);
var G__19559 = null;
var G__19560 = (0);
var G__19561 = (0);
seq__19523_19535 = G__19558;
chunk__19525_19536 = G__19559;
count__19526_19537 = G__19560;
i__19527_19538 = G__19561;
continue;
}
} else {
}
}
break;
}

var seq__19531 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__19532 = null;
var count__19533 = (0);
var i__19534 = (0);
while(true){
if((i__19534 < count__19533)){
var sok = cljs.core._nth.call(null,chunk__19532,i__19534);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);

var G__19562 = seq__19531;
var G__19563 = chunk__19532;
var G__19564 = count__19533;
var G__19565 = (i__19534 + (1));
seq__19531 = G__19562;
chunk__19532 = G__19563;
count__19533 = G__19564;
i__19534 = G__19565;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19531);
if(temp__4657__auto__){
var seq__19531__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19531__$1)){
var c__19078__auto__ = cljs.core.chunk_first.call(null,seq__19531__$1);
var G__19566 = cljs.core.chunk_rest.call(null,seq__19531__$1);
var G__19567 = c__19078__auto__;
var G__19568 = cljs.core.count.call(null,c__19078__auto__);
var G__19569 = (0);
seq__19531 = G__19566;
chunk__19532 = G__19567;
count__19533 = G__19568;
i__19534 = G__19569;
continue;
} else {
var sok = cljs.core.first.call(null,seq__19531__$1);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);

var G__19570 = cljs.core.next.call(null,seq__19531__$1);
var G__19571 = null;
var G__19572 = (0);
var G__19573 = (0);
seq__19531 = G__19570;
chunk__19532 = G__19571;
count__19533 = G__19572;
i__19534 = G__19573;
continue;
}
} else {
return null;
}
}
break;
}
});
hipo.interpreter.child_key = (function hipo$interpreter$child_key(h){
return new cljs.core.Keyword("hipo","key","hipo/key",-1519246363).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,h));
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__19047__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__19578(s__19579){
return (new cljs.core.LazySeq(null,(function (){
var s__19579__$1 = s__19579;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19579__$1);
if(temp__4657__auto__){
var s__19579__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19579__$2)){
var c__19045__auto__ = cljs.core.chunk_first.call(null,s__19579__$2);
var size__19046__auto__ = cljs.core.count.call(null,c__19045__auto__);
var b__19581 = cljs.core.chunk_buffer.call(null,size__19046__auto__);
if((function (){var i__19580 = (0);
while(true){
if((i__19580 < size__19046__auto__)){
var ih = cljs.core._nth.call(null,c__19045__auto__,i__19580);
cljs.core.chunk_append.call(null,b__19581,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__19582 = (i__19580 + (1));
i__19580 = G__19582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19581),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__19578.call(null,cljs.core.chunk_rest.call(null,s__19579__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19581),null);
}
} else {
var ih = cljs.core.first.call(null,s__19579__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__19578.call(null,cljs.core.rest.call(null,s__19579__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19047__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__19047__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__19047__auto__))
,v));
})());
});
/**
 * Reconciliate a vector of children based on their associated key.
 */
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__19583){
var map__19596 = p__19583;
var map__19596__$1 = ((((!((map__19596 == null)))?((((map__19596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19596):map__19596);
var m = map__19596__$1;
var interceptors = cljs.core.get.call(null,map__19596__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var om = hipo.interpreter.keyed_children__GT_indexed_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__19598_19608 = cljs.core.seq.call(null,nm);
var chunk__19599_19609 = null;
var count__19600_19610 = (0);
var i__19601_19611 = (0);
while(true){
if((i__19601_19611 < count__19600_19610)){
var vec__19602_19612 = cljs.core._nth.call(null,chunk__19599_19609,i__19601_19611);
var i_19613 = cljs.core.nth.call(null,vec__19602_19612,(0),null);
var vec__19603_19614 = cljs.core.nth.call(null,vec__19602_19612,(1),null);
var ii_19615 = cljs.core.nth.call(null,vec__19603_19614,(0),null);
var h_19616 = cljs.core.nth.call(null,vec__19603_19614,(1),null);
var temp__4655__auto___19617 = cljs.core.get.call(null,om,i_19613);
if(cljs.core.truth_(temp__4655__auto___19617)){
var vec__19604_19618 = temp__4655__auto___19617;
var iii_19619 = cljs.core.nth.call(null,vec__19604_19618,(0),null);
var oh_19620 = cljs.core.nth.call(null,vec__19604_19618,(1),null);
var cel_19621 = cljs.core.nth.call(null,cs,iii_19619);
if((ii_19615 === iii_19619)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_19621,oh_19620,h_19616,m);
} else {
var b__19401__auto___19622 = ((function (seq__19598_19608,chunk__19599_19609,count__19600_19610,i__19601_19611,cel_19621,vec__19604_19618,iii_19619,oh_19620,temp__4655__auto___19617,vec__19602_19612,i_19613,vec__19603_19614,ii_19615,h_19616,om,nm,cs,map__19596,map__19596__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_19621);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_19620,h_19616,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_19615,ncel);
});})(seq__19598_19608,chunk__19599_19609,count__19600_19610,i__19601_19611,cel_19621,vec__19604_19618,iii_19619,oh_19620,temp__4655__auto___19617,vec__19602_19612,i_19613,vec__19603_19614,ii_19615,h_19616,om,nm,cs,map__19596,map__19596__$1,m,interceptors))
;
var v__19402__auto___19623 = interceptors;
if((cljs.core.not.call(null,v__19402__auto___19623)) || (cljs.core.empty_QMARK_.call(null,v__19402__auto___19623))){
b__19401__auto___19622.call(null);
} else {
hipo.interceptor.call.call(null,b__19401__auto___19622,v__19402__auto___19623,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_19616,new cljs.core.Keyword(null,"index","index",-1531685915),ii_19615], null));
}
}
} else {
var b__19401__auto___19624 = ((function (seq__19598_19608,chunk__19599_19609,count__19600_19610,i__19601_19611,temp__4655__auto___19617,vec__19602_19612,i_19613,vec__19603_19614,ii_19615,h_19616,om,nm,cs,map__19596,map__19596__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_19615,hipo.interpreter.create_child.call(null,h_19616,m));
});})(seq__19598_19608,chunk__19599_19609,count__19600_19610,i__19601_19611,temp__4655__auto___19617,vec__19602_19612,i_19613,vec__19603_19614,ii_19615,h_19616,om,nm,cs,map__19596,map__19596__$1,m,interceptors))
;
var v__19402__auto___19625 = interceptors;
if((cljs.core.not.call(null,v__19402__auto___19625)) || (cljs.core.empty_QMARK_.call(null,v__19402__auto___19625))){
b__19401__auto___19624.call(null);
} else {
hipo.interceptor.call.call(null,b__19401__auto___19624,v__19402__auto___19625,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_19616,new cljs.core.Keyword(null,"index","index",-1531685915),ii_19615], null));
}
}

var G__19626 = seq__19598_19608;
var G__19627 = chunk__19599_19609;
var G__19628 = count__19600_19610;
var G__19629 = (i__19601_19611 + (1));
seq__19598_19608 = G__19626;
chunk__19599_19609 = G__19627;
count__19600_19610 = G__19628;
i__19601_19611 = G__19629;
continue;
} else {
var temp__4657__auto___19630 = cljs.core.seq.call(null,seq__19598_19608);
if(temp__4657__auto___19630){
var seq__19598_19631__$1 = temp__4657__auto___19630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19598_19631__$1)){
var c__19078__auto___19632 = cljs.core.chunk_first.call(null,seq__19598_19631__$1);
var G__19633 = cljs.core.chunk_rest.call(null,seq__19598_19631__$1);
var G__19634 = c__19078__auto___19632;
var G__19635 = cljs.core.count.call(null,c__19078__auto___19632);
var G__19636 = (0);
seq__19598_19608 = G__19633;
chunk__19599_19609 = G__19634;
count__19600_19610 = G__19635;
i__19601_19611 = G__19636;
continue;
} else {
var vec__19605_19637 = cljs.core.first.call(null,seq__19598_19631__$1);
var i_19638 = cljs.core.nth.call(null,vec__19605_19637,(0),null);
var vec__19606_19639 = cljs.core.nth.call(null,vec__19605_19637,(1),null);
var ii_19640 = cljs.core.nth.call(null,vec__19606_19639,(0),null);
var h_19641 = cljs.core.nth.call(null,vec__19606_19639,(1),null);
var temp__4655__auto___19642 = cljs.core.get.call(null,om,i_19638);
if(cljs.core.truth_(temp__4655__auto___19642)){
var vec__19607_19643 = temp__4655__auto___19642;
var iii_19644 = cljs.core.nth.call(null,vec__19607_19643,(0),null);
var oh_19645 = cljs.core.nth.call(null,vec__19607_19643,(1),null);
var cel_19646 = cljs.core.nth.call(null,cs,iii_19644);
if((ii_19640 === iii_19644)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_19646,oh_19645,h_19641,m);
} else {
var b__19401__auto___19647 = ((function (seq__19598_19608,chunk__19599_19609,count__19600_19610,i__19601_19611,cel_19646,vec__19607_19643,iii_19644,oh_19645,temp__4655__auto___19642,vec__19605_19637,i_19638,vec__19606_19639,ii_19640,h_19641,seq__19598_19631__$1,temp__4657__auto___19630,om,nm,cs,map__19596,map__19596__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_19646);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_19645,h_19641,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_19640,ncel);
});})(seq__19598_19608,chunk__19599_19609,count__19600_19610,i__19601_19611,cel_19646,vec__19607_19643,iii_19644,oh_19645,temp__4655__auto___19642,vec__19605_19637,i_19638,vec__19606_19639,ii_19640,h_19641,seq__19598_19631__$1,temp__4657__auto___19630,om,nm,cs,map__19596,map__19596__$1,m,interceptors))
;
var v__19402__auto___19648 = interceptors;
if((cljs.core.not.call(null,v__19402__auto___19648)) || (cljs.core.empty_QMARK_.call(null,v__19402__auto___19648))){
b__19401__auto___19647.call(null);
} else {
hipo.interceptor.call.call(null,b__19401__auto___19647,v__19402__auto___19648,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_19641,new cljs.core.Keyword(null,"index","index",-1531685915),ii_19640], null));
}
}
} else {
var b__19401__auto___19649 = ((function (seq__19598_19608,chunk__19599_19609,count__19600_19610,i__19601_19611,temp__4655__auto___19642,vec__19605_19637,i_19638,vec__19606_19639,ii_19640,h_19641,seq__19598_19631__$1,temp__4657__auto___19630,om,nm,cs,map__19596,map__19596__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_19640,hipo.interpreter.create_child.call(null,h_19641,m));
});})(seq__19598_19608,chunk__19599_19609,count__19600_19610,i__19601_19611,temp__4655__auto___19642,vec__19605_19637,i_19638,vec__19606_19639,ii_19640,h_19641,seq__19598_19631__$1,temp__4657__auto___19630,om,nm,cs,map__19596,map__19596__$1,m,interceptors))
;
var v__19402__auto___19650 = interceptors;
if((cljs.core.not.call(null,v__19402__auto___19650)) || (cljs.core.empty_QMARK_.call(null,v__19402__auto___19650))){
b__19401__auto___19649.call(null);
} else {
hipo.interceptor.call.call(null,b__19401__auto___19649,v__19402__auto___19650,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_19641,new cljs.core.Keyword(null,"index","index",-1531685915),ii_19640], null));
}
}

var G__19651 = cljs.core.next.call(null,seq__19598_19631__$1);
var G__19652 = null;
var G__19653 = (0);
var G__19654 = (0);
seq__19598_19608 = G__19651;
chunk__19599_19609 = G__19652;
count__19600_19610 = G__19653;
i__19601_19611 = G__19654;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
if((d > (0))){
var b__19401__auto__ = ((function (d,om,nm,cs,map__19596,map__19596__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(d,om,nm,cs,map__19596,map__19596__$1,m,interceptors))
;
var v__19402__auto__ = interceptors;
if((cljs.core.not.call(null,v__19402__auto__)) || (cljs.core.empty_QMARK_.call(null,v__19402__auto__))){
return b__19401__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__19401__auto__,v__19402__auto__,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__19655){
var map__19658 = p__19655;
var map__19658__$1 = ((((!((map__19658 == null)))?((((map__19658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19658):map__19658);
var m = map__19658__$1;
var interceptors = cljs.core.get.call(null,map__19658__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var oc = cljs.core.count.call(null,och);
var nc = cljs.core.count.call(null,nch);
var d = (oc - nc);
if((d > (0))){
var b__19401__auto___19660 = ((function (oc,nc,d,map__19658,map__19658__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(oc,nc,d,map__19658,map__19658__$1,m,interceptors))
;
var v__19402__auto___19661 = interceptors;
if((cljs.core.not.call(null,v__19402__auto___19661)) || (cljs.core.empty_QMARK_.call(null,v__19402__auto___19661))){
b__19401__auto___19660.call(null);
} else {
hipo.interceptor.call.call(null,b__19401__auto___19660,v__19402__auto___19661,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
}

var n__19178__auto___19662 = (function (){var x__18613__auto__ = oc;
var y__18614__auto__ = nc;
return ((x__18613__auto__ < y__18614__auto__) ? x__18613__auto__ : y__18614__auto__);
})();
var i_19663 = (0);
while(true){
if((i_19663 < n__19178__auto___19662)){
var ov_19664 = cljs.core.nth.call(null,och,i_19663);
var nv_19665 = cljs.core.nth.call(null,nch,i_19663);
if(!(((ov_19664 == null)) && ((nv_19665 == null)))){
if((ov_19664 == null)){
var b__19401__auto___19666 = ((function (i_19663,ov_19664,nv_19665,n__19178__auto___19662,oc,nc,d,map__19658,map__19658__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,i_19663,hipo.interpreter.create_child.call(null,nv_19665,m));
});})(i_19663,ov_19664,nv_19665,n__19178__auto___19662,oc,nc,d,map__19658,map__19658__$1,m,interceptors))
;
var v__19402__auto___19667 = interceptors;
if((cljs.core.not.call(null,v__19402__auto___19667)) || (cljs.core.empty_QMARK_.call(null,v__19402__auto___19667))){
b__19401__auto___19666.call(null);
} else {
hipo.interceptor.call.call(null,b__19401__auto___19666,v__19402__auto___19667,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nv_19665,new cljs.core.Keyword(null,"index","index",-1531685915),i_19663], null));
}
} else {
if((nv_19665 == null)){
var b__19401__auto___19668 = ((function (i_19663,ov_19664,nv_19665,n__19178__auto___19662,oc,nc,d,map__19658,map__19658__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_.call(null,el,i_19663);
});})(i_19663,ov_19664,nv_19665,n__19178__auto___19662,oc,nc,d,map__19658,map__19658__$1,m,interceptors))
;
var v__19402__auto___19669 = interceptors;
if((cljs.core.not.call(null,v__19402__auto___19669)) || (cljs.core.empty_QMARK_.call(null,v__19402__auto___19669))){
b__19401__auto___19668.call(null);
} else {
hipo.interceptor.call.call(null,b__19401__auto___19668,v__19402__auto___19669,new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"index","index",-1531685915),i_19663], null));
}
} else {
var temp__4655__auto___19670 = hipo.dom.child.call(null,el,i_19663);
if(cljs.core.truth_(temp__4655__auto___19670)){
var cel_19671 = temp__4655__auto___19670;
hipo.interpreter.reconciliate_BANG_.call(null,cel_19671,ov_19664,nv_19665,m);
} else {
}

}
}
} else {
}

var G__19672 = (i_19663 + (1));
i_19663 = G__19672;
continue;
} else {
}
break;
}

if((d < (0))){
if(((-1) === d)){
var temp__4655__auto__ = cljs.core.nth.call(null,nch,oc);
if(cljs.core.truth_(temp__4655__auto__)){
var h = temp__4655__auto__;
var b__19401__auto__ = ((function (h,temp__4655__auto__,oc,nc,d,map__19658,map__19658__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child.call(null,h,m));
});})(h,temp__4655__auto__,oc,nc,d,map__19658,map__19658__$1,m,interceptors))
;
var v__19402__auto__ = interceptors;
if((cljs.core.not.call(null,v__19402__auto__)) || (cljs.core.empty_QMARK_.call(null,v__19402__auto__))){
return b__19401__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__19401__auto__,v__19402__auto__,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.call(null,nch,oc));
var b__19401__auto___19673 = ((function (f,cs,oc,nc,d,map__19658,map__19658__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs,m);
});})(f,cs,oc,nc,d,map__19658,map__19658__$1,m,interceptors))
;
var v__19402__auto___19674 = interceptors;
if((cljs.core.not.call(null,v__19402__auto___19674)) || (cljs.core.empty_QMARK_.call(null,v__19402__auto___19674))){
b__19401__auto___19673.call(null);
} else {
hipo.interceptor.call.call(null,b__19401__auto___19673,v__19402__auto___19674,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
}

return el.appendChild(f);
}
} else {
return null;
}
});
hipo.interpreter.keyed_children_QMARK_ = (function hipo$interpreter$keyed_children_QMARK_(v){
return !((hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,v,(0))) == null));
});
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__19675){
var map__19678 = p__19675;
var map__19678__$1 = ((((!((map__19678 == null)))?((((map__19678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19678):map__19678);
var m = map__19678__$1;
var interceptors = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.empty_QMARK_.call(null,nch)){
if(!(cljs.core.empty_QMARK_.call(null,och))){
var b__19401__auto__ = ((function (map__19678,map__19678__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(map__19678,map__19678__$1,m,interceptors))
;
var v__19402__auto__ = interceptors;
if((cljs.core.not.call(null,v__19402__auto__)) || (cljs.core.empty_QMARK_.call(null,v__19402__auto__))){
return b__19401__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__19401__auto__,v__19402__auto__,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
}
} else {
return null;
}
} else {
if(cljs.core.truth_(hipo.interpreter.keyed_children_QMARK_.call(null,nch))){
return hipo.interpreter.reconciliate_keyed_children_BANG_.call(null,el,och,nch,m);
} else {
return hipo.interpreter.reconciliate_non_keyed_children_BANG_.call(null,el,och,nch,m);
}
}
});
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__19680){
var map__19683 = p__19680;
var map__19683__$1 = ((((!((map__19683 == null)))?((((map__19683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19683):map__19683);
var m = map__19683__$1;
var interceptors = cljs.core.get.call(null,map__19683__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.vector_QMARK_.call(null,nh)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"nh","nh",1280017554,null))))].join('')));
}

if(cljs.core.truth_((function (){var or__18275__auto__ = hipo.hiccup.literal_QMARK_.call(null,oh);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return !((hipo.hiccup.tag.call(null,nh) === hipo.hiccup.tag.call(null,oh)));
}
})())){
var nel = hipo.interpreter.create_child.call(null,nh,m);
var b__19401__auto__ = ((function (nel,map__19683,map__19683__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentElement",".-parentElement",407983630,null),new cljs.core.Symbol(null,"el","el",22330409,null))))].join('')));
}

return hipo.dom.replace_BANG_.call(null,el,nel);
});})(nel,map__19683,map__19683__$1,m,interceptors))
;
var v__19402__auto__ = interceptors;
if((cljs.core.not.call(null,v__19402__auto__)) || (cljs.core.empty_QMARK_.call(null,v__19402__auto__))){
return b__19401__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__19401__auto__,v__19402__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
var om = hipo.hiccup.attributes.call(null,oh);
var nm = hipo.hiccup.attributes.call(null,nh);
var och = hipo.hiccup.children.call(null,oh);
var nch = hipo.hiccup.children.call(null,nh);
var b__19401__auto___19685 = ((function (om,nm,och,nch,map__19683,map__19683__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),m);
});})(om,nm,och,nch,map__19683,map__19683__$1,m,interceptors))
;
var v__19402__auto___19686 = interceptors;
if((cljs.core.not.call(null,v__19402__auto___19686)) || (cljs.core.empty_QMARK_.call(null,v__19402__auto___19686))){
b__19401__auto___19685.call(null);
} else {
hipo.interceptor.call.call(null,b__19401__auto___19685,v__19402__auto___19686,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),och,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_.call(null,el,hipo.hiccup.keyns.call(null,nh),hipo.hiccup.tag.call(null,nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__19687){
var map__19690 = p__19687;
var map__19690__$1 = ((((!((map__19690 == null)))?((((map__19690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19690):map__19690);
var m = map__19690__$1;
var interceptors = cljs.core.get.call(null,map__19690__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.truth_((function (){var or__18275__auto__ = cljs.core.vector_QMARK_.call(null,nh);
if(or__18275__auto__){
return or__18275__auto__;
} else {
return hipo.hiccup.literal_QMARK_.call(null,nh);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"nh","nh",1280017554,null)),cljs.core.list(new cljs.core.Symbol("hic","literal?","hic/literal?",1992923056,null),new cljs.core.Symbol(null,"nh","nh",1280017554,null)))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

var b__19401__auto__ = ((function (map__19690,map__19690__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,nh))){
if(!((oh === nh))){
var b__19401__auto__ = ((function (map__19690,map__19690__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentElement",".-parentElement",407983630,null),new cljs.core.Symbol(null,"el","el",22330409,null))))].join('')));
}

return hipo.dom.replace_text_BANG_.call(null,el,[cljs.core.str(nh)].join(''));
});})(map__19690,map__19690__$1,m,interceptors))
;
var v__19402__auto__ = interceptors;
if((cljs.core.not.call(null,v__19402__auto__)) || (cljs.core.empty_QMARK_.call(null,v__19402__auto__))){
return b__19401__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__19401__auto__,v__19402__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_.call(null,el,oh,nh,m);
}
});})(map__19690,map__19690__$1,m,interceptors))
;
var v__19402__auto__ = interceptors;
if((cljs.core.not.call(null,v__19402__auto__)) || (cljs.core.empty_QMARK_.call(null,v__19402__auto__))){
return b__19401__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__19401__auto__,v__19402__auto__,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),oh,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nh], null));
}
});

//# sourceMappingURL=interpreter.js.map