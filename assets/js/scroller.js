document.getElementById("scroller").onclick = () => {
    window.scrollTo(0, 0);
}

document.onscroll = () => {
    var scroller = document.getElementById("scroller");

    if (window.pageYOffset > 10) {
        if (scroller.classList.contains("hidden")) {
            scroller.classList.remove("hidden");
        }
    } else {
        if (!scroller.classList.contains("hidden")) {
            scroller.classList.add("hidden");
        }
    }

}