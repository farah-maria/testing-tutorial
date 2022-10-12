function filterByTerm(inputArr, searchTerm) {
    if (!searchTerm) throwError("searchTerm cannot be empty");
    if (!inputArr.length) throw Error("inputArray cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement) {
        return arrayElement.url.match(regex);
    });
}

module.exports = filterByTerm;