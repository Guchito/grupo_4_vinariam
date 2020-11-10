const mainController = {
	index: (req, res) => {
        res.render('index');
    },
    enter: (req, res) => {
        res.render('enter');
    }
}


module.exports = mainController;


