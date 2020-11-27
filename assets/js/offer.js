
loadingToday();

function loadingToday(){
  const today = new Date(Date.now());
  const nextday = new Date(Date.now() + 86400000)
  const dates = [today.getFullYear() + "년" + (today.getMonth() + 1) + "월" + today.getDate() + "일",
  (nextday.getFullYear()) + "년" + (nextday.getMonth() + 1) + "월" + nextday.getDate() + "일"];
  

  document.querySelector(".dateSelect").innerHTML = dates[0] + " ~ " + dates[1];
}