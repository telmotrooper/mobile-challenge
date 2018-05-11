/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("1uhliv42",["exports","./chunk-d492bf7f.js","./chunk-4d7345d3.js"],function(e,t,n){var r=window.Ionic.h;function a(e,t){var n=new e,r=new e;r.addElement(t.querySelector("ion-backdrop"));var a=new e;a.addElement(t.querySelector(".alert-wrapper")),r.fromTo("opacity",.01,.3),a.fromTo("opacity",.01,1).fromTo("scale",1.1,1);var i=n.addElement(t).easing("ease-in-out").duration(200).add(r).add(a);return Promise.resolve(i)}function i(e,t){var n=new e,r=new e;r.addElement(t.querySelector("ion-backdrop"));var a=new e;a.addElement(t.querySelector(".alert-wrapper")),r.fromTo("opacity",.3,0),a.fromTo("opacity",.99,0).fromTo("scale",1,.9);var i=n.addElement(t).easing("ease-in-out").duration(200).add(r).add(a);return Promise.resolve(i)}function o(e,t){var n=new e,r=new e;r.addElement(t.querySelector("ion-backdrop"));var a=new e;return a.addElement(t.querySelector(".alert-wrapper")),r.fromTo("opacity",.01,.5),a.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(n.addElement(t).easing("ease-in-out").duration(200).add(r).add(a))}function l(e,t){var n=new e,r=new e;r.addElement(t.querySelector("ion-backdrop"));var a=new e;return a.addElement(t.querySelector(".alert-wrapper")),r.fromTo("opacity",.5,0),a.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(n.addElement(t).easing("ease-in-out").duration(200).add(r).add(a))}var s=function(){function e(){this.processedInputs=[],this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.inputs=[],this.enableBackdropDismiss=!0,this.translucent=!1,this.willAnimate=!0}return e.prototype.inputsChanged=function(){var e=this,t=this.inputs,n=new Set(t.map(function(e){return e.type}));(n.has("checkbox")||n.has("radio"))&&console.warn("Alert cannot mix input types: "+Array.from(n.values()).join("/")+". Please see alert docs for more info."),this.inputType=n.values().next().value,this.processedInputs=t.map(function(t,n){return{type:t.type||"text",name:t.name?t.name:n+"",placeholder:t.placeholder?t.placeholder:"",value:t.value?t.value:"",label:t.label,checked:!!t.checked,disabled:!!t.disabled,id:t.id?t.id:"alert-input-"+e.overlayId+"-"+n,handler:t.handler?t.handler:null,min:t.min?t.min:null,max:t.max?t.max:null}})},e.prototype.componentWillLoad=function(){this.inputsChanged()},e.prototype.componentDidLoad=function(){this.ionAlertDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionAlertDidUnload.emit()},e.prototype.onBackdropTap=function(){this.dismiss(null,t.BACKDROP)},e.prototype.dispatchCancelHandler=function(e){var n=e.detail.role;if(t.isCancel(n)){var r=this.buttons.find(function(e){return"cancel"===e.role});this.callButtonHandler(r)}},e.prototype.present=function(){return t.present(this,"alertEnter",a,o)},e.prototype.dismiss=function(e,n){return t.dismiss(this,e,n,"alertLeave",i,l)},e.prototype.onDidDismiss=function(e){return t.eventMethod(this.el,"ionAlertDidDismiss",e)},e.prototype.onWillDismiss=function(e){return t.eventMethod(this.el,"ionAlertWillDismiss",e)},e.prototype.rbClick=function(e){for(var t=0,n=this.processedInputs;t<n.length;t++){var r=n[t];r.checked=r===e}this.activeId=e.id,e.handler&&e.handler(e),this.el.forceUpdate()},e.prototype.cbClick=function(e){e.checked=!e.checked,e.handler&&e.handler(e),this.el.forceUpdate()},e.prototype.buttonClick=function(e){var n=e.role;t.isCancel(n)?this.dismiss(this.getValues(),n):this.callButtonHandler(e)&&this.dismiss(this.getValues(),e.role)},e.prototype.callButtonHandler=function(e){return!e||!e.handler||!1!==e.handler(this.getValues())},e.prototype.getValues=function(){if("radio"===this.inputType){var e=this.processedInputs.find(function(e){return!0===e.checked});return e&&e.value,e?e.value:void 0}if("checkbox"===this.inputType)return this.processedInputs.filter(function(e){return e.checked}).map(function(e){return e.value}),this.processedInputs.filter(function(e){return e.checked}).map(function(e){return e.value});if(0!==this.processedInputs.length){var t={};return this.processedInputs.forEach(function(e){t[e.name]=e.value||""}),t}},e.prototype.renderAlertInputs=function(e){switch(this.inputType){case"checkbox":return this.renderCheckbox(e);case"radio":return this.renderRadio(e);default:return this.renderInput(e)}},e.prototype.renderCheckbox=function(e){var t=this,n=this.processedInputs;return 0===n.length?null:r("div",{class:"alert-checkbox-group","aria-labelledby":e},n.map(function(e){return r("button",{onClick:function(){return t.cbClick(e)},"aria-checked":e.checked,id:e.id,disabled:e.disabled,tabIndex:0,role:"checkbox",class:"alert-tappable alert-checkbox alert-checkbox-button"},r("div",{class:"alert-button-inner"},r("div",{class:"alert-checkbox-icon"},r("div",{class:"alert-checkbox-inner"})),r("div",{class:"alert-checkbox-label"},e.label)),"md"===t.mode&&r("ion-ripple-effect",{tapClick:!0}))}))},e.prototype.renderRadio=function(e){var t=this,n=this.processedInputs;return 0===n.length?null:r("div",{class:"alert-radio-group",role:"radiogroup","aria-labelledby":e,"aria-activedescendant":this.activeId},n.map(function(e){return r("button",{onClick:function(){return t.rbClick(e)},"aria-checked":e.checked,disabled:e.disabled,id:e.id,tabIndex:0,class:"alert-radio-button alert-tappable alert-radio",role:"radio"},r("div",{class:"alert-button-inner"},r("div",{class:"alert-radio-icon"},r("div",{class:"alert-radio-inner"})),r("div",{class:"alert-radio-label"},e.label)),"md"===t.mode&&r("ion-ripple-effect",{tapClick:!0}))}))},e.prototype.renderInput=function(e){var t=this.processedInputs;return 0===t.length?null:r("div",{class:"alert-input-group","aria-labelledby":e},t.map(function(e){return r("div",{class:"alert-input-wrapper"},r("input",{placeholder:e.placeholder,value:e.value,type:e.type,min:e.min,max:e.max,onInput:function(t){return e.value=t.target.value},id:e.id,disabled:e.disabled,tabIndex:0,class:"alert-input"}))}))},e.prototype.hostData=function(){var e=this.translucent?n.createThemedClasses(this.mode,this.color,"alert-translucent"):{};return{role:"alertdialog",style:{zIndex:2e4+this.overlayId},class:Object.assign({},e,n.getClassMap(this.cssClass))}},e.prototype.render=function(){var e=this,t="alert-"+this.overlayId+"-hdr",a="alert-"+this.overlayId+"-sub-hdr",i="alert-"+this.overlayId+"-msg",o=void 0;this.header?o=t:this.subHeader&&(o=a);var l=this.buttons.map(function(e){return"string"==typeof e?{text:e}:e}).filter(function(e){return null!==e}),s={"alert-button-group":!0,"alert-button-group-vertical":l.length>2};return[r("ion-backdrop",{tappable:this.enableBackdropDismiss}),r("div",{class:"alert-wrapper"},r("div",{class:"alert-head"},this.header&&r("h2",{id:t,class:"alert-title"},this.header),this.subHeader&&r("h2",{id:a,class:"alert-sub-title"},this.subHeader)),r("div",{id:i,class:"alert-message",innerHTML:this.message}),this.renderAlertInputs(o),r("div",{class:s},l.map(function(t){return r("button",{class:function(e){return Object.assign({"alert-button":!0},n.getClassMap(e.cssClass))}(t),tabIndex:0,onClick:function(){return e.buttonClick(t)}},r("span",{class:"alert-button-inner"},t.text))})))]},Object.defineProperty(e,"is",{get:function(){return"ion-alert"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"alert"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animationCtrl:{connect:"ion-animation-controller"},buttons:{type:"Any",attr:"buttons"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},el:{elementRef:!0},enableBackdropDismiss:{type:Boolean,attr:"enable-backdrop-dismiss"},enterAnimation:{type:"Any",attr:"enter-animation"},header:{type:String,attr:"header"},inputs:{type:"Any",attr:"inputs",mutable:!0,watchCallbacks:["inputsChanged"]},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayId:{type:Number,attr:"overlay-id"},present:{method:!0},subHeader:{type:String,attr:"sub-header"},translucent:{type:Boolean,attr:"translucent"},willAnimate:{type:Boolean,attr:"will-animate"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionAlertDidLoad",method:"ionAlertDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidUnload",method:"ionAlertDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionAlertWillDismiss",method:"dispatchCancelHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-alert{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;position:fixed;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-ms-touch-action:none;touch-action:none;contain:strict}ion-alert.alert-top{padding-top:50px;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.alert-wrapper{z-index:10;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-width:250px;max-height:90%;opacity:0;contain:content}.alert-title{margin:0;padding:0}.alert-sub-title{margin:5px 0 0;padding:0;font-weight:400}.alert-message{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:scroll;overscroll-behavior-y:contain}.alert-input{padding:10px 0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;border:0;font:inherit;background:inherit}.alert-button-group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button{margin:0;z-index:0;display:block;border:0;font-size:14px;line-height:20px}.alert-button-inner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-tappable{text-align:left;text-align:start;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;margin:0;padding:0;width:100%;border:0;font-size:inherit;line-height:initial;background:0 0}.alert-button:active,.alert-button:focus,.alert-checkbox:active,.alert-checkbox:focus,.alert-input:active,.alert-input:focus,.alert-radio:active,.alert-radio:focus{outline:0}.alert-checkbox-icon,.alert-checkbox-inner,.alert-radio-icon{-webkit-box-sizing:border-box;box-sizing:border-box}.alert-md{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.alert-md .alert-wrapper{border-radius:2px;max-width:280px;background-color:var(--ion-overlay-md-background-color,var(--ion-overlay-background-color,#fafafa));-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}.alert-md .alert-head{text-align:left;text-align:start;padding:20px 23px 15px}.alert-md .alert-title{font-size:20px;font-weight:500;color:var(--ion-text-md-color,var(--ion-text-color,#000))}.alert-md .alert-sub-title{font-size:16px;color:var(--ion-text-md-color,var(--ion-text-color,#000))}.alert-md .alert-input-group,.alert-md .alert-message{padding:0 24px 24px;color:var(--ion-text-md-color-step-450,var(--ion-text-color-step-450,#737373))}.alert-md .alert-message{max-height:240px;font-size:15px}.alert-md .alert-message:empty{padding:0}.alert-md .alert-input{margin:5px 0;border-bottom:1px solid var(--ion-background-md-color-step-150,var(--ion-background-color-step-150,#d9d9d9));color:var(--ion-text-md-color,var(--ion-text-color,#000))}.alert-md .alert-input::-moz-placeholder{color:var(--ion-placeholder-text-md-color,var(--ion-placeholder-text-color,#999))}.alert-md .alert-input:-ms-input-placeholder{color:var(--ion-placeholder-text-md-color,var(--ion-placeholder-text-color,#999))}.alert-md .alert-input::-webkit-input-placeholder{text-indent:0;color:var(--ion-placeholder-text-md-color,var(--ion-placeholder-text-color,#999))}.alert-md .alert-input:focus{margin-bottom:4px;border-bottom:2px solid var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.alert-md .alert-checkbox-group,.alert-md .alert-radio-group{position:relative;overflow:auto;max-height:240px;border-top:1px solid var(--ion-background-md-color-step-150,var(--ion-background-color-step-150,#d9d9d9));border-bottom:1px solid var(--ion-background-md-color-step-150,var(--ion-background-color-step-150,#d9d9d9))}.alert-md .alert-tappable{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;height:44px;contain:strict}.alert-md .alert-radio-label{padding:13px 26px 13px 52px;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:16px;text-overflow:ellipsis;white-space:nowrap;color:var(--ion-text-md-color-step-150,var(--ion-text-color-step-150,#262626))}.alert-md .alert-radio-icon{left:26px;top:0;border-radius:50%;position:relative;display:block;width:20px;height:20px;border-width:2px;border-style:solid;border-color:var(--ion-text-md-color-step-450,var(--ion-text-color-step-450,#737373))}.alert-md .alert-radio-inner{left:3px;top:3px;border-radius:50%;position:absolute;width:10px;height:10px;background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:-webkit-transform 280ms cubic-bezier(.4,0,.2,1);transition:-webkit-transform 280ms cubic-bezier(.4,0,.2,1);transition:transform 280ms cubic-bezier(.4,0,.2,1);transition:transform 280ms cubic-bezier(.4,0,.2,1),-webkit-transform 280ms cubic-bezier(.4,0,.2,1)}.alert-md [aria-checked=true] .alert-radio-label{color:var(--ion-text-md-color-step-150,var(--ion-text-color-step-150,#262626))}.alert-md [aria-checked=true] .alert-radio-icon{border-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.alert-md [aria-checked=true] .alert-radio-inner{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}.alert-md .alert-checkbox-label{padding:13px 26px 13px 53px;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:16px;text-overflow:ellipsis;white-space:nowrap;color:var(--ion-text-md-color-step-150,var(--ion-text-color-step-150,#262626))}.alert-md .alert-checkbox-icon{left:26px;top:0;border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-text-md-color-step-450,var(--ion-text-color-step-450,#737373));contain:strict}.alert-md [aria-checked=true] .alert-checkbox-icon{border-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.alert-md [aria-checked=true] .alert-checkbox-inner{left:3px;top:0;position:absolute;width:6px;height:10px;border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff));-webkit-transform:rotate(45deg);transform:rotate(45deg)}.alert-md .alert-button-group{padding:5px 12px 7px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-flex-wrap:wrap-reverse;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.alert-md .alert-button{border-radius:2px;margin:0 8px 0 0;padding:10px;text-align:right;text-align:end;position:relative;overflow:hidden;font-weight:500;text-transform:uppercase;color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));background-color:transparent}.alert-md .alert-button.activated{background-color:var(--ion-background-md-color-step-400,var(--ion-background-color-step-400,#999))}.alert-md .alert-button-inner{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),d=function(){function e(){this.alerts=new Map}return e.prototype.alertWillPresent=function(e){this.alerts.set(e.target.overlayId,e.target)},e.prototype.alertWillDismiss=function(e){this.alerts.delete(e.target.overlayId)},e.prototype.escapeKeyUp=function(){t.removeLastOverlay(this.alerts)},e.prototype.create=function(e){return t.createOverlay(this.doc.createElement("ion-alert"),e)},e.prototype.dismiss=function(e,n,r){return void 0===r&&(r=-1),t.dismissOverlay(e,n,this.alerts,r)},e.prototype.getTop=function(){return t.getTopOverlay(this.alerts)},Object.defineProperty(e,"is",{get:function(){return"ion-alert-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"body:ionAlertWillPresent",method:"alertWillPresent"},{name:"body:ionAlertWillDismiss",method:"alertWillDismiss"},{name:"body:ionAlertDidUnload",method:"alertWillDismiss"},{name:"body:keyup.escape",method:"escapeKeyUp"}]},enumerable:!0,configurable:!0}),e}();e.IonAlert=s,e.IonAlertController=d,Object.defineProperty(e,"__esModule",{value:!0})});