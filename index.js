const container = document.getElementById("container");
const cardName = [
  {
    id: 1,
    atomicNumber: 1,
    weight: 1.009,
    shortName: "H",
    name: "Hydrogen",
  },
  {
    id: 2,
    atomicNumber: 2,
    weight: 4.0026,
    shortName: "He",
    name: "Helium",
  },
  {
    id: 3,
    atomicNumber: 3,
    weight: 6.94,
    shortName: "Li",
    name: "Lithium",
  },
  {
    id: 4,
    atomicNumber: 4,
    weight: 9.0122,
    shortName: "Be",
    name: "Beryllium",
  },
  {
    id: 5,
    atomicNumber: 5,
    weight: 10.81,
    shortName: "B",
    name: "Boron",
  },
  {
    atomicNumber: 6,
    weight: 12.011,
    shortName: "C",
    name: "Carbon",
  },
  {
    atomicNumber: 7,
    shortName: "N",
    name: "Nitrogen",
    weight: 14.007,
  },
  {
    atomicNumber: 8,
    shortName: "O",
    weight: 15.999,
    name: "Oxygen",
  },
  {
    atomicNumber: 9,
    shortName: "F",
    name: "Fluorine",
    weight: 18.998,
  },
  {
    atomicNumber: 10,
    shortName: "Ne",
    name: "Neon",
    weight: 20.18,
  },
  {
    atomicNumber: 11,
    shortName: "Na",
    name: "Sodium",
    weight: 22.99,
  },
  {
    atomicNumber: 12,
    shortName: "Mg",
    name: "Magnesium",
    weight: 24.305,
  },
  {
    atomicNumber: 13,
    shortName: "Al",
    name: "Aluminium",
    weight: 26.8871,
  },
  {
    atomicNumber: 14,
    shortName: "Si",
    name: "Silicon",
    weight: 28.085,
  },
  {
    atomicNumber: 15,
    shortName: "P",
    name: "Phosphorus",
    weight: 30.974,
  },
  {
    atomicNumber: 16,
    shortName: "S",
    name: "Sulfun",
    weight: 32.06,
  },
  {
    atomicNumber: 17,
    shortName: "Cl",
    name: "Chlorine",
    weight: 35.45,
  },
  {
    atomicNumber: 18,
    shortName: "Ar",
    name: "Argon",
    weight: "39.948",
  },
  {
    atomicNumber: 19,
    shortName: "K",
    name: "Potassium",
    weight: 39.098,
  },
  {
    atomicNumber: 20,
    shortName: "Ca",
    name: "Calcium",
    weight: 40.078,
  },
  {
    atomicNumber: 21,
    shortName: "Sc",
    name: "Scandium",
    weight: 44.956,
  },
  {
    atomicNumber: 22,
    shortName: "Ti",
    name: "Titanium",
    weight: 47.867,
  },
  {
    atomicNumber: 23,
    shortName: "V",
    name: "Vanadium",
    weight: 50.942,
  },
  {
    atomicNumber: 24,
    shortName: "Cr",
    name: "Chronium",
    weight: 51.996,
  },
  {
    atomicNumber: 25,
    shortName: "Mn",
    name: "Manganese",
    weight: 54.938,
  },

  {
    atomicNumber: 26,
    shortName: "Fe",
    name: "Iron",
    weight: 55.845,
  },
  {
    atomicNumber: 27,
    shortName: "Co",
    name: "Cobalt",
    weight: 58.933,
  },
  {
    atomicNumber: 28,
    shortName: "Ni",
    name: "Nickel",
    weight: 58.693,
  },

  {
    atomicNumber: 29,
    shortName: "Cu",
    name: "Copper",
    weight: 63.546,
  },
  {
    atomicNumber: 30,
    shortName: "Zn",
    name: "Zinc",
    weight: 65.38,
  },
  {
    atomicNumber: 31,
    shortName: "Ga",
    name: "Gallium",
    weight: 69.723,
  },
  {
    atomicNumber: 32,
    shortName: "Ge",
    name: "Germanium",
    weight: 72.63,
  },
  ,
  {
    atomicNumber: 33,
    shortName: "As",
    name: "Arsenic",
    weight: 74.922,
  },
  ,
  {
    atomicNumber: 34,
    shortName: "Se",
    name: "Selenium",
    weight: 78.971,
  },
  ,
  {
    atomicNumber: 35,
    shortName: "Br",
    name: "Bromine",
    weight: 79.904,
  },
  ,
  {
    atomicNumber: 36,
    shortName: "Kr",
    name: "Krypton",
    weight: 83.798,
  },
  ,
  {
    atomicNumber: 37,
    shortName: "Rb",
    name: "Rubidium",
    weight: 85.468,
  },
  ,
  {
    atomicNumber: 38,
    shortName: "Sr",
    name: "Strontium",
    weight: 87.62,
  },
  ,
  {
    atomicNumber: 39,
    shortName: "Y",
    name: "Yttrium",
    weight: 88.906,
  },
  ,
  {
    atomicNumber: 40,
    shortName: "Zn",
    name: "Zirconium",
    weight: 91.224,
  },
  ,
  {
    atomicNumber: 41,
    shortName: "Nb",
    name: "Niobium",
    weight: 92.95,
  },
  ,
  {
    atomicNumber: 42,
    shortName: "Mo",
    name: "Molybdenum",
    weight: 95.95,
  },
  ,
  {
    atomicNumber: 43,
    shortName: "Tc",
    name: "Technetium",
    weight: "(98)",
  },
  ,
  {
    atomicNumber: 44,
    shortName: "Ru",
    name: "Ruthenium",
    weight: 101.07,
  },
  ,
  {
    atomicNumber: 45,
    shortName: "Pd",
    name: "Palladium",
    weight: 106.42,
  },
  ,
  {
    atomicNumber: 46,
    shortName: "Ag",
    name: "Silver",
    weight: 107.87,
  },
  ,
  {
    atomicNumber: 47,
    shortName: "Cd",
    name: "Cadmium",
    weight: 112.41,
  },
  ,
  {
    atomicNumber: 49,
    shortName: "In",
    name: "Indium",
    weight: 114.82,
  },
  ,
  {
    atomicNumber: 50,
    shortName: "Sn",
    name: "Tin",
    weight: 118.71,
  },
];

function returnCard(cardName) {
  return (
    cardName
      .map(
        (cardName) => `
  <div class="card">
    <h2 class="atomic--number">${cardName.atomicNumber}</h2>
    <p class="weight">${cardName.weight}</p>
    <p class="shortcut" id="cut">${cardName.shortName}</p>
    <p class="name">${cardName.name}</p>
  </div>`
      )
      .join("") + "</div>"
  );
}
// console.log(html);
// document.getElementById("container").innerHTML = returnCard(cardName);

/*
html = `
    <div class="card">
    <h2 class="atomic--number"></h2>
    <p class="weight"></p>
    <p class="shortcut" id="cut"></p>
    <p class="name"></p>
    </div>
    `;
console.log(html);
*/
