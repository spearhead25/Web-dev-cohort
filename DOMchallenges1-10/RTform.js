const nameInput = document.getElementById("name");
const titleInput = document.getElementById("title");
const ageInput = document.getElementById("age");
const bioInput = document.getElementById("Bio");
const btn = document.getElementById("clear");

const preview = document.querySelector(".preview");
preview.innerHTML = `
    <h2>Profile Preview</h2>
    <p><strong>Name:</strong> <span id="preview-name"></span></p>
    <p><strong>Job Title:</strong> <span id="preview-title"></span></p>
    <p><strong>Age:</strong> <span id="preview-age"></span></p>
    <p><strong>Bio:</strong> <span id="preview-bio"></span></p>
`;

function updatePreview() {
    document.getElementById("preview-name").textContent = nameInput.value.trim() || "Not provided";
    document.getElementById("preview-title").textContent = titleInput.value.trim() || "Not provided";
    document.getElementById("preview-age").textContent = ageInput.value.trim() || "Not provided";
    document.getElementById("preview-bio").textContent = bioInput.value.trim() || "Not provided";
}

nameInput.addEventListener("input", updatePreview);
titleInput.addEventListener("input", updatePreview);
ageInput.addEventListener("input", updatePreview);
bioInput.addEventListener("input", updatePreview);

btn.addEventListener('click', () => {
    preview.innerHTML = `
    <h2>Profile Preview</h2>
    <p><strong>Name:</strong> <span id="preview-name"></span></p>
    <p><strong>Job Title:</strong> <span id="preview-title"></span></p>
    <p><strong>Age:</strong> <span id="preview-age"></span></p>
    <p><strong>Bio:</strong> <span id="preview-bio"></span></p>
`;
});

