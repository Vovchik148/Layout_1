$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        adaptiveHeight: true,
        speed: 700,
        touchThreshold: 7,
        autoplay: true,
        autoplaySpeed: 2000,
    });
})

document.addEventListener('DOMContentLoaded', function() {
    const dropdownHeader = document.querySelector('.dropdown-header');
    
    dropdownHeader.addEventListener('click', function() {
        const dropdown = this.parentElement;
        dropdown.classList.toggle('active');
    });
});