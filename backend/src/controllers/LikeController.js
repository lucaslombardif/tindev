const Dev = require('../models/Dev');

module.exports = {
  async store(req, res) {

    const { devId } = req.params;
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    if (!targetDev) {
      return res.status(400).json({ erro: 'O dev não existe!' });
    }

    if (targetDev.likes.includes(loggedDev._id)) {
      console.log("DEU MATCH PORA");
    }

    loggedDev.likes.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  }
};