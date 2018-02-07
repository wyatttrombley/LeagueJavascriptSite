/**
 * 
 */
key = "RGAPI-ab842d40-3687-4fd0-9d03-2b929c3d2f8a";


function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function freetoPlay()
{
	
	data = httpGet("https://na1.api.riotgames.com/lol/platform/v3/champions?freeToPlay=true&api_key=RGAPI-ab842d40-3687-4fd0-9d03-2b929c3d2f8a");
	 
	 parsed = JSON.parse(data)
	 for (var k in parsed.champions){
	 
		 
		 championPic = JSON.parse(httpGet("https://na1.api.riotgames.com/lol/static-data/v3/champions/" + parsed.champions[k].id + "?locale=en_US&tags=image&api_key=" + key));
		 picURL = "https://ddragon.leagueoflegends.com/cdn/7.10.1/img/champion/" + championPic.image.full;
		 document.getElementById("demo").innerHTML += championPic.image.full  + " ";
		 var img = document.createElement("img");
		 img.src = picURL;
		 document.body.appendChild(img);
	 }
	 
		 
	
}