const endpoint = "https://kea-alt-del.dk/t7/api/products?limit=10";

const productList = document.querySelector(".productlist");

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    console.table(data);

    data.forEach((produkt) => {
      productList.innerHTML += `
        <article class="card">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp" alt="${produkt.productdisplayname}">
          <h2>${produkt.brandname}</h2>
          <h3>${produkt.productdisplayname}</h3>
          <p>${produkt.price} kr.</p>
        </article>
      `;
    });
  });
