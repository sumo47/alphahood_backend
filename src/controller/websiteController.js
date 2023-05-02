const websiteModel = require("../model/websiteModel")
const { uploadFile } = require('../aws/aws')

module.exports.UpdateWebsite = async (req, res) => {

    let data = req.body
    let files = req.files
    if (files && files.length != 0) {
        let uploadFileUrl = await uploadFile(files[0])
        data.image = uploadFileUrl
    }

    const { button, image } = data

    if ( files && files.length != 0 && button) {
        let updatedData = await websiteModel.findOneAndUpdate({ _id: "6450d7b715a1432a75d58002" }, data, { new: true, upsert: true })
        return res.status(201).send({ status: true, message: updatedData })
    }
    if (files && files.length != 0) {
        let updatedData = await websiteModel.findOneAndUpdate({ _id: "6450d7b715a1432a75d58002" }, { image: image }, { new: true, upsert: true })
        return res.status(201).send({ status: true, message: updatedData })
    }
    if (button) {
        let updatedData = await websiteModel.findOneAndUpdate({ _id: "6450d7b715a1432a75d58002" }, { button: button }, { new: true, upsert: true })
        return res.status(201).send({ status: true, message: updatedData })
    }
}

module.exports.createButon = async (req, res) => {
    let data = req.body
    const { button } = data
    let saveData = await websiteModel.create(data)
    res.send({ status: true, message: saveData })
}

module.exports.getButton = async (req, res) => {

    let saveData = await websiteModel.findOne()
    res.send({ status: true, message: saveData })

}

