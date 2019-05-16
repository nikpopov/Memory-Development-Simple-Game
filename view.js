let View = (function() {

	function _getRandomImg(store) {
		const images = [];
		const size = _getFieldSize(store);
		const allImages = _getImages(store.IMGBank);
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

	function _getFieldSize(store) {
		return store.View.size.raws * store.View.size.cols;
	}

	function _getImages(store) {
		const array = [];
		for (itemArr in store) {
			if (store[itemArr].length > 0) {
				for (let i = 0; i < store[itemArr].length; i++) {
					array.push(store[itemArr][i])
				}
			}
		}
		return array;
	}

	function _resizeRawContainerWidth(store) {
		const width = store.baseDiv.width * store.size.cols * 1.3;
		if (width < window.innerWidth) {
			return width;
		} else {
			alert("Too many items in a raw");
			return false;
		}
	}

	function _createRawContainer() {
		return $("<div/>").addClass("rawContainer");
	}

	function _createDiv(store) {
		const view = store.View;
		return $("<div/>")
			.width(view.baseDiv.width)
			.height(view.baseDiv.height)
			.addClass("brick");
	}

	function _resizeMainContainerHeight(store) {
		const height = store.baseDiv.height * store.size.raws * 1.3;
		if (height < window.innerHeight) {
			return height;
		} else {
			alert("Too many items in a column");
			return false;
		}
	}

	return {
		init: function(store) {
			const view = store.View;
			const images = _getRandomImg(store);
			for (let raw = 0; raw < view.size.raws; raw++) {
				let width = _resizeRawContainerWidth(view);
				let cont = _createRawContainer();
				cont.width(width);
				for (let col = 0; col < view.size.cols; col++) {
					$(cont).append(_createDiv(store));
				}
				$("#main").append(cont);
			}	
			for (let i = 0; i < images.length; i++) {
				$(".brick").each(function(i) {
					$(this).data("url", `url("images/${images[i]}")`)
						.css("background-image", `url("images/${images[i]}")`);
				})
			}
		}
	}
})()