    function show(id) {
        if (document.getElementById(id).classList.contains("hidden"))
            document.getElementById(id).classList.remove("hidden");
    }

    function hidde(id) {
        document.getElementById(id).classList.add("hidden");
    }

    function toggle(id) {
        document.getElementById(id).classList.toggle("hidden");
    }


    function toggleItems(id1, id2) {
        toggle(id1);
        toggle(id2);
    }



    //Hidde after animation
    function noneAfter(e, t) {
        setTimeout(function () {
            e.classList.add("hidden");
        }, t);
    }

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
        noneAfter(m, 300);

    }

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
