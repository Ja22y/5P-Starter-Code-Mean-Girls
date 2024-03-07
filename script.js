 let button = document.querySelector(".submit");
let result = document.querySelector(".result");

button.onclick = function() {
    let answer1 = Number(document.querySelector(".answer1").value);
    let answer2 = document.querySelector(".answer2").value;
console.log(answer1);
    if (answer1 > 5 && answer2 === "Pants") {
    result.innerHTML = " You're Janis Ian";
} else if (answer1 <= 5 && answer2 === "Pants") {
    result.innerHTML = " you're Cady Heron";
             }
     if (answer1 < 5 && answer2 === "Skirt") {
        result.innerHTML = "Caren Smith";
    } else if (answer1 <= 5 && answer2 === "Skirt") {
        result.innerHTML = " You're Regina George";  
 }
};