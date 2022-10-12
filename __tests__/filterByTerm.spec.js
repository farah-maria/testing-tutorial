//const filterByTerm = require("../filterByTerm");
const filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {
    test("it should filter by a search term ('uRl')", () => {
        const input = [                                 // input
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" }
                        ]; // defining the output we should expect

        expect(filterByTerm(input, "url")).toEqual(output); // test

        expect(filterByTerm(input, "URL")).toEqual(output); // new test
    });
});