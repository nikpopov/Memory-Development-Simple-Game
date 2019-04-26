$(document).ready(function() {
	
	function InitStore() {
		let Store;
		if (!window.localStorage.getItem("Store")) {
			Store = {
				Score: {
					total: 0
				},
				IMGBank: [
				],
				View: {
					baseFigureSet: {
						raws: 2,
						cols: 3
					},
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

	function updateStore(store) {
		if (window.localStorage.getItem("Store")) {
			window.localStorage.removeItem("Store");
			window.localStorage.setItem("Store", JSON.stringify(sore));
		} else {
			alert("There is nothing to updqate");
		}
	}

	function createRawContainer() {
		const div = document.createElement("div");
		return $(div).addClass("rawContainer");
	}

	function createDiv() {
		const div = document.createElement("div");
		return $(div).addClass("div_100");
	}
	
	function InitView(data) {
		const store = data.View;
		for (let raw = 0; raw < store.baseFigureSet.raws; raw++) {
			let cont = createRawContainer();
			let width = store.baseDiv.width * store.baseFigureSet.cols * 1.3;
			cont.width(width);
			for (let col = 0; col < store.baseFigureSet.cols; col++) {
				$(cont).append(createDiv());
			}
			$("#main").append(cont);
		}
		
	}

	
	const store = InitStore();
	InitView(store);

})