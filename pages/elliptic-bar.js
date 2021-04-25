function Perimeter() {
    let A = floatElseZero(dim.A.elt.value);
    let B = floatElseZero(dim.B.elt.value);
    let a = A / 2;
    let b = B / 2;
    let h = pow(a - b, 2) / pow(a + b, 2);
    let factor = 1 + 3 * h / (10 + sqrt(4 - 3 * h));
    return PI * (a + b) * factor;
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

function switchDim() {
    let A = floatElseZero(dim.A.elt.value);
    let B = floatElseZero(dim.B.elt.value);
    dim.A.elt.value = B;
    dim.B.elt.value = A;
    updateResults();
}