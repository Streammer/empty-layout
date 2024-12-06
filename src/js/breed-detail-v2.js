import { initEventsLikeDislikeButton } from "./modules/like-dislike";
import { initAccordionGroups } from "./modules/ui/accordion-groups";
import { Tabs } from "./modules/ui/tabs";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".ui-tabs").forEach((tab) => {
    new Tabs({ rootNode: tab });
  });
  initEventsLikeDislikeButton();

  //acordions
  initAccordionGroups();
  if (window.outerWidth < 1024) {
    const breedPayAttention = document.querySelector("#pay-attention");

    breedPayAttention
      ?.querySelectorAll(".breed-detail__three-columns__header")
      .forEach((header) => {
        header.addEventListener("click", (e) => {
          e.currentTarget
            .closest(".breed-detail__three-columns__item")
            ?.classList.toggle("opened");
        });
      });
  }

  const accordionsIcons = document.querySelectorAll(
    ".ui-accordion-item-icon__button"
  );
  accordionsIcons?.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.currentTarget.closest(".ui-accordion-item-icon")?.classList.toggle("opened");
    });
  });
});
