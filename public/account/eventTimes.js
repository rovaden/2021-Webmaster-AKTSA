const curTime = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function addDays(date, days){
  const newDate = new Date(date.getTime());
  newDate.setDate(date.getDate() + days);
  return newDate;
}
function addHours(date, hours, minutes){
    const newDate = new Date(date.getTime());
    newDate.setHours(newDate.getHours() + hours, newDate.getMinutes() + (minutes ? minutes:0), 0, 0);
    return newDate;
}

//creating strings to represent dates
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

//other functions to check dates or convert some time (in hours) to date objects
function checkSameDay(date1, date2){
    if(date1.getFullYear() !== date2.getFullYear()){
        return false;
    }
    else if(date1.getMonth() !== date2.getMonth()){
        return false;
    }
    else if(date1.getDate() !== date2.getDate()){
        return false;
    }
    return true;
}
function checkOverlap(start1, end1, start2, end2){
    let difference = Math.min(end1, end2) - Math.max(start1, start2);
    return difference > 0;
}
function timeToDate(str, day){
    let newDate = new Date(day.getTime());
    let pieces = str.split(/[: ]/g);
    let hours = parseFloat(pieces[0]);
    if(pieces[2].toLowerCase() === "pm" && hours !== 12){
        hours += 12;
    }
    newDate.setHours(hours, parseFloat(pieces[1]), 0, 0);
    return newDate;
}
function dateToTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let timeMarking = "AM";
    if(hours >= 12){
        timeMarking = "PM"; 
    }
    return (hours !== 12 ? (hours % 12):hours) + ":" + (minutes < 10 ? ("0" + minutes):minutes) + " " + timeMarking;
};
function dateRangeToTime(start, end){
    let time1 = dateToTime(start);
    let time2 = dateToTime(end);
    let timeMarkings = [time1.substring(time1.length - 2, time1.length), time2.substring(time2.length - 2, time2.length)];
    if(timeMarkings[0] === timeMarkings[1]){
        time1 = time1.substring(0, time1.length - 3);
    }
    return time1 + " - " + time2;
}