$(function($) {
  $("li.swapable input").focus(function() {
     $(this).siblings("label").hide(); 
  }).blur(function() {
    $(this).siblings("label").toggle($(this).val() == "");
  }).blur();
});
