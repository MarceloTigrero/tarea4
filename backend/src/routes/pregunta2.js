const {Router}=require('express');
const router = Router();

const estControl = require('../controllers/pregunta2');

//router.route('/').get(getEstudiantes)
router.route('/')
    .get(estControl.getMayorRefri)

module.exports = router