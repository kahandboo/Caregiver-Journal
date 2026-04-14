const express = require('express');
const app = express();

app.use(express.json());

const eventRoutes = require('./routes/events');
app.use('/events', eventRoutes);

app.get('/', (req, res) => {
  res.send('서버 정상 작동');
});

app.listen(3000, () => {
  console.log('서버 실행: http://localhost:3000');
});