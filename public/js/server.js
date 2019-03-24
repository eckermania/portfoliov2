'use strict';

// Hide/Show Menu in Mobile View

$(document).ready(function() {
  $('.hamburger').on('click', function(){
    $('.hamburger').toggleClass('is-active');
  });

  $('.hamburger').on('click', function(){
    $('#mobile-nav').slidedown();
  });
});
