exports.generateItem = function() {
	var randomNumber = Math.floor(Math.random * 10) + 1;
	if (randomNumber < 2) {
		return 1; // +1 bomb powerup
	} else if (randomNumber < 3) {
		return 2; // +1 strength powerup
	} else if(randomNumber < 4){
		return 3; // +1 speed powerup
	} else {
		return 0;
	}
};