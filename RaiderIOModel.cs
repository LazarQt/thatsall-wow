// Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
using System.Text.Json.Serialization;

public class _0
    {
        public int gte { get; set; }
        public int lte { get; set; }
    }

    public class _1
    {
        public int gte { get; set; }
        public int lte { get; set; }
    }

    public class _2
    {
        public int gte { get; set; }
        public int lte { get; set; }
    }

    public class _20952
    {
        public int gte { get; set; }
        public int lte { get; set; }
    }

    public class _3
    {
        public int gte { get; set; }
        public int lte { get; set; }
    }

    public class _4
    {
        public int gte { get; set; }
        public int lte { get; set; }
    }

    public class _5
    {
        public int gte { get; set; }
        public int lte { get; set; }
    }

    public class _6
    {
        public int gte { get; set; }
        public int lte { get; set; }
    }

    public class AberrusTheShadowedCrucible
    {
        public Normal normal { get; set; }
        public Heroic heroic { get; set; }
        public Mythic mythic { get; set; }
        public int? aotcWeek { get; set; }
    }

    public class All
    {
        public int score { get; set; }
        public BestRun bestRun { get; set; }
    }

    public class AmirdrassilTheDreamsHope
    {
        public Normal normal { get; set; }
        public Heroic heroic { get; set; }
        public Mythic mythic { get; set; }
        public int? aotcWeek { get; set; }
    }

    public class AssaultOfTheZaqali
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class BestRun
    {
        public int level { get; set; }
        public int runId { get; set; }
        public int zoneId { get; set; }
        public int upgrades { get; set; }
        public double fraction { get; set; }
    }

    public class BroodkeeperDiurna
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class Class
    {
        public int id { get; set; }
        public string name { get; set; }
        public string slug { get; set; }
    }

    public class CommitmentDays
    {
        public int gte { get; set; }
        public int lte { get; set; }
    }

    public class CommitmentHours
    {
        public int gte { get; set; }
        public int lte { get; set; }
    }

    public class CouncilOfDreams
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class Data
    {
        public int id { get; set; }
        public int wowCharacterId { get; set; }
        public string name { get; set; }
        public int level { get; set; }
        public Guild guild { get; set; }
        public int? groupCharterId { get; set; }
        public int faction { get; set; }
        public int gender { get; set; }
        public int regionId { get; set; }
        public int realmId { get; set; }
        public int connectedRealmId { get; set; }
        public int achievementPoints { get; set; }
        public int raceId { get; set; }
        public int classId { get; set; }
        public int specId { get; set; }
        public string role { get; set; }
        public int itemLevelEquipped { get; set; }
        public Mplus mplus { get; set; }
        public Raiding raiding { get; set; }
        public Recruitment recruitment { get; set; }
        public Profile profile { get; set; }
        public string thumbnailUrl { get; set; }
        public Region region { get; set; }
        public SubRegion subRegion { get; set; }
        public Realm realm { get; set; }
        public Class @class { get; set; }
        public Spec spec { get; set; }
        public object stream { get; set; }
        public List<RecruitmentProfile> recruitmentProfiles { get; set; }
    }

    public class DatheaAscended
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class Dps
    {
        public int score { get; set; }
        public BestRun bestRun { get; set; }
    }

    public class EchoOfNeltharion
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class Eranog
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class FyrakkTheBlazing
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class Gnarlroot
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class Guild
    {
        public int id { get; set; }
        public string name { get; set; }
        public string faction { get; set; }
        public Realm realm { get; set; }
        public Region region { get; set; }
    }

    public class GuildRaids
    {
        public Profile profile { get; set; }
        public Requirements requirements { get; set; }
        public List<int> tags { get; set; }
        public Schedule schedule { get; set; }
        public MainCharacter main_character { get; set; }
        public int additional_character_count { get; set; }
        public List<object> all_character_class_ids { get; set; }
        public List<int> all_character_mainspec_ids { get; set; }
        public List<int> all_character_offspec_ids { get; set; }
        public List<int> all_character_spec_pairs { get; set; }
    }

    public class Healer
    {
        public int score { get; set; }
        public BestRun bestRun { get; set; }
    }

    public class Heroic
    {
        public int progress { get; set; }
        public int totalKills { get; set; }

        [JsonPropertyName("kazzara-the-hellforged")]
        public KazzaraTheHellforged kazzarathehellforged { get; set; }

        [JsonPropertyName("assault-of-the-zaqali")]
        public AssaultOfTheZaqali assaultofthezaqali { get; set; }

        [JsonPropertyName("the-amalgamation-chamber")]
        public TheAmalgamationChamber theamalgamationchamber { get; set; }

        [JsonPropertyName("the-forgotten-experiments")]
        public TheForgottenExperiments theforgottenexperiments { get; set; }

        [JsonPropertyName("rashok-the-elder")]
        public RashokTheElder rashoktheelder { get; set; }

        [JsonPropertyName("the-vigilant-steward-zskarn")]
        public TheVigilantStewardZskarn thevigilantstewardzskarn { get; set; }
        public Magmorax magmorax { get; set; }

        [JsonPropertyName("echo-of-neltharion")]
        public EchoOfNeltharion echoofneltharion { get; set; }

        [JsonPropertyName("scalecommander-sarkareth")]
        public ScalecommanderSarkareth scalecommandersarkareth { get; set; }
        public Gnarlroot gnarlroot { get; set; }

        [JsonPropertyName("igira-the-cruel")]
        public IgiraTheCruel igirathecruel { get; set; }
        public Volcoross volcoross { get; set; }

        [JsonPropertyName("council-of-dreams")]
        public CouncilOfDreams councilofdreams { get; set; }

        [JsonPropertyName("larodar-keeper-of-the-flame")]
        public LarodarKeeperOfTheFlame larodarkeeperoftheflame { get; set; }

        [JsonPropertyName("nymue-weaver-of-the-cycle")]
        public NymueWeaverOfTheCycle nymueweaverofthecycle { get; set; }

        [JsonPropertyName("tindral-sageswift-seer-of-the-flame")]
        public TindralSageswiftSeerOfTheFlame tindralsageswiftseeroftheflame { get; set; }
        public Smolderon smolderon { get; set; }

        [JsonPropertyName("fyrakk-the-blazing")]
        public FyrakkTheBlazing fyrakktheblazing { get; set; }
        public Eranog eranog { get; set; }

        [JsonPropertyName("kurog-grimtotem")]
        public KurogGrimtotem kuroggrimtotem { get; set; }

        [JsonPropertyName("the-primal-council")]
        public ThePrimalCouncil theprimalcouncil { get; set; }

        [JsonPropertyName("sennarth-the-cold-breath")]
        public SennarthTheColdBreath sennarththecoldbreath { get; set; }

        [JsonPropertyName("dathea-ascended")]
        public DatheaAscended datheaascended { get; set; }

        [JsonPropertyName("broodkeeper-diurna")]
        public BroodkeeperDiurna broodkeeperdiurna { get; set; }
        public Terros terros { get; set; }

        [JsonPropertyName("raszageth-the-stormeater")]
        public RaszagethTheStormeater raszageththestormeater { get; set; }
    }

    public class IgiraTheCruel
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class KazzaraTheHellforged
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class KurogGrimtotem
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class LarodarKeeperOfTheFlame
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class Magmorax
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class MainCharacter
    {
        public int class_id { get; set; }
        public List<int> mainspec_ids { get; set; }
        public List<int> offspec_ids { get; set; }
        public List<int> spec_pairs { get; set; }
        public List<int> main_roles { get; set; }
        public List<int> off_roles { get; set; }
    }

    public class Match
    {
        public string type { get; set; }
        public string name { get; set; }
        public object relevance { get; set; }
        public Data data { get; set; }
    }

    public class Mplus
    {
        [JsonPropertyName("season-df-3")]
        public SeasonDf3 seasondf3 { get; set; }

        [JsonPropertyName("season-df-2")]
        public SeasonDf2 seasondf2 { get; set; }

        [JsonPropertyName("season-df-2-post")]
        public SeasonDf2Post seasondf2post { get; set; }

        [JsonPropertyName("season-df-2-break-the-meta")]
        public SeasonDf2BreakTheMeta seasondf2breakthemeta { get; set; }

        [JsonPropertyName("season-df-2-post-1017")]
        public SeasonDf2Post1017 seasondf2post1017 { get; set; }

        [JsonPropertyName("season-df-2-post-1015")]
        public SeasonDf2Post1015 seasondf2post1015 { get; set; }

        [JsonPropertyName("season-df-1")]
        public SeasonDf1 seasondf1 { get; set; }

        [JsonPropertyName("season-df-1-post")]
        public SeasonDf1Post seasondf1post { get; set; }

        [JsonPropertyName("season-df-2-cutoffs")]
        public SeasonDf2Cutoffs seasondf2cutoffs { get; set; }

        [JsonPropertyName("season-df-1-cutoffs")]
        public SeasonDf1Cutoffs seasondf1cutoffs { get; set; }
    }

    public class Mythic
    {
        public int progress { get; set; }
        public int totalKills { get; set; }

        [JsonPropertyName("kazzara-the-hellforged")]
        public KazzaraTheHellforged kazzarathehellforged { get; set; }

        [JsonPropertyName("assault-of-the-zaqali")]
        public AssaultOfTheZaqali assaultofthezaqali { get; set; }

        [JsonPropertyName("the-amalgamation-chamber")]
        public TheAmalgamationChamber theamalgamationchamber { get; set; }

        [JsonPropertyName("the-forgotten-experiments")]
        public TheForgottenExperiments theforgottenexperiments { get; set; }

        [JsonPropertyName("rashok-the-elder")]
        public RashokTheElder rashoktheelder { get; set; }
        public Gnarlroot gnarlroot { get; set; }

        [JsonPropertyName("igira-the-cruel")]
        public IgiraTheCruel igirathecruel { get; set; }
        public Volcoross volcoross { get; set; }

        [JsonPropertyName("council-of-dreams")]
        public CouncilOfDreams councilofdreams { get; set; }

        [JsonPropertyName("larodar-keeper-of-the-flame")]
        public LarodarKeeperOfTheFlame larodarkeeperoftheflame { get; set; }

        [JsonPropertyName("nymue-weaver-of-the-cycle")]
        public NymueWeaverOfTheCycle nymueweaverofthecycle { get; set; }
        public Eranog eranog { get; set; }

        [JsonPropertyName("kurog-grimtotem")]
        public KurogGrimtotem kuroggrimtotem { get; set; }

        [JsonPropertyName("the-primal-council")]
        public ThePrimalCouncil theprimalcouncil { get; set; }

        [JsonPropertyName("sennarth-the-cold-breath")]
        public SennarthTheColdBreath sennarththecoldbreath { get; set; }
        public Terros terros { get; set; }
    }

    public class Normal
    {
        public int progress { get; set; }
        public int totalKills { get; set; }

        [JsonPropertyName("kazzara-the-hellforged")]
        public KazzaraTheHellforged kazzarathehellforged { get; set; }

        [JsonPropertyName("assault-of-the-zaqali")]
        public AssaultOfTheZaqali assaultofthezaqali { get; set; }

        [JsonPropertyName("the-amalgamation-chamber")]
        public TheAmalgamationChamber theamalgamationchamber { get; set; }

        [JsonPropertyName("the-forgotten-experiments")]
        public TheForgottenExperiments theforgottenexperiments { get; set; }

        [JsonPropertyName("rashok-the-elder")]
        public RashokTheElder rashoktheelder { get; set; }

        [JsonPropertyName("the-vigilant-steward-zskarn")]
        public TheVigilantStewardZskarn thevigilantstewardzskarn { get; set; }
        public Magmorax magmorax { get; set; }

        [JsonPropertyName("echo-of-neltharion")]
        public EchoOfNeltharion echoofneltharion { get; set; }

        [JsonPropertyName("scalecommander-sarkareth")]
        public ScalecommanderSarkareth scalecommandersarkareth { get; set; }
        public Gnarlroot gnarlroot { get; set; }

        [JsonPropertyName("igira-the-cruel")]
        public IgiraTheCruel igirathecruel { get; set; }
        public Volcoross volcoross { get; set; }

        [JsonPropertyName("council-of-dreams")]
        public CouncilOfDreams councilofdreams { get; set; }

        [JsonPropertyName("larodar-keeper-of-the-flame")]
        public LarodarKeeperOfTheFlame larodarkeeperoftheflame { get; set; }

        [JsonPropertyName("nymue-weaver-of-the-cycle")]
        public NymueWeaverOfTheCycle nymueweaverofthecycle { get; set; }

        [JsonPropertyName("tindral-sageswift-seer-of-the-flame")]
        public TindralSageswiftSeerOfTheFlame tindralsageswiftseeroftheflame { get; set; }
        public Smolderon smolderon { get; set; }

        [JsonPropertyName("fyrakk-the-blazing")]
        public FyrakkTheBlazing fyrakktheblazing { get; set; }
        public Eranog eranog { get; set; }

        [JsonPropertyName("kurog-grimtotem")]
        public KurogGrimtotem kuroggrimtotem { get; set; }

        [JsonPropertyName("the-primal-council")]
        public ThePrimalCouncil theprimalcouncil { get; set; }

        [JsonPropertyName("sennarth-the-cold-breath")]
        public SennarthTheColdBreath sennarththecoldbreath { get; set; }

        [JsonPropertyName("dathea-ascended")]
        public DatheaAscended datheaascended { get; set; }

        [JsonPropertyName("broodkeeper-diurna")]
        public BroodkeeperDiurna broodkeeperdiurna { get; set; }
        public Terros terros { get; set; }

        [JsonPropertyName("raszageth-the-stormeater")]
        public RaszagethTheStormeater raszageththestormeater { get; set; }
    }

    public class NymueWeaverOfTheCycle
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class Profile
    {
        public int id { get; set; }
        public string activity_type { get; set; }
        public DateTime published_at { get; set; }
        public DateTime throttled_published_at { get; set; }
        public DateTime expires_at { get; set; }
        public string caption { get; set; }
        public bool? is_cross_realm_allowed { get; set; }
        public bool? is_realm_transfer_allowed { get; set; }
        public bool? is_faction_transfer_allowed { get; set; }
        public object patronLevel { get; set; }
        public CommitmentDays commitment_days { get; set; }
        public CommitmentHours commitment_hours { get; set; }
        public TotalHoursPerWeek total_hours_per_week { get; set; }
        public List<int> languages { get; set; }
        public bool isClaimed { get; set; }
        public string language { get; set; }
        public string timezone { get; set; }
    }

    public class Raiding
    {
        [JsonPropertyName("aberrus-the-shadowed-crucible")]
        public AberrusTheShadowedCrucible aberrustheshadowedcrucible { get; set; }

        [JsonPropertyName("amirdrassil-the-dreams-hope")]
        public AmirdrassilTheDreamsHope amirdrassilthedreamshope { get; set; }

        [JsonPropertyName("vault-of-the-incarnates")]
        public VaultOfTheIncarnates vaultoftheincarnates { get; set; }
    }

    public class RashokTheElder
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class RaszagethTheStormeater
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class Realm
    {
        public string name { get; set; }
        public string slug { get; set; }
        public int id { get; set; }
        public int connectedRealmId { get; set; }
        public object altName { get; set; }
        public string altSlug { get; set; }
        public string locale { get; set; }
        public bool isConnected { get; set; }
        public string realmType { get; set; }
    }

    public class Recruitment
    {
        public GuildRaids guild_raids { get; set; }
        public object guild_pvp { get; set; }
        public object guild_social { get; set; }
        public object guild_mplus { get; set; }
        public TeamMplus team_mplus { get; set; }
    }

    public class RecruitmentProfile
    {
        public string activity_type { get; set; }
        public string entity_type { get; set; }
        public int recruitment_profile_id { get; set; }
    }

    public class Region
    {
        public string short_name { get; set; }
        public string slug { get; set; }
        public string name { get; set; }
    }

    public class Region3
    {
        public string name { get; set; }
        public string slug { get; set; }
        public string short_name { get; set; }
    }

    public class Requirements
    {
        [JsonPropertyName("20952")]
        public _20952 _20952 { get; set; }
    }

    public class Root
    {
        public Total total { get; set; }
        public List<Match> matches { get; set; }
    }

    public class ScalecommanderSarkareth
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class Schedule
    {
        [JsonPropertyName("0")]
        public _0 _0 { get; set; }

        [JsonPropertyName("1")]
        public _1 _1 { get; set; }

        [JsonPropertyName("2")]
        public _2 _2 { get; set; }

        [JsonPropertyName("3")]
        public _3 _3 { get; set; }

        [JsonPropertyName("4")]
        public _4 _4 { get; set; }

        [JsonPropertyName("5")]
        public _5 _5 { get; set; }

        [JsonPropertyName("6")]
        public _6 _6 { get; set; }
    }

    public class SeasonDf1
    {
        public All all { get; set; }
        public Dps dps { get; set; }
        public Tank tank { get; set; }
        public Healer healer { get; set; }
    }

    public class SeasonDf1Cutoffs
    {
        public All all { get; set; }
        public Dps dps { get; set; }
        public Healer healer { get; set; }
        public Tank tank { get; set; }
    }

    public class SeasonDf1Post
    {
        public All all { get; set; }
        public Dps dps { get; set; }
        public Healer healer { get; set; }
        public Tank tank { get; set; }
    }

    public class SeasonDf2
    {
        public All all { get; set; }
        public Dps dps { get; set; }
        public Tank tank { get; set; }
        public Healer healer { get; set; }
    }

    public class SeasonDf2BreakTheMeta
    {
        public All all { get; set; }
        public Dps dps { get; set; }
    }

    public class SeasonDf2Cutoffs
    {
        public All all { get; set; }
        public Dps dps { get; set; }
        public Healer healer { get; set; }
    }

    public class SeasonDf2Post
    {
        public All all { get; set; }
        public Dps dps { get; set; }
    }

    public class SeasonDf2Post1015
    {
        public All all { get; set; }
        public Dps dps { get; set; }
        public Tank tank { get; set; }
        public Healer healer { get; set; }
    }

    public class SeasonDf2Post1017
    {
        public All all { get; set; }
        public Dps dps { get; set; }
        public Healer healer { get; set; }
    }

    public class SeasonDf3
    {
        public All all { get; set; }
        public Dps dps { get; set; }
        public Tank tank { get; set; }
        public Healer healer { get; set; }
    }

    public class SennarthTheColdBreath
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class Smolderon
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class Spec
    {
        public int id { get; set; }
        public string name { get; set; }
        public string slug { get; set; }
        public int class_id { get; set; }
        public string role { get; set; }
        public bool is_melee { get; set; }
        public string patch { get; set; }
    }

    public class SubRegion
    {
        public string name { get; set; }
        public string slug { get; set; }
        public string short_name { get; set; }
        public List<Region> regions { get; set; }
    }

    public class Tank
    {
        public int score { get; set; }
        public BestRun bestRun { get; set; }
    }

    public class TeamMplus
    {
        public Profile profile { get; set; }
        public Requirements requirements { get; set; }
        public List<int> tags { get; set; }
        public Schedule schedule { get; set; }
        public MainCharacter main_character { get; set; }
        public int additional_character_count { get; set; }
        public List<object> all_character_class_ids { get; set; }
        public List<int> all_character_mainspec_ids { get; set; }
        public List<object> all_character_offspec_ids { get; set; }
        public List<int> all_character_spec_pairs { get; set; }
    }

    public class Terros
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class TheAmalgamationChamber
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class TheForgottenExperiments
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class ThePrimalCouncil
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class TheVigilantStewardZskarn
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class TindralSageswiftSeerOfTheFlame
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

    public class Total
    {
        public int value { get; set; }
        public string relation { get; set; }
    }

    public class TotalHoursPerWeek
    {
        public int gte { get; set; }
        public int lte { get; set; }
    }

    public class VaultOfTheIncarnates
    {
        public Normal normal { get; set; }
        public Heroic heroic { get; set; }
        public Mythic mythic { get; set; }
        public int? aotcWeek { get; set; }
    }

    public class Volcoross
    {
        public int killedRaidWeek { get; set; }
        public int totalKills { get; set; }
    }

