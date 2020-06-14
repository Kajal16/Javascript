//Q.2 Write a function factorial that calculates the factorial of positive integer//
console.log("---------------Q.2-------------------")
let factorial=(num)=>{
    let fact=1
    for(i=num;i>=1;i--){
        fact=fact*i
    }
    return fact
}
console.log("The factorial of 3 is :",factorial(3))