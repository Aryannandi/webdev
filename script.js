var blur = document.querySelector("#cursor-blur");
var cursor = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
})


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"120px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -11%",
        end:"top -11%",
        scrub:1
    },
});
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
       trigger: "#main",
       scroller:"body",
    //    markers:true,
       start:"top -25%",
       end:"top -70%",
       scrub:2
    }
});
gsap.from(".cards", {
    scale:0.8,
    y: 210,
    // opacity: 0,
    duration: 2.4,
    stagger:0.1,
    scrollTrigger: {
      trigger: "#cards-cont",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from("#about-us img,#about-us-in", {
    y: 110,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });