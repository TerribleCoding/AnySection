function Perimeter() {
    let b = floatElseZero(dim.B.elt.value);
    let bmin = floatElseZero(dim.b.elt.value);
    let h = floatElseZero(dim.H.elt.value);
    let side = pow((b - bmin) / 2, 2) + h * h;
    side = sqrt(side);
    if (b * bmin * h != 0) { return b + bmin + 2 * side; } else { return 0; };
}

function Area() {
    let b = floatElseZero(dim.B.elt.value);
    let bmin = floatElseZero(dim.b.elt.value);
    let h = floatElseZero(dim.H.elt.value);
    if (b * bmin * h != 0) { return (b + bmin) * h / 2; } else { return 0; };
}

function Inertia() {
    let b = floatElseZero(dim.B.elt.value);
    let bmin = floatElseZero(dim.b.elt.value);
    let h = floatElseZero(dim.H.elt.value);
    let polynomial = pow(bmin, 3) + 4 * b * bmin + b * b;
    if (b * bmin * h != 0) { return pow(h, 3) * polynomial / 36 / (b + bmin); } else { return 0; };
}

function InertiaB() { }

function Resistance() {
    let b = floatElseZero(dim.B.elt.value);
    let bmin = floatElseZero(dim.b.elt.value);
    let h = floatElseZero(dim.H.elt.value);
    let polynomial = pow(bmin, 2) + 4 * b * bmin + b * b;
    if (b * bmin * h != 0) { return pow(h, 2) * polynomial / 12 / (b + 2 * bmin); } else { return 0; };
}

function ResistanceB() { }