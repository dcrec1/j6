j6 = {
  datepicker: {
    beforeShowDay: function() {
      return [true, '', ''];
    },

    init: function(selector) {
      if (selector == undefined) selector = ".calendar";
      $(selector).datepicker({ beforeShowDay: j6.datepicker.beforeShowDay,
                               onChangeMonthYear: j6.datepicker.onChangeMonthYear });
    },

    onChangeMonthYear: function() {}
  },

  dialog: {
    init: function(selector) {
      var target = $(selector);
      target.dialog({ modal: true,
                      width: parseInt(target.css("width")),
                      height: parseInt(target.css("height")),
                      draggable: false });
    }
  },

  slider: {
    init: function(selector) {
      var element = $(selector);
      if(!element.slider) return false;
      element.slider({step: element.data("step"),
                      max: element.data("max"),
                      min: element.data("min"),
                      value: element.data("value"),
                      slide: j6.slider.update});
    },

    update: function(event, ui) {
      $($(this).data("target")).val(ui.value);
    }
  },

  swapable: {
    init: function() {
      var element = $(".swapable input, input.swapable, .swapable textarea, textarea.swapable");
      element.live("focus", function() {
        $(this).siblings("label").hide();
      }).live("blur", function() {
        $(this).siblings("label").toggle($(this).val() === "");
      }).blur();
    }
  }
};

$(function() {
  $.fn._target = function() {
    return $($(this).attr("href"));
  };

  $("a.trigger").live('click', function(event) {
    if ((target = $(this)._target()).hasClass("dialog")) {
      j6.dialog.init(target);
    } else {
      target.slideToggle();
    }
    event.preventDefault();
  });

  $("a.filter").live('click', function(event) {
    var href = $(this).attr("href");
    var siblings = href.indexOf(" > ") > -1 ? $(href.split(" > ")[0]).children() : $(this)._target().siblings();
    siblings.hide();
    $(this)._target().show();
    $(this).parent("li").addClass("selected").siblings().removeClass("selected");
    event.preventDefault();
  });

  $("a.closer").live('click', function(event) {
    $(this)._target().dialog("close");
    event.preventDefault();
  });

  j6.slider.init(".slider");
  j6.datepicker.init();
  j6.swapable.init();
});
