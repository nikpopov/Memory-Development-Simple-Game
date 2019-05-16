let Store = (function() {

	function _getStore() {
		return {
			Score: {
				total: 0
			},
			IMGBank: {
				barash: [
					"b01.png","b02.png","b03.png","b04.png","b05.png","b06.png","b07.png","b08.png","b09.png"
					],
				nyusha: [
					"n01.png","n02.png","n03.png","n04.png","n05.png","n06.png","n07.png"
					],
				krosh: [
					"k01.png","k02.png","k03.png","k04.png","k05.png","k06.png","k07.png","k08.png","k09.png","k10.png","k11.png"
					],
				pin: [
					"p01.png","p02.png","p03.png","p04.png","p05.png","p06.png","p07.png","p08.png","p09.png","p10.png"
					],
				losyash: [
					"l01.png","l02.png","l03.png","l04.png","l05.png","l06.png","l07.png","l08.png","l09.png","l10.png",
					"l11.png","l12.png","l13.png",
					],
				ezhik: [
					"e01.jpg","e01.png","e02.png","e03.png","e04.png","e05.png","e06.png","e07.png","e08.png","e09.png"
					]
			},
			bgImgArray: [
					"bg01.jpg","bg02.jpg","bg03.jpg","bg04.jpg","bg05.jpg","bg06.jpg","bg07.jpg","bg08.jpg","bg09.jpg","bg10.jpg",
					"bg11.jpg","bg12.jpg","bg13.jpg","bg14.jpg","bg15.jpg","bg16.jpg","bg17.jpg","bg18.jpg","bg19.jpg","bg20.jpg",
					"bg21.jpg","bg22.jpg","bg23.jpg"
			],
			View: {
				size: {
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
				},
				urlPrefix: {
					background: "background/",
					images: "images/"
				},
				baseImageArray: [],
				baseBackGround: ""
			}
		};
	}

	return {

		init: function() {
			let store;
			if (!window.localStorage.getItem("Store")) {
				store = _getStore();
				window.localStorage.setItem("Store", JSON.stringify(store));
			} else {
				store = JSON.parse(window.localStorage.getItem("Store"));
			}
			return store;
		},

		update: function(store) {
			if (window.localStorage.getItem("Store")) {
				window.localStorage.removeItem("Store");
				window.localStorage.setItem("Store", JSON.stringify(store));
			} else {
				alert("There is nothing to updqate");
			}
		}
	}
})()