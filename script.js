// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Back to Top button (optional)
const topButton = document.createElement('button');
topButton.textContent = '↑';
topButton.className = 'top-btn';
document.body.appendChild(topButton);

window.addEventListener('scroll', () => {
  topButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});