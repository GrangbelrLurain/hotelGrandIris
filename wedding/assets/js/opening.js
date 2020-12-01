
function openingAnimate(){
  let i = 0;
  const openingAnimation = setInterval(function(){
    const aniElems = document.querySelectorAll(".op_ani");
    const aniWrap = document.querySelector("#opening")
    if(!aniElems.length){
      clearInterval(openingAnimation);
    }else if(i < aniElems.length){
      aniElems[i].classList.add("active");
      i = i + 1
    }else if(i < aniElems.length + 1){
      aniWrap.style.opacity = 0;
      i = i + 1
    }else{
      clearInterval(openingAnimation);
      document.querySelector("body").removeChild(aniWrap);
    }
  }, 1000)
}
openingAnimate();

document.querySelector(".op_skip").addEventListener("click", () => {
  const aniWrap = document.querySelector("#opening")

  aniWrap.style.opacity = 0;
  window.scrollTo(0, 0);
  setTimeout(() => {
    document.querySelector("body").removeChild(aniWrap);
  }, 1000)
})