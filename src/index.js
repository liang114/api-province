const express = require("express");
const app = express();
const mockData = require("../src/mockProvince.json");
const port = 3000;
const cors = require("cors");
const apicache = require("apicache");


const cache = apicache.middleware;

app.use(cache("10 minutes"));

const allowedOrigins = [
  "https://dev-wcf.soilfish.co/",
  "http://localhost:3000",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: false,
  optionsSuccessStatus: 204,
};



app.use(cors(corsOptions));

app.get("/api/v1/address", (req, res) => {
    
  res.send(mockData);
});

app.listen(port, () => {
  console.log(`Server start listening on port ${port}`);
});
