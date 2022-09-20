const btnDushboard = document.getElementById('btn-dashboard');
btnDushboard.addEventListener('click', () => {
  btnDushboard.classList.add('clicked');
  setTimeout(() => {
    btnDushboard.classList.remove('clicked');
  }, 300);
  const dashboard = document.getElementById('dashboard');
  dashboard.classList.toggle('show');
  if (dashboard.classList.contains('show')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
});
const btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', () => {
  btnAdd.classList.add('clicked');
  setTimeout(() => {
    btnAdd.classList.remove('clicked');
  }, 300);
});
const btnSearch = document.getElementById('btn-search');
btnSearch.addEventListener('click', () => {
  btnSearch.classList.add('clicked');
  setTimeout(() => {
    btnSearch.classList.remove('clicked');
  }, 300);
});
const btnSearchToggle = document.getElementById('btn-search-toggle');
btnSearchToggle.addEventListener('click', () => {
  btnSearchToggle.classList.toggle('active');
  searchBox.classList.toggle('show');
  renderVisualization(bookList);
  searchBox.reset();
});