const MEALS = [
  {
    id: "lemon-herb-chicken",
    name: "Lemon-herb chicken bowls",
    category: "poultry",
    protein: 48,
    carbs: 42,
    fat: 14,
    calories: 490,
    cookMins: 55,
    summary:
      "Oven chicken thighs, herbed quinoa, roasted broccoli, and a sharp lemon yogurt sauce.",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80",
    equipment: [
      "2 large sheet pans",
      "Medium saucepan with lid",
      "Mixing bowls",
      "Meal containers (one per portion)",
    ],
    ingredients: [
      { item: "chicken thighs (boneless)", qty: 180, unit: "g", category: "Protein" },
      { item: "quinoa", qty: 70, unit: "g dry", category: "Grains & legumes" },
      { item: "broccoli", qty: 150, unit: "g", category: "Produce" },
      { item: "lemon", qty: 0.5, unit: "", category: "Produce" },
      { item: "Greek yogurt (0%)", qty: 60, unit: "g", category: "Dairy" },
      { item: "olive oil", qty: 1, unit: "tbsp", category: "Pantry" },
      { item: "garlic", qty: 1, unit: "clove", category: "Produce" },
      { item: "dried oregano", qty: 1, unit: "tsp", category: "Pantry" },
    ],
    steps: [
      {
        time: "0:00",
        title: "Heat the oven and set up",
        detail:
          "Preheat the oven to 200°C (fan 180°C). Line two sheet pans with baking paper. Put a medium saucepan on the stove with a lid ready. Set out salt, pepper, a microplane or zester, and your meal containers.",
      },
      {
        time: "0:05",
        title: "Prep the chicken",
        detail:
          "Pat the chicken dry. Mince the garlic. Zest the lemon(s), then cut them in half for juicing later. In a large bowl, toss chicken with olive oil, garlic, oregano, most of the lemon zest, a generous pinch of salt, and black pepper until every piece is coated.",
      },
      {
        time: "0:12",
        title: "Start the quinoa",
        detail:
          "Rinse the quinoa under cold water. Add it to the saucepan with twice its volume in water (about 140 ml water per 70 g dry quinoa) and a pinch of salt. Bring to a boil, then cover and simmer on low for 12–15 minutes until the water is absorbed. Turn off the heat and leave covered to steam.",
      },
      {
        time: "0:15",
        title: "Get the chicken in the oven",
        detail:
          "Spread the chicken in a single layer on one sheet pan — do not crowd it or it will steam. Roast for 25–30 minutes until the thickest piece reads 75°C inside and juices run clear. If batches are large, use two pans and rotate shelves halfway.",
      },
      {
        time: "0:20",
        title: "Prep and roast the broccoli",
        detail:
          "Cut broccoli into even florets. Toss with a little oil, salt, and pepper. Spread on the second sheet pan. Roast for 16–18 minutes until the edges char lightly but stems stay tender. Start this while the chicken is already roasting so both finish close together.",
      },
      {
        time: "0:35",
        title: "Make the lemon yogurt sauce",
        detail:
          "Stir Greek yogurt with lemon juice, the remaining zest, and a pinch of salt until smooth. Aim for a spoonable sauce — add a teaspoon of water if it is too thick. Taste: it should be bright and slightly tangy. Divide into small pots or keep one jar for the week.",
      },
      {
        time: "0:40",
        title: "Rest the chicken, fluff the quinoa",
        detail:
          "Pull the chicken from the oven and rest 5 minutes so juices settle. Fluff the quinoa with a fork. If it looks dry, fold in a splash of hot water or a drizzle of olive oil.",
      },
      {
        time: "0:50",
        title: "Portion and chill",
        detail:
          "Divide quinoa, chicken, and broccoli evenly across your containers. Keep the yogurt sauce separate so the chicken skin/surface stays fresher. Cool uncovered for about 20 minutes, then seal. Refrigerate up to 4 days; freeze any extras the same day.",
      },
    ],
  },
  {
    id: "soy-ginger-salmon",
    name: "Soy-ginger salmon & greens",
    category: "fish",
    protein: 42,
    carbs: 28,
    fat: 18,
    calories: 450,
    cookMins: 45,
    summary:
      "Tray-baked salmon with gingery glaze, wilted greens, and sticky brown rice.",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
    equipment: [
      "Sheet pan",
      "Medium saucepan with lid",
      "Large skillet",
      "Small bowl for glaze",
      "Meal containers",
    ],
    ingredients: [
      { item: "salmon fillets", qty: 160, unit: "g", category: "Protein" },
      { item: "brown rice", qty: 65, unit: "g dry", category: "Grains & legumes" },
      { item: "bok choy or spinach", qty: 120, unit: "g", category: "Produce" },
      { item: "fresh ginger", qty: 8, unit: "g", category: "Produce" },
      { item: "soy sauce / tamari", qty: 1.5, unit: "tbsp", category: "Pantry" },
      { item: "honey", qty: 1, unit: "tsp", category: "Pantry" },
      { item: "sesame oil", qty: 1, unit: "tsp", category: "Pantry" },
      { item: "garlic", qty: 1, unit: "clove", category: "Produce" },
    ],
    steps: [
      {
        time: "0:00",
        title: "Start the rice first",
        detail:
          "Rinse brown rice until the water runs clearer. Cook with about 2× water (130 ml per 65 g dry rice) and a pinch of salt. Bring to a boil, cover, and simmer gently 30–35 minutes. Leave covered off the heat for 5 minutes at the end.",
      },
      {
        time: "0:05",
        title: "Preheat and make the glaze",
        detail:
          "Preheat oven to 200°C. Peel and finely grate the ginger; mince the garlic. In a small bowl whisk soy sauce, honey, sesame oil, ginger, and garlic until the honey dissolves. Taste — it should be salty-sweet with a ginger kick.",
      },
      {
        time: "0:15",
        title: "Prep the salmon",
        detail:
          "Pat fillets dry and place on a lined sheet pan, skin-side down if skin-on. Spoon most of the glaze over the top and sides, reserving a little for later. Leave the salmon at room temperature while the oven finishes heating (5–10 minutes).",
      },
      {
        time: "0:25",
        title: "Bake the salmon",
        detail:
          "Bake 12–14 minutes for typical fillet thickness. The flesh should flake easily and look opaque in the centre. If fillets are thick, add 2–3 minutes. Avoid overcooking — salmon continues to firm as it rests.",
      },
      {
        time: "0:30",
        title: "Wilt the greens",
        detail:
          "While salmon bakes, heat a large skillet over medium-high. Add greens with a splash of water and a pinch of salt. Toss 2–3 minutes until just wilted and bright green. Drain any excess liquid so containers do not get soggy.",
      },
      {
        time: "0:38",
        title: "Assemble lunch boxes",
        detail:
          "Fluff the rice and divide into containers. Add salmon and greens. Drizzle reserved glaze lightly, or pack it separately. Cool uncovered ~20 minutes, then seal. Best within 3 days; freeze only if you accept a softer texture on reheat.",
      },
    ],
  },
  {
    id: "turkey-chili",
    name: "Turkey black-bean chili",
    category: "poultry",
    protein: 45,
    carbs: 38,
    fat: 12,
    calories: 440,
    cookMins: 55,
    summary:
      "One-pot turkey chili with black beans and peppers — freezes cleanly for late-week training.",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80",
    equipment: [
      "Large heavy pot or Dutch oven",
      "Wooden spoon",
      "Chopping board & knife",
      "Meal containers",
    ],
    ingredients: [
      { item: "lean ground turkey", qty: 160, unit: "g", category: "Protein" },
      { item: "black beans (cooked)", qty: 120, unit: "g", category: "Grains & legumes" },
      { item: "crushed tomatoes", qty: 180, unit: "g", category: "Pantry" },
      { item: "bell pepper", qty: 0.5, unit: "", category: "Produce" },
      { item: "onion", qty: 0.25, unit: "", category: "Produce" },
      { item: "chili powder", qty: 1, unit: "tsp", category: "Pantry" },
      { item: "cumin", qty: 0.5, unit: "tsp", category: "Pantry" },
      { item: "olive oil", qty: 1, unit: "tsp", category: "Pantry" },
    ],
    steps: [
      {
        time: "0:00",
        title: "Chop everything first",
        detail:
          "Dice the onion and bell pepper into small, even pieces. Drain and rinse the black beans if using canned. Open the tomatoes and measure spices into a small dish so you can add them in one go. This mise en place keeps the browning step calm.",
      },
      {
        time: "0:10",
        title: "Sweat the vegetables",
        detail:
          "Heat olive oil in a large pot over medium heat. Add onion and pepper with a pinch of salt. Cook 5–7 minutes, stirring often, until softened and lightly golden at the edges — not burnt.",
      },
      {
        time: "0:18",
        title: "Brown the turkey",
        detail:
          "Add the ground turkey. Break it up with a wooden spoon into small crumbles. Cook 6–8 minutes until no pink remains and some bits take on colour. Colour = flavour; do not rush this step.",
      },
      {
        time: "0:26",
        title: "Bloom the spices",
        detail:
          "Stir in chili powder and cumin. Cook 30–60 seconds until fragrant. If the pot looks dry, add a splash of water so the spices do not scorch.",
      },
      {
        time: "0:28",
        title: "Simmer the chili",
        detail:
          "Add crushed tomatoes and black beans. Stir well, scraping the bottom. Bring to a gentle simmer, then lower the heat and cook uncovered 25–30 minutes, stirring every few minutes. It should thicken enough to mound on a spoon.",
      },
      {
        time: "0:50",
        title: "Season, cool, portion",
        detail:
          "Taste and adjust salt and chili heat. For a brighter finish, add a squeeze of lime if you have one. Cool in the pot 10 minutes, then ladle evenly into containers. Cool fully before sealing. Freezes excellently for up to 2 months.",
      },
    ],
  },
  {
    id: "beef-power-bowls",
    name: "Beef & sweet potato power bowls",
    category: "beef",
    protein: 46,
    carbs: 44,
    fat: 16,
    calories: 510,
    cookMins: 50,
    summary:
      "Seared lean beef strips, roasted sweet potato, and a crunchy slaw with lime.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    equipment: [
      "Sheet pan",
      "Large skillet (preferably heavy)",
      "Mixing bowl for slaw",
      "Sharp knife",
      "Meal containers",
    ],
    ingredients: [
      { item: "lean beef (sirloin)", qty: 150, unit: "g", category: "Protein" },
      { item: "sweet potato", qty: 180, unit: "g", category: "Produce" },
      { item: "red cabbage", qty: 80, unit: "g", category: "Produce" },
      { item: "carrot", qty: 40, unit: "g", category: "Produce" },
      { item: "lime", qty: 0.5, unit: "", category: "Produce" },
      { item: "olive oil", qty: 1, unit: "tbsp", category: "Pantry" },
      { item: "smoked paprika", qty: 0.5, unit: "tsp", category: "Pantry" },
    ],
    steps: [
      {
        time: "0:00",
        title: "Preheat and cube the sweet potato",
        detail:
          "Preheat oven to 200°C. Peel (optional) and cut sweet potato into 2 cm cubes so they cook evenly. Toss with most of the olive oil, smoked paprika, salt, and pepper. Spread in a single layer on a sheet pan.",
      },
      {
        time: "0:10",
        title: "Roast the sweet potato",
        detail:
          "Roast 25–30 minutes, flipping once halfway, until edges caramelise and centres are soft when pierced. Crowding causes steaming — use two pans if needed.",
      },
      {
        time: "0:15",
        title: "Make the lime slaw",
        detail:
          "While potatoes roast, finely shred red cabbage and grate or julienne the carrot. Toss with lime juice and a pinch of salt. Taste after a minute — it should be crunchy and bright. Keep cold until portioning.",
      },
      {
        time: "0:25",
        title: "Prep the beef",
        detail:
          "Slice beef against the grain into thin strips. Pat very dry. Season lightly with salt and pepper just before cooking. Dry meat sears; wet meat steams.",
      },
      {
        time: "0:32",
        title: "Sear in hot batches",
        detail:
          "Heat a skillet until very hot, then add a thin film of oil. Sear beef in batches 2–3 minutes total, turning once — you want browned edges and a still-juicy centre. Rest on a plate 3–4 minutes. Do not overcrowd the pan.",
      },
      {
        time: "0:42",
        title: "Build the bowls",
        detail:
          "Divide sweet potato, beef, and slaw into containers. Pack slaw to the side if you prefer it extra crisp midweek. Cool uncovered, then seal. Reheat beef and potato gently; keep slaw cold.",
      },
    ],
  },
  {
    id: "tofu-peanut-bowl",
    name: "Crispy tofu peanut bowls",
    category: "veg",
    protein: 36,
    carbs: 48,
    fat: 18,
    calories: 500,
    cookMins: 50,
    summary:
      "High-protein tofu with peanut-lime sauce, edamame, and jasmine rice.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    equipment: [
      "Tofu press or clean tea towels + weight",
      "Sheet pan or air fryer",
      "Saucepan for rice",
      "Mixing bowls",
      "Meal containers",
    ],
    ingredients: [
      { item: "firm tofu", qty: 180, unit: "g", category: "Protein" },
      { item: "jasmine rice", qty: 65, unit: "g dry", category: "Grains & legumes" },
      { item: "edamame (shelled)", qty: 80, unit: "g", category: "Protein" },
      { item: "cucumber", qty: 60, unit: "g", category: "Produce" },
      { item: "natural peanut butter", qty: 1, unit: "tbsp", category: "Pantry" },
      { item: "lime", qty: 0.5, unit: "", category: "Produce" },
      { item: "soy sauce / tamari", qty: 1, unit: "tbsp", category: "Pantry" },
      { item: "cornflour", qty: 1, unit: "tbsp", category: "Pantry" },
    ],
    steps: [
      {
        time: "0:00",
        title: "Press the tofu",
        detail:
          "Drain the tofu. Wrap in a clean towel and press under a heavy pan or press for 10–15 minutes. The drier it is, the crispier it gets. Meanwhile, preheat oven to 200°C or set the air fryer to 190°C.",
      },
      {
        time: "0:05",
        title: "Start the rice",
        detail:
          "Rinse jasmine rice. Cook with about 1.5× water (≈100 ml per 65 g dry) and a pinch of salt. Simmer covered 12–15 minutes, then rest covered 5 minutes off heat.",
      },
      {
        time: "0:15",
        title: "Cube and coat the tofu",
        detail:
          "Cut pressed tofu into 2 cm cubes. Toss with cornflour, a pinch of salt, and a light spray or teaspoon of oil until every side looks dusty-white. Spread on a lined sheet pan with space between cubes.",
      },
      {
        time: "0:20",
        title: "Crisp the tofu",
        detail:
          "Bake 20–25 minutes, flipping halfway, until golden and crisp. Air fryer: ~15–18 minutes, shaking once. They should sound light when tapped.",
      },
      {
        time: "0:25",
        title: "Sauce, edamame, cucumber",
        detail:
          "Whisk peanut butter, soy sauce, lime juice, and enough water to make a pourable sauce. Warm or thaw edamame in boiling water 2–3 minutes; drain well. Dice cucumber and keep it raw for crunch.",
      },
      {
        time: "0:40",
        title: "Portion for the week",
        detail:
          "Divide rice, tofu, edamame, and cucumber into containers. Pack peanut sauce separately and pour when eating so the tofu stays crisp longer. Cool, seal, refrigerate up to 4 days.",
      },
    ],
  },
  {
    id: "egg-white-frittata",
    name: "Spinach & cottage egg bake",
    category: "veg",
    protein: 38,
    carbs: 12,
    fat: 14,
    calories: 330,
    cookMins: 45,
    summary:
      "Protein-packed egg bake with cottage cheese and spinach — ideal breakfast or light lunch.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80",
    equipment: [
      "Large mixing bowl",
      "Skillet for spinach",
      "Baking tin or oven dish (lined)",
      "Whisk",
      "Meal containers",
    ],
    ingredients: [
      { item: "eggs", qty: 2, unit: "", category: "Protein" },
      { item: "egg whites", qty: 120, unit: "ml", category: "Protein" },
      { item: "cottage cheese", qty: 80, unit: "g", category: "Dairy" },
      { item: "spinach", qty: 80, unit: "g", category: "Produce" },
      { item: "cherry tomatoes", qty: 60, unit: "g", category: "Produce" },
      { item: "feta (optional)", qty: 20, unit: "g", category: "Dairy" },
    ],
    steps: [
      {
        time: "0:00",
        title: "Preheat and prep the tin",
        detail:
          "Preheat oven to 180°C. Line a baking tin with paper or lightly oil it. Halve the cherry tomatoes. Have cottage cheese and eggs ready to whisk.",
      },
      {
        time: "0:05",
        title: "Wilt the spinach",
        detail:
          "Heat a skillet over medium. Add spinach with a splash of water and cook 1–2 minutes until collapsed. Tip into a sieve and press out excess liquid — watery spinach makes a soggy bake.",
      },
      {
        time: "0:12",
        title: "Make the egg base",
        detail:
          "In a large bowl, whisk whole eggs, egg whites, and cottage cheese until mostly smooth (small curds are fine). Season with salt and pepper. Fold in drained spinach and tomatoes. Crumble in feta if using.",
      },
      {
        time: "0:18",
        title: "Bake",
        detail:
          "Pour into the tin and level the top. Bake 25–28 minutes until the centre is set and the top is lightly golden. A knife inserted in the middle should come out mostly clean. If browning too fast, tent loosely with foil.",
      },
      {
        time: "0:45",
        title: "Cool and slice into portions",
        detail:
          "Cool in the tin 10 minutes, then lift out and cut into even squares or rectangles — one piece per lunch. Cool fully before boxing. Reheat gently or eat cold. Keeps 3–4 days refrigerated.",
      },
    ],
  },
  {
    id: "greek-turkey-meatballs",
    name: "Greek turkey meatballs",
    category: "poultry",
    protein: 44,
    carbs: 36,
    fat: 15,
    calories: 460,
    cookMins: 50,
    summary:
      "Baked turkey meatballs with cucumber-tomato salad and herbed couscous.",
    image:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1200&q=80",
    equipment: [
      "Large mixing bowl",
      "Sheet pan",
      "Heatproof bowl for couscous",
      "Meal containers",
    ],
    ingredients: [
      { item: "lean ground turkey", qty: 160, unit: "g", category: "Protein" },
      { item: "couscous", qty: 60, unit: "g dry", category: "Grains & legumes" },
      { item: "cucumber", qty: 80, unit: "g", category: "Produce" },
      { item: "tomato", qty: 80, unit: "g", category: "Produce" },
      { item: "red onion", qty: 20, unit: "g", category: "Produce" },
      { item: "Greek yogurt (0%)", qty: 50, unit: "g", category: "Dairy" },
      { item: "breadcrumbs", qty: 15, unit: "g", category: "Pantry" },
      { item: "dried oregano", qty: 1, unit: "tsp", category: "Pantry" },
    ],
    steps: [
      {
        time: "0:00",
        title: "Preheat and mix the meatballs",
        detail:
          "Preheat oven to 200°C and line a sheet pan. In a bowl, combine turkey, breadcrumbs, oregano, salt, and pepper. Mix gently with wet hands until just combined — overmixing makes tough meatballs.",
      },
      {
        time: "0:10",
        title: "Shape and bake",
        detail:
          "Roll into even balls (about walnut-sized, ~16–18 per 160 g base portion scaled up). Space them on the pan. Bake 18–20 minutes until browned and cooked through (75°C in the centre).",
      },
      {
        time: "0:15",
        title: "Cook the couscous",
        detail:
          "While meatballs bake, put couscous in a heatproof bowl with a pinch of salt and oregano. Pour over boiling water (equal volume to couscous), cover, and stand 5–8 minutes. Fluff with a fork and a drizzle of olive oil if you like.",
      },
      {
        time: "0:20",
        title: "Chop the salad",
        detail:
          "Dice cucumber and tomato; finely slice red onion. Toss with a pinch of salt. Keep undressed or with a squeeze of lemon so it stays fresh in the fridge.",
      },
      {
        time: "0:30",
        title: "Check meatballs and portion",
        detail:
          "Confirm meatballs are cooked through, then rest 3 minutes. Divide couscous, meatballs, and salad into containers. Add yogurt in a separate pot. Cool, seal, refrigerate up to 4 days.",
      },
    ],
  },
  {
    id: "tuna-white-bean",
    name: "Tuna & white bean packs",
    category: "fish",
    protein: 40,
    carbs: 32,
    fat: 12,
    calories: 400,
    cookMins: 25,
    summary:
      "No-reheat lunch: olive-oil tuna, cannellini beans, parsley, and lemon — assemble in minutes.",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80",
    equipment: [
      "Large mixing bowl",
      "Colander",
      "Knife & board",
      "Meal containers",
    ],
    ingredients: [
      { item: "canned tuna in olive oil", qty: 120, unit: "g", category: "Protein" },
      { item: "cannellini beans", qty: 120, unit: "g", category: "Grains & legumes" },
      { item: "parsley", qty: 10, unit: "g", category: "Produce" },
      { item: "lemon", qty: 0.5, unit: "", category: "Produce" },
      { item: "celery", qty: 40, unit: "g", category: "Produce" },
      { item: "olive oil", qty: 1, unit: "tsp", category: "Pantry" },
      { item: "wholegrain crackers (optional)", qty: 30, unit: "g", category: "Pantry" },
    ],
    steps: [
      {
        time: "0:00",
        title: "Drain and rinse",
        detail:
          "Drain the cannellini beans in a colander and rinse under cold water. Drain the tuna, reserving a teaspoon of its oil if you want extra richness. Flake the tuna into a large bowl with a fork.",
      },
      {
        time: "0:05",
        title: "Chop the crunch",
        detail:
          "Finely dice the celery. Chop the parsley leaves. Zest the lemon if you like extra aroma, then juice it. Keep pieces small so every bite of the salad is balanced.",
      },
      {
        time: "0:12",
        title: "Toss the salad",
        detail:
          "Add beans, celery, and parsley to the tuna. Dress with lemon juice, a little olive oil (or reserved tuna oil), salt, and black pepper. Fold gently so beans stay intact. Taste and adjust lemon/salt — it should taste vivid cold.",
      },
      {
        time: "0:18",
        title: "Portion for grab-and-go",
        detail:
          "Divide into containers. Pack crackers separately and add them the morning you eat so they stay crisp. No reheating needed. Eat within 3 days for best texture.",
      },
    ],
  },
];
