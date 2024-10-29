import '@babel/polyfill';
import '../index.html';
import '../style/index.scss';

import switchingLang from './services/switchingLang';
import showListLinks from './modules/showListLinks';
import showNavbar from './modules/showNavbar';
import switchingSlidesInSliderBanner from './modules/switchingSlidesInSliderBanner';
import switchingSlidesInSliderBusiness from './modules/switchingSlidesInSliderBusiness';

document.addEventListener('DOMContentLoaded', () => {
  // Toggle navigation links function on PC
  showListLinks();
  // Toggle function of the navigation bar with a list of links on a mobile device
  showNavbar();
  // Function of switching slides banner forward, backward, automatic switching at a specified time interval
  switchingSlidesInSliderBanner(0, 3);
  // Function of switching slides business forward, backward
  switchingSlidesInSliderBusiness(0, 3);
  // Language switching function
  switchingLang();
});
