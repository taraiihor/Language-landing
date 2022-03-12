//smooth scroll по меню
const hederSectiot = document.querySelector('.header');
const anchors = document.querySelectorAll('header a[href*="#"]');

const buttonBurger = document.querySelector('.menu__burger');
const popap = document.querySelector('.popap');
const menu = document.querySelector('nav').cloneNode(1);

//відкриває закриває бургер меню
buttonBurger.addEventListener('click', openBurger);

function openBurger(e) {
  e.preventDefault();
  document.body.classList.toggle('lock');
  popap.classList.toggle('open');
  menu.classList.toggle('open');
  renderMenu();
}

function renderMenu() {
  popap.appendChild(menu);
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
    if (popap.classList.contains('open')) {
      document.body.classList.remove('lock');
      popap.classList.remove('open');
      menu.classList.remove('open');
      renderMenu();
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
