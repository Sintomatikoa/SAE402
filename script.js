let selectedPathId = null;

// Function to select an SVG path
function selectPath(pathId) {
    selectedPathId = pathId;
}

// Function to apply the selected color
function applyColor(picker) {
    if (selectedPathId) {
        const selectedColor = picker.toHEXString();
        const pathElement = document.getElementById(selectedPathId);
        pathElement.setAttribute('style',`fill:${selectedColor}`);
        console.log(`Applied color: #${selectedColor} to ${selectedPathId}`);
    }
}