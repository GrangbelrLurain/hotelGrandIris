// Mouse Wheel Event
// 마우스 휠 이벤트 관리
window.addEventListener("wheel", function(events){
  contentsScroll(events);
  asideActive();
})

// 마우스 스크롤 작동 함수
function contentsScroll (events){
  // 마우스 휠 이벤트 잠시 멈춤
  window.removeEventListener("wheel", contentsScroll);

  const activeElem = document.querySelectorAll(".slidesActive");
  const everyElem = document.querySelectorAll(".slides");

  // 마우스 휠 하향 시 작동
  if(events.deltaY < 0){
    everyElem.forEach(function(elem, index){
        if(elem == activeElem[activeElem.length -1] && index > 0){
        elem.classList.remove("slidesActive");

        everyElem[index - 1].classList.add("slidesActive");
        console.log("hi");
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
  // 마우스 휠 이벤트 재작동
	setTimeout(function(){
		window.addEventListener("wheel", contentsScroll);
	}, 400);
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
  asideList[slidesActiveIndex-1].classList.add("active");
}