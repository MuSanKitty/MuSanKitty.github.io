/* Slick JS   http://kenwheeler.github.io/slick/*/
$(document).ready(function(){
  $('.featuredFilth').slick({

  })
})

/* js from flat-ui-login */
$('input[type="submit"]').mousedown(function(){
  $(this).css('background', '#2ecc71');
});
$('input[type="submit"]').mouseup(function(){
  $(this).css('background', '#1abc9c');
});

$('#loginForm').click(function(){
  $('#login').fadeToggle('slow');
  $(this).toggleClass('green');
});

