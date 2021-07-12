const db = require('./database.js');
const estControl = {};

estControl.getKitchen= (req, res) => {

    db.query("SELECT Kitchen12, Kitchen14, Kitchen38 FROM smarthome ORDER BY use1 DESC LIMIT 10", (err, result, fields) => {
            if (err) {
                res.status(500).send(err);
                console.log(err);
                return;
            }
            res.send(result);
        });
    }
    module.exports = estControl;
    
