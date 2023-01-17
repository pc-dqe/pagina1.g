var fullimgBox = document.getElementById("fullimgBox");
    var fullimg = document.getElementById("fullimg");

    function openFullimg(pic){
        fullimgBox.style.display = "flex";
        fullimg.src = pic;
    }

    function closeFullimg(){
        fullimgBox.style.display = "none";
    }

window.sr = ScrollReveal();

sr.reveal('.scroll',{
    duration: 4000,
    origin: 'left',
    distance: '400px'
});


sr.reveal('.btn',{
    duration: 4000,
    origin: 'top',
    distance:'-100px'
});

sr.reveal('.opiniones',{
    duration: 5000,
    origin: 'right',
    distance:'100px'
});

ScrollReveal().reveal('.logo');
ScrollReveal().reveal('.tagline', { 
    delay: 400
     
});