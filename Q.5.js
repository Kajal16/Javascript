// Q.5 Write a function strReverse to reverse a given string//
console.log("-----------------Q.5------------------")
let strReverse=(string)=>{
    newstr=""
    for(i=string.length-1;i>=0;i--){
        newstr=newstr+string[i]
    }
    return newstr
}
let string="awesome"
console.log("Reverse string of " +string+ " is :",strReverse(string))