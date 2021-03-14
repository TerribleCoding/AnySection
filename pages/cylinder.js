function Perimeter() {
    let d = dim.D.elt.value;
    return d * PI;
}

function Area() {
    let d = dim.D.elt.value;
    return pow(d / 2, 2) * PI;
}

function Inertia() {
    let d = dim.D.elt.value;
    return pow(d, 4) * PI / 64;
}

function InertiaB() { }

function Resistance() {
    let d = dim.D.elt.value;
    let I = Inertia();
    return I / d * 2;
}

function ResistanceB() { }