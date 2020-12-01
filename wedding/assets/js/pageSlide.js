// Mouse Wheel Event
// 마우스 휠 이벤트 관리
const contentsScrollHandler = function(events){
  contentsScroll(events);
  asideActive();
  window.scrollTo(0, 0);
}

// 마우스 휠 이벤트 추가
window.addEventListener("wheel", contentsScrollHandler);

// 마우스 스크롤 작동 함수
function contentsScroll (events){
  // 마우스 휠 이벤트 잠시 멈춤
  window.removeEventListener("wheel", contentsScrollHandler);

  const activeElem = document.querySelectorAll(".slidesActive");
  const everyElem = document.querySelectorAll(".slides");

  // 마우스 휠 하향 시 작동
  if(events.deltaY < 0){
    everyElem.forEach(function(elem, index){
        if(elem == activeElem[activeElem.length -1] && index > 0){
        elem.classList.remove("slidesActive");

        everyElem[index - 1].classList.add("slidesActive");
      }
    })

    // 마우스 휠 상향 시 작동
  } else if (events.deltaY > 0){
    everyElem.forEach(function(elem, index){
      if(elem == activeElem[activeElem.length -1] && index < everyElem.length-1){

      everyElem[index + 1].classList.add("slidesActive");
    }
  })
}  
  //facilitiesAnimation 불러오기
    const checkSlide = document.querySelectorAll(".slidesActive")[document.querySelectorAll(".slidesActive").length-1]
    const everySlides = everyElem

    if(checkSlide == everySlides[4]){
      facilitiesAnimation();
    } else {
      facilitiesAnimationReset();
    }

  // 마우스 휠 이벤트 재작동
  setTimeout(function(){
    window.addEventListener("wheel", contentsScrollHandler);
  }, 200);
}

// 터치 반응 이벤트

window.addEventListener("touchstart", handleStart,false);
window.addEventListener("touchmove", handleMove, false);
window.addEventListener("touchend", handleEnd, false);




















// Aside Click Event
// 클릭 이벤트 관리
document.querySelectorAll("aside > ul > li").forEach(
  (elem, index) => {
    const timeSet = 30;

    elem.addEventListener("click", function(){
      asideClickScroll(elem, index, timeSet)
    }, false);
  })

  
// 클릭시 스크롤 작동 함수
function asideClickScroll (clickElem, clickIndex, timeSet){
  const scrollPage = document.querySelectorAll(".slides");

  let slidesActiveIndex = 0;
  scrollPage.forEach( (elem) => {
    if(elem.classList.contains("slidesActive")){
    slidesActiveIndex++
  }
  });
  
  if(slidesActiveIndex > clickIndex){
    let i = slidesActiveIndex;
    console.log(i)
    const interval = setInterval(function(){
      if(i-- > clickIndex){
        scrollPage[i+1].classList.remove("slidesActive");
        console.log(i);
      }else{
        clearInterval(interval);
        asideActive()
      }
    }, timeSet)
  }else if(slidesActiveIndex <= clickIndex){
    let i = 0;
    console.log(i)
    const interval = setInterval(function(){
      if(i++ < clickIndex){
        scrollPage[i].classList.add("slidesActive");
        console.log(i);
      }else{
        clearInterval(interval);
        asideActive()
      }
    }, timeSet)
  }
  //facilitiesAnimation 불러오기

  setTimeout(function(){
    if(scrollPage[scrollPage.length-2] == document.querySelector("#facilities")){
      facilitiesAnimation();
    } else {
      facilitiesAnimationReset();
    }
  },400)
}

// Aside Active Event
// 클릭&마우스 휠 작동 시 어사이드 Active 관리
function asideActive (){
  const scrollPage = document.querySelectorAll(".slides");
  const asideList = document.querySelectorAll("aside > ul > li");

  let slidesActiveIndex = 0;
  scrollPage.forEach( (elem) => {
    if(elem.classList.contains("slidesActive")){
    slidesActiveIndex++
  }
  });


  asideList.forEach((elem) => elem.classList.remove("active"));
  if(asideList[slidesActiveIndex-1]){
    asideList[slidesActiveIndex-1].classList.add("active");
  }
}

// FACILITY ACTIVE EVENT

function facilitiesAnimation(){
  const facilitiesElem = document.querySelector("#facilities");

  let i = 0;
  const faciitiesAnimate = setInterval(function(){
    const targets = document.querySelectorAll(".facilities .target");
    const slides = document.querySelectorAll(".slidesActive");
    const lastActiveElem = slides[slides.length-1];
    if(facilitiesElem != lastActiveElem){
      clearInterval(faciitiesAnimate);
      facilitiesAnimationReset();
    }
    else if (i < targets.length){
      targets[i].classList.add("ani");
      i = i + 1;
    } else {
      clearInterval(faciitiesAnimate);
    }
  }, 800)
}

function facilitiesAnimationReset(){
  const targets = document.querySelectorAll(".facilities .target");
  targets.forEach((elem) => elem.classList.remove("ani"));
} 