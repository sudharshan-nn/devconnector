const express = require('express');
const app = express();
const connectDB = require('./config/db');

//connect Database
connectDB();

//init Middleware
app.use(express.json());

const PORT = process.env.PORT || 5000;

//Define Routes
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
