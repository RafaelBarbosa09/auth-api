const express = require("express");
require('./database/index');

const User = require("./models/User.js");

const userRoutes = require("./routes/UserRoutes.js");

const app = express();
app.use(express.json());
app.use(userRoutes);

const env = process.env;
const PORT = env.PORT || 3000;

app.get('/api/status', (req, res) => {
    return res.status(200).json({
        service: 'AUTH-API',
        status: 'up',
        httpStatus: 200
    });
});

app.listen(PORT, () => {
    console.info(`Server running on port ${PORT}`);
});