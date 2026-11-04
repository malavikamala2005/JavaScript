const today=new Date();
console.log(today)
console.log(today.toString())
console.log(today.toDateString())
console.log(today.toTimeString())
console.log(today.toISOString())
console.log(today.getTime())
console.log(today.getFullYear())
console.log(today.getMonth()+1)
console.log(today.getDate())
console.log(today.getUTCFullYear())
console.log(today.getDay())
console.log(today.getUTCMonth())



//const date=new Date()
//date.setFullYear(2005)
//date.setMonth(11)
//date.setDate(21)
//console.log(date.toDateString())


const date=new Date()
console.log(date.toLocaleDateString("en-IN",
    {
    timeZone:"Asia/Kolkata"
}))
console.log(date.toLocaleTimeString("en-IN",
    {
    timeZone:"Asia/Kolkata",
    hour12:true
}))
console.log(date.toLocaleString("en-IN",
    {
    timeZone:"Asia/Kolkata"
}))

