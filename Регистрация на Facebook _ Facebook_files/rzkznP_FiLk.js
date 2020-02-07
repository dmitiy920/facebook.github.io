if (self.CavalryLogger) { CavalryLogger.start_js(["WtwvR"]); }

__d("PixelRatioConst",[],(function(a,b,c,d,e,f){e.exports={cookieName:"dpr"}}),null);
__d("ProfileTabConst",[],(function(a,b,c,d,e,f){e.exports={ALBUM:"album",ALBUMS:"albums",ALL_ACTIVITY:"allactivity",APPROVAL:"approve",APPS:"apps",BOXES:"box_3",COMMERCE:"shop",DEALS:"deals",DRAFT_NOTES:"notes_drafts",EVENTS:"events",FAVORITES:"favorites",FUNDRAISERS:"fundraisers",FOLLOWERS:"followers",FOLLOWING:"following",FRIENDS:"friends",FRIENDS_MUTUAL:"friends_mutual",FUN_FACTS:"did_you_know",GROUPS:"groups",GROUPS_MUTUAL:"groups_mutual",GROUPS_ADMINED:"groups_admined",INFO:"info",LIKES:"likes",LINEAR_CHANNELS:"linear_channels",LOCATIONS:"locations",MAP:"map",MEMORIAL_CONTACT:"legacy_contact",MY_NOTES:"notes_my_notes",NEARBY:"nearby",NOTES:"notes",OVERVIEW:"about",PAST_EVENTS:"pe",PAST_HOSTED_EVENTS:"phe",PERSONALITY_QUESTIONS:"personality_questions",PHOTOS:"photos",PHOTOS_ALBUM:"media_set",PHOTOS_ALBUMS:"photos_albums",PHOTOS_ALL:"photos_all",PHOTOS_BY_OTHERS:"photos_by_others",PHOTOS_STREAM:"photos_stream",PHOTOS_SYNCED:"photos_synced",POSTS:"posts",POSTS_OTHERS:"posts_to_page",RESUME:"resume",REVIEWS:"reviews",SAVE_LISTS:"lists",SAVED_FOR_LATER:"saved",SPACES:"post_sets",STORIES_ARCHIVE:"archive",SPORTS:"sports",SUPPORTERS:"supporters",TAGGED_NOTES:"notes_tagged",TASKS:"tasks",TIMELINE:"timeline",TRIBUTES:"tributes",TIMELINE_OVERVIEW:"grid",UPCOMING_HOSTED_EVENTS:"uhe",VIDEOS:"videos",WALL:"wall",WALL_ADMIN:"wall_admin",WIKIPEDIA:"wiki",PAGE_GETTING_STARTED:"page_getting_started",PAGE_MAP:"page_map",PAGE_MENU:"menu",PAGE_FOOD_DRINK_MENU:"food_drink_menu",PAGE_BOOK_PREVIEW:"book_preview",PAGE_PRODUCTS:"products",PAGE_SERVICES:"services",PAGES_CONTENT_TAB:"content_tab",PAGE_FAN_QUESTIONS:"questions",PAGES_REACTION_SANDBOX:"reaction_sandbox",PAGE_OFFERS:"offers",PAGE_JOB_PERMALINK:"page_job_permalink",HOME:"home",PAGE_JOBS:"jobs",PAGE_LIVE_VIDEOS:"live_videos",PAGE_EPISODES:"episodes",PAGE_SHOP_NT:"shop_nt",PAGE_SHOW:"show",PAGE_PLAYLISTS:"playlists",PAGE_SHOW_VIDEOS:"show_videos",PAGE_COLLECTIONS:"collections",PAGE_SERIES:"series",PAGE_CHANNEL:"channel",CAST_AND_CREW:"cast_and_crew",COMMUNITY:"community",FEATURING:"featuring",FREQUENTLY_ASKED_QUESTIONS:"frequently_asked_questions",INSTAGRAM:"instagram",LOYALTY:"loyalty",MOVIE_PROVIDER:"movie_provider",PODCASTS:"podcasts",PROFILE_OVERLAYS:"profile_overlays",STORY:"story",CUSTOM:"custom",OG_APP_URL_PREFIX:"app_",OG_APPID_PREFIX:"og_app_",OG_NAMESPACE_PREFIX:"og_ns_",OG_BOOKS:"books",OG_FITNESS:"fitness",OG_GAMES:"games",OG_MOVIES:"movies",OG_MUSIC:"music",OG_NEWS:"news",OG_TV_SHOWS:"tv",OG_VIDEO:"video",OG_APP_INSTAGRAM:"app_instapp",OG_APP_POKEDEX:"app_fbpokedex"}}),null);
__d("DesktopHscrollUnitEventConstants",[],(function(a,b,c,d,e,f){e.exports={HSCROLL_ITEM_INSERTED_EVENT:"DesktopHScrollUnit/itemInserted",HSCROLL_ITEM_SHOWN_EVENT:"DesktopHScrollUnit/itemShown",HSCROLL_ITEM_HIDE_EVENT:"DesktopHScrollUnit/HideIndividualItem",HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT:"DesktopHScrollUnit/scrollItemBeforeXout",HSCROLL_ITEM_UNHIDE_EVENT:"DesktopHScrollUnit/unhideIndividualItem",HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN:"logLastAdXout",HSCROLL_PAGER_ITEM_HIDE_EVENT:"onXoutIndividualItem"}}),null);
__d("ChatQuietLinks",["DataStore","DOM","Event","Parent","UserAgent_DEPRECATED","getOrCreateDOMID"],(function(a,b,c,d,e,f){__p&&__p();var g={};a={silenceLinks:function(a){h(a,this.removeEmptyHrefs.bind(this))},nukeLinks:function(a){h(a,this.removeAllHrefs.bind(this))},removeEmptyHrefs:function(a){i(a,function(a){return!a||a==="#"})},removeAllHrefs:function(a){i(a)}};function h(a,c){__p&&__p();if(!a)return;var d=!!b("UserAgent_DEPRECATED").chrome(),e=!!b("UserAgent_DEPRECATED").chrome()||b("UserAgent_DEPRECATED").ie()>=9||b("UserAgent_DEPRECATED").firefox()>=4;if(g[b("getOrCreateDOMID")(a)])return;g[b("getOrCreateDOMID")(a)]=!0;if(!e)return;if(!d){c&&c(a);return}b("Event").listen(a,"mouseover",function(a){a=b("Parent").byTag(a.getTarget(),"a");if(a){var c=a.getAttribute("href");j(c)&&(b("DataStore").set(a,"stashedHref",a.getAttribute("href")),a.removeAttribute("href"))}});b("Event").listen(a,"mouseout",function(a){a=b("Parent").byTag(a.getTarget(),"a");var c=a&&b("DataStore").remove(a,"stashedHref");j(c)&&a.setAttribute("href",c)});b("Event").listen(a,"mousedown",function(a){if(!a.isDefaultRequested())return!0;a=b("Parent").byTag(a.getTarget(),"a");var c=a&&b("DataStore").get(a,"stashedHref");j(c)&&a.setAttribute("href",c)})}function i(a,c){a=b("DOM").scry(a,"a");c&&(a=a.filter(function(a){return c(a.getAttribute("href"))}));a.forEach(function(a){a.removeAttribute("href"),a.tabIndex||a.setAttribute("tabindex",0)})}function j(a){return a&&a!=="#"}e.exports=a}),null);
__d("FBStoriesGating",["gkx","qex"],(function(a,b,c,d,e,f){"use strict";a={shouldUseTrayMigration:function(){return b("qex")._("835044")||!1},getMaxBucketsForTrayLoad:function(){var a;return(a=b("qex")._("863217"))!=null?a:100},isFriendsAndConnectionsOptionDeprecated:function(){return b("gkx")("1234255")}};e.exports=a}),null);
__d("BlueBarFixedBehaviorController",["Arbiter","Bootloader"],(function(a,b,c,d,e,f){__p&&__p();e.exports={init:function(a){__p&&__p();if(!("getBoundingClientRect"in a))return;var c,d=document.documentElement;function e(a){c!==a&&(c=a,b("Arbiter").inform("bluebarFixedBehaviorController/isfixed",c,"state"))}function f(){var b=a.getBoundingClientRect();b=b.top;var c=d?d.clientTop:0;b=Math.round(b)-c<=0;e(b)}function g(){e(!1)}f();b("Bootloader").loadModules(["Event"],function(a){a.listen(window,"scroll",f)},"BlueBarFixedBehaviorController");b("Arbiter").subscribe("quickling/response",f);b("Arbiter").subscribe("banner/shown",g)}}}),null);
__d("PageHooks",["Arbiter","ErrorUtils","InitialJSLoader","PageEvents"],(function(a,b,c,d,e,f){__p&&__p();var g;f={DOMREADY_HOOK:"domreadyhooks",ONLOAD_HOOK:"onloadhooks"};function h(){var c=a.CavalryLogger;!window.domready&&c&&c.getInstance().setTimeStamp("t_prehooks");k(l.DOMREADY_HOOK);!window.domready&&c&&c.getInstance().setTimeStamp("t_hooks");window.domready=!0;b("Arbiter").inform("uipage_onload",!0,"state")}function i(){k(l.ONLOAD_HOOK),window.loaded=!0}function j(a,c){return(g||(g=b("ErrorUtils"))).applyWithGuard(a,null,null,function(a){a.event_type=c,a.category="runhook"},"PageHooks:"+c)}function k(a){__p&&__p();var b=a=="onbeforeleavehooks"||a=="onbeforeunloadhooks";do{var c=window[a];if(!c)break;b||(window[a]=null);for(var d=0;d<c.length;d++){var e=j(c[d],a);if(b&&e)return e}}while(!b&&window[a])}function c(){window.domready||(window.domready=!0,k("onloadhooks")),window.loaded||(window.loaded=!0,k("onafterloadhooks"))}function d(){var a,c;(a=b("Arbiter")).registerCallback(h,[(c=b("PageEvents")).BIGPIPE_DOMREADY,b("InitialJSLoader").INITIAL_JS_READY]);a.registerCallback(i,[c.BIGPIPE_DOMREADY,c.BIGPIPE_ONLOAD,b("InitialJSLoader").INITIAL_JS_READY]);a.subscribe(c.NATIVE_ONBEFOREUNLOAD,function(a,b){b.warn=k("onbeforeleavehooks")||k("onbeforeunloadhooks"),b.warn||(window.domready=!1,window.loaded=!1)},"new");a.subscribe(c.NATIVE_ONUNLOAD,function(a,b){k("onunloadhooks"),k("onafterunloadhooks")},"new")}var l=babelHelpers["extends"]({_domreadyHook:h,_onloadHook:i,runHook:j,runHooks:k,keepWindowSetAsLoaded:c},f);d();a.PageHooks=e.exports=l}),null);
__d("legacy:onload-action",["PageHooks"],(function(a,b,c,d,e,f){a._domreadyHook=(c=b("PageHooks"))._domreadyHook;a._onloadHook=c._onloadHook;a.runHook=c.runHook;a.runHooks=c.runHooks;a.keep_window_set_as_loaded=c.keepWindowSetAsLoaded}),3);
__d("JSLogger",["lowerFacebookDomain"],(function(a,b,c,d,e,f){__p&&__p();var g={MAX_HISTORY:500,counts:{},categories:{},seq:0,pageId:(Math.random()*2147483648|0).toString(36),forwarding:!1};function h(a){if(a=="/"||a.indexOf("/",1)<0)return!1;var b=/^\/(v\d+\.\d\d?|head)\//.test(a);return b?/^\/(dialog|plugins)\//.test(a.substring(a.indexOf("/",1))):/^\/(dialog|plugins)\//.test(a)}function i(b){b instanceof Error&&a.ErrorUtils&&(b=a.ErrorUtils.normalizeError(b));try{return JSON.stringify(b)}catch(a){return"{}"}}function j(a,b,c){g.counts[a]||(g.counts[a]={}),g.counts[a][b]||(g.counts[a][b]=0),c=c==null?1:Number(c),g.counts[a][b]+=isFinite(c)?c:0}g.logAction=function(a,b,c){__p&&__p();if(this.type=="bump")j(this.cat,a,b);else if(this.type=="rate")b&&j(this.cat,a+"_n",c),j(this.cat,a+"_d",c);else{c={cat:this.cat,type:this.type,event:a,data:b!=null?i(b):null,date:Date.now(),seq:g.seq++};g.head=g.head?g.head.next=c:g.tail=c;while(g.head.seq-g.tail.seq>g.MAX_HISTORY)g.tail=g.tail.next;return c}};function c(c){__p&&__p();if(!g.categories[c]){g.categories[c]={};var d=function(d){__p&&__p();var e={cat:c,type:d};g.categories[c][d]=function(){__p&&__p();g.forwarding=!1;var c=null;if(b("lowerFacebookDomain").isValidDocumentDomain())return;c=g.logAction;if(h(location.pathname))g.forwarding=!1;else try{c=a.top.require("JSLogger")._.logAction,g.forwarding=c!==g.logAction}catch(a){}c&&c.apply(e,arguments)}};d("debug");d("log");d("warn");d("error");d("bump");d("rate")}return g.categories[c]}function d(a,b){var c=[];for(var b=b||g.tail;b;b=b.next)if(!a||a(b)){var d={type:b.type,cat:b.cat,date:b.date,event:b.event,seq:b.seq};b.data&&(d.data=JSON.parse(b.data));c.push(d)}return c}e.exports={_:g,DUMP_EVENT:"jslogger/dump",create:c,getEntries:d}}),null);
__d("Nectar",["Env","getContextualParent"],(function(a,b,c,d,e,f){__p&&__p();var g;function h(a){a.nctr||(a.nctr={})}function i(a){__p&&__p();if((g||(g=b("Env"))).module||!a)return(g||(g=b("Env"))).module;var c={fbpage_fan_confirm:!0,photos_snowlift:!0},d;while(a&&a.getAttribute){var e=a.getAttribute("id");if(e!=null&&e.startsWith("pagelet_"))return e;!d&&c[e]&&(d=e);a=b("getContextualParent")(a)}return d}a={addModuleData:function(a,b){b=i(b);b&&(h(a),a.nctr._mod=b)},addImpressionID:function(a){(g||(g=b("Env"))).impid&&(h(a),a.nctr._impid=(g||(g=b("Env"))).impid)}};e.exports=a}),null);
__d("AsyncRequestNectarLogging",["AsyncRequest","Nectar"],(function(a,b,c,d,e,f){Object.assign(b("AsyncRequest").prototype,{setNectarModuleData:function(a){this.method=="POST"&&b("Nectar").addModuleData(this.data,a)}})}),null);
__d("FBIDCheck",[],(function(a,b,c,d,e,f){"use strict";var g=/^[1-9]\d*$/;a={isUser_deprecated:function(a){if(!a||typeof a==="string"&&!g.test(a))return!1;a=parseInt(a,10);return!a?!1:a>0&&a<22e8||a>=1e14&&a<=100099999989999||a>=89e12&&a<=89999999999999||a>=6000001e7&&a<=60000019999999}};e.exports=a}),null);
__d("FullScreen",["ArbiterMixin","CSS","Event","Keys","UserAgent","UserAgent_DEPRECATED","mixin","throttle"],(function(a,b,c,d,e,f){__p&&__p();var g={},h=!1,i=function(a){b("Event").getKeyCode(a)===b("Keys").ESC&&a.stopPropagation()},j=function(){h||(document.addEventListener("keydown",i,!0),h=!0)},k=function(){h&&(document.removeEventListener("keydown",i,!0),h=!1)};a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.listenForEvent=function(a){var c=b("throttle")(this.onChange,0,this);g[a.id]||(g[a.id]=!0,b("Event").listen(a,{webkitfullscreenchange:c,mozfullscreenchange:c,MSFullscreenChange:c,fullscreenchange:c}))};d.enableFullScreen=function(a){__p&&__p();this.listenForEvent(a);if(a.webkitRequestFullScreen)b("UserAgent_DEPRECATED").chrome()?a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):a.webkitRequestFullScreen();else if(a.mozRequestFullScreen)a.mozRequestFullScreen();else if(a.msRequestFullscreen)j(),a.msRequestFullscreen();else if(a.requestFullScreen)a.requestFullScreen();else return!1;return!0};d.disableFullScreen=function(){__p&&__p();if(document.webkitCancelFullScreen)document.webkitCancelFullScreen();else if(document.mozCancelFullScreen)document.mozCancelFullScreen();else if(document.msExitFullscreen)document.msExitFullscreen();else if(document.cancelFullScreen)document.cancelFullScreen();else if(document.exitFullScreen)document.exitFullScreen();else return!1;return!0};d.isFullScreen=function(){return document.webkitIsFullScreen||document.fullScreen||document.mozFullScreen||document.msFullscreenElement};d.toggleFullScreen=function(a){if(this.isFullScreen()){this.disableFullScreen();return!1}else return this.enableFullScreen(a)};d.onChange=function(){var a=this.isFullScreen();b("CSS").conditionClass(document.body,"fullScreen",a);this.inform("changed");a||k()};d.isSupportedWithKeyboardInput=function(){return this.isSupported()&&!b("UserAgent").isBrowser("Safari")};d.isSupported=function(){var a=document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled||document.fullscreenEnabled;return a||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.cancelFullScreen||document.exitFullScreen};return c}(b("mixin")(b("ArbiterMixin")));c=new a();d=b("throttle")(c.onChange,0,c);b("Event").listen(document,{webkitfullscreenchange:d,mozfullscreenchange:d,MSFullscreenChange:d,fullscreenchange:d});e.exports=c}),null);
__d("PageTransitions",["requireCond","cr:917439"],(function(a,b,c,d,e,f){e.exports=b("cr:917439")}),null);
__d("WebPixelRatioDetector",["Cookie","DOMEventListener","PixelRatioConst","Run"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("PixelRatioConst").cookieName,h=!1,i=!1,j=!1;function k(){return window.devicePixelRatio||1}function l(){b("Cookie").set(g,String(k()))}function m(){b("Cookie").clear(g)}function n(){if(i)return;i=!0;j&&m();k()!==1?l():m()}a={startDetecting:function(a){a&&(j=!0);if(h)return;h=!0;"onpagehide"in window&&b("DOMEventListener").add(window,"pagehide",n);b("Run").onBeforeUnload(n,!1)}};e.exports=a}),null);
__d("onEnclosingPageletDestroy",["Arbiter","DOMQuery"],(function(a,b,c,d,e,f){function a(a,c){var d=b("Arbiter").subscribe("pagelet/destroy",function(e,f){b("DOMQuery").contains(f.root,a)&&(d.unsubscribe(),c())});return d}e.exports=a}),null);
__d("QueryHistory",[],(function(a,b,c,d,e,f){var g={};a={set:function(a,b){g[this._key(a)]=b},get:function(a){return g[this._key(a)]},_key:function(a){return"uri-"+a.getQualifiedURI().toString()}};e.exports=a}),null);
__d("SimpleSearchNavigation",["Arbiter","DOMQuery","Input","QueryHistory","URI"],(function(a,b,c,d,e,f){__p&&__p();var g,h=null,i=null;a={registerInput:function(a,c){var d=this;i=b("DOMQuery").scry(a,"input")[0];h&&this._updateTitle(h,c);b("Arbiter").subscribe("page_transition",function(a,c){d._updateTitle(b("QueryHistory").get(c.uri))})},_updateTitle:function(a,c){i&&(b("Input").setValue(i,a||""),i.setAttribute("singlestate",a&&c),i.blur())},setPageTitle:function(a,c){b("QueryHistory").set((g||(g=b("URI"))).getNextURI(),a);i?this._updateTitle(a,c):h=a;c={};b("Arbiter").inform("search/updateNullState",c,"state")},setPageQuery:function(a){b("Arbiter").inform("search/updateNullState",a,"state")}};e.exports=a}),null);
__d("UITinyViewportAction",["Arbiter","ArbiterMixin","CSS","Event","FullScreen","getDocumentScrollElement","queryThenMutateDOM","throttle"],(function(a,b,c,d,e,f){__p&&__p();var g=document.documentElement,h,i,j,k,l=!1,m=!1,n=!1,o={init:function(a){__p&&__p();a=b("throttle")(function(){__p&&__p();if(b("FullScreen").isFullScreen())return;b("queryThenMutateDOM")(function(){k=k||b("getDocumentScrollElement")(),i=g.clientWidth<k.scrollWidth-1,j=g.clientHeight<400,h=j||i},function(){__p&&__p();if(h!==l||i!==m||j!==n){var a;(a=b("CSS")).conditionClass(g,"tinyViewport",h);a.conditionClass(g,"tinyWidth",i);a.conditionClass(g,"tinyHeight",j);a.conditionClass(g,"canHaveFixedElements",!h);o.inform("change",h);b("Arbiter").inform("tinyViewport/change",{tiny:h,tinyWidth:i,tinyHeight:j},"state");l=h;m=i;n=j}},"TinyViewport")});a();b("Arbiter").subscribe("quickling/response",a);b("Event").listen(window,"resize",a);b("FullScreen").subscribe("changed",a)},isTiny:function(){return h},isTinyWidth:function(){return i},isTinyHeight:function(){return j}};Object.assign(o,b("ArbiterMixin"));e.exports=o}),null);
__d("LayerDestroyOnHide",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a}var b=a.prototype;b.enable=function(){var a=this._layer.destroy.bind(this._layer);this._subscription=this._layer.subscribe("hide",function(){setTimeout(a,0)})};b.disable=function(){this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)};return a}();Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("LayerFadeOnHide",["invariant","CSSFade","Layer","SubscriptionsHandler","UserAgent_DEPRECATED","clearTimeout","emptyFunction","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a,this._subscriptionsHandler=new(b("SubscriptionsHandler"))()}var c=a.prototype;c.enable=function(){if(b("UserAgent_DEPRECATED").ie()<9)return;this._subscription=this._layer.subscribe("starthide",this._handleStartHide.bind(this))};c.disable=function(){this._subscription&&(this._subscription.unsubscribe(),this._subscription=null),this._subscriptionsHandler.release()};c._getDuration=function(){return 150};c._handleStartHide=function(){__p&&__p();var a=!0,c=b("Layer").subscribe("show",function(){c.unsubscribe(),a=!1}),d=b("setTimeoutAcrossTransitions")(function(){var b=this;c.unsubscribe();c=null;var d=function(){b._layer.finishHide()};a?this._animate(d):d()}.bind(this),0);this._subscriptionsHandler.addSubscriptions({remove:function(){b("clearTimeout")(d)}});return!1};c._animate=function(a){var c=this._layer.getRoot();c!=null||g(0,70);b("CSSFade").hide(c,{callback:function(){a()},duration:this._getDuration()})};a.forDuration=function(c){var d=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}return a}(a);d.prototype._getDuration=b("emptyFunction").thatReturns(c);return d};return a}();Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("ErrorContextualDialogXUITheme",["cx"],(function(a,b,c,d,e,f,g){a={wrapperClassName:"_572t",arrowDimensions:{offset:12,length:22}};e.exports=a}),null);
__d("PagesEventObserver",["Banzai"],(function(a,b,c,d,e,f){var g="pages_client_logging",h={VITAL_WAIT:b("Banzai").VITAL_WAIT,logData_DEPRECATED:function(a,c){c={delay:c||b("Banzai").VITAL_WAIT};b("Banzai").post(g,a,c)},notify:function(a,c,d,e,f){d=babelHelpers["extends"]({},d,{event_name:a,page_id:c,dedupe:e!==!1});a={delay:f||b("Banzai").VITAL_WAIT};b("Banzai").post(g,d,a)},registerLogOnClick:function(a,b,c){c===void 0&&(c=null),a.addEventListener("click",function(){c&&h.notify(c,b,null,null,null)})}};e.exports=h}),null);
__d("BlobFactory",["emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();var g;function h(){try{new a.Blob(),g=!0}catch(a){g=!1}}var i=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||a.MSBlobBuilder;a.Blob?c={getBlob:function(b,c){__p&&__p();b=b||[];c=c||{};g===void 0&&h();if(g)return new a.Blob(b,c);else{var d=new i();for(var e=0;e<b.length;e++)d.append(b[e]);return d.getBlob(c.type)}},isSupported:b("emptyFunction").thatReturnsTrue}:c={getBlob:function(){},isSupported:b("emptyFunction").thatReturnsFalse};e.exports=c}),null);
__d("VisualCompletionGating",["requireCond","cr:729414"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:729414")}),null);
__d("classWithMixins",[],(function(a,b,c,d,e,f){function a(a,b){var c=function(){a.apply(this,arguments)};c.prototype=Object.assign(Object.create(a.prototype),b.prototype);return c}e.exports=a}),null);
__d("coalesce",[],(function(a,b,c,d,e,f){function a(){for(var a=0;a<arguments.length;++a)if((a<0||arguments.length<=a?void 0:arguments[a])!=null)return a<0||arguments.length<=a?void 0:arguments[a];return null}e.exports=a}),null);
__d("ImageBlock.react",["cx","invariant","LeftRight.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();function i(a){a=a.children;a&&(a.length===2||a.length===3)||h(0,97);a[0]!==null||h(0,98);return a}function j(a){return"img _8o"+(a==="small"?" _8r":"")+(a==="medium"?" _8s":"")+(a==="large"?" _8t":"")}a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=i(this.props),c=a[0],d=a[1];a=a[2];var e=this.props,f=e.imageClassName,g=e.contentClassName,h=e.spacing;e=babelHelpers.objectWithoutPropertiesLoose(e,["imageClassName","contentClassName","spacing"]);var k=c.props,l=k.className,m=k.alt,n=k.tabIndex;k=k.title;l={className:b("joinClasses")(l,j(h),f)};c.type==="img"?m===void 0&&(l.alt=""):(c.type==="a"||c.type==="link")&&n===void 0&&k===void 0&&c.props["aria-label"]===void 0&&(l.tabIndex="-1",l["aria-hidden"]="true");c=b("React").cloneElement(c,l);f=!0;this.props.flexibleContent!=null&&(f=this.props.flexibleContent);m=b("joinClasses")(g,(f?"_42ef":"")+(h==="small"?" _8u":""));!a?n=b("React").jsx("div",{className:m,children:d}):n=b("React").jsxs(b("LeftRight.react"),{className:m,direction:b("LeftRight.react").DIRECTION.right,children:[d,a]});return b("React").jsxs(b("LeftRight.react"),babelHelpers["extends"]({},e,{direction:b("LeftRight.react").DIRECTION.left,children:[c,n]}))};return c}(b("React").Component);a.defaultProps={spacing:"small"};e.exports=a}),null);
__d("RecaptchaV2Constants",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({RESIZE_IFRAME:null,CAPTCHA_SOLVED:null,GET_ORIGIN:null});e.exports={RecaptchaV2IFrameMessageTypes:a}}),null);
__d("cancelAnimationFramePolyfill",[],(function(a,b,c,d,e,f){b=a.__fbNativeCancelAnimationFrame||a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.mozCancelAnimationFrame||a.oCancelAnimationFrame||a.msCancelAnimationFrame||a.clearTimeout;e.exports=b}),null);
__d("cancelAnimationFrame",["TimerStorage","TimeSlice","cancelAnimationFramePolyfill","requestAnimationFrameAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=b("TimerStorage").ANIMATION_FRAME;function a(a){__p&&__p();if(a!=null){var c=b("requestAnimationFrameAcrossTransitions").cancelVirtualRAF;if(c!=null)c(a);else{b("TimerStorage").unset(g,a);c=g+String(a);b("TimeSlice").cancelWithToken(c)}}b("cancelAnimationFramePolyfill")(a)}e.exports=a}),null);
__d("replaceNativeTimer",["scheduler","cancelAnimationFrame","clearInterval","clearTimeout","requestAnimationFrame","setInterval","setTimeout"],(function(a,b,c,d,e,f){__p&&__p();!b("scheduler");a.__fbNativeSetTimeout=a.setTimeout;a.__fbNativeClearTimeout=a.clearTimeout;a.__fbNativeSetInterval=a.setInterval;a.__fbNativeClearInterval=a.clearInterval;a.__fbNativeRequestAnimationFrame=a.requestAnimationFrame;a.__fbNativeCancelAnimationFrame=a.cancelAnimationFrame;b("setTimeout").nativeBackup=a.setTimeout;b("clearTimeout").nativeBackup=a.clearTimeout;b("setInterval").nativeBackup=a.setInterval;b("clearInterval").nativeBackup=a.clearInterval;b("requestAnimationFrame").nativeBackup=a.requestAnimationFrame;b("cancelAnimationFrame").nativeBackup=a.cancelAnimationFrame;a.setTimeout=b("setTimeout");a.clearTimeout=b("clearTimeout");a.setInterval=b("setInterval");a.clearInterval=b("clearInterval");a.requestAnimationFrame=b("requestAnimationFrame");a.cancelAnimationFrame=b("cancelAnimationFrame");function c(){}e.exports=c}),null);
__d("requestIdleCallback",["requireCond","cr:694370"],(function(a,b,c,d,e,f){e.exports=b("cr:694370")}),null);
__d("PresenceUtil",["CurrentUser","randomInt"],(function(a,b,c,d,e,f){var g=b("randomInt")(0,4294967295)+1;function a(){return g}function c(){return b("CurrentUser").isLoggedInNow()}e.exports={getSessionID:a,hasUserCookie:c}}),null);
__d("TokenizeUtil",["nullthrows"],(function(a,b,c,d,e,f){__p&&__p();var g=/[ ]+/g,h=/[^ ]+/g,i=new RegExp("[^ "+l()+"]+|"+a(),"g"),j=new RegExp(a(),"g"),k=1e3;function l(){return".,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%\"~=<>_:;\u30fb\u3001\u3002\u3008-\u3011\u3014-\u301f\uff1a-\uff1f\uff01-\uff0f\uff3b-\uff40\uff5b-\uff65\u2e2e\u061f\u066a-\u066c\u061b\u060c\u060d\ufd3e\ufd3f\u1801\u0964\u104a\u104b\u2010-\u2027\u2030-\u205e\xa1-\xb1\xb4-\xb8\xba\xbb\xbf"}function a(){return"["+l()+"]"}var m={},n={a:"\u0430 \xe0 \xe1 \xe2 \xe3 \xe4 \xe5 \u0101",b:"\u0431",c:"\u0446 \xe7 \u010d",d:"\u0434 \xf0 \u010f \u0111",e:"\u044d \u0435 \xe8 \xe9 \xea \xeb \u011b \u0113",f:"\u0444",g:"\u0433 \u011f \u0123",h:"\u0445 \u0127",i:"\u0438 \xec \xed \xee \xef \u0131 \u012b",j:"\u0439",k:"\u043a \u0138 \u0137",l:"\u043b \u013e \u013a \u0140 \u0142 \u013c",m:"\u043c",n:"\u043d \xf1 \u0148 \u0149 \u014b \u0146",o:"\u043e \xf8 \xf6 \xf5 \xf4 \xf3 \xf2",p:"\u043f",r:"\u0440 \u0159 \u0155",s:"\u0441 \u015f \u0161 \u017f",t:"\u0442 \u0165 \u0167 \xfe",u:"\u0443 \u044e \xfc \xfb \xfa \xf9 \u016f \u016b",v:"\u0432",y:"\u044b \xff \xfd",z:"\u0437 \u017e",ae:"\xe6",oe:"\u0153",ts:"\u0446",ch:"\u0447",ij:"\u0133",sh:"\u0448",ss:"\xdf",ya:"\u044f"};for(var o in n){var p=n[o].split(" ");for(var q=0;q<p.length;q++)m[p[q]]=o}function c(a){return a.replace(j," ")}function r(a){a=a.toLowerCase();var b="",c;for(var d=a.length;d--;)c=a.charAt(d),b=(m[c]||c)+b;return b.replace(g," ")}function s(a,b){b===void 0&&(b=h);var c=[],d=b.exec(a);while(d)d=d[0],c.push(d),d=b.exec(a);return c}function d(a,b){__p&&__p();b===void 0&&(b=h);var c={},d=0;return function(e,f){if(!Object.prototype.hasOwnProperty.call(c,e)){d>=k&&(c={},d=0);var g=r(e),h=a(g);c[e]={value:e,flatValue:g,tokens:s(h,b),isPrefixQuery:!!h&&h[h.length-1]!=" "};d++}f!=null&&f!==!1&&c[e].sortedTokens===void 0&&(c[e].sortedTokens=c[e].tokens.slice(),c[e].sortedTokens.sort(function(a,b){return b.length-a.length}));return c[e]}}var t=d(c),u=d(function(a){return a},i);function f(a,c,d){__p&&__p();var e=a=="query"||a=="query_punc",f=a=="aligned",g=a=="query_punc"?u:t;c=g(c,a=="prefix");var h=a=="prefix"?b("nullthrows")(c.sortedTokens):c.tokens,i=g(d).tokens,j={},k=c.isPrefixQuery&&(e||f)?h.length-1:null;g=function(b,c){for(var d=0;d<i.length;++d){var g=i[d];if(!j[d]&&(g==b||((e||f)&&c===k||a=="prefix")&&g.indexOf(b)===0))return j[d]=!0;if(f&&!j[d])return!1}return!1};return Boolean(h.length&&h.every(g))}p={flatten:r,parse:t,parseIncludingPunctuations:u,getPunctuation:a,makeParse:d,isExactMatch:f.bind(null,"exact"),isQueryMatch:f.bind(null,"query"),isQueryMatchIncludingPunctuations:f.bind(null,"query_punc"),isAlignedMatch:f.bind(null,"aligned"),isPrefixMatch:f.bind(null,"prefix"),tokenize:s};e.exports=p}),null);
__d("BanzaiLogger",["Banzai"],(function(a,b,c,d,e,f){function g(a){return{log:function(c,d){b("Banzai").post("logger:"+c,d,a)},create:g}}a=g();e.exports=a}),null);