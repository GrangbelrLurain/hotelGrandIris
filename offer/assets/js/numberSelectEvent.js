document.querySelector("#selectNumb .selectNumb div.plus").addEventListener("click", function(){
  const roomNumber = document.querySelectorAll("#selectNumb .selectNumb .roomWrap .room").length + 1;

  if(roomNumber > 9){
    alert("9개 이상 룸 예약은 고객센터에 문의해주시기 바랍니다.")
  } else{
    const roomWrap = document.querySelector("#selectNumb .selectNumb .roomWrap")

    const newRoom = document.createElement("div")
    newRoom.classList.add("room");
    roomWrap.appendChild(newRoom);

    
    const newHead = document.createElement("h3");
    newHead.innerHTML = "객실" + roomNumber;
    newRoom.appendChild(newHead);

    const newAdult = document.createElement("div");
    newAdult.classList.add("adult");
    newAdult.innerHTML = `<button class="minus"><img src="assets/icon/minusIcon.png" alt="minusIcon"></button>
    <div class="name">성인<span class="number">2</span></div>
    <button class="plus"><img src="assets/icon/plusIcon.png" alt="plusIcon"></button>`
    newRoom.appendChild(newAdult);

    const newChild = document.createElement("div");
    newChild.classList.add("child");
    newChild.innerHTML = `<button class="minus"><img src="assets/icon/minusIcon.png" alt="minusIcon"></button>
    <div class="name">어린이<span class="number">0</span></div>
    <button class="plus"><img src="assets/icon/plusIcon.png" alt="plusIcon"></button>`
    newRoom.appendChild(newChild);

    eventAdd();
  }
})

eventAdd()
function eventAdd(){
  document.querySelectorAll("#selectNumb .selectNumb .room .plus").forEach((elem) => {
    elem.removeEventListener("click", plusNumber)
    elem.addEventListener("click", plusNumber)
  })

  document.querySelectorAll("#selectNumb .selectNumb .room .minus").forEach((elem) => {
    elem.removeEventListener("click", minusNumber)
    elem.addEventListener("click", minusNumber)
  })
}

function plusNumber(){
  const button = this;
  const target = button.parentNode.querySelector(".name .number");
  if(Number(target.innerHTML) >= 9){
    alert("10명 이상 한 방을 사용할 수 없습니다.")
  } else {
    target.innerHTML = Number(target.innerHTML) + 1;
  }
}

function minusNumber(){
  const button = this;
  const target = button.parentNode.querySelector(".name .number");
  if(Number(target.innerHTML) == 0){
  } else {
    target.innerHTML = Number(target.innerHTML) - 1;
  }
}