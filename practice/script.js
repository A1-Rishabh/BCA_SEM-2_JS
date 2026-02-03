const box = document.getElementById('box');
box.style.width = '200px';
box.style.height = '200px';
box.style.backgroundColor = 'lightblue';
box.style.margin = '50px auto';
box.style.borderRadius = '50px';
box.style.display = 'flex';
box.style.justifyContent = 'center';
box.style.alignItems = 'center';
box.animate(
    [
        {transform: 'rotate(0deg)'},
        {transform: 'rotate(360deg)'}
    ],
    {
        duration: 3000,
        iterations: Infinity
    }
);  

const boady = document.body;
boady.style.margin='0';
boady.style.backgroundColor = 'black';

const heading = document.getElementById('heading');
heading.style.color = 'white';
heading.style.textAlign = 'center';
heading.style.fontFamily = 'Arial, sans-serif';
heading.textContent = 'Rotating Box Animation';