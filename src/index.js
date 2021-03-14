import { addEvents, showWeather ,showError} from "./DomController.js";
import { parseWeather } from "./WeatherParser";
import { getWeather } from "./WeatherService";
import { renderError, renderWeather } from "./Templates";
import Mustache from "mustache";
import { compose } from 'ramda';
const buttonEvent =   (cityName) => {
	getWeather(cityName).then(parseWeather).then(renderWeather).then(showWeather).catch( error => handleError({message:error.message}));
	
}

const handleError = compose(showError,renderError);
addEvents();
const view = {
	mainTemp: 33,
};
const weatherTile = document.querySelector("#weather-tile");
const template = weatherTile.innerHTML;
var output = Mustache.render(template, view);
console.log(output);
weatherTile.innerHTML = output;
export { buttonEvent };
