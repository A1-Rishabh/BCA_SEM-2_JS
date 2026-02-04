const query = document.querySelector("#container p")
console.log(query);
query.style.color="red";
query.style.fontStyle="italic";
query.textContent="This paragraph is selected using query selector";
query.style.textAlign="center";
query.style.fontFamily="kalam";
query.style.cursor="pointer";

const query2= document.querySelector("#container h1");
console.log(query2);
query2.style.color="blue";
query2.style.textAlign="center";
query2.textContent="This heading is selected using query selector";
query2.style.fontFamily="Arial, sans-serif";

const box= document.getElementById('container');
box.style.width="400px";
box.style.height="300px";
box.style.backgroundColor="cyan"
// box.style.display="flex";
box.style.justifyContent="center";
box.style.alignItems="center";
box.style.borderRadius="30px";  
box.style.margin="50px auto";
box.style.padding="20px";

const query3= document.querySelectorAll("#container p");
console.log(query3);
for(let i=0;i<query3.length;i++){
    query3[i].style.backgroundColor="yellow";
    query3[i].style.textAlign="center";

}
