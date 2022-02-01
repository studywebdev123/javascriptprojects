alert("Test");
function my_Dictionary(){
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
        
    }
   //using "delete"operator
    delete Animal.Sound;
    document.getElementById("dictionary").innerHTML=Animal.Sound;
}