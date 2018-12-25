$('.menu_item_first').on('click', function () {
    let all = $('.portfolio-item_img');
    all.show();
    $('.green_button_section_five').fadeOut('slow');
});

$('.menu_iteam_design').on('click', function () {
    let images = $('.portfolio-item_img').hide();
    $("div[data-category='graphic-design']").show();
});

$('.menu_web_design').on('click', function () {
    let images = $('.portfolio-item_img').hide();
    $("div[data-category='web-design']").show();
});

$('.menu_landing').on('click', function () {
    let images = $('.portfolio-item_img').hide();
    $("div[data-category='landing']").show();
});

$('.menu_wordpress').on('click', function () {
    let images = $('.portfolio-item_img').hide();
    $("div[data-category='wordpress']").show();
});
