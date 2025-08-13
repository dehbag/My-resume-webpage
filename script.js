// Toggle navigation bar visibility
const nav = document.getElementById('navbar');
const toggleBtn = document.getElementById('nav-toggle');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// ...existing code...
