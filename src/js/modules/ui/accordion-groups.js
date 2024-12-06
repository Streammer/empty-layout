export function initAccordionGroups() {
  const accordionGroups = document.querySelectorAll(".ui-accordion-group");

  accordionGroups?.forEach((item) =>
    item?.addEventListener("click", (e) => {
      if (
        !e.target.closest(
          ".ui-accordion-group-item__button, .ui-accordion-group-item-icon__button"
        )
      ) {
        return false;
      }
      const accordionItem = e.target.closest(
        ".ui-accordion-group-item, .ui-accordion-group-item-icon"
      );

      if (!accordionItem) {
        return false;
      }

      accordionItem.classList.toggle("opened");
    })
  );
}
