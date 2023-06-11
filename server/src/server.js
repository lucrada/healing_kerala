const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connect } = require('./config/db_config');
require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();

(async () => {
    await connect();
    app.use(cors({ origin: 'http://localhost:3001', credentials: true }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use("/cms", require("./routes/cms.route.js"));

    app.get("/", (_, res) => {
        res.send("Healing Kerala");
    });
    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    })

})();