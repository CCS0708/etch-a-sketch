let size = 16;

const btnSize = document.querySelector('.ask-size');
btnSize.addEventListener('click', (e) => {
  size = prompt('Enter squares per side:', 16);
  if (size > 100) {
    alert('Maximum 100 squares per side');
    size = 100;
  } else if (size < 0) {
    size = 16;
    alert('Cannot be negative number')
  }
  renderGrid();
})

const btnClear = document.querySelector('.clear');
btnClear.addEventListener('click', (e) => {
  renderGrid();
})

const btnToggleColor = document.querySelector('.toggle-color');
btnToggleColor.addEventListener('click', (e) => {
  btnToggleColor.classList.toggle('color');
})

const btnToggleDarkening = document.querySelector('.toggle-darkening');
btnToggleDarkening.addEventListener('click', (e) => {
  btnToggleDarkening.classList.toggle('darkening');
})

let mouseDown = false;
const container = document.querySelector('.container');
document.body.addEventListener('mousedown', (e) => {
  e.preventDefault();
  mouseDown = true;
})
document.body.addEventListener('mouseup', () => {
  mouseDown = false;
})

renderGrid();

function renderGrid() {
  const sizeDisplay = document.querySelector('.size');
  sizeDisplay.textContent = `Size: ${size} x ${size}`;

  container.innerHTML = '';

  const sidePercent = 100 / size;

  for (let i = 0; i < (size * size); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.setProperty('--side', `${sidePercent}%`);

    square.addEventListener('mouseover', () => {
      changeColorSketch(square);
    })
    square.addEventListener('mousedown', () => {
      mouseDown = true;
      changeColorSketch(square);
    })

    container.appendChild(square);
  }
}
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
function bgChange(element) {

  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  element.style.backgroundColor = rndCol;
}
function opacityChange(element) {
  const opacity = Number(element.style.opacity);

  if (element.style.opacity === '') {
    element.style.opacity = '0.5';
  } else {
    element.style.opacity = `${opacity >= 1 ? 1 : (opacity + 0.1)}`;
  }
}

function changeColorSketch(square) {
  if (!mouseDown) { return; }

  const color = btnToggleColor.classList.contains('color');
  const darken = btnToggleDarkening.classList.contains('darkening');

  if (color) {
    bgChange(square);
  } else {
    square.style.backgroundColor = 'black';
  }
  if (darken) {
    opacityChange(square);
  }
}