/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function s(e){try{u(i.next(e))}catch(e){r(e)}}function a(e){try{u(i.throw(e))}catch(e){r(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,a)}u((i=i.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,i,o,r,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(o=i[2&r[0]?"return":r[0]?"throw":"next"])&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[0,o.value]),r[0]){case 0:case 1:o=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){s.label=r[1];break}if(6===r[0]&&s.label<o[1]){s.label=o[1],o=r;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(r);break}o[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(e){r=[6,e],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}};Ionic.loadBundle("qczmousr",["exports","./chunk-f06b75c7.js"],function(e,t){var n=window.Ionic.h,i=function(){function e(){this.isPane=!1,this._isOpen=!1,this.lastOnEnd=0,this.isAnimating=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeEnabled=!0,this.persistent=!1,this.maxEdgeStart=50}return e.prototype.typeChanged=function(e,t){var n=this.contentEl;n&&t&&(n.classList.remove("menu-content-"+t),n.classList.add("menu-content-"+e),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0},e.prototype.disabledChanged=function(e){this.updateState(),this.ionMenuChange.emit({disabled:e,open:this._isOpen})},e.prototype.sideChanged=function(){this.isEndSide=t.isEndSide(this.win,this.side)},e.prototype.swipeEnabledChanged=function(){this.updateState()},e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return null==this.type&&(this.type="ios"===this.mode?"reveal":"overlay"),this.isServer?(this.disabled=!0,[3,3]):[3,1];case 1:return e=this,[4,this.lazyMenuCtrl.componentOnReady()];case 2:e.menuCtrl=t.sent(),t.label=3;case 3:return[2]}})})},e.prototype.componentDidLoad=function(){var e=this;if(!this.isServer){var t=this.el.parentNode,n=this.contentId?document.getElementById(this.contentId):t&&t.querySelector&&t.querySelector("[main]");if(n&&n.tagName){this.contentEl=n,n.classList.add("menu-content"),this.typeChanged(this.type,null),this.sideChanged();var i=!this.disabled;!0!==i&&void 0!==i||(i=!this.menuCtrl.getMenus().some(function(t){return t.side===e.side&&!t.disabled})),this.menuCtrl._register(this),this.ionMenuChange.emit({disabled:!i,open:this._isOpen}),this.disabled=!i}else console.error('Menu: must have a "content" element to listen for drag events on.')}},e.prototype.componentDidUnload=function(){this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0},e.prototype.splitPaneChanged=function(e){this.isPane=e.target.isPane(this.el),this.updateState()},e.prototype.onBackdropClick=function(e){!e.target.closest(".menu-inner")&&this.lastOnEnd<e.timeStamp-100&&(e.preventDefault(),e.stopPropagation(),this.close())},e.prototype.isOpen=function(){return this._isOpen},e.prototype.open=function(e){return void 0===e&&(e=!0),this.setOpen(!0,e)},e.prototype.close=function(e){return void 0===e&&(e=!0),this.setOpen(!1,e)},e.prototype.toggle=function(e){return void 0===e&&(e=!0),this.setOpen(!this._isOpen,e)},e.prototype.setOpen=function(e,t){return void 0===t&&(t=!0),this.menuCtrl._setOpen(this,e,t)},e.prototype._setOpen=function(e,t){return void 0===t&&(t=!0),__awaiter(this,void 0,void 0,function(){return __generator(this,function(n){switch(n.label){case 0:return!this.isActive()||this.isAnimating||e===this._isOpen?[2,this._isOpen]:(this.beforeAnimation(),[4,this.loadAnimation()]);case 1:return n.sent(),[4,this.startAnimation(e,t)];case 2:return n.sent(),this.afterAnimation(e),[2,e]}})})},e.prototype.isActive=function(){return!this.disabled&&!this.isPane},e.prototype.loadAnimation=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return(e=this.menuInnerEl.offsetWidth)===this.width&&void 0!==this.animation?[2]:(this.width=e,this.animation&&(this.animation.destroy(),this.animation=void 0),t=this,[4,this.menuCtrl.createAnimation(this.type,this)]);case 1:return t.animation=n.sent(),[2]}})})},e.prototype.startAnimation=function(e,t){return __awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(i){switch(i.label){case 0:return n=this.animation.reverse(!e),t?[4,n.playAsync()]:[3,2];case 1:return i.sent(),[3,3];case 2:n.playSync(),i.label=3;case 3:return[2]}})})},e.prototype.canSwipe=function(){return this.swipeEnabled&&!this.isAnimating&&this.isActive()},e.prototype.canStart=function(e){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpen()&&(t=this.win,n=e.currentX,i=this.isEndSide,o=this.maxEdgeStart,i?n>=t.innerWidth-o:n<=o));var t,n,i,o},e.prototype.onWillStart=function(){return this.beforeAnimation(),this.loadAnimation()},e.prototype.onDragStart=function(){this.isAnimating&&this.animation?this.animation.reverse(this._isOpen).progressStart():t.assert(!1,"isAnimating has to be true")},e.prototype.onDragMove=function(e){if(this.isAnimating&&this.animation){var n=o(e.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(n)}else t.assert(!1,"isAnimating has to be true")},e.prototype.onDragEnd=function(e){var n=this;if(this.isAnimating&&this.animation){var i=this._isOpen,r=this.isEndSide,s=o(e.deltaX,i,r),a=this.width,u=s/a,l=e.velocityX,c=a/2,d=l>=0&&(l>.2||e.deltaX>c),h=l<=0&&(l<-.2||e.deltaX<-c),p=i?r?d:h:r?h:d,m=!i&&p;i&&!p&&(m=!0);var f=(p?1-u:u)*a,b=0;if(f>5){var g=f/Math.abs(l);b=Math.min(g,300)}this.lastOnEnd=e.timeStamp,this.animation.onFinish(function(){return n.afterAnimation(m)},{clearExistingCallacks:!0}).progressEnd(p,u,b)}else t.assert(!1,"isAnimating has to be true")},e.prototype.beforeAnimation=function(){t.assert(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(r),this.backdropEl&&this.backdropEl.classList.add(s),this.isAnimating=!0},e.prototype.afterAnimation=function(e){t.assert(this.isAnimating,"_before() should be called while animating"),this._isOpen=e,this.isAnimating=!1,this.enableListener(this,"body:click",e),e?(this.contentEl&&this.contentEl.classList.add(a),this.ionOpen.emit()):(this.el.classList.remove(r),this.contentEl&&this.contentEl.classList.remove(a),this.backdropEl&&this.backdropEl.classList.remove(s),this.ionClose.emit())},e.prototype.updateState=function(){!this.isActive()&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this),t.assert(!this.isAnimating,"can not be animating")},e.prototype.forceClosing=function(){t.assert(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.startAnimation(!1,!1),this.afterAnimation(!1)},e.prototype.hostData=function(){var e,t=this.isEndSide;return{role:"complementary",class:(e={},e["menu-type-"+this.type]=!0,e["menu-enabled"]=!this.disabled,e["menu-side-right"]=t,e["menu-side-left"]=!t,e)}},e.prototype.render=function(){var e=this;return[n("div",{class:"menu-inner",ref:function(t){return e.menuInnerEl=t}},n("slot",null)),n("ion-backdrop",{ref:function(t){return e.backdropEl=t},class:"menu-backdrop",tappable:!1,stopPropagation:!1}),n("ion-gesture",{canStart:this.canStart.bind(this),onWillStart:this.onWillStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),disabled:!this.isActive()||!this.swipeEnabled,gestureName:"menu-swipe",gesturePriority:10,direction:"x",threshold:10,attachTo:"window",disableScroll:!0})]},Object.defineProperty(e,"is",{get:function(){return"ion-menu"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"menu"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{close:{method:!0},config:{context:"config"},contentId:{type:String,attr:"content-id"},disabled:{type:Boolean,attr:"disabled",mutable:!0,watchCallbacks:["disabledChanged"]},el:{elementRef:!0},enableListener:{context:"enableListener"},isActive:{method:!0},isEndSide:{state:!0},isOpen:{method:!0},isServer:{context:"isServer"},lazyMenuCtrl:{connect:"ion-menu-controller"},maxEdgeStart:{type:Number,attr:"max-edge-start"},menuId:{type:String,attr:"menu-id"},open:{method:!0},persistent:{type:Boolean,attr:"persistent"},setOpen:{method:!0},side:{type:String,attr:"side",watchCallbacks:["sideChanged"]},swipeEnabled:{type:Boolean,attr:"swipe-enabled",watchCallbacks:["swipeEnabledChanged"]},toggle:{method:!0},type:{type:String,attr:"type",mutable:!0,watchCallbacks:["typeChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionOpen",method:"ionOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionClose",method:"ionClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionMenuChange",method:"ionMenuChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"body:ionSplitPaneVisible",method:"splitPaneChanged"},{name:"body:click",method:"onBackdropClick",capture:!0,disabled:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-menu{left:0;right:0;top:0;bottom:0;position:absolute;display:none;contain:strict}ion-menu.show-menu{display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:304px;height:100%;contain:strict}.menu-side-left>.menu-inner{right:auto;left:0}.menu-side-right>.menu-inner{right:0;left:auto}ion-menu ion-backdrop{z-index:-1;display:none;opacity:.01}.menu-content{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation}.menu-content-open .ion-pane,.menu-content-open .toolbar,.menu-content-open ion-content,.menu-content-open ion-pane{pointer-events:none}\@media (max-width:340px){.menu-inner{width:264px}}ion-menu.menu-type-reveal{z-index:0}ion-menu.menu-type-reveal.show-menu .menu-inner{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}ion-menu.menu-type-overlay{z-index:80}ion-menu.menu-type-overlay .show-backdrop{display:block;cursor:pointer}.menu-md .menu-inner{background:var(--ion-background-md-color,var(--ion-background-color,#fff))}.menu-md.menu-type-overlay .menu-inner{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}.app-md .menu-content-reveal{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}.app-md .menu-content-push{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function o(e,t,n){return Math.max(0,t!==n?-e:e)}var r="show-menu",s="show-backdrop",a="menu-content-open",u=function(){function e(){this.autoHide=!0}return e.prototype.render=function(){var e=this.config.get("menuIcon","menu");return n("ion-menu-toggle",{menu:this.menu,autoHide:this.autoHide},n("ion-button",null,n("slot",null,n("ion-icon",{slot:"icon-only",name:e}))))},Object.defineProperty(e,"is",{get:function(){return"ion-menu-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"menu-button"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{autoHide:{type:Boolean,attr:"auto-hide"},config:{context:"config"},menu:{type:String,attr:"menu"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".menu-button button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-align:center;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;position:relative;z-index:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:0;outline:0;line-height:1;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;cursor:pointer;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;-webkit-font-kerning:none;font-kerning:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.menu-button-md .menu-button-inner{margin:2px 6px 0 0;padding:0 5px;min-width:44px;height:32px;border:0;font-size:14px;font-weight:500;text-transform:uppercase;color:var(--ion-toolbar-md-text-color,var(--ion-toolbar-text-color,#424242));background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.menu-button-md .menu-button-inner.activated{opacity:.4}.menu-button-md ion-icon{padding-right:.3em;margin:0;padding:0 6px;text-align:left;text-align:start;font-size:24px;font-weight:400;line-height:.67;pointer-events:none}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function l(e){return Promise.resolve((new e).easing("cubic-bezier(0.0, 0.0, 0.2, 1)").easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)").duration(300))}var c=8;function d(e,t,n){var i,o,r=n.width+c;n.isEndSide?(i=r+"px",o="0px"):(i=-r+"px",o="0px");var s=(new e).addElement(n.menuInnerEl).fromTo("translateX",i,o),a=(new e).addElement(n.backdropEl).fromTo("opacity",.01,.3);return l(e).then(function(e){return e.add(s).add(a)})}function h(e,t,n){var i,o,r=n.width;n.isEndSide?(i=-r+"px",o=r+"px"):(i=r+"px",o=-r+"px");var s=(new e).addElement(n.menuInnerEl).fromTo("translateX",o,"0px"),a=(new e).addElement(n.contentEl).fromTo("translateX","0px",i),u=(new e).addElement(n.backdropEl).fromTo("opacity",.01,.2);return l(e).then(function(e){return e.add(s).add(u).add(a)})}function p(e,t,n){var i=n.width*(n.isEndSide?-1:1)+"px",o=(new e).addElement(n.contentEl).fromTo("translateX","0px",i);return l(e).then(function(e){return e.add(o)})}var m=function(){function e(){this.menus=[],this.menuAnimations=new Map,this.registerAnimation("reveal",p),this.registerAnimation("push",h),this.registerAnimation("overlay",d)}return e.prototype.open=function(e){var t=this.get(e);return t?t.open():Promise.resolve(!1)},e.prototype.close=function(e){var t=e?this.get(e):this.getOpen();return t?t.close():Promise.resolve(!1)},e.prototype.toggle=function(e){var t=this.get(e);return t?t.toggle():Promise.resolve(!1)},e.prototype.enable=function(e,t){var n=this.get(t);return n&&(n.disabled=!e),n},e.prototype.swipeEnable=function(e,t){var n=this.get(t);return n&&(n.swipeEnabled=e),n},e.prototype.isOpen=function(e){if(e){var t=this.get(e);return t&&t.isOpen()||!1}return!!this.getOpen()},e.prototype.isEnabled=function(e){var t=this.get(e);return!!t&&!t.disabled},e.prototype.get=function(e){return"left"===e?(console.error('menu.side=left is deprecated, use "start" instead'),null):"right"===e?(console.error('menu.side=right is deprecated, use "end" instead'),null):"start"===e||"end"===e?this.find(function(t){return t.side===e&&!t.disabled})||this.find(function(t){return t.side===e})||null:e?this.find(function(t){return t.menuId===e})||null:this.find(function(e){return!e.disabled})||(this.menus.length>0?this.menus[0].el:null)},e.prototype.getOpen=function(){return this.find(function(e){return e.isOpen()})},e.prototype.getMenus=function(){return this.menus.map(function(e){return e.el})},e.prototype.isAnimating=function(){return this.menus.some(function(e){return e.isAnimating})},e.prototype._register=function(e){this.menus.indexOf(e)<0&&this.menus.push(e)},e.prototype._unregister=function(e){var t=this.menus.indexOf(e);t>-1&&this.menus.splice(t,1)},e.prototype._setActiveMenu=function(e){var t=e.side;this.menus.filter(function(n){return n.side===t&&n!==e}).forEach(function(e){return e.disabled=!0})},e.prototype._setOpen=function(e,t,n){if(this.isAnimating())return Promise.resolve(!1);if(t){var i=this.getOpen();i&&e.el!==i&&i.setOpen(!1,!1)}return e._setOpen(t,n)},e.prototype.createAnimation=function(e,t){var n=this.menuAnimations.get(e);return n?this.animationCtrl.create(n,null,t):Promise.reject("animation not registered")},e.prototype.registerAnimation=function(e,t){this.menuAnimations.set(e,t)},e.prototype.find=function(e){var t=this.menus.find(e);return t?t.el:null},Object.defineProperty(e,"is",{get:function(){return"ion-menu-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{_register:{method:!0},_setActiveMenu:{method:!0},_setOpen:{method:!0},_unregister:{method:!0},animationCtrl:{connect:"ion-animation-controller"},close:{method:!0},createAnimation:{method:!0},enable:{method:!0},get:{method:!0},getMenus:{method:!0},getOpen:{method:!0},isAnimating:{method:!0},isEnabled:{method:!0},isOpen:{method:!0},open:{method:!0},registerAnimation:{method:!0},swipeEnable:{method:!0},toggle:{method:!0}}},enumerable:!0,configurable:!0}),e}(),f=function(){function e(){this.visible=!1,this.autoHide=!0}return e.prototype.componentDidLoad=function(){this.updateVisibility()},e.prototype.onClick=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return[4,b(this.doc)];case 1:return(e=n.sent())&&(t=e.get(this.menu))&&t.isActive()?[2,e.toggle(this.menu)]:[2,!1]}})})},e.prototype.updateVisibility=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return[4,b(this.doc)];case 1:return(e=n.sent())&&(t=e.get(this.menu))&&t.isActive()?(this.visible=!0,[2]):(this.visible=!1,[2])}})})},e.prototype.hostData=function(){return{class:{"menu-toggle-hidden":this.autoHide&&!this.visible}}},Object.defineProperty(e,"is",{get:function(){return"ion-menu-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{autoHide:{type:Boolean,attr:"auto-hide"},doc:{context:"document"},menu:{type:String,attr:"menu"},visible:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"onClick"},{name:"body:ionMenuChange",method:"updateVisibility"},{name:"body:ionSplitPaneVisible",method:"updateVisibility"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-menu-toggle.menu-toggle-hidden{display:none}"},enumerable:!0,configurable:!0}),e}();function b(e){var t=e.querySelector("ion-menu-controller");return t?t.componentOnReady():Promise.resolve(void 0)}e.IonMenu=i,e.IonMenuButton=u,e.IonMenuController=m,e.IonMenuToggle=f,Object.defineProperty(e,"__esModule",{value:!0})});