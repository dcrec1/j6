j6 = {
  slider: {
    init: function(selector) {
      var element = $(selector);
      element.slider({step: element.data("step"), 
                      max: element.data("max"), 
                      min: element.data("min"),
                      value: element.data("value"),
                      change: j6.slider.update});
    },

    update: function() {
      $($(this).data("target")).val($(this).slider("option", "value"));
    }
  }
}

$(function() {
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
    var href = $(this).attr("href");
    var siblings = href.indexOf(" > ") > -1 ? $(href.split(" > ")[0]).children() : $(this)._target().siblings();
    siblings.hide();
    $(this)._target().show();
    $(this).parent("li").addClass("selected").siblings().removeClass("selected");
    event.preventDefault();
  });

  j6.slider.init(".slider");
});
