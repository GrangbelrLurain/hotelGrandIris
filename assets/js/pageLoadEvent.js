
pageLoad();
function pageLoad(){
  const url = window.location.href;
  const nameLocation = url.indexOf("?") + 1;
  const nameEndLocation = url.indexOf("main") + 4;
  const name = url.substring(nameLocation, nameEndLocation)
  const aniWrap = document.querySelector("#opening")

  console.log(name);

  if(name == "main"){
    document.querySelector("body").removeChild(aniWrap);
}
}