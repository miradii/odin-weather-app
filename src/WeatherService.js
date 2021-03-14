const API_KEY = "073803b782a4087b1805236412bd51e6";
const ICON_URL = "https://openweathermap.org/img/wn/"

async function getWeather(cityName){

		
			const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=fa&appid=${API_KEY}`;
			const weather =  await fetch(url,{method: "GET"});
				const  weatherJson = await weather.json();
			if(weather.ok){
				return weatherJson;
			}else{
					
					throw new Error(weatherJson.message);
			}

}

function checkError(response){
	
}

function buildIconSrc(iconId){
	return ICON_URL + iconId + "@2x.png"; 

}

export {buildIconSrc,getWeather};
