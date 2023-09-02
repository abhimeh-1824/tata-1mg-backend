const app = require("./src/index");
const connect = require("./src/config/db.js");

app.listen(8085, async function () {
  try {
    await connect();
    console.log("listening 8085");
  } catch (err) {
    console.log(err);
  }
});
