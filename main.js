$(document).ready(function() {
	
	function InitStore() {
		let Store;
		if (!window.localStorage.getItem("Store")) {
			Store = {
				total: 0
			};
			window.localStorage.setItem("Store", JSON.stringify(Store));
		} else {
			Store = JSON.parse(window.localStorage.getItem("Store"));
		}
		return Store;
	}

	function InitIMGBank() {
		let Store;
		if (!window.localStorage.getItem("IMGBank")) {
			IMGBank = {
				
			};
			window.localStorage.setItem("IMGBank", JSON.stringify(IMGBank));
		} else {
			IMGBank = JSON.parse(window.localStorage.getItem("IMGBank"));
		}
		return IMGBank;
	}

	function createDiv() {
		const div = document.createElement("div");
		return $(div).addClass("div_100");
	}
	
	InitStore();
	InitIMGBank();
	for (let i=0; i<8; i++) {
		$("#main").append(createDiv());
	}

})