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

const boxes = document.querySelectorAll(".box > .item");
const partsTop = document.querySelectorAll(".part-top");
const imgRightSideAbout = document.querySelector("#About .part.part-right img");
const mainSrcImgRightSideAbout =
  imgRightSideAbout.getAttribute("data-default-src");

function changeImage(img, newSrc) {
  img.classList.add("fade-out");
  setTimeout(() => {
    img.setAttribute("src", newSrc);
    img.classList.remove("fade-out");
  }, 350);
}

partsTop.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("clicked")) return;
    btn.classList.add("clicked");

    const currentItem = btn.closest(".item");
    const isActive = currentItem.classList.contains("active");

    boxes.forEach((item) => item.classList.remove("active"));

    setTimeout((e) => {
      btn.classList.remove("clicked");
    }, 500);

    if (!isActive) {
      currentItem.classList.add("active");
      changeImage(imgRightSideAbout, btn.dataset.imgSrc);
    } else {
      changeImage(imgRightSideAbout, mainSrcImgRightSideAbout);
    }
  });
});
