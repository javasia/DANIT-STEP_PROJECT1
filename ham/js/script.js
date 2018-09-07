document.querySelector("#search-img").addEventListener('click', function () {
    event.target.style.display = "none";
    document.querySelector("#search").style.display = "block";
});

document.querySelector("#search").addEventListener('blur', function () {
    event.target.style.display = "none";
    document.querySelector("#search-img").style.display = "block";
});
