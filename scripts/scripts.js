let numberOfPixels;
let totalOfPixels;
let widthOfPixels;

const container = document.querySelector('#container');
const resetButton = document.querySelector('#resetButton');



resetButton.addEventListener('click', () => newGrid());


createGrid();

// this function calculate the size of the grid and calls the addHoverClass and increaseOpacity
function createGrid (sizeOfGrid = 16) {
    totalOfPixels = sizeOfGrid * sizeOfGrid;
    for (let i = 1; i<= totalOfPixels; i++){
    const unitOfGrid = document.createElement('div');
    unitOfGrid.classList.add('pixel');
    addHoverClass(unitOfGrid);
    increseOpacity(unitOfGrid);
    calculateWidth(sizeOfGrid, unitOfGrid);
    container.appendChild(unitOfGrid);
    }
}

//create a newgrid using the user prompt and erasing all the previous divs
function newGrid () {
    
    container.replaceChildren();
    numberOfPixels = prompt('enter the number of pixels per side', 'no more than 100');

    if (numberOfPixels <= 100){
        createGrid(numberOfPixels);
    }

    else {
        alert('no more than 100 pixels');
        newGrid();
    }
    

}


//this function change the class every time the mouse enter and calls increace opacity
function addHoverClass (pixel) {
    pixel.addEventListener('mouseenter', () => {pixel.classList.add('hover'); increseOpacity(pixel)})

}

//this function increace the opacity
function increseOpacity (pixel) {
    const opacity = parseFloat(getComputedStyle(pixel).opacity);
    const newOpacity = Math.min(opacity + 0.1, 1);
    pixel.style.opacity = newOpacity;
    
}

//this function calculate the width of the pixel so it size it to a 960px canvas
function calculateWidth (sizeOfGrid, unitOfGrid) {
    widthOfPixels = 960 / sizeOfGrid;
    unitOfGrid.style['width'] = `${widthOfPixels}px`
    unitOfGrid.style['height'] = `${widthOfPixels}px`
}












