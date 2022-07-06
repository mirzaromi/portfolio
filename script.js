const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close');
const mobileMenu = document.querySelector('.mobile-menu');

const hamburgerClick = () => {
        mobileMenu.style.left = '0px';
        hamburger.style.display = 'none';
        close.style.display = 'block';
}

const closeClick = () => {
        mobileMenu.style.left = '-255px';
        hamburger.style.display = 'block';
        close.style.display = 'none';
}

hamburger.addEventListener("click", hamburgerClick);
close.addEventListener("click", closeClick);

window.addEventListener('mouseup', function(event){
        let w = window.innerWidth;
	const box = document.getElementById('mobile-menu');
	if (event.target != box && event.target.parentNode != box && w<=425){
        mobileMenu.style.left = '-255px';
        hamburger.style.display = 'block';
        close.style.display = 'none';
    }
});