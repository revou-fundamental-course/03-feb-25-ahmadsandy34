// Deklarasi variabel
// Variabel untuk menyimpan suhu awal
let degreeNow = "Celsius";

// Variabel untuk mengubah teks
let inputLabel = document.getElementById("input-label");
let resultLabel = document.getElementById("result-label");
let introOne = document.getElementById("intro-one");
let introTwo = document.getElementById("intro-two");
let subOne = document.getElementById("sub-one");
let subTwo = document.getElementById("sub-two");
let articleOne = document.getElementById("article-one");
let articleTwo = document.getElementById("article-two");
let formulaOne = document.getElementById("formula-one");
let formulaTwo = document.getElementById("formula-two");
let formulaThree = document.getElementById("formula-three");

// Variabel untuk menyimpan input, hasil, dan cara kalkulasi
let input = document.getElementById("main-input");
let result = document.getElementById("main-result");
let display = document.getElementById("main-display");

// Fungsi di tombol konversi
function convert(event) {
  event.preventDefault();
  if (input.value == "") {
    alert("Masukkan angka terlebih dahulu");
    return;
  }

  if (degreeNow == "Celsius") {
    let hasil = parseInt(input.value) * 1.8 + 32;
    result.value = Math.round(hasil);
    display.value = `(${input.value}°C × 1.8) + 32 = ${result.value}°F`;
  } else {
    let hasil = (parseInt(input.value) - 32) / 1.8;
    result.value = Math.round(hasil);
    display.value = `(${input.value}°F - 32) / 1.8 = ${result.value}°C`;
  }
}

// Fungsi di tombol reset
function reset(event) {
  event.preventDefault();
  input.value = "";
  result.value = "";
  display.value = "";
}

// Fungsi di tombol reverse
function reverse(event) {
  event.preventDefault();
  if (degreeNow == "Celsius") {
    degreeNow = "Fahrenheit";

    inputLabel.textContent = "Fahrenheit(°F)";
    resultLabel.textContent = "Celsius(°C)";

    introOne.textContent = "Fahrenheit(°F)";
    introTwo.textContent = "Celsius(°C)";

    subOne.textContent = "Fahrenheit(°F)";
    subTwo.textContent = "Celsius(°C)";

    articleOne.textContent = "Celsius(°C)";
    articleTwo.textContent = "Fahrenheit(°F)";

    formulaOne.innerHTML = `dikurangi <span class="remark">32</span> kali <span class="remark">5/9</span>.`;

    formulaTwo.innerHTML = `<span class="remark">S</span><sub>(&deg;C)</sub> = (<span class="remark">S</span><sub>(&deg;F)</sub> - <span class="remark">32</span>) &times; <span class="remark">5/9</span>`;

    formulaThree.innerHTML = `<span class="remark">S</span><sub>(&deg;C)</sub> = (<span class="remark">S</span><sub>(&deg;F)</sub> - <span class="remark">32</span>) / <span class="remark">1.8</span>`;
  } else {
    degreeNow = "Celsius";

    inputLabel.textContent = "Celsius(°C)";
    resultLabel.textContent = "Fahrenheit(°F)";

    introOne.textContent = "Celsius(°C)";
    introTwo.textContent = "Fahrenheit(°F)";

    subOne.textContent = "Celsius(°C)";
    subTwo.textContent = "Fahrenheit(°F)";

    articleOne.textContent = "Fahrenheit(°F)";
    articleTwo.textContent = "Celsius(°C)";

    formulaOne.innerHTML = `dikali <span class="remark">9/5</span> tambah <span class="remark">32</span>.`;

    formulaTwo.innerHTML = `<span class="remark">S</span><sub>(&deg;F)</sub> = (<span class="remark">S</span><sub>(&deg;C)</sub> &times; <span class="remark">9/5</span>) + <span class="remark">32</span>`;

    formulaThree.innerHTML = `<span class="remark">S</span><sub>(&deg;F)</sub> = (<span class="remark">S</span><sub>(&deg;C)</sub> &times; <span class="remark">1.8</span>) + <span class="remark">32</span>`;
  }
}

