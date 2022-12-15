const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const animatedElement = document.entry.target.querySelector('.about-images');

        if (entry.isIntersecting) {
            animatedElement.classList.add('fade-up-animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        animatedElement.classList.remove('fade-up-animation');
    });
});

observer.observe(document.querySelector('.s-about'));