const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");

let num = 0;

const hide = () => {
	$('.hide-show').fadeOut(500);
}

const changeSlide = () => {
	num++;
	if (num > 2) num = 0;
	if (num == 0) {
		n1.style.display = "flex";
		n2.style.display = "none";
		n3.style.display = "none";
	} else if (num == 1) {
		n1.style.display = "none";
		n2.style.display = "flex";
		n3.style.display = "none";
	} else {
		n1.style.display = "none";
		n2.style.display = "none";
		n3.style.display = "flex";
	}
	$('.hide-show').fadeIn(500);
	setTimeout(() => {
		changeSlide();
	}, 3000);
	setTimeout(() => {
		hide();
	}, 2500);
};

window.onload = () => {
	changeSlide();
};
