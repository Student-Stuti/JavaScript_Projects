const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  console.log(height);
  const weight = parseInt(document.querySelector("#weight").value);
  console.log(weight);
  const results = document.querySelector("#results");

  if (height === " " || height < 0 || isNaN(height)) {
    console.log(height);
    results.innerHTML = `please enter valid height ${height}`;
  } else if (weight === " " || weight < 0 || isNaN(weight)) {
    console.log(weight);
    results.innerHTML = `please enter valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show results
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
