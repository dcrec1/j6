;(function($) {
  
  $.j6 = {
		VERSION: "0.0.1",
		defaults: {
			key: 'value'
		}
	};

	$.fn.extend({	  
	  j6: function(settings) {   
      settings = $.extend({}, $.j6.defaults, settings);    
      return this.each( function(){
        self = this;
        
        // NOTE: semicolons are needed more if you are planning on packing your code
        
        // console.log(this);
        //  console.log($(this));
        //  console.log($.j6.VERSION);
        //  console.log($.j6.defaults.key);
        
        // your plugin
        
      })
		}
	  
	})
})(jQuery);
