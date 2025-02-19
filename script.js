// script.js

function searchProducts() {
    var searchInput = document.getElementById("search").value;
    alert("Searching for: " + searchInput);
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}
