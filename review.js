document.addEventListener('DOMContentLoaded', () => {
    const navBarToggler = document.getElementById('navBarToggler');
    const navBarList = document.getElementById('navBarList');


    navBarToggler.addEventListener('click', () => {
        navBarList.classList.toggle('active');
    });
});