// Select the clickable element
const clickableElement = document.getElementById('clickableElement');

// Add click event listener
clickableElement.addEventListener('click', function() {
  clickableElement.classList.toggle('glow');
});