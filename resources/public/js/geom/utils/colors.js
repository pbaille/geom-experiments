// Compiled by ClojureScript 1.7.228 {}
goog.provide('geom.utils.colors');
goog.require('cljs.core');
goog.require('cljsjs.d3');
goog.require('thi.ng.color.core');
goog.require('thi.ng.color.presets');
goog.require('goog.net.XhrIo');
geom.utils.colors.get_json = (function geom$utils$colors$get_json(url,success){
return goog.net.XhrIo.send(url,(function (r){
return success.call(null,r.target.getResponseJson());
}));
});
geom.utils.colors.palettes__GT_map = (function geom$utils$colors$palettes__GT_map(x){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (x__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1.title,cljs.core.js__GT_clj.call(null,x__$1.colors)], null);
}),x));
});
geom.utils.colors.palettes_req = (function geom$utils$colors$palettes_req(w){
return (function (cb){
return geom.utils.colors.get_json.call(null,[cljs.core.str("http://cors.io/?u=http://www.colourlovers.com/api/palettes/"),cljs.core.str(w),cljs.core.str("?format=json")].join(''),cljs.core.comp.call(null,cb,geom.utils.colors.palettes__GT_map));
});
});
geom.utils.colors.top_palettes = geom.utils.colors.palettes_req.call(null,"top");
geom.utils.colors.new_palettes = geom.utils.colors.palettes_req.call(null,"new");
geom.utils.colors.rand_palette = geom.utils.colors.palettes_req.call(null,"random");
geom.utils.colors.colors__GT_map = (function geom$utils$colors$colors__GT_map(x){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (x__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1.title,x__$1.hex], null);
}),x));
});
geom.utils.colors.colors_req = (function geom$utils$colors$colors_req(w){
return (function (cb){
return geom.utils.colors.get_json.call(null,[cljs.core.str("http://cors.io/?u=http://www.colourlovers.com/api/colors/"),cljs.core.str(w),cljs.core.str("?format=json")].join(''),cljs.core.comp.call(null,cb,geom.utils.colors.colors__GT_map));
});
});
geom.utils.colors.top_colors = geom.utils.colors.colors_req.call(null,"top");
geom.utils.colors.new_colors = geom.utils.colors.colors_req.call(null,"new");
geom.utils.colors.rand_color = geom.utils.colors.colors_req.call(null,"random");
geom.utils.colors.wes_anderson = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"royal1","royal1",-1499950238),new cljs.core.Keyword(null,"grandbudapest","grandbudapest",-2117184346),new cljs.core.Keyword(null,"rushmore","rushmore",770674184),new cljs.core.Keyword(null,"moonrise1","moonrise1",1060635240),new cljs.core.Keyword(null,"moonrise3","moonrise3",487092012),new cljs.core.Keyword(null,"chevalier","chevalier",187973459),new cljs.core.Keyword(null,"grandbudapest2","grandbudapest2",-1817118828),new cljs.core.Keyword(null,"royal2","royal2",-1800442123),new cljs.core.Keyword(null,"zissou","zissou",1677517112),new cljs.core.Keyword(null,"moonrise2","moonrise2",-1940458024),new cljs.core.Keyword(null,"cavalcanti","cavalcanti",2122624345),new cljs.core.Keyword(null,"fantasticfox","fantasticfox",-1272230023),new cljs.core.Keyword(null,"darjeeling2","darjeeling2",-1931737222),new cljs.core.Keyword(null,"bottlerocket2","bottlerocket2",1729798587),new cljs.core.Keyword(null,"bottlerocket","bottlerocket",-232696003),new cljs.core.Keyword(null,"darjeeling","darjeeling",1422399)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#C93312","#DC863B","#899DA4","#FAEFD1"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#5B1A18","#D67236","#FD6467","#F1BB7B"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#35274A","#F2300F","#0B775E","#E1BD6D","#EABE94"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#24281A","#CEAB07","#D5D5D3","#F3DF6C"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#9C964A","#CDC08C","#F4B5BD","#85D4E3","#FAD77B"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#446455","#C7B19C","#FDD262","#D3DDDC"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#7294D4","#D8A499","#E6A0C4","#C6CDF7"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#9A8822","#74A089","#F8AFA8","#F5CDB4","#FDDDA0"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#F21A00","#3B9AB2","#78B7C5","#E1AF00","#EBCC2A"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#29211F","#C27D38","#798E87","#CCC591"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#02401B","#972D15","#81A88D","#A2A475","#D8B70A"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#B40F20","#E58601","#DD8D29","#46ACC8","#E2D200"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#000000","#046C9A","#D69C4E","#ECCBAE","#ABDDDE"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#1E1E1E","#273046","#354823","#CB2314","#FAD510"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#0C1707","#550307","#9B110E","#4E2A1E","#A42820","#3F5151","#5F5647"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FF0000","#00A08A","#F98400","#5BBCD6","#F2AD00"], null)]);
geom.utils.colors.css = (function geom$utils$colors$css(x){
if(cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,x))){
return thi.ng.color.core.css.call(null,x);
} else {
return thi.ng.color.presets.preset_css.call(null,cljs.core.keyword.call(null,x));
}
});
geom.utils.colors.grad_palette = (function geom$utils$colors$grad_palette(c1,c2,n){
return cljs.core.mapv.call(null,(function (x){
return thi.ng.color.core.blend.call(null,c1,c2,x);
}),cljs.core.range.call(null,(0),(1),((1) / n)));
});

//# sourceMappingURL=colors.js.map