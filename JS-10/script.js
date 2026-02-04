const head=document.getElementById("heading");
// head.innerHTML="<i>New Heading</i>"
console.log(head.innerHTML);//it will only show all the text with its tags
console.log(head.textContent);//it will show the text with the html tags    
console.log(head.innerText);//it will show the visible text without html tags

//creating element and set its content
const para=document.createElement("p");
para.textContent="This is a new paragraph created using JS.";
console.log(para.textContent);


//Append the new element to the contsiner
const contain=document.getElementById("container");
contain.appendChild(para);
console.log(contain.innerHTML);

//Modifying existing element
const subhead=document.getElementById("container").querySelector("p");
contain.removeChild(subhead);
console.log(contain.innerHTML);