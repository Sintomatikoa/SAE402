const colorOptions = document.querySelectorAll('.color-option');
const colorArea = document.querySelector('.color-area');

colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Remove active class from all options
        colorOptions.forEach(opt => opt.classList.remove('active'));
        
        // Set active class on clicked option
        option.classList.add('active');
        
        // Get selected color and apply to SVG
        const selectedColor = option.dataset.color;
        colorArea.style.fill = selectedColor;
    });
});

// Initialize with first color selected
colorOptions[0].click();

// Lottie animation configuration
const animationConfig = {
    container: null,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://raw.githubusercontent.com/Sintomatikoa/chaussure-td/main/anim.json' // Local file path
};

// Initialize animations for all color options
colorOptions.forEach(option => {
    const lottieContainer = option.querySelector('.lottie-container');
    
    // Create animation instance
    const anim = lottie.loadAnimation({
        ...animationConfig,
        container: lottieContainer
    });

    option.addEventListener('click', () => {
        // Reset all options
        colorOptions.forEach(opt => {
            opt.classList.remove('active');
            opt.querySelector('.lottie-container').style.opacity = 0;
        });
        
        // Play animation
        anim.goToAndPlay(0, true);
        lottieContainer.style.opacity = 1;
        
        // Update color and active state
        option.classList.add('active');
        colorArea.style.fill = option.dataset.color;
    });

    // Hide animation when complete
    anim.addEventListener('complete', () => {
        lottieContainer.style.opacity = 0;
    });
});