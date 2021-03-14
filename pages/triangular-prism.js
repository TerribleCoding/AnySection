function Perimeter() {
    let b = floatElseZero(dim.B.elt.value);
    let h = floatElseZero(dim.H.elt.value);
    let side = b * b / 4 + h * h;
    side = sqrt(side);
    return b + 2 * side;
}

function Area() {
    let b = floatElseZero(dim.B.elt.value);
    let h = floatElseZero(dim.H.elt.value);
    return b * h / 2;
}

function Inertia() {
    let b = floatElseZero(dim.B.elt.value);
    let h = floatElseZero(dim.H.elt.value);
    return b * h * h * h / 36;
}

function InertiaB() { }

function Resistance() {
    let b = floatElseZero(dim.B.elt.value);
    let h = floatElseZero(dim.H.elt.value);
    return b * h * h / 24;
}

function ResistanceB() { }