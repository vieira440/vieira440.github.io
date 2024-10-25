import { centers, inlets, outlets } from "./Sections.js";

const maxNumPanes = 8;
const minNumPanes = 2;
const valveSections = document.getElementById("valveSections");

var decreaseButton = document.getElementById("decrease");
decreaseButton.addEventListener("click", () => {
  if (panes.innerText > minNumPanes) {
    panes.innerText--;
    removeCenter(panes.innerText - 1);
  }
});

var increaseButton = document.getElementById("increase");
increaseButton.addEventListener("click", () => {
  if (panes.innerText < maxNumPanes) panes.innerText++;
  addCenter(panes.innerText);
});

const populateInlet = function () {
  let inletSection = document.createElement("section");
  inletSection.id = "inlet";
  inletSection.className = "valveSection";
  let inletSelect = document.createElement("select");
  inletSelect.id = "inletSelect";
  inletSelect.className = "dropdown";
  let inletLabel = document.createElement("label");
  inletLabel.for = "inletSelect";
  inletLabel.innerText = "Inlet:";
  let inletImg = document.createElement("img");
  inletImg.src = "images/inlet/Standard end inlet section.jpg";
  inletImg.id = "inletImg";
  inletImg.className = "valveSchematic";
  let inletInfo = document.createElement("p");
  inletInfo.id = "inletInfo";
  inletInfo.innerHTML = inlets[0].info;

  for (var x = 0; x < inlets.length; x++) {
    let inletOption = document.createElement("option");
    inletOption.innerText = inlets[x].name;
    inletOption.id = "inletOption" + (x + 1);

    inletSelect.appendChild(inletOption);
  }
  inletSection.appendChild(inletLabel);
  inletSection.appendChild(inletSelect);
  inletSection.appendChild(inletImg);
  inletSection.appendChild(inletInfo);
  valveSections.appendChild(inletSection);

  inletSelect.addEventListener("change", () => {
    inletImg.src = "images/inlet/" + inletSelect.value + ".jpg";
    inletInfo.innerHTML = inlets.find(
      (x) => x.name == inletSelect.value
    ).info;
  });
};

const populateOutlet = function () {
  var outletSection = document.createElement("section");
  outletSection.id = "outlet";
  outletSection.className = "valveSection";
  let outletSelect = document.createElement("select");
  outletSelect.id = "outletSelect";
  outletSelect.className = "dropdown";
  let outletLabel = document.createElement("label");
  outletLabel.for = "outletSelect";
  outletLabel.innerText = "Outlet:";
  let outletImg = document.createElement("img");
  outletImg.src = "images/outlet/Standard Tank Return Outlet Section.jpg";
  outletImg.id = "outletImg";
  outletImg.className = "valveSchematic";
  let outletInfo = document.createElement("p");
  outletInfo.id = "outletInfo";
  outletInfo.innerHTML = outlets[0].info;

  for (var x = 0; x < outlets.length; x++) {
    let outletOption = document.createElement("option");
    outletOption.innerText = outlets[x].name;
    outletOption.id = "outletOption" + (x + 1);

    outletSelect.appendChild(outletOption);
  }
  outletSection.appendChild(outletLabel);
  outletSection.appendChild(outletSelect);
  outletSection.appendChild(outletImg);
  outletSection.appendChild(outletInfo);
  valveSections.appendChild(outletSection);

  outletSelect.addEventListener("change", () => {
    outletImg.src = "images/outlet/" + outletSelect.value + ".jpg";
    outletInfo.innerHTML = outlets.find(
      (x) => x.name == outletSelect.value
    ).info;
  });
};

const populateValues = function () {
  const panes = document.getElementById("panes");
  panes.innerText = 2;
  populateInlet();

  var inletSelect = document.getElementById("inletSelect");
  inletSelect.addEventListener("change", () => {
    let inletImg = document.getElementById("inletImg");
    inletImg.src = "images/inlet/" + inletSelect.value + ".jpg";
  });

  populateOutlet();
};

populateValues();

const removeCenter = function (centerSections) {
  let parent = document.getElementById("valveSections");

  document.getElementById("center" + centerSections).remove();
  //centerToRemove.parentNode.removeChild(centerToRemove);
};

const addCenter = function (centerSections) {
  let centerSection = document.createElement("section");
  centerSection.id = "center" + (centerSections - 2);
  centerSection.className = "valveSection";
  let centerSelect = document.createElement("select");
  centerSelect.id = "centerSelect" + (centerSections - 2);
  centerSelect.className = "dropdown";
  let centerLabel = document.createElement("label");
  centerLabel.for = "centerSelect" + (centerSections - 2);
  centerLabel.innerText = "Center Valve " + (centerSections - 2) + ":";
  let centerImg = document.createElement("img");
  centerImg.src = "images/" + centers[0].name + ".jpg";
  centerImg.id = "inletImg";
  centerImg.className = "valveSchematic";
  let centerInfo = document.createElement("p");
  centerInfo.id = "info" + (centerSections - 2);
  centerInfo.innerHTML = centers[0].info;

  for (var x = 0; x < centers.length; x++) {
    let centerOption = document.createElement("option");
    centerOption.innerText = centers[x].name;
    centerOption.id = "centerOption" + (x - 2);

    centerSelect.appendChild(centerOption);
  }
  centerSection.appendChild(centerLabel);
  centerSection.appendChild(centerSelect);
  centerSection.appendChild(centerImg);
  centerSection.appendChild(centerInfo);

  centerSelect.addEventListener("change", () => {
    centerImg.src = "images/" + centerSelect.value + ".jpg";
    centerInfo.innerHTML = centers.find(
      (x) => x.name == centerSelect.value
    ).info;
  });
  let previous = document.getElementById("center" + (centerSections - 3));

  if (previous) {
    previous.after(centerSection);
  } else {
    previous = document.getElementById("inlet");
    previous.after(centerSection);
  }
};

const createCenter = function (elements) {
  let parent = document.getElementById("valveSections");

  while (parent.hasChildNodes()) {
    parent.removeChild(parent.lastChild);
  }

  populateInlet();

  for (var x = 0; x < elements; x++) {}

  populateOutlet();
};

function createIndividualCenter(x) {
  return centerSection;
}

// TODO: Rename pictures = SectionNames - " "
