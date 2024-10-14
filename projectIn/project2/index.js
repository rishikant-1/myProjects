let month = document.querySelector('.month')
let day = document.querySelector('.day')
let date = document.querySelector('.date')
let year = document.querySelector('.year')

function calender(){
  let currentDate= new Date()
year.innerText=currentDate.getFullYear()
let getDay= currentDate.getDate()
date.innerText=getDay;
month.innerText=currentDate.toLocaleString('en',{
  month: 'long'
})
day.innerText=currentDate.toLocaleString('en',{
  weekday: 'long'
})
}
calender();