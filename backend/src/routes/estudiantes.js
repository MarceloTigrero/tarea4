const {Router}=require('express');
const router = Router();

const estControl = require('../controllers/estudiantesControl.js');

//router.route('/').get(getEstudiantes)
router.route('/')
    .get(estControl.getTotal)

module.exports = router
