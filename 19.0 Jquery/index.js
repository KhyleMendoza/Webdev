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
