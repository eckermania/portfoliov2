'use strict';

// Hide/Show Menu in mobile view

$(document).ready(function() {

  // Hide/Show Menu in mobile view
  $('.hamburger').on('click', function(){
    $('.hamburger').toggleClass('is-active');
  });

  $('.hamburger').on('click', function(){
    $('#mobile-nav').slideToggle();
  });

});


