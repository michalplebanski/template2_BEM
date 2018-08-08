// NAVIGATION - HIDE/SHOW HAMBURGER
const btnMenu = document.getElementById("hamburger");
const nav = document.getElementById("nav");

btnMenu.addEventListener("click", () => {
	nav.style.display = "flex";
});

document.body.addEventListener(
	"click",
	() => {
		if (screen.width < 750) {
			nav.style.display = "none";
		}
	},
	true
);
// ----

//SCROLL SMOOTH
$('a[href^="#"]').on("click", function(event) {
	const target = $($(this).attr("href"));
	if (target.length) {
		event.preventDefault();
		$("html, body").animate(
			{
				scrollTop: target.offset().top
			},
			1000
		);
	}
});
// ----

//REDIRECT

const btnServices = $(".services-btn"),
	fb = $(".fb"),
	twitter = $('.twitter'),
	linkedin = $('.linkedin'),
	btnContact = $('.contact__input--btn'),
	btnFooter = $('.footer__subscribe--btn');

btnServices.click(function() {
	window.open("https://www.google.com/");
});

fb.click(function() {
	window.open("https://www.facebook.com/");
});

twitter.click(function() {
	window.open('https://www.twitter.com/');
});

linkedin.click(function() {
	window.open('https://www.linkedin.com/');
});

btnContact.click(function() {
	window.open('https://www.google.com/');
});

btnFooter.click(function() {
	window.open('https://www.google.com/');
});