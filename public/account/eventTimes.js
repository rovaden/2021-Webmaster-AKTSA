const curTime = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function addDays(date, days){
  const newDate = new Date(date.getTime());
  newDate.setDate(date.getDate() + days);
  return newDate;
}
function createThreeMonthStr(date){
    let dateText = date.toDateString();
    dateText = dateText.substring(4, dateText.length);
    return dateText;
}
function createFullMonthStr(date){
    let month = monthNames[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();
    return month + " " + day + ", " + year;
}
function createSlashStr(date){
    const month = date.getMonth() + 1;
    return month + "/" + date.getDate() + "/" + date.getFullYear();
}