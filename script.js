let facts = [];

// Load facts once on page load
fetch('facts.json')
  .then(response => response.json())
  .then(data => {
    facts = data;
    generateFact(); // show a fact right away
  });

// Generate a random fact based on selected category
function generateFact() {
  const selectedCategory = document.getElementById("category-select").value;

  const filteredFacts = selectedCategory === "All"
    ? facts
    : facts.filter(f => f.category === selectedCategory);

  if (filteredFacts.length === 0) return;

  const index = Math.floor(Math.random() * filteredFacts.length);
  const f = filteredFacts[index];

  const factBox = document.getElementById("fact-box");
  factBox.innerHTML = `
    ${f.image ? `<img src="${f.image}" alt="${f.name}" class="fact-image">` : ""}
    <p><strong>${f.name}:</strong> ${f.fact}</p>
  `;
}

// Show fact generator section
function showGenerator() {
  document.getElementById("fact-generator").style.display = "flex";
  document.getElementById("fact-list").style.display = "none";
}

// Show accordion-style list of all facts
function showFactList() {
  document.getElementById("fact-generator").style.display = "none";
  document.getElementById("fact-list").style.display = "block";
  loadAccordionFacts();
}

// Load accordion only once
function loadAccordionFacts() {
  const container = document.getElementById("accordion-container");
  if (container.innerHTML.trim() !== "") return;

  const grouped = {};

  facts.forEach(fact => {
    if (!grouped[fact.category]) {
      grouped[fact.category] = [];
    }
    grouped[fact.category].push(fact);
  });

  for (const category in grouped) {
    const factsArray = grouped[category];

    const section = document.createElement('div');
    section.className = 'accordion-section';

    const button = document.createElement('button');
    button.className = 'accordion-button';
    button.textContent = category;
    button.onclick = () => {
      const panel = section.querySelector('.accordion-content');
      panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    };

    const content = document.createElement('div');
    content.className = 'accordion-content';

    factsArray.forEach(f => {
      const p = document.createElement('p');
      p.innerHTML = `<span class="fact-name">${f.name}:</span> ${f.fact}`;
      content.appendChild(p);
    });

    section.appendChild(button);
    section.appendChild(content);
    container.appendChild(section);
  }
}
