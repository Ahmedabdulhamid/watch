var result = document.querySelector(".result")
setInterval(() => {
    var x = new Date();
    var hour = x.getHours()
    var minutes = x.getMinutes();
    var seconds = x.getSeconds();
    if (hour > 12) {
        hour -= 12;

    }
    if (hour < 10) {
        hour = "0" + hour

    }
    if (minutes < 10) {
        minutes = "0" + minutes;


    }

    if (seconds < 10) {
        seconds = "0" + seconds


    }
    result.innerHTML = hour + ":" + minutes + ":" + seconds + ":" + "pm"

}, 1000)