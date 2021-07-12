const {Router}=require('express');
const router = Router();

const estControl = require('../controllers/pregunta1');

//router.route('/').get(getEstudiantes)
router.route('/')
    .get(estControl.getTotal);

module.exports = router;
