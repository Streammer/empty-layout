import progressScroll from "./modules/progress-scroll.js";
import footer from "./modules/footer.js";
import { initSearch, stickyHeader } from "./modules/header.js";
import { initMobileMenu } from "./modules/mobile-menu.js";

document.addEventListener("DOMContentLoaded", () => {
  progressScroll();
  footer();
  stickyHeader();
  initSearch();
  initMobileMenu();
});
