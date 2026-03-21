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
  const currentPlugins = arrayFiltered.slice(
    visibleCountStart,
    visibleCountEnd
  );
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
