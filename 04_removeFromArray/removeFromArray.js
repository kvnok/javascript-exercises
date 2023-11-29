const removeFromArray = function(arr, ...args) {
	let newArr = arr;
	for (var arg of args) {
		newArr = newArr.filter(item => item !== arg);
	}
	return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
