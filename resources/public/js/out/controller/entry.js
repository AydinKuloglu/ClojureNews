// Compiled by ClojureScript 1.8.51 {}
goog.provide('controller.entry');
goog.require('cljs.core');
goog.require('cljc.validation');
goog.require('goog.dom');
goog.require('view.entry.story_entry');
goog.require('ajax.core');
goog.require('view.entry.ask_entry');
goog.require('reagent.core');
goog.require('util.controller');
goog.require('view.list.entry');
goog.require('util.view');
goog.require('view.list.story');
goog.require('controller.upvote');
goog.require('controller.comment_entry');
goog.require('view.list.ask');







controller.entry.home_page = (function controller$entry$home_page(){
return ajax.core.GET.call(null,"/entry",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.list.entry.component_story_and_ask.call(null,response);
})], null),util.view.main_container);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.get_stories_by_page = (function controller$entry$get_stories_by_page(page){
return ajax.core.GET.call(null,[cljs.core.str("/entry/story/p/"),cljs.core.str(page)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.list.story.component_list_story.call(null,response,page);
})], null),util.view.main_container);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.get_story_by_id = (function controller$entry$get_story_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/story/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.story_entry.component_story.call(null,response);
})], null),util.view.main_container);

controller.entry.add_event_listener_to_add_comment_button.call(null,controller$entry$get_story_by_id,id);

return controller.entry.add_event_listener_to_upvote_buttons.call(null,response,new cljs.core.Keyword(null,"story","story",-1000647533));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.edit_story_by_id = (function controller$entry$edit_story_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/story/info/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.story_entry.component_edit.call(null,response);
})], null),util.view.main_container);

return controller.entry.add_event_listener_to_edit_story_button.call(null,id);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.edit_story = (function controller$entry$edit_story(id,field_ids){
var data = util.view.create_field_val_map.call(null,field_ids);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.not.call(null,cljc.validation.submit_title_QMARK_.call(null,title))){
return util.view.render_error_message.call(null,"Please limit title to 80 characters.");
} else {
return ajax.core.POST.call(null,[cljs.core.str("/entry/story/edit/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (data,title){
return (function (_){
return util.view.change_url.call(null,[cljs.core.str("/#/story/"),cljs.core.str(id)].join(''));
});})(data,title))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
});
controller.entry.delete_story_by_id = (function controller$entry$delete_story_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/story/info/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.story_entry.component_delete.call(null,response);
})], null),util.view.main_container);

controller.entry.add_event_listener_to_story_button_yes.call(null,id);

return controller.entry.add_event_listener_to_story_button_no.call(null);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.delete_story = (function controller$entry$delete_story(id){
return ajax.core.DELETE.call(null,[cljs.core.str("/entry/story/delete/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
return util.view.change_url.call(null,"/#/");
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.get_ask_by_id = (function controller$entry$get_ask_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/ask/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.ask_entry.component_ask.call(null,response);
})], null),util.view.main_container);

controller.entry.add_event_listener_to_add_comment_button.call(null,controller$entry$get_ask_by_id,id);

return controller.entry.add_event_listener_to_upvote_buttons.call(null,response,new cljs.core.Keyword(null,"ask","ask",707712414));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.get_ask_by_page = (function controller$entry$get_ask_by_page(page){
return ajax.core.GET.call(null,[cljs.core.str("/entry/ask/p/"),cljs.core.str(page)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.list.ask.component_list_ask.call(null,response,page);
})], null),util.view.main_container);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.edit_ask_by_id = (function controller$entry$edit_ask_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/ask/info/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.ask_entry.component_edit.call(null,response);
})], null),util.view.main_container);

return controller.entry.add_event_listener_to_edit_ask_button.call(null,id);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.edit_ask = (function controller$entry$edit_ask(id,field_ids){
var data = util.view.create_field_val_map.call(null,field_ids);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.not.call(null,cljc.validation.submit_title_QMARK_.call(null,title))){
return util.view.render_error_message.call(null,"Please limit title to 80 characters.");
} else {
if(cljs.core.not.call(null,cljc.validation.submit_text_QMARK_.call(null,text))){
return util.view.render_error_message.call(null,"Please limit text to 2500 characters.");
} else {
return ajax.core.POST.call(null,[cljs.core.str("/entry/ask/edit/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (data,title,text){
return (function (_){
return util.view.change_url.call(null,[cljs.core.str("/#/ask/"),cljs.core.str(id)].join(''));
});})(data,title,text))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

}
}
});
controller.entry.delete_ask_by_id = (function controller$entry$delete_ask_by_id(id){
return ajax.core.GET.call(null,[cljs.core.str("/entry/ask/info/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return view.entry.ask_entry.component_delete.call(null,response);
})], null),util.view.main_container);

controller.entry.add_event_listener_to_ask_button_yes.call(null,id);

return controller.entry.add_event_listener_to_ask_button_no.call(null);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.delete_ask = (function controller$entry$delete_ask(id){
return ajax.core.DELETE.call(null,[cljs.core.str("/entry/ask/delete/"),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
return util.view.change_url.call(null,"/#/");
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),util.controller.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
});
controller.entry.dont_delete_story = (function controller$entry$dont_delete_story(){
return util.view.change_url.call(null,"/#/");
});
controller.entry.dont_delete_ask = (function controller$entry$dont_delete_ask(){
return util.view.change_url.call(null,"/#/");
});
controller.entry.add_event_listener_to_add_comment_button = (function controller$entry$add_event_listener_to_add_comment_button(entry,id){
return goog.dom.getElement("buttonAddCommentId").addEventListener("click",(function (_){
return controller.comment_entry.add_comment.call(null,entry,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["textId"], null));
}));
});
controller.entry.add_event_listener_to_upvote_buttons = (function controller$entry$add_event_listener_to_upvote_buttons(response,type){
var comments = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"story","story",-1000647533)))?new cljs.core.Keyword(null,"story-comments","story-comments",-631068375):new cljs.core.Keyword(null,"ask-comments","ask-comments",-767991465));
var upvoted_comments = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"story","story",-1000647533)))?new cljs.core.Keyword(null,"story-upvoted-comments","story-upvoted-comments",203538215):new cljs.core.Keyword(null,"ask-upvoted-comments","ask-upvoted-comments",241263239));
var seq__26371 = cljs.core.seq.call(null,comments.call(null,response));
var chunk__26372 = null;
var count__26373 = (0);
var i__26374 = (0);
while(true){
if((i__26374 < count__26373)){
var commentt = cljs.core._nth.call(null,chunk__26372,i__26374);
var comment_id_26375 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(commentt);
var upvoted_comments_26376__$1 = upvoted_comments.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,comment_id_26375,upvoted_comments_26376__$1))){
} else {
var temp__4657__auto___26377 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(comment_id_26375)].join(''));
if(cljs.core.truth_(temp__4657__auto___26377)){
var node_26378 = temp__4657__auto___26377;
node_26378.addEventListener("click",((function (seq__26371,chunk__26372,count__26373,i__26374,node_26378,temp__4657__auto___26377,comment_id_26375,upvoted_comments_26376__$1,commentt,comments,upvoted_comments){
return (function (_){
return controller.upvote.upvote_comment.call(null,comment_id_26375);
});})(seq__26371,chunk__26372,count__26373,i__26374,node_26378,temp__4657__auto___26377,comment_id_26375,upvoted_comments_26376__$1,commentt,comments,upvoted_comments))
);
} else {
}
}

var G__26379 = seq__26371;
var G__26380 = chunk__26372;
var G__26381 = count__26373;
var G__26382 = (i__26374 + (1));
seq__26371 = G__26379;
chunk__26372 = G__26380;
count__26373 = G__26381;
i__26374 = G__26382;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26371);
if(temp__4657__auto__){
var seq__26371__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26371__$1)){
var c__24530__auto__ = cljs.core.chunk_first.call(null,seq__26371__$1);
var G__26383 = cljs.core.chunk_rest.call(null,seq__26371__$1);
var G__26384 = c__24530__auto__;
var G__26385 = cljs.core.count.call(null,c__24530__auto__);
var G__26386 = (0);
seq__26371 = G__26383;
chunk__26372 = G__26384;
count__26373 = G__26385;
i__26374 = G__26386;
continue;
} else {
var commentt = cljs.core.first.call(null,seq__26371__$1);
var comment_id_26387 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(commentt);
var upvoted_comments_26388__$1 = upvoted_comments.call(null,response);
if(cljs.core.truth_(util.view.in_QMARK_.call(null,comment_id_26387,upvoted_comments_26388__$1))){
} else {
var temp__4657__auto___26389__$1 = goog.dom.getElement([cljs.core.str("id-upvote-"),cljs.core.str(comment_id_26387)].join(''));
if(cljs.core.truth_(temp__4657__auto___26389__$1)){
var node_26390 = temp__4657__auto___26389__$1;
node_26390.addEventListener("click",((function (seq__26371,chunk__26372,count__26373,i__26374,node_26390,temp__4657__auto___26389__$1,comment_id_26387,upvoted_comments_26388__$1,commentt,seq__26371__$1,temp__4657__auto__,comments,upvoted_comments){
return (function (_){
return controller.upvote.upvote_comment.call(null,comment_id_26387);
});})(seq__26371,chunk__26372,count__26373,i__26374,node_26390,temp__4657__auto___26389__$1,comment_id_26387,upvoted_comments_26388__$1,commentt,seq__26371__$1,temp__4657__auto__,comments,upvoted_comments))
);
} else {
}
}

var G__26391 = cljs.core.next.call(null,seq__26371__$1);
var G__26392 = null;
var G__26393 = (0);
var G__26394 = (0);
seq__26371 = G__26391;
chunk__26372 = G__26392;
count__26373 = G__26393;
i__26374 = G__26394;
continue;
}
} else {
return null;
}
}
break;
}
});
controller.entry.add_event_listener_to_edit_story_button = (function controller$entry$add_event_listener_to_edit_story_button(id){
return goog.dom.getElement("buttonStoryEditId").addEventListener("click",(function (_){
return controller.entry.edit_story.call(null,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["titleId"], null));
}));
});
controller.entry.add_event_listener_to_edit_ask_button = (function controller$entry$add_event_listener_to_edit_ask_button(id){
return goog.dom.getElement("buttonAskEditId").addEventListener("click",(function (_){
return controller.entry.edit_ask.call(null,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["titleId","textId"], null));
}));
});
controller.entry.add_event_listener_to_story_button_yes = (function controller$entry$add_event_listener_to_story_button_yes(id){
return goog.dom.getElement("buttonDeleteStoryYesId").addEventListener("click",(function (_){
return controller.entry.delete_story.call(null,id);
}));
});
controller.entry.add_event_listener_to_story_button_no = (function controller$entry$add_event_listener_to_story_button_no(){
return goog.dom.getElement("buttonDeleteStoryNoId").addEventListener("click",(function (_){
return controller.entry.dont_delete_story.call(null);
}));
});
controller.entry.add_event_listener_to_ask_button_yes = (function controller$entry$add_event_listener_to_ask_button_yes(id){
return goog.dom.getElement("buttonDeleteAskYesId").addEventListener("click",(function (_){
return controller.entry.delete_story.call(null,id);
}));
});
controller.entry.add_event_listener_to_ask_button_no = (function controller$entry$add_event_listener_to_ask_button_no(){
return goog.dom.getElement("buttonDeleteAskNoId").addEventListener("click",(function (_){
return controller.entry.dont_delete_ask.call(null);
}));
});

//# sourceMappingURL=entry.js.map