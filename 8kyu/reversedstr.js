//REVERSED STRING
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
//My solution
function solution(str){
    const arr=str.split("");
    const reversed=arr.reverse();
    const finalAnswer=reversed.join("");
    return finalAnswer;
  }