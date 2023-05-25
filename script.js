document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const addToWishlistButtons = document.querySelectorAll('.add-to-wishlist');
  const cartItems = document.getElementById('cart-items');
  const wishlistItems = document.getElementById('wishlist-items');
  const orderForm = document.getElementById('order-form');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const product = this.parentNode;
      const productName = product.querySelector('h3').innerText;
      const cartItem = document.createElement('li');
      cartItem.innerText = productName;
      cartItems.appendChild(cartItem);
    });
  });

  addToWishlistButtons.forEach(button => {
    button.addEventListener('click', function() {
      const product = this.parentNode;
      const productName = product.querySelector('h3').innerText;
      const wishlistItem = document.createElement('li');
      wishlistItem.innerText = productName;
      wishlistItems.appendChild(wishlistItem);
    });
  });

  orderForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const orderDetails = {
      name: name,
      email: email,
      cartItems: Array.from(cartItems.children).map(item => item.innerText),
      wishlistItems: Array.from(wishlistItems.children).map(item => item.innerText)
    };
    console.log(orderDetails);
    // You can handle the order details here (e.g., send them to a server for processing)
  });
});
