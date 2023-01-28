// const parallax = document.getElementById('parallax');
const navbar = document.querySelector('.navbar');
// window.addEventListener("scroll", function(){
//     let offset = window.pageYOffset;
//     parallax.style.backgroundPositionY= offset * 0.7 + 'px';
// })

const footer = document.querySelector('footer');
footer.setAttribute('style', 'height: '+navbar.offsetHeight+'px; display: flex; align-items: center; justify-content: center;')