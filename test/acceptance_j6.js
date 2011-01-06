describe('Basic plugin initialization', {
  
  'before': function() {  
    $('#j6').j6()
   },
   
   'after': function(){
   },

 	'should be able see that version of project': function(){
     value_of($.j6.VERSION).should_be('0.0.1')
 	},
	
	'should be able see that element is visible': function(){
    value_of($('#j6').is(':visible')).should_be_true()
	},
	
	'should be able to override default settings': function(){
	  // over to you!
	},
	
})