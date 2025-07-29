// gsap.to() takes element from intial position to final position
// gsap.to('#box1', {
//     x:1000,
//     duration:3,
//     delay:1,
//     rotate:360,
//     borderRadius:150,
//     backgroundColor:"green",
//     scale:0.5
// })
// gsap.from() takes the element from final position to intial position 
// gsap.from('#box2', {
//     x:1000,
//     duration:3,
//     delay:1
// })

// gsap.from("h1", {
//     opacity:0,
//     duration:3,
//     y:30,
//     delay:1,
//     stagger:1    // Run each element one by one (value range 0 to 1)
// })

// gsap.to("#box", {
//     x:1200,
//     duration:1,
//     delay:1,
//     rotate:360,
//     repeat:-1,     // used to repeat the animation (1 means 2 and for infinite use -1)
//     yoyo:true    // makes the element come back from its final position with all the properties
// })   

//! Timeline
// gsap.to("#box1", {
//     x:1200,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })
// gsap.to("#box2", {
//     x:1200,
//     backgroundColor:"yellow", 
//     duration:1.5,
//     delay:2.5
// })
// gsap.to("#box3", {
//     x:1200,
//     rotate:360,
//     scale:0.5,
//     backgroundColor:"white",
//     borderRadius:"50%",
//     duration:1.5,
//     delay:4
// })

var tl = gsap.timeline()
tl.to("#box1", {
    x:1200,
    rotate:360,
    duration:1.5,
    delay:1
})
tl.to("#box2", {
    x:1200,
    backgroundColor:"yellow", 
    duration:1.5,
})
tl.to("#box3", {
    x:1200,
    rotate:360,
    scale:0.5,
    backgroundColor:"white",
    borderRadius:"50%",
    duration:1.5,
})

//* nav animation
var tl = gsap.timeline()
tl.from("h2" ,{
    y:-30,
    duration:1,
    delay:0.5,
    opacity:0
})
tl.from("h4", {
    y:-20,
    duration:1,
    stagger:0.3,
    opacity:0
})
tl.from("h1", {
    y:20,
    duration:1,
    opacity:0,
    scale:0.3
})

