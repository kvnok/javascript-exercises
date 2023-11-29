const findTheOldest = function(people) {
	return people.reduce((oldest, current) => {
		const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
		const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
		return oldestAge < currentAge ? current : oldest;
	});
};

function getAge(birthYear, deathYear) {
	if (!deathYear) {
		deathYear = new Date().getFullYear();
	}
	return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
