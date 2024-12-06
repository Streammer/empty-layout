export function toggleMainCatDog() {
    const container = document.querySelector('.main-our-products__container');
    const toggles = container.querySelectorAll('.main-our-products__header-control');
    let preventToggle = [].find.call(toggles, (item) => item.classList.contains('active'));

    toggles.forEach(item => {
        item.addEventListener('click', (event) => {
            if (preventToggle) {
                preventToggle.classList.remove('active');
                container.classList.remove(preventToggle.dataset.type);
            }
            
            item.classList.add('active');
            container.classList.add(item.dataset.type);
            
            preventToggle = item;
        })
    })

}