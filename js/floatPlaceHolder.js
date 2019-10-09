(function( $ ) {
    $.fn.placeHolder = function() {
		$('.place-holder').each(function(){
			var value = $(this).attr('place-holder');
			
			$(this).wrap('<div class="float-text"></div>').parent().prepend('<label class="place-holder-label">'+value+'</label>');
			
			$(this).parent().bind('click', function(){
				$(this).removeClass('float-text');
				$(this).addClass('float-text-focused');
				$(this).find('> label').animate({
					fontSize: "14px"
				}, 400);
				var textInput = $(this).find('> input');
				textInput.focus();
				$(this).find('> label').css({"margin-top":"0px"});
				textInput.width("510px");
				textInput.height("24px");
				textInput.css({"margin-left":"5px", "color":"#000", "font-size":"24px", "text-align": "center"});
				textInput.bind('blur', function(){
					var val = $(this).val();
					if(val == null || val == undefined || val == ''){
						$(this).width("0px");
						$(this).height("0px");
						var divParent = $(this).parent();
						divParent.removeClass('float-text-focused');
						divParent.addClass('float-text');
						divParent.find('> label').css({"margin-top":"15px"});
						divParent.find('> label').animate({
							fontSize: "24px",
						}, 400);
					}
				})
			})
		});
    };
}(jQuery));

