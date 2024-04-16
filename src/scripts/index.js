document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.menu--mobile')
  const menu = document.getElementById('menu')

  const userButton = document.querySelector('.user-icon')
  const user = document.getElementById('user')

  menuButton.addEventListener('click', function () { 
    if (menu.style.display === 'none' || menu.style.display === '') { 
      menu.style.display = 'flex'
    } else {
      menu.style.display = 'none'
    }
  })

  userButton.addEventListener('click', function() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      if (user.style.display === 'none' || user.style.display === '') {
        user.style.display = 'flex';
      } else {
        user.style.display = 'none';
      }
    }
  })
})