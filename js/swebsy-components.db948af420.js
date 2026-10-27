/*! ✦  swebsy  ✦  generated file  ────────────────────────────────────────────

  Generated file. We do not recommend editing it by hand.

    ·  Nothing here comes back. Swebsy edits its own project file, not
       this folder, so hand edits never reach the editor.
    ·  The next export overwrites this file completely.
    ·  Class names and file names are generated and change per build.

  Edit the design where it sticks:
  https://studio.swebsy.com/create?template=clarity&ref=export

  More in README.md, next to this file.
────────────────────────────────────────────  */
var items = document.querySelectorAll("#ikylrz-2-4");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    var c, d, h;
    const a = this,
      r = (c = a.ownerDocument) == null ? void 0 : c.defaultView;
    if (
      !r ||
      (a.dataset.navbarCollapseInit === "1" && !r.__swebsyPreviewRuntime)
    )
      return;
    ((d = a.__swebsyNavbarUnregister) == null || d.call(a),
      a.__swebsyNavbarRuntimeReady &&
        (r.removeEventListener(
          "swebsy:preview-runtime-ready",
          a.__swebsyNavbarRuntimeReady,
        ),
        delete a.__swebsyNavbarRuntimeReady),
      (h = a.__swebsyNavbarCleanup) == null || h.call(a));
    const o = a.querySelector('[data-navbar-part="toggler"]'),
      i = a.querySelector('[data-navbar-part="collapse"]');
    if (!o || !i) return;
    const s = () => {
        var L;
        ((L = a.__swebsyNavbarCleanup) == null || L.call(a),
          (a.dataset.navbarCollapseInit = "1"));
        const m = i.className,
          b = i.style.height,
          v = o.className,
          _ = o.getAttribute("aria-expanded");
        let x;
        const M = () => {
            const B = (r.getComputedStyle(i).transitionDuration ?? "0s")
                .split(",")
                .map((H) => {
                  const de = parseFloat(H.trim());
                  return H.trim().endsWith("ms") ? de : de * 1e3;
                }),
              q = Math.max(...B);
            return Number.isFinite(q) && q > 0 ? q : 0;
          },
          T = (I) => {
            (x !== void 0 && r.clearTimeout(x), (x = r.setTimeout(I, M())));
          },
          E = () => {
            i.classList.contains("collapsing") ||
              (i.classList.remove("collapse", "show"),
              i.classList.add("collapsing"),
              (i.style.height = "0"),
              i.offsetHeight,
              (i.style.height = i.scrollHeight + "px"),
              T(() => {
                (i.classList.remove("collapsing"),
                  i.classList.add("collapse", "show"),
                  (i.style.height = ""),
                  o.setAttribute("aria-expanded", "true"),
                  o.classList.remove("collapsed"));
              }));
          },
          P = () => {
            i.classList.contains("collapsing") ||
              ((i.style.height = i.getBoundingClientRect().height + "px"),
              i.classList.remove("collapse", "show"),
              i.classList.add("collapsing"),
              i.offsetHeight,
              (i.style.height = "0"),
              T(() => {
                (i.classList.remove("collapsing"),
                  i.classList.add("collapse"),
                  (i.style.height = ""),
                  o.setAttribute("aria-expanded", "false"),
                  o.classList.add("collapsed"));
              }));
          },
          N = () => {
            i.classList.contains("show") ? P() : E();
          };
        (o.addEventListener("click", N),
          (a.__swebsyNavbarCleanup = () => {
            (o.removeEventListener("click", N),
              x !== void 0 && r.clearTimeout(x),
              (i.className = m),
              (i.style.height = b),
              (o.className = v),
              _ === null
                ? o.removeAttribute("aria-expanded")
                : o.setAttribute("aria-expanded", _),
              delete a.dataset.navbarCollapseInit);
          }));
      },
      l = () => {
        const m = r.__swebsyPreviewRuntime;
        return m
          ? ((a.__swebsyNavbarUnregister = m.register(a, "navbar", {
              start: s,
              stop: () => {
                var b;
                return (b = a.__swebsyNavbarCleanup) == null
                  ? void 0
                  : b.call(a);
              },
            })),
            !0)
          : !1;
      },
      p = (() => {
        try {
          return r.parent !== r && !!r.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!l()) {
      if (p) {
        const m = () => l();
        ((a.__swebsyNavbarRuntimeReady = m),
          r.addEventListener("swebsy:preview-runtime-ready", m, { once: !0 }));
        return;
      }
      s();
    }
  }).bind(items[i])();
}
var items = document.querySelectorAll("#ikylrz-2-3");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    var c, d, h;
    const a = this,
      r = (c = a.ownerDocument) == null ? void 0 : c.defaultView;
    if (
      !r ||
      (a.dataset.navbarCollapseInit === "1" && !r.__swebsyPreviewRuntime)
    )
      return;
    ((d = a.__swebsyNavbarUnregister) == null || d.call(a),
      a.__swebsyNavbarRuntimeReady &&
        (r.removeEventListener(
          "swebsy:preview-runtime-ready",
          a.__swebsyNavbarRuntimeReady,
        ),
        delete a.__swebsyNavbarRuntimeReady),
      (h = a.__swebsyNavbarCleanup) == null || h.call(a));
    const o = a.querySelector('[data-navbar-part="toggler"]'),
      i = a.querySelector('[data-navbar-part="collapse"]');
    if (!o || !i) return;
    const s = () => {
        var L;
        ((L = a.__swebsyNavbarCleanup) == null || L.call(a),
          (a.dataset.navbarCollapseInit = "1"));
        const m = i.className,
          b = i.style.height,
          v = o.className,
          _ = o.getAttribute("aria-expanded");
        let x;
        const M = () => {
            const B = (r.getComputedStyle(i).transitionDuration ?? "0s")
                .split(",")
                .map((H) => {
                  const de = parseFloat(H.trim());
                  return H.trim().endsWith("ms") ? de : de * 1e3;
                }),
              q = Math.max(...B);
            return Number.isFinite(q) && q > 0 ? q : 0;
          },
          T = (I) => {
            (x !== void 0 && r.clearTimeout(x), (x = r.setTimeout(I, M())));
          },
          E = () => {
            i.classList.contains("collapsing") ||
              (i.classList.remove("collapse", "show"),
              i.classList.add("collapsing"),
              (i.style.height = "0"),
              i.offsetHeight,
              (i.style.height = i.scrollHeight + "px"),
              T(() => {
                (i.classList.remove("collapsing"),
                  i.classList.add("collapse", "show"),
                  (i.style.height = ""),
                  o.setAttribute("aria-expanded", "true"),
                  o.classList.remove("collapsed"));
              }));
          },
          P = () => {
            i.classList.contains("collapsing") ||
              ((i.style.height = i.getBoundingClientRect().height + "px"),
              i.classList.remove("collapse", "show"),
              i.classList.add("collapsing"),
              i.offsetHeight,
              (i.style.height = "0"),
              T(() => {
                (i.classList.remove("collapsing"),
                  i.classList.add("collapse"),
                  (i.style.height = ""),
                  o.setAttribute("aria-expanded", "false"),
                  o.classList.add("collapsed"));
              }));
          },
          N = () => {
            i.classList.contains("show") ? P() : E();
          };
        (o.addEventListener("click", N),
          (a.__swebsyNavbarCleanup = () => {
            (o.removeEventListener("click", N),
              x !== void 0 && r.clearTimeout(x),
              (i.className = m),
              (i.style.height = b),
              (o.className = v),
              _ === null
                ? o.removeAttribute("aria-expanded")
                : o.setAttribute("aria-expanded", _),
              delete a.dataset.navbarCollapseInit);
          }));
      },
      l = () => {
        const m = r.__swebsyPreviewRuntime;
        return m
          ? ((a.__swebsyNavbarUnregister = m.register(a, "navbar", {
              start: s,
              stop: () => {
                var b;
                return (b = a.__swebsyNavbarCleanup) == null
                  ? void 0
                  : b.call(a);
              },
            })),
            !0)
          : !1;
      },
      p = (() => {
        try {
          return r.parent !== r && !!r.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!l()) {
      if (p) {
        const m = () => l();
        ((a.__swebsyNavbarRuntimeReady = m),
          r.addEventListener("swebsy:preview-runtime-ready", m, { once: !0 }));
        return;
      }
      s();
    }
  }).bind(items[i])();
}
var items = document.querySelectorAll("#ikylrz-2-5");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    var c, d, h;
    const a = this,
      r = (c = a.ownerDocument) == null ? void 0 : c.defaultView;
    if (
      !r ||
      (a.dataset.navbarCollapseInit === "1" && !r.__swebsyPreviewRuntime)
    )
      return;
    ((d = a.__swebsyNavbarUnregister) == null || d.call(a),
      a.__swebsyNavbarRuntimeReady &&
        (r.removeEventListener(
          "swebsy:preview-runtime-ready",
          a.__swebsyNavbarRuntimeReady,
        ),
        delete a.__swebsyNavbarRuntimeReady),
      (h = a.__swebsyNavbarCleanup) == null || h.call(a));
    const o = a.querySelector('[data-navbar-part="toggler"]'),
      i = a.querySelector('[data-navbar-part="collapse"]');
    if (!o || !i) return;
    const s = () => {
        var L;
        ((L = a.__swebsyNavbarCleanup) == null || L.call(a),
          (a.dataset.navbarCollapseInit = "1"));
        const m = i.className,
          b = i.style.height,
          v = o.className,
          _ = o.getAttribute("aria-expanded");
        let x;
        const M = () => {
            const B = (r.getComputedStyle(i).transitionDuration ?? "0s")
                .split(",")
                .map((H) => {
                  const de = parseFloat(H.trim());
                  return H.trim().endsWith("ms") ? de : de * 1e3;
                }),
              q = Math.max(...B);
            return Number.isFinite(q) && q > 0 ? q : 0;
          },
          T = (I) => {
            (x !== void 0 && r.clearTimeout(x), (x = r.setTimeout(I, M())));
          },
          E = () => {
            i.classList.contains("collapsing") ||
              (i.classList.remove("collapse", "show"),
              i.classList.add("collapsing"),
              (i.style.height = "0"),
              i.offsetHeight,
              (i.style.height = i.scrollHeight + "px"),
              T(() => {
                (i.classList.remove("collapsing"),
                  i.classList.add("collapse", "show"),
                  (i.style.height = ""),
                  o.setAttribute("aria-expanded", "true"),
                  o.classList.remove("collapsed"));
              }));
          },
          P = () => {
            i.classList.contains("collapsing") ||
              ((i.style.height = i.getBoundingClientRect().height + "px"),
              i.classList.remove("collapse", "show"),
              i.classList.add("collapsing"),
              i.offsetHeight,
              (i.style.height = "0"),
              T(() => {
                (i.classList.remove("collapsing"),
                  i.classList.add("collapse"),
                  (i.style.height = ""),
                  o.setAttribute("aria-expanded", "false"),
                  o.classList.add("collapsed"));
              }));
          },
          N = () => {
            i.classList.contains("show") ? P() : E();
          };
        (o.addEventListener("click", N),
          (a.__swebsyNavbarCleanup = () => {
            (o.removeEventListener("click", N),
              x !== void 0 && r.clearTimeout(x),
              (i.className = m),
              (i.style.height = b),
              (o.className = v),
              _ === null
                ? o.removeAttribute("aria-expanded")
                : o.setAttribute("aria-expanded", _),
              delete a.dataset.navbarCollapseInit);
          }));
      },
      l = () => {
        const m = r.__swebsyPreviewRuntime;
        return m
          ? ((a.__swebsyNavbarUnregister = m.register(a, "navbar", {
              start: s,
              stop: () => {
                var b;
                return (b = a.__swebsyNavbarCleanup) == null
                  ? void 0
                  : b.call(a);
              },
            })),
            !0)
          : !1;
      },
      p = (() => {
        try {
          return r.parent !== r && !!r.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!l()) {
      if (p) {
        const m = () => l();
        ((a.__swebsyNavbarRuntimeReady = m),
          r.addEventListener("swebsy:preview-runtime-ready", m, { once: !0 }));
        return;
      }
      s();
    }
  }).bind(items[i])();
}
var items = document.querySelectorAll("#ikylrz-2-2");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    var c, d, h;
    const a = this,
      r = (c = a.ownerDocument) == null ? void 0 : c.defaultView;
    if (
      !r ||
      (a.dataset.navbarCollapseInit === "1" && !r.__swebsyPreviewRuntime)
    )
      return;
    ((d = a.__swebsyNavbarUnregister) == null || d.call(a),
      a.__swebsyNavbarRuntimeReady &&
        (r.removeEventListener(
          "swebsy:preview-runtime-ready",
          a.__swebsyNavbarRuntimeReady,
        ),
        delete a.__swebsyNavbarRuntimeReady),
      (h = a.__swebsyNavbarCleanup) == null || h.call(a));
    const o = a.querySelector('[data-navbar-part="toggler"]'),
      i = a.querySelector('[data-navbar-part="collapse"]');
    if (!o || !i) return;
    const s = () => {
        var L;
        ((L = a.__swebsyNavbarCleanup) == null || L.call(a),
          (a.dataset.navbarCollapseInit = "1"));
        const m = i.className,
          b = i.style.height,
          v = o.className,
          _ = o.getAttribute("aria-expanded");
        let x;
        const M = () => {
            const B = (r.getComputedStyle(i).transitionDuration ?? "0s")
                .split(",")
                .map((H) => {
                  const de = parseFloat(H.trim());
                  return H.trim().endsWith("ms") ? de : de * 1e3;
                }),
              q = Math.max(...B);
            return Number.isFinite(q) && q > 0 ? q : 0;
          },
          T = (I) => {
            (x !== void 0 && r.clearTimeout(x), (x = r.setTimeout(I, M())));
          },
          E = () => {
            i.classList.contains("collapsing") ||
              (i.classList.remove("collapse", "show"),
              i.classList.add("collapsing"),
              (i.style.height = "0"),
              i.offsetHeight,
              (i.style.height = i.scrollHeight + "px"),
              T(() => {
                (i.classList.remove("collapsing"),
                  i.classList.add("collapse", "show"),
                  (i.style.height = ""),
                  o.setAttribute("aria-expanded", "true"),
                  o.classList.remove("collapsed"));
              }));
          },
          P = () => {
            i.classList.contains("collapsing") ||
              ((i.style.height = i.getBoundingClientRect().height + "px"),
              i.classList.remove("collapse", "show"),
              i.classList.add("collapsing"),
              i.offsetHeight,
              (i.style.height = "0"),
              T(() => {
                (i.classList.remove("collapsing"),
                  i.classList.add("collapse"),
                  (i.style.height = ""),
                  o.setAttribute("aria-expanded", "false"),
                  o.classList.add("collapsed"));
              }));
          },
          N = () => {
            i.classList.contains("show") ? P() : E();
          };
        (o.addEventListener("click", N),
          (a.__swebsyNavbarCleanup = () => {
            (o.removeEventListener("click", N),
              x !== void 0 && r.clearTimeout(x),
              (i.className = m),
              (i.style.height = b),
              (o.className = v),
              _ === null
                ? o.removeAttribute("aria-expanded")
                : o.setAttribute("aria-expanded", _),
              delete a.dataset.navbarCollapseInit);
          }));
      },
      l = () => {
        const m = r.__swebsyPreviewRuntime;
        return m
          ? ((a.__swebsyNavbarUnregister = m.register(a, "navbar", {
              start: s,
              stop: () => {
                var b;
                return (b = a.__swebsyNavbarCleanup) == null
                  ? void 0
                  : b.call(a);
              },
            })),
            !0)
          : !1;
      },
      p = (() => {
        try {
          return r.parent !== r && !!r.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!l()) {
      if (p) {
        const m = () => l();
        ((a.__swebsyNavbarRuntimeReady = m),
          r.addEventListener("swebsy:preview-runtime-ready", m, { once: !0 }));
        return;
      }
      s();
    }
  }).bind(items[i])();
}
