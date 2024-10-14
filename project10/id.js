// console.log("hello world");
// function first(){
//   return "hello world";
// }
// first();

// // symbole define

// const mySym = Symbol("mySymbole1");

// const symbole ={
//   [mySym]: "Symbol",
//   name: "Pankaj",
//   age: 21,
// }
// const obj1 = {
//   mob: 7007042225,
// }
// const returnValue = {...symbole, ...obj1}
// // const returnValue = Object.assign({}, symbole, obj1)
// console.log(returnValue );
// (function noty(name){
//   let userName = `Helle ${name}`
//   console.log(userName);
// })('Pankaj raj')

// noty()
// for(let i =1; i<=10; i++){
//   if(i==5){
//     console.log('ddetechted');
//     break
//   }
//   console.log(i)
// }
// access MAp
// const map = new Map();
// map.set("IN", "India")
// map.set("FS", "France")
// map.set("I", "Indonesia")
// for (const[ key, value] of map) {
//   console.log(key,'=', value)
// }

// let btn =document.querySelector("button")
// let hi= document.querySelector("h1")

// btn.addEventListener("click", ()=>{
//     let input=parseFloat(document.querySelector(".input").value)
//     let input1=parseFloat(document.querySelector(".input1").value)
//     sum(input, input1)

// })

// function sum(a, b){
//     let d=a+b;
//     alert(d)

//     hi.innerText=`sum:=${d}`;

// }

// let a=4;
// let b=7;

// a =a+b;
// b=a-b;
// a=a-b;
// console.log("a=", a);

// console.log("b= ", b)

// let user ={
//   name: "rishi",
//   class: "standerd",
//   star: function(){
//     console.log("welocmme");

//   }
// }

// class man{
//   constructor(name, model, year){
//     this.name=name;
//     this.model=model;
//     this.year=year;
//   }

//   start(){
//     console.log(`${this.name} ${this.model} started`);

//   }
// }

// let myCar= new man('toyota', 'corola', 2024);
// myCar.start();

// console.log(userData);

// function palindrome(str){
//       let stri= str.toLowerCase().replace(/[^a-z0-9]/g, '');
//       let reverse=stri.split("").reverse("").join("")
//     return reverse===stri;
// }

// let arr=[3,4,67,];

// function ma(arr){
//   let m=Math.max(...arr)
// return m;
// }
// console.log(ma(arr));

// function palindrome(){
//   str='pa   nk    aj'
//   let clear= str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   let reverse= str.split('').reverse("").join("");
//   console.log(clear);

//   return clear===reverse;
// }

// for(let i=1; i<=15; i++){
//   if(i%3==0 && i%5==0){
//     console.log("fizzBuzz");

//   }else if(i%5==0){
//     console.log("buzz");

//   }else if(i%3==0){
//     console.log("fizz");

//   }else{
//     console.log(i);

//   }
// }

// function sumOf(num) {               
//   let sum = '';
//   let str = num.toString();
//   for (let i = 0; i <= str.length - 1; i++) {
//     let num = str[i];
//     sum =  num +sum;
//   }
//   return sum
// }
// console.log(sumOf(234654));

// function sumOf(num) {                   sumofnumbers  
//   let sum = 0;
//   let str = num.toString();
//   for (let i = 0; i <= str.length - 1; i++) {
//     sum += Number(str[i]);
//   }
//   return sum
// }
// console.log(sumOf(988));

// function countVowels(str){
//   let count=0;
//     let newStr =str.split("")
//     for (const element of newStr) {
//       if (element==='a') {
//         count++;
//       }else if(element==='e'){
//         count++;
//       }else if(element==='i'){
//         count++;
//       }else if(element==='o'){
//         count++;
//       }else if(element=='u'){
//         count++
//       }
//     }
//     return count;
// }
// console.log(countVowels("askiyanaa"));

// function reverse(str){
//     return str.split("").reverse().join("");
// }

// function max(arr){
//     let num =Math.max(...arr)
//     return num;
// }

// /let arr=[1,3,2,3,4,2]

// function removeDuplicate(arr){
//     return [...new Set(arr)];
// }
// console.log(removeDuplicate(arr));
// let arr=[1,[2,[3,4],5],6];
// console.log(arr.flat(2));
// let arr=[['a','b'],['c',['d','e']]];
// console.log(arr.flat(2));
// let arr=[1,2,[3,4],5,[6]];
// console.log(arr.flat(2));


let arr =[1,2,3,5]
function missingNum(arr){
  const l= arr.length+1;
const totalSum= (l*(l+1))/2;
const actualSum=arr.reduce((acc, r)=> acc+r)
console.log(actualSum);

return totalSum-actualSum;
}


console.log(missingNum(arr));

