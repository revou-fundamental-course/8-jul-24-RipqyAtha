
function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);
  const gender = document.getElementById("gender").value;

  if (!height || !weight || !gender) {
    alert("Tolong Diisi Secara Lengkap.");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);

  let resultText = `Hasil BMI Kamu adalah ${bmi}. `;

  if (bmi < 18.5) {
    resultText += "Kamu kekurangan berat badan.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultText += "Kamu mempunyai berat badan yang normal.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    resultText += "kamu kelebihan berat badan.";
  } else {
    resultText += "Kamu Obesitas.";
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerText = resultText;


  const resultCard = document.getElementById("result-card");
  resultCard.classList.remove("hidden");
  resultCard.classList.add("show");
}
