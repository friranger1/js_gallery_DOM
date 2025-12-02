'use strict';

const bigImg = document.getElementById('largeImg');
const links = [...document.querySelectorAll('.list-item__link')];

for (const link of links) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    bigImg.src = link.href;
  });
}
