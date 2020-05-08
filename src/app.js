const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");

app.use(cors({ optionSuccessStatus: 200 }));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

/* ================ Routes ================ */
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/api/fileanalyse", multer({}).single('upfile'), (req, res) => {
  res.json({
    name: req.file.originalname,
    size: req.file.size
  });
});

app.listen(port, () => console.log(`Your app is listening on port ${port}`));