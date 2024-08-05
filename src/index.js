const express = require("express");
const app = express();
const mockData = require("../src/mockProvince.json");
const port = 3000;
const cors = require("cors");

const corsOptions = {
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow cookies to be sent
  optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.get("/api/v1/address", (req, res) => {
    
  res.send(mockData);
});

app.listen(port, () => {
  console.log(`Server start listening on port ${port}`);
});
