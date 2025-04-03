document.addEventListener("DOMContentLoaded", function () {
    function toggleNavbarMethod() {
        if (window.innerWidth > 992) {
            document.querySelectorAll(".navbar .dropdown").forEach(function (dropdown) {
                dropdown.addEventListener("mouseover", function () {
                    this.querySelector(".dropdown-toggle").click();
                });
                dropdown.addEventListener("mouseout", function () {
                    this.querySelector(".dropdown-toggle").click();
                    this.querySelector(".dropdown-toggle").blur();
                });
            });
        } else {
            document.querySelectorAll(".navbar .dropdown").forEach(function (dropdown) {
                dropdown.replaceWith(dropdown.cloneNode(true));
            });
        }
    }
    toggleNavbarMethod();
    window.addEventListener("resize", toggleNavbarMethod);

    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.getElementById("navbarCollapse");
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener("click", function () {
            navbarCollapse.classList.toggle("show");
        });
    }
});