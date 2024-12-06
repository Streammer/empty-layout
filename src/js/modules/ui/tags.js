export function initFilterTag() {
    const togglesTag = document.querySelectorAll(
        ".ui-tag-trigger:not(.ui-tag-trigger--clear)"
    );
    const clearTag = document.querySelector(".ui-tag-item--clear");
    const activeFilterTag = [];

    togglesTag?.forEach((toggle, index) => {
        toggle.addEventListener("click", () => {
            toggle.classList.toggle("active");

            if (activeFilterTag.includes(index)) {
                activeFilterTag.splice(activeFilterTag.indexOf(index), 1);
            } else {
                activeFilterTag.push(index);
            }

            if (activeFilterTag.length === 0) {
                clearTag?.classList.remove("active");
            } else {
                clearTag?.classList.add("active");
            }
        });
    });

    clearTag?.addEventListener("click", () => {
        activeFilterTag.forEach((index) => {
            togglesTag[index].classList.remove("active");
        });

        activeFilterTag.length = 0;
        clearTag.classList.remove("active");
    });
}