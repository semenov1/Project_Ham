$('.green_button_section_eight').on('click',function(){
	let targetNotActive = $('.grid_item').not('.active');
    console.log(targetNotActive);
       targetNotActive.slice(0, 3).addClass('active'); 
      targetNotActive = $('.grid_item').not('.active');
        if (targetNotActive.length == 0) { 
		$(this).fadeOut('slow');
	}
});