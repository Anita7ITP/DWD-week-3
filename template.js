var data = {people: [{name: "Amanda", other: "Kate"}, {name: "Steven", other: "King"}{name: "Kim", other: "Klein"},{name: "Anita", other: "Ruth"},{name: "Judith", other: "Ben"},{name: "Neil", other: "Omarion"},]};


app.get('/templatetest', function(req, res) {
	var data = {person: {name: "Amanda", other: "Kate"}};
    res.render('template.ejs', data);
});
