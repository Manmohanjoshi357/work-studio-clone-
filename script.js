

function loading() {
    var t1 = gsap.timeline()
    t1.to('#yellowdiv', {
        top: "-100%",
        delay: 0.2,
        duration: 0.5,
        ease: "expo.out",//search google for understanding easing gsap

    })

    t1.to("#loader video", {
        top: "-100%",
        delay: 0.5,
        duration: 0.1,
        ease: "expo.out",//search google for understanding easing gsap
    })

    t1.to('#loader', {
        delay: 0,
        duration: 0,
        opacity: 0

    })

}
loading();

function page2Effect() {
    var elems = document.querySelectorAll(".elem")
    var page2 = document.querySelector("#page2")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var bgimg = e.getAttribute("data-img")
            page2.style.backgroundImage = `url(${bgimg})`
        })
    })

}
page2Effect();


function locmotiveScroll(){
    // for smooth scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });


    // for click effect target top     👉👉🏼 scrollTo(target, options)
    document.querySelector("#footer #div1").addEventListener("click", () => {
        scroll.scrollTo('#page1')
    })

}
locmotiveScroll();


