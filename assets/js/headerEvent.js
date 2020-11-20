
var Ham=$(".ham"); 
var navMenu=$(".nav ul li");
var Log=$("")

Ham.click(function(e){
  e.preventDefault(); 
  var target=$(this);
  var index=target.index(); 
  Ham.toggleClass("active");
  $(".header").toggleClass("active");
  $(".header .logo").toggleClass("active");
  $(".nav").addClass("ready").delay(100).toggleClass("active").removeClass("ready");
  $(".header .iris_logo2").toggleClass("active");
  $(".header .iris_logo1").toggleClass("active");
});


document.querySelectorAll(".nav > ul > li").forEach((elem, index) => {
  const overMenu = elem;
  const overIndex = index;
  const allMenu = elem.querySelectorAll(".nav > ul > li");
  const nav = document.querySelector("#nav .nav");
  const MenuList = ["rooms", "wedding", "casino", "dining", "facilities"];

  elem.addEventListener("mouseover",function(){
      nav.classList.add(MenuList[overIndex]);
  });
  elem.addEventListener("mouseout",function(){
      nav.classList.remove(MenuList[overIndex]);
  });
})