$(document).ready(function() {
    init();
});

function init() {
    $('.type>div').click(function() {
        classinit();
        $(this).addClass('selected');
        var clicked = $(this).text();
        $(`.form.${clicked}`).removeClass('display_none');
    });
}

function classinit() {
    $('.type>div').each(function(index, element) {
        $(this).removeClass('selected');
    });

    $('.form').each(function(index, element) {
        $(this).addClass('display_none');
    });
}
