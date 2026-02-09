const box = document.getElementById('box');
box.style.width = '200px';
box.style.height = '200px';
box.style.backgroundColor = 'lightblue';
box.style.margin = '50px auto';
box.style.borderRadius = '50px';
box.style.display = 'flex';
box.style.justifyContent = 'center';
box.style.alignItems = 'center';
// box.animate(
//     [
//         {transform: 'rotate(0deg)'},
//         {transform: 'rotate(360deg)'}
//     ],
//     {
//         duration: 3000,
//         iterations: Infinity
//     }
// );  

const boady = document.body;
boady.style.margin='0';
boady.style.backgroundColor = 'black';

const heading = document.getElementById('heading');
heading.style.color = 'white';
heading.style.textAlign = 'center';
heading.style.fontFamily = 'Arial, sans-serif';
heading.textContent = 'Rotating Box Animation';

const button = document.getElementById('bttn');
button.style.display = 'block';
button.style.margin = '20px auto';
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.cursor = 'pointer';
// button.addEventListener('click', () => {
//     alert('Button clicked!');
// });
animateBox = () => {
    box.animate(
        [{transform: 'rotate(0deg)'},
        {transform: 'rotate(360deg)'}
    ],
    {
        duration: 3000,
        iterations: 1,
        easing: 'ease-in-out'
    }
    
); 
document.getElementById("bttn").textContent = "Animation started!";
document.getElementById('box').style.backgroundColor = 'Red';
setTimeout(() => {
    document.getElementById("bttn").textContent = "Click Me";
    document.getElementById('box').style.backgroundColor = 'lightblue';
}, 3000);
}