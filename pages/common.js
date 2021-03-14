var profiles;
var materials;

var combo, selector;
var imageSpace;
var pageName;

// dimensions = list of all dimensions called in all pages, update while coding pages
var dimensions = ['L', 'D', 't', 'B', 'b', 'H', 'R', 'A', 'h'];
var dim = {};
var matProp = ['density', 'brake', 'yeld'];
var mat = {};
var res = {};

function preload() {
    profiles = loadTable("../assets/db/profiles.csv", "csv", "header");
    materials = loadTable("../assets/db/materials.csv", "csv", "header");

    pageName = location.pathname.split("/").slice(-1)[0].split(".")[0];
    combo = document.getElementById('combo');
    selector = createSelect();
    selector.parent(combo);
    imageSpace = document.getElementById('image');

    for (let e of dimensions) {
        let par = document.getElementById(e);
        if (par != null) {
            let inp = createInput();
            inp.attribute('type', 'number');
            inp.parent(par);
            inp.changed(updateResults);
            dim[e] = inp;
        }
    }
    for (let e of matProp) {
        let par = document.getElementById(e);
        if (par != null) {
            let inp = createInput();
            inp.attribute('type', 'number');
            inp.parent(par);
            inp.changed(updateResults);
            mat[e] = inp;
        }
    }

    res = {
        perimeter: document.getElementById('perimeter'),
        area: document.getElementById('area'),
        volume: document.getElementById('volume'),
        surface: document.getElementById('surface'),
        mass: document.getElementById('mass'),
        I: document.getElementById('inertia'),
        Ib: document.getElementById('inertiaB'),
        W: document.getElementById('resistance'),
        Wb: document.getElementById('resistanceB'),
        F: document.getElementById('traction')
    }
    // for (let p in res) {
    //     if (res[p] == null) {
    //         delete res[p];
    //     }
    // }
}

function setup() {
    noCanvas();

    // finding in which profiles table row is the page we're looking
    var tableIndex;
    for (let i = 0; i < profiles.rows.length; i++) {
        var target = profiles.rows[i].obj["MediaName"].toLowerCase().replace(/\s+/g, "-");
        if (pageName == target) {
            tableIndex = i;
            break;
        }
    }
    // place image
    var path = "../assets/img/" + profiles.rows[tableIndex].obj["MediaName"] + ".png";
    var drawing = createImg(path, '');
    drawing.parent(imageSpace);
    drawing.addClass('drawing');

    // adding materials in combo box
    for (let elt of materials.rows) {
        selector.option(elt.obj["name"]);
    }

    // set values when selecting a material
    selector.changed(updateMatProp);
}

function updateMatProp() {
    // search for corresponding row in table
    var index;
    for (let i = 0; i < materials.rows.length; i++) {
        if (materials.rows[i].obj["name"] == selector.value()) {
            index = i;
            break;
        }
    }

    // set parameters value
    mat.density.elt.value = materials.rows[index].obj["density"];
    mat.brake.elt.value = materials.rows[index].obj["brakeTension"];
    mat.yeld.elt.value = materials.rows[index].obj["yieldTension"];

    updateResults();
}

function updateResults() {
    resultToText(res.perimeter, Perimeter(), 2);
    resultToText(res.area, Area(), 2);
    resultToText(res.volume, Volume(), 3);
    resultToText(res.surface, Surface(), 2);
    resultToText(res.mass, Mass(), 3);
    resultToText(res.I, Inertia());
    resultToText(res.Ib, InertiaB());
    resultToText(res.W, Resistance());
    resultToText(res.Wb, ResistanceB());
    resultToText(res.F, Traction());
}

function resultToText(field, value, decimals = 0) {
    if (field != null) {
        let invalid = Number.isNaN(value);
        if (value != 0 && !invalid) {
            field.innerHTML = round(value, decimals);
        } else {
            field.innerHTML = "";
        }
    }
}

function floatElseZero(string) {
    // Returns a floating point value from the input string
    // If the result of floating is NaN it returns 0
    n = float(string);
    if (Number.isNaN(n)) {
        return 0;
    } else {
        return n;
    }
}



// COMMON EQUATIONS

function Volume() {
    let l = dim.L.elt.value;
    let a = Area();
    return a * l / 1000;
}

function Surface() {
    let l = dim.L.elt.value;
    let a = Area();
    let p = Perimeter();
    let x;
    if (l != 0) { x = 2; } else { x = 1; }
    return (x * a + p * l) / 100;
}

function Mass() {
    let v = Volume();
    let den = mat.density.elt.value;
    return v / 1000000 * den;
}

function Traction() {
    let R, k;
    let brake = floatElseZero(mat.brake.elt.value);
    let yeld = floatElseZero(mat.yeld.elt.value);
    let a = Area();
    if (yeld != 0) {
        R = yeld;
        k = 3;
    } else {
        R = brake;
        k = 4;
    }
    return R / k * a;
}