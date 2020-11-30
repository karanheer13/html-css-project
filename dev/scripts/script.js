const body = document.body;
const btn = document.querySelector('.menu-btn');
const slideoutMenu = document.querySelector('.menu-btn');

btn.addEventListener('click', function(){
    body.classList.toggle('show');
});

