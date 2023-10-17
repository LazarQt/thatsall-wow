console.log("lol");

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

    }
    var c = 0;
    //console.log(response.text());
    fetch("http://127.0.0.1:5500/roster.md")
        .then(response => response.text())
        .then(result => {
            result = result.replaceAll("| ", "|").replaceAll(" |", "|");
            //console.log(result);
            
            var lines = result.split("\r\n");
            lines.splice(0, 2);
            lines.sort((a,b) => {
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
                n += "<b><span style=\"font-size: larger;\">"+chars[7] +"</span> "+chars[1]+"</b>";
                //console.log(chars[1]);
                //console.log(chars[2]);
                var classes = chars[3];
                var sc = classes.split(" / ");
                sc.forEach(s=>{
                    s = s.replaceAll(" ", "");
                    if (dict.hasOwnProperty(s)) {
                        n += dict[s].Icon;
                    }
                });
                n += "<br>";
              //  console.log();
                n += "<span class=\"player\">"+chars[8]+"</span>";
                var classes = chars[3];
               // n += "";
                var xd = chars[2];
                if(xd == "🛡️") {
                    tanks.push(n);
                } else if (xd=="✝️") {
                    heals.push(n);
                } else {
                    dps.push(n);
                }
                //console.log(xd);
                //console.log(classes);
            });
            var all = tanks.concat(heals).concat(dps);
            all.forEach(l=> {
                c++;
                console.log( "<div class=\"div" + c + "\">"+l+"</div>");
             
            });


        });
}
logMovies();



