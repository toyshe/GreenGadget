const { findElectronics, insertElectronics } = require("../models/electronics.model")
const { checkCategoryExists, checkShopkeeperExists } = require("../utils/check-exists")

exports.getElectronics = (req, res, next) => {
    const {electronics_type, sort_by, order, shopkeeper} = req.query

    const fetchQuery = findElectronics(electronics_type, sort_by, order, shopkeeper)
    const queries = [fetchQuery]

    if(electronics_type){
        const categoriesExistenceQuery = checkCategoryExists(electronics_type)
        queries.push(categoriesExistenceQuery)
    }

    if(shopkeeper){
        const shopkeeperExistenceQuery = checkShopkeeperExists(shopkeeper)
        queries.push(shopkeeperExistenceQuery)
    }

    Promise.all(queries).then(([fetchQuery]) => {
        res.status(200).send({electronics: fetchQuery})
    }).catch((err) => {
        next(err)
    })
}

exports.postElectronics = (req, res, next) => {
    const electronic = req.body;
    insertElectronics(electronic).then((electronics) => {
        res.status(201).send({electronics})
    }).catch((err) => {
        next(err)
    })
}
