!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("Lagunite", [], t)
    : "object" == typeof exports
    ? (exports.Lagunite = t())
    : (e.Lagunite = t());
})(self, () =>
  (() => {
    "use strict";
    var e = {
        d: (t, o) => {
          for (var n in o)
            e.o(o, n) &&
              !e.o(t, n) &&
              Object.defineProperty(t, n, { enumerable: !0, get: o[n] });
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        },
      },
      t = {};
    e.r(t), e.d(t, { hidde: () => n, show: () => o });
    const o = (e) => {
        var t = document.getElementById(e);
        t.classList.contains("hidden") && t.classList.remove("hidden");
      },
      n = (e) => {
        document.getElementById(e).classList.add("hidden");
      };
    return t;
  })()
);
