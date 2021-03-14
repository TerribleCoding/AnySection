function Perimeter() {
    let A = floatElseZero(dim.A.elt.value);
    let B = floatElseZero(dim.B.elt.value);
    let t = floatElseZero(dim.t.elt.value);
    let outerSqrt = sqrt((pow(A, 2) + pow(B, 2)) / 8);
    let innerSqrt = sqrt((pow(A - 2 * t, 2) + pow(B - 2 * t, 2)) / 8);
    return 2 * PI * (outerSqrt + innerSqrt);
}

function Area() {
    let A = floatElseZero(dim.A.elt.value);
    let B = floatElseZero(dim.B.elt.value);
    let t = floatElseZero(dim.t.elt.value);
    return PI / 4 * (A * B - (A - 2 * t) * (B - 2 * t));
}

function Inertia() {
    let A = floatElseZero(dim.A.elt.value);
    let B = floatElseZero(dim.B.elt.value);
    let t = floatElseZero(dim.t.elt.value);
    return PI / 64 * (A * pow(B, 3) - (A - 2 * t) * pow(B - 2 * t, 3));
}

function InertiaB() { }

function Resistance() {
    let I = Inertia();
    let B = floatElseZero(dim.B.elt.value);
    return 2 * I / B;
}

function ResistanceB() { }