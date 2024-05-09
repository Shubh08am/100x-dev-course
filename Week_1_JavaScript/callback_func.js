 function square(n) {
    return n*n
 }
 function cube(n) {
    return n*n*n
 }
/*
 function sumofsquare(a,b){
    const val1 = square(a) 
    const val2 = square(b) 
    return val1+val2;
 }
 function sumofcube(a,b){
    const val1 = cube(a) 
    const val2 = cube(b) 
    return val1+val2;
 }
console.log(sumofsquare(1,2)) 
console.log(sumofcube(1,2)) 
*/

function sumofsomething(a,b,fn){
    const val1 = fn(a) 
    const val2 = fn(b) 
    return val1+val2;
}

console.log(sumofsomething(1,2,square)) 
console.log(sumofsomething(1,2,cube)) 
