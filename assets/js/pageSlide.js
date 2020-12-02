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
    // 이벤트 불러오기 사전 설정
    const checkSlide = document.querySelectorAll(".slidesActive")[document.querySelectorAll(".slidesActive").length-1]
    const everySlides = everyElem

    // diningAnimation 불러오기

    if(checkSlide == everySlides[2]){
      diningAnimation();
    } else {
      diningAnimationReset();
    }

    //casinoAnimation 불러오기

    if(checkSlide == everySlides[3]){
      casinoAnimation();
    } else {
      casinoAnimationReset();
    }
    //facilitiesAnimation 불러오기

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
  
  // 다이닝
  setTimeout(function(){
   if(scrollPage[scrollPage.length-4] == document.querySelector("#dining")){
     diningAnimation();
   } else {
     diningAnimationReset();
   }
 },400)
   
 // 카지노
  setTimeout(function(){
   if(scrollPage[scrollPage.length-3] == document.querySelector("#casino")){
     casinoAnimation();
   } else {
     casinoAnimationReset();
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

// CASINO ACTIVE EVENT


function casinoAnimation(){
	const casinoElem = document.querySelector("#casino");
	const targets = document.querySelector(".slidedown");
    	
	$(".slidedown").css("display", "block").animate({"opacity":"1","marginTop":"0px"},600);
}
function casinoAnimationReset(){
	$(".slidedown").css("display", "none").animate({"opacity":"0"}, 600).css("marginTop", "-600px");
}

//dining event

function diningAnimation(){
      $('.dining').addClass("active");  
    
}
function diningAnimationReset(){
     $('.dining').removeClass("active");
}


