const text = document.querySelector('.text');
const post = document.querySelector('.post');
const scrollable = document.querySelector('.scrollable');

post.addEventListener('click', () => {
    if (text.value.trim() !== ""){
        const newdiv = document.createElement('div');
        newdiv.classList.add('review');
        newdiv.textContent = text.value;

        scrollable.appendChild(newdiv);
        text.value = "";
    };
});
