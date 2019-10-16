$(document).ready(function(){
	$("#hide-frame").click(function(){
	  $("#btchello_bar").slideUp();
	});
});

// Instantly hides the hello bar
$(document).ready(function(){
	$('#btchello_bar').hide();
});
// $(document).ready(function(){
// 	$('.explanation-webpage').hide();
// });
// $(document).ready(function(){
// 	$('.technique-webpage').hide();
// });



var first_time = 0;
var first_time_1 = 0;
var first_time_2 = 0;

// Activates the hello bar when scrolled down
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 300) {
  	if (first_time == 0){
    $('#btchello_bar').fadeIn();
    first_time = 1;
	}
  }
});

// Scrolls to the product
$(document).ready(function(){
	$("#product_button").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#product_to_scroll").offset().top)
    }, 300);
	});
});

// Activates the hello bar when scrolled down
// $(document).scroll(function() {
//   var y = $(this).scrollTop();
//   if (y > 300) {
//   	if (first_time_1 == 0){
//     $('.explanation-webpage').slideDown();
//     first_time_1 = 1;
// 	}
//   }
// });

// // Activates the hello bar when scrolled down
// $(document).scroll(function() {
//   var y = $(this).scrollTop();
//   if (y > 600) {
//   	if (first_time_2 == 0){
//     $('.technique-webpage').slideDown();
//     first_time_2 = 1;
// 	}
//   }
// });