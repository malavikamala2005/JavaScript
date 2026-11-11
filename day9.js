//1.object literal
let student={
    id:101,
    name:"malavika",
    age:20,
    course:"FullStackDevlopment",
    mark:85

}
console.log(student)
console.log(typeof(student))

//2.using new object()

let employee=new Object()
employee.id=101;
employee.name="malavika",
employee.dob="21/12/2005"
console.log(employee)
console.log(typeof(employee))

//constructor function

function Employee(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
}
let E1=new Employee(101,"malavika",40000)
let E2=new Employee(102,"suriya",50000)
let E3=new Employee(103,"sivaranjani",60000)
console.log(E1)
console.log(E2)
console.log(E3)
console.log(typeof(E1))

//using class

class students{
    constructor(id,name,mark){
        this.id=id;
        this.name=name;
        this.mark=mark;
    }
}
let S1=new students(101,"malavika",90)
console.log(S1)
console.log(typeof(S1))

//using object.create()-create a new object using another object as its prototype
let person={
    greet(){
        return"welcome to malavika";
    }
}
let studenta=Object.create(person)
studenta.name="malavika"
console.log(studenta.name)
console.log(studenta.greet())


//access object properties 1.Dot Notation 2.Baracket Notation
let studen={
    name:"malavika",
    age:20
}
console.log(studen)
console.log(studen.name)
console.log(studen.age)
console.log(studen["name"])
console.log(studen["age"])

//add,update,delete object properties

let employees={
    id:101,
    name:"malavika",
    salary:50000
}
console.log(employees)
//add
employees.department="IT"
//update
employees.salary=60000
//delete
delete employees.id
console.log(employees)

//object and methods
let stude={
    name:"suriya",
    mark:80,
    display(){
        name="malavikamala",
        mark=100,
        console.log("welcome to malavika")
        console.log("stude Name:",this.name);
        console.log("stude Mark:",this.mark)
    }
}
stude.display()
console.log(stude)
console.log(stude.name)
console.log(stude.mark)
stude.display()

let stud={
    id:101,
    name:"suriya",
    mark:90
}
console.log(Object.keys(stud))
console.log(Object.values(stud))
console.log(Object.entries(stud))

let Stu={name:"suriya",
    email:"malavikamala@2005"}
    let details={age:20,mark:90}
    let answer=Object.assign({},Stu.details)
    console.log(Stu)

    let entries=[['id',101],['name','suriya'],['mark',90]]
    let Stus=Object.fromEntries(entries)
    console.log(Stus)

//find total marks using object values
let marks={
    tamil:90,
    english:89,
    maths:98,
    science:99,
    socieal:91
}
let answers=Object.values(marks)
console.log(answers)
let total=Object.values(marks).reduce((sum,marks)=>sum+marks,0)
console.log("Total Marks:",total)


//search property using object .hasOwn()
let employe={
    id:101,
    name:"suriya",
    salary:60000
}
console.log(Object.hasOwn(employe,"name"))
console.log(Object.hasOwn(employe,"email"))
console.log(Object.hasOwn(employe,"salary"))

//object with method
let calculator={
    add(a,b){
        return a+b
    },
    multiply(a,b){
        return a*b
    }
}
console.log(calculator.add(10,10))
console.log(calculator.multiply(1,90))


let studens=[
    {name:"malavika",mark:97},
    {name:"suriya",mark:99},
    {name:"sivaranjani",mark:98},
    {name:"vinothkumar",mark:96},
]
let passed=studens.filter(studens=>studens.mark>90)
console.log(passed)
let low=studens.filter(studens=>studens.mark<90)
console.log(low)


let products = [
    { name: "Laptop", price: 50000 },
     { name: "Mobile", price: 20000 },
     { name: "Keyboard", price: 2000 },
 ]
 
 let totals=products.reduce((sum, product)=>sum+product.price,0)
 console.log(totals)
 
// Nested Object
 
let studentd={
    id:101,
    name:"malavika",
    course:{
        name:"Full Satck Development",
        duration:"6 Months"
    }
}
 
console.log(studentd)
console.log(studentd.course)
console.log(studentd.course.name)
 
