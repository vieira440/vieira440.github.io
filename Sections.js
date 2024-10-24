class Outlet {
    Outlets
}

class Inlet {
    Inlets 
}

class WorkingSection {
    WorkingSections
}


class Section {
    constructor(name, picture, info) {
        this._name = name;
        this._picture = picture;
        this._info = info;
    }
}

export { Outlet, Inlet, WorkingSection, Section }