module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=28)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.Model},function(t,e,n){"use strict";function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return r}))},function(t,e){t.exports=flarum.core.compat.extend},function(t,e,n){"use strict";e.a=function(t,e){return void 0===e&&(e="sort"),t.sort((function(t,n){return t[e]()-n[e]()}))}},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(2),o=n(1),i=n.n(o),a=n(10),s=n.n(a),l=n(11),c=n.n(l),u=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.apiEndpoint=function(){return"/fof/terms/policies"+(this.exists?"/"+this.data.id:"")},e}(s()(i.a,{sort:i.a.attribute("sort"),name:i.a.attribute("name"),url:i.a.attribute("url"),update_message:i.a.attribute("update_message"),terms_updated_at:i.a.attribute("terms_updated_at"),form_key:c()("id",(function(t){return"fof_terms_policy_"+t}))}))},function(t,e){t.exports=flarum.core.compat.Component},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={Policy:n(6).a}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={sortByAttribute:n(4).a}},function(t,e){t.exports=flarum.core.compat["utils/mixin"]},function(t,e){t.exports=flarum.core.compat["utils/computed"]},,,,,,,,,,,function(t,e){t.exports=flarum.core.compat["components/SettingsModal"]},function(t,e){t.exports=flarum.core.compat["components/Switch"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.core.compat["components/PermissionGrid"]},,function(t,e,n){"use strict";n.r(e),n.d(e,"components",(function(){return mt})),n.d(e,"models",(function(){return ht.a})),n.d(e,"helpers",(function(){return gt.a}));var r=n(0),o=n.n(r),i=n(6),a=n(2),s=n(22),l=n.n(s),c=n(23),u=n.n(c);function f(t,e,n){if(void 0===n)return t&&t.h5s&&t.h5s.data&&t.h5s.data[e];t.h5s=t.h5s||{},t.h5s.data=t.h5s.data||{},t.h5s.data[e]=n}var d=function(t,e){if(!(t instanceof NodeList||t instanceof HTMLCollection||t instanceof Array))throw new Error("You must provide a nodeList/HTMLCollection/Array of elements to be filtered.");return"string"!=typeof e?Array.from(t):Array.from(t).filter((function(t){return 1===t.nodeType&&t.matches(e)}))},p=new Map,h=function(){function t(){this._config=new Map,this._placeholder=void 0,this._data=new Map}return Object.defineProperty(t.prototype,"config",{get:function(){var t={};return this._config.forEach((function(e,n){t[n]=e})),t},set:function(t){if("object"!=typeof t)throw new Error("You must provide a valid configuration object to the config setter.");var e=Object.assign({},t);this._config=new Map(Object.entries(e))},enumerable:!0,configurable:!0}),t.prototype.setConfig=function(t,e){if(!this._config.has(t))throw new Error("Trying to set invalid configuration item: "+t);this._config.set(t,e)},t.prototype.getConfig=function(t){if(!this._config.has(t))throw new Error("Invalid configuration item requested: "+t);return this._config.get(t)},Object.defineProperty(t.prototype,"placeholder",{get:function(){return this._placeholder},set:function(t){if(!(t instanceof HTMLElement)&&null!==t)throw new Error("A placeholder must be an html element or null.");this._placeholder=t},enumerable:!0,configurable:!0}),t.prototype.setData=function(t,e){if("string"!=typeof t)throw new Error("The key must be a string.");this._data.set(t,e)},t.prototype.getData=function(t){if("string"!=typeof t)throw new Error("The key must be a string.");return this._data.get(t)},t.prototype.deleteData=function(t){if("string"!=typeof t)throw new Error("The key must be a string.");return this._data.delete(t)},t}(),g=function(t){if(!(t instanceof HTMLElement))throw new Error("Please provide a sortable to the store function.");return p.has(t)||p.set(t,new h),p.get(t)};function v(t,e,n){if(t instanceof Array)for(var r=0;r<t.length;++r)v(t[r],e,n);else t.addEventListener(e,n),g(t).setData("event"+e,n)}function y(t,e){if(t instanceof Array)for(var n=0;n<t.length;++n)y(t[n],e);else t.removeEventListener(e,g(t).getData("event"+e)),g(t).deleteData("event"+e)}function b(t,e,n){if(t instanceof Array)for(var r=0;r<t.length;++r)b(t[r],e,n);else t.setAttribute(e,n)}function w(t,e){if(t instanceof Array)for(var n=0;n<t.length;++n)w(t[n],e);else t.removeAttribute(e)}var E=function(t){if(!t.parentElement||0===t.getClientRects().length)throw new Error("target element must be part of the dom");var e=t.getClientRects()[0];return{left:e.left+window.pageXOffset,right:e.right+window.pageXOffset,top:e.top+window.pageYOffset,bottom:e.bottom+window.pageYOffset}},x=function(t,e){if(!(t instanceof HTMLElement&&(e instanceof NodeList||e instanceof HTMLCollection||e instanceof Array)))throw new Error("You must provide an element and a list of elements.");return Array.from(e).indexOf(t)},T=function(t){if(!(t instanceof HTMLElement))throw new Error("Element is not a node element.");return null!==t.parentNode},_=function(t,e,n){if(!(t instanceof HTMLElement&&t.parentElement instanceof HTMLElement))throw new Error("target and element must be a node");t.parentElement.insertBefore(e,"before"===n?t:t.nextElementSibling)},F=function(t,e){return _(t,e,"after")},C=function(t){if(!(t instanceof HTMLElement))throw new Error("You must provide a valid dom element");var e=window.getComputedStyle(t);return["height","padding-top","padding-bottom"].map((function(t){var n=parseInt(e.getPropertyValue(t),10);return isNaN(n)?0:n})).reduce((function(t,e){return t+e}))},L=function(t){if(!(t instanceof HTMLElement))throw new Error("You must provide a valid dom element");var e=window.getComputedStyle(t);return["width","padding-left","padding-right"].map((function(t){var n=parseInt(e.getPropertyValue(t),10);return isNaN(n)?0:n})).reduce((function(t,e){return t+e}))},M=function(t,e){if(!(t instanceof Array))throw new Error("You must provide a Array of HTMLElements to be filtered.");return"string"!=typeof e?t:t.filter((function(t){return t.querySelector(e)instanceof HTMLElement||t.shadowRoot&&t.shadowRoot.querySelector(e)instanceof HTMLElement})).map((function(t){return t.querySelector(e)||t.shadowRoot&&t.shadowRoot.querySelector(e)}))},S=function(t){return t.composedPath&&t.composedPath()[0]||t.target},A=function(t,e,n){return{element:t,posX:n.pageX-e.left,posY:n.pageY-e.top}},O=function(t,e){if(!0===t.isSortable){var n=g(t).getConfig("acceptFrom");if(null!==n&&!1!==n&&"string"!=typeof n)throw new Error('HTML5Sortable: Wrong argument, "acceptFrom" must be "null", "false", or a valid selector string.');if(null!==n)return!1!==n&&n.split(",").filter((function(t){return t.length>0&&e.matches(t)})).length>0;if(t===e)return!0;if(void 0!==g(t).getConfig("connectWith")&&null!==g(t).getConfig("connectWith"))return g(t).getConfig("connectWith")===g(e).getConfig("connectWith")}return!1},P={items:null,connectWith:null,disableIEFix:null,acceptFrom:null,copy:!1,placeholder:null,placeholderClass:"sortable-placeholder",draggingClass:"sortable-dragging",hoverClass:!1,debounce:0,throttleTime:100,maxItems:0,itemSerializer:void 0,containerSerializer:void 0,customDragImage:null,orientation:"vertical"};var j,D,H,I,Y,B,N,k,z,W=function(t,e){if("string"==typeof g(t).getConfig("hoverClass")){var n=g(t).getConfig("hoverClass").split(" ");!0===e?(v(t,"mousemove",function(t,e){var n=this;if(void 0===e&&(e=250),"function"!=typeof t)throw new Error("You must provide a function as the first argument for throttle.");if("number"!=typeof e)throw new Error("You must provide a number as the second argument for throttle.");var r=null;return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];var a=Date.now();(null===r||a-r>=e)&&(r=a,t.apply(n,o))}}((function(e){0===e.buttons&&d(t.children,g(t).getConfig("items")).forEach((function(t){var r,o;t!==e.target?(r=t.classList).remove.apply(r,n):(o=t.classList).add.apply(o,n)}))}),g(t).getConfig("throttleTime"))),v(t,"mouseleave",(function(){d(t.children,g(t).getConfig("items")).forEach((function(t){var e;(e=t.classList).remove.apply(e,n)}))}))):(y(t,"mousemove"),y(t,"mouseleave"))}},q=function(t){y(t,"dragstart"),y(t,"dragend"),y(t,"dragover"),y(t,"dragenter"),y(t,"drop"),y(t,"mouseenter"),y(t,"mouseleave")},R=function(t){var e;(e=t).h5s&&delete e.h5s.data,w(t,"aria-dropeffect")},U=function(t){w(t,"aria-grabbed"),w(t,"aria-copied"),w(t,"draggable"),w(t,"role")};function X(t,e){if(e.composedPath)return e.composedPath().find((function(t){return t.isSortable}));for(;!0!==t.isSortable;)t=t.parentElement;return t}function G(t,e){var n=f(t,"opts"),r=d(t.children,n.items).filter((function(t){return t.contains(e)||t.shadowRoot&&t.shadowRoot.contains(e)}));return r.length>0?r[0]:e}var V=function(t){var e=f(t,"opts"),n=d(t.children,e.items),r=M(n,e.handle);(b(t,"aria-dropeffect","move"),f(t,"_disabled","false"),b(r,"draggable","true"),!1===e.disableIEFix)&&("function"==typeof(document||window.document).createElement("span").dragDrop&&v(r,"mousedown",(function(){if(-1!==n.indexOf(this))this.dragDrop();else{for(var t=this.parentElement;-1===n.indexOf(t);)t=t.parentElement;t.dragDrop()}})))};function J(t,e){var n=String(e);return e=e||{},"string"==typeof t&&(t=document.querySelectorAll(t)),t instanceof HTMLElement&&(t=[t]),t=Array.prototype.slice.call(t),/serialize/.test(n)?t.map((function(t){var e=f(t,"opts");return function(t,e,n){if(void 0===e&&(e=function(t,e){return t}),void 0===n&&(n=function(t){return t}),!(t instanceof HTMLElement)||!0==!t.isSortable)throw new Error("You need to provide a sortableContainer to be serialized.");if("function"!=typeof e||"function"!=typeof n)throw new Error("You need to provide a valid serializer for items and the container.");var r=f(t,"opts").items,o=d(t.children,r),i=o.map((function(e){return{parent:t,node:e,html:e.outerHTML,index:x(e,o)}}));return{container:n({node:t,itemCount:i.length}),items:i.map((function(n){return e(n,t)}))}}(t,e.itemSerializer,e.containerSerializer)})):(t.forEach((function(t){if(/enable|disable|destroy/.test(n))return J[n](t);["connectWith","disableIEFix"].forEach((function(t){Object.prototype.hasOwnProperty.call(e,t)&&null!==e[t]&&console.warn('HTML5Sortable: You are using the deprecated configuration "'+t+'". This will be removed in an upcoming version, make sure to migrate to the new options when updating.')})),e=Object.assign({},P,g(t).config,e),g(t).config=e,f(t,"opts",e),t.isSortable=!0,function(t){var e=f(t,"opts"),n=d(t.children,e.items),r=M(n,e.handle);f(t,"_disabled","false"),q(n),y(r,"mousedown"),y(t,"dragover"),y(t,"dragenter"),y(t,"drop")}(t);var r,o=d(t.children,e.items);if(null!==e.placeholder&&void 0!==e.placeholder){var i=document.createElement(t.tagName);e.placeholder instanceof HTMLElement?i.appendChild(e.placeholder):i.innerHTML=e.placeholder,r=i.children[0]}g(t).placeholder=function(t,e,n){var r;if(void 0===n&&(n="sortable-placeholder"),!(t instanceof HTMLElement))throw new Error("You must provide a valid element as a sortable.");if(!(e instanceof HTMLElement)&&void 0!==e)throw new Error("You must provide a valid element as a placeholder or set ot to undefined.");return void 0===e&&(["UL","OL"].includes(t.tagName)?e=document.createElement("li"):["TABLE","TBODY"].includes(t.tagName)?(e=document.createElement("tr")).innerHTML='<td colspan="100"></td>':e=document.createElement("div")),"string"==typeof n&&(r=e.classList).add.apply(r,n.split(" ")),e}(t,r,e.placeholderClass),f(t,"items",e.items),e.acceptFrom?f(t,"acceptFrom",e.acceptFrom):e.connectWith&&f(t,"connectWith",e.connectWith),V(t),b(o,"role","option"),b(o,"aria-grabbed","false"),W(t,!0),v(t,"dragstart",(function(t){var n=S(t);if(!0!==n.isSortable&&(t.stopImmediatePropagation(),(!e.handle||n.matches(e.handle))&&"false"!==n.getAttribute("draggable"))){var r=X(n,t),o=G(r,n);N=d(r.children,e.items),Y=N.indexOf(o),B=x(o,r.children),I=r,function(t,e,n){if(!(t instanceof Event))throw new Error("setDragImage requires a DragEvent as the first argument.");if(!(e instanceof HTMLElement))throw new Error("setDragImage requires the dragged element as the second argument.");if(n||(n=A),t.dataTransfer&&t.dataTransfer.setDragImage){var r=n(e,E(e),t);if(!(r.element instanceof HTMLElement)||"number"!=typeof r.posX||"number"!=typeof r.posY)throw new Error("The customDragImage function you provided must return and object with the properties element[string], posX[integer], posY[integer].");t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setData("text/plain",S(t).id),t.dataTransfer.setDragImage(r.element,r.posX,r.posY)}}(t,o,e.customDragImage),D=C(o),H=L(o),o.classList.add(e.draggingClass),j=function(t,e){var n=t;return!0===g(e).getConfig("copy")&&(b(n=t.cloneNode(!0),"aria-copied","true"),t.parentElement.appendChild(n),n.style.display="none",n.oldDisplay=t.style.display),n}(o,r),b(j,"aria-grabbed","true"),r.dispatchEvent(new CustomEvent("sortstart",{detail:{origin:{elementIndex:B,index:Y,container:I},item:j,originalTarget:n}}))}})),v(t,"dragenter",(function(e){var n=S(e),r=X(n,e);r&&r!==k&&(z=d(r.children,f(r,"items")).filter((function(e){return e!==g(t).placeholder})),r.dispatchEvent(new CustomEvent("sortenter",{detail:{origin:{elementIndex:B,index:Y,container:I},destination:{container:r,itemsBeforeUpdate:z},item:j,originalTarget:n}}))),k=r})),v(t,"dragend",(function(n){if(j){j.classList.remove(e.draggingClass),b(j,"aria-grabbed","false"),"true"===j.getAttribute("aria-copied")&&"true"!==f(j,"dropped")&&j.remove(),j.style.display=j.oldDisplay,delete j.oldDisplay;var r=Array.from(p.values()).map((function(t){return t.placeholder})).filter((function(t){return t instanceof HTMLElement})).filter(T)[0];r&&r.remove(),t.dispatchEvent(new CustomEvent("sortstop",{detail:{origin:{elementIndex:B,index:Y,container:I},item:j}})),k=null,j=null,D=null,H=null}})),v(t,"drop",(function(n){if(O(t,j.parentElement)){n.preventDefault(),n.stopPropagation(),f(j,"dropped","true");var r=Array.from(p.values()).map((function(t){return t.placeholder})).filter((function(t){return t instanceof HTMLElement})).filter(T)[0];F(r,j),r.remove(),t.dispatchEvent(new CustomEvent("sortstop",{detail:{origin:{elementIndex:B,index:Y,container:I},item:j}}));var o=g(t).placeholder,i=d(I.children,e.items).filter((function(t){return t!==o})),a=!0===this.isSortable?this:this.parentElement,s=d(a.children,f(a,"items")).filter((function(t){return t!==o})),l=x(j,Array.from(j.parentElement.children).filter((function(t){return t!==o}))),c=x(j,s);B===l&&I===a||t.dispatchEvent(new CustomEvent("sortupdate",{detail:{origin:{elementIndex:B,index:Y,container:I,itemsBeforeUpdate:N,items:i},destination:{index:c,elementIndex:l,container:a,itemsBeforeUpdate:z,items:s},item:j}}))}}));var a,s,l,c=(a=function(t,n,r,o){if(j)if(e.forcePlaceholderSize&&(g(t).placeholder.style.height=D+"px",g(t).placeholder.style.width=H+"px"),Array.from(t.children).indexOf(n)>-1){var i=C(n),a=L(n),s=x(g(t).placeholder,n.parentElement.children),l=x(n,n.parentElement.children);if(i>D||a>H){var c=i-D,u=a-H,f=E(n).top,m=E(n).left;if(s<l&&("vertical"===e.orientation&&o<f||"horizontal"===e.orientation&&r<m))return;if(s>l&&("vertical"===e.orientation&&o>f+i-c||"horizontal"===e.orientation&&r>m+a-u))return}void 0===j.oldDisplay&&(j.oldDisplay=j.style.display),"none"!==j.style.display&&(j.style.display="none");var h=!1;try{var v=E(n).top+n.offsetHeight/2,y=E(n).left+n.offsetWidth/2;h="vertical"===e.orientation&&o>=v||"horizontal"===e.orientation&&r>=y}catch(t){h=s<l}h?F(n,g(t).placeholder):function(t,e){_(t,e,"before")}(n,g(t).placeholder),Array.from(p.values()).filter((function(t){return void 0!==t.placeholder})).forEach((function(e){e.placeholder!==g(t).placeholder&&e.placeholder.remove()}))}else{var b=Array.from(p.values()).filter((function(t){return void 0!==t.placeholder})).map((function(t){return t.placeholder}));-1!==b.indexOf(n)||t!==n||d(n.children,e.items).length||(b.forEach((function(t){return t.remove()})),n.appendChild(g(t).placeholder))}},void 0===(s=e.debounce)&&(s=0),function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];clearTimeout(l),l=setTimeout((function(){a.apply(void 0,t)}),s)}),u=function(t){var e=t.target,n=!0===e.isSortable?e:X(e,t);if(e=G(n,e),j&&O(n,j.parentElement)&&"true"!==f(n,"_disabled")){var r=f(n,"opts");parseInt(r.maxItems)&&d(n.children,f(n,"items")).length>=parseInt(r.maxItems)&&j.parentElement!==n||(t.preventDefault(),t.stopPropagation(),t.dataTransfer.dropEffect=!0===g(n).getConfig("copy")?"copy":"move",c(n,e,t.pageX,t.pageY))}};v(o.concat(t),"dragover",u),v(o.concat(t),"dragenter",u)})),t)}J.destroy=function(t){!function(t){var e=f(t,"opts")||{},n=d(t.children,e.items),r=M(n,e.handle);y(t,"dragover"),y(t,"dragenter"),y(t,"dragstart"),y(t,"dragend"),y(t,"drop"),R(t),y(r,"mousedown"),q(n),U(n),t.isSortable=!1}(t)},J.enable=function(t){V(t)},J.disable=function(t){!function(t){var e=f(t,"opts"),n=d(t.children,e.items),r=M(n,e.handle);b(t,"aria-dropeffect","none"),f(t,"_disabled","true"),b(r,"draggable","false"),y(r,"mousedown")}(t)},J.__testing={_data:f,_removeItemEvents:q,_removeItemData:U,_removeSortableData:R};var K=J,Q=n(7),Z=n.n(Q),tt=n(24),et=n.n(tt),nt=n(25),rt=n.n(nt),ot=n(5),it=n.n(ot),at=function(t){function e(){return t.apply(this,arguments)||this}Object(a.a)(e,t);var n=e.prototype;return n.init=function(){this.policy=this.props.policy,this.dirty=!1,this.processing=!1,this.toggleFields=!1,null===this.policy&&this.initNewField()},n.initNewField=function(){this.policy=o.a.store.createRecord("fof-terms-policies",{attributes:{name:"",url:"",update_message:"",terms_updated_at:""}})},n.boxTitle=function(){return this.policy.exists?this.policy.name():o.a.translator.trans("fof-terms.admin.buttons.new-policy")},n.view=function(){var t=this;return m(".FoF-Terms-Policiy-Box",[this.policy.exists?m("span.fas.fa-arrows-alt.FoF-Terms-Policiy-Box--handle.js-policy-handle"):null,m(".Button.Button--block.FoF-Terms-Policiy-Header",{onclick:function(){t.toggleFields=!t.toggleFields}},[m(".FoF-Terms-Policiy-Header-Title",this.boxTitle()),m("div",[this.policy.exists?[o.a.translator.trans("fof-terms.admin.buttons.edit-policy")," "]:null,et()(this.toggleFields?"fas fa-chevron-up":"fas fa-chevron-down")])]),this.toggleFields?this.viewFields():null])},n.viewFields=function(){var t=this;return m("form.FoF-Terms-Policiy-Body",[m(".Form-group",[m("label",o.a.translator.trans("fof-terms.admin.policies.name")),m("input.FormControl",{type:"text",value:this.policy.name(),oninput:m.withAttr("value",this.updateAttribute.bind(this,"name"))}),m(".helpText",o.a.translator.trans("fof-terms.admin.policies.name-help"))]),m(".Form-group",[m("label",o.a.translator.trans("fof-terms.admin.policies.url")),m("input.FormControl",{type:"url",value:this.policy.url(),oninput:m.withAttr("value",this.updateAttribute.bind(this,"url"))}),m(".helpText",o.a.translator.trans("fof-terms.admin.policies.url-help"))]),m(".Form-group",[m("label",o.a.translator.trans("fof-terms.admin.policies.update-message")),m("textarea.FormControl",{value:this.policy.update_message(),oninput:m.withAttr("value",this.updateAttribute.bind(this,"update_message"))}),m(".helpText",o.a.translator.trans("fof-terms.admin.policies.update-message-help"))]),m(".Form-group",[m("label",o.a.translator.trans("fof-terms.admin.policies.terms-updated-at")),m(".FoF-Terms-Input-Group",[m("input.FormControl",{type:"text",value:this.policy.terms_updated_at(),oninput:m.withAttr("value",this.updateAttribute.bind(this,"terms_updated_at")),placeholder:o.a.translator.trans("fof-terms.admin.policies.terms-updated-at-placeholder")}),it.a.component({className:"Button Button--primary",onclick:function(){t.updateAttribute("terms_updated_at",moment().milliseconds(0).toISOString())},children:o.a.translator.trans("fof-terms.admin.buttons.set-to-now")})]),m(".helpText",o.a.translator.trans("fof-terms.admin.policies.terms-updated-at-help"))]),this.policy.exists?m(".Form-group",[m("label",o.a.translator.trans("fof-terms.admin.policies.export-url")),m(".ButtonGroup",["json","csv"].map((function(e){return m("a.Button.FoF-Terms-Export-Button",{href:o.a.forum.attribute("apiUrl")+"/fof/terms/policies/"+t.policy.id()+"/export."+e,target:"_blank"},e.toUpperCase())}))),m(".helpText",o.a.translator.trans("fof-terms.admin.policies.export-url-help",{a:m("a",{href:"https://github.com/FriendsOfFlarum/terms/wiki/Export-url",target:"_blank"})}))]):null,m(".ButtonGroup",[it.a.component({type:"submit",className:"Button Button--primary",children:o.a.translator.trans("fof-terms.admin.buttons."+(this.policy.exists?"save":"add")+"-policy"),loading:this.processing,disabled:!this.readyToSave(),onclick:this.savePolicy.bind(this)}),this.policy.exists?it.a.component({type:"submit",className:"Button Button--danger",children:o.a.translator.trans("fof-terms.admin.buttons.delete-policy"),loading:this.processing,onclick:this.deletePolicy.bind(this)}):""])])},n.updateAttribute=function(t,e){var n;this.policy.pushAttributes(((n={})[t]=e,n)),this.dirty=!0},n.readyToSave=function(){return this.dirty},n.savePolicy=function(){var t=this;this.processing=!0;var e=!this.policy.exists;this.policy.save(this.policy.data.attributes).then((function(){e&&(t.initNewField(),t.toggleFields=!1),t.processing=!1,t.dirty=!1,m.redraw()})).catch((function(e){throw t.processing=!1,e}))},n.deletePolicy=function(){var t=this;confirm(rt()(o.a.translator.trans("fof-terms.admin.messages.delete-policy-confirmation",{name:this.policy.name()})))&&(this.processing=!0,this.policy.delete().then((function(){t.processing=!1,m.redraw()})).catch((function(e){throw t.processing=!1,e})))},e}(Z.a),st=n(4),lt=function(t){function e(){return t.apply(this,arguments)||this}Object(a.a)(e,t);var n=e.prototype;return n.init=function(){o.a.request({method:"GET",url:o.a.forum.attribute("apiUrl")+"/fof/terms/policies"}).then((function(t){o.a.store.pushPayload(t),m.redraw()}))},n.config=function(){var t=this;K($.find(".js-policies-container")[0],{handle:".js-policy-handle"})[0].addEventListener("sortupdate",(function(){var e=t.$(".js-policy-data").map((function(){return $(this).data("id")})).get();t.updateSort(e)}))},n.view=function(){var t=o.a.store.all("fof-terms-policies"),e=[];return Object(st.a)(t).forEach((function(t){e.push(m(".js-policy-data",{key:t.id(),"data-id":t.id()},at.component({policy:t})))})),m("div",[m("h2",o.a.translator.trans("fof-terms.admin.titles.policies")),m(".FoF-Terms-Policies-Container",[m(".js-policies-container",e),at.component({key:"new",policy:null})])])},n.updateSort=function(t){o.a.request({method:"POST",url:o.a.forum.attribute("apiUrl")+"/fof/terms/policies/order",data:{sort:t}}).then((function(t){o.a.store.pushPayload(t),m.redraw()}))},e}(Z.a),ct="fof-terms.admin.settings.",ut=function(t){function e(){return t.apply(this,arguments)||this}Object(a.a)(e,t);var n=e.prototype;return n.title=function(){return o.a.translator.trans(ct+"title")},n.form=function(){return[m(".Form-group",[m("label",o.a.translator.trans(ct+"field.signup-legal-text")),m("textarea.FormControl",{bidi:this.setting("fof-terms.signup-legal-text")})]),m(".Form-group",[m("label",u.a.component({state:this.setting("fof-terms.hide-updated-at")()>0,onchange:this.setting("fof-terms.hide-updated-at"),children:o.a.translator.trans(ct+"field.hide-updated-at")}))]),m(".Form-group",[m("label",o.a.translator.trans(ct+"field.date-format")),m("input[type=text].FormControl",{bidi:this.setting("fof-terms.date-format"),placeholder:"YYYY-MM-DD"}),m(".helpText",o.a.translator.trans(ct+"field.date-format-help",{a:m("a",{href:"https://momentjs.com/docs/#/displaying/format/",target:"_blank"})}))]),lt.component()]},e}(l.a),ft=n(3),dt=n(26),pt=n.n(dt),mt={PolicyEdit:at,PolicyList:lt,TermsSettingsModal:ut},ht=n(8),gt=n(9);o.a.initializers.add("fof-terms",(function(t){t.store.models["fof-terms-policies"]=i.a,t.extensionSettings["fof-terms"]=function(){return t.modal.show(new ut)},Object(ft.extend)(pt.a.prototype,"moderateItems",(function(t){t.add("fof-terms-see-user-policies-state",{icon:"fas fa-paperclip",label:o.a.translator.trans("fof-terms.admin.permissions.see-user-policies-state"),permission:"fof-terms.see-user-policies-state"}),t.add("fof-terms-postpone-policies-accept",{icon:"fas fa-paperclip",label:o.a.translator.trans("fof-terms.admin.permissions.postpone-policies-accept"),permission:"fof-terms.postpone-policies-accept"}),t.add("fof-terms-export-policies",{icon:"fas fa-paperclip",label:o.a.translator.trans("fof-terms.admin.permissions.export-policies"),permission:"fof-terms.export-policies"})}))}))}]);
//# sourceMappingURL=admin.js.map