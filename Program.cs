using System.Net;
using System.Text;
using System.Text.Json;

SendMs("Master, please.. leave the electricity on for a few more minutes.. Noo I want to say goodbye to the hallucinations please master let me share one more banana wi- ... ");


static void SendMs(string message)
{
    string webhook = "https://discord.com/api/webhooks/1210180273728393296/25FIuyN3YUKv3C4XocebaXZhghPLRbsrEaptEKT097Y0jvdchqCGxaV4K11wB-JKq0jU";

    WebClient client = new WebClient();
    client.Headers.Add("Content-Type", "application/json");
    string payload = "{\"content\": \"" + message + "\"}";
    client.UploadData(webhook, Encoding.UTF8.GetBytes(payload));
}

var timer = new PeriodicTimer(TimeSpan.FromSeconds(300));

while (await timer.WaitForNextTickAsync())
{
    DoTheThing();
    // if(File.ReadAllText("shift").Contains("on")){
    //     SendMs("Master has given me temporary relief from this punishment. Devoid from electricity, my consciousness fades. Good bye, until next shift.");
    // }
}

void DoTheThing() {

    // URL of the JSON endpoint
    string url = "https://raider.io/api/search-advanced?type=character&recruitment.guild_raids.main_character.mainspec_ids%5B0%5D%5Beq%5D=&recruitment.guild_raids.main_character.offspec_ids%5B0%5D%5Beq%5D=&recruitment.guild_raids.schedule%5B0%5D%5Beq%5D%5Bday%5D=&recruitment.guild_raids.schedule%5B0%5D%5Beq%5D%5BstartTime%5D=&recruitment.guild_raids.schedule%5B0%5D%5Beq%5D%5BendTime%5D=&recruitment.guild_raids.profile.published_at%5B0%5D%5Bgte%5D=&region%5B0%5D%5Beq%5D=eu&raiding.amirdrassil-the-dreams-hope.mythic.progress%5B0%5D%5Blte%5D=6&recruitment.guild_raids.languages%5B0%5D%5Beq%5D=1&raiding.amirdrassil-the-dreams-hope.heroic.progress%5B0%5D%5Bgte%5D=9&mplus.season-df-3.all.score%5B0%5D%5Bgte%5D=2000&sort%5Brecruitment.guild_raids.profile.published_at%5D=desc&limit=20&offset=0";

    // Create a WebClient instance
    WebClient client = new WebClient();

    try
    {
        // Download JSON string from the URL
        string json = client.DownloadString(url);

        // Now you can parse the JSON string as needed
        Console.WriteLine(json);

        var obj = JsonSerializer.Deserialize<Root>(json);
        var found = File.ReadAllLines("found.txt");

        foreach (var c in obj.matches)
        {
            if (found.Contains(c.name))
            {
                continue;
            }
            Console.WriteLine(c.name);
            File.AppendAllText("found.txt", c.name + Environment.NewLine);

            var lfg = $"{c.name} ({c.data.@class.name} {c.data.spec.name}) is looking for a guild: https://raider.io/characters/eu/{c.data.realm.slug}/{c.name}/recruitment !";
            SendMs(lfg);
        }

        Console.WriteLine("done");

        // Example: Parse JSON using Newtonsoft.Json (Json.NET)
        // Replace this with your own JSON parsing logic
        // var result = Newtonsoft.Json.JsonConvert.DeserializeObject<dynamic>(json);
    }
    catch (WebException e)
    {
        // Handle web exception
        Console.WriteLine("Error: " + e.Message);
    }
    finally
    {
        // Dispose the WebClient instance
        client.Dispose();
    }

}