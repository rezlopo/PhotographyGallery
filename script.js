const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
	nav.classList.toggle("nav-active");
	burger.classList.toggle("toggle");
	body.classList.toggle("no-scroll");
});

links.forEach((Element) => {
	Element.addEventListener("click", () => {
		nav.classList.toggle("nav-active");
		burger.classList.toggle("toggle");
		body.classList.toggle("no-scroll");
	});
});
