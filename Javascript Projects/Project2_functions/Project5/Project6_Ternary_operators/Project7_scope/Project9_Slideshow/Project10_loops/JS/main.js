alert("Test link");
//create a while loop
function countToTen(){
    var Digit = "";
    var X=1;
    while (X<11){
        Digit+= "<br>" + X;
        X++;    }
        document.getElementById("CountingToTen").innerHTML = Digit;
}
function CallLoop(){
    var num = "";
    var A = 1;
    while (A< 20){
        num += "<br>" + A;
        A++;
    }
     document.getElementById("Loop").innerHTML= num;
}
// create a for loop
var Cars=["GM","Dodge","Jeep","Ford","Chrysler"];
var Content = "";
var X ;
function forLoop(){
for ( X =0;X<Cars.length; X++){
    Content += Cars[X] + "<br>";
}
//create a function that uses an array
document.getElementById("listOfCars").innerHTML=Content;}
function arrayFunction(){
    var weather = [];
    weather[0]= "snow";
    weather[1]="rain";
    weather [2]="sunny"
    weather[3]="cloudy";
    document.getElementById("Array").innerHTML="The weather today is" + weather[3] + ".";
}
//create an object using let keyword
function myfunction(){
let Vehicle = {
    year:"2022",
    color:"Blue",
    model:"Intrepid",
    make:"Chrysler"    
    }
document.getElementById("VehicleObject").innerHTML=Vehicle.color;
}