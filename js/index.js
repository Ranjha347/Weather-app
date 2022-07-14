
let btn =  document.getElementById('btn');
let input = document.getElementById('search')

// https://api.openweathermap.org/data/2.5/weather?q=London&appid=5c1b450cabe0a7fe8873af77de7912c5
let key = '5c1b450cabe0a7fe8873af77de7912c5';
function myFunction(){
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=5c1b450cabe0a7fe8873af77de7912c5`)
   .then((e)=>e.json())
   .then(e=>console.log(e))
}



btn.addEventListener('click',myFunction)