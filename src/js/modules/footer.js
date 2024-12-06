function footer() {
    const btnsToggleGroup = document.querySelectorAll('.footer-group__toggle');

    btnsToggleGroup.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const group = btn.closest('.footer-group');
            e.currentTarget.classList.toggle('active');
            const groupContent = group.querySelector('.footer-group__items');

            groupContent.classList.toggle('active');
        })
    })
}
export default footer;