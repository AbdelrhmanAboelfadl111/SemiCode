function changeActives(that) {
  let parentAllChildren = that.closest(".changeActives"),
    childActive = parentAllChildren.querySelector(".active"),
    currentChild = that;

  if (that.classList.contains("active")) {
    return 0;
  } else {
    childActive.classList.remove("active");
    currentChild.classList.add("active");
  }
}

// ! Sidebar Activate Functions
function getActivePill() {
  return document.getElementById("activePill");
}

function moveActivePill(target) {
  const activePill = getActivePill();
  if (!target || !activePill) return;
  activePill.style.transform = `translateY(${target.offsetTop}px)`;
  activePill.style.height = `${target.offsetHeight}px`;
}

function setActiveItem(targetItem) {
  document
    .querySelectorAll("aside .nav-item")
    .forEach((item) => item.classList.remove("is-active"));
  targetItem.classList.add("is-active");
  moveActivePill(targetItem);
}

// ! Plugins Page Functions \\

// Filter by Category
function renderCategoryPlugins(that) {
  const typeCategory = that.dataset.category;

  searchInput.value = "";

  if (typeCategory === "all") {
    filteredPlugins = [...allPlugins];
  } else {
    const group = allPluginsCategory.find((g) =>
      g.category.includes(typeCategory)
    );
    const relatedCategories = group ? group.category : [typeCategory];
    filteredPlugins = allPlugins.filter((item) =>
      relatedCategories.includes(item.category)
    );
  }

  visibleCountStart = 0;
  visibleCountEnd = 12;
  loading = false;

  pluginsScrollContainer.scrollTo({ top: 0, behavior: "smooth" });
  pluginsContainer.innerHTML = "";
  appendPlugins(filteredPlugins);
}

// Append Plugins
function appendPlugins(arrayFiltered) {
  if (arrayFiltered.length == 0) {
    if (searched) return;

    pluginsContainer.classList.add("notFound");

    let alertElement = `<div class="BoxContainerForNotPluginFound justify-content-center align-items-center flex-column">
        <img src="imgs/icons/plug-in.png" class="imgForNotFoundPlugin">
        <h4 class="mb-0">Plugin Not Found</h4>
      </div>`;

    pluginsContainer.innerHTML = `${alertElement}`;

    searched = true;

    setTimeout(() => {
      let alert = document.querySelector(".BoxContainerForNotPluginFound");
      alert.classList.add("active");
      setTimeout(() => {
        alert.classList.add("show");
      }, 10);
    }, 1);
  } else {
    const currentPlugins = arrayFiltered.slice(
      visibleCountStart,
      visibleCountEnd
    );
    pluginsContainer.classList.remove("notFound");
    searched = false;

    setTimeout(() => {
      let alert = document.querySelector(".BoxContainerForNotPluginFound");
      alert.classList.remove("show");
      setTimeout(() => {
        alert.classList.remove("active");
      }, 500);
    }, 1);

    const template = document.createElement("template");
    const fragment = document.createDocumentFragment();

    currentPlugins.forEach((plugin) => {
      template.innerHTML = `
        <article class="column column1 plugin-card-animate">
          <a href="${plugin.link}" target="_blank">
            <div class="item">
              <img src="imgs/icons/arrow.gif" loading="lazy" alt="Arrow travel" class="img-fluid top-right">
              <div class="plugin__logo">
                <img src="${plugin.logoLink}" onerror="this.src='imgs/puzzle_4020290.png'"
                  alt="${plugin.name}" loading="lazy" class="img-fluid">
              </div>
              <div class="plugin__name"><h3>${plugin.name}</h3></div>
              <div class="plugin__category"><h4>${plugin.category}</h4></div>
              <div class="plugin__description"><p>${plugin.description}</p></div>
            </div>
          </a>
        </article>`.trim();
      fragment.appendChild(template.content.firstElementChild);
    });

    pluginsContainer.appendChild(fragment);
  }
}
