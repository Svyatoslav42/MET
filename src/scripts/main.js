/* eslint-disable max-len */
'use strict';

document.querySelector('.icon--menu').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('menu').style.display = 'block';
  document.documentElement.style.overflow = 'hidden';
});

document.querySelector('.icon--close').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('menu').style.display = 'none';
  document.documentElement.style.overflow = '';
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  this.reset();
});
