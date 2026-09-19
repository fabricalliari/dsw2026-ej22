document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logout');
  const menu = document.querySelector('.menu');
  const sidebar = document.getElementById('sidebar')


  logoutButton.addEventListener('click', () => {
    window.location.href = 'login.html';
  });


  menu.addEventListener('click',()=>{
    sidebar.classList.toggle('open');
  })
});