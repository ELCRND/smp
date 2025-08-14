export class HumburgerMenu {
  constructor() {
    this._HEADER = document.querySelector(".header");
    this._MENU = document.querySelector(".header__navigation-list");
    this._MENU_BTN = document.querySelector(".header__menu-btn");
    this._MENU_BACKDROP = document.querySelector(".header__menu-backdrop");

    this._handleOpen = () => this._open();
    this._handleClose = () => this._close();
    this._handleToggle = () => this._toggle();

    this.init();
  }

  init() {
    this.on();
  }

  on() {
    this._MENU_BTN.addEventListener("click", this._handleToggle);
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1023) this._handleClose();
    });
  }

  off() {
    this._MENU_BTN.removeEventListener("click", this._handleToggle);
  }

  _open() {
    this._HEADER.classList.add("header--open");
    this._MENU.classList.add("header__navigation-list--open");
    this._MENU_BTN.classList.add("header__menu-btn--open");
    this._MENU_BACKDROP.classList.add("header__menu-backdrop--open");
    document.body.classList.add("is-lock");
  }
  _close() {
    this._HEADER.classList.remove("header--open");
    this._MENU.classList.remove("header__navigation-list--open");
    this._MENU_BTN.classList.remove("header__menu-btn--open");
    this._MENU_BACKDROP.classList.remove("header__menu-backdrop--open");
    document.body.classList.remove("is-lock");
  }

  _toggle() {
    this._HEADER.classList.toggle("header--open");
    this._MENU.classList.toggle("header__navigation-list--open");
    this._MENU_BTN.classList.toggle("header__menu-btn--open");
    this._MENU_BACKDROP.classList.toggle("header__menu-backdrop--open");
    document.body.classList.toggle("is-lock");
  }
}
