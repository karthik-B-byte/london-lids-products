document.addEventListener("DOMContentLoaded", () => {
  const data = [
    {
      category: "Aluminium Foil Containers",
      products: [
        {
          name: "Silver Brand",
          details: [
            {
              name: "No 2",
              specs: [
                "Material: Aluminium",
                "Standard Quality",
                "Size: 5\" x 4\" x 2\"",
                "Pack: 1000"
              ]
            },
            {
              name: "No 6A",
              specs: [
                "Standard Quality",
                "Pack: 1000"
              ]
            }
          ]
        },
        {
          name: "Gold Brand",
          details: [
            { name: "No 2", specs: ["Heavy Duty", "Pack: 1000"] },
            { name: "No 1", specs: ["Heavy Duty", "Pack: 1000"] },
            { name: "No 6", specs: ["Pack: 500"] },
            { name: "No 12", specs: ["Round", "Pack: 400"] },
            { name: "9x9x1.5", specs: ["Shallow", "Pack: 200"] },
            { name: "9x9x2", specs: ["Deep", "Pack: 200"] },
            { name: "Half Gastro", specs: ["325x263mm", "66mm height", "Pack: 100"] },
            { name: "Full Gastro", specs: ["525x325mm", "79mm height", "Pack: 200"] }
          ]
        }
      ]
    },
    {
      category: "Plastic Containers",
      products: [
        {
          name: "Microwave Containers",
          details: [
            { name: "Clear Base", specs: ["500ml", "650ml", "750ml", "1000ml", "Microwave Safe"] },
            { name: "Black Base", specs: ["500ml", "650ml", "750ml", "1000ml", "Microwave Safe"] }
          ]
        },
        {
          name: "Black Base Meal Prep",
          details: [
            { name: "Rectangular", specs: ["16oz - 38oz", "2-Compartment", "150 sets"] },
            { name: "Round", specs: ["12oz - 48oz", "150 sets"] }
          ]
        },
        {
          name: "Salad Containers",
          details: [
            { name: "Range", specs: ["250ml - 2000ml", "Various sizes"] }
          ]
        },
        {
          name: "Sauce Cups",
          details: [
            { name: "Hinged Lid", specs: ["1oz", "2oz", "4oz", "6oz"] },
            { name: "Separate Lid", specs: ["2oz", "4oz"] }
          ]
        },
        {
          name: "Deli Pots",
          details: [
            { name: "Microwave Safe", specs: ["8oz to 30oz", "250 sets"] }
          ]
        }
      ]
    },
    {
      category: "Paper Products",
      products: [
        {
          name: "Paper Cups",
          details: [
            {
              name: "Ripple Cups",
              specs: ["8oz", "12oz", "Colors: Black, Brown", "500 cups", "1000 lids"]
            }
          ]
        },
        {
          name: "Napkins & Serviettes",
          details: [
            {
              name: "Options",
              specs: ["Single Ply", "40x40 8-fold", "33x33"]
            }
          ]
        },
        {
          name: "Centerfeed Rolls",
          details: [
            {
              name: "Tissue Rolls",
              specs: ["Heavy Duty", "Economy"]
            }
          ]
        },
        {
          name: "Foil & Cling Film",
          details: [
            {
              name: "Foil",
              specs: ["450mm x 75m", "300mm x 75m"]
            },
            {
              name: "Cling Film",
              specs: ["450mm x 300m", "300mm x 300m"]
            }
          ]
        },
        {
          name: "Paper Bags",
          details: [
            {
              name: "Variety",
              specs: ["5x5 to 12x12", "Kraft & White Sulphate"]
            }
          ]
        }
      ]
    },
    {
      category: "Bagasse Products",
      products: [
        {
          name: "Plates & Bowls",
          details: [
            {
              name: "Range",
              specs: ["8oz bowl", "9\"/10\" plates", "4-Comp, 6-Comp"]
            }
          ]
        },
        {
          name: "Burger Boxes",
          details: [
            {
              name: "Sizes",
              specs: ["6x6\"", "7x5\"", "9x6\"", "200 packs"]
            }
          ]
        },
        {
          name: "Straws",
          details: [
            {
              name: "Sizes",
              specs: ["6mm", "8mm", "10mm", "Pack of 5000"]
            }
          ]
        }
      ]
    }
  ];
  const catalog = document.getElementById("catalog");
  const searchInput = document.getElementById("searchInput");

  function renderCatalog(filter = "") {
    catalog.innerHTML = "";
    data.forEach(({ category, products }) => {
      const catDiv = document.createElement("div");
      const catTitle = document.createElement("h2");
      catTitle.textContent = category;
      catTitle.className = "expandable";
      catDiv.appendChild(catTitle);

      const productList = document.createElement("div");
      productList.className = "product-list";

      products.forEach(({ name, details }) => {
        const prodDiv = document.createElement("div");
        prodDiv.className = "product";
        const prodTitle = document.createElement("h3");
        prodTitle.textContent = name;
        prodTitle.className = "expandable";
        prodDiv.appendChild(prodTitle);

        const detailList = document.createElement("div");
        detailList.className = "details";

        details.forEach(({ name, specs }) => {
          const lower = name.toLowerCase();
          const match = !filter || lower.includes(filter) || specs.some(s => s.toLowerCase().includes(filter));
          if (match) {
            const itemDiv = document.createElement("div");
            const itemTitle = document.createElement("h4");
            itemTitle.textContent = name;
            const ul = document.createElement("ul");
            specs.forEach(spec => {
              const li = document.createElement("li");
              li.textContent = spec;
              ul.appendChild(li);
            });
            itemDiv.appendChild(itemTitle);
            itemDiv.appendChild(ul);
            detailList.appendChild(itemDiv);
          }
        });

        prodDiv.appendChild(detailList);
        productList.appendChild(prodDiv);
      });

      catDiv.appendChild(productList);
      catalog.appendChild(catDiv);
    });
  }

  catalog.addEventListener("click", (e) => {
    if (e.target.classList.contains("expandable")) {
      const next = e.target.nextElementSibling;
      if (next) next.classList.toggle("open");
    }
  });

  searchInput.addEventListener("input", (e) => {
    renderCatalog(e.target.value.trim().toLowerCase());
  });

  renderCatalog();
});
