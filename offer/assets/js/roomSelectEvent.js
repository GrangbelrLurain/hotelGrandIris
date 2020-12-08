document.querySelectorAll("#selectRoom .selectRoom .room").forEach( (elem) =>{
  elem.addEventListener("click", function(){
    selectRoomChange(elem);
  })
})

function selectRoomChange(elem){
  const allRoom = document.querySelectorAll("#selectRoom .selectRoom .room");

  allRoom.forEach((allelem) => {allelem.classList.remove("select")})
  elem.classList.add("select");
}