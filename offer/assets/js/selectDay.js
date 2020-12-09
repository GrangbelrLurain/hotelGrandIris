document.querySelectorAll(".dateOption .calender td").forEach( (elem, index) => {
  elem.addEventListener("click", function(){
    daySelect(elem, index);
  })
})

function daySelect(elem, index){
  const find = document.querySelectorAll(".click");
  if(!elem.innerHTML){
    return
  }
    if(find[0] == null){
      elem.classList.add("click");
    } else if (find[0] != null && find[1] == null){
      elem.classList.add("click");
      dayMiddlePaint();
    } else {
      find.forEach((elem) => {elem.classList.remove("click")});
      document.querySelector(".firstClick").classList.remove("firstClick");
      document.querySelector(".lastClick").classList.remove("lastClick");
      elem.classList.add("click");
    }
}

function dayMiddlePaint(){
  const find = document.querySelectorAll(".click");
  const allElem = document.querySelectorAll(".dateOption .calender td");
  const dateSelectBtn = document.querySelector(".dateSelectWrap .dateSelect");

  let firstSwitch = 0;
  let lastSwitch = 0;
  if(find[0] != null && find[1] == null){
  } else if (find[0] != null && find[1] != null){
    allElem.forEach((all) => {
      if(!all.innerHTML){
        return
      } else if(firstSwitch == 1 && lastSwitch ==1){
        return
      } else if(firstSwitch == 1 && lastSwitch == 0){
        all.classList.add("click");
      }

      if(all == find[0]){
        firstSwitch = 1;
        find[0].classList.add("firstClick");
      } else if (all == find[1]){
        firstSwitch = 1;
        lastSwitch = 1;
        find[1].classList.add("lastClick");
      }
    })
  }
  if(dateSelectBtn != null){
    dateSelectBtnChange(dateSelectBtn, find[0], find[1])
  }
}

function dateSelectBtnChange(dateSelectBtn, firstSwitch, lastSwitch){
  const year = new Date().getFullYear();
  const firstMonth = firstSwitch.parentNode.parentNode.parentNode.parentNode.querySelector(".title");;
  const lastMonth = lastSwitch.parentNode.parentNode.parentNode.parentNode.querySelector(".title");

  if(firstMonth.innerHTML != "12월"){
  dateSelectBtn.innerHTML = (year + 1 + "년 ") + (firstMonth.innerHTML + " ") + (firstSwitch.innerHTML + "일 ~ ") + (year + 1 + "년") + (lastMonth.innerHTML + " ") + (lastSwitch.innerHTML + "일");
} else if(lastMonth.innerHTML != "12월") {
  dateSelectBtn.innerHTML = (year + "년 ") + (firstMonth.innerHTML + " ") + (firstSwitch.innerHTML + "일 ~ ") + (year + 1 + "년") + (lastMonth.innerHTML + " ") + (lastSwitch.innerHTML + "일");
} else {
  dateSelectBtn.innerHTML = (year + "년 ") + (firstMonth.innerHTML + " ") + (firstSwitch.innerHTML + "일 ~ ") + (year + "년") + (lastMonth.innerHTML + " ") + (lastSwitch.innerHTML + "일");
}
}