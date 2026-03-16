function predict() {
  let fileInput = document.getElementById('upload');
  let symptoms = document.getElementById('symptoms').value;
  let result = document.getElementById('result');

  if(fileInput.files.length === 0 || symptoms === "") {
    result.innerText = "Please upload an image and enter symptoms!";
    return;
  }

  let diseases = ["Pneumonia", "Normal", "Tuberculosis"];
  let prediction = diseases[Math.floor(Math.random() * diseases.length)];

  result.innerText = `Predicted Disease: ${prediction}\nSymptoms: ${symptoms}`;
}
