const express = require("express")
const { createAdmin } = require("../controller/adminController")
const { createUser, getUser } = require("../controller/userController")
const { UpdateWebsite, createButon, getButton } = require("../controller/websiteController")
const router = express.Router()


router.get("/test", (req, res) => {
    res.status(200).send({ status: true, message: "this api is working fine" })
})
router.get("/", (req, res) => {
    res.status(200).send({ status: true, message: "this api is working fine" })
})


router.post("/admin", createAdmin)

router.post("/createUser", createUser)
router.get("/getUser", getUser)
router.put("/update", UpdateWebsite )
router.post("/createButton", createButon)
router.get("/getButton", getButton)


module.exports = router