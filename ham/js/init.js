let masonrySettings = {
    itemSelector: ".grid-item",
    columnWidth: 63,
    gutter: 1,
    fitWidth: true,
    horizontalOrder: true,
};
$(window).on("load", function () {
    $("#grid").masonry(masonrySettings);
});
document.addEventListener("DOMContentLoaded", function () {
    smoothScroll();
    document.querySelector("#search-img").addEventListener("click", function () {
        document.switchDisplay(event.target, false);
        document.switchDisplay(document.querySelector("#search"), true);
    });
    document.querySelector("#search").addEventListener("blur", function () {
        document.switchDisplay(event.target, false);
        document.switchDisplay(document.querySelector("#search-img"), true);
    });
    document.querySelector("#search-link").addEventListener("click", () => event.preventDefault());
    document.htmlCollectionToArray(document.querySelector("#workpics-switch-filter").children).forEach(button => button.addEventListener("click", filterCategories));
    document.htmlCollectionToArray(document.querySelectorAll(".addmore-button")).forEach(function (button) {
        button.funtionsToRun = Array.of(loadMore);
        button.addEventListener("click", animateFunctionWrapper);
    });
    let workpics = document.querySelector("#workpics");
    workpics.maxPages = 3;
    workpics.currentPage = 1;
    workpics.picsPerPage = 12;
    let grid = document.querySelector("#grid");
    grid.maxPages = 3;
    grid.currentPage = 1;
    grid.picsPerPage = 12;
    document.querySelector("[target_list_id=" + grid.id + "]").funtionsToRun.push(function () {
        let $grid = $("#grid").masonry(masonrySettings);
        $grid.masonry("reloadItems");
        $grid.imagesLoaded().progress(function () {
            $grid.masonry('layout');
        });
    });
});
