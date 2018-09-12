function filterCategories() {
    event.preventDefault();
    let categotyToFilter = event.target.textContent.toLowerCase();
    let showAll = categotyToFilter == "all";
    getWorkPicNodesSet().forEach((node) => document.switchDisplay(node, showAll || node.attributes.category.value == categotyToFilter));
}

function getWorkPicNodesSet() {
    return new Set(document.htmlCollectionToArray(document.querySelector("#workpics").children)
        .map(function (node) {
            node.setAttribute("category", node.attributes.category ? node.attributes.category.value.toLowerCase() : "all");
            return node;
        })
    );
}

function loadmoreAnimated() {
    event.preventDefault();
    loadingAnimate.call(event, loadmore);
}

function loadmore() {
    if (event) {
        
    } else {
        document.switchDisplay(this.target.parentElement, false);
        resetFilter();
        let fileName = "img/amazing/extra/%NUMBER%.jpg";
        let parent = document.querySelector("#workpics");
        let model = parent.firstElementChild;
        let categories = document.htmlCollectionToArray(document.querySelector("#workpics-switch-menu").children).map(el => el.textContent);
        for (var i = 0; i < 12; i++) {
            let containerNode = document.createElement("div");
            containerNode.classList = model.classList;
            containerNode.setAttribute("category", categories[Math.round(Math.random() * 3 + 1)]);
            containerNode.innerHTML = model.innerHTML;
            let imgNodeEl = document.createElement("img");
            imgNodeEl.setAttribute("src", fileName.replace("%NUMBER%", i + 1));
            containerNode.replaceChild(imgNodeEl, containerNode.lastElementChild);
            parent.appendChild(containerNode);
        }
    }
}

function resetFilter() {
    getWorkPicNodesSet().forEach((node) => document.switchDisplay(node, true));
}

function loadingAnimate(funtionToRun) {
    let animation = document.querySelector(".loading-animation");
    let buttonContainer = this.target.parentElement;
    document.switchDisplay(buttonContainer, false);
    document.switchDisplay(animation, true);
    setTimeout(() => {
        document.switchDisplay(animation, false);
        document.switchDisplay(buttonContainer, true);
        funtionToRun.call(this);
    }, 2000);
}
