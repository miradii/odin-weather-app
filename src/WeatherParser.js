import { buildIconSrc } from './WeatherService'
function parseWeather(openWeatherJson){
	return {
		city: openWeatherJson['name'],
		description: openWeatherJson['weather'][0]['description'],
		icon:buildIconSrc(openWeatherJson['weather'][0]['icon']),
		mainTemp:openWeatherJson['main']['temp'],
		feelsLike:openWeatherJson['main']['feels_like'],
		pressure: openWeatherJson['main']['pressure'],
		humidity: openWeatherJson['main']['humidity'],
		tempMax:  openWeatherJson['main']['temp_max'],
		tempMin: openWeatherJson['main']['temp_min'],
}

}

export {parseWeather} 
