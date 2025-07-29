function page1Animation() {
  var tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -30,
    opacity: 0,
    delay: 1,
    duration: 0.7,
    stagger: 0.15,
  });
  tl.from("#mainpart1 h1", {
    x: -200,
    duration: 0.5,
    opacity: 0,
  });
  tl.from("#mainpart1 p", {
    x: -200,
    duration: 0.4,
    opacity: 0,
  });
  tl.from("#mainpart1 button", {
    opacity: 0,
  });
  tl.from(
    "#mainpart2 img",
    {
      x: 200,
      opacity: 0,
      duration: 0.5,
    },
    "-=1"
  );
  tl.from("#section1bottom img", {
    y: 30,
    opacity: 0,
    stagger: 0.3,
    duration: 0.6,
  });
}

page1Animation()

function animationAfterPage1() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2header",
      scroller: "body",
      markers: true,
      start: "top 50%",
      end: "top -50%",
      scrub: 2,
    },
  });

  tl.from(".section2header", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });
  tl.from(
    ".elem.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anime1"
  );
  tl.from(
    ".elem.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anime1"
  );
  tl.from(
    ".elem.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anime2"
  );
  tl.from(
    ".elem.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anime2"
  );
  tl.from("#section2footer", {
    y: 300,
    opacity: 0,
    duration: 1,
  });
  tl.from(
    "#section2footer .sec2footerpart1",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anime3"
  );
  tl.from(
    "#section2footer .sec2footerpart2",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anime3"
  );
  tl.from("#section3 .section3header", {
    y: -200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
  });
  tl.from("#section3 .section3footer", {
    y: -200,
    opacity: 0,
    duration: 1,
  });
  tl.from("#section3 .section3footer sec3footerpart1", {
    y: -200,
    opacity: 0,
    duration: 1,
  });
}
animationAfterPage1()
