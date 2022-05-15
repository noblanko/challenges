document.getElementById('convert').onclick = function(){
	// Weight of the object on Earth
	var num1 = document.getElementById('number1').value;
	// Weight of the object on Mars = 37.82% of its weight on Earth
	var result = num1 * 0.3783;

	document.getElementById('result').innerHTML = result;
}