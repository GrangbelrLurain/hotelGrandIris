
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

calenderMaker();
function calenderMaker(){
  //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
  const today = new Date();

  const setCalendarData = (year, month) => {
    //빈 문자열을 만들어줍니다.
    let calHtml = "";

    //getMonth(): Get the month as a number (0-11)
    //month 인자는 getMonth로 구한 결과 값에 1을 더한 상태이므로
    //다시 1을 뺀 값을 Date 객체의 인자로 넘겨줍니다.
    //그러면 오늘 날짜의 Date 객체가 반환됩니다.
    const setDate = new Date(year, month - 1, 1);

    //getDate(): Get the day as a number (1-31)
    //이번 달의 첫째 날을 구합니다.
    const firstDay = setDate.getDate();

    //getDay(): Get the weekday as a number (0-6)
    //이번 달의 처음 요일을 구합니다.
    const firstDayName = setDate.getDay();

    //new Date(today.getFullYear(), today.getMonth(), 0);
    //Date객체의 day 인자에 0을 넘기면 지난달의 마지막 날이 반환됩니다.
    //new Date(today.getFullYear(), today.getMonth(), 1);
    //Date객체의 day 인자에 1을 넘기면 이번달 첫째 날이 반환됩니다.
    //이번 달의 마지막 날을 구합니다.
    const lastDay = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate();
    //지난 달의 마지막 날을 구합니다.
    const prevLastDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();

    //매월 일수가 달라지므로 이번 달 날짜 개수를 세기 위한 변수를 만들고 초기화 합니다.
    let startDayCount = 1;
    let lastDayCount = 1;

    //1~6주차를 위해 6번 반복합니다.
    for (let i = 0; i < 6; i++) {
      //일요일~토요일을 위해 7번 반복합니다.
      for (let j = 0; j < 7; j++) {
        // i == 0: 1주차일 때
        // j < firstDayName: 이번 달 시작 요일 이전 일 때
        if (i == 0 && j < firstDayName) {
          //일요일일 때, 토요일일 때, 나머지 요일 일 때
          if (j == 0) {
            calHtml +=
              `<div><span>${(prevLastDay - (firstDayName - 1) + j)}</span><span></span></div>`;
          } else if (j == 6) {
            calHtml +=
              `<div><span>${(prevLastDay - (firstDayName - 1) + j)}</span><span></span></div>`;
          } else {
            calHtml +=
              `<div><span>${(prevLastDay - (firstDayName - 1) + j)}</span><span></span></div>`;
          }
        }
        // i == 0: 1주차일 때
        // j == firstDayName: 이번 달 시작 요일일 때
        else if (i == 0 && j == firstDayName) {
          //일요일일 때, 토요일일 때, 나머지 요일 일 때
          if (j == 0) {
            calHtml +=
              `<div><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
          } else if (j == 6) {
            calHtml +=
              `<div><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
          } else {
            calHtml +=
              `<div><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
          }
        }
        // i == 0: 1주차일 때
        // j > firstDayName: 이번 달 시작 요일 이후 일 때
        else if (i == 0 && j > firstDayName) {
          //일요일일 때, 토요일일 때, 나머지 요일 일 때
          if (j == 0) {
            calHtml +=
              `<div><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
          } else if (j == 6) {
            calHtml +=
              `<div><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
          } else {
            calHtml +=
              `<div><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
          }
        }
        // startDayCount <= lastDay: 이번 달의 마지막 날이거나 이전일 때
        else if (i > 0 && startDayCount <= lastDay) {
          //일요일일 때, 토요일일 때, 나머지 요일 일 때
          if (j == 0) {
            calHtml +=
              `<div><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
          } else if (j == 6) {
            calHtml +=
              `<div><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
          } else {
            calHtml +=
              `<div><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
          }
        }
        // startDayCount > lastDay: 이번 달의 마지막 날 이후일 때
        else if (startDayCount > lastDay) {
          if (j == 0) {
            calHtml +=
              `<div><span>${lastDayCount++}</span><span></span></div>`;
          } else if (j == 6) {
            calHtml +=
              `<div><span>${lastDayCount++}</span><span></span></div>`;
          } else {
            calHtml +=
              `<div><span>${lastDayCount++}</span><span></span></div>`;
          }
        }
      }
    }
    //캘린더 div 태그에 내용 붙임
    document
      .querySelector("#offer .now .calendar")
      .insertAdjacentHTML("beforeend", calHtml);
  };

  const setFixDayCount = number => {
    //캘린더 하루마다 아이디를 만들어주기 위해 사용
    let fixNum = "";
    if (number < 10) {
      fixNum = "0" + number;
    } else {
      fixNum = number;
    }
    return fixNum;
  };

  if (today.getMonth() + 1 < 10) {
    setCalendarData(today.getFullYear(), "0" + (today.getMonth() + 1));
  } else {
    setCalendarData(today.getFullYear(), "" + (today.getMonth() + 1));
  }
}
