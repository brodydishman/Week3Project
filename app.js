//asking the question
let number1 = Number (prompt("Enter a number"));
let number2 = Number (prompt("Please enter a second number"));
let question2 = prompt("Enter an operator (+, -, *, /)");


//global variables
let result;
let result2;
let result3;
// let result4;

//first question
if (number1===isNaN(number1)){
    result="Please refresh and enter a number"
    }else{
    result=number2
}

// //second question
if (number2===isNaN(number2)){
    result3="Please refresh and enter a number"
}else{
    result3=question2
}

if (question2==="+") {
    result2 = number1 + number2
}else if
    (question2==="-") {
    result2 = number1 - number2

}else if
(question2==="*") {
    result2 = number1 * number2

}else if
(question2==="/") {
    result2 = number1 / number2

}else{
    result2= "Please refresh and enter an operator"
}




// //final condition
// if(question===Number&&question2==="+"||"-"||"*"||"/"&&question3===Number){
//     result4= question+question2+question3
// }else{
//     result4= "Please refresh and follow prompts"
// }

//write answer into the body tag
document.body.innerHTML=result2;