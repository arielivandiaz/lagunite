/* show(id)-> Remove "hidden" class to the element by id */
function show(id) {
    var x = document.getElementById(id);
    if (x.classList.contains("hidden"))
        x.classList.remove("hidden");
}
/* hidde(id)-> Add "hidden" class to the element by id */
function hidde(id) {
    document.getElementById(id).classList.add("hidden");
}
/* toggle(id)-> Toggle "hidden" class to the element by id */
function toggle(id) {
    document.getElementById(id).classList.toggle("hidden");
}

/* hiddeAfter(element,time )-> Add "hidden" class to the element by id 
 *  after t (ms)
 */
function  hiddeAfter  (id, t) {
    var e = document.getElementById(id);
    setTimeout(function () {
        e.classList.add("hidden");
    }, t, e);
}

/* addClass(id,c)-> Add class "c" to the element by id */
function addClass(id, c) {
    var x = document.getElementById(id);
    if (!x.classList.contains(c))
        x.classList.add(c);
}
/* removeClass(id,c)-> Remove class "c" to the element by id */
function removeClass(id, c) {
    var x = document.getElementById(id);
    if (x.classList.contains(c))
        x.classList.remove(c);
}
/* toggleClass(id,c)-> Toggle class "c" to the element by id */
function toggleClass(id, c) {
    var x = document.getElementById(id);
    x.classList.toggle(c);
}

/* updateInput(id,val)-> Update value of the element by id */
function updateInput(id, val) {
    document.getElementById(id).value = val;
}


function updateText(id, text) {
    document.getElementById(id).textContent = text;
}


/* Aside Menu   */
function showMenu() {
    var m = document.getElementById("menuBurger");
    m.classList.remove("scale-out-tr");
    m.classList.add("scale-in-tr");
    m.classList.remove("hidden");
}

function hideMenu() {
    var m = document.getElementById("menuBurger");
    m.classList.remove("scale-in-tr");
    m.classList.add("scale-out-tr");
    hiddeAfter(m, 300);
}


/* Disappearing Modal */
function disappearing(id) {
    var m = document.getElementById(id);
    show(id);
    addClass(id, 'disappearing');
    hiddeAfter(m, 3000);
}


/* Images carrousel */
function carrousel(id) {
    var c = document.getElementById('carrousel').children;
    var id = 0;
    for (var i = 0; i < c.length; i++) {
        if (c[i].classList.contains('img-in')) {
            c[i].classList.remove('img-in');
            c[i].classList.add('img-out');
            id = i;
        }
    }
    id += 1;
    if (id == c.length) id = 0;
    c[id].classList.remove('img-out');
    c[id].classList.add('img-in');
}

function initCarrousel(id) {
    var interval = setInterval(function () {
        carrousel(id);
    }, 1500);

}



function addEvent(element, evnt, funct) {
    if (element.attachEvent)
        return element.attachEvent('on' + evnt, funct);
    else if (element.addEventListener) {
        return element.addEventListener(evnt, funct, false);
    } else element["on" + evnt] = funct;
}


function addEventClick(id, funct) {
    var element = document.getElementById(id);

    if (typeof (element) != 'undefined' && element != null)
        if (element.attachEvent)
            return element.attachEvent('onclick', funct);
        else
            return element.addEventListener('click', funct, false);
    else return;
}


function addEventChange(id, funct) {
    var element = document.getElementById(id);

    if (typeof (element) != 'undefined' && element != null)
        if (element.attachEvent)
            return element.attachEvent('onchange', funct);
        else
            return element.addEventListener('change', funct, false);
    else return;
}



function getValue(id) {
    var element = document.getElementById(id);
    if (element)
        return element.value;
    else
        return null;
}


function setValue(id, value) {
    var element = document.getElementById(id);
    if (element) {
        element.value = value;
        return true;
    } else
        return false;
}

function setText(id, value) {
    var element = document.getElementById(id);
    if (element) {
        element.textContent = value;
        return true;
    } else
        return false;
}

//Usage :  document.getElementById("xTable").appendChild(createTableFromObj(
function createTableFromObj(obj) {

    var table = document.createElement('table');
    table.classList.add("table");
    var tableHead = document.createElement('thead');
    var tableHeadRow = document.createElement('tr');
    let keys = Object.keys(obj);
    console.log(keys.length);
    for (var j = 0; j < keys.length; j++) {
        let th = document.createElement('th');
        th.appendChild(document.createTextNode(keys[j]));

        tableHeadRow.appendChild(th);
    }
    tableHead.appendChild(tableHeadRow);

    var tableBody = document.createElement('tbody');

    for (var i = 0; i < obj[keys[0]].length; i++) {
        let tr = document.createElement('tr');

        for (var j = 0; j < keys.length; j++) {
            let td = document.createElement('td');
            td.appendChild(document.createTextNode(obj[keys[j]][i]));
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    return table;
}


function removeAllChildNodes(id) {

    var element = document.getElementById(id);
    if (element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        return true;
    } else
        return false;
}


function delay(t) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, t);
    })
}
