var fs = require('fs');
var ask = require('prompt-autocomplete');
var pcValue = Math.floor(Math.random() * 2) + 1;
var states = [
        '1',
        '2'
    ];
var result;
 
ask("Pick a number:", states, function (err, answer) {

    if(answer == pcValue) {
    	result = 'Угадали!';
    } else {
    	result = 'Попробуй еще!'
    };

    console.log(result);
    console.log("Вы выбрали: " + answer);
    console.log("Компьютер выбрал: " + pcValue);

    fs.appendFile('log.txt', (answer + '='+ pcValue + '\r'), (err) => {
	if (err) throw err;
    });
	
});
