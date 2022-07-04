var fs = require("fs");
var bioData = {
    name: "Prashant SL",
    age: 21,
    school: "Giants English Medium School"
}
var jsonData = JSON.stringify(bioData);

fs.writeFileSync("data.json", jsonData, () => {
    console.log("Added to the new page");
})

fs.readFile("data.json", "utf-8", (err, data) => {
    const res = JSON.parse(data);
    console.log('res:', res)
})