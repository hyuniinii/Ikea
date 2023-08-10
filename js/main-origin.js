let winWidth = window.innerWidth;
let pos = [];
let baseLine = -300;
let con = document.querySelectorAll('section');
let btnTop = document.querySelector('.btn_top');

function saveSectionPos(){
    pos = [];
    
    con.forEach(el => pos.push(el.offsetTop));
    pos.push(document.getElementsByTagName('footer')[0].offsetTop);
}
saveSectionPos();

window.addEventListener('resize', () => {
    saveSectionPos();
});

window.addEventListener('scroll', () => {
    let scroll = this.scrollY;

    // header
    if(scroll > 100){
        document.querySelector('header').classList.add('on');
    } else{
        document.querySelector('header').classList.remove('on');
    }
    
    // aside
    if(scroll >= 700){
        btnTop.classList.add('on');
    } else{
        btnTop.classList.remove('on');
    }

    // section on
    con.forEach((el, i) => {
        if(scroll >= pos[i] + baseLine && scroll < pos[i+1] + baseLine){
            el.classList.add('on');
        }
    });
});

// scroll top click
btnTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});
