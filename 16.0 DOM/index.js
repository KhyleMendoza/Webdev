// alert("Hello")
// document.querySelector("h1").innerHTML = "Good Bye";
// document.write("Hi")
// console.log(document.firstElementChild.lastElementChild.firstElementChild)
document.querySelector("input").click();

let changeColor = document.getElementById("click");
changeColor.addEventListener("click", function() {
    // console.log("Clicked");
    let circle = document.getElementsByClassName("circle");
    let circleP = document.getElementById("circleP")
    circle[0].style.backgroundColor = "red";
    circleP.innerText = "Red"
})

li = document.getElementsByTagName("li")[1];
li.style.color = "green";


document.querySelectorAll("li")[2].innerText = "Khyle";
document.getElementsByClassName("btn")[0].style.backgroundColor = "cyan";

document.querySelector("li a").style.color = "orange"

document.querySelector(".container p").style.color = "orange";

let paragraph = document.querySelectorAll(".container p");
paragraph[2].style.color = "Green";
paragraph[3].style.backgroundColor = "lightblue";
alert(paragraph[1].innerText)