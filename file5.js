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









// Load Harrison's reference when clicking a specialty
document.getElementById('Imed1').addEventListener('click', function() {
  fetch('data/harrison_pulmonology.json')
    .then(response => response.json())
    .then(data => {
      document.querySelector('.reference-box').innerHTML = `
        <h4>${data.title}</h4>
        <p>${data.edition}</p>
        <p>${data.summary}</p>
      `;
    });
});


