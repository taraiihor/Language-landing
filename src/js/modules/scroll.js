//smooth scroll по меню
const hederSectiot = document.querySelector('.header');
const anchors = document.querySelectorAll('header a[href*="#"]');

const buttonBurger = document.querySelector('.menu__burger');
const menuNav = document.querySelector('.menu__list');

//відкриває закриває бургер меню
buttonBurger.addEventListener('click', isOpen);

function isOpen(e) {
  e.preventDefault();
  document.body.classList.toggle('lock');
  menuNav.classList.toggle('open');
}

//плавний скрол по меню
anchors.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    let href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = document.querySelector('.header').offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    //провірка чи відкритий попап якщо так то закривається
    if (menuNav.classList.contains('open')) {
      document.body.classList.remove('lock');
      menuNav.classList.remove('open');
    }

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});

//додаэться backgroundColor на header
function addStyleMenu(screenSize) {
  if (screenSize.matches) {
    addBackgroundColor(120);
  } else {
    addBackgroundColor(70);
  }
}
function addBackgroundColor(value) {
  window.addEventListener('scroll', function () {
    if (pageYOffset >= value) {
      hederSectiot.classList.add('header__activ');
    } else {
      hederSectiot.classList.remove('header__activ');
    }
  });
}

//Контролює розмір екрану
const screenSize = window.matchMedia('(max-width: 767px)');
addStyleMenu(screenSize);
screenSize.addListener(addStyleMenu);
