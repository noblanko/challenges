var imgSource;
var num1 = 0;
var x = 10;

  document.getElementById("useWater").onclick = function waterFill() {

  	//change of amount of waterr

	var num1 = document.getElementById('number1').value;
	
	var result = x - num1;

	document.getElementById('result').innerHTML = result + " out of ";

	//change of the images

  if (result < 10 && result > 6){
	document.getElementById("waterImg").src = "images/water80.PNG";
} else if (result <= 6 && result > 3){
	document.getElementById("waterImg").src = "images/water50.PNG";
} else if (result <= 3  && result > 0){
	document.getElementById("waterImg").src = "images/water25.PNG";
} else {
	document.getElementById("waterImg").src = "images/water0.PNG";
}
}

