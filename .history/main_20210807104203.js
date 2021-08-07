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
gsap.set(".grid__gallery__item", { y: 100 });
ScrollTrigger.batch(".grid__gallery__item", {
	interval: 0.1,
	batchMax: 3,
	onEnter: (batch) =>
		gsap.to(batch, {
			opacity: 1,
			y: 0,
			stagger: { each: 0.15, grid: [1, 3] },
			overwrite: true,
		}),
	onLeave: (batch) => gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
	onEnterBack: (batch) =>
		gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
	onLeaveBack: (batch) =>
		gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
	start: "20px bottom",
	end: "bottom top",
});
ScrollTrigger.addEventListener("refreshInit", () =>
	gsap.set(".grid__gallery__item", { y: 0 })
);
