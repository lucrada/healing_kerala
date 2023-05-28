const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("CMS")
})

router.use("/user", require("./user.route"))
router.use("/admin", require("./admin.route"))

module.exports = router