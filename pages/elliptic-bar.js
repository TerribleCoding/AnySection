function Perimeter() {
    let A = floatElseZero(dim.A.elt.value);
    let B = floatElseZero(dim.B.elt.value);
    return 2 * PI * sqrt((A * A + B * B) / 8);
}

function Area() {
    let A = floatElseZero(dim.A.elt.value);
    let B = floatElseZero(dim.B.elt.value);
    return PI * A * B / 4;
}

function Inertia() {
    let A = floatElseZero(dim.A.elt.value);
    let B = floatElseZero(dim.B.elt.value);
    return PI * A * pow(B, 3) / 64;
}

function InertiaB() { }

function Resistance() {
    let A = floatElseZero(dim.A.elt.value);
    let B = floatElseZero(dim.B.elt.value);
    return PI * A * pow(B, 2) / 32;
}

function ResistanceB() { }