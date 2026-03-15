// show and hide side nav
let iconCloseSideNav = document.querySelector(".sideNavIconCover");
let sideNav = document.querySelector(".categories-row");
let mainContent = document.querySelector(".accordion");
let IconsForClosedSideNav = document.querySelector(".IconsForClosedSideNav");
let pluginsCardsContainer = document.querySelector("section.plugins-row");

/* iconCloseSideNav.querySelector("img").addEventListener("click", () => {
  iconCloseSideNav.querySelector("form").classList.toggle("d-none");
  iconCloseSideNav.querySelector("img").classList.toggle("closed");
  mainContent.classList.toggle("hidden");
  sideNav.classList.toggle("width-fitContent");
  IconsForClosedSideNav.classList.toggle("d-flex");
  pluginsCardsContainer.classList.toggle("WidthCoverAll");
  if (sideNav.classList.contains("center")) {
    sideNav.classList.toggle("center");
  } else {
    setTimeout(() => {
      sideNav.classList.toggle("center");
    }, 500);
  }
});

allPlugins.forEach((plugin, index) => {
  IconsForClosedSideNav.querySelector("ul").innerHTML += `
    <li class="d-flex justify-content-center align-items-center" title="${plugin.groupName}">
        <img src="${plugin.img}" alt="${plugin.groupName}">
    </li>
`;
  let pluginsHtml = "";
  plugin.content.forEach((item) => {
    pluginsHtml += `
            <div class="pluginCover rounded-4 d-flex justify-content-start align-items-center p-3 ">
                <div class="pluginImgCover">
                    <img src="${item.logoLink}" alt="${item.name}" class="pluginImage img-fluid">
                </div>
                <div class="pluginNameCover">
                    <h4 class="pluginName mb-0 fs-6 fw-normal">${item.name}</h4>
                </div>
            </div>
        `;
  });
  mainContent.innerHTML += `
        <div class="accordion-item">
            <h2 class="accordion-header mb-0">
                <button class="accordion-button collapsed d-flex gap-2 fs-6" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse${
                      index + 1
                    }" aria-expanded="false" aria-controls="flush-collapse${
    index + 1
  }">
                    <img src="${plugin.img}" alt="${plugin.groupName}">
                    <h3 class="mb-0 fw-normal categoryName">${
                      plugin.groupName
                    }</h3>
                </button>
            </h2>
            <div id="flush-collapse${
              index + 1
            }" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    ${pluginsHtml}
                </div>
            </div>
        </div>
        `;
        });
        
        // add Scrolled To IconsSideNav
        let categoriesRow = document.querySelector(".categories-row");
        categoriesRow.addEventListener("scroll", () => {
          let IconSideNav = document.querySelector(".sideNavIconCover");
          if (categoriesRow.scrollTop > 0) {
            IconSideNav.classList.add("scrolled");
            } else {
              IconSideNav.classList.remove("scrolled");
          }
          });
          // ---------------------------------------------------------------------
          */

//

window.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const toggleButton = document.getElementById("sidebarToggle");
  const navItems = document.querySelectorAll("aside .nav-item");
  const activePill = document.getElementById("activePill");

  function moveActivePill(target) {
    if (!target || !activePill) return;

    activePill.style.transform = `translateY(${target.offsetTop}px)`;
    activePill.style.height = `${target.offsetHeight}px`;
  }

  function setActiveItem(targetItem) {
    navItems.forEach((item) => item.classList.remove("is-active"));
    targetItem.classList.add("is-active");
    moveActivePill(targetItem);
  }

  toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("is-closed");
    sidebar.classList.toggle("is-open");

    const activeItem = document.querySelector("aside .nav-item.is-active");

    setTimeout(() => {
      moveActivePill(activeItem);
    }, 220);
  });

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      setActiveItem(item);
    });
  });

  window.addEventListener("load", () => {
    moveActivePill(document.querySelector("aside .nav-item.is-active"));
  });

  window.addEventListener("resize", () => {
    moveActivePill(document.querySelector("aside .nav-item.is-active"));

    if (window.innerWidth < 768) {
      sidebar.classList.add("is-closed");
      sidebar.classList.remove("is-open");
    } else {
      sidebar.classList.remove("is-closed");
      sidebar.classList.add("is-open");
    }
  });
});

const pluginsCategoryRow = document.querySelector("#sidebar__nav");
const pluginsRow = document.querySelector("#plugins-row .row");

allPluginsCategory.forEach(function (pluginCategory, index) {
  pluginsCategoryRow.innerHTML += `
                <article class="nav-item ${
                  index == 0 ? "is-active" : ""
                }" data-index="${index}">
                  <span class="nav-item__icon">
                      <img src="${
                        pluginCategory.img
                      }" loading="lazy" alt="" class="img-fluid">
                  </span>
                  <span class="nav-item__text">${
                    pluginCategory.groupName
                  }</span>
                </article>
  `;
});

allPlugins.forEach((plugin) => {
  pluginsRow.innerHTML += `
          <article class="column column1">
              <a href="${plugin.link}" target="_blank">
                  <div class="item">
                      <img src="imgs/icons/hologram.gif" loading="lazy" alt=""
                          class="img-fluid top-right">

                      <div class="plugin__logo">
                          <img src="${plugin.logoLink}" alt="${plugin.name}" loading="lazy" class="img-fluid">
                      </div>
                      <div class="plugin__name">
                          <h3>${plugin.name}</h3>
                      </div>
                      <div class="plugin__category">
                          <h4>${plugin.category}</h4>
                      </div>

                      <div class="plugin__description">
                          <p>
                            ${plugin.description}
                          </p>
                      </div>
                  </div>
              </a>
          </article>
  
  `;
});
