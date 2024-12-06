import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

function renderPagination(index, className) {
  return `<button class="ui-slider-controls__control-page ${className}">
    <span class="visually-hidden">${index + 1}</span></button>`;
}

export function initSlider() {
  const wrapperTagsYears = document.querySelector(".about-us-tags");

  const slider = new Swiper(".about-us-slider__swiper", {
    spaceBetween: "16px",
    slidesPerView: 1,
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: ".ui-slider-controls__control-next",
      prevEl: ".ui-slider-controls__control-prev",
      enabled: true,
    },
    pagination: {
      el: ".ui-slider-controls__control-pages",
      clickable: true,
      renderBullet: renderPagination,
      bulletActiveClass: "active",
    },
    on: {
      afterInit: (swiper) => {
        const activeGroup = swiper.slides[swiper.activeIndex].dataset.group;
        wrapperTagsYears
          .querySelectorAll("[data-group]")
          ?.forEach((el) => toggleActiveGroup(el, activeGroup));

        initEventTagsYear(wrapperTagsYears, swiper);
      },
      slideChange: (swiper) => {
        const activeGroup = swiper.slides[swiper.activeIndex].dataset.group;

        wrapperTagsYears
          .querySelectorAll("[data-group]")
          ?.forEach((el) => toggleActiveGroup(el, activeGroup));
      },
    },
  });
}

function toggleActiveGroup(el, activeGroup) {
  const group = el.dataset.group;

  if (group === activeGroup) {
    el.classList.add("checked");
  } else {
    el.classList.remove("checked");
  }
}
function initEventTagsYear(tagsWrapper, swiper) {
  tagsWrapper.querySelectorAll("[data-group]")?.forEach((el) => {
    el.addEventListener("click", (e) => {
      const group = e.target.dataset.group;

      for (let i = 0; i < swiper.slides.length; i++) {
        if (swiper.slides[i].dataset.group === group) {
          swiper.slideTo(i);
          break;
        }
      }
    });
  });
}
