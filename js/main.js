gsap.registerPlugin(ScrollTrigger);

function lenis() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    //console.log(e)
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

setTimeout(() => {
  lenis();
}, 3000);

///////////////////////////////////////////////

//preload
let container = document.querySelector("#preload");
let imgLoaded = 0;
let imgTotal = 38;
let current = 0;
let progressTimer;
let topValue;
let sp;
function showLoadingScreen() {
  window.scrollTo(0, 0);
  sp = requestAnimationFrame(showLoadingScreen);
}
showLoadingScreen();
setTimeout(() => {
  cancelAnimationFrame(sp);
  clearInterval(progressTimer);
  let i = 0;
  console.log(i++);
}, 3000);

progressTimer = setInterval(updateProgress, 1000 / 60);

function updateProgress() {
  imgLoaded++;
  let target = (imgLoaded / imgTotal) * 100;

  current += (target - current) * 0.1;
  console.log(current);

  if (current > 250) {
    container.classList.add("progress-complete");
    gsap.to(container, {
      duration: 1,
      yPercent: -100,
      ease: "none",
    });
  }
}

//전체화면 애니, 각영역으로 이동, 메뉴
let scrollActive = () => {
  let scrollYY = scrollY;
  let sections = document.querySelectorAll("section[id]");

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight; //각 section의 높이값
    let sectionTop = current.offsetTop - 120; //각 section의 전체문서에서의 top의 위치

    let sectionId = current.getAttribute("id");

    let sectionClass = document.querySelector(
      `.header_nav a[href*="${sectionId}"]`
    );

    if (scrollYY > sectionTop && scrollYY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("action-link");
    } else {
      sectionClass.classList.remove("action-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// sec1
let clutter1 = "";
// textContent --> 텍스트만 추출
let sec1_about = document
  .querySelector(".s1_txtbox ul li:nth-child(1)")
  .textContent.split("");
sec1_about.forEach(function (dets) {
  clutter1 += `<span>${dets}</span>`; //clutter = clutter + `<span>a</span>`
  document.querySelector(".s1_txtbox ul li:nth-child(1)").innerHTML = clutter1;
});

let clutter2 = "";
let sec1_con = document
  .querySelector(".s1_txtbox ul li:nth-child(2)")
  .textContent.split("");
sec1_con.forEach(function (dets) {
  clutter2 += `<span>${dets}</span>`; //clutter = clutter + `<span>a</span>`
  document.querySelector(".s1_txtbox ul li:nth-child(2)").innerHTML = clutter2;
});

let clutter3 = "";
let sec1_site = document
  .querySelector(".s1_txtbox ul li:nth-child(2)")
  .textContent.split("");
sec1_site.forEach(function (dets) {
  clutter3 += `<span>${dets}</span>`; //clutter = clutter + `<span>a</span>`
  document.querySelector(".s1_txtbox ul li:nth-child(3)").innerHTML = clutter3;
});

let tl1 = gsap.timeline();

tl1
  .to(".port", { y: -245, duration: 1 ,delay:4 }, "tx")
  .to(".port", { x: -250, duration: 1 }, "tx2")
  .to(".folio", { y: 320, duration: 1 ,delay:4}, "tx")
  .to(".folio", { x: 150, duration: 1 }, "tx2")
  .to(".s1_txt_bg", { display: "none", duration: 1 }, "tx2")
  .from(".port2", { opacity: 0 })
  .from(".folio2", { opacity: 0 }, "<")
  .from(".main_img", { clipPath: `polygon(0% 50%, 100% 50%, 100% 50%, 0 50%)` })
  .fromTo(".s1_line1", { width: 0 }, { width: "500px" }, "<")
  .fromTo(
    ".s1_txtbox ul li:nth-child(1) span",
    {
      opacity: 0,
      ease: Back.easeOut.config(1.7),
      y: 50,
      rotation: -20,
      scale: 0,
    },
    {
      opacity: 1,
      ease: Back.easeOut.config(1.7),
      stagger: 0.05,
      y: 0,
      rotation: 0,
      scale: 1,
    }
  )
  .fromTo(
    ".s1_txtbox ul li:nth-child(2) span",
    {
      opacity: 0,
      ease: Back.easeOut.config(1.7),
      y: 50,
      rotation: -20,
      scale: 0,
    },
    {
      opacity: 1,
      ease: Back.easeOut.config(1.7),
      stagger: 0.05,
      y: 0,
      rotation: 0,
      scale: 1,
    }
  )
  .fromTo(
    ".s1_txtbox ul li:nth-child(3) span",
    {
      opacity: 0,
      ease: Back.easeOut.config(1.7),
      y: 50,
      rotation: -20,
      scale: 0,
    },
    {
      opacity: 1,
      ease: Back.easeOut.config(1.7),
      stagger: 0.05,
      y: 0,
      rotation: 0,
      scale: 1,
    }
  );

gsap.from(".arrow", {
  scrollTrigger: {
    trigger: ".sec1",
    start: "top top",
    end: "bottom center",
    scrub: 1,
    // markers:true
  },
  rotation: "360deg",
});

// clock
setInterval(() => {
  let today = new Date();
  let dayList = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let hh = addZero(today.getHours());
  let mm = addZero(today.getMinutes());
  let ss = addZero(today.getSeconds());
  let MM = today.getMonth() + 1; //0~11
  let DD = addZero(today.getDate());
  let yy = today.getFullYear();
  let dd = dayList[today.getDay()].toUpperCase(); //0~6

  document.querySelector("#hours").innerHTML = hh;
  document.querySelector("#min").innerHTML = mm;
  document.querySelector("#month").innerHTML = MM;
  document.querySelector("#date").innerHTML = DD;
  document.querySelector("#year").innerHTML = yy;
  document.querySelector("#day").innerHTML = dd;

  function addZero(num) {
    return num < 10 ? "0" + num : num;
  }
}, 1000);

// sec2
let path1 = document.querySelector(".theLine");
let path1Length = path1.getTotalLength();
console.log(path1Length);

path1.style.strokeDasharray = path1Length;
path1.style.strokeDashoffset = path1Length;

let pulses = gsap
  .timeline({
    defaults: {
      duration: 0.05,
      autoAlpha: 1,
      scale: 1.2,
      transformOrigin: "center",
      ease: "elastic.out(1,0.3)",
    },
  })
  .to(".ball01", {}, 0.15)
  .to(".ball02,.text02", {}, 0.24)
  .to(".ball03,.text03", {}, 0.36)
  .to(".ball04,.text04", {}, 0.4)
  .to(".ball05,.text04", {}, 0.9);

let main = gsap
  .timeline({
    defaults: {
      duration: 1,
    },
    scrollTrigger: {
      trigger: "#svg",
      start: "top center",
      end: "+=300",
      scrub: 1.9,
      //  markers:true
    },
    onUpdate: animationUpdate,
  })
  .to(".ball04", {
    duration: 0.01,
    autoAlpha: 1,
  })
  .to(
    path1,
    {
      strokeDashoffset: 0,
    },
    "ball"
  )
  .to(
    ".ball04",
    {
      motionPath: {
        path: ".theLine", //path연결
        align: ".theLine",
        alignOrigin: [0.5, 0.5],
      },
    },
    "ball"
  )
  .add(pulses, 0); //timeline을 연결하는 방법 0타임라인의 시작지점

function animationUpdate() {
  // console.log(this.progress())
}

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sec2",
      start: "top top",
      end: "+=400",
      scrub: true,
      // markers:true
    },
  })
  .from(
    ".s2_profile_left .pr_web",
    { opacity: 0, y: 100, ease: "sine.inOut" },
    "s2_pr"
  )
  .from(
    ".s2_profile_left .pr_n",
    { opacity: 0, y: 100, ease: "sine.inOut" },
    "s2_pr2"
  )
  .from(
    ".s2_profile_left .pr",
    { opacity: 0, y: 100, ease: "sine.inOut" },
    "s2_pr3"
  )
  .fromTo(
    ".s2_profile_left .pr_line",
    { width: 0, ease: "sine.inOut" },
    { width: "70px" },
    "s2_pr4"
  )
  .from(".s2_profile_left .pr_tx span", {
    opacity: 0,
    stagger: 0.2,
    y: 50,
    ease: "sine.inOut",
  })
  .from(
    ".s2_profile_left .pr_phone span",
    { opacity: 0, y: 50, ease: "sine.inOut" },
    "s2_pr5"
  )
  .from(
    ".s2_profile_right .tit_fir",
    { opacity: 0, y: 100, stagger: 0.2, ease: "sine.inOut" },
    "s2_pr"
  )
  .from(
    ".s2_profile_right .education .date span",
    { opacity: 0, y: 100, stagger: 0.2, ease: "sine.inOut" },
    "s2_pr2"
  )
  .from(
    ".s2_profile_right .education .le_txt span",
    { opacity: 0, y: 100, stagger: 0.2, ease: "sine.inOut" },
    "s2_pr2"
  )
  .from(
    ".s2_profile_right .tit_sec",
    { opacity: 0, y: 100, stagger: 0.2, ease: "sine.inOut" },
    "s2_pr3"
  )
  .from(
    ".s2_profile_right .career .date span",
    { opacity: 0, y: 100, stagger: 0.2, ease: "sine.inOut" },
    "s2_pr4"
  )
  .from(
    ".s2_profile_right .career .le_txt span",
    { opacity: 0, y: 100, stagger: 0.2, ease: "sine.inOut" },
    "s2_pr4"
  )
  .from(
    ".s2_profile_right .tit_thir",
    { opacity: 0, y: 100, stagger: 0.2, ease: "sine.inOut" },
    "s2_pr5"
  )
  .from(
    ".s2_profile_right .license .date span",
    { opacity: 0, y: 100, stagger: 0.2, ease: "sine.inOut" },
    "li"
  )
  .from(
    ".s2_profile_right .license .le_txt span",
    { opacity: 0, y: 100, stagger: 0.2, ease: "sine.inOut" },
    "li"
  );

gsap.from(".profile_img", {
  scrollTrigger: {
    trigger: ".sec2",
    start: "-5% top",
    end: "bottom center",
    scrub: 1,
  },
  y: 100,
  rotation: 5,
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sec2",
      start: "-100% top",
      end: "center 30%",
      scrub: 1,
      // markers:true
    },
  })
  .from(".s2_hello", { y: -110 });

//sec3
let s3_text = document.querySelectorAll(".s3_text");

let tl3 = gsap.timeline();

tl3.to(".s3_img_1", { y: -400, x: 1000, scale: 1.3 });
tl3.to(".s3_img_2", { y: -100, x: -300 }, "<");
tl3.to(".s3_img_3", { y: 800, x: 200, scale: 2 }, "<");
tl3.to(".s3_img_4", { y: -1000, x: 100 }, "<");
tl3.to(".s3_img_5", { y: -300, x: 100 }, "<");
tl3.to(".s3_img_6", { y: -100, x: 100, scale: 1.3 }, "<");
tl3
  .to(".s3_img_7", { y: 500, x: 100, scale: 2 }, "<")
  .to(".s3_wrap", { xPercent: -138 }, "<");

ScrollTrigger.create({
  animation: tl3,
  trigger: ".sec3",
  start: "top top",
  end: "+=3000",
  scrub: 1,
  pin: true,
  // markers:true
});

//sec4
let conScales = document.querySelectorAll(".con-scale");
conScales.forEach(function (conScale) {
  gsap.fromTo(
    conScale,
    {
      scale: 0.7,
      rotation: 15,
    },
    {
      scrollTrigger: {
        trigger: conScale,
        start: "top 80%",
        end: "top 20%",
        scrub: 2,
      },
      scale: 1,
      duration: 1,
      rotation: 0,
      ease: "power3.out",
    }
  );
});

// skillbar
let MAX = 100;
let circleProgressInstances = [];
document.querySelectorAll(".progress").forEach((progressEle, index) => {
  let initialvalue = document.querySelectorAll(".value-input")[index].value;
  let classText = document.querySelectorAll(".skill h3")[index].innerHTML;

  let cp = new CircleProgress(progressEle, {
    max: MAX,
    value: 0,
    animationDuration: 1500,
    // textFormat: (val)=>val+"%"
    textFormat: (val) => val,
  });

  console.log(cp);
  circleProgressInstances.push(cp);

  ScrollTrigger.create({
    trigger: ".skill",
    start: "top 70%",
    scrub: 1,
    onEnter: () => {
      cp.value = initialvalue;
    },
    onLeaveBack: () => {
      cp.value = 0;
    },
  });
});
let clutter4 = "";
// textContent --> 텍스트만 추출
let sec4_typing = document
  .querySelector(".skill_con .typing")
  .textContent.split("");
sec4_typing.forEach(function (dets) {
  clutter4 += `<span>${dets}</span>`; //clutter = clutter + `<span>a</span>`
  document.querySelector(".skill_con .typing").innerHTML = clutter4;
});
let clutter5 = "";
// textContent --> 텍스트만 추출
let sec4_typing1 = document
  .querySelector(".skill_con .typing1")
  .textContent.split("");
sec4_typing1.forEach(function (dets) {
  clutter5 += `<span>${dets}</span>`; //clutter = clutter + `<span>a</span>`
  document.querySelector(".skill_con .typing1").innerHTML = clutter5;
});
let clutter6 = "";
// textContent --> 텍스트만 추출
let sec4_typing2 = document
  .querySelector(".skill_con .typing2")
  .textContent.split("");
sec4_typing2.forEach(function (dets) {
  clutter6 += `<span>${dets}</span>`; //clutter = clutter + `<span>a</span>`
  document.querySelector(".skill_con .typing2").innerHTML = clutter6;
});
let clutter7 = "";
// textContent --> 텍스트만 추출
let sec4_typing3 = document
  .querySelector(".skill_con .typing3")
  .textContent.split("");
sec4_typing3.forEach(function (dets) {
  clutter7 += `<span>${dets}</span>`; //clutter = clutter + `<span>a</span>`
  document.querySelector(".skill_con .typing3").innerHTML = clutter7;
});
let clutter8 = "";
// textContent --> 텍스트만 추출
let sec4_typing4 = document
  .querySelector(".skill_con .typing4")
  .textContent.split("");
sec4_typing4.forEach(function (dets) {
  clutter8 += `<span>${dets}</span>`; //clutter = clutter + `<span>a</span>`
  document.querySelector(".skill_con .typing4").innerHTML = clutter8;
});
let clutter9 = "";
// textContent --> 텍스트만 추출
let sec4_myskill = document.querySelector(".myskill").textContent.split("");
sec4_myskill.forEach(function (dets) {
  clutter9 += `<span>${dets}</span>`; //clutter = clutter + `<span>a</span>`
  document.querySelector(".myskill").innerHTML = clutter9;
});
let tl4 = gsap.timeline();

tl4
  .from(".myskill span", {
    opacity: 0,
    yPercent: 50,
    duration: 2,
    stagger: 0.8,
  })
  .fromTo(
    ".skill_con .typing span",
    { opacity: 0 },
    { opacity: 1, stagger: 0.8, duration: 1 },
    "<"
  )
  .fromTo(
    ".skill_con .typing1 span",
    { opacity: 0 },
    { delay: 2, opacity: 1, stagger: 0.8, duration: 1 },
    "<"
  )
  .fromTo(
    ".skill_con .typing2 span",
    { opacity: 0 },
    { opacity: 1, stagger: 0.8, duration: 1 },
    "<"
  )
  .fromTo(
    ".skill_con .typing3 span",
    { opacity: 0 },
    { opacity: 1, stagger: 0.8, duration: 1 },
    "<"
  )
  .fromTo(
    ".skill_con .typing4 span",
    { opacity: 0 },
    { opacity: 1, stagger: 0.8, duration: 1 },
    "<"
  )
  .to(".paper-plane", { offsetDistance: "100%", duration: 100 });

ScrollTrigger.create({
  animation: tl4,
  trigger: ".sec4",
  start: "top top",
  end: "+=2000",
  pin: true,
  scrub: 1,
  anticipatePin: 1,
  // markers: true,
});

//비행기의 방향
window.addEventListener("wheel", myFunction);
let plane = document.querySelector(".paper-plane");
function myFunction(event) {
  let y = event.deltaY;
  // console.log(y)

  if (y > 0) {
    plane.style.transform = `rotate(49deg)`;
  } else {
    plane.style.transform = `rotate(229deg)`;
  }
}

//sec5
let tl5_text = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".s5_text",
      start: "-50% top",
      end: "+=500",
      scrub: 1,
    },
  })
  .from(".s5_text span:nth-child(1)", { x: 1000 })
  .from(".s5_text span:nth-child(2)", { x: -1000 }, "<")
  .from(".s5_text span:nth-child(3)", { x: 1000 }, "<");

let splinefixed = () => {
  let spline = document.querySelector(".canvas-cont");
  // console.log(scrollY)

  if (scrollY >= 10014) {
    spline.style.opacity = 1;
    spline.style.transition = "0.3s";
  } else {
    spline.style.opacity = 0;
  }

  if (scrollY >= 22179) {
    spline.style.opacity = 0;
    spline.style.transition = "none";
  }
};
window.addEventListener("scroll", splinefixed);

let sec5_h3 = document.querySelectorAll(".s5_si_right h3");

sec5_h3.forEach((text) => {
  let letters = text.textContent.split("");
  let spannedLetters = letters
    .map((letter) => `<span>${letter}</span>`)
    .join("");

  text.innerHTML = spannedLetters;
});
let sec5_p=document.querySelectorAll(".s5_si_right p")

sec5_p.forEach((text) => {
  let letters = text.textContent.split("");
  let spannedLetters = letters.map(letter => `<span>${letter}</span>`).join("");
  
  text.innerHTML = spannedLetters;
});

let webView = document.querySelectorAll(".s5_site");

webView.forEach(function (secsrs) {
  let targetSelect = secsrs.querySelectorAll("h3 span");
  let targetSelect2 = secsrs.querySelectorAll(".s5_si_right p span");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: secsrs,
        start: "-10% center",
        end: "+=100",
        scrub: 1,
        //  markers:true
      },
    })
    .fromTo(
      targetSelect,
      {
        opacity: 0,
        ease: Back.easeOut.config(1.7),
        y: 50,
        rotation: -20,
        scale: 0,
      },
      {
        opacity: 1,
        ease: Back.easeOut.config(1.7),
        stagger: 0.05,
        y: 0,
        rotation: 0,
        scale: 1,
      }
    )
    .fromTo(targetSelect2,{ opacity: 0, ease: Back.easeOut.config(1.7),y: 50,rotation: -20,scale: 0}, { opacity: 1,ease: Back.easeOut.config(1.7),stagger: 0.05,y: 0, rotation: 0,scale: 1}, "<")
});

let tl5_st = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".txtsticky",
      start: "top center",
      end: "+=1000",
      scrub: 1,
      // markers:true,
    },
  })
  .from(".stickybox:nth-child(2)", { y: 200 })
  .from(".stickybox:nth-child(3)", { y: 400, delay: -0.5 })
  .from(".stickybox:nth-child(4)", { y: 600, delay: -0.5 })
  .from(".stickybox:nth-child(5)", { y: 800, delay: -0.5 });

gsap.to('.badge', {
  rotation: 360,
  duration: 30,
  ease: "none",
  repeat: -1
})

//footer
let tl6=gsap.timeline({
  scrollTrigger:{
    trigger:".sec6",
    start:"-20% top",
    end:"top top",
    scrub:1,
    // markers:true
  }
})
.from(".thank",{x:-950})
.fromTo(".s6_line",{width:0},{width:"901px"},"<")
.from(".you",{x:550},"<")
.fromTo(".s6_line2",{width:0},{width:"463px"},"<")
