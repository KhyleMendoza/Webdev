function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}

const calcBtn = document.getElementById("calc");
calcBtn.addEventListener("click", function() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let error = document.getElementById("error");
    let bmiP = document.getElementsByClassName("bmi");
    let bmiV = document.getElementById("bmi");
    
    if (!weight || !height) {
        error.style.display = "block";
        bmiP[0].style.display = "none";

        console.log("a")
        return;
    } else {
        error.style.display = "none";
        var bmi = bmiCalculator(65, 1.8)
        var bmi = bmiCalculator(weight, height)
        bmiV.innerText = bmi.toFixed(2);
        bmiP[0].style.display = "flex";
    }
});
