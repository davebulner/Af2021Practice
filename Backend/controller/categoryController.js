import Category from '../models/categoryModel.js'

const createCategory = async (req, res) => {
    if (req.body) {
        const category = new Category(req.body)
        category.save()
            .then(data => {
                res.status(200).send({ data: data })
            })
            .catch(error => {
                res.status(500).send({ error: error.massage })
            })
    }
}

const getAllCategories = async (req, res) => {
    await Category.find({}).populate('vehicle', 'code model type name')
        .then(data => {
            res.status(200).send({ data: data })
        })
        .catch(error => {
            res.status(500).send({ error: error.massage })
        })
}

const getVehiclesForCategory = async (req, res) => {
    if (req.params && req.params.id) {
        await Category.findById(req.params.id)
            .populate('vehicle', 'code model type name')
            .then(data => {
                res.status(200).send({ data: data.vehicle })
            })
            .catch(error => {
                res.status(500).send({ error: error.massage })
            })
    }
}

export { createCategory, getAllCategories, getVehiclesForCategory }