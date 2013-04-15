$(function() {
	var startTop = $("#nav1").outerHeight() + $("#nav1").position().top;
	var startLeft = $("#nav1").position().left;
	$("#underline").attr("style","top: " + startTop + "px; left: " + startLeft + "px;");

	$(".navButton").click(function() {
		var newPos = $(this).position().left;
		$("#underline").animate({left: newPos},"slow");
	});
});

function init() {
	var header = document.getElementById('myCanvas');
	var header_height = header.offsetHeight;
	header.style.height = '10px';
	header.style.overflow = 'hidden';
	var i = 0;
	var animation = setInterval(function () {
		if (i <= header_height) {
			header.height = (10 + i) + 'px';
		} else {
			clearInterval(animation);
			header.style.overflow = 'block';
		}
		i++;
	}, 10); 
}
