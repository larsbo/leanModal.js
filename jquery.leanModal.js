(function($){
 
    $.fn.extend({ 
         
        leanModal: function(options) {
 
            var defaults = {
                top: '100px',
                overlay: 0.5,
                closeButton: null
            }
            
            var overlay = $("<div id='lean_overlay'></div>");

            if (!$("#lean_overlay").length) {
                $("body").append(overlay);
            }

            options =  $.extend(defaults, options);
 
            return this.each(function() {
            
                var o = options;
               
                $(this).click(function(e) {
              
              	var modal_id = $(this).attr("href");

		$("#lean_overlay").click(function() { 
                     close_modal(modal_id);
                   
                });
                
                $(o.closeButton).click(function(e) { 
                     close_modal(modal_id);
                     e.preventDefault();
                     return false;
                });
                         	
              	var modal_height = $(modal_id).outerHeight(false);
        	  	var modal_width = $(modal_id).outerWidth(false);

        		$('#lean_overlay').css({ 'display' : 'block', opacity : 0 });

        		$('#lean_overlay').fadeTo(200,o.overlay);

        		$(modal_id).css({ 
        		
        			'display' : 'block',
        			'position' : 'fixed',
        			'opacity' : 0,
        			'z-index': 11000,
        			'left' : 50 + '%',
        			'margin-left' : -(modal_width/2) + "px",
        			'top' : o.top
        		
        		});

        		$(modal_id).fadeTo(200,1);

                e.preventDefault();
                		
              	});
             
            });

			function close_modal(modal_id){

        		$("#lean_overlay").fadeOut(200);

        		$(modal_id).css({ 'display' : 'none' });
			
			}
    
        }
    });
     
})(jQuery);
