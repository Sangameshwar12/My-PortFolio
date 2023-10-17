gsap.from("#nav_bar", {
    y: -90,
    height: "10vh",
    // opacity : 0,
    // borderBottom: "1px solid #000",
    boxShadow: "0 20px 30px -20px gray",
    duration : 2,
    // stagger:0.1,
    // scrollTrigger :{
    //     trigger : "#nav-bar",
    //     scroller : "body",
    //     start : "top -10%",
    //     end : "bottom -98%",
    //     scrub : 1
    // }

})
gsap.to("#left1, #left3",{
    x:-1000,
    duration:3,
    opacity:0,
    stagger:0.1,
    scrollTrigger :{
        trigger : "#left1, #left3",
        scroller : "body",
        start : "top -10%",
        end : "bottom -98%",
        scrub : 1
    }
})

gsap.to("#center-side, #center-side1",{
    y:100,
    duration:3,
    stagger:0.1,
    opacity:0,
    scrollTrigger :{
        trigger : "#center-side, #center-side1",
        scroller : "body",
        start : "top -10%",
        end : "bottom -98%",
        scrub : 1
    }
})
gsap.to("#right-side",{
    y: -100,
    duration:4,
    opacity:0,
    stagger:0.1,
    scrollTrigger :{
        trigger : "#center-side, #center-side1",
        scroller : "body",
        start : "top -10%",
        end : "bottom -98%",
        scrub : 1
    }
    
})

gsap.to("#card1",{
    x: -1000,
    duration:1,
    // stagger:0.1,
    opacity:0,
    scrollTrigger :{
        trigger : "#card1",
        scroller : "body",
        start : "top 20%",
        end : "top 58%",
        scrub : 1
    }
})
gsap.to("#card2",{
    x: -1000,
    duration:2,
    // stagger:0.1,
    opacity:0,
    scrollTrigger :{
        trigger : "#card1",
        scroller : "body",
        start : "top -20%",
        end : "top 58%",
        scrub : 1
    }
})
gsap.to("#card3",{
    x: -1000,
    duration:3,
    // stagger:0.1,
    opacity:0,
    scrollTrigger :{
        trigger : "#card2",
        scroller : "body",
        start : "top -10%",
        end : "top 58%",
        scrub : 1
    }
})
gsap.to("#help",{
    y: 200,
    duration:0.5,
    opacity:0,
    // stagger:0.1,
    scrollTrigger :{
        trigger : "#help",
        scroller : "body",
        start : "top -10%",
        end : "top 58%",
        scrub : 1
    }
})
gsap.from("#page3>h1, #top, #middle, #bottom",{
    y: 100,
    opacity:0,
    duration:5,
    stagger:1,
    scrollTrigger :{
        trigger : "#help",
        scroller : "body",
        start : "top -30%",
        end : "top 58%",
        scrub : 1
    }
})
gsap.from("#c-1, #c-3",{
    y: 500,
    opacity:0.1,
    duration:3,
    stagger:0.1,
    scrollTrigger :{
        trigger : "#help",
        scroller : "body",
        start : "top 10%",
        end : "top 88%",
        scrub : 1
    }
})
gsap.from(".lines>h3",{
    y: -500,
    opacity:0,
    duration:3,
    // stagger:0.1,
    scrollTrigger :{
        trigger : ".lines>h3",
        scroller : "body",
        start : "top -20%",
        end : "top 58%",
        scrub : 1
    }
})
gsap.from("#page4-img", {
    y:60,
    opacity:0,
    duration: 2,
    scrollTrigger :{
        trigger : "#page4-img",
        scroller : "body",
        start : "top 80%",
        end : "top 98%",
        scrub : 1,
    }

    
})
gsap.from("#headings", {
    y:60,
    opacity:0,
    duration: 2,
    scrollTrigger :{
        trigger : "#headings",
        scroller : "body",
        start : "top 50%",
        end : "top 98%",
        scrub : 1,
    }

    
})
gsap.from("#left-cnt, #right-cnt", {
    y:60,
    opacity:0,
    duration: 2,
    scrollTrigger :{
        trigger : "#left-cnt, #right-cnt",
        scroller : "body",
        start : "top 270%",
        
        scrub : 1,
    }

    
})
