var main = document.querySelector('#main')
var cursor = document.querySelector('#cursor')
var imageDiv = document.querySelector('#image')

main.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x:dets.x,
        y:dets.y,
        duration:0.7,
        ease:"back.out"
    })          
})

imageDiv.addEventListener('mouseenter', () => {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale:3,
        ease:"power3.out",
        backgroundColor:"#ffffff71"
    })
})
imageDiv.addEventListener('mouseleave', () => {
    cursor.innerHTML = '';
    gsap.to(cursor, {
        scale:1,
        ease:"power3.out",
        backgroundColor:"white"
    })
})