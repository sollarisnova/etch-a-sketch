let grid = 16;


const container = document.querySelector('#container');

for (let i = 0; i<= grid; i++){
    const unitOfGrid = document.createElement('div');
    container.appendChild(unitOfGrid);
}

