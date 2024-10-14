let contain=document.querySelector(".container");
let arr=['Rishi kant','youtuber', 'from kanpur  ','Cs Engeeniar'];

 let charIndex=0;
 let textUpdat= 0;
 valueUpdate()
function valueUpdate(){

  contain.innerHTML=`
   <h1>Hello I am ${arr[textUpdat].slice(0, 1)==='i' ? 'an' : 'a'} ${arr[textUpdat].slice(0, charIndex)}</h1>
  `
  if(charIndex===arr[textUpdat].length){
    textUpdat++;
    charIndex=0
  }
  if(textUpdat===arr.length){
    textUpdat=0;
  }
  setTimeout(valueUpdate, 300)
  charIndex++;
}
