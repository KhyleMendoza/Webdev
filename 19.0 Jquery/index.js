// jQuery("h1").css("color", "white")

// $(document).ready(function() {
//     $("h1").css("color", "white");
// })

// $("h1").css("color", "white");
// $("h1").css("font-size", "50px");
// console.log($("h1").css("color"));
// console.log($("h1").css("font-size"));

// $("button").css("backgroundColor", "#3440e9");
// $("button#red").css("color", "rgb(247, 24, 24)");
// $("button.blue").css("color", "#7b97d4");
// $("div button").css("color", "white");

// // add/remove class using jQuery
// $("h1").addClass("big-title margin-50")
// $("h1").removeClass("big-title margin-50")

$("h1").addClass("big-title margin-50")
// console.log($("h1").hasClass("big-title"))
// console.log($("h1").hasClass("big-title margin-50"))
// console.log($("h1").hasClass("big-title margin-30"))

var name = "Khyle";
$("button").html("<em>Don't click me!</em>")
$("div button").text(name + "Don't click me!")
$("h1").text(`Hello ${name}`)

console.log($("img").attr("src"));

setTimeout(function () {
    $("img").attr("src", "img/tom2.png")
    $("img").attr("alt", "tom2")
    console.log($("img").attr("src"));
}, 2000);

setTimeout(function() {
    $("a").attr("href", "https://youtube.com")
    $("a").text("Youtube")
}, 5000);

console.log($("div button").attr("class"))
$("div button").attr("class", "otherBtn2")
console.log($("div button").attr("class"))

// // add event listener
// $("h1").click(function() {
//     console.log("hello");
// })

// $("h1").click(() => {
//     console.log("hello");
//     $("h1").css("color", "#330799");
// })

// $("button").click(function() {
//     console.log("hi")
//     $("h1").css("color", "#248748")
// })

// $("button").click(() => {
//     console.log("hi")
//     $("h1").css("color", "#248748")
// })

// $("input").keydown(function(event) {
//     console.log(event.key);
// })

// $("input").keydown((e) => {
//     console.log(e.key)
// })

// let h1 = "";
// $("body").keydown((e) => {
//     console.log(e.key)
//     if (e.key.length === 1) {
//         h1 = h1 + e.key; 
//         $("h1").text(h1)
//     }
// })

// // event listener on
// $("h1").on("mouseover", function() {
//     $("h1").css("color", "#315092")
// })

$("h1").on("click", function() {
    $("h1").css("color", "#315092")
})