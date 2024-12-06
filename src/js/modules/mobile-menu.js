export function initMobileMenu() {
    const headerMobile = document.querySelector('#header-mobile');
    const mobileMenuBtn = headerMobile.querySelector('#mobile-menu-btn');
    const mobileMenu = document.querySelector('.header-mobile-menu');
    const navigation = document.querySelector('.header-mobile-menu__navigation');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('opened');
        mobileMenu.classList.toggle('opened');
        document.body.classList.toggle('no-scroll');
    });

    navigation.addEventListener('click', (event) => {
        if (!event.target.closest('.navigation-item')) {
            return false;
        }

        const containerItem = event.target.closest('li');

        if (containerItem) {
            containerItem.classList.toggle('opened');
        }
    });
}