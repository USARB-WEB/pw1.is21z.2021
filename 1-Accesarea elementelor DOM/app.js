document.addEventListener("DOMContentLoaded", () => {
    const students = document.querySelectorAll("li");
    console.log(students);
    
    let i = 1;
    for (const student of students) {
        if(i % 2 === 0){
            student.style.backgroundColor = "red";
        }
        i++;    
    }
    
    
    const button = document.getElementById("clickMeButton");
    button.innerHTML = "Click me";
    button.addEventListener("click", () => {
        document.body.style.backgroundColor = "green";
    });
})
