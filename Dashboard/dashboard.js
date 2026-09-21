document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logout');
  const menu = document.querySelector('.menu');
  const sidebar = document.querySelector('.sidebar')


  logoutButton.addEventListener('click', () => {
    window.location.href = '../Login/login.html';
  });


  menu.addEventListener('click',()=>{
    sidebar.classList.toggle('open');
  })
});