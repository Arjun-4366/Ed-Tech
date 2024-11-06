const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors({
    origin:process.env.FRONT_URL
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRoute = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoute')
const PORT = process.env.PORT || 4004;

app.use('/', userRoute);
app.use('/', adminRoutes);

app.listen(PORT, () => {
  console.log('server is listening at', PORT);
});