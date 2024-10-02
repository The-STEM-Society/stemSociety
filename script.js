document.addEventListener("DOMContentLoaded", function() {
    const slideLeftElements = document.querySelectorAll('.slide-left');
    const slideRightElements = document.querySelectorAll('.slide-right');
    
    const observerOptions = {
        threshold: 1 // Initial low threshold to start observing
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Additional check for visibility
                const rect = entry.target.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                
                if (rect.top < viewportHeight * 0.75) { // Ensure element is further into the viewport
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    slideLeftElements.forEach(element => {
        observer.observe(element);
    });

    slideRightElements.forEach(element => {
        observer.observe(element);
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const elementsToReveal = document.querySelectorAll('.slide-left, .slide-right');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToReveal.forEach(element => {
        observer.observe(element);
    });
});

