import { HumburgerMenu } from "./scripts/menu.js";
import { NewsSlider } from "./scripts/news-slider.js";

document.addEventListener("DOMContentLoaded", () => {
  new HumburgerMenu();

  new NewsSlider();

  const rootBlock = document.querySelector(".objectives__presentation");
  const title = document.querySelector(".objectives__presentation-title");
  const list = document.querySelector(".objectives__presentation-list");
  const mid = document.querySelector(".objectives__decoration--middle");
  const bot = document.querySelector(".objectives__decoration--bottom");
  const check2 = document.querySelector(".objectives__check-2");

  if (rootBlock && title && list && mid && bot && check2) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            title.classList.add("objectives__presentation-title--animate");
            list.classList.add("objectives__presentation-list--animate");
            mid.classList.add("objectives__decoration--middle--animate");
            bot.classList.add("objectives__decoration--bottom--animate");
            check2.classList.add("objectives__check-2--animate");

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(rootBlock);
  }
});
