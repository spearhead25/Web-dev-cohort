const display = document.getElementById('display');
const buttons = document.querySelectorAll('.operator, .btn, .equal, .clear, .backspace');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('equal')) {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } 
        else if (button.classList.contains('backspace')) {
            display.value = display.value.slice(0, -1);
        } 
        else if (button.classList.contains('clear')) {
            display.value = "";
        } 
        else {
            display.value += button.innerText;
        }
    });
});
