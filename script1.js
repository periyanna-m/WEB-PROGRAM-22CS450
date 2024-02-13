const products = {
    product1: {
      name: 'Fruits',
      price: 20,
      image: 'images 1.jpeg'
    },
    product2: {
      name: 'Toys',
      price: 30,
      image: 'image 4.jpeg'
    },
    product3: {
      name: 'Electronics',
      price: 25,
      image: 'images 2.jpg'
    },
    product4: {
      name: 'Groceries',
      price: 40,
      image: 'images 3.jpeg'
    },
    product5: {
      name: 'Furniture',
      price: 35,
      image: 'images 4.jpeg'
    },
    product6: {
      name: 'Dresses',
      price: 22,
      image: 'images 5.jpeg'
    }
  };
  
  const cart = [];
  let currentProduct;
  
  document.querySelectorAll('.product').forEach(function(product) {
    product.addEventListener('click', function() {
      showProductDetails(products[product.id]);
    });
  
    product.addEventListener('mouseover', function() {
      product.style.backgroundColor = '#e6e6e6';
    });
  
    product.addEventListener('mouseout', function() {
      product.style.backgroundColor = '';
    });
  
    product.addEventListener('mousedown', function() {
      product.style.transform = 'scale(0.95)';
    });
  
    product.addEventListener('mouseup', function() {
      product.style.transform = 'scale(1)';
    });
  
    product.addEventListener('contextmenu', function(event) {
      event.preventDefault();
      alert(`Right-clicked on ${products[product.id].name}`);
    });
  
    product.addEventListener('dblclick', function() {
      alert(`Double-clicked on ${products[product.id].name}`);
    });
  });
  
  document.getElementById('addToCartBtn').addEventListener('click', function() {
    addToCart(currentProduct);
  });
  
  document.getElementById('checkoutBtn').addEventListener('click', function() {
    checkout();
  });
  
  function showProductDetails(product) {
    const productDetails = document.getElementById('productDetails');
    const productImage = document.getElementById('productImage');
    const productNameElement = document.getElementById('productName');
    const productPriceElement = document.getElementById('productPrice');
  
    productImage.src = product.image;
    productNameElement.textContent = product.name;
    productPriceElement.textContent = `$${product.price}`;
    productDetails.style.display = 'block';
  
    currentProduct = product;
  }
  
  function addToCart() {
    if (currentProduct) {
      const existingItem = cart.find(item => item.name === currentProduct.name);
  
      if (!existingItem) {
        cart.push({ ...currentProduct, quantity: 1 });
      } else {
        existingItem.quantity += 1;
      }
  
      showProductDetails(currentProduct);
      updateCart();
    }
  }
  
  function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    cartItems.innerHTML = '';
  
    let total = 0;
  
    cart.forEach(function(item) {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
      cartItems.appendChild(listItem);
      total += item.price * item.quantity;
    });
  
    cartTotal.textContent = `$${total.toFixed(2)}`;
    document.getElementById('cart').style.display = 'block';
  }
  
  function checkout() {
    alert('Checkout completed! Thank you for shopping with us.');
    cart.length = 0;
    updateCart();
    document.getElementById('cart').style.display = 'none';
  }
 