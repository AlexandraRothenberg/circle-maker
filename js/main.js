var $ball = $('.ball');

$('div').on('keypress', function (e) {
  var $div = $('<div>').addClass('.ball');
  e.preventDefault();
  $div.html('Math.random');
});

//$('#btn-down').on('click', function () {
 // var newTop = $ball.offset().top + 10;
 // $ball.css('top', newTop);
//});
