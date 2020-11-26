
pageLoad();
function pageLoad(){
  const url = window.location.href;
  const nameLocation = url.indexOf("?") + 1;
  const nameEndLocation = url.indexOf("main") + 4;
  const name = url.substring(nameLocation, nameEndLocation)
  const aniWrap = document.querySelector("#opening")
  window.scrollTo(0, 0);

    if(name == "main"){
      document.querySelector("body").removeChild(aniWrap);
  }
}