
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	const openMenu = document.getElementById('menu_open');
  const spMenu = document.getElementById('r_box');

	openMenu.addEventListener('click', function () {
		openMenu.classList.toggle('active');
		spMenu.classList.toggle('active');
	});
}


$(function () {

	$(window).on('load scroll', function () {

    $(".top01 .logo h2, .fadein").each(function () {
      let ePos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > ePos - windowHeight + windowHeight / 5) {
        $(this).addClass('active');
      }
    });

    if ($(this).scrollTop() > 500) {
      $('#page_top').fadeIn(300);
    } else {
      $('#page_top').fadeOut(300);
    }

  });

  $('#page_top').on('click', function () {

    $('body, html').animate({ scrollTop: 0 }, 500);

    return false;
  });

  $('#concept_btn, #access_btn').on('click', function () {
    
    $('#r_box').removeClass('active');

  });

  var headerHeight = $('header').outerHeight();
  var urlHash = location.hash;
  if(urlHash) {
      $('body,html').stop().scrollTop(0);
      setTimeout(function(){
          var target = $(urlHash);
          var position = target.offset().top - headerHeight;
          $('body,html').stop().animate({scrollTop:position}, 500);
      }, 100);
  }
  $('a[href^="#"]').click(function() {
      var href= $(this).attr("href");
      var target = $(href);
      var position = target.offset().top - headerHeight;
      $('body,html').stop().animate({scrollTop:position}, 500);   
  });


	// 一番最後に記述
	$("body").removeClass("preload");

});