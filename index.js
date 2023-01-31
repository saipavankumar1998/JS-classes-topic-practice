// class Triangle{
//     constructor (height,base,color){
//         console.log("created a rectangle")
//         this.height=height;
//         this.base=base;
//         this.color=color;
//     }

//     area(){
//         return this.height*this.base
//     }

//     description(){
//         console.log(`area of the triangle is ${this.area()} and the color is ${this.color}`)
//     }
// }

// // let triangle1=new Triangle(3,3,"red");
// let triangle2=new Triangle(4,7,"blue");


// console.log(triangle2);
// console.log("_______________")
// console.log(triangle2.description());


//-------------------get and set functions------------------//

// class Square {
//     constructor(width) {
//         console.log("square is created");
//         this.width=width;
//         this.height=width;
//     }

//     get area (){
//         return this.width*this.height;
//     }

//     set area (area){
//         this.width= Math.sqrt(area)
//         this.height=Math.sqrt(area)
//     }
// }

// const square1=new Square(4)
// square1.area=25; //setting function

// console.log(square1.width)

////////////////////////////static methods+/////////////////////////////

// class Square {
//     constructor(width) {
//         this.width = width;
//         this.height = width;
//     }

//     static isAreaEqual(squareA, squareB) {
//         return squareA.width * squareA.height === squareB.width * squareB.height;
//     }

//     static isValidDimensions(width,height){
//         return {
//                 "isValid":width===height,
//                 "typeOfThePolygon": width===height?"a square":"rectangle"
//                }
//     }
// }

// let square1=new Square(4)
// let square2=new Square(6)

// console.log(Square.isAreaEqual(square1,square2))
// console.log(Square.isValidDimensions(4,6));
// console.log(Square.isValidDimensions(4,6).typeOfThePolygon);


//////////////////////////////extends keyword and Inheritence/////////////////////////////////





