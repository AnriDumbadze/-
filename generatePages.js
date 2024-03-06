document.addEventListener("DOMContentLoaded", function() {
  const productContainer = document.getElementById('product-container');


  function generateProductPage(product) {
    const productPage = document.createElement('div');
    productPage.innerHTML = `
      <h2>${product.name}</h2>
      <img src='${product.image}'/> 
      <a href="product_${product.id}.html">View Product Details</a>
    `;
    return productPage;
  }

 
  products.forEach(product => {
    const productPage = generateProductPage(product);
    productContainer.appendChild(productPage);
  });
});
