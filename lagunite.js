/**
 * Lagunite vundefined
 * Visit lagunite.com
 */

"use strict";function show(e){e=document.getElementById(e);e.classList.contains("hidden")&&e.classList.remove("hidden")}function hidde(e){document.getElementById(e).classList.add("hidden")}function toggle(e){document.getElementById(e).classList.toggle("hidden")}function hiddeAfter(e,t){var n=document.getElementById(e);setTimeout(function(){n.classList.add("hidden")},t,n)}function addClass(e,t){e=document.getElementById(e);e.classList.contains(t)||e.classList.add(t)}function removeClass(e,t){e=document.getElementById(e);e.classList.contains(t)&&e.classList.remove(t)}function toggleClass(e,t){document.getElementById(e).classList.toggle(t)}function updateInput(e,t){document.getElementById(e).value=t}function updateText(e,t){document.getElementById(e).textContent=t}function showMenu(){var e=document.getElementById("menuBurger");e.classList.remove("scale-out-tr"),e.classList.add("scale-in-tr"),e.classList.remove("hidden")}function hideMenu(){var e=document.getElementById("menuBurger");e.classList.remove("scale-in-tr"),e.classList.add("scale-out-tr"),hiddeAfter(e,300)}function disappearing(e){var t=document.getElementById(e);show(e),addClass(e,"disappearing"),hiddeAfter(t,3e3)}function carrousel(e){for(var t=document.getElementById("carrousel").children,e=0,n=0;n<t.length;n++)t[n].classList.contains("img-in")&&(t[n].classList.remove("img-in"),t[n].classList.add("img-out"),e=n);t[e=(e+=1)==t.length?0:e].classList.remove("img-out"),t[e].classList.add("img-in")}function initCarrousel(e){setInterval(function(){carrousel(e)},1500)}function addEvent(e,t,n){return e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener?e.addEventListener(t,n,!1):void(e["on"+t]=n)}function addEventClick(e,t){e=document.getElementById(e);return void 0!==e&&null!=e?e.attachEvent?e.attachEvent("onclick",t):e.addEventListener("click",t,!1):void 0}function addEventChange(e,t){e=document.getElementById(e);return void 0!==e&&null!=e?e.attachEvent?e.attachEvent("onchange",t):e.addEventListener("change",t,!1):void 0}function getValue(e){e=document.getElementById(e);return e?e.value:null}function setValue(e,t){e=document.getElementById(e);return!!e&&(e.value=t,!0)}function setText(e,t){e=document.getElementById(e);return!!e&&(e.textContent=t,!0)}function createTableFromObj(e){var t=document.createElement("table"),n=(t.classList.add("table"),document.createElement("thead")),d=document.createElement("tr"),a=Object.keys(e);console.log(a.length);for(var c=0;c<a.length;c++){var i=document.createElement("th");i.appendChild(document.createTextNode(a[c])),d.appendChild(i)}n.appendChild(d);for(var o=document.createElement("tbody"),l=0;l<e[a[0]].length;l++){for(var s=document.createElement("tr"),c=0;c<a.length;c++){var u=document.createElement("td");u.appendChild(document.createTextNode(e[a[c]][l])),s.appendChild(u)}o.appendChild(s)}return t.appendChild(n),t.appendChild(o),t}function removeAllChildNodes(e){var t=document.getElementById(e);if(t){for(;t.firstChild;)t.removeChild(t.firstChild);return!0}return!1}function delay(t){return new Promise(function(e){setTimeout(function(){e("")},t)})}