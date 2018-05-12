/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{a as t,b as s,c as a,d as r,e as i,f as l,g as n,h as o,i as d}from"./chunk-3b0e1c7b.js";import{a as c,b as p}from"./chunk-f025f93c.js";function h(e,t){const s=new e,a=new e;a.addElement(t.querySelector("ion-backdrop"));const r=new e;r.addElement(t.querySelector(".alert-wrapper")),a.fromTo("opacity",.01,.3),r.fromTo("opacity",.01,1).fromTo("scale",1.1,1);const i=s.addElement(t).easing("ease-in-out").duration(200).add(a).add(r);return Promise.resolve(i)}function u(e,t){const s=new e,a=new e;a.addElement(t.querySelector("ion-backdrop"));const r=new e;r.addElement(t.querySelector(".alert-wrapper")),a.fromTo("opacity",.3,0),r.fromTo("opacity",.99,0).fromTo("scale",1,.9);const i=s.addElement(t).easing("ease-in-out").duration(200).add(a).add(r);return Promise.resolve(i)}function m(e,t){const s=new e,a=new e;a.addElement(t.querySelector("ion-backdrop"));const r=new e;return r.addElement(t.querySelector(".alert-wrapper")),a.fromTo("opacity",.01,.5),r.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(s.addElement(t).easing("ease-in-out").duration(200).add(a).add(r))}function b(e,t){const s=new e,a=new e;a.addElement(t.querySelector("ion-backdrop"));const r=new e;return r.addElement(t.querySelector(".alert-wrapper")),a.fromTo("opacity",.5,0),r.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(s.addElement(t).easing("ease-in-out").duration(200).add(a).add(r))}class y{constructor(){this.processedInputs=[],this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.inputs=[],this.enableBackdropDismiss=!0,this.translucent=!1,this.willAnimate=!0}inputsChanged(){const e=this.inputs,t=new Set(e.map(e=>e.type));(t.has("checkbox")||t.has("radio"))&&console.warn(`Alert cannot mix input types: ${Array.from(t.values()).join("/")}. Please see alert docs for more info.`),this.inputType=t.values().next().value,this.processedInputs=e.map((e,t)=>({type:e.type||"text",name:e.name?e.name:t+"",placeholder:e.placeholder?e.placeholder:"",value:e.value?e.value:"",label:e.label,checked:!!e.checked,disabled:!!e.disabled,id:e.id?e.id:`alert-input-${this.overlayId}-${t}`,handler:e.handler?e.handler:null,min:e.min?e.min:null,max:e.max?e.max:null}))}componentWillLoad(){this.inputsChanged()}componentDidLoad(){this.ionAlertDidLoad.emit()}componentDidUnload(){this.ionAlertDidUnload.emit()}onBackdropTap(){this.dismiss(null,t)}dispatchCancelHandler(e){const t=e.detail.role;if(r(t)){const e=this.buttons.find(e=>"cancel"===e.role);this.callButtonHandler(e)}}present(){return i(this,"alertEnter",h,m)}dismiss(e,t){return s(this,e,t,"alertLeave",u,b)}onDidDismiss(e){return a(this.el,"ionAlertDidDismiss",e)}onWillDismiss(e){return a(this.el,"ionAlertWillDismiss",e)}rbClick(e){for(const t of this.processedInputs)t.checked=t===e;this.activeId=e.id,e.handler&&e.handler(e),this.el.forceUpdate()}cbClick(e){e.checked=!e.checked,e.handler&&e.handler(e),this.el.forceUpdate()}buttonClick(e){const t=e.role;r(t)?this.dismiss(this.getValues(),t):this.callButtonHandler(e)&&this.dismiss(this.getValues(),e.role)}callButtonHandler(e){return!e||!e.handler||!1!==e.handler(this.getValues())}getValues(){if("radio"===this.inputType){const e=this.processedInputs.find(e=>!0===e.checked);return e&&e.value,e?e.value:void 0}if("checkbox"===this.inputType)return this.processedInputs.filter(e=>e.checked).map(e=>e.value),this.processedInputs.filter(e=>e.checked).map(e=>e.value);if(0===this.processedInputs.length)return;const e={};return this.processedInputs.forEach(t=>{e[t.name]=t.value||""}),e}renderAlertInputs(e){switch(this.inputType){case"checkbox":return this.renderCheckbox(e);case"radio":return this.renderRadio(e);default:return this.renderInput(e)}}renderCheckbox(t){const s=this.processedInputs;return 0===s.length?null:e("div",{class:"alert-checkbox-group","aria-labelledby":t},s.map(t=>e("button",{onClick:()=>this.cbClick(t),"aria-checked":t.checked,id:t.id,disabled:t.disabled,tabIndex:0,role:"checkbox",class:"alert-tappable alert-checkbox alert-checkbox-button"},e("div",{class:"alert-button-inner"},e("div",{class:"alert-checkbox-icon"},e("div",{class:"alert-checkbox-inner"})),e("div",{class:"alert-checkbox-label"},t.label)),"md"===this.mode&&e("ion-ripple-effect",{tapClick:!0}))))}renderRadio(t){const s=this.processedInputs;return 0===s.length?null:e("div",{class:"alert-radio-group",role:"radiogroup","aria-labelledby":t,"aria-activedescendant":this.activeId},s.map(t=>e("button",{onClick:()=>this.rbClick(t),"aria-checked":t.checked,disabled:t.disabled,id:t.id,tabIndex:0,class:"alert-radio-button alert-tappable alert-radio",role:"radio"},e("div",{class:"alert-button-inner"},e("div",{class:"alert-radio-icon"},e("div",{class:"alert-radio-inner"})),e("div",{class:"alert-radio-label"},t.label)),"md"===this.mode&&e("ion-ripple-effect",{tapClick:!0}))))}renderInput(t){const s=this.processedInputs;return 0===s.length?null:e("div",{class:"alert-input-group","aria-labelledby":t},s.map(t=>e("div",{class:"alert-input-wrapper"},e("input",{placeholder:t.placeholder,value:t.value,type:t.type,min:t.min,max:t.max,onInput:e=>t.value=e.target.value,id:t.id,disabled:t.disabled,tabIndex:0,class:"alert-input"}))))}hostData(){const e=this.translucent?c(this.mode,this.color,"alert-translucent"):{};return{role:"alertdialog",style:{zIndex:2e4+this.overlayId},class:Object.assign({},e,p(this.cssClass))}}render(){const t=`alert-${this.overlayId}-hdr`,s=`alert-${this.overlayId}-sub-hdr`,a=`alert-${this.overlayId}-msg`;let r=void 0;this.header?r=t:this.subHeader&&(r=s);const i=this.buttons.map(e=>"string"==typeof e?{text:e}:e).filter(e=>null!==e),l={"alert-button-group":!0,"alert-button-group-vertical":i.length>2};return[e("ion-backdrop",{tappable:this.enableBackdropDismiss}),e("div",{class:"alert-wrapper"},e("div",{class:"alert-head"},this.header&&e("h2",{id:t,class:"alert-title"},this.header),this.subHeader&&e("h2",{id:s,class:"alert-sub-title"},this.subHeader)),e("div",{id:a,class:"alert-message",innerHTML:this.message}),this.renderAlertInputs(r),e("div",{class:l},i.map(t=>e("button",{class:(t=t,Object.assign({"alert-button":!0},p(t.cssClass))),tabIndex:0,onClick:()=>this.buttonClick(t)},e("span",{class:"alert-button-inner"},t.text)))))]}static get is(){return"ion-alert"}static get host(){return{theme:"alert"}}static get properties(){return{animationCtrl:{connect:"ion-animation-controller"},buttons:{type:"Any",attr:"buttons"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},el:{elementRef:!0},enableBackdropDismiss:{type:Boolean,attr:"enable-backdrop-dismiss"},enterAnimation:{type:"Any",attr:"enter-animation"},header:{type:String,attr:"header"},inputs:{type:"Any",attr:"inputs",mutable:!0,watchCallbacks:["inputsChanged"]},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayId:{type:Number,attr:"overlay-id"},present:{method:!0},subHeader:{type:String,attr:"sub-header"},translucent:{type:Boolean,attr:"translucent"},willAnimate:{type:Boolean,attr:"will-animate"}}}static get events(){return[{name:"ionAlertDidLoad",method:"ionAlertDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidUnload",method:"ionAlertDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionAlertWillDismiss",method:"dispatchCancelHandler"}]}static get style(){return"ion-alert{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;position:fixed;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-ms-touch-action:none;touch-action:none;contain:strict}ion-alert.alert-top{padding-top:50px;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.alert-wrapper{z-index:10;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-width:250px;max-height:90%;opacity:0;contain:content}.alert-title{margin:0;padding:0}.alert-sub-title{margin:5px 0 0;padding:0;font-weight:400}.alert-message{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:scroll;overscroll-behavior-y:contain}.alert-input{padding:10px 0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;border:0;font:inherit;background:inherit}.alert-button-group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button{margin:0;z-index:0;display:block;border:0;font-size:14px;line-height:20px}.alert-button-inner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-tappable{text-align:left;text-align:start;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;margin:0;padding:0;width:100%;border:0;font-size:inherit;line-height:initial;background:0 0}.alert-button:active,.alert-button:focus,.alert-checkbox:active,.alert-checkbox:focus,.alert-input:active,.alert-input:focus,.alert-radio:active,.alert-radio:focus{outline:0}.alert-checkbox-icon,.alert-checkbox-inner,.alert-radio-icon{-webkit-box-sizing:border-box;box-sizing:border-box}.alert-md{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.alert-md .alert-wrapper{border-radius:2px;max-width:280px;background-color:var(--ion-overlay-md-background-color,var(--ion-overlay-background-color,#fafafa));-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}.alert-md .alert-head{text-align:left;text-align:start;padding:20px 23px 15px}.alert-md .alert-title{font-size:20px;font-weight:500;color:var(--ion-text-md-color,var(--ion-text-color,#000))}.alert-md .alert-sub-title{font-size:16px;color:var(--ion-text-md-color,var(--ion-text-color,#000))}.alert-md .alert-input-group,.alert-md .alert-message{padding:0 24px 24px;color:var(--ion-text-md-color-step-450,var(--ion-text-color-step-450,#737373))}.alert-md .alert-message{max-height:240px;font-size:15px}.alert-md .alert-message:empty{padding:0}.alert-md .alert-input{margin:5px 0;border-bottom:1px solid var(--ion-background-md-color-step-150,var(--ion-background-color-step-150,#d9d9d9));color:var(--ion-text-md-color,var(--ion-text-color,#000))}.alert-md .alert-input::-moz-placeholder{color:var(--ion-placeholder-text-md-color,var(--ion-placeholder-text-color,#999))}.alert-md .alert-input:-ms-input-placeholder{color:var(--ion-placeholder-text-md-color,var(--ion-placeholder-text-color,#999))}.alert-md .alert-input::-webkit-input-placeholder{text-indent:0;color:var(--ion-placeholder-text-md-color,var(--ion-placeholder-text-color,#999))}.alert-md .alert-input:focus{margin-bottom:4px;border-bottom:2px solid var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.alert-md .alert-checkbox-group,.alert-md .alert-radio-group{position:relative;overflow:auto;max-height:240px;border-top:1px solid var(--ion-background-md-color-step-150,var(--ion-background-color-step-150,#d9d9d9));border-bottom:1px solid var(--ion-background-md-color-step-150,var(--ion-background-color-step-150,#d9d9d9))}.alert-md .alert-tappable{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;height:44px;contain:strict}.alert-md .alert-radio-label{padding:13px 26px 13px 52px;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:16px;text-overflow:ellipsis;white-space:nowrap;color:var(--ion-text-md-color-step-150,var(--ion-text-color-step-150,#262626))}.alert-md .alert-radio-icon{left:26px;top:0;border-radius:50%;position:relative;display:block;width:20px;height:20px;border-width:2px;border-style:solid;border-color:var(--ion-text-md-color-step-450,var(--ion-text-color-step-450,#737373))}.alert-md .alert-radio-inner{left:3px;top:3px;border-radius:50%;position:absolute;width:10px;height:10px;background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:-webkit-transform 280ms cubic-bezier(.4,0,.2,1);transition:-webkit-transform 280ms cubic-bezier(.4,0,.2,1);transition:transform 280ms cubic-bezier(.4,0,.2,1);transition:transform 280ms cubic-bezier(.4,0,.2,1),-webkit-transform 280ms cubic-bezier(.4,0,.2,1)}.alert-md [aria-checked=true] .alert-radio-label{color:var(--ion-text-md-color-step-150,var(--ion-text-color-step-150,#262626))}.alert-md [aria-checked=true] .alert-radio-icon{border-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.alert-md [aria-checked=true] .alert-radio-inner{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}.alert-md .alert-checkbox-label{padding:13px 26px 13px 53px;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:16px;text-overflow:ellipsis;white-space:nowrap;color:var(--ion-text-md-color-step-150,var(--ion-text-color-step-150,#262626))}.alert-md .alert-checkbox-icon{left:26px;top:0;border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-text-md-color-step-450,var(--ion-text-color-step-450,#737373));contain:strict}.alert-md [aria-checked=true] .alert-checkbox-icon{border-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.alert-md [aria-checked=true] .alert-checkbox-inner{left:3px;top:0;position:absolute;width:6px;height:10px;border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff));-webkit-transform:rotate(45deg);transform:rotate(45deg)}.alert-md .alert-button-group{padding:5px 12px 7px 24px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-flex-wrap:wrap-reverse;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.alert-md .alert-button{border-radius:2px;margin:0 8px 0 0;padding:10px;text-align:right;text-align:end;position:relative;overflow:hidden;font-weight:500;text-transform:uppercase;color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));background-color:transparent}.alert-md .alert-button.activated{background-color:var(--ion-background-md-color-step-400,var(--ion-background-color-step-400,#999))}.alert-md .alert-button-inner{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}"}static get styleMode(){return"md"}}class g{constructor(){this.alerts=new Map}alertWillPresent(e){this.alerts.set(e.target.overlayId,e.target)}alertWillDismiss(e){this.alerts.delete(e.target.overlayId)}escapeKeyUp(){d(this.alerts)}create(e){return l(this.doc.createElement("ion-alert"),e)}dismiss(e,t,s=-1){return n(e,t,this.alerts,s)}getTop(){return o(this.alerts)}static get is(){return"ion-alert-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}}static get listeners(){return[{name:"body:ionAlertWillPresent",method:"alertWillPresent"},{name:"body:ionAlertWillDismiss",method:"alertWillDismiss"},{name:"body:ionAlertDidUnload",method:"alertWillDismiss"},{name:"body:keyup.escape",method:"escapeKeyUp"}]}}export{y as IonAlert,g as IonAlertController};