$(function($) {
  $("li.swapable input").focus(function() {
     $(this).siblings("label").hide(); 
  }).blur(function() {
    $(this).siblings("label").toggle($(this).val() == "");
  }).blur();

  $("a.trigger").click(function(event) {
    var target = $($(this).attr("href"));
    if (target.hasClass("dialog")) {
      target.dialog({ modal: true, 
                      width: parseInt(target.css("width")),
                      height: parseInt(target.css("height")),
                      draggable: false });
    } else {
      target.slideToggle();
    }
    event.preventDefault();
  });
});
