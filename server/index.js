require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.get("/all-news", (req, res) => {
  let pageSize = parseInt(req.query.pageSize) || 0;
  let page = parseInt(req.query.page) || 0;
  if (pageSize === undefined || page === undefined || page <= 0) {
    page = 1;
    pageSize = 80;
  }

  let url = `https://newsapi.org/v2/everything?q=page=${page}&pageSize=${pageSize}&apiKey=${process.env.API_KEY}`;
  axios
    .get(url)
    .then((response) => {
      if (response.data.totalResults > page) {
        res.json({
          status: 200,
          success: true,
          message: "Successfully fetched the data",
          data: response.data,
        });
      } else {
        res.json({
          status: 200,
          success: true,
          message: "No more results to show",
        });
      }
    })
    .catch(function (error) {
      // handle error
      res.json({
        status: 500,
        success: false,
        message: "Failed to fetch Data form the API",
        error: error,
      });
    });
});
app.options("/top-headlines", cors());

//
app.get("/full-blog", (req, res) => {
  let title = req.query.title;

  let url = `https://newsapi.org/v2/everything?q=title=${title}&apiKey=${process.env.API_KEY}}`;
  axios
    .get(url)
    .then((response) => {
      if (response.data.totalResults > 0) {
        res.json({
          status: 200,
          success: true,
          message: "Successfully fetched the data",
          data: response.data,
        });
      } else {
        res.json({
          status: 200,
          success: true,
          message: "No more results to show",
        });
      }
    })
    .catch(function (error) {
      // handle error
      res.json({
        status: 500,
        success: true,
        message: "Failed to fetch Data form the API",
        error: error,
      });
    });
});

app.options("/full-blog", cors());
//

app.listen(3000, function () {
  console.log("Server is running at port 3000");
});
