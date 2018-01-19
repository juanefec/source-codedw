const scrape = require('website-scraper');
let path = require('path');
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' URL');
    process.exit(1);
}
let url = process.argv[2];
var splited = url.split(".");

let options = {
    urls: [url],
    directory: `./pagesDownloaded/${splited[0]}/`,
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});