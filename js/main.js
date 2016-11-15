var slider = function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true
  });
};

var counter = function() {
  $('#plus').click( function () {
    var i = +$('#count').text() + 1;
    $('#count').text(i);
  });
  $('#minus').click( function () {
    var i = +$('#count').text() -1;
    if ( i < 0){
      i = +$('#count').text() + 0;
    };
    $('#count').text(i);
  });
};

var nicecheckboxes = function(){
  $('.item_checkbox').each(function(){
      var checkbox = $(this).find('input[type=checkbox]');
      if(checkbox.prop("checked")) $(this).addClass("check_active");
  });

  $('.item_checkbox').click(function(){
      var checkbox = $(this).find('input[type=checkbox]');
      if(checkbox.prop("checked")){
          $(this).removeClass("check_active");
          checkbox.prop("checked", false);
      }else{
          $(this).addClass("check_active");
          checkbox.prop("checked", true);
      }
  });
};

$(document).ready(function(){
  slider();
  counter();
  nicecheckboxes();
});
