function bmiCalculator(weight, height) {
    // var bmi = weight / (height * height);
    var bmi = weight / Math.pow(height, 2);
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
        return;
    } else {
        error.style.display = "none";
        // var bmi = bmiCalculator(65, 1.8)
        var bmi = bmiCalculator(weight, height)
        bmiV.innerText = bmi.toFixed(2);
        bmiP[0].style.display = "flex";

        if (bmi < 18.5) {
            var interpretation = "you are underweight";
        } else if (bmi >= 18.5 && bmi <=24.9) {
            var interpretation = "you are normal weight";
        } else if (bmi > 24.9) {
            var interpretation = "you are overweight";
        }
        // console.log(interpretation)
        let result = document.getElementById("result");
        result.innerText = interpretation;
    }
});
