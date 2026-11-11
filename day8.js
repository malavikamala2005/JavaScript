//let number=[1,2,3,4,5,6,7,8,9,10]
//let answer=number.map(n=>n*5)
//console.log(answer)

//let even=number.filter(n=>n%2===0)
//console.log(even)
//let odd=number.filter(n=>n%2!=0)
//console.log(odd)

//let total=number.reduce((sum,n)=>sum+n,0)
//console.log(total)
 

let number=[10,20,30,40,50]
console.log(number.concat([60,70,80,90]))
console.log(number)
console.log(number.slice(1,4)) 

let numbers=[10,20,30,40,50]
console.log(numbers.join("-")) 
console.log(typeof(numbers.toString()))

let fruite=["apple","banana","mango"]
console.log([...fruite.keys()])
console.log(...fruite.values())
console.log([...fruite.entries()])

let numbe=[1,2,3,4,5,6,7]
let answer=numbe.map(n=>n*2)
console.log("Original:",numbe)
console.log("New:",answer)

//1.display all array element
let numb=[10,20,30,40,50]
for(let i=0;i<numb.length;i++){
    console.log(numb[i])
}

//2.find Array length

let student=["malavika","sivaranjani","saravanan"]
console.log("Total Student:",student.length)

//3.add element using push method,remove last using pop()

let fruit=["apple","orange"];
fruit.push("banana")
fruit.push("mango")
fruit.pop()
console.log(fruit)

//4.add element at beginning,remove
let num=[10,20,30,40]
num.unshift(1)
console.log(num)
num.shift()
console.log(num)

//5.find sum of array element
let nu=[10,20,30,40,50,60]
let sum=0
for(let num of nu){
    sum+=num;
    //sum=sum+num
    console.log("steps:",sum)
}
console.log("Total:",sum)

//find the largest number
let numberst=[10,20,30,40,50,1000,300]
let largest=numberst[0]
for (let num of numberst){
    if(num>largest){
        largest=num;
        console.log(largest)
    }
}
console.log("Largest:",largest)

//find smallest number
let numberse=[10,20,4,5,1];
let smallest=numberse[0]
for(let num of numberse){
    if(num<smallest){
        smallest=num
        console.log("steps:",smallest)
    }
}
console.log("Smallest:",smallest)


let numbs=[10,20,30,40,50]
numbs.reverse()
console.log(numbs)

let n=[10,-20,3,-4]
let positive=n.filter(n=>n>0)
console.log(positive)
let nagative=n.filter(n=>n<0)
console.log(nagative)

//find the average of array element

let marks=[80,90,75,50,89]
let total=marks.reduce((sum,marks)=>sum+marks,0)
console.log("Total:",total)
let average=total/marks.length
console.log("Average:",average)