var $ball = $('.ball');

$('<div>').on('keydown', function (e) {
  var newArea = Math.floor(Math.random() * (max - min)) + min;

  $ball.css('left', newArea);
  $ball.css('top', newArea);
  e.preventDefault();
  $('body').html();
  $('html').append($ball);
});
