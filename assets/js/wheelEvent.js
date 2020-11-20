
// // ================================================ 슬라이드 기본 세팅
// document.querySelectorAll(".slides").forEach(function(elem){
// 	elem.style.position="relative"
// 	elem.style.transform = "translate(0, 0)";
// });
// // // ================================================ 휠 방향 확인
// // window.beforeScroll = document.documentElement.scrollTop || 0;
// // // 처음 스크롤 위치를 잡아주고, 변수를 전역변수로 지정해줌

// // function scrollDirectFind(){
  
// //   let documentY = document.documentElement.scrollTop;
// //   let direction = documentY - window.beforeScroll >= 0 ? 1 : -1;

// //   window.beforeScroll = documentY; // 이전에 스크롤했던 위치를 다시 저장해줌

// //   return direct = direction;
// // }

// // ============================================== 휠 이벤트

// function slideDiv(event){
// 	window.removeEventListener("wheel", slideDiv);

// 	const slides = document.querySelectorAll(".slides");
// 	// 슬라이드 전체 높이 구하는 곳 (최대 슬라이드를 넘어가지 않게 하기 위해 구함)
// 	let A = 0;

// 	for(i = 0; i < slides.length; i++){
// 		A = slides[i].clientHeight + A
// 	};

// 	const slidesHeight = A;
// 	// 슬라이드 전체 높이 구하기 완료
	
// 	const activeElem = document.querySelector(".slidesActive");
// 	const activeElemHeight = activeElem.clientHeight;
	

// 	let B = 0;

// 	for(i = 0; i < slides.length; i++){
// 		if(slides[i] == activeElem && slides[i + 1]){
// 			B = slides[i + 2].clientHeight;
// 		}
// 	};
		
// 	const nextElemHeight = B

// 	let C = 0;

// 	for(i = 0; i < slides.length; i++){
// 		if(slides[i] == activeElem){
// 			C = slides[i].clientHeight;
// 			console.log("hi");
// 		}
// 	};
	
// 	const prevElemHeight = C

// 	console.log(prevElemHeight);

// 	// 슬라이드 실행
// 	slides.forEach(function(elem){
// 		const findFirst = elem.style.transform.indexOf(",");
// 		const findList = elem.style.transform.indexOf(")");
// 		const beforeLocation = Number(elem.style.transform.substring(findFirst + 2,findList-2));

// 		if(event.deltaY > 0 && -(beforeLocation) >= (slidesHeight - slides[slides.length - 1].clientHeight)){
// 			return;
// 		}else if(event.deltaY < 0 && -(beforeLocation) < activeElemHeight){
// 			return;
// 		}
// 		else if(event.deltaY < 0){

// 			elem.style.transform = "translate(0, " + (beforeLocation + prevElemHeight) +"px)"
// 			return;
// 		}else if(event.deltaY > 0){

// 			elem.style.transform = "translate(0, " + (beforeLocation - nextElemHeight) +"px)"
// 			return;
// 		}
// 	})
// 	// 슬라이드 실행 완료
// 	// 이전 슬라이드, 다음 슬라이드 구하기
// 	setTimeout(function(){
// 		window.addEventListener("wheel",slideDiv);
// 	}, 400);
// }


// let headerNav = document.getElementById("nav");
// let slider = document.getElementById("slider");

// window.addEventListener("wheel",slideDiv);

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