export const getElement = (identifier) => {
  if (typeof identifier == "string") {
    if (identifier[0] === "#")
      return document.getElementById(identifier.split("#")[1]);
    if (identifier[0] === ".")
      return document.getElementsByClassName(identifier.split(".")[1])[0];
    if (identifier[0] === "<")
      return document.getElementsByTagName(
        identifier.split("<")[1].split(">")[0]
      )[0];
  } else {
    return identifier; // is an element
  }
  return document.getElementById(identifier);
};

/* show(id)-> Remove "hidden" class to the element */
export const show = (i) => {
  const e = getElement(i);
  if (e.classList.contains("hidden")) e.classList.remove("hidden");
};
/* hidde(id)-> Add "hidden" class to the element */
export const hidde = (i) => {
  const e = getElement(i);
  if (!e.classList.contains("hidden")) e.classList.add("hidden");
};

/* toggle(id)-> Toggle "hidden" class to the element */
export const toggle = (i) => {
  const e = getElement(i);
  if (e.classList.contains("hidden")) e.classList.toggle("hidden");
};

/* hiddeAfter(element,time )-> Add "hidden" class to the element after t (ms)
 */
export const hiddeAfter = (i, t) => {
  const e = getElement(i);
  setTimeout(
    () => {
      e.classList.add("hidden");
    },
    t,
    e
  );
};

/* addClass(id,c)-> Add class "c" to the element  */
export const addClass = (i, c) => {
  const e = getElement(i);
  if (!e.classList.contains(c)) e.classList.add(c);
};

/* removeClass(id,c)-> Remove class "c" to the element  */
export const removeClass = (i, c) => {
  const e = getElement(i);
  if (e.classList.contains(c)) e.classList.remove(c);
};

/* toggleClass(id,c)-> Toggle class "c" to the element */
export const toggleClass = (i, c) => {
  const e = getElement(i);
  e.classList.toggle(c);
};

/* updateInput(id,val)-> Update value of the element  */
export const updateInput = (i, val) => {
  const e = getElement(i);
  e.value = val;
};

export const updateText = (i, text) => {
  const e = getElement(i);
  e.textContent = text;
};

/* Aside Menu   */
export const showMenu = () => {
  var m = document.getElementById("menuBurger");
  m.classList.remove("scale-out-tr");
  m.classList.add("scale-in-tr");
  m.classList.remove("hidden");
};

export const hideMenu = () => {
  var m = document.getElementById("menuBurger");
  m.classList.remove("scale-in-tr");
  m.classList.add("scale-out-tr");
  hiddeAfter(m, 300);
};

/* Disappearing Modal */
export const disappearing = (i) => {
  const m = getElement(i);
  show(id);
  addClass(id, "disappearing");
  hiddeAfter(m, 3000);
};

/* Images carrousel */
export const carrousel = (id) => {
  var c = document.getElementById("carrousel").children;
  var id = 0;
  for (var i = 0; i < c.length; i++) {
    if (c[i].classList.contains("img-in")) {
      c[i].classList.remove("img-in");
      c[i].classList.add("img-out");
      id = i;
    }
  }
  id += 1;
  if (id == c.length) id = 0;
  c[id].classList.remove("img-out");
  c[id].classList.add("img-in");
};

export const initCarrousel = (id) => {
  var interval = setInterval(function () {
    carrousel(id);
  }, 1500);
};

export const addEvent = (i, evnt, funct) => {
  const e = getElement(i);
  if (e.attachEvent) return e.attachEvent("on" + evnt, funct);
  else if (e.addEventListener) {
    return e.addEventListener(evnt, funct, false);
  } else e["on" + evnt] = funct;
};

export const addEventClick = (i, funct) => {
  const e = getElement(i);
  if (typeof e != "undefined" && e != null)
    if (e.attachEvent) return e.attachEvent("onclick", funct);
    else return e.addEventListener("click", funct, false);
  else return;
};

export const addEventChange = (i, funct) => {
  const e = getElement(i);
  if (typeof e != "undefined" && e != null)
    if (e.attachEvent) return e.attachEvent("onchange", funct);
    else return e.addEventListener("change", funct, false);
  else return;
};

export const getValue = (i) => {
  const e = getElement(i);
  if (e) return e.value;
  else return null;
};

export const setValue = (i, value) => {
  const e = getElement(i);
  if (e) {
    e.value = value;
    return true;
  } else return false;
};

export const setText = (i, value) => {
  const e = getElement(i);
  if (element) {
    element.textContent = value;
    return true;
  } else return false;
};

//Usage :  document.getElementById("xTable").appendChild(createTableFromObj(
export const createTableFromObj = (obj) => {
  var table = document.createElement("table");
  table.classList.add("table");
  var tableHead = document.createElement("thead");
  var tableHeadRow = document.createElement("tr");
  let keys = Object.keys(obj);
  console.log(keys.length);
  for (var j = 0; j < keys.length; j++) {
    let th = document.createElement("th");
    th.appendChild(document.createTextNode(keys[j]));

    tableHeadRow.appendChild(th);
  }
  tableHead.appendChild(tableHeadRow);

  var tableBody = document.createElement("tbody");

  for (var i = 0; i < obj[keys[0]].length; i++) {
    let tr = document.createElement("tr");

    for (var j = 0; j < keys.length; j++) {
      let td = document.createElement("td");
      td.appendChild(document.createTextNode(obj[keys[j]][i]));
      tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  }
  table.appendChild(tableHead);
  table.appendChild(tableBody);
  return table;
};

export const removeAllChildNodes = (i) => {
  const e = getElement(i);
  if (e) {
    while (e.firstChild) {
      e.removeChild(e.firstChild);
    }
    return true;
  } else return false;
};

export const delay = (t) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, t);
  });
};
