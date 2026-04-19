// ==============================
// SemiCode Loader — loader.js
// نسبة التحميل مربوطة بـ resources الصفحة الفعلية
// ==============================

(function () {
  "use strict";

  const STEPS = 8;
  const MSGS = [
    "Initializing...",
    "Loading modules...",
    "Compiling assets...",
    "Fetching data...",
    "Rendering components...",
    "Optimizing...",
    "Almost ready...",
    "Done ✓",
  ];

  class SemiCodeLoader {
    constructor() {
      this.overlay = document.getElementById("sc-overlay");
      this.card = document.getElementById("sc-card");
      this.fill = document.getElementById("sc-fill");
      this.pctEl = document.getElementById("sc-pct");
      this.msgEl = document.getElementById("sc-msg");
      this.stepsEl = document.getElementById("sc-steps");
      this.replayBtn = document.getElementById("sc-replay");

      this.displayed = 0; // النسبة المعروضة (تتحرك بسلاسة)
      this.real = 0; // النسبة الحقيقية من الـ resources
      this.msgIdx = -1;
      this.raf = null;
      this.done = false;

      this._buildSteps();

      if (this.replayBtn) {
        this.replayBtn.addEventListener("click", () => location.reload());
      }
    }

    // ── بناء شرائح التقدم ─────────────────────────────
    _buildSteps() {
      this.stepsEl.innerHTML = "";
      for (let i = 0; i < STEPS; i++) {
        const d = document.createElement("div");
        d.className = "sc-step";
        this.stepsEl.appendChild(d);
      }
      this.dots = [...this.stepsEl.querySelectorAll(".sc-step")];
    }

    _updateDots(pct) {
      const filled = Math.floor((pct / 100) * STEPS);
      this.dots.forEach((d, i) => {
        d.classList.toggle("on", i < filled && pct < 100);
        d.classList.toggle("done", i < filled && pct >= 100);
      });
    }

    _updateMsg(pct) {
      const idx = Math.min(
        Math.floor((pct / 100) * MSGS.length),
        MSGS.length - 1,
      );
      if (idx === this.msgIdx) return;
      this.msgIdx = idx;
      this.msgEl.style.opacity = "0";
      setTimeout(() => {
        this.msgEl.textContent = MSGS[idx];
        this.msgEl.style.opacity = "1";
      }, 180);
    }

    // ── حساب النسبة الحقيقية من المتصفح ──────────────────
    _calcRealProgress() {
      const entries = performance.getEntriesByType("resource");

      if (entries.length === 0) return 10;

      // كام resource خلص تحميله فعلاً
      const loaded = entries.filter((e) => e.responseEnd > 0).length;
      const total = entries.length;

      // 85% من الـ resources + 15% للـ DOM
      let pct = Math.round((loaded / total) * 85) + 15;

      if (
        document.readyState === "interactive" ||
        document.readyState === "complete"
      ) {
        pct = Math.max(pct, 60);
      }
      if (document.readyState === "complete") {
        pct = Math.max(pct, 95);
      }

      return Math.min(pct, 99); // مش بنوصل 100 غير لما يكتمل فعلاً
    }

    // ── حلقة الـ animation ──────────────────────────────
    _tick() {
      if (!this.done) {
        this.real = this._calcRealProgress();
      }

      // النسبة المعروضة بتلحق النسبة الحقيقية بسلاسة
      if (this.displayed < this.real) {
        const diff = this.real - this.displayed;
        this.displayed += Math.max(diff * 0.06, 0.4);
        this.displayed = Math.min(this.displayed, this.real);
      }

      const p = Math.min(Math.round(this.displayed), 100);

      this.fill.style.width = p + "%";
      this.pctEl.textContent = p + "%";
      this._updateDots(p);
      this._updateMsg(p);

      if (p < 100) {
        this.raf = requestAnimationFrame(() => this._tick());
      } else {
        this._onComplete();
      }
    }

    _onComplete() {
      this.card.classList.add("sc-complete");
      if (this.replayBtn) this.replayBtn.classList.add("visible");
      setTimeout(() => this.hide(), 700);
    }

    // ── يُشغَّل لما الصفحة تكمل تحميل كل حاجة ────────────
    forceComplete() {
      this.done = true;
      this.real = 100;
    }

    hide() {
      this.overlay.classList.add("sc-hidden");
      setTimeout(() => {
        this.overlay.style.display = "none";
        document.body.classList.remove("sc-loading");
      }, 500);
    }

    start() {
      document.body.classList.add("sc-loading");
      this.raf = requestAnimationFrame(() => this._tick());
    }
  }

  // ── Auto-init ─────────────────────────────────────────
  const loader = new SemiCodeLoader();
  loader.start();

  // لما كل حاجة تكمل (صور، CSS، JS، fonts...)
  window.addEventListener("load", () => {
    loader.forceComplete();
  });

  // Fallback: لو فضل أكتر من 8 ثواني
  setTimeout(() => loader.forceComplete(), 8000);

  window.scLoader = loader;
})();
