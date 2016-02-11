// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18275__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18275__auto__){
return or__18275__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18275__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27684_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27684_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27689 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27690 = null;
var count__27691 = (0);
var i__27692 = (0);
while(true){
if((i__27692 < count__27691)){
var n = cljs.core._nth.call(null,chunk__27690,i__27692);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27693 = seq__27689;
var G__27694 = chunk__27690;
var G__27695 = count__27691;
var G__27696 = (i__27692 + (1));
seq__27689 = G__27693;
chunk__27690 = G__27694;
count__27691 = G__27695;
i__27692 = G__27696;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27689);
if(temp__4657__auto__){
var seq__27689__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27689__$1)){
var c__19078__auto__ = cljs.core.chunk_first.call(null,seq__27689__$1);
var G__27697 = cljs.core.chunk_rest.call(null,seq__27689__$1);
var G__27698 = c__19078__auto__;
var G__27699 = cljs.core.count.call(null,c__19078__auto__);
var G__27700 = (0);
seq__27689 = G__27697;
chunk__27690 = G__27698;
count__27691 = G__27699;
i__27692 = G__27700;
continue;
} else {
var n = cljs.core.first.call(null,seq__27689__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27701 = cljs.core.next.call(null,seq__27689__$1);
var G__27702 = null;
var G__27703 = (0);
var G__27704 = (0);
seq__27689 = G__27701;
chunk__27690 = G__27702;
count__27691 = G__27703;
i__27692 = G__27704;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27743_27750 = cljs.core.seq.call(null,deps);
var chunk__27744_27751 = null;
var count__27745_27752 = (0);
var i__27746_27753 = (0);
while(true){
if((i__27746_27753 < count__27745_27752)){
var dep_27754 = cljs.core._nth.call(null,chunk__27744_27751,i__27746_27753);
topo_sort_helper_STAR_.call(null,dep_27754,(depth + (1)),state);

var G__27755 = seq__27743_27750;
var G__27756 = chunk__27744_27751;
var G__27757 = count__27745_27752;
var G__27758 = (i__27746_27753 + (1));
seq__27743_27750 = G__27755;
chunk__27744_27751 = G__27756;
count__27745_27752 = G__27757;
i__27746_27753 = G__27758;
continue;
} else {
var temp__4657__auto___27759 = cljs.core.seq.call(null,seq__27743_27750);
if(temp__4657__auto___27759){
var seq__27743_27760__$1 = temp__4657__auto___27759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27743_27760__$1)){
var c__19078__auto___27761 = cljs.core.chunk_first.call(null,seq__27743_27760__$1);
var G__27762 = cljs.core.chunk_rest.call(null,seq__27743_27760__$1);
var G__27763 = c__19078__auto___27761;
var G__27764 = cljs.core.count.call(null,c__19078__auto___27761);
var G__27765 = (0);
seq__27743_27750 = G__27762;
chunk__27744_27751 = G__27763;
count__27745_27752 = G__27764;
i__27746_27753 = G__27765;
continue;
} else {
var dep_27766 = cljs.core.first.call(null,seq__27743_27760__$1);
topo_sort_helper_STAR_.call(null,dep_27766,(depth + (1)),state);

var G__27767 = cljs.core.next.call(null,seq__27743_27760__$1);
var G__27768 = null;
var G__27769 = (0);
var G__27770 = (0);
seq__27743_27750 = G__27767;
chunk__27744_27751 = G__27768;
count__27745_27752 = G__27769;
i__27746_27753 = G__27770;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27747){
var vec__27749 = p__27747;
var x = cljs.core.nth.call(null,vec__27749,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27749,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27749,x,xs,get_deps__$1){
return (function (p1__27705_SHARP_){
return clojure.set.difference.call(null,p1__27705_SHARP_,x);
});})(vec__27749,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27783 = cljs.core.seq.call(null,provides);
var chunk__27784 = null;
var count__27785 = (0);
var i__27786 = (0);
while(true){
if((i__27786 < count__27785)){
var prov = cljs.core._nth.call(null,chunk__27784,i__27786);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27787_27795 = cljs.core.seq.call(null,requires);
var chunk__27788_27796 = null;
var count__27789_27797 = (0);
var i__27790_27798 = (0);
while(true){
if((i__27790_27798 < count__27789_27797)){
var req_27799 = cljs.core._nth.call(null,chunk__27788_27796,i__27790_27798);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27799,prov);

var G__27800 = seq__27787_27795;
var G__27801 = chunk__27788_27796;
var G__27802 = count__27789_27797;
var G__27803 = (i__27790_27798 + (1));
seq__27787_27795 = G__27800;
chunk__27788_27796 = G__27801;
count__27789_27797 = G__27802;
i__27790_27798 = G__27803;
continue;
} else {
var temp__4657__auto___27804 = cljs.core.seq.call(null,seq__27787_27795);
if(temp__4657__auto___27804){
var seq__27787_27805__$1 = temp__4657__auto___27804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27787_27805__$1)){
var c__19078__auto___27806 = cljs.core.chunk_first.call(null,seq__27787_27805__$1);
var G__27807 = cljs.core.chunk_rest.call(null,seq__27787_27805__$1);
var G__27808 = c__19078__auto___27806;
var G__27809 = cljs.core.count.call(null,c__19078__auto___27806);
var G__27810 = (0);
seq__27787_27795 = G__27807;
chunk__27788_27796 = G__27808;
count__27789_27797 = G__27809;
i__27790_27798 = G__27810;
continue;
} else {
var req_27811 = cljs.core.first.call(null,seq__27787_27805__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27811,prov);

var G__27812 = cljs.core.next.call(null,seq__27787_27805__$1);
var G__27813 = null;
var G__27814 = (0);
var G__27815 = (0);
seq__27787_27795 = G__27812;
chunk__27788_27796 = G__27813;
count__27789_27797 = G__27814;
i__27790_27798 = G__27815;
continue;
}
} else {
}
}
break;
}

var G__27816 = seq__27783;
var G__27817 = chunk__27784;
var G__27818 = count__27785;
var G__27819 = (i__27786 + (1));
seq__27783 = G__27816;
chunk__27784 = G__27817;
count__27785 = G__27818;
i__27786 = G__27819;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27783);
if(temp__4657__auto__){
var seq__27783__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27783__$1)){
var c__19078__auto__ = cljs.core.chunk_first.call(null,seq__27783__$1);
var G__27820 = cljs.core.chunk_rest.call(null,seq__27783__$1);
var G__27821 = c__19078__auto__;
var G__27822 = cljs.core.count.call(null,c__19078__auto__);
var G__27823 = (0);
seq__27783 = G__27820;
chunk__27784 = G__27821;
count__27785 = G__27822;
i__27786 = G__27823;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27783__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27791_27824 = cljs.core.seq.call(null,requires);
var chunk__27792_27825 = null;
var count__27793_27826 = (0);
var i__27794_27827 = (0);
while(true){
if((i__27794_27827 < count__27793_27826)){
var req_27828 = cljs.core._nth.call(null,chunk__27792_27825,i__27794_27827);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27828,prov);

var G__27829 = seq__27791_27824;
var G__27830 = chunk__27792_27825;
var G__27831 = count__27793_27826;
var G__27832 = (i__27794_27827 + (1));
seq__27791_27824 = G__27829;
chunk__27792_27825 = G__27830;
count__27793_27826 = G__27831;
i__27794_27827 = G__27832;
continue;
} else {
var temp__4657__auto___27833__$1 = cljs.core.seq.call(null,seq__27791_27824);
if(temp__4657__auto___27833__$1){
var seq__27791_27834__$1 = temp__4657__auto___27833__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27791_27834__$1)){
var c__19078__auto___27835 = cljs.core.chunk_first.call(null,seq__27791_27834__$1);
var G__27836 = cljs.core.chunk_rest.call(null,seq__27791_27834__$1);
var G__27837 = c__19078__auto___27835;
var G__27838 = cljs.core.count.call(null,c__19078__auto___27835);
var G__27839 = (0);
seq__27791_27824 = G__27836;
chunk__27792_27825 = G__27837;
count__27793_27826 = G__27838;
i__27794_27827 = G__27839;
continue;
} else {
var req_27840 = cljs.core.first.call(null,seq__27791_27834__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27840,prov);

var G__27841 = cljs.core.next.call(null,seq__27791_27834__$1);
var G__27842 = null;
var G__27843 = (0);
var G__27844 = (0);
seq__27791_27824 = G__27841;
chunk__27792_27825 = G__27842;
count__27793_27826 = G__27843;
i__27794_27827 = G__27844;
continue;
}
} else {
}
}
break;
}

var G__27845 = cljs.core.next.call(null,seq__27783__$1);
var G__27846 = null;
var G__27847 = (0);
var G__27848 = (0);
seq__27783 = G__27845;
chunk__27784 = G__27846;
count__27785 = G__27847;
i__27786 = G__27848;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27853_27857 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27854_27858 = null;
var count__27855_27859 = (0);
var i__27856_27860 = (0);
while(true){
if((i__27856_27860 < count__27855_27859)){
var ns_27861 = cljs.core._nth.call(null,chunk__27854_27858,i__27856_27860);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27861);

var G__27862 = seq__27853_27857;
var G__27863 = chunk__27854_27858;
var G__27864 = count__27855_27859;
var G__27865 = (i__27856_27860 + (1));
seq__27853_27857 = G__27862;
chunk__27854_27858 = G__27863;
count__27855_27859 = G__27864;
i__27856_27860 = G__27865;
continue;
} else {
var temp__4657__auto___27866 = cljs.core.seq.call(null,seq__27853_27857);
if(temp__4657__auto___27866){
var seq__27853_27867__$1 = temp__4657__auto___27866;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27853_27867__$1)){
var c__19078__auto___27868 = cljs.core.chunk_first.call(null,seq__27853_27867__$1);
var G__27869 = cljs.core.chunk_rest.call(null,seq__27853_27867__$1);
var G__27870 = c__19078__auto___27868;
var G__27871 = cljs.core.count.call(null,c__19078__auto___27868);
var G__27872 = (0);
seq__27853_27857 = G__27869;
chunk__27854_27858 = G__27870;
count__27855_27859 = G__27871;
i__27856_27860 = G__27872;
continue;
} else {
var ns_27873 = cljs.core.first.call(null,seq__27853_27867__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27873);

var G__27874 = cljs.core.next.call(null,seq__27853_27867__$1);
var G__27875 = null;
var G__27876 = (0);
var G__27877 = (0);
seq__27853_27857 = G__27874;
chunk__27854_27858 = G__27875;
count__27855_27859 = G__27876;
i__27856_27860 = G__27877;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18275__auto__ = goog.require__;
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27878__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27878 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27879__i = 0, G__27879__a = new Array(arguments.length -  0);
while (G__27879__i < G__27879__a.length) {G__27879__a[G__27879__i] = arguments[G__27879__i + 0]; ++G__27879__i;}
  args = new cljs.core.IndexedSeq(G__27879__a,0);
} 
return G__27878__delegate.call(this,args);};
G__27878.cljs$lang$maxFixedArity = 0;
G__27878.cljs$lang$applyTo = (function (arglist__27880){
var args = cljs.core.seq(arglist__27880);
return G__27878__delegate(args);
});
G__27878.cljs$core$IFn$_invoke$arity$variadic = G__27878__delegate;
return G__27878;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27882 = cljs.core._EQ_;
var expr__27883 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27882.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27883))){
var path_parts = ((function (pred__27882,expr__27883){
return (function (p1__27881_SHARP_){
return clojure.string.split.call(null,p1__27881_SHARP_,/[\/\\]/);
});})(pred__27882,expr__27883))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27882,expr__27883){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27885){if((e27885 instanceof Error)){
var e = e27885;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27885;

}
}})());
});
;})(path_parts,sep,root,pred__27882,expr__27883))
} else {
if(cljs.core.truth_(pred__27882.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27883))){
return ((function (pred__27882,expr__27883){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27882,expr__27883){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27882,expr__27883))
);

return deferred.addErrback(((function (deferred,pred__27882,expr__27883){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27882,expr__27883))
);
});
;})(pred__27882,expr__27883))
} else {
return ((function (pred__27882,expr__27883){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27882,expr__27883))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27886,callback){
var map__27889 = p__27886;
var map__27889__$1 = ((((!((map__27889 == null)))?((((map__27889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27889):map__27889);
var file_msg = map__27889__$1;
var request_url = cljs.core.get.call(null,map__27889__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27889,map__27889__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27889,map__27889__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24790__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto__){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto__){
return (function (state_27913){
var state_val_27914 = (state_27913[(1)]);
if((state_val_27914 === (7))){
var inst_27909 = (state_27913[(2)]);
var state_27913__$1 = state_27913;
var statearr_27915_27935 = state_27913__$1;
(statearr_27915_27935[(2)] = inst_27909);

(statearr_27915_27935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (1))){
var state_27913__$1 = state_27913;
var statearr_27916_27936 = state_27913__$1;
(statearr_27916_27936[(2)] = null);

(statearr_27916_27936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (4))){
var inst_27893 = (state_27913[(7)]);
var inst_27893__$1 = (state_27913[(2)]);
var state_27913__$1 = (function (){var statearr_27917 = state_27913;
(statearr_27917[(7)] = inst_27893__$1);

return statearr_27917;
})();
if(cljs.core.truth_(inst_27893__$1)){
var statearr_27918_27937 = state_27913__$1;
(statearr_27918_27937[(1)] = (5));

} else {
var statearr_27919_27938 = state_27913__$1;
(statearr_27919_27938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (6))){
var state_27913__$1 = state_27913;
var statearr_27920_27939 = state_27913__$1;
(statearr_27920_27939[(2)] = null);

(statearr_27920_27939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (3))){
var inst_27911 = (state_27913[(2)]);
var state_27913__$1 = state_27913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27913__$1,inst_27911);
} else {
if((state_val_27914 === (2))){
var state_27913__$1 = state_27913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27913__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27914 === (11))){
var inst_27905 = (state_27913[(2)]);
var state_27913__$1 = (function (){var statearr_27921 = state_27913;
(statearr_27921[(8)] = inst_27905);

return statearr_27921;
})();
var statearr_27922_27940 = state_27913__$1;
(statearr_27922_27940[(2)] = null);

(statearr_27922_27940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (9))){
var inst_27899 = (state_27913[(9)]);
var inst_27897 = (state_27913[(10)]);
var inst_27901 = inst_27899.call(null,inst_27897);
var state_27913__$1 = state_27913;
var statearr_27923_27941 = state_27913__$1;
(statearr_27923_27941[(2)] = inst_27901);

(statearr_27923_27941[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (5))){
var inst_27893 = (state_27913[(7)]);
var inst_27895 = figwheel.client.file_reloading.blocking_load.call(null,inst_27893);
var state_27913__$1 = state_27913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27913__$1,(8),inst_27895);
} else {
if((state_val_27914 === (10))){
var inst_27897 = (state_27913[(10)]);
var inst_27903 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27897);
var state_27913__$1 = state_27913;
var statearr_27924_27942 = state_27913__$1;
(statearr_27924_27942[(2)] = inst_27903);

(statearr_27924_27942[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (8))){
var inst_27893 = (state_27913[(7)]);
var inst_27899 = (state_27913[(9)]);
var inst_27897 = (state_27913[(2)]);
var inst_27898 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27899__$1 = cljs.core.get.call(null,inst_27898,inst_27893);
var state_27913__$1 = (function (){var statearr_27925 = state_27913;
(statearr_27925[(9)] = inst_27899__$1);

(statearr_27925[(10)] = inst_27897);

return statearr_27925;
})();
if(cljs.core.truth_(inst_27899__$1)){
var statearr_27926_27943 = state_27913__$1;
(statearr_27926_27943[(1)] = (9));

} else {
var statearr_27927_27944 = state_27913__$1;
(statearr_27927_27944[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24790__auto__))
;
return ((function (switch__24678__auto__,c__24790__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24679__auto__ = null;
var figwheel$client$file_reloading$state_machine__24679__auto____0 = (function (){
var statearr_27931 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27931[(0)] = figwheel$client$file_reloading$state_machine__24679__auto__);

(statearr_27931[(1)] = (1));

return statearr_27931;
});
var figwheel$client$file_reloading$state_machine__24679__auto____1 = (function (state_27913){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_27913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e27932){if((e27932 instanceof Object)){
var ex__24682__auto__ = e27932;
var statearr_27933_27945 = state_27913;
(statearr_27933_27945[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27946 = state_27913;
state_27913 = G__27946;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24679__auto__ = function(state_27913){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24679__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24679__auto____1.call(this,state_27913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24679__auto____0;
figwheel$client$file_reloading$state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24679__auto____1;
return figwheel$client$file_reloading$state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto__))
})();
var state__24792__auto__ = (function (){var statearr_27934 = f__24791__auto__.call(null);
(statearr_27934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto__);

return statearr_27934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto__))
);

return c__24790__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27947,callback){
var map__27950 = p__27947;
var map__27950__$1 = ((((!((map__27950 == null)))?((((map__27950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27950):map__27950);
var file_msg = map__27950__$1;
var namespace = cljs.core.get.call(null,map__27950__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27950,map__27950__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27950,map__27950__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27952){
var map__27955 = p__27952;
var map__27955__$1 = ((((!((map__27955 == null)))?((((map__27955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27955):map__27955);
var file_msg = map__27955__$1;
var namespace = cljs.core.get.call(null,map__27955__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18263__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18263__auto__){
var or__18275__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
var or__18275__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18275__auto____$1)){
return or__18275__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18263__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27957,callback){
var map__27960 = p__27957;
var map__27960__$1 = ((((!((map__27960 == null)))?((((map__27960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27960):map__27960);
var file_msg = map__27960__$1;
var request_url = cljs.core.get.call(null,map__27960__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27960__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24790__auto___28048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto___28048,out){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto___28048,out){
return (function (state_28030){
var state_val_28031 = (state_28030[(1)]);
if((state_val_28031 === (1))){
var inst_28008 = cljs.core.nth.call(null,files,(0),null);
var inst_28009 = cljs.core.nthnext.call(null,files,(1));
var inst_28010 = files;
var state_28030__$1 = (function (){var statearr_28032 = state_28030;
(statearr_28032[(7)] = inst_28010);

(statearr_28032[(8)] = inst_28009);

(statearr_28032[(9)] = inst_28008);

return statearr_28032;
})();
var statearr_28033_28049 = state_28030__$1;
(statearr_28033_28049[(2)] = null);

(statearr_28033_28049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (2))){
var inst_28010 = (state_28030[(7)]);
var inst_28013 = (state_28030[(10)]);
var inst_28013__$1 = cljs.core.nth.call(null,inst_28010,(0),null);
var inst_28014 = cljs.core.nthnext.call(null,inst_28010,(1));
var inst_28015 = (inst_28013__$1 == null);
var inst_28016 = cljs.core.not.call(null,inst_28015);
var state_28030__$1 = (function (){var statearr_28034 = state_28030;
(statearr_28034[(11)] = inst_28014);

(statearr_28034[(10)] = inst_28013__$1);

return statearr_28034;
})();
if(inst_28016){
var statearr_28035_28050 = state_28030__$1;
(statearr_28035_28050[(1)] = (4));

} else {
var statearr_28036_28051 = state_28030__$1;
(statearr_28036_28051[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (3))){
var inst_28028 = (state_28030[(2)]);
var state_28030__$1 = state_28030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28030__$1,inst_28028);
} else {
if((state_val_28031 === (4))){
var inst_28013 = (state_28030[(10)]);
var inst_28018 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28013);
var state_28030__$1 = state_28030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28030__$1,(7),inst_28018);
} else {
if((state_val_28031 === (5))){
var inst_28024 = cljs.core.async.close_BANG_.call(null,out);
var state_28030__$1 = state_28030;
var statearr_28037_28052 = state_28030__$1;
(statearr_28037_28052[(2)] = inst_28024);

(statearr_28037_28052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (6))){
var inst_28026 = (state_28030[(2)]);
var state_28030__$1 = state_28030;
var statearr_28038_28053 = state_28030__$1;
(statearr_28038_28053[(2)] = inst_28026);

(statearr_28038_28053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28031 === (7))){
var inst_28014 = (state_28030[(11)]);
var inst_28020 = (state_28030[(2)]);
var inst_28021 = cljs.core.async.put_BANG_.call(null,out,inst_28020);
var inst_28010 = inst_28014;
var state_28030__$1 = (function (){var statearr_28039 = state_28030;
(statearr_28039[(7)] = inst_28010);

(statearr_28039[(12)] = inst_28021);

return statearr_28039;
})();
var statearr_28040_28054 = state_28030__$1;
(statearr_28040_28054[(2)] = null);

(statearr_28040_28054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__24790__auto___28048,out))
;
return ((function (switch__24678__auto__,c__24790__auto___28048,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24679__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24679__auto____0 = (function (){
var statearr_28044 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28044[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24679__auto__);

(statearr_28044[(1)] = (1));

return statearr_28044;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24679__auto____1 = (function (state_28030){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_28030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e28045){if((e28045 instanceof Object)){
var ex__24682__auto__ = e28045;
var statearr_28046_28055 = state_28030;
(statearr_28046_28055[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28056 = state_28030;
state_28030 = G__28056;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24679__auto__ = function(state_28030){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24679__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24679__auto____1.call(this,state_28030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24679__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24679__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto___28048,out))
})();
var state__24792__auto__ = (function (){var statearr_28047 = f__24791__auto__.call(null);
(statearr_28047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto___28048);

return statearr_28047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto___28048,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28057,opts){
var map__28061 = p__28057;
var map__28061__$1 = ((((!((map__28061 == null)))?((((map__28061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28061):map__28061);
var eval_body__$1 = cljs.core.get.call(null,map__28061__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28061__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18263__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18263__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18263__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28063){var e = e28063;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28064_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28064_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28069){
var vec__28070 = p__28069;
var k = cljs.core.nth.call(null,vec__28070,(0),null);
var v = cljs.core.nth.call(null,vec__28070,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28071){
var vec__28072 = p__28071;
var k = cljs.core.nth.call(null,vec__28072,(0),null);
var v = cljs.core.nth.call(null,vec__28072,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28076,p__28077){
var map__28324 = p__28076;
var map__28324__$1 = ((((!((map__28324 == null)))?((((map__28324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28324):map__28324);
var opts = map__28324__$1;
var before_jsload = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28325 = p__28077;
var map__28325__$1 = ((((!((map__28325 == null)))?((((map__28325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28325):map__28325);
var msg = map__28325__$1;
var files = cljs.core.get.call(null,map__28325__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28325__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28325__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24790__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28478){
var state_val_28479 = (state_28478[(1)]);
if((state_val_28479 === (7))){
var inst_28342 = (state_28478[(7)]);
var inst_28341 = (state_28478[(8)]);
var inst_28339 = (state_28478[(9)]);
var inst_28340 = (state_28478[(10)]);
var inst_28347 = cljs.core._nth.call(null,inst_28340,inst_28342);
var inst_28348 = figwheel.client.file_reloading.eval_body.call(null,inst_28347,opts);
var inst_28349 = (inst_28342 + (1));
var tmp28480 = inst_28341;
var tmp28481 = inst_28339;
var tmp28482 = inst_28340;
var inst_28339__$1 = tmp28481;
var inst_28340__$1 = tmp28482;
var inst_28341__$1 = tmp28480;
var inst_28342__$1 = inst_28349;
var state_28478__$1 = (function (){var statearr_28483 = state_28478;
(statearr_28483[(7)] = inst_28342__$1);

(statearr_28483[(8)] = inst_28341__$1);

(statearr_28483[(11)] = inst_28348);

(statearr_28483[(9)] = inst_28339__$1);

(statearr_28483[(10)] = inst_28340__$1);

return statearr_28483;
})();
var statearr_28484_28570 = state_28478__$1;
(statearr_28484_28570[(2)] = null);

(statearr_28484_28570[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (20))){
var inst_28382 = (state_28478[(12)]);
var inst_28390 = figwheel.client.file_reloading.sort_files.call(null,inst_28382);
var state_28478__$1 = state_28478;
var statearr_28485_28571 = state_28478__$1;
(statearr_28485_28571[(2)] = inst_28390);

(statearr_28485_28571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (27))){
var state_28478__$1 = state_28478;
var statearr_28486_28572 = state_28478__$1;
(statearr_28486_28572[(2)] = null);

(statearr_28486_28572[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (1))){
var inst_28331 = (state_28478[(13)]);
var inst_28328 = before_jsload.call(null,files);
var inst_28329 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28330 = (function (){return ((function (inst_28331,inst_28328,inst_28329,state_val_28479,c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28073_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28073_SHARP_);
});
;})(inst_28331,inst_28328,inst_28329,state_val_28479,c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28331__$1 = cljs.core.filter.call(null,inst_28330,files);
var inst_28332 = cljs.core.not_empty.call(null,inst_28331__$1);
var state_28478__$1 = (function (){var statearr_28487 = state_28478;
(statearr_28487[(13)] = inst_28331__$1);

(statearr_28487[(14)] = inst_28329);

(statearr_28487[(15)] = inst_28328);

return statearr_28487;
})();
if(cljs.core.truth_(inst_28332)){
var statearr_28488_28573 = state_28478__$1;
(statearr_28488_28573[(1)] = (2));

} else {
var statearr_28489_28574 = state_28478__$1;
(statearr_28489_28574[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (24))){
var state_28478__$1 = state_28478;
var statearr_28490_28575 = state_28478__$1;
(statearr_28490_28575[(2)] = null);

(statearr_28490_28575[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (39))){
var inst_28432 = (state_28478[(16)]);
var state_28478__$1 = state_28478;
var statearr_28491_28576 = state_28478__$1;
(statearr_28491_28576[(2)] = inst_28432);

(statearr_28491_28576[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (46))){
var inst_28473 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
var statearr_28492_28577 = state_28478__$1;
(statearr_28492_28577[(2)] = inst_28473);

(statearr_28492_28577[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (4))){
var inst_28376 = (state_28478[(2)]);
var inst_28377 = cljs.core.List.EMPTY;
var inst_28378 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28377);
var inst_28379 = (function (){return ((function (inst_28376,inst_28377,inst_28378,state_val_28479,c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28074_SHARP_){
var and__18263__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28074_SHARP_);
if(cljs.core.truth_(and__18263__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28074_SHARP_));
} else {
return and__18263__auto__;
}
});
;})(inst_28376,inst_28377,inst_28378,state_val_28479,c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28380 = cljs.core.filter.call(null,inst_28379,files);
var inst_28381 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28382 = cljs.core.concat.call(null,inst_28380,inst_28381);
var state_28478__$1 = (function (){var statearr_28493 = state_28478;
(statearr_28493[(12)] = inst_28382);

(statearr_28493[(17)] = inst_28378);

(statearr_28493[(18)] = inst_28376);

return statearr_28493;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28494_28578 = state_28478__$1;
(statearr_28494_28578[(1)] = (16));

} else {
var statearr_28495_28579 = state_28478__$1;
(statearr_28495_28579[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (15))){
var inst_28366 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
var statearr_28496_28580 = state_28478__$1;
(statearr_28496_28580[(2)] = inst_28366);

(statearr_28496_28580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (21))){
var inst_28392 = (state_28478[(19)]);
var inst_28392__$1 = (state_28478[(2)]);
var inst_28393 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28392__$1);
var state_28478__$1 = (function (){var statearr_28497 = state_28478;
(statearr_28497[(19)] = inst_28392__$1);

return statearr_28497;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28478__$1,(22),inst_28393);
} else {
if((state_val_28479 === (31))){
var inst_28476 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28478__$1,inst_28476);
} else {
if((state_val_28479 === (32))){
var inst_28432 = (state_28478[(16)]);
var inst_28437 = inst_28432.cljs$lang$protocol_mask$partition0$;
var inst_28438 = (inst_28437 & (64));
var inst_28439 = inst_28432.cljs$core$ISeq$;
var inst_28440 = (inst_28438) || (inst_28439);
var state_28478__$1 = state_28478;
if(cljs.core.truth_(inst_28440)){
var statearr_28498_28581 = state_28478__$1;
(statearr_28498_28581[(1)] = (35));

} else {
var statearr_28499_28582 = state_28478__$1;
(statearr_28499_28582[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (40))){
var inst_28453 = (state_28478[(20)]);
var inst_28452 = (state_28478[(2)]);
var inst_28453__$1 = cljs.core.get.call(null,inst_28452,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28454 = cljs.core.get.call(null,inst_28452,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28455 = cljs.core.not_empty.call(null,inst_28453__$1);
var state_28478__$1 = (function (){var statearr_28500 = state_28478;
(statearr_28500[(21)] = inst_28454);

(statearr_28500[(20)] = inst_28453__$1);

return statearr_28500;
})();
if(cljs.core.truth_(inst_28455)){
var statearr_28501_28583 = state_28478__$1;
(statearr_28501_28583[(1)] = (41));

} else {
var statearr_28502_28584 = state_28478__$1;
(statearr_28502_28584[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (33))){
var state_28478__$1 = state_28478;
var statearr_28503_28585 = state_28478__$1;
(statearr_28503_28585[(2)] = false);

(statearr_28503_28585[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (13))){
var inst_28352 = (state_28478[(22)]);
var inst_28356 = cljs.core.chunk_first.call(null,inst_28352);
var inst_28357 = cljs.core.chunk_rest.call(null,inst_28352);
var inst_28358 = cljs.core.count.call(null,inst_28356);
var inst_28339 = inst_28357;
var inst_28340 = inst_28356;
var inst_28341 = inst_28358;
var inst_28342 = (0);
var state_28478__$1 = (function (){var statearr_28504 = state_28478;
(statearr_28504[(7)] = inst_28342);

(statearr_28504[(8)] = inst_28341);

(statearr_28504[(9)] = inst_28339);

(statearr_28504[(10)] = inst_28340);

return statearr_28504;
})();
var statearr_28505_28586 = state_28478__$1;
(statearr_28505_28586[(2)] = null);

(statearr_28505_28586[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (22))){
var inst_28396 = (state_28478[(23)]);
var inst_28395 = (state_28478[(24)]);
var inst_28400 = (state_28478[(25)]);
var inst_28392 = (state_28478[(19)]);
var inst_28395__$1 = (state_28478[(2)]);
var inst_28396__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28395__$1);
var inst_28397 = (function (){var all_files = inst_28392;
var res_SINGLEQUOTE_ = inst_28395__$1;
var res = inst_28396__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28396,inst_28395,inst_28400,inst_28392,inst_28395__$1,inst_28396__$1,state_val_28479,c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28075_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28075_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28396,inst_28395,inst_28400,inst_28392,inst_28395__$1,inst_28396__$1,state_val_28479,c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28398 = cljs.core.filter.call(null,inst_28397,inst_28395__$1);
var inst_28399 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28400__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28399);
var inst_28401 = cljs.core.not_empty.call(null,inst_28400__$1);
var state_28478__$1 = (function (){var statearr_28506 = state_28478;
(statearr_28506[(26)] = inst_28398);

(statearr_28506[(23)] = inst_28396__$1);

(statearr_28506[(24)] = inst_28395__$1);

(statearr_28506[(25)] = inst_28400__$1);

return statearr_28506;
})();
if(cljs.core.truth_(inst_28401)){
var statearr_28507_28587 = state_28478__$1;
(statearr_28507_28587[(1)] = (23));

} else {
var statearr_28508_28588 = state_28478__$1;
(statearr_28508_28588[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (36))){
var state_28478__$1 = state_28478;
var statearr_28509_28589 = state_28478__$1;
(statearr_28509_28589[(2)] = false);

(statearr_28509_28589[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (41))){
var inst_28453 = (state_28478[(20)]);
var inst_28457 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28458 = cljs.core.map.call(null,inst_28457,inst_28453);
var inst_28459 = cljs.core.pr_str.call(null,inst_28458);
var inst_28460 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28459)].join('');
var inst_28461 = figwheel.client.utils.log.call(null,inst_28460);
var state_28478__$1 = state_28478;
var statearr_28510_28590 = state_28478__$1;
(statearr_28510_28590[(2)] = inst_28461);

(statearr_28510_28590[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (43))){
var inst_28454 = (state_28478[(21)]);
var inst_28464 = (state_28478[(2)]);
var inst_28465 = cljs.core.not_empty.call(null,inst_28454);
var state_28478__$1 = (function (){var statearr_28511 = state_28478;
(statearr_28511[(27)] = inst_28464);

return statearr_28511;
})();
if(cljs.core.truth_(inst_28465)){
var statearr_28512_28591 = state_28478__$1;
(statearr_28512_28591[(1)] = (44));

} else {
var statearr_28513_28592 = state_28478__$1;
(statearr_28513_28592[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (29))){
var inst_28398 = (state_28478[(26)]);
var inst_28396 = (state_28478[(23)]);
var inst_28432 = (state_28478[(16)]);
var inst_28395 = (state_28478[(24)]);
var inst_28400 = (state_28478[(25)]);
var inst_28392 = (state_28478[(19)]);
var inst_28428 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28431 = (function (){var all_files = inst_28392;
var res_SINGLEQUOTE_ = inst_28395;
var res = inst_28396;
var files_not_loaded = inst_28398;
var dependencies_that_loaded = inst_28400;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28398,inst_28396,inst_28432,inst_28395,inst_28400,inst_28392,inst_28428,state_val_28479,c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28430){
var map__28514 = p__28430;
var map__28514__$1 = ((((!((map__28514 == null)))?((((map__28514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28514):map__28514);
var namespace = cljs.core.get.call(null,map__28514__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28398,inst_28396,inst_28432,inst_28395,inst_28400,inst_28392,inst_28428,state_val_28479,c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28432__$1 = cljs.core.group_by.call(null,inst_28431,inst_28398);
var inst_28434 = (inst_28432__$1 == null);
var inst_28435 = cljs.core.not.call(null,inst_28434);
var state_28478__$1 = (function (){var statearr_28516 = state_28478;
(statearr_28516[(28)] = inst_28428);

(statearr_28516[(16)] = inst_28432__$1);

return statearr_28516;
})();
if(inst_28435){
var statearr_28517_28593 = state_28478__$1;
(statearr_28517_28593[(1)] = (32));

} else {
var statearr_28518_28594 = state_28478__$1;
(statearr_28518_28594[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (44))){
var inst_28454 = (state_28478[(21)]);
var inst_28467 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28454);
var inst_28468 = cljs.core.pr_str.call(null,inst_28467);
var inst_28469 = [cljs.core.str("not required: "),cljs.core.str(inst_28468)].join('');
var inst_28470 = figwheel.client.utils.log.call(null,inst_28469);
var state_28478__$1 = state_28478;
var statearr_28519_28595 = state_28478__$1;
(statearr_28519_28595[(2)] = inst_28470);

(statearr_28519_28595[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (6))){
var inst_28373 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
var statearr_28520_28596 = state_28478__$1;
(statearr_28520_28596[(2)] = inst_28373);

(statearr_28520_28596[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (28))){
var inst_28398 = (state_28478[(26)]);
var inst_28425 = (state_28478[(2)]);
var inst_28426 = cljs.core.not_empty.call(null,inst_28398);
var state_28478__$1 = (function (){var statearr_28521 = state_28478;
(statearr_28521[(29)] = inst_28425);

return statearr_28521;
})();
if(cljs.core.truth_(inst_28426)){
var statearr_28522_28597 = state_28478__$1;
(statearr_28522_28597[(1)] = (29));

} else {
var statearr_28523_28598 = state_28478__$1;
(statearr_28523_28598[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (25))){
var inst_28396 = (state_28478[(23)]);
var inst_28412 = (state_28478[(2)]);
var inst_28413 = cljs.core.not_empty.call(null,inst_28396);
var state_28478__$1 = (function (){var statearr_28524 = state_28478;
(statearr_28524[(30)] = inst_28412);

return statearr_28524;
})();
if(cljs.core.truth_(inst_28413)){
var statearr_28525_28599 = state_28478__$1;
(statearr_28525_28599[(1)] = (26));

} else {
var statearr_28526_28600 = state_28478__$1;
(statearr_28526_28600[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (34))){
var inst_28447 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
if(cljs.core.truth_(inst_28447)){
var statearr_28527_28601 = state_28478__$1;
(statearr_28527_28601[(1)] = (38));

} else {
var statearr_28528_28602 = state_28478__$1;
(statearr_28528_28602[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (17))){
var state_28478__$1 = state_28478;
var statearr_28529_28603 = state_28478__$1;
(statearr_28529_28603[(2)] = recompile_dependents);

(statearr_28529_28603[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (3))){
var state_28478__$1 = state_28478;
var statearr_28530_28604 = state_28478__$1;
(statearr_28530_28604[(2)] = null);

(statearr_28530_28604[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (12))){
var inst_28369 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
var statearr_28531_28605 = state_28478__$1;
(statearr_28531_28605[(2)] = inst_28369);

(statearr_28531_28605[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (2))){
var inst_28331 = (state_28478[(13)]);
var inst_28338 = cljs.core.seq.call(null,inst_28331);
var inst_28339 = inst_28338;
var inst_28340 = null;
var inst_28341 = (0);
var inst_28342 = (0);
var state_28478__$1 = (function (){var statearr_28532 = state_28478;
(statearr_28532[(7)] = inst_28342);

(statearr_28532[(8)] = inst_28341);

(statearr_28532[(9)] = inst_28339);

(statearr_28532[(10)] = inst_28340);

return statearr_28532;
})();
var statearr_28533_28606 = state_28478__$1;
(statearr_28533_28606[(2)] = null);

(statearr_28533_28606[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (23))){
var inst_28398 = (state_28478[(26)]);
var inst_28396 = (state_28478[(23)]);
var inst_28395 = (state_28478[(24)]);
var inst_28400 = (state_28478[(25)]);
var inst_28392 = (state_28478[(19)]);
var inst_28403 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28405 = (function (){var all_files = inst_28392;
var res_SINGLEQUOTE_ = inst_28395;
var res = inst_28396;
var files_not_loaded = inst_28398;
var dependencies_that_loaded = inst_28400;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28398,inst_28396,inst_28395,inst_28400,inst_28392,inst_28403,state_val_28479,c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28404){
var map__28534 = p__28404;
var map__28534__$1 = ((((!((map__28534 == null)))?((((map__28534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28534):map__28534);
var request_url = cljs.core.get.call(null,map__28534__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28398,inst_28396,inst_28395,inst_28400,inst_28392,inst_28403,state_val_28479,c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28406 = cljs.core.reverse.call(null,inst_28400);
var inst_28407 = cljs.core.map.call(null,inst_28405,inst_28406);
var inst_28408 = cljs.core.pr_str.call(null,inst_28407);
var inst_28409 = figwheel.client.utils.log.call(null,inst_28408);
var state_28478__$1 = (function (){var statearr_28536 = state_28478;
(statearr_28536[(31)] = inst_28403);

return statearr_28536;
})();
var statearr_28537_28607 = state_28478__$1;
(statearr_28537_28607[(2)] = inst_28409);

(statearr_28537_28607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (35))){
var state_28478__$1 = state_28478;
var statearr_28538_28608 = state_28478__$1;
(statearr_28538_28608[(2)] = true);

(statearr_28538_28608[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (19))){
var inst_28382 = (state_28478[(12)]);
var inst_28388 = figwheel.client.file_reloading.expand_files.call(null,inst_28382);
var state_28478__$1 = state_28478;
var statearr_28539_28609 = state_28478__$1;
(statearr_28539_28609[(2)] = inst_28388);

(statearr_28539_28609[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (11))){
var state_28478__$1 = state_28478;
var statearr_28540_28610 = state_28478__$1;
(statearr_28540_28610[(2)] = null);

(statearr_28540_28610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (9))){
var inst_28371 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
var statearr_28541_28611 = state_28478__$1;
(statearr_28541_28611[(2)] = inst_28371);

(statearr_28541_28611[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (5))){
var inst_28342 = (state_28478[(7)]);
var inst_28341 = (state_28478[(8)]);
var inst_28344 = (inst_28342 < inst_28341);
var inst_28345 = inst_28344;
var state_28478__$1 = state_28478;
if(cljs.core.truth_(inst_28345)){
var statearr_28542_28612 = state_28478__$1;
(statearr_28542_28612[(1)] = (7));

} else {
var statearr_28543_28613 = state_28478__$1;
(statearr_28543_28613[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (14))){
var inst_28352 = (state_28478[(22)]);
var inst_28361 = cljs.core.first.call(null,inst_28352);
var inst_28362 = figwheel.client.file_reloading.eval_body.call(null,inst_28361,opts);
var inst_28363 = cljs.core.next.call(null,inst_28352);
var inst_28339 = inst_28363;
var inst_28340 = null;
var inst_28341 = (0);
var inst_28342 = (0);
var state_28478__$1 = (function (){var statearr_28544 = state_28478;
(statearr_28544[(7)] = inst_28342);

(statearr_28544[(8)] = inst_28341);

(statearr_28544[(32)] = inst_28362);

(statearr_28544[(9)] = inst_28339);

(statearr_28544[(10)] = inst_28340);

return statearr_28544;
})();
var statearr_28545_28614 = state_28478__$1;
(statearr_28545_28614[(2)] = null);

(statearr_28545_28614[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (45))){
var state_28478__$1 = state_28478;
var statearr_28546_28615 = state_28478__$1;
(statearr_28546_28615[(2)] = null);

(statearr_28546_28615[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (26))){
var inst_28398 = (state_28478[(26)]);
var inst_28396 = (state_28478[(23)]);
var inst_28395 = (state_28478[(24)]);
var inst_28400 = (state_28478[(25)]);
var inst_28392 = (state_28478[(19)]);
var inst_28415 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28417 = (function (){var all_files = inst_28392;
var res_SINGLEQUOTE_ = inst_28395;
var res = inst_28396;
var files_not_loaded = inst_28398;
var dependencies_that_loaded = inst_28400;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28398,inst_28396,inst_28395,inst_28400,inst_28392,inst_28415,state_val_28479,c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28416){
var map__28547 = p__28416;
var map__28547__$1 = ((((!((map__28547 == null)))?((((map__28547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28547):map__28547);
var namespace = cljs.core.get.call(null,map__28547__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28547__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28398,inst_28396,inst_28395,inst_28400,inst_28392,inst_28415,state_val_28479,c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28418 = cljs.core.map.call(null,inst_28417,inst_28396);
var inst_28419 = cljs.core.pr_str.call(null,inst_28418);
var inst_28420 = figwheel.client.utils.log.call(null,inst_28419);
var inst_28421 = (function (){var all_files = inst_28392;
var res_SINGLEQUOTE_ = inst_28395;
var res = inst_28396;
var files_not_loaded = inst_28398;
var dependencies_that_loaded = inst_28400;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28398,inst_28396,inst_28395,inst_28400,inst_28392,inst_28415,inst_28417,inst_28418,inst_28419,inst_28420,state_val_28479,c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28398,inst_28396,inst_28395,inst_28400,inst_28392,inst_28415,inst_28417,inst_28418,inst_28419,inst_28420,state_val_28479,c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28422 = setTimeout(inst_28421,(10));
var state_28478__$1 = (function (){var statearr_28549 = state_28478;
(statearr_28549[(33)] = inst_28420);

(statearr_28549[(34)] = inst_28415);

return statearr_28549;
})();
var statearr_28550_28616 = state_28478__$1;
(statearr_28550_28616[(2)] = inst_28422);

(statearr_28550_28616[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (16))){
var state_28478__$1 = state_28478;
var statearr_28551_28617 = state_28478__$1;
(statearr_28551_28617[(2)] = reload_dependents);

(statearr_28551_28617[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (38))){
var inst_28432 = (state_28478[(16)]);
var inst_28449 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28432);
var state_28478__$1 = state_28478;
var statearr_28552_28618 = state_28478__$1;
(statearr_28552_28618[(2)] = inst_28449);

(statearr_28552_28618[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (30))){
var state_28478__$1 = state_28478;
var statearr_28553_28619 = state_28478__$1;
(statearr_28553_28619[(2)] = null);

(statearr_28553_28619[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (10))){
var inst_28352 = (state_28478[(22)]);
var inst_28354 = cljs.core.chunked_seq_QMARK_.call(null,inst_28352);
var state_28478__$1 = state_28478;
if(inst_28354){
var statearr_28554_28620 = state_28478__$1;
(statearr_28554_28620[(1)] = (13));

} else {
var statearr_28555_28621 = state_28478__$1;
(statearr_28555_28621[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (18))){
var inst_28386 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
if(cljs.core.truth_(inst_28386)){
var statearr_28556_28622 = state_28478__$1;
(statearr_28556_28622[(1)] = (19));

} else {
var statearr_28557_28623 = state_28478__$1;
(statearr_28557_28623[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (42))){
var state_28478__$1 = state_28478;
var statearr_28558_28624 = state_28478__$1;
(statearr_28558_28624[(2)] = null);

(statearr_28558_28624[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (37))){
var inst_28444 = (state_28478[(2)]);
var state_28478__$1 = state_28478;
var statearr_28559_28625 = state_28478__$1;
(statearr_28559_28625[(2)] = inst_28444);

(statearr_28559_28625[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28479 === (8))){
var inst_28352 = (state_28478[(22)]);
var inst_28339 = (state_28478[(9)]);
var inst_28352__$1 = cljs.core.seq.call(null,inst_28339);
var state_28478__$1 = (function (){var statearr_28560 = state_28478;
(statearr_28560[(22)] = inst_28352__$1);

return statearr_28560;
})();
if(inst_28352__$1){
var statearr_28561_28626 = state_28478__$1;
(statearr_28561_28626[(1)] = (10));

} else {
var statearr_28562_28627 = state_28478__$1;
(statearr_28562_28627[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24678__auto__,c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24679__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24679__auto____0 = (function (){
var statearr_28566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28566[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24679__auto__);

(statearr_28566[(1)] = (1));

return statearr_28566;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24679__auto____1 = (function (state_28478){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_28478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e28567){if((e28567 instanceof Object)){
var ex__24682__auto__ = e28567;
var statearr_28568_28628 = state_28478;
(statearr_28568_28628[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28629 = state_28478;
state_28478 = G__28629;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24679__auto__ = function(state_28478){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24679__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24679__auto____1.call(this,state_28478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24679__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24679__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24792__auto__ = (function (){var statearr_28569 = f__24791__auto__.call(null);
(statearr_28569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto__);

return statearr_28569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto__,map__28324,map__28324__$1,opts,before_jsload,on_jsload,reload_dependents,map__28325,map__28325__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24790__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28632,link){
var map__28635 = p__28632;
var map__28635__$1 = ((((!((map__28635 == null)))?((((map__28635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28635):map__28635);
var file = cljs.core.get.call(null,map__28635__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28635,map__28635__$1,file){
return (function (p1__28630_SHARP_,p2__28631_SHARP_){
if(cljs.core._EQ_.call(null,p1__28630_SHARP_,p2__28631_SHARP_)){
return p1__28630_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28635,map__28635__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28641){
var map__28642 = p__28641;
var map__28642__$1 = ((((!((map__28642 == null)))?((((map__28642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28642):map__28642);
var match_length = cljs.core.get.call(null,map__28642__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28642__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28637_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28637_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28644 = [];
var len__19333__auto___28647 = arguments.length;
var i__19334__auto___28648 = (0);
while(true){
if((i__19334__auto___28648 < len__19333__auto___28647)){
args28644.push((arguments[i__19334__auto___28648]));

var G__28649 = (i__19334__auto___28648 + (1));
i__19334__auto___28648 = G__28649;
continue;
} else {
}
break;
}

var G__28646 = args28644.length;
switch (G__28646) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28644.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28651_SHARP_,p2__28652_SHARP_){
return cljs.core.assoc.call(null,p1__28651_SHARP_,cljs.core.get.call(null,p2__28652_SHARP_,key),p2__28652_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28653){
var map__28656 = p__28653;
var map__28656__$1 = ((((!((map__28656 == null)))?((((map__28656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28656):map__28656);
var f_data = map__28656__$1;
var file = cljs.core.get.call(null,map__28656__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28658,files_msg){
var map__28665 = p__28658;
var map__28665__$1 = ((((!((map__28665 == null)))?((((map__28665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28665):map__28665);
var opts = map__28665__$1;
var on_cssload = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28667_28671 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28668_28672 = null;
var count__28669_28673 = (0);
var i__28670_28674 = (0);
while(true){
if((i__28670_28674 < count__28669_28673)){
var f_28675 = cljs.core._nth.call(null,chunk__28668_28672,i__28670_28674);
figwheel.client.file_reloading.reload_css_file.call(null,f_28675);

var G__28676 = seq__28667_28671;
var G__28677 = chunk__28668_28672;
var G__28678 = count__28669_28673;
var G__28679 = (i__28670_28674 + (1));
seq__28667_28671 = G__28676;
chunk__28668_28672 = G__28677;
count__28669_28673 = G__28678;
i__28670_28674 = G__28679;
continue;
} else {
var temp__4657__auto___28680 = cljs.core.seq.call(null,seq__28667_28671);
if(temp__4657__auto___28680){
var seq__28667_28681__$1 = temp__4657__auto___28680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28667_28681__$1)){
var c__19078__auto___28682 = cljs.core.chunk_first.call(null,seq__28667_28681__$1);
var G__28683 = cljs.core.chunk_rest.call(null,seq__28667_28681__$1);
var G__28684 = c__19078__auto___28682;
var G__28685 = cljs.core.count.call(null,c__19078__auto___28682);
var G__28686 = (0);
seq__28667_28671 = G__28683;
chunk__28668_28672 = G__28684;
count__28669_28673 = G__28685;
i__28670_28674 = G__28686;
continue;
} else {
var f_28687 = cljs.core.first.call(null,seq__28667_28681__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28687);

var G__28688 = cljs.core.next.call(null,seq__28667_28681__$1);
var G__28689 = null;
var G__28690 = (0);
var G__28691 = (0);
seq__28667_28671 = G__28688;
chunk__28668_28672 = G__28689;
count__28669_28673 = G__28690;
i__28670_28674 = G__28691;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28665,map__28665__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28665,map__28665__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map