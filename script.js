renderGrid();

function renderGrid() {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  for (let i = 0; i < (16 * 16); i++) {
    const square = document.createElement('div');
    square.classList.add('square');

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