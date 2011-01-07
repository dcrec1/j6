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
  before_all: function() { $("a.trigger").click(); },

  'should set the target as dialog': function() {
    value_of($("#sign_in").parent().hasClass("ui-dialog")).should_be_true();
  },

  'should not set other elements with class dialog as dialogs': function() {
    value_of($("#sign_up").parent().hasClass("ui-dialog")).should_be_false(); 
  },

  'should set the dialog as a modal': function() {
    value_of($("#sign_in").dialog("option", "modal")).should_be_true();
  },

  'should prevent the anchor action': function() {
    var event = $.Event("click");
    $("a.trigger").data("events").click[5].apply($("a.trigger").eq(0), [event]);
    value_of(event.isDefaultPrevented()).should_be_true();
  },

  'should set the width from data-width dialog attribute': function() {
    value_of($("#sign_in").dialog("option", "width")).should_be($("#sign_in").attr("data-width"));
  },

  'should set the height from data-height dialog attribute': function() {
    value_of($("#sign_in").dialog("option", "height")).should_be($("#sign_in").attr("data-height"));
  }
});
