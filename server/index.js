const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');
const methodOverride = require('method-override');
const app = express();

app.use(express.urlencoded( { extended: true } ));
app.use(methodOverride('_method'));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running!');
});