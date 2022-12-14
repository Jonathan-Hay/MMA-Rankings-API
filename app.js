const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

const url = "https://www.ufc.com/rankings";

app.get("/mma-rankings", (req, res) => {
  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      var top_fighters = [];
      $(".views-row a", html).each(function () {
        top_fighters.push($(this).text());
      });

      top_fighters = top_fighters.slice(0, 10);

      res.json(top_fighters);
    })
    .catch((err) => console.log(`Error: ${err}`));
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
