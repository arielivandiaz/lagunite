/*!
 * @ Name: lagunite
 * @ Version: 0.60.7
 * @ Author: Ariel Ivan Diaz
 * @ Desc: Lagunite web kit
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Lagunite",[],t):"object"==typeof exports?exports.Lagunite=t():e.Lagunite=t()}(self,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};return(()=>{e.r(t),e.d(t,{addClass:()=>r,addEvent:()=>p,addEventChange:()=>E,addEventClick:()=>L,carrousel:()=>g,createTableFromObj:()=>x,delay:()=>j,disappearing:()=>f,getElement:()=>n,getValue:()=>y,hidde:()=>i,hiddeAfter:()=>d,hideMenu:()=>v,initCarrousel:()=>h,removeAllChildNodes:()=>T,removeClass:()=>s,setText:()=>b,setValue:()=>C,show:()=>a,showMenu:()=>m,toggle:()=>o,toggleClass:()=>c,updateInput:()=>l,updateText:()=>u});var n=function(e){return"string"!=typeof e?e:"#"===e[0]?document.getElementById(e.split("#")[1]):"."===e[0]?document.getElementsByClassName(e.split(".")[1])[0]:"<"===e[0]?document.getElementsByTagName(e.split("<")[1].split(">")[0])[0]:document.getElementById(e)},a=function(e){var t=n(e);t.classList.contains("hidden")&&t.classList.remove("hidden")},i=function(e){var t=n(e);t.classList.contains("hidden")||t.classList.add("hidden")},o=function(e){var t=n(e);t.classList.contains("hidden")&&t.classList.toggle("hidden")},d=function(e,t){var a=n(e);setTimeout((function(){a.classList.add("hidden")}),t,a)},r=function(e,t){var a=n(e);a.classList.contains(t)||a.classList.add(t)},s=function(e,t){var a=n(e);a.classList.contains(t)&&a.classList.remove(t)},c=function(e,t){n(e).classList.toggle(t)},l=function(e,t){n(e).value=t},u=function(e,t){n(e).textContent=t},m=function(){var e=document.getElementById("menuBurger");e.classList.remove("scale-out-tr"),e.classList.add("scale-in-tr"),e.classList.remove("hidden")},v=function(){var e=document.getElementById("menuBurger");e.classList.remove("scale-in-tr"),e.classList.add("scale-out-tr"),d(e,300)},f=function(e){var t=n(e);a(id),r(id,"disappearing"),d(t,3e3)},g=function(e){for(var t=document.getElementById("carrousel").children,n=(e=0,0);n<t.length;n++)t[n].classList.contains("img-in")&&(t[n].classList.remove("img-in"),t[n].classList.add("img-out"),e=n);(e+=1)==t.length&&(e=0),t[e].classList.remove("img-out"),t[e].classList.add("img-in")},h=function(e){setInterval((function(){g(e)}),1500)},p=function(e,t,a){var i=n(e);return i.attachEvent?i.attachEvent("on"+t,a):i.addEventListener?i.addEventListener(t,a,!1):void(i["on"+t]=a)},L=function(e,t){var a=n(e);return void 0!==a&&null!=a?a.attachEvent?a.attachEvent("onclick",t):a.addEventListener("click",t,!1):void 0},E=function(e,t){var a=n(e);return void 0!==a&&null!=a?a.attachEvent?a.attachEvent("onchange",t):a.addEventListener("change",t,!1):void 0},y=function(e){var t=n(e);return t?t.value:null},C=function(e,t){var a=n(e);return!!a&&(a.value=t,!0)},b=function(e,t){n(e);return!!element&&(element.textContent=t,!0)},x=function(e){var t=document.createElement("table");t.classList.add("table");var n=document.createElement("thead"),a=document.createElement("tr"),i=Object.keys(e);console.log(i.length);for(var o=0;o<i.length;o++){var d=document.createElement("th");d.appendChild(document.createTextNode(i[o])),a.appendChild(d)}n.appendChild(a);for(var r=document.createElement("tbody"),s=0;s<e[i[0]].length;s++){var c=document.createElement("tr");for(o=0;o<i.length;o++){var l=document.createElement("td");l.appendChild(document.createTextNode(e[i[o]][s])),c.appendChild(l)}r.appendChild(c)}return t.appendChild(n),t.appendChild(r),t},T=function(e){var t=n(e);if(t){for(;t.firstChild;)t.removeChild(t.firstChild);return!0}return!1},j=function(e){return new Promise((function(t){setTimeout((function(){t("")}),e)}))}})(),t})()));