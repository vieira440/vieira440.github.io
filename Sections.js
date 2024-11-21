class ValveSection {
    constructor(name, info, V10, V20) {
        this._name = name;
        this._info = info
        this._V10 = V10;
        this._V20 = V20
    }
}

export const inlets = [];
inlets.push({ name: "Standard end inlet section", info: "Stuff about Standard v10 inlets", V10: "Stuff about Standard v10 inlets", V20: "Stuff about Standard v20 inlets", VA35: "VA35", VG35: "VG35" });
inlets.push({ name: "Pump unloading end inlet", info: "Stuff about Pump inlets", V10: "Stuff about Pump v10 inlets", V20: "Stuff about Pump v20 inlets", VA35: "VA35", VG35: "VG35"  });
inlets.push({ name: "Regenerative End Inlet", info: "Stuff about Regenerative inlets", V10: "Stuff about Regenerative v10 inlets", V20: "Stuff about Regenerative v20 inlets", VA35: "VA35", VG35: "VG35"  });

export const centers = [];
centers.push({ name: "A20 & A35 Double Acting Cylinder Series", info: "Stuff about A20 middles" });
centers.push({ name: "A20 & A35 Double Acting Motor Control", info: "Stuff about A20 middles" });
centers.push({ name: "D-Line Double Acting Cylinder Control", info: "Stuff about D-Line middles" });
centers.push({ name: "D-Line Double Acting Motor Control", info: "Stuff about D-Line middles" });
centers.push({ name: "Double Acting Cylinder Control Parallel Series", info: "Stuff about middles" });
centers.push({ name: "Double Acting Cylinder Control Tandem Only", info: "Stuff about middles" });
centers.push({ name: "Double Acting Cylinder Control With Internal Make-Up", info: "Stuff about middles" });
centers.push({ name: "Double Acting Cylinder Control", info: "Stuff about middles" });
centers.push({ name: "Double Acting Cylinder Float Section Parallel Only", info: "Stuff about middles" });
centers.push({ name: "Double Acting Cylinder Float Section Tandem Only", info: "Stuff about middles" });
centers.push({ name: "Double Acting Cylinder Float Section", info: "Stuff about middles" });
centers.push({ name: "Double Acting Cylinder Parallel Regenerative", info: "Stuff about middles" });
centers.push({ name: "Double Acting Motor Control Tandem Only", info: "Stuff about middles" });
centers.push({ name: "Double Acting Motor Control With Internal Make-Up", info: "Stuff about middles" });
centers.push({ name: "Double Acting Motor Control", info: "Stuff about middles" });
centers.push({ name: "Midsection Flow Control Pressure Compensated", info: "Stuff about middles" });
centers.push({ name: "Midsection Inlet combined flow", info: "Stuff about middles" });
centers.push({ name: "Midsection Inlet split flow with pressure beyond port", info: "Stuff about middles" });
centers.push({ name: "Midsection Inlet split flow", info: "Stuff about middles" });
centers.push({ name: "Midsection Selector Inlet", info: "Stuff about middles" });
centers.push({ name: "Single Acting Cylinder Control", info: "Stuff about middles" });
centers.push({ name: "Regenerative Midsection Inlet", info: "Stuff about middles" });
centers.push({ name: "Pump Unloading Midsection Inlet", info: "Stuff about middles" });

export const outlets = [];
outlets.push({ name: "Standard Tank Return Outlet Section", info: "Stuff about Standard outlets" });
outlets.push({ name: "Pressure Beyond Outlet Section", info: "Stuff about Pressure outlets" });
outlets.push({ name: "Pressure Compensator Outlet Section", info: "Stuff about Pressure outlets" });
outlets.push({ name: "Regenerative Outlet Section", info: "Stuff about Regenerative outlets" });
outlets.push({ name: "Flow Divider Outlet Section", info: "Stuff about Flow Divider outlets" });

const inletNames = [
    "Standard end inlet section",
    "Pump unloading end inlet",
    "Regenerative End Inlet",
  ];

  const outletNames = [
    "Standard Tank Return Outlet Section",
    "Pressure Beyond Outlet Section",
    "Pressure Compensator Outlet Section",
    "Regenerative Outlet Section",
    "Flow Divider Outlet Section",
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
