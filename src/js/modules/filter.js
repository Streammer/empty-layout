export function initFilter() {
  const filter = document.querySelector(".filter");
  const filterBtns = filter?.querySelectorAll(".filter__trigger");
  const filterBlock = filter?.querySelector(".filter__filter");

  filterBtns.forEach((btn) =>
    btn?.addEventListener("click", (event) => {
      event.preventDefault();
      event.target.classList.toggle("opened");
      filterBlock.classList.toggle("opened");
    })
  );
}
