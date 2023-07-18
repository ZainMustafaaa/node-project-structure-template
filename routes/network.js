const { ping } = require('../controllers/network/ping');

const router = require('express').Router();

router.get('/ping', ping);

module.exports = router;