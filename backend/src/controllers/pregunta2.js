const db = require('./database.js');
const estControl = {};

estControl.getMayorRefri = (req, res) => {

    db.query("SELECT Fridge FROM smarthome ORDER BY Fridge DESC LIMIT 3,23 ;", (err, result, fields) => {
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.send(result);
    });
}
module.exports = estControl;