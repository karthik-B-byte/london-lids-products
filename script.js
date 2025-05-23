
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const container = document.getElementById("productContainer");

  fetch("products.json")
    .then(res => res.json())
    .then(products => {
      container.innerHTML = products.map(product => `
        <div class="product-card">
          <h3>${product.name}</h3>
          <p><strong>Category:</strong> ${product.category}</p>
          <p>${product.description}</p>
          <p><strong>Pack Size:</strong> ${product.pack_size}</p>
        </div>
      `).join("");
    });

  searchInput.addEventListener("keyup", function () {
    const searchTerm = this.value.toLowerCase();
    document.querySelectorAll(".product-card").forEach(card => {
      card.style.display = card.textContent.toLowerCase().includes(searchTerm) ? "" : "none";
    });
  });
});
