'use strict';

// Hide/Show Menu in Mobile View

$(document).ready(function() {
    $('header i').on('click', function(){
        $('.menu').toggleClass('hidden');
      });
    
    $('header i').on('click', function(){
        $('#mobile-nav').toggleClass('hidden');
        });
  });



