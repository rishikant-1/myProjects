let bodyEl = document.querySelector("body");
let contain = document.querySelector(".containr");
let btn = document.querySelector("button");
let btn1 = document.querySelector(".button");
let item = [
  {
    image:
      "https://cdn.pixabay.com/photo/2016/02/04/11/57/heart-1179054_1280.png",
  },
  {
    image:
      "https://www.freeiconspng.com/thumbs/smile-png/smile-png-photo-19.png",
  },
];
let i = "";
let img1 = document.createElement("img");
let img2 = document.createElement("img");
img1.src = item[0].image;
btn.appendChild(img1);
img2.src = item[1].image;
btn1.appendChild(img2);
function heart(i) {
  bodyEl.addEventListener("mousemove", (event) => {
    let span = document.createElement("span");
    const pageX = event.offsetX;
    const pageY = event.offsetY;
    span.style.backgroundImage = `url(${i})`;
    span.style.left = pageX + "px";
    span.style.top = pageY + "px";
    bodyEl.appendChild(span);
    setTimeout(() => {
      span.remove();
    }, 3000);
    let size = Math.floor(Math.random() * 100);
    span.style.height = size + "px";
    span.style.width = size + "px";
  });
}
btn.addEventListener("click", () => {
  i = item[0].image;
  heart(i);
});
btn1.addEventListener("click", () => {
  i = item[1].image;
  heart(i);
});
