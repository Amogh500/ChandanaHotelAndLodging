AOS.init();
let x = document.querySelectorAll('.nav-item');
for (let i=0; i<x.length; i++) {
    x[i].addEventListener('click', function (){
        x[i].classList.add('active')
        for(let j = 0; j<x.length; j++){
            if(j===i){
                continue;
            }
            else{
                x[j].classList.remove('active');
            }
        }
    });
}