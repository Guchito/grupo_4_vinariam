const mainController = {
	index: (req, res) => {
        res.render('index');
    },
    enter: (req, res) => {
        res.render('enter');
    },
    error: (req, res) => {
        res.render('error');
    }
}


module.exports = mainController;


