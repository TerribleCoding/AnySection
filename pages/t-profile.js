function Perimeter() {
    let B = floatElseZero(dim.B.elt.value);
    let H = floatElseZero(dim.H.elt.value);
    return 2 * (B + H);
}

function Area() {
    let B = floatElseZero(dim.B.elt.value);
    let H = floatElseZero(dim.H.elt.value);
    let t = floatElseZero(dim.t.elt.value);
    let h = floatElseZero(dim.h.elt.value);
    return B * (H - h) + t * h;
}

function _v1() {
    let B = floatElseZero(dim.B.elt.value);
    let H = floatElseZero(dim.H.elt.value);
    let t = floatElseZero(dim.t.elt.value);
    let h = floatElseZero(dim.h.elt.value);
    let num = t * H * H + (B - t) * pow(H - h, 2);
    let den = t * H + (B - t) * (H - h);
    return num / den / 2;
}

function Inertia() {
    let B = floatElseZero(dim.B.elt.value);
    let H = floatElseZero(dim.H.elt.value);
    let t = floatElseZero(dim.t.elt.value);
    let h = floatElseZero(dim.h.elt.value);
    let v = _v1();
    let term1 = B * pow(v, 3);
    let term2 = (B - t) * pow(v - H + h, 3);
    let term3 = t * pow(H - v, 3);
    return (term1 - term2 + term3) / 3;
}

function InertiaB() {
    let B = floatElseZero(dim.B.elt.value);
    let H = floatElseZero(dim.H.elt.value);
    let t = floatElseZero(dim.t.elt.value);
    let h = floatElseZero(dim.h.elt.value);
    return ((H - h) * pow(B, 3) + h * pow(t, 3)) / 12;
}

function Resistance() {
    let I = Inertia();
    let H = floatElseZero(dim.H.elt.value);
    return I / (H - _v1());
}

function ResistanceB() {
    let I = InertiaB();
    let B = floatElseZero(dim.B.elt.value);
    return 2 * I / B;
}