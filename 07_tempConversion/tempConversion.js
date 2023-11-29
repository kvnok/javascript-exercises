const convertToCelsius = function(n) {
	return parseFloat(((n - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(n) {
	return parseFloat((n * 9/5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit
};
