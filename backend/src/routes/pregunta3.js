const {Router}=require('express');
const router = Router();

const estControl = require('../controllers/pregunta3');

//router.route('/').get(getEstudiantes)
router.route('/')
    .get(estControl.getKitchen)

module.exports = router