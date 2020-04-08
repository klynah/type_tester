$(document).ready(function() {
  $('#sliderOne').on('change', function () {
    var v = $(this).val();
    $('p').css('letter-spacing', v + 'rem')

  $('#sliderTwo').on('change', function () {
    var v = $(this).val();
    $('section').css('font-size', v + 'rem')
});
});
