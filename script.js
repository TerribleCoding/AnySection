var profiles;

function preload() {
    profiles = loadTable("assets/db/profiles.csv", "csv", "header");
}

function setup() {
    noCanvas();
    var container = document.getElementById('container');
    for (let i = 0; i < profiles.rows.length; i++) {
        let elt = profiles.rows[i].obj;
        let link = str(elt["MediaName"]);
        link = link.toLowerCase();
        link = link.replace(/\s+/g, "-");
        link = 'pages/' + link + '.html';

        let a = createA(link, '');
        a.parent(container);
        a.addClass('thumbnail');

        let img = createImg('assets/img/' + elt["MediaName"] + '.png', '');
        img.parent(a);
        img.addClass('thumbnail');

        let p = createP(elt["Name"]);
        p.parent(a);
        p.addClass('label');
    }
}