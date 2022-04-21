const express = require("express");
const router = require("./routes/index");
const cors = require("cors");
const app = express();

app.use(cors());
app.use("/", router);

app.listen(process.env.PORT || 8000, () => {
  console.log("running at 8000");
});
