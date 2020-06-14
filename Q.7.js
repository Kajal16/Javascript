// Q.7 Write a function addElements to find the sum of given elements in an array//
console.log("----------------Q.7-------------------")
let addElements = (array) => {
    let sum=0
    for(let i=0; i< array.length; i++){
        sum=sum+array[i]
    }
    return sum
}
 arrayinput=[1,2,3,4,10]
console.log("Sum of all elements of array :"+"(" + arrayinput + ")"+" is :",addElements(arrayinput))
