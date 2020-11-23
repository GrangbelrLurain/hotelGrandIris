
function openingAnimate(){
  let i = 0;
  const openingAnimation = setInterval(function(){
    const aniElems = document.querySelectorAll(".op_ani");
    const aniWrap = document.querySelector("#opening")
    if(i < aniElems.length){
      console.log(i);
      aniElems[i].classList.add("active");
      i = i + 1
    }else if(i < aniElems.length + 1){
      console.log("hello")
      aniWrap.style.opacity = 0;
      i = i + 1
    }else{
      clearInterval(openingAnimation);
      document.querySelector("body").removeChild(aniWrap);
    }
  }, 1000)
}
openingAnimate();