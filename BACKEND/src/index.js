const express = require("express");

const cityRouter = require("./routes/citiesRoutes");
const loginRouter = require("./routes/loginRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para permitir solicitudes CORS desde cualquier origen
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
app.use(express.json());
app.use("/cities", cityRouter);
app.use("/login", loginRouter);


app.listen(PORT, () => {
    console.log();
});