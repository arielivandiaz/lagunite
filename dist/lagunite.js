/**
 * Lagunite v0.0.36
 * Visit lagunite.com
 */

function show(e){var t=document.getElementById(e);t.classList.contains("hidden")&&t.classList.remove("hidden")}function hidde(e){document.getElementById(e).classList.add("hidden")}function toggle(e){document.getElementById(e).classList.toggle("hidden")}function hiddeAfter(e,t){setTimeout(function(){e.classList.add("hidden")},t)}function addClass(e,t){var s=document.getElementById(e);s.classList.contains(t)||s.classList.add(t)}function removeClass(e,t){var s=document.getElementById(e);s.classList.contains(t)&&s.classList.remove(t)}function toggleClass(e,t){var s=document.getElementById(e);s.classList.contains(t)&&s.classList.toggle(t)}function updateInput(e,t){document.getElementById(e).value=t}function showMenu(){var e=document.getElementById("menuBurger");e.classList.remove("scale-out-tr"),e.classList.add("scale-in-tr"),e.classList.remove("hidden")}function hideMenu(){var e=document.getElementById("menuBurger");e.classList.remove("scale-in-tr"),e.classList.add("scale-out-tr"),hiddeAfter(e,300)}function carrousel(e){for(var t=document.getElementById("carrousel").children,s=(e=0,0);s<t.length;s++)t[s].classList.contains("img-in")&&(t[s].classList.remove("img-in"),t[s].classList.add("img-out"),e=s);(e+=1)==t.length&&(e=0),t[e].classList.remove("img-out"),t[e].classList.add("img-in")}function initCarrousel(e){setInterval(function(){carrousel(e)},1500)}