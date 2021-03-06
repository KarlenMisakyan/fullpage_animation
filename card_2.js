const card1 = document.querySelector('.card');
const con1 = document.querySelector('.con1');

const info1 = document.querySelector('.info')
const player = document.querySelector('.player img')
const circle1 = document.querySelector('.circle')


con1.addEventListener('mousemove', e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY)  /25;
    card1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


con1.addEventListener('mouseenter', e => {
    card1.style.transition = 'none';
    info1.style.transform = 'translateZ(100px)'
    player.style.transform = 'translateZ(100px)'
    circle1.style.transform = 'translateZ(0px)'
});

con1.addEventListener('mouseleave', e => {
    card1.style.transform = `rotateY(0deg) rotateX(0deg)`
    card1.style.transition = 'all 0.5s ease';
    info1.style.transform = 'translateZ(0px)'
    player.style.transform = 'translateZ(0px)'
    circle1.style.transform = 'translateZ(0px)'
});
