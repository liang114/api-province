const express = require("express");
const app = express();
const mockData = require("../src/mockProvince.json");
const port = 3000;
const cors = require("cors");
const apicache = require("apicache");


const cache = apicache.middleware;
app.use(cache("10 minutes"));
app.use(express.json());



app.use(cors());


app.get("/api/v1/address", (_req, res) => {
  res.status(200).json(mockData);
});


app.listen(port, () => {
  console.log(`Server start listening on port ${port}`);
});
