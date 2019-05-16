$(document).ready(function() {

	function getBackGroundImages(data) {
		const array = [];
		for (itemArr in data) {
			if (data[itemArr].length > 0) {
				for (let i = 0; i < data[itemArr].length; i++) {
					array.push(data[itemArr][i])
				}
			}
		}
		return array;	
	}

	const store = Store.init();
	try {
		View.init(store);
	} catch(ex) {
		console.log(ex.message);
	}
	Game.play();
})