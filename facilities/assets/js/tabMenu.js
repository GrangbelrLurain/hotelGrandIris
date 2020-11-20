document.querySelectorAll(".cont1 > .list > h3").forEach(function(elem, index){
  const clickBtn = elem;
  const clickIndex = index;
  const allCont = document.querySelectorAll(".cont1 > .list")

  elem.addEventListener("click", function(){
    allCont.forEach((elem) => elem.classList.remove("active"));
    clickBtn.parentElement.classList.add("active");
  })
})