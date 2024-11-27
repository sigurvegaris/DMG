document.addEventListener("DOMContentLoaded", function() {
    // Get the menu icon and the navbar menu
    let menuIcon = document.querySelector('#menu-icon');
    let navBarMenu = document.querySelector('.navbar nav');

    // Toggle the navbar visibility when the menu icon is clicked
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');  // Optional: Change the icon to 'X'
        navBarMenu.classList.toggle('active');  // Toggle navbar visibility
    };

    // Close the navbar when a link inside it is clicked
    let navLinks = document.querySelectorAll('.navbar nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');  // Reset icon to hamburger
            navBarMenu.classList.remove('active');  // Close navbar
        });
    });
});
