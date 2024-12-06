function progressScroll() {
	const progressBar = document.querySelector('.progress-scroll');
	const progressBarHeight = progressBar.offsetHeight;

	const updateProgress = () => {
		const OFFSET_WIDTH = 10;
		const scroll = window.scrollY + progressBarHeight;
		const height = document.body.scrollHeight - window.innerHeight + progressBarHeight;
		const scrolled = (scroll / height) * (100 - OFFSET_WIDTH) + OFFSET_WIDTH;
		progressBar.style.setProperty('--scroll-width', `${scrolled}%`);
	}
	updateProgress();

	window.addEventListener('scroll', updateProgress);
	window.addEventListener('resize', updateProgress);
}

export default progressScroll;