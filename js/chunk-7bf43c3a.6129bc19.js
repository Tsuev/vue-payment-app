(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bf43c3a"],{"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(r(t))}},"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),i=n("17c2"),a=n("9112");for(var c in o){var s=r[c],u=s&&s.prototype;if(u&&u.forEach!==i)try{a(u,"forEach",i)}catch(l){u.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("a640"),i=o("forEach");t.exports=i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),i=n("2d00"),a=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"23d9":function(t,e,n){"use strict";n("df70")},"2efd":function(t,e,n){},3739:function(t,e,n){"use strict";n("6193")},4385:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MainContainer")},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid main-bg"},[n("div",{staticClass:"row d-flex justify-content-center align-items-center"},[n("MainButton",{on:{openPopUp:t.showPopUp}}),n("PopUp",{directives:[{name:"show",rawName:"v-show",value:t.isShowPopUp,expression:"isShowPopUp"}],on:{closePopUp:t.showPopUp}})],1)])},a=[];n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-fade"}},[n("div",{staticClass:"popup-wrapper"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col title d-flex"},[t._v(" Налоговый вычет "),n("svg",{staticClass:"ms-auto",staticStyle:{"margin-top":"-10px",cursor:"pointer"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none"},on:{click:t.closePopUp}},[n("path",{attrs:{d:"M11.4226 9.00086L17.4771 2.94467C17.6407 2.78667 17.7712 2.59768 17.8609 2.38872C17.9507 2.17976 17.998 1.95502 17.9999 1.72761C18.0019 1.50019 17.9586 1.27466 17.8725 1.06417C17.7863 0.853686 17.6592 0.662457 17.4984 0.501645C17.3375 0.340833 17.1463 0.213657 16.9358 0.12754C16.7253 0.041423 16.4998 -0.0019115 16.2724 6.46674e-05C16.045 0.00204084 15.8202 0.0492885 15.6113 0.139051C15.4023 0.228813 15.2133 0.359291 15.0553 0.522874L8.99914 6.57735L2.94467 0.522874C2.78667 0.359291 2.59768 0.228813 2.38872 0.139051C2.17976 0.0492885 1.95502 0.00204084 1.72761 6.46674e-05C1.50019 -0.0019115 1.27466 0.041423 1.06417 0.12754C0.853686 0.213657 0.662457 0.340833 0.501645 0.501645C0.340833 0.662457 0.213657 0.853686 0.12754 1.06417C0.041423 1.27466 -0.0019115 1.50019 6.46674e-05 1.72761C0.00204084 1.95502 0.0492885 2.17976 0.139051 2.38872C0.228813 2.59768 0.359291 2.78667 0.522874 2.94467L6.57735 8.99914L0.522874 15.0553C0.359291 15.2133 0.228813 15.4023 0.139051 15.6113C0.0492885 15.8202 0.00204084 16.045 6.46674e-05 16.2724C-0.0019115 16.4998 0.041423 16.7253 0.12754 16.9358C0.213657 17.1463 0.340833 17.3375 0.501645 17.4984C0.662457 17.6592 0.853686 17.7863 1.06417 17.8725C1.27466 17.9586 1.50019 18.0019 1.72761 17.9999C1.95502 17.998 2.17976 17.9507 2.38872 17.8609C2.59768 17.7712 2.78667 17.6407 2.94467 17.4771L8.99914 11.4226L15.0553 17.4771C15.2133 17.6407 15.4023 17.7712 15.6113 17.8609C15.8202 17.9507 16.045 17.998 16.2724 17.9999C16.4998 18.0019 16.7253 17.9586 16.9358 17.8725C17.1463 17.7863 17.3375 17.6592 17.4984 17.4984C17.6592 17.3375 17.7863 17.1463 17.8725 16.9358C17.9586 16.7253 18.0019 16.4998 17.9999 16.2724C17.998 16.045 17.9507 15.8202 17.8609 15.6113C17.7712 15.4023 17.6407 15.2133 17.4771 15.0553L11.4226 8.99914V9.00086Z",fill:"#EA0029"}})])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col description"},[t._v(" Используйте налоговый вычет чтобы погасить ипотеку досрочно. "),n("br"),t._v(" Размер налогового вычета составляет не более 13% от своего официального годового дохода. ")])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col d-flex flex-column"},[n("label",{staticClass:"salary",attrs:{for:"salary"}},[t._v("Ваша зарплата в месяц")]),n("input",{directives:[{name:"mask",rawName:"v-mask",value:t.mask,expression:"mask"},{name:"model",rawName:"v-model",value:t.maskData,expression:"maskData"}],attrs:{id:"salary",type:"text",placeholder:"Введите данные"},domProps:{value:t.maskData},on:{input:function(e){e.target.composing||(t.maskData=e.target.value)}}}),n("span",{staticClass:"action-button",on:{click:function(e){return t.canculatePayments(t.maskData)}}},[t._v("Рассчитать")])])]),n("transition",{attrs:{name:"pay-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowPayments,expression:"isShowPayments"}]},[n("div",{staticClass:"row"},[n("div",{staticClass:"col result-title"},[t._v("Итого можете внести в качестве досрочных:")])]),n("div",{staticClass:"row tax",staticStyle:{"overflow-y":"scroll","max-height":"200px","margin-bottom":"18px"}},t._l(t.backSalaries,(function(t,e){return n("Tax",{key:e,attrs:{payment:t,index:e+1}})})),1)])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-auto mt-3 mt-sm-0"},[n("span",{staticClass:"question"},[t._v("Что уменьшаем?")])]),n("div",{staticClass:"col-12 col-sm-auto mt-3 mt-sm-0 d-flex"},[n("choosing-button",{attrs:{paddingX:6,paddingY:12,content:"Платёж",active:!0}}),n("choosing-button",{attrs:{paddingX:6,paddingY:12,content:"Срок"}})],1)]),n("div",{staticClass:"row last-row"},[n("div",{staticClass:"col"},[n("choosing-button",{attrs:{borderRadiusSize:6,paddingY:100,paddingX:16,width:100,content:"Добавить",flex:!0,active:!0}})],1)])],1)])},f=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("div",{staticClass:"d-flex justify-content-start align-items-center tax-content"},[n("checkbox"),n("p",{staticClass:"tax-value m-0"},[t._v(t._s(new Intl.NumberFormat("ru-RU").format(t.payment))+" рублей "),n("span",{staticClass:"text-muted"},[t._v("в "+t._s(t.index)+"-ый год")])])],1),n("hr",{staticClass:"w-100"})])},p=[],v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("input",{staticClass:"d-none main-checkbox",attrs:{type:"checkbox"}}),n("div",{staticClass:"custom-checkbox"})])}],m={},h=m,y=(n("e9ef"),n("2877")),g=Object(y["a"])(h,v,b,!1,null,null,null),w=g.exports,x={components:{Checkbox:w},props:["payment","index"]},C=x,O=(n("719a"),Object(y["a"])(C,d,p,!1,null,null,null)),P=O.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:{"flex-center":t.flex,"choosing-button":t.active,"disabled-button":!t.active},style:{padding:t.paddingX+"px "+t.paddingY+"px",borderRadius:t.borderRadiusSize+"px",width:t.width+"%"}},[t._v(" "+t._s(t.content)+" ")])},j=[],_={props:{paddingX:{default:0},paddingY:{default:0},borderRadiusSize:{default:50},content:{default:""},width:{default:""},flex:{default:!1},active:{default:!1}}},k=_,E=(n("3739"),Object(y["a"])(k,S,j,!1,null,null,null)),U=E.exports,D=n("958e"),$=n.n(D),L=n("2f62"),N=$()({suffix:" ₽",prefix:"",thousandsSeparatorSymbol:" ",integerLimit:15}),A={data:function(){return{mask:N,maskData:""}},computed:Object(L["c"])(["backSalaries","isShowPayments"]),components:{Tax:P,ChoosingButton:U},methods:u(u({closePopUp:function(){this.$emit("closePopUp")}},Object(L["b"])(["salaryCanculation","showPayments"])),{},{canculatePayments:function(t){this.showPayments(t),this.salaryCanculation()}})},M=A,B=(n("23d9"),Object(y["a"])(M,l,f,!1,null,null,null)),R=B.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"main-button",on:{click:t.openPopUp}},[t._v("Налоговый вычет")])},X=[],Y={methods:{openPopUp:function(){this.$emit("openPopUp")}}},I=Y,J=(n("4814"),Object(y["a"])(I,T,X,!1,null,null,null)),z=J.exports,F={computed:Object(L["c"])(["isShowPopUp"]),methods:u({},Object(L["b"])(["showPopUp"])),components:{PopUp:R,MainButton:z}},q=F,Z=(n("da83"),Object(y["a"])(q,i,a,!1,null,null,null)),Q=Z.exports,V={components:{MainContainer:Q}},W=V,G=Object(y["a"])(W,r,o,!1,null,null,null);e["default"]=G.exports},4814:function(t,e,n){"use strict";n("e523")},"4de4":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").filter,i=n("1dde"),a=i("filter");r({target:"Array",proto:!0,forced:!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},6193:function(t,e,n){},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),i=n("b622"),a=i("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"67dd":function(t,e,n){},"719a":function(t,e,n){"use strict";n("2efd")},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),i=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},"958e":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(2)},,function(t,e){"use strict";function n(){function t(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=t.length;if(t===c||t[0]===m[0]&&1===e)return m.split(c).concat([v]).concat(y.split(c));if(t===j&&P)return m.split(c).concat(["0",j,v]).concat(y.split(c));var n=t[0]===l&&$;n&&(t=t.toString().substr(1));var a=t.lastIndexOf(j),s=-1!==a,u=void 0,h=void 0,g=void 0;if(t.slice(-1*R)===y&&(t=t.slice(0,-1*R)),s&&(P||U)?(u=t.slice(t.slice(0,B)===m?B:0,a),h=t.slice(a+1,e),h=r(h.replace(d,c))):u=t.slice(0,B)===m?t.slice(B):t,M&&("undefined"==typeof M?"undefined":i(M))===p){var x="."===C?"[.]":""+C,O=(u.match(new RegExp(x,"g"))||[]).length;u=u.slice(0,M+O*T)}return u=u.replace(d,c),N||(u=u.replace(/^0+(0$|[^0])/,"$1")),u=w?o(u,C):u,g=r(u),(s&&P||!0===U)&&(t[a-1]!==j&&g.push(b),g.push(j,b),h&&(("undefined"==typeof k?"undefined":i(k))===p&&(h=h.slice(0,k)),g=g.concat(h)),!0===U&&t[a-1]===j&&g.push(v)),B>0&&(g=m.split(c).concat(g)),n&&(g.length===B&&g.push(v),g=[f].concat(g)),y.length>0&&(g=g.concat(y.split(c))),g}var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.prefix,m=void 0===n?a:n,h=e.suffix,y=void 0===h?c:h,g=e.includeThousandsSeparator,w=void 0===g||g,x=e.thousandsSeparatorSymbol,C=void 0===x?s:x,O=e.allowDecimal,P=void 0!==O&&O,S=e.decimalSymbol,j=void 0===S?u:S,_=e.decimalLimit,k=void 0===_?2:_,E=e.requireDecimal,U=void 0!==E&&E,D=e.allowNegative,$=void 0!==D&&D,L=e.allowLeadingZeroes,N=void 0!==L&&L,A=e.integerLimit,M=void 0===A?null:A,B=m&&m.length||0,R=y&&y.length||0,T=C&&C.length||0;return t.instanceOf="createNumberMask",t}function r(t){return t.split(c).map((function(t){return v.test(t)?v:t}))}function o(t,e){return t.replace(/\B(?=(\d{3})+(?!\d))/g,e)}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=n;var a="$",c="",s=",",u=".",l="-",f=/-/,d=/\D+/g,p="number",v=/\d/,b="[]"}])}))},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d066"),a=n("c430"),c=n("83ab"),s=n("4930"),u=n("fdbf"),l=n("d039"),f=n("5135"),d=n("e8b5"),p=n("861d"),v=n("825a"),b=n("7b0b"),m=n("fc6a"),h=n("c04e"),y=n("5c6c"),g=n("7c73"),w=n("df75"),x=n("241c"),C=n("057f"),O=n("7418"),P=n("06cf"),S=n("9bf2"),j=n("d1e7"),_=n("9112"),k=n("6eeb"),E=n("5692"),U=n("f772"),D=n("d012"),$=n("90e3"),L=n("b622"),N=n("e538"),A=n("746f"),M=n("d44e"),B=n("69f3"),R=n("b727").forEach,T=U("hidden"),X="Symbol",Y="prototype",I=L("toPrimitive"),J=B.set,z=B.getterFor(X),F=Object[Y],q=o.Symbol,Z=i("JSON","stringify"),Q=P.f,V=S.f,W=C.f,G=j.f,H=E("symbols"),K=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),nt=E("wks"),rt=o.QObject,ot=!rt||!rt[Y]||!rt[Y].findChild,it=c&&l((function(){return 7!=g(V({},"a",{get:function(){return V(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Q(F,e);r&&delete F[e],V(t,e,n),r&&t!==F&&V(F,e,r)}:V,at=function(t,e){var n=H[t]=g(q[Y]);return J(n,{type:X,tag:t,description:e}),c||(n.description=e),n},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},st=function(t,e,n){t===F&&st(K,e,n),v(t);var r=h(e,!0);return v(n),f(H,r)?(n.enumerable?(f(t,T)&&t[T][r]&&(t[T][r]=!1),n=g(n,{enumerable:y(0,!1)})):(f(t,T)||V(t,T,y(1,{})),t[T][r]=!0),it(t,r,n)):V(t,r,n)},ut=function(t,e){v(t);var n=m(e),r=w(n).concat(vt(n));return R(r,(function(e){c&&!ft.call(n,e)||st(t,e,n[e])})),t},lt=function(t,e){return void 0===e?g(t):ut(g(t),e)},ft=function(t){var e=h(t,!0),n=G.call(this,e);return!(this===F&&f(H,e)&&!f(K,e))&&(!(n||!f(this,e)||!f(H,e)||f(this,T)&&this[T][e])||n)},dt=function(t,e){var n=m(t),r=h(e,!0);if(n!==F||!f(H,r)||f(K,r)){var o=Q(n,r);return!o||!f(H,r)||f(n,T)&&n[T][r]||(o.enumerable=!0),o}},pt=function(t){var e=W(m(t)),n=[];return R(e,(function(t){f(H,t)||f(D,t)||n.push(t)})),n},vt=function(t){var e=t===F,n=W(e?K:m(t)),r=[];return R(n,(function(t){!f(H,t)||e&&!f(F,t)||r.push(H[t])})),r};if(s||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=$(t),n=function(t){this===F&&n.call(K,t),f(this,T)&&f(this[T],e)&&(this[T][e]=!1),it(this,e,y(1,t))};return c&&ot&&it(F,e,{configurable:!0,set:n}),at(e,t)},k(q[Y],"toString",(function(){return z(this).tag})),k(q,"withoutSetter",(function(t){return at($(t),t)})),j.f=ft,S.f=st,P.f=dt,x.f=C.f=pt,O.f=vt,N.f=function(t){return at(L(t),t)},c&&(V(q[Y],"description",{configurable:!0,get:function(){return z(this).description}}),a||k(F,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:q}),R(w(nt),(function(t){A(t)})),r({target:X,stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!c},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:vt}),r({target:"Object",stat:!0,forced:l((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(b(t))}}),Z){var bt=!s||l((function(){var t=q();return"[null]"!=Z([t])||"{}"!=Z({a:t})||"{}"!=Z(Object(t))}));r({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,n){var r,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),o[1]=e,Z.apply(null,o)}})}q[Y][I]||_(q[Y],I,q[Y].valueOf),M(q,X),D[T]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,n){var r=n("23e7"),o=n("7b0b"),i=n("df75"),a=n("d039"),c=a((function(){i(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(t){return i(o(t))}})},b727:function(t,e,n){var r=n("0366"),o=n("44ad"),i=n("7b0b"),a=n("50c4"),c=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,f=6==t,d=7==t,p=5==t||f;return function(v,b,m,h){for(var y,g,w=i(v),x=o(w),C=r(b,m,3),O=a(x.length),P=0,S=h||c,j=e?S(v,O):n||d?S(v,0):void 0;O>P;P++)if((p||P in x)&&(y=x[P],g=C(y,P,w),t))if(e)j[P]=g;else if(g)switch(t){case 3:return!0;case 5:return y;case 6:return P;case 2:s.call(j,y)}else switch(t){case 4:return!1;case 7:s.call(j,y)}return f?-1:u||l?l:j}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},d26e:function(t,e,n){},da83:function(t,e,n){"use strict";n("67dd")},dbb4:function(t,e,n){var r=n("23e7"),o=n("83ab"),i=n("56ef"),a=n("fc6a"),c=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=a(t),o=c.f,u=i(r),l={},f=0;while(u.length>f)n=o(r,e=u[f++]),void 0!==n&&s(l,e,n);return l}})},df70:function(t,e,n){},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),i=n("fc6a"),a=n("06cf").f,c=n("83ab"),s=o((function(){a(1)})),u=!c||s;r({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},e523:function(t,e,n){},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e9ef:function(t,e,n){"use strict";n("d26e")}}]);
//# sourceMappingURL=chunk-7bf43c3a.6129bc19.js.map