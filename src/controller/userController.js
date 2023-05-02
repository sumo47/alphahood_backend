const userModel = require("../model/userModel")


module.exports.createUser = async (req,res)=>{
    try {
        let data = req.body
        
        const saveData = await userModel.create(data)
        res.status(201).send({ status: true, message: saveData })

    } catch (error) {
                res.status(500).send({ status: false, message: error.message })
    }

}

module.exports.getUser = async (req,res)=>{
    try {
        let usersDetails = await userModel.find()
        res.status(200).send({status:true, message:usersDetails})

    } catch (error) {
                res.status(500).send({ status: false, message: error.message })
    }
}