
setInterval(() => {
    let d = new Date(),
htime = d.getHours(),
mtime = d.getMinutes(),
stime = d.getSeconds();

document.getElementById("hour").innerHTML = htime;
document.getElementById("minute").innerHTML = mtime;
document.getElementById("second").innerHTML =`${stime}`;
}, 1000);