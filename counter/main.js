const counterValue = document.querySelector(".counter-value");
const buttons = document.querySelectorAll("button");
let counterUpdatedValue = 0;

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.className === "decrease") {
      counterUpdatedValue -= 1;
      counterValue.innerText = `Count value = ${counterUpdatedValue}`;
    } else if (element.className === "reset") {
      counterUpdatedValue = 0;
      counterValue.innerText = `Count value = ${counterUpdatedValue}`;
    } else {
      counterUpdatedValue += 1;
      counterValue.innerText = `Count value = ${counterUpdatedValue}`;
    }
  });
});
