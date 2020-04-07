$('#size-slider').on('change', function () {
    var v = $(this).val();
    $('div').css('font-size', v + 'rem')
    $('span').html(v);
});
