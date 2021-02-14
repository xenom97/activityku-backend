require('dotenv').config();

const app = require('express')();
const middleware = require('./app/config/middleware.config');
middleware(app);

// simple route
app.get('/', (_, res) => {
  res.json({ message: 'Welcome to activityku application.' });
});

// routes
const routes = require('./app/routes');
app.use('/api', routes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${PORT}.`);
});

const db = require('./app/models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });
