var admin = require("firebase-admin");

var serviceAccount = require("../service/serviceKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://yoonstagram-p1-default-rtdb.firebaseio.com",
});

module.exports = admin;
