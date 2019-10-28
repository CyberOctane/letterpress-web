/////////// scroll events ///////////

var hero = document.getElementById('hero');

window.addEventListener('scroll', ()=>{
    var scrollAmount = window.pageYOffset;
    hero.style.top = (scrollAmount*0.4) + 'px'
}, false);