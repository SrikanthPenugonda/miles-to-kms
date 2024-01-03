const mileToKmBtn = document.getElementById('mileToKmBtn');
const kmToMileBtn = document.getElementById('kmToMileBtn');

mileToKmBtn.addEventListener('click', convertMilesToKm);
kmToMileBtn.addEventListener('click', convertKmToMiles);

function convertMilesToKm() {
  const mileInput = parseFloat(document.getElementById('mileInput').value);
  const kmInput = mileInput * 1.60934;
  document.getElementById('kmInput').value = kmInput.toFixed(2);
}

function convertKmToMiles() {
  const kmInput = parseFloat(document.getElementById('kmInput').value);
  const mileInput = kmInput / 1.60934;
  document.getElementById('mileInput').value = mileInput.toFixed(2);
}
