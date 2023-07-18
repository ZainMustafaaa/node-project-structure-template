const networkService = require("../../services/network/network");

const ping = (req, res) => {
    try {
        const data = networkService.replyPing();
        res.send({ message: data });
    } catch(e) {
        res.status(e.status || 500).send({ message: e.message });
    }
}

module.exports = {
    ping
}