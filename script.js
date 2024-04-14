gsap.registerPlugin(ScrollTrigger);
 
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  smoothMobile: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".data-scroll-container" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



let images = gsap.utils.toArray('.z-out')

images.forEach((item, index) => {

 let exptl = gsap.timeline({
   scrollTrigger:{
     trigger: item,
     start: "top 85%",
     end: "top 5%",
     scrub: 2,
     markers: true,
     scroller: '#main'
   }
 });
 exptl.from(item, {
   x: 100,
   opacity: 0,
   duration: 1
 });
 
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

gsap.to("#sc1",{
    x:"-1000%",duration:"1300",repeat:-1
})
gsap.to("#nav",{
    backgroundColor:"black",duration:1,scrollTrigger:{
        scroller:"#main",trigger:"#nav",start:"top -10%",end:"top -20%",scrub:1
    }

})
gsap.to("#page2",{
    backgroundColor:"black",duration:1,scrollTrigger:{
        scroller:"#main",trigger:"#page2",start:"top 10%",end:"top -15%",scrub:3
    }
})
gsap.from("#elm1",{
    scale:0,duration:1,scrollTrigger:{
        scroller:"#main",trigger:"#elm1",start:"top 80%",end:"top 50%",scrub:1


        
    }

})
gsap.from("#pic-cont img",{
  x:"-120%",duration:1.5,stagger:3,repeat:-1

})
let t1 = gsap.timeline({
  scrollTrigger:{
    scroller:"#main",trigger:"#page5",start:"top 75%",
  }
})
t1.to("#page5",{
  backgroundColor:"black",duration:1
},"rh")
gsap.to("#scro",{
  x:"-1000%",duration:2000,repeat:-1

});
let gt = gsap.timeline({
  scrollTrigger:{
    scroller:"#main",trigger:"#page6",start:"top 50%",end:"top 30%",scrub:1
  }
})
gt.to("#page6",{
  backgroundColor:"black",dutation:1
},"tt")

gt.to("#qt #colon1",{
  x:30,y:30, duration:1

},"tt")
gt.to("#qt #colon2",{
  x:-30,y:-30,duration:1

},"tt");
let ts= gsap.timeline({
  scrollTrigger:{
    scroller:"#main",trigger:"footer"
  }
});
ts.from("footer img",{
  y:100,duration:1
 
  
})
ts.from("footer a",{
  y:100,duration:1,stagger:0.3
 
  
})
let mos = document.querySelector("#mouse");
document.addEventListener("mousemove",function(details){
  mos.style.top=details.y+5+"px";
  mos.style.left=details.x+5+"px";

})
let bt =0;
let mnu = document.querySelector("#menu");
let c = document.querySelector("#c");

let i1 = document.querySelector("#i1");
let i2 = document.querySelector("#i2");
mnu.addEventListener("click",function(){
  if(bt==0)
  {
    i1.style.visibility="hidden";
    i2.style.visibility="visible";
  c.style.scale="1";
  bt=1;
  c.style.transitionDuration="1s"
  }
else
  {
    i2.style.visibility="hidden";
    i1.style.visibility="visible";
  c.style.scale="0";
  c.style.transitionDuration="1s"
  bt=0
  }
  
  



})
