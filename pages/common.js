var profiles;
var materials;

var combo, selector;
var imageSpace;
var pageName;

// dimensions = list of all dimensions called in all pages
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
            inp.attribute('min', '0');
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
            inp.attribute('min', '0');
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

    // add event listeners to open equation editor
    addEquationKeyListeners();
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



// EXPRESSION EDITOR FUNCTIONS

var editor = document.querySelector('#calc');
var property = document.querySelector('#var');
var textfield = document.querySelector('#expression');
var result = document.querySelector('#result num');
var icons = document.querySelectorAll('#result icon > *');
var button = document.querySelector('#calc button');
var errors = {
    char: 'Only numbers or +-*/(). characters are allowed.',
    par: 'Some parentheses are missing.',
    syntax: 'Syntax error detected.'
}


function openEditor() {
    editor.style.display = 'grid';
}

function closeEditor() {
    editor.style.display = 'none';
}

function addEquationKeyListeners() {
    var target = document.querySelectorAll('table input[type=number]');
    target.forEach(item => item.addEventListener('keyup', openEditorForVariable));
}

function openEditorForVariable(event) {
    // press '=' to open editor when closed and focus on textfield
    if (event.key == '=' && editor.style.display == 'none') {
        property.innerHTML = event.target.parentNode.previousElementSibling.innerHTML;
        textfield.value = '';
        textfield.focus();
        openEditor();
    }
}

editor.addEventListener('keyup', function (event) {
    // do something only if the editor is open
    if (editor.style.display !== 'none') {
        // press 'Esc' to close editor
        if (event.key == 'Escape') closeEditor();
        // press 'Enter' to act as pressing the button
        if (event.key == 'Enter') button.click();
    }
});

// check for errors while typing
textfield.addEventListener('input', checkErrors);

function checkErrors(event) {
    // convert the input to string, split in an array, remove spaces
    var inp = event.target.value.toString().split('').filter(x => x != " ");
    // check if every character is allowed => 0123456789.+-*/()
    var charTest = inp.every(char => char.match(/[0-9|\+|\-|\*|\/|(|)|\.]/));
    // check if parentheses match
    var parTest = inp.filter(char => char == '(').length == inp.filter(char => char == ')').length;

    // preview result
    var validExpression = true;
    try {
        eval(inp.join(''));
    } catch (e) {
        if (e instanceof SyntaxError) validExpression = false;
    } finally {
        if (validExpression && charTest && parTest) result.innerText = eval(inp.join(''));
    }

    // update warning tooltip
    var tooltip = [];
    if (!charTest) tooltip.push(errors.char);
    if (!parTest) tooltip.push(errors.par);
    if (!validExpression) tooltip.push(errors.syntax);
    icons[1].querySelector('span').innerText = tooltip.join('\n');

    // update icon and button
    if (charTest && parTest && validExpression) {
        button.disabled = false;
        showIcon(0);
    } else {
        button.disabled = true;
        showIcon(1);
    }

    function showIcon(index) {
        icons.forEach(e => e.classList.add('invisible'));
        icons[index].classList.remove('invisible');
    }
}

