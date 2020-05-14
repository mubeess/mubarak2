const yet=document.querySelectorAll('.yet');
const container=document.querySelector('.container');
const social=document.querySelector('.social');
const scroll= document.querySelector('.scroll');
const soimg = document.querySelectorAll('.extra .social ul li img');
function linkHandler(e) {
    e.preventDefault();
    alert('Sorry Please, These Page Is Yet To Be Published')
}
yet.forEach(link=>link.addEventListener('click',linkHandler));

function handleScroll() {
    scrollTo({
        top:0,
        left:0,
        behaviour:'smooth'
    })
}
scroll.addEventListener('click',handleScroll)
function observeCall(payload) {
    console.log(payload[0].intersectionRatio)
    if (payload[0].intersectionRatio>0.3) {
        console.log('roootiing')
        soimg.forEach(img=>img.style.opacity=1);
        scroll.style.opacity=1;
        ob.unobserve(social)
    }
    
}
const ob=new IntersectionObserver(observeCall,{
    root:document,
    threshold:0.5
});
ob.observe(social);