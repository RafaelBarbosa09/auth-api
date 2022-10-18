const express = require("express");

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

app.post('/api/users', async (req, res) => {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
        return res.status(400).json({
            message: 'all fields are required',
        });
    }

    const user = await User.create({
        email,
        name,
        password
    });

    return res.status(201).json({ user });

});

app.listen(PORT, () => {
    console.info(`Server running on port ${PORT}`);
});