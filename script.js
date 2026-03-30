// script.js for Alzheimer's Dashboard

// Function to handle slide navigation
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Event listeners for navigation buttons
document.getElementById('nextButton').addEventListener('click', nextSlide);
document.getElementById('prevButton').addEventListener('click', prevSlide);

// Initialize the first slide
showSlide(currentSlide);

// Set up transitions
const transitionDuration = 0.5; // transition duration in seconds
slides.forEach(slide => {
    slide.style.transition = `opacity ${transitionDuration}s`; 
    slide.style.opacity = 1;
});

// Optional: Code for interactive elements can be added here

// Call nextSlide function every 5 seconds for automatic navigation
setInterval(nextSlide, 5000);