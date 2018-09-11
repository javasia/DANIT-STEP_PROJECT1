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

	loadmore();
});

$(window).on("load", function () {
    $("#grid").masonry({
        columnWidth: 125, 
        itemSelector: '.grid-item'
    });
});