document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");
    const dropdowns = document.querySelectorAll(".dropdown");

    // Toggle navbar on menu button click
    menuToggle.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });

    // Enable dropdown functionality
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevents click from closing menu
            this.classList.toggle("active");
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function(event) {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("active");
            }
        });
    });
});