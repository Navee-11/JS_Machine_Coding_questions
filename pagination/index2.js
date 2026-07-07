// https://dummyjson.com/products?limit=100"

document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector(".app");
  let products = [];
  let page = 2;

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      if (data && data.products) {
        products = data.products;
        console.log(products);
        render();
      }
    } catch (error) {
      console.error("Error in fetching the data", error);
    }
  };

  const render = () => {
    const productsContainer = document.createElement("div");
    productsContainer.classList.add("products");
    const paginationContainer = document.createElement("div");
    paginationContainer.classList.add("pagination");

    paginationContainer.addEventListener("click", (e) => {
      if (e.target.matches(".previous__button")) {
        selectPageHandler(page - 1);
      }
      if (e.target.matches(".next__button")) {
        selectPageHandler(page + 1);
      }
      if (e.target.matches(".pagination__button")) {
        let newPage = Number(e.target.innerText);
        console.log(typeof newPage);
        selectPageHandler(Number(e.target.innerText));
      }
    });
    if (products.length > 0) {
      products.slice(page * 10 - 10, page * 10).forEach((prod) => {
        const productElement = document.createElement("div");
        productElement.classList.add("products__single");
        productElement.innerHTML = `<img src="${prod.thumbnail}" alt="${prod.title}"/>
            <span>${prod.title}</span>`;
        productsContainer.appendChild(productElement);
      });
      if (page > 1) {
        const prevButton = createPaginationButton("◀️");
        prevButton.classList.add("previous__button");
        paginationContainer.appendChild(prevButton);
      }
      for (let i = 0; i < products.length / 10; i++) {
        const pagebutton = createPaginationButton(i + 1, page === i + 1);
        pagebutton.classList.add("pagination__button");
        paginationContainer.appendChild(pagebutton);
      }
    }
    if (page < products.length / 10) {
      const nextButton = createPaginationButton("▶️");
      nextButton.classList.add("next__button");
      paginationContainer.appendChild(nextButton);
    }
    app.innerHTML = "";
    app.appendChild(productsContainer);
    app.appendChild(paginationContainer);
  };
  //With Event Delegation
  const createPaginationButton = (text, isSelected = false) => {
    const button = document.createElement("button");
    button.textContent = text;
    if (isSelected) {
      button.classList.add("pagination__selected");
    }
    return button;
  };
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage != page
    ) {
      page = selectedPage;
      render();
    }
  };
  fetchProducts();
});
