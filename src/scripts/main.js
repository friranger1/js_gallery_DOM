'use strict';

const bigImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');
bigImg.src = thumbs.children[0].children[0].attributes[0].nodeValue;

thumbs.addEventListener('click',(e) => {
  const link = e.target.closest('.gallery__img');

  e.preventDefault();
  bigImg.src = link.src;
});
