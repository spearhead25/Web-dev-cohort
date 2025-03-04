const bulb = document.getElementById("bulb");
const toggle = document.getElementById("toggle");

toggle.addEventListener('click', () => {
     if(toggle.textContent.trim() === "Turn-On"){
            toggle.textContent = "Turn-Off";
            toggle.style.backgroundColor = "red";
            document.body.style.backgroundColor = "white";
            bulb.style.filter = "brightness(2)"; 
            bulb.style.boxShadow = "0px 0px 50px 20px rgba(255, 223, 0, 0.8)";
     } else {
        toggle.textContent = "Turn-On";
        toggle.style.backgroundColor = "green";
        document.body.style.backgroundColor = "black";
        bulb.style.filter = "invert(60%) sepia(10%) saturate(10%) brightness(80%)";
        bulb.style.boxShadow = "none";
     }
});




