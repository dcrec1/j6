describe('on li.swapable', {
  'before': function() {  
  },

  'after': function(){
  },

  'should hide the label when the input receives a focus': function(){
    $("#_swapable1 label").show();
    $("#_swapable1 input").focus();
    value_of($("#_swapable1 label").is(":visible")).should_be_false();
  }
});
