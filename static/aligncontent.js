
const selectAlignContent = document.getElementById('align-content');
const selectFlexDirection = document.getElementById('flex-direction');
const container = document.getElementById('container');

// Function to update flex-direction and align-content based on selection
selectFlexDirection.addEventListener('change', function() {
    const direction = this.value;
    container.style.flexDirection = direction; // Change direction to row or column
    updateAlignment(); // Update the alignment when direction changes
});

// Function to update align-content based on selection
selectAlignContent.addEventListener('change', updateAlignment);

// Update the align-content property based on the selected value
function updateAlignment() {
    const value = selectAlignContent.value;
    container.style.alignContent = value;
}

// Initialize the default settings
selectFlexDirection.value = 'row';
selectAlignContent.value = 'normal';
container.style.flexDirection = 'row';
container.style.alignContent = 'normal';