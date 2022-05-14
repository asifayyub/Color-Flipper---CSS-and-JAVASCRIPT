const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
 

const btn = document.getElementById('btn');
const color = document.querySelectorAll('color');

btn.addEventListener("click", function (){
let RandomNumber = RandomNumberGenerator();
document.body.style.background =  colors[RandomNumber];
color.textContent = colors[RandomNumber];
});

function RandomNumberGenerator() {
    return Math.floor( Math.random()*colors.length);
}
