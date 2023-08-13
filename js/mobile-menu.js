(() => {
	const mobileMenu = document.querySelector('.js-menu-container');
	const openMenuBtn = document.querySelector('.js-open-menu');
	const closeMenuBtn = document.querySelector('.js-close-menu');
  
	const toggleMenu = () => {
	  const isMenuOpen =
		openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
	  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
	  mobileMenu.classList.toggle('is-open');
  
	  const scrollLockMethod = !isMenuOpen
		? 'disableBodyScroll'
		: 'enableBodyScroll';
	  bodyScrollLock[scrollLockMethod](document.body);
	};
  
	openMenuBtn.addEventListener('click', toggleMenu);
	closeMenuBtn.addEventListener('click', toggleMenu);
  
	// Close the mobile menu on wider screens if the device orientation changes
	window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
	  if (!e.matches) return;
	  mobileMenu.classList.remove('is-open');
	  openMenuBtn.setAttribute('aria-expanded', false);
		bodyScrollLock.enableBodyScroll(document.body);
		
	});
  })();
  
  (() => {
	const mobileMenu = document.querySelector('.js-menu-container');
	const openMenuBtn = document.querySelector('.js-open-menu_02');
	const closeMenuBtn = document.querySelector('.js-close-menu');
  
	const toggleMenu = () => {
	  const isMenuOpen =
		openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
	  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
	  mobileMenu.classList.toggle('is-open');
  
	  const scrollLockMethod = !isMenuOpen
		? 'disableBodyScroll'
		: 'enableBodyScroll';
	  bodyScrollLock[scrollLockMethod](document.body);
	};
  
	openMenuBtn.addEventListener('click', toggleMenu);
	closeMenuBtn.addEventListener('click', toggleMenu);
  
	// Close the mobile menu on wider screens if the device orientation changes
	window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
	  if (!e.matches) return;
	  mobileMenu.classList.remove('is-open');
	  openMenuBtn.setAttribute('aria-expanded', false);
	  bodyScrollLock.enableBodyScroll(document.body);
	});
  })();
  
    (() => {
	const mobileMenu = document.querySelector('.js-menu-container');
	const openMenuBtn = document.querySelector('.js-open-menu_03');
	const closeMenuBtn = document.querySelector('.js-close-menu');
  
	const toggleMenu = () => {
	  const isMenuOpen =
		openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
	  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
	  mobileMenu.classList.toggle('is-open');
  
	  const scrollLockMethod = !isMenuOpen
		? 'disableBodyScroll'
		: 'enableBodyScroll';
	  bodyScrollLock[scrollLockMethod](document.body);
	};
  
	openMenuBtn.addEventListener('click', toggleMenu);
	closeMenuBtn.addEventListener('click', toggleMenu);
  
	// Close the mobile menu on wider screens if the device orientation changes
	window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
	  if (!e.matches) return;
	  mobileMenu.classList.remove('is-open');
	  openMenuBtn.setAttribute('aria-expanded', false);
	  bodyScrollLock.enableBodyScroll(document.body);
	});
})();
  
    (() => {
	const mobileMenu = document.querySelector('.js-menu-container');
	const openMenuBtn = document.querySelector('main');
	const closeMenuBtn = document.querySelector('.js-close-menu');
  
	const toggleMenu = () => {
	  const isMenuOpen =
		openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
	  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
	  mobileMenu.classList.toggle('is-open');
  
	  const scrollLockMethod = !isMenuOpen
		? 'disableBodyScroll'
		: 'enableBodyScroll';
	  bodyScrollLock[scrollLockMethod](document.body);
	};
  
	openMenuBtn.addEventListener('click', toggleMenu);
	closeMenuBtn.addEventListener('click', toggleMenu);
  
	// Close the mobile menu on wider screens if the device orientation changes
	window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
	  if (!e.matches) return;
	  mobileMenu.classList.remove('is-open');
	  openMenuBtn.setAttribute('aria-expanded', false);
	  bodyScrollLock.enableBodyScroll(document.body);
	});
  })();
  
// const div = document.querySelector( '#popup');
 
// document.addEventListener( 'click', (e) => {
// 	const withinBoundaries = e.composedPath().includes(div);
 
// 	if ( ! withinBoundaries ) {
// 		div.style.display = 'none'; // скрываем элемент т к клик был за его пределами
// 	}
// })


// $(".header__nav, .footer__nav").on("click","a", function (event) {
//     event.preventDefault();
//     $('.header__burger').removeClass('active');
//     $('.header').removeClass('active-menu');
//     $('.header__nav').removeClass('active');
//     var id  = $(this).attr('href'),
//         top = $(id).offset().top;
//     $('body,html').animate({scrollTop: top - 100}, 1000);
// });