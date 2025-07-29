function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Characters = document.querySelector("h1").textContent.split("");
  var clutter = "";

  var halfValue = Math.floor(h1Characters.length/2)

  h1Characters.forEach((e, idx) => {
    if(idx < halfValue) {
        clutter += `<span class="a">${e}</span>`
    }else{
        clutter += `<span class="b">${e}</span>`
    }
  });


  h1.innerHTML = clutter;
}
breakTheText()

gsap.from('.a', {
    y:70,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.15
})

gsap.from('h1 .b', {
    y:70,
    duration:0.5,
    delay:0.5,
    opacity:0,
    // stagger:0.3
    stagger:-0.15
})
