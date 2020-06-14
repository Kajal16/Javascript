// Q.9 Write a function findRepeat that very first character that repeats in a given string.It should return repeated character,else if no characters are repeated it should return null//
console.log("------------------Q.9------------------")
let findRepeat = (string) =>{
    for(i=1;i<string.length;i++){
        if(string[0]===string[i]){
            return ("Repeated letter of " +  string  + " is : "+ string[0])
        }
    }
    return null
}
let stringinput="heythere"
console.log(findRepeat(stringinput))