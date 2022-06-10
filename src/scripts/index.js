AOS.init();

let bg = document.querySelector(".mouse-parallax-bg");
let fog1 = document.querySelector(".mouse-parallax-fog-1");
let fog2 = document.querySelector(".mouse-parallax-fog-2");
let fog3 = document.querySelector(".mouse-parallax-fog-3");
let fog4 = document.querySelector(".mouse-parallax-fog-4");
window.addEventListener("mousemove", function (e) {
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;
	bg.style.transform = "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
	fog1.style.transform = "translate(+" + x * 50 + "px, -" + y * 50 + "px)";
	fog2.style.transform = "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
	fog3.style.transform = "translate(+" + x * 40 + "px, -" + y * 40 + "px)";
	fog4.style.transform = "translate(+" + x * 25 + "px, -" + y * 25 + "px)";
});
