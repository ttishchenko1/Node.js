var request = require('request');
var cheerio = require('cheerio');
var url = 'http://censor.net.ua/news/all';

// scrape news
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {

  	$ = cheerio.load(body);
  	var article = $('.anounce a');

  	for (var i = 1; i < 11; i++) {
  		console.log(i + '. ' +article.eq(i).text());
  	}
    
  } else {
  	console.log('Status code: ', response.statusCode);
  }
});

// test. scarpe title 
var url = 'https://learn.javascript.ru/array-iteration';

request(url, function (error, response, header) {
  if (!error && response.statusCode == 200) {

  	$ = cheerio.load(header);

    console.log($('.main__header-title').text());
  }
});