// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28708_28722 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28709_28723 = null;
var count__28710_28724 = (0);
var i__28711_28725 = (0);
while(true){
if((i__28711_28725 < count__28710_28724)){
var f_28726 = cljs.core._nth.call(null,chunk__28709_28723,i__28711_28725);
cljs.core.println.call(null,"  ",f_28726);

var G__28727 = seq__28708_28722;
var G__28728 = chunk__28709_28723;
var G__28729 = count__28710_28724;
var G__28730 = (i__28711_28725 + (1));
seq__28708_28722 = G__28727;
chunk__28709_28723 = G__28728;
count__28710_28724 = G__28729;
i__28711_28725 = G__28730;
continue;
} else {
var temp__4657__auto___28731 = cljs.core.seq.call(null,seq__28708_28722);
if(temp__4657__auto___28731){
var seq__28708_28732__$1 = temp__4657__auto___28731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28708_28732__$1)){
var c__19078__auto___28733 = cljs.core.chunk_first.call(null,seq__28708_28732__$1);
var G__28734 = cljs.core.chunk_rest.call(null,seq__28708_28732__$1);
var G__28735 = c__19078__auto___28733;
var G__28736 = cljs.core.count.call(null,c__19078__auto___28733);
var G__28737 = (0);
seq__28708_28722 = G__28734;
chunk__28709_28723 = G__28735;
count__28710_28724 = G__28736;
i__28711_28725 = G__28737;
continue;
} else {
var f_28738 = cljs.core.first.call(null,seq__28708_28732__$1);
cljs.core.println.call(null,"  ",f_28738);

var G__28739 = cljs.core.next.call(null,seq__28708_28732__$1);
var G__28740 = null;
var G__28741 = (0);
var G__28742 = (0);
seq__28708_28722 = G__28739;
chunk__28709_28723 = G__28740;
count__28710_28724 = G__28741;
i__28711_28725 = G__28742;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28743 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18275__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28743);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28743)))?cljs.core.second.call(null,arglists_28743):arglists_28743));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28712 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28713 = null;
var count__28714 = (0);
var i__28715 = (0);
while(true){
if((i__28715 < count__28714)){
var vec__28716 = cljs.core._nth.call(null,chunk__28713,i__28715);
var name = cljs.core.nth.call(null,vec__28716,(0),null);
var map__28717 = cljs.core.nth.call(null,vec__28716,(1),null);
var map__28717__$1 = ((((!((map__28717 == null)))?((((map__28717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28717):map__28717);
var doc = cljs.core.get.call(null,map__28717__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28717__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28744 = seq__28712;
var G__28745 = chunk__28713;
var G__28746 = count__28714;
var G__28747 = (i__28715 + (1));
seq__28712 = G__28744;
chunk__28713 = G__28745;
count__28714 = G__28746;
i__28715 = G__28747;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28712);
if(temp__4657__auto__){
var seq__28712__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28712__$1)){
var c__19078__auto__ = cljs.core.chunk_first.call(null,seq__28712__$1);
var G__28748 = cljs.core.chunk_rest.call(null,seq__28712__$1);
var G__28749 = c__19078__auto__;
var G__28750 = cljs.core.count.call(null,c__19078__auto__);
var G__28751 = (0);
seq__28712 = G__28748;
chunk__28713 = G__28749;
count__28714 = G__28750;
i__28715 = G__28751;
continue;
} else {
var vec__28719 = cljs.core.first.call(null,seq__28712__$1);
var name = cljs.core.nth.call(null,vec__28719,(0),null);
var map__28720 = cljs.core.nth.call(null,vec__28719,(1),null);
var map__28720__$1 = ((((!((map__28720 == null)))?((((map__28720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28720):map__28720);
var doc = cljs.core.get.call(null,map__28720__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28720__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28752 = cljs.core.next.call(null,seq__28712__$1);
var G__28753 = null;
var G__28754 = (0);
var G__28755 = (0);
seq__28712 = G__28752;
chunk__28713 = G__28753;
count__28714 = G__28754;
i__28715 = G__28755;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map