'use strict';

// Hide/Show Menu in Mobile View

$('header i').on('click', function(){
    $('.menu').toggleClass('hidden');
  });

// $('header i').on('click', function(){
//     $('.menu').toggleClass('hidden');
//   });

  $('header i').on('click', function(){
    $('#mobile-nav').toggleClass('hidden');
  });

