const colorInput = document.getElementById("colorInput");
const addButton = document.getElementById("Add");
const colorList = document.getElementById("colorList");

addButton.addEventListener("click", function() {
    let colorCode = colorInput.value;
    if(!colorCode){
        alert("Wrong colour value entered");
        return;
    }

    createColorBtn(colorCode);
    handleClick(colorCode);
    colorInput.value = "";
});

function createColorBtn(color) {
    let colorButton = document.createElement("button");
    colorButton.textContent = color;
    colorButton.style.backgroundColor = color;
    colorButton.style.color = "#fff";

    function handleClick() {
        document.body.style.backgroundColor = color;
    }
    colorButton.addEventListener("click", handleClick);
    colorList.appendChild(colorButton);
}