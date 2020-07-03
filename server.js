var express = require('express');

const Datastore = require('nedb');
var app = express();

app.listen(3000, () => {
  console.log('listening')
});

app.use(express.static('public'));
app.use(express.json({
  limit: '1mb'
}));

let database = new Datastore('database.db');
database.loadDatabase();

app.get('/api', (req, res) => {

  database.find({}, (err, data) => {
    if (err) {
      res.end();
      return;
    }
    res.json(data);
  })
  // res.json({
  //   test: 123
  // });
});

app.post('/api', (req, res) => {
  console.log(req.body);
  const data = req.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);

  res.json({
    status: 'success',
    timestamp: timestamp,
    mood: data.mood,
    latitude: data.lat,
    longitude: data.lon
  })
});