// Q.8 Write a class cuboid that contains height,width and length as properties.It should also contain surfacearea and volume as methods.After making the cuboid class extend it into a new cube class//
console.log("------------------Q.8------------------")
class Cuboid{
    constructor(length,width,height){
    this.l=length
    this.w=width
    this.h=height
    }
 surfacearea(){
        return 2* ((this.l * this.w) + (this.w * this.h) + (this.l * this.h))
    }
    volume(){
        return this.l * this.w * this.h
    }
}
class cube extends Cuboid{
    constructor(length){
        super(length)
    }
    surfacearea(){
         return 6 * this.l * this.l
    }
    volume(){
        return Math.pow(this.l,3)
    }
}
let cuboidSurfaceArea= new Cuboid(10,20,30)
console.log("Cuboid Surface Area :",cuboidSurfaceArea.surfacearea())
console.log("Cuboid Volume :",cuboidSurfaceArea.volume())

let cubearea= new cube(10)
console.log("Cube Area :",cubearea.surfacearea())
console.log("Cube Volume :",cubearea.volume())