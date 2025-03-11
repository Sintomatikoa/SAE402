let selectedPathId = null;

// Function to select an SVG path
function selectPath(pathId) {
    selectedPathId = pathId;
}



// const animation = bodymovin.loadAnimation({
//     container: document.getElementById('lottie'), // Conteneur HTML
//     path: 'https://raw.githubusercontent.com/Sintomatikoa/chaussure-td/main/anim.json', // Chemin vers le fichier JSON
//     renderer: 'svg', // Format de rendu (SVG ou canvas)
//     loop: true, // Boucle l'animation
//     autoplay: true, // Lecture automatique

// });


const speedInput = document.getElementById('speed');
speedInput.addEventListener('input', () => {
    const speed = parseFloat(speedInput.value);
    console.log('Vitesse définie à :', speed); // Affiche la vitesse dans la console
    animation.setSpeed(speed);
});



const lottieContainer = document.getElementById('lottie');
const animation = bodymovin.loadAnimation({container: lottieContainer,
path: 'anim.json',
renderer: 'svg',
loop: true,
autoplay: false,
})
// Play the animation on hover
lottieContainer.addEventListener('click', () => {
animation.play();
});
// Stop the animation after playing once
animation.addEventListener('loopComplete', function() {
animation.stop();
});

// Function to apply the selected color
function applyColor(picker) {
    if (selectedPathId) {
        const selectedColor = picker.toHEXString();
        const pathElement = document.getElementById(selectedPathId);
        pathElement.setAttribute('style',`fill:${selectedColor}`);
        console.log(`Applied color: #${selectedColor} to ${selectedPathId}`);
    }
}



// animation.play();