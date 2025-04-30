// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
});




















document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.image-slider');
    
    sliders.forEach(slider => {
        const images = slider.querySelectorAll('img');
        if (images.length < 2) return; // Skip if only one image
        
        const speed = parseInt(slider.dataset.speed) || 5000;
        let currentIndex = 0;
        
        // Function to show image at specific index
        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }
        
        // Initialize
        showImage(currentIndex);
        
        // Start slideshow
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, speed);
    });
});







// drop down menu in mobile display
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');

    hamburger.addEventListener('click', () => {
        mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
    });

    // Optional: Hide menu when clicking outside
    window.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
            mobileNav.style.display = 'none';
        }
    });


