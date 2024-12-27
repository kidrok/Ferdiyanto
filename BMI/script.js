function calculateBMI() {
  var heightInput = document.getElementById("height");
  var weightInput = document.getElementById("weight");
  var resultDiv = document.getElementById("result");

  var height = parseFloat(heightInput.value);
  var weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight)) {
    resultDiv.innerHTML = "masukan data sesuai dengan panduan";
    return;
  }

  var bmi = weight / (height / 100) ** 2;
  var category = "";

  if (bmi < 18.5) {
    category = "kurus";
  } else if (bmi < 25) {
    category = "Normal";
  } else if (bmi < 30) {
    category = "gemuk";
  } else {
    category = "Obes";
  }

  resultDiv.innerHTML = "BMI anda " + bmi.toFixed(2) + " (" + category + ")";
}
