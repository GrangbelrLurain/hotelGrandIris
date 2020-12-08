document.querySelectorAll("#booking .booking .dateOption .calender td").forEach( (elem, index) => {
  elem.addEventListener("click", function(){
    daySelect(elem, index);
  })
})

function daySelect(elem, index){
  
  const allElem = document.querySelectorAll("#booking .booking .dateOption .calender td")
  allElem.forEach((allElem) => {
    if(!allElem.classList.contains("lastClick") && !allElem.classList.contains("fistClick")){
      elem.classList.add("firstClick");
    }
  })
}