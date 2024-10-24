const maxNumPanes = 8;
const minNumPanes = 1;
const valveSections = document.getElementById("valveSections");

var decreaseButton = document.getElementById("decrease");
decreaseButton.addEventListener("click", () => {
  if (panes.innerText > minNumPanes) {
    panes.innerText--;
    if (panes.innerText > 2){        
    createCenter(panes.innerText -2 );
    }
  }
});

var increaseButton = document.getElementById("increase");
increaseButton.addEventListener("click", () => {
  if (panes.innerText < maxNumPanes) panes.innerText++;
  if (panes.innerText > 2){        
    createCenter(panes.innerText -2 );
    }
});


const inletNames = [
  "Standard end inlet section",
  "Pump unloading end inlet",
  "Regenerative End Inlet",
];
const centerNames = [
  "A20 & A35 Double Acting Cylinder Series",
  "A20 & A35 Double Acting Motor Control",
  "D-Line Double Acting Cylinder Control",
  "D-Line Double Acting Motor Control",
  "Double Acting Cylinder Control Parallel Series",
  "Double Acting Cylinder Control Tandem Only",
  "Double Acting Cylinder Control With Internal Make-Up",
  "Double Acting Cylinder Control",
  "Double Acting Cylinder Float Section Parallel Only",
  "Double Acting Cylinder Float Section Tandem Only",
  "Double Acting Cylinder Float Section",
  "Double Acting Cylinder Parallel Regenerative",
  "Double Acting Motor Control Tandem Only",
  "Double Acting Motor Control With Internal Make-Up",
  "Double Acting Motor Control",
  "Midsection Flow Control Pressure Compensated",
  "Midsection Inlet combined flow",
  "Midsection Inlet split flow with pressure beyond port",
  "Midsection Inlet split flow",
  "Midsection Selector Inlet",
  "Single Acting Cylinder Control",
  "Regenerative Midsection Inlet",
  "Pump Unloading Midsection Inlet",
];
const outletNames = [
  "Standard Tank Return Outlet Section",
  "Pressure Beyond Outlet Section",
  "Pressure Compensator Outlet Section",
  "Regenerative Outlet Section",
  "Flow Divider Outlet Section",
];

const populateOutlet = function () {
    var outletSection = document.createElement("section");
    outletSection.id = "outlet";
    outletSection.className = "valveSection"
    let outletSelect = document.createElement("select");
    outletSelect.id = "outletSelect";
    outletSelect.className = "dropdown";
    let outletLabel = document.createElement("label");
    outletLabel.for = "outletSelect";
    outletLabel.innerText = "Outlet:";
    let outletImg = document.createElement("img");
    outletImg.src = "images/outlet/Standard Tank Return Outlet Section.jpg"
    outletImg.id = "outletImg"
    outletImg.className = "valveSchematic"
  
    for (var x = 0; x < outletNames.length; x++) {
      let outletOption = document.createElement("option");
      outletOption.innerText = outletNames[x];
      outletOption.id = "outletOption" + (x + 1);
  
      outletSelect.appendChild(outletOption);
    }
    outletSection.appendChild(outletLabel);
    outletSection.appendChild(outletSelect);
    outletSection.appendChild(outletImg);
    valveSections.appendChild(outletSection);
  
    outletSelect.addEventListener("change", () => {
      let outletImg = document.getElementById("outletImg");
      outletImg.src = "images/outlet/" + outletSelect.value + ".jpg";
    });
  };

const populateInlet = function () {
  let inletSection = document.createElement("section");
  inletSection.id = "inlet";
  inletSection.className = "valveSection"
  let inletSelect = document.createElement("select");
  inletSelect.id = "inletSelect";
  inletSelect.className = "dropdown";
  let inletLabel = document.createElement("label");
  inletLabel.for = "inletSelect";
  inletLabel.innerText = "Inlet:";
  let inletImg = document.createElement("img");
  inletImg.src = "images/inlet/Standard end inlet section.jpg"
  inletImg.id = "inletImg"
  inletImg.className = "valveSchematic"

  for (var x = 0; x < inletNames.length; x++) {
    let inletOption = document.createElement("option");
    inletOption.innerText = inletNames[x];
    inletOption.id = "inletOption" + (x + 1);

    inletSelect.appendChild(inletOption);
  }
  inletSection.appendChild(inletLabel);
  inletSection.appendChild(inletSelect);
  inletSection.appendChild(inletImg);
  valveSections.appendChild(inletSection);

  inletSelect.addEventListener("change", () => {
    let inletImg = document.getElementById("inletImg");
    inletImg.src = "images/inlet/" + inletSelect.value + ".jpg";
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

const createCenter = function (elements) {
  let parent = document.getElementById("valveSections");

  while (parent.hasChildNodes()) {
    parent.removeChild(parent.lastChild);
  }

  populateInlet();

  for (var x = 0; x < elements; x++) {
    createIndividualCenter(x);
  }

  populateOutlet();
};

const createIndividualCenter = function (x) {
  let centerSection = document.createElement("section");
  centerSection.id = "center" + (x + 1);
  centerSection.className = "valveSection";
  let centerSelect = document.createElement("select");
  centerSelect.id = "centerSelect" + (x + 1);
  centerSelect.className = "dropdown";  
  let centerLabel = document.createElement("label");
  centerLabel.for = "centerSelect" + (x + 1);
  centerLabel.innerText = "Center Valve " + ( x + 1 ) + ":";
  let centerImg = document.createElement("img");
  centerImg.src = "images/inlet/Standard end inlet section.jpg"
  centerImg.id = "inletImg"
  centerImg.className = "valveSchematic"


  for (var x = 0; x < centerNames.length; x++) {
    let centerOption = document.createElement("option");
    centerOption.innerText = centerNames[x];
    centerOption.id = "centerOption" + (x + 1);

    centerSelect.appendChild(centerOption);
  }
  centerSection.appendChild(centerLabel);
  centerSection.appendChild(centerSelect);
  centerSection.appendChild(centerImg);
  valveSections.appendChild(centerSection);

  centerSelect.addEventListener("change", () => {
    centerImg.src = "images/" + centerSelect.value + ".jpg";
  });
};

// TODO: Rename pictures = SectionNames - " "
