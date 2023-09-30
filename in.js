burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightNav = document.querySelector('.right-nav') // You missed a dot before 'right-nav'

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class'); // It should be 'classList', not 'classlist'
    navlist.classList.toggle('v-class'); // It should be 'classList', not 'classlist'
    navbar.classList.toggle('h-nav'); // It should be 'classList', not 'classlist'
})





