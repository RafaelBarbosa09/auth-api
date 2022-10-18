const express = require("express");
const userRoutes = require("./routes/UserRoutes.js");

require('dotenv').config();
require('./database/index');

const app = express();
app.use(express.json());
app.use(userRoutes);

const PORT = process.env.API_PORT || 3000;

app.listen(PORT, () => {
    console.info(`Server running on port ${PORT}`);
});