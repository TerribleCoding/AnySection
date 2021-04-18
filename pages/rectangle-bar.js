function Perimeter() {
    let b = floatElseZero(dim.B.elt.value);
    let h = floatElseZero(dim.H.elt.value);
    let r = floatElseZero(dim.R.elt.value);
    if (b * h != 0) { return 2 * (b + h - 4 * r) + TWO_PI * r; } else { return 0; }
}

function Area() {
    let b = floatElseZero(dim.B.elt.value);
    let h = floatElseZero(dim.H.elt.value);
    let r = floatElseZero(dim.R.elt.value);
    let central_sector = (b - 2 * r) * h;
    let side_sector = (h - 2 * r) * r;
    let radii_area = PI * r * r;
    return central_sector + 2 * side_sector + radii_area;
}

function Inertia() {
    let b = floatElseZero(dim.B.elt.value);
    let h = floatElseZero(dim.H.elt.value);
    // let r = floatElseZero(dim.R.elt.value);
    return b * h * h * h / 12;
}

function InertiaB() { }

function Resistance() {
    let h = floatElseZero(dim.H.elt.value);
    let I = Inertia();
    return I / h * 2;
}

function ResistanceB() { }

function switchDim() {
    let b = floatElseZero(dim.B.elt.value);
    let h = floatElseZero(dim.H.elt.value);
    dim.B.elt.value = h;
    dim.H.elt.value = b;
    updateResults();
}