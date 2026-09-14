const a = (s) => {
  if (typeof s == "string") {
    if (s[0] === "#")
      return document.getElementById(s.split("#")[1]);
    if (s[0] === ".")
      return document.getElementsByClassName(s.split(".")[1])[0];
    if (s[0] === "<")
      return document.getElementsByTagName(
        s.split("<")[1].split(">")[0]
      )[0];
  } else
    return s;
  return document.getElementById(s);
}, u = (s) => {
  const e = a(s);
  e.classList.contains("hidden") && e.classList.remove("hidden");
}, p = (s) => {
  const e = a(s);
  e.classList.contains("hidden") || e.classList.add("hidden");
}, L = (s) => {
  const e = a(s);
  e.classList.contains("hidden") && e.classList.toggle("hidden");
}, h = (s, e) => {
  const t = a(s);
  setTimeout(
    () => {
      t.classList.add("hidden");
    },
    e,
    t
  );
}, v = (s, e) => {
  const t = a(s);
  t.classList.contains(e) || t.classList.add(e);
}, x = (s, e) => {
  const t = a(s);
  t.classList.contains(e) && t.classList.remove(e);
}, E = (s, e) => {
  a(s).classList.toggle(e);
}, k = (s, e) => {
  const t = a(s);
  t.value = e;
}, C = (s, e) => {
  const t = a(s);
  t.textContent = e;
}, y = () => {
  var s = document.getElementById("menuBurger");
  s.classList.remove("scale-out-tr"), s.classList.add("scale-in-tr"), s.classList.remove("hidden");
}, I = () => {
  var s = document.getElementById("menuBurger");
  s.classList.remove("scale-in-tr"), s.classList.add("scale-out-tr"), h(s, 300);
}, b = (s) => {
  const e = a(s);
  u(id), v(id, "disappearing"), h(e, 3e3);
}, m = (t) => {
  for (var e = document.getElementById("carrousel").children, t = 0, n = 0; n < e.length; n++)
    e[n].classList.contains("img-in") && (e[n].classList.remove("img-in"), e[n].classList.add("img-out"), t = n);
  t += 1, t == e.length && (t = 0), e[t].classList.remove("img-out"), e[t].classList.add("img-in");
}, w = (s) => {
  setInterval(function() {
    m(s);
  }, 1500);
}, B = (s, e, t) => {
  const n = a(s);
  if (n.attachEvent) return n.attachEvent("on" + e, t);
  if (n.addEventListener)
    return n.addEventListener(e, t, !1);
  n["on" + e] = t;
}, T = (s, e) => {
  const t = a(s);
  if (typeof t < "u" && t != null)
    return t.attachEvent ? t.attachEvent("onclick", e) : t.addEventListener("click", e, !1);
}, S = (s, e) => {
  const t = a(s);
  if (typeof t < "u" && t != null)
    return t.attachEvent ? t.attachEvent("onchange", e) : t.addEventListener("change", e, !1);
}, M = (s) => {
  const e = a(s);
  return e ? e.value : null;
}, P = (s, e) => {
  const t = a(s);
  return t ? (t.value = e, !0) : !1;
}, A = (s, e) => (a(s), element ? (element.textContent = e, !0) : !1), N = (s) => {
  var e = document.createElement("table");
  e.classList.add("table");
  var t = document.createElement("thead"), n = document.createElement("tr");
  let i = Object.keys(s);
  console.log(i.length);
  for (var d = 0; d < i.length; d++) {
    let l = document.createElement("th");
    l.appendChild(document.createTextNode(i[d])), n.appendChild(l);
  }
  t.appendChild(n);
  for (var r = document.createElement("tbody"), c = 0; c < s[i[0]].length; c++) {
    let l = document.createElement("tr");
    for (var d = 0; d < i.length; d++) {
      let o = document.createElement("td");
      o.appendChild(document.createTextNode(s[i[d]][c])), l.appendChild(o);
    }
    r.appendChild(l);
  }
  return e.appendChild(t), e.appendChild(r), e;
}, _ = (s) => {
  const e = a(s);
  if (e) {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
    return !0;
  } else return !1;
}, O = (s) => new Promise((e) => {
  setTimeout(() => {
    e("");
  }, s);
});
class g {
  constructor(e) {
    this.el = e, this.values = (e.dataset.values || "").split(",").map((t) => t.trim()).filter(Boolean), this.vertical = e.classList.contains("picker-wheel-v"), this.visible = this.vertical ? 7 : 5, this.index = this.values.indexOf(e.dataset.value), this.index < 0 && (this.index = Math.floor(this.values.length / 2)), this.track = e.querySelector(".picker-wheel-track"), this.prevBtn = e.querySelector(".picker-wheel-prev"), this.nextBtn = e.querySelector(".picker-wheel-next"), this.dragging = !1, this.dragStart = 0, this.dragStartIndex = 0, this.moved = !1, this.track && (this.render(), this.bind());
  }
  bind() {
    this.el.addEventListener("click", (t) => {
      if (this.moved) {
        this.moved = !1;
        return;
      }
      const n = t.target.closest(".picker-wheel-item");
      if (!n || !n.dataset.value) return;
      const i = this.values.indexOf(n.dataset.value);
      i >= 0 && this.selectIndex(i);
    }), this.el.addEventListener("wheel", (t) => {
      t.preventDefault();
      const n = (this.vertical ? t.deltaY : t.deltaX || t.deltaY) > 0 ? 1 : -1;
      this.selectIndex(this.index + n);
    }, { passive: !1 }), this.track.addEventListener("pointerdown", (t) => {
      this.dragging = !0, this.moved = !1, this.dragStart = this.vertical ? t.clientY : t.clientX, this.dragStartIndex = this.index, this.el.classList.add("dragging"), this.track.setPointerCapture(t.pointerId);
    }), this.track.addEventListener("pointermove", (t) => {
      if (!this.dragging) return;
      const i = (this.vertical ? t.clientY : t.clientX) - this.dragStart;
      Math.abs(i) > 4 && (this.moved = !0);
      const d = Math.round(-i / 56), r = this.dragStartIndex + d;
      r !== this.index && this.selectIndex(r);
    });
    const e = (t) => {
      if (this.dragging) {
        this.dragging = !1, this.el.classList.remove("dragging");
        try {
          this.track.releasePointerCapture(t.pointerId);
        } catch {
        }
      }
    };
    this.track.addEventListener("pointerup", e), this.track.addEventListener("pointercancel", e), this.prevBtn && this.prevBtn.addEventListener("click", (t) => {
      t.stopPropagation(), this.selectIndex(this.index - 1);
    }), this.nextBtn && this.nextBtn.addEventListener("click", (t) => {
      t.stopPropagation(), this.selectIndex(this.index + 1);
    });
  }
  selectIndex(e) {
    const t = Math.min(this.values.length - 1, Math.max(0, e));
    t !== this.index && (this.index = t, this.el.dataset.value = this.values[t], this.render(), this.el.dispatchEvent(new CustomEvent("change", {
      detail: { value: this.values[t], index: t }
    })));
  }
  render() {
    const e = Math.floor(this.visible / 2);
    this.track.innerHTML = "";
    for (let t = -e; t <= e; t++) {
      const n = this.index + t, i = document.createElement("button");
      i.type = "button", i.className = "picker-wheel-item";
      const d = Math.abs(t);
      t === 0 ? i.classList.add("active") : d === 1 ? i.classList.add("near") : i.classList.add("far"), n >= 0 && n < this.values.length ? (i.textContent = this.values[n], i.dataset.value = this.values[n]) : (i.textContent = " ", i.disabled = !0, i.style.visibility = "hidden"), this.track.appendChild(i);
    }
    this.prevBtn && (this.prevBtn.disabled = this.index === 0), this.nextBtn && (this.nextBtn.disabled = this.index === this.values.length - 1);
  }
}
function f(s = document) {
  s.querySelectorAll(".picker-wheel:not([data-pw-inited])").forEach((e) => {
    e.dataset.pwInited = "", new g(e);
  });
}
if (typeof document < "u" && !globalThis.LAGUNITE_NO_AUTO_INIT) {
  const s = () => {
    f();
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s) : s();
}
export {
  g as PickerWheel,
  v as addClass,
  B as addEvent,
  S as addEventChange,
  T as addEventClick,
  m as carrousel,
  N as createTableFromObj,
  O as delay,
  b as disappearing,
  a as getElement,
  M as getValue,
  p as hidde,
  h as hiddeAfter,
  I as hideMenu,
  w as initCarrousel,
  f as initPickerWheels,
  _ as removeAllChildNodes,
  x as removeClass,
  A as setText,
  P as setValue,
  u as show,
  y as showMenu,
  L as toggle,
  E as toggleClass,
  k as updateInput,
  C as updateText
};
