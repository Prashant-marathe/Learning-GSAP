// gsap.from("#page1 #box", {
//     scale:0,
//     rotate:360,
//     delay:1,
//     duration:1.5
// })
// gsap.from("#page2 #box", {
//     scale:0,
//     rotate:360,
//     delay:1,
//     duration:1.5,
//     scrollTrigger:"#page2 #box"
// })
// gsap.from("#page3 #box", {
//     scale:0,
//     rotate:360,
//     delay:1,
//     duration:1.5,
//     scrollTrigger:{
//         trigger:"#page3 #box",
//         scroller:"body",
//         markers:true,
//         start:"to 60%"
//     }
// })


//* ScrollTrigger : markers, trigger, scroller, start, end, scrub
// gsap.from("#page2 h1", {
//     // scale:0,
//     opacity:0,
//     duration:1,
//     x:500,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         markers:true,
//         start:"top 50%",
//         scroller:"body"
//     }
// })
// gsap.from("#page2 h2", {
//     // scale:0,
//     opacity:0,
//     duration:1,
//     x:-500,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//     }
// })

//? scrub
// gsap.from("#page2 #box", {
//     scale:0,
//     opacity:0,
//     rotate:720,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 10%",
//         scrub:2,
//         pin:true
//     }
// })

//* pin : While using pin in scrollTrigger always trigger the parent element
gsap.to("#page2 h1", {
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        markers:true,
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})
