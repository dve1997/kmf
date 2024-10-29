const switchingcardsInSliderBusiness = (firstSlide, lastSlide) => {
  const cards = document.querySelector('.kmf__card-business');
  const arrowLeftBtn = document.querySelector('.kmf__arrow-left-bus');
  const arrowRightBtn = document.querySelector('.kmf__arrow-right-bus');
  const dotes = document.querySelectorAll('.kmf__dot-bus');

  let count = 0;

  const downSlide = (firstSlide, lastSlide) => {
    dotes.forEach(dot => dot.classList.remove('kmf__dot-bus-active'));

    if (count > firstSlide && count <= lastSlide) {
      count--;
      dotes[count].classList.add('kmf__dot-bus-active');
    } else {
      count = lastSlide;
      dotes[count].classList.add('kmf__dot-bus-active');
    }

    cards.style.cssText = `transform: translateX(-${count * 23.43}rem);
      transition: transform 1s ease 0s`;
  };

  const upSlide = (firstSlide, lastSlide) => {
    dotes.forEach(dot => dot.classList.remove('kmf__dot-bus-active'));

    if (count >= firstSlide && count < lastSlide) {
      count++;
      dotes[count].classList.add('kmf__dot-bus-active');
    } else {
      count = firstSlide;
      dotes[count].classList.add('kmf__dot-bus-active');
    }

    cards.style.cssText = `transform: translateX(-${count * 23.43}rem);
      transition: transform 1s ease 0s`;
  };

  arrowLeftBtn.addEventListener('click', e => {
    downSlide(firstSlide, lastSlide);
  });
  arrowRightBtn.addEventListener('click', e => {
    upSlide(firstSlide, lastSlide);
  });
};

export default switchingcardsInSliderBusiness;
