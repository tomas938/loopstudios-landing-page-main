const hamburger = document.querySelector(".navigation__hamburger");
const mobileMenu = document.querySelector(".navigation__mobile");
const body = document.querySelector("body");
const ham = document.querySelector("#hamburger-12");
ham.addEventListener("click", () => {
	ham.classList.toggle("is-active");
});
hamburger.addEventListener("click", () => {
	if (mobileMenu.classList.contains("open")) {
		body.classList.remove("enable");
		mobileMenu.classList.remove("open");
		mobileMenu.classList.add("close");
	} else {
		mobileMenu.classList.add("open");
		body.classList.add("enable");
		mobileMenu.classList.remove("close");
	}
});
window.addEventListener("resize", () => {
	const width = window.innerWidth;
	if (width > 780 && mobileMenu.classList.contains("open")) {
		mobileMenu.classList.remove("open");
		mobileMenu.classList.add("close");
		body.classList.remove("enable");
	}
});
///////////////////////GSAP/////////////////////////
gsap.registerPlugin(ScrollTrigger);
gsap.to(".grid__gallery__item-1", {
	scrollTrigger: {
		trigger: ".grid__gallery__item-1",
		start: "0% 80%",
		end: () => "+=" + document.querySelector(".skill").offsetWidth,
		end: "50% 80%",
		scrub: 3,

		toggleActions: "restart pause reverse pause",
	},
	opacity: 1,
	x: 0,
	rotation: 360,
	duration: 1,
});
gsap.to(".grid__gallery__item-4", {
	scrollTrigger: {
		trigger: ".grid__gallery__item-4",
		start: "0% 80%",
		// end: () => "+=" + document.querySelector(".skill").offsetWidth,
		end: "50% 80%",
		scrub: 3,

		toggleActions: "restart pause reverse pause",
	},
	opacity: 1,
	x: 0,
	rotation: 360,
	duration: 1,
});
gsap.to(".grid__gallery__item-2", {
	scrollTrigger: {
		trigger: ".grid__gallery__item-2",
		start: "-33% 80%",
		// end: () => "+=" + document.querySelector(".skill").offsetWidth,
		end: "50% 80%",
		scrub: 3,
		toggleActions: "restart pause reverse pause",
	},
	opacity: 1,
	y: 0,
	// rotation: 360,
	duration: 1,
});
gsap.to(".grid__gallery__item-3", {
	scrollTrigger: {
		trigger: ".grid__gallery__item-3",
		start: "-33% 80%",
		// end: () => "+=" + document.querySelector(".skill").offsetWidth,
		end: "50% 80%",
		scrub: 3,
		toggleActions: "restart pause reverse pause",
	},
	opacity: 1,
	y: 0,
	// rotation: 360,
	duration: 1,
});
gsap.to(".grid__gallery__item-5", {
	scrollTrigger: {
		trigger: ".grid__gallery__item-5",
		start: "-33% 80%",
		// end: () => "+=" + document.querySelector(".skill").offsetWidth,
		end: "50% 80%",
		scrub: 3,
		toggleActions: "restart pause reverse pause",
	},
	opacity: 1,
	y: 0,
	// rotation: 360,
	duration: 1,
});
gsap.to(".grid__gallery__item-6", {
	scrollTrigger: {
		trigger: ".grid__gallery__item-6",
		start: "-33% 80%",
		// end: () => "+=" + document.querySelector(".skill").offsetWidth,
		end: "50% 80%",
		scrub: 3,
		toggleActions: "restart pause reverse pause",
	},
	opacity: 1,
	y: 0,
	// rotation: 360,
	duration: 1,
});
gsap.to(".grid__gallery__item-7", {
	scrollTrigger: {
		trigger: ".grid__gallery__item-7",
		start: "-33% 80%",

		end: "50% 80%",
		scrub: 3,
		toggleActions: "restart pause reverse pause",
	},
	opacity: 1,
	y: 0,
	// rotation: 360,
	duration: 1,
});
gsap.to(".grid__gallery__item-8", {
	scrollTrigger: {
		trigger: ".grid__gallery__item-8",
		start: "-33% 80%",

		end: "50% 80%",
		scrub: 3,
		toggleActions: "restart pause reverse pause",
	},
	opacity: 1,
	y: 0,
	// rotation: 360,
	duration: 1,
});
// gsap.to(".skill2", {
// 	scrollTrigger: {
// 		trigger: ".skill2",
// 		start: "20% 80%",
// 		// end: () => "+=" + document.querySelector(".skill").offsetWidth,
// 		end: "200% 80%",
// 		scrub: 1,
// 		markers: true,
// 		toggleActions: "restart pause reverse pause",
// 	},
// 	opacity: 1,
// 	x: -300,
// 	rotation: 360,
// 	duration: 3,
// });
