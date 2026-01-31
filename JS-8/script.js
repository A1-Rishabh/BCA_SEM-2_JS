const heading = document.getElementById('dom');
console.log(heading);
heading.style.color = 'blue';
heading.style.backgroundColor = 'lightgray';
heading.textContent = 'Hello india!!';
heading.style.border = '2px solid black';
heading.style.padding = '10px';
heading.style.textAlign = 'center';
heading.style.borderRadius = '100px';

const body = document.body;
body.style.margin = '0';
body.style.backgroundColor = '#e4df99ff';

const div = document.getElementById('box');
div.style.width = '300px';
div.style.height = '200px';
div.style.backgroundColor = 'pink';
div.style.margin = '20px auto';
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
div.style.borderRadius = '20px';

const subheading = document.getElementsByClassName('sub-heading');
console.log(subheading);
for(let i=0; i<subheading.length;i++){
    subheading[i].style.color = 'green';
    subheading[i].style.textAlign = 'center';
}