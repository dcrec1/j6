$(function($) {
  $("li.swapable input").focus(function() {
     $(this).siblings("label").hide(); 
  });
});
