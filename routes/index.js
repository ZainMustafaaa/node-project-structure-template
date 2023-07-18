const router = require('express').Router();

const networkRouter = require('./network');

router.use('/network', networkRouter);

module.exports = router;