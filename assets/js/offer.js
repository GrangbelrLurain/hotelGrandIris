
loadingToday();

function loadingToday(){
  const today = new Date();
  const nextday = new Date(today.setDate(today.getDate() + 1));
  const dates = [today.getFullYear() + "년" + (today.getMonth() + 1) + "월" + today.getDate() + "일",
  (nextday.getFullYear()) + "년" + (nextday.getMonth() + 1) + "월" + nextday.getDate() + "일"];
  console.log(dates[1]);

  document.querySelector(".dateSelect").innerHTML = dates[0] + " ~ " + dates[1];
}