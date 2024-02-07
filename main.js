const express = require("express");
const cors = require("cors");

const main = () => {
  const app = express();
  const PORT = 3002;
  const server = require("http").createServer(app);

  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.json());
  app.use(cors());

  app.use("/", require("./routes"));

  server.listen(PORT, () => {
    console.log("Express server listening on port " + PORT);
  });

  app.get("/", function (req, res) {
    res.send("hello world");
  });
};

main();
