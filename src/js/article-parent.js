import { initFilter } from "./modules/filter";
import { initFilterTag } from "./modules/ui/tags";

document.addEventListener('DOMContentLoaded', () => {
    initFilterTag();
    initFilter()
});
