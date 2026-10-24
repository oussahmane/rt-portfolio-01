const cg=()=>{};var Fc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},lg=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],u=r[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,u=o?r[s+1]:0,c=s+2<r.length,h=c?r[s+2]:0,f=i>>2,m=(i&3)<<4|u>>4;let p=(u&15)<<2|h>>6,v=h&63;c||(v=64,o||(p=64)),n.push(t[f],t[m],t[p],t[v])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(_h(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):lg(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],u=s<r.length?t[r.charAt(s)]:0;++s;const h=s<r.length?t[r.charAt(s)]:64;++s;const m=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||u==null||h==null||m==null)throw new hg;const p=i<<2|u>>4;if(n.push(p),h!==64){const v=u<<4&240|h>>2;if(n.push(v),m!==64){const C=h<<6&192|m;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class hg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dg=function(r){const e=_h(r);return yh.encodeByteArray(e,!0)},pi=function(r){return dg(r).replace(/\./g,"")},fg=function(r){try{return yh.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=()=>Ih().__FIREBASE_DEFAULTS__,gg=()=>{if(typeof process>"u"||typeof Fc>"u")return;const r=Fc.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},pg=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&fg(r[1]);return e&&JSON.parse(e)},Mi=()=>{try{return cg()||mg()||gg()||pg()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},_g=r=>{var e,t;return(t=(e=Mi())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},yg=r=>{const e=_g(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Eh=()=>{var r;return(r=Mi())==null?void 0:r.config},GT=r=>{var e;return(e=Mi())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[pi(JSON.stringify(t)),pi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gn())}function Th(){var e;const r=(e=Mi())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function WT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function HT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JT(){const r=Gn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function wh(){return!Th()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ah(){return!Th()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function vh(){try{return typeof indexedDB=="object"}catch{return!1}}function Tg(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="FirebaseError";class fr extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=wg,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bh.prototype.create)}}class bh{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ag(i,n):"Error",u=`${this.serviceName}: ${o} (${s}).`;return new fr(s,u,n)}}function Ag(r,e){return r.replace(vg,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const vg=/\{\$([^}]+)}/g;function YT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Nt(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(Lc(i)&&Lc(o)){if(!Nt(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Lc(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function ZT(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ew(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function tw(r,e){const t=new bg(r,e);return t.subscribe.bind(t)}class bg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Rg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=xo),s.error===void 0&&(s.error=xo),s.complete===void 0&&(s.complete=xo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rg(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function xo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rh(r){return(await fetch(r,{credentials:"include"})).ok}class cs{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Ig;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vg(e))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nn){return this.instances.has(e)}getOptions(e=nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);n===u&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Pg(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=nn){return this.component?this.component.multipleInstances?e:nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pg(r){return r===nn?void 0:r}function Vg(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Sg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(J||(J={}));const Dg={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},xg=J.INFO,Ng={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},kg=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Ng[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sh{constructor(e){this.name=e,this._logLevel=xg,this._logHandler=kg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const Mg=(r,e)=>e.some(t=>r instanceof t);let Bc,Uc;function Og(){return Bc||(Bc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fg(){return Uc||(Uc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ph=new WeakMap,Ko=new WeakMap,Vh=new WeakMap,No=new WeakMap,Ra=new WeakMap;function Lg(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Vt(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ph.set(t,r)}).catch(()=>{}),Ra.set(e,r),e}function Bg(r){if(Ko.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});Ko.set(r,e)}let Qo={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Ko.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Vh.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Ug(r){Qo=r(Qo)}function qg(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(ko(this),e,...t);return Vh.set(n,e.sort?e.sort():[e]),Vt(n)}:Fg().includes(r)?function(...e){return r.apply(ko(this),e),Vt(Ph.get(this))}:function(...e){return Vt(r.apply(ko(this),e))}}function jg(r){return typeof r=="function"?qg(r):(r instanceof IDBTransaction&&Bg(r),Mg(r,Og())?new Proxy(r,Qo):r)}function Vt(r){if(r instanceof IDBRequest)return Lg(r);if(No.has(r))return No.get(r);const e=jg(r);return e!==r&&(No.set(r,e),Ra.set(e,r)),e}const ko=r=>Ra.get(r);function zg(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),u=Vt(o);return n&&o.addEventListener("upgradeneeded",c=>{n(Vt(o.result),c.oldVersion,c.newVersion,Vt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),u.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const $g=["get","getKey","getAll","getAllKeys","count"],Gg=["put","add","delete","clear"],Mo=new Map;function qc(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Mo.get(e))return Mo.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Gg.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||$g.includes(t)))return;const i=async function(o,...u){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return n&&(h=h.index(u.shift())),(await Promise.all([h[t](...u),s&&c.done]))[0]};return Mo.set(e,i),i}Ug(r=>({...r,get:(e,t,n)=>qc(e,t)||r.get(e,t,n),has:(e,t)=>!!qc(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qg(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Qg(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wo="@firebase/app",jc="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new Sh("@firebase/app"),Wg="@firebase/app-compat",Hg="@firebase/analytics-compat",Jg="@firebase/analytics",Yg="@firebase/app-check-compat",Xg="@firebase/app-check",Zg="@firebase/auth",ep="@firebase/auth-compat",tp="@firebase/database",np="@firebase/data-connect",rp="@firebase/database-compat",sp="@firebase/functions",ip="@firebase/functions-compat",op="@firebase/installations",ap="@firebase/installations-compat",up="@firebase/messaging",cp="@firebase/messaging-compat",lp="@firebase/performance",hp="@firebase/performance-compat",dp="@firebase/remote-config",fp="@firebase/remote-config-compat",mp="@firebase/storage",gp="@firebase/storage-compat",pp="@firebase/firestore",_p="@firebase/ai",yp="@firebase/firestore-compat",Ip="firebase",Ep="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i="[DEFAULT]",Tp={[Wo]:"fire-core",[Wg]:"fire-core-compat",[Jg]:"fire-analytics",[Hg]:"fire-analytics-compat",[Xg]:"fire-app-check",[Yg]:"fire-app-check-compat",[Zg]:"fire-auth",[ep]:"fire-auth-compat",[tp]:"fire-rtdb",[np]:"fire-data-connect",[rp]:"fire-rtdb-compat",[sp]:"fire-fn",[ip]:"fire-fn-compat",[op]:"fire-iid",[ap]:"fire-iid-compat",[up]:"fire-fcm",[cp]:"fire-fcm-compat",[lp]:"fire-perf",[hp]:"fire-perf-compat",[dp]:"fire-rc",[fp]:"fire-rc-compat",[mp]:"fire-gcs",[gp]:"fire-gcs-compat",[pp]:"fire-fst",[yp]:"fire-fst-compat",[_p]:"fire-vertex","fire-js":"fire-js",[Ip]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new Map,wp=new Map,Ho=new Map;function zc(r,e){try{r.container.addComponent(e)}catch(t){ut.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Ii(r){const e=r.name;if(Ho.has(e))return ut.debug(`There were multiple attempts to register component ${e}.`),!1;Ho.set(e,r);for(const t of yi.values())zc(t,r);for(const t of wp.values())zc(t,r);return!0}function Sa(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Ap(r,e,t=_i){Sa(r,e).clearInstance(t)}function vp(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ct=new bh("app","Firebase",bp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=Ep;function Pp(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:_i,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw Ct.create("bad-app-name",{appName:String(s)});if(t||(t=Eh()),!t)throw Ct.create("no-options");const i=yi.get(s);if(i){if(Nt(t,i.options)&&Nt(n,i.config))return i;throw Ct.create("duplicate-app",{appName:s})}const o=new Cg(s);for(const c of Ho.values())o.addComponent(c);const u=new Rp(t,n,o);return yi.set(s,u),u}function Vp(r=_i){const e=yi.get(r);if(!e&&r===_i&&Eh())return Pp();if(!e)throw Ct.create("no-app",{appName:r});return e}function Xr(r,e,t){let n=Tp[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ut.warn(o.join(" "));return}Ii(new cs(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="firebase-heartbeat-database",Dp=1,ls="firebase-heartbeat-store";let Oo=null;function Ch(){return Oo||(Oo=zg(Cp,Dp,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ls)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ct.create("idb-open",{originalErrorMessage:r.message})})),Oo}async function xp(r){try{const t=(await Ch()).transaction(ls),n=await t.objectStore(ls).get(Dh(r));return await t.done,n}catch(e){if(e instanceof fr)ut.warn(e.message);else{const t=Ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ut.warn(t.message)}}}async function $c(r,e){try{const n=(await Ch()).transaction(ls,"readwrite");await n.objectStore(ls).put(e,Dh(r)),await n.done}catch(t){if(t instanceof fr)ut.warn(t.message);else{const n=Ct.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ut.warn(n.message)}}}function Dh(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=1024,kp=30;class Mp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Fp(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>kp){const o=Lp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ut.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Gc(),{heartbeatsToSend:n,unsentEntries:s}=Op(this._heartbeatsCache.heartbeats),i=pi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return ut.warn(t),""}}}function Gc(){return new Date().toISOString().substring(0,10)}function Op(r,e=Np){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Kc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Kc(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Fp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vh()?Tg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await xp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return $c(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return $c(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Kc(r){return pi(JSON.stringify({version:2,heartbeats:r})).length}function Lp(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(r){Ii(new cs("platform-logger",e=>new Kg(e),"PRIVATE")),Ii(new cs("heartbeat",e=>new Mp(e),"PRIVATE")),Xr(Wo,jc,r),Xr(Wo,jc,"esm2020"),Xr("fire-js","")}Bp("");var Qc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dt,xh;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function I(){}I.prototype=_.prototype,E.F=_.prototype,E.prototype=new I,E.prototype.constructor=E,E.D=function(w,T,S){for(var y=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)y[Oe-2]=arguments[Oe];return _.prototype[T].apply(w,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,I){I||(I=0);const w=Array(16);if(typeof _=="string")for(var T=0;T<16;++T)w[T]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(T=0;T<16;++T)w[T]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=E.g[0],I=E.g[1],T=E.g[2];let S=E.g[3],y;y=_+(S^I&(T^S))+w[0]+3614090360&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(T^_&(I^T))+w[1]+3905402710&4294967295,S=_+(y<<12&4294967295|y>>>20),y=T+(I^S&(_^I))+w[2]+606105819&4294967295,T=S+(y<<17&4294967295|y>>>15),y=I+(_^T&(S^_))+w[3]+3250441966&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(S^I&(T^S))+w[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(T^_&(I^T))+w[5]+1200080426&4294967295,S=_+(y<<12&4294967295|y>>>20),y=T+(I^S&(_^I))+w[6]+2821735955&4294967295,T=S+(y<<17&4294967295|y>>>15),y=I+(_^T&(S^_))+w[7]+4249261313&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(S^I&(T^S))+w[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(T^_&(I^T))+w[9]+2336552879&4294967295,S=_+(y<<12&4294967295|y>>>20),y=T+(I^S&(_^I))+w[10]+4294925233&4294967295,T=S+(y<<17&4294967295|y>>>15),y=I+(_^T&(S^_))+w[11]+2304563134&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(S^I&(T^S))+w[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=S+(T^_&(I^T))+w[13]+4254626195&4294967295,S=_+(y<<12&4294967295|y>>>20),y=T+(I^S&(_^I))+w[14]+2792965006&4294967295,T=S+(y<<17&4294967295|y>>>15),y=I+(_^T&(S^_))+w[15]+1236535329&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(T^S&(I^T))+w[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^T&(_^I))+w[6]+3225465664&4294967295,S=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(S^_))+w[11]+643717713&4294967295,T=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(T^S))+w[0]+3921069994&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(T^S&(I^T))+w[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^T&(_^I))+w[10]+38016083&4294967295,S=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(S^_))+w[15]+3634488961&4294967295,T=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(T^S))+w[4]+3889429448&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(T^S&(I^T))+w[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^T&(_^I))+w[14]+3275163606&4294967295,S=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(S^_))+w[3]+4107603335&4294967295,T=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(T^S))+w[8]+1163531501&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(T^S&(I^T))+w[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=S+(I^T&(_^I))+w[2]+4243563512&4294967295,S=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(S^_))+w[7]+1735328473&4294967295,T=S+(y<<14&4294967295|y>>>18),y=I+(S^_&(T^S))+w[12]+2368359562&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(I^T^S)+w[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^T)+w[8]+2272392833&4294967295,S=_+(y<<11&4294967295|y>>>21),y=T+(S^_^I)+w[11]+1839030562&4294967295,T=S+(y<<16&4294967295|y>>>16),y=I+(T^S^_)+w[14]+4259657740&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(I^T^S)+w[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^T)+w[4]+1272893353&4294967295,S=_+(y<<11&4294967295|y>>>21),y=T+(S^_^I)+w[7]+4139469664&4294967295,T=S+(y<<16&4294967295|y>>>16),y=I+(T^S^_)+w[10]+3200236656&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(I^T^S)+w[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^T)+w[0]+3936430074&4294967295,S=_+(y<<11&4294967295|y>>>21),y=T+(S^_^I)+w[3]+3572445317&4294967295,T=S+(y<<16&4294967295|y>>>16),y=I+(T^S^_)+w[6]+76029189&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(I^T^S)+w[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=S+(_^I^T)+w[12]+3873151461&4294967295,S=_+(y<<11&4294967295|y>>>21),y=T+(S^_^I)+w[15]+530742520&4294967295,T=S+(y<<16&4294967295|y>>>16),y=I+(T^S^_)+w[2]+3299628645&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(T^(I|~S))+w[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~T))+w[7]+1126891415&4294967295,S=_+(y<<10&4294967295|y>>>22),y=T+(_^(S|~I))+w[14]+2878612391&4294967295,T=S+(y<<15&4294967295|y>>>17),y=I+(S^(T|~_))+w[5]+4237533241&4294967295,I=T+(y<<21&4294967295|y>>>11),y=_+(T^(I|~S))+w[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~T))+w[3]+2399980690&4294967295,S=_+(y<<10&4294967295|y>>>22),y=T+(_^(S|~I))+w[10]+4293915773&4294967295,T=S+(y<<15&4294967295|y>>>17),y=I+(S^(T|~_))+w[1]+2240044497&4294967295,I=T+(y<<21&4294967295|y>>>11),y=_+(T^(I|~S))+w[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~T))+w[15]+4264355552&4294967295,S=_+(y<<10&4294967295|y>>>22),y=T+(_^(S|~I))+w[6]+2734768916&4294967295,T=S+(y<<15&4294967295|y>>>17),y=I+(S^(T|~_))+w[13]+1309151649&4294967295,I=T+(y<<21&4294967295|y>>>11),y=_+(T^(I|~S))+w[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=S+(I^(_|~T))+w[11]+3174756917&4294967295,S=_+(y<<10&4294967295|y>>>22),y=T+(_^(S|~I))+w[2]+718787259&4294967295,T=S+(y<<15&4294967295|y>>>17),y=I+(S^(T|~_))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+S&4294967295}n.prototype.v=function(E,_){_===void 0&&(_=E.length);const I=_-this.blockSize,w=this.C;let T=this.h,S=0;for(;S<_;){if(T==0)for(;S<=I;)s(this,E,S),S+=this.blockSize;if(typeof E=="string"){for(;S<_;)if(w[T++]=E.charCodeAt(S++),T==this.blockSize){s(this,w),T=0;break}}else for(;S<_;)if(w[T++]=E[S++],T==this.blockSize){s(this,w),T=0;break}}this.h=T,this.o+=_},n.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var I=E.length-8;I<E.length;++I)E[I]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,I=0;I<4;++I)for(let w=0;w<32;w+=8)E[_++]=this.g[I]>>>w&255;return E};function i(E,_){var I=u;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=_(E)}function o(E,_){this.h=_;const I=[];let w=!0;for(let T=E.length-1;T>=0;T--){const S=E[T]|0;w&&S==_||(I[T]=S,w=!1)}this.g=I}var u={};function c(E){return-128<=E&&E<128?i(E,function(_){return new o([_|0],_<0?-1:0)}):new o([E|0],E<0?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return x(h(-E));const _=[];let I=1;for(let w=0;E>=I;w++)_[w]=E/I|0,I*=4294967296;return new o(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return x(f(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=h(Math.pow(_,8));let w=m;for(let S=0;S<E.length;S+=8){var T=Math.min(8,E.length-S);const y=parseInt(E.substring(S,S+T),_);T<8?(T=h(Math.pow(_,T)),w=w.j(T).add(h(y))):(w=w.j(I),w=w.add(h(y)))}return w}var m=c(0),p=c(1),v=c(16777216);r=o.prototype,r.m=function(){if(N(this))return-x(this).m();let E=0,_=1;for(let I=0;I<this.g.length;I++){const w=this.i(I);E+=(w>=0?w:4294967296+w)*_,_*=4294967296}return E},r.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(N(this))return"-"+x(this).toString(E);const _=h(Math.pow(E,6));var I=this;let w="";for(;;){const T=Z(I,_).g;I=B(I,T.j(_));let S=((I.g.length>0?I.g[0]:I.h)>>>0).toString(E);if(I=T,C(I))return S+w;for(;S.length<6;)S="0"+S;w=S+w}},r.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function N(E){return E.h==-1}r.l=function(E){return E=B(this,E),N(E)?-1:C(E)?0:1};function x(E){const _=E.g.length,I=[];for(let w=0;w<_;w++)I[w]=~E.g[w];return new o(I,~E.h).add(p)}r.abs=function(){return N(this)?x(this):this},r.add=function(E){const _=Math.max(this.g.length,E.g.length),I=[];let w=0;for(let T=0;T<=_;T++){let S=w+(this.i(T)&65535)+(E.i(T)&65535),y=(S>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);w=y>>>16,S&=65535,y&=65535,I[T]=y<<16|S}return new o(I,I[I.length-1]&-2147483648?-1:0)};function B(E,_){return E.add(x(_))}r.j=function(E){if(C(this)||C(E))return m;if(N(this))return N(E)?x(this).j(x(E)):x(x(this).j(E));if(N(E))return x(this.j(x(E)));if(this.l(v)<0&&E.l(v)<0)return h(this.m()*E.m());const _=this.g.length+E.g.length,I=[];for(var w=0;w<2*_;w++)I[w]=0;for(w=0;w<this.g.length;w++)for(let T=0;T<E.g.length;T++){const S=this.i(w)>>>16,y=this.i(w)&65535,Oe=E.i(T)>>>16,Ht=E.i(T)&65535;I[2*w+2*T]+=y*Ht,j(I,2*w+2*T),I[2*w+2*T+1]+=S*Ht,j(I,2*w+2*T+1),I[2*w+2*T+1]+=y*Oe,j(I,2*w+2*T+1),I[2*w+2*T+2]+=S*Oe,j(I,2*w+2*T+2)}for(E=0;E<_;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=_;E<2*_;E++)I[E]=0;return new o(I,0)};function j(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function q(E,_){this.g=E,this.h=_}function Z(E,_){if(C(_))throw Error("division by zero");if(C(E))return new q(m,m);if(N(E))return _=Z(x(E),_),new q(x(_.g),x(_.h));if(N(_))return _=Z(E,x(_)),new q(x(_.g),_.h);if(E.g.length>30){if(N(E)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var I=p,w=_;w.l(E)<=0;)I=Y(I),w=Y(w);var T=X(I,1),S=X(w,1);for(w=X(w,2),I=X(I,2);!C(w);){var y=S.add(w);y.l(E)<=0&&(T=T.add(I),S=y),w=X(w,1),I=X(I,1)}return _=B(E,T.j(_)),new q(T,_)}for(T=m;E.l(_)>=0;){for(I=Math.max(1,Math.floor(E.m()/_.m())),w=Math.ceil(Math.log(I)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),S=h(I),y=S.j(_);N(y)||y.l(E)>0;)I-=w,S=h(I),y=S.j(_);C(S)&&(S=p),T=T.add(S),E=B(E,y)}return new q(T,E)}r.B=function(E){return Z(this,E).h},r.and=function(E){const _=Math.max(this.g.length,E.g.length),I=[];for(let w=0;w<_;w++)I[w]=this.i(w)&E.i(w);return new o(I,this.h&E.h)},r.or=function(E){const _=Math.max(this.g.length,E.g.length),I=[];for(let w=0;w<_;w++)I[w]=this.i(w)|E.i(w);return new o(I,this.h|E.h)},r.xor=function(E){const _=Math.max(this.g.length,E.g.length),I=[];for(let w=0;w<_;w++)I[w]=this.i(w)^E.i(w);return new o(I,this.h^E.h)};function Y(E){const _=E.g.length+1,I=[];for(let w=0;w<_;w++)I[w]=E.i(w)<<1|E.i(w-1)>>>31;return new o(I,E.h)}function X(E,_){const I=_>>5;_%=32;const w=E.g.length-I,T=[];for(let S=0;S<w;S++)T[S]=_>0?E.i(S+I)>>>_|E.i(S+I+1)<<32-_:E.i(S+I);return new o(T,E.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,xh=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Dt=o}).apply(typeof Qc<"u"?Qc:typeof self<"u"?self:typeof window<"u"?window:{});var Xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nh,Wr,kh,oi,Jo,Mh,Oh,Fh;(function(){var r,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xs=="object"&&Xs];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(a,l){if(l)e:{var d=n;a=a.split(".");for(var g=0;g<a.length-1;g++){var b=a[g];if(!(b in d))break e;d=d[b]}a=a[a.length-1],g=d[a],l=l(g),l!=g&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(l){var d=[],g;for(g in l)Object.prototype.hasOwnProperty.call(l,g)&&d.push([g,l[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function u(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function c(a,l,d){return a.call.apply(a.bind,arguments)}function h(a,l,d){return h=c,h.apply(null,arguments)}function f(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function m(a,l){function d(){}d.prototype=l.prototype,a.Z=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,b,P){for(var O=Array(arguments.length-2),G=2;G<arguments.length;G++)O[G-2]=arguments[G];return l.prototype[b].apply(g,O)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function v(a){const l=a.length;if(l>0){const d=Array(l);for(let g=0;g<l;g++)d[g]=a[g];return d}return[]}function C(a,l){for(let g=1;g<arguments.length;g++){const b=arguments[g];var d=typeof b;if(d=d!="object"?d:b?Array.isArray(b)?"array":d:"null",d=="array"||d=="object"&&typeof b.length=="number"){d=a.length||0;const P=b.length||0;a.length=d+P;for(let O=0;O<P;O++)a[d+O]=b[O]}else a.push(b)}}class N{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function x(a){o.setTimeout(()=>{throw a},0)}function B(){var a=E;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class j{constructor(){this.h=this.g=null}add(l,d){const g=q.get();g.set(l,d),this.h?this.h.next=g:this.g=g,this.h=g}}var q=new N(()=>new Z,a=>a.reset());class Z{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,X=!1,E=new j,_=()=>{const a=Promise.resolve(void 0);Y=()=>{a.then(I)}};function I(){for(var a;a=B();){try{a.h.call(a.g)}catch(d){x(d)}var l=q;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}X=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,l),o.removeEventListener("test",d,l)}catch{}return a})();function y(a){return/^[\s\xa0]*$/.test(a)}function Oe(a,l){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}m(Oe,T),Oe.prototype.init=function(a,l){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Oe.Z.h.call(this)},Oe.prototype.h=function(){Oe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ht="closure_listenable_"+(Math.random()*1e6|0),Dm=0;function xm(a,l,d,g,b){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!g,this.ha=b,this.key=++Dm,this.da=this.fa=!1}function Fs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ls(a,l,d){for(const g in a)l.call(d,a[g],g,a)}function Nm(a,l){for(const d in a)l.call(void 0,a[d],d,a)}function Ou(a){const l={};for(const d in a)l[d]=a[d];return l}const Fu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lu(a,l){let d,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(d in g)a[d]=g[d];for(let P=0;P<Fu.length;P++)d=Fu[P],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Bs(a){this.src=a,this.g={},this.h=0}Bs.prototype.add=function(a,l,d,g,b){const P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);const O=uo(a,l,g,b);return O>-1?(l=a[O],d||(l.fa=!1)):(l=new xm(l,this.src,P,!!g,b),l.fa=d,a.push(l)),l};function ao(a,l){const d=l.type;if(d in a.g){var g=a.g[d],b=Array.prototype.indexOf.call(g,l,void 0),P;(P=b>=0)&&Array.prototype.splice.call(g,b,1),P&&(Fs(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function uo(a,l,d,g){for(let b=0;b<a.length;++b){const P=a[b];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==g)return b}return-1}var co="closure_lm_"+(Math.random()*1e6|0),lo={};function Bu(a,l,d,g,b){if(Array.isArray(l)){for(let P=0;P<l.length;P++)Bu(a,l[P],d,g,b);return null}return d=ju(d),a&&a[Ht]?a.J(l,d,u(g)?!!g.capture:!1,b):km(a,l,d,!1,g,b)}function km(a,l,d,g,b,P){if(!l)throw Error("Invalid event type");const O=u(b)?!!b.capture:!!b;let G=fo(a);if(G||(a[co]=G=new Bs(a)),d=G.add(l,d,g,O,P),d.proxy)return d;if(g=Mm(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)S||(b=O),b===void 0&&(b=!1),a.addEventListener(l.toString(),g,b);else if(a.attachEvent)a.attachEvent(qu(l.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Mm(){function a(d){return l.call(a.src,a.listener,d)}const l=Om;return a}function Uu(a,l,d,g,b){if(Array.isArray(l))for(var P=0;P<l.length;P++)Uu(a,l[P],d,g,b);else g=u(g)?!!g.capture:!!g,d=ju(d),a&&a[Ht]?(a=a.i,P=String(l).toString(),P in a.g&&(l=a.g[P],d=uo(l,d,g,b),d>-1&&(Fs(l[d]),Array.prototype.splice.call(l,d,1),l.length==0&&(delete a.g[P],a.h--)))):a&&(a=fo(a))&&(l=a.g[l.toString()],a=-1,l&&(a=uo(l,d,g,b)),(d=a>-1?l[a]:null)&&ho(d))}function ho(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[Ht])ao(l.i,a);else{var d=a.type,g=a.proxy;l.removeEventListener?l.removeEventListener(d,g,a.capture):l.detachEvent?l.detachEvent(qu(d),g):l.addListener&&l.removeListener&&l.removeListener(g),(d=fo(l))?(ao(d,a),d.h==0&&(d.src=null,l[co]=null)):Fs(a)}}}function qu(a){return a in lo?lo[a]:lo[a]="on"+a}function Om(a,l){if(a.da)a=!0;else{l=new Oe(l,this);const d=a.listener,g=a.ha||a.src;a.fa&&ho(a),a=d.call(g,l)}return a}function fo(a){return a=a[co],a instanceof Bs?a:null}var mo="__closure_events_fn_"+(Math.random()*1e9>>>0);function ju(a){return typeof a=="function"?a:(a[mo]||(a[mo]=function(l){return a.handleEvent(l)}),a[mo])}function Ve(){w.call(this),this.i=new Bs(this),this.M=this,this.G=null}m(Ve,w),Ve.prototype[Ht]=!0,Ve.prototype.removeEventListener=function(a,l,d,g){Uu(this,a,l,d,g)};function ke(a,l){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=l.type||l,typeof l=="string")l=new T(l,a);else if(l instanceof T)l.target=l.target||a;else{var b=l;l=new T(g,a),Lu(l,b)}b=!0;let P,O;if(d)for(O=d.length-1;O>=0;O--)P=l.g=d[O],b=Us(P,g,!0,l)&&b;if(P=l.g=a,b=Us(P,g,!0,l)&&b,b=Us(P,g,!1,l)&&b,d)for(O=0;O<d.length;O++)P=l.g=d[O],b=Us(P,g,!1,l)&&b}Ve.prototype.N=function(){if(Ve.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const d=a.g[l];for(let g=0;g<d.length;g++)Fs(d[g]);delete a.g[l],a.h--}}this.G=null},Ve.prototype.J=function(a,l,d,g){return this.i.add(String(a),l,!1,d,g)},Ve.prototype.K=function(a,l,d,g){return this.i.add(String(a),l,!0,d,g)};function Us(a,l,d,g){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let b=!0;for(let P=0;P<l.length;++P){const O=l[P];if(O&&!O.da&&O.capture==d){const G=O.listener,Ie=O.ha||O.src;O.fa&&ao(a.i,O),b=G.call(Ie,g)!==!1&&b}}return b&&!g.defaultPrevented}function Fm(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function zu(a){a.g=Fm(()=>{a.g=null,a.i&&(a.i=!1,zu(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class Lm extends w{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:zu(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rr(a){w.call(this),this.h=a,this.g={}}m(Rr,w);var $u=[];function Gu(a){Ls(a.g,function(l,d){this.g.hasOwnProperty(d)&&ho(l)},a),a.g={}}Rr.prototype.N=function(){Rr.Z.N.call(this),Gu(this)},Rr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var go=o.JSON.stringify,Bm=o.JSON.parse,Um=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ku(){}function Qu(){}var Sr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function po(){T.call(this,"d")}m(po,T);function _o(){T.call(this,"c")}m(_o,T);var Jt={},Wu=null;function qs(){return Wu=Wu||new Ve}Jt.Ia="serverreachability";function Hu(a){T.call(this,Jt.Ia,a)}m(Hu,T);function Pr(a){const l=qs();ke(l,new Hu(l))}Jt.STAT_EVENT="statevent";function Ju(a,l){T.call(this,Jt.STAT_EVENT,a),this.stat=l}m(Ju,T);function Me(a){const l=qs();ke(l,new Ju(l,a))}Jt.Ja="timingevent";function Yu(a,l){T.call(this,Jt.Ja,a),this.size=l}m(Yu,T);function Vr(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function Cr(){this.g=!0}Cr.prototype.ua=function(){this.g=!1};function qm(a,l,d,g,b,P){a.info(function(){if(a.g)if(P){var O="",G=P.split("&");for(let ie=0;ie<G.length;ie++){var Ie=G[ie].split("=");if(Ie.length>1){const Ae=Ie[0];Ie=Ie[1];const Xe=Ae.split("_");O=Xe.length>=2&&Xe[1]=="type"?O+(Ae+"="+Ie+"&"):O+(Ae+"=redacted&")}}}else O=null;else O=P;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+l+`
`+d+`
`+O})}function jm(a,l,d,g,b,P,O){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+l+`
`+d+`
`+P+" "+O})}function Vn(a,l,d,g){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+$m(a,d)+(g?" "+g:"")})}function zm(a,l){a.info(function(){return"TIMEOUT: "+l})}Cr.prototype.info=function(){};function $m(a,l){if(!a.g)return l;if(!l)return null;try{const P=JSON.parse(l);if(P){for(a=0;a<P.length;a++)if(Array.isArray(P[a])){var d=P[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var b=g[0];if(b!="noop"&&b!="stop"&&b!="close")for(let O=1;O<g.length;O++)g[O]=""}}}}return go(P)}catch{return l}}var js={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Xu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Zu;function yo(){}m(yo,Ku),yo.prototype.g=function(){return new XMLHttpRequest},Zu=new yo;function Dr(a){return encodeURIComponent(String(a))}function Gm(a){var l=1;a=a.split(":");const d=[];for(;l>0&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function pt(a,l,d,g){this.j=a,this.i=l,this.l=d,this.S=g||1,this.V=new Rr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ec}function ec(){this.i=null,this.g="",this.h=!1}var tc={},Io={};function Eo(a,l,d){a.M=1,a.A=$s(Ye(l)),a.u=d,a.R=!0,nc(a,null)}function nc(a,l){a.F=Date.now(),zs(a),a.B=Ye(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),gc(d.i,"t",g),a.C=0,d=a.j.L,a.h=new ec,a.g=Nc(a.j,d?l:null,!a.u),a.P>0&&(a.O=new Lm(h(a.Y,a,a.g),a.P)),l=a.V,d=a.g,g=a.ba;var b="readystatechange";Array.isArray(b)||(b&&($u[0]=b.toString()),b=$u);for(let P=0;P<b.length;P++){const O=Bu(d,b[P],g||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=a.J?Ou(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),Pr(),qm(a.i,a.v,a.B,a.l,a.S,a.u)}pt.prototype.ba=function(a){a=a.target;const l=this.O;l&&It(a)==3?l.j():this.Y(a)},pt.prototype.Y=function(a){try{if(a==this.g)e:{const G=It(this.g),Ie=this.g.ya(),ie=this.g.ca();if(!(G<3)&&(G!=3||this.g&&(this.h.h||this.g.la()||wc(this.g)))){this.K||G!=4||Ie==7||(Ie==8||ie<=0?Pr(3):Pr(2)),To(this);var l=this.g.ca();this.X=l;var d=Km(this);if(this.o=l==200,jm(this.i,this.v,this.B,this.l,this.S,G,l),this.o){if(this.U&&!this.L){t:{if(this.g){var g,b=this.g;if((g=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(g)){var P=g;break t}}P=null}if(a=P)Vn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,wo(this,a);else{this.o=!1,this.m=3,Me(12),Yt(this),xr(this);break e}}if(this.R){a=!0;let Ae;for(;!this.K&&this.C<d.length;)if(Ae=Qm(this,d),Ae==Io){G==4&&(this.m=4,Me(14),a=!1),Vn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ae==tc){this.m=4,Me(15),Vn(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Vn(this.i,this.l,Ae,null),wo(this,Ae);if(rc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||d.length!=0||this.h.h||(this.m=1,Me(16),a=!1),this.o=this.o&&a,!a)Vn(this.i,this.l,d,"[Invalid Chunked Response]"),Yt(this),xr(this);else if(d.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Co(O),O.P=!0,Me(11))}}else Vn(this.i,this.l,d,null),wo(this,d);G==4&&Yt(this),this.o&&!this.K&&(G==4?Vc(this.j,this):(this.o=!1,zs(this)))}else ag(this.g),l==400&&d.indexOf("Unknown SID")>0?(this.m=3,Me(12)):(this.m=0,Me(13)),Yt(this),xr(this)}}}catch{}finally{}};function Km(a){if(!rc(a))return a.g.la();const l=wc(a.g);if(l==="")return"";let d="";const g=l.length,b=It(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Yt(a),xr(a),"";a.h.i=new o.TextDecoder}for(let P=0;P<g;P++)a.h.h=!0,d+=a.h.i.decode(l[P],{stream:!(b&&P==g-1)});return l.length=0,a.h.g+=d,a.C=0,a.h.g}function rc(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Qm(a,l){var d=a.C,g=l.indexOf(`
`,d);return g==-1?Io:(d=Number(l.substring(d,g)),isNaN(d)?tc:(g+=1,g+d>l.length?Io:(l=l.slice(g,g+d),a.C=g+d,l)))}pt.prototype.cancel=function(){this.K=!0,Yt(this)};function zs(a){a.T=Date.now()+a.H,sc(a,a.H)}function sc(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Vr(h(a.aa,a),l)}function To(a){a.D&&(o.clearTimeout(a.D),a.D=null)}pt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(zm(this.i,this.B),this.M!=2&&(Pr(),Me(17)),Yt(this),this.m=2,xr(this)):sc(this,this.T-a)};function xr(a){a.j.I==0||a.K||Vc(a.j,a)}function Yt(a){To(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,Gu(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function wo(a,l){try{var d=a.j;if(d.I!=0&&(d.g==a||Ao(d.h,a))){if(!a.L&&Ao(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(l)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Hs(d),Qs(d);else break e;Vo(d),Me(18)}}else d.xa=b[1],0<d.xa-d.K&&b[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Vr(h(d.Va,d),6e3));ac(d.h)<=1&&d.ta&&(d.ta=void 0)}else Zt(d,11)}else if((a.L||d.g==a)&&Hs(d),!y(l))for(b=d.Ba.g.parse(l),l=0;l<b.length;l++){let ie=b[l];const Ae=ie[0];if(!(Ae<=d.K))if(d.K=Ae,ie=ie[1],d.I==2)if(ie[0]=="c"){d.M=ie[1],d.ba=ie[2];const Xe=ie[3];Xe!=null&&(d.ka=Xe,d.j.info("VER="+d.ka));const en=ie[4];en!=null&&(d.za=en,d.j.info("SVER="+d.za));const Et=ie[5];Et!=null&&typeof Et=="number"&&Et>0&&(g=1.5*Et,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Tt=a.g;if(Tt){const Ys=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ys){var P=g.h;P.g||Ys.indexOf("spdy")==-1&&Ys.indexOf("quic")==-1&&Ys.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(vo(P,P.h),P.h=null))}if(g.G){const Do=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;Do&&(g.wa=Do,ae(g.J,g.G,Do))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var O=a;if(g.na=xc(g,g.L?g.ba:null,g.W),O.L){uc(g.h,O);var G=O,Ie=g.O;Ie&&(G.H=Ie),G.D&&(To(G),zs(G)),g.g=O}else Sc(g);d.i.length>0&&Ws(d)}else ie[0]!="stop"&&ie[0]!="close"||Zt(d,7);else d.I==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Zt(d,7):Po(d):ie[0]!="noop"&&d.l&&d.l.qa(ie),d.A=0)}}Pr(4)}catch{}}var Wm=class{constructor(a,l){this.g=a,this.map=l}};function ic(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function oc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ac(a){return a.h?1:a.g?a.g.size:0}function Ao(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function vo(a,l){a.g?a.g.add(l):a.h=l}function uc(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}ic.prototype.cancel=function(){if(this.i=cc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function cc(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const d of a.g.values())l=l.concat(d.G);return l}return v(a.i)}var lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hm(a,l){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let b,P=null;g>=0?(b=a[d].substring(0,g),P=a[d].substring(g+1)):b=a[d],l(b,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function _t(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof _t?(this.l=a.l,Nr(this,a.j),this.o=a.o,this.g=a.g,kr(this,a.u),this.h=a.h,bo(this,pc(a.i)),this.m=a.m):a&&(l=String(a).match(lc))?(this.l=!1,Nr(this,l[1]||"",!0),this.o=Mr(l[2]||""),this.g=Mr(l[3]||"",!0),kr(this,l[4]),this.h=Mr(l[5]||"",!0),bo(this,l[6]||"",!0),this.m=Mr(l[7]||"")):(this.l=!1,this.i=new Fr(null,this.l))}_t.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(Or(l,hc,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(Or(l,hc,!0),"@"),a.push(Dr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Or(d,d.charAt(0)=="/"?Xm:Ym,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Or(d,eg)),a.join("")},_t.prototype.resolve=function(a){const l=Ye(this);let d=!!a.j;d?Nr(l,a.j):d=!!a.o,d?l.o=a.o:d=!!a.g,d?l.g=a.g:d=a.u!=null;var g=a.h;if(d)kr(l,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var b=l.h.lastIndexOf("/");b!=-1&&(g=l.h.slice(0,b+1)+g)}if(b=g,b==".."||b==".")g="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){g=b.lastIndexOf("/",0)==0,b=b.split("/");const P=[];for(let O=0;O<b.length;){const G=b[O++];G=="."?g&&O==b.length&&P.push(""):G==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),g&&O==b.length&&P.push("")):(P.push(G),g=!0)}g=P.join("/")}else g=b}return d?l.h=g:d=a.i.toString()!=="",d?bo(l,pc(a.i)):d=!!a.m,d&&(l.m=a.m),l};function Ye(a){return new _t(a)}function Nr(a,l,d){a.j=d?Mr(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function kr(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function bo(a,l,d){l instanceof Fr?(a.i=l,tg(a.i,a.l)):(d||(l=Or(l,Zm)),a.i=new Fr(l,a.l))}function ae(a,l,d){a.i.set(l,d)}function $s(a){return ae(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Mr(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Or(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,Jm),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Jm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var hc=/[#\/\?@]/g,Ym=/[#\?:]/g,Xm=/[#\?]/g,Zm=/[#\?@]/g,eg=/#/g;function Fr(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function Xt(a){a.g||(a.g=new Map,a.h=0,a.i&&Hm(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=Fr.prototype,r.add=function(a,l){Xt(this),this.i=null,a=Cn(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function dc(a,l){Xt(a),l=Cn(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function fc(a,l){return Xt(a),l=Cn(a,l),a.g.has(l)}r.forEach=function(a,l){Xt(this),this.g.forEach(function(d,g){d.forEach(function(b){a.call(l,b,g,this)},this)},this)};function mc(a,l){Xt(a);let d=[];if(typeof l=="string")fc(a,l)&&(d=d.concat(a.g.get(Cn(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)d=d.concat(a[l]);return d}r.set=function(a,l){return Xt(this),this.i=null,a=Cn(this,a),fc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},r.get=function(a,l){return a?(a=mc(this,a),a.length>0?String(a[0]):l):l};function gc(a,l,d){dc(a,l),d.length>0&&(a.i=null,a.g.set(Cn(a,l),v(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let g=0;g<l.length;g++){var d=l[g];const b=Dr(d);d=mc(this,d);for(let P=0;P<d.length;P++){let O=b;d[P]!==""&&(O+="="+Dr(d[P])),a.push(O)}}return this.i=a.join("&")};function pc(a){const l=new Fr;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function Cn(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function tg(a,l){l&&!a.j&&(Xt(a),a.i=null,a.g.forEach(function(d,g){const b=g.toLowerCase();g!=b&&(dc(this,g),gc(this,b,d))},a)),a.j=l}function ng(a,l){const d=new Cr;if(o.Image){const g=new Image;g.onload=f(yt,d,"TestLoadImage: loaded",!0,l,g),g.onerror=f(yt,d,"TestLoadImage: error",!1,l,g),g.onabort=f(yt,d,"TestLoadImage: abort",!1,l,g),g.ontimeout=f(yt,d,"TestLoadImage: timeout",!1,l,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else l(!1)}function rg(a,l){const d=new Cr,g=new AbortController,b=setTimeout(()=>{g.abort(),yt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:g.signal}).then(P=>{clearTimeout(b),P.ok?yt(d,"TestPingServer: ok",!0,l):yt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),yt(d,"TestPingServer: error",!1,l)})}function yt(a,l,d,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(d)}catch{}}function sg(){this.g=new Um}function Ro(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Ro,Ku),Ro.prototype.g=function(){return new Gs(this.i,this.h)};function Gs(a,l){Ve.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Gs,Ve),r=Gs.prototype,r.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,Br(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Lr(this)),this.readyState=0},r.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Br(this)),this.g&&(this.readyState=3,Br(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;_c(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function _c(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}r.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?Lr(this):Br(this),this.readyState==3&&_c(this)}},r.Oa=function(a){this.g&&(this.response=this.responseText=a,Lr(this))},r.Na=function(a){this.g&&(this.response=a,Lr(this))},r.ga=function(){this.g&&Lr(this)};function Lr(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Br(a)}r.setRequestHeader=function(a,l){this.A.append(a,l)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function Br(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function yc(a){let l="";return Ls(a,function(d,g){l+=g,l+=":",l+=d,l+=`\r
`}),l}function So(a,l,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=yc(d),typeof a=="string"?d!=null&&Dr(d):ae(a,l,d))}function me(a){Ve.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(me,Ve);var ig=/^https?$/i,og=["POST","PUT"];r=me.prototype,r.Fa=function(a){this.H=a},r.ea=function(a,l,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Zu.g(),this.g.onreadystatechange=p(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(P){Ic(this,P);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)d.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())d.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(og,l,void 0)>=0)||g||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,O]of d)this.g.setRequestHeader(P,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(P){Ic(this,P)}};function Ic(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,Ec(a),Ks(a)}function Ec(a){a.A||(a.A=!0,ke(a,"complete"),ke(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ke(this,"complete"),ke(this,"abort"),Ks(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ks(this,!0)),me.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Tc(this):this.Xa())},r.Xa=function(){Tc(this)};function Tc(a){if(a.h&&typeof i<"u"){if(a.v&&It(a)==4)setTimeout(a.Ca.bind(a),0);else if(ke(a,"readystatechange"),It(a)==4){a.h=!1;try{const P=a.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var g;if(g=P===0){let O=String(a.D).match(lc)[1]||null;!O&&o.self&&o.self.location&&(O=o.self.location.protocol.slice(0,-1)),g=!ig.test(O?O.toLowerCase():"")}d=g}if(d)ke(a,"complete"),ke(a,"success");else{a.o=6;try{var b=It(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",Ec(a)}}finally{Ks(a)}}}}function Ks(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,l||ke(a,"ready");try{d.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function It(a){return a.g?a.g.readyState:0}r.ca=function(){try{return It(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),Bm(l)}};function wc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ag(a){const l={};a=(a.g&&It(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var d=Gm(a[g]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=l[b]||[];l[b]=P,P.push(d)}Nm(l,function(g){return g.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ur(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function Ac(a){this.za=0,this.i=[],this.j=new Cr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ur("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ur("baseRetryDelayMs",5e3,a),this.Za=Ur("retryDelaySeedMs",1e4,a),this.Ta=Ur("forwardChannelMaxRetries",2,a),this.va=Ur("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ic(a&&a.concurrentRequestLimit),this.Ba=new sg,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Ac.prototype,r.ka=8,r.I=1,r.connect=function(a,l,d,g){Me(0),this.W=a,this.H=l||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=xc(this,null,this.W),Ws(this)};function Po(a){if(vc(a),a.I==3){var l=a.V++,d=Ye(a.J);if(ae(d,"SID",a.M),ae(d,"RID",l),ae(d,"TYPE","terminate"),qr(a,d),l=new pt(a,a.j,l),l.M=2,l.A=$s(Ye(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=l.A,d=!0),d||(l.g=Nc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),zs(l)}Dc(a)}function Qs(a){a.g&&(Co(a),a.g.cancel(),a.g=null)}function vc(a){Qs(a),a.v&&(o.clearTimeout(a.v),a.v=null),Hs(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ws(a){if(!oc(a.h)&&!a.m){a.m=!0;var l=a.Ea;Y||_(),X||(Y(),X=!0),E.add(l,a),a.D=0}}function ug(a,l){return ac(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Vr(h(a.Ea,a,l),Cc(a,a.D)),a.D++,!0)}r.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new pt(this,this.j,a);let P=this.o;if(this.U&&(P?(P=Ou(P),Lu(P,this.U)):P=this.U),this.u!==null||this.R||(b.J=P,P=null),this.S)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(l+=g,l>4096){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Rc(this,b,l),d=Ye(this.J),ae(d,"RID",a),ae(d,"CVER",22),this.G&&ae(d,"X-HTTP-Session-Id",this.G),qr(this,d),P&&(this.R?l="headers="+Dr(yc(P))+"&"+l:this.u&&So(d,this.u,P)),vo(this.h,b),this.Ra&&ae(d,"TYPE","init"),this.S?(ae(d,"$req",l),ae(d,"SID","null"),b.U=!0,Eo(b,d,null)):Eo(b,d,l),this.I=2}}else this.I==3&&(a?bc(this,a):this.i.length==0||oc(this.h)||bc(this))};function bc(a,l){var d;l?d=l.l:d=a.V++;const g=Ye(a.J);ae(g,"SID",a.M),ae(g,"RID",d),ae(g,"AID",a.K),qr(a,g),a.u&&a.o&&So(g,a.u,a.o),d=new pt(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),l&&(a.i=l.G.concat(a.i)),l=Rc(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),vo(a.h,d),Eo(d,g,l)}function qr(a,l){a.H&&Ls(a.H,function(d,g){ae(l,g,d)}),a.l&&Ls({},function(d,g){ae(l,g,d)})}function Rc(a,l,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var b=a.i;let G=-1;for(;;){const Ie=["count="+d];G==-1?d>0?(G=b[0].g,Ie.push("ofs="+G)):G=0:Ie.push("ofs="+G);let ie=!0;for(let Ae=0;Ae<d;Ae++){var P=b[Ae].g;const Xe=b[Ae].map;if(P-=G,P<0)G=Math.max(0,b[Ae].g-100),ie=!1;else try{P="req"+P+"_"||"";try{var O=Xe instanceof Map?Xe:Object.entries(Xe);for(const[en,Et]of O){let Tt=Et;u(Et)&&(Tt=go(Et)),Ie.push(P+en+"="+encodeURIComponent(Tt))}}catch(en){throw Ie.push(P+"type="+encodeURIComponent("_badmap")),en}}catch{g&&g(Xe)}}if(ie){O=Ie.join("&");break e}}O=void 0}return a=a.i.splice(0,d),l.G=a,O}function Sc(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;Y||_(),X||(Y(),X=!0),E.add(l,a),a.A=0}}function Vo(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Vr(h(a.Da,a),Cc(a,a.A)),a.A++,!0)}r.Da=function(){if(this.v=null,Pc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Vr(h(this.Wa,this),a)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Me(10),Qs(this),Pc(this))};function Co(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Pc(a){a.g=new pt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=Ye(a.na);ae(l,"RID","rpc"),ae(l,"SID",a.M),ae(l,"AID",a.K),ae(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&ae(l,"TO",a.ia),ae(l,"TYPE","xmlhttp"),qr(a,l),a.u&&a.o&&So(l,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=$s(Ye(l)),d.u=null,d.R=!0,nc(d,a)}r.Va=function(){this.C!=null&&(this.C=null,Qs(this),Vo(this),Me(19))};function Hs(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Vc(a,l){var d=null;if(a.g==l){Hs(a),Co(a),a.g=null;var g=2}else if(Ao(a.h,l))d=l.G,uc(a.h,l),g=1;else return;if(a.I!=0){if(l.o)if(g==1){d=l.u?l.u.length:0,l=Date.now()-l.F;var b=a.D;g=qs(),ke(g,new Yu(g,d)),Ws(a)}else Sc(a);else if(b=l.m,b==3||b==0&&l.X>0||!(g==1&&ug(a,l)||g==2&&Vo(a)))switch(d&&d.length>0&&(l=a.h,l.i=l.i.concat(d)),b){case 1:Zt(a,5);break;case 4:Zt(a,10);break;case 3:Zt(a,6);break;default:Zt(a,2)}}}function Cc(a,l){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*l}function Zt(a,l){if(a.j.info("Error code "+l),l==2){var d=h(a.bb,a),g=a.Ua;const b=!g;g=new _t(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Nr(g,"https"),$s(g),b?ng(g.toString(),d):rg(g.toString(),d)}else Me(2);a.I=0,a.l&&a.l.pa(l),Dc(a),vc(a)}r.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function Dc(a){if(a.I=0,a.ja=[],a.l){const l=cc(a.h);(l.length!=0||a.i.length!=0)&&(C(a.ja,l),C(a.ja,a.i),a.h.i.length=0,v(a.i),a.i.length=0),a.l.oa()}}function xc(a,l,d){var g=d instanceof _t?Ye(d):new _t(d);if(g.g!="")l&&(g.g=l+"."+g.g),kr(g,g.u);else{var b=o.location;g=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;const P=new _t(null);g&&Nr(P,g),l&&(P.g=l),b&&kr(P,b),d&&(P.h=d),g=P}return d=a.G,l=a.wa,d&&l&&ae(g,d,l),ae(g,"VER",a.ka),qr(a,g),g}function Nc(a,l,d){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new me(new Ro({ab:d})):new me(a.ma),l.Fa(a.L),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function kc(){}r=kc.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Js(){}Js.prototype.g=function(a,l){return new $e(a,l)};function $e(a,l){Ve.call(this),this.g=new Ac(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!y(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!y(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new Dn(this)}m($e,Ve),$e.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){Po(this.g)},$e.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=go(a),a=d);l.i.push(new Wm(l.Ya++,a)),l.I==3&&Ws(l)},$e.prototype.N=function(){this.g.l=null,delete this.j,Po(this.g),delete this.g,$e.Z.N.call(this)};function Mc(a){po.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}m(Mc,po);function Oc(){_o.call(this),this.status=1}m(Oc,_o);function Dn(a){this.g=a}m(Dn,kc),Dn.prototype.ra=function(){ke(this.g,"a")},Dn.prototype.qa=function(a){ke(this.g,new Mc(a))},Dn.prototype.pa=function(a){ke(this.g,new Oc)},Dn.prototype.oa=function(){ke(this.g,"b")},Js.prototype.createWebChannel=Js.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,Fh=function(){return new Js},Oh=function(){return qs()},Mh=Jt,Jo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},js.NO_ERROR=0,js.TIMEOUT=8,js.HTTP_ERROR=6,oi=js,Xu.COMPLETE="complete",kh=Xu,Qu.EventType=Sr,Sr.OPEN="a",Sr.CLOSE="b",Sr.ERROR="c",Sr.MESSAGE="d",Ve.prototype.listen=Ve.prototype.J,Wr=Qu,me.prototype.listenOnce=me.prototype.K,me.prototype.getLastError=me.prototype.Ha,me.prototype.getLastErrorCode=me.prototype.ya,me.prototype.getStatus=me.prototype.ca,me.prototype.getResponseJson=me.prototype.La,me.prototype.getResponseText=me.prototype.la,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Fa,Nh=me}).apply(typeof Xs<"u"?Xs:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mr="12.11.0";function Up(r){mr=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Sh("@firebase/firestore");function Ln(){return kt.logLevel}function qp(r){kt.setLogLevel(r)}function D(r,...e){if(kt.logLevel<=J.DEBUG){const t=e.map(Pa);kt.debug(`Firestore (${mr}): ${r}`,...t)}}function ge(r,...e){if(kt.logLevel<=J.ERROR){const t=e.map(Pa);kt.error(`Firestore (${mr}): ${r}`,...t)}}function ze(r,...e){if(kt.logLevel<=J.WARN){const t=e.map(Pa);kt.warn(`Firestore (${mr}): ${r}`,...t)}}function Pa(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Lh(r,n,t)}function Lh(r,e,t){let n=`FIRESTORE (${mr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw ge(n),new Error(n)}function L(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||Lh(e,s,n)}function jp(r,e){r||F(57014,e)}function M(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends fr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Uh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(be.UNAUTHENTICATED)))}shutdown(){}}class zp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class $p{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){L(this.o===void 0,42304);let n=this.i;const s=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let i=new Se;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Se,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},u=c=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>u(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Se)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string",31837,{l:n}),new Bh(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return L(e===null||typeof e=="string",2055,{h:e}),new be(e)}}class Gp{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=be.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Kp{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new Gp(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(be.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Yo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qp{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vp(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){L(this.o===void 0,3512);const n=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>n(i)))};const s=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Yo(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(L(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Yo(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class Wp{getToken(){return Promise.resolve(new Yo(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Hp(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function z(r,e){return r<e?-1:r>e?1:0}function Xo(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return Fo(s)===Fo(i)?z(s,i):Fo(s)?1:-1}return z(r.length,e.length)}const Jp=55296,Yp=57343;function Fo(r){const e=r.charCodeAt(0);return e>=Jp&&e<=Yp}function Kn(r,e,t){return r.length===e.length&&r.every(((n,s)=>t(n,e[s])))}function qh(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="__name__";class Ze{constructor(e,t,n){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&F(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ze?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=Ze.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return z(e.length,t.length)}static compareSegments(e,t){const n=Ze.isNumericId(e),s=Ze.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?Ze.extractNumericId(e).compare(Ze.extractNumericId(t)):Xo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dt.fromString(e.substring(4,e.length-2))}}class K extends Ze{construct(e,t,n){return new K(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new V(R.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((s=>s.length>0)))}return new K(t)}static emptyPath(){return new K([])}}const Xp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ce extends Ze{construct(e,t,n){return new ce(e,t,n)}static isValidIdentifier(e){return Xp.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ce.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zo}static keyField(){return new ce([Zo])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new V(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new V(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,s+=2}else u==="`"?(o=!o,s++):u!=="."||o?(n+=u,s++):(i(),s++)}if(i(),o)throw new V(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ce(t)}static emptyPath(){return new ce([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.path=e}static fromPath(e){return new k(K.fromString(e))}static fromName(e){return new k(K.fromString(e).popFirst(5))}static empty(){return new k(K.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&K.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return K.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new k(new K(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(r,e,t){if(!t)throw new V(R.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function jh(r,e,t,n){if(e===!0&&n===!0)throw new V(R.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Wc(r){if(!k.isDocumentKey(r))throw new V(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Hc(r){if(k.isDocumentKey(r))throw new V(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function zh(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Fi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":F(12329,{type:typeof r})}function Q(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new V(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Fi(r);throw new V(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function $h(r,e){if(e<=0)throw new V(R.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(r,e){const t={typeString:r};return e&&(t.value=e),t}function An(r,e){if(!zh(r))throw new V(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new V(R.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=-62135596800,Yc=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Yc);return new ee(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Jc)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yc}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(An(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Jc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:ye("string",ee._jsonSchemaVersion),seconds:ye("number"),nanoseconds:ye("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new ee(0,0))}static max(){return new U(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=-1;class Wn{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function ea(r){return r.fields.find((e=>e.kind===2))}function rn(r){return r.fields.filter((e=>e.kind!==2))}function Zp(r,e){let t=z(r.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let n=0;n<Math.min(r.fields.length,e.fields.length);++n)if(t=e_(r.fields[n],e.fields[n]),t!==0)return t;return z(r.fields.length,e.fields.length)}Wn.UNKNOWN_ID=-1;class hn{constructor(e,t){this.fieldPath=e,this.kind=t}}function e_(r,e){const t=ce.comparator(r.fieldPath,e.fieldPath);return t!==0?t:z(r.kind,e.kind)}class Hn{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Hn(0,Qe.min())}}function Gh(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=U.fromTimestamp(n===1e9?new ee(t+1,0):new ee(t,n));return new Qe(s,k.empty(),e)}function Kh(r){return new Qe(r.readTime,r.key,Qn)}class Qe{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Qe(U.min(),k.empty(),Qn)}static max(){return new Qe(U.max(),k.empty(),Qn)}}function Ca(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=k.comparator(r.documentKey,e.documentKey),t!==0?t:z(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(r){if(r.code!==R.FAILED_PRECONDITION||r.message!==Qh)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new A(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof A?t:A.resolve(t)}catch(t){return A.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):A.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):A.reject(t)}static resolve(e){return new A(((t,n)=>{t(e)}))}static reject(e){return new A(((t,n)=>{n(e)}))}static waitFor(e){return new A(((t,n)=>{let s=0,i=0,o=!1;e.forEach((u=>{++s,u.next((()=>{++i,o&&i===s&&t()}),(c=>n(c)))})),o=!0,i===s&&t()}))}static or(e){let t=A.resolve(!1);for(const n of e)t=t.next((s=>s?A.resolve(s):n()));return t}static forEach(e,t){const n=[];return e.forEach(((s,i)=>{n.push(t.call(this,s,i))})),this.waitFor(n)}static mapArray(e,t){return new A(((n,s)=>{const i=e.length,o=new Array(i);let u=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next((f=>{o[h]=f,++u,u===i&&n(o)}),(f=>s(f)))}}))}static doWhile(e,t){return new A(((n,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):n()};i()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="SimpleDb";class Li{static open(e,t,n,s){try{return new Li(t,e.transaction(s,n))}catch(i){throw new Zr(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Se,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Zr(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=Da(n.target.error);this.S.reject(new Zr(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(D(Ge,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new n_(t)}}class rt{static delete(e){return D(Ge,"Removing database:",e),on(Ih().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!vh())return!1;if(rt.F())return!0;const e=Gn(),t=rt.M(e),n=0<t&&t<10,s=Hh(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.N=n,this.B=null,rt.M(Gn())===12.2&&ge("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(D(Ge,"Opening database:",this.name),this.db=await new Promise(((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new Zr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new V(R.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new V(R.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Zr(e,o))},s.onupgradeneeded=i=>{D(Ge,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,s.transaction,i.oldVersion,this.version).next((()=>{D(Ge,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}K(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const u=Li.open(this.db,e,i?"readonly":"readwrite",n),c=s(u).next((h=>(u.C(),h))).catch((h=>(u.abort(h),A.reject(h)))).toPromise();return c.catch((()=>{})),await u.D,c}catch(u){const c=u,h=c.name!=="FirebaseError"&&o<3;if(D(Ge,"Transaction failed with error:",c.message,"Retrying:",h),this.close(),!h)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Hh(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class t_{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return on(this.U.delete())}}class Zr extends V{constructor(e,t){super(R.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function zt(r){return r.name==="IndexedDbTransactionError"}class n_{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(D(Ge,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(D(Ge,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),on(n)}add(e){return D(Ge,"ADD",this.store.name,e,e),on(this.store.add(e))}get(e){return on(this.store.get(e)).next((t=>(t===void 0&&(t=null),D(Ge,"GET",this.store.name,e,t),t)))}delete(e){return D(Ge,"DELETE",this.store.name,e),on(this.store.delete(e))}count(){return D(Ge,"COUNT",this.store.name),on(this.store.count())}J(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new A(((o,u)=>{i.onerror=c=>{u(c.target.error)},i.onsuccess=c=>{o(c.target.result)}}))}{const i=this.cursor(n),o=[];return this.H(i,((u,c)=>{o.push(c)})).next((()=>o))}}Z(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new A(((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}}))}X(e,t){D(Ge,"DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const s=this.cursor(n);return this.H(s,((i,o,u)=>u.delete()))}ee(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.H(s,t)}te(e){const t=this.cursor({});return new A(((n,s)=>{t.onerror=i=>{const o=Da(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next((u=>{u?o.continue():n()})):n()}}))}H(e,t){const n=[];return new A(((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const u=o.target.result;if(!u)return void s();const c=new t_(u),h=t(u.primaryKey,u.value,c);if(h instanceof A){const f=h.catch((m=>(c.done(),A.reject(m))));n.push(f)}c.isDone?s():c.G===null?u.continue():u.continue(c.G)}})).next((()=>A.waitFor(n)))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function on(r){return new A(((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=Da(n.target.error);t(s)}}))}let Xc=!1;function Da(r){const e=rt.M(Gn());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Xc||(Xc=!0,setTimeout((()=>{throw n}),0)),n}}return r}const es="IndexBackfiller";class r_{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){D(es,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();D(es,`Documents written: ${t}`)}catch(t){zt(t)?D(es,"Ignoring IndexedDB error during index backfill: ",t):await jt(t)}await this.re(6e4)}))}}class s_{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const n=new Set;let s=t,i=!0;return A.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!n.has(o))return D(es,`Processing collection: ${o}`),this.oe(e,o,s).next((u=>{s-=u,n.add(o)}));i=!1})))).next((()=>t-s))}oe(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next((i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this._e(s,i))).next((u=>(D(es,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(e,t,u)))).next((()=>o.size))}))))}_e(e,t){let n=e;return t.changes.forEach(((s,i)=>{const o=Kh(i);Ca(o,n)>0&&(n=o)})),new Qe(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Le.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=-1;function As(r){return r==null}function hs(r){return r===0&&1/r==-1/0}function Jh(r){return typeof r=="number"&&Number.isInteger(r)&&!hs(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei="";function xe(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Zc(e)),e=i_(r.get(t),e);return Zc(e)}function i_(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case Ei:t+="";break;default:t+=i}}return t}function Zc(r){return r+Ei+""}function tt(r){const e=r.length;if(L(e>=2,64408,{path:r}),e===2)return L(r.charAt(0)===Ei&&r.charAt(1)==="",56145,{path:r}),K.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf(Ei,i);switch((o<0||o>t)&&F(50515,{path:r}),r.charAt(o+1)){case"":const u=r.substring(i,o);let c;s.length===0?c=u:(s+=u,c=s,s=""),n.push(c);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:F(61167,{path:r})}i=o+2}return new K(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="remoteDocuments",vs="owner",xn="owner",ds="mutationQueues",o_="userId",We="mutations",el="batchId",ln="userMutationsIndex",tl=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(r,e){return[r,xe(e)]}function Yh(r,e,t){return[r,xe(e),t]}const a_={},Jn="documentMutations",Ti="remoteDocumentsV14",u_=["prefixPath","collectionGroup","readTime","documentId"],ui="documentKeyIndex",c_=["prefixPath","collectionGroup","documentId"],Xh="collectionGroupIndex",l_=["collectionGroup","readTime","prefixPath","documentId"],fs="remoteDocumentGlobal",ta="remoteDocumentGlobalKey",Yn="targets",Zh="queryTargetsIndex",h_=["canonicalId","targetId"],Xn="targetDocuments",d_=["targetId","path"],xa="documentTargetsIndex",f_=["path","targetId"],wi="targetGlobalKey",dn="targetGlobal",ms="collectionParents",m_=["collectionId","parent"],Zn="clientMetadata",g_="clientId",Bi="bundles",p_="bundleId",Ui="namedQueries",__="name",Na="indexConfiguration",y_="indexId",na="collectionGroupIndex",I_="collectionGroup",ts="indexState",E_=["indexId","uid"],ed="sequenceNumberIndex",T_=["uid","sequenceNumber"],ns="indexEntries",w_=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],td="documentKeyIndex",A_=["indexId","uid","orderedDocumentKey"],qi="documentOverlays",v_=["userId","collectionPath","documentId"],ra="collectionPathOverlayIndex",b_=["userId","collectionPath","largestBatchId"],nd="collectionGroupOverlayIndex",R_=["userId","collectionGroup","largestBatchId"],ka="globals",S_="name",rd=[ds,We,Jn,sn,Yn,vs,dn,Xn,Zn,fs,ms,Bi,Ui],P_=[...rd,qi],sd=[ds,We,Jn,Ti,Yn,vs,dn,Xn,Zn,fs,ms,Bi,Ui,qi],id=sd,Ma=[...id,Na,ts,ns],V_=Ma,od=[...Ma,ka],C_=od;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa extends Wh{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function we(r,e){const t=M(r);return rt.O(t.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function $t(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function ad(r,e){const t=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.push(e(r[n],n,r));return t}function ud(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,t){this.comparator=e,this.root=t||Pe.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zs(this.root,e,this.comparator,!0)}}class Zs{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Pe.RED,this.left=s??Pe.EMPTY,this.right=i??Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Pe(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Pe.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new Pe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rl(this.data.getIterator())}getIteratorFrom(e){return new rl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof re)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new re(this.comparator);return t.data=e,t}}class rl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Nn(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.fields=e,e.sort(ce.comparator)}static empty(){return new Be([])}unionWith(e){let t=new re(ce.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Be(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Kn(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new cd("Invalid base64 string: "+i):i}})(e);return new fe(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new fe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}fe.EMPTY_BYTE_STRING=new fe("");const x_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ct(r){if(L(!!r,39018),typeof r=="string"){let e=0;const t=x_.exec(r);if(L(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:le(r.seconds),nanos:le(r.nanos)}}function le(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function lt(r){return typeof r=="string"?fe.fromBase64String(r):fe.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="server_timestamp",hd="__type__",dd="__previous_value__",fd="__local_write_time__";function ji(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[hd])==null?void 0:n.stringValue)===ld}function zi(r){const e=r.mapValue.fields[dd];return ji(e)?zi(e):e}function gs(r){const e=ct(r.mapValue.fields[fd].timestampValue);return new ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t,n,s,i,o,u,c,h,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m}}const ps="(default)";class Mt{constructor(e,t){this.projectId=e,this.database=t||ps}static empty(){return new Mt("","")}get isDefaultDatabase(){return this.database===ps}isEqual(e){return e instanceof Mt&&e.projectId===this.projectId&&e.database===this.database}}function k_(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new V(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mt(r.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="__type__",md="__max__",St={mapValue:{fields:{__type__:{stringValue:md}}}},Fa="__vector__",er="value",ci={nullValue:"NULL_VALUE"};function Ot(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ji(r)?4:gd(r)?9007199254740991:$i(r)?10:11:F(28295,{value:r})}function it(r,e){if(r===e)return!0;const t=Ot(r);if(t!==Ot(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return gs(r).isEqual(gs(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ct(s.timestampValue),u=ct(i.timestampValue);return o.seconds===u.seconds&&o.nanos===u.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(s,i){return lt(s.bytesValue).isEqual(lt(i.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(s,i){return le(s.geoPointValue.latitude)===le(i.geoPointValue.latitude)&&le(s.geoPointValue.longitude)===le(i.geoPointValue.longitude)})(r,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return le(s.integerValue)===le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=le(s.doubleValue),u=le(i.doubleValue);return o===u?hs(o)===hs(u):isNaN(o)&&isNaN(u)}return!1})(r,e);case 9:return Kn(r.arrayValue.values||[],e.arrayValue.values||[],it);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},u=i.mapValue.fields||{};if(nl(o)!==nl(u))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(u[c]===void 0||!it(o[c],u[c])))return!1;return!0})(r,e);default:return F(52216,{left:r})}}function _s(r,e){return(r.values||[]).find((t=>it(t,e)))!==void 0}function Ft(r,e){if(r===e)return 0;const t=Ot(r),n=Ot(e);if(t!==n)return z(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,e.booleanValue);case 2:return(function(i,o){const u=le(i.integerValue||i.doubleValue),c=le(o.integerValue||o.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1})(r,e);case 3:return sl(r.timestampValue,e.timestampValue);case 4:return sl(gs(r),gs(e));case 5:return Xo(r.stringValue,e.stringValue);case 6:return(function(i,o){const u=lt(i),c=lt(o);return u.compareTo(c)})(r.bytesValue,e.bytesValue);case 7:return(function(i,o){const u=i.split("/"),c=o.split("/");for(let h=0;h<u.length&&h<c.length;h++){const f=z(u[h],c[h]);if(f!==0)return f}return z(u.length,c.length)})(r.referenceValue,e.referenceValue);case 8:return(function(i,o){const u=z(le(i.latitude),le(o.latitude));return u!==0?u:z(le(i.longitude),le(o.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return il(r.arrayValue,e.arrayValue);case 10:return(function(i,o){var p,v,C,N;const u=i.fields||{},c=o.fields||{},h=(p=u[er])==null?void 0:p.arrayValue,f=(v=c[er])==null?void 0:v.arrayValue,m=z(((C=h==null?void 0:h.values)==null?void 0:C.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return m!==0?m:il(h,f)})(r.mapValue,e.mapValue);case 11:return(function(i,o){if(i===St.mapValue&&o===St.mapValue)return 0;if(i===St.mapValue)return 1;if(o===St.mapValue)return-1;const u=i.fields||{},c=Object.keys(u),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const p=Xo(c[m],f[m]);if(p!==0)return p;const v=Ft(u[c[m]],h[f[m]]);if(v!==0)return v}return z(c.length,f.length)})(r.mapValue,e.mapValue);default:throw F(23264,{he:t})}}function sl(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return z(r,e);const t=ct(r),n=ct(e),s=z(t.seconds,n.seconds);return s!==0?s:z(t.nanos,n.nanos)}function il(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=Ft(t[s],n[s]);if(i)return i}return z(t.length,n.length)}function tr(r){return ia(r)}function ia(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=ct(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return lt(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return k.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=ia(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${ia(t.fields[o])}`;return s+"}"})(r.mapValue):F(61005,{value:r})}function li(r){switch(Ot(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zi(r);return e?16+li(e):16;case 5:return 2*r.stringValue.length;case 6:return lt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+li(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return $t(n.fields,((i,o)=>{s+=i.length+li(o)})),s})(r.mapValue);default:throw F(13486,{value:r})}}function mn(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function oa(r){return!!r&&"integerValue"in r}function ys(r){return!!r&&"arrayValue"in r}function ol(r){return!!r&&"nullValue"in r}function al(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function hi(r){return!!r&&"mapValue"in r}function $i(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Oa])==null?void 0:n.stringValue)===Fa}function rs(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return $t(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=rs(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=rs(r.arrayValue.values[t]);return e}return{...r}}function gd(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===md}const pd={mapValue:{fields:{[Oa]:{stringValue:Fa},[er]:{arrayValue:{}}}}};function M_(r){return"nullValue"in r?ci:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?mn(Mt.empty(),k.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?$i(r)?pd:{mapValue:{}}:F(35942,{value:r})}function O_(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?mn(Mt.empty(),k.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?pd:"mapValue"in r?$i(r)?{mapValue:{}}:St:F(61959,{value:r})}function ul(r,e){const t=Ft(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function cl(r,e){const t=Ft(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.value=e}static empty(){return new Re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!hi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rs(t)}setAll(e){let t=ce.emptyPath(),n={},s=[];e.forEach(((o,u)=>{if(!t.isImmediateParentOf(u)){const c=this.getFieldsMap(t);this.applyChanges(c,n,s),n={},s=[],t=u.popLast()}o?n[u.lastSegment()]=rs(o):s.push(u.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());hi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return it(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];hi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){$t(t,((s,i)=>e[s]=i));for(const s of n)delete e[s]}clone(){return new Re(rs(this.value))}}function _d(r){const e=[];return $t(r.fields,((t,n)=>{const s=new ce([t]);if(hi(n)){const i=_d(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Be(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t,n,s,i,o,u){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=u}static newInvalidDocument(e){return new ue(e,0,U.min(),U.min(),U.min(),Re.empty(),0)}static newFoundDocument(e,t,n,s){return new ue(e,1,t,U.min(),n,s,0)}static newNoDocument(e,t){return new ue(e,2,t,U.min(),U.min(),Re.empty(),0)}static newUnknownDocument(e,t){return new ue(e,3,t,U.min(),U.min(),Re.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Re.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t){this.position=e,this.inclusive=t}}function ll(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=k.comparator(k.fromName(o.referenceValue),t.key):n=Ft(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function hl(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!it(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t="asc"){this.field=e,this.dir=t}}function F_(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{}class W extends yd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new L_(e,t,n):t==="array-contains"?new q_(e,n):t==="in"?new vd(e,n):t==="not-in"?new j_(e,n):t==="array-contains-any"?new z_(e,n):new W(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new B_(e,n):new U_(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ft(t,this.value)):t!==null&&Ot(this.value)===Ot(t)&&this.matchesComparison(Ft(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class te extends yd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new te(e,t)}matches(e){return nr(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function nr(r){return r.op==="and"}function aa(r){return r.op==="or"}function La(r){return Id(r)&&nr(r)}function Id(r){for(const e of r.filters)if(e instanceof te)return!1;return!0}function ua(r){if(r instanceof W)return r.field.canonicalString()+r.op.toString()+tr(r.value);if(La(r))return r.filters.map((e=>ua(e))).join(",");{const e=r.filters.map((t=>ua(t))).join(",");return`${r.op}(${e})`}}function Ed(r,e){return r instanceof W?(function(n,s){return s instanceof W&&n.op===s.op&&n.field.isEqual(s.field)&&it(n.value,s.value)})(r,e):r instanceof te?(function(n,s){return s instanceof te&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,o,u)=>i&&Ed(o,s.filters[u])),!0):!1})(r,e):void F(19439)}function Td(r,e){const t=r.filters.concat(e);return te.create(t,r.op)}function wd(r){return r instanceof W?(function(t){return`${t.field.canonicalString()} ${t.op} ${tr(t.value)}`})(r):r instanceof te?(function(t){return t.op.toString()+" {"+t.getFilters().map(wd).join(" ,")+"}"})(r):"Filter"}class L_ extends W{constructor(e,t,n){super(e,t,n),this.key=k.fromName(n.referenceValue)}matches(e){const t=k.comparator(e.key,this.key);return this.matchesComparison(t)}}class B_ extends W{constructor(e,t){super(e,"in",t),this.keys=Ad("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class U_ extends W{constructor(e,t){super(e,"not-in",t),this.keys=Ad("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ad(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>k.fromName(n.referenceValue)))}class q_ extends W{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ys(t)&&_s(t.arrayValue,this.value)}}class vd extends W{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&_s(this.value.arrayValue,t)}}class j_ extends W{constructor(e,t){super(e,"not-in",t)}matches(e){if(_s(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!_s(this.value.arrayValue,t)}}class z_ extends W{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ys(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>_s(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,t=null,n=[],s=[],i=null,o=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=u,this.Te=null}}function ca(r,e=null,t=[],n=[],s=null,i=null,o=null){return new $_(r,e,t,n,s,i,o)}function gn(r){const e=M(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>ua(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),As(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>tr(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>tr(n))).join(",")),e.Te=t}return e.Te}function bs(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!F_(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Ed(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!hl(r.startAt,e.startAt)&&hl(r.endAt,e.endAt)}function Ai(r){return k.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function vi(r,e){return r.filters.filter((t=>t instanceof W&&t.field.isEqual(e)))}function dl(r,e,t){let n=ci,s=!0;for(const i of vi(r,e)){let o=ci,u=!0;switch(i.op){case"<":case"<=":o=M_(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,u=!1;break;case"!=":case"not-in":o=ci}ul({value:n,inclusive:s},{value:o,inclusive:u})<0&&(n=o,s=u)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];ul({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function fl(r,e,t){let n=St,s=!0;for(const i of vi(r,e)){let o=St,u=!0;switch(i.op){case">=":case">":o=O_(i.value),u=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,u=!1;break;case"!=":case"not-in":o=St}cl({value:n,inclusive:s},{value:o,inclusive:u})>0&&(n=o,s=u)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];cl({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t=null,n=[],s=[],i=null,o="F",u=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=u,this.endAt=c,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function bd(r,e,t,n,s,i,o,u){return new dt(r,e,t,n,s,i,o,u)}function gr(r){return new dt(r)}function ml(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function G_(r){return k.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ba(r){return r.collectionGroup!==null}function jn(r){const e=M(r);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let u=new re(ce.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((h=>{h.isInequality()&&(u=u.add(h.field))}))})),u})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Is(i,n))})),t.has(ce.keyField().canonicalString())||e.Ee.push(new Is(ce.keyField(),n))}return e.Ee}function Ne(r){const e=M(r);return e.Ie||(e.Ie=Sd(e,jn(r))),e.Ie}function Rd(r){const e=M(r);return e.Re||(e.Re=Sd(e,r.explicitOrderBy)),e.Re}function Sd(r,e){if(r.limitType==="F")return ca(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Is(s.field,i)}));const t=r.endAt?new Lt(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Lt(r.startAt.position,r.startAt.inclusive):null;return ca(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function la(r,e){const t=r.filters.concat([e]);return new dt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function K_(r,e){const t=r.explicitOrderBy.concat([e]);return new dt(r.path,r.collectionGroup,t,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function bi(r,e,t){return new dt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Q_(r,e){return new dt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,e,r.endAt)}function W_(r,e){return new dt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,e)}function Rs(r,e){return bs(Ne(r),Ne(e))&&r.limitType===e.limitType}function Pd(r){return`${gn(Ne(r))}|lt:${r.limitType}`}function Bn(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((s=>wd(s))).join(", ")}]`),As(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>tr(s))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>tr(s))).join(",")),`Target(${n})`})(Ne(r))}; limitType=${r.limitType})`}function Ss(r,e){return e.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):k.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,e)&&(function(n,s){for(const i of jn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,e)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,e)&&(function(n,s){return!(n.startAt&&!(function(o,u,c){const h=ll(o,u,c);return o.inclusive?h<=0:h<0})(n.startAt,jn(n),s)||n.endAt&&!(function(o,u,c){const h=ll(o,u,c);return o.inclusive?h>=0:h>0})(n.endAt,jn(n),s))})(r,e)}function Vd(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Cd(r){return(e,t)=>{let n=!1;for(const s of jn(r)){const i=H_(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function H_(r,e,t){const n=r.field.isKeyField()?k.comparator(e.key,t.key):(function(i,o,u){const c=o.data.field(i),h=u.data.field(i);return c!==null&&h!==null?Ft(c,h):F(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return F(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){$t(this.inner,((t,n)=>{for(const[s,i]of n)e(s,i)}))}isEmpty(){return ud(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=new oe(k.comparator);function Ue(){return J_}const Dd=new oe(k.comparator);function Hr(...r){let e=Dd;for(const t of r)e=e.insert(t.key,t);return e}function xd(r){let e=Dd;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function nt(){return ss()}function Nd(){return ss()}function ss(){return new ft((r=>r.toString()),((r,e)=>r.isEqual(e)))}const Y_=new oe(k.comparator),X_=new re(k.comparator);function $(...r){let e=X_;for(const t of r)e=e.add(t);return e}const Z_=new re(z);function Ua(){return Z_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hs(e)?"-0":e}}function kd(r){return{integerValue:""+r}}function Md(r,e){return Jh(e)?kd(e):qa(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this._=void 0}}function ey(r,e,t){return r instanceof rr?(function(s,i){const o={fields:{[hd]:{stringValue:ld},[fd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ji(i)&&(i=zi(i)),i&&(o.fields[dd]=i),{mapValue:o}})(t,e):r instanceof pn?Fd(r,e):r instanceof _n?Ld(r,e):(function(s,i){const o=Od(s,i),u=gl(o)+gl(s.Ae);return oa(o)&&oa(s.Ae)?kd(u):qa(s.serializer,u)})(r,e)}function ty(r,e,t){return r instanceof pn?Fd(r,e):r instanceof _n?Ld(r,e):t}function Od(r,e){return r instanceof sr?(function(n){return oa(n)||(function(i){return!!i&&"doubleValue"in i})(n)})(e)?e:{integerValue:0}:null}class rr extends Gi{}class pn extends Gi{constructor(e){super(),this.elements=e}}function Fd(r,e){const t=Bd(e);for(const n of r.elements)t.some((s=>it(s,n)))||t.push(n);return{arrayValue:{values:t}}}class _n extends Gi{constructor(e){super(),this.elements=e}}function Ld(r,e){let t=Bd(e);for(const n of r.elements)t=t.filter((s=>!it(s,n)));return{arrayValue:{values:t}}}class sr extends Gi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function gl(r){return le(r.integerValue||r.doubleValue)}function Bd(r){return ys(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t){this.field=e,this.transform=t}}function ny(r,e){return r.field.isEqual(e.field)&&(function(n,s){return n instanceof pn&&s instanceof pn||n instanceof _n&&s instanceof _n?Kn(n.elements,s.elements,it):n instanceof sr&&s instanceof sr?it(n.Ae,s.Ae):n instanceof rr&&s instanceof rr})(r.transform,e.transform)}class ry{constructor(e,t){this.version=e,this.transformResults=t}}class he{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new he}static exists(e){return new he(void 0,e)}static updateTime(e){return new he(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function di(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Ki{}function Ud(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new _r(r.key,he.none()):new pr(r.key,r.data,he.none());{const t=r.data,n=Re.empty();let s=new re(ce.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new mt(r.key,n,new Be(s.toArray()),he.none())}}function sy(r,e,t){r instanceof pr?(function(s,i,o){const u=s.value.clone(),c=_l(s.fieldTransforms,i,o.transformResults);u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(r,e,t):r instanceof mt?(function(s,i,o){if(!di(s.precondition,i))return void i.convertToUnknownDocument(o.version);const u=_l(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(qd(s)),c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(r,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function is(r,e,t,n){return r instanceof pr?(function(i,o,u,c){if(!di(i.precondition,o))return u;const h=i.value.clone(),f=yl(i.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(r,e,t,n):r instanceof mt?(function(i,o,u,c){if(!di(i.precondition,o))return u;const h=yl(i.fieldTransforms,c,o),f=o.data;return f.setAll(qd(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((m=>m.field)))})(r,e,t,n):(function(i,o,u){return di(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):u})(r,e,t)}function iy(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Od(n.transform,s||null);i!=null&&(t===null&&(t=Re.empty()),t.set(n.field,i))}return t||null}function pl(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Kn(n,s,((i,o)=>ny(i,o)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class pr extends Ki{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class mt extends Ki{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qd(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function _l(r,e,t){const n=new Map;L(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,u=e.data.field(i.field);n.set(i.field,ty(o,u,t[s]))}return n}function yl(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,ey(i,o,e))}return n}class _r extends Ki{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ja extends Ki{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sy(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=is(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=is(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Nd();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let u=this.applyToLocalView(o,i.mutatedFields);u=t.has(s.key)?null:u;const c=Ud(o,u);c!==null&&n.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(U.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),$())}isEqual(e){return this.batchId===e.batchId&&Kn(this.mutations,e.mutations,((t,n)=>pl(t,n)))&&Kn(this.baseMutations,e.baseMutations,((t,n)=>pl(t,n)))}}class $a{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){L(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let s=(function(){return Y_})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new $a(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,t,n){this.alias=e,this.aggregateType=t,this.fieldPath=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e,H;function zd(r){switch(r){case R.OK:return F(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return F(15467,{code:r})}}function $d(r){if(r===void 0)return ge("GRPC error has no .code"),R.UNKNOWN;switch(r){case _e.OK:return R.OK;case _e.CANCELLED:return R.CANCELLED;case _e.UNKNOWN:return R.UNKNOWN;case _e.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case _e.INTERNAL:return R.INTERNAL;case _e.UNAVAILABLE:return R.UNAVAILABLE;case _e.UNAUTHENTICATED:return R.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case _e.NOT_FOUND:return R.NOT_FOUND;case _e.ALREADY_EXISTS:return R.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return R.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case _e.ABORTED:return R.ABORTED;case _e.OUT_OF_RANGE:return R.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return R.UNIMPLEMENTED;case _e.DATA_LOSS:return R.DATA_LOSS;default:return F(39323,{code:r})}}(H=_e||(_e={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os=null;function ay(r){if(os)throw new Error("a TestingHooksSpi instance is already set");os=r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=new Dt([4294967295,4294967295],0);function Il(r){const e=Gd().encode(r),t=new xh;return t.update(e),new Uint8Array(t.digest())}function El(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dt([t,n],0),new Dt([s,i],0)]}class Ka{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Jr(`Invalid padding: ${t}`);if(n<0)throw new Jr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Jr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Jr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Dt.fromNumber(this.ge)}ye(e,t,n){let s=e.add(t.multiply(Dt.fromNumber(n)));return s.compare(uy)===1&&(s=new Dt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Il(e),[n,s]=El(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);if(!this.we(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ka(i,s,t);return n.forEach((u=>o.insert(u))),o}insert(e){if(this.ge===0)return;const t=Il(e),[n,s]=El(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Jr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Cs.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Vs(U.min(),s,new oe(z),Ue(),$())}}class Cs{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Cs(n,t,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t,n,s){this.be=e,this.removedTargetIds=t,this.key=n,this.De=s}}class Kd{constructor(e,t){this.targetId=e,this.Ce=t}}class Qd{constructor(e,t,n=fe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Tl{constructor(){this.ve=0,this.Fe=wl(),this.Me=fe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=$(),t=$(),n=$();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:F(38017,{changeType:i})}})),new Cs(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=wl()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,L(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class cy{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ue(),this.Je=ei(),this.He=ei(),this.Ze=new oe(z)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:F(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,n=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Ai(i))if(n===0){const o=new k(i.path);this.et(t,o,ue.newNoDocument(o,U.min()))}else L(n===1,20013,{expectedCount:n});else{const o=this._t(t);if(o!==n){const u=this.ut(e),c=u?this.ct(u,e,o):1;if(c!==0){this.it(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}os==null||os.o((function(f,m,p,v,C){var B,j,q;const N={localCacheCount:f,existenceFilterCount:m.count,databaseId:p.database,projectId:p.projectId},x=m.unchangedNames;return x&&(N.bloomFilter={applied:C===0,hashCount:(x==null?void 0:x.hashCount)??0,bitmapLength:((j=(B=x==null?void 0:x.bits)==null?void 0:B.bitmap)==null?void 0:j.length)??0,padding:((q=x==null?void 0:x.bits)==null?void 0:q.padding)??0,mightContain:Z=>(v==null?void 0:v.mightContain(Z))??!1}),N})(o,e.Ce,this.Ge.ht(),u,c))}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,u;try{o=lt(n).toUint8Array()}catch(c){if(c instanceof cd)return ze("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new Ka(o,s,i)}catch(c){return ze(c instanceof Jr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.ge===0?null:u}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let s=0;return n.forEach((i=>{const o=this.Ge.ht(),u=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,o)=>{const u=this.ot(o);if(u){if(i.current&&Ai(u.target)){const c=new k(u.target.path);this.Et(c).has(o)||this.It(o,c)||this.et(o,c,ue.newNoDocument(c,e))}i.Be&&(t.set(o,i.ke()),i.qe())}}));let n=$();this.He.forEach(((i,o)=>{let u=!0;o.forEachWhile((c=>{const h=this.ot(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(n=n.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new Vs(e,t,this.Ze,this.je,n);return this.je=Ue(),this.Je=ei(),this.He=ei(),this.Ze=new oe(z),s}Ye(e,t){if(!this.rt(e))return;const n=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const s=this.nt(e);this.It(e,t)?s.Ke(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Tl,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new re(z),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new re(z),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Tl),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ei(){return new oe(k.comparator)}function wl(){return new oe(k.comparator)}const ly={asc:"ASCENDING",desc:"DESCENDING"},hy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dy={and:"AND",or:"OR"};class fy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ha(r,e){return r.useProto3Json||As(e)?e:{value:e}}function ir(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wd(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function my(r,e){return ir(r,e.toTimestamp())}function pe(r){return L(!!r,49232),U.fromTimestamp((function(t){const n=ct(t);return new ee(n.seconds,n.nanos)})(r))}function Qa(r,e){return da(r,e).canonicalString()}function da(r,e){const t=(function(s){return new K(["projects",s.projectId,"databases",s.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Hd(r){const e=K.fromString(r);return L(sf(e),10190,{key:e.toString()}),e}function Es(r,e){return Qa(r.databaseId,e.path)}function st(r,e){const t=Hd(e);if(t.get(1)!==r.databaseId.projectId)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new V(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new k(Xd(t))}function Jd(r,e){return Qa(r.databaseId,e)}function Yd(r){const e=Hd(r);return e.length===4?K.emptyPath():Xd(e)}function fa(r){return new K(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Xd(r){return L(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Al(r,e,t){return{name:Es(r,e),fields:t.value.mapValue.fields}}function Qi(r,e,t){const n=st(r,e.name),s=pe(e.updateTime),i=e.createTime?pe(e.createTime):U.min(),o=new Re({mapValue:{fields:e.fields}}),u=ue.newFoundDocument(n,s,i,o);return t&&u.setHasCommittedMutations(),t?u.setHasCommittedMutations():u}function gy(r,e){return"found"in e?(function(n,s){L(!!s.found,43571),s.found.name,s.found.updateTime;const i=st(n,s.found.name),o=pe(s.found.updateTime),u=s.found.createTime?pe(s.found.createTime):U.min(),c=new Re({mapValue:{fields:s.found.fields}});return ue.newFoundDocument(i,o,u,c)})(r,e):"missing"in e?(function(n,s){L(!!s.missing,3894),L(!!s.readTime,22933);const i=st(n,s.missing),o=pe(s.readTime);return ue.newNoDocument(i,o)})(r,e):F(7234,{result:e})}function py(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(L(f===void 0||typeof f=="string",58123),fe.fromBase64String(f||"")):(L(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),fe.fromUint8Array(f||new Uint8Array))})(r,e.targetChange.resumeToken),o=e.targetChange.cause,u=o&&(function(h){const f=h.code===void 0?R.UNKNOWN:$d(h.code);return new V(f,h.message||"")})(o);t=new Qd(n,s,i,u||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=st(r,n.document.name),i=pe(n.document.updateTime),o=n.document.createTime?pe(n.document.createTime):U.min(),u=new Re({mapValue:{fields:n.document.fields}}),c=ue.newFoundDocument(s,i,o,u),h=n.targetIds||[],f=n.removedTargetIds||[];t=new fi(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=st(r,n.document),i=n.readTime?pe(n.readTime):U.min(),o=ue.newNoDocument(s,i),u=n.removedTargetIds||[];t=new fi([],u,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=st(r,n.document),i=n.removedTargetIds||[];t=new fi([],i,s,null)}else{if(!("filter"in e))return F(11601,{Vt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new oy(s,i),u=n.targetId;t=new Kd(u,o)}}return t}function Ts(r,e){let t;if(e instanceof pr)t={update:Al(r,e.key,e.value)};else if(e instanceof _r)t={delete:Es(r,e.key)};else if(e instanceof mt)t={update:Al(r,e.key,e.data),updateMask:wy(e.fieldMask)};else{if(!(e instanceof ja))return F(16599,{dt:e.type});t={verify:Es(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,o){const u=o.transform;if(u instanceof rr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof pn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof _n)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof sr)return{fieldPath:o.field.canonicalString(),increment:u.Ae};throw F(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:my(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F(27497)})(r,e.precondition)),t}function ma(r,e){const t=e.currentDocument?(function(i){return i.updateTime!==void 0?he.updateTime(pe(i.updateTime)):i.exists!==void 0?he.exists(i.exists):he.none()})(e.currentDocument):he.none(),n=e.updateTransforms?e.updateTransforms.map((s=>(function(o,u){let c=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME",16630,{proto:u}),c=new rr;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];c=new pn(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];c=new _n(f)}else"increment"in u?c=new sr(o,u.increment):F(16584,{proto:u});const h=ce.fromServerFormat(u.fieldPath);return new Ps(h,c)})(r,s))):[];if(e.update){e.update.name;const s=st(r,e.update.name),i=new Re({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(c){const h=c.fieldPaths||[];return new Be(h.map((f=>ce.fromServerFormat(f))))})(e.updateMask);return new mt(s,i,o,t,n)}return new pr(s,i,t,n)}if(e.delete){const s=st(r,e.delete);return new _r(s,t)}if(e.verify){const s=st(r,e.verify);return new ja(s,t)}return F(1463,{proto:e})}function _y(r,e){return r&&r.length>0?(L(e!==void 0,14353),r.map((t=>(function(s,i){let o=s.updateTime?pe(s.updateTime):pe(i);return o.isEqual(U.min())&&(o=pe(i)),new ry(o,s.transformResults||[])})(t,e)))):[]}function Zd(r,e){return{documents:[Jd(r,e.path)]}}function Wi(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Jd(r,s);const i=(function(h){if(h.length!==0)return rf(te.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(h){if(h.length!==0)return h.map((f=>(function(p){return{field:bt(p.field),direction:Iy(p.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const u=ha(r,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:s}}function ef(r,e,t,n){const{ft:s,parent:i}=Wi(r,e),o={},u=[];let c=0;return t.forEach((h=>{const f=n?h.alias:"aggregate_"+c++;o[f]=h.alias,h.aggregateType==="count"?u.push({alias:f,count:{}}):h.aggregateType==="avg"?u.push({alias:f,avg:{field:bt(h.fieldPath)}}):h.aggregateType==="sum"&&u.push({alias:f,sum:{field:bt(h.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:u,structuredQuery:s.structuredQuery},parent:s.parent},gt:o,parent:i}}function tf(r){let e=Yd(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){L(n===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(m){const p=nf(m);return p instanceof te&&La(p)?p.getFilters():[p]})(t.where));let o=[];t.orderBy&&(o=(function(m){return m.map((p=>(function(C){return new Is(Un(C.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(p)))})(t.orderBy));let u=null;t.limit&&(u=(function(m){let p;return p=typeof m=="object"?m.value:m,As(p)?null:p})(t.limit));let c=null;t.startAt&&(c=(function(m){const p=!!m.before,v=m.values||[];return new Lt(v,p)})(t.startAt));let h=null;return t.endAt&&(h=(function(m){const p=!m.before,v=m.values||[];return new Lt(v,p)})(t.endAt)),bd(e,s,o,i,u,"F",c,h)}function yy(r,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function nf(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Un(t.unaryFilter.field);return W.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Un(t.unaryFilter.field);return W.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Un(t.unaryFilter.field);return W.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Un(t.unaryFilter.field);return W.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}})(r):r.fieldFilter!==void 0?(function(t){return W.create(Un(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return te.create(t.compositeFilter.filters.map((n=>nf(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F(1026)}})(t.compositeFilter.op))})(r):F(30097,{filter:r})}function Iy(r){return ly[r]}function Ey(r){return hy[r]}function Ty(r){return dy[r]}function bt(r){return{fieldPath:r.canonicalString()}}function Un(r){return ce.fromServerFormat(r.fieldPath)}function rf(r){return r instanceof W?(function(t){if(t.op==="=="){if(al(t.value))return{unaryFilter:{field:bt(t.field),op:"IS_NAN"}};if(ol(t.value))return{unaryFilter:{field:bt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(al(t.value))return{unaryFilter:{field:bt(t.field),op:"IS_NOT_NAN"}};if(ol(t.value))return{unaryFilter:{field:bt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bt(t.field),op:Ey(t.op),value:t.value}}})(r):r instanceof te?(function(t){const n=t.getFilters().map((s=>rf(s)));return n.length===1?n[0]:{compositeFilter:{op:Ty(t.op),filters:n}}})(r):F(54877,{filter:r})}function wy(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function sf(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function of(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t,n,s,i=U.min(),o=U.min(),u=fe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new ot(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ot(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){this.yt=e}}function Ay(r,e){let t;if(e.document)t=Qi(r.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=k.fromSegments(e.noDocument.path),s=In(e.noDocument.readTime);t=ue.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return F(56709);{const n=k.fromSegments(e.unknownDocument.path),s=In(e.unknownDocument.version);t=ue.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime((function(s){const i=new ee(s[0],s[1]);return U.fromTimestamp(i)})(e.readTime)),t}function vl(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ri(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=(function(i,o){return{name:Es(i,o.key),fields:o.data.value.mapValue.fields,updateTime:ir(i,o.version.toTimestamp()),createTime:ir(i,o.createTime.toTimestamp())}})(r.yt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:yn(e.version)};else{if(!e.isUnknownDocument())return F(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:yn(e.version)}}return n}function Ri(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function yn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function In(r){const e=new ee(r.seconds,r.nanoseconds);return U.fromTimestamp(e)}function an(r,e){const t=(e.baseMutations||[]).map((i=>ma(r.yt,i)));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const u=e.mutations[i+1];o.updateTransforms=u.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map((i=>ma(r.yt,i))),s=ee.fromMillis(e.localWriteTimeMs);return new za(e.batchId,s,t,n)}function Yr(r){const e=In(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?In(r.lastLimboFreeSnapshotVersion):U.min();let n;return n=(function(i){return i.documents!==void 0})(r.query)?(function(i){const o=i.documents.length;return L(o===1,1966,{count:o}),Ne(gr(Yd(i.documents[0])))})(r.query):(function(i){return Ne(tf(i))})(r.query),new ot(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,fe.fromBase64String(r.resumeToken))}function uf(r,e){const t=yn(e.snapshotVersion),n=yn(e.lastLimboFreeSnapshotVersion);let s;s=Ai(e.target)?Zd(r.yt,e.target):Wi(r.yt,e.target).ft;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:gn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Hi(r){const e=tf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?bi(e,e.limit,"L"):e}function Lo(r,e){return new Ga(e.largestBatchId,ma(r.yt,e.overlayMutation))}function bl(r,e){const t=e.path.lastSegment();return[r,xe(e.path.popLast()),t]}function Rl(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:yn(n.readTime),documentKey:xe(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{getBundleMetadata(e,t){return Sl(e).get(t).next((n=>{if(n)return(function(i){return{id:i.bundleId,createTime:In(i.createTime),version:i.version}})(n)}))}saveBundleMetadata(e,t){return Sl(e).put((function(s){return{bundleId:s.id,createTime:yn(pe(s.createTime)),version:s.version}})(t))}getNamedQuery(e,t){return Pl(e).get(t).next((n=>{if(n)return(function(i){return{name:i.name,query:Hi(i.bundledQuery),readTime:In(i.readTime)}})(n)}))}saveNamedQuery(e,t){return Pl(e).put((function(s){return{name:s.name,readTime:yn(pe(s.readTime)),bundledQuery:s.bundledQuery}})(t))}}function Sl(r){return we(r,Bi)}function Pl(r){return we(r,Ui)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const n=t.uid||"";return new Ji(e,n)}getOverlay(e,t){return jr(e).get(bl(this.userId,t)).next((n=>n?Lo(this.serializer,n):null))}getOverlays(e,t){const n=nt();return A.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(e,t,n){const s=[];return n.forEach(((i,o)=>{const u=new Ga(t,o);s.push(this.St(e,u))})),A.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach((o=>s.add(xe(o.getCollectionPath()))));const i=[];return s.forEach((o=>{const u=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(jr(e).X(ra,u))})),A.waitFor(i)}getOverlaysForCollection(e,t,n){const s=nt(),i=xe(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return jr(e).J(ra,o).next((u=>{for(const c of u){const h=Lo(this.serializer,c);s.set(h.getKey(),h)}return s}))}getOverlaysForCollectionGroup(e,t,n,s){const i=nt();let o;const u=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return jr(e).ee({index:nd,range:u},((c,h,f)=>{const m=Lo(this.serializer,h);i.size()<s||m.largestBatchId===o?(i.set(m.getKey(),m),o=m.largestBatchId):f.done()})).next((()=>i))}St(e,t){return jr(e).put((function(s,i,o){const[u,c,h]=bl(i,o.mutation.key);return{userId:i,collectionPath:c,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ts(s.yt,o.mutation)}})(this.serializer,this.userId,t))}}function jr(r){return we(r,qi)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{bt(e){return we(e,ka)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const n=t==null?void 0:t.value;return n?fe.fromUint8Array(n):fe.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(le(e.integerValue));else if("doubleValue"in e){const n=le(e.doubleValue);isNaN(n)?this.Ft(t,13):(this.Ft(t,15),hs(n)?t.Mt(0):t.Mt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ft(t,20),typeof n=="string"&&(n=ct(n)),t.xt(`${n.seconds||""}`),t.Mt(n.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(lt(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else"mapValue"in e?gd(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):$i(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Kt(e.arrayValue,t),this.Nt(t)):F(19022,{Ut:e})}Ot(e,t){this.Ft(t,25),this.$t(e,t)}$t(e,t){t.xt(e)}qt(e,t){const n=e.fields||{};this.Ft(t,55);for(const s of Object.keys(n))this.Ot(s,t),this.Ct(n[s],t)}kt(e,t){var o,u;const n=e.fields||{};this.Ft(t,53);const s=er,i=((u=(o=n[s].arrayValue)==null?void 0:o.values)==null?void 0:u.length)||0;this.Ft(t,15),t.Mt(le(i)),this.Ot(s,t),this.Ct(n[s],t)}Kt(e,t){const n=e.values||[];this.Ft(t,50);for(const s of n)this.Ct(s,t)}Lt(e,t){this.Ft(t,37),k.fromName(e).path.forEach((n=>{this.Ft(t,60),this.$t(n,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}un.Wt=new un;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=255;function Ry(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function Vl(r){const e=64-(function(n){let s=0;for(let i=0;i<8;++i){const o=Ry(255&n[i]);if(s+=o,o!==8)break}return s})(r);return Math.ceil(e/8)}class Sy{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Gt(n.value),n=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Jt(n.value),n=t.next();this.Ht()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const s=t.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Xt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Yt(e){const t=this.en(e),n=Vl(t);this.tn(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}nn(e){const t=this.en(e),n=Vl(t);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}rn(){this.sn(kn),this.sn(255)}_n(){this.an(kn),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===kn?(this.sn(kn),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===kn?(this.an(kn),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class Py{constructor(e){this.cn=e}Bt(e){this.cn.Qt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.Yt(e)}vt(){this.cn.rn()}}class Vy{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Xt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class zr{constructor(){this.cn=new Sy,this.ascending=new Py(this.cn),this.descending=new Vy(this.cn)}seed(e){this.cn.seed(e)}ln(e){return e===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,n,s){this.hn=e,this.Pn=t,this.Tn=n,this.En=s}In(){const e=this.En.length,t=e===0||this.En[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.En,0),t!==e?n.set([0],this.En.length):++n[n.length-1],new cn(this.hn,this.Pn,this.Tn,n)}Rn(e,t,n){return{indexId:this.hn,uid:e,arrayValue:mi(this.Tn),directionalValue:mi(this.En),orderedDocumentKey:mi(t),documentKey:n.path.toArray()}}An(e,t,n){const s=this.Rn(e,t,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function wt(r,e){let t=r.hn-e.hn;return t!==0?t:(t=Cl(r.Tn,e.Tn),t!==0?t:(t=Cl(r.En,e.En),t!==0?t:k.comparator(r.Pn,e.Pn)))}function Cl(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function mi(r){return Ah()?(function(t){let n="";for(let s=0;s<t.length;s++)n+=String.fromCharCode(t[s]);return n})(r):r}function Dl(r){return typeof r!="string"?r:(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(r)}class xl{constructor(e){this.Vn=new re(((t,n)=>ce.comparator(t.field,n.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.mn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Vn=this.Vn.add(n):this.mn.push(n)}}get fn(){return this.Vn.size>1}gn(e){if(L(e.collectionGroup===this.collectionId,49279),this.fn)return!1;const t=ea(e);if(t!==void 0&&!this.pn(t))return!1;const n=rn(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.pn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Vn.size>0){const u=this.Vn.getIterator().getNext();if(!s.has(u.field.canonicalString())){const c=n[i];if(!this.yn(u,c)||!this.wn(this.dn[o++],c))return!1}++i}for(;i<n.length;++i){const u=n[i];if(o>=this.dn.length||!this.wn(this.dn[o++],u))return!1}return!0}Sn(){if(this.fn)return null;let e=new re(ce.comparator);const t=[];for(const n of this.mn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new hn(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new hn(n.field,0))}for(const n of this.dn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new hn(n.field,n.dir==="asc"?0:1)));return new Wn(Wn.UNKNOWN_ID,this.collectionId,t,Hn.empty())}pn(e){for(const t of this.mn)if(this.yn(t,e))return!0;return!1}yn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}wn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(r){var t,n;if(L(r instanceof W||r instanceof te,20012),r instanceof W){if(r instanceof vd){const s=((n=(t=r.value.arrayValue)==null?void 0:t.values)==null?void 0:n.map((i=>W.create(r.field,"==",i))))||[];return te.create(s,"or")}return r}const e=r.filters.map((s=>cf(s)));return te.create(e,r.op)}function Cy(r){if(r.getFilters().length===0)return[];const e=_a(cf(r));return L(lf(e),7391),ga(e)||pa(e)?[e]:e.getFilters()}function ga(r){return r instanceof W}function pa(r){return r instanceof te&&La(r)}function lf(r){return ga(r)||pa(r)||(function(t){if(t instanceof te&&aa(t)){for(const n of t.getFilters())if(!ga(n)&&!pa(n))return!1;return!0}return!1})(r)}function _a(r){if(L(r instanceof W||r instanceof te,34018),r instanceof W)return r;if(r.filters.length===1)return _a(r.filters[0]);const e=r.filters.map((n=>_a(n)));let t=te.create(e,r.op);return t=Si(t),lf(t)?t:(L(t instanceof te,64498),L(nr(t),40251),L(t.filters.length>1,57927),t.filters.reduce(((n,s)=>Wa(n,s))))}function Wa(r,e){let t;return L(r instanceof W||r instanceof te,38388),L(e instanceof W||e instanceof te,25473),t=r instanceof W?e instanceof W?(function(s,i){return te.create([s,i],"and")})(r,e):Nl(r,e):e instanceof W?Nl(e,r):(function(s,i){if(L(s.filters.length>0&&i.filters.length>0,48005),nr(s)&&nr(i))return Td(s,i.getFilters());const o=aa(s)?s:i,u=aa(s)?i:s,c=o.filters.map((h=>Wa(h,u)));return te.create(c,"or")})(r,e),Si(t)}function Nl(r,e){if(nr(e))return Td(e,r.getFilters());{const t=e.filters.map((n=>Wa(r,n)));return te.create(t,"or")}}function Si(r){if(L(r instanceof W||r instanceof te,11850),r instanceof W)return r;const e=r.getFilters();if(e.length===1)return Si(e[0]);if(Id(r))return r;const t=e.map((s=>Si(s))),n=[];return t.forEach((s=>{s instanceof W?n.push(s):s instanceof te&&(s.op===r.op?n.push(...s.filters):n.push(s))})),n.length===1?n[0]:te.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(){this.bn=new Ha}addToCollectionParentIndex(e,t){return this.bn.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(Qe.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(Qe.min())}updateCollectionGroup(e,t,n){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class Ha{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new re(K.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new re(K.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="IndexedDbIndexManager",ti=new Uint8Array(0);class xy{constructor(e,t){this.databaseId=t,this.Dn=new Ha,this.Cn=new ft((n=>gn(n)),((n,s)=>bs(n,s))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Dn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener((()=>{this.Dn.add(t)}));const i={collectionId:n,parent:xe(s)};return Ml(e).put(i)}return A.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[qh(t),""],!1,!0);return Ml(e).J(s).next((i=>{for(const o of i){if(o.collectionId!==t)break;n.push(tt(o.parent))}return n}))}addFieldIndex(e,t){const n=$r(e),s=(function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map((c=>[c.fieldPath.canonicalString(),c.kind]))}})(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=On(e);return i.next((u=>{o.put(Rl(u,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=$r(e),s=On(e),i=Mn(e);return n.delete(t.indexId).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=$r(e),n=Mn(e),s=On(e);return t.X().next((()=>n.X())).next((()=>s.X()))}createTargetIndexes(e,t){return A.forEach(this.vn(t),(n=>this.getIndexType(e,n).next((s=>{if(s===0||s===1){const i=new xl(n).Sn();if(i!=null)return this.addFieldIndex(e,i)}}))))}getDocumentsMatchingTarget(e,t){const n=Mn(e);let s=!0;const i=new Map;return A.forEach(this.vn(t),(o=>this.Fn(e,o).next((u=>{s&&(s=!!u),i.set(o,u)})))).next((()=>{if(s){let o=$();const u=[];return A.forEach(i,((c,h)=>{D(kl,`Using index ${(function(q){return`id=${q.indexId}|cg=${q.collectionGroup}|f=${q.fields.map((Z=>`${Z.fieldPath}:${Z.kind}`)).join(",")}`})(c)} to execute ${gn(t)}`);const f=(function(q,Z){const Y=ea(Z);if(Y===void 0)return null;for(const X of vi(q,Y.fieldPath))switch(X.op){case"array-contains-any":return X.value.arrayValue.values||[];case"array-contains":return[X.value]}return null})(h,c),m=(function(q,Z){const Y=new Map;for(const X of rn(Z))for(const E of vi(q,X.fieldPath))switch(E.op){case"==":case"in":Y.set(X.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return Y.set(X.fieldPath.canonicalString(),E.value),Array.from(Y.values())}return null})(h,c),p=(function(q,Z){const Y=[];let X=!0;for(const E of rn(Z)){const _=E.kind===0?dl(q,E.fieldPath,q.startAt):fl(q,E.fieldPath,q.startAt);Y.push(_.value),X&&(X=_.inclusive)}return new Lt(Y,X)})(h,c),v=(function(q,Z){const Y=[];let X=!0;for(const E of rn(Z)){const _=E.kind===0?fl(q,E.fieldPath,q.endAt):dl(q,E.fieldPath,q.endAt);Y.push(_.value),X&&(X=_.inclusive)}return new Lt(Y,X)})(h,c),C=this.Mn(c,h,p),N=this.Mn(c,h,v),x=this.xn(c,h,m),B=this.On(c.indexId,f,C,p.inclusive,N,v.inclusive,x);return A.forEach(B,(j=>n.Z(j,t.limit).next((q=>{q.forEach((Z=>{const Y=k.fromSegments(Z.documentKey);o.has(Y)||(o=o.add(Y),u.push(Y))}))}))))})).next((()=>u))}return A.resolve(null)}))}vn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=Cy(te.create(e.filters,"and")).map((n=>ca(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt))),this.Cn.set(e,t),t)}On(e,t,n,s,i,o,u){const c=(t!=null?t.length:1)*Math.max(n.length,i.length),h=c/(t!=null?t.length:1),f=[];for(let m=0;m<c;++m){const p=t?this.Nn(t[m/h]):ti,v=this.Bn(e,p,n[m%h],s),C=this.Ln(e,p,i[m%h],o),N=u.map((x=>this.Bn(e,p,x,!0)));f.push(...this.createRange(v,C,N))}return f}Bn(e,t,n,s){const i=new cn(e,k.empty(),t,n);return s?i:i.In()}Ln(e,t,n,s){const i=new cn(e,k.empty(),t,n);return s?i.In():i}Fn(e,t){const n=new xl(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next((i=>{let o=null;for(const u of i)n.gn(u)&&(!o||u.fields.length>o.fields.length)&&(o=u);return o}))}getIndexType(e,t){let n=2;const s=this.vn(t);return A.forEach(s,(i=>this.Fn(e,i).next((o=>{o?n!==0&&o.fields.length<(function(c){let h=new re(ce.comparator),f=!1;for(const m of c.filters)for(const p of m.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?f=!0:h=h.add(p.field));for(const m of c.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)})(i)&&(n=1):n=0})))).next((()=>(function(o){return o.limit!==null})(t)&&s.length>1&&n===2?1:n))}kn(e,t){const n=new zr;for(const s of rn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.ln(s.kind);un.Wt.Dt(i,o)}return n.un()}Nn(e){const t=new zr;return un.Wt.Dt(e,t.ln(0)),t.un()}qn(e,t){const n=new zr;return un.Wt.Dt(mn(this.databaseId,t),n.ln((function(i){const o=rn(i);return o.length===0?0:o[o.length-1].kind})(e))),n.un()}xn(e,t,n){if(n===null)return[];let s=[];s.push(new zr);let i=0;for(const o of rn(e)){const u=n[i++];for(const c of s)if(this.Kn(t,o.fieldPath)&&ys(u))s=this.Un(s,o,u);else{const h=c.ln(o.kind);un.Wt.Dt(u,h)}}return this.$n(s)}Mn(e,t,n){return this.xn(e,t,n.position)}$n(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].un();return t}Un(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const u of s){const c=new zr;c.seed(u.un()),un.Wt.Dt(o,c.ln(t.kind)),i.push(c)}return i}Kn(e,t){return!!e.filters.find((n=>n instanceof W&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(e,t){const n=$r(e),s=On(e);return(t?n.J(na,IDBKeyRange.bound(t,t)):n.J()).next((i=>{const o=[];return A.forEach(i,(u=>s.get([u.indexId,this.uid]).next((c=>{o.push((function(f,m){const p=m?new Hn(m.sequenceNumber,new Qe(In(m.readTime),new k(tt(m.documentKey)),m.largestBatchId)):Hn.empty(),v=f.fields.map((([C,N])=>new hn(ce.fromServerFormat(C),N)));return new Wn(f.indexId,f.collectionGroup,v,p)})(u,c))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:z(n.collectionGroup,s.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,n){const s=$r(e),i=On(e);return this.Wn(e).next((o=>s.J(na,IDBKeyRange.bound(t,t)).next((u=>A.forEach(u,(c=>i.put(Rl(c.indexId,this.uid,o,n))))))))}updateIndexEntries(e,t){const n=new Map;return A.forEach(t,((s,i)=>{const o=n.get(s.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next((u=>(n.set(s.collectionGroup,u),A.forEach(u,(c=>this.Qn(e,s,c).next((h=>{const f=this.Gn(i,c);return h.isEqual(f)?A.resolve():this.zn(e,i,c,h,f)})))))))}))}jn(e,t,n,s){return Mn(e).put(s.Rn(this.uid,this.qn(n,t.key),t.key))}Jn(e,t,n,s){return Mn(e).delete(s.An(this.uid,this.qn(n,t.key),t.key))}Qn(e,t,n){const s=Mn(e);let i=new re(wt);return s.ee({index:td,range:IDBKeyRange.only([n.indexId,this.uid,mi(this.qn(n,t))])},((o,u)=>{i=i.add(new cn(n.indexId,t,Dl(u.arrayValue),Dl(u.directionalValue)))})).next((()=>i))}Gn(e,t){let n=new re(wt);const s=this.kn(t,e);if(s==null)return n;const i=ea(t);if(i!=null){const o=e.data.field(i.fieldPath);if(ys(o))for(const u of o.arrayValue.values||[])n=n.add(new cn(t.indexId,e.key,this.Nn(u),s))}else n=n.add(new cn(t.indexId,e.key,ti,s));return n}zn(e,t,n,s,i){D(kl,"Updating index entries for document '%s'",t.key);const o=[];return(function(c,h,f,m,p){const v=c.getIterator(),C=h.getIterator();let N=Nn(v),x=Nn(C);for(;N||x;){let B=!1,j=!1;if(N&&x){const q=f(N,x);q<0?j=!0:q>0&&(B=!0)}else N!=null?j=!0:B=!0;B?(m(x),x=Nn(C)):j?(p(N),N=Nn(v)):(N=Nn(v),x=Nn(C))}})(s,i,wt,(u=>{o.push(this.jn(e,t,n,u))}),(u=>{o.push(this.Jn(e,t,n,u))})),A.waitFor(o)}Wn(e){let t=1;return On(e).ee({index:ed,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,s,i)=>{i.done(),t=s.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((o,u)=>wt(o,u))).filter(((o,u,c)=>!u||wt(o,c[u-1])!==0));const s=[];s.push(e);for(const o of n){const u=wt(o,e),c=wt(o,t);if(u===0)s[0]=e.In();else if(u>0&&c<0)s.push(o),s.push(o.In());else if(c>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Hn(s[o],s[o+1]))return[];const u=s[o].An(this.uid,ti,k.empty()),c=s[o+1].An(this.uid,ti,k.empty());i.push(IDBKeyRange.bound(u,c))}return i}Hn(e,t){return wt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Ol)}getMinOffset(e,t){return A.mapArray(this.vn(t),(n=>this.Fn(e,n).next((s=>s||F(44426))))).next(Ol)}}function Ml(r){return we(r,ms)}function Mn(r){return we(r,ns)}function $r(r){return we(r,Na)}function On(r){return we(r,ts)}function Ol(r){L(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Ca(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Qe(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hf=41943040;class De{static withCacheSize(e){return new De(e,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(r,e,t){const n=r.store(We),s=r.store(Jn),i=[],o=IDBKeyRange.only(t.batchId);let u=0;const c=n.ee({range:o},((f,m,p)=>(u++,p.delete())));i.push(c.next((()=>{L(u===1,47070,{batchId:t.batchId})})));const h=[];for(const f of t.mutations){const m=Yh(e,f.key.path,t.batchId);i.push(s.delete(m)),h.push(f.key)}return A.waitFor(i).next((()=>h))}function Pi(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw F(14731);e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De.DEFAULT_COLLECTION_PERCENTILE=10,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,De.DEFAULT=new De(hf,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),De.DISABLED=new De(-1,0,0);class Yi{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Zn={}}static wt(e,t,n,s){L(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new Yi(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return At(e).ee({index:ln,range:n},((s,i,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,n,s){const i=qn(e),o=At(e);return o.add({}).next((u=>{L(typeof u=="number",49019);const c=new za(u,t,n,s),h=(function(v,C,N){const x=N.baseMutations.map((j=>Ts(v.yt,j))),B=N.mutations.map((j=>Ts(v.yt,j)));return{userId:C,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:x,mutations:B}})(this.serializer,this.userId,c),f=[];let m=new re(((p,v)=>z(p.canonicalString(),v.canonicalString())));for(const p of s){const v=Yh(this.userId,p.key.path,u);m=m.add(p.key.path.popLast()),f.push(o.put(h)),f.push(i.put(v,a_))}return m.forEach((p=>{f.push(this.indexManager.addToCollectionParentIndex(e,p))})),e.addOnCommittedListener((()=>{this.Zn[u]=c.keys()})),A.waitFor(f).next((()=>c))}))}lookupMutationBatch(e,t){return At(e).get(t).next((n=>n?(L(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),an(this.serializer,n)):null))}Xn(e,t){return this.Zn[t]?A.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next((n=>{if(n){const s=n.keys();return this.Zn[t]=s,s}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return At(e).ee({index:ln,range:s},((o,u,c)=>{u.userId===this.userId&&(L(u.batchId>=n,47524,{Yn:n}),i=an(this.serializer,u)),c.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=xt;return At(e).ee({index:ln,range:t,reverse:!0},((s,i,o)=>{n=i.batchId,o.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,xt],[this.userId,Number.POSITIVE_INFINITY]);return At(e).J(ln,t).next((n=>n.map((s=>an(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ai(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return qn(e).ee({range:s},((o,u,c)=>{const[h,f,m]=o,p=tt(f);if(h===this.userId&&t.path.isEqual(p))return At(e).get(m).next((v=>{if(!v)throw F(61480,{er:o,batchId:m});L(v.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:v.userId,batchId:m}),i.push(an(this.serializer,v))}));c.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new re(z);const s=[];return t.forEach((i=>{const o=ai(this.userId,i.path),u=IDBKeyRange.lowerBound(o),c=qn(e).ee({range:u},((h,f,m)=>{const[p,v,C]=h,N=tt(v);p===this.userId&&i.path.isEqual(N)?n=n.add(C):m.done()}));s.push(c)})),A.waitFor(s).next((()=>this.tr(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=ai(this.userId,n),o=IDBKeyRange.lowerBound(i);let u=new re(z);return qn(e).ee({range:o},((c,h,f)=>{const[m,p,v]=c,C=tt(p);m===this.userId&&n.isPrefixOf(C)?C.length===s&&(u=u.add(v)):f.done()})).next((()=>this.tr(e,u)))}tr(e,t){const n=[],s=[];return t.forEach((i=>{s.push(At(e).get(i).next((o=>{if(o===null)throw F(35274,{batchId:i});L(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),n.push(an(this.serializer,o))})))})),A.waitFor(s).next((()=>n))}removeMutationBatch(e,t){return df(e.le,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.nr(t.batchId)})),A.forEach(n,(s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))))}nr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return A.resolve();const n=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),s=[];return qn(e).ee({range:n},((i,o,u)=>{if(i[0]===this.userId){const c=tt(i[1]);s.push(c)}else u.done()})).next((()=>{L(s.length===0,56720,{rr:s.map((i=>i.canonicalString()))})}))}))}containsKey(e,t){return ff(e,this.userId,t)}ir(e){return mf(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:xt,lastStreamToken:""}))}}function ff(r,e,t){const n=ai(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return qn(r).ee({range:i,Y:!0},((u,c,h)=>{const[f,m,p]=u;f===e&&m===s&&(o=!0),h.done()})).next((()=>o))}function At(r){return we(r,We)}function qn(r){return we(r,Jn)}function mf(r){return we(r,ds)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new En(0)}static ar(){return new En(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.ur(e).next((t=>{const n=new En(t.highestTargetId);return t.highestTargetId=n.next(),this.cr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.ur(e).next((t=>U.fromTimestamp(new ee(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.ur(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.ur(e).next((s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.cr(e,s))))}addTargetData(e,t){return this.lr(e,t).next((()=>this.ur(e).next((n=>(n.targetCount+=1,this.hr(t,n),this.cr(e,n))))))}updateTargetData(e,t){return this.lr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Fn(e).delete(t.targetId))).next((()=>this.ur(e))).next((n=>(L(n.targetCount>0,8065),n.targetCount-=1,this.cr(e,n))))}removeTargets(e,t,n){let s=0;const i=[];return Fn(e).ee(((o,u)=>{const c=Yr(u);c.sequenceNumber<=t&&n.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))})).next((()=>A.waitFor(i))).next((()=>s))}forEachTarget(e,t){return Fn(e).ee(((n,s)=>{const i=Yr(s);t(i)}))}ur(e){return Ll(e).get(wi).next((t=>(L(t!==null,2888),t)))}cr(e,t){return Ll(e).put(wi,t)}lr(e,t){return Fn(e).put(uf(this.serializer,t))}hr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.ur(e).next((t=>t.targetCount))}getTargetData(e,t){const n=gn(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Fn(e).ee({range:s,index:Zh},((o,u,c)=>{const h=Yr(u);bs(t,h.target)&&(i=h,c.done())})).next((()=>i))}addMatchingKeys(e,t,n){const s=[],i=Rt(e);return t.forEach((o=>{const u=xe(o.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(e,n,o))})),A.waitFor(s)}removeMatchingKeys(e,t,n){const s=Rt(e);return A.forEach(t,(i=>{const o=xe(i.path);return A.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])}))}removeMatchingKeysForTargetId(e,t){const n=Rt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=Rt(e);let i=$();return s.ee({range:n,Y:!0},((o,u,c)=>{const h=tt(o[1]),f=new k(h);i=i.add(f)})).next((()=>i))}containsKey(e,t){const n=xe(t.path),s=IDBKeyRange.bound([n],[qh(n)],!1,!0);let i=0;return Rt(e).ee({index:xa,Y:!0,range:s},(([o,u],c,h)=>{o!==0&&(i++,h.done())})).next((()=>i>0))}At(e,t){return Fn(e).get(t).next((n=>n?Yr(n):null))}}function Fn(r){return we(r,Yn)}function Ll(r){return we(r,dn)}function Rt(r){return we(r,Xn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="LruGarbageCollector",gf=1048576;function Ul([r,e],[t,n]){const s=z(r,t);return s===0?z(e,n):s}class ky{constructor(e){this.Pr=e,this.buffer=new re(Ul),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Ul(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class pf{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){D(Bl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){zt(t)?D(Bl,"Ignoring IndexedDB error during garbage collection: ",t):await jt(t)}await this.Ar(3e5)}))}}class My{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return A.resolve(Le.ce);const n=new ky(t);return this.Vr.forEachTarget(e,(s=>n.Ir(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>n.Ir(s))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(Fl)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fl):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let n,s,i,o,u,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s)))).next((m=>(n=m,u=Date.now(),this.removeTargets(e,n,t)))).next((m=>(i=m,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((m=>(h=Date.now(),Ln()<=J.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(u-o)+`ms
	Removed ${i} targets in `+(c-u)+`ms
	Removed ${m} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m}))))}}function _f(r,e){return new My(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,t){this.db=e,this.garbageCollector=_f(this,t)}dr(e){const t=this.pr(e);return this.db.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}pr(e){let t=0;return this.mr(e,(n=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}mr(e,t){return this.yr(e,((n,s)=>t(s)))}addReference(e,t,n){return ni(e,n)}removeReference(e,t,n){return ni(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return ni(e,t)}wr(e,t){return(function(s,i){let o=!1;return mf(s).te((u=>ff(s,u,i).next((c=>(c&&(o=!0),A.resolve(!c)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.yr(e,((o,u)=>{if(u<=t){const c=this.wr(e,o).next((h=>{if(!h)return i++,n.getEntry(e,o).next((()=>(n.removeEntry(o,U.min()),Rt(e).delete((function(m){return[0,xe(m.path)]})(o)))))}));s.push(c)}})).next((()=>A.waitFor(s))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return ni(e,t)}yr(e,t){const n=Rt(e);let s,i=Le.ce;return n.ee({index:xa},(([o,u],{path:c,sequenceNumber:h})=>{o===0?(i!==Le.ce&&t(new k(tt(s)),i),i=h,s=c):i=Le.ce})).next((()=>{i!==Le.ce&&t(new k(tt(s)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ni(r,e){return Rt(r).put((function(n,s){return{targetId:0,path:xe(n.path),sequenceNumber:s}})(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this.changes=new ft((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ue.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?A.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return tn(e).put(n)}removeEntry(e,t,n){return tn(e).delete((function(i,o){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],Ri(o),u[u.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Sr(e,n))))}getEntry(e,t){let n=ue.newInvalidDocument(t);return tn(e).ee({index:ui,range:IDBKeyRange.only(Gr(t))},((s,i)=>{n=this.br(t,i)})).next((()=>n))}Dr(e,t){let n={size:0,document:ue.newInvalidDocument(t)};return tn(e).ee({index:ui,range:IDBKeyRange.only(Gr(t))},((s,i)=>{n={document:this.br(t,i),size:Pi(i)}})).next((()=>n))}getEntries(e,t){let n=Ue();return this.Cr(e,t,((s,i)=>{const o=this.br(s,i);n=n.insert(s,o)})).next((()=>n))}vr(e,t){let n=Ue(),s=new oe(k.comparator);return this.Cr(e,t,((i,o)=>{const u=this.br(i,o);n=n.insert(i,u),s=s.insert(i,Pi(o))})).next((()=>({documents:n,Fr:s})))}Cr(e,t,n){if(t.isEmpty())return A.resolve();let s=new re(zl);t.forEach((c=>s=s.add(c)));const i=IDBKeyRange.bound(Gr(s.first()),Gr(s.last())),o=s.getIterator();let u=o.getNext();return tn(e).ee({index:ui,range:i},((c,h,f)=>{const m=k.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;u&&zl(u,m)<0;)n(u,null),u=o.getNext();u&&u.isEqual(m)&&(n(u,h),u=o.hasNext()?o.getNext():null),u?f.j(Gr(u)):f.done()})).next((()=>{for(;u;)n(u,null),u=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,u=[o.popLast().toArray(),o.lastSegment(),Ri(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return tn(e).J(IDBKeyRange.bound(u,c,!0)).next((h=>{i==null||i.incrementDocumentReadCount(h.length);let f=Ue();for(const m of h){const p=this.br(k.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);p.isFoundDocument()&&(Ss(t,p)||s.has(p.key))&&(f=f.insert(p.key,p))}return f}))}getAllFromCollectionGroup(e,t,n,s){let i=Ue();const o=jl(t,n),u=jl(t,Qe.max());return tn(e).ee({index:Xh,range:IDBKeyRange.bound(o,u,!0)},((c,h,f)=>{const m=this.br(k.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(m.key,m),i.size===s&&f.done()})).next((()=>i))}newChangeBuffer(e){return new Ly(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return ql(e).get(ta).next((t=>(L(!!t,20021),t)))}Sr(e,t){return ql(e).put(ta,t)}br(e,t){if(t){const n=Ay(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(U.min())))return n}return ue.newInvalidDocument(e)}}function If(r){return new Fy(r)}class Ly extends yf{constructor(e,t){super(),this.Mr=e,this.trackRemovals=t,this.Or=new ft((n=>n.toString()),((n,s)=>n.isEqual(s)))}applyChanges(e){const t=[];let n=0,s=new re(((i,o)=>z(i.canonicalString(),o.canonicalString())));return this.changes.forEach(((i,o)=>{const u=this.Or.get(i);if(t.push(this.Mr.removeEntry(e,i,u.readTime)),o.isValidDocument()){const c=vl(this.Mr.serializer,o);s=s.add(i.path.popLast());const h=Pi(c);n+=h-u.size,t.push(this.Mr.addEntry(e,i,c))}else if(n-=u.size,this.trackRemovals){const c=vl(this.Mr.serializer,o.convertToNoDocument(U.min()));t.push(this.Mr.addEntry(e,i,c))}})),s.forEach((i=>{t.push(this.Mr.indexManager.addToCollectionParentIndex(e,i))})),t.push(this.Mr.updateMetadata(e,n)),A.waitFor(t)}getFromCache(e,t){return this.Mr.Dr(e,t).next((n=>(this.Or.set(t,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(e,t){return this.Mr.vr(e,t).next((({documents:n,Fr:s})=>(s.forEach(((i,o)=>{this.Or.set(i,{size:o,readTime:n.get(i).readTime})})),n)))}}function ql(r){return we(r,fs)}function tn(r){return we(r,Ti)}function Gr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function jl(r,e){const t=e.documentKey.path.toArray();return[r,Ri(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function zl(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=z(t[i],n[i]),s)return s;return s=z(t.length,n.length),s||(s=z(t[t.length-2],n[n.length-2]),s||z(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(n!==null&&is(n.mutation,s,Be.empty(),ee.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,$()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=$()){const s=nt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((i=>{let o=Hr();return i.forEach(((u,c)=>{o=o.insert(u,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=nt();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,$())))}populateOverlays(e,t,n){const s=[];return n.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,u)=>{t.set(o,u)}))}))}computeViews(e,t,n,s){let i=Ue();const o=ss(),u=(function(){return ss()})();return t.forEach(((c,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof mt)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),is(f.mutation,h,f.mutation.getFieldMask(),ee.now())):o.set(h.key,Be.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((h,f)=>o.set(h,f))),t.forEach(((h,f)=>u.set(h,new By(f,o.get(h)??null)))),u)))}recalculateAndSaveOverlays(e,t){const n=ss();let s=new oe(((o,u)=>o-u)),i=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const u of o)u.keys().forEach((c=>{const h=t.get(c);if(h===null)return;let f=n.get(c)||Be.empty();f=u.applyToLocalView(h,f),n.set(c,f);const m=(s.get(u.batchId)||$()).add(c);s=s.insert(u.batchId,m)}))})).next((()=>{const o=[],u=s.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),h=c.key,f=c.value,m=Nd();f.forEach((p=>{if(!i.has(p)){const v=Ud(t.get(p),n.get(p));v!==null&&m.set(p,v),i=i.add(p)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return A.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,s){return G_(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ba(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):A.resolve(nt());let u=Qn,c=i;return o.next((h=>A.forEach(h,((f,m)=>(u<m.largestBatchId&&(u=m.largestBatchId),i.get(f)?A.resolve():this.remoteDocumentCache.getEntry(e,f).next((p=>{c=c.insert(f,p)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,c,h,$()))).next((f=>({batchId:u,changes:xd(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new k(t)).next((n=>{let s=Hr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Hr();return this.indexManager.getCollectionParents(e,i).next((u=>A.forEach(u,(c=>{const h=(function(m,p){return new dt(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,n,s).next((f=>{f.forEach(((m,p)=>{o=o.insert(m,p)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s)))).next((o=>{i.forEach(((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ue.newInvalidDocument(f)))}));let u=Hr();return o.forEach(((c,h)=>{const f=i.get(c);f!==void 0&&is(f.mutation,h,Be.empty(),ee.now()),Ss(t,h)&&(u=u.insert(c,h))})),u}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return A.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:pe(s.createTime)}})(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:Hi(s.bundledQuery),readTime:pe(s.readTime)}})(t)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.overlays=new oe(k.comparator),this.Lr=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const n=nt();return A.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((s,i)=>{this.St(e,t,i)})),A.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Lr.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(n)),A.resolve()}getOverlaysForCollection(e,t,n){const s=nt(),i=t.length+1,o=new k(t.child("")),u=this.overlays.getIteratorFrom(o);for(;u.hasNext();){const c=u.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return A.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new oe(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=nt(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const u=nt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((h,f)=>u.set(h,f))),!(u.size()>=s)););return A.resolve(u)}St(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(n.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Ga(t,n));let i=this.Lr.get(t);i===void 0&&(i=$(),this.Lr.set(t,i)),this.Lr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(){this.sessionToken=fe.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.kr=new re(ve.qr),this.Kr=new re(ve.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const n=new ve(e,t);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Wr(new ve(e,t))}Qr(e,t){e.forEach((n=>this.removeReference(n,t)))}Gr(e){const t=new k(new K([])),n=new ve(t,e),s=new ve(t,e+1),i=[];return this.Kr.forEachInRange([n,s],(o=>{this.Wr(o),i.push(o.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new k(new K([])),n=new ve(t,e),s=new ve(t,e+1);let i=$();return this.Kr.forEachInRange([n,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new ve(e,0),n=this.kr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ve{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return k.comparator(e.key,t.key)||z(e.Jr,t.Jr)}static Ur(e,t){return z(e.Jr,t.Jr)||k.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new re(ve.qr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new za(i,t,n,s);this.mutationQueue.push(o);for(const u of s)this.Hr=this.Hr.add(new ve(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,t){return A.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Xr(n),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?xt:this.Yn-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ve(t,0),s=new ve(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([n,s],(o=>{const u=this.Zr(o.Jr);i.push(u)})),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new re(z);return t.forEach((s=>{const i=new ve(s,0),o=new ve(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],(u=>{n=n.add(u.Jr)}))})),A.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;k.isDocumentKey(i)||(i=i.child(""));const o=new ve(new k(i),0);let u=new re(z);return this.Hr.forEachWhile((c=>{const h=c.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(u=u.add(c.Jr)),!0)}),o),A.resolve(this.Yr(u))}Yr(e){const t=[];return e.forEach((n=>{const s=this.Zr(n);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){L(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Hr;return A.forEach(t.mutations,(s=>{const i=new ve(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Hr=n}))}nr(e){}containsKey(e,t){const n=new ve(t,0),s=this.Hr.firstAfterOrEqual(n);return A.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){this.ti=e,this.docs=(function(){return new oe(k.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return A.resolve(n?n.document.mutableCopy():ue.newInvalidDocument(t))}getEntries(e,t){let n=Ue();return t.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ue.newInvalidDocument(s))})),A.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=Ue();const o=t.path,u=new k(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Ca(Kh(f),n)<=0||(s.has(f.key)||Ss(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,t,n,s){F(9500)}ni(e,t){return A.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new Gy(this)}getSize(e){return A.resolve(this.size)}}class Gy extends yf{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(n)})),A.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e){this.persistence=e,this.ri=new ft((t=>gn(t)),bs),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.ii=0,this.si=new Ja,this.targetCount=0,this.oi=En._r()}forEachTarget(e,t){return this.ri.forEach(((n,s)=>t(s))),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ii&&(this.ii=t),A.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new En(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.lr(t),A.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.ri.forEach(((o,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)})),A.waitFor(i).next((()=>s))}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const n=this.ri.get(t)||null;return A.resolve(n)}addMatchingKeys(e,t,n){return this.si.$r(t,n),A.resolve()}removeMatchingKeys(e,t,n){this.si.Qr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),A.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),A.resolve()}getMatchingKeysForTargetId(e,t){const n=this.si.jr(t);return A.resolve(n)}containsKey(e,t){return A.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t){this._i={},this.overlays={},this.ai=new Le(0),this.ui=!1,this.ui=!0,this.ci=new jy,this.referenceDelegate=e(this),this.li=new Ky(this),this.indexManager=new Dy,this.remoteDocumentCache=(function(s){return new $y(s)})((n=>this.referenceDelegate.hi(n))),this.serializer=new af(t),this.Pi=new Uy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this._i[e.toKey()];return n||(n=new zy(t,this.referenceDelegate),this._i[e.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,n){D("MemoryPersistence","Starting transaction:",e);const s=new Qy(this.ai.next());return this.referenceDelegate.Ti(),n(s).next((i=>this.referenceDelegate.Ei(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ii(e,t){return A.or(Object.values(this._i).map((n=>()=>n.containsKey(e,t))))}}class Qy extends Wh{constructor(e){super(),this.currentSequenceNumber=e}}class Xi{constructor(e){this.persistence=e,this.Ri=new Ja,this.Ai=null}static Vi(e){return new Xi(e)}get di(){if(this.Ai)return this.Ai;throw F(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.di.delete(n.toString()),A.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.di.add(n.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),A.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.di,(n=>{const s=k.fromPath(n);return this.mi(e,s).next((i=>{i||t.removeEntry(s,U.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((n=>{n?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return A.or([()=>A.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Vi{constructor(e,t){this.persistence=e,this.fi=new ft((n=>xe(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=_f(this,t)}static Vi(e,t){return new Vi(e,t)}Ti(){}Ei(e){return A.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}pr(e){let t=0;return this.mr(e,(n=>{t++})).next((()=>t))}mr(e,t){return A.forEach(this.fi,((n,s)=>this.wr(e,n,s).next((i=>i?A.resolve():t(s)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((u=>{u||(n++,i.removeEntry(o,U.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),A.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),A.resolve()}removeReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),A.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),A.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=li(e.data.value)),t}wr(e,t,n){return A.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return A.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e){this.serializer=e}k(e,t,n,s){const i=new Li("createOrUpgrade",t);n<1&&s>=1&&((function(c){c.createObjectStore(vs)})(e),(function(c){c.createObjectStore(ds,{keyPath:o_}),c.createObjectStore(We,{keyPath:el,autoIncrement:!0}).createIndex(ln,tl,{unique:!0}),c.createObjectStore(Jn)})(e),$l(e),(function(c){c.createObjectStore(sn)})(e));let o=A.resolve();return n<3&&s>=3&&(n!==0&&((function(c){c.deleteObjectStore(Xn),c.deleteObjectStore(Yn),c.deleteObjectStore(dn)})(e),$l(e)),o=o.next((()=>(function(c){const h=c.store(dn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return h.put(wi,f)})(i)))),n<4&&s>=4&&(n!==0&&(o=o.next((()=>(function(c,h){return h.store(We).J().next((m=>{c.deleteObjectStore(We),c.createObjectStore(We,{keyPath:el,autoIncrement:!0}).createIndex(ln,tl,{unique:!0});const p=h.store(We),v=m.map((C=>p.put(C)));return A.waitFor(v)}))})(e,i)))),o=o.next((()=>{(function(c){c.createObjectStore(Zn,{keyPath:g_})})(e)}))),n<5&&s>=5&&(o=o.next((()=>this.gi(i)))),n<6&&s>=6&&(o=o.next((()=>((function(c){c.createObjectStore(fs)})(e),this.pi(i))))),n<7&&s>=7&&(o=o.next((()=>this.yi(i)))),n<8&&s>=8&&(o=o.next((()=>this.wi(e,i)))),n<9&&s>=9&&(o=o.next((()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)}))),n<10&&s>=10&&(o=o.next((()=>this.Si(i)))),n<11&&s>=11&&(o=o.next((()=>{(function(c){c.createObjectStore(Bi,{keyPath:p_})})(e),(function(c){c.createObjectStore(Ui,{keyPath:__})})(e)}))),n<12&&s>=12&&(o=o.next((()=>{(function(c){const h=c.createObjectStore(qi,{keyPath:v_});h.createIndex(ra,b_,{unique:!1}),h.createIndex(nd,R_,{unique:!1})})(e)}))),n<13&&s>=13&&(o=o.next((()=>(function(c){const h=c.createObjectStore(Ti,{keyPath:u_});h.createIndex(ui,c_),h.createIndex(Xh,l_)})(e))).next((()=>this.bi(e,i))).next((()=>e.deleteObjectStore(sn)))),n<14&&s>=14&&(o=o.next((()=>this.Di(e,i)))),n<15&&s>=15&&(o=o.next((()=>(function(c){c.createObjectStore(Na,{keyPath:y_,autoIncrement:!0}).createIndex(na,I_,{unique:!1}),c.createObjectStore(ts,{keyPath:E_}).createIndex(ed,T_,{unique:!1}),c.createObjectStore(ns,{keyPath:w_}).createIndex(td,A_,{unique:!1})})(e)))),n<16&&s>=16&&(o=o.next((()=>{t.objectStore(ts).clear()})).next((()=>{t.objectStore(ns).clear()}))),n<17&&s>=17&&(o=o.next((()=>{(function(c){c.createObjectStore(ka,{keyPath:S_})})(e)}))),n<18&&s>=18&&Ah()&&(o=o.next((()=>{t.objectStore(ts).clear()})).next((()=>{t.objectStore(ns).clear()}))),o}pi(e){let t=0;return e.store(sn).ee(((n,s)=>{t+=Pi(s)})).next((()=>{const n={byteSize:t};return e.store(fs).put(ta,n)}))}gi(e){const t=e.store(ds),n=e.store(We);return t.J().next((s=>A.forEach(s,(i=>{const o=IDBKeyRange.bound([i.userId,xt],[i.userId,i.lastAcknowledgedBatchId]);return n.J(ln,o).next((u=>A.forEach(u,(c=>{L(c.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:c.batchId});const h=an(this.serializer,c);return df(e,i.userId,h).next((()=>{}))}))))}))))}yi(e){const t=e.store(Xn),n=e.store(sn);return e.store(dn).get(wi).next((s=>{const i=[];return n.ee(((o,u)=>{const c=new K(o),h=(function(m){return[0,xe(m)]})(c);i.push(t.get(h).next((f=>f?A.resolve():(m=>t.put({targetId:0,path:xe(m),sequenceNumber:s.highestListenSequenceNumber}))(c))))})).next((()=>A.waitFor(i)))}))}wi(e,t){e.createObjectStore(ms,{keyPath:m_});const n=t.store(ms),s=new Ha,i=o=>{if(s.add(o)){const u=o.lastSegment(),c=o.popLast();return n.put({collectionId:u,parent:xe(c)})}};return t.store(sn).ee({Y:!0},((o,u)=>{const c=new K(o);return i(c.popLast())})).next((()=>t.store(Jn).ee({Y:!0},(([o,u,c],h)=>{const f=tt(u);return i(f.popLast())}))))}Si(e){const t=e.store(Yn);return t.ee(((n,s)=>{const i=Yr(s),o=uf(this.serializer,i);return t.put(o)}))}bi(e,t){const n=t.store(sn),s=[];return n.ee(((i,o)=>{const u=t.store(Ti),c=(function(m){return m.document?new k(K.fromString(m.document.name).popFirst(5)):m.noDocument?k.fromSegments(m.noDocument.path):m.unknownDocument?k.fromSegments(m.unknownDocument.path):F(36783)})(o).path.toArray(),h={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(u.put(h))})).next((()=>A.waitFor(s)))}Di(e,t){const n=t.store(We),s=If(this.serializer),i=new Ya(Xi.Vi,this.serializer.yt);return n.J().next((o=>{const u=new Map;return o.forEach((c=>{let h=u.get(c.userId)??$();an(this.serializer,c).keys().forEach((f=>h=h.add(f))),u.set(c.userId,h)})),A.forEach(u,((c,h)=>{const f=new be(h),m=Ji.wt(this.serializer,f),p=i.getIndexManager(f),v=Yi.wt(f,this.serializer,p,i.referenceDelegate);return new Ef(s,v,m,p).recalculateAndSaveOverlaysForDocumentKeys(new sa(t,Le.ce),c).next()}))}))}}function $l(r){r.createObjectStore(Xn,{keyPath:d_}).createIndex(xa,f_,{unique:!0}),r.createObjectStore(Yn,{keyPath:"targetId"}).createIndex(Zh,h_,{unique:!0}),r.createObjectStore(dn)}const vt="IndexedDbPersistence",Bo=18e5,Uo=5e3,qo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Tf="main";class Xa{constructor(e,t,n,s,i,o,u,c,h,f,m=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Ci=i,this.window=o,this.document=u,this.Fi=h,this.Mi=f,this.xi=m,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=p=>Promise.resolve(),!Xa.v())throw new V(R.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Oy(this,s),this.qi=t+Tf,this.serializer=new af(c),this.Ki=new rt(this.qi,this.xi,new Wy(this.serializer)),this.ci=new by,this.li=new Ny(this.referenceDelegate,this.serializer),this.remoteDocumentCache=If(this.serializer),this.Pi=new vy,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,f===!1&&ge(vt,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new V(R.FAILED_PRECONDITION,qo);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.li.getHighestSequenceNumber(e)))})).then((e=>{this.ai=new Le(e,this.Fi)})).then((()=>{this.ui=!0})).catch((e=>(this.Ki&&this.Ki.close(),Promise.reject(e))))}zi(e){return this.ki=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ki.K((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ci.enqueueAndForget((async()=>{this.started&&await this.$i()})))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>ri(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.ji(e).next((t=>{t||(this.isPrimary=!1,this.Ci.enqueueRetryable((()=>this.ki(!1))))}))})).next((()=>this.Ji(e))).next((t=>this.isPrimary&&!t?this.Hi(e).next((()=>!1)):!!t&&this.Zi(e).next((()=>!0)))))).catch((e=>{if(zt(e))return D(vt,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return D(vt,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Ci.enqueueRetryable((()=>this.ki(e))),this.isPrimary=e}))}ji(e){return Kr(e).get(xn).next((t=>A.resolve(this.Xi(t))))}Yi(e){return ri(e).delete(this.clientId)}async es(){if(this.isPrimary&&!this.ts(this.Li,Bo)){this.Li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=we(t,Zn);return n.J().next((s=>{const i=this.ns(s,Bo),o=s.filter((u=>i.indexOf(u)===-1));return A.forEach(o,(u=>n.delete(u.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ui)for(const t of e)this.Ui.removeItem(this.rs(t.clientId))}}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.$i().then((()=>this.es())).then((()=>this.Gi()))))}Xi(e){return!!e&&e.ownerId===this.clientId}Ji(e){return this.Mi?A.resolve(!0):Kr(e).get(xn).next((t=>{if(t!==null&&this.ts(t.leaseTimestampMs,Uo)&&!this.ss(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new V(R.FAILED_PRECONDITION,qo);return!1}}return!(!this.networkEnabled||!this.inForeground)||ri(e).J().next((n=>this.ns(n,Uo).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||o&&u)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&D(vt,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),await this.Ki.runTransaction("shutdown","readwrite",[vs,Zn],(e=>{const t=new sa(e,Le.ce);return this.Hi(t).next((()=>this.Yi(t)))})),this.Ki.close(),this.ls()}ns(e,t){return e.filter((n=>this.ts(n.updateTimeMs,t)&&!this.ss(n.clientId)))}hs(){return this.runTransaction("getActiveClients","readonly",(e=>ri(e).J().next((t=>this.ns(t,Bo).map((n=>n.clientId))))))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(e,t){return Yi.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new xy(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return Ji.wt(this.serializer,e)}getBundleCache(){return this.Pi}runTransaction(e,t,n){D(vt,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(function(c){return c===18?C_:c===17?od:c===16?V_:c===15?Ma:c===14?id:c===13?sd:c===12?P_:c===11?rd:void F(60245)})(this.xi);let o;return this.Ki.runTransaction(e,s,i,(u=>(o=new sa(u,this.ai?this.ai.next():Le.ce),t==="readwrite-primary"?this.ji(o).next((c=>!!c||this.Ji(o))).next((c=>{if(!c)throw ge(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable((()=>this.ki(!1))),new V(R.FAILED_PRECONDITION,Qh);return n(o)})).next((c=>this.Zi(o).next((()=>c)))):this.Ps(o).next((()=>n(o)))))).then((u=>(o.raiseOnCommittedEvent(),u)))}Ps(e){return Kr(e).get(xn).next((t=>{if(t!==null&&this.ts(t.leaseTimestampMs,Uo)&&!this.ss(t.ownerId)&&!this.Xi(t)&&!(this.Mi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new V(R.FAILED_PRECONDITION,qo)}))}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Kr(e).put(xn,t)}static v(){return rt.v()}Hi(e){const t=Kr(e);return t.get(xn).next((n=>this.Xi(n)?(D(vt,"Releasing primary lease."),t.delete(xn)):A.resolve()))}ts(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ge(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.$i())))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Oi=()=>{this._s();const t=/(?:Version|Mobile)\/1[456]/;wh()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(e){var t;try{const n=((t=this.Ui)==null?void 0:t.getItem(this.rs(e)))!==null;return D(vt,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ge(vt,"Failed to get zombied client id.",n),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(e){ge("Failed to set zombie client id.",e)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch{}}rs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Kr(r){return we(r,vs)}function ri(r){return we(r,Zn)}function Za(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Ts=n,this.Es=s}static Is(e,t){let n=$(),s=$();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new eu(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return wh()?8:Hh(Gn())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.gs(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ps(e,t,s,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new Hy;return this.ys(e,t,o).next((u=>{if(i.result=u,this.As)return this.ws(e,t,o,u.size)}))})).next((()=>i.result))}ws(e,t,n,s){return n.documentReadCount<this.Vs?(Ln()<=J.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Bn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),A.resolve()):(Ln()<=J.DEBUG&&D("QueryEngine","Query:",Bn(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(Ln()<=J.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Bn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ne(t))):A.resolve())}gs(e,t){if(ml(t))return A.resolve(null);let n=Ne(t);return this.indexManager.getIndexType(e,n).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=bi(t,null,"F"),n=Ne(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const o=$(...i);return this.fs.getDocuments(e,o).next((u=>this.indexManager.getMinOffset(e,n).next((c=>{const h=this.Ss(t,u);return this.bs(t,h,o,c.readTime)?this.gs(e,bi(t,null,"F")):this.Ds(e,h,t,c)}))))})))))}ps(e,t,n,s){return ml(t)||s.isEqual(U.min())?A.resolve(null):this.fs.getDocuments(e,n).next((i=>{const o=this.Ss(t,i);return this.bs(t,o,n,s)?A.resolve(null):(Ln()<=J.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Bn(t)),this.Ds(e,o,t,Gh(s,Qn)).next((u=>u)))}))}Ss(e,t){let n=new re(Cd(e));return t.forEach(((s,i)=>{Ss(e,i)&&(n=n.add(i))})),n}bs(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,n){return Ln()<=J.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Bn(t)),this.fs.getDocumentsMatchingQuery(e,t,Qe.min(),n)}Ds(e,t,n,s){return this.fs.getDocumentsMatchingQuery(e,n,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="LocalStore",Jy=3e8;class Yy{constructor(e,t,n,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new oe(z),this.Fs=new ft((i=>gn(i)),bs),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(n)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ef(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function Af(r,e,t,n){return new Yy(r,e,t,n)}async function vf(r,e){const t=M(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],u=[];let c=$();for(const h of s){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){u.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(n,c).next((h=>({Ns:h,removedBatchIds:o,addedBatchIds:u})))}))}))}function Xy(r,e){const t=M(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(u,c,h,f){const m=h.batch,p=m.keys();let v=A.resolve();return p.forEach((C=>{v=v.next((()=>f.getEntry(c,C))).next((N=>{const x=h.docVersions.get(C);L(x!==null,48541),N.version.compareTo(x)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))}))})),v.next((()=>u.mutationQueue.removeMutationBatch(c,m)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(u){let c=$();for(let h=0;h<u.mutationResults.length;++h)u.mutationResults[h].transformResults.length>0&&(c=c.add(u.batch.mutations[h].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(n,s)))}))}function bf(r){const e=M(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function Zy(r,e){const t=M(r),n=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const u=[];e.targetChanges.forEach(((f,m)=>{const p=s.get(m);if(!p)return;u.push(t.li.removeMatchingKeys(i,f.removedDocuments,m).next((()=>t.li.addMatchingKeys(i,f.addedDocuments,m))));let v=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?v=v.withResumeToken(fe.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,n)),s=s.insert(m,v),(function(N,x,B){return N.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=Jy?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0})(p,v,f)&&u.push(t.li.updateTargetData(i,v))}));let c=Ue(),h=$();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),u.push(Rf(i,o,e.documentUpdates).next((f=>{c=f.Bs,h=f.Ls}))),!n.isEqual(U.min())){const f=t.li.getLastRemoteSnapshotVersion(i).next((m=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,n)));u.push(f)}return A.waitFor(u).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,c,h))).next((()=>c))})).then((i=>(t.vs=s,i)))}function Rf(r,e,t){let n=$(),s=$();return t.forEach((i=>n=n.add(i))),e.getEntries(r,n).next((i=>{let o=Ue();return t.forEach(((u,c)=>{const h=i.get(u);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(U.min())?(e.removeEntry(u,c.readTime),o=o.insert(u,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(u,c)):D(tu,"Ignoring outdated watch update for ",u,". Current version:",h.version," Watch version:",c.version)})),{Bs:o,Ls:s}}))}function eI(r,e){const t=M(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=xt),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function or(r,e){const t=M(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return t.li.getTargetData(n,e).next((i=>i?(s=i,A.resolve(s)):t.li.allocateTargetId(n).next((o=>(s=new ot(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.li.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=t.vs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(n.targetId,n),t.Fs.set(e,n.targetId)),n}))}async function ar(r,e,t){const n=M(r),s=n.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!zt(o))throw o;D(tu,`Failed to update sequence numbers for target ${e}: ${o}`)}n.vs=n.vs.remove(e),n.Fs.delete(s.target)}function Ci(r,e,t){const n=M(r);let s=U.min(),i=$();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,h,f){const m=M(c),p=m.Fs.get(f);return p!==void 0?A.resolve(m.vs.get(p)):m.li.getTargetData(h,f)})(n,o,Ne(e)).next((u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.li.getMatchingKeysForTargetId(o,u.targetId).next((c=>{i=c}))})).next((()=>n.Cs.getDocumentsMatchingQuery(o,e,t?s:U.min(),t?i:$()))).next((u=>(Vf(n,Vd(e),u),{documents:u,ks:i})))))}function Sf(r,e){const t=M(r),n=M(t.li),s=t.vs.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",(i=>n.At(i,e).next((o=>o?o.target:null))))}function Pf(r,e){const t=M(r),n=t.Ms.get(e)||U.min();return t.persistence.runTransaction("Get new document changes","readonly",(s=>t.xs.getAllFromCollectionGroup(s,e,Gh(n,Qn),Number.MAX_SAFE_INTEGER))).then((s=>(Vf(t,e,s),s)))}function Vf(r,e,t){let n=r.Ms.get(e)||U.min();t.forEach(((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),r.Ms.set(e,n)}async function tI(r,e,t,n){const s=M(r);let i=$(),o=Ue();for(const h of t){const f=e.qs(h.metadata.name);h.document&&(i=i.add(f));const m=e.Ks(h);m.setReadTime(e.Us(h.metadata.readTime)),o=o.insert(f,m)}const u=s.xs.newChangeBuffer({trackRemovals:!0}),c=await or(s,(function(f){return Ne(gr(K.fromString(`__bundle__/docs/${f}`)))})(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",(h=>Rf(h,u,o).next((f=>(u.apply(h),f))).next((f=>s.li.removeMatchingKeysForTargetId(h,c.targetId).next((()=>s.li.addMatchingKeys(h,i,c.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(h,f.Bs,f.Ls))).next((()=>f.Bs))))))}async function nI(r,e,t=$()){const n=await or(r,Ne(Hi(e.bundledQuery))),s=M(r);return s.persistence.runTransaction("Save named query","readwrite",(i=>{const o=pe(e.readTime);if(n.snapshotVersion.compareTo(o)>=0)return s.Pi.saveNamedQuery(i,e);const u=n.withResumeToken(fe.EMPTY_BYTE_STRING,o);return s.vs=s.vs.insert(u.targetId,u),s.li.updateTargetData(i,u).next((()=>s.li.removeMatchingKeysForTargetId(i,n.targetId))).next((()=>s.li.addMatchingKeys(i,t,n.targetId))).next((()=>s.Pi.saveNamedQuery(i,e)))}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="firestore_clients";function Gl(r,e){return`${Cf}_${r}_${e}`}const Df="firestore_mutations";function Kl(r,e,t){let n=`${Df}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const xf="firestore_targets";function jo(r,e){return`${xf}_${r}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="SharedClientState";class Di{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static $s(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new V(s.error.code,s.error.message))),o?new Di(e,t,s.state,i):(ge(et,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class as{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static $s(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new V(n.error.code,n.error.message))),i?new as(e,n.state,s):(ge(et,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class xi{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static $s(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Ua();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=Jh(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new xi(e,i):(ge(et,`Failed to parse client data for instance '${e}': ${t}`),null)}}class nu{constructor(e,t){this.clientId=e,this.onlineState=t}static $s(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new nu(t.clientId,t.onlineState):(ge(et,`Failed to parse online state: ${e}`),null)}}class ya{constructor(){this.activeTargetIds=Ua()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zo{constructor(e,t,n,s,i){this.window=e,this.Ci=t,this.persistenceKey=n,this.zs=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.js=this.Js.bind(this),this.Hs=new oe(z),this.started=!1,this.Zs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Xs=Gl(this.persistenceKey,this.zs),this.Ys=(function(c){return`firestore_sequence_number_${c}`})(this.persistenceKey),this.Hs=this.Hs.insert(this.zs,new ya),this.eo=new RegExp(`^${Cf}_${o}_([^_]*)$`),this.no=new RegExp(`^${Df}_${o}_(\\d+)(?:_(.*))?$`),this.ro=new RegExp(`^${xf}_${o}_(\\d+)$`),this.io=(function(c){return`firestore_online_state_${c}`})(this.persistenceKey),this.so=(function(c){return`firestore_bundle_loaded_v2_${c}`})(this.persistenceKey),this.window.addEventListener("storage",this.js)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.hs();for(const n of e){if(n===this.zs)continue;const s=this.getItem(Gl(this.persistenceKey,n));if(s){const i=xi.$s(n,s);i&&(this.Hs=this.Hs.insert(i.clientId,i))}}this.oo();const t=this.storage.getItem(this.io);if(t){const n=this._o(t);n&&this.ao(n)}for(const n of this.Zs)this.Js(n);this.Zs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ys,JSON.stringify(e))}getAllActiveQueryTargets(){return this.uo(this.Hs)}isActiveQueryTarget(e){let t=!1;return this.Hs.forEach(((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.co(e,"pending")}updateMutationState(e,t,n){this.co(e,t,n),this.lo(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(jo(this.persistenceKey,e));if(s){const i=as.$s(e,s);i&&(n=i.state)}}return t&&this.ho.Qs(e),this.oo(),n}removeLocalQueryTarget(e){this.ho.Gs(e),this.oo()}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(jo(this.persistenceKey,e))}updateQueryState(e,t,n){this.Po(e,t,n)}handleUserChange(e,t,n){t.forEach((s=>{this.lo(s)})),this.currentUser=e,n.forEach((s=>{this.addPendingMutation(s)}))}setOnlineState(e){this.To(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return D(et,"READ",e,t),t}setItem(e,t){D(et,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){D(et,"REMOVE",e),this.storage.removeItem(e)}Js(e){const t=e;if(t.storageArea===this.storage){if(D(et,"EVENT",t.key,t.newValue),t.key===this.Xs)return void ge("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ci.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.eo.test(t.key)){if(t.newValue==null){const n=this.Io(t.key);return this.Ro(n,null)}{const n=this.Ao(t.key,t.newValue);if(n)return this.Ro(n.clientId,n)}}else if(this.no.test(t.key)){if(t.newValue!==null){const n=this.Vo(t.key,t.newValue);if(n)return this.mo(n)}}else if(this.ro.test(t.key)){if(t.newValue!==null){const n=this.fo(t.key,t.newValue);if(n)return this.po(n)}}else if(t.key===this.io){if(t.newValue!==null){const n=this._o(t.newValue);if(n)return this.ao(n)}}else if(t.key===this.Ys){const n=(function(i){let o=Le.ce;if(i!=null)try{const u=JSON.parse(i);L(typeof u=="number",30636,{yo:i}),o=u}catch(u){ge(et,"Failed to read sequence number from WebStorage",u)}return o})(t.newValue);n!==Le.ce&&this.sequenceNumberHandler(n)}else if(t.key===this.so){const n=this.wo(t.newValue);await Promise.all(n.map((s=>this.syncEngine.So(s))))}}}else this.Zs.push(t)}))}}get ho(){return this.Hs.get(this.zs)}oo(){this.setItem(this.Xs,this.ho.Ws())}co(e,t,n){const s=new Di(this.currentUser,e,t,n),i=Kl(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Ws())}lo(e){const t=Kl(this.persistenceKey,this.currentUser,e);this.removeItem(t)}To(e){const t={clientId:this.zs,onlineState:e};this.storage.setItem(this.io,JSON.stringify(t))}Po(e,t,n){const s=jo(this.persistenceKey,e),i=new as(e,t,n);this.setItem(s,i.Ws())}Eo(e){const t=JSON.stringify(Array.from(e));this.setItem(this.so,t)}Io(e){const t=this.eo.exec(e);return t?t[1]:null}Ao(e,t){const n=this.Io(e);return xi.$s(n,t)}Vo(e,t){const n=this.no.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Di.$s(new be(i),s,t)}fo(e,t){const n=this.ro.exec(e),s=Number(n[1]);return as.$s(s,t)}_o(e){return nu.$s(e)}wo(e){return JSON.parse(e)}async mo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.bo(e.batchId,e.state,e.error);D(et,`Ignoring mutation for non-active user ${e.user.uid}`)}po(e){return this.syncEngine.Do(e.targetId,e.state,e.error)}Ro(e,t){const n=t?this.Hs.insert(e,t):this.Hs.remove(e),s=this.uo(this.Hs),i=this.uo(n),o=[],u=[];return i.forEach((c=>{s.has(c)||o.push(c)})),s.forEach((c=>{i.has(c)||u.push(c)})),this.syncEngine.Co(o,u).then((()=>{this.Hs=n}))}ao(e){this.Hs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}uo(e){let t=Ua();return e.forEach(((n,s)=>{t=t.unionWith(s.activeTargetIds)})),t}}class Nf{constructor(){this.vo=new ya,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,n){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new ya,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="ConnectivityMonitor";class Wl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){D(Ql,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){D(Ql,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si=null;function Ia(){return si===null?si=(function(){return 268435456+Math.round(2147483648*Math.random())})():si++,"0x"+si.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o="RestConnection",sI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class iI{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${n}/databases/${s}`,this.$o=this.databaseId.database===ps?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Wo(e,t,n,s,i){const o=Ia(),u=this.Qo(e,t.toUriEncodedString());D($o,`Sending RPC '${e}' ${o}:`,u,n);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,s,i);const{host:h}=new URL(u),f=ba(h);return this.zo(e,u,c,n,f).then((m=>(D($o,`Received RPC '${e}' ${o}: `,m),m)),(m=>{throw ze($o,`RPC '${e}' ${o} failed with error: `,m,"url: ",u,"request:",n),m}))}jo(e,t,n,s,i,o){return this.Wo(e,t,n,s,i)}Go(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+mr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),n&&n.headers.forEach(((s,i)=>e[i]=s))}Qo(e,t){const n=sI[e];let s=`${this.Ko}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="WebChannelConnection",Qr=(r,e,t)=>{r.listen(e,(n=>{try{t(n)}catch(s){setTimeout((()=>{throw s}),0)}}))};class zn extends iI{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!zn.c_){const e=Oh();Qr(e,Mh.STAT_EVENT,(t=>{t.stat===Jo.PROXY?D(Ce,"STAT_EVENT: detected buffering proxy"):t.stat===Jo.NOPROXY&&D(Ce,"STAT_EVENT: detected no buffering proxy")})),zn.c_=!0}}zo(e,t,n,s,i){const o=Ia();return new Promise(((u,c)=>{const h=new Nh;h.setWithCredentials(!0),h.listenOnce(kh.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case oi.NO_ERROR:const m=h.getResponseJson();D(Ce,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),u(m);break;case oi.TIMEOUT:D(Ce,`RPC '${e}' ${o} timed out`),c(new V(R.DEADLINE_EXCEEDED,"Request time out"));break;case oi.HTTP_ERROR:const p=h.getStatus();if(D(Ce,`RPC '${e}' ${o} failed with status:`,p,"response text:",h.getResponseText()),p>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const C=v==null?void 0:v.error;if(C&&C.status&&C.message){const N=(function(B){const j=B.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(j)>=0?j:R.UNKNOWN})(C.status);c(new V(N,C.message))}else c(new V(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new V(R.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{D(Ce,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);D(Ce,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",f,n,15)}))}T_(e,t,n){const s=Ia(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Go(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const h=i.join("");D(Ce,`Creating RPC '${e}' stream ${s}: ${h}`,u);const f=o.createWebChannel(h,u);this.E_(f);let m=!1,p=!1;const v=new oI({Jo:C=>{p?D(Ce,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(m||(D(Ce,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),D(Ce,`RPC '${e}' stream ${s} sending:`,C),f.send(C))},Ho:()=>f.close()});return Qr(f,Wr.EventType.OPEN,(()=>{p||(D(Ce,`RPC '${e}' stream ${s} transport opened.`),v.i_())})),Qr(f,Wr.EventType.CLOSE,(()=>{p||(p=!0,D(Ce,`RPC '${e}' stream ${s} transport closed`),v.o_(),this.I_(f))})),Qr(f,Wr.EventType.ERROR,(C=>{p||(p=!0,ze(Ce,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),v.o_(new V(R.UNAVAILABLE,"The operation could not be completed")))})),Qr(f,Wr.EventType.MESSAGE,(C=>{var N;if(!p){const x=C.data[0];L(!!x,16349);const B=x,j=(B==null?void 0:B.error)||((N=B[0])==null?void 0:N.error);if(j){D(Ce,`RPC '${e}' stream ${s} received error:`,j);const q=j.status;let Z=(function(E){const _=_e[E];if(_!==void 0)return $d(_)})(q),Y=j.message;q==="NOT_FOUND"&&Y.includes("database")&&Y.includes("does not exist")&&Y.includes(this.databaseId.database)&&ze(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Z===void 0&&(Z=R.INTERNAL,Y="Unknown error status: "+q+" with message "+j.message),p=!0,v.o_(new V(Z,Y)),f.close()}else D(Ce,`RPC '${e}' stream ${s} received:`,x),v.__(x)}})),zn.u_(),setTimeout((()=>{v.s_()}),0),v}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,n){super.Go(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Fh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(r){return new zn(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(){return typeof window<"u"?window:null}function gi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(r){return new fy(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zn.c_=!1;class ru{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=n,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-n);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="PersistentStream";class Mf{constructor(e,t,n,s,i,o,u,c){this.Ci=e,this.S_=n,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ru(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(ge(t.toString()),ge("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.D_===t&&this.G_(n,s)}),(n=>{e((()=>{const s=new V(R.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)}))}))}G_(e,t){const n=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.Yo((()=>{n((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{n((()=>this.z_(s)))})),this.stream.onMessage((s=>{n((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return D(Hl,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(D(Hl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class uI extends Mf{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=py(this.serializer,e),n=(function(i){if(!("targetChange"in i))return U.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?U.min():o.readTime?pe(o.readTime):U.min()})(e);return this.listener.H_(t,n)}Z_(e){const t={};t.database=fa(this.serializer),t.addTarget=(function(i,o){let u;const c=o.target;if(u=Ai(c)?{documents:Zd(i,c)}:{query:Wi(i,c).ft},u.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){u.resumeToken=Wd(i,o.resumeToken);const h=ha(i,o.expectedCount);h!==null&&(u.expectedCount=h)}else if(o.snapshotVersion.compareTo(U.min())>0){u.readTime=ir(i,o.snapshotVersion.toTimestamp());const h=ha(i,o.expectedCount);h!==null&&(u.expectedCount=h)}return u})(this.serializer,e);const n=yy(this.serializer,e);n&&(t.labels=n),this.q_(t)}X_(e){const t={};t.database=fa(this.serializer),t.removeTarget=e,this.q_(t)}}class cI extends Mf{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return L(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,L(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){L(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=_y(e.writeResults,e.commitTime),n=pe(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=fa(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>Ts(this.serializer,n)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{}class hI extends lI{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,da(t,n),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(R.UNKNOWN,i.toString())}))}jo(e,t,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,u])=>this.connection.jo(e,da(t,n),s,o,u,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(R.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function dI(r,e,t,n){return new hI(r,e,t,n)}class fI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ge(t),this.aa=!1):D("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="RemoteStore";class mI{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((o=>{n.enqueueAndForget((async()=>{Gt(this)&&(D(Tn,"Restarting streams for network reachability change."),await(async function(c){const h=M(c);h.Ia.add(4),await yr(h),h.Va.set("Unknown"),h.Ia.delete(4),await Ds(h)})(this))}))})),this.Va=new fI(n,s)}}async function Ds(r){if(Gt(r))for(const e of r.Ra)await e(!0)}async function yr(r){for(const e of r.Ra)await e(!1)}function Zi(r,e){const t=M(r);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),ou(t)?iu(t):Er(t).O_()&&su(t,e))}function ur(r,e){const t=M(r),n=Er(t);t.Ea.delete(e),n.O_()&&Of(t,e),t.Ea.size===0&&(n.O_()?n.L_():Gt(t)&&t.Va.set("Unknown"))}function su(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Er(r).Z_(e)}function Of(r,e){r.da.$e(e),Er(r).X_(e)}function iu(r){r.da=new cy({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ea.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Er(r).start(),r.Va.ua()}function ou(r){return Gt(r)&&!Er(r).x_()&&r.Ea.size>0}function Gt(r){return M(r).Ia.size===0}function Ff(r){r.da=void 0}async function gI(r){r.Va.set("Online")}async function pI(r){r.Ea.forEach(((e,t)=>{su(r,e)}))}async function _I(r,e){Ff(r),ou(r)?(r.Va.ha(e),iu(r)):r.Va.set("Unknown")}async function yI(r,e,t){if(r.Va.set("Online"),e instanceof Qd&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const u of i.targetIds)s.Ea.has(u)&&(await s.remoteSyncer.rejectListen(u,o),s.Ea.delete(u),s.da.removeTarget(u))})(r,e)}catch(n){D(Tn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ni(r,n)}else if(e instanceof fi?r.da.Xe(e):e instanceof Kd?r.da.st(e):r.da.tt(e),!t.isEqual(U.min()))try{const n=await bf(r.localStore);t.compareTo(n)>=0&&await(function(i,o){const u=i.da.Tt(o);return u.targetChanges.forEach(((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ea.get(h);f&&i.Ea.set(h,f.withResumeToken(c.resumeToken,o))}})),u.targetMismatches.forEach(((c,h)=>{const f=i.Ea.get(c);if(!f)return;i.Ea.set(c,f.withResumeToken(fe.EMPTY_BYTE_STRING,f.snapshotVersion)),Of(i,c);const m=new ot(f.target,c,h,f.sequenceNumber);su(i,m)})),i.remoteSyncer.applyRemoteEvent(u)})(r,t)}catch(n){D(Tn,"Failed to raise snapshot:",n),await Ni(r,n)}}async function Ni(r,e,t){if(!zt(e))throw e;r.Ia.add(1),await yr(r),r.Va.set("Offline"),t||(t=()=>bf(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{D(Tn,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Ds(r)}))}function Lf(r,e){return e().catch((t=>Ni(r,t,e)))}async function Ir(r){const e=M(r),t=Bt(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:xt;for(;II(e);)try{const s=await eI(e.localStore,n);if(s===null){e.Ta.length===0&&t.L_();break}n=s.batchId,EI(e,s)}catch(s){await Ni(e,s)}Bf(e)&&Uf(e)}function II(r){return Gt(r)&&r.Ta.length<10}function EI(r,e){r.Ta.push(e);const t=Bt(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function Bf(r){return Gt(r)&&!Bt(r).x_()&&r.Ta.length>0}function Uf(r){Bt(r).start()}async function TI(r){Bt(r).ra()}async function wI(r){const e=Bt(r);for(const t of r.Ta)e.ea(t.mutations)}async function AI(r,e,t){const n=r.Ta.shift(),s=$a.from(n,e,t);await Lf(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await Ir(r)}async function vI(r,e){e&&Bt(r).Y_&&await(async function(n,s){if((function(o){return zd(o)&&o!==R.ABORTED})(s.code)){const i=n.Ta.shift();Bt(n).B_(),await Lf(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ir(n)}})(r,e),Bf(r)&&Uf(r)}async function Jl(r,e){const t=M(r);t.asyncQueue.verifyOperationInProgress(),D(Tn,"RemoteStore received new credentials");const n=Gt(t);t.Ia.add(3),await yr(t),n&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ds(t)}async function Ea(r,e){const t=M(r);e?(t.Ia.delete(2),await Ds(t)):e||(t.Ia.add(2),await yr(t),t.Va.set("Unknown"))}function Er(r){return r.ma||(r.ma=(function(t,n,s){const i=M(t);return i.sa(),new uI(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Zo:gI.bind(null,r),Yo:pI.bind(null,r),t_:_I.bind(null,r),H_:yI.bind(null,r)}),r.Ra.push((async e=>{e?(r.ma.B_(),ou(r)?iu(r):r.Va.set("Unknown")):(await r.ma.stop(),Ff(r))}))),r.ma}function Bt(r){return r.fa||(r.fa=(function(t,n,s){const i=M(t);return i.sa(),new cI(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:TI.bind(null,r),t_:vI.bind(null,r),ta:wI.bind(null,r),na:AI.bind(null,r)}),r.Ra.push((async e=>{e?(r.fa.B_(),await Ir(r)):(await r.fa.stop(),r.Ta.length>0&&(D(Tn,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Se,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,u=new au(e,t,o,s,i);return u.start(n),u}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tr(r,e){if(ge("AsyncQueue",`${e}: ${r}`),zt(r))return new V(R.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{static emptySet(e){return new fn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||k.comparator(t.key,n.key):(t,n)=>k.comparator(t.key,n.key),this.keyedMap=Hr(),this.sortedSet=new oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new fn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(){this.ga=new oe(k.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):F(63341,{Vt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,n)=>{e.push(n)})),e}}class wn{constructor(e,t,n,s,i,o,u,c,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach((u=>{o.push({type:0,doc:u})})),new wn(e,t,fn.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class RI{constructor(){this.queries=Xl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const s=M(t),i=s.queries;s.queries=Xl(),i.forEach(((o,u)=>{for(const c of u.Sa)c.onError(n)}))})(this,new V(R.ABORTED,"Firestore shutting down"))}}function Xl(){return new ft((r=>Pd(r)),Rs)}async function uu(r,e){const t=M(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(n=2):(i=new bI,n=e.Da()?0:1);try{switch(n){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const u=Tr(o,`Initialization of query '${Bn(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&lu(t)}async function cu(r,e){const t=M(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function SI(r,e){const t=M(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const u of o.Sa)u.Fa(s)&&(n=!0);o.wa=s}}n&&lu(t)}function PI(r,e,t){const n=M(r),s=n.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);n.queries.delete(e)}function lu(r){r.Ca.forEach((e=>{e.next()}))}var Ta,Zl;(Zl=Ta||(Ta={})).Ma="default",Zl.Cache="cache";class hu{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new wn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=wn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ta.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t){this.Ka=e,this.byteLength=t}Ua(){return"metadata"in this.Ka}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.serializer=e}qs(e){return st(this.serializer,e)}Ks(e){return e.metadata.exists?Qi(this.serializer,e.document,!1):ue.newNoDocument(this.qs(e.metadata.name),this.Us(e.metadata.readTime))}Us(e){return pe(e)}}class du{constructor(e,t){this.$a=e,this.serializer=t,this.Wa=[],this.Qa=[],this.collectionGroups=new Set,this.progress=jf(e)}get queries(){return this.Wa}get documents(){return this.Qa}Ga(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ka.namedQuery)this.Wa.push(e.Ka.namedQuery);else if(e.Ka.documentMetadata){this.Qa.push({metadata:e.Ka.documentMetadata}),e.Ka.documentMetadata.exists||++t;const n=K.fromString(e.Ka.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Ka.document&&(this.Qa[this.Qa.length-1].document=e.Ka.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}za(e){const t=new Map,n=new eh(this.serializer);for(const s of e)if(s.metadata.queries){const i=n.qs(s.metadata.name);for(const o of s.metadata.queries){const u=(t.get(o)||$()).add(i);t.set(o,u)}}return t}async ja(e){const t=await tI(e,new eh(this.serializer),this.Qa,this.$a.id),n=this.za(this.documents);for(const s of this.Wa)await nI(e,s,n.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Ja:this.collectionGroups,Ha:t}}}function jf(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this.key=e}}class $f{constructor(e){this.key=e}}class Gf{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=$(),this.mutatedKeys=$(),this.eu=Cd(e),this.tu=new fn(this.eu)}get nu(){return this.Za}ru(e,t){const n=t?t.iu:new Yl,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,u=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,m)=>{const p=s.get(f),v=Ss(this.query,m)?m:null,C=!!p&&this.mutatedKeys.has(p.key),N=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let x=!1;p&&v?p.data.isEqual(v.data)?C!==N&&(n.track({type:3,doc:v}),x=!0):this.su(p,v)||(n.track({type:2,doc:v}),x=!0,(c&&this.eu(v,c)>0||h&&this.eu(v,h)<0)&&(u=!0)):!p&&v?(n.track({type:0,doc:v}),x=!0):p&&!v&&(n.track({type:1,doc:p}),x=!0,(c||h)&&(u=!0)),x&&(v?(o=o.add(v),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{tu:o,iu:n,bs:u,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,m)=>(function(v,C){const N=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{Vt:x})}};return N(v)-N(C)})(f.type,m.type)||this.eu(f.doc,m.doc))),this.ou(n),s=s??!1;const u=t&&!s?this._u():[],c=this.Ya.size===0&&this.current&&!s?1:0,h=c!==this.Xa;return this.Xa=c,o.length!==0||h?{snapshot:new wn(this.query,e.tu,i,o,e.mutatedKeys,c===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Yl,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=$(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Ya=this.Ya.add(n.key))}));const t=[];return e.forEach((n=>{this.Ya.has(n)||t.push(new $f(n))})),this.Ya.forEach((n=>{e.has(n)||t.push(new zf(n))})),t}cu(e){this.Za=e.ks,this.Ya=$();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return wn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Kt="SyncEngine";class VI{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class CI{constructor(e){this.key=e,this.hu=!1}}class DI{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ft((u=>Pd(u)),Rs),this.Eu=new Map,this.Iu=new Set,this.Ru=new oe(k.comparator),this.Au=new Map,this.Vu=new Ja,this.du={},this.mu=new Map,this.fu=En.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function xI(r,e,t=!0){const n=eo(r);let s;const i=n.Tu.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Kf(n,e,t,!0),s}async function NI(r,e){const t=eo(r);await Kf(t,e,!0,!1)}async function Kf(r,e,t,n){const s=await or(r.localStore,Ne(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let u;return n&&(u=await fu(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&Zi(r.remoteStore,s),u}async function fu(r,e,t,n,s){r.pu=(m,p,v)=>(async function(N,x,B,j){let q=x.view.ru(B);q.bs&&(q=await Ci(N.localStore,x.query,!1).then((({documents:E})=>x.view.ru(E,q))));const Z=j&&j.targetChanges.get(x.targetId),Y=j&&j.targetMismatches.get(x.targetId)!=null,X=x.view.applyChanges(q,N.isPrimaryClient,Z,Y);return wa(N,x.targetId,X.au),X.snapshot})(r,m,p,v);const i=await Ci(r.localStore,e,!0),o=new Gf(e,i.ks),u=o.ru(i.documents),c=Cs.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),h=o.applyChanges(u,r.isPrimaryClient,c);wa(r,t,h.au);const f=new VI(e,t,o);return r.Tu.set(e,f),r.Eu.has(t)?r.Eu.get(t).push(e):r.Eu.set(t,[e]),h.snapshot}async function kI(r,e,t){const n=M(r),s=n.Tu.get(e),i=n.Eu.get(s.targetId);if(i.length>1)return n.Eu.set(s.targetId,i.filter((o=>!Rs(o,e)))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ar(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),t&&ur(n.remoteStore,s.targetId),cr(n,s.targetId)})).catch(jt)):(cr(n,s.targetId),await ar(n.localStore,s.targetId,!0))}async function MI(r,e){const t=M(r),n=t.Tu.get(e),s=t.Eu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),ur(t.remoteStore,n.targetId))}async function OI(r,e,t){const n=_u(r);try{const s=await(function(o,u){const c=M(o),h=ee.now(),f=u.reduce(((v,C)=>v.add(C.key)),$());let m,p;return c.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let C=Ue(),N=$();return c.xs.getEntries(v,f).next((x=>{C=x,C.forEach(((B,j)=>{j.isValidDocument()||(N=N.add(B))}))})).next((()=>c.localDocuments.getOverlayedDocuments(v,C))).next((x=>{m=x;const B=[];for(const j of u){const q=iy(j,m.get(j.key).overlayedDocument);q!=null&&B.push(new mt(j.key,q,_d(q.value.mapValue),he.exists(!0)))}return c.mutationQueue.addMutationBatch(v,h,B,u)})).next((x=>{p=x;const B=x.applyToLocalDocumentSet(m,N);return c.documentOverlayCache.saveOverlays(v,x.batchId,B)}))})).then((()=>({batchId:p.batchId,changes:xd(m)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),(function(o,u,c){let h=o.du[o.currentUser.toKey()];h||(h=new oe(z)),h=h.insert(u,c),o.du[o.currentUser.toKey()]=h})(n,s.batchId,t),await gt(n,s.changes),await Ir(n.remoteStore)}catch(s){const i=Tr(s,"Failed to persist write");t.reject(i)}}async function Qf(r,e){const t=M(r);try{const n=await Zy(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Au.get(i);o&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?L(o.hu,14607):s.removedDocuments.size>0&&(L(o.hu,42227),o.hu=!1))})),await gt(t,n,e)}catch(n){await jt(n)}}function th(r,e,t){const n=M(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Tu.forEach(((i,o)=>{const u=o.view.va(e);u.snapshot&&s.push(u.snapshot)})),(function(o,u){const c=M(o);c.onlineState=u;let h=!1;c.queries.forEach(((f,m)=>{for(const p of m.Sa)p.va(u)&&(h=!0)})),h&&lu(c)})(n.eventManager,e),s.length&&n.Pu.H_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function FI(r,e,t){const n=M(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Au.get(e),i=s&&s.key;if(i){let o=new oe(k.comparator);o=o.insert(i,ue.newNoDocument(i,U.min()));const u=$().add(i),c=new Vs(U.min(),new Map,new oe(z),o,u);await Qf(n,c),n.Ru=n.Ru.remove(i),n.Au.delete(e),pu(n)}else await ar(n.localStore,e,!1).then((()=>cr(n,e,t))).catch(jt)}async function LI(r,e){const t=M(r),n=e.batch.batchId;try{const s=await Xy(t.localStore,e);gu(t,n,null),mu(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await gt(t,s)}catch(s){await jt(s)}}async function BI(r,e,t){const n=M(r);try{const s=await(function(o,u){const c=M(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return c.mutationQueue.lookupMutationBatch(h,u).next((m=>(L(m!==null,37113),f=m.keys(),c.mutationQueue.removeMutationBatch(h,m)))).next((()=>c.mutationQueue.performConsistencyCheck(h))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,u))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>c.localDocuments.getDocuments(h,f)))}))})(n.localStore,e);gu(n,e,t),mu(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await gt(n,s)}catch(s){await jt(s)}}async function UI(r,e){const t=M(r);Gt(t.remoteStore)||D(Kt,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await(function(o){const u=M(o);return u.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(c=>u.mutationQueue.getHighestUnacknowledgedBatchId(c)))})(t.localStore);if(n===xt)return void e.resolve();const s=t.mu.get(n)||[];s.push(e),t.mu.set(n,s)}catch(n){const s=Tr(n,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function mu(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function gu(r,e,t){const n=M(r);let s=n.du[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.du[n.currentUser.toKey()]=s}}function cr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Eu.get(e))r.Tu.delete(n),t&&r.Pu.yu(n,t);r.Eu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach((n=>{r.Vu.containsKey(n)||Wf(r,n)}))}function Wf(r,e){r.Iu.delete(e.path.canonicalString());const t=r.Ru.get(e);t!==null&&(ur(r.remoteStore,t),r.Ru=r.Ru.remove(e),r.Au.delete(t),pu(r))}function wa(r,e,t){for(const n of t)n instanceof zf?(r.Vu.addReference(n.key,e),qI(r,n)):n instanceof $f?(D(Kt,"Document no longer in limbo: "+n.key),r.Vu.removeReference(n.key,e),r.Vu.containsKey(n.key)||Wf(r,n.key)):F(19791,{wu:n})}function qI(r,e){const t=e.key,n=t.path.canonicalString();r.Ru.get(t)||r.Iu.has(n)||(D(Kt,"New document in limbo: "+t),r.Iu.add(n),pu(r))}function pu(r){for(;r.Iu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new k(K.fromString(e)),n=r.fu.next();r.Au.set(n,new CI(t)),r.Ru=r.Ru.insert(t,n),Zi(r.remoteStore,new ot(Ne(gr(t.path)),n,"TargetPurposeLimboResolution",Le.ce))}}async function gt(r,e,t){const n=M(r),s=[],i=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach(((u,c)=>{o.push(n.pu(c,e,t).then((h=>{var f;if((h||t)&&n.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){s.push(h);const m=eu.Is(c.targetId,h);i.push(m)}})))})),await Promise.all(o),n.Pu.H_(s),await(async function(c,h){const f=M(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>A.forEach(h,(p=>A.forEach(p.Ts,(v=>f.persistence.referenceDelegate.addReference(m,p.targetId,v))).next((()=>A.forEach(p.Es,(v=>f.persistence.referenceDelegate.removeReference(m,p.targetId,v)))))))))}catch(m){if(!zt(m))throw m;D(tu,"Failed to update sequence numbers: "+m)}for(const m of h){const p=m.targetId;if(!m.fromCache){const v=f.vs.get(p),C=v.snapshotVersion,N=v.withLastLimboFreeSnapshotVersion(C);f.vs=f.vs.insert(p,N)}}})(n.localStore,i))}async function jI(r,e){const t=M(r);if(!t.currentUser.isEqual(e)){D(Kt,"User change. New user:",e.toKey());const n=await vf(t.localStore,e);t.currentUser=e,(function(i,o){i.mu.forEach((u=>{u.forEach((c=>{c.reject(new V(R.CANCELLED,o))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await gt(t,n.Ns)}}function zI(r,e){const t=M(r),n=t.Au.get(e);if(n&&n.hu)return $().add(n.key);{let s=$();const i=t.Eu.get(e);if(!i)return s;for(const o of i){const u=t.Tu.get(o);s=s.unionWith(u.view.nu)}return s}}async function $I(r,e){const t=M(r),n=await Ci(t.localStore,e.query,!0),s=e.view.cu(n);return t.isPrimaryClient&&wa(t,e.targetId,s.au),s}async function GI(r,e){const t=M(r);return Pf(t.localStore,e).then((n=>gt(t,n)))}async function KI(r,e,t,n){const s=M(r),i=await(function(u,c){const h=M(u),f=M(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",(m=>f.Xn(m,c).next((p=>p?h.localDocuments.getDocuments(m,p):A.resolve(null)))))})(s.localStore,e);i!==null?(t==="pending"?await Ir(s.remoteStore):t==="acknowledged"||t==="rejected"?(gu(s,e,n||null),mu(s,e),(function(u,c){M(M(u).mutationQueue).nr(c)})(s.localStore,e)):F(6720,"Unknown batchState",{Su:t}),await gt(s,i)):D(Kt,"Cannot apply mutation batch with id: "+e)}async function QI(r,e){const t=M(r);if(eo(t),_u(t),e===!0&&t.gu!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await nh(t,n.toArray());t.gu=!0,await Ea(t.remoteStore,!0);for(const i of s)Zi(t.remoteStore,i)}else if(e===!1&&t.gu!==!1){const n=[];let s=Promise.resolve();t.Eu.forEach(((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then((()=>(cr(t,o),ar(t.localStore,o,!0)))),ur(t.remoteStore,o)})),await s,await nh(t,n),(function(o){const u=M(o);u.Au.forEach(((c,h)=>{ur(u.remoteStore,h)})),u.Vu.zr(),u.Au=new Map,u.Ru=new oe(k.comparator)})(t),t.gu=!1,await Ea(t.remoteStore,!1)}}async function nh(r,e,t){const n=M(r),s=[],i=[];for(const o of e){let u;const c=n.Eu.get(o);if(c&&c.length!==0){u=await or(n.localStore,Ne(c[0]));for(const h of c){const f=n.Tu.get(h),m=await $I(n,f);m.snapshot&&i.push(m.snapshot)}}else{const h=await Sf(n.localStore,o);u=await or(n.localStore,h),await fu(n,Hf(h),o,!1,u.resumeToken)}s.push(u)}return n.Pu.H_(i),s}function Hf(r){return bd(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function WI(r){return(function(t){return M(M(t).persistence).hs()})(M(r).localStore)}async function HI(r,e,t,n){const s=M(r);if(s.gu)return void D(Kt,"Ignoring unexpected query state notification.");const i=s.Eu.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Pf(s.localStore,Vd(i[0])),u=Vs.createSynthesizedRemoteEventForCurrentChange(e,t==="current",fe.EMPTY_BYTE_STRING);await gt(s,o,u);break}case"rejected":await ar(s.localStore,e,!0),cr(s,e,n);break;default:F(64155,t)}}async function JI(r,e,t){const n=eo(r);if(n.gu){for(const s of e){if(n.Eu.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){D(Kt,"Adding an already active target "+s);continue}const i=await Sf(n.localStore,s),o=await or(n.localStore,i);await fu(n,Hf(i),o.targetId,!1,o.resumeToken),Zi(n.remoteStore,o)}for(const s of t)n.Eu.has(s)&&await ar(n.localStore,s,!1).then((()=>{ur(n.remoteStore,s),cr(n,s)})).catch(jt)}}function eo(r){const e=M(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FI.bind(null,e),e.Pu.H_=SI.bind(null,e.eventManager),e.Pu.yu=PI.bind(null,e.eventManager),e}function _u(r){const e=M(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BI.bind(null,e),e}function YI(r,e,t){const n=M(r);(async function(i,o,u){try{const c=await o.getMetadata();if(await(function(v,C){const N=M(v),x=pe(C.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",(B=>N.Pi.getBundleMetadata(B,C.id))).then((B=>!!B&&B.createTime.compareTo(x)>=0))})(i.localStore,c))return await o.close(),u._completeWith((function(v){return{taskState:"Success",documentsLoaded:v.totalDocuments,bytesLoaded:v.totalBytes,totalDocuments:v.totalDocuments,totalBytes:v.totalBytes}})(c)),Promise.resolve(new Set);u._updateProgress(jf(c));const h=new du(c,o.serializer);let f=await o.bu();for(;f;){const p=await h.Ga(f);p&&u._updateProgress(p),f=await o.bu()}const m=await h.ja(i.localStore);return await gt(i,m.Ha,void 0),await(function(v,C){const N=M(v);return N.persistence.runTransaction("Save bundle","readwrite",(x=>N.Pi.saveBundleMetadata(x,C)))})(i.localStore,c),u._completeWith(m.progress),Promise.resolve(m.Ja)}catch(c){return ze(Kt,`Loading bundle failed with ${c}`),u._failWith(c),Promise.resolve(new Set)}})(n,e,t).then((s=>{n.sharedClientState.notifyBundleLoaded(s)}))}class lr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vn(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Af(this.persistence,new wf,e.initialUser,this.serializer)}Cu(e){return new Ya(Xi.Vi,this.serializer)}Du(e){return new Nf}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lr.provider={build:()=>new lr};class yu extends lr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){L(this.persistence.referenceDelegate instanceof Vi,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new pf(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new Ya((n=>Vi.Vi(n,t)),this.serializer)}}class Iu extends lr{constructor(e,t,n){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await _u(this.xu.syncEngine),await Ir(this.xu.remoteStore),await this.persistence.zi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return Af(this.persistence,new wf,e.initialUser,this.serializer)}Fu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new pf(n,e.asyncQueue,t)}Mu(e,t){const n=new s_(t,this.persistence);return new r_(e.asyncQueue,n)}Cu(e){const t=Za(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new Xa(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,kf(),gi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new Nf}}class Jf extends Iu{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xu.syncEngine;this.sharedClientState instanceof zo&&(this.sharedClientState.syncEngine={bo:KI.bind(null,t),Do:HI.bind(null,t),Co:JI.bind(null,t),hs:WI.bind(null,t),So:GI.bind(null,t)},await this.sharedClientState.start()),await this.persistence.zi((async n=>{await QI(this.xu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}Du(e){const t=kf();if(!zo.v(t))throw new V(R.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Za(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new zo(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Ut{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>th(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=jI.bind(null,this.syncEngine),await Ea(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new RI})()}createDatastore(e){const t=vn(e.databaseInfo.databaseId),n=aI(e.databaseInfo);return dI(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,s,i,o,u){return new mI(n,s,i,o,u)})(this.localStore,this.datastore,e.asyncQueue,(t=>th(this.syncEngine,t,0)),(function(){return Wl.v()?new Wl:new rI})())}createSyncEngine(e,t){return(function(s,i,o,u,c,h,f){const m=new DI(s,i,o,u,c,h);return f&&(m.gu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=M(s);D(Tn,"RemoteStore shutting down."),i.Ia.add(5),await yr(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Ut.provider={build:()=>new Ut};function rh(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const n={value:r.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ge("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,t){this.Bu=e,this.serializer=t,this.metadata=new Se,this.buffer=new Uint8Array,this.Lu=(function(){return new TextDecoder("utf-8")})(),this.ku().then((n=>{n&&n.Ua()?this.metadata.resolve(n.Ka.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.Ka)}`))}),(n=>this.metadata.reject(n)))}close(){return this.Bu.cancel()}async getMetadata(){return this.metadata.promise}async bu(){return await this.getMetadata(),this.ku()}async ku(){const e=await this.qu();if(e===null)return null;const t=this.Lu.decode(e),n=Number(t);isNaN(n)&&this.Ku(`length string (${t}) is not valid number`);const s=await this.Uu(n);return new qf(JSON.parse(s),e.length+n)}$u(){return this.buffer.findIndex((e=>e===123))}async qu(){for(;this.$u()<0&&!await this.Wu(););if(this.buffer.length===0)return null;const e=this.$u();e<0&&this.Ku("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Uu(e){for(;this.buffer.length<e;)await this.Wu()&&this.Ku("Reached the end of bundle when more is expected.");const t=this.Lu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Ku(e){throw this.Bu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Wu(){const e=await this.Bu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let n=this.bu();if(!n||!n.Ua())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(n==null?void 0:n.Ka)}`);this.metadata=n;do n=this.bu(),n!==null&&this.elements.push(n);while(n!==null)}getMetadata(){return this.metadata}Qu(){return this.elements}bu(){if(this.cursor===this.bundleData.length)return null;const e=this.qu(),t=this.Uu(e);return new qf(JSON.parse(t),e)}Uu(e){if(this.cursor+e>this.bundleData.length)throw new V(R.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}qu(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if(this.bundleData[t]==="{"){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eE=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new V(R.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(s,i){const o=M(s),u={documents:i.map((m=>Es(o.serializer,m)))},c=await o.jo("BatchGetDocuments",o.serializer.databaseId,K.emptyPath(),u,i.length),h=new Map;c.forEach((m=>{const p=gy(o.serializer,m);h.set(p.key.toString(),p)}));const f=[];return i.forEach((m=>{const p=h.get(m.toString());L(!!p,55234,{key:m}),f.push(p)})),f})(this.datastore,e);return t.forEach((n=>this.recordVersion(n))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new _r(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,n)=>{const s=k.fromPath(n);this.mutations.push(new ja(s,this.precondition(s)))})),await(async function(n,s){const i=M(n),o={writes:s.map((u=>Ts(i.serializer,u)))};await i.Wo("Commit",i.serializer.databaseId,K.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw F(50498,{Gu:e.constructor.name});t=U.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new V(R.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(U.min())?he.exists(!1):he.updateTime(t):he.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(U.min()))throw new V(R.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return he.updateTime(t)}return he.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,t,n,s,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=s,this.deferred=i,this.zu=n.maxAttempts,this.M_=new ru(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const e=new eE(this.datastore),t=this.Hu(e);t&&t.then((n=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(n)})).catch((s=>{this.Zu(s)}))))})).catch((n=>{this.Zu(n)}))}))}Hu(e){try{const t=this.updateFunction(e);return!As(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Zu(e){this.zu>0&&this.Xu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(e)}Xu(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!zd(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="FirestoreClient";class nE{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=be.UNAUTHENTICATED,this.clientId=Oi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{D(qt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(D(qt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Se;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Tr(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Go(r,e){r.asyncQueue.verifyOperationInProgress(),D(qt,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await vf(e.localStore,s),n=s)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function sh(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Eu(r);D(qt,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>Jl(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>Jl(e.remoteStore,s))),r._onlineComponents=e}async function Eu(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){D(qt,"Using user provided OfflineComponentProvider");try{await Go(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;ze("Error using user provided cache. Falling back to memory cache: "+t),await Go(r,new lr)}}else D(qt,"Using default OfflineComponentProvider"),await Go(r,new yu(void 0));return r._offlineComponents}async function no(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(D(qt,"Using user provided OnlineComponentProvider"),await sh(r,r._uninitializedComponentsProvider._online)):(D(qt,"Using default OnlineComponentProvider"),await sh(r,new Ut))),r._onlineComponents}function Yf(r){return Eu(r).then((e=>e.persistence))}function wr(r){return Eu(r).then((e=>e.localStore))}function Xf(r){return no(r).then((e=>e.remoteStore))}function Tu(r){return no(r).then((e=>e.syncEngine))}function Zf(r){return no(r).then((e=>e.datastore))}async function hr(r){const e=await no(r),t=e.eventManager;return t.onListen=xI.bind(null,e.syncEngine),t.onUnlisten=kI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=NI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=MI.bind(null,e.syncEngine),t}function rE(r){return r.asyncQueue.enqueue((async()=>{const e=await Yf(r),t=await Xf(r);return e.setNetworkEnabled(!0),(function(s){const i=M(s);return i.Ia.delete(0),Ds(i)})(t)}))}function sE(r){return r.asyncQueue.enqueue((async()=>{const e=await Yf(r),t=await Xf(r);return e.setNetworkEnabled(!1),(async function(s){const i=M(s);i.Ia.add(0),await yr(i),i.Va.set("Offline")})(t)}))}function iE(r,e,t,n){const s=new to(n),i=new hu(e,s,t);return r.asyncQueue.enqueueAndForget((async()=>uu(await hr(r),i))),()=>{s.Nu(),r.asyncQueue.enqueueAndForget((async()=>cu(await hr(r),i)))}}function oE(r,e){const t=new Se;return r.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const u=await(function(h,f){const m=M(h);return m.persistence.runTransaction("read document","readonly",(p=>m.localDocuments.getDocument(p,f)))})(s,i);u.isFoundDocument()?o.resolve(u):u.isNoDocument()?o.resolve(null):o.reject(new V(R.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(u){const c=Tr(u,`Failed to get document '${i} from cache`);o.reject(c)}})(await wr(r),e,t))),t.promise}function em(r,e,t={}){const n=new Se;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,u,c,h){const f=new to({next:p=>{f.Nu(),o.enqueueAndForget((()=>cu(i,m)));const v=p.docs.has(u);!v&&p.fromCache?h.reject(new V(R.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&p.fromCache&&c&&c.source==="server"?h.reject(new V(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(p)},error:p=>h.reject(p)}),m=new hu(gr(u.path),f,{includeMetadataChanges:!0,qa:!0});return uu(i,m)})(await hr(r),r.asyncQueue,e,t,n))),n.promise}function aE(r,e){const t=new Se;return r.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const u=await Ci(s,i,!0),c=new Gf(i,u.ks),h=c.ru(u.documents),f=c.applyChanges(h,!1);o.resolve(f.snapshot)}catch(u){const c=Tr(u,`Failed to execute query '${i} against cache`);o.reject(c)}})(await wr(r),e,t))),t.promise}function tm(r,e,t={}){const n=new Se;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,u,c,h){const f=new to({next:p=>{f.Nu(),o.enqueueAndForget((()=>cu(i,m))),p.fromCache&&c.source==="server"?h.reject(new V(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(p)},error:p=>h.reject(p)}),m=new hu(u,f,{includeMetadataChanges:!0,qa:!0});return uu(i,m)})(await hr(r),r.asyncQueue,e,t,n))),n.promise}function uE(r,e,t){const n=new Se;return r.asyncQueue.enqueueAndForget((async()=>{try{const s=await Zf(r);n.resolve((async function(o,u,c){var N;const h=M(o),{request:f,gt:m,parent:p}=ef(h.serializer,Rd(u),c);h.connection.qo||delete f.parent;const v=(await h.jo("RunAggregationQuery",h.serializer.databaseId,p,f,1)).filter((x=>!!x.result));L(v.length===1,64727);const C=(N=v[0].result)==null?void 0:N.aggregateFields;return Object.keys(C).reduce(((x,B)=>(x[m[B]]=C[B],x)),{})})(s,e,t))}catch(s){n.reject(s)}})),n.promise}function cE(r,e){const t=new Se;return r.asyncQueue.enqueueAndForget((async()=>OI(await Tu(r),e,t))),t.promise}function lE(r,e){const t=new to(e);return r.asyncQueue.enqueueAndForget((async()=>(function(s,i){M(s).Ca.add(i),i.next()})(await hr(r),t))),()=>{t.Nu(),r.asyncQueue.enqueueAndForget((async()=>(function(s,i){M(s).Ca.delete(i)})(await hr(r),t)))}}function hE(r,e,t){const n=new Se;return r.asyncQueue.enqueueAndForget((async()=>{const s=await Zf(r);new tE(r.asyncQueue,s,t,e,n).ju()})),n.promise}function dE(r,e,t,n){const s=(function(o,u){let c;return c=typeof o=="string"?Gd().encode(o):o,(function(f,m){return new XI(f,m)})((function(f,m){if(f instanceof Uint8Array)return rh(f,m);if(f instanceof ArrayBuffer)return rh(new Uint8Array(f),m);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(c),u)})(t,vn(e));r.asyncQueue.enqueueAndForget((async()=>{YI(await Tu(r),s,n)}))}function fE(r,e){return r.asyncQueue.enqueue((async()=>(function(n,s){const i=M(n);return i.persistence.runTransaction("Get named query","readonly",(o=>i.Pi.getNamedQuery(o,s)))})(await wr(r),e)))}function nm(r,e){return(function(n,s){return new ZI(n,s)})(r,e)}function mE(r,e){return r.asyncQueue.enqueue((async()=>(async function(n,s){const i=M(n),o=i.indexManager,u=[];return i.persistence.runTransaction("Configure indexes","readwrite",(c=>o.getFieldIndexes(c).next((h=>(function(m,p,v,C,N){m=[...m],p=[...p],m.sort(v),p.sort(v);const x=m.length,B=p.length;let j=0,q=0;for(;j<B&&q<x;){const Z=v(m[q],p[j]);Z<0?N(m[q++]):Z>0?C(p[j++]):(j++,q++)}for(;j<B;)C(p[j++]);for(;q<x;)N(m[q++])})(h,s,Zp,(f=>{u.push(o.addFieldIndex(c,f))}),(f=>{u.push(o.deleteFieldIndex(c,f))})))).next((()=>A.waitFor(u)))))})(await wr(r),e)))}function gE(r,e){return r.asyncQueue.enqueue((async()=>(function(n,s){M(n).Cs.As=s})(await wr(r),e)))}function pE(r){return r.asyncQueue.enqueue((async()=>(function(t){const n=M(t),s=n.indexManager;return n.persistence.runTransaction("Delete All Indexes","readwrite",(i=>s.deleteAllFieldIndexes(i)))})(await wr(r))))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="ComponentProvider",ih=new Map;function yE(r,e,t,n,s){return new N_(r,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,rm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="firestore.googleapis.com",oh=!0;class ah{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sm,this.ssl=oh}else this.host=e.host,this.ssl=e.ssl??oh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gf)throw new V(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rm(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new V(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xs{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ah({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ah(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new Uh;switch(n.type){case"firstParty":return new Kp(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=ih.get(t);n&&(D(_E,"Removing Datastore"),ih.delete(t),n.terminate())})(this),Promise.resolve()}}function im(r,e,t,n={}){var h;r=Q(r,xs);const s=ba(e),i=r._getSettings(),o={...i,emulatorOptions:r._getEmulatorOptions()},u=`${e}:${t}`;s&&Rh(`https://${u}`),i.host!==sm&&i.host!==u&&ze("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:u,ssl:s,emulatorOptions:n};if(!Nt(c,o)&&(r._setSettings(c),n.mockUserToken)){let f,m;if(typeof n.mockUserToken=="string")f=n.mockUserToken,m=be.MOCK_USER;else{f=Eg(n.mockUserToken,(h=r._app)==null?void 0:h.options.projectId);const p=n.mockUserToken.sub||n.mockUserToken.user_id;if(!p)throw new V(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new be(p)}r._authCredentials=new zp(new Bh(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Te(this.firestore,e,this._query)}}class ne{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new He(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ne(this.firestore,e,this._key)}toJSON(){return{type:ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(An(t,ne._jsonSchema))return new ne(e,n||null,new k(K.fromString(t.referencePath)))}}ne._jsonSchemaVersion="firestore/documentReference/1.0",ne._jsonSchema={type:ye("string",ne._jsonSchemaVersion),referencePath:ye("string")};class He extends Te{constructor(e,t,n){super(e,t,gr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ne(this.firestore,null,new k(e))}withConverter(e){return new He(this.firestore,e,this._path)}}function IE(r,e,...t){if(r=Ee(r),Va("collection","path",e),r instanceof xs){const n=K.fromString(e,...t);return Hc(n),new He(r,null,n)}{if(!(r instanceof ne||r instanceof He))throw new V(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(K.fromString(e,...t));return Hc(n),new He(r.firestore,null,n)}}function EE(r,e){if(r=Q(r,xs),Va("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new V(R.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Te(r,null,(function(n){return new dt(K.emptyPath(),n)})(e))}function om(r,e,...t){if(r=Ee(r),arguments.length===1&&(e=Oi.newId()),Va("doc","path",e),r instanceof xs){const n=K.fromString(e,...t);return Wc(n),new ne(r,null,new k(n))}{if(!(r instanceof ne||r instanceof He))throw new V(R.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(K.fromString(e,...t));return Wc(n),new ne(r.firestore,r instanceof He?r.converter:null,new k(n))}}function TE(r,e){return r=Ee(r),e=Ee(e),(r instanceof ne||r instanceof He)&&(e instanceof ne||e instanceof He)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function wu(r,e){return r=Ee(r),e=Ee(e),r instanceof Te&&e instanceof Te&&r.firestore===e.firestore&&Rs(r._query,e._query)&&r.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="AsyncQueue";class ch{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ru(this,"async_queue_retry"),this._c=()=>{const n=gi();n&&D(uh,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=gi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=gi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Se;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!zt(e))throw e;D(uh,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((n=>{throw this.nc=n,this.rc=!1,ge("INTERNAL UNHANDLED ERROR: ",lh(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=au.createAndSchedule(this,e,t,n,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&F(47125,{Pc:lh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function lh(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this._progressObserver={},this._taskCompletionResolver=new Se,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=-1;class se extends xs{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new ch,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ch(e),this._firestoreClient=void 0,await e}}}function AE(r,e,t){t||(t=ps);const n=Sa(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(Nt(i,e))return s;throw new V(R.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new V(R.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gf)throw new V(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&ba(e.host)&&Rh(e.host),n.initialize({options:e,instanceIdentifier:t})}function vE(r,e){const t=typeof r=="object"?r:Vp(),n=typeof r=="string"?r:e||ps,s=Sa(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=yg("firestore");i&&im(s,...i)}return s}function de(r){if(r._terminated)throw new V(R.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||um(r),r._firestoreClient}function um(r){var n,s,i,o;const e=r._freezeSettings(),t=yE(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,(s=r._app)==null?void 0:s.options.apiKey,e);r._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new nE(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}})(r._componentsProvider))}function bE(r,e){ze("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return cm(r,Ut.provider,{build:n=>new Iu(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function RE(r){ze("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();cm(r,Ut.provider,{build:t=>new Jf(t,e.cacheSizeBytes)})}function cm(r,e,t){if((r=Q(r,se))._firestoreClient||r._terminated)throw new V(R.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new V(R.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},um(r)}function SE(r){if(r._initialized&&!r._terminated)throw new V(R.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Se;return r._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(n){if(!rt.v())return Promise.resolve();const s=n+Tf;await rt.delete(s)})(Za(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function PE(r){return(function(t){const n=new Se;return t.asyncQueue.enqueueAndForget((async()=>UI(await Tu(t),n))),n.promise})(de(r=Q(r,se)))}function VE(r){return rE(de(r=Q(r,se)))}function CE(r){return sE(de(r=Q(r,se)))}function DE(r){return Ap(r.app,"firestore",r._databaseId.database),r._delete()}function Aa(r,e){const t=de(r=Q(r,se)),n=new am;return dE(t,r._databaseId,e,n),n}function lm(r,e){return fE(de(r=Q(r,se)),e).then((t=>t?new Te(r,null,t.query):null))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fe(fe.fromBase64String(e))}catch(t){throw new V(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Fe(fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Fe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(An(e,Fe._jsonSchema))return Fe.fromBase64String(e.bytes)}}Fe._jsonSchemaVersion="firestore/bytes/1.0",Fe._jsonSchema={type:ye("string",Fe._jsonSchemaVersion),bytes:ye("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function xE(){return new bn(Zo)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Je._jsonSchemaVersion}}static fromJSON(e){if(An(e,Je._jsonSchema))return new Je(e.latitude,e.longitude)}}Je._jsonSchemaVersion="firestore/geoPoint/1.0",Je._jsonSchema={type:ye("string",Je._jsonSchemaVersion),latitude:ye("number"),longitude:ye("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ke._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(An(e,Ke._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ke(e.vectorValues);throw new V(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ke._jsonSchemaVersion="firestore/vectorValue/1.0",Ke._jsonSchema={type:ye("string",Ke._jsonSchemaVersion),vectorValues:ye("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=/^__.*__$/;class kE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new mt(e,this.data,this.fieldMask,t,this.fieldTransforms):new pr(e,this.data,t,this.fieldTransforms)}}class hm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new mt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function dm(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{dataSource:r})}}class ro{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new ro({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(e),n}fc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.i({path:t,arrayElement:!1});return n.Ac(),n}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return ki(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(dm(this.dataSource)&&NE.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class ME{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||vn(e)}A(e,t,n,s=!1){return new ro({dataSource:e,methodName:t,targetDoc:n,path:ce.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rn(r){const e=r._freezeSettings(),t=vn(r._databaseId);return new ME(r._databaseId,!!e.ignoreUndefinedProperties,t)}function so(r,e,t,n,s,i={}){const o=r.A(i.merge||i.mergeFields?2:0,e,t,s);Vu("Data must be an object, but it was:",o,n);const u=gm(n,o);let c,h;if(i.merge)c=new Be(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const p=ht(e,m,t);if(!o.contains(p))throw new V(R.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);_m(f,p)||f.push(p)}c=new Be(f),h=o.fieldTransforms.filter((m=>c.covers(m.field)))}else c=null,h=o.fieldTransforms;return new kE(new Re(u),c,h)}class Ns extends Qt{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ns}}function fm(r,e,t){return new ro({dataSource:3,targetDoc:e.settings.targetDoc,methodName:r._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Au extends Qt{_toFieldTransform(e){return new Ps(e.path,new rr)}isEqual(e){return e instanceof Au}}class vu extends Qt{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=fm(this,e,!0),n=this.Sc.map((i=>Sn(i,t))),s=new pn(n);return new Ps(e.path,s)}isEqual(e){return e instanceof vu&&Nt(this.Sc,e.Sc)}}class bu extends Qt{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=fm(this,e,!0),n=this.Sc.map((i=>Sn(i,t))),s=new _n(n);return new Ps(e.path,s)}isEqual(e){return e instanceof bu&&Nt(this.Sc,e.Sc)}}class Ru extends Qt{constructor(e,t){super(e),this.bc=t}_toFieldTransform(e){const t=new sr(e.serializer,Md(e.serializer,this.bc));return new Ps(e.path,t)}isEqual(e){return e instanceof Ru&&this.bc===e.bc}}function Su(r,e,t,n){const s=r.A(1,e,t);Vu("Data must be an object, but it was:",s,n);const i=[],o=Re.empty();$t(n,((c,h)=>{const f=Cu(e,c,t);h=Ee(h);const m=s.fc(f);if(h instanceof Ns)i.push(f);else{const p=Sn(h,m);p!=null&&(i.push(f),o.set(f,p))}}));const u=new Be(i);return new hm(o,u,s.fieldTransforms)}function Pu(r,e,t,n,s,i){const o=r.A(1,e,t),u=[ht(e,n,t)],c=[s];if(i.length%2!=0)throw new V(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)u.push(ht(e,i[p])),c.push(i[p+1]);const h=[],f=Re.empty();for(let p=u.length-1;p>=0;--p)if(!_m(h,u[p])){const v=u[p];let C=c[p];C=Ee(C);const N=o.fc(v);if(C instanceof Ns)h.push(v);else{const x=Sn(C,N);x!=null&&(h.push(v),f.set(v,x))}}const m=new Be(h);return new hm(f,m,o.fieldTransforms)}function mm(r,e,t,n=!1){return Sn(t,r.A(n?4:3,e))}function Sn(r,e){if(pm(r=Ee(r)))return Vu("Unsupported field value:",e,r),gm(r,e);if(r instanceof Qt)return(function(n,s){if(!dm(s.dataSource))throw s.yc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(n,s){const i=[];let o=0;for(const u of n){let c=Sn(u,s.gc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(r,e)}return(function(n,s){if((n=Ee(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Md(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ee.fromDate(n);return{timestampValue:ir(s.serializer,i)}}if(n instanceof ee){const i=new ee(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ir(s.serializer,i)}}if(n instanceof Je)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Fe)return{bytesValue:Wd(s.serializer,n._byteString)};if(n instanceof ne){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Qa(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Ke)return(function(o,u){const c=o instanceof Ke?o.toArray():o;return{mapValue:{fields:{[Oa]:{stringValue:Fa},[er]:{arrayValue:{values:c.map((f=>{if(typeof f!="number")throw u.yc("VectorValues must only contain numeric values.");return qa(u.serializer,f)}))}}}}}})(n,s);if(of(n))return n._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Fi(n)}`)})(r,e)}function gm(r,e){const t={};return ud(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$t(r,((n,s)=>{const i=Sn(s,e.dc(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function pm(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ee||r instanceof Je||r instanceof Fe||r instanceof ne||r instanceof Qt||r instanceof Ke||of(r))}function Vu(r,e,t){if(!pm(t)||!zh(t)){const n=Fi(t);throw n==="an object"?e.yc(r+" a custom object"):e.yc(r+" "+n)}}function ht(r,e,t){if((e=Ee(e))instanceof bn)return e._internalPath;if(typeof e=="string")return Cu(r,e);throw ki("Field path arguments must be of type string or ",r,!1,void 0,t)}const OE=new RegExp("[~\\*/\\[\\]]");function Cu(r,e,t){if(e.search(OE)>=0)throw ki(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new bn(...e.split("."))._internalPath}catch{throw ki(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ki(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${n}`),o&&(c+=` in document ${s}`),c+=")"),new V(R.INVALID_ARGUMENT,u+r+c)}function _m(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{convertValue(e,t="none"){switch(Ot(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(lt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return $t(e,((s,i)=>{n[s]=this.convertValue(i,t)})),n}convertVectorValue(e){var n,s,i;const t=(i=(s=(n=e.fields)==null?void 0:n[er].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>le(o.doubleValue)));return new Ke(t)}convertGeoPoint(e){return new Je(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=zi(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(gs(e));default:return null}}convertTimestamp(e){const t=ct(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=K.fromString(e);L(sf(n),9688,{name:e});const s=new Mt(n.get(1),n.get(3)),i=new k(n.popFirst(5));return s.isEqual(t)||ge(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Du{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ne(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(){return new Ns("deleteField")}function LE(){return new Au("serverTimestamp")}function BE(...r){return new vu("arrayUnion",r)}function UE(...r){return new bu("arrayRemove",r)}function qE(r){return new Ru("increment",r)}function jE(r){return new Ke(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(r){var n;const e=de(Q(r.firestore,se)),t=(n=e._onlineComponents)==null?void 0:n.datastore.serializer;return t===void 0?null:Wi(t,Ne(r._query)).ft}function $E(r,e){var i;const t=ad(e,((o,u)=>new jd(u,o.aggregateType,o._internalFieldPath))),n=de(Q(r.firestore,se)),s=(i=n._onlineComponents)==null?void 0:i.datastore.serializer;return s===void 0?null:ef(s,Rd(r._query),t,!0).request}const hh="@firebase/firestore",dh="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(r){return(function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1})(r,["next","error","complete"])}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class ym{constructor(e,t,n){this._userDataWriter=t,this._data=n,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new Re({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(ht("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class GE extends ws{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new V(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xu{}class Ar extends xu{}function KE(r,e,...t){let n=[];e instanceof xu&&n.push(e),n=n.concat(t),(function(i){const o=i.filter((c=>c instanceof Pn)).length,u=i.filter((c=>c instanceof vr)).length;if(o>1||o>0&&u>0)throw new V(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const s of n)r=s._apply(r);return r}class vr extends Ar{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new vr(e,t,n)}_apply(e){const t=this._parse(e);return Tm(e._query,t),new Te(e.firestore,e.converter,la(e._query,t))}_parse(e){const t=Rn(e.firestore);return(function(i,o,u,c,h,f,m){let p;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){mh(m,f);const C=[];for(const N of m)C.push(fh(c,i,N));p={arrayValue:{values:C}}}else p=fh(c,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||mh(m,f),p=mm(u,o,m,f==="in"||f==="not-in");return W.create(h,f,p)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function QE(r,e,t){const n=e,s=ht("where",r);return vr._create(s,n,t)}class Pn extends xu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Pn(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:te.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const u=i.getFlattenedFilters();for(const c of u)Tm(o,c),o=la(o,c)})(e._query,t),new Te(e.firestore,e.converter,la(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function WE(...r){return r.forEach((e=>wm("or",e))),Pn._create("or",r)}function HE(...r){return r.forEach((e=>wm("and",e))),Pn._create("and",r)}class io extends Ar{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new io(e,t)}_apply(e){const t=(function(s,i,o){if(s.startAt!==null)throw new V(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new V(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Is(i,o)})(e._query,this._field,this._direction);return new Te(e.firestore,e.converter,K_(e._query,t))}}function JE(r,e="asc"){const t=e,n=ht("orderBy",r);return io._create(n,t)}class ks extends Ar{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new ks(e,t,n)}_apply(e){return new Te(e.firestore,e.converter,bi(e._query,this._limit,this._limitType))}}function YE(r){return $h("limit",r),ks._create("limit",r,"F")}function XE(r){return $h("limitToLast",r),ks._create("limitToLast",r,"L")}class Ms extends Ar{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Ms(e,t,n)}_apply(e){const t=Em(e,this.type,this._docOrFields,this._inclusive);return new Te(e.firestore,e.converter,Q_(e._query,t))}}function ZE(...r){return Ms._create("startAt",r,!0)}function eT(...r){return Ms._create("startAfter",r,!1)}class Os extends Ar{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Os(e,t,n)}_apply(e){const t=Em(e,this.type,this._docOrFields,this._inclusive);return new Te(e.firestore,e.converter,W_(e._query,t))}}function tT(...r){return Os._create("endBefore",r,!1)}function nT(...r){return Os._create("endAt",r,!0)}function Em(r,e,t,n){if(t[0]=Ee(t[0]),t[0]instanceof ws)return(function(i,o,u,c,h){if(!c)throw new V(R.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${u}().`);const f=[];for(const m of jn(i))if(m.field.isKeyField())f.push(mn(o,c.key));else{const p=c.data.field(m.field);if(ji(p))throw new V(R.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const v=m.field.canonicalString();throw new V(R.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${v}' (used as the orderBy) does not exist.`)}f.push(p)}return new Lt(f,h)})(r._query,r.firestore._databaseId,e,t[0]._document,n);{const s=Rn(r.firestore);return(function(o,u,c,h,f,m){const p=o.explicitOrderBy;if(f.length>p.length)throw new V(R.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const v=[];for(let C=0;C<f.length;C++){const N=f[C];if(p[C].field.isKeyField()){if(typeof N!="string")throw new V(R.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof N}`);if(!Ba(o)&&N.indexOf("/")!==-1)throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${N}' contains a slash.`);const x=o.path.child(K.fromString(N));if(!k.isDocumentKey(x))throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${x}' is not because it contains an odd number of segments.`);const B=new k(x);v.push(mn(u,B))}else{const x=mm(c,h,N);v.push(x)}}return new Lt(v,m)})(r._query,r.firestore._databaseId,s,e,t,n)}}function fh(r,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new V(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ba(e)&&t.indexOf("/")!==-1)throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(K.fromString(t));if(!k.isDocumentKey(n))throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return mn(r,new k(n))}if(t instanceof ne)return mn(r,t._key);throw new V(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fi(t)}.`)}function mh(r,e){if(!Array.isArray(r)||r.length===0)throw new V(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Tm(r,e){const t=(function(s,i){for(const o of s)for(const u of o.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null})(r.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new V(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function wm(r,e){if(!(e instanceof vr||e instanceof Pn))throw new V(R.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}function oo(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class Nu extends Du{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ne(this.firestore,null,t)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(r){return new dr("sum",ht("sum",r))}function sT(r){return new dr("avg",ht("average",r))}function Am(){return new dr("count")}function iT(r,e){var t,n;return r instanceof dr&&e instanceof dr&&r.aggregateType===e.aggregateType&&((t=r._internalFieldPath)==null?void 0:t.canonicalString())===((n=e._internalFieldPath)==null?void 0:n.canonicalString())}function oT(r,e){return wu(r.query,e.query)&&Nt(r.data(),e.data())}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(r){return vm(r,{count:Am()})}function vm(r,e){const t=Q(r.firestore,se),n=de(t),s=ad(e,((i,o)=>new jd(o,i.aggregateType,i._internalFieldPath)));return uE(n,r._query,s).then((i=>(function(u,c,h){const f=new Wt(u);return new ym(c,f,h)})(t,r,i)))}class uT{constructor(e){this.kind="memory",this._onlineComponentProvider=Ut.provider,this._offlineComponentProvider=e!=null&&e.garbageCollector?e.garbageCollector._offlineComponentProvider:{build:()=>new yu(void 0)}}toJSON(){return{kind:this.kind}}}class cT{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=bm(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class lT{constructor(){this.kind="memoryEager",this._offlineComponentProvider=lr.provider}toJSON(){return{kind:this.kind}}}class hT{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new yu(e)}}toJSON(){return{kind:this.kind}}}function dT(){return new lT}function fT(r){return new hT(r==null?void 0:r.cacheSizeBytes)}function mT(r){return new uT(r)}function gT(r){return new cT(r)}class pT{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ut.provider,this._offlineComponentProvider={build:t=>new Iu(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class _T{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ut.provider,this._offlineComponentProvider={build:t=>new Jf(t,e==null?void 0:e.cacheSizeBytes)}}}function bm(r){return new pT(r==null?void 0:r.forceOwnership)}function yT(){return new _T}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="NOT SUPPORTED";class at{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qe extends ws{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new us(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ht("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=qe._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}function IT(r,e,t){if(An(e,qe._jsonSchema)){if(e.bundle===Rm)throw new V(R.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=vn(r._databaseId),s=nm(e.bundle,n),i=s.Qu(),o=new du(s.getMetadata(),n);for(const f of i)o.Ga(f);const u=o.documents;if(u.length!==1)throw new V(R.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${u.length} documents.`);const c=Qi(n,u[0].document),h=new k(K.fromString(e.bundleName));return new qe(r,new Nu(r),h,c,new at(!1,!1),t||null)}}qe._jsonSchemaVersion="firestore/documentSnapshot/1.0",qe._jsonSchema={type:ye("string",qe._jsonSchemaVersion),bundleSource:ye("string","DocumentSnapshot"),bundleName:ye("string"),bundle:ye("string")};class us extends qe{data(e={}){return super.data(e)}}class je{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new at(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new us(this._firestore,this._userDataWriter,n.key,n,new at(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((u=>{const c=new us(s._firestore,s._userDataWriter,u.doc.key,u.doc,new at(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>i||u.type!==3)).map((u=>{const c=new us(s._firestore,s._userDataWriter,u.doc.key,u.doc,new at(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return u.type!==0&&(h=o.indexOf(u.doc.key),o=o.delete(u.doc.key)),u.type!==1&&(o=o.add(u.doc),f=o.indexOf(u.doc.key)),{type:TT(u.type),doc:c,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=je._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Oi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ET(r,e,t){if(An(e,je._jsonSchema)){if(e.bundle===Rm)throw new V(R.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=vn(r._databaseId),s=nm(e.bundle,n),i=s.Qu(),o=new du(s.getMetadata(),n);for(const p of i)o.Ga(p);if(o.queries.length!==1)throw new V(R.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const u=Hi(o.queries[0].bundledQuery),c=o.documents;let h=new fn;c.map((p=>{const v=Qi(n,p.document);h=h.add(v)}));const f=wn.fromInitialDocuments(u,h,$(),!1,!1),m=new Te(r,t||null,u);return new je(r,new Nu(r),m,f)}}function TT(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:r})}}function wT(r,e){return r instanceof qe&&e instanceof qe?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof je&&e instanceof je&&r._firestore===e._firestore&&wu(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je._jsonSchemaVersion="firestore/querySnapshot/1.0",je._jsonSchema={type:ye("string",je._jsonSchemaVersion),bundleSource:ye("string","QuerySnapshot"),bundleName:ye("string"),bundle:ye("string")};const AT={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Rn(e)}set(e,t,n){this._verifyNotCommitted();const s=Pt(e,this._firestore),i=oo(s.converter,t,n),o=so(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(o.toMutation(s._key,he.none())),this}update(e,t,n,...s){this._verifyNotCommitted();const i=Pt(e,this._firestore);let o;return o=typeof(t=Ee(t))=="string"||t instanceof bn?Pu(this._dataReader,"WriteBatch.update",i._key,t,n,s):Su(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,he.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Pt(e,this._firestore);return this._mutations=this._mutations.concat(new _r(t._key,he.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new V(R.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Pt(r,e){if((r=Ee(r)).firestore!==e)throw new V(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Rn(e)}get(e){const t=Pt(e,this._firestore),n=new Nu(this._firestore);return this._transaction.lookup([t._key]).then((s=>{if(!s||s.length!==1)return F(24041);const i=s[0];if(i.isFoundDocument())return new ws(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new ws(this._firestore,n,t._key,null,t.converter);throw F(18433,{doc:i})}))}set(e,t,n){const s=Pt(e,this._firestore),i=oo(s.converter,t,n),o=so(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,n);return this._transaction.set(s._key,o),this}update(e,t,n,...s){const i=Pt(e,this._firestore);let o;return o=typeof(t=Ee(t))=="string"||t instanceof bn?Pu(this._dataReader,"Transaction.update",i._key,t,n,s):Su(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=Pt(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm extends vT{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Pt(e,this._firestore),n=new Wt(this._firestore);return super.get(e).then((s=>new qe(this._firestore,n,t._key,s._document,new at(!1,!1),t.converter)))}}function bT(r,e,t){r=Q(r,se);const n={...AT,...t};(function(o){if(o.maxAttempts<1)throw new V(R.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n);const s=de(r);return hE(s,(i=>e(new Pm(r,i))),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(r){r=Q(r,ne);const e=Q(r.firestore,se),t=de(e);return em(t,r._key).then((n=>ku(e,r,n)))}function ST(r){r=Q(r,ne);const e=Q(r.firestore,se),t=de(e),n=new Wt(e);return oE(t,r._key).then((s=>new qe(e,n,r._key,s,new at(s!==null&&s.hasLocalMutations,!0),r.converter)))}function PT(r){r=Q(r,ne);const e=Q(r.firestore,se),t=de(e);return em(t,r._key,{source:"server"}).then((n=>ku(e,r,n)))}function VT(r){r=Q(r,Te);const e=Q(r.firestore,se),t=de(e),n=new Wt(e);return Im(r._query),tm(t,r._query).then((s=>new je(e,n,r,s)))}function CT(r){r=Q(r,Te);const e=Q(r.firestore,se),t=de(e),n=new Wt(e);return aE(t,r._query).then((s=>new je(e,n,r,s)))}function DT(r){r=Q(r,Te);const e=Q(r.firestore,se),t=de(e),n=new Wt(e);return tm(t,r._query,{source:"server"}).then((s=>new je(e,n,r,s)))}function xT(r,e,t){r=Q(r,ne);const n=Q(r.firestore,se),s=oo(r.converter,e,t),i=Rn(n);return br(n,[so(i,"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,he.none())])}function NT(r,e,t,...n){r=Q(r,ne);const s=Q(r.firestore,se),i=Rn(s);let o;return o=typeof(e=Ee(e))=="string"||e instanceof bn?Pu(i,"updateDoc",r._key,e,t,n):Su(i,"updateDoc",r._key,e),br(s,[o.toMutation(r._key,he.exists(!0))])}function kT(r){return br(Q(r.firestore,se),[new _r(r._key,he.none())])}function MT(r,e){const t=Q(r.firestore,se),n=om(r),s=oo(r.converter,e),i=Rn(r.firestore);return br(t,[so(i,"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,he.exists(!1))]).then((()=>n))}function va(r,...e){var h,f,m;r=Ee(r);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||$n(e[n])||(t=e[n++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if($n(e[n])){const p=e[n];e[n]=(h=p.next)==null?void 0:h.bind(p),e[n+1]=(f=p.error)==null?void 0:f.bind(p),e[n+2]=(m=p.complete)==null?void 0:m.bind(p)}let i,o,u;if(r instanceof ne)o=Q(r.firestore,se),u=gr(r._key.path),i={next:p=>{e[n]&&e[n](ku(o,r,p))},error:e[n+1],complete:e[n+2]};else{const p=Q(r,Te);o=Q(p.firestore,se),u=p._query;const v=new Wt(o);i={next:C=>{e[n]&&e[n](new je(o,v,p,C))},error:e[n+1],complete:e[n+2]},Im(r._query)}const c=de(o);return iE(c,u,s,i)}function OT(r,e,...t){const n=Ee(r),s=(function(c){const h={bundle:"",bundleName:"",bundleSource:""},f=["bundle","bundleName","bundleSource"];for(const m of f){if(!(m in c)){h.error=`snapshotJson missing required field: ${m}`;break}const p=c[m];if(typeof p!="string"){h.error=`snapshotJson field '${m}' must be a string.`;break}if(p.length===0){h.error=`snapshotJson field '${m}' cannot be an empty string.`;break}m==="bundle"?h.bundle=p:m==="bundleName"?h.bundleName=p:m==="bundleSource"&&(h.bundleSource=p)}return h})(e);if(s.error)throw new V(R.INVALID_ARGUMENT,s.error);let i,o=0;if(typeof t[o]!="object"||$n(t[o])||(i=t[o++]),s.bundleSource==="QuerySnapshot"){let u=null;if(typeof t[o]=="object"&&$n(t[o])){const c=t[o++];u={next:c.next,error:c.error,complete:c.complete}}else u={next:t[o++],error:t[o++],complete:t[o++]};return(function(h,f,m,p,v){let C,N=!1;return Aa(h,f.bundle).then((()=>lm(h,f.bundleName))).then((B=>{B&&!N&&(v&&B.withConverter(v),C=va(B,m||{},p))})).catch((B=>(p.error&&p.error(B),()=>{}))),()=>{N||(N=!0,C&&C())}})(n,s,i,u,t[o])}if(s.bundleSource==="DocumentSnapshot"){let u=null;if(typeof t[o]=="object"&&$n(t[o])){const c=t[o++];u={next:c.next,error:c.error,complete:c.complete}}else u={next:t[o++],error:t[o++],complete:t[o++]};return(function(h,f,m,p,v){let C,N=!1;return Aa(h,f.bundle).then((()=>{if(!N){const B=new ne(h,v||null,k.fromPath(f.bundleName));C=va(B,m||{},p)}})).catch((B=>(p.error&&p.error(B),()=>{}))),()=>{N||(N=!0,C&&C())}})(n,s,i,u,t[o])}throw new V(R.INVALID_ARGUMENT,`unsupported bundle source: ${s.bundleSource}`)}function FT(r,e){r=Q(r,se);const t=de(r),n=$n(e)?e:{next:e};return lE(t,n)}function br(r,e){const t=de(r);return cE(t,e)}function ku(r,e,t){const n=t.docs.get(e._key),s=new Wt(r);return new qe(r,s,e._key,n,new at(t.hasPendingWrites,t.fromCache),e.converter)}function LT(r){return r=Q(r,se),de(r),new Sm(r,(e=>br(r,e)))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(r,e){r=Q(r,se);const t=de(r);if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return ze("Cannot enable indexes when persistence is disabled"),Promise.resolve();const n=(function(i){const o=typeof i=="string"?(function(h){try{return JSON.parse(h)}catch(f){throw new V(R.INVALID_ARGUMENT,"Failed to parse JSON: "+(f==null?void 0:f.message))}})(i):i,u=[];if(Array.isArray(o.indexes))for(const c of o.indexes){const h=gh(c,"collectionGroup"),f=[];if(Array.isArray(c.fields))for(const m of c.fields){const p=gh(m,"fieldPath"),v=Cu("setIndexConfiguration",p);m.arrayConfig==="CONTAINS"?f.push(new hn(v,2)):m.order==="ASCENDING"?f.push(new hn(v,0)):m.order==="DESCENDING"&&f.push(new hn(v,1))}u.push(new Wn(Wn.UNKNOWN_ID,h,f,Hn.empty()))}return u})(e);return mE(t,n)}function gh(r,e){if(typeof r[e]!="string")throw new V(R.INVALID_ARGUMENT,"Missing string value for: "+e);return r[e]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function UT(r){var s;r=Q(r,se);const e=ph.get(r);if(e)return e;if(((s=de(r)._uninitializedComponentsProvider)==null?void 0:s._offline.kind)!=="persistent")return null;const n=new Vm(r);return ph.set(r,n),n}function qT(r){Cm(r,!0)}function jT(r){Cm(r,!1)}function zT(r){const e=de(r._firestore);pE(e).then((t=>D("deleting all persistent cache indexes succeeded"))).catch((t=>ze("deleting all persistent cache indexes failed",t)))}function Cm(r,e){const t=de(r._firestore);gE(t,e).then((n=>D(`setting persistent cache index auto creation isEnabled=${e} succeeded`))).catch((n=>ze(`setting persistent cache index auto creation isEnabled=${e} failed`,n)))}const ph=new WeakMap;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return Mu.instance.onExistenceFilterMismatch(e)}}class Mu{constructor(){this.t=new Map}static get instance(){return ii||(ii=new Mu,ay(ii)),ii}o(e){this.t.forEach((t=>t(e)))}onExistenceFilterMismatch(e){const t=Symbol(),n=this.t;return n.set(t,e),()=>n.delete(t)}}let ii=null;(function(e,t=!0){Up(Sp),Ii(new cs("firestore",((n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),u=new se(new $p(n.getProvider("auth-internal")),new Qp(o,n.getProvider("app-check-internal")),k_(o,s),o);return i={useFetchStreams:t,...i},u._setSettings(i),u}),"PUBLIC").setMultipleInstances(!0)),Xr(hh,dh,e),Xr(hh,dh,"esm2020")})();const sw=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Du,AggregateField:dr,AggregateQuerySnapshot:ym,Bytes:Fe,CACHE_SIZE_UNLIMITED:wE,CollectionReference:He,DocumentReference:ne,DocumentSnapshot:qe,FieldPath:bn,FieldValue:Qt,Firestore:se,FirestoreError:V,GeoPoint:Je,LoadBundleTask:am,PersistentCacheIndexManager:Vm,Query:Te,QueryCompositeFilterConstraint:Pn,QueryConstraint:Ar,QueryDocumentSnapshot:us,QueryEndAtConstraint:Os,QueryFieldFilterConstraint:vr,QueryLimitConstraint:ks,QueryOrderByConstraint:io,QuerySnapshot:je,QueryStartAtConstraint:Ms,SnapshotMetadata:at,Timestamp:ee,Transaction:Pm,VectorValue:Ke,WriteBatch:Sm,_AutoId:Oi,_ByteString:fe,_DatabaseId:Mt,_DocumentKey:k,_EmptyAppCheckTokenProvider:Wp,_EmptyAuthCredentialsProvider:Uh,_FieldPath:ce,_TestingHooks:$T,_cast:Q,_debugAssert:jp,_internalAggregationQueryToProtoRunAggregationQueryRequest:$E,_internalQueryToProtoQueryTarget:zE,_isBase64Available:D_,_logWarn:ze,_validateIsNotUsedTogether:jh,addDoc:MT,aggregateFieldEqual:iT,aggregateQuerySnapshotEqual:oT,and:HE,arrayRemove:UE,arrayUnion:BE,average:sT,clearIndexedDbPersistence:SE,collection:IE,collectionGroup:EE,connectFirestoreEmulator:im,count:Am,deleteAllPersistentCacheIndexes:zT,deleteDoc:kT,deleteField:FE,disableNetwork:CE,disablePersistentCacheIndexAutoCreation:jT,doc:om,documentId:xE,documentSnapshotFromJSON:IT,enableIndexedDbPersistence:bE,enableMultiTabIndexedDbPersistence:RE,enableNetwork:VE,enablePersistentCacheIndexAutoCreation:qT,endAt:nT,endBefore:tT,ensureFirestoreConfigured:de,executeWrite:br,getAggregateFromServer:vm,getCountFromServer:aT,getDoc:RT,getDocFromCache:ST,getDocFromServer:PT,getDocs:VT,getDocsFromCache:CT,getDocsFromServer:DT,getFirestore:vE,getPersistentCacheIndexManager:UT,increment:qE,initializeFirestore:AE,limit:YE,limitToLast:XE,loadBundle:Aa,memoryEagerGarbageCollector:dT,memoryLocalCache:mT,memoryLruGarbageCollector:fT,namedQuery:lm,onSnapshot:va,onSnapshotResume:OT,onSnapshotsInSync:FT,or:WE,orderBy:JE,persistentLocalCache:gT,persistentMultipleTabManager:yT,persistentSingleTabManager:bm,query:KE,queryEqual:wu,querySnapshotFromJSON:ET,refEqual:TE,runTransaction:bT,serverTimestamp:LE,setDoc:xT,setIndexConfiguration:BT,setLogLevel:qp,snapshotEqual:wT,startAfter:eT,startAt:ZE,sum:rT,terminate:DE,updateDoc:NT,vector:jE,waitForPendingWrites:PE,where:QE,writeBatch:LT},Symbol.toStringTag,{value:"Module"}));export{KE as A,JE as B,cs as C,IE as D,bh as E,fr as F,va as G,kT as H,om as I,NT as J,sw as K,Sh as L,Sp as S,vp as _,Sa as a,GT as b,_g as c,Vp as d,ew as e,Nt as f,Ee as g,Gn as h,ba as i,JT as j,YT as k,XT as l,J as m,KT as n,HT as o,Rh as p,ZT as q,Xr as r,fg as s,WT as t,QT as u,Ii as v,tw as w,yg as x,vE as y,Pp as z};
