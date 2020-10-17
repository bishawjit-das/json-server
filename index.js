var faker = require('faker');

var countryEvents = [];
for (var id = 0; id < 15; id++) {
    let name = faker.lorem.sentence(6, 3);
	let date = faker.date.past();
	date = `${date.getUTCDate()}/${date.getUTCMonth()+1}/${date.getFullYear()}`
    countryEvents.push({
        name: name,
		date: date
    });
}

let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var relatedArticles = [];
for (var id = 0; id < 15; id++) {
    let name = faker.lorem.sentence(6, 3);
    let subheader = faker.lorem.sentence(6, 3);
	let date = faker.date.past();
	let url = faker.internet.url();
	date = `${monthNames[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getFullYear()}`
    relatedArticles.push({
        headline: name,
		subheader: subheader,
		date: date,
		url: url
    });
}

module.exports = () => ({
    countryevents: countryEvents,
    relatedarticles: relatedArticles,
});
