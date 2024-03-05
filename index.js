"use strict";

$('input[name="dates"]').daterangepicker();

let listItems = document.querySelectorAll(".side-nav-list-parent li");

for (const item of listItems) {
  item.addEventListener("click", function () {
    // add active class to the clicked item
    item.childNodes[1].classList.add("active-menu");
    item.classList.add("active-menu");
    item.childNodes[1]
      .querySelector(".menu-heading")
      .classList.add("active-menu");
    item.childNodes[1]
      .querySelector(".fa-chevron-right")
      .classList.add("active-menu");
  });
}

// Table Data Rendering

document.addEventListener("DOMContentLoaded", function () {
  fetchData();
});

async function fetchData() {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/cd84cd12-38e8-4b30-b3a1-211af24bd2da"
    ); // Replace with your API endpoint
    const data = await response.json();

    // Call a function to populate the table with the retrieved data
    populateTable(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function populateTable(data) {
  const tableBody = document.querySelector("#data-table tbody");

  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${item["Vendor Name"]}</td>
            <td>${item["Order Value"]}</td>
            <td>${item["Delivery Fees"]}</td>
            <td>${item["Admin Commissions"]}</td>
            <td>${item["Promo [Vendor]"]}</td>
            <td>${item["Promo [Admin]"]}</td>
            <td>${item["Service Fee"]}</td>
            <td>${item["Fixed Fee"]}</td>
        `;
    tableBody.appendChild(row);
  });
}
