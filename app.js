$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 200) {
          $('body').addClass('changeColor')
       } else {
          $('body').removeClass('changeColor')
       }
    });
 });