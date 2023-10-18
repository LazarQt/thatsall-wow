console.log("lol");

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

async function logMovies() {
    // const response = await fetch("http://127.0.0.1:5500/roster.md");

    var dict = {
        "Warrior": {
            "Icon": "<i class=\"ms ms-ability-raid ms-2x ms-fw class-outline-thick warrior\" title=\"Warrior\"></i>"
        },
        "Paladin": {
            "Icon": "<i class=\"ms ms-ability-role-royal ms-2x ms-fw class-outline-thick paladin\" title=\"Paladin\"></i>"
        },
        "Hunter": {
            "Icon": "<i class=\"ms ms-ability-robber-of-the-rich ms-2x ms-fw class-outline-thick hunter\" title=\"Hunter\"></i>"
        },
        "Rogue": {
            "Icon": "<i class=\"ms ms-ability-ninjutsu ms-2x ms-fw class-outline-thick rogue\" title=\"Rogue\"></i>"
        },
        "Priest": {
            "Icon": "<i class=\"ms ms-counter-plus-uneven ms-2x ms-fw class-outline-thick priest\" title=\"Priest\"></i>"
        },
        "Shaman": {
            "Icon": "<i class=\"ms ms-ability-riot ms-2x ms-fw class-outline-thin shaman\" title=\"Shaman\"></i>"
        },
        "Mage": {
            "Icon": "<i class=\"ms ms-counter-flame ms-2x ms-fw class-outline-thin mage\" title=\"Mage\"></i>"
        },
        "Warlock": {
            "Icon": "<i class=\"ms ms-counter-skull ms-2x ms-fw class-outline-thick warlock\" title=\"Warlock\"></i>"
        },
        "Monk": {
            "Icon": "<i class=\"ms ms-ability-role-sorceror ms-2x ms-fw class-outline-thick monk\" title=\"Monk\"></i>"
        },
        "Druid": {
            "Icon": "<i class=\"ms ms-ability-companion ms-2x ms-fw class-outline-thick druid\" title=\"Druid\"></i>"
        },
        "DemonHunter": {
            "Icon": "<i class=\"ms ms-ability-menace ms-2x ms-fw class-outline-thick demonhunter\" title=\"Demon Hunter\"></i>"
        },
        "DeathKnight": {
            "Icon": "<i class=\"ms ms-ability-amass ms-2x ms-fw class-outline-thick deathknight\" title=\"Death Knight\"></i>"
        },
        "Evoker": {
            "Icon": "<i class=\"ms ms-ability-decayed ms-2x ms-fw class-outline-thick evoker\" title=\"Evoker\"></i>"
        },

    };
    var allClasses = ["Warrior", "Paladin", "Hunter", "Rogue", "Priest", "Shaman", "Mage", "Warlock", "Monk", "Druid", "DemonHunter", "DeathKnight", "Evoker"];

    var c = 0;
    //console.log(response.text());
    fetch("http://127.0.0.1:5500/roster.md")
        .then(response => response.text())
        .then(result => {
            result = result.replaceAll("| ", "|").replaceAll(" |", "|");
            //console.log(result);

            var lines = result.split("\r\n");
            lines.splice(0, 2);
            lines.sort((a, b) => {
                if (a < b) {
                    return -1;
                }
                if (a > b) {
                    return 1;
                }

                // names must be equal
                return 0;
            });
            var tanks = new Array();
            var heals = new Array();
            var dps = new Array();

            lines.forEach(o => {
                var n = "";

                var chars = o.split("|");
                var p = chars[1];
                var public = chars[9];
                var bio = chars[8];
                var classes = chars[3];
                if (public != "✔️") {
                    p = "<span style=\"font-size:smaller\"><i>" + classes + "</i></span>";
                    bio = "";
                }
                var flags = chars[7];
                if(flags.length == 8) {
                    flags = flags.substr(0,4) + "" + flags.substr(4,4);
                }
                n += "<b><span class=\"nono\">" + flags + "</span> " + p + "</b>";
                //console.log(chars[1]);
                //console.log(chars[2]);

                var sc = classes.split(" / ");
                sc.forEach(s => {
                    s = s.replaceAll(" ", "");

                    var index = allClasses.indexOf(s);
                    if (index !== -1) {
                        allClasses.splice(index, 1);
                    }

                    if (dict.hasOwnProperty(s)) {
                        n += dict[s].Icon;
                    }
                });
                n += "<br>";
                //  console.log();
                n += "<span class=\"player\">" + bio + "</span>";
                var classes = chars[3];
                // n += "";
                var xd = chars[2];
                if (xd == "🛡️") {
                    tanks.push(n);
                } else if (xd == "✝️") {
                    heals.push(n);
                } else {
                    dps.push(n);
                }
                //console.log(xd);
                //console.log(classes);
            });
            var all = tanks.concat(heals).concat(dps);
            all.forEach(l => {
                c++;
                console.log("<div class=\"div" + c + "\">" + l + "</div>");

            });
            console.log("<br><div>Missing: ");
            allClasses.forEach(c=>{
                console.log(c+" ");
            });
            console.log("</div>");

        });
}
logMovies();




