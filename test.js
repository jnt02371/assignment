function sendchris(){
	inputName = document.getElementById("name").value;
	window.location = 'http://wa.me/?text='+inputName+' wishing you a Merry Christmas for the year 2020 %0A%0Ahttps://jnt02371.github.io/assignment/Christmas.html';
}
function sendraya(){
	inputName = document.getElementById("name").value;
	window.location = 'http://wa.me/?text='+inputName+' wishing you a Hari Raya for the year 2020 %0A%0Ahttps://jnt02371.github.io/assignment/HariRaya.html';
}
function senddeepavali(){
	inputName = document.getElementById("name").value;
	window.location = 'http://wa.me/?text='+inputName+' wishing you a happy Deepavali for the year 2020 %0A%0Ahttps://jnt02371.github.io/assignment/deepavali1.html';
}
function sendcny(){
	inputName = document.getElementById("name").value;
	window.location = 'http://wa.me/?text='+inputName+' wishing you a happy Chinese New Year for the year 2020 %0A%0Ahttps://jnt02371.github.io/assignment/cny.html';
}
function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}
