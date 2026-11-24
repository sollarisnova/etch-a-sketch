let grid = 16;


const container = document.querySelector('#container');

for (let i = 1; i<= grid; i++){
    const unitOfGrid = document.createElement('div');
    unitOfGrid.classList.add('pixel');
    unitOfGrid.textContent = `div ${i}`

    container.appendChild(unitOfGrid);
}



