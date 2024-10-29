const switchingSlidesInSliderBanner = (firstSlide, lastSlide) => {
  const slides = document.querySelector('.banner__slides');
  const arrowLeftBtn = document.querySelector('.banner__arrow-left');
  const arrowRightBtn = document.querySelector('.banner__arrow-right');
  const dotes = document.querySelectorAll('.banner__dot');

  let count = 0;

  const downSlide = (firstSlide, lastSlide) => {
    let widthWindow = window.innerWidth;

    dotes.forEach(dot => dot.classList.remove('banner__dot-active'));

    if (count > firstSlide && count <= lastSlide) {
      count--;
      dotes[count].classList.add('banner__dot-active');
    } else {
      count = lastSlide;
      dotes[count].classList.add('banner__dot-active');
    }

    if (widthWindow > 327) {
      slides.style.cssText = `transform: translateX(-${count * 53}rem);
      transition: transform 1s ease 0s`;
    } else {
      slides.style.cssText = `transform: translateX(-${count * 20.5}rem);
      transition: transform 1s ease 0s`;
    }
  };

  const upSlide = (firstSlide, lastSlide) => {
    let widthWindow = window.innerWidth;

    dotes.forEach(dot => dot.classList.remove('banner__dot-active'));

    if (count >= firstSlide && count < lastSlide) {
      count++;
      dotes[count].classList.add('banner__dot-active');
    } else {
      count = firstSlide;
      dotes[count].classList.add('banner__dot-active');
    }

    if (widthWindow > 327) {
      slides.style.cssText = `transform: translateX(-${count * 53}rem);
      transition: transform 1s ease 0s`;
    } else {
      slides.style.cssText = `transform: translateX(-${count * 20.5}rem);
      transition: transform 1s ease 0s`;
    }
  };

  arrowLeftBtn.addEventListener('click', e => {
    downSlide(firstSlide, lastSlide);
  });
  arrowRightBtn.addEventListener('click', e => {
    upSlide(firstSlide, lastSlide);
  });

  const autoSwitchingSlide = setInterval(
    () => upSlide(firstSlide, lastSlide),
    3000,
  );
  document.addEventListener('unload', () => {
    clearInterval(autoSwitchingSlide);
  });
};

export default switchingSlidesInSliderBanner;
