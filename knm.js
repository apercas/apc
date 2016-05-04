var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

var konamiCodePosition = 0;
document.addEventListener('keydown', function(e) {
  var key = allowedKeys[e.keyCode],
  	  requiredKey = konamiCode[konamiCodePosition];
  if (key == requiredKey) {
    konamiCodePosition++;
    if (konamiCodePosition == konamiCode.length)
      activateCheats();
  } else
    konamiCodePosition = 0;
});

function activateCheats() {
	document.getElementById('regular').style.display = 'none';
  	document.getElementById('konami').style.display = 'block';
  	document.getElementsByTagName('body')[0].classList.add('konami-active');
}