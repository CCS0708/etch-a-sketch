let size = 16;

const btnSize = document.querySelector('.ask-size');
btnSize.addEventListener('click', (e) => {
  size = prompt('Enter squares per side:', 16);
  if (size > 100) {
    alert('Maximum 100 squares per side');
    size = 100;
  }
  renderGrid();
})

const btnClear = document.querySelector('.clear');
btnClear.addEventListener('click', (e) => {
  renderGrid();
})

renderGrid();

function renderGrid() {
  
  const container = document.querySelector('.container');
  container.innerHTML = '';

  const sidePercent = 100 / size; 

  for (let i = 0; i < (size * size); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.setProperty('--side', `${sidePercent}%`);

    square.addEventListener('mouseenter', (e) => {
      square.classList.add('hover');
    })

    container.appendChild(square);
  }
}

function addHover() {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseenter', (e) => {
      square.classList.add('hover');
    })
  })
}



  
