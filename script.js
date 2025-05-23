document.addEventListener("DOMContentLoaded", () => {
  const data = [ /* FULL DATA STARTS */
    {
      category: "Aluminium Foil Containers",
      products: [
        {
          name: "Silver Brand",
          details: [
            {
              name: "No 2",
              specs: ["Material: Aluminium", "Quality: Standard", "Dimensions: 5\" x 4\" x 2\"", "Pack Size: 1000"]
            },
            {
              name: "No 6A",
              specs: ["Standard Quality", "Pack Size: 1000"]
            }
          ]
        },
        {
          name: "Gold Brand",
          details: [
            {
              name: "No 2",
              specs: ["Material: Aluminium", "Quality: Heavy", "Dimensions: 5\" x 4\" x 2\"", "Pack Size: 1000"]
            },
            {
              name: "No 1",
              specs: ["Dimensions: 5\" x 4\" x 1.75\"", "Pack Size: 1000"]
            },
            {
              name: "No 6",
              specs: ["Dimensions: 4.7\" x 8.5\" x 2.5\"", "Pack Size: 500"]
            },
            {
              name: "No 12",
              specs: ["7\" ROUND x 1.75\"", "Pack Size: 400"]
            },
            {
              name: "9x9x1.5 (Shallow)",
              specs: ["Pack Size: 200"]
            },
            {
              name: "9x9x2 (Deep)",
              specs: ["Pack Size: 200"]
            },
            {
              name: "Half Gastro",
              specs: ["Dimensions: 325x263mm", "Height: 66mm", "Pack Size: 100"]
            },
            {
              name: "Full Gastro",
              specs: ["Dimensions: 525x325mm", "Height: 79mm", "Pack Size: 200"]
            }
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
            {
              name: "Clear Base",
              specs: ["500ml", "650ml", "750ml", "1000ml", "Microwave safe", "Reusable"]
            },
            {
              name: "Black Base",
              specs: ["500ml", "650ml", "750ml", "1000ml", "Microwave safe", "Reusable"]
            }
          ]
        },
        {
          name: "Black Base Meal Prep Containers",
          details: [
            {
              name: "Rectangular",
              specs: ["16oz", "24oz", "28oz", "32oz", "38oz", "32oz (2 Compartment)", "150 Sets/Box"]
            },
            {
              name: "Round",
              specs: ["12oz", "16oz", "24oz", "28oz", "32oz", "48oz", "150 Sets/Box"]
            }
          ]
        },
        {
          name: "Salad Containers",
          details: [
            {
              name: "Varieties",
              specs: [
                "250ml – 116.5x120x47mm – Pack of 500",
                "375ml – 115.5x120x60mm – Pack of 500",
                "500ml – 126x131x64mm – Pack of 500",
                "750ml – 166x174x73mm – Pack of 300",
                "1000ml – 166x174x73mm – Pack of 400",
                "1250ml – 173x228x77.5mm – Pack of 300",
                "2000ml – 173x228x86.5mm – Pack of 200"
              ]
            }
          ]
        },
        {
          name: "Sauce Cups",
          details: [
            {
              name: "Hinged Lid",
              specs: ["1oz – 1000", "2oz – 1000", "4oz – 500", "6oz – 500"]
            },
            {
              name: "Separate Lid",
              specs: ["2oz – 800 sets", "4oz – 800 sets"]
            }
          ]
        },
        {
          name: "Deli Pots",
          details: [
            {
              name: "Microwave Safe",
              specs: ["8oz", "10oz", "12oz", "16oz", "24oz", "30oz", "250 Sets/Box"]
            }
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
              name: "Double Wall Ripple",
              specs: ["8oz", "12oz", "Black", "Brown", "Lids sold separately (White/Black)", "Cups 500/box", "Lids 1000/box"]
            }
          ]
        },
        {
          name: "Napkins & Serviettes",
          details: [
            {
              name: "Single Ply",
              specs: ["Wipe-Up", "40x40 8-fold", "33x33"]
            }
          ]
        },
        {
          name: "Centerfeed Rolls",
          details: [
            {
              name: "Rolls",
              specs: ["Heavy Duty", "Economy"]
            }
          ]
        },
        {
          name: "Foil & Cling Film",
          details: [
            {
              name: "Catering Foil",
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
              name: "Kraft/White Sulphate",
              specs: ["Sizes: 5x5 to 12x12"]
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
              name: "Varieties",
              specs: ["8oz Bowl", "9\" Round", "10\" Round", "12oz", "12\" 4-Compartment", "6-Compartment", "7-Compartment"]
            }
          ]
        },
        {
          name: "Burger Boxes",
          details: [
            {
              name: "Clamshells",
              specs: ["6\"x6\"", "7\"x5\"", "9\"x6\"", "Pack of 200 each"]
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
  ]; // END OF DATA

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
// Insert final JS manually if needed
