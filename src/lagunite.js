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
function hiddeAfter(e, t) {
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



function addEvent(id, evnt, funct) {
    var element = document.getElementById(id);
    if (element.attachEvent)
        return element.attachEvent('on' + evnt, funct);
    else
        return element.addEventListener(evnt, funct, false);
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

function addEventClickElement(element, funct) {


    if (typeof (element) != 'undefined' && element != null)
        if (element.attachEvent)
            return element.attachEvent('onclick', funct);
        else
            return element.addEventListener('click', funct, false);
    else return;
}
