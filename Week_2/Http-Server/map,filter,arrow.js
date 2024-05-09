// given an array, give me back a new array where everything 
// is multiplied by 2
const input = [1,2,3,4,5] ; 
const newArray = [] ; 
for(let i=0;i<input.length;i++){
    newArray.push(input[i]*2) ; 
}
console.log(newArray);

//sol-2 -> transform the array using maps 
// map takes 2 i/ps
// array and tranformation function as callback
// map then creates a new array by applying transformation
// function on each of the array elements 
function transform(i){
    return i*2; 
}
const ans = input.map(transform); 
console.log(ans);



//filter 
// given an input array , give back all
// the even values from it
//sol-1 
const newArray2 = [] ; 
for(let i=0;i<input.length;i++){
    if(input[i]%2==0)newArray2.push(input[i]) ; 
}
console.log(newArray2);

//sol-2 using filter 
function filterLogic(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}
const ans2 = input.filter(filterLogic); //we can also pass directly function here 
console.log(ans2); 