// Q.10 write a function sort that sorts a given array into ascending order//
console.log("-------------------Q.10-------------")
let sort = (arr) =>{
    let temp = []
    for(i=0 ; i < arr.length ; i++){
        for(j=0 ; j < arr.length ; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j]
                arr[j ]= arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)
}
sort([5 , 2 , 1 , 4 , 3])