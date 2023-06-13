 function calculateSum() {
    var x = parseInt(document.querySelector("#x").value);
    var y = parseInt(document.querySelector("#y").value);
  
    var sum = x + y;
  
    document.querySelector("#result").value = sum;
  }


function calculateBMI() {
    var weight = document.getElementById("weight").value
    var height = parseFloat(document.querySelector("#height").value);
  
    var bmi = weight / (height * height);
  
    document.querySelector("#weightOutput").value = weight + " kg";
    document.querySelector("#bmiOutput").value = getBMICategory(bmi);
  }
  
  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Optimum range";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }



  