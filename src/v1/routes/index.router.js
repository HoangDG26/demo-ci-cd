const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})
router.get('/api/users', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok',
        metadata: [
            {
                name: "Hoang 1",
                age: 99
            },
            {
                name: "Hoang 2",
                age: 98
            },
            {
                name: "Hoang 2",
                age: 97
            },
        ]
    })
})


module.exports = router;