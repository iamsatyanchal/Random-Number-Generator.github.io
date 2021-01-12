$(document).ready(function() {
  $('.btn').click(function() {
    var min = Math.round($('#min').val());
    var max = Math.round($('#max').val());
    $('.nbr').html('');
    if (min < max)
      {
  var random = randomInt(min, max);
  $('.nbr').html(random + '!');
      }
    else
      {
  			$('.nbr').html('invalid :&#40;');
      }
  });
  function randomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
});