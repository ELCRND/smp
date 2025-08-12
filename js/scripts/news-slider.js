export class NewsSlider {
  constructor() {
    this._SLIDER = document.querySelector(".news__slider");
    this._SLIDER_LIST = this._SLIDER.querySelector(".news__list");
    this._SLIDER_ITEMS = this._SLIDER_LIST.childNodes;
    this._SLIDER_PREV = this._SLIDER.querySelector(".news__slider-prev");
    this._SLIDER_NEXT = this._SLIDER.querySelector(".news__slider-next");

    this._GAP = parseInt(window.getComputedStyle(this._SLIDER_LIST).gap);
    this._CURRENT_SLIDE = 0;
    this._DISABLED_BTN = this._SLIDER_PREV;

    this._handlePrev = () => this._prev();
    this._handleNext = () => this._next();

    this.init();
  }

  get currentOffset() {
    return this._SLIDER_LIST.firstElementChild.offsetWidth + this._GAP;
  }

  get visibleSLidesCount() {
    if (window.innerWidth > 767) {
      return 4;
    } else {
      return 1;
    }
  }

  get isFirstSlide() {
    return this._CURRENT_SLIDE <= 0;
  }

  get isLastSlide() {
    return (
      this._CURRENT_SLIDE >=
      this._SLIDER_LIST.childElementCount - this.visibleSLidesCount
    );
  }

  _prev() {
    if (this.isFirstSlide) {
      this._CURRENT_SLIDE = 0;
      return;
    }

    this._unlockBtn();
    this._CURRENT_SLIDE -= 1;
    this._update();

    if (this.isFirstSlide) {
      this._lockBtn("prev");
    }
  }

  _next() {
    if (this.isLastSlide) {
      return;
    }

    this._unlockBtn();
    this._CURRENT_SLIDE += 1;

    this._update();

    if (this.isLastSlide) {
      this._lockBtn("next");
    }
  }

  _lockBtn(target) {
    if (target === "next") {
      this._SLIDER_NEXT.disabled = true;
      this._DISABLED_BTN = this._SLIDER_NEXT;
      return;
    } else if (target === "prev") {
      this._SLIDER_PREV.disabled = true;
      this._DISABLED_BTN = this._SLIDER_PREV;
    }
  }

  _unlockBtn() {
    if (!this._DISABLED_BTN) return;

    this._DISABLED_BTN.disabled = false;
    this._DISABLED_BTN = null;
  }

  _update() {
    this._SLIDER_LIST.style = `
            translate:${-this._CURRENT_SLIDE * this.currentOffset}px 0;
        `;
  }

  on() {
    this._SLIDER_PREV.addEventListener("click", this._handlePrev);
    this._SLIDER_NEXT.addEventListener("click", this._handleNext);
  }

  off() {
    this._SLIDER_PREV.removeEventListener("click", this._handlePrev);
    this._SLIDER_NEXT.removeEventListener("click", this._handleNext);
  }

  init() {
    this.on();
  }
}
