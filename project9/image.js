let slideImage=[
  {Image: "Screenshot 2024-05-18 155404.png"},
  {Image: "Screenshot 2024-05-20 133755.png"},
  {Image: "Screenshot 2024-05-21 121808.png"},
  {Image: "Screenshot 2024-06-09 213741.png"},
  {Image: "Screenshot 2024-06-09 213909.png"},
]

for(img of slideImage){
  console.log(img)
}
console.log('helllo world');

let display = document.querySelector('.slideImage');

display.innerHTML=`<img class="uh" src="${img.Image}" alt="">`;   