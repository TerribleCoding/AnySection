function e_side() {
    let h = floatElseZero(dim.H.elt.value);
    return h / 2 / sin(PI / 3);
}

function s_width() {
    return 2 * e_side();
}

function Perimeter() {
    res['e'] = document.getElementById('e');
    res['s'] = document.getElementById('s');
    resultToText(res.e, e_side(), 2);
    resultToText(res.s, s_width(), 2);
    return 6 * e_side();
}

function Area() {
    let p = Perimeter();
    let h = floatElseZero(dim.H.elt.value);
    return p * h / 4;
}

function Inertia() {
    let e = e_side();
    return 5 * sqrt(3) / 16 * pow(e, 4);
}

function InertiaB() { }

function Resistance() {
    let h = floatElseZero(dim.H.elt.value);
    let i = Inertia();
    return 2 * i / h;
}

function ResistanceB() {
    let s = s_width();
    let i = Inertia();
    return 2 * i / s;
}