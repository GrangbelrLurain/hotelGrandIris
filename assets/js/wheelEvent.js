
// ================================================ 슬라이드 기본 세팅
document.querySelectorAll(".slides").forEach(function(elem){
	elem.style.position="relative"
	elem.style.transform = "translate(0, 0)";
});
// // ================================================ 휠 방향 확인
// window.beforeScroll = document.documentElement.scrollTop || 0;
// // 처음 스크롤 위치를 잡아주고, 변수를 전역변수로 지정해줌

// function scrollDirectFind(){
  
//   let documentY = document.documentElement.scrollTop;
//   let direction = documentY - window.beforeScroll >= 0 ? 1 : -1;

//   window.beforeScroll = documentY; // 이전에 스크롤했던 위치를 다시 저장해줌

//   return direct = direction;
// }

// ============================================== 휠 이벤트
function slideDiv(event){
	window.removeEventListener("wheel", slideDiv);

	// return "direct" 마우스 휠 방향 확인
	const slides = document.querySelectorAll(".slides");
	// scrollDirectFind()
	// const direction = direct;
	// console.log(direction);
	let A = 0;

	for(i = 0; i < slides.length; i++){
		A = slides[i].clientHeight + A
	};

	const slidesHeight = A;

	console.log(A)

	slides.forEach(function(elem, index){
		const findFirst = elem.style.transform.indexOf(",");
		const findList = elem.style.transform.indexOf(")");

		const beforeLocation = Number(elem.style.transform.substring(findFirst + 2,findList-2));
		
		const activeElem = document.querySelector(".slidesActive");
		const activeElemHeight = activeElem.clientHeight;

		console.log(beforeLocation);

		if(event.deltaY > 0 && -(beforeLocation) >= (slidesHeight - slides[slides.length - 1].clientHeight)){
			console.log("return");
			return;
		}else if(event.deltaY < 0 && -(beforeLocation) < activeElemHeight){
			console.log("return");
			return;
		}
		else if(event.deltaY < 0){
			console.log("up");

			elem.style.transform = "translate(0, " + (beforeLocation + activeElemHeight) +"px)"
		}else if(event.deltaY > 0){

			console.log("down");
			elem.style.transform = "translate(0, " + (beforeLocation - activeElemHeight) +"px)"
		}
	})

	setTimeout(function(){
		window.addEventListener("wheel",slideDiv);
	}, 400);
}


let headerNav = document.getElementById("nav");
let slider = document.getElementById("slider");

window.addEventListener("wheel",slideDiv);

// document.querySelector(".homeLink").addEventListener("click", function(){
// 	slider.classList.remove("slider", "slider1", "slider2", "slider3", "slider4", "slider5");
// 	slider.classList.add("slider");
// 	console.log(slider);
// });

// document.querySelector(".shopLink").addEventListener("click", function(){
// 			slider.classList.remove("slider", "slider1", "slider2", "slider3", "slider4", "slider5");
// 			slider.classList.add("slider3");
// 			console.log(slider);
// 		});

// document.querySelector(".supportLink").addEventListener("click", function(){
// 			slider.classList.remove("slider", "slider1", "slider2", "slider3", "slider4", "slider5");
// 			slider.classList.add("slider4");
// 			console.log(slider);
// 		});