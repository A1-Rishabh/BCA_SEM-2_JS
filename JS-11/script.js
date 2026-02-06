function handleClick() {
  // document.querySelector("#head").style.color = "red";
  // document.querySelector("#head").style.fontStyle = "italic";
  // setTimeout(() => {
  //     document.querySelector("#head").style.color = "black";
  //     document.querySelector("#head").style.fontStyle = "normal";
  //     document.getElementById("bttn").textContent = "Click Me";
  // }, 2000);
  // document.getElementById("bttn").textContent = "Clicked!";

  const image = document.createElement("img");
  image.setAttribute("src", "");
  image.setAttribute("alt", "Image not found");
  document.getElementById("content").appendChild(image);
}
