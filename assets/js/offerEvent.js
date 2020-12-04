
loadingToday();

function loadingToday(){
  const today = new Date(Date.now());
  const nextday = new Date(Date.now() + 86400000)
  const dates = [today.getFullYear() + "년" + (today.getMonth() + 1) + "월" + today.getDate() + "일",
  (nextday.getFullYear()) + "년" + (nextday.getMonth() + 1) + "월" + nextday.getDate() + "일"];
  

  document.querySelector(".dateSelect").innerHTML = dates[0] + " ~ " + dates[1];
}

// ROOM 선택 클릭 이벤트 추가
document.querySelectorAll(".offer .roomSelectWrap .roomSelect ul li").forEach((elem) => {

  const btnElem = document.querySelector(".offer .roomSelectWrap .roomSelectBtn");
  const allElem = document.querySelectorAll(".offer .roomSelectWrap .roomSelect ul li");
  const clickElem = elem;
  const clickElemName = elem.innerHTML;

  elem.addEventListener("click",() => {
    btnElem.innerHTML = clickElemName;
    allElem.forEach((elem) => elem.classList.remove("active"));
    clickElem.classList.add("active");
  })
});

// ETC : ROOM, ADULT, CHILD (개수) 클릭 이벤트 추가
document.querySelectorAll(".offer .etcOption ul").forEach((elem, index) => {
  const clickGroupIndex = index;
  const clickGroupAllElem = elem.querySelectorAll("li");
  const btnElem = document.querySelectorAll(".etcSelectWrap > div > button")[clickGroupIndex];
  clickGroupAllElem.forEach((elem) => {
    const clickElem = elem;
    elem.addEventListener("click", () => {
      clickGroupAllElem.forEach((elem) => {elem.classList.remove("active")});
      clickElem.classList.add("active");
      btnElem.innerHTML = clickElem.innerHTML;
    })
  })
})

// 달력 추가 및 선택 이벤트
monthMaker();

function monthMaker(){
  const today = new Date(Date.now());
  const thisMonth = today.getMonth() + 1;
  const nextMonth = thisMonth+1 <= 12 ? thisMonth+1 : 1;

  document.querySelector(".offer .selectWrap .dateOption .now .title").innerHTML = thisMonth + "월"
  document.querySelector(".offer .selectWrap .dateOption .next .title").innerHTML = nextMonth + "월"
}

function calenderMaker(){
  const today = new Date(Date.now());
  const fistDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const lastDay = new Date(today.getFullYear(), today.getMonth()+1, 0);
}