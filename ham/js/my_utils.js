document.htmlCollectionToArray = function(htmlCollection){
	return Object.entries(htmlCollection).map(el => el[1]);
}

document.switchDisplay = function (node, toDisplay){
	node.style.display = toDisplay ? "block" : "none";
};
