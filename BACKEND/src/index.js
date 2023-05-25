const express = require("express");

const cityRouter = require("./routes/citiesRoutes");
const loginRouter = require("./routes/loginRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/cities", cityRouter);
app.use("/login", loginRouter);


app.listen(PORT, () => {
    console.log();
});