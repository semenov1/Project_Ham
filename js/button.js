$('.green_button_section_five').on('click',function(){
	let targetNotActive = $('.portfolio-item_img').not('.active');
       targetNotActive.slice(0, 12).addClass('active'); 
      targetNotActive = $('.portfolio-item_img').not('.active');
        if (targetNotActive.length == 0) { 
		$(this).fadeOut('slow');
	}
});
    

