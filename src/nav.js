const btnMenu = document.getElementById('hamburger');
const nav = document.getElementById('nav');

btnMenu.addEventListener('click', () => {
	nav.style.display = 'flex';
});

document.body.addEventListener('click', () => {
	if (screen.width < 750) {
		nav.style.display = 'none';
	}
}, true); 