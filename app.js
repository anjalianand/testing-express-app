const express = require("express");
app = express();

app.get("/", (req, res) => {
  res.send("testing");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
