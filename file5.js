// file5.js - Toggles dark mode with local storage support

// Function to toggle the theme
function toggleTheme() {
  document.body.classList.toggle('dark-mode');

  // Store preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// Load theme preference on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});


// Find all links with class 'imed-link'
const links = document.querySelectorAll('.imed-link');

// For each link, add a click event listener
links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Stop the link from jumping to top

    const id = event.target.id; // e.g., 'Imed1', 'Imed2', etc.

    // Build a JSON file path dynamically
    const jsonPath = `data/harrison_${id.toLowerCase()}.json`;

    fetch(jsonPath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Check if .reference-box exists
        const refBox = document.querySelector('.reference-box');
        if (refBox) {
          refBox.innerHTML = `
            <h4>${data.title}</h4>
            <p>${data.edition}</p>
            <p>${data.summary}</p>
          `;
        } else {
          // If .reference-box is missing, optionally show an alert
          console.log('Reference box not found in HTML.');
        }
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });
  });
});



