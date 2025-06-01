fetch('Products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById("product-container");

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image" />
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">Rs. ${product.price}</p>
        <a href="https://wa.me/+94719478895" class="whatsapp-button" target="_blank">
          Chat with us on <br> WhatsApp
        </a>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading products:", error);
  });
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
