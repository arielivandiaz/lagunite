/**
 * Lagunite v0.0.35
 * Visit lagunite.com
 */

function setNewBarchart(s,a){a.forEach(function(a){var e=document.createElement("div");if(e.classList.add("bar-content"),a.label){var t=document.createElement("div");t.classList.add("tooltip");var d=document.createElement("div");d.classList.add("tooltip-content"),d.textContent=a.label;var n=document.createElement("div");n.classList.add("arrow"),d.appendChild(n),t.appendChild(d),e.appendChild(t)}var c=document.createElement("div");c.classList.add("bar"),c.classList.add("h"+a.value);var r=document.createElement("div");r.classList.add("bar-footer");var l=document.createElement("div");l.classList.add("bar-footer-content"),l.innerHTML="<span>"+a.value+"</span>",r.appendChild(l),e.appendChild(c),e.appendChild(r),s.appendChild(e)})}function newChart(a,e){var t=document.createElement("div");t.classList.add("chart");var d=document.createElement("div"),n=a.chart;d.classList.add(n);var c=a.style;c&&chart.classList.add(c),"barchart"==n&&setNewBarchart(d,a.data),t.appendChild(d),e.appendChild(t)}