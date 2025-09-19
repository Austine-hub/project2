// file5.js

// === DARK MODE TOGGLE ===
// Uses Tailwind's built-in `dark:` variant
function toggleTheme() {
  document.documentElement.classList.toggle("dark");
}

// === SEARCH FUNCTIONALITY ===
const searchForm = document.querySelector("form[role='search']");
const searchInput = document.getElementById("searchInput");

if (searchForm) {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
      alert(`Searching for: ${query}`);
      // TODO: hook this up to your backend or search API
    }
  });
}

// === JSON REFERENCE LOADING ===
const imedLinks = document.querySelectorAll(".imed-link");
const referenceBox = document.querySelector(".reference-box");

imedLinks.forEach((link) => {
  link.addEventListener("click", async (e) => {
    e.preventDefault();
    const refId = link.id;

    try {
      // Example JSON fetch (update the file path as needed)
      const response = await fetch("references.json");
      const data = await response.json();

      if (data[refId]) {
        referenceBox.innerHTML = `
          <h3 class="text-lg font-bold text-yellow-400">${data[refId].title}</h3>
          <p class="mt-1">${data[refId].description}</p>
          <a href="${data[refId].link}" target="_blank" class="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Read More</a>
        `;
      } else {
        referenceBox.innerHTML = `<p class="text-red-400">Reference not found for ${refId}</p>`;
      }
    } catch (err) {
      console.error("Error loading JSON:", err);
      referenceBox.innerHTML = `<p class="text-red-400">Error loading reference details.</p>`;
    }
  });
});

