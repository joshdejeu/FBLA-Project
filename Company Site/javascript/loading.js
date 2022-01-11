/*jquery to fade out loading screen and fade in page */
$(window).on('load',function(){
  $(".loading").fadeOut(1000);
  $(".content").fadeIn(1000);
});
