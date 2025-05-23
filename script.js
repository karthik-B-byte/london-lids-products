
document.addEventListener("DOMContentLoaded", () => {
  const data = [
    {
      category: "Aluminium Foil Containers",
      products: [
        {
          name: "Silver Brand",
          details: [
            { name: "No 2", specs: ["Material: Aluminium", "Quality: Standard", "Dimensions: 5\" x 4\" x 2\"", "Pack Size: 1000"] },
            { name: "No 6A", specs: ["Standard Quality", "Pack Size: 1000"] }
          ]
        },
        {
          name: "Gold Brand",
          details: [
            { name: "No 2", specs: ["Heavy Quality", "Material: Aluminium", "Dimensions: 5\" x 4\" x 2\"", "Pack Size: 1000"] },
            { name: "No 1", specs: ["Heavy Quality", "Dimensions: 5\" x 4\" x 1.75\"", "Pack Size: 1000"] },
            { name: "No 6", specs: ["Dimensions: 4.7\" x 8.5\" x 2.5\"", "Pack Size: 500"] }
          ]
        }
      ]
    },
    {
      category: "Plastic Salad Containers",
      products: [
        {
          name: "Clear Plastic",
          details: [
            { name: "750ml", specs: ["Size: 166x174x73mm", "Pack Size: 300"] }
          ]
        }
      ]
    }
  ];

  const catalog = document.getElementById("catalog");
  const searchInput = document.getElementById("searchInput");

  const renderCatalog = (filter = "") => {
    catalog.innerHTML = "";
    data.forEach(({ category, products }) => {
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
      if (next) {
        next.classList.toggle("open");
      }
    }
  });

  searchInput.addEventListener("input", (e) => {
    const filter = e.target.value.trim().toLowerCase();
    renderCatalog(filter);
  });

  renderCatalog();
});
