const express = require('express');
// const User = require('./models/airtime');
const app = express();
// const  mongoose = require('mongoose');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const connectDb = require("./db/conn")
connectDb();

app.use(express.json());
app.use(cors());

const airtime = require("./routes/airtime");
const tvCable = require("./routes/tvcable");
const dues = require("./routes/dues");
const electricity = require("./routes/electricity");
const education = require("./routes/education");
const jamb = require('./routes/jamb');
const auth = require('./routes/auth');
const nonRegister = require("./routes/nonregister")
const data = require("./routes/data");

app.use("/api/v1/airtime/", airtime)
app.use("/api/v1/data/", data)
app.use("/api/v1/tvcable/", tvCable)
app.use("/api/v1/dues/", dues)
app.use("/api/v1/electricity/", electricity)
app.use("/api/v1/education/", education)
app.use("/api/v1/jambfee/", jamb)
app.use("/api/v1/auth/", auth);
app.use("/api/v1/nonRegister/", nonRegister)


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
// baba@gmail.com  babaA@123