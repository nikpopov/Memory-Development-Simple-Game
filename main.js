$(document).ready(function() {

	function getStore() {
		return {
			Score: {
				total: 0
			},
			IMGBank: {
				barash: ["b01.png","b02.png","b03.png","b04.png","b05.png","b06.png","b07.png","b08.png","b09.png"],
				nyusha: ["n01.png","n02.png","n03.png","n04.png","n05.png","n06.png","n07.png"],
				krosh: ["k01.png","k02.png","k03.png","k04.png","k05.png","k06.png","k07.png","k08.png","k09.png","k10.png","k11.png"],
				pin: ["p01.png","p02.png","p03.png","p04.png","p05.png","p06.png","p07.png","p08.png","p09.png","p10.png"],
				losyash: [],
				ezhik: ["e01.jpg","e01.png","e02.png","e03.png","e04.png","e05.png","e06.png","e07.png","e08.png","e09.png","e10.png"]
			},
			View: {
				baseFigureSet: {
					raws: 2,
					cols: 3
				},
				baseDiv: {
					width: 120,
					height: 120,
					borderRadius: 10,
					margin: 10
				},
				baseMenu: {			
				}
			}
		};
	}
	
	function InitStore() {
		let Store;
		if (!window.localStorage.getItem("Store")) {
			Store = getStore();
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

	function adoptRawContainerWidth(data) {
		const width = data.baseDiv.width * data.baseFigureSet.cols * 1.3;
			if (width < window.innerWidth) {
				return width;
			} else {
				alert("Too many items in a raw");
				return false;
			}
	}

	function adoptMainContainerHeight(data) {
		const height = data.baseDiv.height * data.baseFigureSet.raws * 1.3;
			if (height < window.innerHeight) {
				return height;
			} else {
				alert("Too many items in a column");
				return false;
			}
	}

	function getImages(data) {
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

	function createDiv(data) {
		const view = data.View;
		const div = document.createElement("div");
		return $(div)
			.width(view.baseDiv.width)
			.height(view.baseDiv.height)
			.addClass("div_100");
	}

	function getFieldSize(data) {
		return data.View.baseFigureSet.raws * data.View.baseFigureSet.cols;
	}

	function getRandomImg(data) {
		const images = [];
		const size = getFieldSize(data);
		const allImages = getImages(data.IMGBank);
		do {
			const index = Math.floor(Math.random() * allImages.length);
			for (let j = 0; j < images.length; j++) {
				if (images[j] === allImages[index]) {
					images.splice(j, 1);
					break;
				} else {
					continue;
				}
			}
			images.push(allImages[index]);
		} while (images.length < size);
		return images;
	}

	function initView(data) {
		const view = data.View;
		const images = getRandomImg(data);
		for (let raw = 0; raw < view.baseFigureSet.raws; raw++) {
			let width = adoptRawContainerWidth(view);
			let cont = createRawContainer();
			cont.width(width);
			for (let col = 0; col < view.baseFigureSet.cols; col++) {
				$(cont).append(createDiv(data));
			}
			$("#main").append(cont);
		}	
		for (let i = 0; i < images.length; i++) {
			$(".div_100").each(function(i) {
				$(this).data("url", `url("images/${images[i]}")`)
					.css("background-image", `url("images/${images[i]}")`);
			})
		}
	}

	function playGame() {
		$(".div_100").on("click", function() {
			$(this).fadeOut(150, function() {
				$(this).fadeIn(150)
			});
		})
	}

	const store = InitStore();
	initView(store);
	playGame();
})