document.addEventListener("DOMContentLoaded", function () {
  // Add show class to image
    const img = document.querySelector(".logoContainer img");
    if (img) {
        img.classList.add("show");
    }

    // Add show class to h1
    const h1 = document.querySelector(".logoContainer h1");
    if (h1) {
        h1.classList.add("show");
    }

    // Add show class to description paragraph
    const description = document.querySelector(".briefContainer p");
    if (description) {
        description.classList.add("show");
    }

    // Add show class to all links in buttons container
    const links = document.querySelectorAll(".buttonsContainer a");
    links.forEach((link) => {
        link.classList.add("show");
    });
});

// changeImgSrc function to change the image source based on the clicked accordion item
var img = document.querySelector(".column2 .imgContainer img");
var currentSrc = img.getAttribute("src");

if (currentSrc && currentSrc.includes("logoSemiCode.png")) {
    img.classList.add("main");
}else {
    img.classList.remove("main");
}
function changeImgSrc(event) {
    let imgSrc = event.currentTarget.getAttribute("data-imgSrc");
    if (img) {
        img.setAttribute("src", imgSrc);
        img.classList.remove("main");
    }
}