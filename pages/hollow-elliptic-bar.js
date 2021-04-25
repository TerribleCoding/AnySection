function Perimeter() {
    let A = floatElseZero(dim.A.elt.value);
    let B = floatElseZero(dim.B.elt.value);
    let t = floatElseZero(dim.t.elt.value);
    let a = A / 2;
    let b = B / 2;
    let hOut = pow(a - b, 2) / pow(a + b, 2);
    let outer = PI * (a + b) * (1 + 3 * hOut / (10 + sqrt(4 - 3 * hOut)));
    let hInn = pow(a - b, 2) / pow(a + b - 2 * t, 2);
    let inner = PI * (a + b - 2 * t) * (1 + 3 * hInn / (10 + sqrt(4 - 3 * hInn)));
    return outer + inner;
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

function switchDim() {
    let A = floatElseZero(dim.A.elt.value);
    let B = floatElseZero(dim.B.elt.value);
    dim.A.elt.value = B;
    dim.B.elt.value = A;
    updateResults();
}