$(document).ready(function(){
	$("#hide-frame").click(function(){
	  $("#btchello_bar").slideUp();
	});
});

$(document).ready(function(){
	$('#btchello_bar').hide();
});


var first_time = 0;

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 300) {
  	if (first_time == 0){
    $('#btchello_bar').fadeIn();
    first_time = 1;
	}
  }
});
