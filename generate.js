const fs = require('fs');
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
            //result = result.replaceAll("| ", "|").replaceAll(" |", "|").replaceAll("\t","");
            //console.log(result);

            var lines = result.split("\r\n");
            var h = lines[0].split("|").splice(1);
            h.forEach((e, i) => {
                h[i] = e.trim();
              });
        
            lines.splice(0, 2);

            var tanks = new Array();
            var heals = new Array();
            var dps = new Array();
            
            var templateWrapper = `
            <div class="ulxd">
            {TEMPLATE}
            </div>
            `;
            var template = `
            <div class="flex-item">
                <div>
                <span style="letter-spacing: 3px;" class="nono">{ORIGIN}</span> 
                <b>{PLAYER}</b>
                {CLASSES}
                </div>
                
                    
                   
            
                <span class="player">{BIO}</span>
            </div>

            `;

            var playercontent = [];

            lines.forEach(o => {
                o = o.substring(1,o.length-1);
               

                var parts = o.split("|");

                var p = {
                    nr : Number(parts[h.indexOf("Nr")].trim()), 
                    player : parts[h.indexOf("Player")].trim(),
                    role : parts[h.indexOf("Role")].trim(),
                    wowclasses : parts[h.indexOf("Class")].trim(),   
                    status : parts[h.indexOf("Status")].trim(),
                    heroic : parts[h.indexOf("Heroic")].trim() == "✔️",   
                    mythic : parts[h.indexOf("Mythic")].trim() == "✔️",  
                    reviews : parts[h.indexOf("Reviews")].trim() == "✔️",  
                    public : parts[h.indexOf("Public")].trim() == "✔️",
                    bio : parts[h.indexOf("Bio")].trim(),
                    origin : parts[h.indexOf("Origin")].trim() 
                }



                if (p.nr < 0 ) {
                    // not currently on roster
                    return;
                }

                var classiconlist = "";

                var splitClasses = p.wowclasses.split(" / ");
                splitClasses.forEach(s => {
                    s = s.replaceAll(" ", "");

                    var index = allClasses.indexOf(s);
                    if (index !== -1) {
                        allClasses.splice(index, 1);
                    }

                    if (dict.hasOwnProperty(s)) {
                        classiconlist += dict[s].Icon;
                    }
                });

                p.html = template
                    .replace("{PLAYER}", p.player)
                    .replace("{ORIGIN}", p.origin)
                    .replace("{BIO}", p.bio)
                    .replace("{CLASSES}", classiconlist);

                playercontent.push(p);
            });



            
            //console.log(final);

            fetch("http://127.0.0.1:5500/index.template")
                .then(response => response.text())
                .then(result => {
                    
                    mysort(playercontent);
                    result = result.replace("{TANKS}", templateWrapper.replace("{TEMPLATE}", playercontent.tanks().playerhtml().join("")));
                    result = result.replace("{TANKS_C}", playercontent.tanks().mythicplayers().length + " <span style=\"font-size:smaller\">+"+playercontent.tanks().heroicplayers().length+"</span>");

                    result = result.replace("{HEALERS}", templateWrapper.replace("{TEMPLATE}", playercontent.healers().playerhtml().join("")));
                    result = result.replace("{HEALERS_C}", playercontent.healers().mythicplayers().length + " <span style=\"font-size:smaller\">+"+playercontent.healers().heroicplayers().length+"</span>");
                    
                    
                    result = result.replace("{APES}", templateWrapper.replace("{TEMPLATE}", playercontent.dps().playerhtml().join("")));
                    result = result.replace("{APES_C}", playercontent.dps().mythicplayers().length + " <span style=\"font-size:smaller\">+"+playercontent.dps().heroicplayers().length+"</span>");

                   

                    fs.writeFile('index.html', result, err => {
                        if (err) {
                        console.error(err);
                        }
                        // file written successfully
                    });
            });

            


        });
}
logMovies();

function mysort(lines) {
                lines.sort((a, b) => {
                if (a.player < b.player) {
                    return -1;
                }
                if (a.player > b.player) {
                    return 1;
                }

                // names must be equal
                return 0;
            });
}

Array.prototype.tanks = function() { return this.filter((f) => f.role == "Tank"); }
Array.prototype.healers = function() { return this.filter((f) => f.role == "Heal"); }
Array.prototype.dps = function() { return this.filter((f) => f.role == "Melee" || f.role == "Ranged"); }

Array.prototype.playerhtml = function() { return this.map((x) => x.html); }

Array.prototype.mythicplayers = function() { return this.filter((y) => y.mythic); }
Array.prototype.heroicplayers = function() { return this.filter((y) => !y.mythic); }

