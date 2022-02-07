alert("Test");
//concat method
function Full_Sentence(){
    var part_1="this is";
    var part_2= "made into";
    var part_3= "a concatenated";
    var part_4="sentence";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML= whole_sentence;
}
//slice method
function Slice_Method(){
    var sentence = " To be or not to be";
    var section = sentence.slice(9,13);
    document.getElementById("Slice").innerHTML=section;
}