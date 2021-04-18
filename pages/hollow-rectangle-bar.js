function Perimeter() {
    let b = floatElseZero(dim.B.elt.value);
    let h = floatElseZero(dim.H.elt.value);
    let r = floatElseZero(dim.R.elt.value);
    let t = floatElseZero(dim.t.elt.value);
    let r_int = max(0, r - t); //internal radius
    let p_ext = 2 * (b + h - 4 * r) + TWO_PI * r; //external perimeter
    let p_int = 2 * (b + h - 4 * t - 4 * r_int) + TWO_PI * r_int; // internal perimeter
    if (b * h * t != 0) { return p_ext + p_int; } else { return 0; }
}

function Area() {
    let b = floatElseZero(dim.B.elt.value);
    let h = floatElseZero(dim.H.elt.value);
    let r = floatElseZero(dim.R.elt.value);
    let t = floatElseZero(dim.t.elt.value);
    let r_int = max(0, r - t); //internal radius
    let outer = b * (h - 2 * r) + 2 * r * (b - 2 * r) + PI * r * r;
    let inner = (h - 2 * t - 2 * r_int) * (b - 2 * t) + 2 * r_int * (b - 2 * t - 2 * r_int) + PI * r_int * r_int;
    if (b * h * t != 0) { return outer - inner; } else { return 0; }
}

function Inertia() {
    let b = floatElseZero(dim.B.elt.value);
    let h = floatElseZero(dim.H.elt.value);
    let t = floatElseZero(dim.t.elt.value);
    // let r = floatElseZero(dim.R.elt.value);
    // let r_int = max(0, r - t); //internal radius
    let outer = b * pow(h, 3);
    let inner = (b - 2 * t) * pow(h - 2 * t, 3);
    return (outer - inner) / 12;
}

function InertiaB() { }

function Resistance() {
    let b = floatElseZero(dim.B.elt.value);
    let h = floatElseZero(dim.H.elt.value);
    let t = floatElseZero(dim.t.elt.value);
    // let r = floatElseZero(dim.R.elt.value);
    // let r_int = max(0, r - t); //internal radius
    let outer = b * pow(h, 3);
    let inner = (b - 2 * t) * pow(h - 2 * t, 3);
    return (outer - inner) / (6 * h);
}

function ResistanceB() { }

function switchDim() {
    let b = floatElseZero(dim.B.elt.value);
    let h = floatElseZero(dim.H.elt.value);
    dim.B.elt.value = h;
    dim.H.elt.value = b;
    updateResults();
}