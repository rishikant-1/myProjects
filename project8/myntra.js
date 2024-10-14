
let bagItem;
let item=[
    {
        id: '001',
        itemImage: 'images/saree.jpg',
        rating:{
            star: 4.5,
            review: 14,
        },
        itemName: 'US Polo Saree',
        itemQualty: 'Pure silk saree',
        price: '599',
        localPrice: '999',
        discount: '30',
    },
    {
        id: '002',
        itemImage: 'images/saree.jpg',
        rating:{
            star: 4.5,
            review: 14,
        },
        itemName: 'US Polo Saree',
        itemQualty: 'Pure silk saree',
        price: '599',
        localPrice: '699',
        discount: '30',
    },
    {
        id: '003',
        itemImage: 'images/saree.jpg',
        rating:{
            star: 4.5,
            review: 14,
        },
        itemName: 'US Polo Saree',
        itemQualty: 'Pure silk saree',
        price: '599',
        localPrice: '800',
        discount: '30',
    },
    {
        id: '004',
        itemImage: 'images/saree.jpg',
        rating:{
            star: 4.5,
            review: 14,
        },
        itemName: 'US Polo Saree',
        itemQualty: 'Pure silk saree',
        price: '599',
        localPrice: '2000',
        discount: '30',
    },
    {
        id: '005',
        itemImage: 'images/saree.jpg',
        rating:{
            star: 4.5,
            review: 14,
        },
        itemName: 'US Polo Saree',
        itemQualty: 'Pure silk saree',
        price: '599',
        localPrice: '802',
        discount: '30',
    }
]
onload()

function onload(){
    let bagstr= localStorage.getItem('bagItems');
    bagItem= bagstr ? JSON.parse(bagstr) : [];
    showDisplay();
    cartDisplay();
}
function display(Itemid){
    bagItem.push(Itemid)
    localStorage.setItem( 'bagItems', JSON.stringify(bagItem) );
    cartDisplay()
}
function cartDisplay(){
    let cartValue= document.querySelector('.itemCount');
    if(bagItem.length > 0){ 
        cartValue.style.visibility='visible';
        cartValue.innerText=bagItem.length;
    }else{
        cartValue.style.visibility='hidden';
    }
}
function showDisplay(){
    let cartItem= document.querySelector('.cartList');
    if(!cartItem){
        return;
    }
    let innerHTML='';
    item.forEach(cardArray=>{
    innerHTML +=`<div class="myntraCart">
    <div class="card">
        <div class="image">
        <img src="${cardArray.itemImage}" alt="man">
        <p class="rating"> ${cardArray.rating.star}* ${cardArray.rating.review}</p>
    </div>
        <div class="desc">
            <h3>${cardArray.itemName}</h3>
            <p>${cardArray.itemQualty}</p>
        </div>
            <span class="price">Rs${cardArray.price}</span>
            <span class="localPrice">Rs${cardArray.localPrice}</span>
            <span class="discount">(${cardArray.discount}% oFF)</span>
        <div class="btnBox">
            <button class="btn" onclick="display(${cardArray.id})">Add to wishlist</button>
        </div>
    </div>`;
});
cartItem.innerHTML=innerHTML;
}
let sliderImage =[
    {Image: 'images/www.webp' },
    {Image: 'images/image4.webp' },
    {Image: 'images/image5.webp' },
    {Image: 'images/image6.webp' },
    {Image: 'images/image1.webp' },
    {Image: 'images/image3.webp' },
    {Image: 'images/image2.webp' },
]

function showSlider(){
    let innerHTML='';
    let sliderEliment= document.querySelector('.slider')
    sliderImage.forEach(obj=>{
    innerHTML +=`    
    <img src="${obj.Image}" alt="" class="sliderImage">`;
} )
document.querySelector('.slider').innerHTML = innerHTML;
}
showSlider()
const currentSlide = '';
function sliders(){
}
sliders()


   
