const express = require("express");
const routerPhoto = require("./src/routers/Photos");
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(routerPhoto);

app.listen(9999, () => {
  console.log(`Port berjalan pada 9999`);
});
