(function($){
  $.fn.extend({
    leanModal: function(options) {

      var close_modal = function (modal_id) {
        $("#lean_overlay").fadeOut(200);
        $(modal_id).css({ 'display' : 'none' });
      };

      var defaults = {
        top: 100,
        overlay: 0.5,
        closeButton: null
      };

      var overlay = $("<div id='lean_overlay'></div>");

      if (!$("#lean_overlay").length) {
        $("body").append(overlay);
      }

      options = $.extend(defaults, options);

      return this.each(function() {
        $(this).click(function(e) {
          var modal_id = $(this).attr("href");

          $("#lean_overlay").click(function() {
            close_modal(modal_id);
          });

          $(document).keydown(function(e) {
            if (e.keyCode === 27) {
              close_modal(modal_id);
            }
          });

          $(options.closeButton).click(function(e) {
            e.preventDefault();
            close_modal(modal_id);
            return false;
          });

          var modal = $(modal_id);
          var modal_width = $(modal_id).outerWidth(false);
          var lean_overlay = $('#lean_overlay');

          lean_overlay.css({ 'display' : 'block', opacity : 0 });
          lean_overlay.fadeTo(200, options.overlay);

          modal.css({
            'display' : 'block',
            'position' : 'fixed',
            'opacity' : 0,
            'z-index': 11000,
            'left' : '50%',
            'margin-left' : -(modal_width/2) + "px",
            'top' : options.top
          });

          modal.fadeTo(200,1);
          e.preventDefault();
        });
      });
    }
  });
})(jQuery);
