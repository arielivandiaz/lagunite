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
  const t = a(s);
  t.classList.contains("hidden") && t.classList.remove("hidden");
}, g = (s) => {
  const t = a(s);
  t.classList.contains("hidden") || t.classList.add("hidden");
}, x = (s) => {
  const t = a(s);
  t.classList.contains("hidden") && t.classList.toggle("hidden");
}, h = (s, t) => {
  const e = a(s);
  setTimeout(
    () => {
      e.classList.add("hidden");
    },
    t,
    e
  );
}, v = (s, t) => {
  const e = a(s);
  e.classList.contains(t) || e.classList.add(t);
}, L = (s, t) => {
  const e = a(s);
  e.classList.contains(t) && e.classList.remove(t);
}, E = (s, t) => {
  a(s).classList.toggle(t);
}, b = (s, t) => {
  const e = a(s);
  e.value = t;
}, k = (s, t) => {
  const e = a(s);
  e.textContent = t;
}, y = () => {
  var s = document.getElementById("menuBurger");
  s.classList.remove("scale-out-tr"), s.classList.add("scale-in-tr"), s.classList.remove("hidden");
}, I = () => {
  var s = document.getElementById("menuBurger");
  s.classList.remove("scale-in-tr"), s.classList.add("scale-out-tr"), h(s, 300);
}, w = (s) => {
  const t = a(s);
  u(id), v(id, "disappearing"), h(t, 3e3);
}, m = (e) => {
  for (var t = document.getElementById("carrousel").children, e = 0, n = 0; n < t.length; n++)
    t[n].classList.contains("img-in") && (t[n].classList.remove("img-in"), t[n].classList.add("img-out"), e = n);
  e += 1, e == t.length && (e = 0), t[e].classList.remove("img-out"), t[e].classList.add("img-in");
}, C = (s) => {
  setInterval(function() {
    m(s);
  }, 1500);
}, A = (s, t, e) => {
  const n = a(s);
  if (n.attachEvent) return n.attachEvent("on" + t, e);
  if (n.addEventListener)
    return n.addEventListener(t, e, !1);
  n["on" + t] = e;
}, B = (s, t) => {
  const e = a(s);
  if (typeof e < "u" && e != null)
    return e.attachEvent ? e.attachEvent("onclick", t) : e.addEventListener("click", t, !1);
}, T = (s, t) => {
  const e = a(s);
  if (typeof e < "u" && e != null)
    return e.attachEvent ? e.attachEvent("onchange", t) : e.addEventListener("change", t, !1);
}, S = (s) => {
  const t = a(s);
  return t ? t.value : null;
}, M = (s, t) => {
  const e = a(s);
  return e ? (e.value = t, !0) : !1;
}, P = (s, t) => (a(s), element ? (element.textContent = t, !0) : !1), D = (s) => {
  var t = document.createElement("table");
  t.classList.add("table");
  var e = document.createElement("thead"), n = document.createElement("tr");
  let i = Object.keys(s);
  console.log(i.length);
  for (var r = 0; r < i.length; r++) {
    let d = document.createElement("th");
    d.appendChild(document.createTextNode(i[r])), n.appendChild(d);
  }
  e.appendChild(n);
  for (var l = document.createElement("tbody"), c = 0; c < s[i[0]].length; c++) {
    let d = document.createElement("tr");
    for (var r = 0; r < i.length; r++) {
      let o = document.createElement("td");
      o.appendChild(document.createTextNode(s[i[r]][c])), d.appendChild(o);
    }
    l.appendChild(d);
  }
  return t.appendChild(e), t.appendChild(l), t;
}, N = (s) => {
  const t = a(s);
  if (t) {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
    return !0;
  } else return !1;
}, _ = (s) => new Promise((t) => {
  setTimeout(() => {
    t("");
  }, s);
});
class f {
  constructor(t) {
    this.el = t, this.values = (t.dataset.values || "").split(",").map((e) => e.trim()).filter(Boolean), this.vertical = t.classList.contains("picker-wheel-v"), this.visible = this.vertical ? 7 : 5, this.index = this.values.indexOf(t.dataset.value), this.index < 0 && (this.index = Math.floor(this.values.length / 2)), this.track = t.querySelector(".picker-wheel-track"), this.prevBtn = t.querySelector(".picker-wheel-prev"), this.nextBtn = t.querySelector(".picker-wheel-next"), this.dragging = !1, this.dragStart = 0, this.dragStartIndex = 0, this.moved = !1, this.track && (this.setupA11y(), this.render(), this.bind());
  }
  setupA11y() {
    this.el.hasAttribute("role") || this.el.setAttribute("role", "listbox"), this.el.hasAttribute("tabindex") || this.el.setAttribute("tabindex", "0"), !this.el.hasAttribute("aria-label") && this.el.dataset.ariaLabel && this.el.setAttribute("aria-label", this.el.dataset.ariaLabel), this.el.setAttribute("aria-orientation", this.vertical ? "vertical" : "horizontal");
  }
  bind() {
    this.el.addEventListener("click", (e) => {
      if (this.moved) {
        this.moved = !1;
        return;
      }
      const n = e.target.closest(".picker-wheel-item");
      if (!n || !n.dataset.value) return;
      const i = this.values.indexOf(n.dataset.value);
      i >= 0 && this.selectIndex(i);
    }), this.el.addEventListener("keydown", (e) => {
      const n = this.vertical ? "ArrowUp" : "ArrowLeft", i = this.vertical ? "ArrowDown" : "ArrowRight";
      e.key === n ? (e.preventDefault(), this.selectIndex(this.index - 1)) : e.key === i ? (e.preventDefault(), this.selectIndex(this.index + 1)) : e.key === "Home" ? (e.preventDefault(), this.selectIndex(0)) : e.key === "End" && (e.preventDefault(), this.selectIndex(this.values.length - 1));
    }), this.el.addEventListener("wheel", (e) => {
      e.preventDefault();
      const n = (this.vertical ? e.deltaY : e.deltaX || e.deltaY) > 0 ? 1 : -1;
      this.selectIndex(this.index + n);
    }, { passive: !1 }), this.track.addEventListener("pointerdown", (e) => {
      this.dragging = !0, this.moved = !1, this.dragStart = this.vertical ? e.clientY : e.clientX, this.dragStartIndex = this.index, this.el.classList.add("dragging"), this.track.setPointerCapture(e.pointerId);
    }), this.track.addEventListener("pointermove", (e) => {
      if (!this.dragging) return;
      const i = (this.vertical ? e.clientY : e.clientX) - this.dragStart;
      Math.abs(i) > 4 && (this.moved = !0);
      const r = Math.round(-i / 56), l = this.dragStartIndex + r;
      l !== this.index && this.selectIndex(l);
    });
    const t = (e) => {
      if (this.dragging) {
        this.dragging = !1, this.el.classList.remove("dragging");
        try {
          this.track.releasePointerCapture(e.pointerId);
        } catch {
        }
      }
    };
    this.track.addEventListener("pointerup", t), this.track.addEventListener("pointercancel", t), this.prevBtn && this.prevBtn.addEventListener("click", (e) => {
      e.stopPropagation(), this.selectIndex(this.index - 1);
    }), this.nextBtn && this.nextBtn.addEventListener("click", (e) => {
      e.stopPropagation(), this.selectIndex(this.index + 1);
    });
  }
  selectIndex(t) {
    const e = Math.min(this.values.length - 1, Math.max(0, t));
    e !== this.index && (this.index = e, this.el.dataset.value = this.values[e], this.render(), this.el.dispatchEvent(new CustomEvent("change", {
      detail: { value: this.values[e], index: e }
    })));
  }
  render() {
    const t = Math.floor(this.visible / 2);
    this.track.innerHTML = "";
    for (let e = -t; e <= t; e++) {
      const n = this.index + e, i = document.createElement("button");
      i.type = "button", i.className = "picker-wheel-item", i.setAttribute("role", "option");
      const r = Math.abs(e);
      e === 0 ? i.classList.add("active") : r === 1 ? i.classList.add("near") : i.classList.add("far"), n >= 0 && n < this.values.length ? (i.textContent = this.values[n], i.dataset.value = this.values[n], i.setAttribute("aria-selected", e === 0 ? "true" : "false"), i.tabIndex = -1) : (i.textContent = " ", i.disabled = !0, i.classList.add("is-empty"), i.setAttribute("aria-hidden", "true")), this.track.appendChild(i);
    }
    this.el.setAttribute("aria-valuenow", this.values[this.index] ?? ""), this.prevBtn && (this.prevBtn.disabled = this.index === 0), this.nextBtn && (this.nextBtn.disabled = this.index === this.values.length - 1);
  }
}
function p(s = document) {
  s.querySelectorAll(".picker-wheel:not([data-pw-inited])").forEach((t) => {
    t.dataset.pwInited = "", new f(t);
  });
}
if (typeof document < "u" && !globalThis.LAGUNITE_NO_AUTO_INIT) {
  const s = () => {
    p();
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s) : s();
}
export {
  f as PickerWheel,
  v as addClass,
  A as addEvent,
  T as addEventChange,
  B as addEventClick,
  m as carrousel,
  D as createTableFromObj,
  _ as delay,
  w as disappearing,
  a as getElement,
  S as getValue,
  g as hidde,
  h as hiddeAfter,
  I as hideMenu,
  C as initCarrousel,
  p as initPickerWheels,
  N as removeAllChildNodes,
  L as removeClass,
  P as setText,
  M as setValue,
  u as show,
  y as showMenu,
  x as toggle,
  E as toggleClass,
  b as updateInput,
  k as updateText
};
//# sourceMappingURL=lagunite.js.map
