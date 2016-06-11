var sumName = "";

function summonerLookUp() {
    var SUMMONER_NAME = "Lico";

    var API_KEY = "4309d3ad-0cd4-46c3-b40a-5fceab0bd16c";
    var SUMMONER_ID = "";
    if (SUMMONER_NAME !== "") {

        $.ajax({
            url: 'https://na.api.pvp.net/api/lol/eune/v1.4/summoner/by-name/' + SUMMONER_NAME + '?api_key=' + API_KEY,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                var SUMMONER_NAME_NOSPACES = SUMMONER_NAME.replace(" ", "");

                SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();

                summonerLevel = json[SUMMONER_NAME_NOSPACES].summonerLevel;
                summonerID = json[SUMMONER_NAME_NOSPACES].id;
                SUMMONER_ID = summonerID;
                document.getElementById("sLevel").innerHTML = summonerLevel;
                document.getElementById("sID").innerHTML = summonerID;
                
                sumName = json[SUMMONER_NAME_NOSPACES].name;
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            }
        });
        $.ajax({
            url: 'https://na.api.pvp.net/api/lol/eune/v2.5/league/by-summoner/' + SUMMONER_ID + '?api_key=' + API_KEY,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                var SUMMONER_NAME_NOSPACES = SUMMONER_NAME.replace(" ", "");

                SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();

                sumID = json[SUMMONER_NAME_NOSPACES].playerOrTeamId;
                summonerRank = json[SUMMONER_NAME_NOSCAPES].division;
                document.getElementById("sDIV").innerHTML = SummonerRank;
                
                sumName = json[SUMMONER_NAME_NOSPACES].name;
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            }
        });
    } else {}
}

function Name() {
    alert(sumName);
}
