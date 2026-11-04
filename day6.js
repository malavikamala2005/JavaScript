//function  greet(){
  //  console.log("Welcome to Malavika")
//}
//greet()


//without arguments,without return value,type
//function add(){
  //  a=10;
    //b=30;
    //console.log(a+b)
//}
//add()

//with arguments,without return value
//function add(a,b,c,d,e){
  //  console.log(a+b+c+d+e)
//}
//add(100,200,300,400,450)

//without argument,with return value

//function add(){
  //  a=100;
   // b=400;
    //return a+b
//}
//console.log(add())

//with argument,with return value

//function  add(a,b,c){
  //  return a+b+c
//}
//console.log(add(10,20,30))

//function add(a,b){
  //  return a+b
//}
//let answer=add(100,20) 
//console.log(answer)

//function expression - variable  expression function -without arguments,without return value
//const add=function(){
  //  a=10
   // b=40
    //console.log(a+b)
//}
//add()

//const add=function(a,b,c,d){
  //  console.log(a+b+c+d)
//}
//add(1,2,3,4)

//const add=function(){
  //  a=100;
    //b=500;
    //return a+b
//}
//console.log(add())

//varible expression passing function
//const add=function(a,b,c){
  //  return a+b+c
//}
//console.log(add(1,2,3))


//arrow function
//const add=()=>{
  //  a=100
    //b=30
    //console.log(a+b)
//}
//add()


//const add=(a,b,c)=>{
  //  console.log(a+b+c)
//}
//add(10,30,70)

//const add=()=>{
  //  a=30
    //b=90
    //return a+b
//}
//console.log(add())

//const add=(a,b,c,d)=>{
  //  return a+b+c+d
//}
//console.log(add(56,30,12,23))

//const square=number=>number*number
//console.log(square(5))
//console.log(square(3))

//const numbercheck=(number)=>{
    //if(number>0){
      //  console.log( number,"+ value")
    //}
    //else if(number<0){
      //  console.log(number,"- value")
    //}
    //else{
      //  console.log(number,"Zero")
    //}
//}
//numbercheck(5)
//numbercheck(-7)
//numbercheck(0)

//const  numbercheck=(number)=>{
  //  if(number%2==0){
    //    console.log(number,"- Even number")
   // }
    //else{
     //   console.log(number,"- odd number")
   // }
//}
//numbercheck(50)
//numbercheck(77)

//defult peremeter function
//function greet(name="Guest User"){
  //  console.log("Welcome",name)
//}
//greet("malavika")
//greet("sivaranja")
//greet()


//function add(a,b,c){
  //  return a+b+c
//}
//console.log(add(20,60,20))

//function square(n){
 //   return n*n
//}
//console.log(square(5))

//function cube(n){
  //  return n*n*n
//}
//console.log(cube(6))

//const cube=(n=0)=>{
//    return n*n*n
//}

//console.log(cube(8))
//console.log(cube(5))
//console.log(cube(9))

const checknumber=(n=0)=>{
    if(n%2==0){
        return "Even Number"
    }
    else{
        return "Odd Number"
    }
}
console.log(checknumber(10))
console.log(checknumber(0))
console.log(checknumber(9))