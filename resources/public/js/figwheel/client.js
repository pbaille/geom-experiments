// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__29127 = cljs.core._EQ_;
var expr__29128 = (function (){var or__18275__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__29127.call(null,"true",expr__29128))){
return true;
} else {
if(cljs.core.truth_(pred__29127.call(null,"false",expr__29128))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29128)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29130__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29131__i = 0, G__29131__a = new Array(arguments.length -  0);
while (G__29131__i < G__29131__a.length) {G__29131__a[G__29131__i] = arguments[G__29131__i + 0]; ++G__29131__i;}
  args = new cljs.core.IndexedSeq(G__29131__a,0);
} 
return G__29130__delegate.call(this,args);};
G__29130.cljs$lang$maxFixedArity = 0;
G__29130.cljs$lang$applyTo = (function (arglist__29132){
var args = cljs.core.seq(arglist__29132);
return G__29130__delegate(args);
});
G__29130.cljs$core$IFn$_invoke$arity$variadic = G__29130__delegate;
return G__29130;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29133){
var map__29136 = p__29133;
var map__29136__$1 = ((((!((map__29136 == null)))?((((map__29136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29136):map__29136);
var message = cljs.core.get.call(null,map__29136__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29136__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18275__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18275__auto__)){
return or__18275__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18263__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18263__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18263__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24790__auto___29298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto___29298,ch){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto___29298,ch){
return (function (state_29267){
var state_val_29268 = (state_29267[(1)]);
if((state_val_29268 === (7))){
var inst_29263 = (state_29267[(2)]);
var state_29267__$1 = state_29267;
var statearr_29269_29299 = state_29267__$1;
(statearr_29269_29299[(2)] = inst_29263);

(statearr_29269_29299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (1))){
var state_29267__$1 = state_29267;
var statearr_29270_29300 = state_29267__$1;
(statearr_29270_29300[(2)] = null);

(statearr_29270_29300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (4))){
var inst_29220 = (state_29267[(7)]);
var inst_29220__$1 = (state_29267[(2)]);
var state_29267__$1 = (function (){var statearr_29271 = state_29267;
(statearr_29271[(7)] = inst_29220__$1);

return statearr_29271;
})();
if(cljs.core.truth_(inst_29220__$1)){
var statearr_29272_29301 = state_29267__$1;
(statearr_29272_29301[(1)] = (5));

} else {
var statearr_29273_29302 = state_29267__$1;
(statearr_29273_29302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (15))){
var inst_29227 = (state_29267[(8)]);
var inst_29242 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29227);
var inst_29243 = cljs.core.first.call(null,inst_29242);
var inst_29244 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29243);
var inst_29245 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_29244)].join('');
var inst_29246 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29245);
var state_29267__$1 = state_29267;
var statearr_29274_29303 = state_29267__$1;
(statearr_29274_29303[(2)] = inst_29246);

(statearr_29274_29303[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (13))){
var inst_29251 = (state_29267[(2)]);
var state_29267__$1 = state_29267;
var statearr_29275_29304 = state_29267__$1;
(statearr_29275_29304[(2)] = inst_29251);

(statearr_29275_29304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (6))){
var state_29267__$1 = state_29267;
var statearr_29276_29305 = state_29267__$1;
(statearr_29276_29305[(2)] = null);

(statearr_29276_29305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (17))){
var inst_29249 = (state_29267[(2)]);
var state_29267__$1 = state_29267;
var statearr_29277_29306 = state_29267__$1;
(statearr_29277_29306[(2)] = inst_29249);

(statearr_29277_29306[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (3))){
var inst_29265 = (state_29267[(2)]);
var state_29267__$1 = state_29267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29267__$1,inst_29265);
} else {
if((state_val_29268 === (12))){
var inst_29226 = (state_29267[(9)]);
var inst_29240 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29226,opts);
var state_29267__$1 = state_29267;
if(cljs.core.truth_(inst_29240)){
var statearr_29278_29307 = state_29267__$1;
(statearr_29278_29307[(1)] = (15));

} else {
var statearr_29279_29308 = state_29267__$1;
(statearr_29279_29308[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (2))){
var state_29267__$1 = state_29267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29267__$1,(4),ch);
} else {
if((state_val_29268 === (11))){
var inst_29227 = (state_29267[(8)]);
var inst_29232 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29233 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29227);
var inst_29234 = cljs.core.async.timeout.call(null,(1000));
var inst_29235 = [inst_29233,inst_29234];
var inst_29236 = (new cljs.core.PersistentVector(null,2,(5),inst_29232,inst_29235,null));
var state_29267__$1 = state_29267;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29267__$1,(14),inst_29236);
} else {
if((state_val_29268 === (9))){
var inst_29227 = (state_29267[(8)]);
var inst_29253 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29254 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29227);
var inst_29255 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29254);
var inst_29256 = [cljs.core.str("Not loading: "),cljs.core.str(inst_29255)].join('');
var inst_29257 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29256);
var state_29267__$1 = (function (){var statearr_29280 = state_29267;
(statearr_29280[(10)] = inst_29253);

return statearr_29280;
})();
var statearr_29281_29309 = state_29267__$1;
(statearr_29281_29309[(2)] = inst_29257);

(statearr_29281_29309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (5))){
var inst_29220 = (state_29267[(7)]);
var inst_29222 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29223 = (new cljs.core.PersistentArrayMap(null,2,inst_29222,null));
var inst_29224 = (new cljs.core.PersistentHashSet(null,inst_29223,null));
var inst_29225 = figwheel.client.focus_msgs.call(null,inst_29224,inst_29220);
var inst_29226 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29225);
var inst_29227 = cljs.core.first.call(null,inst_29225);
var inst_29228 = figwheel.client.autoload_QMARK_.call(null);
var state_29267__$1 = (function (){var statearr_29282 = state_29267;
(statearr_29282[(8)] = inst_29227);

(statearr_29282[(9)] = inst_29226);

return statearr_29282;
})();
if(cljs.core.truth_(inst_29228)){
var statearr_29283_29310 = state_29267__$1;
(statearr_29283_29310[(1)] = (8));

} else {
var statearr_29284_29311 = state_29267__$1;
(statearr_29284_29311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (14))){
var inst_29238 = (state_29267[(2)]);
var state_29267__$1 = state_29267;
var statearr_29285_29312 = state_29267__$1;
(statearr_29285_29312[(2)] = inst_29238);

(statearr_29285_29312[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (16))){
var state_29267__$1 = state_29267;
var statearr_29286_29313 = state_29267__$1;
(statearr_29286_29313[(2)] = null);

(statearr_29286_29313[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (10))){
var inst_29259 = (state_29267[(2)]);
var state_29267__$1 = (function (){var statearr_29287 = state_29267;
(statearr_29287[(11)] = inst_29259);

return statearr_29287;
})();
var statearr_29288_29314 = state_29267__$1;
(statearr_29288_29314[(2)] = null);

(statearr_29288_29314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29268 === (8))){
var inst_29226 = (state_29267[(9)]);
var inst_29230 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29226,opts);
var state_29267__$1 = state_29267;
if(cljs.core.truth_(inst_29230)){
var statearr_29289_29315 = state_29267__$1;
(statearr_29289_29315[(1)] = (11));

} else {
var statearr_29290_29316 = state_29267__$1;
(statearr_29290_29316[(1)] = (12));

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
});})(c__24790__auto___29298,ch))
;
return ((function (switch__24678__auto__,c__24790__auto___29298,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24679__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24679__auto____0 = (function (){
var statearr_29294 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29294[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24679__auto__);

(statearr_29294[(1)] = (1));

return statearr_29294;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24679__auto____1 = (function (state_29267){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_29267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e29295){if((e29295 instanceof Object)){
var ex__24682__auto__ = e29295;
var statearr_29296_29317 = state_29267;
(statearr_29296_29317[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29318 = state_29267;
state_29267 = G__29318;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24679__auto__ = function(state_29267){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24679__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24679__auto____1.call(this,state_29267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24679__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24679__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto___29298,ch))
})();
var state__24792__auto__ = (function (){var statearr_29297 = f__24791__auto__.call(null);
(statearr_29297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto___29298);

return statearr_29297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto___29298,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29319_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29319_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29326 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29326){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29324 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29325 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29324,_STAR_print_newline_STAR_29325,base_path_29326){
return (function() { 
var G__29327__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29328__i = 0, G__29328__a = new Array(arguments.length -  0);
while (G__29328__i < G__29328__a.length) {G__29328__a[G__29328__i] = arguments[G__29328__i + 0]; ++G__29328__i;}
  args = new cljs.core.IndexedSeq(G__29328__a,0);
} 
return G__29327__delegate.call(this,args);};
G__29327.cljs$lang$maxFixedArity = 0;
G__29327.cljs$lang$applyTo = (function (arglist__29329){
var args = cljs.core.seq(arglist__29329);
return G__29327__delegate(args);
});
G__29327.cljs$core$IFn$_invoke$arity$variadic = G__29327__delegate;
return G__29327;
})()
;})(_STAR_print_fn_STAR_29324,_STAR_print_newline_STAR_29325,base_path_29326))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29325;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29324;
}}catch (e29323){if((e29323 instanceof Error)){
var e = e29323;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29326], null));
} else {
var e = e29323;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29326))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29330){
var map__29337 = p__29330;
var map__29337__$1 = ((((!((map__29337 == null)))?((((map__29337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29337):map__29337);
var opts = map__29337__$1;
var build_id = cljs.core.get.call(null,map__29337__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29337,map__29337__$1,opts,build_id){
return (function (p__29339){
var vec__29340 = p__29339;
var map__29341 = cljs.core.nth.call(null,vec__29340,(0),null);
var map__29341__$1 = ((((!((map__29341 == null)))?((((map__29341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29341):map__29341);
var msg = map__29341__$1;
var msg_name = cljs.core.get.call(null,map__29341__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29340,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29340,map__29341,map__29341__$1,msg,msg_name,_,map__29337,map__29337__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29340,map__29341,map__29341__$1,msg,msg_name,_,map__29337,map__29337__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29337,map__29337__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29347){
var vec__29348 = p__29347;
var map__29349 = cljs.core.nth.call(null,vec__29348,(0),null);
var map__29349__$1 = ((((!((map__29349 == null)))?((((map__29349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29349):map__29349);
var msg = map__29349__$1;
var msg_name = cljs.core.get.call(null,map__29349__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29348,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29351){
var map__29361 = p__29351;
var map__29361__$1 = ((((!((map__29361 == null)))?((((map__29361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29361):map__29361);
var on_compile_warning = cljs.core.get.call(null,map__29361__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29361__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29361,map__29361__$1,on_compile_warning,on_compile_fail){
return (function (p__29363){
var vec__29364 = p__29363;
var map__29365 = cljs.core.nth.call(null,vec__29364,(0),null);
var map__29365__$1 = ((((!((map__29365 == null)))?((((map__29365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29365):map__29365);
var msg = map__29365__$1;
var msg_name = cljs.core.get.call(null,map__29365__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29364,(1));
var pred__29367 = cljs.core._EQ_;
var expr__29368 = msg_name;
if(cljs.core.truth_(pred__29367.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29368))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29367.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29368))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29361,map__29361__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24790__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto__,msg_hist,msg_names,msg){
return (function (state_29584){
var state_val_29585 = (state_29584[(1)]);
if((state_val_29585 === (7))){
var inst_29508 = (state_29584[(2)]);
var state_29584__$1 = state_29584;
if(cljs.core.truth_(inst_29508)){
var statearr_29586_29632 = state_29584__$1;
(statearr_29586_29632[(1)] = (8));

} else {
var statearr_29587_29633 = state_29584__$1;
(statearr_29587_29633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (20))){
var inst_29578 = (state_29584[(2)]);
var state_29584__$1 = state_29584;
var statearr_29588_29634 = state_29584__$1;
(statearr_29588_29634[(2)] = inst_29578);

(statearr_29588_29634[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (27))){
var inst_29574 = (state_29584[(2)]);
var state_29584__$1 = state_29584;
var statearr_29589_29635 = state_29584__$1;
(statearr_29589_29635[(2)] = inst_29574);

(statearr_29589_29635[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (1))){
var inst_29501 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29584__$1 = state_29584;
if(cljs.core.truth_(inst_29501)){
var statearr_29590_29636 = state_29584__$1;
(statearr_29590_29636[(1)] = (2));

} else {
var statearr_29591_29637 = state_29584__$1;
(statearr_29591_29637[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (24))){
var inst_29576 = (state_29584[(2)]);
var state_29584__$1 = state_29584;
var statearr_29592_29638 = state_29584__$1;
(statearr_29592_29638[(2)] = inst_29576);

(statearr_29592_29638[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (4))){
var inst_29582 = (state_29584[(2)]);
var state_29584__$1 = state_29584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29584__$1,inst_29582);
} else {
if((state_val_29585 === (15))){
var inst_29580 = (state_29584[(2)]);
var state_29584__$1 = state_29584;
var statearr_29593_29639 = state_29584__$1;
(statearr_29593_29639[(2)] = inst_29580);

(statearr_29593_29639[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (21))){
var inst_29539 = (state_29584[(2)]);
var state_29584__$1 = state_29584;
var statearr_29594_29640 = state_29584__$1;
(statearr_29594_29640[(2)] = inst_29539);

(statearr_29594_29640[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (31))){
var inst_29563 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29584__$1 = state_29584;
if(cljs.core.truth_(inst_29563)){
var statearr_29595_29641 = state_29584__$1;
(statearr_29595_29641[(1)] = (34));

} else {
var statearr_29596_29642 = state_29584__$1;
(statearr_29596_29642[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (32))){
var inst_29572 = (state_29584[(2)]);
var state_29584__$1 = state_29584;
var statearr_29597_29643 = state_29584__$1;
(statearr_29597_29643[(2)] = inst_29572);

(statearr_29597_29643[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (33))){
var inst_29561 = (state_29584[(2)]);
var state_29584__$1 = state_29584;
var statearr_29598_29644 = state_29584__$1;
(statearr_29598_29644[(2)] = inst_29561);

(statearr_29598_29644[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (13))){
var inst_29522 = figwheel.client.heads_up.clear.call(null);
var state_29584__$1 = state_29584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29584__$1,(16),inst_29522);
} else {
if((state_val_29585 === (22))){
var inst_29543 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29544 = figwheel.client.heads_up.append_message.call(null,inst_29543);
var state_29584__$1 = state_29584;
var statearr_29599_29645 = state_29584__$1;
(statearr_29599_29645[(2)] = inst_29544);

(statearr_29599_29645[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (36))){
var inst_29570 = (state_29584[(2)]);
var state_29584__$1 = state_29584;
var statearr_29600_29646 = state_29584__$1;
(statearr_29600_29646[(2)] = inst_29570);

(statearr_29600_29646[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (29))){
var inst_29554 = (state_29584[(2)]);
var state_29584__$1 = state_29584;
var statearr_29601_29647 = state_29584__$1;
(statearr_29601_29647[(2)] = inst_29554);

(statearr_29601_29647[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (6))){
var inst_29503 = (state_29584[(7)]);
var state_29584__$1 = state_29584;
var statearr_29602_29648 = state_29584__$1;
(statearr_29602_29648[(2)] = inst_29503);

(statearr_29602_29648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (28))){
var inst_29550 = (state_29584[(2)]);
var inst_29551 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29552 = figwheel.client.heads_up.display_warning.call(null,inst_29551);
var state_29584__$1 = (function (){var statearr_29603 = state_29584;
(statearr_29603[(8)] = inst_29550);

return statearr_29603;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29584__$1,(29),inst_29552);
} else {
if((state_val_29585 === (25))){
var inst_29548 = figwheel.client.heads_up.clear.call(null);
var state_29584__$1 = state_29584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29584__$1,(28),inst_29548);
} else {
if((state_val_29585 === (34))){
var inst_29565 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29584__$1 = state_29584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29584__$1,(37),inst_29565);
} else {
if((state_val_29585 === (17))){
var inst_29530 = (state_29584[(2)]);
var state_29584__$1 = state_29584;
var statearr_29604_29649 = state_29584__$1;
(statearr_29604_29649[(2)] = inst_29530);

(statearr_29604_29649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (3))){
var inst_29520 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29584__$1 = state_29584;
if(cljs.core.truth_(inst_29520)){
var statearr_29605_29650 = state_29584__$1;
(statearr_29605_29650[(1)] = (13));

} else {
var statearr_29606_29651 = state_29584__$1;
(statearr_29606_29651[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (12))){
var inst_29516 = (state_29584[(2)]);
var state_29584__$1 = state_29584;
var statearr_29607_29652 = state_29584__$1;
(statearr_29607_29652[(2)] = inst_29516);

(statearr_29607_29652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (2))){
var inst_29503 = (state_29584[(7)]);
var inst_29503__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29584__$1 = (function (){var statearr_29608 = state_29584;
(statearr_29608[(7)] = inst_29503__$1);

return statearr_29608;
})();
if(cljs.core.truth_(inst_29503__$1)){
var statearr_29609_29653 = state_29584__$1;
(statearr_29609_29653[(1)] = (5));

} else {
var statearr_29610_29654 = state_29584__$1;
(statearr_29610_29654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (23))){
var inst_29546 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29584__$1 = state_29584;
if(cljs.core.truth_(inst_29546)){
var statearr_29611_29655 = state_29584__$1;
(statearr_29611_29655[(1)] = (25));

} else {
var statearr_29612_29656 = state_29584__$1;
(statearr_29612_29656[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (35))){
var state_29584__$1 = state_29584;
var statearr_29613_29657 = state_29584__$1;
(statearr_29613_29657[(2)] = null);

(statearr_29613_29657[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (19))){
var inst_29541 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29584__$1 = state_29584;
if(cljs.core.truth_(inst_29541)){
var statearr_29614_29658 = state_29584__$1;
(statearr_29614_29658[(1)] = (22));

} else {
var statearr_29615_29659 = state_29584__$1;
(statearr_29615_29659[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (11))){
var inst_29512 = (state_29584[(2)]);
var state_29584__$1 = state_29584;
var statearr_29616_29660 = state_29584__$1;
(statearr_29616_29660[(2)] = inst_29512);

(statearr_29616_29660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (9))){
var inst_29514 = figwheel.client.heads_up.clear.call(null);
var state_29584__$1 = state_29584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29584__$1,(12),inst_29514);
} else {
if((state_val_29585 === (5))){
var inst_29505 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29584__$1 = state_29584;
var statearr_29617_29661 = state_29584__$1;
(statearr_29617_29661[(2)] = inst_29505);

(statearr_29617_29661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (14))){
var inst_29532 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29584__$1 = state_29584;
if(cljs.core.truth_(inst_29532)){
var statearr_29618_29662 = state_29584__$1;
(statearr_29618_29662[(1)] = (18));

} else {
var statearr_29619_29663 = state_29584__$1;
(statearr_29619_29663[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (26))){
var inst_29556 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29584__$1 = state_29584;
if(cljs.core.truth_(inst_29556)){
var statearr_29620_29664 = state_29584__$1;
(statearr_29620_29664[(1)] = (30));

} else {
var statearr_29621_29665 = state_29584__$1;
(statearr_29621_29665[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (16))){
var inst_29524 = (state_29584[(2)]);
var inst_29525 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29526 = figwheel.client.format_messages.call(null,inst_29525);
var inst_29527 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29528 = figwheel.client.heads_up.display_error.call(null,inst_29526,inst_29527);
var state_29584__$1 = (function (){var statearr_29622 = state_29584;
(statearr_29622[(9)] = inst_29524);

return statearr_29622;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29584__$1,(17),inst_29528);
} else {
if((state_val_29585 === (30))){
var inst_29558 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29559 = figwheel.client.heads_up.display_warning.call(null,inst_29558);
var state_29584__$1 = state_29584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29584__$1,(33),inst_29559);
} else {
if((state_val_29585 === (10))){
var inst_29518 = (state_29584[(2)]);
var state_29584__$1 = state_29584;
var statearr_29623_29666 = state_29584__$1;
(statearr_29623_29666[(2)] = inst_29518);

(statearr_29623_29666[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (18))){
var inst_29534 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29535 = figwheel.client.format_messages.call(null,inst_29534);
var inst_29536 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29537 = figwheel.client.heads_up.display_error.call(null,inst_29535,inst_29536);
var state_29584__$1 = state_29584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29584__$1,(21),inst_29537);
} else {
if((state_val_29585 === (37))){
var inst_29567 = (state_29584[(2)]);
var state_29584__$1 = state_29584;
var statearr_29624_29667 = state_29584__$1;
(statearr_29624_29667[(2)] = inst_29567);

(statearr_29624_29667[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (8))){
var inst_29510 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29584__$1 = state_29584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29584__$1,(11),inst_29510);
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
});})(c__24790__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24678__auto__,c__24790__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24679__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24679__auto____0 = (function (){
var statearr_29628 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29628[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24679__auto__);

(statearr_29628[(1)] = (1));

return statearr_29628;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24679__auto____1 = (function (state_29584){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_29584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e29629){if((e29629 instanceof Object)){
var ex__24682__auto__ = e29629;
var statearr_29630_29668 = state_29584;
(statearr_29630_29668[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29669 = state_29584;
state_29584 = G__29669;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24679__auto__ = function(state_29584){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24679__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24679__auto____1.call(this,state_29584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24679__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24679__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto__,msg_hist,msg_names,msg))
})();
var state__24792__auto__ = (function (){var statearr_29631 = f__24791__auto__.call(null);
(statearr_29631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto__);

return statearr_29631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto__,msg_hist,msg_names,msg))
);

return c__24790__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24790__auto___29732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto___29732,ch){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto___29732,ch){
return (function (state_29715){
var state_val_29716 = (state_29715[(1)]);
if((state_val_29716 === (1))){
var state_29715__$1 = state_29715;
var statearr_29717_29733 = state_29715__$1;
(statearr_29717_29733[(2)] = null);

(statearr_29717_29733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (2))){
var state_29715__$1 = state_29715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29715__$1,(4),ch);
} else {
if((state_val_29716 === (3))){
var inst_29713 = (state_29715[(2)]);
var state_29715__$1 = state_29715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29715__$1,inst_29713);
} else {
if((state_val_29716 === (4))){
var inst_29703 = (state_29715[(7)]);
var inst_29703__$1 = (state_29715[(2)]);
var state_29715__$1 = (function (){var statearr_29718 = state_29715;
(statearr_29718[(7)] = inst_29703__$1);

return statearr_29718;
})();
if(cljs.core.truth_(inst_29703__$1)){
var statearr_29719_29734 = state_29715__$1;
(statearr_29719_29734[(1)] = (5));

} else {
var statearr_29720_29735 = state_29715__$1;
(statearr_29720_29735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (5))){
var inst_29703 = (state_29715[(7)]);
var inst_29705 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29703);
var state_29715__$1 = state_29715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29715__$1,(8),inst_29705);
} else {
if((state_val_29716 === (6))){
var state_29715__$1 = state_29715;
var statearr_29721_29736 = state_29715__$1;
(statearr_29721_29736[(2)] = null);

(statearr_29721_29736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (7))){
var inst_29711 = (state_29715[(2)]);
var state_29715__$1 = state_29715;
var statearr_29722_29737 = state_29715__$1;
(statearr_29722_29737[(2)] = inst_29711);

(statearr_29722_29737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (8))){
var inst_29707 = (state_29715[(2)]);
var state_29715__$1 = (function (){var statearr_29723 = state_29715;
(statearr_29723[(8)] = inst_29707);

return statearr_29723;
})();
var statearr_29724_29738 = state_29715__$1;
(statearr_29724_29738[(2)] = null);

(statearr_29724_29738[(1)] = (2));


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
});})(c__24790__auto___29732,ch))
;
return ((function (switch__24678__auto__,c__24790__auto___29732,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24679__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24679__auto____0 = (function (){
var statearr_29728 = [null,null,null,null,null,null,null,null,null];
(statearr_29728[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24679__auto__);

(statearr_29728[(1)] = (1));

return statearr_29728;
});
var figwheel$client$heads_up_plugin_$_state_machine__24679__auto____1 = (function (state_29715){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_29715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e29729){if((e29729 instanceof Object)){
var ex__24682__auto__ = e29729;
var statearr_29730_29739 = state_29715;
(statearr_29730_29739[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29740 = state_29715;
state_29715 = G__29740;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24679__auto__ = function(state_29715){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24679__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24679__auto____1.call(this,state_29715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24679__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24679__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto___29732,ch))
})();
var state__24792__auto__ = (function (){var statearr_29731 = f__24791__auto__.call(null);
(statearr_29731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto___29732);

return statearr_29731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto___29732,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24790__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24790__auto__){
return (function (){
var f__24791__auto__ = (function (){var switch__24678__auto__ = ((function (c__24790__auto__){
return (function (state_29761){
var state_val_29762 = (state_29761[(1)]);
if((state_val_29762 === (1))){
var inst_29756 = cljs.core.async.timeout.call(null,(3000));
var state_29761__$1 = state_29761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29761__$1,(2),inst_29756);
} else {
if((state_val_29762 === (2))){
var inst_29758 = (state_29761[(2)]);
var inst_29759 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29761__$1 = (function (){var statearr_29763 = state_29761;
(statearr_29763[(7)] = inst_29758);

return statearr_29763;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29761__$1,inst_29759);
} else {
return null;
}
}
});})(c__24790__auto__))
;
return ((function (switch__24678__auto__,c__24790__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24679__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24679__auto____0 = (function (){
var statearr_29767 = [null,null,null,null,null,null,null,null];
(statearr_29767[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24679__auto__);

(statearr_29767[(1)] = (1));

return statearr_29767;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24679__auto____1 = (function (state_29761){
while(true){
var ret_value__24680__auto__ = (function (){try{while(true){
var result__24681__auto__ = switch__24678__auto__.call(null,state_29761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24681__auto__;
}
break;
}
}catch (e29768){if((e29768 instanceof Object)){
var ex__24682__auto__ = e29768;
var statearr_29769_29771 = state_29761;
(statearr_29769_29771[(5)] = ex__24682__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29772 = state_29761;
state_29761 = G__29772;
continue;
} else {
return ret_value__24680__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24679__auto__ = function(state_29761){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24679__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24679__auto____1.call(this,state_29761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24679__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24679__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24679__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24679__auto__;
})()
;})(switch__24678__auto__,c__24790__auto__))
})();
var state__24792__auto__ = (function (){var statearr_29770 = f__24791__auto__.call(null);
(statearr_29770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24790__auto__);

return statearr_29770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24792__auto__);
});})(c__24790__auto__))
);

return c__24790__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29773){
var map__29780 = p__29773;
var map__29780__$1 = ((((!((map__29780 == null)))?((((map__29780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29780):map__29780);
var ed = map__29780__$1;
var formatted_exception = cljs.core.get.call(null,map__29780__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29780__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29780__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29782_29786 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29783_29787 = null;
var count__29784_29788 = (0);
var i__29785_29789 = (0);
while(true){
if((i__29785_29789 < count__29784_29788)){
var msg_29790 = cljs.core._nth.call(null,chunk__29783_29787,i__29785_29789);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29790);

var G__29791 = seq__29782_29786;
var G__29792 = chunk__29783_29787;
var G__29793 = count__29784_29788;
var G__29794 = (i__29785_29789 + (1));
seq__29782_29786 = G__29791;
chunk__29783_29787 = G__29792;
count__29784_29788 = G__29793;
i__29785_29789 = G__29794;
continue;
} else {
var temp__4657__auto___29795 = cljs.core.seq.call(null,seq__29782_29786);
if(temp__4657__auto___29795){
var seq__29782_29796__$1 = temp__4657__auto___29795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29782_29796__$1)){
var c__19078__auto___29797 = cljs.core.chunk_first.call(null,seq__29782_29796__$1);
var G__29798 = cljs.core.chunk_rest.call(null,seq__29782_29796__$1);
var G__29799 = c__19078__auto___29797;
var G__29800 = cljs.core.count.call(null,c__19078__auto___29797);
var G__29801 = (0);
seq__29782_29786 = G__29798;
chunk__29783_29787 = G__29799;
count__29784_29788 = G__29800;
i__29785_29789 = G__29801;
continue;
} else {
var msg_29802 = cljs.core.first.call(null,seq__29782_29796__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29802);

var G__29803 = cljs.core.next.call(null,seq__29782_29796__$1);
var G__29804 = null;
var G__29805 = (0);
var G__29806 = (0);
seq__29782_29786 = G__29803;
chunk__29783_29787 = G__29804;
count__29784_29788 = G__29805;
i__29785_29789 = G__29806;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29807){
var map__29810 = p__29807;
var map__29810__$1 = ((((!((map__29810 == null)))?((((map__29810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29810):map__29810);
var w = map__29810__$1;
var message = cljs.core.get.call(null,map__29810__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18263__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18263__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18263__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29818 = cljs.core.seq.call(null,plugins);
var chunk__29819 = null;
var count__29820 = (0);
var i__29821 = (0);
while(true){
if((i__29821 < count__29820)){
var vec__29822 = cljs.core._nth.call(null,chunk__29819,i__29821);
var k = cljs.core.nth.call(null,vec__29822,(0),null);
var plugin = cljs.core.nth.call(null,vec__29822,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29824 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29818,chunk__29819,count__29820,i__29821,pl_29824,vec__29822,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29824.call(null,msg_hist);
});})(seq__29818,chunk__29819,count__29820,i__29821,pl_29824,vec__29822,k,plugin))
);
} else {
}

var G__29825 = seq__29818;
var G__29826 = chunk__29819;
var G__29827 = count__29820;
var G__29828 = (i__29821 + (1));
seq__29818 = G__29825;
chunk__29819 = G__29826;
count__29820 = G__29827;
i__29821 = G__29828;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29818);
if(temp__4657__auto__){
var seq__29818__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29818__$1)){
var c__19078__auto__ = cljs.core.chunk_first.call(null,seq__29818__$1);
var G__29829 = cljs.core.chunk_rest.call(null,seq__29818__$1);
var G__29830 = c__19078__auto__;
var G__29831 = cljs.core.count.call(null,c__19078__auto__);
var G__29832 = (0);
seq__29818 = G__29829;
chunk__29819 = G__29830;
count__29820 = G__29831;
i__29821 = G__29832;
continue;
} else {
var vec__29823 = cljs.core.first.call(null,seq__29818__$1);
var k = cljs.core.nth.call(null,vec__29823,(0),null);
var plugin = cljs.core.nth.call(null,vec__29823,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29833 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29818,chunk__29819,count__29820,i__29821,pl_29833,vec__29823,k,plugin,seq__29818__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29833.call(null,msg_hist);
});})(seq__29818,chunk__29819,count__29820,i__29821,pl_29833,vec__29823,k,plugin,seq__29818__$1,temp__4657__auto__))
);
} else {
}

var G__29834 = cljs.core.next.call(null,seq__29818__$1);
var G__29835 = null;
var G__29836 = (0);
var G__29837 = (0);
seq__29818 = G__29834;
chunk__29819 = G__29835;
count__29820 = G__29836;
i__29821 = G__29837;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args29838 = [];
var len__19333__auto___29841 = arguments.length;
var i__19334__auto___29842 = (0);
while(true){
if((i__19334__auto___29842 < len__19333__auto___29841)){
args29838.push((arguments[i__19334__auto___29842]));

var G__29843 = (i__19334__auto___29842 + (1));
i__19334__auto___29842 = G__29843;
continue;
} else {
}
break;
}

var G__29840 = args29838.length;
switch (G__29840) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29838.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19340__auto__ = [];
var len__19333__auto___29849 = arguments.length;
var i__19334__auto___29850 = (0);
while(true){
if((i__19334__auto___29850 < len__19333__auto___29849)){
args__19340__auto__.push((arguments[i__19334__auto___29850]));

var G__29851 = (i__19334__auto___29850 + (1));
i__19334__auto___29850 = G__29851;
continue;
} else {
}
break;
}

var argseq__19341__auto__ = ((((0) < args__19340__auto__.length))?(new cljs.core.IndexedSeq(args__19340__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19341__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29846){
var map__29847 = p__29846;
var map__29847__$1 = ((((!((map__29847 == null)))?((((map__29847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29847):map__29847);
var opts = map__29847__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29845){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29845));
});

//# sourceMappingURL=client.js.map