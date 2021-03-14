function e_side() {
    let h = floatElseZero(dim.H.elt.value);
    return h * sqrt(2) - h;
}

function Perimeter() {
    res['e'] = document.getElementById('e');
    resultToText(res.e, e_side(), 2);
    return 8 * e_side();
}

function Area() {
    let h = floatElseZero(dim.H.elt.value);
    return 2 * (sqrt(2) - 1) * h * h;
}

function Inertia() {
    let h = floatElseZero(dim.H.elt.value);
    return (sqrt(2) - 1) / 6 * pow(h, 4);
}

function InertiaB() { }

function Resistance() {
    let h = floatElseZero(dim.H.elt.value);
    let i = Inertia();
    return 2 * i / h;
}

function ResistanceB() { }