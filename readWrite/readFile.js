var fs = require('fs');
var allGames, 
    qtyWins = 0, 
    qtyLoss = 0, 
    maxWins = 0, 
    maxLoss = 0,
    flagWin;

fs.readFile('log.txt', 'utf8',(err, data) => {

	if (err) throw err;
	allGames = data.split('\r');
	allGames = allGames.filter(function(row) {
		return row.length > 0;
	});
	allGames.forEach( function (items) {
		var item = items.split('=');
		if (item[0] == item[1]) {
			if(flagWin) {
				maxWins ++;
			}
			qtyWins = qtyWins + 1;
			flagWin = true;
		} else {
			if(!flagWin) {
				maxLoss ++;
			}
			qtyLoss = qtyLoss + 1;
			flagWin = false;
		}
	})
	console.log('1. общее количество партий: ' + allGames.length);
	console.log('2. общее выигранных партий: ' + qtyWins);
	console.log('3. общее проигранных партий: ' + qtyLoss);
	console.log('4. максимальное число побед подряд: ' + maxWins);
	console.log('5. максимальное число проиграшей подряд: ' + maxLoss);
});
