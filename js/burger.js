
document.getElementById('hamburger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    
    
    var dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
  });