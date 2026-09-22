(() => {
  const mealById = Object.fromEntries(MEALS.map((m) => [m.id, m]));
  const DEFAULT_PORTIONS = 5;
  const state = {
    filter: "all",
    mealId: "",
    portions: DEFAULT_PORTIONS,
  };

  const batchMeal = document.getElementById("batch-meal");
  const batchPortions = document.getElementById("batch-portions");
  const weekSummary = document.getElementById("week-summary");
  const mealGrid = document.getElementById("meal-grid");
  const shoppingList = document.getElementById("shopping-list");
  const cookGuide = document.getElementById("cook-guide");
  const cookLede = document.getElementById("cook-lede");
  const mealDialog = document.getElementById("meal-dialog");
  const dialogBody = document.getElementById("dialog-body");
  const copyStatus = document.getElementById("copy-status");

  function selectedMeal() {
    return state.mealId ? mealById[state.mealId] : null;
  }

  function populateMealSelect() {
    const opts = ['<option value="">— select a meal —</option>'];
    for (const meal of MEALS) {
      const sel = meal.id === state.mealId ? " selected" : "";
      opts.push(
        `<option value="${meal.id}"${sel}>${meal.name} · ${meal.protein}g P</option>`
      );
    }
    batchMeal.innerHTML = opts.join("");
  }

  function renderSummary() {
    const meal = selectedMeal();
    if (!meal) {
      weekSummary.hidden = true;
      weekSummary.innerHTML = "";
      return;
    }

    const totalProtein = meal.protein * state.portions;
    const totalCal = meal.calories * state.portions;

    weekSummary.hidden = false;
    weekSummary.innerHTML = `
      <span><strong>${meal.name}</strong></span>
      <span><strong>${state.portions}</strong> portions</span>
      <span><strong>~${meal.protein}g</strong> protein / plate</span>
      <span><strong>~${totalProtein}g</strong> protein total · ~${totalCal} kcal</span>
    `;
  }

  function renderMeals() {
    const list =
      state.filter === "all"
        ? MEALS
        : MEALS.filter((m) => m.category === state.filter);

    mealGrid.innerHTML = list
      .map(
        (meal, i) => `
      <article class="meal-card${meal.id === state.mealId ? " is-selected" : ""}" style="animation-delay: ${i * 0.04}s">
        <div class="meal-card-media">
          <img src="${meal.image}" alt="" loading="lazy" width="600" height="412" />
        </div>
        <div class="meal-card-body">
          <h3>${meal.name}</h3>
          <p class="meal-meta">
            <span class="protein-chip">${meal.protein}g protein</span>
            <span>${meal.calories} kcal</span>
            <span>${meal.cookMins} min</span>
          </p>
          <p>${meal.summary}</p>
          <div class="meal-card-actions">
            <button type="button" class="btn btn-secondary" data-detail="${meal.id}">
              Recipe
            </button>
            <button type="button" class="btn btn-ghost" data-select="${meal.id}">
              ${meal.id === state.mealId ? "Selected" : "Select"}
            </button>
          </div>
        </div>
      </article>
    `
      )
      .join("");
  }

  function formatQty(qty, unit) {
    const rounded =
      qty >= 10 ? Math.round(qty) : Math.round(qty * 10) / 10;
    if (!unit) {
      return String(rounded);
    }
    return `${rounded} ${unit}`.trim();
  }

  function buildShoppingData() {
    const meal = selectedMeal();
    const map = new Map();
    if (!meal) return {};

    for (const ing of meal.ingredients) {
      const key = `${ing.category}::${ing.item}::${ing.unit}`;
      map.set(key, {
        category: ing.category,
        item: ing.item,
        unit: ing.unit,
        qty: ing.qty * state.portions,
      });
    }

    const byCategory = {};
    for (const row of map.values()) {
      if (!byCategory[row.category]) byCategory[row.category] = [];
      byCategory[row.category].push(row);
    }

    for (const cat of Object.keys(byCategory)) {
      byCategory[cat].sort((a, b) => a.item.localeCompare(b.item));
    }

    return byCategory;
  }

  function renderShopping() {
    const byCategory = buildShoppingData();
    const categories = Object.keys(byCategory);

    if (!categories.length) {
      shoppingList.innerHTML =
        '<p class="empty-state">Select a meal and portions to generate your shopping list.</p>';
      return;
    }

    const order = [
      "Protein",
      "Produce",
      "Dairy",
      "Grains & legumes",
      "Pantry",
    ];
    const sorted = [
      ...order.filter((c) => byCategory[c]),
      ...categories.filter((c) => !order.includes(c)),
    ];

    shoppingList.innerHTML = sorted
      .map((cat) => {
        const items = byCategory[cat]
          .map((row, idx) => {
            const id = `shop-${cat}-${idx}`.replace(/\W+/g, "-");
            return `
            <li>
              <label class="shop-item" for="${id}">
                <input type="checkbox" id="${id}" />
                <span>${formatQty(row.qty, row.unit)} ${row.item}</span>
              </label>
            </li>
          `;
          })
          .join("");
        return `
          <div class="shop-group">
            <h3>${cat}</h3>
            <ul>${items}</ul>
          </div>
        `;
      })
      .join("");
  }

  function shoppingPlainText() {
    const meal = selectedMeal();
    const byCategory = buildShoppingData();
    const lines = [
      `BATCHDAY shopping list — ${meal?.name ?? "meal"} × ${state.portions}`,
      "",
    ];
    for (const [cat, items] of Object.entries(byCategory)) {
      lines.push(cat.toUpperCase());
      for (const row of items) {
        lines.push(`- ${formatQty(row.qty, row.unit)} ${row.item}`);
      }
      lines.push("");
    }
    return lines.join("\n").trim();
  }

  function renderCookGuide() {
    const meal = selectedMeal();
    if (!meal) {
      cookLede.textContent =
        "Select a meal above to unlock a timed, detailed cook guide scaled to your portions.";
      cookGuide.innerHTML =
        '<p class="empty-state cook-empty">Choose a batch meal to see step-by-step instructions.</p>';
      return;
    }

    cookLede.textContent = `Follow these steps for ${state.portions} portion${state.portions === 1 ? "" : "s"} of ${meal.name}. Check each step as you go (~${meal.cookMins} min).`;

    const equipment = (meal.equipment || [])
      .map((item) => `<li>${item}</li>`)
      .join("");

    const scaledIngredients = meal.ingredients
      .map((ing) => {
        const q = formatQty(ing.qty * state.portions, ing.unit);
        return `<li>${q} ${ing.item}</li>`;
      })
      .join("");

    const steps = meal.steps
      .map((step, idx) => {
        const id = `cook-step-${idx}`;
        return `
        <li class="cook-step">
          <label class="cook-step-label" for="${id}">
            <input type="checkbox" id="${id}" />
            <span class="cook-step-body">
              <span class="time-label">${step.time}</span>
              <span class="cook-step-title">${step.title}</span>
              <span class="cook-step-detail">${step.detail}</span>
            </span>
          </label>
        </li>
      `;
      })
      .join("");

    cookGuide.innerHTML = `
      <div class="cook-meta">
        <div class="cook-panel">
          <h3>You’ll need</h3>
          <ul>${equipment}</ul>
        </div>
        <div class="cook-panel">
          <h3>Scaled ingredients (${state.portions}×)</h3>
          <ul>${scaledIngredients}</ul>
        </div>
      </div>
      <ol class="timeline cook-steps">${steps}</ol>
    `;
  }

  function openMealDialog(id) {
    const meal = mealById[id];
    if (!meal) return;

    dialogBody.innerHTML = `
      <div class="dialog-media">
        <img src="${meal.image}" alt="" width="800" height="500" />
      </div>
      <h2 id="dialog-title">${meal.name}</h2>
      <p class="macro-row">
        <span class="protein-chip">${meal.protein}g protein</span>
        <span>${meal.carbs}g carbs</span>
        <span>${meal.fat}g fat</span>
        <span>${meal.calories} kcal</span>
        <span>${meal.cookMins} min</span>
      </p>
      <p>${meal.summary}</p>
      <h3>Ingredients (1 portion)</h3>
      <ul class="dialog-ingredients">
        ${meal.ingredients
          .map((ing) => {
            const q = ing.unit ? `${ing.qty} ${ing.unit}` : String(ing.qty);
            return `<li>${q} ${ing.item}</li>`;
          })
          .join("")}
      </ul>
      <h3>Method</h3>
      <ol class="dialog-steps">
        ${meal.steps
          .map(
            (s) =>
              `<li><strong>${s.title}</strong> (${s.time}) — ${s.detail}</li>`
          )
          .join("")}
      </ol>
      <p class="dialog-cook-link"><a href="#cook">Open full cook guide →</a></p>
    `;
    mealDialog.showModal();
  }

  function setMeal(id) {
    state.mealId = id;
    if (!state.portions) state.portions = DEFAULT_PORTIONS;
    batchMeal.value = id;
    batchPortions.value = String(state.portions);
    refreshPlanOutputs();
  }

  function refreshPlanOutputs() {
    populateMealSelect();
    renderSummary();
    renderMeals();
    renderShopping();
    renderCookGuide();
  }

  batchMeal.addEventListener("change", () => {
    state.mealId = batchMeal.value;
    refreshPlanOutputs();
  });

  batchPortions.addEventListener("input", () => {
    const n = Math.max(1, Math.min(20, Number(batchPortions.value) || 1));
    state.portions = n;
    if (String(n) !== batchPortions.value) batchPortions.value = String(n);
    renderSummary();
    renderShopping();
    renderCookGuide();
  });

  document.getElementById("clear-plan").addEventListener("click", () => {
    state.mealId = "";
    state.portions = DEFAULT_PORTIONS;
    batchPortions.value = String(DEFAULT_PORTIONS);
    refreshPlanOutputs();
  });

  document.querySelector(".meal-filters").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    state.filter = btn.dataset.filter;
    document
      .querySelectorAll(".filter")
      .forEach((el) => el.classList.toggle("is-active", el === btn));
    renderMeals();
  });

  mealGrid.addEventListener("click", (e) => {
    const detail = e.target.closest("[data-detail]");
    if (detail) {
      openMealDialog(detail.dataset.detail);
      return;
    }
    const select = e.target.closest("[data-select]");
    if (select) {
      setMeal(select.dataset.select);
      document.getElementById("plan")?.scrollIntoView({ behavior: "smooth" });
    }
  });

  shoppingList.addEventListener("change", (e) => {
    const input = e.target.closest('input[type="checkbox"]');
    if (!input) return;
    input.closest(".shop-item")?.classList.toggle("is-checked", input.checked);
  });

  cookGuide.addEventListener("change", (e) => {
    const input = e.target.closest('input[type="checkbox"]');
    if (!input) return;
    input.closest(".cook-step")?.classList.toggle("is-done", input.checked);
  });

  mealDialog.addEventListener("click", (e) => {
    const link = e.target.closest('a[href="#cook"]');
    if (!link) return;
    mealDialog.close();
  });

  document.getElementById("copy-list").addEventListener("click", async () => {
    if (!selectedMeal()) {
      copyStatus.textContent = "Select a meal first.";
      return;
    }
    try {
      await navigator.clipboard.writeText(shoppingPlainText());
      copyStatus.textContent = "Copied to clipboard.";
    } catch {
      copyStatus.textContent = "Could not copy — select the list manually.";
    }
  });

  // Init
  batchPortions.value = String(DEFAULT_PORTIONS);
  populateMealSelect();
  renderSummary();
  renderMeals();
  renderShopping();
  renderCookGuide();
})();
