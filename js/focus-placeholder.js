$(function(){

    $('[data-placeholder]').focus(function() {
        $(this).attr('placeholder', '');
    }).blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });

});

