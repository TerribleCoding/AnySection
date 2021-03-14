function Perimeter() {
    let d = dim.D.elt.value;
    let t = dim.t.elt.value;
    return d * PI + (d - 2 * t) * PI;
}

function Area() {
    let d = dim.D.elt.value;
    let t = dim.t.elt.value;
    let r = d / 2;
    // return PI * (r * r - pow(r - t, 2)); //FULL FORMULA
    return PI * t * (d - t); //SIMPLIFIED FORMULA
}

function Inertia() {
    let d = dim.D.elt.value;
    let t = dim.t.elt.value;
    return (pow(d, 4) - pow(d - 2 * t, 4)) * PI / 64;
}

function InertiaB() {}

function Resistance() {
    let d = dim.D.elt.value;
    let I = Inertia();
    return I / d * 2;
}

function ResistanceB() {}