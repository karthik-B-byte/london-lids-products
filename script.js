// script.js

const products = [
  {
    name: "NO 2 GOLD",
    category: "Aluminium Foil Container",
    description: "Heavy-duty aluminium container, 5x4x2 inches, ideal for hot meals and food delivery. Recyclable and oven-safe.",
    pack_size: "1000"
  },
  {
    name: "500ML Black Base",
    category: "Microwave Plastic Container",
    description: "Durable black plastic container with secure fit, microwave and freezer safe. Ideal for takeaway.",
    pack_size: "150"
  },
  {
    name: "SALAD 1000 ML",
    category: "Salad Container",
    description: "Crystal-clear plastic container for cold foods like salads and desserts. Size: 166x174x73 mm. Pack of 400.",
    pack_size: "400"
  },
  {
    name: "2oz Sauce Cup (Hinged)",
    category: "Sauce Cups",
    description: "Plastic sauce cup with hinged lid. Ideal for dips and condiments. Microwave and freezer-safe.",
    pack_size: "1000"
  },
  {
    name: "12oz Double-Wall Cup",
    category: "Paper Cups",
    description: "Ripple-wall paper cup in black or brown, suitable for hot beverages. Pair with sip-through lid.",
    pack_size: "500"
  }
];

function groupByCategory(items) {
  return items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});
}

function renderCatalog(productsToRender) {
  const catalog = document.getElementById('catalog');
  catalog.innerHTML = '';

  const grouped = groupByCategory(productsToRender);

  for (const [category, items] of Object.entries(grouped)) {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');

    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = category;
    categoryTitle.classList.add('expandable');
    categoryTitle.addEventListener('click', () => {
      productList.classList.toggle('open');
    });
    categoryDiv.appendChild(categoryTitle);

    const productList = document.createElement('ul');
    productList.classList.add('product-list');

    items.forEach(product => {
      const productLi = document.createElement('li');
      productLi.classList.add('product');

      const productName = document.createElement('h3');
      productName.textContent = product.name;
      productName.classList.add('expandable');
      productName.addEventListener('click', () => {
        detailsDiv.classList.toggle('open');
      });
      productLi.appendChild(productName);

      const detailsDiv = document.createElement('ul');
      detailsDiv.classList.add('details');

      const descLi = document.createElement('li');
      descLi.textContent = product.description;
      detailsDiv.appendChild(descLi);

      const packLi = document.createElement('li');
      packLi.textContent = `Pack Size: ${product.pack_size}`;
      detailsDiv.appendChild(packLi);

      productLi.appendChild(detailsDiv);
      productList.appendChild(productLi);
    });

    categoryDiv.appendChild(productList);
    catalog.appendChild(categoryDiv);
  }
}

function filterProducts(query) {
  query = query.trim().toLowerCase();
  if (!query) return products;

  return products.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.category.toLowerCase().includes(query)
  );
}

function init() {
  const searchInput = document.getElementById('searchInput');

  renderCatalog(products);

  searchInput.addEventListener('input', () => {
    const filtered = filterProducts(searchInput.value);
    renderCatalog(filtered);
  });
}

document.addEventListener('DOMContentLoaded', init);

// script.js — London Lids full product catalog
// Please paste final script manually
