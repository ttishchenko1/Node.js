
var request = require('request');
var cheerio = require('cheerio');
var express = require('express');
var cons = require('consolidate'); // модуль для шаблонов
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));

app.engine('hbs', cons.handlebars);
 
// set .html as the default extension 
app.set('view engine', 'hbs');
app.set('views', __dirname); //+ '/views'

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
	res.render('index', {title:'Выбрать сайт:', news:[]});
});
app.post('/', function (req, res) {
	
	var getUrl = req.body.url;
	var getQty = Number(req.body.qty);
	var article;
	var data = [];
	request(getUrl, function (error, response, body) {


		if (!error && response.statusCode == 200) {
			$ = cheerio.load(body);

			if (getUrl === 'http://censor.net.ua/news/all') {
				article = $('.anounce a');
			} else if (getUrl === 'https://habrahabr.ru/top/') {
				article = $('.posts .content');				
			}; 
			
			for (var i = 1; i < getQty+1; i++) {
				data.push(i + '. ' +article.eq(i).text());
			}
			res.render('index', {title:getUrl, qtyArticle:getQty, news:data});

		} else {
			console.log('Status code: ', response.statusCode);
		}
	});



});


app.listen(8080);
console.log('Express server listening on port 8080');