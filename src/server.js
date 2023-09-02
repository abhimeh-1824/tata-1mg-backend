const app = require("./index");
const connect = require("./config/db.js");

app.listen(8085, async function () {
  try {
    await connect();
    console.log("listening 8085");
  } catch (err) {
    console.log(err);
  }
});
