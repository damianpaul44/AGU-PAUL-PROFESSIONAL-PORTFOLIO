document.addEventListener("DOMContentLoaded", function() {
    // 1. Load Navbar
    fetch('nav.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
            setupMobileMenu();
        });

    // 2. Background Slider
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    if(slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('mobile-menu');
    const links = document.getElementById('nav-links');

    menu.addEventListener('click', () => {
        links.classList.toggle('active');
    });
});

function openModal() {
    document.getElementById("certModal").style.display = "block";
}

function closeModal() {
    document.getElementById("certModal").style.display = "none";
}

// Close modal if user clicks outside of the box
window.onclick = function(event) {
    let modal = document.getElementById("certModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


