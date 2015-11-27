$(document).ready(function() {
  
  /* ADD CLASS OF COLLECTION-TYPE-INDEX TO OTHER INDEXES */
  $('.collection-type-index3, .collection-type-index2').addClass('collection-type-index');
  
  /* DO NOT DISPLAY BANNERS ON PARALLAX-ITEMS WITH NO-MAIN-IMAGE */
  $('.collection-type-index3 .title-desc-wrapper.over-image.no-main-image').addClass('display-none');

  /* MAKE SMALL BANNERS ON INDEX3 */
  $('.collection-type-index3 .title-desc-wrapper.over-image.has-main-image').addClass('small-header');
});

$(window).scroll(function() {

    if ($(this).scrollTop()>50) {
        $('h1.site-title').fadeOut();
    } else {
      $('h1.site-title').fadeIn();
    }; 
 });

/*
var myUrl = window.location.pathname; 
var homePage = "/";
$(document).ready(function(){
  if (myUrl == homePage) {
    $(".navbar-button span").css("color", "white");
  }
});
*/



/*NAV HOVER COLORS USING JQUERY (REST WITH CSS IN CUSTOM.LESS)*/
   
$(document).ready(function() {
  $('.nav-doatl-button').hover(function() {
    $(this).addClass('bgblue colorwhite');
    }, function () {
    $(this).removeClass('bgblue colorwhite');
    }
  );
  /*
  $('.nav-login-button').hover(function() {
    $(this).addClass('colorblue');
    }, function () {
    $(this).removeClass('colorblue');
    }
  );
  */
});

/* LOAD VIDEO TO BANNER IMAGE SCRIPT
replace "url" below with new url of an mp4 link you've uploaded to ss, making
sure that there is no 's' in 'https' of your url 
i.e good= http://mywebsite.squarespace.com/s/myvid.mp4/ 
bad = https://mywebsite.squarespace.com/s/myvid.mp4/ 
Note: it's currently muted. You have the option to change that
Note: it currently only plays on the home page. I don't know how to change that. */   

function playvid() {
  $(window).bind("load", function() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  } else {
    var banner = $('#pageWrapper img').first();
    if (banner.length === 0)
      banner = $('.banner-thumbnail-wrapper > #thumbnail > img').first();
    if (banner.length === 0)
      banner = $('#parallax-images img').first();
    if (banner.length === 0)
      banner = $('.has-main-image img').first();
    if (banner.length === 0)
        banner = $('#page-thumb img').first();
    var url = "http://m1tlwebdev.squarespace.com/s/What-is-a-Thought-Lounge.mp4";
    banner.hide();
    $('<video class="bannerVideo" autoplay="" loop="" preload><source src="' + url + '" type="video/mp4"></video>').insertAfter(banner);
    adjustBanner($('.bannerVideo'), banner);
    setTimeout(function() {
      adjustBanner($('.bannerVideo'), banner);
    }, 2000);
    $(window, banner).resize(function() {
      adjustBanner($('.bannerVideo'), banner);
      setTimeout(function() {
        adjustBanner($('.bannerVideo'), banner);
      }, 200);
    });
  }
  function adjustBanner (video, banner) {
    video.css({
      height: banner.css('height'),
      width: banner.css('width'),
      top: banner.css('top'),
      left: banner.css('left'),
      position: 'relative',
      'object-fit': 'inherit'
    });
    /*MUTE BANNER VIDEO*/
    $(".bannerVideo").prop('muted', true);
  }
  });
};


/*SMOOTH SCROLL FUNCTION */
/* $(document).ready(function(){
  $(".smoothscroll").click(function(){
    var x = "#" + $(this).attr("data-urlid");
    $('html, body').animate({
      scrollTop: $('#563f14dae4b093dffbd87e0d').offset().top
    }, 500);
  });
}); 

*/

