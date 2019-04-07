require("dotenv").config();

const shortid = require("shortid");
const validUrl = require("valid-url");

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/short-url", {
  useNewUrlParser: true
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connection active");
});

const shortURL = require("./models/shortURL");
const Counter = require("./models/counter");
const errorUrl = "/error";

//

Math.random()
  .toString(36)
  .slice(2, 7);
// CREATE FIVE LETTER HASH //

app.use(express.static(path.join(__dirname, "client/build")));

app.post("/api/shorten", async (req, res, next) => {
  console.log(req.body.url);
  // link to front //
  const { originalUrl, shortBaseUrl } = req.body;

  shortURL.findOne(
    { originalUrl: urlData },

    (err, found) => {
      if (found) {
        console.log("entry found in db");
        res.send({
          originalUrl: urlData,
          hash: btoa(doc._id),
          status: 200
        });
      } else {
        console.log("entry NOT found in db, saving new");
        var url = new shortURL({
          originalUrl: urlData
        });
        url.save(function(err) {
          if (err) return console.error(err);
          res.send({
            url: urlData,
            hash: btoa(url._id),
            status: 200
          });
        });
      }
    }
  );
});

app.get("/api/short-url/:code", async (req, res) => {
  const urlCode = req.params.code;
  const item = await shortURL.findOne({ urlCode: urlCode });
  if (item) {
    return res.redirect(item.originalUrl);
  } else {
    return res.redirect(errorUrl);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "client/build/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  console.log(`Current environment is ${process.env.NODE_ENV}`);
});
