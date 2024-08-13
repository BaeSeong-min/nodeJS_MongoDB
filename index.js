const express = require("express");
const app = express();
const port = 5000;

// 나의 어플리케이션과 몽고DB 연결
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://seongminBae:Sm25224046!@mincluster.fr7ra.mongodb.net/?retryWrites=true&w=majority&appName=minCluster");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
                                                                                                                                                                                                                                                                          