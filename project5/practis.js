// ternery operetor 
// let num=1;
// while(num<=10){

// console.log(num*2);
// num++;
// }
// let arrItem=[
//     {Item: 'awake me morning', duoToDate: '27/05/2024'},
//     {Item: 'Good night dear', duoToDate: '27/05/2024'},
// ];
// display();
// function addItem(){
//     let inputItem = document.querySelector('.valur');
//     let inputSetDate = document.querySelector('.inputDate');
//     let inputValue= inputItem.value;
//     let inputDateValue= inputSetDate.value;
//     arrItem.push({Item: inputValue, duoToDate: inputDateValue});
//     inputItem.value='';
//     inputSetDate.value='';
//     display();
// }
// function display(){
//     let showItem = document.querySelector('.container');
//     let newHtml='';
    
//     for(let i =0; i<arrItem.length; i++){
//     let{Item, duoToDate}= arrItem[i];
//         newHtml +=`
//         <div>
//         <span>${Item}</span>
//         <span>${duoToDate}</span>
//         <button onclick="arrItem.splice(${i}, 1); display();"
        
//         >Remove</button>
//         </div>
//         `;
//     }
//     showItem.innerHTML=newHtml;
// }
// Annonymous function 

// let sum= function(num1, num2){
//     return num1+ num2;
// }
// console.log(sum(8, 8));
   // Arrow functioon =>
// let sumOfThreeNumber=(num1, num2, num3, sumOfTowNumber)=>{
// let sum1= sumOfTowNumber(num1, num2);
// return sumOfTowNumber(sum1, num3);
// }
// console.log(sumOfThreeNumber(3, 4, 2, sum));
// if pass the single arguement in function then brackets cerlybrackets and retutn statements optional
// let square = num => num*num;
// console.log(square(8));
// Set time out
// let alarm= ()=> console.log('Good morning have a nce day');
// let nw= function(){
//     console.log('fghjzxecrtvybui');
// }
//set timeout function
// setTimeout(alarm, 2000); 


// Array filter

// let arrr= [1,2,3,4,5,6,7,8,9];
// let newOdd= arrr.filter(
//     (num, index)=>num%2===1
// );
// let ne= arrr.filter((num, index)=>
//    (num%2===1)
//      );
// console.log(ne)

//map function
// let arrr= [1,2,3,4,5,6,7,8,9];
// let root= arrr.map( 
//     num=> num*num
// );

// console.log(root);

// computerMove !==undefined ? `Computer choise is= ${computerMove}`: ''
//   document.querySelector('.result').innerText=
//   result!== undefined ? `and ${result}`: ''



// let multiply= (num1, num2)=> num1*num2;
// console.log(multiply(3, 4));

// let printGreeting= ()=> console.log('Namaste dear');
// let double= inputFunction=> {
//     inputFunction();
//     inputFunction();
// };

// double(printGreeting);
let btn= ()=>{
    let myButton= document.querySelector('.button');
     myButton.classList.add('button2');
}
// myButton.addEventListener('doubleClick', console.log('helle'));