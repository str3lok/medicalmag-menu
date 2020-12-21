(function() {

 
}); //- end 

try {
 $(window).scroll(function() { 
  var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

  if (top > 240) { 
   $('.header__section').addClass('is-fixed');
   $('.wrapper__section').addClass('is-content-fixed');
  }else{
   $('.header__section').removeClass('is-fixed');
   $('.wrapper__section').removeClass('is-content-fixed');
  }
 }); 
} catch (e) {} 
