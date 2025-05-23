document.addEventListener("DOMContentLoaded", () => {
  const data = [/* PLACEHOLDER: Your full product data array */];

  const catalog = document.getElementById("catalog");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  const renderCatalog = (filter = "", selectedCategory = "") => {
    catalog.innerHTML = "";
    data.forEach(({ category, products }) => {
      if (selectedCategory && category !== selectedCategory) return;

      const categoryDiv = document.createElement("div");
      categoryDiv.className = "category";
      const catHeader = document.createElement("h2");
      catHeader.textContent = category;
      catHeader.className = "expandable";
      categoryDiv.appendChild(catHeader);

      const productList = document.createElement("div");
      productList.className = "product-list";

      products.forEach(({ name, details }) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        const prodHeader = document.createElement("h3");
        prodHeader.textContent = name;
        prodHeader.className = "expandable";
        productDiv.appendChild(prodHeader);

        const detailList = document.createElement("div");
        detailList.className = "details";

        details.forEach(({ name, specs }) => {
          if (!filter || name.toLowerCase().includes(filter) || specs.some(s => s.toLowerCase().includes(filter))) {
            const detailDiv = document.createElement("div");
            const nameEl = document.createElement("h4");
            nameEl.textContent = name;
            const ul = document.createElement("ul");
            specs.forEach(s => {
              const li = document.createElement("li");
              li.textContent = s;
              ul.appendChild(li);
            });
            detailDiv.appendChild(nameEl);
            detailDiv.appendChild(ul);
            detailList.appendChild(detailDiv);
          }
        });

        productDiv.appendChild(detailList);
        productList.appendChild(productDiv);
      });

      categoryDiv.appendChild(productList);
      catalog.appendChild(categoryDiv);
    });
  };

  catalog.addEventListener("click", (e) => {
    if (e.target.classList.contains("expandable")) {
      const next = e.target.nextElementSibling;
      if (next) next.classList.toggle("open");
    }
  });

  const updateFilter = () => {
    const filter = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter?.value || "";
    renderCatalog(filter, selectedCategory);
  };

  if (searchInput) {
    searchInput.addEventListener("input", updateFilter);
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", updateFilter);
  }

  renderCatalog();
});
