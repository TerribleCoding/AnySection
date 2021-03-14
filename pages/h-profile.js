function Perimeter() {
    let B = floatElseZero(dim.B.elt.value);
    let H = floatElseZero(dim.H.elt.value);
    let t = floatElseZero(dim.t.elt.value);
    return 2 * (2 * B + H - t);
}

function Area() {
    let B = floatElseZero(dim.B.elt.value);
    let H = floatElseZero(dim.H.elt.value);
    let t = floatElseZero(dim.t.elt.value);
    let h = floatElseZero(dim.h.elt.value);
    return B * (H - h) + h * t;
}

function Inertia() {
    let B = floatElseZero(dim.B.elt.value);
    let H = floatElseZero(dim.H.elt.value);
    let t = floatElseZero(dim.t.elt.value);
    let h = floatElseZero(dim.h.elt.value);
    return (B * pow(H, 3) - (B - t) * pow(h, 3)) / 12;
}

function InertiaB() {
    let B = floatElseZero(dim.B.elt.value);
    let H = floatElseZero(dim.H.elt.value);
    let t = floatElseZero(dim.t.elt.value);
    let h = floatElseZero(dim.h.elt.value);
    return ((H - h) * pow(B, 3) - h * pow(t, 3)) / 12;
}

function Resistance() {
    let I = Inertia();
    let H = floatElseZero(dim.H.elt.value);
    return 2 * I / H;
}

function ResistanceB() {
    let I = InertiaB();
    let B = floatElseZero(dim.B.elt.value);
    return 2 * I / B;
}