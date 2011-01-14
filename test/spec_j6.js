describe('on load', {
  'should hide li.swapable label if the input has a value': function() {
    value_of($("#_swapable2 label").is(":visible")).should_be_false();
  }
});

describe('on li.swapable input focus', {
  'should hide the label': function(){
    $("#_swapable1 label").show();
    $("#_swapable1 input").focus();
    value_of($("#_swapable1 label").is(":visible")).should_be_false();
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
    $("a.trigger").data("events").click[5].apply($("a.trigger").eq(0), [event]);
    value_of(event.isDefaultPrevented()).should_be_true();
  },
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
    value_of($(".inactive").is(":hidden")).should_be_true();
  },

  'should show targets': function() {
    $("#users span").hide();
    $("a#filter").click();
    value_of($(".active").is(":visible")).should_be_true();
  }
});
