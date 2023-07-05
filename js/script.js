// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hambuger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// klik di luar side bar untuk menghilangkan menunya

const hambuger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hambuger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
