$(document).ready(function () {
    // burger menu
    function myFunction(x) {
        x.classList.toggle("change");
    }


    ////////////////////////////
    function formContact() {

        $('name-input').val().trim();
        console.log($('name-input'));
        $('email-input')
        $('message-input')
    }


    formContact();

    function classToggle() {
        const navs = document.querySelectorAll('.Navbar__Items')

        navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
    }
    document.querySelector('.Navbar__Link-toggle')
        .addEventListener('click', classToggle);


});
myFunction(change);