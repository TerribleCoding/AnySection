function Perimeter() {
    let B = floatElseZero(dim.B.elt.value);
    let H = floatElseZero(dim.H.elt.value);
    let b = floatElseZero(dim.b.elt.value);
    return 2 * (B + H + b);
}

function Area() {
    let B = floatElseZero(dim.B.elt.value);
    let H = floatElseZero(dim.H.elt.value);
    let b = floatElseZero(dim.b.elt.value);
    let h = floatElseZero(dim.h.elt.value);
    return B * H - b * h;
}

function Inertia() {
    let B = floatElseZero(dim.B.elt.value);
    let H = floatElseZero(dim.H.elt.value);
    let b = floatElseZero(dim.b.elt.value);
    let h = floatElseZero(dim.h.elt.value);
    return (B * pow(H, 3) - b * pow(h, 3)) / 12;
}

function _v1() {
    let B = floatElseZero(dim.B.elt.value);
    let H = floatElseZero(dim.H.elt.value);
    let b = floatElseZero(dim.b.elt.value);
    let h = floatElseZero(dim.h.elt.value);
    let num = (H - h) * B * B + h * pow(B - b, 2);
    let den = (H - h) * B + h * (B - b);
    return num / den / 2;
}

function InertiaB() {
    let B = floatElseZero(dim.B.elt.value);
    let H = floatElseZero(dim.H.elt.value);
    let b = floatElseZero(dim.b.elt.value);
    let h = floatElseZero(dim.h.elt.value);
    let v = _v1();
    let term1 = H * pow(v, 3);
    let term2 = h * pow(v - B + b, 3);
    let term3 = (H - h) * pow(B - v, 3);
    return (term1 - term2 + term3) / 3;
}

function Resistance() {
    let I = Inertia();
    let H = floatElseZero(dim.H.elt.value);
    return 2 * I / H;
}

function ResistanceB() {
    let I = InertiaB();
    let B = floatElseZero(dim.B.elt.value);
    return I / (B - _v1());
}