$(document).ready(function() {
	
	function Init() {
		let Store;
		if (!window.localStorage.getItem("Store")) {
			Store = {
				Score: {
					total: 0
				},
				IMGBank: [
				],
				View: {
					baseDiv: {
						width: 100,
						height: 100,
						borderRadius: 10,
						margin: 10
					},
					baseMenu: {
						
					}
				}
			};
			window.localStorage.setItem("Store", JSON.stringify(Store));
		} else {
			Store = JSON.parse(window.localStorage.getItem("Store"));
		}
		return Store;
	}

	function createRawContainer() {
		const div = document.createElement("div");
		return $(div).addClass("rawContainer");
	}

	function createDiv() {
		const div = document.createElement("div");
		return $(div).addClass("div_100");
	}
	
	function InitView() {
		for (let r = 0; r < 4; r++) {
			let cont = createRawContainer();
			for (let col = 0; col < 8; col++) {
				$(cont).append(createDiv());
			}
			$("#main").append(cont);
		}
		
	}

	Init();
	InitView();

})