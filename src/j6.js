$(function($) {
  $("li.swapable input").focus(function() {
     $(this).siblings("label").hide(); 
  }).blur(function() {
    $(this).siblings("label").toggle($(this).val() == "");
  }).blur();

  $("a.trigger").click(function(event) {
    var target = $($(this).attr("href"));
    target.dialog({modal: true, width: target.attr("data-width"), height: target.attr("data-height")});
    event.preventDefault();
  });
});
