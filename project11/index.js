// function randome(arr){
// let lenth=arr.length;

//   while(lenth>0){
//     lenth--
//     let randomNum=Math.floor(Math.random()*lenth);
//     let temp=arr[lenth]
//     arr[lenth]=arr[randomNum]
//     arr[randomNum]=temp
//     }
//     return arr
// }
// console.log(randome([5,4,7,6,6]));
// let arr=[5,4,7,6,6];
// let arr2=[9,4,7,8,3];
// function uniq(arr, arr2){
// let newArray=[...new Set([...arr, ...arr2])]
//     return newArray
// }

// console.log(uniq(arr, arr2));
function frequent(arr){
  let freq={}
    arr.forEach(element => {
      if(freq.hasOwnProperty(element)) freq[element]++;
      else freq[element]=1;
    });
    console.log(freq);
    
  // let ans = arr.reduce( (acc,num)=>{
  //     return freq[acc] > freq[num] ? acc : num;
  // })
  let ans= Object.keys(freq).reduce(function(acc, next){
    
    
    return freq[acc]>freq[next]? acc:next;
  })
  console.log(ans);
}
frequent([2,3,4,7,1,6,3,6,1])