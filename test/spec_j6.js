describe('on load', {
  'should hide li.swapable label if the input has a value': function() {
    value_of($("#_swapable2 label").is(":visible")).should_be_false();
  },

  'should set .slider as an slider': function() {
    value_of($(".slider").hasClass("ui-slider")).should_be_true();
  },

  'should set .slider[data-step] as the slider step': function() {
    value_of($(".slider").slider("option", "step")).should_be($(".slider").data("step"));
  },

  'should set .slider[data-max] as the slider max': function() {
    value_of($(".slider").slider("option", "max")).should_be($(".slider").data("max"));
  },

  'should set .slider[data-min] as the slider min': function() {
    value_of($(".slider").slider("option", "min")).should_be($(".slider").data("min"));
  },

  'should set .slider[data-value] as the slider value': function() {
    value_of($(".slider").slider("option", "value")).should_be($(".slider").data("value"));
  },

  'should set .calendar as a calendar': function() {
    value_of($(".calendar").hasClass("hasDatepicker")).should_be_true();
  }
});

describe('on li.swapable input focus', {
  'should hide the label': function(){
    $("#_swapable1 label").show();
    $("#_swapable1 input").focus();
    value_of($("#_swapable1 label").is(":visible")).should_be_false();
  }
});

describe('on div.swapable input focus', {
  'should hide the label': function(){
    $("#_swapable3 label").show();
    $("#_swapable3 input").focus();
    value_of($("#_swapable3 label").is(":visible")).should_be_false();
  }
});

describe('on li.swapable input blur', {
  'should hide the label if the value is not empty': function(){
    $("#_swapable1 label").show();
    $("#_swapable1 input").val("test");
    $("#_swapable1 input").blur();
    value_of($("#_swapable1 label").is(":visible")).should_be_false();
  },

  'should show the label if the value is empty': function(){
    $("#_swapable1 label").hide();
    $("#_swapable1 input").val("");
    $("#_swapable1 input").blur();
    value_of($("#_swapable1 label").is(":visible")).should_be_true();
  }
});

describe('on a.trigger click with a a target with class dialog', {
  before_all: function() { $("#a1").click(); },

  'should set the target as dialog': function() {
    value_of($("#sign_in").parent().hasClass("ui-dialog")).should_be_true();
  },

  'should not set other elements with class dialog as dialogs': function() {
    value_of($("#sign_up").parent().hasClass("ui-dialog")).should_be_false(); 
  },

  'should set the dialog as a modal': function() {
    value_of($("#sign_in").dialog("option", "modal")).should_be_true();
  },

  'should set the width from css width dialog attribute': function() {
    value_of($("#sign_in").dialog("option", "width")).should_be(400);
  },

  'should set the height from css height dialog attribute': function() {
    value_of($("#sign_in").dialog("option", "height")).should_be(600);
  },

  'should not set the dialog as draggable': function() {
    value_of($("#sign_in").dialog("option", "draggable")).should_be_false();
  },

  'should prevent the anchor action': function() {
    var event = $.Event("click");
    $("a.trigger").data("events").click[0].handler.apply($("a.trigger").eq(0), [event]);
    value_of(event.isDefaultPrevented()).should_be_true();
  }
});

describe('on a.trigger click with a a target with class menu', {
  'should slide toggle the target': function() {
    $("#menu1").hide();
    $("#a2").click();
    value_of($("#menu1").is(":visible")).should_be_true();
  },

  'should not slide toggle other targets': function() {
    $("#menu2").hide();
    $("#a2").click();
    value_of($("#menu2").is(":hidden")).should_be_true();
  }
});

describe('on a.filter click', {
  'should hide all target sibblings': function() {
    $("#users span").show();
    $("a#filter").click();
    value_of($("#users .inactive").is(":hidden")).should_be_true();
  },

  'should show targets': function() {
    $("#users span").hide();
    $("a#filter").click();
    value_of($("#users .active").is(":visible")).should_be_true();
  },

  'should do the actions if the anchor was dynamically created': function() {
    $("#users span").hide();
    $("<a class='filter' href='#users .active'>Filter</a>").appendTo("body").click();
    value_of($("#users .active").is(":visible")).should_be_true();
  },

  'should prevent the anchor action': function() {
    var event = $.Event("click");
     jQuery.data(document, 'events').live[0].handler.call($("a#filter")[0], event);
    value_of(event.isDefaultPrevented()).should_be_true();
  },

  'should hide the parent childs if the target doesnt exist but whas especified like this "parent > child"': function() {
    $("#users2 span").show();
    $("a#filter2").click();
    value_of($("#users2 span").is(":hidden")).should_be_true();
  },

  'should remove the selected class from the parent li siblings': function() {
    $("#filter4").parent().addClass("selected"); 
    $("#filter3").click();
    value_of($("#filter4").parent().hasClass("selected")).should_be_false();
  },

  'should add the selected class to the parent li': function() {
    $("#filter3").parent().removeClass("selected"); 
    $("#filter3").click();
    value_of($("#filter3").parent().hasClass("selected")).should_be_true();
  },

  'should not add the selected class if the parent is not an li': function() {
    $("#filter").parent().removeClass("selected");
    $("#filter").click();
    value_of($("#filter").parent().hasClass("selected")).should_be_false();
  }
});

describe("j6.slider.init", {
  'should set the specified selector as an slider': function() {
    j6.slider.init("#slider");
    value_of($("#slider").hasClass("ui-slider")).should_be_true();
  },

  'should update the data-target value when the slider slides': function() {
    j6.slider.init("#slider");
    $("#input").val("0");
    $("#slider").slider("option", "slide").call($("#slider")[0], null, {value: 10});
    value_of($("#input").val()).should_be("10");
  }
});

describe("j6.dialog.init", {
  'should set the specified selector a dialog': function() {
    j6.dialog.init("#sign_out");
    value_of($("#sign_out").parent().hasClass("ui-dialog")).should_be_true();
  }
});

describe("j6.datepicker.init", {
  'shoult set the specified selector as a datepicker': function() {
    j6.datepicker.init("#datepicker");
    value_of($("#datepicker").hasClass("hasDatepicker")).should_be_true();
  },

  'should use .calendar as a default selector': function() {
    $("<div class='calendar' id='calendar'></div>").appendTo("body");
    j6.datepicker.init();
    value_of($("#calendar").hasClass("hasDatepicker")).should_be_true();
  },

  'should call j6.datepicker.beforeShowDay before showing the days': function() {
    j6.datepicker.init();
    value_of($(".calendar").datepicker("option", "beforeShowDay")).should_be(j6.datepicker.beforeShowDay)
  },

  'should call j6.datepicker.onChangeMonthYear when the month changes': function() {
    j6.datepicker.init();
    value_of($(".calendar").datepicker("option", "onChangeMonthYear")).should_be(j6.datepicker.onChangeMonthYear)
  }
})
