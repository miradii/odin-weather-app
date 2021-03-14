import Mustache from 'mustache'
const template = `<h2 id="city-name-display">{{city}}</h2>
				<div id="weather-info">
					<div id="main-weather"><span id="weather-temp"> {{mainTemp}}&degC  </span></div>

					<div id="secondary-weather"><div id="feels-like">مانند:{{feelsLike}}&deg</div> <div id="min">حداقل:&deg {{tempMin}}</div><div id="max">حداکثر:&deg {{tempMax}}</div></div>
					<img src="{{icon}}" alt="">
				</div>
				<div id="weather-description">{{description}}</div>
				<div id="extra-info">
					<span id="pressure">فشار هوا: {{pressure}}</span>
					<span id="humidity">رطوبت هوا: {{humidity}}</span>
				</div>
			</div>
	`;
const errorTmplate = `<h2 id="error-message">{{message}}<h2>`;
function weatherTemplate(){
	return template
}

function renderWeather(view){
	return Mustache.render(template, view);
}

function renderError(view){
	return Mustache.render(errorTmplate, view);
}
export { weatherTemplate,renderWeather ,renderError}
