var list;
var radio;
var profiles;
var database;

function preload() {
    list = document.getElementById('list');
    radio = document.getElementById('radio');
    profiles = loadTable("../assets/db/profiles.csv", "csv", "header");
    database = loadJSON("../assets/db/equations.json");
}

function setup() {
    noCanvas();

    // sidebar list generation
    for (let i = 0; i < profiles.rows.length; i++) {
        let div = document.createElement('div');
        let num = i + 1;
        let id = "radio" + num;
        let btn = document.createElement('input');
        btn.setAttribute('type', 'radio');
        btn.setAttribute('name', 'select');
        btn.setAttribute('value', num);
        btn.setAttribute('id', id);
        if (i == 0) { btn.checked = true }
        let label = document.createElement('label');
        label.setAttribute('for', id);
        label.innerText = profiles.rows[i].obj["Name"];
        let link = document.createElement('a');
        link.href = "#" + database[profiles.rows[i].obj["Name"]].title.replace(" ", "");
        link.setAttribute('onclick', 'checkMe(' + (i + 1) + ')');
        label.append(link);
        div.append(btn, label, document.createElement('br'));
        list.append(div);
    }

    // content generation
    for (let elt of profiles.rows) {
        let math = document.createElement('div');
        math.classList.add('math');
        document.getElementById('board').append(math);
        let title = document.createElement('h4');
        title.innerHTML = database[elt.obj["Name"]].title;
        title.id = title.innerHTML.replace(" ", "");
        let main = document.createElement('div');
        math.append(title, main);
        let pic = document.createElement('img');
        pic.src = '../assets/img/' + elt.obj["MediaName"] + '.png';
        main.append(pic);
        let cards = new Array(3);
        let titles = ["Legend", "Geometry equations", "Phisical equations"];
        let indices = ["legend", "geo", "phi"];
        for (let i = 0; i < cards.length; i++) {
            cards[i] = document.createElement('div');
            cards[i].classList.add('card');
            main.append(cards[i]);
            let title = document.createElement('h5');
            title.innerHTML = titles[i];
            let innerContainer = document.createElement('div');
            let strings = database[elt.obj["Name"]][indices[i]];
            for (let j = 0; j < strings.length; j++) {
                let p = document.createElement('p');
                p.innerHTML = strings[j];
                if (i != 0) p.innerHTML = strings[j].replaceAll("/", "\\");
                innerContainer.append(p);
            }
            cards[i].append(title, innerContainer);
        }
    }

    // load MathJax after all
    let mathjax = document.createElement('script');
    mathjax.id = "MathJax-script";
    mathjax.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
    mathjax.defer = true;
    document.head.appendChild(mathjax);
}

function checkMe(index) {
    document.getElementById('radio' + index).checked = true;
}