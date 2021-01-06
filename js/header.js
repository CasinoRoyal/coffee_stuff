const headerTop = document.querySelector('.header-top');
const header = document.querySelector('.header');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.intersectionRatio === 0) {
        header.classList.add('header--sticky');
      } 

      if (entry.intersectionRatio === 1) {
        header.classList.remove('header--sticky');
      }
   });
}, { rootMargin: '40px 0px 0px 0px', threshold: [0, 1] });


observer.observe(headerTop);