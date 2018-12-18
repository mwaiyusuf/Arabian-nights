//Function nav(){
//    var name=("Enter your name");
//    alert("Hi " +name);
//    var Age=prompt("How old are you?");
//    if(Age<18){
//        alert("This site is for over 18yrs please");
//    }
//    else{
//        alert("Welcome to this amazing site");
//    }
//}
//nav();
function negposn(){
    var number=[];
    for(i=0; i<=4; i++){
        var num=number.push(prompt("Enter 9 numbers "));
    }
    var count=0;
    for(i=0; i<number.length; i++){
        if(number[i]>=0){
            countz++;
        }
        else{
            countx++;
        }
    }
    alert("positive numbers are " + countz );
}
negposn ();