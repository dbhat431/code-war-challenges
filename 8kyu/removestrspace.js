//REMOVE STRING SPACES
//My solution
function noSpace(str){
    const arr = str.split(" ");
 let newArray =[];
 for(let i = 0; i < arr.length; i++){
   const trimmedString = arr[i].trim();
   newArray.push(trimmedString);
 }
 const finalString = newArray.join("");
       return finalString ;
}