// Пример работы с корзиной
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartLink = document.querySelector('a[href="cart.html"]');
    cartLink.textContent = `Корзина (${cart.length})`;
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const title = product.querySelector('h3').textContent;
        const price = product.querySelector('.price').textContent;
        const img = product.querySelector('img').src;

        cart.push({ title, price, img });

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert(`${title} добавлен в корзину!`);
    });
});

// Обновить счётчик при загрузке
updateCartCount();