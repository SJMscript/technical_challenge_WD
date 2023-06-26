const router = require('express').Router();

const allPhones = require("../../data/phones.json")

const phonesList = JSON.parse(JSON.stringify(allPhones))

//* GET "api/phones" ---> Show all phones
router.get("/", (req, res) => {
    res.json(phonesList);
})

//* GET "api/phones/:id" ---> Show phone details by id"
router.get("/:id", (req, res) => {
    const {id} = req.params;
    const phone = phonesList.find(phone => phone.id === Number(id));
    res.json(phone);
})

module.exports = router;