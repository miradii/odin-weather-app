import {buttonEvent} from "./index.js"
const cityName = document.querySelector("#city-name");
const submitButton = document.querySelector("#submit-button");
const weatherTile = document.querySelector("#weather-tile");

const getInputCity = () => cityName.value.trim();
function addEvents(){

	submitButton.addEventListener("click", () => {buttonEvent(getInputCity());console.log(getInputCity())});

}
function showWeather(renderedElement){
	weatherTile.style.display = "block"
	weatherTile.innerHTML = renderedElement;
}

function showError(errorElement){
	weatherTile.style.display = "block";
	weatherTile.innerHTML = errorElement;

}

export {addEvents,showWeather,showError}
