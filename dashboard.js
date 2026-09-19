document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logout');

  logoutButton.addEventListener('click', () => {
    window.location.href = 'login.html';
  });
  const menuButton = document.querySelector('.menu');
  const sidebar = document.querySelector('.sidebar');

  menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
});