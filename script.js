// Filter products by price
document.getElementById('price-filter').addEventListener('change', function () {
    const selected = this.value;
    const products = [...document.querySelectorAll('.product-card')];

    if (selected === 'low') {
        products.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
    } else if (selected === 'high') {
        products.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
    }

    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    products.forEach(product => grid.appendChild(product));
});

// Simple Add to Cart Action
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
