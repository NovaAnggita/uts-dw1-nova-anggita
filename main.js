// script.js

// Keranjang Produk
let cart = [];

// Update jumlah keranjang di header
function updateCart() {
    const cartCount = document.getElementById('cart-btn');
    cartCount.textContent = `Keranjang (${cart.length})`;
}

// Menambahkan produk ke keranjang
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.closest('.product-item').dataset.productId;
        const productName = this.closest('.product-item').querySelector('h3').textContent;
        const productPrice = this.closest('.product-item').querySelector('p').textContent;

        // Menambah produk ke keranjang
        cart.push({ id: productId, name: productName, price: productPrice });
        updateCart();
    });
});

// Menampilkan modal keranjang
document.getElementById('cart-btn').addEventListener('click', function() {
    const cartModal = document.getElementById('cart-modal');
    const cartItemsList = document.getElementById('cart-items');

    // Menampilkan daftar produk di keranjang
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}`;
        cartItemsList.appendChild(li);
    });

    cartModal.style.display = 'flex';
});

// Menutup modal keranjang
document.getElementById('close-cart-btn').addEventListener('click', function() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
});

// Checkout
document.getElementById('checkout-btn').addEventListener('click', function() {
    alert('Pembayaran Sukses! Terima kasih telah berbelanja.');
    cart = []; // Kosongkan keranjang setelah checkout
    updateCart();
    document.getElementById('cart-modal').style.display = 'none';
});
