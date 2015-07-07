// first, we make sure the we don't execute any script before the document is fully loaded.
$(document).ready(function(){
	//console.log("app is ready");

	/* logig to replace numbers divisible 
		by both 3 and 5 with “fizz buzz”, 
		those divisible by 3 with “fizz”, 
		and those divisible by 5 with “buzz”.
	*/
	for (var i = 1; i <= 100; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			$("ul").append("<li>FizzBuzz</li>");
			console.log('both...');
		}else if (i % 3 == 0) {
			$("ul").append("<li>Fizz</li>");
		}else if (i % 5 == 0) {
			$("ul").append("<li>Buzz</li>");
		}else {
			$("ul").append("<li>"+i+"</li>");
		}
	}
})