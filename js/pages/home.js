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
const mainSrcImgRightSideAbout = imgRightSideAbout.getAttribute("data-default-src");

const TRANSITION_DURATION = 350;

function changeImage(img, newSrc) {
  img.classList.add("fade-out");

  setTimeout(() => {
    img.setAttribute("src", newSrc);
    img.classList.remove("fade-out");

    img.classList.add("fade-in");
    setTimeout(() => img.classList.remove("fade-in"), TRANSITION_DURATION);
  }, TRANSITION_DURATION);
}

partsTop.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("clicked")) return;
    btn.classList.add("clicked");
    setTimeout(
      () => btn.classList.remove("clicked"),
      TRANSITION_DURATION + 150
    );

    const currentItem = btn.closest(".item");
    const isActive = currentItem.classList.contains("active");

    boxes.forEach((item) => item.classList.remove("active"));

    if (!isActive) {
      currentItem.classList.add("active");
      changeImage(imgRightSideAbout, btn.dataset.imgSrc);
    } else {
      changeImage(imgRightSideAbout, mainSrcImgRightSideAbout);
    }
  });
});

const dataInter = document.getElementById("dataInter");

// ① Build & render — string concat once, no loop innerHTML +=
function renderCourses(typeOfCourse) {
  const filtered = dataCourses.filter((course) =>
    course.typeCourse.includes(typeOfCourse)
  );

  // Build full string first, then set ONCE
  dataInter.innerHTML = filtered
    .map(
      (course, index) => `
    <li style="--i: ${index}">
      <div class="img-language">
        <img
          src="imgs/logo_language/${course.imgLanguage}"
          onerror="this.src='imgs/logo_language/default-svgrepo-com.svg'"
          loading="lazy"
          alt="${course.nameLanguage} icon"
          class="img-fluid"
        >
      </div>
      <div class="name-language">${course.nameLanguage}</div>
    </li>
  `
    )
    .join("");
}

// ② Change handler — guard + render
function changeCoursesContent(typeOfCourse, btn) {
  if (btn.classList.contains("active")) return;
  renderCourses(typeOfCourse);
}

// ④ Initial load — render Frontend on page load
renderCourses("Frontend");


// read Feedback data from dataFeedback.js and render it in the feedback section
let feedbackContainer = document.querySelector(".swiper-wrapper");
feedbacks.forEach((item) => {
  feedbackContainer.innerHTML += `
    <div class="swiper-slide">
      <img src="imgs/feedBack/${item}" alt="Feedback Image" class="img-fluid">
    </div>
  `;
})