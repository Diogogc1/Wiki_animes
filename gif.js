var evlp_animes = document.querySelectorAll(".evlp_animes");
var gifs = document.querySelectorAll(".gif");
var gifs_srcs = [];

gifs.forEach(
    function(element, index)
    {
        gifs_srcs[index] = element.src;
        element.src = "";
    }
)

evlp_animes.forEach(
    function(element, index) {
        element.addEventListener("mouseenter", function() {
            gifs[index].src = gifs_srcs[index];
        }),
        element.addEventListener("mouseleave", function() {
            gifs[index].src = "";
        })
    }
);
