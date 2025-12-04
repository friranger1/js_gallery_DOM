'use strict';

const bigImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

bigImg.src = thumbs.querySelector('a').href;


thumbs.addEventListener('click', (e) => {
  const link = e.target.closest('.gallery__thumb');

  if(!link) {
    return;
  }

  e.preventDefault();
  bigImg.src = link.src;
});
