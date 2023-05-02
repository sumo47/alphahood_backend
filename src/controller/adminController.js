const adminModel = require('../model/adminModel')
const jwt = require('jsonwebtoken')

module.exports.createAdmin = async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    try {
        let data = req.body
        let { email, password } = data

        // if (Object.keys(data).length == 0) return res.status(400
        // ).send({ status: false, message: "Data not present" })

        let checkEmail = await adminModel.findOne({ email: email })

        if (!checkEmail) {
            let userData = await adminModel.create(data)

            let token = jwt.sign({ userId: userData._id }, 'secret code')
            return res.status(200).send({ status: true, token: token })

        } else {
            if (checkEmail.password == password) {
                let token = jwt.sign({ userId: checkEmail._id }, 'secret code')
                return res.status(200).send({ status: true, token: token })

            } else {
                return res.status(401).send({ status: false, message: "Please Enter Correct password Or Enter diffrent email to create account" })
            }
        }
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

