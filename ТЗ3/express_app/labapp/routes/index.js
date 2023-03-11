var express = require('express');
var router = express.Router();

// Подключение контроллера с переменной, содержащей структуру навигационного меню
var main_controller = require('../controllers/mainController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Whitesquare',
    pname: 'HOME',
    subjs: [ "SUBJ_1", "SUBJ_2", "SUBJ_3", "SUBJ_4", "SUBJ_5" ],
    imgs: [ "img1.jpg", "img2.jpg" ],
    navmenu: main_controller.navmenu } );
});

module.exports = router;
