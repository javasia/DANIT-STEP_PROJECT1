document.addEventListener('DOMContentLoaded', function(){
	document.querySelector("#search-img").addEventListener('click', function () {
	    document.switchDisplay(event.target, false);
	    document.switchDisplay(document.querySelector("#search"), true);
	});
	document.querySelector("#search").addEventListener('blur', function () {
    	document.switchDisplay(event.target, false);
    	document.switchDisplay(document.querySelector("#search-img"), true);
	});
	document.querySelector("#search-link").addEventListener('click', () => event.preventDefault());
	document.htmlCollectionToArray(document.querySelector("#workpics-switch-menu").children).forEach(button => button.addEventListener('click', filterCategories));
    document.querySelector("#amazing-work-add-button").addEventListener("click", loadmoreAnimated);
});

$(window).on("load", function () {
	$("#grid").masonry({
	    itemSelector: ".grid-item",
    	columnWidth: 10,
    	gutter: 11,
    	fitWidth: true,
	});
});


