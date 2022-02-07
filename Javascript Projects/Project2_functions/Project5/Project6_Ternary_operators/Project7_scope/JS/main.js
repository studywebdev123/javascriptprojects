alert("this is a test");
//global and local scope
var A = 25;
function Add_Numbers_1(){
    document.write(20 + A + "<br>");
}
function Add_Numbers_2(){
    document.write(A + 100);
}
Add_Numbers_1();
Add_Numbers_2();
function Add_Numbers_1(){
    var X = 30;
    document.write(20 + X *2 +"<br>");
}
Add_Numbers_1();
//if statement and date method
function get_date(){
    if (new Date().getHours() < 22){
        document.getElementById("date").innerHTML= "what is the answer?";
    }
}
 //else statements
 function Age_Function(){
     Age=document.getElementById("Age").value;
  if (Age >= 18){
     Vote="You can vote!";
 }
 else{
     Vote = "Sorry, you can't vote!";
 }
 document.getElementById("whats your age?").innerHTML=Vote;
}
//else if statements-time function
function Time_Function(){
    var Time= new Date().getHours();
    var Reply;
    if (Time < 12 == Time < 0){
    Reply= "Its morning time!"}
else if(Time >12 == Time < 18){
Reply = "It is the afternoon.";
}
else {
    Reply= "It is the evening time.";
}
document.getElementById("Time_of_day").innerHTML= Reply;}