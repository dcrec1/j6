$(function($) {
  $.fn._target = function() {
    return $($(this).attr("href"));
  }
  
  $("li.swapable input").focus(function() {
     $(this).siblings("label").hide(); 
  }).blur(function() {
    $(this).siblings("label").toggle($(this).val() == "");
  }).blur();

  $("a.trigger").click(function(event) {
    if ((target = $(this)._target()).hasClass("dialog")) {
      target.dialog({ modal: true, 
                                width: parseInt(target.css("width")),
                                height: parseInt(target.css("height")),
                                draggable: false });
    } else {
      target.slideToggle();
    }
    event.preventDefault();
  });

  $("a.filter").click(function(event) {
    $(this)._target().siblings().hide();
    $(this)._target().show();
  })
});
