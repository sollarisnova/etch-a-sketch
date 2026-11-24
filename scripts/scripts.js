let grid = 256;


const container = document.querySelector('#container');

for (let i = 1; i<= grid; i++){
    const unitOfGrid = document.createElement('div');
    unitOfGrid.classList.add('pixel');
    unitOfGrid.textContent = i;
    container.appendChild(unitOfGrid);
}

const allPixels = document.querySelectorAll('.pixel');
const arrayAllPixels = Array.from(allPixels);

arrayAllPixels.forEach((pixel) => {
                                    pixel.addEventListener('mouseenter', () => pixel.classList.add('hover'))
                                    pixel.addEventListener('mouseleave', () => pixel.classList.remove('hover'))
                                });


console.log(arrayAllPixels);



