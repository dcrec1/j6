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
  }
});
