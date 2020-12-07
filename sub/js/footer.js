function footerOnLoad(){
  document.querySelector("#family").addEventListener("change", function(){
    if(this.value) window.open(this.value)
  });
}