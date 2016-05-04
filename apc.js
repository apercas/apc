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

var updateDates = function (){
	var target = document.getElementsByClassName('age'),
		orig_date = new Date('1988-09-30'),
		today = new Date();
	for (var i = 0; i < target.length; i++) {
		target[i].innerHTML = moment(today).diff(moment(orig_date), 'months');
	}

	target = document.getElementsByTagName('date');
	for (var i = 0; i < target.length; i++){
		target[i].innerHTML = 'only ' + Math.abs(moment(new Date()).diff(moment("09-30-"+moment().year(), "MM-DD-YYYY"), 'days')) + ' days more!'
	}
}

displaySentences();
updateDates();