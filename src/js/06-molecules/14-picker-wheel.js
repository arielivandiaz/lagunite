// src/js/06-molecules/14-picker-wheel.js
//
// Wheel picker (iOS-style) para elegir de una lista de valores.
// Estilos: src/css/06-molecules/14-picker-wheel.css
//
// Uso manual:
//   import { PickerWheel } from 'lagunite';
//   new PickerWheel(document.querySelector('.picker-wheel'));
//
// Uso auto-init (default cuando se importa lagunite entero):
//   cualquier `.picker-wheel` en el DOM se instancia solo.
//   Para desactivar: window.LAGUNITE_NO_AUTO_INIT = true antes del import.
//
// API DOM:
//   data-values="a,b,c,..."   lista de valores (continua o arbitraria)
//   data-value="b"            valor inicial
//   .picker-wheel-v           modificador vertical
//   .picker-wheel-prev        (opcional) boton para decrementar
//   .picker-wheel-next        (opcional) boton para incrementar
//
// Evento emitido:
//   'change' → detail: { value, index }

const DRAG_STEP_PX = 56;

export class PickerWheel {
  constructor(el) {
    this.el = el;
    this.values = (el.dataset.values || '').split(',').map(s => s.trim()).filter(Boolean);
    this.vertical = el.classList.contains('picker-wheel-v');
    this.visible = this.vertical ? 7 : 5;

    this.index = this.values.indexOf(el.dataset.value);
    if (this.index < 0) this.index = Math.floor(this.values.length / 2);

    this.track = el.querySelector('.picker-wheel-track');
    this.prevBtn = el.querySelector('.picker-wheel-prev');
    this.nextBtn = el.querySelector('.picker-wheel-next');

    this.dragging = false;
    this.dragStart = 0;
    this.dragStartIndex = 0;
    this.moved = false;

    if (!this.track) return;

    this.render();
    this.bind();
  }

  bind() {
    this.el.addEventListener('click', e => {
      if (this.moved) { this.moved = false; return; }
      const item = e.target.closest('.picker-wheel-item');
      if (!item || !item.dataset.value) return;
      const idx = this.values.indexOf(item.dataset.value);
      if (idx >= 0) this.selectIndex(idx);
    });

    this.el.addEventListener('wheel', e => {
      e.preventDefault();
      const dir = (this.vertical ? e.deltaY : (e.deltaX || e.deltaY)) > 0 ? 1 : -1;
      this.selectIndex(this.index + dir);
    }, { passive: false });

    this.track.addEventListener('pointerdown', e => {
      this.dragging = true;
      this.moved = false;
      this.dragStart = this.vertical ? e.clientY : e.clientX;
      this.dragStartIndex = this.index;
      this.el.classList.add('dragging');
      this.track.setPointerCapture(e.pointerId);
    });

    this.track.addEventListener('pointermove', e => {
      if (!this.dragging) return;
      const now = this.vertical ? e.clientY : e.clientX;
      const delta = now - this.dragStart;
      if (Math.abs(delta) > 4) this.moved = true;
      const offset = Math.round(-delta / DRAG_STEP_PX);
      const newIndex = this.dragStartIndex + offset;
      if (newIndex !== this.index) this.selectIndex(newIndex);
    });

    const endDrag = e => {
      if (!this.dragging) return;
      this.dragging = false;
      this.el.classList.remove('dragging');
      try { this.track.releasePointerCapture(e.pointerId); } catch (_) { /* noop */ }
    };
    this.track.addEventListener('pointerup', endDrag);
    this.track.addEventListener('pointercancel', endDrag);

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', e => {
        e.stopPropagation();
        this.selectIndex(this.index - 1);
      });
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', e => {
        e.stopPropagation();
        this.selectIndex(this.index + 1);
      });
    }
  }

  selectIndex(i) {
    const clamped = Math.min(this.values.length - 1, Math.max(0, i));
    if (clamped === this.index) return;
    this.index = clamped;
    this.el.dataset.value = this.values[clamped];
    this.render();
    this.el.dispatchEvent(new CustomEvent('change', {
      detail: { value: this.values[clamped], index: clamped }
    }));
  }

  render() {
    const half = Math.floor(this.visible / 2);
    this.track.innerHTML = '';
    for (let offset = -half; offset <= half; offset++) {
      const vIdx = this.index + offset;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'picker-wheel-item';
      const abs = Math.abs(offset);
      if (offset === 0) btn.classList.add('active');
      else if (abs === 1) btn.classList.add('near');
      else btn.classList.add('far');

      if (vIdx >= 0 && vIdx < this.values.length) {
        btn.textContent = this.values[vIdx];
        btn.dataset.value = this.values[vIdx];
      } else {
        btn.textContent = '\u00A0';
        btn.disabled = true;
        btn.style.visibility = 'hidden';
      }
      this.track.appendChild(btn);
    }
    if (this.prevBtn) this.prevBtn.disabled = this.index === 0;
    if (this.nextBtn) this.nextBtn.disabled = this.index === this.values.length - 1;
  }
}

/**
 * Instancia todos los `.picker-wheel` dentro de `root` que no lo esten ya.
 * Idempotente: los nodos ya inicializados llevan [data-pw-inited].
 */
export function initPickerWheels(root = document) {
  root.querySelectorAll('.picker-wheel:not([data-pw-inited])').forEach(el => {
    el.dataset.pwInited = '';
    new PickerWheel(el);
  });
}
