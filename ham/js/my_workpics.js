function filterCategories(){
	event.preventDefault();
	let categotyToFilter = event.target.textContent.toLowerCase();
	let showAll = categotyToFilter == "all";
 	getWorkPicNodesSet().forEach((node) => document.switchDisplay(node, showAll || node.attributes.category.value == categotyToFilter));
}

function getWorkPicNodesSet(){
	let picNodes = new Set();
	document.htmlCollectionToArray(document.querySelector("#workpics").children).forEach(function(node){
			node.setAttribute("category", node.attributes.category ? node.attributes.category.value.toLowerCase() : "all");
			picNodes.add(node);
		});
	return picNodes;
}

function loadmore(){
	let fileName = "img/amazing/extra/%NUMBER%.jpg";
	let extraNodes = new Set();

	for (var i = 0; i < 12; i++) {
		let containerNode = document.createElement("div");
		containerNode.classList.add("pictures-item");
		containerNode.setAttribute("category", "graphic design");
		let hoverWindowEl = document.createElement("div");
		hoverWindowEl.classList.add("hover-window"); // TODO: fill in the window
		let imgNodeEl = document.createElement("img");
		imgNodeEl.setAttribute("src", fileName.replace("%NUMBER%", i + 1));
		containerNode.appendChild(hoverWindowEl);
		containerNode.appendChild(imgNodeEl);
		extraNodes.add(containerNode);
	}

	extraNodes.forEach(node => document.querySelector("#workpics").appendChild(node));

	//console.dir(images);


}