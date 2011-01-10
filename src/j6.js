$(function($) {
  $("li.swapable input").focus(function() {
     $(this).siblings("label").hide(); 
  }).blur(function() {
    $(this).siblings("label").toggle($(this).val() == "");
  }).blur();

  $("a.trigger").click(function(event) {
    var target = $($(this).attr("href"));
    target.dialog({ modal: true, 
                    width: target.css("width"), 
                    height: target.css("height"),
                    draggable: false });
    event.preventDefault();
  });
});
