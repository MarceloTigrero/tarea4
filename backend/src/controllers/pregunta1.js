const db = require('./database.js');
const estControl = {};

estControl.getTotal = (req, res) => {

    //var arr = ["use1", "gen", "Houseoverall", "Dishwasher", "Furnace1", "Furnace2", "Homeoffice", "Fridge", "Winecellar", "Garagedoor", "Kitchen12", "Kitchen14", "Kitchen38", "Microwave", "Livingroom"]
    db.query("SELECT SUM(use1) use1,SUM(gen) gen, SUM(Houseoverall) Houseoverall, SUM(Dishwasher) Dishwasher, SUM(Furnace1) Furnace1, SUM(Furnace2) Furnace2, SUM(Homeoffice) Homeoffice, SUM(Fridge) Fridge, SUM(Winecellar) Winecellar, SUM(Garagedoor) Garagedoor, SUM(Kitchen12) Kitchen12, SUM(Kitchen14) Kitchen14, SUM(Kitchen38) Kitchen38, SUM(Microwave) Microwave, SUM(Livingroom) Livingroom FROM smarthome", (err, result, fields) => {
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.send(result);
    });
}
module.exports = estControl;