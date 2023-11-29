const reverseString = function(s) {
	var slen = s.length;
	var res = '';
	while (slen--) {
		res += s[slen];
	}
	return res;
};

// Do not edit below this line
module.exports = reverseString;
