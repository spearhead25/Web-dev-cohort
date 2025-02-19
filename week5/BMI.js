const first = document.getElementsByClassName('in')[0];  
const second = document.getElementsByClassName('ins')[0]; 
const calcu = document.getElementsByClassName('calculate')[0];

const reset = document.createElement('button');
reset.innerText = "Reset";
reset.classList.add('reset-button');
reset.style.display = "none";
calcu.parentNode.appendChild(reset);

calcu.addEventListener('click',() => {
    const weight = parseFloat(first.value);
    const height = parseFloat(second.value);

    const heightMeters = height * 0.3048;
    const bmi = weight/ (heightMeters * heightMeters);

    calcu.textContent = `BMI: ${bmi.toFixed(2)}`;
    reset.style.display = "inline-block";
});

reset.addEventListener('click', function() {
    first.value = "";
    second.value = "";
    calcu.textContent = "Calculate BMI";
    reset.style.display = "none";
});

