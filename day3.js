//let number="$";
//if(number>0){
  //  console.log("+value")
//}
//else if(number<0){
 //   console.log("-value")
//}
//else if(number==0){
  //  console.log("zero")
//}
//else{
  //  console.log("Invalid number")
//}

//let a=500;
//let b=100;
//let c=15;

//if(a>b){
 //   if(a>c){
   //     console.log("A is biggest value")
    //}
    //else{
      //  console.log("C is biggest value")
   // }
//}
 //   else{
   //     if(b>c){
     //   console.log("B is biggest value")
    //}
    //else{
      //  console.log(" C is biggest value")
    //}
//} 

//let a=10;
//let b=20;

//let process="/";

//switch(process){
  //  case"+":
   // console.log(a+b);
    //break;
    //case"-":
    //console.log(a-b);
    //break;
    //case"*":
   // console.log(a*b);
   // break;
    //default:
      //  console.log("Invalid process- Place Enter +,-,*");
        //break;
//}


//Ternary operator if..else statement

//let mark=10;
//let answer=(mark>=35)? "pass": "fail"
//console.log(answer)


//let number=10;
//let answer=(number%2==0)?"Even number":"Odd Number"
//console.log(answer)

//let year=2028;
//let answer=(year%4==0)?"Leap year":"Not Leap Year"
//console.log(answer)

//Nested ternary operator
//let age=13;
//let catogory=(age>=18)?"Adult":(age>=13)?"Tennager":"child"
//console.log(catogory)

//let number=0;
//let answer=(number==0)?"zero":(number>0)?"+value":"-value"
//console.log(answer)

//let a=500;
//let b=100;
//let c=15;
//let answer=(a>b && a>c)?"A is biggest value":
//(b>c)?"B is biggest value":"C is biggest value "
//console.log(answer)

//let a=150;
//let b=100;
//let answer=(a>b)?"A is Greater":(b>a)?"B is Greater":"Both are same"
//console.log(answer)


//let i=1;
//while(i<=5){
  //  console.log(i);
    //i++;


//}


//let i=1;
//do{
  //  console.log(i);
    //i++;
//}
//while(i<=10)

//for(let i=1;i<=5;i++){
  //  console.log("malavika")
//}

//Print evev number using while

//let i=1;
//while(i<=10){
  //  if(i%2==0){
    //    console.log(i)
    //}
    //i++;
//}

//let i=10;
//while(i<=20){
  //  if(i%2!=0){
    //console.log(i)
    //}
   // i++;
//}

//let i=1;
//while(i<=10){
  //  if(i%2==0){
    //    console.log(i+"- Even Number")
    //}
    //else{
      //  console.log(i+"- Odd Number")
   // }
    //i++;
//}

//for(let i=1;i<=10;i++){
  //  if(i%2!=0){
    //    console.log(i)
    //}
//}

//for(let i=1;i<=10;i++){
//    console.log(i+"*5="+i*5)
//}

//for(let i=1;i<=10;i++){
  //  if(i==5){
    //    break;
    //}
    //console.log(i)
//}

//for(let i=1;i<=10;i++){
  //  if(i==5){
    //    continue;
   // }
    //console.log(i)
//}

//for(let i=10;i>=1;i--){
  //  console.log(i)
//}

//sum of number

//let sum=0;
//for(let i=1;i<=10;i++){
 //   sum+=i;
   // console.log("sum="+sum)
//}
//console.log("answer -",sum)


//factorial number
let number=5;
let factorial=1;
for(let i=1;i<=number;i++){
    factorial*=i;
    console.log("i="+i+"factorial="+factorial)
}
console.log("answer=",factorial)