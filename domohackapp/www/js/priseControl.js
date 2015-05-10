var xmlhttp = new XMLHttpRequest();
var xmlhttp1 = new XMLHttpRequest();
var xmlhttp2 = new XMLHttpRequest();
var host = "http://156.18.36.224:5000";
//var host = "http://localhost:80";
var urlList = host + "/rest/list";
var urlValue1 = host + "/rest/sonde1";
var urlValue2 = host + "/rest/prise4";
var obj2;

//	document.getElementById("temperature").innerHTML = "head";

xmlhttp.onreadystatechange = function() {
	if ((xmlhttp.readyState == 4 && xmlhttp.status == 200)&&
			(xmlhttp2.readyState == 4 && xmlhttp2.status == 200)) {
		var myObj = JSON.parse(xmlhttp.responseText);
		//alert(myObj);
		//var obj1 = JSON.parse(xmlhttp1.responseText);
		//console.log(xmlHttp.responseText);
		obj2 = JSON.parse(xmlhttp2.responseText);
		showInfo(myObj);
	}
}

xmlhttp.open("GET", urlList, true);
xmlhttp.send();
//	xmlhttp1.open("GET", urlValue1, true);
//	xmlhttp1.send();
xmlhttp2.open("GET", urlValue2, false);
xmlhttp2.send();

function showInfo(arr){
	//document.getElementById("name1").innerHTML = arr["sonde1"].name;
	document.getElementById("name2").innerHTML = arr["prise4"].name;
	//document.getElementById("value1").innerHTML = obj1.temperature;
	var out = "";
	if (obj2.value==false) {
		out = "OFF"
			document.getElementById("btn").innerHTML = "Turn ON"
	}
	if (obj2.value==true) {
		out = "ON"
			document.getElementById("btn").innerHTML = "Turn OFF"
	}
	document.getElementById("value2").innerHTML = out;

}

function changeState() {
	if (document.getElementById("value2").innerHTML=="OFF") {
		xmlhttp2.open("PUT", urlValue2+"/1", false);
		xmlhttp2.send();
		document.getElementById("value2").innerHTML = "ON";
		document.getElementById("btn").innerHTML = "Turn OFF";
	}
	else if (document.getElementById("value2").innerHTML=="ON") {
		xmlhttp2.open("PUT", urlValue2+"/0", false);
		xmlhttp2.send();
		document.getElementById("value2").innerHTML = "OFF";
		document.getElementById("btn").innerHTML = "Turn ON";
	}
}
