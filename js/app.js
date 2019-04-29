/* PORTFOLIO ITEM COLLAPSE - SHOW JUST ONE AT A TIME */
$('.port-item').click(function () {
    $('.collapse').collapse('hide');
});


/* IMAGE GALLERY - WORK SECTION */
$(document).on('click', '[data-toggle="lightbox"]', function (e) {
    e.preventDefault();
    $(this).ekkoLightbox();
});