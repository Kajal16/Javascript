// Q.6 Write a function findElement to find a given element in an array.It should return index position of the element in the array and null if there are no elements present//
console.log("----------------Q.6-------------------")
let num=23
let array=[1,2,3,4,5,5,23,2,33]
let findElement = (num,array) =>{
    for(i=0;i<array.length;i++){
        if(array[i]===num){
            return i
        }
    }
    return null
}
console.log("The index of " + num + " is :",findElement(num,array))