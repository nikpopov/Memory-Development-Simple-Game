let Game = (function() {
	return {
		play: function() {
			$(".brick").on("click", function() {
				$(this).fadeOut(150, function() {
					$(this).fadeIn(150);
				});
			})
		}
	}
})()