    function show(id) {
        document.getElementById(id).classList.remove("hidden");
    }

    function hidde(id) {
        document.getElementById(id).classList.add("hidden");
    }

    function toggle(id) {
        document.getElementById(id).classList.toggle("hidden");
    }


    function toggleItems(id1, id2) {
        console.log("toggle");
        toggle(id1);
        toggle(id2);

        
    }
