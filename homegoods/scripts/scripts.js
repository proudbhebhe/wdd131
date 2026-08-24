document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Hamburger Menu
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    
    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            hamburger.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
        });
    }

    // 2. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll(".reveal");
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Run once
            }
        });
    }, { rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));

    // 3. Animated Statistics Counter
    const counters = document.querySelectorAll(".counter");
    
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute("data-target");
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps frame rate
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        entry.target.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        entry.target.innerText = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    // 4. Testimonial Carousel
    const items = document.querySelectorAll(".carousel-item");
    if (items.length > 0) {
        let currentIndex = 0;
        
        window.nextSlide = () => {
            items[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % items.length;
            items[currentIndex].classList.add("active");
        };
        
        window.prevSlide = () => {
            items[currentIndex].classList.remove("active");
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            items[currentIndex].classList.add("active");
        };

        // Auto-play
        setInterval(window.nextSlide, 5000);
    }

    // 5. Back to Top Button
    const backToTopBtn = document.getElementById("backToTop");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});