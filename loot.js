const fs = require('fs');
// notes: only heroic and above (trinkets marked), nobody knew, everything from logs manually, dont know source(maybe vault), nbo normal logs, trial no afected
var hoard = {
    "Gecco": ["Pip's Emerald Friendship Badge", "Lady Waycrest's Music Box", "Smoldering Seedling👎"],
    "Pressmeta": ["Accelerating Sandglass", "Witherbark's Branch👎"],
    "Doen": ["Idol of the Dreamer", "Echoing Tyrstone", "Revitalizing Voodoo Totem👎"],
    "Idrieth": ["Smoldering Seedling👎"],
    "Felcupofgay": ["Witherbark's Branch", "Coiled Serpent Idol", "Prophetic Stonescales"],
    "Warmcupofgay": ["Augury of the Primal Flame", "Mirror of Fractured Tomorrows"],
    "Sanigawd": ["Might of the Ocean", "Accelerating Sandglass", "Nightmare Egg Shell"],
    "Illyanna": ["Fyrakk's Tainted Rageheart", "Prophetic Stonescales👎", "Gift of Ursine Vengeance", "Nightmare Egg Shell👎"],
    "Noemis": ["Rezan's Gleaming Eye", "Branch of the Tormented Ancient", "Accelerating Sandglass"],
    "Sixwaystodie": ["Mirror of Fractured Tomorrows", "Rezan's Gleaming Eye"],
    "Xervus": ["Lady Waycrest's Music Box👎", "Echoing Tyrstone", "Smoldering Seedling"],
    "Fandensjølv": ["Prophetic Stonescales", "Fyrakk's Tainted Rageheart", "Gift of Ursine Vengeance"],
    "Fuzpi": ["Blossom of Amirdrassil", "Coagulated Genesaur Blood", "Sea Star"],
    "Heiwaht": ["Mirror of Fractured Tomorrows", "Accelerating Sandglass", "Corrupted Starlight"],
    "Raptorstike": ["Accelerating Sandglass", "Mirror of Fractured Tomorrows"],
    "Nosferak": ["Mirror of Fractured Tomorrows", "Coagulated Genesaur Blood", "Sea Star👎"],
    "Luthira": ["Witherbark's Branch", "Cataclysmic Signet Brand👎", "My'das Talisman👎", "Porcelain Crab👎",],
    "Calimero": ["Vessel of Skittering Shadows", "Pip's Emerald Friendship Badge👎"],
    "Nòct": ["Balefire Branch", "Belor'relos, the Suncaller", "Augury of the Primal Flame"],
    "Groomkin": ["Pip's Emerald Friendship Badge👎",],
    "Iguanas": ["Ashes of the Embersoul👎", "Corrupted Starlight",],
    "Kaizomonk": ["Sea Star", "Echoing Tyrstone", "Lady Waycrest's Music Box👎"]
}

var raidtrinkets =
    ["Ashes of the Embersoul",
        "Branch of the Tormented Ancient",
        "Bandolier of Twisted Blades",
        "Coiled Serpent Idol",
        "Gift of Ursine Vengeance",
        "Pip's Emerald Friendship Badge",
        "Smoldering Seedling",
        "Nymue's Unraveling Spindle",
        "Cataclysmic Signet Brand",
        "Belor'relos, the Suncaller",
        "Augury of the Primal Flame",
        "Blossom of Amirdrassil",
        "Fyrakk's Tainted Rageheart"];

var nonraidsources = [
    "Dawn of the Infinite",
    "Atal'Dazar",
    "Waycrest Manor",
    "Black Rook Hold",
    "The Everbloom",
    "Throne of the Tides",
    "Darkheart Thicket",
    "Crafted",
]

async function myf() {
    var tabsfetch = await fetch("http://127.0.0.1:5500/tabs.tsv");
    var result = await tabsfetch.text();

    result = result.split("\r\n");
    var lines = [];
    result.forEach(e => {
        var e = e.split("\t");
        lines.push({ "Class": e[0], "Spec": e[1], "Slot": e[2], "Item": e[3], "Source": e[4] });
    });

    var total = [];
    total.push("👎 = Below Hero Track Trinket, ⭐ = BIS, 😩 = ilvl < 467");
    total.push("");
    var totalilvl = 0;
    var playercount = 0;
    var raidplayers = 0;
    var totalraidtrinkets = 0;

    var charsfetch = await fetch("http://127.0.0.1:5500/chars.txt");
    var chars = await charsfetch.text();

    var charlist = chars.split("\r\n");
    for (var i = 0; i < charlist.length; i++) {



        var csplit = charlist[i].split("/");
        var srv = csplit[5];
        var name = csplit[6];
        var raidspec = csplit[7];
        var url = "https://raider.io/api/v1/characters/profile?region=eu&realm=" + srv + "&name=" + name + "&fields=gear%2Craid_progression";



        const response = await fetch(url);
        const raiderinfo = await response.json();
        //console.log(json);


        console.log(raiderinfo);
        var slots = ["head", "neck", "shoulder", "back", "chest", "wrist", "hands", "waist", "legs", "feet", "finger1", "finger2", "mainhand", "offhand", "trinket1", "trinket2"];
        var map = {
            "head": "Head",
            "neck": "Neck",
            "shoulder": "Shoulders",
            "back": "Cloak",
            "chest": "Chest",
            "wrist": "Wrist",
            "hands": "Gloves",
            "waist": "Belt",
            "legs": "Legs",
            "feet": "Boots",
            "finger1": "Ring",
            "finger2": "Ring",
            "mainhand": "Hands",
            "offhand": "Hands",
            "trinket1": "Trinket",
            "trinket2": "Trinket"
        };

        var biscount = 0;
        var charspecific = [];
        var baditemcount = 0;
        raidplayers++;
        slots.forEach(s => {

            var xxx = raiderinfo.gear.items[s];
            if (!xxx) {
                // no weapon slot or shi
                return;
            }
            //console.log(raiderinfo);
            var itemname = xxx.name;
            var isBis = false;
            var isNaked = false;
            var ilvl = xxx.item_level;

            totalilvl += ilvl;
            playercount++;

            if (ilvl < 467) {
                isNaked = true;
            } else {
                //  ilvl = xxx.name + " (" + ilvl + ")"
            }
            var items = [];
            var classinfo = lines.filter(c => c.Class == raiderinfo.class && c.Spec == raidspec && c.Slot == map[s]);
            classinfo.forEach(i => {
                items.push(i.Item);
            });
            if (items.includes(xxx.name)) {
                isBis = true;
            }
            var bisstring = "";
            if (isBis) {
                bisstring = "⭐";
                biscount++;
            }
            var slotstring = `${map[s]}: ${itemname}${bisstring} (${ilvl})`;
            if (isNaked) {
                slotstring = `${map[s]}: 😩`;
                baditemcount++;
            }
            charspecific.push(slotstring);
        });
        var trinkethoard = hoard[raiderinfo.name];
        if(!trinkethoard) {
            trinkethoard = [];
        }

        var raidtrinketcount = 0;
        var totaltrinketCount = trinkethoard.length;
        trinkethoard.forEach(t => {
            t = t.replace("👎", "");
            if (raidtrinkets.includes(t)) {
                raidtrinketcount++;
                totalraidtrinkets++;
            }
        });
        total.push(`<b>${raiderinfo.name}</b> | ilvl:${raiderinfo.gear.item_level_equipped} | ${biscount} BiS | Trinkets(Raid/Total): ${raidtrinketcount}/${totaltrinketCount} | items < 457: ${baditemcount}`);
        total = total.concat(charspecific);
        total.push("All Trinkets: " + trinkethoard.join(", "));
        //console.log("BiS count: " + biscount);
        total.push("");
        console.log();

    }
    var html = `<!DOCTYPE html>
    <html lang="en" class="">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Thats all Folks WoW Guild</title>
    
    
    
    
    
    </head>`;


    total.push("");
    total.push("### BIS TABLES ###")
    //  lines.push({ "Class": e[0], "Spec": e[1], "Slot": e[2], "Item": e[3], "Source": e[4] });
    lines.forEach(l => {
        total.push(`${l.Spec} ${l.Class}: ${l.Item}(${l.Source})`);
    });

    total.unshift("Average ilvl: " + Math.round(totalilvl / playercount));
    total.unshift("Average amount of raid trinktes per player :" + (totalraidtrinkets / raidplayers).toFixed(2));
    total.forEach(x => {
        html += x + "<br>";
    })
    //console.log(total);
html += `

</body>

</html>

`;
    fs.writeFile('loot/index.html', html, err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    });








}

myf(); 
