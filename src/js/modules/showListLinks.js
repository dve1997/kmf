const showListLinks = () => {
  const navBtns = document.querySelectorAll('.header__btn');
  const listLinks = document.querySelectorAll('.header__list-links');

  navBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      const dataBtn = e.target.getAttribute('data-btn');
      const listLinksWithDataBtn = document.querySelector(
        `.header__list-links_${dataBtn}`,
      );

      if (
        listLinksWithDataBtn.classList.contains('header__list-links-active')
      ) {
        listLinks.forEach(link =>
          link.classList.remove('header__list-links-active'),
        );
      } else {
        listLinks.forEach(link =>
          link.classList.remove('header__list-links-active'),
        );
        listLinksWithDataBtn.classList.add('header__list-links-active');
      }
    });
  });
};

export default showListLinks;
