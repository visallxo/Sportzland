var crcr = document.querySelector("#cursor");
var blr = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    crcr.style.left = dets.x + "px"
    crcr.style.top = dets.y + "px"
    blr.style.left = dets.x - 250 + "px"
    blr.style.top = dets.y - 250 + "px"
});

var h4 = document.querySelectorAll("#nav h4");
h4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crcr.style.scale = 3;
    crcr.style.border = "1px solid #fff";
    crcr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crcr.style.scale = 1;
    crcr.style.border = "0px solid #95C11E";
    crcr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav",{
    backgroundColor: "#000",
    duration:0.5,
    height: "120px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // makers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
        }

}) 

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // mackers:true,
        start: "top -25%",
        end: "top -70%",
        scrub:2,
    }
})

gsap.from("#about-us ,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
// var counter = 1;
// setInterval(function() {
//     document.getElementById('radio' + counter).checked=true;
//     counter++;
//     if (counter > 4) {
//         counter = 1;
//     }
// },5000);
gsap.from("#container-head h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#container-head h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });
  

function initParadoxWay() {
    "use strict";
   
    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                
            }
        });
    }
    
// bubbles -----------------
    
    
    setInterval(function () {
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function () {
            $(this).remove()
        });
    }, 350);
    
}

//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});