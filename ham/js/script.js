function filterCategories() {
    event.preventDefault();
    let categotyToFilter = event.target.textContent.toLowerCase();
    let showAll = categotyToFilter == "all";
    new Set(document.htmlCollectionToArray(document.querySelector("#workpics").children)
            .map(function (node) {
                node.setAttribute("category", node.attributes.category ? node.attributes.category.value.toLowerCase() : "all");
                return node;
            }))
        .forEach((node) => document.switchDisplay(node, showAll || node.attributes.category.value == categotyToFilter));
}

function animateFunctionWrapper() {
    event.preventDefault();
    animateFunction.call(event, event.currentTarget.funtionsToRun);
}

function loadMore() {
    let buttonBlock;
    if (event) {
        event.preventDefault();
        buttonBlock = event.currentTarget;
    } else {
        buttonBlock = this;
    }
    let functionTarget = document.querySelector("#" + buttonBlock.getAttribute("target_list_id"));
    if (functionTarget.maxPages > functionTarget.currentPage) { // to prevent wrong behaviour in case if the function is called directly (other than through the button element)
        resetFilter(functionTarget);
        let imgPath = functionTarget.getAttribute("img-path");
        let fileName = "img%NUMBER%.jpg";
        let model = functionTarget.firstElementChild;
        let filterId = functionTarget.getAttribute("filter_id");
        let categories = filterId ? collectFilterCategories(filterId) : null;
        for (let i = 1; i <= functionTarget.picsPerPage; i++) {
            let containerNode = document.createElement("div");
            containerNode.classList = model.classList;
            containerNode.setAttribute("category", categories ? categories[Math.round(Math.random() * (categories.length - 1) + 1)] : "all"); //random category
            containerNode.innerHTML = model.innerHTML;
            let imgNodeEl = document.createElement("img");
            imgNodeEl.setAttribute("src", imgPath + fileName.replace("%NUMBER%", i + functionTarget.picsPerPage * functionTarget.currentPage));
            containerNode.replaceChild(imgNodeEl, containerNode.lastElementChild);
            functionTarget.appendChild(containerNode);
        }
        functionTarget.currentPage++;
    }
    document.switchDisplay(buttonBlock, functionTarget.maxPages > functionTarget.currentPage)
}

function collectFilterCategories(filterId) {
    return document.htmlCollectionToArray(document.querySelector("#" + filterId).children).map(el => el.textContent);
}

function resetFilter(target) {
    document.htmlCollectionToArray(target.children).forEach((node) => document.switchDisplay(node, true));
}

function animateFunction(funtionsToRun) {
    let buttonContainer = this.currentTarget;
    let animationSource = buttonContainer.nextElementSibling;
    document.switchDisplay(buttonContainer, false);
    document.switchDisplay(animationSource, true);
    setTimeout(function () {
        document.switchDisplay(animationSource, false);
        document.switchDisplay(buttonContainer, true);
        funtionsToRun.forEach((f => f.call(buttonContainer)));
    }, 2000);
}
