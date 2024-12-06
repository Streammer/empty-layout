import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";

function renderPagination(index, className) {
  return `<button class="ui-slider-controls__control-page ${className}">
    <span class="visually-hidden">${index + 1}</span></button>`;
}

export function initSliders() {
  const mainSliders = new Swiper(
    ".main-sliders__swiper, .product-slider__swiper",
    {
      spaceBetween: 500,
      slidesPerView: 1,
      modules: [Autoplay, Navigation, Pagination],
      autoHeight: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
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
    }
  );

  const ourProductsSlider = new Swiper(".main-our-products__swiper", {
    spaceBetween: "16px",
    slidesPerView: 5,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 3,
      },
      1023: {
        slidesPerView: 4,
      },
    },
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: ".ui-slider-controls__control-next",
      prevEl: ".ui-slider-controls__control-prev",
    },
    pagination: {
      el: ".ui-slider-controls__control-pages",
      clickable: true,
      renderBullet: renderPagination,
      bulletActiveClass: "active",
    },
  });
}
