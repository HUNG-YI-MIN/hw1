//JavaScript 提供三個方法 alert(), confirm(), prompt() 讓你可以使用瀏覽器內建的對話視窗。
/*

var name="MIN";
alert("Hello"+name);

confirm("Hello"+name);

var nickname=prompt('請輸入你的暱稱')
alert("Hello"+nickname);



//宣告變數
var name="min";

var age=18;

var isGirl=true;

var fruit=["apple","banana","peach"];

alert(name);
alert(age);
alert(isGril);
alert(fruit[0]);
alert(fruit[2]);



//函數、參數、回傳值（一）
function addition(num){
	return num+10
}

var age=18;
var trueage=addition(age);
alert(trueage);

var age2=15;
var trueage2=addition(age2);
alert(trueage2);



//函數、參數、回傳值（二）


//全域與區域變數
function test(){
	a=123; //Globle
	var b=456; //Local
	if(a==123) var c=789 //Local
}

*/


//處理DOM的能力
///DOM
document.getElementById("byid").innerHTML="我來自id";
document.getElementById("byid").style.color="blue";

document.getElementsByClassName("byClass")[0].innerHTML="我來自Class";
document.getElementsByClassName("byClass")[0].style.fontSize="40px";

document.getElementsByTagName("div")[2].innerHTML="我來自Tag";
document.getElementsByTagName("div")[2].style.fontFamily="微軟正黑體";

document.getElementsByTagName("p")[0].innerHTML="課堂練習3";
document.getElementsByTagName("p")[0].style.color="red";
document.getElementsByTagName("p")[0].style.fontSize="30px";

// ///事件
// ///特效

五個div


