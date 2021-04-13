/*$(document).ready(function(){
		
	});

*/

//基本jquery語法
$(document).ready(function(){
		$('h2').css('color', 'red');
	}); 


//串聯
$(document).ready(function(){
		$('h2').css('color', 'red').css('fontSize', '100px');
	}); 


// //jQuery選擇器有三種
// $(document).ready(function(){
// //Tag selector
// $('div').css('color', 'red').css('fontSize','20px');;

// //Id selector
// $('#Idname').css('color', 'blue').css('fontSize','30px');;

// //Class selector
// $('.Classname').css('color', 'green').css('fontSize','40px');;

// }); 



// //jquery事件
// $(document).ready(function(){
// 	$('#dtd').css('color', 'red').css('fontSize', '40px');

// 	 $('#dtd').click(function(){
// 	 	$('#dtd').css('color', 'green').css('fontSize','100px');
// 	 })
// });

// $("#test").html("jk").css('color', 'purple');

// $(document).ready(function(){ 
// 	$("#btn1").click(function(){
// 	alert("Text: " + $("#test").text()); });

// 	$("#btn2").click(function(){ 
// 	alert("HTML: " + $("#test").html());
// }); 

// });



// $(document).ready(function(){
// 	$( "div" ).html( "<span class='red'>Hello <b>Again</b></span>" );
// });


// //form
// $(document).ready(function(){
// 		$("#test").val(“DTD”)
// 	}); 


// $(document).ready(function(){
// 	$('#dtd').addClass('red');
// 	$('.red').removeClass('red')
// });

// $(document).ready(function(){
// 	$('p').append('<b>Append</b>');
// });

// $(document).ready(function(){
// 	$('#hide').click(function(){
// 		$("#panel").hide();
// 	});

// 	$('#show').click(function(){
// 		$("#panel").click(100);
// 	});
// });

$(document).ready(function(){
$("#fadein").click(function(){ $("#panel").fadeIn(1000);
}); $("#fadeout").click(function(){
$("#panel").fadeOut(1000); });
});




