const router = require('express').Router()

router.get('/', (req,res) => {
    res.status(200).json({'nome':'caue'})
})

module.exports = router