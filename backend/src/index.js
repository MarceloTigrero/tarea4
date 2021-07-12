const app = require('./app.js');
//const db = require('./controllers/database.js');
const db = require('./controllers/database');

const port = app.get('port');
const host = app.get('host');
//db.init();



app.listen(port, () => {
    console.log(`Iniciar Página web con http://${host}:${port}`);
})

