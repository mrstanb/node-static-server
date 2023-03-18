const express = require("express");
const app = express();
const PORT = 5050;

app.use(
  express.static("public", {
    setHeaders: (res, path) => {
      res.set("Content-Disposition", "attachment");
    },
  })
);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
