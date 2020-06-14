// Q.4 Write  a function starPattern that prints the following pattern in the console//
console.log("---------------Q.4------------------")
let starPattern=(num)=>{
    let star=""
    for(row=1;row<=num;row++){
        for(col=1;col<=row;col++){
            star=star+("*")
        }
        console.log(star)
        star=""
    }
}
console.log("Star pattern is :")
starPattern(5)