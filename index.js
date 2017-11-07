const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  port = 3000,
  app = express(),
  massive = require("massive"),
  config = require("./server/config");

app.use(cors());
app.use(bodyParser.json());
app.use("/", express.static(__dirname));
massive(config.postgres)
  .then(function(dbInstance) {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.post("/api/blog", function(req, res) {
  var { title, body } = req.body;
  var date = Date();
  req.app
    .get("db")
    .run(
      "insert into blogs (title, body, date) values ($1, $2, $3); select * from blogs",
      [title, body, date]
    )
    .then(blog => {
      return res.status(200).json(blog);
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

app.get("/api/blog", function(req, res) {
  req.app
    .get("db")
    .run("select * from blogs")
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

app.listen(port, function() {
  console.log("Server listening on port", port);
});
