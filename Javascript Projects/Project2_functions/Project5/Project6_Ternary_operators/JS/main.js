alert("this is a test");
//Ternary operators
function Ride_Function(){
var Height, Can_ride;
Height=document.getElementById("Height").value;
Can_ride= (Height<52)?"You are too short":"You are tall enough";
document.getElementById("Ride").innerHTML=Can_ride + "to ride.";
};
// using This and new keywords
function Vehicle(Make, Model, Year, Color){
this.Vehicle_Make=Make;
this.Vehicle_Model=Model;
this.Vehicle_Year=Year;
this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge","Viper",2020, "red");
var Emily=new Vehicle("Jeep","Trail Hawk",2019, "White and Black");
var Erik=new Vehicle("Ford","Pinto",1971,"Mustard");
function my_function(){
document.getElementById("Keywords_Constructors").innerHTML="Jack drives a "+ Jack.Vehicle_Color +
 "-colored"+Jack.Vehicle_Model+ "manufactured in"+ Jack.Vehicle_Year
}
//nested functions
function Count_Function(){
document.getElementById("Counting").innerHTML=Count();
function Count(){
    var starting_point=9;
    function Plus_one() {starting_point += 1;}
    return starting_point;
}

}