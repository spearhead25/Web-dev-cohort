const addbtn = document.querySelectorAll('.add-to-cart');
const price = document.querySelectorAll('.price');
const name = document.querySelectorAll('.Pname');
const cart = document.querySelector('.cart');
const total = document.getElementById('cart-total');
let count = 0;

addbtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const prodName = name[index].textContent;
        const prodPrice = price[index].textContent;
        const productImg = document.querySelectorAll('.product img')[index].src;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-items'); 

        cartItem.innerHTML = `
            <img src="${productImg}" alt="${prodName}" class="cart-img"> 
            ${prodName} : ${prodPrice}
        `;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');

        cartItem.appendChild(removeBtn);
        cart.appendChild(cartItem);

        count += parseFloat(prodPrice.replace(/[^0-9.]/g, ''));
        updateTotal();

        removeBtn.addEventListener('click', () => {
            cart.removeChild(cartItem);
            count -= parseFloat(prodPrice.replace(/[^0-9.]/g, ''));
            updateTotal();
        });
    });
});

function updateTotal() {
    total.textContent = `${count.toFixed(2)}`;
}
