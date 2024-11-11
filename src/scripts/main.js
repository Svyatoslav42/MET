/* eslint-disable max-len */
'use strict';

document.querySelector('.icon--menu').addEventListener('click', function() {
  document.documentElement.style.overflow = 'hidden';
});

document.querySelector('.icon--close').addEventListener('click', function() {
  document.documentElement.style.overflow = '';
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  this.reset();
});
