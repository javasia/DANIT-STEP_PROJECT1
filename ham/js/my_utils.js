document.htmlCollectionToArray = function(htmlCollection){
	let arr = [];
	for (var i = 0; i < htmlCollection.length; i++) {
		arr.push(htmlCollection[i]);
	}
	return arr;
}

document.switchDisplay = function (node, toDisplay){
	node.style.display = toDisplay ? "block" : "none";
};