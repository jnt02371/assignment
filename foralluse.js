function testjs()
{
	var firsttext = getUrlVars()["name"];
	var editedname = firsttext.replace("~", "%20");
	var editedname2 = editedname.replace("~", "%20");
	var editedname3 = editedname2.replace("~", "%20");
	var editedname4 = editedname3.replace("~", "%20");
	window.location = 'https://jnt02371.github.io/TT1/Christmas.html?name='+editedname4;
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getmytext() {
	var mytext = getUrlVars()["text"];
	alert(mytext);
}

function sendtowhatsapp()
{
var mytext = getUrlVars()["text"];
	var inputVal = document.getElementById("textboxid").value;
	var outputVal = inputVal.replace(" ", "~");
	var outputVal2 = outputVal.replace(" ", "~");
	var outputVal3 = outputVal2.replace(" ", "~");
	var outputVal4 = outputVal3.replace(" ", "~");
window.location = 'http://wa.me/?text='+inputVal+' wishing you for the year 2020 %0A%0Ahttps://jnt02371.github.io/TT1/Christmas.html'+outputVal4;
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
