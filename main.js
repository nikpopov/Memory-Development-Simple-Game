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

	function createDiv() {
		const div = document.createElement("div");
		return $(div).addClass("div_100");
	}
	
	Init();
	
	for (let i=0; i<8; i++) {
		$("#main").append(createDiv());
	}

})