
const {json} = require ('body-parser');
const cors = require ('cors');
const express = require ('express');
const massive = require ('massive');
require ('dotenv').config();
const mainCtrl = require('./controllers/mainCtrl');


const CONNECTION_STRING = process.env;

const app = express();

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
.then(dbInstance =>{
    app.set('db', dbInstance)
})
.catch(console.log);

app.get('/api/bin/:id', mainCtrl.binGet),
app.post('/api/bin/:id', mainCtrl.binCreator),
app.put('/api/bin/:id', mainCtrl.binUpdate),
app.delete('/api/bin/:id', mainCtrl.binDelete)


app.listen(process.env.PORT || 3001, ()=>{
    console.log(`Do you hear what I hear, ${process.env.PORT || 3001}?`);
});