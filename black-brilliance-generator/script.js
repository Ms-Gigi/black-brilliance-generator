const facts = [
  {
    name: "Claudette Colvin",
    fact: "At just 15, Claudette Colvin refused to give up her seat on a segregated bus in Montgomery, months before Rosa Parks."
  },
  {
    name: "Juneteenth",
    fact: "Juneteenth marks June 19, 1865, when enslaved people in Texas learned they were free — over 2 years after the Emancipation Proclamation."
  },
  {
    name: "Granville T. Woods",
    fact: "He held over 50 patents, including for improvements to the telephone and railroad systems."
  },
  {
    name: "Marsha P. Johnson",
    fact: "Marsha was a key figure in the Stonewall uprising and a champion of LGBTQ+ rights."
  }
];

function generateFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const selected = facts[randomIndex];
  document.getElementById("fact-box").innerText = `${selected.name}: ${selected.fact}`;
}