



function startup() {

    if (localStorage.getItem("mode") == "night") {
        document.body.classList.add("dark");

    }
    showmode();
}

function showmode() {
    if (localStorage.getItem("mode") == "night") {
        document.getElementById("night").style.display = "none";
        document.getElementById("day").style.display = "block";
    } else {
        document.getElementById("night").style.display = "block";
        document.getElementById("day").style.display = "none";
    }
}

function lolmode() {
    var mode = localStorage.getItem("mode");

    if (mode == null) {
        localStorage.setItem("mode", "night");
        document.body.classList.add("dark");
    } else {

        if (mode == "night") {
            document.body.classList.remove("dark");
            localStorage.setItem("mode", "day")

        } else {
            document.body.classList.add("dark");
            localStorage.setItem("mode", "night")
        }


    }
    showmode();

}

