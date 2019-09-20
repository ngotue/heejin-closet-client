const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist/"));

const port = process.env.PORT || 8081;
app.get(/.*/, (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
