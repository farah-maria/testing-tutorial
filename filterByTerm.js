

function filterByTerm(inputArr, searchTerm) {
    const regex = new RegExp(searchTerm, "i"); // The RegExp constructor creates a regular expression object for matching text with a pattern.
    return inputArr.filter(function(arrayElement) {
        return arrayElement.url.match(regex);
    });
}

module.exports = filterByTerm;