var menu = document.querySelector('#nav i')
var cross = document.querySelector('#full i')

var tl = gsap.timeline()

tl.to("#full", {
    right:0,
    duration:0.8
})

tl.from('#full h4', {
    x:150,
    duration:0.5,
    stagger:0.3,
    opacity:0
})

tl.from('#full i', {
    opacity:0,
    rotate:360
})

tl.pause()

menu.addEventListener('click', () => {
    tl.play()
})
cross.addEventListener('click', () => {
    tl.reverse()
})