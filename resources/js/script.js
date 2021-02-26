$(document).ready(function(){
   /*-----Sticky Navigation--------*/
   $('.js--section-features').waypoint(function(direction) {
   if(direction=="down"){
       $('nav').addClass('sticky-nav');
   }
   else{
       $('nav').removeClass('sticky-nav');
   }
  }, {
    offset: '25%'
  })
});