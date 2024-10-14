const convinence_fee = 99;
let bagItemObjects;
onload();
function onload(){
    loadBagItemImage()
    onDisplay()
    container2()
}
function loadBagItemImage(){
    console.log(bagItem);
    bagItemObjects= bagItem.map(itemId=>{
        for(let i=0; i<item.length; i++){
            if(itemId==item[i].id){
                return item[i];
            }
        }
    })
}
function onDisplay(){
    let innerHTML='';
    let containerElement= document.querySelector('.mainContainer');
    bagItemObjects.forEach(bagItem =>{
     innerHTML += genricHtml(bagItem);
    });
    containerElement.innerHTML=innerHTML;
}
function removeItem(itemId){
    bagItem=bagItem.filter(bagItemId => bagItemId != itemId);
    localStorage.setItem( 'bagItems',  JSON.stringify(bagItem) );
    loadBagItemImage();
    cartDisplay()
    onDisplay();
    container2()
    // console.log(bagItem)
}
function genricHtml(item){
    return `<div class="containerItem">
    <img class="cartImage" src="${item.itemImage}" alt="">
    <div class="productDetail">
        <p class="brandName"> ${item.itemName}</p>
        <p class="t-shirt">${item.itemQualty}</p>
        <p class="returnPolicy"> ${item.price}
        <span class="localPrice">${item.localPrice}</span>
        <span class="returnPolicy">(${item.discount}% OFF)</span>
        </p>
       <p class="DaysAvailable">14 Days 
        <span class="returnItem">return available</span></p>
        
        <p class="returnPolicy">Item delevered on 
        <span class="deelTime">14th oct 2024</span>
        </p>
        
    </div>
    <i class="cross ri-close-large-fill" onclick='removeItem(${item.id})'></i></div>`;
}
function container2(){
    let containerElement2= document.querySelector('.container2');
    let itemSummery= bagItem.length;
    let totalMrp = '';
    let discountMrp =0;
        bagItemObjects.forEach(bagItem=>{
         totalMrp +=bagItem.localPrice;
        discountMrp += bagItem.localPrice - bagItem.price;
    }) 
    let totalAmount = discountMrp;
    containerElement2.innerHTML=`<p>PRICE DETAILS(${itemSummery} Item)</p>
    <div class="containerTotalPrice">
        <div class="productNames">
            <p>Total MRP</p>
            <p>Discount</p>
            <p>convinence fee</p>
        </div>
        <div class="bagPrice">
            <p>Rs ${totalMrp}</p>
            <p class="deelTime">Rs ${discountMrp}</p>
            <p>Rs 49</p>
        </div> 
    </div> 
    <div class="amount">
        <P>Total Amount</P>
        <p>Rs ${totalAmount}</p>
    </div>
    <button class="placeButton">PLACE ORDER</button>`;
}