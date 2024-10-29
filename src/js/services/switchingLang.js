import { langArr } from './lang';

const switchingLang = () => {
  const allLang = ['rus', 'kaz'];

  const lang = document.querySelector('#lang');

  lang.addEventListener('change', () => {
    let lng = lang.value;
    location.href = window.location.pathname + `#${lng}`;
    location.reload();
  });

  const changeLang = () => {
    let hash = window.location.hash;
    hash = hash.slice(1);
    if (!allLang.includes(hash)) {
      location.href = window.location.pathname + '#rus';
      location.reload();
    }
    lang.value = hash;

    for (let key in langArr) {
      let elem = document.querySelector(`.lang-${key}`);
      if (elem && key) {
        elem.innerHTML = langArr[key][hash];
      }
    }
  };
  changeLang();
};

export default switchingLang;
