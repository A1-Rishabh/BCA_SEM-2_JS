// const nameInput=document.getElementById("myInput");
// nameInput.addEventListener("change",()=>{document.getElementById("output").textContent="Change detected!";console.log(nameInput.value)})
const nameInput=document.getElementById("myInput");
const form=document.getElementById("myForm")
const courseInput=document.getElementById("Course");

const output=document.getElementById("output");
// courseInput.addEventListener("change",()=>{
//     console.log(course.value);
//     output.textContent=nameInput.value
//     output.textContent=course.value
// });
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const name = nameInput.value;
    const course=courseInput.value;
    console.log(name,course);
    output.textContent=name+course;
})