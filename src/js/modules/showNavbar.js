const showNavbar = () => {
  const header = document.querySelector('.kmf__header');
  const menuBtn = document.querySelector('.header__menu');
  const crossBtn = document.querySelector('.header__cross');
  const nav = document.querySelector('.header__nav');
  const award = document.querySelector('.header__award');

  header.addEventListener('click', e => {
    if (
      e.target.closest('.header__menu') ||
      e.target.closest('.header__cross')
    ) {
      menuBtn.classList.toggle('header__menu-active');
      crossBtn.classList.toggle('header__cross-active');
      nav.classList.toggle('header__nav-active');
      award.classList.toggle('header__award-active');
    }
  });
};

export default showNavbar;
