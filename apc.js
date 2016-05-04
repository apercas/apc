var reorder_ar = document.getElementsByClassName('reorder');
var getRandomSentences = function() {
	var nums = new Array(reorder_ar.length);
	for (var i = 0; i < reorder_ar.length; i++) {
		nums[i] = i;
	}
	return nums.sort( function() { return 0.5 - Math.random() } );
}

var displaySentences = function() {
	var sentences = getRandomSentences();
	for (var i = 0; i < 7; i++) {
		reorder_ar[sentences[i]].style.display = 'list-item';
	}
}
displaySentences();