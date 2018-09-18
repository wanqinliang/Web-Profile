$(function () {
  new WOW().init();
});    


//add smooth scroll in the link of the meau bar
$(function () {
  $("a.smooth-scroll").click(function(event){
      event.preventDefault();
      //get id like about. work
      var section = $(this).attr("href");
      
      $('html,body').animate({
          scrollTop: $(section).offset().top
      },1250);
  })
}); 