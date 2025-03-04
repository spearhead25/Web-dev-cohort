const head = document.getElementById("Change");
const buttons = document.querySelectorAll(".switch");
const reset = document.getElementById("reset");

buttons.forEach((button) => {
      button.addEventListener('click', () => {
          let text = button.innerHTML;
          head.style.color = text;
      });
});

reset.addEventListener('click', () => {
    head.style.color = "black";
});

