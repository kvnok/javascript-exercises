const palindromes = function (str) {
	// Remove non-alphanumeric characters and convert to lowercase
	const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
	
	// Reverse the cleaned string
	const reversedStr = cleanedStr.split("").reverse().join("");
	
	// Check if the cleaned string is equal to the reversed string
	return cleanedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
