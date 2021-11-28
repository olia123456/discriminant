const ina = document.querySelector("#a");
const inb = document.querySelector("#b");
const inc = document.querySelector("#c");
const calculate = document.querySelector("#calculate");
const contaner = document.querySelector(".contaner");
const title = document.querySelector(".title");

calculate.addEventListener("click", () => {
  let a = +ina.value;
  let b = +inb.value;
  let c = +inc.value;
  let rezult = 0;
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) rezult = NaN;
  else {
    d = Math.sqrt(d);
    x1 = (-b - d) / 2 / a;
    x2 = (-b + d) / 2 / a;
    rezult = { x1, x2 };
  }
  if (rezult)
    title.textContent = `x1=${rezult.x1.toFixed(2)} x2=${rezult.x2.toFixed(2)}`;
  else title.textContent = `РЕШЕНИЙ НЕТ`;
});
