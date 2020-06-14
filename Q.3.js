// Q.3 Write a function digitsum that calculates the digitsum of an integer//
console.log("---------------Q.3-------------------")
let digitsum=(num)=>{
let stringNum=num.toString()
let sum=0
for(let i=0;i< stringNum.length;i++)
{
    let number=parseInt(stringNum[i])
    sum=sum+number
}
return sum
}
console.log("Sum of 192 is :",digitsum(192))



