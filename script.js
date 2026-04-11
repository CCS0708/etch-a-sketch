const container = document.querySelector('.container');

for (let i = 0; i < (16 * 16); i++) {
  const squares = document.createElement('div');
  squares.classList.add('squares');
  container.appendChild(squares);
}