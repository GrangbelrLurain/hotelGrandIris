addScrollEvent();

function addScrollEvent(){
  window.addEventListener("scroll", function(events){

    moveContents(events);
  })
}

window.beforeScroll = document.documentElement.scrollTop || 0;
// 처음 스크롤 위치를 잡아주고, 변수를 전역변수로 지정해줌

function scrollDirectFind(){
  
  let documentY = document.documentElement.scrollTop;
  let direction = documentY - window.beforeScroll >= 0 ? 1 : -1;

  window.beforeScroll = documentY; // 이전에 스크롤했던 위치를 다시 저장해줌

  return direct = direction;
}

function moveContents(events){
  scrollDirectFind();

  console.log(direct);
  const offerLocation = document.querySelector("#offer").offsetTop;
  const weddingLocation = document.querySelector("#wedding").offsetTop;
  const diningLocation = document.querySelector("#dining").offsetTop;
  const casinoLocation = document.querySelector("#dining").offsetTop;
  const facilitiesLocation = document.querySelector("#facilities").offsetTop;


  /*window.scrollTo({top:weddingLocation, behavior:'smooth'});*/
}