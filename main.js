(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),i=n.n(r),o=n(645),s=n.n(o)()(i());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Merienda:wght@700&family=Merriweather:ital,wght@1,700&display=swap);"]),s.push([e.id,"html {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-size: 1rem;\n  color: #dddbf1;\n}\n\nbody {\n  display: flex;\n  margin-top: 150px;\n  justify-content: center;\n  height: 100vh;\n  background-color: #755c1b;\n}\n\n.todolist {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(4, auto);\n  background-color: #7a4419;\n  height: max-content;\n  width: 80%;\n  border-radius: 20px 20px;\n  border: 2px solid #383f51;\n}\n\n.list-header,\n.add-new-task {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #383f51;\n  padding: 0 20px;\n  height: 50px;\n}\n\n#add-new-task,\n#add-new-task::placeholder {\n  color: #ada7ac;\n  font-family: 'Merienda', cursive;\n  letter-spacing: 0.1rem;\n  width: 100%;\n}\n\n.list-header > h1 {\n  letter-spacing: 0.1rem;\n  font-family: 'Merriweather', serif;\n  font-size: 20px;\n}\n\ninput,\nbutton {\n  border: 0;\n  background: none;\n}\n\ninput:focus {\n  outline: none;\n}\n\n.task {\n  cursor: move;\n  height: 50px;\n  display: grid;\n  align-items: center;\n  grid-template-columns: auto 1fr auto;\n  column-gap: 10px;\n  padding: 0 20px;\n  border-bottom: 2px dotted #383f51;\n}\n\n.fa-solid {\n  font-size: 24px;\n  cursor: pointer;\n}\n\ninput[type=checkbox] {\n  transform: scale(1.2);\n  margin-right: 10px;\n}\n\n.new-task {\n  letter-spacing: 0.07rem;\n  font-family: 'Merienda', cursive;\n  border-radius: 9px;\n  padding-left: 10px;\n  width: 100%;\n}\n\n.active {\n  background: #b4b88c;\n  color: #000;\n}\n\n.line {\n  text-decoration: line-through;\n  font-size: 0.9rem;\n  color: #ada7ac;\n}\n\n#clear-btn {\n  font-family: 'Merienda', cursive;\n  cursor: pointer;\n  height: 70px;\n  background-color: #0b2545;\n  border-radius: 0 0 19px 19px;\n}\n\n/* error message */\n.error {\n  color: #0b2545;\n  visibility: hidden;\n  font-size: 19px;\n  padding: 12px;\n  position: absolute;\n  width: max-content;\n  background-color: #c1c7d0;\n  text-align: center;\n  top: 12%;\n  border-radius: 5px;\n}\n\n.error::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #c1c7d0 transparent transparent transparent;\n}\n\n@media screen and (min-width: 600px) {\n  * {\n    font-size: 1.1rem;\n  }\n\n  .list-header > h1 {\n    font-size: 1.4rem;\n  }\n\n  .todolist {\n    width: 75%;\n  }\n\n  input[type=checkbox] {\n    transform: scale(1.5);\n  }\n}\n",""]);const a=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=i(m,r);r.byIndex=a,t.splice(a,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var a=n(o[s]);t[a].references--}for(var c=r(e,i),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),i=n.n(r),o=n(569),s=n.n(o),a=n(565),c=n.n(a),l=n(216),d=n.n(l),p=n(589),u=n.n(p),m=n(426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=e=>{e.previousElementSibling.checked?(e.classList.add("line"),e.classList.remove("active"),e.readOnly=!0):(e.classList.remove("active"),e.readOnly=!0)},g=document.querySelector(".refresh"),v=document.getElementById("clear-btn"),b=new class{constructor(){this.store=JSON.parse(localStorage.getItem("ToDoList"))||[]}newTask(){const e=document.querySelector(".task-container");e.innerHTML="",this.store.forEach((t=>{t.completed?e.innerHTML+=`\n      <div class="task">\n          <input type="checkbox" class="check" checked>\n          <input id="${t.index}" class="new-task line" type="text" value="${t.description}">\n          <span id="${t.index}">\n            <i class="delete fa-solid fa-trash-can"></i>\n          </span>\n      </div>\n      `:e.innerHTML+=`\n      <div class="task">\n          <input type="checkbox" class="check">\n          <input id="${t.index}" class="new-task" type="text" value="${t.description}">\n          <span id="${t.index}">\n            <i class="delete fa-solid fa-trash-can"></i>\n          </span>\n      </div>\n      `})),this.pageEvents(),localStorage.setItem("ToDoList",JSON.stringify(this.store))}resetIndex(){let e=1;this.store.forEach((t=>{t.index=e,e+=1})),localStorage.setItem("ToDoList",JSON.stringify(this.store))}addNewTask(e){const t={index:this.store.length+1,description:e,completed:!1};this.store.push(t),this.newTask(),localStorage.setItem("ToDoList",JSON.stringify(this.store))}deleteTask(e){this.store=this.store.filter((t=>t.index!==e)),this.resetIndex(),this.newTask(),localStorage.setItem("ToDoList",JSON.stringify(this.store))}editTask(e,t){this.store[e].description=t,localStorage.setItem("ToDoList",JSON.stringify(this.store))}markItemAsComplete(e){this.store[e].completed?this.store[e].completed=!1:this.store[e].completed=!0,localStorage.setItem("ToDoList",JSON.stringify(this.store))}clearCompletedTasks(){this.store=this.store.filter((e=>!1===e.completed)),this.resetIndex(),this.newTask()}clearAllTasks(){this.store=[],localStorage.setItem("ToDoList",JSON.stringify(this.store)),this.newTask()}localStorageToWebpage(){null!==localStorage&&(this.store=JSON.parse(localStorage.getItem("ToDoList"))||[],this.newTask())}pageEvents(){document.querySelectorAll(".check").forEach((e=>{e.addEventListener("change",(()=>{e.checked?(e.nextElementSibling.classList.add("line"),this.markItemAsComplete(Number(e.nextElementSibling.id)-1,this.store)):(e.nextElementSibling.classList.remove("line"),this.markItemAsComplete(Number(e.nextElementSibling.id)-1,this.store))}))})),document.querySelectorAll(".new-task").forEach((e=>{e.addEventListener("input",(()=>{this.editTask(Number(e.id)-1,e.value)})),e.addEventListener("click",(()=>{(e=>{e.classList.contains("line")?(e.readOnly=!1,e.classList.remove("line"),e.classList.add("active")):(e.classList.add("active"),e.readOnly=!1)})(e)})),e.addEventListener("blur",(()=>{f(e)})),e.addEventListener("keydown",(t=>{"Enter"===t.code&&f(e)}))})),document.querySelectorAll(".delete").forEach((e=>{e.addEventListener("click",(()=>{this.deleteTask(Number(e.parentElement.id))}))}))}};b.localStorageToWebpage(),v.addEventListener("click",(()=>{b.clearCompletedTasks()})),g.addEventListener("click",(()=>{b.clearAllTasks()})),function(){const e=document.getElementById("add-new-task"),t=document.getElementById("error-msg");document.querySelector(".enter").addEventListener("click",(()=>{""===e.value?(t.style.visibility="visible",setTimeout((()=>{t.style.visibility="hidden"}),2e3)):(b.addNewTask(e.value),e.value="")})),e.addEventListener("keydown",(n=>{"Enter"===n.code&&(""===e.value?(t.style.visibility="visible",setTimeout((()=>{t.style.visibility="hidden"}),2e3)):(b.addNewTask(e.value),e.value=""))})),localStorage.setItem("ToDoList",JSON.stringify(b.store))}()})()})();