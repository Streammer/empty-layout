export function stickyHeader() {
  const headerEl = document.querySelector("#header");
  const headerSticky = headerEl.querySelector(".header__sticky");
  const headerStickyPosition =
    headerEl.offsetHeight - headerSticky.offsetHeight - 20;

  const scrollPosition = () => window.scrollY;

  const handleScroll = () => {
    if (window.outerWidth < 768) {
      return;
    }

    if (scrollPosition() > headerStickyPosition) {
      headerSticky.classList.add("sticky");
      headerEl.classList.add("sticky");
    } else {
      headerSticky.classList.remove("sticky");
      headerEl.classList.remove("sticky");
    }
  };

  window.addEventListener("scroll", handleScroll);
}

export function initSearch() {
  const btnSearch = document.querySelector(".header-search__icon--search");
  const btnClose = document.querySelector(".header-search__icon--close");

  btnSearch?.addEventListener("click", () => {
    btnSearch.closest(".header-search")?.classList.add("show");
  });

  btnClose?.addEventListener("click", () => {
    btnClose.closest(".header-search")?.classList.remove("show");
  });

  if (window.outerWidth < 768) {
    const mobileBtnSearch = document.querySelector(
      ".header-profile__auth-icon--mobile"
    );
    const mobileBtnClose = document.querySelector(
      ".header-search--mobile .header-search__icon--close"
    );

    mobileBtnSearch?.addEventListener("click", () => {
      document.querySelector(".header-search--mobile")?.classList.add("show");
    });

    mobileBtnClose?.addEventListener("click", () => {
      mobileBtnClose.closest(".header-search--mobile")?.classList.remove("show");
    });
  }
}
