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
    document.querySelector("#workpics").maxPages = 3;
    document.querySelector("#workpics").currentPage = 1;
    document.querySelector("#workpics").picsPerPage = 12;
    document.querySelector("#amazing-work-add-button").addEventListener("click", loadmoreAnimated);
});

$(window).on("load", function () {
	$("#grid").masonry({
	    itemSelector: ".grid-item",
    	columnWidth: 63,
    	gutter: 1,
        fitWidth: true,
        horizontalOrder: true
	});
});


