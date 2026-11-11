//let student=["malavika","sivaranja","vinothkumar","kumar"]
//console.log(student)
//console.log(student[0])
//console.log(student[1])

//array literal
//let number=[10,20,30,40,50]
//console.log(number)

//using array constructor
//let number=new Array(10,20,30,40,50,60,70,80,90)
//console.log(number)
//let data=["malavika","sivaranjani","anu",1002,true,"malavikamala2005@gmail.com"]
//console.log(data)

//using array.from()
//let letters=Array.from("Malavika")
//console.log(letters)

//Array index ansd length
//let number=[10,20,30,40,50,60]
//console.log(number[0])
//console.log(number[1])
//console.log(number[2])
//console.log(number[3])
//console.log(number[4])
//console.log("Length",number.length)


//Add and remove element
//let student=["ravi","malavika","sivaranjani"]
//console.log(student)
//add the value
// console.log(student.push("mala"))
//console.log(student)
//console.log(student)
//update the value
//student[0]="anu"
//console.log(student[0])
//delete student[1]
///console.log(student)


//let fruits=["Apple","mango","orange"]
//console.log(fruits)
//fruits.push("Banana")
//console.log(fruits)
//fruits.pop()
//console.log(fruits)
//fruits.unshift("banana")
//console.log(fruits) 
//console.log(fruits.shift())
//console.log(fruits)


//search method
//let number=[10,20,30,20,40]
//console.log(number.indexOf(20))
//console.log(number.lastIndexOf(20))
//console.log(number)
//console.log(number.includes(30))

//Iteration and transformation
//let number=[10,20,30,40,50]
//number.forEach( n=>console.log(n*2))

//let names=["malavika","kumar","anu"]
//names.forEach((names,index)=>{
  //  console.log(index+1,"-",names);
//});

//let number=[10,20,30,40,50]
//let sum=0;
//number.forEach((num)=>{
  //  sum=sum+num;
//});
//console.log("Total:",sum);

//let number=[10,15,20,25,30,35,78,90]
//number.forEach((num) => {
  //  if(num%2==0){
    //    console.log(num,"Even Number");
    //}
    //else{
     //   console.log(num,"Odd Number");
    //}
    
//});


let number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
number.forEach((num)=>{
    console.log(num,"* 2 =",num* 2)
});

let names=["malavika","sivaranjani"];
names.forEach((names)=>{
    console.log(names.toUpperCase());
    console.log(names.toLowerCase());
});

//let salary=[25000,30000,35000,45000];
//let total=0;
//salary.forEach((salary)=>{
  //  total=total+salary;
//});
//console.log("Total Salary:",total);


let marks = [80, 90, 70, 60, 100];

let total = 0;

marks.forEach((mark) => {
    total = total + mark;
});

let average = total / marks.length;

console.log("Total Marks:", total);
console.log("Average:", average);