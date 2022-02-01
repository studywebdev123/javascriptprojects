alert("hello");
function addition_function(){
    var addition=2+2;
    document.getElementById("Math").innerHTML="2+2="+ addition;
}
function subtraction_function(){
    var Subtraction=5-2;
    document.getElementById("Math2").innerHTML= "5-2="+ Subtraction;
}
function multiplication(){
    var simple_math = 6*8;
    document.getElementById("Math3").innerHTML="6*8="+ simple_math;
}
function function_division(){
    var simple_math = 48/6;
    document.getElementById("Math4").innerHTML="48/6="+ simple_math;
}
function modulus_operator(){
    var modulus =25%6;
    document.getElementById("Modulus").innerHTML="When you divide 25 by 6 ="+ modulus;
}
function negation_operator(){
    var x=10;
    document.getElementById("negation").innerHTML=-x;
}
//increment and decrement operators
var x=5;
x++;
document.write(x);
var Y=3;
Y--;
document.write(Y);
window.alert(Math.random()*100);