// $(document).ready(function(){
// 	$("#hide-frame").click(function(){
// 	  $("#btchello_bar").slideUp();
// 	});
// });

// // Instantly hides the hello bar
// $(document).ready(function(){
// 	$('#btchello_bar').hide();
// });
String.prototype.format = function () {
        var a = this;
        for (var k in arguments) {
            a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
        }
        return a
    }

var changed = 0;
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 300) {
	  // var r = (y-200) * 0.1 ;
	  // if (r > 52) { r = 52;}
	  // var g = (y-200) * 0.1;
	  // if (g > 58) { g = 52;}
	  // var b = (y-200) * 0.1;
	  // if (b > 64) { b = 64;}
	  var opac = (y - 300) * 0.006
	  var bg = "rgb(52, 58, 64, {0})".format(opac);
	  $('.nav-color').css('background-color', bg);
  }
  else{
  	$('.nav-color').css('background-color', rgb(0,0,0,0));
  }
 //  if (y > 300 && changed == 0) {
 // 	    $('.nav-color').css('background-color', 'rgb(52, 58, 64)');

	// }
 //  else {
	// 	$('.nav-color').css('background-color', 'rgba(0,0,0,0)');
	// }
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