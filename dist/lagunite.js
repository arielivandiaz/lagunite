const n = (t) => {
  if (typeof t == "string") {
    if (t[0] === "#")
      return document.getElementById(t.split("#")[1]);
    if (t[0] === ".")
      return document.getElementsByClassName(t.split(".")[1])[0];
    if (t[0] === "<")
      return document.getElementsByTagName(
        t.split("<")[1].split(">")[0]
      )[0];
  } else
    return t;
  return document.getElementById(t);
}, m = (t) => {
  const e = n(t);
  e.classList.contains("hidden") && e.classList.remove("hidden");
}, v = (t) => {
  const e = n(t);
  e.classList.contains("hidden") || e.classList.add("hidden");
}, p = (t) => {
  const e = n(t);
  e.classList.contains("hidden") && e.classList.toggle("hidden");
}, u = (t, e) => {
  const s = n(t);
  setTimeout(
    () => {
      s.classList.add("hidden");
    },
    e,
    s
  );
}, h = (t, e) => {
  const s = n(t);
  s.classList.contains(e) || s.classList.add(e);
}, f = (t, e) => {
  const s = n(t);
  s.classList.contains(e) && s.classList.remove(e);
}, E = (t, e) => {
  n(t).classList.toggle(e);
}, L = (t, e) => {
  const s = n(t);
  s.value = e;
}, C = (t, e) => {
  const s = n(t);
  s.textContent = e;
}, y = () => {
  var t = document.getElementById("menuBurger");
  t.classList.remove("scale-out-tr"), t.classList.add("scale-in-tr"), t.classList.remove("hidden");
}, B = () => {
  var t = document.getElementById("menuBurger");
  t.classList.remove("scale-in-tr"), t.classList.add("scale-out-tr"), u(t, 300);
}, b = (t) => {
  const e = n(t);
  m(id), h(id, "disappearing"), u(e, 3e3);
}, g = (s) => {
  for (var e = document.getElementById("carrousel").children, s = 0, a = 0; a < e.length; a++)
    e[a].classList.contains("img-in") && (e[a].classList.remove("img-in"), e[a].classList.add("img-out"), s = a);
  s += 1, s == e.length && (s = 0), e[s].classList.remove("img-out"), e[s].classList.add("img-in");
}, T = (t) => {
  setInterval(function() {
    g(t);
  }, 1500);
}, x = (t, e, s) => {
  const a = n(t);
  if (a.attachEvent) return a.attachEvent("on" + e, s);
  if (a.addEventListener)
    return a.addEventListener(e, s, !1);
  a["on" + e] = s;
}, I = (t, e) => {
  const s = n(t);
  if (typeof s < "u" && s != null)
    return s.attachEvent ? s.attachEvent("onclick", e) : s.addEventListener("click", e, !1);
}, k = (t, e) => {
  const s = n(t);
  if (typeof s < "u" && s != null)
    return s.attachEvent ? s.attachEvent("onchange", e) : s.addEventListener("change", e, !1);
}, w = (t) => {
  const e = n(t);
  return e ? e.value : null;
}, N = (t, e) => {
  const s = n(t);
  return s ? (s.value = e, !0) : !1;
}, A = (t, e) => (n(t), element ? (element.textContent = e, !0) : !1), H = (t) => {
  var e = document.createElement("table");
  e.classList.add("table");
  var s = document.createElement("thead"), a = document.createElement("tr");
  let c = Object.keys(t);
  console.log(c.length);
  for (var l = 0; l < c.length; l++) {
    let o = document.createElement("th");
    o.appendChild(document.createTextNode(c[l])), a.appendChild(o);
  }
  s.appendChild(a);
  for (var r = document.createElement("tbody"), d = 0; d < t[c[0]].length; d++) {
    let o = document.createElement("tr");
    for (var l = 0; l < c.length; l++) {
      let i = document.createElement("td");
      i.appendChild(document.createTextNode(t[c[l]][d])), o.appendChild(i);
    }
    r.appendChild(o);
  }
  return e.appendChild(s), e.appendChild(r), e;
}, M = (t) => {
  const e = n(t);
  if (e) {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
    return !0;
  } else return !1;
}, O = (t) => new Promise((e) => {
  setTimeout(() => {
    e("");
  }, t);
});
export {
  h as addClass,
  x as addEvent,
  k as addEventChange,
  I as addEventClick,
  g as carrousel,
  H as createTableFromObj,
  O as delay,
  b as disappearing,
  n as getElement,
  w as getValue,
  v as hidde,
  u as hiddeAfter,
  B as hideMenu,
  T as initCarrousel,
  M as removeAllChildNodes,
  f as removeClass,
  A as setText,
  N as setValue,
  m as show,
  y as showMenu,
  p as toggle,
  E as toggleClass,
  L as updateInput,
  C as updateText
};
