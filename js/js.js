document.addEventListener("DOMContentLoaded", function () {

	'use strict';



	Splitting();
	luxy.init();
	gsap.registerPlugin(ScrollTrigger);

	const gTl = gsap.timeline();
	gTl.from(".title .char", 1, { opacity: 0, yPercent: 130, stagger: 0.06, ease: "back.out" });
	gTl.to(".header__img", 2, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", scale: 1, ease: "expo.out" }, "-=1");
	gTl.from(".header__marq", 2, { opacity: 0, yPercent: 100, ease: "expo.out" }, "-=1.5");

	const gsapSq = gsap.utils.toArray('.section-title__square');
	gsapSq.forEach((gSq, i) => {
		const rotat = gsap.from(gSq, 3, { rotation: 720 });
		ScrollTrigger.create({
			trigger: gSq,
			animation: rotat,
			start: 'top bottom',
			scrub: 1.9
		});
	});


	ScrollTrigger.create({
		trigger: ".container",
		start: "top top",
		end: "bottom top",
		pin: true,
		pinSpacing: false,
		scrub: true,
	  });

	
	const tl = gsap.timeline({
		delay: 1.75
	});
	const movements = [-100, 300, 150, -300, -90, 100, -200];
	
	gsap.set("h1", { y: 100 });
	gsap.set(".counter p", { y: 35 });
	
	
	tl.to("h1", {
		y: 0,
		duration: 1,
		ease: "power3.out",
		stagger: 0.1,
	});

	tl.to(
		".counter p",
		{
			y: 0,
			duration: 0.5,
			ease: "power3.out",
		},
		"-=0.5"
	);

	tl.to(
		".counter p",
		{
			y: -35,
			duration: 0.5,
			ease: "power3.out",
			delay: 0.5,
		});
	tl.to(
		".counter p",
		{
			y: -70,
			duration: 0.5,
			ease: "power3.out",
			delay: 0.5,

		});
	tl.to(
		".counter p",
		{
			y: -105,
			duration: 0.5,
			ease: "power3.out",
			delay: 0.75,

		});

	tl.from(".tagline", {
		y: 40,
		opacity: 0,
	}, "-=4");

	tl.to("h1", {
	   
		fontSize: "15vw",
		duration: 1,
		ease: "power3.out",
	});

	tl.to(".headers-item", {
		clipPath: "none",
		duration: 0.1,

	}, "<");

	tl.to(".block", {
		clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
		duration: 0.5,
		stagger: {
			amount: 0.5,
			from: "random",
			ease: "power3.out",
		}
	}, "<"
	)

	movements.forEach((move, index) => {
		tl.to(
			`.h-${index + 1}`,
			{
				y: move,
				duration: 1,
				ease: "power3.out",
			},
			"<"
		)
	})

	tl.from(".logo, .link, footer p", {
		y: 40,
		opacity: 0,
		stagger: 0.2,
	})

	//header
	function header() {
		gsap.to('.title_paralax', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			yPercent: -150
		})
		gsap.to('.header .stroke', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			xPercent: 50
		})
		gsap.to('.header__img', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			xPercent: -70
		})
		gsap.to('.header__img img', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			scale: 1.3
		})
		gsap.to('.header__marq-wrapp', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			xPercent: -50
		})
		gsap.to('.header__marq-star img', {
			scrollTrigger: {
				trigger: '.header',
				start: 'top top',
				scrub: 1.9
			},
			rotate: -720
		})
	}
	header();


	//about
	function about() {
		gsap.from('.about__img', {
			scrollTrigger: {
				trigger: '.about',
				start: 'top bottom',
				scrub: 1.9
			},
			yPercent: 80
		})
		gsap.from('.about__img img', {
			scrollTrigger: {
				trigger: '.about',
				start: 'top bottom',
				scrub: 1.9
			},
			scale: 1.6
		})
		gsap.to('.about__txt', {
			scrollTrigger: {
				trigger: '.about__wrapp',
				start: 'top bottom',
				scrub: 1.9
			},
			yPercent: 50
		})
	}
	about();


	//benefits
	function benefits() {
		gsap.from('.benefits__num', {
			x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
			scrollTrigger: {
				trigger: '.benefits__list',
				start: 'top bottom',
				scrub: 1.9
			}
		})
	}
	benefits();


	//portfolio
	function portfolio() {
		gsap.from('.work__item, .work__item-num', {
			y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
			scrollTrigger: {
				trigger: '.work',
				start: 'top bottom',
				scrub: 1.9
			}
		})
		gsap.from('.work__item-img img', {
			scale: 1.6,
			scrollTrigger: {
				trigger: '.work__wrapp',
				start: 'top bottom',
				scrub: 1.9
			}
		})
	}
	portfolio();


	//serv
	function serv() {
		gsap.from('.serv__item-arrow', {
			x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
			scrollTrigger: {
				trigger: '.serv__list',
				start: 'top bottom',
				scrub: 1.9
			}
		})
	}
	serv();


	//footer
	function footer() {
		gsap.from('.footer__div span', {
			y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
			opacity: 0,
			scrollTrigger: {
				trigger: '.footer',
				start: 'top bottom',
				end: 'bottom bottom',
				scrub: 1.9
			}
		})
	}
	footer();
});

var menuToggle = document.getElementById("menuToggle");

var menuBar = gsap.timeline();

menuBar.to('.bar-1', 0.5,{
	attr:{d: "M8,2 L2,8"},
	x:1,
	ease: Power2.easeInOut
}, 'start')

menuBar.to('.bar-2', 0.5,{
	autoAlpha: 0
}, 'start')

menuBar.to('.bar-3', 0.5,{
	attr:{d: "M8,8 L2,2"},
	x:1,
	ease: Power2.easeInOut
}, 'start')

menuBar.reverse();


var tl = gsap.timeline({ paused: true});

tl.to('.fullpage-menu', {
	duration:0,
	display: "block",
	ease: 'Expo.easeInOut',
});

tl.from('.menu-bg span', {
	duration:1,
	x:"100%",
	stagger: 0.1,
	ease: 'Expo.easeInOut'
});

tl.from('.main-menu li a', {
	duration:1.5,
	y:"100%",
	stagger: 0.2,
	ease: 'Expo.easeInOut'
} , "-=0.5");

tl.from('.social-links li', {
	duration:1,
	y:"-100%",
	opacity:0,
	stagger: 0.1,
	ease: 'Expo.easeInOut'
} , "-=0.5");

tl.reverse();

menuToggle.addEventListener('click', function(){
	menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
});

