document.querySelector("#search-img").addEventListener('click', function () {
    event.target.style.display = "none";
    document.querySelector("#search").style.display = "block";
});

document.querySelector("#search").addEventListener('blur', function () {
    event.target.style.display = "none";
    document.querySelector("#search-img").style.display = "block";
});

document.querySelector("#search-link").addEventListener('click', () => event.preventDefault());

$(window).on("load", function () {
    $(".grid").masonry({
        columnWidth: '.grid-item',
        itemSelector: '.grid-item'
    });
});

